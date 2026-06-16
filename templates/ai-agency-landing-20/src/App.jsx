import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



document.addEventListener("DOMContentLoaded", () => {
// --- SCROLL ANIMATION OBSERVER ---
function initInViewAnimations() {
const observer = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("animate");
observer.unobserve(entry.target); // Run once for performance
}
});
}, { threshold: 0.1, rootMargin: "0px 0px -5% 0px" });
document.querySelectorAll(".animate-on-scroll").forEach((el) => {
observer.observe(el);
});
}
initInViewAnimations();
});



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

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-xl border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#FACC15]/20 to-[#856c1b]/20 border border-[#D4AF37]/30 flex items-center justify-center text-[#FACC15] group-hover:scale-110 transition-transform duration-300">
<svg className="lucide lucide-atom w-5 h-5" data-lucide="atom" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><path d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z"></path><path d="M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z"></path></svg>
</div>
<span className="text-lg font-semibold text-white tracking-tight">LaunchLayer</span>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm text-neutral-400 hover:text-white transition-colors" href="#about">About</a>
<a className="text-sm text-neutral-400 hover:text-white transition-colors" href="#work">Work</a>
<a className="text-sm text-neutral-400 hover:text-white transition-colors" href="#process">Process</a>
<a className="text-sm text-neutral-400 hover:text-white transition-colors" href="#services">Services</a>
<a className="text-sm text-neutral-400 hover:text-white transition-colors" href="#contact">Contact</a>
</div>
<div className="flex items-center gap-4">
<div className="hidden sm:block">
<button className="shiny-cta">
<span>Book Call</span>
</button>
</div>
</div>
</div>
</nav>

<section className="min-h-screen flex overflow-hidden pt-24 pb-12 relative items-center">
<div className="absolute inset-0 perspective-grid -z-20"></div>
<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#D4AF37] opacity-[0.03] blur-[140px] rounded-full -z-10"></div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 w-full max-w-7xl mr-auto ml-auto pr-6 pl-6 gap-x-12 gap-y-12 items-center">

<div className="lg:col-span-6 flex flex-col z-10 justify-center">
<div className="mb-8 flex items-center gap-2 animate-on-scroll animate">
<div className="pill-wrapper group">
<div className="beam-ring"></div>
<div className="apple-glass-pill inline-flex items-center gap-2 px-4 py-2 relative z-10">
<svg className="lucide lucide-sparkles w-3.5 h-3.5 text-[#D4AF37]" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<span className="uppercase text-xs font-medium text-neutral-200 tracking-wide">REVENUE INFRASTRUCTURE</span>
</div>
</div>
</div>
<h1 className="md:text-6xl lg:text-7xl leading-[1.1] animate-on-scroll animate text-5xl font-semibold text-white tracking-tight mb-6" style={{transitionDelay: '100ms'}}>
                    Constructing<br/>
<span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-neutral-400">REVENUE SYSTEMS</span><br/>
<span className="animate-gold-glow text-[#D4AF37]">THAT RUN WITHOUT YOU</span>
</h1>
<p className="leading-relaxed animate-on-scroll animate text-lg font-light text-neutral-400 max-w-lg mb-10" style={{transitionDelay: '200ms'}}>We design backend systems that capture respond and convert demand automatically so your bookings increase without adding more work to your day</p>
<div className="flex flex-wrap items-center gap-6 animate-on-scroll animate" style={{transitionDelay: '300ms'}}>
<button className="shiny-cta h-[56px] pr-8 pl-8">
<span className="">Start Project</span>
<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<button className="btn-secondary h-[56px] group">
<span>Our Services</span>
<svg className="lucide lucide-chevron-down w-4 h-4 group-hover:translate-y-0.5 transition-transform" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
</div>
</div>

<div className="lg:col-span-6 relative h-[400px] lg:h-[550px] flex items-center justify-center z-0 animate-on-scroll" style={{transitionDelay: '200ms'}}>
<div className="absolute inset-0 border border-white/5 rounded-3xl bg-black/20 backdrop-blur-sm overflow-hidden group">
<div className="overflow-hidden w-full h-full relative">

<iframe className="grayscale-[20%] contrast-125 opacity-90 absolute top-0 left-0 pointer-events-auto scale-125 translate-x-12 translate-y-12" frameborder="0" loading="lazy" src="https://my.spline.design/nexbotrobotcharacterconcept-f9fb70f64f78f621dac9e33520a8dd0c/" style={{width: '100%', height: '100%'}}></iframe>
<div className="pointer-events-none bg-gradient-to-t from-[#030303] via-transparent to-transparent absolute inset-0"></div>
<div className="flex flex-col bg-black/60 w-full z-20 border-white/10 border-t pt-5 pb-5 absolute bottom-0 left-0 backdrop-blur-md justify-center">
<p className="text-[10px] uppercase font-medium text-neutral-500 tracking-[0.2em] mb-4 px-6">Trusted by AI innovators</p>

