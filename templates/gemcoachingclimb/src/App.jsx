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
      

<div className="arch-lines">
<svg height="100%" preserveaspectratio="none" viewbox="0 0 1440 900" width="100%">
<line stroke="#121212" strokeWidth="0.5" x1="10%" x2="10%" y1="0" y2="100%"></line>
<line stroke="#121212" strokeWidth="0.5" x1="90%" x2="90%" y1="0" y2="100%"></line>
<line stroke="#121212" stroke-dasharray="4 8" strokeWidth="0.5" x1="50%" x2="50%" y1="0" y2="100%"></line>
<line opacity="0.5" stroke="#B76E79" strokeWidth="0.5" x1="0" x2="1440" y1="800" y2="400"></line>
</svg>
</div>

<nav className="fixed top-0 inset-x-0 z-50 h-24 flex items-center border-b border-[#121212]/5 bg-[#F6F1EA]/90 backdrop-blur-md">
<div className="max-w-7xl mx-auto w-full px-8 flex items-center justify-between">
<a className="flex items-center gap-4 group" href="#">
<div className="text-[#121212] group-hover:text-[#B76E79] transition-colors duration-500">
<iconify-icon height="24" icon="solar:gem-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-xl font-serif font-normal tracking-tight text-[#121212] uppercase">Gem<span className="font-light opacity-70">Coaching</span></span>
</a>
<div className="hidden md:flex items-center gap-12">
<a className="text-xs font-medium tracking-widest uppercase text-[#121212]/60 hover:text-[#121212] transition-colors" href="#gem-method">The Gem Method</a>
<a className="text-xs font-medium tracking-widest uppercase text-[#121212]/60 hover:text-[#121212] transition-colors" href="#climb">The Tool</a>
<a className="text-xs font-medium tracking-widest uppercase text-[#121212]/60 hover:text-[#121212] transition-colors" href="#founder">Founder</a>
</div>
<div className="flex items-center">
<a className="bg-[#121212] text-[#F6F1EA] text-xs font-medium tracking-widest uppercase px-8 py-4 hover:bg-[#B76E79] transition-all duration-500 rounded-sm" href="#pricing">
                    Access
                </a>
</div>
</div>
</nav>

<header className="relative pt-48 pb-32 px-6 overflow-hidden min-h-screen flex flex-col justify-center">

<div className="absolute inset-0 z-0 select-none">
<img alt="Nervous System Anatomy" className="opacity-60 mix-blend-multiply w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ae521738-d182-4d24-bcef-e60145c5ca21_3840w.png?w=800&amp;q=80"/>

