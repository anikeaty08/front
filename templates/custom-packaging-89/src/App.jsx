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



        document.addEventListener('mousemove', e => {
            const cards = document.getElementsByClassName('card-gradient-hover');
            for(const card of cards) {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-[#1a1a1a] to-transparent opacity-40"></div>
<div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#FFD200] rounded-full blur-[120px] opacity-[0.07]"></div>
<div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#00B0F0] rounded-full blur-[140px] opacity-[0.05]"></div>
<div className="absolute inset-0 bg-grid-pattern [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-xl supports-[backdrop-filter]:bg-[#050505]/60">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-3 group" href="#">
<div className="relative w-8 h-8 flex items-center justify-center bg-gradient-to-br from-white/10 to-white/5 rounded border border-white/10 shadow-lg group-hover:border-[#FFD200]/50 transition-colors duration-300">
<iconify-icon className="text-[#FFD200]" icon="solar:box-minimalistic-linear" width="18"></iconify-icon>
</div>
<span className="text-white font-semibold tracking-tight text-base">INNOVEX</span>
</a>
<div className="hidden md:flex items-center gap-1 p-1 bg-white/5 rounded-full border border-white/5 backdrop-blur-md">
<a className="px-4 py-1.5 rounded-full text-xs font-medium text-slate-400 hover:text-white hover:bg-white/5 transition-all" href="#about">About</a>
<a className="px-4 py-1.5 rounded-full text-xs font-medium text-slate-400 hover:text-white hover:bg-white/5 transition-all" href="#services">Services</a>
<a className="px-4 py-1.5 rounded-full text-xs font-medium text-slate-400 hover:text-white hover:bg-white/5 transition-all" href="#portfolio">Work</a>
<a className="px-4 py-1.5 rounded-full text-xs font-medium text-slate-400 hover:text-white hover:bg-white/5 transition-all" href="#contact">Contact</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 px-5 py-2 bg-white text-black text-xs font-semibold rounded-full hover:bg-[#e6e6e6] transition-all duration-300 shadow-[0_0_20px_-10px_rgba(255,255,255,0.5)]" href="#contact">
                    Start Project
                    <iconify-icon icon="solar:arrow-right-linear" width="14"></iconify-icon>
</a>
<button className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="relative pt-40 pb-20 md:pt-48 md:pb-32 px-6 max-w-7xl mx-auto flex flex-col items-center text-center z-10">

<div className="opacity-0 animate-slide-up inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-widest font-semibold text-[#FFD200] mb-8 shadow-[0_0_15px_-5px_rgba(255,210,0,0.3)] hover:bg-white/10 transition-colors cursor-default">
<span className="w-1.5 h-1.5 rounded-full bg-[#FFD200] animate-pulse"></span>
            Packaging Reimagined
        </div>

<h1 className="opacity-0 animate-slide-up delay-100 text-5xl md:text-7xl lg:text-8xl font-semibold text-white tracking-tight leading-[1.05] mb-8 max-w-4xl">
            Crafting the <br/>
<span className="gradient-text bg-clip-text text-transparent">Perfect Unboxing.</span>
</h1>

<p className="opacity-0 animate-slide-up delay-200 text-base md:text-lg text-slate-400 font-light mb-10 max-w-xl leading-relaxed">
            We engineer premium custom boxes that protect your product and elevate your brand's identity from the very first touch.
        </p>

<div className="opacity-0 animate-slide-up delay-300 flex flex-col sm:flex-row gap-4 w-full justify-center">
<a className="group px-8 py-3.5 bg-[#FFD200] text-black rounded-full font-semibold text-sm transition-all transform hover:scale-[1.02] shadow-[0_0_30px_-10px_rgba(255,210,0,0.4)] flex items-center justify-center gap-2" href="#contact">
                Get Custom Quote
                <iconify-icon className="group-hover:rotate-12 transition-transform duration-300" icon="solar:box-linear" width="18"></iconify-icon>
</a>
<a className="px-8 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white rounded-full font-medium text-sm transition-all flex items-center justify-center gap-2 backdrop-blur-md" href="#portfolio">
                View Gallery
            </a>
</div>

<div className="relative w-full mt-24 h-[400px] md:h-[500px] opacity-0 animate-slide-up delay-300 perspective-[1000px] flex justify-center items-center">

<div className="animate-float relative w-72 h-72 md:w-[450px] md:h-[450px] z-20 group">

<img alt="Abstract Packaging 3D Render" className="w-full h-full object-cover rounded-2xl shadow-2xl border border-white/10 contrast-125 brightness-90 group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1635405074683-96d6921a26af?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-white/10 rounded-2xl pointer-events-none"></div>

<div className="absolute -bottom-6 -right-6 glass-panel px-4 py-3 rounded-xl flex items-center gap-3 animate-float-delayed z-30">
<div className="w-2 h-2 rounded-full bg-[#FFD200] animate-pulse"></div>
<span className="text-xs font-mono text-white">Render_v02.obj</span>
</div>
</div>

<div className="animate-float-delayed absolute left-[5%] md:left-[15%] top-[20%] w-40 h-48 glass-panel rounded-xl z-10 hidden md:flex flex-col p-4 justify-between transform -rotate-6 hover:rotate-0 transition-transform duration-500">
<div className="w-8 h-8 rounded-full bg-[#E91E63]/20 flex items-center justify-center text-[#E91E63]">
<iconify-icon icon="solar:palette-linear" width="16"></iconify-icon>
</div>
<div className="space-y-1.5">
<div className="h-1 w-full bg-white/20 rounded-full"></div>
<div className="h-1 w-2/3 bg-white/10 rounded-full"></div>
</div>
</div>

<div className="animate-float-delayed absolute right-[5%] md:right-[15%] bottom-[20%] w-48 h-32 glass-panel rounded-xl z-10 hidden md:flex items-center gap-3 p-4 transform rotate-3 hover:rotate-0 transition-transform duration-500">
<div className="w-10 h-10 rounded-lg bg-[#00B0F0]/10 flex items-center justify-center text-[#00B0F0] flex-shrink-0">
<iconify-icon icon="solar:shield-check-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-white text-xs font-medium">Durable Build</p>
<p className="text-slate-500 text-[10px]">Corrugated Strength</p>
</div>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-[#080808] py-8 overflow-hidden relative">
<div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#080808] to-transparent z-10"></div>
<div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#080808] to-transparent z-10"></div>
<div className="flex w-[200%] animate-[marquee_20s_linear_infinite] hover:[animation-play-state:paused]">

<div className="flex items-center justify-around w-1/2 flex-shrink-0 px-10 gap-12">
<span className="text-lg font-semibold text-slate-500 tracking-tight uppercase hover:text-white transition-colors cursor-default">NexGen Tech</span>
<span className="text-lg font-semibold text-slate-500 tracking-tight uppercase hover:text-white transition-colors cursor-default">Lumina Skin</span>
<span className="text-lg font-semibold text-slate-500 tracking-tight uppercase hover:text-white transition-colors cursor-default">Vanguard Logistics</span>
<span className="text-lg font-semibold text-slate-500 tracking-tight uppercase hover:text-white transition-colors cursor-default">Pure Earth</span>
<span className="text-lg font-semibold text-slate-500 tracking-tight uppercase hover:text-white transition-colors cursor-default">Aether Audio</span>
<span className="text-lg font-semibold text-slate-500 tracking-tight uppercase hover:text-white transition-colors cursor-default">Solstice Home</span>
</div>

<div className="flex items-center justify-around w-1/2 flex-shrink-0 px-10 gap-12">
<span className="text-lg font-semibold text-slate-500 tracking-tight uppercase hover:text-white transition-colors cursor-default">NexGen Tech</span>
<span className="text-lg font-semibold text-slate-500 tracking-tight uppercase hover:text-white transition-colors cursor-default">Lumina Skin</span>
<span className="text-lg font-semibold text-slate-500 tracking-tight uppercase hover:text-white transition-colors cursor-default">Vanguard Logistics</span>
<span className="text-lg font-semibold text-slate-500 tracking-tight uppercase hover:text-white transition-colors cursor-default">Pure Earth</span>
<span className="text-lg font-semibold text-slate-500 tracking-tight uppercase hover:text-white transition-colors cursor-default">Aether Audio</span>
<span className="text-lg font-semibold text-slate-500 tracking-tight uppercase hover:text-white transition-colors cursor-default">Solstice Home</span>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto" id="services">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-4">Our Expertise</h2>
<p className="text-slate-400 font-light max-w-md">Precision-engineered packaging solutions designed for every stage of your product's journey.</p>
</div>
<a className="text-sm font-medium text-white hover:text-[#FFD200] transition-colors flex items-center gap-2 pb-1 border-b border-white/20 hover:border-[#FFD200]" href="#portfolio">
                See capabilities
                <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[350px]">

<div className="md:col-span-2 group relative rounded-3xl overflow-hidden bg-[#0A0A0A] border border-white/10 card-gradient-hover">

<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1605647540924-852290f6b0d5?q=80&amp;w=1000&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay group-hover:scale-105 transition-all duration-700"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/90 to-transparent"></div>
<div className="relative h-full flex flex-col justify-end p-8 z-10">
<div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white mb-6 border border-white/10 group-hover:bg-[#FFD200] group-hover:text-black transition-colors duration-300">
<iconify-icon icon="solar:box-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-white mb-2">Corrugated Solutions</h3>
<p className="text-slate-400 text-sm max-w-lg mb-6 leading-relaxed">Engineered for durability and transit safety without compromising on print quality. Ideal for e-commerce, subscriptions, and bulk shipping.</p>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-slate-300">Double Wall</span>
<span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-slate-300">Die-Cut</span>
<span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-slate-300">Flexography</span>
</div>
</div>
</div>

<div className="md:row-span-2 group relative rounded-3xl overflow-hidden bg-[#0A0A0A] border border-white/10 card-gradient-hover">
<div className="absolute inset-0 bg-gradient-to-br from-[#151515] to-[#050505]"></div>

<div className="absolute top-0 right-0 w-full h-2/3 bg-[url('https://images.unsplash.com/photo-1629196914375-f7e48f477b6d?q=80&amp;w=800&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-20 mask-image-gradient"></div>
<div className="relative h-full flex flex-col p-8 z-10">
<div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white mb-6 border border-white/10 group-hover:bg-[#E91E63] group-hover:text-white transition-colors duration-300">
<iconify-icon icon="solar:crown-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-white mb-4">Premium Rigid Boxes</h3>
<p className="text-slate-400 text-sm leading-relaxed mb-auto">The definition of luxury. Sturdy, non-collapsible structures wrapped in premium papers with finishes like foil stamping, embossing, and spot UV.</p>
<div className="mt-8 relative h-64 w-full flex items-center justify-center perspective-[800px]">

<div className="absolute w-40 h-56 border border-white/10 bg-[#111] rounded-lg transform rotate-y-12 rotate-x-6 group-hover:rotate-y-0 group-hover:rotate-x-0 transition-transform duration-700 shadow-2xl overflow-hidden">
<img className="w-full h-full object-cover opacity-50" src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>

<div className="group relative rounded-3xl overflow-hidden bg-[#0A0A0A] border border-white/10 card-gradient-hover">
<div className="absolute inset-0 bg-gradient-to-br from-[#111] to-[#050505]"></div>
<div className="relative h-full flex flex-col justify-between p-8 z-10">
<div>
<div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white mb-6 border border-white/10 group-hover:bg-[#00B0F0] group-hover:text-white transition-colors duration-300">
<iconify-icon icon="solar:bag-3-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-white mb-2">Retail Card Boxes</h3>
<p className="text-slate-400 text-sm leading-relaxed">Lightweight, colorful, and cost-effective. Perfect for shelves.</p>
</div>
<div className="flex items-center text-white text-sm font-medium group-hover:translate-x-2 transition-transform cursor-pointer">
                        Learn more <iconify-icon className="ml-2" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>

<div className="group relative rounded-3xl overflow-hidden bg-[#0A0A0A] border border-white/10 card-gradient-hover">
<div className="absolute inset-0 bg-gradient-to-br from-[#111] to-[#050505]"></div>

<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&amp;w=800&amp;auto=format&amp;fit=crop')] bg-cover opacity-10"></div>
<div className="relative h-full flex flex-col justify-between p-8 z-10">
<div>
<div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white mb-6 border border-white/10 group-hover:bg-purple-500 group-hover:text-white transition-colors duration-300">
<iconify-icon icon="solar:layers-minimalistic-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-white mb-2">Custom Inserts</h3>
<p className="text-slate-400 text-sm leading-relaxed">Foam, molded pulp, or card inserts to secure your products perfectly.</p>
</div>
<div className="flex items-center text-white text-sm font-medium group-hover:translate-x-2 transition-transform cursor-pointer">
                        Learn more <iconify-icon className="ml-2" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#080808] border-y border-white/5 relative overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.02] rounded-full blur-3xl pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="relative">
<div className="absolute -top-10 -left-10 w-32 h-32 border border-[#FFD200]/20 rounded-full flex items-center justify-center animate-spin-slow" style={{animationDuration: '10s'}}>
<div className="w-2 h-2 bg-[#FFD200] rounded-full absolute top-0"></div>
</div>
<span className="text-[#FFD200] text-xs font-semibold tracking-widest uppercase mb-4 block">Our Process</span>
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6 leading-tight">
                    From Concept to <br/>
<span className="text-slate-500">Doorstep Delivery.</span>
</h2>
<p className="text-slate-400 mb-8 leading-relaxed font-light">
                    We don't just print boxes; we partner with you to solve logistical challenges and branding opportunities. Our streamlined workflow ensures consistency and speed.
                </p>
<ul className="space-y-6">
<li className="flex items-start gap-4 group">
<div className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white group-hover:border-[#FFD200] group-hover:text-[#FFD200] transition-colors">
<span className="font-mono text-xs">01</span>
</div>
<div>
<h4 className="text-white font-medium mb-1 group-hover:text-[#FFD200] transition-colors">Consultation &amp; Design</h4>
<p className="text-sm text-slate-500">We analyze your product dimensions and branding goals.</p>
</div>
</li>
<li className="flex items-start gap-4 group">
<div className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white group-hover:border-[#FFD200] group-hover:text-[#FFD200] transition-colors">
<span className="font-mono text-xs">02</span>
</div>
<div>
<h4 className="text-white font-medium mb-1 group-hover:text-[#FFD200] transition-colors">Prototyping</h4>
<p className="text-sm text-slate-500">Receive a physical or 3D sample to verify fit and finish.</p>
</div>
</li>
<li className="flex items-start gap-4 group">
<div className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white group-hover:border-[#FFD200] group-hover:text-[#FFD200] transition-colors">
<span className="font-mono text-xs">03</span>
</div>
<div>
<h4 className="text-white font-medium mb-1 group-hover:text-[#FFD200] transition-colors">Production &amp; Shipping</h4>
<p className="text-sm text-slate-500">High-speed manufacturing with strict quality control checks.</p>
</div>
</li>
</ul>
</div>
<div className="relative h-[500px] w-full bg-[#0E0E0E] rounded-2xl border border-white/10 overflow-hidden group">

<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&amp;w=1000&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-40 grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E] via-transparent to-transparent"></div>
<div className="absolute bottom-8 left-8 right-8 glass-panel p-6 rounded-xl">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
<span className="text-white text-sm font-medium">Production Status</span>
</div>
<span className="text-slate-400 text-xs font-mono">ID: #88392</span>
</div>
<div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
<div className="bg-[#FFD200] h-full w-3/4"></div>
</div>
<div className="flex justify-between mt-2 text-[10px] text-slate-500 uppercase tracking-wider">
<span>Die-Cutting</span>
<span>75% Complete</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto" id="portfolio">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Selected Works</h2>

<div className="flex flex-wrap justify-center gap-2 mt-8">
<button className="px-4 py-1.5 rounded-full bg-white text-black text-xs font-medium hover:bg-white/90 transition-colors">All</button>
<button className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-400 text-xs font-medium hover:text-white hover:bg-white/10 transition-colors">Electronics</button>
<button className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-400 text-xs font-medium hover:text-white hover:bg-white/10 transition-colors">Cosmetics</button>
<button className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-400 text-xs font-medium hover:text-white hover:bg-white/10 transition-colors">Apparel</button>
</div>
</div>
<div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">

<div className="break-inside-avoid relative group rounded-2xl overflow-hidden cursor-pointer">
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10"></div>
<img alt="Work" className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1631553126875-97d531d0446e?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
<div className="absolute bottom-0 left-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
<p className="text-[#FFD200] text-xs font-bold uppercase tracking-wider mb-1">E-Commerce</p>
<h4 className="text-white text-lg font-medium">Minimalist Shipper</h4>
</div>
</div>

<div className="break-inside-avoid relative group rounded-2xl overflow-hidden cursor-pointer">
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10"></div>
<img alt="Work" className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1595079676339-1534801fafde?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
<div className="absolute bottom-0 left-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
<p className="text-[#E91E63] text-xs font-bold uppercase tracking-wider mb-1">Luxury</p>
<h4 className="text-white text-lg font-medium">Noir Perfume Box</h4>
</div>
</div>

<div className="break-inside-avoid relative group rounded-2xl overflow-hidden cursor-pointer">
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10"></div>
<img alt="Work" className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
<div className="absolute bottom-0 left-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
<p className="text-[#00B0F0] text-xs font-bold uppercase tracking-wider mb-1">Tech</p>
<h4 className="text-white text-lg font-medium">Device Packaging</h4>
</div>
</div>

<div className="break-inside-avoid relative group rounded-2xl overflow-hidden cursor-pointer">
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10"></div>
<img alt="Work" className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1595246140625-573b715d11dc?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
<div className="absolute bottom-0 left-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
<p className="text-white text-xs font-bold uppercase tracking-wider mb-1">Retail</p>
<h4 className="text-white text-lg font-medium">Soap &amp; Body</h4>
</div>
</div>
</div>
</section>

<section className="relative pt-24 pb-12 px-6 border-t border-white/5 bg-[#030303]" id="contact">
<div className="max-w-7xl mx-auto">

<div className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#0A0A0A] p-8 md:p-16 text-center mb-20 group">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
<div className="absolute -top-[200px] -left-[200px] w-[400px] h-[400px] bg-[#FFD200]/5 rounded-full blur-[80px] pointer-events-none"></div>
<div className="absolute -bottom-[200px] -right-[200px] w-[400px] h-[400px] bg-[#00B0F0]/5 rounded-full blur-[80px] pointer-events-none"></div>
<div className="relative z-10 max-w-2xl mx-auto">
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6">Ready to start?</h2>
<p className="text-slate-400 mb-10 text-lg font-light">Join hundreds of brands elevating their customer experience with Innovex.</p>
<form className="max-w-md mx-auto space-y-4 text-left">
<div className="relative">
<iconify-icon className="absolute left-4 top-3.5 text-slate-500" icon="solar:letter-linear"></iconify-icon>
<input className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-11 pr-4 text-white text-sm focus:outline-none focus:border-[#FFD200] focus:ring-1 focus:ring-[#FFD200] transition-all" placeholder="Enter your email address" type="email"/>
</div>
<button className="w-full py-3.5 bg-white text-black font-semibold rounded-xl hover:bg-slate-200 transition-colors shadow-lg shadow-white/5">
                            Get Your Free Quote
                        </button>
</form>
<p className="mt-4 text-slate-600 text-xs">No spam. Unsubscribe anytime.</p>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16 border-b border-white/5 pb-16">
<div className="col-span-2 md:col-span-1">
<a className="flex items-center gap-2 mb-6" href="#">
<div className="w-6 h-6 flex items-center justify-center bg-white/5 rounded border border-white/10">
<iconify-icon className="text-[#FFD200]" icon="solar:box-minimalistic-linear" width="14"></iconify-icon>
</div>
<span className="text-white font-semibold tracking-tight">INNOVEX</span>
</a>
<p className="text-slate-500 text-sm leading-relaxed">Defining the future of packaging with innovation, quality, and sustainability.</p>
</div>
<div>
<h4 className="text-white font-medium mb-4">Services</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-white transition-colors" href="#">Corrugated Boxes</a></li>
<li><a className="hover:text-white transition-colors" href="#">Rigid Boxes</a></li>
<li><a className="hover:text-white transition-colors" href="#">Retail Packaging</a></li>
<li><a className="hover:text-white transition-colors" href="#">Design Studio</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Company</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-white transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-white transition-colors" href="#">Our Work</a></li>
<li><a className="hover:text-white transition-colors" href="#">Sustainability</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Legal</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms of Service</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600">
<p>© 2024 Innovex Printing. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-instagram-linear" width="16"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-twitter-linear" width="16"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-linkedin-linear" width="16"></iconify-icon></a>
</div>
</div>
</div>
</section>



    </>
  );
}
