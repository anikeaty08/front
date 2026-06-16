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
      

<main className="w-full max-w-[400px] px-6 pb-10 flex flex-col gap-8 relative">

<header className="flex justify-center items-center gap-1 opacity-90">
<iconify-icon className="text-white text-xl" icon="mdi:apple"></iconify-icon>
<span className="text-lg font-semibold tracking-tight text-white leading-none">Pay</span>
</header>

<section className="perspective-[1000px] w-full mt-2">
<div className="card-float relative w-full aspect-[1.586/1] rounded-xl overflow-hidden shadow-2xl shadow-neutral-900/50 border border-white/10 group">

<div className="absolute inset-0 bg-gradient-to-br from-[#3a3a3c] via-[#2c2c2e] to-[#1c1c1e]"></div>

<div className="absolute inset-0 bg-white/[0.02] mix-blend-overlay"></div>

<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
<iconify-icon className="text-9xl text-white/[0.03]" icon="mdi:apple"></iconify-icon>
</div>

<div className="absolute inset-0 bg-gradient-to-b from-white/[0.08] to-transparent pointer-events-none"></div>
<div className="absolute inset-0 shimmer-overlay pointer-events-none"></div>

<div className="relative h-full flex flex-col justify-between p-5 z-10">

<div className="flex justify-between items-start">
<div className="flex flex-col gap-1">
<span className="text-[0.65rem] font-semibold tracking-widest text-neutral-400 uppercase">Digital Gift Card</span>
<span className="text-2xl font-medium tracking-tight text-white drop-shadow-sm">$1,012.00</span>
</div>
<span className="text-xs font-medium text-neutral-400 tracking-wide mt-1">•••• 8921</span>
</div>

<div className="flex justify-between items-end">
<span className="text-sm font-medium text-neutral-300 tracking-tight shadow-black drop-shadow-md">Marcus Reynold</span>
<iconify-icon className="text-white/40 text-2xl rotate-90" icon="solar:wireless-charge-linear"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="flex flex-col gap-4">
<div className="flex justify-between items-end px-1">
<h2 className="text-lg font-semibold tracking-tight text-white">Transaction History</h2>
</div>

<div className="flex flex-col gap-6">

<div className="flex flex-col gap-3">
<span className="text-xs font-medium text-neutral-500 uppercase tracking-wide px-1">Today</span>

<div className="flex items-center justify-between p-4 bg-[#1c1c1e] rounded-xl border border-white/5 active:scale-[0.98] transition-transform duration-200">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-400 border border-white/5">
<iconify-icon className="text-white" height="20" icon="solar:wallet-money-linear" width="20"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-white tracking-tight">Added to Balance</span>
<span className="text-xs text-neutral-500">Apple Gift Card Deposit</span>
</div>
</div>
<span className="text-sm font-medium text-green-500 tracking-tight">+$500.00</span>
</div>
</div>

<div className="flex flex-col gap-3 opacity-60">

<div className="flex items-center justify-between px-4 py-2 rounded-xl">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-neutral-800/50 flex items-center justify-center text-neutral-400 border border-white/5">
<iconify-icon className="text-white/80" height="18" icon="mdi:apple" width="18"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-white/90 tracking-tight">Apple Store</span>
<span className="text-xs text-neutral-500">Yesterday</span>
</div>
</div>
<span className="text-sm font-medium text-white/90 tracking-tight">$99.00</span>
</div>
</div>
</div>
</section>

<footer className="mt-auto py-6 px-4">
<p className="text-[0.6rem] leading-relaxed text-neutral-600 text-center font-medium">
                Your balance is held by Green Dot Bank, Member FDIC. Apple Payments Inc. is a licensed money transmitter.
            </p>
</footer>
</main>

    </>
  );
}
