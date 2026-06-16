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
      

<nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/80 border-b border-slate-200/60">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-8 h-8 bg-purple-900 rounded-lg flex items-center justify-center text-white font-bold text-lg tracking-tighter">
                    F
                </div>
<span className="text-lg font-semibold tracking-tight text-slate-900 group-hover:text-purple-900 transition-colors">
                    FedEx <span className="text-orange-500">Ice Cream</span>
</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
<a className="hover:text-purple-900 transition-colors" href="#flavors">Flavors</a>
<a className="hover:text-purple-900 transition-colors" href="#benefits">Nutrition</a>
<a className="hover:text-purple-900 transition-colors" href="#delivery">Delivery</a>
</div>
<div className="flex items-center gap-4">
<button className="hidden sm:flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-purple-900">
<iconify-icon icon="lucide:user" width="18"></iconify-icon>
                    Log in
                </button>
<button className="bg-purple-900 hover:bg-purple-800 text-white text-sm font-medium px-5 py-2.5 rounded-full transition-all shadow-lg shadow-purple-900/20 hover:shadow-purple-900/30 flex items-center gap-2">
<span>Order Now</span>
<iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
<div className="absolute top-20 right-0 w-[500px] h-[500px] bg-purple-200/30 rounded-full blur-[100px]"></div>
<div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-100/40 rounded-full blur-[80px]"></div>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">

<div className="space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-orange-600 text-xs font-semibold tracking-wide uppercase">
<iconify-icon icon="lucide:zap" width="14"></iconify-icon>
                    Delivered in under 30 minutes
                </div>
<h1 className="text-5xl lg:text-7xl font-semibold tracking-tight leading-[1.1]">
                    Guilt-Free. <br/>
<span className="bg-gradient-to-r from-purple-900 via-purple-700 to-orange-500 text-gradient">Lightning Fast.</span>
</h1>
<p className="text-lg text-slate-500 max-w-md leading-relaxed">
                    Premium high-protein, sugar-free ice cream delivered to your doorstep before it melts. Experience the FedEx standard of speed for your sweet cravings.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<button className="h-12 px-8 rounded-full bg-slate-900 text-white font-medium hover:bg-slate-800 transition-all flex items-center justify-center gap-2 shadow-xl shadow-slate-900/10">
                        Check Availability
                        <iconify-icon icon="lucide:map-pin" width="18"></iconify-icon>
</button>
<button className="h-12 px-8 rounded-full bg-white border border-slate-200 text-slate-700 font-medium hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                        View Menu
                    </button>
</div>
<div className="flex items-center gap-4 text-xs font-medium text-slate-400 pt-4">
<div className="flex items-center gap-1">
<iconify-icon className="text-green-500" icon="lucide:check-circle" width="14"></iconify-icon>
<span>Sugar Free</span>
</div>
<div className="flex items-center gap-1">
<iconify-icon className="text-green-500" icon="lucide:check-circle" width="14"></iconify-icon>
<span>20g Protein</span>
</div>
<div className="flex items-center gap-1">
<iconify-icon className="text-green-500" icon="lucide:check-circle" width="14"></iconify-icon>
<span>180 Calories</span>
</div>
</div>
</div>

<div className="relative h-[400px] flex items-center justify-center perspective-[1000px]">

<div className="absolute top-10 right-10 w-24 h-24 bg-orange-400 rounded-2xl rotate-12 opacity-20 blur-xl animate-pulse"></div>
<div className="absolute bottom-10 left-10 w-32 h-32 bg-purple-600 rounded-full opacity-20 blur-2xl"></div>

<div className="relative w-64 h-72 transition-transform duration-700 hover:scale-105 group cursor-pointer" style={{transformStyle: 'preserve-3d', transform: 'rotateY(-15deg) rotateX(5deg)'}}>

<div className="absolute top-0 left-0 w-full h-16 bg-purple-900 rounded-[50%] z-20 shadow-md border-b-4 border-purple-950 flex items-center justify-center">
<div className="w-56 h-12 bg-purple-800 rounded-[50%]"></div>
</div>

