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

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-[#5B5FFF] opacity-20 blur-[120px] pointer-events-none z-0"></div>
<div className="fixed top-[20%] right-[-10%] w-[35vw] h-[35vw] rounded-full bg-[#7C3AED] opacity-20 blur-[120px] pointer-events-none z-0"></div>
<div className="fixed bottom-[-10%] left-[20%] w-[45vw] h-[45vw] rounded-full bg-[#06B6D4] opacity-10 blur-[150px] pointer-events-none z-0"></div>

<nav className="fixed top-0 w-full z-50 bg-[#0F172A]/40 backdrop-blur-md border-b border-white/5 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="text-white text-lg font-medium tracking-tighter flex items-center gap-2" href="#">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#5B5FFF] to-[#7C3AED] flex items-center justify-center shadow-[0_0_15px_rgba(91,95,255,0.4)]">
<span className="text-xs text-white tracking-tighter">AI</span>
</div>
                AITOUR
            </a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm text-slate-400 hover:text-white transition-colors" href="#features">Features</a>
<a className="text-sm text-slate-400 hover:text-white transition-colors" href="#how-it-works">How It Works</a>
<a className="text-sm text-slate-400 hover:text-white transition-colors" href="#destinations">Destinations</a>
<a className="text-sm text-slate-400 hover:text-white transition-colors" href="#pricing">Pricing</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden sm:block text-sm text-slate-400 hover:text-white transition-colors" href="#">Log In</a>
<a className="px-5 py-2 rounded-full text-sm font-medium text-white bg-gradient-to-r from-[#5B5FFF] to-[#7C3AED] hover:shadow-[0_0_20px_rgba(124,58,237,0.4)] transition-all duration-300" href="#">Start Planning</a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 z-10">
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

<div className="flex flex-col gap-6 text-center lg:text-left">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 w-fit mx-auto lg:mx-0 backdrop-blur-sm">
<iconify-icon className="text-[#06B6D4] text-sm" icon="solar:stars-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-xs font-medium text-slate-300">AI Powered Itineraries</span>
</div>
<h1 className="text-5xl lg:text-6xl xl:text-7xl font-semibold text-white tracking-tighter leading-tight">
                    Plan Your Dream Trip in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5B5FFF] via-[#7C3AED] to-[#06B6D4]">Seconds</span>
</h1>
<p className="text-lg text-slate-400 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
                    Tell us your destination, budget, and travel style — our AI instantly creates the perfect personalized itinerary tailored just for you.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4 mt-4 justify-center lg:justify-start">
<button className="w-full sm:w-auto px-8 py-3.5 rounded-full text-sm font-medium text-white bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2">
<iconify-icon className="text-lg" icon="solar:play-circle-linear"></iconify-icon>
                        Watch Demo
                    </button>
</div>

<div className="mt-8 flex items-center gap-4 justify-center lg:justify-start">
<div className="flex -space-x-3">
<img alt="User" className="w-8 h-8 rounded-full border border-[#0F172A] object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=64&amp;h=64&amp;q=80"/>
<img alt="User" className="w-8 h-8 rounded-full border border-[#0F172A] object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=64&amp;h=64&amp;q=80"/>
<img alt="User" className="w-8 h-8 rounded-full border border-[#0F172A] object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;w=64&amp;h=64&amp;q=80"/>
<div className="w-8 h-8 rounded-full border border-[#0F172A] bg-white/10 backdrop-blur-sm flex items-center justify-center text-[10px] text-white">+2k</div>
</div>
<span className="text-xs text-slate-400">Join 2,000+ happy travelers</span>
</div>
</div>

<div className="relative w-full max-w-md mx-auto lg:ml-auto perspective-1000">

<div className="absolute -top-10 -right-10 w-24 h-24 bg-gradient-to-br from-[#06B6D4] to-transparent rounded-full blur-2xl opacity-50 animate-pulse"></div>

<div className="relative bg-white/[0.04] backdrop-blur-2xl border border-white/10 rounded-2xl p-6 shadow-2xl shadow-black/50 transform hover:-translate-y-2 transition-transform duration-500">
<div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
<div className="w-2 h-2 rounded-full bg-[#06B6D4] animate-pulse"></div>
<span className="text-sm font-medium text-white">AI Trip Generator</span>
</div>
<div className="space-y-4">

<div className="bg-black/20 border border-white/5 rounded-xl p-3.5 flex items-center gap-3 focus-within:border-[#5B5FFF]/50 transition-colors">
<iconify-icon className="text-slate-400 text-lg" icon="solar:map-point-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<input className="bg-transparent border-none outline-none text-sm w-full text-white placeholder-slate-500 font-light" placeholder="Where do you want to go?" type="text"/>
</div>

<div className="grid grid-cols-2 gap-4">
<div className="bg-black/20 border border-white/5 rounded-xl p-3.5 flex items-center gap-3 focus-within:border-[#5B5FFF]/50 transition-colors">
<iconify-icon className="text-slate-400 text-lg" icon="solar:calendar-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<input className="bg-transparent border-none outline-none text-sm w-full text-white placeholder-slate-500 font-light" onblur="(this.type='text')" onfocus="(this.type='date')" placeholder="Duration" type="text"/>
</div>
<div className="bg-black/20 border border-white/5 rounded-xl p-3.5 flex items-center gap-3 focus-within:border-[#5B5FFF]/50 transition-colors relative group">
<iconify-icon className="text-slate-400 text-lg" icon="solar:wallet-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<select className="bg-transparent border-none outline-none text-sm w-full text-slate-500 appearance-none font-light cursor-pointer">
<option disabled="" selected="" value="">Budget</option>
<option className="bg-[#0F172A] text-white" value="budget">Backpacker</option>
<option className="bg-[#0F172A] text-white" value="standard">Standard</option>
<option className="bg-[#0F172A] text-white" value="luxury">Luxury</option>
</select>
<iconify-icon className="text-slate-500 absolute right-3 pointer-events-none" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>

<div>
<span className="text-xs text-slate-400 mb-2 block">Interests</span>
<div className="flex flex-wrap gap-2">
<button className="px-3 py-1.5 rounded-lg text-xs border border-white/10 bg-white/5 text-slate-300 hover:bg-[#5B5FFF]/20 hover:border-[#5B5FFF]/50 hover:text-white transition-all">Culture</button>
<button className="px-3 py-1.5 rounded-lg text-xs border border-[#7C3AED]/50 bg-[#7C3AED]/20 text-white transition-all">Food</button>
<button className="px-3 py-1.5 rounded-lg text-xs border border-white/10 bg-white/5 text-slate-300 hover:bg-[#5B5FFF]/20 hover:border-[#5B5FFF]/50 hover:text-white transition-all">Nature</button>
<button className="px-3 py-1.5 rounded-lg text-xs border border-white/10 bg-white/5 text-slate-300 hover:bg-[#5B5FFF]/20 hover:border-[#5B5FFF]/50 hover:text-white transition-all">Relaxation</button>
</div>
</div>

<button className="w-full mt-4 py-3.5 rounded-xl text-sm font-medium text-white bg-gradient-to-r from-[#5B5FFF] to-[#7C3AED] hover:shadow-[0_0_20px_rgba(91,95,255,0.4)] transition-all duration-300 flex items-center justify-center gap-2 group">
<iconify-icon className="text-lg group-hover:rotate-12 transition-transform" icon="solar:magic-stick-3-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                            Generate My Trip
                        </button>
</div>
</div>

<div className="absolute -left-8 top-1/4 bg-white/5 backdrop-blur-md border border-white/10 p-2.5 rounded-xl flex items-center gap-2 shadow-lg animate-[bounce_4s_infinite]">
<iconify-icon className="text-[#06B6D4]" icon="solar:plane-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-xs text-white">Flights found</span>
</div>
<div className="absolute -right-6 bottom-1/4 bg-white/5 backdrop-blur-md border border-white/10 p-2.5 rounded-xl flex items-center gap-2 shadow-lg animate-[bounce_5s_infinite]">
<iconify-icon className="text-[#7C3AED]" icon="solar:bed-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-xs text-white">Hotels optimized</span>
</div>
</div>
</div>
</section>

<section className="py-10 border-y border-white/5 bg-white/[0.01] z-10 relative">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-xs text-slate-500 uppercase tracking-widest font-medium mb-6">Trusted by modern travelers &amp; platforms</p>
<div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
<span className="text-lg font-semibold tracking-tighter text-slate-300">SKYSCANNER</span>
<span className="text-lg font-semibold tracking-tighter text-slate-300">AIRBNB</span>
<span className="text-lg font-semibold text-slate-300 tracking-tighter">BOOKING.COM</span>
<span className="text-lg font-semibold tracking-tighter text-slate-300">EXPEDIA</span>
<span className="text-lg font-semibold tracking-tighter text-slate-300">KAYAK</span>
</div>
</div>
</section>

<section className="z-10 pt-24 pr-6 pb-24 pl-6 relative" id="how-it-works">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">How it works</h2>
<p className="text-slate-400 font-light max-w-xl mx-auto">From idea to fully planned itinerary in three simple steps.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-white/[0.03] backdrop-blur-sm border border-white/5 p-8 rounded-2xl hover:bg-white/[0.05] hover:-translate-y-1 transition-all duration-300 group">
<div className="w-12 h-12 rounded-xl bg-[#5B5FFF]/10 border border-[#5B5FFF]/20 flex items-center justify-center mb-6 text-[#5B5FFF] group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl" icon="solar:map-point-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">1. Enter Destination</h3>
<p className="text-sm text-slate-400 font-light leading-relaxed">Tell the AI where you want to go, your travel dates, and your preferred style of travel.</p>
</div>

<div className="bg-white/[0.03] backdrop-blur-sm border border-white/5 p-8 rounded-2xl hover:bg-white/[0.05] hover:-translate-y-1 transition-all duration-300 group">
<div className="w-12 h-12 rounded-xl bg-[#7C3AED]/10 border border-[#7C3AED]/20 flex items-center justify-center mb-6 text-[#7C3AED] group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl" icon="solar:cpu-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">2. AI Generates Trip</h3>
<p className="text-sm text-slate-400 font-light leading-relaxed">Our intelligence engine creates a complete daily itinerary including attractions and logistics.</p>
</div>

<div className="bg-white/[0.03] backdrop-blur-sm border border-white/5 p-8 rounded-2xl hover:bg-white/[0.05] hover:-translate-y-1 transition-all duration-300 group">
<div className="w-12 h-12 rounded-xl bg-[#06B6D4]/10 border border-[#06B6D4]/20 flex items-center justify-center mb-6 text-[#06B6D4] group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl" icon="solar:route-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">3. Customize &amp; Explore</h3>
<p className="text-sm text-slate-400 font-light leading-relaxed">Review the plan, swap out activities you don't like, and get ready for your adventure.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative z-10 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#5B5FFF]/5 to-transparent pointer-events-none"></div>
<div className="max-w-6xl mx-auto text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">A smarter way to travel</h2>
<p className="text-slate-400 font-light max-w-xl mx-auto">Experience a timeline that adapts to your pace, complete with map routing and timing estimates.</p>
</div>
<div className="max-w-5xl mx-auto">
<div className="bg-[#0F172A]/80 backdrop-blur-2xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row h-auto md:h-[500px]">

<div className="w-full md:w-1/3 border-r border-white/5 bg-white/[0.02] p-6 flex flex-col h-full">
<div className="mb-6">
<h4 className="text-lg font-medium text-white">3 Days in Dubai</h4>
<p className="text-xs text-slate-400 mt-1">Oct 12 - Oct 14 • Standard Budget</p>
</div>
<div className="flex-1 overflow-y-auto pr-2 space-y-6">

<div className="relative pl-6 border-l border-white/10">
<div className="absolute w-2.5 h-2.5 bg-[#5B5FFF] rounded-full -left-[5.5px] top-1 shadow-[0_0_10px_#5B5FFF]"></div>
<h5 className="text-sm font-medium text-white mb-3">Day 1: Modern Marvels</h5>
<div className="space-y-3">
<div className="bg-black/30 p-3 rounded-lg border border-white/5 hover:border-white/10 transition-colors cursor-pointer">
<div className="flex justify-between items-start mb-1">
<span className="text-xs font-medium text-slate-200">Burj Khalifa</span>
<span className="text-[10px] text-slate-500">10:00 AM</span>
</div>
<p className="text-[11px] text-slate-400">Observation deck experience.</p>
</div>
<div className="bg-black/30 p-3 rounded-lg border border-white/5 hover:border-white/10 transition-colors cursor-pointer">
<div className="flex justify-between items-start mb-1">
<span className="text-xs font-medium text-slate-200">Dubai Mall</span>
<span className="text-[10px] text-slate-500">01:00 PM</span>
</div>
<p className="text-[11px] text-slate-400">Lunch and aquarium visit.</p>
</div>
</div>
</div>

<div className="relative pl-6 border-l border-white/10 opacity-60">
<div className="absolute w-2 h-2 bg-white/30 rounded-full -left-[4.5px] top-1"></div>
<h5 className="text-sm font-medium text-white">Day 2: Desert Adventure</h5>
<p className="text-xs text-slate-400 mt-1">Desert Safari • Camel Ride</p>
</div>
</div>
</div>

<div className="w-full md:w-2/3 relative h-[300px] md:h-full bg-[#1A233A] overflow-hidden flex items-center justify-center">

<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.2) 1px, transparent 0)', backgroundSize: '24px 24px'}}></div>
<div className="absolute top-1/2 left-1/3 w-3 h-3 bg-[#06B6D4] rounded-full shadow-[0_0_15px_#06B6D4] z-10">
<div className="absolute -top-6 -left-8 bg-black/80 backdrop-blur-sm border border-white/10 text-[10px] px-2 py-1 rounded whitespace-nowrap text-white">Burj Khalifa</div>
</div>
<div className="absolute top-1/3 left-2/3 w-3 h-3 bg-[#7C3AED] rounded-full shadow-[0_0_15px_#7C3AED] z-10">
<div className="absolute -top-6 -left-6 bg-black/80 backdrop-blur-sm border border-white/10 text-[10px] px-2 py-1 rounded whitespace-nowrap text-white">Dubai Mall</div>
</div>

<svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
<path className="animate-[dash_20s_linear_infinite]" d="M 33% 50% Q 50% 30% 66% 33%" fill="none" stroke="rgba(255,255,255,0.2)" stroke-dasharray="4 4" strokeWidth="2"></path>
</svg>

<div className="absolute bottom-6 right-6 flex gap-2">
<button className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
<iconify-icon icon="solar:add-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<button className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
<iconify-icon icon="solar:minus-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative z-10" id="features">
<div className="max-w-7xl mx-auto">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Everything you need to travel</h2>
<p className="text-slate-400 font-light max-w-xl">A complete suite of tools powered by artificial intelligence.</p>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors group">
<iconify-icon className="text-2xl text-[#5B5FFF] mb-4" icon="solar:notes-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h4 className="text-base font-medium text-white mb-2">Smart Itinerary Builder</h4>
<p className="text-sm text-slate-400 font-light leading-relaxed">Minute-by-minute scheduling that makes sense geographically and logistically.</p>
</div>
<div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors group">
<iconify-icon className="text-2xl text-[#7C3AED] mb-4" icon="solar:calculator-minimalistic-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h4 className="text-base font-medium text-white mb-2">Budget Optimization</h4>
<p className="text-sm text-slate-400 font-light leading-relaxed">Get accurate cost estimates for activities, dining, and transportation.</p>
</div>
<div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors group">
<iconify-icon className="text-2xl text-[#06B6D4] mb-4" icon="solar:compass-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h4 className="text-base font-medium text-white mb-2">Hidden Gems Discovery</h4>
<p className="text-sm text-slate-400 font-light leading-relaxed">Venture off the beaten path with local recommendations tailored to your vibe.</p>
</div>
<div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors group">
<iconify-icon className="text-2xl text-[#5B5FFF] mb-4" icon="solar:buildings-2-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h4 className="text-base font-medium text-white mb-2">Hotel &amp; Flight Pairing</h4>
<p className="text-sm text-slate-400 font-light leading-relaxed">Integrated suggestions for where to stay based on your generated itinerary.</p>
</div>
<div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors group">
<iconify-icon className="text-2xl text-[#7C3AED] mb-4" icon="solar:map-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h4 className="text-base font-medium text-white mb-2">Interactive Travel Map</h4>
<p className="text-sm text-slate-400 font-light leading-relaxed">Visualize your entire trip on a map, exportable straight to Google Maps.</p>
</div>
<div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors group">
<iconify-icon className="text-2xl text-[#06B6D4] mb-4" icon="solar:smartphone-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h4 className="text-base font-medium text-white mb-2">Mobile Companion</h4>
<p className="text-sm text-slate-400 font-light leading-relaxed">Access your plans offline while traveling. Never get lost without a signal again.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative z-10" id="destinations">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Popular right now</h2>
<p className="text-slate-400 font-light">Get inspired by top generated itineraries from our community.</p>
</div>
<button className="text-sm text-white hover:text-[#06B6D4] transition-colors flex items-center gap-2 group">
                    Explore all 
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">

