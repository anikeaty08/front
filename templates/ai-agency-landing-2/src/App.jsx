import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



document.addEventListener("DOMContentLoaded", () => {
// Initialize Lucide Icons
lucide.createIcons();
// Intersection Observer for scroll animations
function initInViewAnimations() {
const observer = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("animate");
observer.unobserve(entry.target);
}
});
}, { threshold: 0.1, rootMargin: "0px 0px -5% 0px" });
document.querySelectorAll(".animate-on-scroll").forEach((el) => {
observer.observe(el);
});
}
initInViewAnimations();
});
// Tab Switcher Logic
function switchTab(tabId) {
document.querySelectorAll('.tab-content').forEach(el => {
el.classList.add('hidden');
el.classList.remove('animate');
});
document.querySelectorAll('.tab-btn').forEach(el => {
el.classList.remove('border-[#CCFF00]', 'text-white');
el.classList.add('border-transparent', 'text-neutral-500');
});
const targetContent = document.getElementById(tabId);
targetContent.classList.remove('hidden');
// Force reflow to restart animation
void targetContent.offsetWidth;
targetContent.classList.add('animate');
const targetBtn = document.querySelector(`[data-target="${tabId}"]`);
targetBtn.classList.remove('border-transparent', 'text-neutral-500');
targetBtn.classList.add('border-[#CCFF00]', 'text-white');
}



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
                    particlesJS('particles-js', {
                        particles: {
                            number: { value: 80, density: { enable: true, value_area: 800 } },
                            color: { value: "#ffffff" },
                            shape: { type: "circle" },
                            opacity: { value: 0.5, random: false },
                            size: { value: 3, random: true },
                            line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
                            move: { enable: true, speed: 6, direction: "none", random: false, straight: false, out_mode: "out", bounce: false }
                        },
                        interactivity: {
                            detect_on: "canvas",
                            events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" }, resize: true },
                            modes: { grab: { distance: 400, line_linked: { opacity: 1 } }, bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 }, repulse: { distance: 200, duration: 0.4 }, push: { particles_nb: 4 }, remove: { particles_nb: 2 } }
                        },
                        retina_detect: true
                    });
                });
            
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0F]/50 backdrop-blur-xl border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#CCFF00]/20 to-[#668000]/20 border border-[#CCFF00]/30 flex items-center justify-center text-[#CCFF00] group-hover:scale-110 transition-transform duration-300">
<i className="w-4 h-4" data-lucide="zap" strokeWidth="1.5"></i>
</div>
<span className="text-lg font-light text-white tracking-tight">Hardwire AI<span className="text-[#CCFF00]">.</span></span>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-base font-extralight text-neutral-400 hover:text-white transition-colors" href="#problem">The Problem</a>
<a className="text-base font-extralight text-neutral-400 hover:text-white transition-colors" href="#value-prop">Our Value</a>
<a className="text-base font-extralight text-neutral-400 hover:text-white transition-colors" href="#process">Process</a>
<a className="text-base font-extralight text-neutral-400 hover:text-white transition-colors" href="#services">Services</a>
</div>
<div className="flex items-center gap-4">
<div className="hidden sm:block">
<a className="shiny-cta !py-2 !px-6 text-base" href="#contact">
<span>Get in Touch</span>
</a>
</div>
</div>
</div>
</nav>

<section className="min-h-screen flex overflow-hidden pt-24 pb-12 relative items-center justify-center text-center">
<div className="absolute inset-0 perspective-grid -z-20"></div>
<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#CCFF00] opacity-[0.02] blur-[140px] rounded-full -z-10"></div>
<div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#CCFF00] opacity-[0.015] blur-[100px] rounded-full -z-10"></div>
<div className="z-10 flex flex-col lg:pt-0 w-full max-w-4xl mr-auto ml-auto pt-12 pr-6 pl-6 items-center">
<div className="mb-8 flex items-center justify-center gap-2 animate-on-scroll animate">
<div className="apple-glass-pill inline-flex items-center gap-2 px-5 py-2 relative z-10">
<i className="w-3.5 h-3.5 text-[#CCFF00]" data-lucide="building-2" strokeWidth="1.5"></i>
<span className="text-sm font-light tracking-wider text-neutral-200 uppercase">FROM AMBITIOUS STARTUPS TO ESTABLISHED ENTERPRISES</span>
</div>
</div>
<h1 className="md:text-6xl lg:text-7xl leading-[1.1] animate-on-scroll animate text-5xl font-light text-white tracking-tight mb-6">
                We don’t discuss AI.<br/> <span className="bg-gradient-to-br from-[#ffffff] to-lime-600 bg-clip-text text-transparent">We deploy it.</span>