<div className="absolute top-8 left-2 w-60 h-64 bg-gradient-to-br from-slate-50 to-slate-200 cup-body z-10 shadow-inner flex flex-col items-center justify-center border-l border-r border-slate-300">

<div className="flex flex-col items-center gap-1 transform -translate-y-4">
<div className="w-10 h-10 bg-purple-900 rounded-lg flex items-center justify-center text-white text-xl font-bold">F</div>
<span className="text-slate-900 font-bold tracking-tight text-lg">Vanilla Velocity</span>
<span className="text-[10px] uppercase tracking-widest text-slate-400 font-semibold">Protein Series</span>
</div>

<div className="mt-4 px-3 py-1 bg-orange-500 text-white text-[10px] font-bold rounded-full shadow-sm">
                            20g PROTEIN
                        </div>
</div>

<div className="absolute -bottom-4 left-10 w-44 h-12 bg-black/20 blur-xl rounded-[50%] z-0 transform scale-y-50"></div>

<div className="absolute -right-8 top-20 w-8 h-32 bg-slate-300 rounded-full z-30 shadow-lg transform rotate-12 border border-slate-100 flex items-end justify-center pb-2">
<div className="w-6 h-10 bg-slate-200 rounded-full"></div>
</div>
</div>
</div>
</div>
</header>

<section className="border-y border-slate-200 bg-white/50" id="benefits">
<div className="max-w-7xl mx-auto px-6 py-12">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="flex flex-col items-center text-center space-y-2">
<div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center text-purple-600 mb-2">
<iconify-icon icon="lucide:timer" width="24"></iconify-icon>
</div>
<h3 className="font-semibold text-slate-900">30 Min Delivery</h3>
<p className="text-sm text-slate-500">From freezer to you</p>
</div>
<div className="flex flex-col items-center text-center space-y-2">
<div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-500 mb-2">
<iconify-icon icon="lucide:dumbbell" width="24"></iconify-icon>
</div>
<h3 className="font-semibold text-slate-900">20g Protein</h3>
<p className="text-sm text-slate-500">Per mini tub</p>
</div>
<div className="flex flex-col items-center text-center space-y-2">
<div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-500 mb-2">
<iconify-icon icon="lucide:ban" width="24"></iconify-icon>
</div>
<h3 className="font-semibold text-slate-900">Zero Sugar</h3>
<p className="text-sm text-slate-500">Stevia sweetened</p>
</div>
<div className="flex flex-col items-center text-center space-y-2">
<div className="w-12 h-12 rounded-2xl bg-green-50 flex items-center justify-center text-green-500 mb-2">
<iconify-icon icon="lucide:leaf" width="24"></iconify-icon>
</div>
<h3 className="font-semibold text-slate-900">Keto Friendly</h3>
<p className="text-sm text-slate-500">Low net carbs</p>
</div>
</div>
</div>
</section>

<section className="py-24" id="flavors">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Flavor Payload</h2>
<p className="text-slate-500">Engineered for taste, optimized for performance. Choose your fuel.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="card-3d group relative bg-white rounded-3xl p-6 border border-slate-100 shadow-lg flex flex-col items-center overflow-hidden">
<div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-stone-100 to-white z-0"></div>
<div className="relative z-10 w-40 h-40 mb-6 mt-4">

