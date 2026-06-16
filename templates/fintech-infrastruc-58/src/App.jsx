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
      

<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">

<div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-purple-900/20 blur-[120px] rounded-full mix-blend-screen opacity-40"></div>

<div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-amber-900/20 blur-[100px] rounded-full mix-blend-screen opacity-30"></div>

<div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-zinc-900/50 blur-[100px] rounded-full opacity-20"></div>
</div>

<header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#050505]/70 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-2 group animate-sequence" href="#">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-purple-600 flex items-center justify-center">
<span className="font-bold text-black text-xs">C</span>
</div>
<span className="text-lg font-medium tracking-tight text-white group-hover:text-amber-100 transition-colors">
                    CIKKA
                </span>
</a>

<nav className="hidden md:flex items-center gap-8 animate-sequence delay-1">
<a className="text-sm font-normal text-zinc-400 hover:text-amber-200 transition-colors duration-200" href="#">Features</a>
<a className="text-sm font-normal text-zinc-400 hover:text-amber-200 transition-colors duration-200" href="#">How It Works</a>
<a className="text-sm font-normal text-zinc-400 hover:text-amber-200 transition-colors duration-200" href="#">Business</a>
</nav>

<div className="flex items-center gap-6 animate-sequence delay-1">
<a className="hidden sm:block text-sm font-normal text-zinc-400 hover:text-white transition-colors" href="#">Sign In</a>
<a className="group relative inline-flex h-9 items-center justify-center overflow-hidden rounded-full bg-white px-5 font-medium text-black transition-all hover:bg-amber-50" href="#">
<span className="text-sm">Get Started</span>
</a>
</div>
</div>
</header>

<main className="relative z-10 pt-32 pb-20 px-6">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="flex flex-col items-start text-left max-w-2xl">

<div className="animate-sequence delay-2 mb-8">
<span className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-900/10 px-3 py-1 text-xs text-purple-200 backdrop-blur-sm">
<span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
                        Fintech Infrastructure v2.0
                    </span>
</div>

<h1 className="animate-sequence delay-3 text-5xl sm:text-6xl font-semibold tracking-tight text-white leading-[1.1]">
                    Pay Bills. <br/>
<span className="text-gradient-gold">Get Rewarded.</span> <br/>
<span className="text-zinc-500">Zero Stress.</span>
</h1>

<p className="animate-sequence delay-4 mt-6 text-lg text-zinc-400 max-w-lg leading-relaxed font-light">
                    The first platform that rewards you even when life gets in the way. Pay credit card bills with flexibility and earn <span className="text-amber-200">100% cashback</span> on every transaction.
                </p>

<div className="animate-sequence delay-5 mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<button className="group w-full sm:w-auto h-12 px-8 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-base font-medium hover:brightness-110 transition-all shadow-[0_0_20px_-5px_rgba(147,51,234,0.5)] flex items-center justify-center gap-2">
                        Start Earning
                        <i className="w-4 h-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right"></i>
</button>
<button className="w-full sm:w-auto h-12 px-8 rounded-full border border-zinc-800 bg-zinc-900/30 text-white text-base font-medium hover:bg-zinc-800/50 hover:border-amber-500/30 transition-all flex items-center justify-center gap-2 backdrop-blur-sm">
                        For Businesses
                    </button>
</div>
<div className="animate-sequence delay-5 mt-8 flex items-center gap-4 text-xs text-zinc-500">
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full bg-zinc-800 border border-black"></div>
<div className="w-6 h-6 rounded-full bg-zinc-700 border border-black"></div>
<div className="w-6 h-6 rounded-full bg-zinc-600 border border-black"></div>
</div>
<p>Trusted by 10,000+ users</p>
</div>
</div>

<div className="relative animate-sequence delay-3 hidden lg:block perspective-1000">

<div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-amber-500/10 blur-3xl rounded-full transform scale-75"></div>

<div className="relative z-10 glass-card rounded-2xl p-6 w-full max-w-md mx-auto transform rotate-y-12 rotate-x-6 animate-float gold-glow">

<div className="flex justify-between items-center mb-8">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-black font-bold text-lg">C</div>
<div>
<div className="text-sm text-white font-medium">Cikka Premium</div>
<div className="text-xs text-zinc-500">**** 4829</div>
</div>
</div>
<div className="text-amber-400">
<i className="w-5 h-5 rotate-90" data-lucide="wifi"></i>
</div>
</div>

<div className="mb-8">
<div className="text-xs text-zinc-400 uppercase tracking-wider mb-1">Total Rewards</div>
<div className="text-3xl font-medium text-white tracking-tight">₹12,450.00</div>
<div className="flex items-center gap-1 text-emerald-400 text-xs mt-2">
<i className="w-3 h-3" data-lucide="trending-up"></i>
                            +18.2% this month
                        </div>
