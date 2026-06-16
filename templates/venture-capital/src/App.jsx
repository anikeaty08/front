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



  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.34/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();



                function updateCalculator() {
                    const mrr = parseInt(document.getElementById('mrr-slider').value);
                    const growth = parseInt(document.getElementById('growth-slider').value);
                    
                    document.getElementById('mrr-display').innerText = '$' + mrr + 'k';
                    document.getElementById('growth-display').innerText = growth + '%';
                    
                    // Simple logic for demo purposes
                    let offer = (mrr * 12 * 0.4) * (1 + (growth/100));
                    offer = Math.round(offer);
                    
                    // Format nice
                    let displayOffer = '';
                    if(offer > 1000) {
                        displayOffer = '$' + (offer/1000).toFixed(1) + 'M';
                    } else {
                        displayOffer = '$' + offer + 'k';
                    }
                    
                    document.getElementById('offer-display').innerText = displayOffer;
                }
            
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="bmaMERjX2VZDtPrh4Zwx"></div>
</div>

<nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 w-full">
<div className="max-w-7xl mx-auto flex items-center justify-between card-gradient border border-white/5 rounded-full px-6 py-3 shadow-2xl shadow-black/50">
<div className="flex items-center gap-2">
<iconify-icon className="text-orange-500 text-2xl" icon="solar:paw-linear" strokeWidth="1.5"></iconify-icon>
<span className="font-semibold text-lg tracking-tighter text-white">BADGER<span className="text-orange-500">.</span></span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-400">
<a className="hover:text-white transition-colors duration-300" href="#">Manifesto</a>
<a className="hover:text-white transition-colors duration-300" href="#">Portfolio</a>
<a className="hover:text-white transition-colors duration-300" href="#">Intelligence</a>
<a className="hover:text-white transition-colors duration-300" href="#">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-sm font-medium text-stone-400 hover:text-white transition" href="#">Login</a>
<a className="group relative overflow-hidden rounded-full bg-stone-100 px-5 py-2 text-sm font-semibold text-stone-950 transition-all hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]" href="#">
<span className="relative z-10 flex items-center gap-1">
                        Apply Now
                        <iconify-icon className="transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</span>
</a>
</div>
</div>
</nav>

<main className="relative pt-40 pb-20 px-6 overflow-hidden">

<div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[60rem] h-[30rem] bg-orange-600/10 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-5xl mx-auto text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/20 bg-orange-500/5 text-orange-400 text-xs font-medium tracking-wide uppercase mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
</span>
                Series B Deployments Active
            </div>
<h1 className="md:text-7xl lg:text-8xl leading-[0.95] text-glow text-5xl font-medium text-white tracking-tighter mb-8" style={{}}>Funding for the <br/> <span className="text-transparent bg-clip-text bg-gradient-to-b from-stone-200 via-stone-400 to-stone-600">relentless.</span></h1>
<p className="text-lg md:text-xl text-stone-400 max-w-2xl mx-auto font-light leading-relaxed mb-12">
                Traditional VC moves slow. Badgers dig deep. We provide non-dilutive capital and strategic equity to founders who refuse to stop.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-8 py-4 bg-orange-600 hover:bg-orange-500 text-white font-semibold rounded-lg transition-all shadow-[0_0_40px_-10px_rgba(234,88,12,0.5)] flex items-center justify-center gap-2 group">
                    Start Your Round
                    <iconify-icon className="text-xl transition-transform group-hover:scale-110" icon="solar:bolt-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="w-full sm:w-auto px-8 py-4 bg-stone-900 border border-stone-800 hover:border-stone-700 text-stone-300 font-medium rounded-lg transition-colors flex items-center justify-center gap-2">
<iconify-icon className="text-xl" icon="solar:play-circle-linear" strokeWidth="1.5"></iconify-icon>
                    Watch Manifesto
                </button>
</div>
</div>

