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



        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-[-20%] left-[20%] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,_rgba(212,185,150,0.08)_0%,_transparent_70%)] blur-3xl pointer-events-none z-0"></div>
<div className="fixed bottom-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,_rgba(255,255,255,0.05)_0%,_transparent_70%)] blur-3xl pointer-events-none z-0"></div>

<nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6">
<div className="glass-panel rounded-full px-2 pl-6 py-2 flex items-center justify-between w-full max-w-5xl shadow-[0_8px_32px_rgba(0,0,0,0.3)]">

<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center bg-white/5">
<span className="font-serif italic font-bold text-[#D4B996] text-lg leading-none pt-1">I</span>
</div>
<span className="font-serif tracking-widest text-sm font-medium text-white/90">IVORY</span>
</div>

<div className="hidden md:flex items-center gap-1 bg-white/5 rounded-full p-1 border border-white/5">
<a className="px-5 py-1.5 rounded-full text-xs font-medium text-black bg-[#D4B996] shadow-[0_0_15px_rgba(212,185,150,0.3)] transition-all" href="#">Home</a>
<a className="px-5 py-1.5 rounded-full text-xs font-medium text-gray-400 hover:text-white transition-colors" href="#">Services</a>
<a className="px-5 py-1.5 rounded-full text-xs font-medium text-gray-400 hover:text-white transition-colors" href="#">Doctors</a>
<a className="px-5 py-1.5 rounded-full text-xs font-medium text-gray-400 hover:text-white transition-colors" href="#">Reviews</a>
</div>

<div className="flex items-center gap-3 pr-2">
<button className="w-9 h-9 rounded-full hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-all">
<i className="w-4 h-4" data-lucide="search"></i>
</button>
<button className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:bg-white/10 transition-all group">
<div className="flex flex-col gap-1 items-end">
<span className="w-4 h-px bg-current group-hover:w-3 transition-all"></span>
<span className="w-3 h-px bg-current group-hover:w-4 transition-all"></span>
</div>
</button>
</div>
</div>
</nav>

<main className="relative z-10 pt-32 pb-20 px-6 max-w-[1400px] mx-auto">

<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-32">

<div className="lg:col-span-7 flex flex-col gap-8 relative">

<div className="w-12 h-[1px] bg-gradient-to-r from-[#D4B996] to-transparent mb-2"></div>
<h1 className="font-serif text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.95] tracking-tight">
<span className="block text-gradient-gold glow-text">Crafting the</span>
<span className="block text-white/90 italic font-light pl-2">Perfect Smile</span>
<span className="block text-white/40 text-4xl md:text-5xl lg:text-6xl mt-2 tracking-wide font-thin">for your future.</span>
</h1>
<p className="text-gray-500 font-light max-w-md text-sm leading-relaxed tracking-wide border-l border-white/10 pl-6">
                    Experience dental care reimagined. Where cutting-edge technology meets timeless aesthetics in the heart of the city.
                </p>
<div className="flex items-center gap-6 mt-4">
<button className="group relative px-8 py-3 bg-[#D4B996] text-[#050505] rounded-full overflow-hidden">
<div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
<span className="relative font-medium text-sm tracking-wide flex items-center gap-2">
                            Book Appointment <i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</span>
</button>
<div className="flex items-center gap-3">
<div className="flex -space-x-3">
<div className="w-10 h-10 rounded-full border-2 border-[#050505] bg-gray-800 bg-[url('https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&amp;auto=format&amp;fit=crop&amp;q=60')] bg-cover"></div>
<div className="w-10 h-10 rounded-full border-2 border-[#050505] bg-gray-800 bg-[url('https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&amp;auto=format&amp;fit=crop&amp;q=60')] bg-cover"></div>
<div className="w-10 h-10 rounded-full border-2 border-[#050505] bg-[#1a1a1a] flex items-center justify-center text-[10px] text-white font-medium">+2k</div>
</div>
<div className="flex flex-col">
<div className="flex text-[#D4B996] text-[10px] gap-0.5">
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
</div>
<span className="text-xs text-gray-500">Trusted Patients</span>
</div>
</div>
</div>
</div>

<div className="lg:col-span-5 relative h-[500px] flex items-center justify-center perspective-1000">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(212,185,150,0.15),_transparent_60%)] blur-2xl animate-pulse"></div>

<div className="relative w-full h-full max-w-sm mx-auto animate-float">

<div className="absolute top-10 right-0 left-0 bottom-20 rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl rotate-[-3deg] transition-transform hover:rotate-0 duration-700 group">
<img alt="Dental Interior" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>

<div className="absolute bottom-6 left-6 right-6 backdrop-blur-md bg-white/5 border border-white/10 p-4 rounded-xl">
<div className="flex justify-between items-center mb-2">
<span className="text-xs text-[#D4B996] font-medium tracking-wider uppercase">Dental Spa</span>
<span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
</div>
<p className="text-sm text-gray-300 font-light line-clamp-2">Experience pain-free treatments in our zen-inspired suites.</p>
</div>
</div>

