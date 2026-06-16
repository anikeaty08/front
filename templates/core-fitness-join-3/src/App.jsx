import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
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
      

<div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none" style={{transform: 'translateZ(-500px)'}}>
<div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-[#FF2E2E]/10 mix-blend-screen blur-[120px]"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#2979FF]/10 mix-blend-screen blur-[150px]"></div>
</div>

<nav className="fixed top-0 w-full z-50 bg-[#0A0A0A]/70 backdrop-blur-md border-b border-white/5 shadow-[0_10px_30px_rgba(0,0,0,0.5)]" style={{transformStyle: 'preserve-3d', transform: 'translateZ(50px)'}}>
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="text-xl font-semibold tracking-tighter text-white flex items-center gap-1 drop-shadow-[0_5px_10px_rgba(0,0,0,0.5)]" href="#">
                CORE<span className="default">.</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
<a className="hover:text-white hover:-translate-y-0.5 transition-all drop-shadow-md" href="#programs">Programs</a>
<a className="hover:text-white hover:-translate-y-0.5 transition-all drop-shadow-md" href="#location">Location</a>
<a className="hover:text-white hover:-translate-y-0.5 transition-all drop-shadow-md" href="#schedule">Schedule</a>
<a className="hover:text-white hover:-translate-y-0.5 transition-all drop-shadow-md" href="#app">App</a>
</div>

<a className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-[#FF2E2E] to-[#FF3CAC] rounded-full shadow-[0_10px_20px_rgba(255,46,46,0.3),inset_0_-4px_0_rgba(150,0,0,0.5),inset_0_1px_0_rgba(255,150,150,0.5)] hover:shadow-[0_15px_30px_rgba(255,46,46,0.5),inset_0_-4px_0_rgba(150,0,0,0.5),inset_0_1px_0_rgba(255,150,150,0.5)] hover:-translate-y-1 active:translate-y-[3px] active:shadow-[0_0_0_rgba(255,46,46,0),inset_0_0_0_rgba(150,0,0,0),inset_0_1px_0_rgba(255,150,150,0.3)] transition-all duration-200" href="#join">
                Join Now
            </a>
<button className="md:hidden text-white drop-shadow-lg">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</nav>

<section className="relative min-h-screen flex items-center pt-20 overflow-hidden" style={{transformStyle: 'preserve-3d'}}>
<div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">

<div className="flex flex-col text-left items-start" style={{transform: 'translateZ(30px)'}}>
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6 shadow-[0_5px_15px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.1)]">
<span className="w-2 h-2 rounded-full bg-[#00E5FF] shadow-[0_0_10px_#00E5FF] animate-pulse"></span>
<span className="text-xs font-medium text-[#00E5FF] tracking-wide uppercase">Premium Facility in Pune</span>
</div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-white leading-[1.1] mb-6 drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]">
                    Train Beyond <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF2E2E] via-[#FF3CAC] to-[#2979FF] drop-shadow-[0_5px_15px_rgba(255,46,46,0.5)]">Limits</span>
</h1>
<p className="text-lg text-slate-400 font-medium mb-8 max-w-md drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                    Strength, Cardio, MMA, Yoga – All in One Place. Experience a futuristic environment designed for peak performance.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">

<a className="w-full sm:w-auto px-8 py-3.5 text-sm font-semibold text-white bg-[#FF2E2E] rounded-full shadow-[0_15px_25px_rgba(255,46,46,0.4),inset_0_-5px_0_rgba(150,0,0,0.6),inset_0_2px_0_rgba(255,150,150,0.4)] hover:-translate-y-1 hover:shadow-[0_20px_35px_rgba(255,46,46,0.6),inset_0_-5px_0_rgba(150,0,0,0.6),inset_0_2px_0_rgba(255,150,150,0.4)] active:translate-y-[4px] active:shadow-[0_0_0_rgba(255,46,46,0),inset_0_0_0_rgba(150,0,0,0),inset_0_1px_0_rgba(255,150,150,0.2)] transition-all duration-200 text-center" href="#join">
                        Join Now
                    </a>

<a className="w-full sm:w-auto px-8 py-3.5 text-sm font-medium text-white bg-[#0F172A] border border-[#2979FF]/50 rounded-full shadow-[0_10px_20px_rgba(0,0,0,0.5),inset_0_-4px_0_rgba(41,121,255,0.2),inset_0_1px_0_rgba(255,255,255,0.1)] hover:-translate-y-1 hover:bg-[#2979FF]/10 hover:border-[#2979FF] active:translate-y-[3px] active:shadow-[0_0_0_rgba(0,0,0,0),inset_0_0_0_rgba(0,0,0,0)] transition-all duration-200 flex items-center justify-center gap-2" href="tel:09689048613">
<iconify-icon className="text-lg" icon="solar:phone-calling-linear"></iconify-icon>
                        096890 48613
                    </a>
</div>
</div>

<div className="aspect-square flex w-full relative items-center justify-center" style={{perspective: '1200px'}}>

<div className="absolute w-4/5 h-4/5 bg-gradient-to-tr from-[#FF2E2E]/20 via-[#FF3CAC]/10 to-[#00E5FF]/20 blur-[80px] rounded-full" style={{transform: 'translateZ(-100px)'}}></div>

<div className="absolute w-full h-full border-[2px] border-[#2979FF]/30 rounded-full animate-[spin_15s_linear_infinite] shadow-[0_0_30px_rgba(41,121,255,0.2)]" style={{transformStyle: 'preserve-3d', transform: 'rotateX(70deg) rotateY(-15deg)'}}>
<div className="absolute top-0 left-1/2 w-4 h-4 bg-[#00E5FF] rounded-full shadow-[0_0_20px_#00E5FF]" style={{transform: 'translate(-50%, -50%) translateZ(10px) rotateX(-70deg) rotateY(15deg)'}}></div>
</div>
<div className="absolute w-4/5 h-4/5 border-[2px] border-[#FF2E2E]/40 rounded-full animate-[spin_10s_linear_infinite_reverse] shadow-[0_0_30px_rgba(255,46,46,0.2)]" style={{transformStyle: 'preserve-3d', transform: 'rotateX(60deg) rotateY(25deg)'}}>
<div className="absolute bottom-0 left-1/2 w-5 h-5 bg-[#FF2E2E] rounded-full shadow-[0_0_25px_#FF2E2E]" style={{transform: 'translate(-50%, 50%) translateZ(15px) rotateX(-60deg) rotateY(-25deg)'}}></div>
</div>
<div className="absolute w-3/5 h-3/5 border-[2px] border-[#FF3CAC]/20 rounded-full animate-[spin_20s_linear_infinite] shadow-[0_0_20px_rgba(255,60,172,0.1)]" style={{transformStyle: 'preserve-3d', transform: 'rotateX(50deg) rotateY(-5deg)'}}></div>

<div className="flex flex-col gap-3 animate-[bounce_3s_ease-in-out_infinite] hover:-translate-y-4 hover:rotate-12 transition-all duration-500 bg-[#0F172A]/90 w-48 h-48 border-white/10 border rounded-3xl relative backdrop-blur-xl items-center justify-center cursor-pointer group" style={{transform: 'translateZ(150px)', boxShadow: '0 30px 60px rgba(0,0,0,0.8), inset 0 2px 0 rgba(255,255,255,0.2), inset 0 -10px 20px rgba(0,0,0,0.8), inset 0 0 20px rgba(255,46,46,0.2)', transformStyle: 'preserve-3d'}}>
<iconify-icon className="text-6xl text-white drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] animate-[spin_4s_linear_infinite] group-hover:scale-110 group-hover:text-[#FF2E2E] transition-all duration-300" icon="solar:dumbbell-large-linear" style={{transform: 'translateZ(30px)'}}></iconify-icon>
<div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#FF2E2E] to-transparent opacity-50 rounded-full shadow-[0_5px_10px_#FF2E2E] animate-pulse group-hover:scale-150 transition-all duration-300" style={{transform: 'translateZ(20px)'}}></div>
</div>
</div>
</div>
</section>

<section className="z-10 bg-gradient-to-b from-[#0A0A0A] to-[#0F172A]/30 border-white/5 border-t pt-24 pb-24 relative" id="location">
<div className="max-w-7xl mx-auto px-6" style={{transformStyle: 'preserve-3d'}}>
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 relative rounded-3xl overflow-hidden border border-white/10 group" style={{perspective: '1200px', transformStyle: 'preserve-3d'}}>

<div className="relative w-full h-full rounded-3xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.8),inset_0_2px_0_rgba(255,255,255,0.1),inset_0_-8px_0_rgba(0,0,0,0.6)] transition-transform duration-700 hover:rotate-0" style={{transform: 'rotateX(5deg) rotateY(-5deg) translateZ(0px)', transformStyle: 'preserve-3d'}}>
<div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent z-10 pointer-events-none" style={{transform: 'translateZ(10px)'}}></div>
<iframe allowfullscreen="" className="transition-transform duration-700 group-hover:scale-105" height="400" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.355152504958!2d73.9261899!3d18.5580556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c140df0353c7%3A0xc6e4ffcf9b922a97!2sBollywood%20E-Square!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" style={{border: '0', filter: 'grayscale(100%) invert(90%) contrast(1.2) sepia(20%) hue-rotate(190deg)'}} width="100%"></iframe>

<div className="absolute bottom-6 left-6 right-6 z-20 flex items-center justify-between p-4 rounded-2xl bg-[#0F172A]/90 backdrop-blur-md border border-white/10 shadow-[0_15px_30px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.1),inset_0_-3px_0_rgba(0,0,0,0.5)] transition-transform duration-500 group-hover:translate-y-[-10px]" style={{transform: 'translateZ(50px)'}}>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#FF2E2E]/20 flex items-center justify-center shadow-[inset_0_2px_5px_rgba(0,0,0,0.5)] default">
<iconify-icon className="text-xl drop-shadow-[0_2px_4px_rgba(255,46,46,0.5)]" icon="solar:map-point-linear"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold text-white drop-shadow-md">Wadgaon Sheri</p>
<p className="text-xs text-slate-400">Near Bollywood Cinema</p>
</div>
</div>

<a className="px-3 py-1.5 rounded-lg bg-[#2979FF]/10 border border-[#2979FF]/30 text-xs font-semibold text-[#2979FF] shadow-[0_5px_10px_rgba(0,0,0,0.3),inset_0_-2px_0_rgba(41,121,255,0.2)] hover:bg-[#2979FF]/20 hover:-translate-y-0.5 active:translate-y-[1px] active:shadow-none transition-all" href="https://maps.google.com" target="_blank">Directions</a>
</div>
</div>
</div>
<div className="order-1 lg:order-2" style={{transform: 'translateZ(20px)'}}>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6 drop-shadow-[0_5px_10px_rgba(0,0,0,0.5)]">Prime Location. <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2979FF] to-[#00E5FF] drop-shadow-[0_5px_15px_rgba(41,121,255,0.3)]">Unmatched Energy.</span></h2>
<p className="text-slate-400 font-medium mb-8 text-base leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                        Easily accessible from Old Mundhwa Road, our facility is situated in the heart of Wadgaon Sheri. We've built a sanctuary for those who demand more from their workouts, combining raw industrial aesthetics with cutting-edge neon 3D environments.
                    </p>
<ul className="space-y-4">
<li className="flex items-start gap-3 transform transition-transform hover:translate-x-2">
<div className="w-6 h-6 rounded-full bg-[#0F172A] border border-[#FF3CAC]/30 shadow-[0_5px_10px_rgba(0,0,0,0.3),inset_0_-2px_0_rgba(0,0,0,0.5)] flex items-center justify-center shrink-0 mt-0.5">
<iconify-icon className="text-sm text-[#FF3CAC]" icon="solar:check-circle-linear"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-300 drop-shadow-sm">Located just steps away from Bollywood Cinema.</span>
</li>
<li className="flex items-start gap-3 transform transition-transform hover:translate-x-2">
<div className="w-6 h-6 rounded-full bg-[#0F172A] border border-[#FF3CAC]/30 shadow-[0_5px_10px_rgba(0,0,0,0.3),inset_0_-2px_0_rgba(0,0,0,0.5)] flex items-center justify-center shrink-0 mt-0.5">
<iconify-icon className="text-sm text-[#FF3CAC]" icon="solar:check-circle-linear"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-300 drop-shadow-sm">Ample parking space for two-wheelers and four-wheelers.</span>
</li>
<li className="flex items-start gap-3 transform transition-transform hover:translate-x-2">
<div className="w-6 h-6 rounded-full bg-[#0F172A] border border-[#FF3CAC]/30 shadow-[0_5px_10px_rgba(0,0,0,0.3),inset_0_-2px_0_rgba(0,0,0,0.5)] flex items-center justify-center shrink-0 mt-0.5">
<iconify-icon className="text-sm text-[#FF3CAC]" icon="solar:check-circle-linear"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-300 drop-shadow-sm">Surrounded by vibrant community spots.</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 relative z-10 bg-[#0A0A0A]" id="programs">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16" style={{transform: 'translateZ(30px)'}}>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-4 drop-shadow-[0_5px_10px_rgba(0,0,0,0.5)]">Elite Programs</h2>
<p className="text-slate-400 font-medium text-sm md:text-base max-w-2xl mx-auto drop-shadow-sm">Master every discipline. Choose from our specialized training zones equipped with state-of-the-art gear.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" style={{perspective: '1500px'}}>


<div className="group relative p-6 rounded-3xl bg-[#0F172A] border border-white/5 hover:border-[#FF2E2E]/50 transition-all duration-500 hover:-translate-y-4 hover:rotate-x-[-5deg] hover:rotate-y-[5deg]" style={{transformStyle: 'preserve-3d', boxShadow: '0 20px 40px rgba(0,0,0,0.6), inset 0 2px 0 rgba(255,255,255,0.05), inset 0 -6px 0 rgba(0,0,0,0.4)'}}>
<div className="absolute inset-0 bg-gradient-to-tr from-[#FF2E2E]/0 to-transparent group-hover:from-[#FF2E2E]/10 transition-colors duration-500 rounded-3xl -z-10"></div>

<div className="w-14 h-14 rounded-2xl bg-[#1e293b] border border-white/10 flex items-center justify-center mb-6 shadow-[0_15px_25px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.1),inset_0_-3px_0_rgba(0,0,0,0.5)] group-hover:shadow-[0_15px_30px_rgba(255,46,46,0.3),inset_0_1px_0_rgba(255,255,255,0.1),inset_0_-3px_0_rgba(0,0,0,0.5)] transition-shadow duration-500" style={{transform: 'translateZ(40px)'}}>
<iconify-icon className="text-2xl text-white group-hover:text-[#FF2E2E] transition-colors drop-shadow-md" icon="solar:dumbbell-large-linear" style={{transform: 'translateZ(10px)'}}></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white mb-2 tracking-tight drop-shadow-md" style={{transform: 'translateZ(30px)'}}>Strength Training</h3>
<p className="text-xs text-slate-400 font-medium leading-relaxed drop-shadow-sm" style={{transform: 'translateZ(20px)'}}>Free weights, Olympic platforms, and isolation machines to build raw power.</p>
</div>

<div className="group relative p-6 rounded-3xl bg-[#0F172A] border border-white/5 hover:border-[#00E5FF]/50 transition-all duration-500 hover:-translate-y-4 hover:rotate-x-[-5deg] hover:rotate-y-[5deg]" style={{transformStyle: 'preserve-3d', boxShadow: '0 20px 40px rgba(0,0,0,0.6), inset 0 2px 0 rgba(255,255,255,0.05), inset 0 -6px 0 rgba(0,0,0,0.4)'}}>
<div className="absolute inset-0 bg-gradient-to-tr from-[#00E5FF]/0 to-transparent group-hover:from-[#00E5FF]/10 transition-colors duration-500 rounded-3xl -z-10"></div>
<div className="w-14 h-14 rounded-2xl bg-[#1e293b] border border-white/10 flex items-center justify-center mb-6 shadow-[0_15px_25px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.1),inset_0_-3px_0_rgba(0,0,0,0.5)] group-hover:shadow-[0_15px_30px_rgba(0,229,255,0.3),inset_0_1px_0_rgba(255,255,255,0.1),inset_0_-3px_0_rgba(0,0,0,0.5)] transition-shadow duration-500" style={{transform: 'translateZ(40px)'}}>
<iconify-icon className="text-2xl text-white group-hover:text-[#00E5FF] transition-colors drop-shadow-md" icon="solar:heart-pulse-linear" style={{transform: 'translateZ(10px)'}}></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white mb-2 tracking-tight drop-shadow-md" style={{transform: 'translateZ(30px)'}}>Cardio &amp; HIIT</h3>
<p className="text-xs text-slate-400 font-medium leading-relaxed drop-shadow-sm" style={{transform: 'translateZ(20px)'}}>High-intensity intervals to shred fat and push your cardiovascular limits.</p>
</div>

<div className="group relative p-6 rounded-3xl bg-[#0F172A] border border-white/5 hover:border-[#FF3CAC]/50 transition-all duration-500 hover:-translate-y-4 hover:rotate-x-[-5deg] hover:rotate-y-[5deg]" style={{transformStyle: 'preserve-3d', boxShadow: '0 20px 40px rgba(0,0,0,0.6), inset 0 2px 0 rgba(255,255,255,0.05), inset 0 -6px 0 rgba(0,0,0,0.4)'}}>
<div className="absolute inset-0 bg-gradient-to-tr from-[#FF3CAC]/0 to-transparent group-hover:from-[#FF3CAC]/10 transition-colors duration-500 rounded-3xl -z-10"></div>
<div className="w-14 h-14 rounded-2xl bg-[#1e293b] border border-white/10 flex items-center justify-center mb-6 shadow-[0_15px_25px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.1),inset_0_-3px_0_rgba(0,0,0,0.5)] group-hover:shadow-[0_15px_30px_rgba(255,60,172,0.3),inset_0_1px_0_rgba(255,255,255,0.1),inset_0_-3px_0_rgba(0,0,0,0.5)] transition-shadow duration-500" style={{transform: 'translateZ(40px)'}}>
<iconify-icon className="text-2xl text-white group-hover:text-[#FF3CAC] transition-colors drop-shadow-md" icon="solar:music-note-linear" style={{transform: 'translateZ(10px)'}}></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white mb-2 tracking-tight drop-shadow-md" style={{transform: 'translateZ(30px)'}}>Zumba</h3>
<p className="text-xs text-slate-400 font-medium leading-relaxed drop-shadow-sm" style={{transform: 'translateZ(20px)'}}>Dance to the rhythm, burn calories, and experience high-energy group sessions.</p>
</div>

<div className="group relative p-6 rounded-3xl bg-[#0F172A] border border-white/5 hover:border-[#2979FF]/50 transition-all duration-500 hover:-translate-y-4 hover:rotate-x-[-5deg] hover:rotate-y-[5deg]" style={{transformStyle: 'preserve-3d', boxShadow: '0 20px 40px rgba(0,0,0,0.6), inset 0 2px 0 rgba(255,255,255,0.05), inset 0 -6px 0 rgba(0,0,0,0.4)'}}>
<div className="absolute inset-0 bg-gradient-to-tr from-[#2979FF]/0 to-transparent group-hover:from-[#2979FF]/10 transition-colors duration-500 rounded-3xl -z-10"></div>
<div className="w-14 h-14 rounded-2xl bg-[#1e293b] border border-white/10 flex items-center justify-center mb-6 shadow-[0_15px_25px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.1),inset_0_-3px_0_rgba(0,0,0,0.5)] group-hover:shadow-[0_15px_30px_rgba(41,121,255,0.3),inset_0_1px_0_rgba(255,255,255,0.1),inset_0_-3px_0_rgba(0,0,0,0.5)] transition-shadow duration-500" style={{transform: 'translateZ(40px)'}}>
<iconify-icon className="text-2xl text-white group-hover:text-[#2979FF] transition-colors drop-shadow-md" icon="solar:body-shape-linear" style={{transform: 'translateZ(10px)'}}></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white mb-2 tracking-tight drop-shadow-md" style={{transform: 'translateZ(30px)'}}>Yoga</h3>
<p className="text-xs text-slate-400 font-medium leading-relaxed drop-shadow-sm" style={{transform: 'translateZ(20px)'}}>Find balance, flexibility, and core strength in our dedicated calm zones.</p>
</div>

<div className="group relative p-6 rounded-3xl bg-[#0F172A] border border-white/5 hover:border-[#FF2E2E]/50 transition-all duration-500 hover:-translate-y-4 hover:rotate-x-[-5deg] hover:rotate-y-[5deg]" style={{transformStyle: 'preserve-3d', boxShadow: '0 20px 40px rgba(0,0,0,0.6), inset 0 2px 0 rgba(255,255,255,0.05), inset 0 -6px 0 rgba(0,0,0,0.4)'}}>
<div className="absolute inset-0 bg-gradient-to-tr from-[#FF2E2E]/0 to-transparent group-hover:from-[#FF2E2E]/10 transition-colors duration-500 rounded-3xl -z-10"></div>
<div className="w-14 h-14 rounded-2xl bg-[#1e293b] border border-white/10 flex items-center justify-center mb-6 shadow-[0_15px_25px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.1),inset_0_-3px_0_rgba(0,0,0,0.5)] group-hover:shadow-[0_15px_30px_rgba(255,46,46,0.3),inset_0_1px_0_rgba(255,255,255,0.1),inset_0_-3px_0_rgba(0,0,0,0.5)] transition-shadow duration-500" style={{transform: 'translateZ(40px)'}}>
<iconify-icon className="text-2xl text-white group-hover:text-[#FF2E2E] transition-colors drop-shadow-md" icon="solar:boxing-linear" style={{transform: 'translateZ(10px)'}}></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white mb-2 tracking-tight drop-shadow-md" style={{transform: 'translateZ(30px)'}}>MMA &amp; Kickboxing</h3>
<p className="text-xs text-slate-400 font-medium leading-relaxed drop-shadow-sm" style={{transform: 'translateZ(20px)'}}>Professional mats, heavy bags, and expert coaching for combat sports.</p>
</div>

<div className="group relative p-6 rounded-3xl bg-[#0F172A] border border-white/5 hover:border-[#00E5FF]/50 transition-all duration-500 hover:-translate-y-4 hover:rotate-x-[-5deg] hover:rotate-y-[5deg]" style={{transformStyle: 'preserve-3d', boxShadow: '0 20px 40px rgba(0,0,0,0.6), inset 0 2px 0 rgba(255,255,255,0.05), inset 0 -6px 0 rgba(0,0,0,0.4)'}}>
<div className="absolute inset-0 bg-gradient-to-tr from-[#00E5FF]/0 to-transparent group-hover:from-[#00E5FF]/10 transition-colors duration-500 rounded-3xl -z-10"></div>
<div className="w-14 h-14 rounded-2xl bg-[#1e293b] border border-white/10 flex items-center justify-center mb-6 shadow-[0_15px_25px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.1),inset_0_-3px_0_rgba(0,0,0,0.5)] group-hover:shadow-[0_15px_30px_rgba(0,229,255,0.3),inset_0_1px_0_rgba(255,255,255,0.1),inset_0_-3px_0_rgba(0,0,0,0.5)] transition-shadow duration-500" style={{transform: 'translateZ(40px)'}}>
<iconify-icon className="text-2xl text-white group-hover:text-[#00E5FF] transition-colors drop-shadow-md" icon="solar:treadmill-linear" style={{transform: 'translateZ(10px)'}}></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white mb-2 tracking-tight drop-shadow-md" style={{transform: 'translateZ(30px)'}}>Functional Training</h3>
<p className="text-xs text-slate-400 font-medium leading-relaxed drop-shadow-sm" style={{transform: 'translateZ(20px)'}}>Kettlebells, battle ropes, and sleds to build real-world strength.</p>
</div>

<div className="hidden lg:block rounded-3xl bg-[#0A0A0A] border border-white/5 shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)]"></div>
<div className="hidden lg:block rounded-3xl bg-[#0A0A0A] border border-white/5 shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)]"></div>
</div>
</div>
</section>

<section className="py-24 relative z-10 bg-gradient-to-b from-[#0A0A0A] to-[#0F172A]/50 border-t border-white/5 overflow-hidden" id="app">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 flex justify-center perspective-[1500px]">

<div className="relative w-[280px] h-[580px] rounded-[3rem] border-x-[8px] border-y-[12px] border-[#1e293b] bg-[#0A0A0A] shadow-[30px_40px_60px_rgba(0,0,0,0.9),inset_0_0_20px_rgba(41,121,255,0.3),inset_2px_2px_5px_rgba(255,255,255,0.2)] overflow-hidden transition-transform duration-700 hover:rotate-0" style={{transform: 'rotateY(25deg) rotateX(15deg) rotateZ(-5deg)', transformStyle: 'preserve-3d'}}>

<div className="absolute inset-0 bg-gradient-to-b from-[#0F172A] to-[#0A0A0A] p-6 flex flex-col" style={{transform: 'translateZ(-5px)'}}>

<div className="w-full flex justify-between items-center mb-8">
<div className="w-12 h-4 rounded-full bg-[#1e293b] shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)]"></div>
<div className="flex gap-1">
<div className="w-4 h-4 rounded-full bg-white/20 shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)]"></div>
<div className="w-4 h-4 rounded-full bg-white/20 shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)]"></div>
</div>
</div>

<div className="w-full bg-[#1e293b] rounded-2xl p-4 mb-4 border border-white/5 shadow-[0_10px_20px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.1),inset_0_-2px_0_rgba(0,0,0,0.3)]">
<div className="text-[10px] text-slate-400 uppercase tracking-widest mb-1 drop-shadow-sm">Today's Goal</div>
<div className="text-xl font-semibold text-white mb-2 drop-shadow-md">Back &amp; Biceps</div>
<div className="w-full bg-black/80 rounded-full h-2 overflow-hidden shadow-[inset_0_2px_5px_rgba(0,0,0,0.8)]">
<div className="w-2/3 bg-gradient-to-r from-[#2979FF] to-[#00E5FF] h-full shadow-[0_0_10px_#00E5FF]"></div>
</div>
</div>
<div className="grid grid-cols-2 gap-3 mb-4">
<div className="bg-[#1e293b] rounded-xl p-3 border border-white/5 flex flex-col items-center justify-center shadow-[0_8px_15px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.05),inset_0_-2px_0_rgba(0,0,0,0.3)]">
<iconify-icon className="text-xl mb-1 drop-shadow-[0_2px_4px_rgba(255,46,46,0.4)] default" icon="solar:fire-linear"></iconify-icon>
<span className="text-xs text-white font-semibold drop-shadow-md">450</span>
<span className="text-[9px] text-slate-500">KCAL</span>
</div>
<div className="bg-[#1e293b] rounded-xl p-3 border border-white/5 flex flex-col items-center justify-center shadow-[0_8px_15px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.05),inset_0_-2px_0_rgba(0,0,0,0.3)]">
<iconify-icon className="text-[#00E5FF] text-xl mb-1 drop-shadow-[0_2px_4px_rgba(0,229,255,0.4)]" icon="solar:stopwatch-linear"></iconify-icon>
<span className="text-xs text-white font-semibold drop-shadow-md">45m</span>
<span className="text-[9px] text-slate-500">TIME</span>
</div>
</div>
<div className="flex-1 bg-gradient-to-t from-[#FF2E2E]/20 to-[#1e293b] rounded-2xl border border-white/5 relative overflow-hidden flex items-end p-4 shadow-[0_10px_20px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.1),inset_0_-3px_0_rgba(0,0,0,0.4)]">
<div className="absolute bottom-[-20%] left-[-20%] w-[150%] h-[150%] rounded-full bg-[#FF2E2E]/20 blur-[40px] mix-blend-screen"></div>
<div className="relative z-10 w-full text-center py-3 bg-[#FF2E2E] rounded-xl shadow-[0_5px_15px_rgba(255,46,46,0.4),inset_0_-3px_0_rgba(150,0,0,0.6),inset_0_1px_0_rgba(255,150,150,0.4)] text-xs font-bold text-white uppercase tracking-wider">Start Workout</div>
</div>
</div>
</div>
</div>
<div className="order-1 lg:order-2" style={{transformStyle: 'preserve-3d', transform: 'translateZ(30px)'}}>
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#2979FF]/30 bg-[#2979FF]/5 backdrop-blur-sm mb-6 shadow-[0_5px_15px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.1)]">
<iconify-icon className="text-[#2979FF] drop-shadow-sm" icon="solar:smartphone-update-linear"></iconify-icon>
<span className="text-xs font-medium text-[#2979FF] tracking-wide uppercase">Core App Integration</span>
</div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6 drop-shadow-[0_5px_10px_rgba(0,0,0,0.5)]">Track. Analyze. <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2979FF] to-[#00E5FF] drop-shadow-[0_5px_15px_rgba(41,121,255,0.3)]">Conquer.</span></h2>
<p className="text-slate-400 font-medium mb-8 text-base leading-relaxed drop-shadow-sm">
                    Access your personalized training schedules, track your macros, and monitor your progress through our exclusive member app. Your fitness journey digitized.
                </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4" style={{perspective: '1000px'}}>

<div className="p-5 rounded-2xl bg-[#0F172A] border border-white/5 shadow-[0_15px_30px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.05),inset_0_-4px_0_rgba(0,0,0,0.4)] hover:-translate-y-2 hover:rotate-x-[5deg] transition-transform duration-300" style={{transformStyle: 'preserve-3d'}}>
<iconify-icon className="text-3xl text-[#00E5FF] mb-3 drop-shadow-[0_5px_10px_rgba(0,229,255,0.3)]" icon="solar:calendar-date-linear" style={{transform: 'translateZ(20px)'}}></iconify-icon>
<h4 className="text-sm font-semibold text-white mb-1 drop-shadow-md" style={{transform: 'translateZ(10px)'}}>Class Bookings</h4>
<p className="text-xs text-slate-500" style={{transform: 'translateZ(5px)'}}>Reserve your spot in evening high-energy batches instantly.</p>
</div>
<div className="p-5 rounded-2xl bg-[#0F172A] border border-white/5 shadow-[0_15px_30px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.05),inset_0_-4px_0_rgba(0,0,0,0.4)] hover:-translate-y-2 hover:rotate-x-[5deg] transition-transform duration-300" style={{transformStyle: 'preserve-3d'}}>
<iconify-icon className="text-3xl text-[#FF3CAC] mb-3 drop-shadow-[0_5px_10px_rgba(255,60,172,0.3)]" icon="solar:graph-up-linear" style={{transform: 'translateZ(20px)'}}></iconify-icon>
<h4 className="text-sm font-semibold text-white mb-1 drop-shadow-md" style={{transform: 'translateZ(10px)'}}>Progress Tracking</h4>
<p className="text-xs text-slate-500" style={{transform: 'translateZ(5px)'}}>Visualize your strength gains and body transformation.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative z-10 bg-[#0A0A0A]" id="schedule">
<div className="max-w-4xl mx-auto px-6" style={{perspective: '1500px'}}>
<div className="text-center mb-16" style={{transform: 'translateZ(20px)'}}>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-4 drop-shadow-[0_5px_10px_rgba(0,0,0,0.5)]">Training Schedule</h2>
<p className="text-slate-400 font-medium text-sm md:text-base drop-shadow-sm">Find a time that fits your grind. Open 7 days a week.</p>
</div>

<div className="bg-[#0F172A] rounded-3xl border border-white/5 p-3 shadow-[0_40px_80px_rgba(0,0,0,0.8),inset_0_2px_0_rgba(255,255,255,0.05),inset_0_-10px_0_rgba(0,0,0,0.5)] transform transition-transform duration-500 hover:rotate-x-[2deg]" style={{transformStyle: 'preserve-3d'}}>
<div className="grid md:grid-cols-2 gap-3" style={{transform: 'translateZ(20px)', transformStyle: 'preserve-3d'}}>

<div className="p-8 rounded-2xl bg-[#1e293b]/50 border border-black/20 shadow-[inset_0_5px_15px_rgba(0,0,0,0.6)]">
<div className="flex items-center gap-3 mb-6">
<iconify-icon className="text-2xl text-[#00E5FF] drop-shadow-md" icon="solar:sun-2-linear"></iconify-icon>
<h3 className="text-xl font-semibold text-white tracking-tight drop-shadow-md">Morning Batches</h3>
</div>
<ul className="space-y-4 divide-y divide-black/30">
<li className="flex justify-between items-center pt-4 first:pt-0">
<span className="text-sm font-medium text-slate-300 drop-shadow-sm">06:00 AM - 07:00 AM</span>
<span className="text-xs font-semibold text-[#00E5FF] bg-[#0F172A] border border-[#00E5FF]/20 px-3 py-1.5 rounded shadow-[0_2px_5px_rgba(0,0,0,0.5),inset_0_-1px_0_rgba(0,0,0,0.5)]">Cardio + Core</span>
</li>
<li className="flex justify-between items-center pt-4">
<span className="text-sm font-medium text-slate-300 drop-shadow-sm">07:30 AM - 08:30 AM</span>
<span className="text-xs font-semibold text-white bg-[#0F172A] border border-white/10 px-3 py-1.5 rounded shadow-[0_2px_5px_rgba(0,0,0,0.5),inset_0_-1px_0_rgba(0,0,0,0.5)]">Strength</span>
</li>
<li className="flex justify-between items-center pt-4">
<span className="text-sm font-medium text-slate-300 drop-shadow-sm">09:00 AM - 10:00 AM</span>
<span className="text-xs font-semibold text-[#FF3CAC] bg-[#0F172A] border border-[#FF3CAC]/20 px-3 py-1.5 rounded shadow-[0_2px_5px_rgba(0,0,0,0.5),inset_0_-1px_0_rgba(0,0,0,0.5)]">Yoga</span>
</li>
</ul>
</div>

<div className="relative p-8 rounded-2xl bg-gradient-to-br from-[#1e293b] to-[#0f172a] border border-[#FF2E2E]/30 shadow-[0_20px_40px_rgba(0,0,0,0.8),inset_0_2px_0_rgba(255,255,255,0.1),inset_0_-6px_0_rgba(0,0,0,0.5)] overflow-hidden" style={{transform: 'translateZ(30px)'}}>
<div className="absolute top-0 right-0 w-32 h-32 bg-[#FF2E2E]/20 blur-[40px] rounded-full"></div>
<div className="flex items-center justify-between mb-6 relative z-10">
<div className="flex items-center gap-3">
<iconify-icon className="text-2xl drop-shadow-[0_2px_5px_rgba(255,46,46,0.5)] default" icon="solar:moon-linear"></iconify-icon>
<h3 className="text-xl font-semibold text-white tracking-tight drop-shadow-md">Evening Batches</h3>
</div>

<span className="text-[10px] font-bold tracking-wider text-white bg-[#FF2E2E] uppercase px-2 py-1 rounded shadow-[0_5px_10px_rgba(255,46,46,0.4),inset_0_-2px_0_rgba(150,0,0,0.6),inset_0_1px_0_rgba(255,150,150,0.4)]">High Energy</span>
</div>
<ul className="space-y-4 divide-y divide-[#FF2E2E]/10 relative z-10">
<li className="flex justify-between items-center pt-4 first:pt-0">
<span className="text-sm font-medium text-slate-300 drop-shadow-sm">06:00 PM - 07:00 PM</span>
<span className="text-xs font-semibold text-white bg-[#0A0A0A] border border-white/10 px-3 py-1.5 rounded shadow-[0_5px_10px_rgba(0,0,0,0.5),inset_0_-2px_0_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.05)]">Strength</span>
</li>
<li className="flex justify-between items-center pt-4">
<span className="text-sm font-medium text-slate-300 drop-shadow-sm">07:30 PM - 08:30 PM</span>
<span className="text-xs font-semibold bg-[#0A0A0A] border border-[#FF2E2E]/20 px-3 py-1.5 rounded shadow-[0_5px_10px_rgba(0,0,0,0.5),inset_0_-2px_0_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.05)] default">MMA / HIIT</span>
</li>
<li className="flex justify-between items-center pt-4">
<span className="text-sm font-medium text-slate-300 drop-shadow-sm">08:30 PM - 09:30 PM</span>
<span className="text-xs font-semibold text-[#2979FF] bg-[#0A0A0A] border border-[#2979FF]/20 px-3 py-1.5 rounded shadow-[0_5px_10px_rgba(0,0,0,0.5),inset_0_-2px_0_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.05)]">Open Gym</span>
</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative z-10 border-t border-white/5 bg-[#0A0A0A] overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6" style={{transform: 'translateZ(20px)'}}>
<div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-4 drop-shadow-[0_5px_10px_rgba(0,0,0,0.5)]">Real Results</h2>
<p className="text-slate-400 font-medium text-sm md:text-base drop-shadow-sm">Supportive environment with proven transformations. Hover to reveal.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6" style={{perspective: '1500px'}}>

<div className="group relative w-full h-80 bg-transparent rounded-3xl" style={{perspective: '1500px'}}>
<div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-[0_30px_60px_rgba(0,0,0,0.8)] rounded-3xl">

<div className="absolute inset-0 w-full h-full [backface-visibility:hidden] bg-[#0F172A] rounded-3xl border border-white/10 overflow-hidden flex flex-col items-center justify-center shadow-[inset_0_2px_0_rgba(255,255,255,0.1),inset_0_-8px_0_rgba(0,0,0,0.6)]" style={{transformStyle: 'preserve-3d'}}>
<div className="w-full h-full bg-slate-800 flex items-center justify-center opacity-50 mix-blend-luminosity">
<span className="text-slate-500 font-medium" style={{transform: 'translateZ(30px)'}}>Before</span>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex items-end p-6" style={{transform: 'translateZ(40px)'}}>
<h4 className="text-lg font-semibold text-white drop-shadow-md">Rahul D.</h4>
</div>
</div>

<div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-gradient-to-br from-[#1e293b] to-[#0A0A0A] rounded-3xl border border-[#00E5FF]/40 overflow-hidden flex flex-col items-center justify-center shadow-[0_0_40px_rgba(0,229,255,0.2),inset_0_2px_0_rgba(255,255,255,0.1),inset_0_-8px_0_rgba(0,0,0,0.6)]" style={{transformStyle: 'preserve-3d'}}>
<div className="w-full h-full bg-slate-700 flex items-center justify-center opacity-80 mix-blend-overlay">
<span className="text-[#00E5FF] font-medium drop-shadow-[0_2px_5px_rgba(0,229,255,0.5)]" style={{transform: 'translateZ(30px)'}}>After - 6 Months</span>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6" style={{transform: 'translateZ(50px)'}}>
<h4 className="text-xl font-semibold text-white mb-1 drop-shadow-md">Rahul D.</h4>
<p className="text-xs font-bold text-[#0A0A0A] bg-[#00E5FF] inline-block px-3 py-1 rounded shadow-[0_5px_10px_rgba(0,229,255,0.4),inset_0_-2px_0_rgba(0,100,150,0.6),inset_0_1px_0_rgba(255,255,255,0.5)] w-max">-15kg Fat, +5kg Muscle</p>
</div>
</div>
</div>
</div>

<div className="group relative w-full h-80 bg-transparent rounded-3xl" style={{perspective: '1500px'}}>
<div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-[0_30px_60px_rgba(0,0,0,0.8)] rounded-3xl">
<div className="absolute inset-0 w-full h-full [backface-visibility:hidden] bg-[#0F172A] rounded-3xl border border-white/10 overflow-hidden flex flex-col items-center justify-center shadow-[inset_0_2px_0_rgba(255,255,255,0.1),inset_0_-8px_0_rgba(0,0,0,0.6)]" style={{transformStyle: 'preserve-3d'}}>
<div className="w-full h-full bg-slate-800 flex items-center justify-center opacity-50 mix-blend-luminosity">
<span className="text-slate-500 font-medium" style={{transform: 'translateZ(30px)'}}>Before</span>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex items-end p-6" style={{transform: 'translateZ(40px)'}}>
<h4 className="text-lg font-semibold text-white drop-shadow-md">Priya S.</h4>
</div>
</div>
<div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-gradient-to-br from-[#1e293b] to-[#0A0A0A] rounded-3xl border border-[#FF3CAC]/40 overflow-hidden flex flex-col items-center justify-center shadow-[0_0_40px_rgba(255,60,172,0.2),inset_0_2px_0_rgba(255,255,255,0.1),inset_0_-8px_0_rgba(0,0,0,0.6)]" style={{transformStyle: 'preserve-3d'}}>
<div className="w-full h-full bg-slate-700 flex items-center justify-center opacity-80 mix-blend-overlay">
<span className="text-[#FF3CAC] font-medium drop-shadow-[0_2px_5px_rgba(255,60,172,0.5)]" style={{transform: 'translateZ(30px)'}}>After - 4 Months</span>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6" style={{transform: 'translateZ(50px)'}}>
<h4 className="text-xl font-semibold text-white mb-1 drop-shadow-md">Priya S.</h4>
<p className="text-xs font-bold text-white bg-[#FF3CAC] inline-block px-3 py-1 rounded shadow-[0_5px_10px_rgba(255,60,172,0.4),inset_0_-2px_0_rgba(150,0,80,0.6),inset_0_1px_0_rgba(255,150,200,0.5)] w-max">Strength &amp; Tone</p>
</div>
</div>
</div>
</div>

<div className="group relative w-full h-80 bg-transparent rounded-3xl" style={{perspective: '1500px'}}>
<div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-[0_30px_60px_rgba(0,0,0,0.8)] rounded-3xl">
<div className="absolute inset-0 w-full h-full [backface-visibility:hidden] bg-[#0F172A] rounded-3xl border border-white/10 overflow-hidden flex flex-col items-center justify-center shadow-[inset_0_2px_0_rgba(255,255,255,0.1),inset_0_-8px_0_rgba(0,0,0,0.6)]" style={{transformStyle: 'preserve-3d'}}>
<div className="w-full h-full bg-slate-800 flex items-center justify-center opacity-50 mix-blend-luminosity">
<span className="text-slate-500 font-medium" style={{transform: 'translateZ(30px)'}}>Before</span>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex items-end p-6" style={{transform: 'translateZ(40px)'}}>
<h4 className="text-lg font-semibold text-white drop-shadow-md">Amit K.</h4>
</div>
</div>
<div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-gradient-to-br from-[#1e293b] to-[#0A0A0A] rounded-3xl border border-[#FF2E2E]/40 overflow-hidden flex flex-col items-center justify-center shadow-[0_0_40px_rgba(255,46,46,0.2),inset_0_2px_0_rgba(255,255,255,0.1),inset_0_-8px_0_rgba(0,0,0,0.6)]" style={{transformStyle: 'preserve-3d'}}>
<div className="w-full h-full bg-slate-700 flex items-center justify-center opacity-80 mix-blend-overlay">
<span className="font-medium drop-shadow-[0_2px_5px_rgba(255,46,46,0.5)] default" style={{transform: 'translateZ(30px)'}}>After - 1 Year</span>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6" style={{transform: 'translateZ(50px)'}}>
<h4 className="text-xl font-semibold text-white mb-1 drop-shadow-md">Amit K.</h4>
<p className="text-xs font-bold text-white bg-[#FF2E2E] inline-block px-3 py-1 rounded shadow-[0_5px_10px_rgba(255,46,46,0.4),inset_0_-2px_0_rgba(150,0,0,0.6),inset_0_1px_0_rgba(255,150,150,0.5)] w-max">Powerlifting Prep</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative z-10 overflow-hidden border-t border-white/5" id="join" style={{perspective: '1200px'}}>

<div className="absolute inset-0 bg-[#0A0A0A] -z-20"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-gradient-to-tr from-[#FF2E2E]/20 to-[#2979FF]/20 rounded-full blur-[150px] -z-10 animate-pulse" style={{transform: 'translateZ(-200px)'}}></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10" style={{transformStyle: 'preserve-3d', transform: 'translateZ(50px)'}}>
<h2 className="text-4xl md:text-6xl font-semibold tracking-tighter text-white mb-6 drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]" style={{transform: 'translateZ(20px)'}}>Start Your Fitness <br/>Journey Today</h2>
<p className="text-slate-300 font-medium text-lg mb-10 max-w-xl mx-auto drop-shadow-md" style={{transform: 'translateZ(10px)'}}>
                Join the ultimate fitness community in Wadgaon Sheri. Limited memberships available to ensure premium quality for all members.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-6" style={{transform: 'translateZ(30px)'}}>

<a className="w-full sm:w-auto px-10 py-4 text-base font-semibold text-white bg-gradient-to-r from-[#FF2E2E] to-[#FF3CAC] rounded-full shadow-[0_20px_40px_rgba(255,46,46,0.5),inset_0_-6px_0_rgba(150,0,50,0.6),inset_0_2px_0_rgba(255,150,200,0.4)] hover:-translate-y-2 hover:shadow-[0_25px_50px_rgba(255,46,46,0.7),inset_0_-6px_0_rgba(150,0,50,0.6),inset_0_2px_0_rgba(255,150,200,0.4)] active:translate-y-[4px] active:shadow-[0_0_0_rgba(255,46,46,0),inset_0_0_0_rgba(150,0,50,0),inset_0_1px_0_rgba(255,150,200,0.2)] transition-all duration-300" href="tel:09689048613">
                    Call 096890 48613
                </a>

<button className="w-full sm:w-auto px-10 py-4 text-base font-medium text-white bg-[#0F172A] border border-white/10 rounded-full shadow-[0_15px_30px_rgba(0,0,0,0.6),inset_0_-5px_0_rgba(0,0,0,0.8),inset_0_2px_0_rgba(255,255,255,0.1)] hover:-translate-y-1 hover:bg-[#1e293b] active:translate-y-[3px] active:shadow-[0_0_0_rgba(0,0,0,0),inset_0_0_0_rgba(0,0,0,0),inset_0_1px_0_rgba(255,255,255,0.05)] transition-all duration-300">
                    View Pricing
                </button>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-[#0A0A0A] pt-16 pb-8 relative z-10 shadow-[inset_0_20px_40px_rgba(0,0,0,0.5)]">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="md:col-span-1">
<a className="text-2xl font-semibold tracking-tighter text-white mb-4 block drop-shadow-md" href="#">
                        CORE<span className="drop-shadow-[0_0_5px_#FF2E2E] default">.</span>
</a>
<p className="text-xs text-slate-500 font-medium leading-relaxed max-w-xs">
                        The premier 3D immersive fitness experience in Pune. Train beyond limits in a state-of-the-art facility.
                    </p>
</div>
<div>
<h5 className="text-sm font-semibold text-white mb-4 tracking-tight drop-shadow-sm">Contact</h5>
<ul className="space-y-3">
<li><a className="text-xs text-slate-400 hover:text-[#FF2E2E] hover:translate-x-1 inline-block transition-all font-medium" href="tel:09689048613">096890 48613</a></li>
<li><span className="text-xs text-slate-400 font-medium block">Near Bollywood Cinema,</span></li>
<li><span className="text-xs text-slate-400 font-medium block">Old Mundhwa Rd, Wadgaon Sheri,</span></li>
</ul>
</div>
<div>
<h5 className="text-sm font-semibold text-white mb-4 tracking-tight drop-shadow-sm">Hours</h5>
<ul className="space-y-3">
<li><span className="text-xs text-slate-400 font-medium block">Mon-Sat: 6:00 AM - 10:00 PM</span></li>
<li><span className="text-xs text-slate-400 font-medium block">Sunday: 8:00 AM - 12:00 PM</span></li>
</ul>
</div>
<div>
<h5 className="text-sm font-semibold text-white mb-4 tracking-tight drop-shadow-sm">Socials</h5>
<div className="flex gap-4">

<a className="w-10 h-10 rounded-xl bg-[#0F172A] border border-white/5 flex items-center justify-center text-slate-400 shadow-[0_5px_10px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.05),inset_0_-3px_0_rgba(0,0,0,0.6)] hover:text-white hover:-translate-y-1 active:translate-y-[2px] active:shadow-none transition-all" href="#">
<iconify-icon className="text-xl" icon="solar:camera-linear"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-xl bg-[#0F172A] border border-white/5 flex items-center justify-center text-slate-400 shadow-[0_5px_10px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.05),inset_0_-3px_0_rgba(0,0,0,0.6)] hover:text-white hover:-translate-y-1 active:translate-y-[2px] active:shadow-none transition-all" href="#">
<iconify-icon className="text-xl" icon="solar:map-linear"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-[10px] text-slate-600 font-medium tracking-wide uppercase">© 2023 Core Fitness Pune. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-[10px] text-slate-600 hover:text-slate-400 font-medium uppercase tracking-wide transition-colors" href="#">Privacy Policy</a>
<a className="text-[10px] text-slate-600 hover:text-slate-400 font-medium uppercase tracking-wide transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
