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
      

<div className="fixed inset-0 mesh-bg -z-10 pointer-events-none"></div>
<div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-orange-500/5 blur-[120px] rounded-full -z-10 pointer-events-none"></div>

<nav className="fixed w-full z-50 top-0 border-b border-white/5 bg-[#030305]/70 backdrop-blur-xl transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-white/20 transition-colors">

<iconify-icon className="text-white text-lg" icon="solar:crown-star-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-white font-medium tracking-tighter text-lg">SIMBA</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-white transition-colors" href="#assets">Assets</a>
<a className="hover:text-white transition-colors" href="#security">Security</a>
<a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
<a className="hover:text-white transition-colors" href="#card">Card</a>
</div>
<div className="flex items-center gap-4">
<a className="text-sm font-medium hover:text-white transition-colors hidden sm:block" href="#">Log in</a>
<a className="text-sm font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-slate-200 transition-colors tracking-tight" href="#">Open Account</a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-16 md:pt-48 md:pb-20 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
<div className="max-w-2xl relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/20 bg-orange-500/10 text-xs font-medium text-orange-300 mb-6 hover:bg-orange-500/15 transition-colors cursor-default">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
</span>
                    Now earning 5.2% APY on Stablecoins
                </div>
<h1 className="text-5xl md:text-7xl font-medium text-white tracking-tight leading-[1.1] mb-6">
                    The simple way to use <br/>
<span className="shine-text bg-clip-text text-transparent">Bitcoin &amp; Cash.</span>
</h1>
<p className="text-lg text-slate-400 mb-8 max-w-lg leading-relaxed">
                    Stop juggling apps. Manage your traditional dollars and digital assets side-by-side with <strong>Simba</strong>. 
                    <span className="text-white/80">You hold the keys, you earn the yield.</span>
</p>

<div className="flex flex-col sm:flex-row gap-3 max-w-md">
<div className="relative flex-grow">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<iconify-icon className="text-slate-500" icon="solar:letter-linear"></iconify-icon>
</div>
<input className="w-full h-12 pl-10 pr-4 bg-white/5 border border-white/10 rounded-full text-white placeholder-slate-500 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 transition-all text-sm" placeholder="Enter your email" type="email"/>
</div>
<button className="h-12 px-6 bg-white text-black rounded-full font-medium text-sm hover:bg-slate-200 transition-all flex items-center justify-center gap-2 group whitespace-nowrap">
                        Get Early Access
                        <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
<p className="text-xs text-slate-600 mt-3 ml-2">No spam. Unsubscribe anytime. Join 10,000+ others.</p>
<div className="mt-12 flex items-center gap-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center gap-2 text-white font-medium tracking-tight">
<iconify-icon className="text-xl" icon="solar:shield-check-linear"></iconify-icon> NON-CUSTODIAL
                    </div>
<div className="flex items-center gap-2 text-white font-medium tracking-tight">
<iconify-icon className="text-xl" icon="solar:dollar-minimalistic-linear"></iconify-icon> 5.2% YIELD
                    </div>
<div className="flex items-center gap-2 text-white font-medium tracking-tight">
<iconify-icon className="text-xl" icon="solar:card-linear"></iconify-icon> VISA
                    </div>
</div>
</div>

<div className="relative lg:h-[600px] flex items-center justify-center lg:justify-end z-10">

<div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 to-blue-500/10 blur-[80px] rounded-full"></div>

<div className="relative w-full max-w-md aspect-[1.586/1] rounded-2xl bg-[#111] border border-white/10 shadow-2xl animate-float overflow-hidden group hover:border-white/20 transition-colors duration-500">

