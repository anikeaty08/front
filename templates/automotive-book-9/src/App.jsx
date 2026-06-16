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
      

<nav className="fixed top-0 w-full z-50 glass-nav transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-white font-semibold tracking-tighter text-lg flex items-center gap-2 group" href="#">
<div className="w-2 h-2 bg-red-600 rounded-full group-hover:shadow-[0_0_10px_rgba(220,38,38,0.8)] transition-all"></div>
                MODENA
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#chapters">Chapters</a>
<a className="hover:text-white transition-colors" href="#gallery">Gallery</a>
<a className="hover:text-white transition-colors" href="#author">The Author</a>
</div>
<a className="hidden md:flex items-center gap-2 text-xs font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-neutral-200 transition-colors" href="#order">
                Pre-order Now
                <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="14"></iconify-icon>
</a>

<button className="md:hidden text-white">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center pt-20 pb-20 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-red-900/20 rounded-full blur-[120px] pointer-events-none opacity-40"></div>
<div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none opacity-20"></div>
<div className="container max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">

<div className="space-y-8 text-center lg:text-left">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900/50 text-xs font-medium text-neutral-400 mb-2">
<span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                    Limited Collector's Edition Available
                </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-white leading-[0.95]">
                    The Soul of <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700 text-glow">Maranello</span>
</h1>
<p className="text-lg md:text-xl text-neutral-400 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
                    A visual journey through 75 years of obsession, engineering, and victory. From the first 125 S to the latest hybrid hypercars.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
<a className="w-full sm:w-auto px-8 py-3.5 bg-white text-black text-sm font-medium rounded-md hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 group" href="#order">
                        Order Hardcover
                        <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="lucide:shopping-bag" strokeWidth="1.5" width="16"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-3.5 bg-neutral-900 border border-neutral-800 text-white text-sm font-medium rounded-md hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2" href="#preview">
                        Download Sample
                        <iconify-icon icon="lucide:download" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
<div className="pt-8 flex items-center justify-center lg:justify-start gap-6 border-t border-neutral-900/50">
<div className="flex -space-x-3">
<div className="w-10 h-10 rounded-full bg-neutral-800 border-2 border-[#050505] flex items-center justify-center text-xs text-neutral-400">JM</div>
<div className="w-10 h-10 rounded-full bg-neutral-700 border-2 border-[#050505] flex items-center justify-center text-xs text-neutral-300">AS</div>
<div className="w-10 h-10 rounded-full bg-neutral-600 border-2 border-[#050505] flex items-center justify-center text-xs text-white">+2k</div>
</div>
<div className="text-xs text-neutral-500">
<span className="text-white font-medium">4.9/5 Stars</span> from enthusiasts worldwide.
                    </div>
</div>
</div>

<div className="relative flex justify-center items-center book-container">

<div className="book relative w-[320px] md:w-[400px] aspect-[3/4] rounded-r-lg rounded-l-sm bg-[#0a0a0a] border border-neutral-800 transform rotate-y-[-15deg] rotate-x-[5deg]">

<div className="absolute top-0 bottom-0 -left-[20px] w-[20px] bg-red-900 rounded-l-sm transform origin-right rotate-y-[-90deg] border-l border-white/10"></div>

<div className="absolute inset-0 bg-[#080808] overflow-hidden rounded-r-lg flex flex-col justify-between p-8 border-r border-t border-b border-white/10 shadow-2xl">

<div className="flex justify-between items-start">
<span className="text-[10px] tracking-[0.3em] text-red-600 uppercase">Scuderia Edition</span>
<div className="w-8 h-8 rounded-full border border-neutral-800 flex items-center justify-center">
<iconify-icon className="text-white" icon="lucide:horse" width="16"></iconify-icon>
</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-20">
<svg className="w-full h-full text-red-600 fill-current" viewbox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
<path d="M45,-76C58.3,-69.3,69.1,-58.3,77.3,-45.8C85.5,-33.3,91.1,-19.3,90.3,-5.6C89.5,8.1,82.3,21.5,73.5,33.5C64.7,45.5,54.3,56.1,42.4,64.3C30.5,72.5,17.1,78.3,2.8,73.5C-11.5,68.7,-26.7,53.3,-40.4,40.9C-54.1,28.5,-66.3,19.1,-70.8,6.8C-75.3,-5.5,-72.1,-20.7,-64.1,-33.5C-56.1,-46.3,-43.3,-56.7,-30.5,-63.7C-17.7,-70.7,-4.9,-74.3,8.9,-75.8C22.7,-77.3,45.4,-76.7,45,-76Z" transform="translate(100 100)"></path>
</svg>
</div>