</h1>
<p className="leading-relaxed animate-on-scroll animate text-3xl font-extralight text-neutral-400 max-w-3xl mb-10">
                We identify the AI opportunities that will materially improve how your business runs — then we build them, launch them, and make your team fully capable of owning them.
            </p>
<div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 animate-on-scroll animate">
<a className="shiny-cta h-[56px] px-8 text-base" href="#contact">
<span>GET IN TOUCH</span>
<i className="w-4 h-4 ml-1" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
</section>

<section className="bg-[#0A0A0F] border-white/5 border-t pt-32 pb-32 relative" id="problem">
<div className="absolute inset-0 z-0" id="particles-js">


<canvas className="particles-js-canvas-el" height="912" style={{width: '100%', height: '100%'}} width="1620"></canvas></div>
<div className="max-w-4xl mx-auto px-6 space-y-10 py-12 relative z-10">
<h2 className="text-2xl md:text-3xl lg:text-4xl leading-[1.4] animate-on-scroll font-light text-white tracking-tight text-center" style={{animationDelay: '0ms'}}>
                You’ve bought the tools. Read the reports. Sat<br className="hidden sm:block"/> through the demos.
            </h2>
<h2 className="text-2xl md:text-3xl lg:text-4xl leading-[1.4] animate-on-scroll font-light text-white tracking-tight text-center" style={{animationDelay: '150ms'}}>
                And months later? Nothing changed. Pilots stalled.<br className="hidden sm:block"/> Tools unused. No measurable return.
            </h2>
<h2 className="text-2xl md:text-3xl lg:text-4xl leading-[1.4] animate-on-scroll font-light text-white tracking-tight text-center" style={{animationDelay: '300ms'}}>
                Or you haven’t started — because you don’t want<br className="hidden sm:block"/> to waste time and budget guessing.
            </h2>
<h2 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-tight leading-[1.4] text-center animate-on-scroll" style={{animationDelay: '450ms'}}>
<span className="text-neutral-500 block mb-2">You’re not behind.</span>
<span className="text-white">You’re stuck where most companies get stuck.</span>
</h2>
<div className="text-center animate-on-scroll pt-6" style={{animationDelay: '600ms'}}>
<h2 className="leading-[1.2] text-3xl font-light tracking-tight bg-gradient-to-br from-[#ffffff] to-lime-600 bg-clip-text text-transparent md:text-4xl lg:text-5xl">
                    That’s where we come in.
                </h2>
</div>
</div>
</section>

<section className="overflow-hidden bg-[#0A0A0F] border-white/5 border-t pt-32 pb-32 relative" id="value-prop">