<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(#444 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
<div className="absolute -top-24 -right-24 w-64 h-64 bg-orange-500/10 blur-[60px] rounded-full"></div>
<div className="relative h-full p-8 flex flex-col justify-between z-10">
<div className="flex justify-between items-start">
<div className="flex items-center gap-2">
<iconify-icon className="text-white text-2xl" icon="solar:crown-star-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-white font-medium tracking-tighter">SIMBA</span>
</div>
<div className="flex items-center gap-1.5 px-2 py-1 rounded bg-white/5 border border-white/10">
<iconify-icon className="text-emerald-500 text-xs" icon="solar:lock-keyhole-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-[10px] text-emerald-500 font-bold uppercase tracking-wide">Self-Custody</span>
</div>
</div>
<div className="space-y-6">
<div className="flex items-center gap-3">
<div className="h-8 w-12 rounded bg-white/10 border border-white/5 flex items-center justify-center text-white">
<span className="font-bold text-xs tracking-wider">BTC</span>
</div>
<div className="h-8 w-1 px-2 rounded-full bg-white/10"></div>
<div className="h-8 w-12 rounded bg-white/10 border border-white/5 flex items-center justify-center text-white">
<span className="font-bold text-xs tracking-wider">USD</span>
</div>
</div>
<div>
<div className="flex justify-between items-baseline mb-1">
<p className="text-slate-400 text-xs font-mono">TOTAL LIQUIDITY</p>
<div className="flex items-center gap-1 text-emerald-400 text-xs font-medium">
<iconify-icon icon="solar:graph-up-linear"></iconify-icon>
                                        +5.2% APY Active
                                    </div>
</div>
<div className="flex items-baseline gap-2">
<span className="text-3xl text-white font-medium tracking-tight">2.45 BTC</span>
</div>
<p className="text-slate-500 text-sm mt-1">≈ $158,291.42 USD</p>
</div>
<div className="flex justify-between items-end">
<div className="flex gap-4">
<p className="text-slate-500 font-mono text-xs tracking-widest">**** 4829</p>
<p className="text-slate-500 font-mono text-xs">08/26</p>
</div>
<div className="text-white/80 text-sm font-medium tracking-widest">DEBIT</div>
</div>
</div>
</div>
</div>

<div className="absolute -bottom-6 left-0 md:-left-12 bg-[#0a0a0a]/90 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-2xl flex items-center gap-4 animate-float hover:border-white/20 transition-colors cursor-pointer" style={{animationDelay: '1s'}}>
<div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500">
<iconify-icon className="text-xl" icon="solar:graph-new-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<p className="text-white text-sm font-medium">Staking Reward</p>
<p className="text-slate-400 text-xs">Paid Daily</p>
</div>
<div className="pl-4 text-emerald-400 font-medium text-sm">+ 12.45 USDC</div>
</div>
</div>
</div>
</section>

<div className="w-full border-y border-white/5 bg-white/[0.02]">
<div className="max-w-7xl mx-auto py-4 overflow-hidden relative">
<div className="flex gap-16 whitespace-nowrap ticker-track w-fit">

<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-orange-500/20 text-orange-500 flex items-center justify-center text-xs">
<iconify-icon icon="solar:bitcoin-linear"></iconify-icon>
</div>
<div>
<span className="text-xs font-bold text-slate-500 tracking-wider">BITCOIN</span>
<span className="text-sm font-medium text-white ml-2">$64,231.40</span>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-purple-500/20 text-purple-500 flex items-center justify-center text-xs">
<iconify-icon icon="solar:lock-keyhole-linear"></iconify-icon>
</div>
<div>
<span className="text-xs font-bold text-slate-500 tracking-wider">PRIVATE KEYS</span>
<span className="text-sm font-medium text-emerald-400 ml-2">Self-Custody</span>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-500 flex items-center justify-center text-xs">
<iconify-icon icon="solar:dollar-minimalistic-linear"></iconify-icon>
</div>
<div>
<span className="text-xs font-bold text-slate-500 tracking-wider">USDC YIELD</span>
<span className="text-sm font-medium text-emerald-400 ml-2">5.2% APY</span>
</div>
</div>

<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-orange-500/20 text-orange-500 flex items-center justify-center text-xs">
<iconify-icon icon="solar:bitcoin-linear"></iconify-icon>
</div>
<div>
<span className="text-xs font-bold text-slate-500 tracking-wider">BITCOIN</span>
<span className="text-sm font-medium text-white ml-2">$64,231.40</span>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-purple-500/20 text-purple-500 flex items-center justify-center text-xs">
<iconify-icon icon="solar:lock-keyhole-linear"></iconify-icon>
</div>
<div>
<span className="text-xs font-bold text-slate-500 tracking-wider">PRIVATE KEYS</span>
<span className="text-sm font-medium text-emerald-400 ml-2">Self-Custody</span>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-500 flex items-center justify-center text-xs">
<iconify-icon icon="solar:dollar-minimalistic-linear"></iconify-icon>
</div>
<div>
<span className="text-xs font-bold text-slate-500 tracking-wider">USDC YIELD</span>
<span className="text-sm font-medium text-emerald-400 ml-2">5.2% APY</span>
</div>
</div>
</div>
</div>
</div>

<div className="w-full border-b border-white/5 bg-[#030305]">
<div className="max-w-7xl mx-auto py-8 px-6">
<p className="text-center text-xs font-medium text-slate-600 mb-6 uppercase tracking-widest">Backed by industry leaders</p>
<div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center gap-2">
<div className="w-5 h-5 bg-white rounded-sm"></div>
<span className="text-lg font-bold text-white tracking-tight">Ventures</span>
</div>
<div className="flex items-center gap-2">
<div className="w-5 h-5 border-2 border-white rounded-full"></div>
<span className="text-lg font-semibold text-white tracking-tight">Capitol</span>
</div>
<div className="flex items-center gap-2">
<div className="w-5 h-5 bg-white rotate-45"></div>
<span className="text-lg font-bold text-white tracking-tight italic">BlockScale</span>
</div>
<div className="flex items-center gap-2">
<div className="w-2 h-5 bg-white"></div>
<div className="w-2 h-5 bg-white/50"></div>
<span className="text-lg font-light text-white tracking-wider">FINTECH</span>
</div>
</div>
</div>
</div>

<section className="py-24 relative" id="assets">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">A unified home for your assets.</h2>
<p className="text-slate-400">Manage digital and traditional currency side-by-side with institutional-grade security.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-8 relative overflow-hidden group hover:border-white/20 hover:bg-white/[0.07] transition-all duration-300 hover:scale-[1.01]">
<div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 blur-[80px] rounded-full -z-10 group-hover:bg-orange-500/20 transition-colors"></div>
<div className="flex justify-between items-start mb-12">
<div className="w-10 h-10 rounded-lg bg-orange-500/20 text-orange-400 flex items-center justify-center border border-orange-500/20 group-hover:scale-110 transition-transform">
<iconify-icon className="text-xl" icon="solar:bolt-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<h3 className="text-xl font-medium text-white mb-2">Bitcoin &amp; Layer 2</h3>
<p className="text-slate-400 text-sm leading-relaxed max-w-sm">Native Bitcoin custody with Lightning Network integration. You control the private keys, we provide the interface.</p>

<div className="absolute bottom-0 right-0 w-2/3 h-32 opacity-50">
<svg className="w-full h-full text-orange-500 fill-current/10 stroke-current" preserveaspectratio="none" viewbox="0 0 200 100">
<path d="M0,80 Q20,70 40,75 T80,50 T120,40 T160,20 L200,10 V100 H0 Z" fill="none" strokeWidth="2"></path>
<path className="fill-current" d="M0,80 Q20,70 40,75 T80,50 T120,40 T160,20 L200,10 V100 H0 Z" strokeWidth="0"></path>
</svg>
</div>
</div>

<div className="md:row-span-2 rounded-2xl border border-white/10 bg-white/5 p-8 relative overflow-hidden group hover:border-white/20 hover:bg-white/[0.07] transition-all duration-300 hover:scale-[1.01] flex flex-col">
<div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-emerald-500/10 to-transparent -z-10"></div>
<div className="w-10 h-10 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center border border-blue-500/20 mb-auto group-hover:scale-110 transition-transform">
<iconify-icon className="text-xl" icon="solar:dollar-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="mt-8">
<h3 className="text-xl font-medium text-white mb-2">Smart Yield</h3>
<p className="text-slate-400 text-sm leading-relaxed mb-6">Hold USDC and USDT with confidence. Earn institutional-grade yield simply by holding assets in your non-custodial wallet.</p>

<div className="space-y-3">
<div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/5 group-hover:bg-white/10 transition-colors">
<div className="flex items-center gap-2">
<iconify-icon className="text-emerald-400" icon="solar:chart-2-linear"></iconify-icon>
<span className="text-xs text-white">Current Rate</span>
</div>
<span className="text-xs text-emerald-400 font-bold bg-emerald-500/10 px-2 py-1 rounded">5.2% APY</span>
</div>
<div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/5 group-hover:bg-white/10 transition-colors">
<div className="flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:clock-circle-linear"></iconify-icon>
<span className="text-xs text-white">Payouts</span>
</div>
<span className="text-xs text-slate-400">Daily</span>
</div>
</div>
</div>
</div>

<div className="rounded-2xl border border-white/10 bg-white/5 p-8 relative overflow-hidden group hover:border-white/20 hover:bg-white/[0.07] transition-all duration-300 hover:scale-[1.01]">
<div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/20 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-xl" icon="solar:banknote-2-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Fiat Rails</h3>
<p className="text-slate-400 text-sm leading-relaxed">Direct deposit USD, EUR, and GBP. 1:1 conversion to crypto.</p>
</div>

<div className="rounded-2xl border border-white/10 bg-white/5 p-8 relative overflow-hidden group hover:border-white/20 hover:bg-white/[0.07] transition-all duration-300 hover:scale-[1.01]">
<div className="w-10 h-10 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center border border-indigo-500/20 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-xl" icon="solar:key-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Your Keys</h3>
<p className="text-slate-400 text-sm leading-relaxed">Export your private keys or seed phrase at any time.</p>
</div>
</div>
</div>
</section>

<section className="py-12 relative" id="security">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="rounded-2xl border border-white/10 bg-[#0A0A0B] overflow-hidden relative group">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent opacity-50"></div>
<div className="p-10 relative z-10 h-full flex flex-col">
<div className="mb-auto">
<div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-6">
<iconify-icon className="text-2xl" icon="solar:shield-keyhole-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-2xl font-medium text-white mb-3">Not your keys, not your coins.</h3>
<p className="text-slate-400 leading-relaxed mb-8">Simba is non-custodial by default. We generate a multisig vault where you hold the primary key. We can never freeze your funds.</p>
</div>

<div className="bg-black/50 border border-white/5 rounded-lg p-4 font-mono text-xs text-slate-500 backdrop-blur-sm">
<div className="flex justify-between items-center mb-2 border-b border-white/5 pb-2">
<span className="text-slate-300">master_seed.txt</span>
<iconify-icon className="hover:text-white cursor-pointer" icon="solar:download-linear"></iconify-icon>
</div>
<div className="opacity-50 select-none blur-[1px]">
                                humble crazy horse battery staple correct horse battery staple
                                correct horse battery staple correct horse battery staple
                            </div>
<div className="mt-3 flex gap-2">
<button className="px-3 py-1.5 bg-purple-500/20 text-purple-300 rounded text-[10px] uppercase font-bold border border-purple-500/20 hover:bg-purple-500/30 transition-colors">Export Keys</button>
<button className="px-3 py-1.5 bg-white/5 text-slate-300 rounded text-[10px] uppercase font-bold border border-white/10 hover:bg-white/10 transition-colors">Sign Tx</button>
</div>
</div>
</div>
</div>

<div className="rounded-2xl border border-white/10 bg-[#0A0A0B] overflow-hidden relative group">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-900/20 via-transparent to-transparent opacity-50"></div>
<div className="p-10 relative z-10 h-full flex flex-col">
<div className="mb-auto">
<div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6">
<iconify-icon className="text-2xl" icon="solar:leaf-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-2xl font-medium text-white mb-3">Make your money multiply.</h3>
<p className="text-slate-400 leading-relaxed mb-8">Stake your idle stablecoins directly on-chain. No lock-up periods, no hidden fees. Just pure yield generated from over-collateralized lending markets.</p>
</div>

<div className="bg-black/50 border border-white/5 rounded-lg p-6 backdrop-blur-sm">
<div className="flex justify-between items-end mb-4">
<div>
<p className="text-xs text-slate-500 uppercase tracking-widest mb-1">Current Balance</p>
<p className="text-2xl text-white font-medium tracking-tight">$10,420.50</p>
</div>
<div className="text-right">
<p className="text-xs text-emerald-500 font-bold bg-emerald-500/10 px-2 py-1 rounded inline-flex items-center gap-1">
<iconify-icon icon="solar:graph-up-linear"></iconify-icon>
                                        +5.2% APY
                                    </p>
</div>
</div>
<div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
<div className="h-full w-2/3 bg-emerald-500 rounded-full relative">
<div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
</div>
</div>
<div className="mt-4 flex justify-between text-xs text-slate-500 font-mono">
<span>Lifetime Earnings</span>
<span className="text-emerald-400">+$842.20 USDC</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0a0a0a] border-y border-white/5 relative overflow-hidden" id="card">
<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-white/5 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
<div className="order-2 md:order-1">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-white mb-6">
<iconify-icon icon="solar:star-fall-linear"></iconify-icon>
                    Exclusive
                </div>
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-6">Engineered for<br/>excellence.</h2>
<p className="text-slate-400 text-lg mb-8 leading-relaxed">The Simba Metal Card allows you to spend your Bitcoin and Stablecoin balance directly. No top-ups, no pre-loading. Pure liquidity.</p>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-emerald-500 text-lg" icon="solar:check-circle-linear"></iconify-icon>
                        18g Stainless Steel Construction
                    </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-emerald-500 text-lg" icon="solar:check-circle-linear"></iconify-icon>
                        Zero foreign transaction fees
                    </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-emerald-500 text-lg" icon="solar:check-circle-linear"></iconify-icon>
                        2% Rewards in Bitcoin on every purchase
                    </li>
