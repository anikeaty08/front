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
      

<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
<div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-900/20 rounded-full blur-[120px] animate-float"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-900/10 rounded-full blur-[120px] animate-float-delayed"></div>
<div className="absolute top-[40%] left-[50%] transform -translate-x-1/2 w-[30%] h-[30%] bg-amber-900/10 rounded-full blur-[100px]"></div>
<div className="absolute inset-0 bg-grid opacity-20"></div>
</div>

<nav className="fixed top-0 w-full z-50 backdrop-blur-md border-b border-white/5 bg-slate-950/70">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="text-xl font-medium tracking-tight text-white flex items-center gap-2 group" href="#">
<span className="w-8 h-8 rounded bg-gradient-to-br from-amber-400 to-yellow-600 flex items-center justify-center text-slate-950 font-bold group-hover:scale-110 transition-transform duration-300">M</span>
<span className="tracking-widest uppercase text-sm group-hover:text-amber-400 transition-colors">Subhan</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
<a className="hover:text-white transition-colors relative group" href="#about">
                    About
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="hover:text-white transition-colors relative group" href="#skills">
                    Skills
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="hover:text-white transition-colors relative group" href="#portfolio">
                    Work
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="px-5 py-2 rounded-full border border-white/10 hover:bg-white/5 hover:border-amber-400/50 hover:text-amber-400 transition-all duration-300" href="#contact">
                    Let's Talk
                </a>
</div>

<button className="md:hidden text-white">
<span className="iconify" data-icon="lucide:menu" data-width="24"></span>
</button>
</div>
</nav>

<header className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden perspective-1000">

<div className="absolute inset-0 flex items-center justify-center z-0 opacity-30 pointer-events-none">
<div className="w-[600px] h-[600px] border border-white/5 rounded-full absolute animate-spin-slow"></div>
<div className="w-[450px] h-[450px] border border-white/10 rounded-full absolute animate-spin-slow" style={{animationDirection: 'reverse', animationDuration: '25s'}}></div>
<div className="w-[300px] h-[300px] border border-amber-500/20 rounded-full absolute animate-spin-slow" style={{animationDuration: '15s'}}></div>
</div>
<div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6 animate-float">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
<span className="text-xs uppercase tracking-widest text-slate-300">Available for Freelance</span>
</div>
<h1 className="text-6xl md:text-8xl font-medium tracking-tighter text-white mb-4 leading-tight">
                MOHD <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-600 text-glow-gold">SUBHAN</span>
</h1>
<div className="h-8 md:h-12 overflow-hidden mb-6">
<div className="flex flex-col items-center animate-[float_4s_ease-in-out_infinite]">
<span className="text-lg md:text-2xl text-cyan-400 font-light tracking-widest uppercase block mb-12">Web Designer</span>
</div>
</div>
<p className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                I design visually powerful, performance-driven digital experiences that blend <span className="text-white font-normal">creativity</span> with modern <span className="text-white font-normal">technology</span>.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4">
<a className="w-full md:w-auto px-8 py-3 bg-white text-slate-950 rounded-full font-medium hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)]" href="#portfolio">
                    View Portfolio
                </a>
<a className="w-full md:w-auto px-8 py-3 border border-white/20 rounded-full text-white font-medium hover:bg-white/5 hover:border-white/40 transition-all duration-300 flex items-center justify-center gap-2 group" href="#contact">
                    Hire Me
                    <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="18"></span>
</a>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
<span className="iconify text-white" data-icon="lucide:chevrons-down" data-width="24"></span>
</div>
</header>

<section className="py-24 relative z-10" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 items-center">

<div className="relative group perspective-1000">
<div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 rounded-2xl blur-2xl transform group-hover:scale-105 transition-transform duration-500"></div>
<div className="relative w-full aspect-square rounded-2xl border border-white/10 bg-slate-900/50 backdrop-blur-xl overflow-hidden shadow-2xl card-3d flex items-center justify-center">

<div className="text-center">
<div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-b from-slate-700 to-slate-900 flex items-center justify-center mb-6 ring-2 ring-white/20 shadow-lg relative overflow-hidden">
<span className="iconify text-slate-500 w-16 h-16" data-icon="lucide:user" data-width="64"></span>