<div className="mt-24 max-w-6xl mx-auto relative group perspective-1000">
<div className="absolute -inset-1 bg-gradient-to-r from-orange-500 via-purple-500 to-orange-500 rounded-2xl opacity-20 blur transition duration-1000 group-hover:opacity-40 animate-tilt"></div>
<div className="relative rounded-2xl bg-stone-950 border border-white/10 p-2 shadow-2xl transform rotate-x-12 transition-transform duration-700 hover:rotate-0">
<div className="rounded-xl bg-stone-900/50 overflow-hidden border border-white/5">

<div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-stone-900/80">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="flex gap-4 text-xs font-mono text-stone-500">
<span>DEPLOYMENT_VELOCITY.JS</span>
<span className="text-green-500">CONNECTED</span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/5 h-64 md:h-96">
<div className="p-8 flex flex-col justify-between">
<div className="space-y-1">
<p className="text-xs font-medium text-stone-500 uppercase tracking-widest">Available Runway</p>
<p className="text-4xl font-medium text-white tracking-tight">$2,450,000</p>
</div>

<div className="h-24 w-full flex items-end gap-1">
<div className="w-full bg-stone-800 rounded-t-sm h-[30%] hover:bg-orange-500/80 transition-colors"></div>
<div className="w-full bg-stone-800 rounded-t-sm h-[50%] hover:bg-orange-500/80 transition-colors"></div>
<div className="w-full bg-stone-800 rounded-t-sm h-[40%] hover:bg-orange-500/80 transition-colors"></div>
<div className="w-full bg-stone-800 rounded-t-sm h-[70%] hover:bg-orange-500/80 transition-colors"></div>
<div className="w-full bg-stone-800 rounded-t-sm h-[60%] hover:bg-orange-500/80 transition-colors"></div>
<div className="w-full bg-stone-800 rounded-t-sm h-[85%] hover:bg-orange-500/80 transition-colors"></div>
<div className="w-full bg-orange-500 rounded-t-sm h-[100%] shadow-[0_0_15px_rgba(249,115,22,0.5)]"></div>
</div>
</div>
<div className="p-8 col-span-2 relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.1),transparent_50%)]"></div>
<div className="flex items-center justify-between mb-8">
<h3 className="text-sm font-medium text-white">Live Term Sheet Generation</h3>
<iconify-icon className="text-stone-500 animate-spin-slow" icon="solar:refresh-linear"></iconify-icon>
</div>
<div className="space-y-4">
<div className="flex items-center justify-between p-4 rounded-lg bg-stone-800/30 border border-white/5">
<div className="flex items-center gap-3">
<div className="p-2 bg-stone-800 rounded-md text-orange-500">
<iconify-icon icon="solar:document-add-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<p className="text-sm text-stone-200">Seed Round - Tranche A</p>
<p className="text-xs text-stone-500">Automated valuation via Stripe API</p>
</div>
</div>
<span className="text-xs font-mono text-orange-400 bg-orange-500/10 px-2 py-1 rounded">PROCESSING</span>
</div>
<div className="flex items-center justify-between p-4 rounded-lg bg-stone-800/30 border border-white/5 opacity-60">
<div className="flex items-center gap-3">
<div className="p-2 bg-stone-800 rounded-md text-stone-500">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<p className="text-sm text-stone-200">Legal Compliance</p>
<p className="text-xs text-stone-500">Delaware C-Corp Verification</p>
</div>
</div>
<iconify-icon className="text-green-500" icon="solar:check-circle-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="py-12 border-y border-white/5 bg-stone-950/50">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs font-medium text-stone-600 mb-8 tracking-widest uppercase">Powering the next generation of giants</p>
<div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">

