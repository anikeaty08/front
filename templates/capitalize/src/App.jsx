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



        // Initialize Lucide Icons
        lucide.createIcons();

        // Scroll Animation Logic (Intersection Observer)
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px'
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        observer.unobserve(entry.target); // Only animate once
                    }
                });
            }, observerOptions);

            const elements = document.querySelectorAll('.reveal');
            elements.forEach(el => observer.observe(el));
            
            // Navbar Blur Effect on Scroll
            window.addEventListener('scroll', () => {
                const nav = document.getElementById('navbar');
                if (window.scrollY > 50) {
                    nav.classList.add('bg-black/50', 'backdrop-blur-xl');
                } else {
                    nav.classList.remove('bg-black/50', 'backdrop-blur-xl');
                }
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 overflow-hidden pointer-events-none">
<div className="blob blob-1"></div>
<div className="blob blob-2"></div>
<div className="blob blob-3"></div>
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-20"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 glass transition-all duration-300" id="navbar">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg tracking-tighter font-medium text-white flex items-center gap-2 group" href="#">
<div className="relative w-6 h-6 flex items-center justify-center bg-white text-black rounded overflow-hidden">
<span className="z-10 text-xs font-bold">C</span>
<div className="absolute inset-0 bg-indigo-500 opacity-0 group-hover:opacity-20 transition-opacity"></div>
</div>
                CAPITALIZE
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
<a className="hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all" href="#method">The Method</a>
<a className="hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all" href="#outcomes">Results</a>
<a className="hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all" href="#pricing">Join</a>
</div>
<a className="group relative inline-flex h-9 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50" href="#pricing">
<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"></span>
<span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-4 py-1 text-xs font-medium text-white backdrop-blur-3xl transition-all group-hover:bg-slate-900">
                    Get Funded
                </span>
</a>
</div>
</nav>

<header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 max-w-6xl mx-auto text-center perspective-1000">
<div className="reveal inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-900/20 text-indigo-300 text-xs font-medium mb-8 hover:border-indigo-400/50 hover:bg-indigo-900/30 transition-all cursor-default shadow-[0_0_20px_-5px_rgba(99,102,241,0.3)]">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
            Limited Spots for October Cohort
        </div>
<h1 className="reveal delay-100 text-6xl md:text-8xl font-medium tracking-tight text-white mb-8 leading-[1.1]">
            Capital is <br/>
<span className="text-gradient-vibrant relative inline-block">
                Structured.
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-indigo-500 opacity-60" fill="none" viewbox="0 0 200 9" xmlns="http://www.w3.org/2000/svg"><path d="M2.00029 6.99997C32.4173 2.85699 95.8555 -1.92051 198.002 3.49996" stroke="currentColor" strokeWidth="3"></path></svg>
</span>
</h1>
<p className="reveal delay-200 text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            The algorithmic approach to securing $50k–$250k in 0% interest funding. No equity. No personal cash. Pure leverage.
        </p>
<div className="reveal delay-300 flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="group relative px-8 py-4 bg-white text-black rounded-lg text-sm font-semibold hover:bg-zinc-100 transition-all flex items-center gap-2 overflow-hidden" onclick="document.getElementById('pricing').scrollIntoView()">
<div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                Start Your Sequence
                <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</button>
<button className="px-8 py-4 border border-zinc-800 rounded-lg text-sm font-medium text-zinc-300 hover:border-zinc-600 hover:bg-white/5 transition-all backdrop-blur-sm" onclick="document.getElementById('method').scrollIntoView()">
                View Protocol
            </button>
</div>

<div className="reveal delay-500 mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 border-t border-white/10 pt-12">
<div className="text-center">
<div className="text-3xl font-semibold text-white mb-1">$14M+</div>
<div className="text-xs text-zinc-500 uppercase tracking-wide">Total Funded</div>
</div>
<div className="text-center">
<div className="text-3xl font-semibold text-white mb-1">0%</div>
<div className="text-xs text-zinc-500 uppercase tracking-wide">Avg. Interest</div>
</div>
<div className="text-center">
<div className="text-3xl font-semibold text-white mb-1">21 Days</div>
<div className="text-xs text-zinc-500 uppercase tracking-wide">Avg. Time to Fund</div>
</div>
<div className="text-center">
<div className="text-3xl font-semibold text-white mb-1">98%</div>
<div className="text-xs text-zinc-500 uppercase tracking-wide">Success Rate</div>
</div>
</div>
</header>

<div className="relative z-10 bg-black/20 backdrop-blur-sm border-t border-white/5">

<section className="py-24 px-6 max-w-6xl mx-auto" id="method">
<div className="mb-20 md:text-center max-w-3xl mx-auto">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6 text-white">Don't ask for money.<br/><span className="text-zinc-500">Engineer it.</span></h2>
<p className="text-zinc-400 text-lg">Traditional banking is a game of hidden rules. We give you the cheat codes to bypass manual underwriting.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group glass-card p-8 rounded-2xl relative overflow-hidden reveal">
<div className="absolute -right-6 -top-6 w-24 h-24 bg-indigo-500/20 rounded-full blur-2xl group-hover:bg-indigo-500/40 transition-all"></div>
<div className="w-12 h-12 rounded-lg bg-gradient-to-br from-zinc-800 to-zinc-900 border border-white/10 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
<i className="w-6 h-6 text-indigo-400" data-lucide="shield"></i>
</div>
<h3 className="text-xl font-semibold text-white mb-3">1. Compliance Shield</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                        We restructure your entity data (NAICS, 411, Address) to appear "Low Risk" to algorithms before you ever submit an application.
                    </p>
</div>

<div className="group glass-card p-8 rounded-2xl relative overflow-hidden reveal delay-100">
<div className="absolute -right-6 -top-6 w-24 h-24 bg-purple-500/20 rounded-full blur-2xl group-hover:bg-purple-500/40 transition-all"></div>
<div className="w-12 h-12 rounded-lg bg-gradient-to-br from-zinc-800 to-zinc-900 border border-white/10 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
<i className="w-6 h-6 text-purple-400" data-lucide="layers"></i>
</div>
<h3 className="text-xl font-semibold text-white mb-3">2. The Stacking Sequence</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                        Execute simultaneous applications across 5 specific banks in a 15-minute window. Secure maximum limits before inquiries hit your report.
                    </p>
</div>

<div className="group glass-card p-8 rounded-2xl relative overflow-hidden reveal delay-200">
<div className="absolute -right-6 -top-6 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl group-hover:bg-blue-500/40 transition-all"></div>
<div className="w-12 h-12 rounded-lg bg-gradient-to-br from-zinc-800 to-zinc-900 border border-white/10 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
<i className="w-6 h-6 text-blue-400" data-lucide="repeat"></i>
</div>
<h3 className="text-xl font-semibold text-white mb-3">3. Liquidation Loop</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                        Convert credit lines into liquid cash (wire transfer) at 0% interest. Use this capital to buy inventory, real estate, or scale ads.
                    </p>
</div>
</div>
</section>

<section className="py-10 px-6 max-w-6xl mx-auto reveal">
<div className="rounded-2xl border border-white/10 bg-zinc-900/50 overflow-hidden relative">
<div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"></div>
<div className="p-8 md:p-12 flex flex-col md:flex-row items-center gap-12">
<div className="flex-1">
<h3 className="text-2xl font-semibold text-white mb-4">Real-time Data Points</h3>
<p className="text-zinc-400 mb-6">Access our live database of 200+ lenders. See exactly which credit bureau they pull and what credit score is required for approval.</p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-zinc-300">
<i className="w-4 h-4 text-green-400" data-lucide="check-circle-2"></i>
                                Updated daily by our community
                            </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<i className="w-4 h-4 text-green-400" data-lucide="check-circle-2"></i>
                                Filter by "No Personal Guarantee"
                            </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<i className="w-4 h-4 text-green-400" data-lucide="check-circle-2"></i>
                                Direct CEO contacts for reconsideration
                            </li>
</ul>
</div>

<div className="flex-1 w-full">
<div className="relative bg-black border border-white/10 rounded-xl p-6 shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/50"></div>
</div>
<div className="h-2 w-20 bg-zinc-800 rounded-full"></div>
</div>
<div className="space-y-3">
<div className="flex items-center justify-between p-3 bg-zinc-900/50 rounded border border-white/5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-blue-900/30 border border-blue-500/30 flex items-center justify-center text-blue-400 font-bold text-xs">A</div>
<div className="space-y-1">
<div className="h-2 w-16 bg-zinc-700 rounded"></div>
<div className="h-1.5 w-10 bg-zinc-800 rounded"></div>
</div>
</div>
<div className="px-2 py-1 bg-green-500/10 text-green-400 text-xs rounded border border-green-500/20">Approved</div>
</div>
<div className="flex items-center justify-between p-3 bg-zinc-900/50 rounded border border-white/5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-purple-900/30 border border-purple-500/30 flex items-center justify-center text-purple-400 font-bold text-xs">C</div>
<div className="space-y-1">
<div className="h-2 w-20 bg-zinc-700 rounded"></div>
<div className="h-1.5 w-12 bg-zinc-800 rounded"></div>
</div>
</div>
<div className="px-2 py-1 bg-green-500/10 text-green-400 text-xs rounded border border-green-500/20">Approved</div>
</div>
<div className="flex items-center justify-between p-3 bg-zinc-900/50 rounded border border-white/5 opacity-50">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-500 font-bold text-xs">B</div>
<div className="space-y-1">
<div className="h-2 w-14 bg-zinc-700 rounded"></div>
<div className="h-1.5 w-8 bg-zinc-800 rounded"></div>
</div>
</div>
<div className="px-2 py-1 bg-yellow-500/10 text-yellow-400 text-xs rounded border border-yellow-500/20">Pending</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="outcomes">
<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
<div className="max-w-6xl mx-auto px-6 mb-12 flex items-end justify-between">
<div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-2">Cohort Results</h2>
<p className="text-zinc-400">Real founders. Real funding.</p>
</div>
<div className="flex gap-2">
<button className="p-2 rounded-full border border-zinc-800 hover:bg-zinc-800 transition-colors text-zinc-400 hover:text-white"><i className="w-5 h-5" data-lucide="chevron-left"></i></button>
<button className="p-2 rounded-full border border-zinc-800 hover:bg-zinc-800 transition-colors text-zinc-400 hover:text-white"><i className="w-5 h-5" data-lucide="chevron-right"></i></button>
</div>
</div>

<div className="flex overflow-x-auto gap-6 px-6 pb-8 snap-x no-scrollbar max-w-[100vw]">

<div className="min-w-[350px] md:min-w-[400px] snap-center glass-card p-8 rounded-xl flex flex-col justify-between">
<div>
<div className="flex text-indigo-400 mb-4">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-zinc-200 leading-relaxed mb-6">"I was rejected by Chase 3 times. Following the Week 2 module on 'Data Structuring', I fixed my NAICS code and got approved for $45k instantly. Total funding is now $180k."</p>
</div>
<div className="flex items-center gap-4 border-t border-white/5 pt-4">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-sm font-semibold text-white">JS</div>
<div>
<div className="text-sm font-medium text-white">James S.</div>
<div className="text-xs text-zinc-500">E-commerce Founder</div>
</div>
<span className="ml-auto text-xs text-green-400 bg-green-400/10 px-2 py-1 rounded border border-green-400/20">Verified $180k</span>
</div>
</div>

<div className="min-w-[350px] md:min-w-[400px] snap-center glass-card p-8 rounded-xl flex flex-col justify-between">
<div>
<div className="flex text-indigo-400 mb-4">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-zinc-200 leading-relaxed mb-6">"The liquidation strategy is genius. I moved $50k from an Amex card to my checking account at 0% interest to put a down payment on a duplex. This paid for itself 10x."</p>
</div>
<div className="flex items-center gap-4 border-t border-white/5 pt-4">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-sm font-semibold text-white">MR</div>
<div>
<div className="text-sm font-medium text-white">Maria R.</div>
<div className="text-xs text-zinc-500">Real Estate Investor</div>
</div>
<span className="ml-auto text-xs text-green-400 bg-green-400/10 px-2 py-1 rounded border border-green-400/20">Verified $50k</span>
</div>
</div>

<div className="min-w-[350px] md:min-w-[400px] snap-center glass-card p-8 rounded-xl flex flex-col justify-between">
<div>
<div className="flex text-indigo-400 mb-4">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-zinc-200 leading-relaxed mb-6">"I had no business history. The 'No-Doc' list they provide is gold. I secured 3 cards totaling $65k in my first month without showing a single tax return."</p>
</div>
<div className="flex items-center gap-4 border-t border-white/5 pt-4">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-sm font-semibold text-white">DK</div>
<div>
<div className="text-sm font-medium text-white">David K.</div>
<div className="text-xs text-zinc-500">SaaS Startup</div>
</div>
<span className="ml-auto text-xs text-green-400 bg-green-400/10 px-2 py-1 rounded border border-green-400/20">Verified $65k</span>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto" id="pricing">
<div className="text-center mb-16 reveal">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-4">Invest in your Liquidity.</h2>
<p className="text-zinc-400">Choose the structure that fits your cash flow.</p>
</div>
<div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

<div className="glass p-1 rounded-2xl reveal delay-100 hover:scale-[1.02] transition-transform">
<div className="bg-zinc-950 rounded-xl p-8 h-full flex flex-col relative overflow-hidden">
<div className="absolute top-0 right-0 bg-zinc-800 text-zinc-400 text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">Flexible</div>
<div className="mb-8">
<h3 className="text-xl font-medium text-white mb-2">Monthly Installments</h3>
<p className="text-sm text-zinc-400">Spread the cost over 3 months.</p>
</div>
<div className="mb-8">
<div className="flex items-baseline gap-1">
<span className="text-4xl font-semibold text-white">$1,100</span>
<span className="text-sm text-zinc-500">/month</span>
</div>
<p className="text-xs text-zinc-500 mt-1">Total: $3,300</p>
</div>
<ul className="space-y-4 mb-8 flex-grow">
<li className="flex items-center gap-3 text-sm text-zinc-300">
<div className="p-1 bg-white/10 rounded-full"><i className="w-3 h-3 text-white" data-lucide="check"></i></div>
                                Full Course Access
                            </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<div className="p-1 bg-white/10 rounded-full"><i className="w-3 h-3 text-white" data-lucide="check"></i></div>
                                Live Weekly Coaching
                            </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<div className="p-1 bg-white/10 rounded-full"><i className="w-3 h-3 text-white" data-lucide="check"></i></div>
                                Lender Database
                            </li>
</ul>
<button className="w-full py-4 border border-white/20 rounded-lg text-white hover:bg-white/5 transition-all text-sm font-medium">
                            Select Plan
                        </button>
</div>
</div>

<div className="p-[1px] rounded-2xl bg-gradient-to-b from-indigo-500 to-purple-600 reveal delay-200 hover:scale-[1.02] transition-transform shadow-[0_0_40px_-10px_rgba(79,70,229,0.3)]">
<div className="bg-zinc-900/90 backdrop-blur-xl rounded-xl p-8 h-full flex flex-col relative overflow-hidden">
<div className="absolute top-0 right-0 bg-indigo-500 text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">Best Value</div>
<div className="mb-8">
<h3 className="text-xl font-medium text-white mb-2">One-Time Payment</h3>
<p className="text-sm text-zinc-400">Commit fully and save $303.</p>
</div>
<div className="mb-8">
<div className="flex items-baseline gap-1">
<span className="text-4xl font-semibold text-white">$2,997</span>
<span className="text-sm text-zinc-500">one-time</span>
</div>
<p className="text-xs text-green-400 mt-1">Save 10% instantly</p>
</div>
<ul className="space-y-4 mb-8 flex-grow">
<li className="flex items-center gap-3 text-sm text-white">
<div className="p-1 bg-indigo-500 rounded-full"><i className="w-3 h-3 text-white" data-lucide="check"></i></div>
<strong>Everything in Monthly</strong>
</li>
<li className="flex items-center gap-3 text-sm text-white">
<div className="p-1 bg-indigo-500 rounded-full"><i className="w-3 h-3 text-white" data-lucide="check"></i></div>
                                1-on-1 Strategy Audit Call
                            </li>
<li className="flex items-center gap-3 text-sm text-white">
<div className="p-1 bg-indigo-500 rounded-full"><i className="w-3 h-3 text-white" data-lucide="check"></i></div>
                                VIP Community Access
                            </li>
</ul>
<button className="w-full py-4 bg-white text-black rounded-lg hover:bg-zinc-200 transition-all text-sm font-bold shadow-lg shadow-indigo-500/20 mb-4">
                            Get Instant Access
                        </button>

<div className="flex items-center justify-center gap-3 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">

<svg className="h-6 w-auto" fill="none" viewbox="0 0 36 24" xmlns="http://www.w3.org/2000/svg"><rect fill="#27272A" height="24" rx="4" width="36"></rect><path d="M13.5 12.5L15.5 8.5H17.5L14.5 15.5H12.5L11 8.5H13L13.5 12.5Z" fill="white"></path><path d="M19.5 8.5H18L18 15.5H19.5V8.5Z" fill="white"></path><path d="M23 9.5C22.5 9.5 21.5 9.7 21.5 10.5C21.5 11.2 22.2 11.3 22.7 11.4C23.5 11.5 24 11.7 24 12.2C24 13 23.2 13 22.5 13C21.5 13 21 12.5 21 12.5L20.5 13.5C20.5 13.5 21.2 14.5 22.5 14.5C24.2 14.5 25.5 13.5 25.5 12.2C25.5 10.5 23.5 10.5 23 10.4C22.2 10.3 21.7 10.2 21.7 9.8C21.7 9.2 22.2 8.8 23 8.8C23.8 8.8 24.2 9.2 24.2 9.2L24.7 8.2C24.7 8.2 24 7.5 23 7.5C21.5 7.5 20.5 8.5 20.5 9.5L23 9.5Z" fill="white"></path></svg>
<div className="text-[10px] text-zinc-500 font-mono">SECURE CHECKOUT</div>
</div>
</div>
</div>
</div>
<div className="text-center mt-8">
<p className="text-[10px] text-zinc-600">
                    Protected by 256-bit SSL encryption. 30-Day Money Back Guarantee upon proof of action.
                </p>
</div>
</section>
</div>

<footer className="relative z-10 bg-black py-12 px-6 border-t border-white/5">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="bg-zinc-800 text-zinc-400 w-5 h-5 flex items-center justify-center rounded text-[10px] font-bold">C</span>
<span className="text-sm text-zinc-500 font-medium">Capitalize © 2023</span>
</div>
<div className="flex gap-6 text-xs text-zinc-500">
<a className="hover:text-zinc-300 transition-colors" href="#">Terms</a>
<a className="hover:text-zinc-300 transition-colors" href="#">Privacy</a>
<a className="hover:text-zinc-300 transition-colors" href="#">Support</a>
</div>
</div>
</footer>


    </>
  );
}