</ul>
<button className="text-white border-b border-white pb-0.5 hover:text-slate-300 hover:border-slate-300 transition-colors">Join waitlist →</button>
</div>

<div className="order-1 md:order-2 relative perspective-1000">
<div className="relative w-full aspect-[1.586/1] rounded-xl metal-card-bg shadow-2xl transform rotate-y-12 rotate-x-6 hover:rotate-0 transition-transform duration-700 p-8 flex flex-col justify-between group cursor-default">
<div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
<div className="flex justify-between items-start z-10">
<iconify-icon className="text-yellow-500/90 text-4xl rotate-90 drop-shadow-lg" icon="solar:chip-linear" strokeWidth="1"></iconify-icon>
<iconify-icon className="text-white/40 text-2xl rotate-90 engraved-text" icon="solar:wifi-router-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="z-10">
<div className="text-white/90 text-xl font-medium tracking-widest mb-4 engraved-text font-mono">**** **** **** 4829</div>
<div className="flex justify-between items-end">
<div className="text-xs text-white/70 font-mono tracking-wider engraved-text">ALEXANDER SMITH</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-white text-lg drop-shadow-md" icon="solar:crown-star-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-white font-medium tracking-tighter text-sm engraved-text">SIMBA</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#050507]">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
<div className="flex-1 space-y-8">
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight">Your finances, <br/> <span className="text-slate-500">beautifully organized.</span></h2>
<div className="space-y-6">
<div className="flex gap-4 group">
<div className="mt-1 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-orange-400 text-xl" icon="solar:bolt-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium mb-1">Lightning Speed</h4>
<p className="text-slate-400 text-sm">Send Bitcoin instantly over Layer 2 networks for fractions of a penny.</p>
</div>
</div>
<div className="flex gap-4 group">
<div className="mt-1 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-purple-400 text-xl" icon="solar:lock-password-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium mb-1">Total Control</h4>
<p className="text-slate-400 text-sm">Your keys are encrypted locally on your device. We can't touch them.</p>
</div>
</div>
<div className="flex gap-4 group">
<div className="mt-1 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-emerald-400 text-xl" icon="solar:shield-keyhole-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium mb-1">Fully Regulated</h4>
<p className="text-slate-400 text-sm">Compliant fiat ramps and secure custody for peace of mind.</p>
</div>
</div>
</div>
</div>
<div className="flex-1 w-full relative">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-gradient-to-r from-orange-500/10 to-blue-500/10 rounded-full blur-[60px]"></div>