<div className="absolute inset-0 bg-gradient-to-b from-[#F6F1EA]/80 via-[#F6F1EA]/50 to-[#F6F1EA] pointer-events-none"></div>
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(246,241,234,0.7)_0%,transparent_100%)] pointer-events-none"></div>
</div>
<div className="absolute inset-0 bg-grain pointer-events-none z-0 mix-blend-overlay opacity-50"></div>
<div className="text-center max-w-5xl z-10 mr-auto ml-auto relative">
<div className="inline-flex items-center gap-4 mb-12">
<div className="h-[1px] w-12 bg-[#B76E79]"></div>
<span className="text-xs font-medium uppercase tracking-[0.2em] text-[#121212]">Created by a Physiotherapist</span>
<div className="h-[1px] w-12 bg-[#B76E79]"></div>
</div>
<h1 className="md:text-8xl leading-[1] text-6xl font-normal text-[#121212] tracking-tight font-serif mb-10">Confidence is trained <br/> in the body, <br/> <span className="italic text-[#121212] relative">not forced in the mind. <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-[#B76E79]/40"></span></span></h1>
<p className="text-xl md:text-2xl text-[#121212]/70 max-w-3xl mx-auto mb-16 leading-relaxed font-light">
                For high-capacity people who don't need motivation. They need regulation.
                <span className="font-normal text-[#121212] border-[#B76E79] border-b">CLIMB meets the body first so the mind doesn’t have to force clarity.</span>
</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-6">
<a className="w-full sm:w-auto px-10 py-5 bg-[#121212] text-[#F6F1EA] font-medium text-xs uppercase tracking-widest hover:bg-[#333] transition-all hover:-translate-y-1 shadow-2xl shadow-black/10 flex items-center justify-center gap-4 group rounded-sm" href="#pricing">
<iconify-icon className="group-hover:text-[#B76E79] transition-colors" height="20" icon="solar:play-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
                    Start Regulation
                </a>
<a className="w-full sm:w-auto px-10 py-5 bg-transparent border border-[#121212] text-[#121212] font-medium text-xs uppercase tracking-widest hover:bg-[#121212] hover:text-[#F6F1EA] transition-all flex items-center justify-center gap-4 rounded-sm backdrop-blur-sm" href="#gem-method">
                    The Method
                </a>
</div>

<div className="mt-32 relative mx-auto max-w-4xl">
<div className="absolute -top-10 -right-10 w-40 h-40 border border-[#B76E79]/20 rounded-full"></div>
<div className="absolute -bottom-10 -left-10 w-60 h-60 border border-[#121212]/5 rounded-full"></div>
<div className="luxury-card p-1 md:p-2 relative overflow-hidden rounded-sm">
<div className="bg-[#FBF9F6] p-8 md:p-12 grid md:grid-cols-12 gap-12 items-center border border-[#fff]">

<div className="md:col-span-5 relative">
<div className="aspect-square bg-[#F6F1EA] border border-[#121212]/10 flex flex-col items-center justify-center mb-8 relative overflow-hidden">
<div className="absolute inset-0 border-[0.5px] border-[#121212]/5 m-2"></div>
<div className="absolute inset-0 border-[0.5px] border-[#121212]/5 m-4"></div>
<iconify-icon className="text-[#B76E79]" height="48" icon="solar:soundwave-linear" strokeWidth="1" width="48"></iconify-icon>
</div>
<div className="flex justify-between items-end mb-4">
<div className="">
<h3 className="text-lg font-serif italic text-[#121212]">5 Senses Orientation</h3>
<p className="text-xs uppercase tracking-widest text-[#121212]/50 mt-1">GemCoaching</p>
</div>
<iconify-icon className="text-[#121212]/40" height="20" icon="solar:menu-dots-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div className="h-[1px] w-full bg-[#121212]/10 mt-6 relative">
<div className="absolute left-0 top-0 h-full w-1/3 bg-[#121212]"></div>
<div className="absolute left-1/3 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#121212] rounded-full"></div>
</div>
<div className="flex justify-between text-[0.65rem] text-[#121212]/40 font-medium mt-3 tracking-widest">
<span>02:14</span>
<span>07:00</span>
</div>
</div>

<div className="md:col-span-7 text-left">
<div className="flex items-center gap-3 text-[#B76E79] mb-6">
<iconify-icon height="16" icon="solar:verified-check-linear" strokeWidth="1.5" width="16"></iconify-icon>
<span className="text-[0.65rem] font-semibold tracking-[0.2em] uppercase text-[#121212]">Clinical Physiology</span>
</div>
<h2 className="text-3xl md:text-4xl font-serif text-[#121212] leading-tight mb-6 tracking-tight">
                                "Presence is physiological."
                            </h2>
<p className="text-[#121212]/60 leading-relaxed text-lg font-light">
                                You can't think your way out of stress. CLIMB helps you feel your way out. It tells your brain: <em>"We are safe."</em> When the body feels safe, clarity returns.
                            </p>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="py-12 border-y border-[#121212]/5 bg-white/40 backdrop-blur-sm overflow-hidden">
<div className="relative w-full overflow-hidden mask-linear-fade">
<div className="flex whitespace-nowrap animate-marquee">
<div className="flex items-center gap-24 px-8 opacity-60 text-[#121212]">
<span className="text-xl font-serif italic tracking-wide">Regulate the body</span>
<iconify-icon className="text-[#B76E79]" icon="solar:star-linear" width="12"></iconify-icon>
<span className="text-xs font-semibold tracking-[0.2em] uppercase">Return to Presence</span>
<iconify-icon className="text-[#B76E79]" icon="solar:star-linear" width="12"></iconify-icon>
<span className="text-xl font-serif">Lead from Identity</span>
<iconify-icon className="text-[#B76E79]" icon="solar:star-linear" width="12"></iconify-icon>
<span className="text-xs font-semibold tracking-[0.2em] uppercase">Nervous System Regulation</span>
<iconify-icon className="text-[#B76E79]" icon="solar:star-linear" width="12"></iconify-icon>
<span className="text-xl font-serif italic">Regulate the body</span>
<iconify-icon className="text-[#B76E79]" icon="solar:star-linear" width="12"></iconify-icon>
<span className="text-xs font-semibold tracking-[0.2em] uppercase">Return to Presence</span>
<iconify-icon className="text-[#B76E79]" icon="solar:star-linear" width="12"></iconify-icon>
<span className="text-xl font-serif">Lead from Identity</span>
<iconify-icon className="text-[#B76E79]" icon="solar:star-linear" width="12"></iconify-icon>
<span className="text-xs font-semibold tracking-[0.2em] uppercase">Nervous System Regulation</span>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative" id="problem">
<div className="max-w-6xl mx-auto relative z-10">
<div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-start">
<div className="sticky top-32">
<span className="text-[#B76E79] font-bold text-[0.65rem] tracking-[0.2em] uppercase mb-6 block">The Pattern</span>
<h2 className="md:text-6xl leading-[1.1] md:p-8 text-5xl text-[#121212] tracking-tight font-serif rounded-sm mb-8 px-6 py-6 shadow-sm">
                        Functioning on the outside. <br/>
<span className="italic text-[#121212]/70">Struggling on the inside.</span>
</h2>
<p className="leading-relaxed text-lg font-normal text-[#121212] mb-12">
    For years, you did "all the right things." You worked hard. You pushed through. But underneath, you notice patterns of self-doubt and emotional suppression.
</p>
<div className="border-l border-[#121212] pl-8 py-2">
<p className="text-2xl font-serif italic text-[#121212] mb-4">
                            "You can't think your way into safety."
                        </p>
<p className="text-[0.65rem] text-[#B76E79] font-semibold tracking-widest uppercase">— Gem</p>
</div>
</div>
<div className="pt-4 space-y-20">
<div className="group md:p-10 hover:shadow-lg hover:border-[#B76E79]/20 transition-all duration-500 bg-[#D5C4A8] border-[#121212]/5 border rounded-sm pt-8 pr-8 pb-8 pl-8 shadow-sm">
<div className="w-12 h-12 flex items-center justify-center border border-[#121212]/10 rounded-full mb-6 text-[#B76E79] bg-[#F6F1EA] group-hover:scale-110 transition-transform duration-500">
<iconify-icon height="20" icon="solar:shield-warning-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-3xl font-serif text-[#121212] mb-4 tracking-tight">
        The Body Said "Stop"
    </h3>
<p className="text-[#121212]/70 leading-relaxed text-lg font-light">
        When the nervous system is dysregulated, we lose access to presence — and identity collapses into old patterns. A body holding stress long after the mind says "I'm fine" is not broken, it is protecting you.
    </p>
</div>
<div className="group relative z-20 bg-white p-8 md:p-10 rounded-sm border border-[#121212]/5 shadow-sm hover:shadow-lg hover:border-[#B76E79]/20 transition-all duration-500">
<div className="w-12 h-12 flex items-center justify-center border border-[#121212]/10 rounded-full mb-6 text-[#B76E79] bg-[#F6F1EA] group-hover:scale-110 transition-transform duration-500">
<iconify-icon height="24" icon="solar:refresh-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-3xl font-serif text-[#121212] mb-4 tracking-tight">
        The Solution
    </h3>
<p className="text-[#121212]/70 leading-relaxed text-lg font-light">
        You have to regulate your way into safety. Through blending science-based physiology, somatic tools, and nervous system regulation, you can clear emotional charge and return to grounded self-leadership.
    </p>
</div>
<div className="p-12 bg-[#121212] text-[#F6F1EA] shadow-2xl relative overflow-hidden rounded-sm mt-10">
<div className="absolute inset-0 bg-grain opacity-10"></div>
<div className="absolute top-0 right-0 p-12 opacity-20">
<iconify-icon height="128" icon="solar:gem-linear" strokeWidth="0.5" width="128"></iconify-icon>
</div>
<div className="relative z-10">
<h3 className="text-3xl font-serif italic mb-6 text-white tracking-tight">
                                Come back to yourself
                            </h3>
<p className="leading-relaxed opacity-80 mb-10 text-[#CFC8BE] text-lg font-light">
                                CLIMB is here to help you come back to yourself in minutes, not months. Regulate the body. Return to presence.
                            </p>
<div className="inline-block border border-[#B76E79] px-6 py-3 text-[0.65rem] font-semibold text-[#B76E79] tracking-[0.2em] uppercase hover:bg-[#B76E79] hover:text-white transition-colors cursor-default">
                                Regulation over Reaction
                            </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-[#F6F1EA] border-[#121212]/5 border-t pt-32 pr-6 pb-32 pl-6" id="gem-method">
<div className="max-w-7xl mr-auto ml-auto">
<div className="text-center mb-24">
<span className="text-[#B76E79] font-bold text-[0.65rem] tracking-[0.2em] uppercase mb-4 block">The Methodology</span>
<h2 className="text-4xl md:text-5xl font-serif text-[#121212] tracking-tight">The GEM Method</h2>
<p className="text-[#121212]/60 mt-6 max-w-xl mx-auto font-light">
                    CLIMB is built on the first phase of the GEM Method.
                </p>
</div>

<div className="flex flex-col md:flex-row md:gap-10 perspective-1000 gap-x-12 gap-y-12 items-center justify-center">

<div className="relative w-full max-w-[300px] aspect-[2/3] group cursor-pointer hover:-translate-y-3 transition-transform duration-700 ease-out z-20">
<div className="absolute inset-0 bg-[#121212] rounded-2xl overflow-hidden shadow-2xl">
<img alt="Background Texture" className="w-full h-full object-cover opacity-60 mix-blend-luminosity scale-110 group-hover:scale-100 transition-transform duration-1000" src="https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-90"></div>
</div>
<div className="absolute inset-x-4 top-4 bottom-4 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 p-6 flex flex-col justify-between">
<div className="flex justify-between items-start">
<div className="w-12 h-12 bg-[#B76E79] rounded-full flex items-center justify-center text-[#121212] shadow-lg shadow-[#B76E79]/20">
<iconify-icon height="24" icon="solar:leaf-bold" width="24"></iconify-icon>
</div>
<span className="text-[0.6rem] font-bold text-[#F6F1EA] uppercase tracking-[0.2em] border border-white/20 px-2 py-1 rounded-sm">Step 01</span>
</div>
<div className="">
<h3 className="text-2xl font-serif text-white leading-tight mb-2">Growth</h3>
<div className="h-[1px] w-8 bg-[#B76E79] mb-4"></div>
<h4 className="text-sm font-semibold uppercase tracking-widest text-[#B76E79] mb-3">Regulate the Body</h4>
<p className="text-xs text-[#CFC8BE] leading-relaxed mb-4 font-light">
                                CLIMB guides your nervous system out of activation and into safety. This restores presence so you can access clarity again.
                            </p>
<div className="flex items-center gap-2 text-[#F6F1EA] group-hover:text-[#B76E79] transition-colors mt-6">
<span className="text-[0.65rem] font-bold uppercase tracking-widest">Included in CLIMB</span>
<iconify-icon height="14" icon="solar:arrow-right-linear" width="14"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="anatomy-card relative w-full max-w-[300px] aspect-[2/3] rounded-2xl overflow-hidden group cursor-pointer hover:-translate-y-3 transition-transform duration-700 ease-out">
<div className="absolute inset-0 bg-grain opacity-30 z-10 mix-blend-overlay"></div>
<div className="absolute inset-3 border border-[#121212]/10 rounded-xl z-20 pointer-events-none"></div>
<div className="absolute inset-0 top-8 bottom-32 flex items-center justify-center p-6 z-0">
<img alt="Identity" className="anatomy-image w-full h-full object-contain opacity-70" src="https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&amp;q=80"/>
</div>
<div className="z-30 bg-gradient-to-t from-[#D4C4A8] via-[#D4C4A8] to-transparent pt-8 pr-8 pb-8 pl-8 absolute right-0 bottom-0 left-0">
<div className="flex items-center gap-3 mb-2">
<div className="w-2 h-2 rounded-full bg-[#121212]"></div>
<span className="text-[0.6rem] font-bold text-[#121212] uppercase tracking-[0.2em]">Step 02</span>
</div>
<h3 className="font-serif text-[#121212] text-xl tracking-tight mb-2">Empowerment</h3>
<p className="text-xs text-[#121212]/70 leading-relaxed font-light">
                            
                            When your body feels safe, self-belief stabilizes. You reconnect to who you choose to be.
                        </p>
</div>
</div>

<div className="anatomy-card relative w-full max-w-[300px] aspect-[2/3] rounded-2xl overflow-hidden group cursor-pointer hover:-translate-y-3 transition-transform duration-700 ease-out">
<div className="absolute inset-0 bg-grain opacity-30 z-10 mix-blend-overlay"></div>
<div className="absolute inset-3 border border-[#121212]/10 rounded-xl z-20 pointer-events-none"></div>
<div className="absolute inset-0 top-8 bottom-32 flex items-center justify-center p-6 z-0">
<img alt="Action" className="anatomy-image w-full h-full object-contain opacity-70" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&amp;q=80"/>
</div>
<div className="z-30 bg-gradient-to-t from-[#CFC8BE] via-[#CFC8BE] to-transparent pt-8 pr-8 pb-8 pl-8 absolute right-0 bottom-0 left-0">
<div className="flex items-center gap-3 mb-2">
<div className="w-2 h-2 rounded-full bg-[#121212]"></div>
<span className="text-[0.6rem] font-bold text-[#121212] uppercase tracking-[0.2em]">Step 03</span>
</div>
<h3 className="font-serif text-[#121212] text-xl tracking-tight mb-2">Motivation</h3>
<p className="text-xs text-[#121212]/70 leading-relaxed font-light">
                            
                            From regulation and presence, your next step becomes obvious. Action flows without force.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white border-[#121212]/5 border-t pt-32 pr-6 pb-32 pl-6 relative" id="climb">
<div className="max-w-7xl mx-auto relative z-10">
<div className="text-center max-w-3xl mx-auto mb-24">
<span className="text-[#121212]/40 font-semibold text-[0.65rem] tracking-[0.2em] uppercase mb-4 block">Phase 1: Growth</span>
<h2 className="text-5xl md:text-6xl font-serif text-[#121212] mb-8 tracking-tight">
                    CLIMB: The Protocol
                </h2>
<p className="text-[#121212]/60 text-xl font-light">
                    A precision regulation tool for moments of emotional activation, self-doubt, and internal freeze.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-5 gap-0 divide-y md:divide-y-0 md:divide-x divide-[#121212]/10 border-y border-[#121212]/10">

<div className="group p-8 md:py-16 md:px-8 bg-transparent hover:bg-[#F6F1EA] transition-colors duration-500">
<div className="text-4xl font-serif text-[#B76E79] mb-8 opacity-50 group-hover:opacity-100 transition-opacity italic">C</div>
<h3 className="font-medium text-[#121212] mb-3 text-sm uppercase tracking-widest">Connect</h3>
<p className="text-sm text-[#121212]/60 leading-relaxed font-light">Stop fighting it. Admit you are stuck. Drop the guilt.</p>
</div>

<div className="group p-8 md:py-16 md:px-8 bg-transparent hover:bg-[#F6F1EA] transition-colors duration-500">
<div className="text-4xl font-serif text-[#B76E79] mb-8 opacity-50 group-hover:opacity-100 transition-opacity italic">L</div>
<h3 className="font-medium text-[#121212] mb-3 text-sm uppercase tracking-widest">Listen</h3>
<p className="text-sm text-[#121212]/60 leading-relaxed font-light">Focus on sounds in the room. Get out of your head.</p>
</div>

<div className="group p-8 md:py-16 md:px-8 bg-[#121212] text-[#F6F1EA] relative overflow-hidden transform md:scale-105 md:shadow-2xl z-10">
<div className="text-4xl font-serif text-white mb-8 italic">I</div>
<h3 className="font-medium text-white mb-3 text-sm uppercase tracking-widest">Immerse</h3>
<p className="text-sm text-[#CFC8BE] leading-relaxed font-light">Look around you. Find things that feel safe and real.</p>
</div>

<div className="group p-8 md:py-16 md:px-8 bg-transparent hover:bg-[#F6F1EA] transition-colors duration-500">
<div className="text-4xl font-serif text-[#B76E79] mb-8 opacity-50 group-hover:opacity-100 transition-opacity italic">M</div>
<h3 className="font-medium text-[#121212] mb-3 text-sm uppercase tracking-widest">Move</h3>
<p className="text-sm text-[#121212]/60 leading-relaxed font-light">Touch your arms. Wiggle your toes. Feel your body.</p>
</div>

<div className="group p-8 md:py-16 md:px-8 bg-transparent hover:bg-[#F6F1EA] transition-colors duration-500">
<div className="text-4xl font-serif text-[#B76E79] mb-8 opacity-50 group-hover:opacity-100 transition-opacity italic">B</div>
<h3 className="font-medium text-[#121212] mb-3 text-sm uppercase tracking-widest">Breathe</h3>
<p className="text-sm text-[#121212]/60 leading-relaxed font-light">Only now do we breathe. A long exhale to finish.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#FBF9F6] border-b border-[#121212]/5">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div className="">
<span className="text-[#B76E79] font-bold text-[0.65rem] tracking-[0.2em] uppercase mb-4 block">Included in The Plan</span>
<h2 className="text-4xl md:text-5xl font-serif text-[#121212] tracking-tight">CLIMB: A 5 Senses Nervous System Orientation Tool</h2>
<p className="text-lg text-[#121212]/60 mt-4 font-light max-w-xl">
                        Everything you need to get unstuck. Simple tools to use exactly when you feel paralysis setting in.
                    </p>
</div>
<div className="hidden md:block">
<iconify-icon className="text-[#121212]/20" height="32" icon="solar:gallery-wide-linear" strokeWidth="1" width="32"></iconify-icon>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group bg-white border border-[#121212]/5 p-8 hover:shadow-xl hover:shadow-[#121212]/5 transition-all duration-500 rounded-sm">
<div className="w-14 h-14 bg-[#F6F1EA] rounded-full flex items-center justify-center text-[#B76E79] mb-8 group-hover:scale-110 transition-transform">
<iconify-icon height="28" icon="solar:music-note-slider-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<div className="flex justify-between items-start mb-4">
<h3 className="text-2xl font-serif text-[#121212]">The Audio Guide</h3>
<span className="text-[0.6rem] font-bold tracking-[0.2em] text-[#121212]/30 uppercase border border-[#121212]/10 px-2 py-1">07:00</span>
</div>
<p className="text-[#121212]/60 text-sm leading-relaxed mb-6 font-light">
                        The main event. A guided track that walks you through the CLIMB method. Hit play, close your eyes, and let my voice guide you back to calm.
                    </p>
<ul className="space-y-3 border-t border-[#121212]/5 pt-6">
<li className="flex items-center gap-3 text-xs font-medium uppercase tracking-widest text-[#121212]/70">
<iconify-icon className="text-[#B76E79]" height="14" icon="solar:check-read-linear" width="14"></iconify-icon>
                            Calming Background Music
                        </li>
<li className="flex items-center gap-3 text-xs font-medium uppercase tracking-widest text-[#121212]/70">
<iconify-icon className="text-[#B76E79]" height="14" icon="solar:check-read-linear" width="14"></iconify-icon>
                            Simple Instructions
                        </li>
</ul>
</div>

<div className="group bg-white border border-[#121212]/5 p-8 hover:shadow-xl hover:shadow-[#121212]/5 transition-all duration-500 rounded-sm">
<div className="w-14 h-14 bg-[#F6F1EA] rounded-full flex items-center justify-center text-[#121212] mb-8 group-hover:scale-110 transition-transform">
<iconify-icon height="28" icon="solar:map-point-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<div className="flex justify-between items-start mb-4">
<h3 className="text-2xl font-serif text-[#121212]">The Visual Map</h3>
<span className="text-[0.6rem] font-bold tracking-[0.2em] text-[#121212]/30 uppercase border border-[#121212]/10 px-2 py-1">PDF</span>
</div>
<p className="text-[#121212]/60 text-sm leading-relaxed mb-6 font-light">
                        A beautiful visual guide for your workspace. Print it out and put it on your desk. It reminds you that you have options when you feel stuck.
                    </p>
<ul className="space-y-3 border-t border-[#121212]/5 pt-6">
<li className="flex items-center gap-3 text-xs font-medium uppercase tracking-widest text-[#121212]/70">
<iconify-icon className="text-[#B76E79]" height="14" icon="solar:check-read-linear" width="14"></iconify-icon>
                            Print-Ready High Quality
                        </li>
<li className="flex items-center gap-3 text-xs font-medium uppercase tracking-widest text-[#121212]/70">
<iconify-icon className="text-[#B76E79]" height="14" icon="solar:check-read-linear" width="14"></iconify-icon>
                            Looks Good on Your Desk
                        </li>
</ul>
</div>

<div className="group bg-[#121212] text-[#F6F1EA] border border-[#121212] p-8 hover:shadow-2xl hover:shadow-black/20 transition-all duration-500 relative overflow-hidden rounded-sm">
<div className="absolute inset-0 bg-grain opacity-20"></div>
<div className="absolute top-0 right-0 p-6 opacity-10">
<iconify-icon height="100" icon="solar:bolt-circle-bold" width="100"></iconify-icon>
</div>
<div className="relative z-10">
<div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center text-[#B76E79] mb-8 group-hover:scale-110 transition-transform border border-white/10">
<iconify-icon height="28" icon="solar:shield-warning-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<div className="flex justify-between items-start mb-4">
<h3 className="text-2xl font-serif text-white">The Panic Reset</h3>
<span className="text-[0.6rem] font-bold tracking-[0.2em] text-[#B76E79] uppercase border border-[#B76E79]/30 px-2 py-1 bg-[#B76E79]/10">Bonus</span>
</div>
<p className="text-[#CFC8BE] text-sm leading-relaxed mb-6 font-light">
                            A short, 3-minute audio for high-stress moments. Perfect for right before a big meeting or presentation.
                        </p>
<ul className="space-y-3 border-t border-white/10 pt-6">
<li className="flex items-center gap-3 text-xs font-medium uppercase tracking-widest text-[#F6F1EA]/80">
<iconify-icon className="text-[#B76E79]" height="14" icon="solar:check-read-linear" width="14"></iconify-icon>
                                Works Fast
                            </li>
<li className="flex items-center gap-3 text-xs font-medium uppercase tracking-widest text-[#F6F1EA]/80">
<iconify-icon className="text-[#B76E79]" height="14" icon="solar:check-read-linear" width="14"></iconify-icon>
                                Focus on Breath
                            </li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 bg-[#121212] relative overflow-hidden" id="pricing">
<div className="absolute inset-0 bg-grain opacity-20"></div>
<div className="absolute inset-0 flex justify-center items-center pointer-events-none opacity-20">
<div className="w-[800px] h-[800px] border border-[#B76E79]/20 rounded-full"></div>
<div className="absolute w-[600px] h-[600px] border border-[#B76E79]/20 rounded-full"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">

<div className="text-left order-2 lg:order-1 relative z-20">
<div className="inline-flex items-center gap-2 mb-8 border border-[#B76E79]/20 rounded-full pl-2 pr-4 py-1.5 bg-[#B76E79]/5 backdrop-blur-md">
<span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#B76E79] text-[#121212]">
<iconify-icon height="10" icon="solar:lock-keyhole-linear" width="10"></iconify-icon>
</span>
<span className="text-[0.6rem] font-bold tracking-[0.2em] text-[#B76E79] uppercase">Step 01: Growth</span>
</div>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#F6F1EA] mb-6 leading-[1.1] tracking-tight">
                        You can't think your way <br/>
<span className="text-[#B76E79] italic">into safety.</span>
</h2>
<p className="text-[#CFC8BE] text-lg font-light leading-relaxed mb-12 max-w-lg">
                        You have to regulate your way into it. CLIMB is the foundational tool to help you come back to yourself in minutes, not months.
                    </p>
<div className="bg-[#F6F1EA] p-1 rounded-sm shadow-2xl shadow-white/5 relative group max-w-md transform hover:-translate-y-1 transition-transform duration-500">
<div className="bg-white p-8 relative overflow-hidden h-full flex flex-col">

<div className="absolute top-0 right-0 w-40 h-40 bg-[#F6F1EA] rounded-bl-full -mr-10 -mt-10 opacity-50 transition-opacity group-hover:opacity-100 duration-700"></div>
<div className="relative z-10">
<div className="flex justify-between items-start mb-8">
<div className="">
<div className="flex gap-1.5 gap-x-1.5 gap-y-1.5 items-baseline">
<span className="text-5xl font-serif text-[#121212]">$27</span>
<span className="uppercase text-xs font-semibold text-[#121212]/50 tracking-widest">cad</span>
</div>
<div className="text-[0.6rem] text-[#B76E79] font-bold uppercase tracking-[0.2em] mt-2">One-time payment</div>
</div>
<div className="w-12 h-12 rounded-full bg-[#F6F1EA] border border-[#121212]/5 flex items-center justify-center text-[#B76E79] group-hover:scale-110 transition-transform duration-500">
<iconify-icon className="" height="20" icon="solar:stars-minimalistic-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
</div>
<ul className="space-y-4 mb-10">
<li className="flex items-start gap-4 text-sm font-medium text-[#121212]/80">
<div className="w-5 h-5 rounded-full bg-[#B76E79]/10 flex items-center justify-center shrink-0 mt-0.5 text-[#B76E79]">
<iconify-icon height="12" icon="solar:check-circle-linear" width="12"></iconify-icon>
</div>
<span className="leading-tight font-light">The 5 Senses Orientation Tool</span>
</li>
<li className="flex items-start gap-4 text-sm font-medium text-[#121212]/80">
<div className="w-5 h-5 rounded-full bg-[#B76E79]/10 flex items-center justify-center shrink-0 mt-0.5 text-[#B76E79]">
<iconify-icon height="12" icon="solar:check-circle-linear" width="12"></iconify-icon>
</div>
<span className="leading-tight font-light">Visual Cheat Sheet (PDF)</span>
</li>
</ul>
<a className="w-full py-4 px-6 bg-[#121212] text-white font-semibold text-xs uppercase tracking-[0.2em] hover:bg-[#B76E79] transition-colors duration-300 flex justify-center items-center gap-3 mb-6" href="https://gemmaphysio.gumroad.com/l/raplfhn">
                                    Start Regulation
                                    <iconify-icon height="14" icon="solar:arrow-right-linear" strokeWidth="1.5" width="14"></iconify-icon>
</a>
<div className="text-center border-t border-[#121212]/5 pt-4">
<span className="text-[0.6rem] text-[#121212]/30 font-semibold uppercase tracking-widest flex items-center justify-center gap-1.5">
<iconify-icon height="10" icon="solar:shield-check-linear" width="10"></iconify-icon>
                                        Encrypted &amp; Secure Checkout
                                    </span>
</div>
</div>
</div>
</div>
</div>

<div className="relative h-full min-h-[500px] hidden lg:block order-1 lg:order-2">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-radial from-[#B76E79]/10 to-transparent blur-3xl pointer-events-none"></div>
<div className="relative z-10 w-[85%] ml-auto aspect-[3/4] rounded-sm overflow-hidden border border-white/10 group shadow-2xl">
<div className="absolute inset-0 bg-[#121212]/10 group-hover:bg-transparent transition-colors duration-700 z-10 mix-blend-overlay"></div>
<img alt="Nervous System Abstract" className="w-full h-full object-cover opacity-90 transform group-hover:scale-105 transition-transform duration-1000 grayscale hover:grayscale-0" src="https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=1200&amp;q=80"/>
<div className="absolute bottom-8 left-8 z-20">
<div className="text-[#F6F1EA] text-2xl font-serif italic mb-2 tracking-wide">Calm Your Nerves</div>
<div className="flex items-center gap-3">
<div className="h-[1px] w-12 bg-[#B76E79]"></div>
<span className="text-[0.65rem] text-[#F6F1EA]/70 uppercase tracking-widest font-medium">Figure 01.</span>
</div>
</div>
</div>
<div className="absolute top-20 left-4 z-20 backdrop-blur-xl bg-[#121212]/80 border border-white/10 p-1 rounded-sm shadow-2xl transform hover:-translate-y-2 transition-transform duration-500">
<div className="bg-[#1a1a1a]/50 p-6 min-w-[220px]">
<div className="flex justify-between items-center mb-6">
<span className="text-[0.65rem] text-white/40 uppercase tracking-widest font-bold">Body State</span>
<iconify-icon className="text-[#B76E79]" height="16" icon="solar:graph-up-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div className="flex items-end gap-3 mb-2">
<span className="text-3xl font-serif text-white leading-none">Relaxed</span>
<span className="text-xs text-[#B76E79] mb-1 font-medium">100%</span>
</div>
<div className="w-full bg-white/10 h-1 rounded-full mt-2 overflow-hidden">
<div className="bg-[#B76E79] h-full w-[84%] rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 bg-[#F6F1EA] border-t border-[#121212]/10 relative overflow-hidden" id="founder">
<div className="absolute top-0 right-0 w-1/3 h-full bg-[#E5E0D8] opacity-20 transform skew-x-12 origin-top-right"></div>
<div className="max-w-6xl mx-auto relative z-10">
<div className="flex flex-col md:flex-row gap-16 lg:gap-24 items-center">

<div className="w-full md:w-5/12 relative group">
<div className="absolute inset-0 bg-[#B76E79] transform translate-x-4 translate-y-4 rounded-sm transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>
<div className="aspect-[3/4] bg-[#CFC8BE] relative overflow-hidden rounded-sm grayscale contrast-110 hover:grayscale-0 transition-all duration-1000 z-10 shadow-xl border border-white/20">

<img alt="Gemma - Founder" className="object-top w-full h-full object-cover bg-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c0a4dbd9-7d28-4cd0-b19c-f06cc732ab22_800w.jpg"/>
</div>
<div className="absolute -bottom-6 -right-6 bg-white p-6 shadow-xl border border-[#121212]/5 z-20 rounded-sm">
<iconify-icon className="text-[#121212]" height="32" icon="solar:user-hand-up-linear" strokeWidth="1" width="32"></iconify-icon>
</div>
</div>

<div className="w-full md:w-7/12">
<span className="text-[0.65rem] font-bold tracking-[0.2em] text-[#B76E79] uppercase mb-8 block flex items-center gap-3">
<span className="w-8 h-[1px] bg-[#B76E79]"></span>
                        The Founder
                    </span>
<h2 className="leading-[1.1] text-4xl md:text-5xl text-[#121212] font-serif mb-10 tracking-tight">
                        "I built this because I lived it."
                    </h2>
<div className="space-y-6 text-[#121212]/70 leading-relaxed text-lg font-light">
<p className="">
                             I’m a physiotherapist, nervous system regulation practitioner, lymphatic system practitioner, and coach.
                        </p>
<p className="">
                             But my work didn’t begin in a clinic — it began when heartbreak quietly dismantled my self-belief and sense of identity. On the outside, I was capable and high-functioning. On the inside, my body was holding rejection, doubt, and emotional charge that pulled me out of presence.
                        </p>
<p className="">
                            That’s when I realized something powerful: 
                        </p>
<p className="">
                            I don’t teach from theory. I teach from lived experience, clinical knowledge, and thousands of moments of regulating real human nervous systems — including my own.
                        </p>
</div>
<div className="mt-12 flex items-center gap-6">
<div className="h-px w-16 bg-[#121212]/20"></div>
<span className="font-serif italic text-2xl text-[#121212]">Gem</span>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white pt-32 pb-32 px-6 border-t border-[#121212]/5">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

<div className="bg-[#FBF9F6] p-10 shadow-sm border border-[#121212]/5 hover:border-[#B76E79]/30 transition-all duration-500 group">
<div className="flex items-center gap-1 mb-6 text-[#B76E79]">
<iconify-icon height="12" icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon height="12" icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon height="12" icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon height="12" icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon height="12" icon="solar:star-bold" width="12"></iconify-icon>
</div>
<p className="text-lg leading-relaxed text-[#121212] mb-10 font-serif italic">
                        "I used to sit at my computer for hours doing nothing but stressing. This audio track actually snaps me out of it. It's like magic."
                    </p>
<div className="flex items-center gap-4">
<div className="flex text-lg italic text-white font-serif bg-[#121212] w-10 h-10 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/25df7579-09f7-4c8c-bb39-18a974a980d0_320w.webp?w=800&amp;q=80)] bg-cover bg-center rounded-full items-center justify-center">H</div>
<div className="">
<h3 className="text-xs font-semibold uppercase tracking-widest text-[#121212]">Henry</h3>
<p className="text-[0.6rem] text-[#121212]/40 uppercase tracking-wide font-medium">Entrepreneur</p>
</div>
</div>
</div>

<div className="bg-[#FBF9F6] p-10 shadow-sm border border-[#121212]/5 hover:border-[#B76E79]/30 transition-all duration-500 group">
<div className="flex items-center gap-1 mb-6 text-[#B76E79]">
<iconify-icon height="12" icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon height="12" icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon height="12" icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon height="12" icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon height="12" icon="solar:star-bold" width="12"></iconify-icon>
</div>
<p className="leading-relaxed text-lg italic text-[#121212] font-serif mb-10">
                        "I thought I was just lazy or procrastinating. Turns out I was frozen. This simple method works better than any planner I've bought."
                    </p>
<div className="flex items-center gap-4">
<div className="flex text-lg italic text-white font-serif bg-[#121212] w-10 h-10 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6e825b87-0682-49e3-98c2-dbdab1f8f9c5_320w.webp?w=800&amp;q=80)] bg-cover bg-center rounded-full items-center justify-center">S</div>
<div>
<h3 className="text-xs font-semibold uppercase tracking-widest text-[#121212]">Shauna</h3>
<p className="text-[0.6rem] text-[#121212]/40 uppercase tracking-wide font-medium">Creative Director</p>
</div>
</div>
</div>

<div className="hover:border-[#B76E79]/30 transition-all duration-500 group bg-[#FBF9F6] border-[#121212]/5 border p-10 shadow-sm">
<div className="flex items-center gap-1 mb-6 text-[#B76E79]">
<iconify-icon height="12" icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon height="12" icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon height="12" icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon height="12" icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon height="12" icon="solar:star-bold" width="12"></iconify-icon>
</div>
<p className="leading-relaxed text-lg italic text-[#121212] font-serif mb-10">
                        "The 'Panic Reset' is a lifesaver before big meetings. I go from heart racing to calm and collected in 3 minutes."
                    </p>
<div className="flex items-center gap-4">
<div className="flex text-lg italic text-white font-serif bg-[#121212] w-10 h-10 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6d9661d9-4f12-402b-80b7-6641508218f9_320w.jpg?w=800&amp;q=80)] bg-cover bg-center rounded-full items-center justify-center">S</div>
<div className="">
<h3 className="uppercase text-xs font-semibold text-[#121212] tracking-widest">Sarah</h3>
<p className="text-[0.6rem] text-[#121212]/40 uppercase tracking-wide font-medium">Executive</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative bg-[#F6F1EA] border-[#121212]/5 border-t pt-32 pb-32 px-6 overflow-hidden">

<div className="absolute inset-0 bg-grain opacity-50 mix-blend-multiply pointer-events-none"></div>
<div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-[#B76E79]/10 rounded-full blur-3xl pointer-events-none mix-blend-multiply"></div>
<div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#D4C4A8]/20 rounded-full blur-3xl pointer-events-none"></div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-[#121212]/5 to-transparent pointer-events-none"></div>
<div className="max-w-3xl mx-auto relative z-10">
<div className="text-center mb-16">
<span className="text-[#B76E79] font-bold text-[0.65rem] tracking-[0.2em] uppercase mb-4 block flex items-center justify-center gap-2">
<span className="w-2 h-2 rounded-full bg-[#B76E79]"></span>
                Support
            </span>
<h2 className="text-4xl md:text-5xl font-serif text-[#121212] tracking-tight">Common Questions</h2>
</div>
<div className="space-y-4">

<details className="group bg-white p-6 md:p-8 rounded-sm border border-[#121212]/5 shadow-sm hover:shadow-[#B76E79]/10 hover:border-[#B76E79]/20 transition-all duration-300 cursor-pointer">
<summary className="flex justify-between items-center list-none font-medium text-[#121212] text-lg font-serif italic">
<span className="group-open:text-[#B76E79] transition-colors duration-300">Is this just meditation?</span>
<span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#F6F1EA] text-[#121212]/40 group-open:bg-[#B76E79] group-open:text-white transition-all duration-300 border border-[#121212]/5">
<iconify-icon className="group-open:rotate-180 transition-transform duration-300" height="20" icon="solar:alt-arrow-down-linear" strokeWidth="1.5" width="20"></iconify-icon>
</span>
</summary>
<p className="text-base text-[#121212]/70 mt-6 leading-relaxed pl-4 border-l-2 border-[#B76E79] font-light opacity-0 -translate-y-2 group-open:opacity-100 group-open:translate-y-0 transition-all duration-500 delay-75">
                    No. Meditation usually asks you to clear your mind. This asks you to connect with your body. It is an active process designed to get you moving again, not just sitting still.
                </p>
</details>

<details className="group bg-white p-6 md:p-8 rounded-sm border border-[#121212]/5 shadow-sm hover:shadow-[#B76E79]/10 hover:border-[#B76E79]/20 transition-all duration-300 cursor-pointer">
<summary className="flex justify-between items-center list-none font-medium text-[#121212] text-lg font-serif italic">
<span className="group-open:text-[#B76E79] transition-colors duration-300">What if I'm not anxious, just stuck?</span>
<span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#F6F1EA] text-[#121212]/40 group-open:bg-[#B76E79] group-open:text-white transition-all duration-300 border border-[#121212]/5">
<iconify-icon className="group-open:rotate-180 transition-transform duration-300" height="20" icon="solar:alt-arrow-down-linear" strokeWidth="1.5" width="20"></iconify-icon>
</span>
</summary>
<div className="text-base text-[#121212]/70 mt-6 leading-relaxed pl-4 border-l-2 border-[#B76E79] font-light opacity-0 -translate-y-2 group-open:opacity-100 group-open:translate-y-0 transition-all duration-500 delay-75">
                    This is perfect for you. "Stuck" is actually a mild form of the freeze response. You might feel numb or heavy instead of scared. CLIMB works perfectly to lift that heaviness.
                </div>
</details>

<details className="group bg-white p-6 md:p-8 rounded-sm border border-[#121212]/5 shadow-sm hover:shadow-[#B76E79]/10 hover:border-[#B76E79]/20 transition-all duration-300 cursor-pointer">
<summary className="flex justify-between items-center list-none font-medium text-[#121212] text-lg font-serif italic">
<span className="group-open:text-[#B76E79] transition-colors duration-300">How do I get the files?</span>
<span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#F6F1EA] text-[#121212]/40 group-open:bg-[#B76E79] group-open:text-white transition-all duration-300 border border-[#121212]/5">
<iconify-icon className="group-open:rotate-180 transition-transform duration-300" height="20" icon="solar:alt-arrow-down-linear" strokeWidth="1.5" width="20"></iconify-icon>
</span>
</summary>
<p className="text-base text-[#121212]/70 mt-6 leading-relaxed pl-4 border-l-2 border-[#B76E79] font-light opacity-0 -translate-y-2 group-open:opacity-100 group-open:translate-y-0 transition-all duration-500 delay-75">
                    You will get an email immediately after you buy it. You can listen online or download the files to your phone.
                </p>
</details>
</div>
</div>
</section>

<footer className="bg-[#121212] text-[#F6F1EA] pt-24 pb-12 px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
<div className="flex items-center gap-3">
<iconify-icon className="text-[#B76E79]" height="20" icon="solar:gem-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-xl font-serif tracking-tight">GemCoaching</span>
</div>
<div className="flex gap-8">
<a className="text-xs font-medium tracking-widest uppercase text-[#F6F1EA]/60 hover:text-[#B76E79] transition-colors" href="#">Terms</a>
<a className="text-xs font-medium tracking-widest uppercase text-[#F6F1EA]/60 hover:text-[#B76E79] transition-colors" href="#">Privacy</a>
<a className="text-xs font-medium tracking-widest uppercase text-[#F6F1EA]/60 hover:text-[#B76E79] transition-colors" href="#">Contact</a>
</div>
</div>
<div className="max-w-7xl mx-auto mt-20 border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-end gap-6">
<p className="text-[0.65rem] text-[#F6F1EA]/40 max-w-lg leading-relaxed uppercase tracking-wide">
                Disclaimer: CLIMB is for self-regulation. It is not medical advice.
            </p>
<p className="text-[0.65rem] text-[#F6F1EA]/40 uppercase tracking-wide">© 2024 GemCoaching. Elite.</p>
</div>
</footer>

    </>
  );
}