<div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent"><img src="https://scontent.fknu1-6.fna.fbcdn.net/v/t39.30808-6/602905681_844065638606512_615413257261496638_n.jpg?_nc_cat=103&amp;ccb=1-7&amp;_nc_sid=1d70fc&amp;_nc_ohc=2a24_SvIIs8Q7kNvwF9QcL6&amp;_nc_oc=AdqmGHV6UBlVkqXZMTI6gCmeSyQRhZhOY5ehL__RttbFCXRtPdgRIl3uQvHzZcotQms&amp;_nc_zt=23&amp;_nc_ht=scontent.fknu1-6.fna&amp;_nc_gid=Z0yyj3XcVbuqTRzFlOznOg&amp;_nc_ss=7a3a8&amp;oh=00_Af1gKjWap4ebiO-9LNDCtWXdqK14tjQthFLzjMXXgQAIHA&amp;oe=69D52989"/> </div>
</div>
<h3 className="text-2xl text-white font-medium mb-1">Mohd Subhan</h3>
<p className="text-sm text-slate-500">Miranpur Katra, Shahjahanpur</p>
</div>
</div>

<div className="absolute -bottom-6 -right-6 bg-slate-900 border border-white/10 p-4 rounded-xl shadow-xl animate-float-delayed backdrop-blur-md">
<div className="flex items-center gap-3">
<span className="iconify text-amber-400" data-icon="lucide:award" data-width="24"></span>
<div>
<p className="text-xs text-slate-400 uppercase tracking-wider">Education</p>
<p className="text-sm text-white font-medium">A B V Inter Collage</p>
</div>
</div>
</div>
</div>

<div>
<h2 className="text-sm font-medium text-cyan-400 tracking-widest uppercase mb-2">Who I Am</h2>
<h3 className="text-3xl md:text-5xl font-medium text-white mb-6 tracking-tight">Creative mind meets <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">technical precision</span>.</h3>
<div className="space-y-6 text-slate-400 font-light text-lg">
<p>
                            Passionate creative professional with expertise in web design, graphic design, and coding. I focus on creating clean UI, powerful branding, and user-centric designs that leave a lasting impact.
                        </p>
<p>
                            Located in <span className="text-white font-normal">Miranpur Katra, Shahjahanpur</span>, I work with clients globally to bring their visions to life through pixels and code.
                        </p>
</div>
<div className="grid grid-cols-3 gap-6 mt-10 border-t border-white/10 pt-10">
<div>
<span className="block text-3xl font-semibold text-white mb-1">20+</span>
<span className="text-xs text-slate-500 uppercase tracking-wider">Projects Done</span>
</div>
<div>
<span className="block text-3xl font-semibold text-white mb-1">3+</span>
<span className="text-xs text-slate-500 uppercase tracking-wider">Years Exp.</span>
</div>
<div>
<span className="block text-3xl font-semibold text-white mb-1">100%</span>
<span className="text-xs text-slate-500 uppercase tracking-wider">Satisfaction</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black/30" id="skills">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12">
<div>
<h2 className="text-sm font-medium text-amber-400 tracking-widest uppercase mb-2">My Expertise</h2>
<h3 className="text-3xl md:text-4xl font-medium text-white tracking-tight">Tools &amp; Technologies</h3>
</div>
<p className="text-slate-400 max-w-sm mt-4 md:mt-0 text-right text-sm">
                    A blend of design software and coding languages to create complete digital solutions.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative bg-slate-900/40 border border-white/5 p-6 rounded-xl hover:border-cyan-500/30 transition-all duration-500 hover:bg-slate-900/60">
<div className="flex items-center justify-between mb-4">
<span className="iconify text-cyan-400" data-icon="lucide:code-2" data-width="32"></span>
<span className="text-2xl font-semibold text-white opacity-20 group-hover:opacity-100 transition-opacity">90%</span>
</div>
<h4 className="text-xl text-white font-medium mb-2">Web Development</h4>
<p className="text-sm text-slate-400 mb-4">HTML, CSS, JavaScript</p>
<div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-cyan-400 w-[90%] shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>
</div>
</div>

<div className="group relative bg-slate-900/40 border border-white/5 p-6 rounded-xl hover:border-purple-500/30 transition-all duration-500 hover:bg-slate-900/60">
<div className="flex items-center justify-between mb-4">
<span className="iconify text-purple-400" data-icon="lucide:palette" data-width="32"></span>
<span className="text-2xl font-semibold text-white opacity-20 group-hover:opacity-100 transition-opacity">95%</span>
</div>
<h4 className="text-xl text-white font-medium mb-2">Graphic Design</h4>
<p className="text-sm text-slate-400 mb-4">Photoshop Expert</p>
<div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-purple-400 w-[95%] shadow-[0_0_10px_rgba(192,132,252,0.5)]"></div>
</div>
</div>