<div className="relative bg-[#0f0f11] border border-white/10 rounded-2xl p-6 shadow-2xl max-w-sm mx-auto hover:border-white/20 transition-colors duration-500">
<div className="flex items-center justify-between mb-8">
<div className="text-sm font-medium text-white">Recent Activity</div>
<iconify-icon className="text-slate-500 hover:text-white cursor-pointer" icon="solar:menu-dots-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="space-y-4">

<div className="flex items-center justify-between group cursor-pointer p-2 -mx-2 hover:bg-white/5 rounded-lg transition-colors">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500/20 transition-colors">
<iconify-icon icon="solar:graph-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<div className="text-sm text-white font-medium">Staking Reward</div>
<div className="text-xs text-slate-500">Yield Payout</div>
</div>
</div>
<div className="text-sm text-emerald-400 font-medium">+ 12.45 USDC</div>
</div>

<div className="flex items-center justify-between group cursor-pointer p-2 -mx-2 hover:bg-white/5 rounded-lg transition-colors">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500 group-hover:bg-orange-500/20 transition-colors">
<iconify-icon icon="solar:bolt-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<div className="text-sm text-white font-medium">Lightning Network</div>
<div className="text-xs text-slate-500">Layer 2 Payment</div>
</div>
</div>
<div className="text-sm text-white font-medium">- 0.0004 BTC</div>
</div>

