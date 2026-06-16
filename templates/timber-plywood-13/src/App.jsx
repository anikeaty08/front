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



        document.addEventListener('DOMContentLoaded', () => {
            // 1. Hero Entrance Sequence
            const tl = anime.timeline({
                easing: 'easeOutExpo',
                duration: 1000
            });

            tl.add({
                targets: '.hero-el',
                translateY: [40, 0],
                opacity: [0, 1],
                delay: anime.stagger(150), // Stagger for waterfall effect
                duration: 1200
            });

            // 2. Continuous Float Animation for badges
            anime({
                targets: '.animate-float-slow',
                translateY: [-10, 10],
                duration: 4000,
                direction: 'alternate',
                loop: true,
                easing: 'easeInOutSine'
            });

            anime({
                targets: '.animate-float-delayed',
                translateY: [10, -10],
                duration: 4500,
                direction: 'alternate',
                loop: true,
                easing: 'easeInOutSine',
                delay: 500
            });

            // 3. Scroll Reveal Observer
            const observerOptions = {
                root: null,
                threshold: 0.15,
                rootMargin: "0px"
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        anime({
                            targets: entry.target,
                            translateY: [50, 0],
                            opacity: [0, 1],
                            duration: 1000,
                            easing: 'easeOutExpo'
                        });
                        
                        // Trigger counters if it's the stats section
                        if (entry.target.querySelector('.counter')) {
                            startCounters(entry.target);
                        }

                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.scroll-reveal').forEach(el => {
                el.style.opacity = '0'; // Set initial state
                observer.observe(el);
            });

            // 4. Counter Animation Function
            function startCounters(container) {
                const counters = container.querySelectorAll('.counter');
                counters.forEach(counter => {
                    const target = parseInt(counter.getAttribute('data-target'));
                    anime({
                        targets: counter,
                        innerHTML: [0, target],
                        round: 1, // No decimals
                        easing: 'easeOutExpo',
                        duration: 2500,
                        update: function(anim) {
                            if(target > 1000) {
                                counter.innerHTML = Math.round(anim.animations[0].currentValue) + '+';
                            } else {
                                counter.innerHTML = Math.round(anim.animations[0].currentValue);
                            }
                        }
                    });
                });
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 pointer-events-none bg-grid z-0"></div>

<nav className="fixed top-0 w-full z-50 border-b backdrop-blur-xl border-white/5 bg-black/50">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="flex justify-between items-center h-20">

<div className="flex items-center gap-3 cursor-pointer group">
<div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform duration-300 to-blue-700 text-black">
<span className="font-bold tracking-tighter text-lg">RS</span>
</div>
<div className="flex flex-col">
<span className="font-bold tracking-tight leading-none text-white">Rajesh Saw Mill</span>
<span className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 mt-1">Since 1967</span>
</div>
</div>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium transition-colors relative group text-neutral-400 hover:text-white" href="#products">
                        Collection
                        <span className="absolute -bottom-1 left-0 w-0 h-px bg-indigo-500 transition-all group-hover:w-full"></span>
</a>
<a className="text-sm font-medium transition-colors relative group text-neutral-400 hover:text-white" href="#legacy">
                        Legacy
                        <span className="absolute -bottom-1 left-0 w-0 h-px bg-indigo-500 transition-all group-hover:w-full"></span>
</a>
<a className="text-sm font-medium transition-colors relative group text-neutral-400 hover:text-white" href="#contact">
                        Contact
                        <span className="absolute -bottom-1 left-0 w-0 h-px bg-indigo-500 transition-all group-hover:w-full"></span>
</a>
</div>

<div className="hidden md:flex items-center gap-4">
<button className="text-sm font-semibold py-2.5 px-6 rounded-lg transition-all duration-300 shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)] flex items-center gap-2 group bg-white text-black hover:bg-neutral-200">
                        Get Quote
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>

<button className="md:hidden text-white">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="lg:pt-52 lg:pb-32 overflow-hidden z-10 pt-40 pb-20 relative">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col items-center text-center">

<div className="hero-el opacity-0 translate-y-4 mb-8">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/5 text-xs font-medium tracking-wide text-indigo-400">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-indigo-400"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                        Chennai's Premier Timber Partner
                    </div>
</div>

<h1 className="hero-el opacity-0 translate-y-8 text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter leading-[0.9] mb-8 text-white">
                    Build with <br/>
<span className="text-gradient-gold relative inline-block">
                        Strength
                        
<svg className="absolute w-full h-3 -bottom-1 left-0 text-amber-500 opacity-60" preserveaspectratio="none" viewbox="0 0 100 10">
<path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="2"></path>
</svg>
</span> &amp; Precision.
                </h1>

<p className="hero-el opacity-0 translate-y-4 text-lg max-w-2xl leading-relaxed font-light mb-10 text-neutral-400">
                    Sourcing the finest timber, plywood, and ACP surfaces since 1967. 
                    We bridge the gap between nature's raw materials and modern architectural marvels.
                </p>

<div className="hero-el opacity-0 translate-y-4 flex flex-wrap justify-center gap-4 mb-20">
<button className="h-12 px-8 rounded-lg hover:bg-indigo-500 font-medium transition-all duration-300 shadow-lg flex items-center gap-2 group bg-indigo-600 text-white shadow-indigo-900/40">
                        Explore Products
                        <iconify-icon className="group-hover:-translate-y-0.5 transition-transform" icon="solar:box-minimalistic-linear"></iconify-icon>
</button>
<button className="h-12 px-8 rounded-lg glass-panel font-medium transition-all duration-300 flex items-center gap-2 hover:bg-white/5 text-white">
<iconify-icon icon="solar:phone-calling-linear"></iconify-icon>
                        +91-81220 02222
                    </button>
</div>

<div className="hero-el opacity-0 scale-95 relative w-full max-w-5xl mx-auto perspective-1000">

<div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 rounded-3xl blur-3xl opacity-30 animate-pulse to-blue-600/20"></div>
<div className="relative rounded-2xl overflow-hidden border shadow-2xl backdrop-blur-sm group border-white/10 bg-neutral-900/50">
<img alt="Timber Warehouse" className="w-full h-auto object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000" src="https://images.unsplash.com/photo-1617104424032-b9bd6972d0e4?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>

<div className="absolute top-8 left-8 p-4 rounded-xl glass-panel animate-float-slow border-white/10">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400">
<iconify-icon icon="solar:verified-check-bold" width="20"></iconify-icon>
</div>
<div>
<div className="text-xs uppercase tracking-wider text-neutral-400">Quality Grade</div>
<div className="text-sm font-semibold text-white">ISO 9001 Certified</div>
</div>
</div>
</div>
<div className="absolute bottom-8 right-8 p-4 rounded-xl glass-panel animate-float-delayed text-right border-white/10">
<div className="text-xs uppercase tracking-wider mb-1 text-neutral-400">Stock Status</div>
<div className="flex items-center gap-2 justify-end">
<span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
<span className="text-sm font-semibold text-white">Ready for Delivery</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="border-y backdrop-blur-sm py-8 relative z-10 border-white/5 bg-black/40">
<div className="marquee-container flex items-center">
<div className="marquee-content flex gap-16 items-center px-8">

<span className="text-xl font-bold tracking-tight flex items-center gap-2 text-neutral-600"><iconify-icon icon="solar:star-circle-linear"></iconify-icon> GREENPLY</span>
<span className="text-xl font-bold tracking-tight flex items-center gap-2 text-neutral-600"><iconify-icon icon="solar:shield-check-linear"></iconify-icon> CENTURY</span>
<span className="text-xl font-bold tracking-tight flex items-center gap-2 text-neutral-600"><iconify-icon icon="solar:layers-linear"></iconify-icon> ALUDECOR</span>
<span className="text-xl font-bold tracking-tight flex items-center gap-2 text-neutral-600"><iconify-icon icon="solar:box-linear"></iconify-icon> KITPLY</span>
<span className="text-xl font-bold tracking-tight flex items-center gap-2 text-neutral-600"><iconify-icon icon="solar:crown-linear"></iconify-icon> SHARON</span>
<span className="text-xl font-bold tracking-tight flex items-center gap-2 text-neutral-600"><iconify-icon icon="solar:star-circle-linear"></iconify-icon> GREENPLY</span>
<span className="text-xl font-bold tracking-tight flex items-center gap-2 text-neutral-600"><iconify-icon icon="solar:shield-check-linear"></iconify-icon> CENTURY</span>
<span className="text-xl font-bold tracking-tight flex items-center gap-2 text-neutral-600"><iconify-icon icon="solar:layers-linear"></iconify-icon> ALUDECOR</span>
<span className="text-xl font-bold tracking-tight flex items-center gap-2 text-neutral-600"><iconify-icon icon="solar:box-linear"></iconify-icon> KITPLY</span>
<span className="text-xl font-bold tracking-tight flex items-center gap-2 text-neutral-600"><iconify-icon icon="solar:crown-linear"></iconify-icon> SHARON</span>
</div>
</div>
</div>

<section className="py-24 relative z-10" id="products">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4 text-white">Curated Collection</h2>
<p className="max-w-md text-neutral-400">Premium materials for interiors, exteriors, and structural integrity.</p>
</div>
<a className="text-indigo-500 transition-colors flex items-center gap-2 text-sm font-medium group hover:text-indigo-400" href="#">
                    View Full Catalog <iconify-icon className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">

<div className="md:col-span-2 row-span-2 rounded-3xl overflow-hidden relative group hover-glow border scroll-reveal border-white/10 bg-neutral-900">
<img alt="Timber" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&amp;w=2669&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t to-transparent from-black via-black/40"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<div className="flex items-center gap-2 mb-2 text-indigo-500">
<iconify-icon icon="solar:tree-bold-duotone"></iconify-icon>
<span className="text-xs font-bold uppercase tracking-widest">Signature</span>
</div>
<h3 className="text-3xl font-bold mb-2 text-white">Sawn Timber &amp; Hardwood</h3>
<p className="text-sm max-w-lg mb-6 text-neutral-400">Processed in our own mill. From Mango wood to Teak, seasoned for durability and cut to precise dimensions for structural use.</p>
<ul className="flex gap-4">
<li className="px-3 py-1 rounded-full text-xs backdrop-blur border bg-white/10 text-white border-white/10">Teak</li>
<li className="px-3 py-1 rounded-full text-xs backdrop-blur border bg-white/10 text-white border-white/10">Sal Wood</li>
<li className="px-3 py-1 rounded-full text-xs backdrop-blur border bg-white/10 text-white border-white/10">Custom Cut</li>
</ul>
</div>
</div>

<div className="rounded-3xl overflow-hidden relative group hover-glow border scroll-reveal delay-100 border-white/10 bg-neutral-900">
<img alt="Plywood" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1620616147668-5a4175370217?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent from-black"></div>
<div className="absolute bottom-0 left-0 p-6">
<iconify-icon className="text-indigo-500 text-3xl mb-3" icon="solar:layers-minimalistic-bold-duotone"></iconify-icon>
<h3 className="text-xl font-bold text-white">Plywood &amp; Blockboards</h3>
<p className="text-xs mt-2 text-neutral-400">MR &amp; BWR Grade. Termite resistant.</p>
</div>
</div>

<div className="rounded-3xl overflow-hidden relative group hover-glow border scroll-reveal delay-200 border-white/10 bg-neutral-900">
<img alt="ACP" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-700" src="https://plus.unsplash.com/premium_photo-1678743603403-a4478836551b?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent from-black"></div>
<div className="absolute bottom-0 left-0 p-6">
<iconify-icon className="text-indigo-500 text-3xl mb-3" icon="solar:pallete-2-bold-duotone"></iconify-icon>
<h3 className="text-xl font-bold text-white">ACP Sheets</h3>
<p className="text-xs mt-2 text-neutral-400">Aluminium Composite Panels for facades.</p>
</div>
</div>

<div className="md:col-span-3 rounded-3xl overflow-hidden relative group hover-glow border p-8 flex flex-col md:flex-row items-center justify-between gap-8 scroll-reveal delay-300 border-white/10 bg-neutral-900">
<div className="relative z-10 max-w-2xl">
<div className="flex items-center gap-2 mb-3">
<span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
<span className="text-xs font-bold uppercase tracking-widest text-cyan-500">Service Guarantee</span>
</div>
<h3 className="text-2xl font-bold mb-2 text-white">Same-Day Delivery in Chennai</h3>
<p className="text-sm text-neutral-400">We operate our own logistics fleet to ensure your materials arrive on site, on time. From Triplicane to OMR, we cover the city.</p>
</div>
<div className="relative w-full md:w-1/3 h-32 md:h-full rounded-xl overflow-hidden">

<div className="absolute inset-0 bg-neutral-800">
<div className="w-full h-full opacity-30" style={{backgroundImage: 'radial-gradient(#444 1px, transparent 1px)', backgroundSize: '10px 10px'}}></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-indigo-500 rounded-full shadow-[0_0_20px_rgba(245,158,11,0.6)] animate-ping"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 border-y border-white/5 bg-neutral-900/30">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-12">
<div className="text-center group scroll-reveal">
<div className="text-4xl md:text-5xl font-bold mb-2 group-hover:text-indigo-500 transition-colors counter text-white" data-target="55">0</div>
<div className="text-xs text-neutral-500 uppercase tracking-widest">Years Experience</div>
</div>
<div className="text-center group scroll-reveal delay-100">
<div className="text-4xl md:text-5xl font-bold mb-2 group-hover:text-indigo-500 transition-colors counter text-white" data-target="5000">0</div>
<div className="text-xs text-neutral-500 uppercase tracking-widest">Projects Completed</div>
</div>
<div className="text-center group scroll-reveal delay-200">
<div className="text-4xl md:text-5xl font-bold mb-2 group-hover:text-indigo-500 transition-colors counter text-white" data-target="150">0</div>
<div className="text-xs text-neutral-500 uppercase tracking-widest">Corporate Clients</div>
</div>
<div className="text-center group scroll-reveal delay-300">
<div className="text-4xl md:text-5xl font-bold mb-2 group-hover:text-indigo-500 transition-colors counter text-white" data-target="100">0</div>
<div className="text-xs text-neutral-500 uppercase tracking-widest">% Quality Check</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative z-10" id="legacy">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="scroll-reveal">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6 text-white">
                        Three Generations of <br/>
<span className="text-neutral-500">Unwavering Trust.</span>
</h2>
<p className="leading-relaxed mb-8 text-neutral-400">
                        Founded by Jethalal Hirji Gogri and propelled forward by Hitesh Shah, we don't just sell wood; we sell structural confidence. Our legacy is built on honest measurements, transparent pricing, and knowledge that only decades in the yard can teach.
                    </p>
<div className="space-y-4">
<div className="flex items-start gap-4 p-4 rounded-xl border transition-colors border-white/5 bg-white/5 hover:bg-white/10">
<iconify-icon className="text-indigo-500 text-2xl mt-1" icon="solar:shop-bold"></iconify-icon>
<div>
<h4 className="font-medium text-white">Prime Location</h4>
<p className="text-sm mt-1 text-neutral-400">Located in Triplicane, the heart of Chennai's timber market.</p>
</div>
</div>
<div className="flex items-start gap-4 p-4 rounded-xl border transition-colors border-white/5 bg-white/5 hover:bg-white/10">
<iconify-icon className="text-indigo-500 text-2xl mt-1" icon="solar:hand-shake-bold"></iconify-icon>
<div>
<h4 className="font-medium text-white">Architect Preferred</h4>
<p className="text-sm mt-1 text-neutral-400">Trusted by top firms for reliable shuttering plywood and finishing materials.</p>
</div>
</div>
</div>
</div>
<div className="relative scroll-reveal delay-200">
<div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 rounded-full blur-3xl opacity-20 to-blue-600"></div>
<div className="grid grid-cols-2 gap-4">
<div className="space-y-4 translate-y-8">
<div className="aspect-square rounded-2xl border overflow-hidden bg-neutral-800 border-white/10">
<img alt="Wood texture" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1606744837616-56c9a5c6a6eb?q=80&amp;w=2535&amp;auto=format&amp;fit=crop"/>
</div>
<div className="aspect-[4/3] rounded-2xl border overflow-hidden bg-neutral-800 border-white/10">
<img alt="Construction" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1545622783-b3e021430fee?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="space-y-4">
<div className="aspect-[4/3] rounded-2xl border overflow-hidden bg-neutral-800 border-white/10">
<img alt="Carpenter" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1574705357993-9d1045a8504f?q=80&amp;w=2483&amp;auto=format&amp;fit=crop"/>
</div>
<div className="aspect-square rounded-2xl border overflow-hidden bg-neutral-800 border-white/10">
<img alt="Planks" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t pt-20 pb-10 bg-neutral-900 border-white/10" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-16">
<div>
<div className="flex items-center gap-3 mb-6">
<div className="w-8 h-8 rounded-lg flex items-center justify-center bg-indigo-600 text-black">
<span className="font-bold text-xs">RS</span>
</div>
<span className="font-bold text-xl text-white">Rajesh Saw Mill</span>
</div>
<p className="text-sm max-w-xs mb-6 text-neutral-400">
                        171, Triplicane High Road,<br/>Ice House, Ground Floor,<br/>Chennai - 600005
                    </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full border flex items-center justify-center transition-all border-white/10 text-white hover:bg-white hover:text-black" href="#">
<iconify-icon icon="brandico:facebook" width="16"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full border flex items-center justify-center transition-all border-white/10 text-white hover:bg-white hover:text-black" href="#">
<iconify-icon icon="brandico:whatsapp" width="16"></iconify-icon>
</a>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-12">
<div>
<h4 className="font-semibold mb-4 text-white">Products</h4>
<ul className="space-y-2 text-sm text-neutral-500">
<li><a className="hover:text-indigo-500 transition-colors" href="#">Plywood</a></li>
<li><a className="hover:text-indigo-500 transition-colors" href="#">ACP Sheets</a></li>
<li><a className="hover:text-indigo-500 transition-colors" href="#">Teak Wood</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold mb-4 text-white">Company</h4>
<ul className="space-y-2 text-sm text-neutral-500">
<li><a className="hover:text-indigo-500 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-indigo-500 transition-colors" href="#">Contact</a></li>
<li><a className="hover:text-indigo-500 transition-colors" href="#">Terms</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold mb-4 text-white">Contact</h4>
<ul className="space-y-2 text-sm text-neutral-500">
<li className="transition-colors hover:text-white"><a href="tel:+918122002222">+91-81220 02222</a></li>
<li className="transition-colors hover:text-white"><a href="tel:+914428540348">+91-44-2854 0348</a></li>
</ul>
</div>
</div>
</div>
<div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 border-white/5">
<p className="text-xs text-neutral-600">© 2026 Rajesh Saw Mill (Jain Plywoods). All rights reserved.</p>
<p className="text-xs text-neutral-600">Designed with <iconify-icon className="inline text-blue-900" icon="solar:heart-bold"></iconify-icon> in Chennai</p>
</div>
</div>
</footer>


    </>
  );
}