<div className="group relative bg-slate-900/40 border border-white/5 p-6 rounded-xl hover:border-green-500/30 transition-all duration-500 hover:bg-slate-900/60">
<div className="flex items-center justify-between mb-4">
<span className="iconify text-green-400" data-icon="lucide:pen-tool" data-width="32"></span>
<span className="text-2xl font-semibold text-white opacity-20 group-hover:opacity-100 transition-opacity">85%</span>
</div>
<h4 className="text-xl text-white font-medium mb-2">Vector Art</h4>
<p className="text-sm text-slate-400 mb-4">CorelDRAW Expert</p>
<div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-green-400 w-[85%] shadow-[0_0_10px_rgba(74,222,128,0.5)]"></div>
</div>
</div>

<div className="group relative bg-slate-900/40 border border-white/5 p-6 rounded-xl hover:border-blue-500/30 transition-all duration-500 hover:bg-slate-900/60">
<div className="flex items-center justify-between mb-4">
<span className="iconify text-blue-400" data-icon="lucide:layout" data-width="32"></span>
<span className="text-2xl font-semibold text-white opacity-20 group-hover:opacity-100 transition-opacity">80%</span>
</div>
<h4 className="text-xl text-white font-medium mb-2">UI/UX Design</h4>
<p className="text-sm text-slate-400 mb-4">Figma, Wireframing</p>
<div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-blue-400 w-[80%] shadow-[0_0_10px_rgba(96,165,250,0.5)]"></div>
</div>
</div>

<div className="group relative bg-slate-900/40 border border-white/5 p-6 rounded-xl hover:border-orange-500/30 transition-all duration-500 hover:bg-slate-900/60">
<div className="flex items-center justify-between mb-4">
<span className="iconify text-orange-400" data-icon="lucide:file-text" data-width="32"></span>
<span className="text-2xl font-semibold text-white opacity-20 group-hover:opacity-100 transition-opacity">90%</span>
</div>
<h4 className="text-xl text-white font-medium mb-2">Documentation</h4>
<p className="text-sm text-slate-400 mb-4">MS Office Advanced</p>
<div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-orange-400 w-[90%] shadow-[0_0_10px_rgba(251,146,60,0.5)]"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 mb-10">
<h2 className="text-3xl font-medium text-white tracking-tight">Services Offered</h2>
</div>
<div className="flex overflow-x-auto no-scrollbar pb-10 px-6 gap-6 snap-x snap-mandatory">

<div className="min-w-[300px] md:min-w-[350px] snap-center bg-slate-900/50 backdrop-blur border border-white/10 rounded-2xl p-8 hover:-translate-y-2 transition-transform duration-300">
<div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center mb-6 text-indigo-400 border border-indigo-500/30">
<span className="iconify" data-icon="lucide:monitor" data-width="24"></span>
</div>
<h3 className="text-xl text-white font-medium mb-3">Website Design</h3>
<p className="text-sm text-slate-400 leading-relaxed">Modern, responsive, and SEO-friendly websites tailored to your brand identity using the latest tech.</p>
</div>

<div className="min-w-[300px] md:min-w-[350px] snap-center bg-slate-900/50 backdrop-blur border border-white/10 rounded-2xl p-8 hover:-translate-y-2 transition-transform duration-300">
<div className="w-12 h-12 bg-pink-500/20 rounded-lg flex items-center justify-center mb-6 text-pink-400 border border-pink-500/30">
<span className="iconify" data-icon="lucide:briefcase" data-width="24"></span>
</div>
<h3 className="text-xl text-white font-medium mb-3">Portfolio Websites</h3>
<p className="text-sm text-slate-400 leading-relaxed">Showcase your work with a premium personal portfolio that stands out from the competition.</p>
</div>

<div className="min-w-[300px] md:min-w-[350px] snap-center bg-slate-900/50 backdrop-blur border border-white/10 rounded-2xl p-8 hover:-translate-y-2 transition-transform duration-300">
<div className="w-12 h-12 bg-amber-500/20 rounded-lg flex items-center justify-center mb-6 text-amber-400 border border-amber-500/30">
<span className="iconify" data-icon="lucide:star" data-width="24"></span>
</div>
<h3 className="text-xl text-white font-medium mb-3">Business Branding</h3>
<p className="text-sm text-slate-400 leading-relaxed">Complete visual identity packages including logos, color palettes, and typography guides.</p>
</div>

