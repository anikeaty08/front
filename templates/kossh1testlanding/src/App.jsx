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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#080808]/80 backdrop-blur-md">
<div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="font-medium tracking-tight text-white uppercase text-sm">Archive</div>
<button className="text-sm font-medium text-neutral-400 hover:text-white transition-colors duration-200">
                Order Plate
            </button>
</div>
</nav>

<header className="md:pt-48 md:pb-32 pt-32 pr-6 pb-20 pl-6">
<div className="max-w-3xl mx-auto text-center">
<h1 className="text-4xl md:text-6xl font-medium tracking-tight text-white mb-6">
                Protect your recovery phrase.<br className="hidden md:block"/> Permanently.
            </h1>
<p className="text-lg md:text-xl text-neutral-400 font-light mb-10 max-w-xl mx-auto">
                A solid stainless-steel plate designed to store your 12 or 24-word seed phrase. Fireproof. Waterproof. Built to last decades.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="sm:w-auto hover:bg-neutral-200 transition-colors duration-200 text-sm font-medium text-black bg-white w-full rounded-full pt-3 pr-8 pb-3 pl-8">
                    Protect your assets
                </button>
<button className="w-full sm:w-auto px-8 py-3 bg-transparent border border-white/10 text-white text-sm font-medium rounded-full hover:bg-white/5 transition-colors duration-200">
                    View specifications
                </button>
</div>
</div>

<div className="mt-20 flex justify-center perspective-1000">
<div className="relative w-full max-w-md aspect-[1.6/1] steel-surface rounded-xl border border-white/10 p-6 flex flex-col justify-between transform transition-transform hover:scale-[1.01] duration-500">

<div className="absolute top-4 left-4 w-3 h-3 rounded-full bg-neutral-900 shadow-[inset_0_1px_2px_rgba(255,255,255,0.1)]"></div>
<div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-neutral-900 shadow-[inset_0_1px_2px_rgba(255,255,255,0.1)]"></div>
<div className="absolute bottom-4 left-4 w-3 h-3 rounded-full bg-neutral-900 shadow-[inset_0_1px_2px_rgba(255,255,255,0.1)]"></div>
<div className="absolute bottom-4 right-4 w-3 h-3 rounded-full bg-neutral-900 shadow-[inset_0_1px_2px_rgba(255,255,255,0.1)]"></div>

<div className="grid grid-cols-6 gap-2 mt-2 px-6 opacity-30">

<div className="h-px bg-white/40 w-full col-span-6"></div>
<div className="h-px bg-white/40 w-full col-span-6"></div>
<div className="h-px bg-white/40 w-full col-span-6"></div>
<div className="h-px bg-white/40 w-full col-span-6"></div>
<div className="h-px bg-white/40 w-full col-span-6"></div>
</div>
<div className="text-center mt-auto">
<span className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 font-medium">Stainless Steel Cold Storage</span>
</div>

<div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent rounded-xl pointer-events-none"></div>
</div>
</div>
</header>

<section className="py-20 border-t border-white/5 bg-neutral-900/20">
<div className="max-w-5xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">

<div className="group">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors">
<iconify-icon className="text-white" height="20" icon="solar:document-text-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-3 tracking-tight">Paper fails</h3>
<p className="text-sm text-neutral-400 font-light leading-relaxed">
                        Ink fades. Water destroys fiber. Paper is a temporary solution for a permanent asset. Don't rely on it.
                    </p>
</div>

<div className="group">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors">
<iconify-icon className="text-white" height="20" icon="solar:laptop-broken-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-3 tracking-tight">Hardware breaks</h3>
<p className="text-sm text-neutral-400 font-light leading-relaxed">
                        Hard drives corrupt. Phones get lost. Electronics have a lifespan. Steel is passive and persistent.
                    </p>
</div>

<div className="group">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors">
<iconify-icon className="text-white" height="20" icon="solar:shield-check-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-3 tracking-tight">Your final fallback</h3>
<p className="text-sm text-neutral-400 font-light leading-relaxed">
                        When everything else fails, this plate remains. It is the ultimate insurance policy for your wealth.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-5xl mx-auto">
<div className="flex flex-col md:flex-row items-start justify-between gap-16">
<div className="md:w-1/2">
<h2 className="text-3xl font-medium tracking-tight text-white mb-6">Engineered for survival.</h2>
<p className="text-neutral-400 font-light mb-8 leading-relaxed">
                        We use industrial-grade 304 stainless steel. It resists corrosion, withstands temperatures up to 2500°F (1370°C), and is impervious to water damage.
                    </p>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-white opacity-60" icon="solar:check-circle-linear"></iconify-icon>
                            Solid 304 Stainless Steel
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-white opacity-60" icon="solar:check-circle-linear"></iconify-icon>
                            Supports 12 or 24 seed words
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-white opacity-60" icon="solar:check-circle-linear"></iconify-icon>
                            Fire, water, and impact resistant
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-white opacity-60" icon="solar:check-circle-linear"></iconify-icon>
                            Etch or punch compatible
                        </li>