</div>

<div className="space-y-3">
<div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-300">
<i className="w-4 h-4" data-lucide="credit-card"></i>
</div>
<div className="flex flex-col">
<span className="text-xs text-white font-medium">Credit Payment</span>
<span className="text-[10px] text-zinc-500">Today, 2:00 PM</span>
</div>
</div>
<span className="text-xs text-white font-medium">-₹45,000</span>
</div>
<div className="flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-amber-500/10 to-transparent border border-amber-500/20">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-300">
<i className="w-4 h-4" data-lucide="gift"></i>
</div>
<div className="flex flex-col">
<span className="text-xs text-amber-200 font-medium">Cashback Earned</span>
<span className="text-[10px] text-amber-500/70">Instant</span>
</div>
</div>
<span className="text-xs text-amber-300 font-medium">+₹450</span>
</div>
</div>
</div>

<div className="absolute top-10 -right-4 z-20 glass-card p-4 rounded-xl animate-float delay-700 border-l-4 border-l-purple-500">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center">
<i className="w-4 h-4 text-purple-400" data-lucide="shield-check"></i>
</div>
<div>
<div className="text-xs font-medium text-white">Late Fee Waived</div>
<div className="text-[10px] text-zinc-500">Cikka Protection</div>
</div>
</div>
</div>
<div className="absolute -bottom-6 -left-4 z-20 glass-card p-4 rounded-xl animate-float delay-1000 border-l-4 border-l-amber-400">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center">
<i className="w-4 h-4 text-amber-400" data-lucide="zap"></i>
</div>
<div>
<div className="text-xs font-medium text-white">Super Fast</div>
<div className="text-[10px] text-zinc-500">Settlement</div>
</div>
</div>
</div>
</div>
</div>

<div className="max-w-7xl mx-auto mt-32 animate-sequence delay-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative p-8 rounded-2xl border border-zinc-800 bg-zinc-900/20 hover:bg-zinc-900/50 transition-all duration-300 hover:border-purple-500/30 purple-glow">
<div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative z-10">
<div className="mb-6 w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-purple-500/50 group-hover:text-purple-400 transition-all">
<i className="w-6 h-6 text-white stroke-[1.5] group-hover:text-purple-400 transition-colors" data-lucide="store"></i>
</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-3 group-hover:text-purple-100">Zero Cost Entry</h3>
<p className="text-sm text-zinc-500 leading-relaxed group-hover:text-zinc-400">
                            Start using our infrastructure without any upfront costs. We only grow when your business grows.
                        </p>
</div>
</div>

<div className="group relative p-8 rounded-2xl border border-zinc-800 bg-zinc-900/20 hover:bg-zinc-900/50 transition-all duration-300 hover:border-amber-500/30 gold-glow">
<div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative z-10">
<div className="mb-6 w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-amber-500/50 group-hover:text-amber-400 transition-all">
<i className="w-6 h-6 text-white stroke-[1.5] group-hover:text-amber-400 transition-colors" data-lucide="gem"></i>
</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-3 group-hover:text-amber-100">100% Rewards</h3>
<p className="text-sm text-zinc-500 leading-relaxed group-hover:text-zinc-400">
                            Unmatched cashback programs and loyalty points that actually mean something to your wallet.
                        </p>
</div>
</div>

<div className="group relative p-8 rounded-2xl border border-zinc-800 bg-zinc-900/20 hover:bg-zinc-900/50 transition-all duration-300 hover:border-white/20">
<div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative z-10">
<div className="mb-6 w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-white/30 transition-all">
<i className="w-6 h-6 text-white stroke-[1.5]" data-lucide="bar-chart-3"></i>
</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-3">₹30 Cr Credit</h3>
<p className="text-sm text-zinc-500 leading-relaxed group-hover:text-zinc-400">
                            Massive liquidity access to ensure your transactions never fail, regardless of the volume.
                        </p>
</div>
</div>
</div>
</div>
</main>
<footer className="border-t border-white/5 bg-black py-12 mt-20">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-gradient-to-br from-amber-400 to-purple-600 flex items-center justify-center">
<span className="font-bold text-black text-[10px]">C</span>
</div>
<span className="text-sm text-zinc-400">© 2024 Cikka Inc.</span>
</div>
<div className="flex gap-6">
<a className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors" href="#">Privacy Policy</a>
<a className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors" href="#">Terms of Service</a>
<a className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors" href="#">Twitter</a>
</div>
</div>
</footer>



    </>
  );
}