<div className="w-full h-full rounded-full bg-gradient-to-br from-stone-700 to-stone-900 shadow-2xl flex items-center justify-center relative ring-4 ring-white/50">
<div className="absolute top-4 left-4 w-12 h-8 bg-white/10 rounded-full blur-md"></div>
</div>
</div>
<div className="relative z-10 text-center w-full">
<h3 className="text-xl font-semibold text-slate-900 mb-1">Chocolate Express</h3>
<p className="text-sm text-slate-500 mb-4">Dark chocolate ganache swirl</p>
<div className="flex justify-between items-center w-full border-t border-slate-100 pt-4 mt-2">
<span className="text-sm font-medium text-slate-900">$6.50</span>
<button className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-orange-500 transition-colors">
<iconify-icon icon="lucide:plus" width="16"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="card-3d group relative bg-white rounded-3xl p-6 border border-purple-100 shadow-xl shadow-purple-900/5 flex flex-col items-center overflow-hidden ring-2 ring-purple-900/5">
<div className="absolute top-4 right-4 bg-orange-500 text-white text-[10px] font-bold px-2 py-1 rounded-md z-20">POPULAR</div>
<div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-purple-50 to-white z-0"></div>
<div className="relative z-10 w-40 h-40 mb-6 mt-4">
<div className="w-full h-full rounded-full bg-gradient-to-br from-purple-400 to-purple-600 shadow-2xl flex items-center justify-center relative ring-4 ring-white/50">
<div className="absolute top-4 left-4 w-12 h-8 bg-white/20 rounded-full blur-md"></div>
</div>
</div>
<div className="relative z-10 text-center w-full">
<h3 className="text-xl font-semibold text-slate-900 mb-1">Berry Bolt</h3>
<p className="text-sm text-slate-500 mb-4">Acai &amp; blueberry infusion</p>
<div className="flex justify-between items-center w-full border-t border-slate-100 pt-4 mt-2">
<span className="text-sm font-medium text-slate-900">$6.50</span>
<button className="w-8 h-8 rounded-full bg-purple-900 text-white flex items-center justify-center hover:bg-orange-500 transition-colors">
<iconify-icon icon="lucide:plus" width="16"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="card-3d group relative bg-white rounded-3xl p-6 border border-slate-100 shadow-lg flex flex-col items-center overflow-hidden">
<div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-yellow-50 to-white z-0"></div>
<div className="relative z-10 w-40 h-40 mb-6 mt-4">
<div className="w-full h-full rounded-full bg-gradient-to-br from-amber-100 to-amber-300 shadow-2xl flex items-center justify-center relative ring-4 ring-white/50">
<div className="absolute top-4 left-4 w-12 h-8 bg-white/40 rounded-full blur-md"></div>
</div>
</div>
<div className="relative z-10 text-center w-full">
<h3 className="text-xl font-semibold text-slate-900 mb-1">Vanilla Velocity</h3>
<p className="text-sm text-slate-500 mb-4">Madagascar bean specks</p>
<div className="flex justify-between items-center w-full border-t border-slate-100 pt-4 mt-2">
<span className="text-sm font-medium text-slate-900">$6.50</span>
<button className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-orange-500 transition-colors">
<iconify-icon icon="lucide:plus" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-slate-900 text-white py-24 relative overflow-hidden" id="delivery">

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight mb-6">Built for speed. <br/><span className="text-purple-400">Arrives Frozen.</span></h2>
<p className="text-slate-400 text-lg mb-8 leading-relaxed">
                        Our logistics network is optimized for micro-fulfillment. We position inventory in high-density zones to ensure your protein treat is in your hands within 30 minutes.
                    </p>
<div className="inline-flex items-center gap-2 text-orange-400 font-medium border-b border-orange-400/30 pb-1 cursor-pointer hover:border-orange-400 hover:text-orange-300 transition-all">
<span>View delivery zones</span>
<iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</div>
</div>

<div className="space-y-8 relative pl-8 border-l border-slate-700">

<div className="relative group">
<div className="absolute -left-[39px] top-1 w-5 h-5 rounded-full border-4 border-slate-900 bg-slate-600 group-hover:bg-purple-500 transition-colors"></div>
<h4 className="text-lg font-medium mb-1">Order Placed</h4>
<p className="text-sm text-slate-500">System routes to nearest micro-hub.</p>
<div className="text-xs text-slate-600 mt-1 font-mono">T-MINUS 30:00</div>
</div>

<div className="relative group">
<div className="absolute -left-[39px] top-1 w-5 h-5 rounded-full border-4 border-slate-900 bg-slate-600 group-hover:bg-purple-500 transition-colors"></div>
<h4 className="text-lg font-medium mb-1">Packed &amp; Chilled</h4>
<p className="text-sm text-slate-500">Dry ice packed for thermal integrity.</p>
<div className="text-xs text-slate-600 mt-1 font-mono">T-MINUS 25:00</div>
</div>