<div className="relative rounded-2xl overflow-hidden aspect-[3/4] group cursor-pointer">
<img alt="Paris" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-[#0F172A]/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-5 w-full">
<h4 className="text-lg font-medium text-white mb-1">Paris, France</h4>
<p className="text-xs text-slate-300 mb-3 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">Art, Culture &amp; Food</p>
<button className="w-full py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-xs font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white/20">Generate Plan</button>
</div>
</div>

<div className="relative rounded-2xl overflow-hidden aspect-[3/4] group cursor-pointer">
<img alt="Bali" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-[#0F172A]/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-5 w-full">
<h4 className="text-lg font-medium text-white mb-1">Bali, Indonesia</h4>
<p className="text-xs text-slate-300 mb-3 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">Nature &amp; Relaxation</p>
<button className="w-full py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-xs font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white/20">Generate Plan</button>
</div>
</div>

<div className="relative rounded-2xl overflow-hidden aspect-[3/4] group cursor-pointer">
<img alt="Tokyo" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1493780474015-ba834fd0ce2f?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-[#0F172A]/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-5 w-full">
<h4 className="text-lg font-medium text-white mb-1">Tokyo, Japan</h4>
<p className="text-xs text-slate-300 mb-3 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">City &amp; Tradition</p>
<button className="w-full py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-xs font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white/20">Generate Plan</button>
</div>
</div>

<div className="relative rounded-2xl overflow-hidden aspect-[3/4] group cursor-pointer hidden md:block">
<img alt="Santorini" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-[#0F172A]/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-5 w-full">
<h4 className="text-lg font-medium text-white mb-1">Santorini, Greece</h4>
<p className="text-xs text-slate-300 mb-3 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">Romance &amp; Views</p>
<button className="w-full py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-xs font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white/20">Generate Plan</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative z-10 bg-white/[0.01] border-y border-white/5">
<div className="max-w-7xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-16 text-center">Loved by travelers</h2>
<div className="grid md:grid-cols-3 gap-6">

<div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 relative">
<div className="flex gap-1 mb-4 text-[#06B6D4]">
<iconify-icon className="text-sm" icon="solar:star-fall-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-fall-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-fall-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-fall-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-fall-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-300 font-light leading-relaxed mb-6">"This AI travel planner saved me hours of reading blogs. It generated the perfect itinerary for my Europe trip, including train logistics!"</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-700"></div>
<div>
<p className="text-xs font-medium text-white">Sarah Jenkins</p>
<p className="text-[10px] text-slate-500">Solo Traveler</p>
</div>
</div>
</div>

<div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 relative">
<div className="flex gap-1 mb-4 text-[#06B6D4]">
<iconify-icon className="text-sm" icon="solar:star-fall-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-fall-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-fall-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-fall-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-fall-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-300 font-light leading-relaxed mb-6">"I loved how it asked for my budget and interests. The restaurants it suggested in Kyoto were incredible and completely hidden gems."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-700"></div>
<div>
<p className="text-xs font-medium text-white">Michael Chen</p>
<p className="text-[10px] text-slate-500">Food Enthusiast</p>
</div>
</div>
</div>

<div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 relative">
<div className="flex gap-1 mb-4 text-[#06B6D4]">
<iconify-icon className="text-sm" icon="solar:star-fall-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-fall-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-fall-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-fall-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-fall-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-300 font-light leading-relaxed mb-6">"Planning a family trip is usually a nightmare. AITOUR gave us a schedule that kept the kids entertained without exhausting the adults."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-700"></div>
<div>
<p className="text-xs font-medium text-white">Elena Rodriguez</p>
<p className="text-[10px] text-slate-500">Family of 4</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative z-10" id="pricing">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Simple, transparent pricing</h2>
<p className="text-slate-400 font-light max-w-xl mx-auto">Start planning for free, upgrade when you need more power.</p>
</div>
<div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">

<div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5">
<h3 className="text-lg font-medium text-white mb-2">Explorer</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-3xl font-semibold text-white">$0</span>
<span className="text-xs text-slate-500">/ forever</span>
</div>
<p className="text-xs text-slate-400 font-light mb-6">Perfect for weekend getaways.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-2 text-sm text-slate-300 font-light">
<iconify-icon className="text-slate-500" icon="solar:check-circle-linear"></iconify-icon> 1 AI itinerary per month
                        </li>
<li className="flex items-center gap-2 text-sm text-slate-300 font-light">
<iconify-icon className="text-slate-500" icon="solar:check-circle-linear"></iconify-icon> Basic city guides
                        </li>
<li className="flex items-center gap-2 text-sm text-slate-500 font-light opacity-50">
<iconify-icon icon="solar:close-circle-linear"></iconify-icon> Export to maps
                        </li>
</ul>
<button className="w-full py-2.5 rounded-lg text-sm font-medium text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors">Get Started</button>
</div>

<div className="p-8 rounded-3xl bg-[#0F172A] border border-[#7C3AED]/50 relative shadow-[0_0_30px_rgba(124,58,237,0.15)] transform md:-translate-y-4">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#5B5FFF] to-[#7C3AED] text-white text-[10px] font-medium px-3 py-1 rounded-full uppercase tracking-wider">Most Popular</div>
<h3 className="text-lg font-medium text-white mb-2">Voyager</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-3xl font-semibold text-white">$12</span>
<span className="text-xs text-slate-500">/ month</span>
</div>
<p className="text-xs text-slate-400 font-light mb-6">For the frequent traveler.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-2 text-sm text-white font-light">
<iconify-icon className="text-[#7C3AED]" icon="solar:check-circle-linear"></iconify-icon> Unlimited AI itineraries
                        </li>
<li className="flex items-center gap-2 text-sm text-white font-light">
<iconify-icon className="text-[#7C3AED]" icon="solar:check-circle-linear"></iconify-icon> Export to Google Maps
                        </li>
<li className="flex items-center gap-2 text-sm text-white font-light">
<iconify-icon className="text-[#7C3AED]" icon="solar:check-circle-linear"></iconify-icon> Hotel &amp; flight integrations
                        </li>
</ul>
<button className="w-full py-2.5 rounded-lg text-sm font-medium text-white bg-gradient-to-r from-[#5B5FFF] to-[#7C3AED] hover:shadow-[0_0_15px_rgba(124,58,237,0.4)] transition-all">Start Free Trial</button>
</div>

<div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5">
<h3 className="text-lg font-medium text-white mb-2">Globetrotter</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-3xl font-semibold text-white">$29</span>
<span className="text-xs text-slate-500">/ month</span>
</div>
<p className="text-xs text-slate-400 font-light mb-6">Advanced planning for digital nomads.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-2 text-sm text-slate-300 font-light">
<iconify-icon className="text-slate-500" icon="solar:check-circle-linear"></iconify-icon> Everything in Voyager
                        </li>
<li className="flex items-center gap-2 text-sm text-slate-300 font-light">
<iconify-icon className="text-slate-500" icon="solar:check-circle-linear"></iconify-icon> Live flight tracking
                        </li>
<li className="flex items-center gap-2 text-sm text-slate-300 font-light">
<iconify-icon className="text-slate-500" icon="solar:check-circle-linear"></iconify-icon> 24/7 AI Concierge chat
                        </li>
</ul>
<button className="w-full py-2.5 rounded-lg text-sm font-medium text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors">Upgrade</button>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative z-10 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#5B5FFF]/10 pointer-events-none"></div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-64 bg-[#7C3AED] blur-[150px] opacity-20 pointer-events-none"></div>
<div className="max-w-3xl mx-auto text-center relative z-10">
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tighter mb-6">Start Planning Your Next Adventure</h2>
<p className="text-lg text-slate-400 font-light mb-10 max-w-xl mx-auto">Stop stressing over tabs and spreadsheets. Let AI build your perfect travel itinerary in seconds.</p>
<button className="px-8 py-4 rounded-full text-base font-medium text-white bg-gradient-to-r from-[#5B5FFF] to-[#7C3AED] hover:shadow-[0_0_30px_rgba(91,95,255,0.5)] hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 mx-auto">
<iconify-icon className="text-xl" icon="solar:rocket-linear"></iconify-icon>
                Generate My Trip Free
            </button>
</div>
</section>

<footer className="bg-[#0A0F1F] border-t border-white/5 pt-16 pb-8 px-6 relative z-10">
<div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">

<div className="col-span-2 md:col-span-1">
<a className="text-white text-lg font-medium tracking-tighter flex items-center gap-2 mb-4" href="#">
<div className="w-6 h-6 rounded bg-gradient-to-br from-[#5B5FFF] to-[#7C3AED] flex items-center justify-center">
<span className="text-[10px] text-white tracking-tighter">AI</span>
</div>
                    AITOUR
                </a>
<p className="text-xs text-slate-500 font-light leading-relaxed mb-6 max-w-xs">
                    The intelligent platform that generates personalized travel itineraries using advanced AI.
                </p>
</div>

<div>
<h5 className="text-sm font-medium text-white mb-4">Product</h5>
<ul className="space-y-3">
<li><a className="text-xs text-slate-500 hover:text-white transition-colors" href="#">Features</a></li>
<li><a className="text-xs text-slate-500 hover:text-white transition-colors" href="#">Pricing</a></li>
<li><a className="text-xs text-slate-500 hover:text-white transition-colors" href="#">Destinations</a></li>
</ul>
</div>

<div>
<h5 className="text-sm font-medium text-white mb-4">Resources</h5>
<ul className="space-y-3">
<li><a className="text-xs text-slate-500 hover:text-white transition-colors" href="#">Travel Blog</a></li>
<li><a className="text-xs text-slate-500 hover:text-white transition-colors" href="#">Help Center</a></li>
<li><a className="text-xs text-slate-500 hover:text-white transition-colors" href="#">Community</a></li>
</ul>
</div>

<div>
<h5 className="text-sm font-medium text-white mb-4">Legal</h5>
<ul className="space-y-3 mb-6">
<li><a className="text-xs text-slate-500 hover:text-white transition-colors" href="#">Privacy Policy</a></li>
<li><a className="text-xs text-slate-500 hover:text-white transition-colors" href="#">Terms of Service</a></li>
</ul>
<div className="flex gap-4">
<a className="text-slate-500 hover:text-white transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:twitter-linear"></iconify-icon></a>
<a className="text-slate-500 hover:text-white transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:instagram-linear"></iconify-icon></a>
<a className="text-slate-500 hover:text-white transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:github-linear"></iconify-icon></a>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-[11px] text-slate-600">© 2025 AI Tour Planner. All rights reserved.</p>
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-green-500"></div>
<span className="text-[11px] text-slate-500">All systems operational</span>
</div>
</div>
</footer>

    </>
  );
}