<div className="absolute inset-0 pointer-events-none z-0">
<div className="absolute inset-0" style={{backgroundImage: 'linear-gradient(to right, rgba(204, 255, 0, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(204, 255, 0, 0.05) 1px, transparent 1px)', backgroundSize: '60px 60px', maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)'}}></div>
<div className="absolute top-[20%] left-[50%] w-[40rem] h-[40rem] bg-[#CCFF00] rounded-full mix-blend-screen filter blur-[150px] opacity-[0.04] -translate-x-1/2"></div>
</div>
<div className="z-10 max-w-4xl mx-auto px-6 relative text-center">
<div className="animate-on-scroll flex flex-col items-center">
<h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight mb-8">
                    AI that drives <span className="bg-gradient-to-br from-[#ffffff] to-lime-600 bg-clip-text text-transparent">measurable performance.</span>
</h2>
<p className="text-3xl md:text-4xl text-neutral-400 font-extralight leading-relaxed mb-10 max-w-3xl mx-auto">
                    We decide what’s worth building. We build it properly. We make sure your team uses it.<br/><br/>
                    No endless pilots. No vague innovation projects. Just deployed systems that improve operations.
                </p>
<div className="inline-flex text-lg font-light tracking-tight border-[#CCFF00]/20 border rounded-full mb-12 px-6 py-3 gap-x-3 gap-y-3 items-center">
<i className="w-5 h-5 text-[#CCFF00]" data-lucide="target" strokeWidth="1.5"></i>
<span className="bg-gradient-to-br from-[#ffffff] to-lime-600 bg-clip-text text-transparent">Stop funding experiments. Start delivering outcomes.</span>
</div>
<div className="">
<a className="shiny-cta text-base h-[56px] pr-8 pl-8" href="#contact">GET IN TOUCH</a>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-[#0A0A0F] border-white/5 border-t pt-24 pb-24" id="process">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="flex items-center w-full mb-16 animate-on-scroll">
<h2 className="text-3xl md:text-4xl font-light text-white tracking-tight shrink-0">Everything we do comes down to <span className="bg-gradient-to-br from-[#ffffff] to-lime-600 bg-clip-text text-transparent">three things:</span></h2>
<div className="h-[1px] bg-gradient-to-r from-white/10 to-white/5 flex-grow mx-6 hidden md:block"></div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<a className="group flex flex-col items-start gap-5 p-8 rounded-3xl border border-transparent hover:border-white/5 hover:bg-neutral-900/30 transition-all duration-300 animate-on-scroll block" href="#services">
<div className="flex group-hover:border-[#CCFF00] group-hover:text-[#CCFF00] group-hover:scale-110 transition-all duration-300 text-lg font-light text-neutral-400 w-12 h-12 border-white/10 border rounded-full items-center justify-center">1</div>
<h3 className="text-2xl font-light text-white group-hover:translate-x-1 transition-transform duration-300 tracking-tight">Discover</h3>
<p className="text-2xl font-extralight text-neutral-500 leading-relaxed group-hover:text-neutral-400 transition-colors duration-300">
                        We dissect how your business actually runs — where time leaks, where decisions stall, where manual effort compounds. Then we isolate the highest-impact AI opportunities and ignore the rest.
                     </p>
</a>

<a className="group flex flex-col items-start gap-5 p-8 rounded-3xl border border-transparent hover:border-white/5 hover:bg-neutral-900/30 transition-all duration-300 animate-on-scroll block" href="#services">
<div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-lg text-neutral-400 font-light group-hover:border-[#CCFF00] group-hover:text-[#CCFF00] group-hover:scale-110 transition-all duration-300">2</div>
<h3 className="text-2xl font-light text-white group-hover:translate-x-1 transition-transform duration-300 tracking-tight">Build</h3>
<p className="text-2xl font-extralight text-neutral-500 leading-relaxed group-hover:text-neutral-400 transition-colors duration-300">
                        We design and deploy production-ready AI systems that integrate into your existing stack. Secure. Reliable. Built correctly from day one.
                    </p>
</a>

<a className="group flex flex-col items-start gap-5 p-8 rounded-3xl border border-transparent hover:border-white/5 hover:bg-neutral-900/30 transition-all duration-300 animate-on-scroll block" href="#services">
<div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-lg text-neutral-400 font-light group-hover:border-[#CCFF00] group-hover:text-[#CCFF00] group-hover:scale-110 transition-all duration-300">3</div>
<h3 className="text-2xl font-light text-white group-hover:translate-x-1 transition-transform duration-300 tracking-tight">Embed</h3>
<p className="text-2xl font-extralight text-neutral-500 leading-relaxed group-hover:text-neutral-400 transition-colors duration-300">
                        We train your team, refine the workflows, and ensure adoption. By the time we step back, it’s no longer “the AI project.” It’s just how work gets done.
                    </p>
</a>
</div>
</div>
</section>
<section className="relative py-24 md:py-32 overflow-hidden border-t border-white/5 bg-[#0A0A0F] flex items-center min-h-[60vh]">

<div className="absolute inset-0 z-0 bg-gradient-to-t from-[#0A0A0F] via-[#0A0A0F]/20 to-[#0A0A0F]"></div>

<div className="relative z-10 max-w-7xl mx-auto px-6 w-full animate-on-scroll">
<div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
<div className="w-16 h-16 mb-8 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-md shadow-[0_0_30px_rgba(204,255,0,0.1)]">
<i className="w-8 h-8 text-[#CCFF00]" data-lucide="cpu" strokeWidth="1.5"></i>
</div>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight leading-tight mb-6">
                    From abstract potential to <br className="hidden sm:block"/>
<span className="bg-gradient-to-br from-[#ffffff] to-lime-600 bg-clip-text text-transparent">concrete execution.</span>
</h2>
<p className="text-3xl text-neutral-400 font-extralight leading-relaxed max-w-2xl mx-auto">
                    We bridge the gap between AI capabilities and business reality. Every system we build is designed for production workflows, not just presentation decks.
                </p>
</div>
</div>
</section>

<section className="overflow-hidden bg-[#0A0A0F] border-white/5 border-t pt-24 pb-24 relative" id="testimonials">
<div className="max-w-7xl mx-auto px-6">
<div className="flex items-center w-full mb-16 animate-on-scroll">
<h2 className="text-3xl md:text-4xl font-light text-white tracking-tight shrink-0">Don't just take <span className="bg-gradient-to-br from-[#ffffff] to-lime-600 bg-clip-text text-transparent">our word for it</span></h2>
<div className="h-[1px] bg-gradient-to-r from-white/10 to-white/5 flex-grow mx-6 hidden md:block"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="p-10 lg:p-12 rounded-3xl border border-white/5 bg-neutral-900/30 flex flex-col animate-on-scroll">
<i className="w-12 h-12 text-[#CCFF00] opacity-40 mb-8" data-lucide="message-square-quote" strokeWidth="1.5"></i>
<p className="text-3xl md:text-4xl font-extralight text-neutral-300 leading-relaxed mb-10 flex-grow">
                        "Within weeks, they pinpointed exactly where we were losing time and built a clear AI roadmap. The operational gains were immediate and measurable."
                    </p>
<div className="flex items-center gap-4 border-t border-white/5 pt-6 mt-auto">
<div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center border border-white/10">
<i className="w-4 h-4 text-neutral-400" data-lucide="building" strokeWidth="1.5"></i>
</div>
<div className="font-light tracking-tight text-lg bg-gradient-to-br from-[#ffffff] to-lime-600 bg-clip-text text-transparent">Client, Construction Industry</div>
</div>
</div>

<div className="p-10 lg:p-12 rounded-3xl border border-white/5 bg-neutral-900/30 flex flex-col animate-on-scroll">
<i className="w-12 h-12 text-[#CCFF00] opacity-40 mb-8" data-lucide="message-square-quote" strokeWidth="1.5"></i>
<p className="text-3xl md:text-4xl font-extralight text-neutral-300 leading-relaxed mb-10 flex-grow">
                        "They understood our workflows instantly and implemented practical AI solutions that delivered results fast. We’re already seeing measurable improvements."
                    </p>
<div className="flex items-center gap-4 border-t border-white/5 pt-6 mt-auto">
<div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center border border-white/10">
<i className="w-4 h-4 text-neutral-400" data-lucide="briefcase" strokeWidth="1.5"></i>
</div>
<div className="font-light tracking-tight text-lg bg-gradient-to-br from-[#ffffff] to-lime-600 bg-clip-text text-transparent">Client, Professional Services</div>
</div>
</div>
</div>

<div className="mt-24 pt-16 border-t border-white/5 relative animate-on-scroll">
<p className="text-center text-sm font-light text-neutral-500 uppercase tracking-widest mb-10">Trusted by innovative teams worldwide</p>
<div className="relative flex overflow-hidden marquee-fade w-full">
<div className="flex w-max animate-marquee hover:[animation-play-state:paused]">

<div className="flex items-center justify-around gap-16 md:gap-24 px-8 md:px-12">
<div className="flex items-center gap-2 text-2xl font-semibold text-neutral-600 uppercase tracking-tighter"><iconify-icon icon="solar:planet-linear" width="28"></iconify-icon> Globex</div>
<div className="flex items-center gap-2 text-2xl font-semibold text-neutral-600 uppercase tracking-tighter"><iconify-icon icon="solar:asteroid-linear" width="28"></iconify-icon> Soylent</div>
<div className="flex items-center gap-2 text-2xl font-semibold text-neutral-600 uppercase tracking-tighter"><iconify-icon icon="solar:atom-linear" width="28"></iconify-icon> Initech</div>
<div className="flex items-center gap-2 text-2xl font-semibold text-neutral-600 uppercase tracking-tighter"><iconify-icon icon="solar:dna-linear" width="28"></iconify-icon> Umbrella</div>
<div className="flex items-center gap-2 text-2xl font-semibold text-neutral-600 uppercase tracking-tighter"><iconify-icon icon="solar:shield-network-linear" width="28"></iconify-icon> Cyberdyne</div>
<div className="flex items-center gap-2 text-2xl font-semibold text-neutral-600 uppercase tracking-tighter"><iconify-icon icon="solar:ghost-linear" width="28"></iconify-icon> Phantom</div>
</div>

<div className="flex items-center justify-around gap-16 md:gap-24 px-8 md:px-12">
<div className="flex items-center gap-2 text-2xl font-semibold text-neutral-600 uppercase tracking-tighter"><iconify-icon icon="solar:planet-linear" width="28"></iconify-icon> Globex</div>
<div className="flex items-center gap-2 text-2xl font-semibold text-neutral-600 uppercase tracking-tighter"><iconify-icon icon="solar:asteroid-linear" width="28"></iconify-icon> Soylent</div>
<div className="flex items-center gap-2 text-2xl font-semibold text-neutral-600 uppercase tracking-tighter"><iconify-icon icon="solar:atom-linear" width="28"></iconify-icon> Initech</div>
<div className="flex items-center gap-2 text-2xl font-semibold text-neutral-600 uppercase tracking-tighter"><iconify-icon icon="solar:dna-linear" width="28"></iconify-icon> Umbrella</div>
<div className="flex items-center gap-2 text-2xl font-semibold text-neutral-600 uppercase tracking-tighter"><iconify-icon icon="solar:shield-network-linear" width="28"></iconify-icon> Cyberdyne</div>
<div className="flex items-center gap-2 text-2xl font-semibold text-neutral-600 uppercase tracking-tighter"><iconify-icon icon="solar:ghost-linear" width="28"></iconify-icon> Phantom</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#0A0A0F] border-white/5 border-t pt-16 pb-16 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x md:divide-white/5">
<div className="text-center animate-on-scroll flex flex-col items-center justify-center">
<div className="md:text-5xl lg:text-6xl text-4xl font-light text-white tracking-tight mb-3">15+</div>
<div className="text-base font-light text-neutral-500 uppercase tracking-widest px-4">Successful client engagements</div>
</div>
<div className="text-center animate-on-scroll flex flex-col items-center justify-center">
<div className="md:text-5xl lg:text-6xl text-4xl font-light text-white tracking-tight mb-3">5+</div>
<div className="text-base font-light text-neutral-500 uppercase tracking-widest px-4">Industries<br/>served</div>
</div>
<div className="text-center animate-on-scroll flex flex-col items-center justify-center">
<div className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight mb-3">100%</div>
<div className="text-base font-light text-neutral-500 uppercase tracking-widest px-4">Solutions deployed to production</div>
</div>
<div className="text-center animate-on-scroll flex flex-col items-center justify-center">
<div className="leading-tight bg-clip-text md:text-3xl lg:text-4xl text-2xl font-light text-transparent tracking-tight bg-gradient-to-br from-[#ffffff] to-lime-600 max-w-[200px] mb-3">Weeks,<br/>not months</div>
<div className="text-base font-light text-neutral-500 uppercase tracking-widest px-4">Average time to first results</div>
</div>
</div>
</div>
</section>

<section className="bg-[#0A0A0F] border-white/5 border-t pt-24 pb-24" id="services">
<div className="max-w-7xl mx-auto px-6">

<div className="flex flex-wrap gap-2 md:gap-6 animate-on-scroll border-white/10 border-b mb-12 gap-x-2 gap-y-2">
<button className="tab-btn uppercase transition-all border-[#CCFF00] text-base font-light text-white tracking-wider border rounded-[2px] px-6 py-3" data-target="tab-discover" onclick="switchTab('tab-discover')">DISCOVER</button>
<button className="tab-btn px-6 py-3 text-base font-light uppercase tracking-wider transition-all border border-transparent text-neutral-500 hover:text-neutral-300 rounded-[2px]" data-target="tab-build" onclick="switchTab('tab-build')">BUILD</button>
<button className="tab-btn px-6 py-3 text-base font-light uppercase tracking-wider transition-all border border-transparent text-neutral-500 hover:text-neutral-300 rounded-[2px]" data-target="tab-embed" onclick="switchTab('tab-embed')">EMBED</button>
</div>

<div className="tab-content animate-on-scroll block" id="tab-discover">
<div className="mb-12 max-w-4xl">
<h3 className="text-3xl md:text-4xl font-light text-white mb-6 tracking-tight">Decide what’s actually worth building.</h3>
<p className="text-2xl md:text-3xl text-neutral-400 font-extralight leading-relaxed">
                        Before anything is developed, we align leadership, assess workflows, and quantify ROI. If it won’t create measurable impact, we don’t pursue it.
                    </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="p-6 rounded-xl border border-white/5 bg-white/[0.02]">
<i className="w-5 h-5 text-[#CCFF00] mb-6" data-lucide="users" strokeWidth="1.5"></i>
<h4 className="text-lg text-white font-light tracking-wide">Leadership Alignment Workshops</h4>
</div>
<div className="p-6 rounded-xl border border-white/5 bg-white/[0.02]">
<i className="w-5 h-5 text-[#CCFF00] mb-6" data-lucide="message-circle" strokeWidth="1.5"></i>
<h4 className="text-lg text-white font-light tracking-wide">Team &amp; Stakeholder Interviews</h4>
</div>
<div className="p-6 rounded-xl border border-white/5 bg-white/[0.02]">
<i className="w-5 h-5 text-[#CCFF00] mb-6" data-lucide="calculator" strokeWidth="1.5"></i>
<h4 className="text-lg text-white font-light tracking-wide">ROI Modelling &amp; Business Cases</h4>
</div>
<div className="p-6 rounded-xl border border-white/5 bg-white/[0.02]">
<i className="w-5 h-5 text-[#CCFF00] mb-6" data-lucide="map" strokeWidth="1.5"></i>
<h4 className="text-lg text-white font-light tracking-wide">Process Mapping</h4>
</div>
</div>
</div>

<div className="tab-content hidden" id="tab-build">
<div className="mb-12 max-w-4xl">
<h3 className="text-3xl md:text-4xl font-light text-white mb-6 tracking-tight">Engineer systems for production.</h3>
<p className="text-2xl md:text-3xl text-neutral-400 font-extralight leading-relaxed">
                        We design, develop, and integrate AI solutions that fit seamlessly into your existing infrastructure. Security, scalability, and reliability are built in from day one.
                    </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="p-6 rounded-xl border border-white/5 bg-white/[0.02]">
<i className="w-5 h-5 text-[#CCFF00] mb-6" data-lucide="cpu" strokeWidth="1.5"></i>
<h4 className="text-lg text-white font-light tracking-wide">Custom Model Fine-Tuning</h4>
</div>
<div className="p-6 rounded-xl border border-white/5 bg-white/[0.02]">
<i className="w-5 h-5 text-[#CCFF00] mb-6" data-lucide="network" strokeWidth="1.5"></i>
<h4 className="text-lg text-white font-light tracking-wide">API Integration &amp; Pipelines</h4>
</div>
<div className="p-6 rounded-xl border border-white/5 bg-white/[0.02]">
<i className="w-5 h-5 text-[#CCFF00] mb-6" data-lucide="shield-check" strokeWidth="1.5"></i>
<h4 className="text-lg text-white font-light tracking-wide">Security &amp; Compliance Setup</h4>
</div>
<div className="p-6 rounded-xl border border-white/5 bg-white/[0.02]">
<i className="w-5 h-5 text-[#CCFF00] mb-6" data-lucide="server" strokeWidth="1.5"></i>
<h4 className="text-lg text-white font-light tracking-wide">Scalable Infrastructure Deployment</h4>
</div>
</div>
</div>

<div className="tab-content hidden" id="tab-embed">
<div className="mb-12 max-w-4xl">
<h3 className="text-3xl md:text-4xl font-light text-white mb-6 tracking-tight">Drive adoption and operationalize.</h3>
<p className="text-2xl md:text-3xl text-neutral-400 font-extralight leading-relaxed">
                        Technology is only useful if your team uses it. We train your staff, refine workflows, and ensure the new systems become the default way of working.
                    </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="p-6 rounded-xl border border-white/5 bg-white/[0.02]">
<i className="w-5 h-5 text-[#CCFF00] mb-6" data-lucide="git-branch" strokeWidth="1.5"></i>
<h4 className="text-lg text-white font-light tracking-wide">Workflow Redesign</h4>
</div>
<div className="p-6 rounded-xl border border-white/5 bg-white/[0.02]">
<i className="w-5 h-5 text-[#CCFF00] mb-6" data-lucide="graduation-cap" strokeWidth="1.5"></i>
<h4 className="text-lg text-white font-light tracking-wide">Team Training &amp; Onboarding</h4>
</div>
<div className="p-6 rounded-xl border border-white/5 bg-white/[0.02]">
<i className="w-5 h-5 text-[#CCFF00] mb-6" data-lucide="trending-up" strokeWidth="1.5"></i>
<h4 className="text-lg text-white font-light tracking-wide">Performance Monitoring</h4>
</div>
<div className="p-6 rounded-xl border border-white/5 bg-white/[0.02]">
<i className="w-5 h-5 text-[#CCFF00] mb-6" data-lucide="refresh-ccw" strokeWidth="1.5"></i>
<h4 className="text-lg text-white font-light tracking-wide">Iterative Refinement</h4>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#0A0A0F] border-white/5 border-t pt-24 pb-24 relative" id="contact">
<div className="absolute inset-0 perspective-grid -z-20 opacity-30"></div>
<div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#CCFF00] opacity-[0.015] blur-[100px] rounded-full -z-10"></div>
<div className="max-w-3xl mx-auto px-6 relative z-10">
<div className="text-center mb-12 animate-on-scroll">
<div className="w-16 h-16 mx-auto mb-6 rounded-full border border-[#CCFF00]/20 flex items-center justify-center bg-[#CCFF00]/5">
<i className="w-6 h-6 text-[#CCFF00]" data-lucide="send" strokeWidth="1.5"></i>
</div>
<h2 className="text-4xl md:text-5xl font-light text-white tracking-tight mb-4">Ready to <span className="bg-gradient-to-br from-[#ffffff] to-lime-600 bg-clip-text text-transparent">deploy?</span></h2>
<p className="text-2xl font-extralight text-neutral-400">Let's discuss how AI can drive measurable outcomes for your business.</p>
</div>
<form className="space-y-6 animate-on-scroll border border-white/5 bg-neutral-900/30 backdrop-blur-md p-8 rounded-3xl">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2 text-left">
<label className="text-sm font-light text-neutral-400 uppercase tracking-widest">Name</label>
<input className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-base text-white focus:outline-none focus:border-[#CCFF00]/50 transition-colors" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-2 text-left">
<label className="text-sm font-light text-neutral-400 uppercase tracking-widest">Email</label>
<input className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-base text-white focus:outline-none focus:border-[#CCFF00]/50 transition-colors" placeholder="john@company.com" type="email"/>
</div>
</div>
<div className="space-y-2 text-left">
<label className="text-sm font-light text-neutral-400 uppercase tracking-widest">Message</label>
<textarea className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-base text-white focus:outline-none focus:border-[#CCFF00]/50 transition-colors" placeholder="Tell us about your current bottlenecks..." rows="4"></textarea>
</div>
<button className="shiny-cta w-full !rounded-xl h-[56px] text-base mt-4" type="button">
                    Send Message
                </button>
</form>
</div>
</section>

<footer className="bg-[#0A0A0F] border-white/5 border-t py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#CCFF00]/20 to-[#668000]/20 border border-[#CCFF00]/30 flex items-center justify-center text-[#CCFF00]">
<i className="w-4 h-4" data-lucide="zap" strokeWidth="1.5"></i>
</div>
<span className="text-lg font-light tracking-tight text-white">Agency<span className="text-[#CCFF00]">.</span></span>
</a>
<p className="text-base font-extralight text-neutral-500">© 2024 AI Agency. All rights reserved.</p>
<div className="flex items-center gap-4">
<a className="text-neutral-500 hover:text-[#CCFF00] transition-colors" href="#">
<i className="w-5 h-5" data-lucide="mail" strokeWidth="1.5"></i>
</a>
<a className="text-neutral-500 hover:text-[#CCFF00] transition-colors" href="#">
<i className="w-5 h-5" data-lucide="link" strokeWidth="1.5"></i>
</a>
</div>
</div>
</footer>

    </>
  );
}