<div className="relative w-full overflow-hidden mask-fade-x flex gap-8">
<div className="flex items-center gap-8 animate-loop-scroll shrink-0 min-w-full justify-around">
<div className="flex items-center gap-8 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-500">
<iconify-icon className="shrink-0" height="20" icon="logos:google"></iconify-icon>
<iconify-icon className="text-white shrink-0" height="20" icon="simple-icons:openai"></iconify-icon>
<iconify-icon className="shrink-0" height="20" icon="logos:microsoft"></iconify-icon>
<iconify-icon className="shrink-0" height="20" icon="logos:stripe"></iconify-icon>
<iconify-icon className="text-white shrink-0" height="20" icon="simple-icons:anthropic"></iconify-icon>
<iconify-icon className="text-white shrink-0" height="18" icon="simple-icons:nvidia"></iconify-icon>
<iconify-icon className="brightness-0 invert shrink-0" height="18" icon="logos:vercel"></iconify-icon>
<iconify-icon className="brightness-0 invert shrink-0" height="18" icon="logos:aws"></iconify-icon>
</div>
</div>
<div aria-hidden="true" className="flex items-center gap-8 animate-loop-scroll shrink-0 min-w-full justify-around">
<div className="flex items-center gap-8 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-500">
<iconify-icon className="shrink-0" height="20" icon="logos:google"></iconify-icon>
<iconify-icon className="text-white shrink-0" height="20" icon="simple-icons:openai"></iconify-icon>
<iconify-icon className="shrink-0" height="20" icon="logos:microsoft"></iconify-icon>
<iconify-icon className="shrink-0" height="20" icon="logos:stripe"></iconify-icon>
<iconify-icon className="text-white shrink-0" height="20" icon="simple-icons:anthropic"></iconify-icon>
<iconify-icon className="text-white shrink-0" height="18" icon="simple-icons:nvidia"></iconify-icon>
<iconify-icon className="brightness-0 invert shrink-0" height="18" icon="logos:vercel"></iconify-icon>
<iconify-icon className="brightness-0 invert shrink-0" height="18" icon="logos:aws"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="text-white bg-[#030303] border-white/5 border-t pt-24 pb-24 relative" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="flex items-center w-full mb-16 animate-on-scroll">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight shrink-0">About <span className="text-[#D4AF37]">Us</span></h2>
<div className="h-[1px] bg-gradient-to-r from-white/10 to-white/5 flex-grow mx-6"></div>
<div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center shrink-0 text-neutral-500 hover:text-white hover:border-white/30 transition-colors cursor-pointer">
<svg className="" data-icon-replaced="true" data-icon-set="lucide" data-lucide="arrow-up-right" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path className="" d="M7 17 17 7"></path></svg>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-24 gap-x-12 gap-y-12">
<div className="lg:col-span-4 flex flex-col justify-start animate-on-scroll" style={{transitionDelay: '100ms'}}>
<p className="leading-relaxed text-sm text-neutral-400 font-[Inter]">Most businesses don't have  a demand problem they have a system problem</p>
</div>
<div className="lg:col-span-8 flex flex-col justify-center">
<h3 className="md:text-4xl lg:text-5xl leading-[1.3] text-3xl font-normal tracking-wide font-[Space_Grotesk] group animate-on-scroll">
<span className="inline-block blur-[4px] group-[.animate]:opacity-100 group-[.animate]:blur-0 group-[.animate]:translate-y-0 transition-all duration-700 ease-out delay-[0ms] text-white opacity-0 translate-y-4">Growth</span>
<span className="inline-block opacity-0 blur-[4px] translate-y-4 group-[.animate]:opacity-100 group-[.animate]:blur-0 group-[.animate]:translate-y-0 transition-all duration-700 ease-out delay-[75ms] text-neutral-500">is</span>
<span className="inline-block blur-[4px] group-[.animate]:opacity-100 group-[.animate]:blur-0 group-[.animate]:translate-y-0 transition-all duration-700 ease-out delay-[150ms] text-neutral-500 opacity-0 translate-y-4">driven</span>
<span className="inline-block opacity-0 blur-[4px] translate-y-4 group-[.animate]:opacity-100 group-[.animate]:blur-0 group-[.animate]:translate-y-0 transition-all duration-700 ease-out delay-[225ms] text-neutral-500">by</span>
<span className="inline-block blur-[4px] group-[.animate]:opacity-100 group-[.animate]:blur-0 group-[.animate]:translate-y-0 transition-all duration-700 ease-out delay-[300ms] text-neutral-500 opacity-0 translate-y-4">the</span>
<span className="inline-block blur-[4px] group-[.animate]:opacity-100 group-[.animate]:blur-0 group-[.animate]:translate-y-0 transition-all duration-700 ease-out delay-[375ms] text-white opacity-0 translate-y-4">systems behind your</span>
<span className="inline-block blur-[4px] group-[.animate]:opacity-100 group-[.animate]:blur-0 group-[.animate]:translate-y-0 transition-all duration-700 ease-out delay-[450ms] text-white opacity-0 translate-y-4">Business</span>
<span className="inline-block blur-[4px] group-[.animate]:opacity-100 group-[.animate]:blur-0 group-[.animate]:translate-y-0 transition-all duration-700 ease-out delay-[525ms] text-neutral-500 opacity-0 translate-y-4">not the</span>
<span className="inline-block blur-[4px] group-[.animate]:opacity-100 group-[.animate]:blur-0 group-[.animate]:translate-y-0 transition-all duration-700 ease-out delay-[600ms] text-white opacity-0 translate-y-4">Effort in front of it we build</span>
<span className="inline-block blur-[4px] group-[.animate]:opacity-100 group-[.animate]:blur-0 group-[.animate]:translate-y-0 transition-all duration-700 ease-out delay-[675ms] text-white opacity-0 translate-y-4">autonomous</span>
<span className="inline-block blur-[4px] group-[.animate]:opacity-100 group-[.animate]:blur-0 group-[.animate]:translate-y-0 transition-all duration-700 ease-out delay-[750ms] text-white opacity-0 translate-y-4">layers</span>
<span className="inline-block blur-[4px] group-[.animate]:opacity-100 group-[.animate]:blur-0 group-[.animate]:translate-y-0 transition-all duration-700 ease-out delay-[825ms] text-neutral-500 opacity-0 translate-y-4">that</span>
<span className="inline-block blur-[4px] group-[.animate]:opacity-100 group-[.animate]:blur-0 group-[.animate]:translate-y-0 transition-all duration-700 ease-out delay-[900ms] text-white opacity-0 translate-y-4">Capture demand</span>
<span className="inline-block blur-[4px] group-[.animate]:opacity-100 group-[.animate]:blur-0 group-[.animate]:translate-y-0 transition-all duration-700 ease-out delay-[975ms] text-white opacity-0 translate-y-4">respond instantly</span>
<span className="inline-block blur-[4px] group-[.animate]:opacity-100 group-[.animate]:blur-0 group-[.animate]:translate-y-0 transition-all duration-700 ease-out delay-[1050ms] text-white opacity-0 translate-y-4">And convert interest into revenue</span>
<span className="inline-block opacity-0 blur-[4px] translate-y-4 group-[.animate]:opacity-100 group-[.animate]:blur-0 group-[.animate]:translate-y-0 transition-all duration-700 ease-out delay-[1125ms] text-neutral-500">with</span>
<span className="inline-block opacity-0 blur-[4px] translate-y-4 group-[.animate]:opacity-100 group-[.animate]:blur-0 group-[.animate]:translate-y-0 transition-all duration-700 ease-out delay-[1200ms] text-white">precision</span>
<span className="inline-block blur-[4px] group-[.animate]:opacity-100 group-[.animate]:blur-0 group-[.animate]:translate-y-0 transition-all duration-700 ease-out delay-[1275ms] text-neutral-500 opacity-0 translate-y-4">and</span>
<span className="inline-block opacity-0 blur-[4px] translate-y-4 group-[.animate]:opacity-100 group-[.animate]:blur-0 group-[.animate]:translate-y-0 transition-all duration-700 ease-out delay-[1350ms] text-neutral-500">a</span>
<span className="inline-block opacity-0 blur-[4px] translate-y-4 group-[.animate]:opacity-100 group-[.animate]:blur-0 group-[.animate]:translate-y-0 transition-all duration-700 ease-out delay-[1425ms] text-neutral-500">touch</span>
<span className="inline-block opacity-0 blur-[4px] translate-y-4 group-[.animate]:opacity-100 group-[.animate]:blur-0 group-[.animate]:translate-y-0 transition-all duration-700 ease-out delay-[1500ms] text-neutral-500">of</span>
<span className="inline-block opacity-0 blur-[4px] translate-y-4 group-[.animate]:opacity-100 group-[.animate]:blur-0 group-[.animate]:translate-y-0 transition-all duration-700 ease-out delay-[1575ms] text-white">magic</span>
</h3>
<div className="mt-12 flex flex-wrap items-center gap-6 animate-on-scroll" style={{transitionDelay: '300ms'}}>
<button className="shiny-cta">
<span className="">Learn More</span>
<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<button className="btn-secondary group">
<span className="">Meet the Team</span>
<svg className="lucide lucide-users w-4 h-4 text-neutral-500 group-hover:text-white transition-colors" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path className="" d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#030303] border-white/5 border-t pt-24 pb-24 relative" id="work">
<div className="max-w-7xl mx-auto px-6">
<div className="flex items-center w-full mb-16 animate-on-scroll">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight shrink-0">Our <span className="text-[#D4AF37]">Work</span></h2>
<div className="h-[1px] bg-gradient-to-r from-white/10 to-white/5 flex-grow mx-6"></div>
<div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center shrink-0 text-neutral-500 hover:text-white hover:border-white/30 transition-colors cursor-pointer">
<svg className="lucide lucide-arrow-up-right w-[24px] h-[20px]" data-icon-replaced="true" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '24px', height: '20px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
<div className="group block animate-on-scroll" style={{transitionDelay: '100ms'}}>
<div className="aspect-[16/10] overflow-hidden card-grid-bg bg-[#0A0A0A] w-full border-white/5 border rounded-xl mb-6 relative">
<div className="absolute inset-8 shadow-2xl rounded-lg overflow-hidden transition-all duration-500 group-hover:-translate-y-2 group-hover:scale-[1.02] border border-white/5">
<img alt="Z47 Project" className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500" loading="lazy" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&amp;w=2426&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="flex items-start justify-between mb-2">
<h3 className="text-2xl font-semibold text-white group-hover:text-[#D4AF37] transition-colors">Z47</h3>
<span className="px-2 py-1 text-[10px] uppercase tracking-wider font-medium border border-white/10 rounded text-neutral-400">VC</span>
</div>
<p className="leading-relaxed text-sm text-neutral-400 max-w-sm">
                        Early-stage VC backing India-focused missionary founders with AI-driven deal flow analysis.
                    </p>
</div>
<div className="group block lg:translate-y-16 animate-on-scroll space-y-6" style={{transitionDelay: '200ms'}}>
<div className="relative w-full aspect-[16/10] bg-[#0A0A0A] border border-white/5 rounded-xl overflow-hidden mb-6 card-grid-bg">
<div className="absolute inset-8 shadow-2xl rounded-lg overflow-hidden transition-all duration-500 group-hover:-translate-y-2 group-hover:scale-[1.02] border border-white/5">
<img alt="Roommaster Project" className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500" loading="lazy" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&amp;w=2370&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="flex items-start justify-between mb-2">
<h3 className="text-2xl font-semibold text-white group-hover:text-[#D4AF37] transition-colors">Roommaster</h3>
<span className="px-2 py-1 text-[10px] uppercase tracking-wider font-medium border border-white/10 rounded text-neutral-400">SaaS</span>
</div>
<p className="text-sm text-neutral-400 leading-relaxed max-w-sm">
                        All-in-one hotel property management and booking software with automated concierge integration.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#030303] border-t border-white/5 overflow-hidden" id="process">
<div className="max-w-7xl mx-auto px-6">

<div className="flex items-center w-full mb-12 animate-on-scroll">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight shrink-0">How We <span className="text-[#D4AF37]">Build</span></h2>
<div className="h-[1px] bg-gradient-to-r from-white/10 to-white/5 flex-grow mx-6"></div>
<div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center shrink-0 text-neutral-500 hover:text-white hover:border-white/30 transition-colors cursor-pointer">
<svg className="lucide lucide-cpu w-5 h-5" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="6" rx="1" width="6" x="9" y="9"></rect><path d="M15 2v2"></path><path d="M15 20v2"></path><path d="M2 15h2"></path><path d="M2 9h2"></path><path d="M20 15h2"></path><path d="M20 9h2"></path><path d="M9 2v2"></path><path d="M9 20v2"></path></svg>
</div>
</div>
<div className="mb-16 animate-on-scroll max-w-2xl">
<p className="text-neutral-500 text-sm leading-relaxed">
                     A systematic approach to chaos. We turn abstract ideas into concrete code through a rigorous methodology of discovery, strategy, development, and evolution.
                 </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="group flex flex-col items-start gap-4 p-6 rounded-2xl border border-transparent hover:border-white/5 hover:bg-neutral-900/30 transition-all duration-300 animate-on-scroll" style={{transitionDelay: '100ms'}}>
<div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-sm text-neutral-400 font-medium group-hover:border-[#D4AF37] group-hover:text-[#D4AF37] group-hover:scale-110 transition-all duration-300">01</div>
<h3 className="text-lg font-semibold text-white group-hover:translate-x-1 transition-transform duration-300">Discovery</h3>
<p className="text-sm text-neutral-500 leading-relaxed group-hover:text-neutral-400 transition-colors duration-300">
                        We deep dive into your business model, identifying high-impact areas for AI implementation.
                     </p>
</div>

<div className="group flex flex-col items-start gap-4 p-6 rounded-2xl border border-transparent hover:border-white/5 hover:bg-neutral-900/30 transition-all duration-300 animate-on-scroll" style={{transitionDelay: '200ms'}}>
<div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-sm text-neutral-400 font-medium group-hover:border-[#D4AF37] group-hover:text-[#D4AF37] group-hover:scale-110 transition-all duration-300">02</div>
<h3 className="text-lg font-semibold text-white group-hover:translate-x-1 transition-transform duration-300">Strategy</h3>
<p className="text-sm text-neutral-500 leading-relaxed group-hover:text-neutral-400 transition-colors duration-300">
                        Architecting the technical roadmap. Selection of models, stack definition, and resource planning.
                    </p>
</div>

<div className="group flex flex-col items-start gap-4 p-6 rounded-2xl border border-transparent hover:border-white/5 hover:bg-neutral-900/30 transition-all duration-300 animate-on-scroll" style={{transitionDelay: '300ms'}}>
<div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-sm text-neutral-400 font-medium group-hover:border-[#D4AF37] group-hover:text-[#D4AF37] group-hover:scale-110 transition-all duration-300">03</div>
<h3 className="text-lg font-semibold text-white group-hover:translate-x-1 transition-transform duration-300">Development</h3>
<p className="text-sm text-neutral-500 leading-relaxed group-hover:text-neutral-400 transition-colors duration-300">
                        Agile sprint cycles. Rapid prototyping followed by robust engineering and rigorous testing.
                    </p>
</div>

<div className="group flex flex-col items-start gap-4 p-6 rounded-2xl border border-transparent hover:border-white/5 hover:bg-neutral-900/30 transition-all duration-300 animate-on-scroll" style={{transitionDelay: '400ms'}}>
<div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-sm text-neutral-400 font-medium group-hover:border-[#D4AF37] group-hover:text-[#D4AF37] group-hover:scale-110 transition-all duration-300">04</div>
<h3 className="text-lg font-semibold text-white group-hover:translate-x-1 transition-transform duration-300">Evolution</h3>
<p className="text-sm text-neutral-500 leading-relaxed group-hover:text-neutral-400 transition-colors duration-300">
                        Deployment is just the start. We monitor, fine-tune, and iterate based on real-world data.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#050505] border-t border-white/5" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="flex items-center w-full mb-16 animate-on-scroll">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight shrink-0">Our <span className="text-[#D4AF37]">Services</span></h2>
<div className="h-[1px] bg-gradient-to-r from-white/10 to-white/5 flex-grow mx-6"></div>
<div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center shrink-0 text-neutral-500 hover:text-white hover:border-white/30 transition-colors cursor-pointer">
<svg className="lucide lucide-layers w-5 h-5" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative h-[300px] service-card rounded-2xl border border-white/5 bg-neutral-900/30 p-8 hover:bg-neutral-900/60 hover:border-[#D4AF37]/30 animate-on-scroll" style={{transitionDelay: '100ms'}}>
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#D4AF37]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
<div className="flex flex-col h-full z-10 relative">
<div className="icon-wrapper mb-6 w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 group-hover:border-[#D4AF37]/50 group-hover:bg-[#D4AF37]/10 transition-colors duration-300">
<iconify-icon className="" height="24" icon="solar:code-square-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white mb-3">Website &amp; App Dev</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                            Scalable web and mobile applications built with React, Next.js, and React Native for high performance.
                        </p>
</div>
</div>

<div className="group relative h-[300px] service-card rounded-2xl border border-white/5 bg-neutral-900/30 p-8 hover:bg-neutral-900/60 hover:border-[#D4AF37]/30 animate-on-scroll" style={{transitionDelay: '150ms'}}>
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#D4AF37]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
<div className="flex flex-col h-full relative">
<div className="icon-wrapper flex group-hover:border-[#D4AF37]/50 group-hover:bg-[#D4AF37]/10 transition-colors duration-300 text-neutral-400 bg-white/5 w-12 h-12 border-white/10 border rounded-lg mb-6 items-center justify-center">
<iconify-icon height="24" icon="solar:cpu-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white mb-3">AI Integration</h3>
<p className="leading-relaxed text-sm text-neutral-400">
                            Embedding LLMs, Chatbots, and predictive models directly into your existing digital infrastructure.
                        </p>
</div>
</div>

<div className="group relative h-[300px] service-card rounded-2xl border border-white/5 bg-neutral-900/30 p-8 hover:bg-neutral-900/60 hover:border-[#D4AF37]/30 animate-on-scroll" style={{transitionDelay: '200ms'}}>
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#D4AF37]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
<div className="relative z-10 h-full flex flex-col">
<div className="icon-wrapper mb-6 w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 group-hover:border-[#D4AF37]/50 group-hover:bg-[#D4AF37]/10 transition-colors duration-300">
<iconify-icon height="24" icon="solar:chart-square-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white mb-3">Business Consulting</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                            Strategic guidance on adopting AI to streamline operations, reduce overhead costs and maximize efficiency.
                        </p>
<div className="mt-auto pt-4 flex items-center text-xs text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300">
                            Learn more <svg className="lucide lucide-arrow-right w-3 h-3 ml-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
</div>

<div className="group relative h-[300px] service-card rounded-2xl border border-white/5 bg-neutral-900/30 p-8 hover:bg-neutral-900/60 hover:border-[#D4AF37]/30 animate-on-scroll" style={{transitionDelay: '250ms'}}>
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#D4AF37]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
<div className="relative z-10 h-full flex flex-col">
<div className="icon-wrapper mb-6 w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 group-hover:border-[#D4AF37]/50 group-hover:bg-[#D4AF37]/10 transition-colors duration-300">
<iconify-icon height="24" icon="solar:smartphone-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white mb-3">Social Media AI</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                            Automated content generation, scheduling, and analytics loops for explosive brand growth.
                        </p>
<div className="mt-auto pt-4 flex items-center text-xs text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300">
                            Learn more <svg className="lucide lucide-arrow-right w-3 h-3 ml-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
</div>

<div className="group relative h-[300px] service-card rounded-2xl border border-white/5 bg-neutral-900/30 p-8 hover:bg-neutral-900/60 hover:border-[#D4AF37]/30 animate-on-scroll" style={{transitionDelay: '300ms'}}>
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#D4AF37]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
<div className="relative z-10 h-full flex flex-col">
<div className="icon-wrapper mb-6 w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 group-hover:border-[#D4AF37]/50 group-hover:bg-[#D4AF37]/10 transition-colors duration-300">
<iconify-icon height="24" icon="solar:widget-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white mb-3">Automation Services</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                            Zapier and Make.com workflows that connect your apps and eliminate repetitive manual tasks.
                        </p>
<div className="flex group-hover:opacity-100 transition-opacity transform group-hover:translate-y-0 duration-300 text-xs text-[#D4AF37] opacity-0 mt-auto pt-4 translate-y-2 items-center">
                            Learn more <svg className="lucide lucide-arrow-right w-3 h-3 ml-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M5 12h14"></path><path className="" d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
</div>

<div className="group relative h-[300px] service-card rounded-2xl border border-white/5 bg-neutral-900/30 p-8 hover:bg-neutral-900/60 hover:border-[#D4AF37]/30 animate-on-scroll" style={{transitionDelay: '350ms'}}>
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#D4AF37]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
<div className="relative z-10 h-full flex flex-col">
<div className="icon-wrapper mb-6 w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 group-hover:border-[#D4AF37]/50 group-hover:bg-[#D4AF37]/10 transition-colors duration-300">
<iconify-icon className="" height="24" icon="solar:shield-warning-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white mb-3">Enterprise Security</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                            Secure implementation of AI systems ensuring data privacy, governance and compliance.
                        </p>
<div className="mt-auto pt-4 flex items-center text-xs text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300">
                            Learn more <svg className="lucide lucide-arrow-right w-3 h-3 ml-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-[#030303] border-white/5 border-t pt-24 pb-24" id="testimonials">
<div className="max-w-7xl mx-auto px-6 mb-16">
<div className="flex animate-on-scroll w-full items-center">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight shrink-0">Client <span className="text-[#D4AF37]">Feedback</span></h2>
<div className="h-[1px] bg-gradient-to-r from-white/10 to-white/5 flex-grow mx-6"></div>
<div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center shrink-0 text-neutral-500 hover:text-white hover:border-white/30 transition-colors cursor-pointer">
<svg className="lucide lucide-message-square w-5 h-5" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
</div>
</div>
</div>

<div className="relative w-full mask-fade-x animate-on-scroll mb-8" style={{transitionDelay: '200ms'}}>
<div className="flex overflow-hidden gap-6 pb-4">

<div className="flex shrink-0 items-center gap-6 animate-loop-scroll">

<div className="hover:border-[#D4AF37]/20 transition-colors bg-neutral-900/30 w-[350px] border-white/5 border rounded-xl pt-6 pr-6 pb-6 pl-6">
<div className="flex items-center gap-1 text-[#FACC15] mb-4"><iconify-icon icon="solar:star-bold" width="16"></iconify-icon><iconify-icon icon="solar:star-bold" width="16"></iconify-icon><iconify-icon icon="solar:star-bold" width="16"></iconify-icon><iconify-icon icon="solar:star-bold" width="16"></iconify-icon><iconify-icon icon="solar:star-bold" width="16"></iconify-icon></div>
<p className="text-neutral-300 text-sm leading-relaxed mb-6">"Bezaleel transformed our legacy system into an AI-powered powerhouse. The efficiency gains were immediate."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold text-white">JS</div>
<div className=""><div className="text-sm font-medium text-white">James Sullivan</div><div className="text-xs text-neutral-500">CTO, TechFlow</div></div>
</div>
</div>

<div className="w-[350px] p-6 bg-neutral-900/30 border border-white/5 rounded-xl hover:border-[#D4AF37]/20 transition-colors">
<div className="flex items-center gap-1 text-[#FACC15] mb-4"><iconify-icon icon="solar:star-bold" width="16"></iconify-icon><iconify-icon icon="solar:star-bold" width="16"></iconify-icon><iconify-icon icon="solar:star-bold" width="16"></iconify-icon><iconify-icon icon="solar:star-bold" width="16"></iconify-icon><iconify-icon icon="solar:star-bold" width="16"></iconify-icon></div>
<p className="text-neutral-300 text-sm leading-relaxed mb-6">"The attention to detail in the UI and the backend robustness is unmatched. Highly recommended."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold text-white">AL</div>
<div className=""><div className="text-sm font-medium text-white">Anita Lee</div><div className="text-xs text-neutral-500">Founder, Zest</div></div>
</div>
</div>

<div className="w-[350px] p-6 bg-neutral-900/30 border border-white/5 rounded-xl hover:border-[#D4AF37]/20 transition-colors">
<div className="flex items-center gap-1 text-[#FACC15] mb-4"><iconify-icon icon="solar:star-bold" width="16"></iconify-icon><iconify-icon icon="solar:star-bold" width="16"></iconify-icon><iconify-icon icon="solar:star-bold" width="16"></iconify-icon><iconify-icon icon="solar:star-bold" width="16"></iconify-icon><iconify-icon icon="solar:star-bold" width="16"></iconify-icon></div>
<p className="text-neutral-300 text-sm leading-relaxed mb-6">"We automated 70% of our customer support inquiries thanks to their chatbot integration."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold text-white">MR</div>
<div><div className="text-sm font-medium text-white">Mark Roberts</div><div className="text-xs text-neutral-500">Ops Lead, ScaleUp</div></div>
</div>
</div>

<div className="w-[350px] p-6 bg-neutral-900/30 border border-white/5 rounded-xl hover:border-[#D4AF37]/20 transition-colors">
<div className="flex items-center gap-1 text-[#FACC15] mb-4"><iconify-icon icon="solar:star-bold" width="16"></iconify-icon><iconify-icon icon="solar:star-bold" width="16"></iconify-icon><iconify-icon icon="solar:star-bold" width="16"></iconify-icon><iconify-icon icon="solar:star-bold" width="16"></iconify-icon><iconify-icon icon="solar:star-bold" width="16"></iconify-icon></div>
<p className="text-neutral-300 text-sm leading-relaxed mb-6">"A visionary team that truly understands the intersection of design and artificial intelligence."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold text-white">ES</div>
<div><div className="text-sm font-medium text-white">Elena Sanchez</div><div className="text-xs text-neutral-500">Director, FutureV</div></div>
</div>
</div>
</div>

<div aria-hidden="true" className="flex shrink-0 items-center gap-6 animate-loop-scroll">

<div className="w-[350px] p-6 bg-neutral-900/30 border border-white/5 rounded-xl hover:border-[#D4AF37]/20 transition-colors">
<div className="flex items-center gap-1 text-[#FACC15] mb-4"><iconify-icon icon="solar:star-bold" width="16"></iconify-icon><iconify-icon icon="solar:star-bold" width="16"></iconify-icon><iconify-icon icon="solar:star-bold" width="16"></iconify-icon><iconify-icon icon="solar:star-bold" width="16"></iconify-icon><iconify-icon icon="solar:star-bold" width="16"></iconify-icon></div>
<p className="text-neutral-300 text-sm leading-relaxed mb-6">"Bezaleel transformed our legacy system into an AI-powered powerhouse. The efficiency gains were immediate."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold text-white">JS</div>
<div><div className="text-sm font-medium text-white">James Sullivan</div><div className="text-xs text-neutral-500">CTO, TechFlow</div></div>
</div>
</div>

<div className="w-[350px] p-6 bg-neutral-900/30 border border-white/5 rounded-xl hover:border-[#D4AF37]/20 transition-colors">
<div className="flex items-center gap-1 text-[#FACC15] mb-4"><iconify-icon icon="solar:star-bold" width="16"></iconify-icon><iconify-icon icon="solar:star-bold" width="16"></iconify-icon><iconify-icon icon="solar:star-bold" width="16"></iconify-icon><iconify-icon icon="solar:star-bold" width="16"></iconify-icon><iconify-icon icon="solar:star-bold" width="16"></iconify-icon></div>
<p className="text-neutral-300 text-sm leading-relaxed mb-6">"The attention to detail in the UI and the backend robustness is unmatched. Highly recommended."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold text-white">AL</div>
<div><div className="text-sm font-medium text-white">Anita Lee</div><div className="text-xs text-neutral-500">Founder, Zest</div></div>
</div>
</div>

<div className="w-[350px] p-6 bg-neutral-900/30 border border-white/5 rounded-xl hover:border-[#D4AF37]/20 transition-colors">
<div className="flex items-center gap-1 text-[#FACC15] mb-4"><iconify-icon icon="solar:star-bold" width="16"></iconify-icon><iconify-icon icon="solar:star-bold" width="16"></iconify-icon><iconify-icon icon="solar:star-bold" width="16"></iconify-icon><iconify-icon icon="solar:star-bold" width="16"></iconify-icon><iconify-icon icon="solar:star-bold" width="16"></iconify-icon></div>
<p className="text-neutral-300 text-sm leading-relaxed mb-6">"We automated 70% of our customer support inquiries thanks to their chatbot integration."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold text-white">MR</div>
<div><div className="text-sm font-medium text-white">Mark Roberts</div><div className="text-xs text-neutral-500">Ops Lead, ScaleUp</div></div>
</div>
</div>

<div className="w-[350px] p-6 bg-neutral-900/30 border border-white/5 rounded-xl hover:border-[#D4AF37]/20 transition-colors">
<div className="flex items-center gap-1 text-[#FACC15] mb-4"><iconify-icon icon="solar:star-bold" width="16"></iconify-icon><iconify-icon icon="solar:star-bold" width="16"></iconify-icon><iconify-icon icon="solar:star-bold" width="16"></iconify-icon><iconify-icon icon="solar:star-bold" width="16"></iconify-icon><iconify-icon icon="solar:star-bold" width="16"></iconify-icon></div>
<p className="text-neutral-300 text-sm leading-relaxed mb-6">"A visionary team that truly understands the intersection of design and artificial intelligence."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold text-white">ES</div>
<div><div className="text-sm font-medium text-white">Elena Sanchez</div><div className="text-xs text-neutral-500">Director, FutureV</div></div>
</div>
</div>
</div>
</div>
</div>

<div className="relative w-full mask-fade-x animate-on-scroll" style={{transitionDelay: '200ms'}}>
<div className="flex overflow-hidden gap-6 pb-4">

<div className="flex shrink-0 gap-6 animate-loop-scroll-reverse gap-x-6 gap-y-6 items-center">

<div className="w-[350px] p-6 bg-neutral-900/30 border border-white/5 rounded-xl hover:border-[#D4AF37]/20 transition-colors">
<div className="flex items-center gap-1 text-[#FACC15] mb-4"><iconify-icon icon="solar:star-bold" width="16"></iconify-icon><iconify-icon icon="solar:star-bold" width="16"></iconify-icon><iconify-icon icon="solar:star-bold" width="16"></iconify-icon><iconify-icon icon="solar:star-bold" width="16"></iconify-icon><iconify-icon icon="solar:star-bold" width="16"></iconify-icon></div>
<p className="text-neutral-300 text-sm leading-relaxed mb-6">"Our mobile app retention increased by 40% after the redesign and AI personalization features."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold text-white">DP</div>
<div><div className="text-sm font-medium text-white">David Park</div><div className="text-xs text-neutral-500">CEO, Appify</div></div>
</div>
</div>

<div className="w-[350px] p-6 bg-neutral-900/30 border border-white/5 rounded-xl hover:border-[#D4AF37]/20 transition-colors">
<div className="flex items-center gap-1 text-[#FACC15] mb-4"><iconify-icon icon="solar:star-bold" width="16"></iconify-icon><iconify-icon icon="solar:star-bold" width="16"></iconify-icon><iconify-icon icon="solar:star-bold" width="16"></iconify-icon><iconify-icon className="" icon="solar:star-bold" width="16"></iconify-icon><iconify-icon icon="solar:star-bold" width="16"></iconify-icon></div>
<p className="text-neutral-300 text-sm leading-relaxed mb-6">"Professional, timely, and incredibly knowledgeable about the latest AI trends."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold text-white">SK</div>
<div className=""><div className="text-sm font-medium text-white">Sarah Klein</div><div className="text-xs text-neutral-500">VP, Innovate Corp</div></div>
</div>
</div>

<div className="w-[350px] p-6 bg-neutral-900/30 border border-white/5 rounded-xl hover:border-[#D4AF37]/20 transition-colors">
<div className="flex items-center gap-1 text-[#FACC15] mb-4"><iconify-icon icon="solar:star-bold" width="16"></iconify-icon><iconify-icon icon="solar:star-bold" width="16"></iconify-icon><iconify-icon className="" icon="solar:star-bold" width="16"></iconify-icon><iconify-icon icon="solar:star-bold" width="16"></iconify-icon><iconify-icon icon="solar:star-bold" width="16"></iconify-icon></div>
<p className="text-neutral-300 text-sm leading-relaxed mb-6">"The border beam effects and micro-interactions they added made our site feel alive."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold text-white">TY</div>
<div className=""><div className="text-sm font-medium text-white">Tom York</div><div className="text-xs text-neutral-500">Lead Design, Orbit</div></div>
</div>
</div>

<div className="w-[350px] p-6 bg-neutral-900/30 border border-white/5 rounded-xl hover:border-[#D4AF37]/20 transition-colors">
<div className="flex items-center gap-1 text-[#FACC15] mb-4"><iconify-icon icon="solar:star-bold" width="16"></iconify-icon><iconify-icon icon="solar:star-bold" width="16"></iconify-icon><iconify-icon icon="solar:star-bold" width="16"></iconify-icon><iconify-icon icon="solar:star-bold" width="16"></iconify-icon><iconify-icon icon="solar:star-bold" width="16"></iconify-icon></div>
<p className="text-neutral-300 text-sm leading-relaxed mb-6">"Scalability was our biggest issue. Bezaleel's architecture solved it overnight."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold text-white">LM</div>
<div><div className="text-sm font-medium text-white">Lisa Miller</div><div className="text-xs text-neutral-500">CTO, DataStream</div></div>
</div>
</div>
</div>

<div aria-hidden="true" className="flex shrink-0 items-center gap-6 animate-loop-scroll-reverse">

<div className="w-[350px] p-6 bg-neutral-900/30 border border-white/5 rounded-xl hover:border-[#D4AF37]/20 transition-colors">
<div className="flex items-center gap-1 text-[#FACC15] mb-4"><iconify-icon icon="solar:star-bold" width="16"></iconify-icon><iconify-icon icon="solar:star-bold" width="16"></iconify-icon><iconify-icon icon="solar:star-bold" width="16"></iconify-icon><iconify-icon icon="solar:star-bold" width="16"></iconify-icon><iconify-icon icon="solar:star-bold" width="16"></iconify-icon></div>
<p className="text-neutral-300 text-sm leading-relaxed mb-6">"Our mobile app retention increased by 40% after the redesign and AI personalization features."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold text-white">DP</div>
<div><div className="text-sm font-medium text-white">David Park</div><div className="text-xs text-neutral-500">CEO, Appify</div></div>
</div>
</div>

<div className="w-[350px] p-6 bg-neutral-900/30 border border-white/5 rounded-xl hover:border-[#D4AF37]/20 transition-colors">
<div className="flex items-center gap-1 text-[#FACC15] mb-4"><iconify-icon icon="solar:star-bold" width="16"></iconify-icon><iconify-icon icon="solar:star-bold" width="16"></iconify-icon><iconify-icon icon="solar:star-bold" width="16"></iconify-icon><iconify-icon icon="solar:star-bold" width="16"></iconify-icon><iconify-icon icon="solar:star-bold" width="16"></iconify-icon></div>
<p className="text-neutral-300 text-sm leading-relaxed mb-6">"Professional, timely, and incredibly knowledgeable about the latest AI trends."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold text-white">SK</div>
<div><div className="text-sm font-medium text-white">Sarah Klein</div><div className="text-xs text-neutral-500">VP, Innovate Corp</div></div>
</div>
</div>

<div className="w-[350px] p-6 bg-neutral-900/30 border border-white/5 rounded-xl hover:border-[#D4AF37]/20 transition-colors">
<div className="flex items-center gap-1 text-[#FACC15] mb-4"><iconify-icon icon="solar:star-bold" width="16"></iconify-icon><iconify-icon icon="solar:star-bold" width="16"></iconify-icon><iconify-icon icon="solar:star-bold" width="16"></iconify-icon><iconify-icon icon="solar:star-bold" width="16"></iconify-icon><iconify-icon icon="solar:star-bold" width="16"></iconify-icon></div>
<p className="text-neutral-300 text-sm leading-relaxed mb-6">"The border beam effects and micro-interactions they added made our site feel alive."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold text-white">TY</div>
<div><div className="text-sm font-medium text-white">Tom York</div><div className="text-xs text-neutral-500">Lead Design, Orbit</div></div>
</div>
</div>

<div className="w-[350px] p-6 bg-neutral-900/30 border border-white/5 rounded-xl hover:border-[#D4AF37]/20 transition-colors">
<div className="flex items-center gap-1 text-[#FACC15] mb-4"><iconify-icon icon="solar:star-bold" width="16"></iconify-icon><iconify-icon icon="solar:star-bold" width="16"></iconify-icon><iconify-icon icon="solar:star-bold" width="16"></iconify-icon><iconify-icon icon="solar:star-bold" width="16"></iconify-icon><iconify-icon icon="solar:star-bold" width="16"></iconify-icon></div>
<p className="text-neutral-300 text-sm leading-relaxed mb-6">"Scalability was our biggest issue. Bezaleel's architecture solved it overnight."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold text-white">LM</div>
<div><div className="text-sm font-medium text-white">Lisa Miller</div><div className="text-xs text-neutral-500">CTO, DataStream</div></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-black border-t border-white/10 overflow-hidden relative z-10" id="contact">

<div className="flex md:py-32 animate-on-scroll w-full pt-20 pb-20 relative items-center justify-center">
<h2 className="text-[14vw] leading-[0.8] font-semibold tracking-tighter text-white flex items-center gap-2 z-10 font-[Space_Grotesk] select-none">
<span className="">work</span>

<div className="relative w-[1em] h-[1em] flex-shrink-0 mx-[-0.2em] z-20">
<div className="absolute inset-0 animate-[spin_12s_linear_infinite]">
<svg className="w-full h-full fill-neutral-500 text-[10px] uppercase font-semibold tracking-widest" viewbox="0 0 100 100">
<defs><path d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" id="circle"></path></defs>
<text className="text-[11px]"><textpath href="#circle">BEZALEEL • AI POWERED AGENCY •</textpath></text>
</svg>
</div>
<div className="flex absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<div className="w-[40%] h-[40%] bg-[#D4AF37] rounded-full flex items-center justify-center text-black font-bold text-[0.3em]">1</div>
</div>
</div>
<span className="text-[#D4AF37]">together</span>
</h2>
</div>

<div className="grid grid-cols-1 lg:grid-cols-4 border-t border-white/10">

<div className="lg:col-span-2 p-10 md:p-16 border-r border-white/10 border-b lg:border-b-0 animate-on-scroll" style={{transitionDelay: '100ms'}}>
<h3 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-12 font-[Space_Grotesk] tracking-tight">Let's make something great<br/><span className="border-b border-white/30 pb-1 text-[#D4AF37] border-[#D4AF37]/30">work together?</span></h3>
<form className="space-y-8 max-w-md">
<div className="group relative">
<input className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder-neutral-600 focus:outline-none focus:border-[#D4AF37] transition-colors text-lg" placeholder="Your Name" type="text"/>
</div>
<div className="group relative">
<input className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder-neutral-600 focus:outline-none focus:border-[#D4AF37] transition-colors text-lg" placeholder="Your Email" type="email"/>
</div>
<div className="group relative">
<textarea className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder-neutral-600 focus:outline-none focus:border-[#D4AF37] transition-colors text-lg resize-none" placeholder="Project Details" rows="1"></textarea>
</div>
<button className="group flex items-center gap-4 text-white mt-8 hover:text-[#D4AF37] transition-colors pt-4">
<div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-all duration-300">
<svg className="lucide lucide-arrow-right w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
<span className="uppercase tracking-widest text-xs font-semibold">Send Inquiry</span>
</button>
</form>
</div>

<div className="p-10 md:p-16 border-r border-white/10 border-b lg:border-b-0 flex flex-col justify-end min-h-[400px] animate-on-scroll" style={{transitionDelay: '200ms'}}>
<h4 className="text-lg font-semibold text-white font-[Space_Grotesk] mb-6">Launch Layer-- IN</h4>
<p className="leading-relaxed text-sm font-light text-neutral-500">C scheme St, 24th Floor,Orchard View Jaipur RJ</p>
</div>

</div>
</section>

<footer className="bg-black border-t border-white/10 px-6 py-10 z-20 relative">
<div className="max-w-[1920px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<nav className="flex flex-wrap justify-center gap-8 text-[11px] font-bold uppercase tracking-widest text-neutral-500">
<a className="hover:text-white transition-colors" href="#">Home</a>
<a className="hover:text-white transition-colors" href="#about">Agency</a>
<a className="hover:text-white transition-colors" href="#services">Expertise</a>
<a className="hover:text-white transition-colors" href="#work">Projects</a>
<a className="hover:text-white transition-colors" href="#">People</a>
<a className="hover:text-white transition-colors" href="#">Blog</a>
<a className="hover:text-white transition-colors" href="#contact">Contact</a>
</nav>
<div className="text-[11px] text-neutral-600 tracking-wide font-medium">
                © 2024 Bezaleel is Proudly Powered by <span className="text-neutral-400 underline decoration-neutral-700 hover:text-[#D4AF37] transition-colors cursor-pointer">Intelligence</span>
</div>
</div>
</footer>

    </>
  );
}
