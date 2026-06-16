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



        document.addEventListener('DOMContentLoaded', () => {
            // Number Counter Animation
            const counters = document.querySelectorAll('.counter');
            
            const animateCounter = (el) => {
                const target = parseFloat(el.getAttribute('data-target'));
                const prefix = el.getAttribute('data-prefix') || '';
                const suffix = el.getAttribute('data-suffix') || '';
                const decimals = parseInt(el.getAttribute('data-decimals') || '0');
                const duration = 1500;
                let startTime = null;

                const step = (timestamp) => {
                    if (!startTime) startTime = timestamp;
                    const progress = Math.min((timestamp - startTime) / duration, 1);
                    // easeOutQuart
                    const easeProgress = 1 - Math.pow(1 - progress, 4);
                    
                    const current = (easeProgress * target).toFixed(decimals);
                    el.innerText = `${prefix}${current}${suffix}`;

                    if (progress < 1) {
                        window.requestAnimationFrame(step);
                    } else {
                        el.innerText = `${prefix}${target}${suffix}`;
                    }
                };
                window.requestAnimationFrame(step);
            };

            const observerOptions = { threshold: 0.4 };
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // Animate dials
                        if (entry.target.classList.contains('dial-container')) {
                            entry.target.classList.add('visible');
                        }
                        // Animate counters inside
                        const counter = entry.target.querySelector('.counter') || (entry.target.classList.contains('counter') ? entry.target : null);
                        if (counter && !counter.classList.contains('animated')) {
                            animateCounter(counter);
                            counter.classList.add('animated');
                        }
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.dial-container').forEach(el => observer.observe(el));
            document.querySelectorAll('.counter:not(.dial-container .counter)').forEach(el => observer.observe(el));

            // Mouse move spotlight effect for portfolio cards
            const cards = document.querySelectorAll('#portfolio .group');
            cards.forEach(card => {
                card.addEventListener('mousemove', e => {
                    const rect = card.getBoundingClientRect();
                    const x = ((e.clientX - rect.left) / rect.width) * 100;
                    const y = ((e.clientY - rect.top) / rect.height) * 100;
                    card.style.setProperty('--x', `${x}%`);
                    card.style.setProperty('--y', `${y}%`);
                });
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed bottom-8 -right-24 z-40 origin-left -rotate-90 pointer-events-none mix-blend-difference">
<p className="font-mono-custom text-xs text-white/20 uppercase tracking-widest transition-opacity duration-300 hover:text-white/60 pointer-events-auto cursor-default">
            FUND III — VINTAGE 2024 — $280M AUM
        </p>
</div>

<nav className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-[#0a0a0a]/80 border-b border-white/5">
<div className="max-w-[88vw] mx-auto flex items-center justify-between h-20">
<a className="flex items-center gap-3 logo-container group" href="#">
<svg className="text-white" fill="none" height="32" viewbox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg">
<circle className="logo-dot-1 stroke-white stroke-[1.5] fill-transparent" cx="6" cy="16" r="2.5"></circle>
<circle className="logo-dot-2 stroke-white stroke-[1.5] fill-transparent" cx="16" cy="10" r="1.5"></circle>
<circle className="logo-dot-3 stroke-white stroke-[1.5] fill-transparent" cx="20" cy="22" r="1.5"></circle>
<circle className="logo-dot-4 stroke-white stroke-[1.5] fill-transparent" cx="28" cy="14" r="2"></circle>
<path className="logo-line" d="M7 15L15 11" stroke="white" strokeWidth="0.8"></path>
<path className="logo-line" d="M7 17L19 21" stroke="white" strokeWidth="0.8"></path>
<path className="logo-line" d="M17 10.5L27 13.5" stroke="white" strokeWidth="0.8"></path>
</svg>
<span className="font-display font-bold tracking-tight text-xl">VECTIS</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#707070]">
<a className="hover:text-white transition-colors" href="#portfolio">Portfolio</a>
<a className="hover:text-white transition-colors" href="#thesis">Thesis</a>
<a className="hover:text-white transition-colors" href="#team">Founders</a>
<a className="hover:text-white transition-colors" href="#fund">Fund</a>
</div>
<div className="hidden md:flex items-center gap-6">
<a className="bracket-btn flex items-center gap-1 text-xs font-mono-custom text-white/60 hover:text-white transition-colors uppercase" href="#">
<span className="bracket">[</span><span className="bracket-text transition-all duration-300">View Fund Deck</span><span className="bracket">]</span>
</a>
<a className="btn-shape-a bg-[#C8FF00] text-[#0a0a0a] font-bold px-6 py-2.5 text-sm inline-flex overflow-hidden h-10" href="#apply">
<div className="hover-slide-text h-[200%] -translate-y-[0%]">
<span className="flex items-center justify-center h-1/2">Apply Now</span>
<span className="flex items-center justify-center h-1/2">Apply Now</span>
</div>
</a>
</div>
<button className="md:hidden text-white">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>
<main>

<section className="hero-bg min-h-screen pt-32 pb-20 md:pt-40 flex items-center relative z-10 border-b border-white/5">
<div className="max-w-[88vw] mx-auto w-full grid md:grid-cols-[52%_48%] gap-12 lg:gap-20 items-center">
<div className="flex flex-col items-start relative z-20">
<div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm">
<div className="w-1.5 h-1.5 rounded-full bg-[#C8FF00] animate-pulse"></div>
<span className="font-mono-custom text-xs text-[#f0f0ee]">FUND III ACTIVELY DEPLOYING</span>
</div>
<h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-8">
                        We back founders who build what shouldn't exist — until it <span className="text-[#C8FF00]">DOES.</span>
</h1>
<p className="text-base md:text-lg text-[#707070] max-w-lg mb-10 leading-relaxed font-light">
                        $280M deployed across 47 companies. Average entry at $8M valuation. 3.8x realized MOIC. Uncompromising conviction from day zero.
                    </p>
<div className="flex flex-wrap items-center gap-4 mb-16">
<a className="btn-shape-a bg-[#C8FF00] text-[#0a0a0a] font-bold px-8 py-4 text-base inline-flex overflow-hidden h-14 group" href="#apply">
<div className="hover-slide-text h-[200%] -translate-y-[0%] w-full">
<span className="flex items-center justify-center h-1/2 w-full gap-2">Apply Now <iconify-icon icon="solar:arrow-right-linear" strokeWidth="2" width="18"></iconify-icon></span>
<span className="flex items-center justify-center h-1/2 w-full gap-2">Apply Now <iconify-icon icon="solar:arrow-right-linear" strokeWidth="2" width="18"></iconify-icon></span>
</div>
</a>
<a className="btn-shape-b border border-white/20 text-white font-medium px-8 py-4 text-base hover:border-[#C8FF00] hover:text-[#C8FF00] transition-colors relative group" href="#portfolio">
                            View Portfolio
                        </a>
</div>
<div className="flex flex-col gap-3">
<span className="font-mono-custom text-xs text-[#707070]">CO-INVESTED WITH:</span>
<div className="flex items-center gap-6 opacity-35 grayscale flex-wrap">
<span className="font-display font-bold text-xl tracking-tighter">YC</span>
<span className="font-display font-bold text-lg tracking-tight">SEQUOIA</span>
<span className="font-display font-bold text-lg tracking-tight lowercase">a16z</span>
<span className="font-display font-bold text-lg tracking-tight">ACCEL</span>
<span className="font-display font-bold text-lg tracking-tight">INDEX</span>
</div>
</div>
</div>

<div className="relative w-full aspect-[4/3] md:aspect-auto md:h-[500px] -translate-y-4 z-10 hidden md:block">
<div className="absolute inset-0 bg-[#C8FF00]/5 blur-[100px] rounded-full"></div>
<div className="absolute inset-0 bg-[#141414] border border-white/5 rounded-xl overflow-hidden shadow-2xl flex flex-col">
<div className="border-b border-white/5 px-6 py-4 flex items-center justify-between bg-[#0a0a0a]/50">
<span className="font-mono-custom text-xs text-[#707070]">ACTIVE PIPELINE — Q1 2025</span>
<div className="flex gap-3 font-mono-custom text-xs">
<span className="text-white">All</span>
<span className="text-[#707070]">Pre-Seed</span>
<span className="text-[#707070]">Seed</span>
</div>
</div>
<div className="flex-1 overflow-hidden flex flex-col p-2">

<div className="deal-row flex items-center justify-between p-4 hover:bg-[#C8FF00]/5 rounded-lg transition-colors group cursor-default">
<div className="flex items-center gap-4">
<div className="w-2 h-2 rounded-full bg-[#C8FF00] group-hover:scale-150 transition-transform duration-300"></div>
<span className="font-medium text-sm">Arkaive</span>
</div>
<div className="flex items-center gap-4">
<span className="font-mono-custom text-xs text-[#707070] bg-white/5 px-2 py-0.5 rounded">INFRA</span>
<span className="font-mono-custom text-xs text-[#C8FF00]">IN DD</span>
</div>
</div>
<div className="deal-row flex items-center justify-between p-4 hover:bg-[#C8FF00]/5 rounded-lg transition-colors group cursor-default">
<div className="flex items-center gap-4">
<div className="w-2 h-2 rounded-full bg-yellow-500 group-hover:scale-150 transition-transform duration-300"></div>
<span className="font-medium text-sm">Lumoscale</span>
</div>
<div className="flex items-center gap-4">
<span className="font-mono-custom text-xs text-[#707070] bg-white/5 px-2 py-0.5 rounded">AI</span>
<span className="font-mono-custom text-xs text-yellow-500">TERM SHEET</span>
</div>
</div>
<div className="deal-row flex items-center justify-between p-4 hover:bg-[#C8FF00]/5 rounded-lg transition-colors group cursor-default">
<div className="flex items-center gap-4">
<div className="w-2 h-2 rounded-full bg-white/40 group-hover:scale-150 transition-transform duration-300"></div>
<span className="font-medium text-sm">Driftnode</span>
</div>
<div className="flex items-center gap-4">
<span className="font-mono-custom text-xs text-[#707070] bg-white/5 px-2 py-0.5 rounded">FINTECH</span>
<span className="font-mono-custom text-xs text-[#707070]">MONITORING</span>
</div>
</div>
<div className="deal-row flex items-center justify-between p-4 hover:bg-[#C8FF00]/5 rounded-lg transition-colors group cursor-default">
<div className="flex items-center gap-4">
<div className="w-2 h-2 rounded-full bg-[#C8FF00] group-hover:scale-150 transition-transform duration-300"></div>
<span className="font-medium text-sm">Veth Labs</span>
</div>
<div className="flex items-center gap-4">
<span className="font-mono-custom text-xs text-[#707070] bg-white/5 px-2 py-0.5 rounded">BIOTECH</span>
<span className="font-mono-custom text-xs text-[#C8FF00]">IN DD</span>
</div>
</div>
<div className="deal-row flex items-center justify-between p-4 hover:bg-[#C8FF00]/5 rounded-lg transition-colors group cursor-default opacity-50">
<div className="flex items-center gap-4">
<div className="w-2 h-2 rounded-full bg-white/20"></div>
<span className="font-medium text-sm">Quanta Sync</span>
</div>
<div className="flex items-center gap-4">
<span className="font-mono-custom text-xs text-[#707070] bg-white/5 px-2 py-0.5 rounded">DEVTOOLS</span>
</div>
</div>
</div>
<div className="border-t border-white/5 px-6 py-3 bg-[#0a0a0a]/50">
<span className="font-mono-custom text-xs text-[#707070]">142 REVIEWED THIS MO. / 6 ACTIVE DD</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-20 border-b border-white/5 overflow-hidden relative flex flex-col gap-8">
<div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>
<div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>

<div className="flex whitespace-nowrap opacity-30 invert brightness-0 gap-16">
<div className="flex gap-16 animate-marquee items-center">
<span className="font-display font-bold text-3xl">Y COMBINATOR</span>
<span className="font-display font-bold text-3xl">SEQUOIA</span>
<span className="font-display font-bold text-3xl">A16Z</span>
<span className="font-display font-bold text-3xl">BENCHMARK</span>
<span className="font-display font-bold text-3xl">ACCEL</span>
<span className="font-display font-bold text-3xl">INDEX</span>
<span className="font-display font-bold text-3xl">GENERAL CATALYST</span>
<span className="font-display font-bold text-3xl">FOUNDERS FUND</span>
</div>
<div aria-hidden="true" className="flex gap-16 animate-marquee items-center">
<span className="font-display font-bold text-3xl">Y COMBINATOR</span>
<span className="font-display font-bold text-3xl">SEQUOIA</span>
<span className="font-display font-bold text-3xl">A16Z</span>
<span className="font-display font-bold text-3xl">BENCHMARK</span>
<span className="font-display font-bold text-3xl">ACCEL</span>
<span className="font-display font-bold text-3xl">INDEX</span>
<span className="font-display font-bold text-3xl">GENERAL CATALYST</span>
<span className="font-display font-bold text-3xl">FOUNDERS FUND</span>
</div>
</div>

<div className="flex whitespace-nowrap opacity-20 gap-8 mt-4">
<div className="flex gap-8 animate-marquee-reverse items-center font-mono-custom text-sm">
<span>Arkaive</span><span>·</span>
<span>Lumoscale</span><span>·</span>
<span>Driftnode</span><span>·</span>
<span>Veth Labs</span><span>·</span>
<span>Quanta Sync</span><span>·</span>
<span>Parallel</span><span>·</span>
<span>Orbitly</span><span>·</span>
<span>Stackform</span><span>·</span>
<span>Nocton</span><span>·</span>
<span>Cellar</span>
</div>
<div aria-hidden="true" className="flex gap-8 animate-marquee-reverse items-center font-mono-custom text-sm">
<span>Arkaive</span><span>·</span>
<span>Lumoscale</span><span>·</span>
<span>Driftnode</span><span>·</span>
<span>Veth Labs</span><span>·</span>
<span>Quanta Sync</span><span>·</span>
<span>Parallel</span><span>·</span>
<span>Orbitly</span><span>·</span>
<span>Stackform</span><span>·</span>
<span>Nocton</span><span>·</span>
<span>Cellar</span>
</div>
</div>
</section>

<section className="py-24 md:py-32 border-b border-white/5" id="fund">
<div className="max-w-[88vw] mx-auto">
<div className="mb-16">
<span className="font-mono-custom text-xs text-[#707070] mb-4 block">[/001/] FUND PERFORMANCE</span>
<h2 className="font-display font-bold text-3xl md:text-5xl lg:text-6xl tracking-tight max-w-4xl">
                        Capital deployed. Founders backed. Returns <span className="text-[#C8FF00]">COMPOUNDING.</span>
</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-white/5">

<div className="border-b border-r border-white/5 p-8 flex flex-col justify-between min-h-[240px] group hover:bg-white/[0.02] transition-colors relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#141414] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></div>
<h3 className="font-mono-custom text-5xl md:text-6xl font-medium text-white mb-2 relative z-10 counter" data-prefix="$" data-suffix="M" data-target="280">$0M</h3>
<div className="relative z-10">
<p className="text-sm text-[#f0f0ee] mb-2 font-medium">Deployed across 3 funds</p>
<div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 group-hover:mt-4 transition-all duration-300 font-mono-custom text-xs text-[#707070]">
                                Fund I: $40M<br/>Fund II: $90M<br/>Fund III: $150M
                            </div>
</div>
</div>

<div className="border-b border-r border-white/5 p-8 flex flex-col justify-between min-h-[240px] group hover:bg-white/[0.02] transition-colors relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#141414] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></div>
<h3 className="font-mono-custom text-5xl md:text-6xl font-medium text-white mb-2 relative z-10 counter" data-target="47">0</h3>
<div className="relative z-10">
<p className="text-sm text-[#f0f0ee] mb-2 font-medium">Portfolio companies</p>
<div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 group-hover:mt-4 transition-all duration-300 font-mono-custom text-xs text-[#707070]">
                                12 Exits<br/>3 IPOs<br/>32 Active
                            </div>
</div>
</div>

<div className="border-b border-r border-white/5 p-8 flex flex-col justify-between min-h-[240px] group hover:bg-white/[0.02] transition-colors relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#141414] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></div>
<h3 className="font-mono-custom text-5xl md:text-6xl font-medium text-white mb-2 relative z-10 counter" data-decimals="1" data-suffix="x" data-target="3.8">0.0x</h3>
<div className="relative z-10">
<p className="text-sm text-[#f0f0ee] mb-2 font-medium">Realized MOIC, Fund I+II</p>
<div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 group-hover:mt-4 transition-all duration-300 font-mono-custom text-xs text-[#707070]">
                                Top decile performance<br/>Vintage 2018 &amp; 2021
                            </div>
</div>
</div>

<div className="border-b border-r border-white/5 p-8 flex flex-col justify-between min-h-[240px] group hover:bg-white/[0.02] transition-colors relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#141414] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></div>
<h3 className="font-mono-custom text-5xl md:text-6xl font-medium text-white mb-2 relative z-10 counter" data-suffix="%" data-target="68">0%</h3>
<div className="relative z-10">
<p className="text-sm text-[#f0f0ee] mb-2 font-medium">Raised follow-on</p>
<div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 group-hover:mt-4 transition-all duration-300 font-mono-custom text-xs text-[#707070]">
                                From Tier 1 leads<br/>within 18 months
                            </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 border-b border-white/5 relative" id="thesis">
<div className="max-w-[88vw] mx-auto grid lg:grid-cols-[40%_60%] gap-16 items-start">
<div className="lg:sticky lg:top-32">
<span className="font-mono-custom text-xs text-[#707070] mb-4 block">[/002/] INVESTMENT THESIS</span>
<h2 className="font-display font-bold text-3xl md:text-5xl lg:text-6xl tracking-tight mb-6">
                        We invest in the <span className="text-[#C8FF00]">INFRASTRUCTURE</span> layer — not the apps built on top.
                    </h2>
<p className="text-base md:text-lg text-[#707070] font-light leading-relaxed">
                        Every 10-year platform shift creates a new infrastructure requirement. We find it first. We ignore the noise of consumer trends and focus on the primitives that will power the next decade of software.
                    </p>
</div>
<div className="flex flex-col gap-4">

<div className="reveal-card bg-[#141414] border border-white/5 rounded-xl p-8 cursor-default group flex justify-between items-start">
<div className="flex-1">
<div className="flex items-center gap-4 mb-2">
<span className="font-mono-custom text-xs text-[#C8FF00]">01</span>
<h3 className="font-display font-bold text-xl md:text-2xl text-white">Infrastructure Layer</h3>
</div>
<div className="reveal-content">
<div className="reveal-inner">
<p className="text-sm text-[#707070] leading-relaxed">The picks-and-shovels play of every new computing paradigm. We back compute optimization, novel data stores, and decentralized physical infrastructure networks.</p>
</div>
</div>
</div>
<div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center font-mono-custom text-xs text-white group-hover:border-[#C8FF00] group-hover:text-[#C8FF00] transition-colors shrink-0 ml-4">
                            87%
                        </div>
</div>

<div className="reveal-card bg-[#141414] border border-white/5 rounded-xl p-8 cursor-default group flex justify-between items-start">
<div className="flex-1">
<div className="flex items-center gap-4 mb-2">
<span className="font-mono-custom text-xs text-[#C8FF00]">02</span>
<h3 className="font-display font-bold text-xl md:text-2xl text-white">AI-Native Products</h3>
</div>
<div className="reveal-content">
<div className="reveal-inner">
<p className="text-sm text-[#707070] leading-relaxed">Not AI features bolted onto legacy software. Native from line one. Models as a service, specialized routing layers, and cognitive architectures.</p>
</div>
</div>
</div>
<div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center font-mono-custom text-xs text-white group-hover:border-[#C8FF00] group-hover:text-[#C8FF00] transition-colors shrink-0 ml-4">
                            73%
                        </div>
</div>

<div className="reveal-card bg-[#141414] border border-white/5 rounded-xl p-8 cursor-default group flex justify-between items-start">
<div className="flex-1">
<div className="flex items-center gap-4 mb-2">
<span className="font-mono-custom text-xs text-[#C8FF00]">03</span>
<h3 className="font-display font-bold text-xl md:text-2xl text-white">Developer Tooling</h3>
</div>
<div className="reveal-content">
<div className="reveal-inner">
<p className="text-sm text-[#707070] leading-relaxed">The companies that make 10M developers 10x faster. CI/CD primitives, novel testing frameworks, and secure-by-default environment managers.</p>
</div>
</div>
</div>
<div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center font-mono-custom text-xs text-white group-hover:border-[#C8FF00] group-hover:text-[#C8FF00] transition-colors shrink-0 ml-4">
                            91%
                        </div>
</div>

<div className="reveal-card bg-[#141414] border border-white/5 rounded-xl p-8 cursor-default group flex justify-between items-start">
<div className="flex-1">
<div className="flex items-center gap-4 mb-2">
<span className="font-mono-custom text-xs text-[#C8FF00]">04</span>
<h3 className="font-display font-bold text-xl md:text-2xl text-white">FinTech Rails</h3>
</div>
<div className="reveal-content">
<div className="reveal-inner">
<p className="text-sm text-[#707070] leading-relaxed">Settlement, compliance, and money movement rebuilt from primitives. We ignore consumer neobanks and focus on B2B ledgers and cross-border settlement.</p>
</div>
</div>
</div>
<div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center font-mono-custom text-xs text-white group-hover:border-[#C8FF00] group-hover:text-[#C8FF00] transition-colors shrink-0 ml-4">
                            68%
                        </div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 border-b border-white/5 bg-[#050505]" id="portfolio">
<div className="max-w-[88vw] mx-auto">
<div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
<div className="max-w-3xl">
<span className="font-mono-custom text-xs text-[#707070] mb-4 block">[/003/] PORTFOLIO — FUND I · II · III</span>
<h2 className="font-display font-bold text-3xl md:text-5xl lg:text-6xl tracking-tight">
                            47 companies. 12 exits. One consistent <span className="text-[#C8FF00]">PATTERN.</span>
</h2>
</div>
<a className="bracket-btn flex items-center gap-1 text-xs font-mono-custom text-white/60 hover:text-white transition-colors uppercase shrink-0" href="#">
<span className="bracket">[</span><span className="bracket-text transition-all duration-300">View all 47</span><span className="bracket">]</span>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-[#141414] border border-white/5 rounded-lg p-6 flex flex-col justify-between min-h-[280px] relative overflow-hidden group hover:border-white/20 transition-colors">
<div className="absolute top-0 inset-x-0 h-1 bg-[#C8FF00]/30"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x,50%)_var(--y,50%),rgba(200,255,0,0.08)_0%,transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none spotlight"></div>
<div>
<div className="flex justify-between items-start mb-4">
<h3 className="font-display font-bold text-xl text-white">Arkaive</h3>
<span className="font-mono-custom text-[10px] text-[#707070] bg-white/5 px-2 py-1 rounded">INFRA</span>
</div>
<p className="text-sm text-[#707070] mb-6">Next-generation object storage built for AI inference workloads.</p>
</div>
<div>
<span className="font-mono-custom text-[10px] text-white/40 block mb-1">STAGE: SERIES A</span>
<div className="flex items-end gap-2">
<span className="font-mono-custom text-2xl text-white font-medium">$4.2M</span>
<span className="text-xs text-[#C8FF00] mb-1">+340% YoY ARR</span>
</div>
</div>
</div>

<div className="bg-[#141414] border border-white/5 rounded-lg p-6 flex flex-col justify-between min-h-[320px] relative overflow-hidden group hover:border-white/20 transition-colors">
<div className="absolute top-0 inset-x-0 h-1 bg-[#C8FF00]/15"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x,50%)_var(--y,50%),rgba(200,255,0,0.08)_0%,transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none spotlight"></div>
<div>
<div className="flex justify-between items-start mb-4">
<h3 className="font-display font-bold text-xl text-white">Lumoscale</h3>
<span className="font-mono-custom text-[10px] text-[#707070] bg-white/5 px-2 py-1 rounded">AI</span>
</div>
<p className="text-sm text-[#707070] mb-6">Cognitive architecture for enterprise workflow automation.</p>
</div>
<div>
<span className="font-mono-custom text-[10px] text-white/40 block mb-1">STAGE: SERIES B (SEQUOIA LEAD)</span>
<div className="flex items-end gap-2">
<span className="font-mono-custom text-2xl text-white font-medium">420K</span>
<span className="text-xs text-[#707070] mb-1">Developers active</span>
</div>
</div>
</div>

<div className="bg-[#141414] border border-white/5 rounded-lg p-6 flex flex-col justify-between min-h-[240px] relative overflow-hidden group hover:border-white/20 transition-colors">
<div className="absolute top-0 inset-x-0 h-1 bg-white/20"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x,50%)_var(--y,50%),rgba(255,255,255,0.08)_0%,transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none spotlight"></div>
<div>
<div className="flex justify-between items-start mb-4">
<h3 className="font-display font-bold text-xl text-white">Driftnode</h3>
<span className="font-mono-custom text-[10px] text-[#707070] bg-white/5 px-2 py-1 rounded">FINTECH</span>
</div>
<p className="text-sm text-[#707070] mb-6">Ledger primitive for cross-border settlement.</p>
</div>
<div>
<span className="font-mono-custom text-[10px] text-[#C8FF00] block mb-1">EXITED</span>
<div className="flex items-end gap-2">
<span className="font-mono-custom text-lg text-white font-medium">Acquired by Stripe</span>
<span className="text-xs text-[#707070] mb-1">2.1x in 18mo</span>
</div>
</div>
</div>

<div className="bg-[#141414] border border-white/5 rounded-lg p-6 flex flex-col justify-between min-h-[280px] relative overflow-hidden group hover:border-white/20 transition-colors">
<div className="absolute top-0 inset-x-0 h-1 bg-white/20"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x,50%)_var(--y,50%),rgba(255,255,255,0.08)_0%,transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none spotlight"></div>
<div>
<div className="flex justify-between items-start mb-4">
<h3 className="font-display font-bold text-xl text-white">Parallel</h3>
<span className="font-mono-custom text-[10px] text-[#707070] bg-white/5 px-2 py-1 rounded">DEVTOOLS</span>
</div>
<p className="text-sm text-[#707070] mb-6">Ephemeral environment manager for monorepos.</p>
</div>
<div>
<span className="font-mono-custom text-[10px] text-white/40 block mb-1">STAGE: SERIES A</span>
<div className="flex items-end gap-2">
<span className="font-mono-custom text-2xl text-white font-medium">$18M</span>
<span className="text-xs text-[#707070] mb-1">Raised (YC W23)</span>
</div>
</div>
</div>

<div className="bg-[#141414] border border-white/5 rounded-lg p-6 flex flex-col justify-between min-h-[240px] relative overflow-hidden group hover:border-white/20 transition-colors lg:-mt-10">
<div className="absolute top-0 inset-x-0 h-1 bg-[#C8FF00]/20"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x,50%)_var(--y,50%),rgba(200,255,0,0.08)_0%,transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none spotlight"></div>
<div>
<div className="flex justify-between items-start mb-4">
<h3 className="font-display font-bold text-xl text-white">Quanta Sync</h3>
<span className="font-mono-custom text-[10px] text-[#707070] bg-white/5 px-2 py-1 rounded">INFRA</span>
</div>
<p className="text-sm text-[#707070] mb-6">Distributed lock management for edge networks.</p>
</div>
<div>
<span className="font-mono-custom text-[10px] text-white/40 block mb-1">STAGE: SEED</span>
<div className="flex items-end gap-2">
<span className="font-mono-custom text-2xl text-white font-medium">12K</span>
<span className="text-xs text-[#707070] mb-1">Enterprise seats</span>
</div>
</div>
</div>

<div className="bg-[#141414] border border-white/5 rounded-lg p-6 flex flex-col justify-between min-h-[320px] relative overflow-hidden group hover:border-white/20 transition-colors lg:-mt-20">
<div className="absolute top-0 inset-x-0 h-1 bg-white/20"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x,50%)_var(--y,50%),rgba(255,255,255,0.08)_0%,transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none spotlight"></div>
<div>
<div className="flex justify-between items-start mb-4">
<h3 className="font-display font-bold text-xl text-white">Veth Labs</h3>
<span className="font-mono-custom text-[10px] text-[#707070] bg-white/5 px-2 py-1 rounded">BIOTECH</span>
</div>
<p className="text-sm text-[#707070] mb-6">Computational pipelines for protein folding simulation.</p>
</div>
<div>
<span className="font-mono-custom text-[10px] text-white/40 block mb-1">STAGE: SEED</span>
<div className="flex items-end gap-2">
<span className="font-mono-custom text-2xl text-white font-medium">$8M</span>
<span className="text-xs text-[#707070] mb-1">Pre-product funding</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 border-b border-white/5 relative overflow-hidden">
<div className="max-w-[88vw] mx-auto">
<div className="mb-16 md:mb-24 text-center">
<span className="font-mono-custom text-xs text-[#707070] mb-4 block">[/004/] FOUNDER PROCESS</span>
<h2 className="font-display font-bold text-3xl md:text-5xl lg:text-6xl tracking-tight max-w-4xl mx-auto">
                        From intro to term sheet in 18 <span className="text-[#C8FF00]">DAYS</span> — average.
                    </h2>
</div>
<div className="relative flex flex-col lg:flex-row gap-8 lg:gap-0 mt-20">

<div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-y-1/2 border-t border-dashed border-white/20 z-0"></div>
<div className="lg:hidden absolute left-8 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent border-l border-dashed border-white/20 z-0"></div>

<div className="flex-1 relative z-10 group pl-16 lg:pl-0">
<div className="absolute -left-4 lg:left-1/2 lg:-translate-x-1/2 lg:-top-16 text-[#C8FF00]/5 font-mono-custom text-6xl md:text-7xl lg:text-[100px] font-bold z-0 transition-transform duration-500 group-hover:scale-110 pointer-events-none lg:text-center">01</div>
<div className="bg-[#141414] border border-white/5 rounded-xl p-6 relative lg:mx-4 h-full flex flex-col justify-center before:absolute before:inset-0 before:rounded-xl before:border before:border-transparent hover:before:border-[#C8FF00]/30 before:transition-colors">
<h4 className="font-display font-bold text-lg text-white mb-2">Intro Call</h4>
<p className="text-sm text-[#707070]">30min. No deck required. We assess alignment immediately.</p>
</div>
</div>
<div className="flex-1 relative z-10 group pl-16 lg:pl-0">
<div className="absolute -left-4 lg:left-1/2 lg:-translate-x-1/2 lg:-top-16 text-[#C8FF00]/5 font-mono-custom text-6xl md:text-7xl lg:text-[100px] font-bold z-0 transition-transform duration-500 group-hover:scale-110 pointer-events-none lg:text-center">02</div>
<div className="bg-[#141414] border border-white/5 rounded-xl p-6 relative lg:mx-4 h-full flex flex-col justify-center before:absolute before:inset-0 before:rounded-xl before:border before:border-transparent hover:before:border-[#C8FF00]/30 before:transition-colors lg:translate-y-8">
<h4 className="font-display font-bold text-lg text-white mb-2">Market Deep Dive</h4>
<p className="text-sm text-[#707070]">60min. We do the research first. We debate the premise.</p>
</div>
</div>
<div className="flex-1 relative z-10 group pl-16 lg:pl-0">
<div className="absolute -left-4 lg:left-1/2 lg:-translate-x-1/2 lg:-top-16 text-[#C8FF00]/5 font-mono-custom text-6xl md:text-7xl lg:text-[100px] font-bold z-0 transition-transform duration-500 group-hover:scale-110 pointer-events-none lg:text-center">03</div>
<div className="bg-[#141414] border border-white/5 rounded-xl p-6 relative lg:mx-4 h-full flex flex-col justify-center before:absolute before:inset-0 before:rounded-xl before:border before:border-transparent hover:before:border-[#C8FF00]/30 before:transition-colors lg:-translate-y-4">
<h4 className="font-display font-bold text-lg text-white mb-2">Reference Checks</h4>
<p className="text-sm text-[#707070]">We call your champions AND your critics. Truth over hype.</p>
</div>
</div>
<div className="flex-1 relative z-10 group pl-16 lg:pl-0">
<div className="absolute -left-4 lg:left-1/2 lg:-translate-x-1/2 lg:-top-16 text-[#C8FF00]/5 font-mono-custom text-6xl md:text-7xl lg:text-[100px] font-bold z-0 transition-transform duration-500 group-hover:scale-110 pointer-events-none lg:text-center">04</div>
<div className="bg-[#141414] border border-white/5 rounded-xl p-6 relative lg:mx-4 h-full flex flex-col justify-center before:absolute before:inset-0 before:rounded-xl before:border before:border-transparent hover:before:border-[#C8FF00]/30 before:transition-colors lg:translate-y-12">
<h4 className="font-display font-bold text-lg text-white mb-2">IC Presentation</h4>
<p className="text-sm text-[#707070]">45min. You answer hard questions once to the full team.</p>
</div>
</div>
<div className="flex-1 relative z-10 group pl-16 lg:pl-0">
<div className="absolute -left-4 lg:left-1/2 lg:-translate-x-1/2 lg:-top-16 text-[#C8FF00]/5 font-mono-custom text-6xl md:text-7xl lg:text-[100px] font-bold z-0 transition-transform duration-500 group-hover:scale-110 pointer-events-none lg:text-center">05</div>
<div className="bg-[#141414] border border-white/5 rounded-xl p-6 relative lg:mx-4 h-full flex flex-col justify-center before:absolute before:inset-0 before:rounded-xl before:border before:border-transparent hover:before:border-[#C8FF00]/50 before:transition-colors lg:translate-y-2">
<h4 className="font-display font-bold text-lg text-[#C8FF00] mb-2">Term Sheet</h4>
<p className="text-sm text-[#707070]">Wire in 7 days from signature. Partnership begins.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 border-b border-white/5 bg-[#050505]">
<div className="max-w-[88vw] mx-auto text-center mb-16">
<span className="font-mono-custom text-xs text-[#707070] mb-4 block">[/005/] PORTFOLIO COMPOSITION</span>
<h2 className="font-display font-bold text-3xl md:text-5xl lg:text-6xl tracking-tight max-w-4xl mx-auto mb-6">
                    Infrastructure is 87% of our <span className="text-[#C8FF00]">RETURNS</span> — so it's 87% of our focus.
                </h2>
<p className="text-base text-[#707070] font-light max-w-2xl mx-auto">Not diversification for its own sake. Pattern recognition applied systematically across core layers.</p>
</div>
<div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 p-8 border border-white/5 rounded-2xl bg-[#0a0a0a]">

<div className="flex flex-col items-center dial-container group" style={{-TargetOffset: '36.79'}}> 
<div className="relative w-32 h-32 md:w-40 md:h-40 mb-6 group-hover:scale-105 transition-transform duration-500 ease-out">
<svg className="w-full h-full -rotate-90" viewbox="0 0 100 100">
<circle cx="50" cy="50" fill="none" r="45" stroke="rgba(255,255,255,0.05)" strokeWidth="6"></circle>
<circle className="gauge-arc" cx="50" cy="50" fill="none" r="45" stroke="#C8FF00" strokeWidth="6"></circle>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center">
<span className="font-mono-custom text-2xl md:text-3xl font-bold text-white group-hover:text-[#C8FF00] transition-colors"><span className="counter" data-target="87">0</span>%</span>
</div>
</div>
<span className="font-display font-bold text-sm text-center text-white">Infrastructure</span>
</div>

<div className="flex flex-col items-center dial-container group" style={{-TargetOffset: '76.41'}}> 
<div className="relative w-32 h-32 md:w-40 md:h-40 mb-6 group-hover:scale-105 transition-transform duration-500 ease-out">
<svg className="w-full h-full -rotate-90" viewbox="0 0 100 100">
<circle cx="50" cy="50" fill="none" r="45" stroke="rgba(255,255,255,0.05)" strokeWidth="6"></circle>
<circle className="gauge-arc" cx="50" cy="50" fill="none" r="45" stroke="#C8FF00" strokeWidth="6"></circle>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center">
<span className="font-mono-custom text-2xl md:text-3xl font-bold text-white group-hover:text-[#C8FF00] transition-colors"><span className="counter" data-target="73">0</span>%</span>
</div>
</div>
<span className="font-display font-bold text-sm text-center text-white">AI-Native</span>
</div>

<div className="flex flex-col items-center dial-container group" style={{-TargetOffset: '25.47'}}> 
<div className="relative w-32 h-32 md:w-40 md:h-40 mb-6 group-hover:scale-105 transition-transform duration-500 ease-out">
<svg className="w-full h-full -rotate-90" viewbox="0 0 100 100">
<circle cx="50" cy="50" fill="none" r="45" stroke="rgba(255,255,255,0.05)" strokeWidth="6"></circle>
<circle className="gauge-arc" cx="50" cy="50" fill="none" r="45" stroke="#C8FF00" strokeWidth="6"></circle>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center">
<span className="font-mono-custom text-2xl md:text-3xl font-bold text-white group-hover:text-[#C8FF00] transition-colors"><span className="counter" data-target="91">0</span>%</span>
</div>
</div>
<span className="font-display font-bold text-sm text-center text-white">Dev Tools</span>
</div>

<div className="flex flex-col items-center dial-container group" style={{-TargetOffset: '90.56'}}> 
<div className="relative w-32 h-32 md:w-40 md:h-40 mb-6 group-hover:scale-105 transition-transform duration-500 ease-out">
<svg className="w-full h-full -rotate-90" viewbox="0 0 100 100">
<circle cx="50" cy="50" fill="none" r="45" stroke="rgba(255,255,255,0.05)" strokeWidth="6"></circle>
<circle className="gauge-arc" cx="50" cy="50" fill="none" r="45" stroke="#C8FF00" strokeWidth="6"></circle>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center">
<span className="font-mono-custom text-2xl md:text-3xl font-bold text-white group-hover:text-[#C8FF00] transition-colors"><span className="counter" data-target="68">0</span>%</span>
</div>
</div>
<span className="font-display font-bold text-sm text-center text-white">FinTech Rails</span>
</div>
</div>
</section>

<section className="py-24 md:py-32 border-b border-white/5 overflow-hidden" id="team">
<div className="max-w-[88vw] mx-auto">
<div className="mb-16">
<span className="font-mono-custom text-xs text-[#707070] mb-4 block">[/006/] INVESTMENT COMMITTEE</span>
<h2 className="font-display font-bold text-3xl md:text-5xl lg:text-6xl tracking-tight max-w-4xl">
                        We've built companies. Then we learned to pick <span className="text-[#C8FF00]">BETTER</span> ones.
                    </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 perspective-1000">

<div className="group transform-style-3d transition-transform duration-500 hover:rotate-x-3 hover:-rotate-y-3 relative cursor-default">
<div className="aspect-[3/4] bg-[#141414] border border-white/5 rounded-lg overflow-hidden relative mb-4">
<div className="absolute inset-0 bg-neutral-800 grayscale group-hover:grayscale-0 transition-all duration-500">

<div className="w-full h-full bg-[radial-gradient(circle_at_50%_40%,#333_0%,#111_70%)] opacity-80 mix-blend-screen group-hover:bg-[radial-gradient(circle_at_50%_40%,#4a5c11_0%,#111_70%)] transition-colors"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-10 font-display font-bold text-9xl">MH</div>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80"></div>
<div className="absolute bottom-4 left-4 right-4">
<h3 className="font-display font-bold text-xl text-white mb-1">Marcus Held</h3>
<p className="font-mono-custom text-[10px] text-[#C8FF00]">GENERAL PARTNER</p>
</div>
</div>
<div className="flex items-center gap-3 opacity-50 mb-3">
<span className="font-display font-bold text-sm tracking-tight">STRIPE</span>
<span className="text-xs text-white/30">|</span>
<span className="font-display font-bold text-sm tracking-tight">PLURAL</span>
</div>
<p className="text-xs text-[#707070] font-mono-custom">LED ARKAIVE SEED</p>
</div>

<div className="group transform-style-3d transition-transform duration-500 hover:rotate-x-3 hover:rotate-y-3 relative cursor-default lg:mt-8">
<div className="aspect-[3/4] bg-[#141414] border border-white/5 rounded-lg overflow-hidden relative mb-4">
<div className="absolute inset-0 bg-neutral-800 grayscale group-hover:grayscale-0 transition-all duration-500">
<div className="w-full h-full bg-[radial-gradient(circle_at_50%_40%,#333_0%,#111_70%)] opacity-80 mix-blend-screen group-hover:bg-[radial-gradient(circle_at_50%_40%,#4a5c11_0%,#111_70%)] transition-colors"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-10 font-display font-bold text-9xl">SD</div>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80"></div>
<div className="absolute bottom-4 left-4 right-4">
<h3 className="font-display font-bold text-xl text-white mb-1">Sophie Devereux</h3>
<p className="font-mono-custom text-[10px] text-[#C8FF00]">GENERAL PARTNER</p>
</div>
</div>
<div className="flex items-center gap-3 opacity-50 mb-3">
<span className="font-display font-bold text-sm tracking-tight">MCKINSEY</span>
<span className="text-xs text-white/30">|</span>
<span className="font-display font-bold text-sm tracking-tight">INDEX</span>
</div>
<p className="text-xs text-[#707070] font-mono-custom">LED LUMOSCALE SERIES A</p>
</div>

<div className="group transform-style-3d transition-transform duration-500 hover:rotate-x-3 hover:-rotate-y-3 relative cursor-default">
<div className="aspect-[3/4] bg-[#141414] border border-white/5 rounded-lg overflow-hidden relative mb-4">
<div className="absolute inset-0 bg-neutral-800 grayscale group-hover:grayscale-0 transition-all duration-500">
<div className="w-full h-full bg-[radial-gradient(circle_at_50%_40%,#333_0%,#111_70%)] opacity-80 mix-blend-screen group-hover:bg-[radial-gradient(circle_at_50%_40%,#4a5c11_0%,#111_70%)] transition-colors"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-10 font-display font-bold text-9xl">JT</div>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80"></div>
<div className="absolute bottom-4 left-4 right-4">
<h3 className="font-display font-bold text-xl text-white mb-1">Jin Takasugi</h3>
<p className="font-mono-custom text-[10px] text-[#C8FF00]">PRINCIPAL</p>
</div>
</div>
<div className="flex items-center gap-3 opacity-50 mb-3">
<span className="font-display font-bold text-sm tracking-tight">LINEAR</span>
<span className="text-xs text-white/30">|</span>
<span className="font-display font-bold text-sm tracking-tight">VERCEL</span>
</div>
<p className="text-xs text-[#707070] font-mono-custom">LEADS DEVTOOLS</p>
</div>

<div className="group transform-style-3d transition-transform duration-500 hover:rotate-x-3 hover:rotate-y-3 relative cursor-default lg:mt-8">
<div className="aspect-[3/4] bg-[#141414] border border-white/5 rounded-lg overflow-hidden relative mb-4">
<div className="absolute inset-0 bg-neutral-800 grayscale group-hover:grayscale-0 transition-all duration-500">
<div className="w-full h-full bg-[radial-gradient(circle_at_50%_40%,#333_0%,#111_70%)] opacity-80 mix-blend-screen group-hover:bg-[radial-gradient(circle_at_50%_40%,#4a5c11_0%,#111_70%)] transition-colors"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-10 font-display font-bold text-9xl">CM</div>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80"></div>
<div className="absolute bottom-4 left-4 right-4">
<h3 className="font-display font-bold text-xl text-white mb-1">Cara Montez</h3>
<p className="font-mono-custom text-[10px] text-[#C8FF00]">CFO &amp; COO</p>
</div>
</div>
<div className="flex items-center gap-3 opacity-50 mb-3">
<span className="font-display font-bold text-sm tracking-tight">SEQUOIA</span>
<span className="text-xs text-white/30">|</span>
<span className="font-display font-bold text-sm tracking-tight">GOLDMAN</span>
</div>
<p className="text-xs text-[#707070] font-mono-custom">FUND OPS &amp; STRATEGY</p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 border-b border-white/5 bg-[#050505]">
<div className="max-w-[88vw] mx-auto mb-16">
<span className="font-mono-custom text-xs text-[#707070] mb-4 block">[/007/] FOUNDER VOICES</span>
<h2 className="font-display font-bold text-3xl md:text-5xl lg:text-6xl tracking-tight max-w-4xl">
                    We only care what founders say — not what <span className="text-[#C8FF00]">THEY</span> say.
                </h2>
</div>
<div className="flex overflow-x-auto snap-x snap-mandatory gap-6 px-[6vw] pb-12 no-scrollbar pl-[6vw] lg:pl-[6vw]">

<div className="snap-start shrink-0 w-[85vw] md:w-[600px] bg-[#141414] border border-white/5 rounded-xl p-8 hover:border-white/20 transition-all duration-300 group hover:-translate-y-2">
<p className="text-lg md:text-xl text-white font-medium leading-relaxed mb-8">
                        "Vectis called us before we knew we were fundraising. Term sheet in 11 days. Marcus rewrote our pricing model on call 2."
                    </p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-neutral-800 rounded-full grayscale opacity-80"></div>
<div>
<h4 className="font-display font-bold text-white">Yuki Tanaka</h4>
<p className="font-mono-custom text-[10px] text-[#707070]">CEO ARKAIVE — $4.2M ARR, 18MO POST-SEED</p>
</div>
</div>
<div className="mt-6 pt-6 border-t border-white/5 flex justify-between items-center">
<span className="text-xs text-[#707070] italic">via Vectis Founder Survey 2024</span>
<span className="font-mono-custom text-[10px] text-[#C8FF00] bg-[#C8FF00]/10 px-2 py-1 rounded">SERIES A</span>
</div>
</div>

<div className="snap-start shrink-0 w-[85vw] md:w-[600px] bg-[#141414] border border-white/5 rounded-xl p-8 hover:border-white/20 transition-all duration-300 group hover:-translate-y-2">
<p className="text-lg md:text-xl text-white font-medium leading-relaxed mb-8">
                        "Most VCs lead with valuation debates. Vectis led with 3 enterprise intros in week one. The value was immediate."
                    </p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-neutral-800 rounded-full grayscale opacity-80"></div>
<div>
<h4 className="font-display font-bold text-white">Priya Sheth</h4>
<p className="font-mono-custom text-[10px] text-[#707070]">CEO VETH LABS — SERIES A AT 6X SEED</p>
</div>
</div>
<div className="mt-6 pt-6 border-t border-white/5 flex justify-between items-center">
<span className="text-xs text-[#707070] italic">via Vectis Founder Survey 2024</span>
<span className="font-mono-custom text-[10px] text-white/60 bg-white/5 px-2 py-1 rounded">SEED</span>
</div>
</div>

<div className="snap-start shrink-0 w-[85vw] md:w-[600px] bg-[#141414] border border-white/5 rounded-xl p-8 hover:border-white/20 transition-all duration-300 group hover:-translate-y-2">
<p className="text-lg md:text-xl text-white font-medium leading-relaxed mb-8">
                        "Sophie passed on us at pre-seed. Called back 6 months later with a Series A lead. Intellectually honest like no one else."
                    </p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-neutral-800 rounded-full grayscale opacity-80"></div>
<div>
<h4 className="font-display font-bold text-white">Damien Koch</h4>
<p className="font-mono-custom text-[10px] text-[#707070]">CEO DRIFTNODE — ACQUIRED BY STRIPE</p>
</div>
</div>
<div className="mt-6 pt-6 border-t border-white/5 flex justify-between items-center">
<span className="text-xs text-[#707070] italic">via Vectis Founder Survey 2024</span>
<span className="font-mono-custom text-[10px] text-[#707070] bg-white/5 px-2 py-1 rounded">EXITED</span>
</div>
</div>

<div className="snap-start shrink-0 w-[6vw]"></div>
</div>
</section>

<section className="py-32 md:py-40 bg-[#C8FF00] text-[#0a0a0a] relative selection:bg-[#0a0a0a] selection:text-[#C8FF00]" id="apply">
<div className="absolute top-8 left-1/2 -translate-x-1/2 flex items-center gap-3 bg-[#0a0a0a] text-white px-4 py-1.5 rounded-full">
<div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
<span className="font-mono-custom text-[10px] uppercase tracking-widest">[/008/] JOIN THE PORTFOLIO</span>
</div>
<div className="max-w-[88vw] mx-auto text-center flex flex-col items-center">
<h2 className="font-display font-bold text-4xl md:text-6xl lg:text-[80px] leading-[0.9] tracking-tight mb-8">
                    Build something that<br/>shouldn't exist yet.
                </h2>
<p className="text-lg md:text-xl font-medium max-w-2xl mb-12 opacity-80">
                    We read every application. No cold intros required. Decision in 14 days.
                </p>
<div className="flex flex-col sm:flex-row gap-6 items-center mb-16 w-full sm:w-auto">
<a className="btn-shape-a bg-[#0a0a0a] text-[#C8FF00] font-bold px-10 py-5 text-lg inline-flex overflow-hidden h-16 w-full sm:w-auto justify-center" href="#">
<div className="hover-slide-text h-[200%] -translate-y-[0%] w-full">
<span className="flex items-center justify-center h-1/2 w-full gap-2">Apply for Funding</span>
<span className="flex items-center justify-center h-1/2 w-full gap-2">Apply for Funding <iconify-icon icon="solar:arrow-right-linear" strokeWidth="2" width="20"></iconify-icon></span>
</div>
</a>
<a className="btn-shape-b border border-[#0a0a0a]/30 text-[#0a0a0a] font-medium px-8 py-4 text-base hover:border-[#0a0a0a] transition-colors w-full sm:w-auto text-center" href="#">
                        Download Fund Deck
                    </a>
</div>
<div className="font-mono-custom text-xs font-bold opacity-60 tracking-wider">
                    CURRENTLY DEPLOYING FROM FUND III — $280M — ACCEPTING PRE-SEED THROUGH SERIES A
                </div>
</div>
</section>
</main>

<footer className="bg-[#050505] pt-24 border-t border-[#C8FF00]/25 relative overflow-hidden">
<div className="max-w-[88vw] mx-auto mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-8 relative z-10">
<div className="flex flex-col gap-4">
<p className="text-sm text-white/40 max-w-xs font-light">Back founders who rewrite industries. The uncompromising choice for early-stage infrastructure.</p>
<div className="flex gap-6 font-medium text-sm text-[#707070]">
<a className="hover:text-white transition-colors" href="#portfolio">Portfolio</a>
<a className="hover:text-[#C8FF00] transition-colors" href="#apply">Apply</a>
<a className="hover:text-white transition-colors" href="#">Fund Deck</a>
</div>
</div>
<div className="text-center group relative cursor-help">
<p className="font-mono-custom text-[11px] text-white/25">© 2025 Vectis Capital Management</p>

<div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max px-3 py-1.5 bg-[#141414] border border-white/10 rounded font-mono-custom text-[10px] text-[#707070] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    Fund I: 2018 · Fund II: 2021 · Fund III: 2024
                </div>
</div>
<div className="flex gap-6 text-white/45">
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="solar:link-linear" width="24"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="solar:letter-linear" width="24"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="solar:global-linear" width="24"></iconify-icon></a>
</div>
</div>
<div className="w-full overflow-hidden flex justify-center -mb-[2vw]">
<h2 className="font-display font-bold text-[13vw] leading-[0.75] tracking-tighter text-white/[0.03] hover:text-white/5 transition-all duration-[1.2s] ease-out hover:tracking-normal cursor-default select-none whitespace-nowrap">
                VECTIS
            </h2>
</div>
</footer>


    </>
  );
}