<div className="h-8 flex items-center gap-2 font-bold text-xl text-white tracking-tighter"><div className="w-6 h-6 bg-white rounded-full"></div> ACME INC.</div>
<div className="h-8 flex items-center gap-2 font-bold text-xl text-white tracking-tighter"><div className="w-6 h-6 border-2 border-white transform rotate-45"></div> KINETIC</div>
<div className="h-8 flex items-center gap-2 font-bold text-xl text-white tracking-tighter"><div className="w-6 h-6 bg-white rounded-tr-xl rounded-bl-xl"></div> PULSAR</div>
<div className="h-8 flex items-center gap-2 font-bold text-xl text-white tracking-tighter"><div className="w-6 h-6 border-2 border-white rounded-sm"></div> NEBULA</div>
</div>
</div>
</section>

<section className="py-32 px-6">
<div className="max-w-7xl mx-auto">
<div className="mb-20">
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-4">Capital without the <br/> <span className="text-stone-500">bureaucracy.</span></h2>
<p className="text-stone-400 max-w-xl font-light">We replaced pitch decks with API integrations. Connect your accounts, get an offer in 24 hours.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative p-8 rounded-3xl bg-stone-900/40 border border-white/5 hover:bg-stone-900/60 transition duration-500 overflow-hidden">
<div className="absolute top-0 right-0 p-32 bg-orange-500/10 blur-[80px] rounded-full group-hover:bg-orange-500/20 transition duration-500"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-xl bg-stone-800 flex items-center justify-center text-orange-500 mb-6 border border-white/5 group-hover:border-orange-500/30 transition">
<iconify-icon className="text-2xl" icon="solar:graph-new-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-2">Revenue-Based</h3>
<p className="text-sm text-stone-400 leading-relaxed">Pay us back as you grow. A small percentage of revenue until the cap is reached. No equity lost.</p>
</div>
</div>

<div className="group relative p-8 rounded-3xl bg-stone-900/40 border border-white/5 hover:bg-stone-900/60 transition duration-500 overflow-hidden">
<div className="absolute top-0 right-0 p-32 bg-stone-700/10 blur-[80px] rounded-full group-hover:bg-stone-600/20 transition duration-500"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-xl bg-stone-800 flex items-center justify-center text-white mb-6 border border-white/5 group-hover:border-white/30 transition">
<iconify-icon className="text-2xl" icon="solar:lock-unlocked-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-2">Founder Friendly</h3>
<p className="text-sm text-stone-400 leading-relaxed">No board seats. No personal guarantees. Just the capital you need to execute your vision.</p>
</div>
</div>

<div className="group relative p-8 rounded-3xl bg-stone-900/40 border border-white/5 hover:bg-stone-900/60 transition duration-500 overflow-hidden">
<div className="absolute top-0 right-0 p-32 bg-indigo-500/10 blur-[80px] rounded-full group-hover:bg-indigo-500/20 transition duration-500"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-xl bg-stone-800 flex items-center justify-center text-indigo-400 mb-6 border border-white/5 group-hover:border-indigo-400/30 transition">
<iconify-icon className="text-2xl" icon="solar:global-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-2">Global Routing</h3>
<p className="text-sm text-stone-400 leading-relaxed">Accept funding in USD, EUR, or GBP. We handle the cross-border complexity so you don't have to.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-900/30 border-y border-white/5 relative overflow-hidden">
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight">Calculate your capacity</h2>
<p className="text-stone-400 mt-2 font-light">See how much non-dilutive capital you qualify for instantly.</p>
</div>
<div className="bg-stone-950 border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl">
<div className="flex flex-col md:flex-row gap-12 items-center">
<div className="flex-1 w-full space-y-8">
<div>
<label className="flex justify-between text-sm font-medium text-stone-400 mb-4">
<span>Monthly Recurring Revenue</span>
<span className="text-white font-mono" id="mrr-display">$50k</span>
</label>
<input className="w-full" id="mrr-slider" max="500" min="10" oninput="updateCalculator()" type="range" value="50"/>
</div>
<div>
<label className="flex justify-between text-sm font-medium text-stone-400 mb-4">
<span>Growth Rate (YoY)</span>
<span className="text-white font-mono" id="growth-display">25%</span>
</label>
<input className="w-full" id="growth-slider" max="200" min="0" oninput="updateCalculator()" type="range" value="25"/>
</div>
</div>
<div className="w-full md:w-1/3 bg-stone-900 rounded-xl p-6 border border-white/5 text-center relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
<p className="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">Estimated Offer</p>
<h3 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-2" id="offer-display">$300k</h3>
<p className="text-xs text-orange-500 font-medium">Available in 24hrs</p>
</div>
</div>
</div>