<div className="absolute -right-4 top-20 w-24 h-24 rounded-full bg-[#111] border border-white/10 flex items-center justify-center animate-[spin_10s_linear_infinite]">
<svg className="w-full h-full p-2" viewbox="0 0 100 100">
<defs>
<path d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" id="circle"></path>
</defs>
<text fill="#666" fontSize="11" letter-spacing="2">
<textpath href="#circle">
                                    PREMIUM DENTAL CLINIC • 2024 •
                                </textpath>
</text>
</svg>
<div className="absolute inset-0 flex items-center justify-center">
<i className="w-5 h-5 text-[#D4B996]" data-lucide="sparkles"></i>
</div>
</div>
</div>
</div>
</div>

<div className="mb-32">
<div className="flex flex-col md:flex-row gap-8 items-end">

<div className="w-full md:w-1/2 lg:w-5/12">
<div className="glass-highlight rounded-3xl p-8 relative overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)]">

<div className="absolute top-0 right-0 w-32 h-32 bg-[#D4B996] rounded-full blur-[80px] opacity-10"></div>
<div className="flex justify-between items-center mb-8">
<div>
<h3 className="font-serif text-xl text-white">November</h3>
<p className="text-xs text-gray-500 font-light mt-1">Select your preferred date</p>
</div>
<div className="flex gap-2">
<button className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/5 transition"><i className="w-4 h-4" data-lucide="chevron-left"></i></button>
<button className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/5 transition"><i className="w-4 h-4" data-lucide="chevron-right"></i></button>
</div>
</div>

<div className="grid grid-cols-7 gap-y-4 gap-x-2 text-center mb-6">
<div className="text-[10px] text-gray-600 uppercase tracking-widest font-medium">Mo</div>
<div className="text-[10px] text-gray-600 uppercase tracking-widest font-medium">Tu</div>
<div className="text-[10px] text-gray-600 uppercase tracking-widest font-medium">We</div>
<div className="text-[10px] text-gray-600 uppercase tracking-widest font-medium">Th</div>
<div className="text-[10px] text-gray-600 uppercase tracking-widest font-medium">Fr</div>
<div className="text-[10px] text-gray-600 uppercase tracking-widest font-medium">Sa</div>
<div className="text-[10px] text-gray-600 uppercase tracking-widest font-medium">Su</div>

<span className="text-gray-700 text-sm py-1">29</span>
<span className="text-gray-700 text-sm py-1">30</span>
<span className="text-gray-700 text-sm py-1">31</span>
<span className="text-gray-400 text-sm py-1">1</span>
<span className="text-gray-400 text-sm py-1">2</span>
<span className="text-gray-400 text-sm py-1">3</span>
<span className="text-gray-400 text-sm py-1">4</span>
<span className="text-gray-400 text-sm py-1">5</span>
<span className="text-gray-400 text-sm py-1">6</span>
<span className="text-gray-400 text-sm py-1">7</span>
<span className="relative">
<span className="w-8 h-8 mx-auto flex items-center justify-center rounded-full bg-[#D4B996] text-black text-sm font-medium shadow-[0_0_15px_rgba(212,185,150,0.4)]">8</span>
</span>
<span className="text-gray-400 text-sm py-1">9</span>
<span className="text-gray-400 text-sm py-1">10</span>
<span className="text-gray-400 text-sm py-1">11</span>
<span className="text-gray-400 text-sm py-1">12</span>
<span className="text-gray-400 text-sm py-1">13</span>
<span className="text-gray-400 text-sm py-1">14</span>
<span className="text-gray-400 text-sm py-1">15</span>
<span className="text-gray-400 text-sm py-1">16</span>
<span className="text-gray-400 text-sm py-1">17</span>
<span className="text-gray-400 text-sm py-1">18</span>
</div>

<div className="pt-6 border-t border-white/5">
<div className="flex gap-3 overflow-x-auto hide-scrollbar pb-2">
<button className="flex-shrink-0 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-gray-300 hover:border-[#D4B996]/50 transition">09:30 AM</button>
<button className="flex-shrink-0 px-4 py-2 rounded-xl bg-[#D4B996]/10 border border-[#D4B996] text-xs text-[#D4B996] shadow-[0_0_10px_rgba(212,185,150,0.1)]">11:00 AM</button>
<button className="flex-shrink-0 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-gray-300 hover:border-[#D4B996]/50 transition">02:15 PM</button>
<button className="flex-shrink-0 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-gray-300 hover:border-[#D4B996]/50 transition">04:00 PM</button>
</div>
</div>
</div>
</div>

<div className="w-full md:w-1/2 lg:w-7/12 flex flex-col gap-6">
<div className="flex items-center gap-4 mb-4">
<span className="h-px bg-white/10 flex-grow"></span>
<span className="text-xs font-light text-gray-500 uppercase tracking-widest">Why Choose Us</span>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

