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
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75, 90, 180];
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
transform: `translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0)) rotateX(var(--tw-rotate-x, 0)) rotateY(var(--tw-rotate-y, 0)) rotateZ(var(--tw-rotate-z, 0)) skewX(var(--tw-skew-x, 0)) skewY(var(--tw-skew-y, 0)) scaleX(var(--tw-scale-x, 1)) scaleY(var(--tw-scale-y, 1))`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0)) rotateX(var(--tw-rotate-x, 0)) rotateY(var(--tw-rotate-y, 0)) rotateZ(var(--tw-rotate-z, 0)) skewX(var(--tw-skew-x, 0)) skewY(var(--tw-skew-y, 0)) scaleX(var(--tw-scale-x, 1)) scaleY(var(--tw-scale-y, 1))`.replace(/\\s+/g, ' ').trim(),
};
});
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-1000": { perspective: "1000px" },
};
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



        // Loading Screen Logic
        window.addEventListener('load', () => {
            setTimeout(() => {
                const loader = document.getElementById('loader');
                loader.classList.add('loader-hidden');
                setTimeout(() => {
                    loader.style.display = 'none';
                }, 500);
            }, 1500);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center" id="loader">
<div className="relative mb-8">
<h1 className="glitch-load text-4xl font-bold tracking-tighter text-white uppercase" data-text="MS GIRI">MS GIRI</h1>
</div>
<div className="w-64 h-1 bg-neutral-900 rounded-full overflow-hidden relative">
<div className="scan-line absolute top-0 left-0"></div>
</div>
<div className="mt-4 text-xs font-mono text-blue-500 animate-pulse">OPTIMIZING ASSETS...</div>
</div>

<nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/80 border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<span className="w-2 h-2 bg-blue-600 rounded-sm rotate-45 group-hover:animate-spin border border-blue-400/50"></span>
<span className="text-sm font-semibold tracking-tight text-white uppercase group-hover:text-blue-500 transition-colors">
                    MS Giri
                </span>
</a>
<div className="hidden md:flex items-center space-x-8 text-[11px] font-medium tracking-widest text-neutral-400 uppercase">
<a className="hover:text-white transition-colors" href="#nexus">Home</a>
<a className="hover:text-white transition-colors" href="#portfolio">Portfolio</a>
<a className="hover:text-white transition-colors" href="#about">About</a>
<a className="hover:text-white transition-colors" href="#blog">Blog</a>
<a className="hover:text-white transition-colors" href="#services">Services</a>
</div>
<a className="hidden md:flex items-center gap-2 bg-white text-black px-4 py-1.5 rounded-sm text-[11px] font-bold uppercase hover:bg-neutral-200 transition-colors tracking-tight" href="#transmission">
<span>Get In Touch</span>
<iconify-icon icon="solar:arrow-right-up-linear" width="14"></iconify-icon>
</a>
<button className="md:hidden text-white">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<header className="relative h-[90vh] bg-black overflow-hidden flex flex-col items-center justify-center" id="nexus">

<div className="absolute inset-0 z-0 opacity-30" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.15) 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
<div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-black/50 to-black pointer-events-none"></div>
<div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-900/10 mb-6 backdrop-blur-sm">
<span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
<span className="text-[10px] uppercase tracking-widest text-blue-300">SEO Expert &amp; Digital Strategist</span>
</div>
<h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-white mb-6 leading-[0.9]">
                SMARTER SEO,<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">STRONGER BRANDS</span>
</h1>
<p className="text-neutral-400 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
                Specializing in SEO, graphic design, and social media to help brands grow online. I combine strategy and creativity to deliver impactful digital solutions.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4">
<a className="neon-glow-btn px-8 py-4 bg-blue-900/50 border border-blue-500/50 text-white font-bold tracking-widest uppercase rounded-sm hover:bg-blue-800 transition-colors text-xs" href="#transmission">
                    Start Project
                </a>
<a className="px-8 py-4 bg-transparent border border-white/10 text-white font-bold tracking-widest uppercase rounded-sm hover:bg-white/5 transition-colors text-xs" href="#portfolio">
                    View Portfolio
                </a>
</div>
</div>

<div className="absolute bottom-10 left-0 w-full z-20 border-y border-white/10 bg-black/30 backdrop-blur-sm py-4">
<div className="marquee-container">
<div className="marquee-content">
<span className="text-4xl md:text-6xl font-bold tracking-tighter text-white uppercase px-4 inline-block opacity-50">Search Engine Optimization</span>
<span className="text-4xl md:text-6xl font-bold tracking-tighter text-transparent stroke-text uppercase px-4 inline-block" style={{WebkitTextStroke: '1px rgba(59, 130, 246, 0.5)'}}>Graphic Design</span>
<span className="text-4xl md:text-6xl font-bold tracking-tighter text-white uppercase px-4 inline-block opacity-50">Social Media Marketing</span>
<span className="text-4xl md:text-6xl font-bold tracking-tighter text-transparent stroke-text uppercase px-4 inline-block" style={{WebkitTextStroke: '1px rgba(59, 130, 246, 0.5)'}}>Brand Growth</span>
</div>
</div>
</div>
</header>

<section className="py-24 relative overflow-hidden" id="about">
<div className="max-w-7xl mx-auto px-6 space-y-24">

<div className="relative">
<div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-900 rounded-full blur-[100px] opacity-40"></div>
<div className="glass-panel p-8 md:p-12 rounded-2xl relative z-10 max-w-4xl mx-auto text-center border-l-4 border-l-blue-600">
<h2 className="text-xs font-mono text-blue-400 mb-6 uppercase tracking-widest">[ SYSTEM_PROFILE: MS GIRI ]</h2>
<p className="text-lg md:text-2xl text-neutral-200 font-light leading-relaxed tracking-tight">
                        With <span className="font-semibold text-white">3 years of SEO expertise</span> and a passion for design and social media, I bring both strategy and creativity to every project. My goal is to help brands grow, engage, and achieve measurable results online at a very affordable price.
                    </p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
<div className="md:col-span-4">
<h3 className="text-3xl font-bold tracking-tight text-white mb-2">EXPERIENCE</h3>
<p className="text-neutral-500 text-sm">Professional Trajectory</p>
</div>
<div className="md:col-span-8 relative">

<div className="absolute top-1/2 left-0 w-full h-[1px] bg-neutral-800 -translate-y-1/2 hidden md:block"></div>
<div className="absolute top-1/2 left-0 w-3/4 h-[1px] bg-gradient-to-r from-blue-900 to-transparent -translate-y-1/2 hidden md:block shadow-[0_0_10px_#1e3a8a]"></div>
<div className="flex flex-col md:flex-row justify-between gap-8 relative z-10">
<div className="bg-black border border-blue-900/30 p-6 rounded-lg w-full md:w-64 group hover:border-blue-600 transition-colors">
<div className="text-4xl font-bold text-white mb-1 group-hover:text-blue-500 transition-colors">3+</div>
<div className="text-[10px] uppercase tracking-widest text-neutral-500 mb-4">Years Experience</div>
<p className="text-xs text-neutral-400 leading-relaxed">
                                Delivering proven results in <span className="text-white">SEO &amp; Marketing</span>.
                            </p>
</div>
<div className="bg-black border border-blue-900/30 p-6 rounded-lg w-full md:w-64 group hover:border-blue-600 transition-colors md:ml-auto">
<div className="text-4xl font-bold text-white mb-1 group-hover:text-blue-500 transition-colors">10+</div>
<div className="text-[10px] uppercase tracking-widest text-neutral-500 mb-4">Brands Scaled</div>
<p className="text-xs text-neutral-400 leading-relaxed">
                                Including Illume LED, Exclusive Emporium, and more.
                            </p>
</div>
</div>
</div>
</div>

<div className="border-t border-white/5 pt-12">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10">
<div>
<h3 className="text-xl font-bold tracking-tight text-white uppercase mb-2">Based in Nepal</h3>
<p className="text-sm text-neutral-400 max-w-lg">
                            Serving clients locally and globally with top-tier digital strategies.
                        </p>
</div>
<div className="flex gap-2 text-[10px] font-mono text-blue-400 uppercase border border-blue-900/40 bg-blue-950/50 px-3 py-1 mt-4 md:mt-0 rounded-full">
<span className="animate-pulse">●</span> Available for Hire
                    </div>
</div>

<div className="relative w-full h-[300px] bg-neutral-900/30 rounded-xl border border-white/5 overflow-hidden group">

<div className="absolute inset-0" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>

<div className="absolute inset-0 flex items-center justify-center opacity-20">
<svg className="text-white w-full h-full" fill="currentColor" viewbox="0 0 1000 500">
<path d="M220,150 Q250,120 280,150 T340,180 T400,250 T350,350 T250,300 T220,150 M550,100 Q600,80 650,120 T700,200 T650,300 T550,250 T550,100 M800,150 Q850,130 900,160 T920,250 T850,300 T800,150"></path>
</svg>
</div>

<div className="map-dot top-[38%] left-[68%] active"></div>

<svg className="absolute inset-0 w-full h-full pointer-events-none stroke-blue-800 stroke-[1] fill-none">
<circle className="animate-ping stroke-blue-500" cx="68%" cy="38%" r="5"></circle>
<circle className="stroke-blue-900 opacity-50" cx="68%" cy="38%" r="20"></circle>
</svg>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-white/5 bg-black/20" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="flex items-center gap-3 mb-12">
<iconify-icon className="text-blue-500" icon="solar:layers-minimalistic-linear" width="20"></iconify-icon>
<h2 className="text-xs font-bold tracking-widest text-neutral-500 uppercase">Core Protocols // Digital Solutions</h2>
</div>
<div className="flex flex-col md:flex-row h-[600px] gap-2">

<div className="group relative flex-accordion flex-1 hover:flex-[2] bg-neutral-900/50 border border-white/10 overflow-hidden cursor-pointer">
<div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-500"></div>
<div className="absolute inset-0 p-8 flex flex-col justify-end transition-opacity duration-300 group-hover:opacity-0">
<span className="text-4xl font-bold text-white/10 absolute top-6 right-6">01</span>
<h3 className="text-lg font-bold text-white uppercase tracking-tighter rotate-0 md:-rotate-90 md:origin-bottom-left md:translate-x-8 md:-translate-y-8 whitespace-nowrap">SEO Strategy</h3>
</div>
<div className="absolute inset-0 p-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 flex flex-col justify-center">
<iconify-icon className="text-blue-500 mb-4" icon="solar:graph-up-linear" width="32"></iconify-icon>
<h3 className="text-2xl font-bold text-white uppercase tracking-tighter mb-4">Search Engine Optimization</h3>
<p className="text-neutral-400 text-sm leading-relaxed">Data-driven strategies to boost your ranking, drive organic traffic, and outpace the competition.</p>
</div>
</div>

<div className="group relative flex-accordion flex-1 hover:flex-[2] bg-neutral-900/50 border border-white/10 overflow-hidden cursor-pointer">
<div className="absolute inset-0 bg-gradient-to-b from-blue-800/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute inset-0 p-8 flex flex-col justify-end transition-opacity duration-300 group-hover:opacity-0">
<span className="text-4xl font-bold text-white/10 absolute top-6 right-6">02</span>
<h3 className="text-lg font-bold text-white uppercase tracking-tighter rotate-0 md:-rotate-90 md:origin-bottom-left md:translate-x-8 md:-translate-y-8 whitespace-nowrap">Graphic Design</h3>
</div>
<div className="absolute inset-0 p-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 flex flex-col justify-center">
<iconify-icon className="text-blue-400 mb-4" icon="solar:pen-new-square-linear" width="32"></iconify-icon>
<h3 className="text-2xl font-bold text-white uppercase tracking-tighter mb-4">Visual Identity</h3>
<p className="text-neutral-400 text-sm leading-relaxed">Creating compelling visuals, logos, and branding materials that resonate with your target audience.</p>
</div>
</div>

<div className="group relative flex-accordion flex-1 hover:flex-[2] bg-neutral-900/50 border border-white/10 overflow-hidden cursor-pointer">
<div className="absolute inset-0 bg-gradient-to-b from-blue-700/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute inset-0 p-8 flex flex-col justify-end transition-opacity duration-300 group-hover:opacity-0">
<span className="text-4xl font-bold text-white/10 absolute top-6 right-6">03</span>
<h3 className="text-lg font-bold text-white uppercase tracking-tighter rotate-0 md:-rotate-90 md:origin-bottom-left md:translate-x-8 md:-translate-y-8 whitespace-nowrap">Social Media</h3>
</div>
<div className="absolute inset-0 p-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 flex flex-col justify-center">
<iconify-icon className="text-blue-300 mb-4" icon="solar:chat-round-like-linear" width="32"></iconify-icon>
<h3 className="text-2xl font-bold text-white uppercase tracking-tighter mb-4">Social Growth</h3>
<p className="text-neutral-400 text-sm leading-relaxed">Strategic content planning and management to increase engagement and follower growth.</p>
</div>
</div>

<div className="group relative flex-accordion flex-1 hover:flex-[2] bg-neutral-900/50 border border-white/10 overflow-hidden cursor-pointer">
<div className="absolute inset-0 bg-gradient-to-b from-indigo-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute inset-0 p-8 flex flex-col justify-end transition-opacity duration-300 group-hover:opacity-0">
<span className="text-4xl font-bold text-white/10 absolute top-6 right-6">04</span>
<h3 className="text-lg font-bold text-white uppercase tracking-tighter rotate-0 md:-rotate-90 md:origin-bottom-left md:translate-x-8 md:-translate-y-8 whitespace-nowrap">Web Growth</h3>
</div>
<div className="absolute inset-0 p-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 flex flex-col justify-center">
<iconify-icon className="text-indigo-400 mb-4" icon="solar:rocket-linear" width="32"></iconify-icon>
<h3 className="text-2xl font-bold text-white uppercase tracking-tighter mb-4">Brand Strategy</h3>
<p className="text-neutral-400 text-sm leading-relaxed">Holistic approaches to scale your digital presence and convert visitors into loyal customers.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 overflow-hidden" id="portfolio">
<div className="max-w-7xl mx-auto px-6 mb-12">
<span className="text-xs font-mono text-blue-500 mb-2 block">/// PROJECT_ARCHIVE</span>
<h2 className="text-3xl font-bold tracking-tight text-white uppercase mb-6">Recent Work</h2>
<div className="flex flex-wrap gap-4 text-[10px] font-bold uppercase tracking-widest text-neutral-400">
<a className="hover:text-white border-b border-transparent hover:border-white transition-colors" href="#">SEO</a>
<span>/</span>
<a className="hover:text-white border-b border-transparent hover:border-white transition-colors" href="#">Branding</a>
<span>/</span>
<a className="hover:text-white border-b border-transparent hover:border-white transition-colors" href="#">Social Media</a>
</div>
</div>
<div className="w-full overflow-x-auto pb-12 px-6 scrollbar-hide snap-x snap-mandatory">
<div className="flex gap-6 w-max">

<div className="group w-[320px] h-[450px] perspective-1000 cursor-pointer snap-center">
<div className="relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:rotate-y-180">
<div className="absolute w-full h-full backface-hidden bg-neutral-900 border border-white/10 rounded-xl overflow-hidden">
<div className="w-full h-full bg-gradient-to-tr from-blue-900 to-black flex flex-col justify-end p-8">
<h3 className="text-2xl font-bold text-white uppercase leading-none mb-1">Illume<br/>LED</h3>
<p className="text-[10px] text-blue-300 font-mono">BRANDING / LOGO</p>
</div>
</div>
<div className="absolute w-full h-full backface-hidden rotate-y-180 bg-black border border-blue-500/30 rounded-xl overflow-hidden p-8 flex flex-col justify-center text-center">
<span className="text-xs font-mono text-blue-500 mb-4">PROJECT DETAILS</span>
<h3 className="text-xl font-bold text-white uppercase mb-2">Illume LED</h3>
<p className="text-neutral-400 text-xs mb-6 leading-relaxed">Comprehensive branding and logo design for a modern LED lighting company.</p>
<span className="text-[10px] text-neutral-500 uppercase tracking-widest">Featured Client</span>
</div>
</div>
</div>

<div className="group w-[320px] h-[450px] perspective-1000 cursor-pointer snap-center">
<div className="relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:rotate-y-180">
<div className="absolute w-full h-full backface-hidden bg-neutral-900 border border-white/10 rounded-xl overflow-hidden">
<div className="w-full h-full bg-gradient-to-tr from-indigo-900 to-black flex flex-col justify-end p-8">
<h3 className="text-2xl font-bold text-white uppercase leading-none mb-1">Exclusive<br/>Emporium</h3>
<p className="text-[10px] text-indigo-300 font-mono">E-COMMERCE SEO</p>
</div>
</div>
<div className="absolute w-full h-full backface-hidden rotate-y-180 bg-black border border-indigo-500/30 rounded-xl overflow-hidden p-8 flex flex-col justify-center text-center">
<span className="text-xs font-mono text-indigo-500 mb-4">PROJECT DETAILS</span>
<h3 className="text-xl font-bold text-white uppercase mb-2">Exclusive Emporium</h3>
<p className="text-neutral-400 text-xs mb-6 leading-relaxed">Full SEO audit and optimization strategy resulting in increased organic traffic.</p>
<span className="text-[10px] text-neutral-500 uppercase tracking-widest">Case Study</span>
</div>
</div>
</div>

<div className="group w-[320px] h-[450px] perspective-1000 cursor-pointer snap-center">
<div className="relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:rotate-y-180">
<div className="absolute w-full h-full backface-hidden bg-neutral-900 border border-white/10 rounded-xl overflow-hidden">
<div className="w-full h-full bg-gradient-to-tr from-sky-900 to-black flex flex-col justify-end p-8">
<h3 className="text-2xl font-bold text-white uppercase leading-none mb-1">Orbita<br/>Systems</h3>
<p className="text-[10px] text-sky-400 font-mono">DIGITAL IDENTITY</p>
</div>
</div>
<div className="absolute w-full h-full backface-hidden rotate-y-180 bg-black border border-sky-600/30 rounded-xl overflow-hidden p-8 flex flex-col justify-center text-center">
<span className="text-xs font-mono text-sky-500 mb-4">PROJECT DETAILS</span>
<h3 className="text-xl font-bold text-white uppercase mb-2">Orbita</h3>
<p className="text-neutral-400 text-xs mb-6 leading-relaxed">Modern visual identity and social media templates for a tech-focused brand.</p>
<span className="text-[10px] text-neutral-500 uppercase tracking-widest">Client Work</span>
</div>
</div>
</div>

<div className="group w-[320px] h-[450px] perspective-1000 cursor-pointer snap-center">
<div className="relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:rotate-y-180">
<div className="absolute w-full h-full backface-hidden bg-neutral-900 border border-white/10 rounded-xl overflow-hidden">
<div className="w-full h-full bg-gradient-to-tr from-blue-800 to-black flex flex-col justify-end p-8">
<h3 className="text-2xl font-bold text-white uppercase leading-none mb-1">Home Light<br/>Electricals</h3>
<p className="text-[10px] text-blue-300 font-mono">LOCAL SEO</p>
</div>
</div>
<div className="absolute w-full h-full backface-hidden rotate-y-180 bg-black border border-blue-500/30 rounded-xl overflow-hidden p-8 flex flex-col justify-center text-center">
<span className="text-xs font-mono text-blue-500 mb-4">PROJECT DETAILS</span>
<h3 className="text-xl font-bold text-white uppercase mb-2">Home Light</h3>
<p className="text-neutral-400 text-xs mb-6 leading-relaxed">Local SEO implementation to improve visibility in regional search results.</p>
<span className="text-[10px] text-neutral-500 uppercase tracking-widest">Client Work</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">

<div className="max-w-7xl mx-auto px-6 mb-20">
<h2 className="text-xs font-mono text-neutral-500 mb-10 text-center uppercase">[ WHY_CHOOSE_ME ]</h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
<div className="animate-float-subtle p-6 bg-white/5 border border-white/10 rounded-lg">
<iconify-icon className="block mx-auto text-blue-500 mb-3" icon="solar:chart-square-linear" width="24"></iconify-icon>
<h4 className="text-xs font-bold text-white uppercase tracking-widest">Measurable Results</h4>
</div>
<div className="animate-float-subtle p-6 bg-white/5 border border-white/10 rounded-lg" style={{animationDelay: '1s'}}>
<iconify-icon className="block mx-auto text-blue-400 mb-3" icon="solar:eye-linear" width="24"></iconify-icon>
<h4 className="text-xs font-bold text-white uppercase tracking-widest">Creative Vision</h4>
</div>
<div className="animate-float-subtle p-6 bg-white/5 border border-white/10 rounded-lg" style={{animationDelay: '2s'}}>
<iconify-icon className="block mx-auto text-indigo-500 mb-3" icon="solar:tuning-square-2-linear" width="24"></iconify-icon>
<h4 className="text-xs font-bold text-white uppercase tracking-widest">Tailored Strategy</h4>
</div>
<div className="animate-float-subtle p-6 bg-white/5 border border-white/10 rounded-lg" style={{animationDelay: '3s'}}>
<iconify-icon className="block mx-auto text-sky-500 mb-3" icon="solar:wallet-money-linear" width="24"></iconify-icon>
<h4 className="text-xs font-bold text-white uppercase tracking-widest">Affordable</h4>
</div>
</div>
</div>

<div className="max-w-7xl mx-auto px-6">
<h2 className="text-2xl font-bold text-white mb-8 tracking-tight uppercase">Client Feedback</h2>
<div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide">

<div className="glass-panel p-8 rounded-xl min-w-[300px] md:min-w-[400px] snap-center">
<div className="flex items-center gap-3 mb-4">
<div className="w-8 h-8 rounded-full bg-blue-900 border border-blue-500/30 flex items-center justify-center font-bold text-xs text-white">S</div>
<div>
<h4 className="text-sm font-bold text-white">Santosh Bhandari</h4>
<p className="text-[10px] text-neutral-400 uppercase">Client</p>
</div>
</div>
<p className="text-sm text-neutral-300 italic leading-relaxed">"When I first reached out to Madhu Sudan, our website barely showed up on Google. Within three months... we started ranking on the first page. Madhu Sudan’s approach is practical, transparent, and most importantly, it works."</p>
</div>

<div className="glass-panel p-8 rounded-xl min-w-[300px] md:min-w-[400px] snap-center">
<div className="flex items-center gap-3 mb-4">
<div className="w-8 h-8 rounded-full bg-blue-900 border border-blue-500/30 flex items-center justify-center font-bold text-xs text-white">B</div>
<div>
<h4 className="text-sm font-bold text-white">Bishal Shakya</h4>
<p className="text-[10px] text-neutral-400 uppercase">Client</p>
</div>
</div>
<p className="text-sm text-neutral-300 italic leading-relaxed">"Madhu has an incredible eye for design and detail. He completely transformed our brand identity—clean, modern, and consistent across all platforms... His mix of creativity and strategy is rare to find."</p>
</div>

<div className="glass-panel p-8 rounded-xl min-w-[300px] md:min-w-[400px] snap-center">
<div className="flex items-center gap-3 mb-4">
<div className="w-8 h-8 rounded-full bg-blue-900 border border-blue-500/30 flex items-center justify-center font-bold text-xs text-white">R</div>
<div>
<h4 className="text-sm font-bold text-white">Rachana</h4>
<p className="text-[10px] text-neutral-400 uppercase">Client</p>
</div>
</div>
<p className="text-sm text-neutral-300 italic leading-relaxed">"We hired Madhu for social media marketing, and the results were outstanding. Engagement rates doubled, and we started getting direct inquiries... Highly recommend his services!"</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black/40" id="team">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-xs font-mono text-neutral-500 mb-8 uppercase">[ THE_PROFESSIONAL ]</h2>
<div className="flex flex-col md:flex-row gap-8 items-center">

<div className="w-full md:w-1/3">
<div className="diagonal-wipe h-96 bg-neutral-900 border border-white/5 relative group cursor-pointer overflow-hidden rounded-lg">
<div className="absolute inset-0 bg-[url('https://msgiri.com.np/wp-content/uploads/2025/09/ms-e1756834742720.jpg')] bg-cover bg-center opacity-80 group-hover:scale-105 transition-all duration-700"></div>
<div className="absolute bottom-0 left-0 p-6 wipe-content w-full bg-gradient-to-t from-black to-transparent">
<h3 className="text-2xl font-bold text-white uppercase tracking-tight relative z-30">Madhu Sudan Giri</h3>
<p className="text-xs font-mono text-blue-500 uppercase relative z-30">SEO &amp; Design Specialist</p>
</div>
</div>
</div>

<div className="w-full md:w-2/3 space-y-6">
<h3 className="text-2xl font-bold text-white uppercase">Bridging Creativity &amp; Data</h3>
<p className="text-neutral-400 leading-relaxed">
                        I specialize in creating digital experiences that not only look good but perform well. By combining technical SEO knowledge with refined graphic design skills, I ensure your brand captures attention and converts visitors.
                    </p>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] uppercase text-blue-300">SEO Audit</span>
<span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] uppercase text-blue-300">Brand Identity</span>
<span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] uppercase text-blue-300">Content Strategy</span>
<span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] uppercase text-blue-300">Social Ads</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 relative" id="transmission">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center gap-12">
<div className="text-center md:text-left">
<h2 className="text-3xl font-bold tracking-tight text-white mb-4">READY TO SCALE?</h2>
<p className="text-neutral-400 mb-6 max-w-md">Let’s collaborate to boost your business with my SEO expertise. Create something impactful today.</p>
<div className="flex flex-col space-y-2 text-sm text-neutral-400 font-mono">
<a className="hover:text-blue-500 transition-colors flex items-center justify-center md:justify-start gap-2" href="https://msgiri.com.np/contact/">
<iconify-icon icon="solar:letter-linear" width="16"></iconify-icon>
                            Contact via Website
                        </a>
<div className="flex items-center justify-center md:justify-start gap-2">
<iconify-icon icon="solar:map-point-linear" width="16"></iconify-icon>
                            Kathmandu, Nepal
                        </div>
</div>
</div>
<a className="neon-glow-btn px-10 py-5 bg-blue-900/40 text-white font-bold tracking-widest uppercase rounded-sm hover:bg-blue-800 transition-colors flex items-center gap-3 border border-blue-500/20" href="https://msgiri.com.np/contact/">
                    Get In Touch
                    <iconify-icon icon="solar:plain-3-linear" width="18"></iconify-icon>
</a>
</div>
<div className="border-t border-white/5 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-[10px] text-neutral-600 uppercase tracking-widest">
                    © 2026 MS Giri. All Rights Reserved.
                </div>
<div className="flex gap-4">
<a className="text-neutral-600 hover:text-white transition-colors" href="#"><iconify-icon icon="brandico:facebook-rect" width="16"></iconify-icon></a>
<a className="text-neutral-600 hover:text-white transition-colors" href="#"><iconify-icon icon="brandico:instagram" width="16"></iconify-icon></a>
<a className="text-neutral-600 hover:text-white transition-colors" href="#"><iconify-icon icon="brandico:linkedin-rect" width="16"></iconify-icon></a>
</div>
</div>
</div>
</section>


    </>
  );
}