<div className="relative z-10 mt-auto">
<h2 className="text-4xl font-medium text-white tracking-tighter leading-none mb-2">ROSSO</h2>
<p className="text-xs text-neutral-400 font-medium tracking-wide uppercase">The History of Speed</p>
</div>
</div>

<div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 pointer-events-none rounded-r-lg"></div>
</div>

<div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-[80%] h-12 bg-black blur-xl opacity-60 rounded-[100%]"></div>
</div>
</div>
</section>

<section className="py-10 border-y border-neutral-900 bg-[#080808]">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs font-medium text-neutral-500 uppercase tracking-widest mb-8">Featured In</p>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">

<span className="text-xl font-bold tracking-tighter italic">TopGear</span>
<span className="text-xl font-semibold tracking-tight">HAGERTY</span>
<span className="text-xl font-bold tracking-tight">ROAD&amp;TRACK</span>
<span className="text-xl font-serif font-semibold">GQ</span>
</div>
</div>
</section>

<section className="py-24 relative" id="chapters">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-white mb-4">Inside the Archive</h2>
<p className="text-neutral-400 max-w-2xl">Over 400 pages of unpublished photographs, technical schematics, and personal letters from the Commendatore himself.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="group p-8 rounded-xl border border-neutral-800 bg-neutral-900/30 hover:bg-neutral-900/60 transition-all hover:border-neutral-700">
<div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center mb-6 text-red-500 group-hover:text-red-400 transition-colors">
<iconify-icon icon="lucide:wrench" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">The Engineering</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                        Detailed breakdowns of the V12 engines that defined a century. Blueprints of the 250 GTO and the F40.
                    </p>
</div>

<div className="group p-8 rounded-xl border border-neutral-800 bg-neutral-900/30 hover:bg-neutral-900/60 transition-all hover:border-neutral-700">
<div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center mb-6 text-red-500 group-hover:text-red-400 transition-colors">
<iconify-icon icon="lucide:flag" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">The Racing</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                        Relive the golden era of Le Mans, the rivalry with Ford, and the dominance of the Schumacher era.
                    </p>
</div>