<div className="min-w-[300px] md:min-w-[350px] snap-center bg-slate-900/50 backdrop-blur border border-white/10 rounded-2xl p-8 hover:-translate-y-2 transition-transform duration-300">
<div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-6 text-cyan-400 border border-cyan-500/30">
<span className="iconify" data-icon="lucide:image" data-width="24"></span>
</div>
<h3 className="text-xl text-white font-medium mb-3">Poster &amp; Banner Design</h3>
<p className="text-sm text-slate-400 leading-relaxed">High-quality promotional graphics for print and digital media campaigns.</p>
</div>
</div>
</section>

<section className="py-24 bg-black/50" id="portfolio">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-sm font-medium text-purple-400 tracking-widest uppercase mb-2">Selected Works</h2>
<h3 className="text-3xl md:text-5xl font-medium text-white tracking-tight">Recent Projects</h3>
<div className="flex flex-wrap justify-center gap-4 mt-8">
<button className="px-4 py-1.5 rounded-full text-xs font-medium bg-white text-slate-950">All</button>
<button className="px-4 py-1.5 rounded-full text-xs font-medium border border-white/10 hover:bg-white/10 transition-colors">Web Design</button>
<button className="px-4 py-1.5 rounded-full text-xs font-medium border border-white/10 hover:bg-white/10 transition-colors">Branding</button>
<button className="px-4 py-1.5 rounded-full text-xs font-medium border border-white/10 hover:bg-white/10 transition-colors">Posters</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer">

<div className="absolute inset-0 bg-slate-800 group-hover:scale-110 transition-transform duration-700 ease-out">
<div className="w-full h-full bg-gradient-to-br from-indigo-900 to-slate-900 flex items-center justify-center">
<span className="iconify text-white/10 w-24 h-24" data-icon="lucide:layout-template" data-width="96"></span>
</div>
</div>

<div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center">
<h4 className="text-xl font-medium text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">FinTech Dashboard</h4>
<p className="text-sm text-slate-300 mt-2 mb-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">UI/UX Design • Web</p>
<button className="px-6 py-2 bg-white text-black rounded-full text-sm font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150 hover:bg-cyan-400 hover:text-white">View Project</button>
</div>
</div>

<div className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer">
<div className="absolute inset-0 bg-slate-800 group-hover:scale-110 transition-transform duration-700 ease-out">
<div className="w-full h-full bg-gradient-to-br from-amber-900 to-slate-900 flex items-center justify-center">
<span className="iconify text-white/10 w-24 h-24" data-icon="lucide:shopping-bag" data-width="96"></span>
</div>
</div>
<div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center">
<h4 className="text-xl font-medium text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">Luxury E-commerce</h4>
<p className="text-sm text-slate-300 mt-2 mb-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">Web Development</p>
<button className="px-6 py-2 bg-white text-black rounded-full text-sm font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150 hover:bg-amber-400 hover:text-white">View Project</button>
</div>
</div>