<div className="glass-panel p-6 rounded-2xl hover:bg-white/5 transition duration-500 group cursor-default">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform text-[#D4B996]">
<i className="w-5 h-5" data-lucide="microscope"></i>
</div>
<h4 className="text-white text-lg font-serif mb-2">Modern Lab</h4>
<p className="text-gray-500 text-xs font-light leading-relaxed">
                                Equipped with 3D scanners and digital printers for precision.
                            </p>
</div>

<div className="glass-panel p-6 rounded-2xl hover:bg-white/5 transition duration-500 group cursor-default">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform text-[#D4B996]">
<i className="w-5 h-5" data-lucide="shield-check"></i>
</div>
<h4 className="text-white text-lg font-serif mb-2">Lifetime Warranty</h4>
<p className="text-gray-500 text-xs font-light leading-relaxed">
                                We stand by our work with comprehensive guarantee plans.
                            </p>
</div>
</div>

<div className="mt-2 glass-highlight p-6 rounded-2xl flex items-center justify-between">
<div>
<div className="text-xs text-[#D4B996] mb-1">Emergency Service</div>
<div className="text-white font-serif text-lg">Available 24/7</div>
</div>
<button className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:bg-[#D4B996] transition-colors">
<i className="w-5 h-5" data-lucide="phone"></i>
</button>
</div>
</div>
</div>
</div>

<div>
<div className="flex justify-between items-end mb-10 px-2">
<h2 className="font-serif text-3xl text-white">Patient Stories</h2>
<div className="hidden md:flex gap-4 text-sm font-light text-gray-500">
<span className="text-white border-b border-[#D4B996] pb-1 cursor-pointer">All Reviews</span>
<span className="hover:text-white cursor-pointer transition">Orthodontics</span>
<span className="hover:text-white cursor-pointer transition">Implants</span>
</div>
</div>
<div className="flex overflow-x-auto gap-6 hide-scrollbar pb-10 snap-x">

<div className="min-w-[320px] glass-panel p-8 rounded-2xl snap-center relative group">
<i className="absolute top-8 right-8 w-8 h-8 text-white/5 fill-current" data-lucide="quote"></i>
<div className="flex gap-1 text-[#D4B996] mb-6">
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
</div>
<p className="text-sm text-gray-300 font-light leading-loose mb-8">
                        "The atmosphere is unlike any clinic I've been to. It feels more like a wellness center. The results of my veneers are absolutely natural."
                    </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gray-800 bg-[url('https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=1888&amp;auto=format&amp;fit=crop')] bg-cover border border-white/10"></div>
<div>
<div className="text-sm text-white font-medium">Sarah Jenkins</div>
<div className="text-[10px] text-gray-500 uppercase tracking-wider">Veneers</div>
</div>
</div>
</div>

<div className="min-w-[320px] bg-gradient-to-br from-[#1c1c1c] to-[#0a0a0a] border border-[#D4B996]/30 p-8 rounded-2xl snap-center relative shadow-[0_0_30px_rgba(0,0,0,0.5)]">
<div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-[#D4B996] to-transparent opacity-50"></div>
<i className="absolute top-8 right-8 w-8 h-8 text-[#D4B996]/10 fill-current" data-lucide="quote"></i>
<div className="flex gap-1 text-[#D4B996] mb-6">
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
</div>
<p className="text-sm text-gray-200 font-light leading-loose mb-8">
                        "Exceptional service from start to finish. The team handled my complex case with such professionalism. I can finally smile with confidence."
                    </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gray-800 bg-[url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=1887&amp;auto=format&amp;fit=crop')] bg-cover border border-[#D4B996]/50"></div>
<div>
<div className="text-sm text-white font-medium">Michael Ross</div>
<div className="text-[10px] text-[#D4B996] uppercase tracking-wider">Implants</div>
</div>
</div>
</div>

<div className="min-w-[320px] glass-panel p-8 rounded-2xl snap-center relative">
<i className="absolute top-8 right-8 w-8 h-8 text-white/5 fill-current" data-lucide="quote"></i>
<div className="flex gap-1 text-[#D4B996] mb-6">
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
</div>
<p className="text-sm text-gray-300 font-light leading-loose mb-8">
                        "I was nervous about the whitening procedure, but the staff made me feel completely at ease. The zero-sensitivity claim was actually true."
                    </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gray-800 bg-[url('https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&amp;w=2070&amp;auto=format&amp;fit=crop')] bg-cover border border-white/10"></div>
<div>
<div className="text-sm text-white font-medium">Elena K.</div>
<div className="text-[10px] text-gray-500 uppercase tracking-wider">Whitening</div>
</div>
</div>
</div>
</div>
</div>
</main>

<footer className="border-t border-white/5 bg-[#020202] py-12">
<div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-2xl font-serif font-bold text-white tracking-wider">IVORY</div>
<div className="text-xs text-gray-600 font-light">
                © 2024 Ivory Dental Clinic. All rights reserved.
            </div>
<div className="flex gap-6">
<a className="text-gray-500 hover:text-[#D4B996] transition" href="#"><i className="w-4 h-4" data-lucide="instagram"></i></a>
<a className="text-gray-500 hover:text-[#D4B996] transition" href="#"><i className="w-4 h-4" data-lucide="twitter"></i></a>
<a className="text-gray-500 hover:text-[#D4B996] transition" href="#"><i className="w-4 h-4" data-lucide="linkedin"></i></a>
</div>
</div>
</footer>


    </>
  );
}