<div className="group p-8 rounded-xl border border-neutral-800 bg-neutral-900/30 hover:bg-neutral-900/60 transition-all hover:border-neutral-700">
<div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center mb-6 text-red-500 group-hover:text-red-400 transition-colors">
<iconify-icon icon="lucide:pen-tool" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">The Design</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                        The evolution of the silhouette. From Pininfarina's curves to the aerodynamic aggression of today.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900 relative overflow-hidden">
<div className="absolute inset-0 opacity-5" style={{backgroundImage: 'radial-gradient(#333 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<iconify-icon className="text-neutral-700 mb-6 mx-auto block" icon="lucide:quote" width="48"></iconify-icon>
<blockquote className="text-3xl md:text-5xl font-medium tracking-tight text-white leading-tight mb-8">
                "Aerodynamics are for people who can't build engines."
            </blockquote>
<cite className="text-sm font-medium text-red-500 tracking-widest uppercase not-italic">— Enzo Ferrari</cite>
</div>
</section>

<section className="py-24" id="order">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-medium tracking-tighter text-white mb-4">Own a Piece of History</h2>
<p className="text-neutral-400">Choose your edition. Shipping worldwide.</p>
</div>
<div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

<div className="relative p-8 rounded-2xl border border-neutral-800 bg-[#080808] flex flex-col">
<div className="mb-8">
<h3 className="text-xl font-medium text-white">Standard Edition</h3>
<p className="text-sm text-neutral-500 mt-1">Hardcover, 400 Pages</p>
</div>
<div className="mb-8 flex items-baseline gap-1">
<span className="text-4xl font-medium text-white tracking-tight">$80</span>
<span className="text-neutral-500">USD</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-neutral-500" icon="lucide:check" width="16"></iconify-icon>
                            High-gloss photo paper
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-neutral-500" icon="lucide:check" width="16"></iconify-icon>
                            Protective slipcase
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-neutral-500" icon="lucide:check" width="16"></iconify-icon>
                            Digital copy included
                        </li>
</ul>
<button className="w-full py-3 rounded-lg border border-neutral-700 text-white font-medium text-sm hover:bg-neutral-800 transition-all">
                        Buy Standard
                    </button>
</div>

<div className="relative p-8 rounded-2xl border border-red-900/30 bg-gradient-to-b from-red-900/10 to-[#080808] flex flex-col">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-red-600 text-white text-[10px] font-bold uppercase tracking-wider rounded-full">
                        Best Seller
                    </div>
<div className="mb-8">
<h3 className="text-xl font-medium text-white">Scuderia Edition</h3>
<p className="text-sm text-red-400 mt-1">Limited to 500 copies</p>
</div>
<div className="mb-8 flex items-baseline gap-1">
<span className="text-4xl font-medium text-white tracking-tight">$250</span>
<span className="text-neutral-500">USD</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-white">
<div className="bg-red-500/20 p-0.5 rounded-full">
<iconify-icon className="text-red-500" icon="lucide:check" width="12"></iconify-icon>
</div>
                            Signed by the author
                        </li>
<li className="flex items-center gap-3 text-sm text-white">
<div className="bg-red-500/20 p-0.5 rounded-full">
<iconify-icon className="text-red-500" icon="lucide:check" width="12"></iconify-icon>
</div>
                            Leather-bound cover (Modena Leather)
                        </li>
<li className="flex items-center gap-3 text-sm text-white">
<div className="bg-red-500/20 p-0.5 rounded-full">
<iconify-icon className="text-red-500" icon="lucide:check" width="12"></iconify-icon>
</div>
                            Exclusive 1:43 scale model gift
                        </li>
</ul>
<button className="w-full py-3 rounded-lg bg-white text-black font-medium text-sm hover:bg-neutral-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                        Pre-order Collector's
                    </button>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-neutral-900">
<div className="max-w-xl mx-auto px-6 text-center">
<h3 className="text-lg font-medium text-white mb-2">Join the Club</h3>
<p className="text-sm text-neutral-500 mb-6">Get notified about exclusive drops and car meets.</p>
<form className="flex flex-col sm:flex-row gap-3">
<div className="relative flex-1 group">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<iconify-icon className="text-neutral-500 group-focus-within:text-white transition-colors" icon="lucide:mail" width="16"></iconify-icon>
</div>

<input className="w-full bg-[#0a0a0a] border border-neutral-800 text-white text-sm rounded-lg py-2.5 pl-10 pr-4 focus:outline-none focus:border-neutral-600 focus:ring-1 focus:ring-neutral-600 transition-all placeholder:text-neutral-700" placeholder="enzo@ferrari.it" required="" type="email"/>
</div>
<button className="bg-neutral-800 hover:bg-neutral-700 text-white text-sm font-medium py-2.5 px-6 rounded-lg border border-neutral-700 transition-colors flex items-center justify-center gap-2" type="submit">
                    Subscribe
                </button>
</form>
<p className="mt-4 text-[10px] text-neutral-600">No spam, only speed. Unsubscribe at any time.</p>
</div>
</section>

<footer className="bg-black py-12 border-t border-neutral-900">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-3 h-3 bg-red-700 rounded-sm"></div>
<span className="text-sm font-semibold tracking-tight text-neutral-300">MODENA PUBLISHING</span>
</div>
<div className="flex gap-6 text-xs text-neutral-500 font-medium">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
<a className="hover:text-white transition-colors" href="#">Contact</a>
</div>
<div className="text-[10px] text-neutral-600">
                © 2023 Modena Books. Not affiliated with Ferrari S.p.A.
            </div>
</div>
</footer>

    </>
  );
}