<div className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer">
<div className="absolute inset-0 bg-slate-800 group-hover:scale-110 transition-transform duration-700 ease-out">
<div className="w-full h-full bg-gradient-to-br from-purple-900 to-slate-900 flex items-center justify-center">
<span className="iconify text-white/10 w-24 h-24" data-icon="lucide:dribbble" data-width="96"></span>
</div>
</div>
<div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center">
<h4 className="text-xl font-medium text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">Brand Identity System</h4>
<p className="text-sm text-slate-300 mt-2 mb-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">Graphic Design</p>
<button className="px-6 py-2 bg-white text-black rounded-full text-sm font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150 hover:bg-purple-400 hover:text-white">View Project</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-medium text-white mb-12 text-center">Client Stories</h2>
<div className="grid md:grid-cols-2 gap-8">
<div className="bg-white/5 border border-white/5 p-8 rounded-2xl relative">
<span className="iconify text-amber-500/20 absolute top-6 right-6 w-12 h-12" data-icon="lucide:quote" data-width="48"></span>
<p className="text-slate-300 italic mb-6 leading-relaxed">"Mohd delivered an exceptional portfolio site that perfectly captured my vision. The animations are buttery smooth and the attention to detail is unmatched."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-slate-700"></div>
<div>
<p className="text-white font-medium text-sm">Sarah Jenkins</p>
<p className="text-xs text-slate-500">Creative Director</p>
</div>
</div>
</div>
<div className="bg-white/5 border border-white/5 p-8 rounded-2xl relative">
<span className="iconify text-cyan-500/20 absolute top-6 right-6 w-12 h-12" data-icon="lucide:quote" data-width="48"></span>
<p className="text-slate-300 italic mb-6 leading-relaxed">"Fast, professional, and incredibly talented. The graphic work for our campaign was stunning and helped us reach record engagement."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-slate-700"></div>
<div>
<p className="text-white font-medium text-sm">David Chen</p>
<p className="text-xs text-slate-500">Marketing Head</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative" id="contact">
<div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none"></div>
<div className="max-w-3xl mx-auto px-6 relative z-10">
<div className="text-center mb-12">
<h2 className="text-4xl font-medium text-white mb-4">Let's work together</h2>
<p className="text-slate-400">Have a project in mind? Let's create something extraordinary.</p>
</div>
<form className="space-y-6 bg-white/5 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl">
<div className="grid md:grid-cols-2 gap-6">
<div className="relative group">
<input className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-cyan-500/50 transition-colors peer" placeholder=" " required="" type="text"/>
<label className="absolute left-4 top-3 text-slate-500 text-sm transition-all peer-focus:-top-2.5 peer-focus:text-xs peer-focus:bg-slate-950 peer-focus:px-2 peer-focus:text-cyan-400 peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-slate-950 peer-[:not(:placeholder-shown)]:px-2 cursor-text">Name</label>
</div>
<div className="relative group">
<input className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-cyan-500/50 transition-colors peer" placeholder=" " required="" type="email"/>
<label className="absolute left-4 top-3 text-slate-500 text-sm transition-all peer-focus:-top-2.5 peer-focus:text-xs peer-focus:bg-slate-950 peer-focus:px-2 peer-focus:text-cyan-400 peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-slate-950 peer-[:not(:placeholder-shown)]:px-2 cursor-text">Email</label>
</div>
</div>
<div className="relative group">
<textarea className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-cyan-500/50 transition-colors peer" placeholder=" " required="" rows="4"></textarea>
<label className="absolute left-4 top-3 text-slate-500 text-sm transition-all peer-focus:-top-2.5 peer-focus:text-xs peer-focus:bg-slate-950 peer-focus:px-2 peer-focus:text-cyan-400 peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-slate-950 peer-[:not(:placeholder-shown)]:px-2 cursor-text">Message</label>
</div>
<button className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-medium py-3.5 rounded-lg hover:shadow-[0_0_20px_rgba(8,145,178,0.4)] transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group" type="submit">
<span className="relative z-10 flex items-center justify-center gap-2">
                        Send Message
                        <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:send" data-width="16"></span>
</span>
<div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
</button>
</form>
<div className="mt-12 flex justify-center gap-6">
<a className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-400/50 hover:bg-blue-400/10 transition-all duration-300" href="#">
<span className="iconify" data-icon="lucide:linkedin" data-width="20"></span>
</a>
<a className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-pink-400 hover:border-pink-400/50 hover:bg-pink-400/10 transition-all duration-300" href="#">
<span className="iconify" data-icon="lucide:instagram" data-width="20"></span>
</a>
<a className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-black hover:border-white hover:bg-white transition-all duration-300" href="#">
<span className="iconify" data-icon="lucide:github" data-width="20"></span>
</a>
<a className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400/50 hover:bg-cyan-400/10 transition-all duration-300" href="#">
<span className="iconify" data-icon="lucide:twitter" data-width="20"></span>
</a>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-black py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-2">
<span className="w-8 h-8 rounded bg-gradient-to-br from-amber-400 to-yellow-600 flex items-center justify-center text-slate-950 font-bold">M</span>
<div className="flex flex-col">
<span className="text-white font-medium text-sm leading-none">Mohd Subhan</span>
<span className="text-xs text-slate-500">Design &amp; Code</span>
</div>
</div>
<p className="text-xs text-slate-600 text-center md:text-right">
                © 2026 Mohd Subhan. Designed with Creativity &amp; Code.<br/>
                All rights reserved.
            </p>
</div>
</footer>

    </>
  );
}
