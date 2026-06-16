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

        // Simple Intersection Observer for scroll animations
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('section').forEach(section => {
            section.classList.add('reveal');
            observer.observe(section);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 bg-[#050505]/80 backdrop-blur-md border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<div className="flex items-center gap-3">
<div className="relative w-10 h-10 rounded-full border border-[#bf953f] flex items-center justify-center bg-black/50">
<span className="text-xl text-[#bf953f] font-serif">H</span>
</div>
<span className="text-xl font-semibold text-white tracking-tight">HPARTZ</span>
</div>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm text-neutral-400 hover:text-white transition-colors duration-300" href="#purpose">Purpose</a>
<a className="text-sm text-neutral-400 hover:text-white transition-colors duration-300" href="#capabilities">Capabilities</a>
<a className="text-sm text-neutral-400 hover:text-white transition-colors duration-300" href="#showcase">Work</a>
</div>

<a className="hidden md:flex group relative px-5 py-2 overflow-hidden rounded-full bg-white/5 border border-white/10 hover:border-[#bf953f]/50 transition-all duration-300" href="#contact">
<div className="absolute inset-0 w-0 bg-white/10 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
<span className="group-hover:text-[#fcf6ba] text-sm font-medium text-white relative cursor-pointer" onclick="window.location.href='https://wa.me/2347043815687?text=Hi%20HPARTZ%2C%20I%20want%20to%20start%20a%20project'" role="button">Partner with Us</span>
</a>

<button className="md:hidden text-white">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden reveal active">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-glow pointer-events-none opacity-40"></div>
<div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="space-y-8 z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#bf953f]/30 bg-[#bf953f]/5">
<span className="w-1.5 h-1.5 rounded-full bg-[#bf953f] animate-pulse"></span>
<span className="text-xs uppercase tracking-widest text-[#bf953f]">Premium Production</span>
</div>
<h1 className="md:text-7xl leading-[1.1] text-5xl font-semibold tracking-tighter">
                    Where Ideas Become <br/>
<span className="text-gold">Wearable Power.</span>
</h1>
<p className="text-lg md:text-xl text-neutral-400 max-w-lg font-light leading-relaxed">
                    HPARTZ is a creative partner for those who demand dominance. We blend luxury craftsmanship with modern production to turn visions into tangible assets.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<button className="px-8 py-4 bg-[#e5e5e5] text-black font-medium text-sm rounded hover:bg-white transition-colors duration-300">
                        Start Your Project
                    </button>
<button className="px-8 py-4 border border-white/20 text-white font-medium text-sm rounded hover:border-[#bf953f]/50 hover:text-[#bf953f] transition-all duration-300 backdrop-blur-sm">
                        View Our Work
                    </button>
</div>
</div>

<div className="lg:h-[600px] flex z-10 relative perspective-1000 items-center justify-center">

<div className="relative w-full max-w-md aspect-[3/4] bg-neutral-900 rounded-sm shadow-2xl border border-white/5 animate-float overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-20"></div>

<img alt="Premium Hoodie Texture" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-8 left-8 right-8 z-30 p-4 backdrop-blur-xl bg-white/5 border border-white/10 rounded-sm">
<div className="flex justify-between items-center">
<div>
<p className="text-xs text-neutral-400 uppercase tracking-wider">Material</p>
<p className="text-sm text-white font-medium">Heavyweight French Terry</p>
</div>
<div className="text-[#bf953f]">
<svg className="lucide lucide-gem w-5 h-5" data-lucide="gem" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 3 8 9l4 13 4-13-2.5-6"></path><path d="M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3z"></path><path d="M2 9h20"></path></svg>
</div>
</div>
</div>
</div>

<div className="absolute -z-10 w-96 h-96 border border-[#bf953f]/20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
<div className="absolute -z-10 w-[500px] h-[500px] border border-white/5 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
</div>
</div>
</section>

<section className="py-32 bg-black relative reveal" id="purpose">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-sm uppercase tracking-[0.2em] text-neutral-500 mb-6">Our Philosophy</h2>
<p className="text-3xl md:text-5xl font-semibold leading-tight tracking-tight text-white mb-8">
                We are not just printers. <br/>
                We are <span className="text-neutral-500">architects of brand perception.</span>
</p>
<p className="text-lg text-neutral-400 leading-relaxed font-light mx-auto max-w-2xl">
                The gap between a digital idea and a physical product is where most brands lose their edge. HPARTZ exists to close that gap with precision, sourcing the finest materials and executing with obsessive detail.
            </p>
</div>
</section>

<section className="py-24 bg-[#0a0a0a] reveal" id="capabilities">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-white mb-2">Capabilities</h2>
<p className="text-neutral-400">Comprehensive production from concept to unboxing.</p>
</div>
<a className="text-[#bf953f] hover:text-white transition-colors duration-300 flex items-center gap-2 text-sm" href="#">
                    View Full Service List <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group p-8 bg-neutral-900/40 border border-white/5 hover:border-[#bf953f]/30 transition-all duration-500 rounded-sm">
<div className="w-12 h-12 bg-black border border-white/10 rounded-sm flex items-center justify-center mb-8 group-hover:border-[#bf953f]/50 transition-colors">
<svg className="lucide lucide-shirt text-white group-hover:text-[#bf953f] transition-colors w-6 h-6" data-lucide="shirt" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"></path></svg>
</div>
<h3 className="text-xl font-medium text-white mb-3">Custom Fabrication</h3>
<p className="text-neutral-400 text-sm leading-relaxed">
                        Bespoke cut and sew services. We don't just print on blanks; we create the canvas itself to match your exact specifications.
                    </p>
</div>

<div className="group p-8 bg-neutral-900/40 border border-white/5 hover:border-[#bf953f]/30 transition-all duration-500 rounded-sm">
<div className="w-12 h-12 bg-black border border-white/10 rounded-sm flex items-center justify-center mb-8 group-hover:border-[#bf953f]/50 transition-colors">
<svg className="lucide lucide-layers text-white group-hover:text-[#bf953f] transition-colors w-6 h-6" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
</div>
<h3 className="text-xl font-medium text-white mb-3">High-Fidelity Printing</h3>
<p className="text-neutral-400 text-sm leading-relaxed">
                        Screen printing, puff print, embroidery, and DTG. We utilize industry-leading techniques for durability and visual impact.
                    </p>
</div>

<div className="group p-8 bg-neutral-900/40 border border-white/5 hover:border-[#bf953f]/30 transition-all duration-500 rounded-sm">
<div className="w-12 h-12 bg-black border border-white/10 rounded-sm flex items-center justify-center mb-8 group-hover:border-[#bf953f]/50 transition-colors">
<svg className="lucide lucide-package text-white group-hover:text-[#bf953f] transition-colors w-6 h-6" data-lucide="package" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path><path d="M12 22V12"></path><polyline points="3.29 7 12 12 20.71 7"></polyline><path d="m7.5 4.27 9 5.15"></path></svg>
</div>
<h3 className="text-xl font-medium text-white mb-3">Packaging &amp; Fulfillment</h3>
<p className="text-neutral-400 text-sm leading-relaxed">
                        The experience doesn't end at production. We design premium packaging that turns delivery into an event.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-32 border-y border-white/5 bg-black reveal">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

<div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
<h2 className="text-4xl font-semibold tracking-tighter text-white mb-6">
                        Why Top Creators 
                        <span className="text-neutral-500">Choose HPARTZ.</span>
</h2>
<p className="text-neutral-400 text-sm">We operate with the discipline of a luxury fashion house and the speed of a modern startup.</p>
</div>

<div className="lg:col-span-8 space-y-12">

<div className="flex gap-6 group">
<div className="pt-1">
<div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-[#bf953f] group-hover:bg-[#bf953f] group-hover:text-black transition-all duration-300">
<svg className="lucide lucide-check w-4 h-4" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
</div>
<div>
<h3 className="text-xl font-medium text-white mb-2">Uncompromising Material Quality</h3>
<p className="text-neutral-400 font-light leading-relaxed">
                                We source fabrics that feel expensive. From heavyweight cottons to technical blends, the tactile experience is our priority.
                            </p>
</div>
</div>

<div className="flex gap-6 group">
<div className="pt-1">
<div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-[#bf953f] group-hover:bg-[#bf953f] group-hover:text-black transition-all duration-300">
<svg className="lucide lucide-scan-eye w-4 h-4" data-lucide="scan-eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 7V5a2 2 0 0 1 2-2h2"></path><path d="M17 3h2a2 2 0 0 1 2 2v2"></path><path d="M21 17v2a2 2 0 0 1-2 2h-2"></path><path d="M7 21H5a2 2 0 0 1-2-2v-2"></path><circle cx="12" cy="12" r="1"></circle><path d="M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0"></path></svg>
</div>
</div>
<div>
<h3 className="text-xl font-medium text-white mb-2">Visual Accuracy Guarantee</h3>
<p className="text-neutral-400 font-light leading-relaxed">
                                What you approve in the mockup is exactly what arrives at your door. No surprises, just precision execution.
                            </p>
</div>
</div>

<div className="flex gap-6 group">
<div className="pt-1">
<div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-[#bf953f] group-hover:bg-[#bf953f] group-hover:text-black transition-all duration-300">
<svg className="lucide lucide-infinity w-4 h-4" data-lucide="infinity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 16c5 0 7-8 12-8a4 4 0 0 1 0 8c-5 0-7-8-12-8a4 4 0 1 0 0 8"></path></svg>
</div>
</div>
<div>
<h3 className="text-xl font-medium text-white mb-2">Scalable Partnership</h3>
<p className="text-neutral-400 font-light leading-relaxed">
                                Whether you're dropping 50 pieces or 50,000, our infrastructure scales with your ambition without sacrificing quality control.
                            </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#050505] reveal" id="showcase">
<div className="max-w-7xl mx-auto px-6 mb-12 flex justify-between items-end">
<h2 className="text-3xl font-semibold tracking-tight text-white">Selected Works</h2>
<div className="hidden md:block w-32 h-[1px] bg-white/10"></div>
</div>

<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 h-[800px] md:h-[600px]">

<div className="lg:col-span-1 lg:row-span-2 relative group overflow-hidden rounded-sm cursor-pointer">
<img alt="Fashion Model" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
<div className="absolute bottom-6 left-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<p className="text-white font-medium text-sm">Oversized Collection</p>
<p className="text-neutral-400 text-xs">Lookbook 2024</p>
</div>
</div>

<div className="lg:col-span-2 relative group overflow-hidden rounded-sm cursor-pointer">
<img alt="Black Texture Fabric" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
<div className="absolute bottom-6 left-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<p className="text-white font-medium text-sm">Technical Outerwear</p>
<p className="text-neutral-400 text-xs">Detail Shot</p>
</div>
</div>

<div className="relative group overflow-hidden rounded-sm cursor-pointer">
<img alt="Dark Aesthetic" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" src="https://images.unsplash.com/photo-1618331835717-801e976710b2?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
</div>

<div className="relative group overflow-hidden rounded-sm cursor-pointer">
<img alt="Gold Accent" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
<div className="absolute bottom-6 left-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<p className="text-white font-medium text-sm">Gold Foil Prints</p>
<p className="text-neutral-400 text-xs">Finishing Techniques</p>
</div>
</div>

<div className="lg:col-span-2 relative group overflow-hidden rounded-sm cursor-pointer">
<img alt="Packaging" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" src="https://images.unsplash.com/photo-1504198458649-3128b932f49e?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
<div className="absolute bottom-6 left-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<p className="text-white font-medium text-sm">Custom Packaging</p>
<p className="text-neutral-400 text-xs">Unboxing Experience</p>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden bg-black flex items-center justify-center reveal" id="contact">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#bf953f]/10 via-black to-black"></div>
<div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
<h2 className="text-4xl md:text-6xl font-semibold tracking-tighter text-white mb-8">
                Ready to elevate <br/> your brand?
            </h2>
<p className="text-neutral-400 mb-10 text-lg font-light">
                Join the ranks of visionaries who trust HPARTZ with their physical identity.
            </p>
<button className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-medium text-black transition-all duration-200 bg-[#bf953f] rounded-sm hover:bg-[#d4af37] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#bf953f] focus:ring-offset-black">
<span className="mr-2">Partner with HPARTZ</span>
<svg className="lucide lucide-arrow-right w-4 h-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</section>

<footer className="bg-black border-t border-white/5 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-3 mb-6">
<div className="relative w-8 h-8 rounded-full border border-white/20 flex items-center justify-center">
<span className="text-sm font-serif text-[#bf953f]">H</span>
</div>
<span className="text-lg font-semibold tracking-tight text-white">HPARTZ</span>
</div>
<p className="text-neutral-500 text-sm max-w-xs font-light">
                        Premium merchandise production and creative services for brands that define culture.
                    </p>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Explore</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-[#bf953f] transition-colors" href="#">Services</a></li>
<li><a className="hover:text-[#bf953f] transition-colors" href="#">Our Work</a></li>
<li><a className="hover:text-[#bf953f] transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-[#bf953f] transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Social</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-[#bf953f] transition-colors" href="#">Instagram</a></li>
<li><a className="hover:text-[#bf953f] transition-colors" href="#">Twitter / X</a></li>
<li><a className="hover:text-[#bf953f] transition-colors" href="#">LinkedIn</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center border-t border-white/5 pt-8">
<p className="text-neutral-600 text-xs">© 2024 HPARTZ. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="text-neutral-600 text-xs hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="text-neutral-600 text-xs hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