<div className="relative group">
<div className="absolute -left-[39px] top-1 w-5 h-5 rounded-full border-4 border-slate-900 bg-slate-600 group-hover:bg-purple-500 transition-colors"></div>
<h4 className="text-lg font-medium mb-1">Courier Dispatch</h4>
<p className="text-sm text-slate-500">FedEx Priority Courier assigned.</p>
<div className="text-xs text-slate-600 mt-1 font-mono">T-MINUS 15:00</div>
</div>

<div className="relative group">
<div className="absolute -left-[39px] top-1 w-5 h-5 rounded-full border-4 border-slate-900 bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.5)]"></div>
<h4 className="text-lg font-medium mb-1 text-white">Delivered</h4>
<p className="text-sm text-slate-500">Enjoy your guilt-free indulgence.</p>
<div className="text-xs text-green-400 mt-1 font-mono">T-MINUS 00:00</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-2xl font-semibold tracking-tight text-center mb-12">Fueled by FedEx Ice Cream</h2>
<div className="grid md:grid-cols-3 gap-6">

<div className="p-8 rounded-2xl bg-slate-50 border border-slate-100">
<div className="flex items-center gap-1 text-orange-400 mb-4">
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
</div>
<p className="text-slate-600 mb-6 text-sm leading-relaxed">"Honestly, I didn't believe the 30-minute claim. But the driver was at my door in 22 minutes. The Berry Bolt is insane for a protein snack."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-200"></div>
<div>
<p className="text-sm font-semibold text-slate-900">Alex M.</p>
<p className="text-xs text-slate-400">Crossfit Trainer</p>
</div>
</div>
</div>

<div className="p-8 rounded-2xl bg-slate-50 border border-slate-100">
<div className="flex items-center gap-1 text-orange-400 mb-4">
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
</div>
<p className="text-slate-600 mb-6 text-sm leading-relaxed">"Perfect post-workout treat. Macros are on point and it tastes like real gelato. The fast delivery is a game changer for cravings."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-200"></div>
<div>
<p className="text-sm font-semibold text-slate-900">Sarah J.</p>
<p className="text-xs text-slate-400">Nutritionist</p>
</div>
</div>
</div>

<div className="p-8 rounded-2xl bg-slate-50 border border-slate-100">
<div className="flex items-center gap-1 text-orange-400 mb-4">
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
</div>
<p className="text-slate-600 mb-6 text-sm leading-relaxed">"Finally, sugar-free ice cream that doesn't have that weird aftertaste. The packaging keeps it perfectly frozen."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-200"></div>
<div>
<p className="text-sm font-semibold text-slate-900">Marcus T.</p>
<p className="text-xs text-slate-400">Developer</p>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-slate-200 bg-slate-50 pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="bg-purple-900 rounded-3xl p-10 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl shadow-purple-900/20 overflow-hidden relative">

<div className="absolute top-0 right-0 w-64 h-64 bg-purple-500 rounded-full blur-[80px] opacity-30 pointer-events-none"></div>
<div className="relative z-10 max-w-lg">
<h2 className="text-3xl font-semibold text-white mb-4 tracking-tight">Cravings don't wait.<br/>Neither do we.</h2>
<p className="text-purple-200 text-lg">Order now and get it delivered in <span className="text-orange-400 font-mono font-bold">~28 mins</span>.</p>
</div>
<div className="relative z-10 flex flex-col items-center gap-3 w-full md:w-auto">
<button className="w-full md:w-auto bg-white text-purple-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-orange-50 transition-colors shadow-xl flex items-center justify-center gap-2">
<iconify-icon icon="lucide:shopping-bag" width="20"></iconify-icon>
                        Start Order
                    </button>
<span className="text-purple-300 text-xs">Free delivery on orders over $30</span>
</div>
</div>
<div className="mt-16 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-500">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-slate-200 rounded flex items-center justify-center text-slate-500 font-bold text-xs">F</div>
<span className="font-semibold text-slate-700">FedEx Ice Cream</span>
</div>
<div className="flex gap-6">
<a className="hover:text-slate-900" href="#">Privacy</a>
<a className="hover:text-slate-900" href="#">Terms</a>
<a className="hover:text-slate-900" href="#">Support</a>
</div>
<p>© 2023 FedEx Ice Cream. Fictional Concept.</p>
</div>
</div>
</footer>

    </>
  );
}