<div className="flex items-center justify-between group cursor-pointer p-2 -mx-2 hover:bg-white/5 rounded-lg transition-colors">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-500/20 transition-colors">
<iconify-icon icon="solar:dollar-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<div className="text-sm text-white font-medium">USDC Transfer</div>
<div className="text-xs text-slate-500">Sent to Wallet</div>
</div>
</div>
<div className="text-sm text-white font-medium">- 500.00 USDC</div>
</div>

<div className="flex items-center justify-between group cursor-pointer p-2 -mx-2 hover:bg-white/5 rounded-lg transition-colors">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-white group-hover:bg-white/10 transition-colors">
<iconify-icon icon="solar:cup-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<div className="text-sm text-white font-medium">Starbucks</div>
<div className="text-xs text-slate-500">Visa Debit</div>
</div>
</div>
<div className="text-sm text-white font-medium">-$6.50</div>
</div>
</div>
<div className="mt-6 pt-4 border-t border-white/5">
<button className="w-full py-2 bg-white/5 hover:bg-white/10 text-xs text-white rounded-lg transition-colors">View all transactions</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-[#030305]" id="pricing">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Zero hidden fees.</h2>
<p className="text-slate-400">We make money on yield, not by charging you for your own money.</p>
</div>
<div className="overflow-hidden rounded-xl border border-white/10 bg-white/5">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-white/10 bg-white/5 text-sm">
<th className="p-6 font-medium text-slate-400 w-1/3">Features</th>
<th className="p-6 font-medium text-slate-500 w-1/3">Traditional Banks</th>
<th className="p-6 font-medium text-white w-1/3 bg-white/5">Simba</th>
</tr>
</thead>
<tbody className="text-sm">
<tr className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
<td className="p-6 text-slate-300">Monthly Maintenance</td>
<td className="p-6 text-slate-500">$12 - $25 / mo</td>
<td className="p-6 text-emerald-400 font-medium bg-white/5">$0</td>
</tr>
<tr className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
<td className="p-6 text-slate-300">Foreign Transactions</td>
<td className="p-6 text-slate-500">3% + Spread</td>
<td className="p-6 text-emerald-400 font-medium bg-white/5">0%</td>
</tr>
<tr className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
<td className="p-6 text-slate-300">Wire Transfers</td>
<td className="p-6 text-slate-500">$15 - $45</td>
<td className="p-6 text-emerald-400 font-medium bg-white/5">Free</td>
</tr>
<tr className="hover:bg-white/[0.02] transition-colors">
<td className="p-6 text-slate-300">Minimum Balance</td>
<td className="p-6 text-slate-500">$1,500</td>
<td className="p-6 text-emerald-400 font-medium bg-white/5">None</td>
</tr>
</tbody>
</table>
</div>
<p className="text-center text-xs text-slate-600 mt-6">Simba earns a small spread on yield generated by the lending protocol. You keep 90% of the upside.</p>
</div>
</section>

<footer className="border-t border-white/10 bg-[#020203] pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<a className="flex items-center gap-2 mb-4" href="#">
<div className="w-6 h-6 rounded bg-white/10 flex items-center justify-center">
<iconify-icon className="text-white text-xs" icon="solar:crown-star-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-white font-medium tracking-tighter">SIMBA</span>
</a>
<p className="text-xs text-slate-500">© 2023 Simba Technologies Inc.<br/>All rights reserved.</p>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Assets</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-white transition-colors" href="#">Bitcoin</a></li>
<li><a className="hover:text-white transition-colors" href="#">Lightning Network</a></li>
<li><a className="hover:text-white transition-colors" href="#">Staking Rewards</a></li>
<li><a className="hover:text-white transition-colors" href="#">Fiat Accounts</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Company</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-white transition-colors" href="#">About</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Legal</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-white transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms</a></li>
<li><a className="hover:text-white transition-colors" href="#">Self-Custody Policy</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-600 text-center md:text-left">Simba is a financial technology company, not a bank. Banking services provided by partner banks. Yield is generated via decentralized protocols.</p>
<div className="flex gap-4">
<iconify-icon className="text-slate-500 hover:text-white cursor-pointer transition-colors" icon="solar:brand-twitter-linear" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="text-slate-500 hover:text-white cursor-pointer transition-colors" icon="solar:brand-github-linear" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="text-slate-500 hover:text-white cursor-pointer transition-colors" icon="solar:brand-discord-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>
</footer>

    </>
  );
}