</ul>
</div>
<div className="md:w-1/2 w-full">

<div className="relative w-full aspect-square bg-neutral-900/50 rounded-2xl border border-white/5 overflow-hidden flex items-center justify-center">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-20"></div>
<div className="text-center z-10 p-8">
<iconify-icon className="text-white/20 mb-4" height="64" icon="solar:medal-star-linear" width="64"></iconify-icon>
<div className="text-sm font-medium text-neutral-500 uppercase tracking-widest">Lifetime Guarantee</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 border-y border-white/5 bg-[#0A0A0A]">
<div className="max-w-5xl mx-auto px-6">
<h2 className="text-2xl font-medium tracking-tight text-white mb-12 text-center">Simplicity by design</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">

<div className="hidden md:block absolute top-12 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent z-0"></div>

<div className="relative z-10 text-center">
<div className="w-24 h-24 mx-auto bg-[#080808] border border-white/10 rounded-full flex items-center justify-center mb-6">
<span className="text-2xl font-light text-white">1</span>
</div>
<h4 className="text-base font-medium text-white mb-2">Mark</h4>
<p className="text-sm text-neutral-500 leading-relaxed max-w-xs mx-auto">
                        Use a punch tool or engraver to mark your recovery words onto the steel grid.
                    </p>
</div>

<div className="relative z-10 text-center">
<div className="w-24 h-24 mx-auto bg-[#080808] border border-white/10 rounded-full flex items-center justify-center mb-6">
<span className="text-2xl font-light text-white">2</span>
</div>
<h4 className="text-base font-medium text-white mb-2">Verify</h4>
<p className="text-sm text-neutral-500 leading-relaxed max-w-xs mx-auto">
                        Double-check every position. Ensure the indentations are deep and clear.
                    </p>
</div>

<div className="relative z-10 text-center">
<div className="w-24 h-24 mx-auto bg-[#080808] border border-white/10 rounded-full flex items-center justify-center mb-6">
<span className="text-2xl font-light text-white">3</span>
</div>
<h4 className="text-base font-medium text-white mb-2">Secure</h4>
<p className="text-sm text-neutral-500 leading-relaxed max-w-xs mx-auto">
                        Store the plate in a safe place. It requires no maintenance, ever.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-4xl mx-auto text-center">
<iconify-icon className="text-white mb-6" height="32" icon="solar:lock-password-linear" width="32"></iconify-icon>
<h2 className="text-3xl font-medium tracking-tight text-white mb-6">Offline. Private. Secure.</h2>
<p className="text-lg text-neutral-400 font-light max-w-2xl mx-auto leading-relaxed">
                This product has no electronics, no bluetooth, and no connection to the internet. We keep no records of your keys. We ship blindly. Your security is entirely in your hands.
            </p>
</div>
</section>

<section className="py-20 bg-neutral-900/10">
<div className="max-w-5xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="p-8 border border-white/5 rounded-2xl bg-gradient-to-br from-white/[0.02] to-transparent">
<h3 className="text-xl font-medium text-white mb-2 tracking-tight">For Self-Custody</h3>
<p className="text-sm text-neutral-400 font-light">
                        Essential for anyone holding their own keys on hardware wallets like Ledger, Trezor, or Coldcard.
                    </p>
</div>
<div className="p-8 border border-white/5 rounded-2xl bg-gradient-to-br from-white/[0.02] to-transparent">
<h3 className="text-xl font-medium text-white mb-2 tracking-tight">For Legacy Planning</h3>
<p className="text-sm text-neutral-400 font-light">
                        Leave a recoverable asset for your family that doesn't require guessing passwords or finding files.
                    </p>
</div>
</div>
</div>
</section>

<footer className="py-24 px-6 border-t border-white/5 text-center">
<div className="max-w-2xl mx-auto">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-white mb-6">
                One purchase. Lifetime security.
            </h2>
<p className="text-neutral-400 mb-10 font-light">
                Secure your digital future with something physical.
            </p>
<button className="px-10 py-4 bg-white text-black text-sm font-medium rounded-full hover:bg-neutral-200 transition-all duration-200 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                Order your Archive Plate
            </button>
<div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-600">
<p>© 2024 Archive Security. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Contact</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