</div>
</section>

<section className="py-32 px-6">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
<div className="flex flex-col justify-center">
<iconify-icon className="text-4xl text-stone-600 mb-8" icon="solar:quote-up-linear"></iconify-icon>
<h3 className="text-2xl md:text-4xl font-light text-white leading-tight mb-8">
                    "BADGER understood our business model when traditional banks turned us away. The capital hit our account the same day we signed."
                </h3>
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-stone-800 rounded-full flex items-center justify-center font-bold text-stone-400">ES</div>
<div>
<p className="text-white font-medium">Elena S.</p>
<p className="text-sm text-stone-500">CEO, HyperScale Data</p>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="bg-stone-900/50 p-6 rounded-2xl border border-white/5 flex flex-col items-center justify-center text-center gap-2 hover:border-orange-500/30 transition">
<p className="text-3xl font-semibold text-white">$450M+</p>
<p className="text-xs text-stone-500 uppercase tracking-wider">Deployed</p>
</div>
<div className="bg-stone-900/50 p-6 rounded-2xl border border-white/5 flex flex-col items-center justify-center text-center gap-2 hover:border-orange-500/30 transition">
<p className="text-3xl font-semibold text-white">48hr</p>
<p className="text-xs text-stone-500 uppercase tracking-wider">Turnaround</p>
</div>
<div className="col-span-2 bg-stone-900/50 p-6 rounded-2xl border border-white/5 flex items-center justify-between hover:border-orange-500/30 transition group cursor-pointer">
<div className="flex items-center gap-4">
<div className="p-3 rounded-full bg-green-500/10 text-green-500">
<iconify-icon className="text-xl" icon="solar:check-read-linear"></iconify-icon>
</div>
<div>
<p className="text-white font-medium">98% Acceptance</p>
<p className="text-xs text-stone-500">For qualified SaaS startups</p>
</div>
</div>
<iconify-icon className="text-stone-500 group-hover:translate-x-1 transition" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 border-t border-white/5 relative">
<div className="absolute inset-0 bg-gradient-to-t from-orange-900/20 to-transparent pointer-events-none"></div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<h2 className="text-5xl md:text-7xl font-semibold text-white tracking-tighter mb-8">Ready to dig?</h2>
<div className="flex flex-col items-center gap-6">
<a className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-semibold text-lg transition-transform hover:scale-105" href="#">
                    Get Funded
                    <iconify-icon className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" icon="solar:arrow-right-up-linear" strokeWidth="2"></iconify-icon>
</a>
<p className="text-sm text-stone-500">No credit card required. Non-binding application.</p>
</div>
</div>
</section>
<footer className="py-12 px-6 border-t border-white/5 bg-stone-950">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
<div className="flex items-center gap-2">
<iconify-icon className="text-stone-600 text-xl" icon="solar:paw-linear"></iconify-icon>
<span className="font-bold text-stone-300 tracking-tighter">BADGER</span>
</div>
<div className="flex gap-8 text-sm text-stone-500">
<a className="hover:text-white transition" href="#">Privacy</a>
<a className="hover:text-white transition" href="#">Terms</a>
<a className="hover:text-white transition" href="#">Twitter</a>
<a className="hover:text-white transition" href="#">LinkedIn</a>
</div>
<div className="text-xs text-stone-600">
                © 2023 BADGER Financial Inc.
            </div>
</div>
</footer>

    </>
  );
}
