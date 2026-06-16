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

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 right-0 z-50 glass-nav h-16 transition-all duration-300">
<div className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between">
<a className="text-white font-medium text-lg tracking-tighter flex items-center gap-2 hover:opacity-80 transition-opacity" href="#" style={{}}>
<iconify-icon icon="solar:infinity-linear" width="24"></iconify-icon>
                VORTEX
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-white transition-colors text-orange-400" href="#work" style={{}}>Work</a>
<a className="text-orange-400 hover:text-white transition-colors" href="#services" style={{}}>Services</a>
<a className="text-orange-400 hover:text-white transition-colors" href="#about" style={{}}>About</a>
<a className="text-orange-400 hover:text-white transition-colors" href="#careers" style={{}}>Careers</a>
</div>
<a className="hidden md:flex items-center gap-2 hover:bg-orange-200 transition-colors text-xs font-medium text-black bg-white rounded-full pt-2 pr-4 pb-2 pl-4 scale-110 -skew-y-5 -rotate-y-10 perspective-dramatic" href="#contact" style={{}}>
    Start Project
    <iconify-icon className="" icon="solar:arrow-right-linear" width="14"></iconify-icon>
</a>

<button className="md:hidden text-white" style={{}}>
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<section className="md:pt-48 md:pb-32 overflow-hidden pt-32 pr-6 pb-20 pl-6 relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-96 bg-amber-500/10 rounded-full blur-[120px] -z-10 pointer-events-none" style={{}}></div>
<div className="absolute inset-0 bg-grid -z-20 pointer-events-none"></div>
<div className="z-10 text-center max-w-4xl mr-auto ml-auto relative">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-800 bg-orange-900/50 backdrop-blur-sm text-xs text-orange-300 mb-8 hover:border-orange-700 transition-colors cursor-default" style={{}}>
<span className="w-1.5 h-1.5 rounded-full bg-yellow-500 animate-pulse" style={{}}></span>
                Available for new projects
            </div>
<h1 className="md:text-7xl lg:text-8xl leading-[0.95] text-5xl font-medium text-white tracking-tighter mb-8" style={{}}>Crafting digital <br/> <span className="bg-clip-text text-transparent bg-gradient-to-b from-orange-100 to-orange-500" style={{}}>Amazings</span></h1>
<p className="md:text-xl leading-relaxed text-lg text-orange-500 max-w-xl mr-auto mb-10 ml-auto" style={{}}>
                We are a design-driven agency building world-class web experiences, products, and brands for the future.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-8 py-3.5 bg-white text-black text-sm font-medium rounded-full hover:bg-orange-200 transition-all flex items-center justify-center gap-2" style={{}}>
                    View Our Work
                </button>
<button className="sm:w-auto hover:bg-orange-800 transition-all flex gap-2 text-sm font-medium text-white bg-orange-900 w-full border-orange-800 border rounded-full pt-3.5 pr-8 pb-3.5 pl-8 gap-x-2 gap-y-2 items-center justify-center" style={{}}>
                    Get in Touch
                </button>
</div>
</div>
</section>

<div className="w-full border-y border-orange-900 bg-black/50 py-8 overflow-hidden" style={{}}>
<div className="max-w-6xl mx-auto px-6">
<p className="text-center text-xs font-medium text-orange-600 mb-6 uppercase tracking-widest" style={{}}>Trusted by industry leaders</p>
<div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">

<span className="text-lg font-semibold tracking-tight text-white flex items-center gap-1" style={{}}><iconify-icon icon="solar:box-linear"></iconify-icon> ACME</span>
<span className="text-lg font-semibold tracking-tight text-white flex items-center gap-1" style={{}}><iconify-icon icon="solar:atom-linear"></iconify-icon> QUANTUM</span>
<span className="text-lg font-semibold tracking-tight text-white flex items-center gap-1" style={{}}><iconify-icon icon="solar:earth-linear"></iconify-icon> GLOBEX</span>
<span className="text-lg font-semibold tracking-tight text-white flex items-center gap-1" style={{}}><iconify-icon icon="solar:layers-linear"></iconify-icon> STACK</span>
<span className="text-lg font-semibold tracking-tight text-white flex items-center gap-1" style={{}}><iconify-icon icon="solar:bolt-linear"></iconify-icon> BOLT</span>
</div>
</div>
</div>

<section className="py-24 px-6 relative" id="services">
<div className="max-w-6xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div className="">
<h2 className="md:text-4xl text-3xl font-medium text-white tracking-tight" style={{}}>Capabilities</h2>
<p className="text-orange-500 max-w-md mt-2" style={{}}>Comprehensive design and development solutions tailored for scale.</p>
</div>
<a className="text-sm text-white border-b border-orange-700 pb-0.5 hover:border-white transition-colors" href="#" style={{}}>View all services</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

<div className="md:col-span-2 hover:bg-orange-900/40 transition-all group overflow-hidden bg-orange-900/20 border-orange-800/50 border rounded-2xl pt-8 pr-8 pb-8 pl-8 relative" style={{}}>
<div className="absolute right-0 top-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity">
<iconify-icon className="text-white" icon="solar:devices-linear" style={{}} width="120"></iconify-icon>
</div>
<div className="relative z-10 h-full flex flex-col justify-between min-h-[200px]">
<div className="w-10 h-10 rounded-lg bg-orange-800 flex items-center justify-center text-white mb-4" style={{}}>
<iconify-icon icon="solar:laptop-linear" width="20"></iconify-icon>
</div>
<div className="">
<h3 className="text-xl font-medium text-white mb-2" style={{}}>Web Development</h3>
<p className="text-sm text-orange-500 max-w-sm" style={{}}>Performance-obsessed frontend and robust backend solutions using modern frameworks like React, Next.js, and Node.</p>
</div>
</div>
</div>

<div className="bg-orange-900/20 border border-orange-800/50 p-8 rounded-2xl hover:bg-orange-900/40 transition-all group relative" style={{}}>
<div className="w-10 h-10 rounded-lg bg-orange-800 flex items-center justify-center text-white mb-4" style={{}}>
<iconify-icon icon="solar:palette-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2" style={{}}>UI/UX Design</h3>
<p className="text-sm text-orange-500" style={{}}>User-centric interfaces that are visually stunning and intuitively functional.</p>
</div>

<div className="hover:bg-orange-900/40 transition-all group bg-orange-900/20 border-orange-800/50 border rounded-2xl pt-8 pr-8 pb-8 pl-8 relative" style={{}}>
<div className="flex text-white bg-orange-800 w-10 h-10 rounded-lg mb-4 items-center justify-center" style={{}}>
<iconify-icon icon="solar:chart-2-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2" style={{}}>Growth Strategy</h3>
<p className="text-sm text-orange-500" style={{}}>Data-driven marketing and SEO strategies to scale your digital presence.</p>
</div>

<div className="md:col-span-2 bg-orange-900/20 border border-orange-800/50 p-8 rounded-2xl hover:bg-orange-900/40 transition-all group relative overflow-hidden" style={{}}>
<div className="absolute right-0 top-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity">
<iconify-icon className="text-white" icon="solar:smartphone-linear" style={{}} width="120"></iconify-icon>
</div>
<div className="z-10 flex flex-col min-h-[200px] h-full relative justify-between">
<div className="flex text-white bg-orange-800 w-10 h-10 rounded-lg mb-4 items-center justify-center" style={{}}>
<iconify-icon icon="solar:code-circle-linear" width="20"></iconify-icon>
</div>
<div className="">
<h3 className="text-xl font-medium text-white mb-2" style={{}}>Mobile Applications</h3>
<p className="text-sm text-orange-500 max-w-sm" style={{}}>Native and cross-platform mobile apps built for iOS and Android with seamless performance.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-orange-900" id="work" style={{}}>
<div className="max-w-6xl mr-auto ml-auto">
<h2 className="md:text-4xl text-3xl font-medium text-white tracking-tight text-center mb-16" style={{}}>Selected Work</h2>
<div className="space-y-24">

<div className="group grid md:grid-cols-2 gap-12 gap-x-12 gap-y-12 items-center">
<div className="order-2 md:order-1 space-y-6">
<div className="flex items-center gap-3 text-xs font-medium text-orange-400" style={{}}>
<span>Fintech</span>
<span className="w-1 h-1 rounded-full bg-orange-700" style={{}}></span>
<span className="">2023</span>
</div>
<h3 className="group-hover:text-amber-400 transition-colors cursor-pointer text-3xl font-medium text-white tracking-tight" style={{}}>Nova Finance</h3>
<p className="leading-relaxed text-orange-500" style={{}}>
                            A complete rebrand and digital product overhaul for the next generation of personal banking. We simplified complex data into a beautiful, intuitive dashboard.
                        </p>
<div className="flex gap-2 pt-2 gap-x-2 gap-y-2">
<span className="px-3 py-1 rounded-full bg-orange-900 border border-orange-800 text-xs text-orange-400" style={{}}>React Native</span>
<span className="px-3 py-1 rounded-full bg-orange-900 border border-orange-800 text-xs text-orange-400" style={{}}>Node.js</span>
</div>
<a className="inline-flex items-center gap-2 text-sm text-white mt-4 hover:underline" href="#" style={{}}>
                            View Case Study <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
<div className="order-1 md:order-2 bg-orange-900 rounded-xl overflow-hidden aspect-[4/3] border border-orange-800 group-hover:border-orange-700 transition-all relative" style={{}}>

<div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-green-500/10" style={{}}></div>
<div className="absolute inset-4 bg-black/40 rounded-lg border border-orange-800 flex items-center justify-center" style={{}}>
<iconify-icon className="text-orange-700" icon="solar:card-recieved-linear" style={{}} width="64"></iconify-icon>
</div>
</div>
</div>

<div className="group grid md:grid-cols-2 gap-12 gap-x-12 gap-y-12 items-center">
<div className="bg-orange-900 rounded-xl overflow-hidden aspect-[4/3] border border-orange-800 group-hover:border-orange-700 transition-all relative" style={{}}>

<div className="absolute inset-0 bg-gradient-to-tr from-yellow-500/10 to-teal-500/10" style={{}}></div>
<div className="flex bg-black/40 border-orange-800 border rounded-lg absolute top-4 right-4 bottom-4 left-4 items-center justify-center" style={{}}>
<iconify-icon className="text-orange-700" icon="solar:graph-up-linear" style={{}} width="64"></iconify-icon>
</div>
</div>
<div className="space-y-6">
<div className="flex items-center gap-3 text-xs font-medium text-orange-400" style={{}}>
<span>SaaS</span>
<span className="w-1 h-1 rounded-full bg-orange-700" style={{}}></span>
<span className="">2024</span>
</div>
<h3 className="text-3xl font-medium text-white tracking-tight group-hover:text-yellow-400 transition-colors cursor-pointer" style={{}}>Metrics Flow</h3>
<p className="text-orange-500 leading-relaxed" style={{}}>
                            Designed the marketing site and web application for an enterprise analytics platform. Focus on speed, accessibility, and data visualization.
                        </p>
<div className="flex gap-2 pt-2">
<span className="px-3 py-1 rounded-full bg-orange-900 border border-orange-800 text-xs text-orange-400" style={{}}>Next.js</span>
<span className="px-3 py-1 rounded-full bg-orange-900 border border-orange-800 text-xs text-orange-400" style={{}}>WebGL</span>
</div>
<a className="inline-flex items-center gap-2 hover:underline text-sm text-white mt-4" href="#" style={{}}>
                            View Case Study <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative overflow-hidden">
<div className="absolute inset-0 bg-orange-900/30" style={{}}></div>
<div className="max-w-6xl mx-auto relative z-10">
<div className="grid grid-cols-2 md:grid-cols-4 border-y border-orange-800 mb-20 pt-12 pb-12 gap-x-8 gap-y-8" style={{}}>
<div className="text-center">
<div className="text-4xl md:text-5xl font-medium text-white tracking-tighter mb-2" style={{}}>50+</div>
<div className="text-xs uppercase tracking-widest text-orange-500" style={{}}>Projects Shipped</div>
</div>
<div className="text-center">
<div className="md:text-5xl text-4xl font-medium text-white tracking-tighter mb-2" style={{}}>12</div>
<div className="text-xs uppercase tracking-widest text-orange-500" style={{}}>Industry Awards</div>
</div>
<div className="text-center">
<div className="text-4xl md:text-5xl font-medium text-white tracking-tighter mb-2" style={{}}>5</div>
<div className="text-xs uppercase tracking-widest text-orange-500" style={{}}>Years Active</div>
</div>
<div className="text-center">
<div className="text-4xl md:text-5xl font-medium text-white tracking-tighter mb-2" style={{}}>100%</div>
<div className="uppercase text-xs text-orange-500 tracking-widest" style={{}}>Client Satisfaction</div>
</div>
</div>
<div className="text-center max-w-2xl mx-auto">
<h2 className="md:text-5xl text-4xl font-medium text-white tracking-tighter mb-6" style={{}}>Ready to transform your idea?</h2>
<p className="text-orange-500 mb-8" style={{}}>We are currently accepting new projects for Q4. Let's build something extraordinary together.</p>
<div className="flex items-center justify-center">
<button className="px-8 py-4 bg-white text-black text-sm font-medium rounded-full hover:bg-orange-200 transition-all flex items-center justify-center gap-2" style={{}}>
                        Start Your Project
                    </button>
</div>
</div>
</div>
</section>

<footer className="bg-black py-12 px-6 border-t border-orange-900" style={{}}>
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
<div className="max-w-xs">
<a className="text-white font-medium text-xl tracking-tighter flex items-center gap-2 mb-4" href="#" style={{}}>
<iconify-icon icon="solar:infinity-linear"></iconify-icon>
                    VORTEX
                </a>
<p className="text-sm text-orange-500" style={{}}>
                    A digital product agency crafting experiences for the modern web.
                </p>
<div className="flex gap-4 mt-6">
<a className="text-orange-500 hover:text-white transition-colors" href="#" style={{}}><iconify-icon icon="solar:brand-twitter-linear" width="20"></iconify-icon></a>
<a className="text-orange-500 hover:text-white transition-colors" href="#" style={{}}><iconify-icon icon="solar:brand-instagram-linear" width="20"></iconify-icon></a>
<a className="text-orange-500 hover:text-white transition-colors" href="#" style={{}}><iconify-icon icon="solar:brand-linkedin-linear" width="20"></iconify-icon></a>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-12 text-sm">
<div className="">
<h4 className="text-white font-medium mb-4" style={{}}>Sitemap</h4>
<ul className="space-y-3 text-orange-500" style={{}}>
<li className=""><a className="hover:text-orange-300 transition-colors" href="#" style={{}}>Home</a></li>
<li className=""><a className="hover:text-orange-300 transition-colors" href="#" style={{}}>Work</a></li>
<li><a className="hover:text-orange-300 transition-colors" href="#" style={{}}>Services</a></li>
<li><a className="hover:text-orange-300 transition-colors" href="#" style={{}}>Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4" style={{}}>Socials</h4>
<ul className="space-y-3 text-orange-500" style={{}}>
<li><a className="hover:text-orange-300 transition-colors" href="#" style={{}}>Twitter</a></li>
<li><a className="hover:text-orange-300 transition-colors" href="#" style={{}}>LinkedIn</a></li>
<li><a className="hover:text-orange-300 transition-colors" href="#" style={{}}>Dribbble</a></li>
<li><a className="hover:text-orange-300 transition-colors" href="#" style={{}}>GitHub</a></li>
</ul>
</div>
<div className="col-span-2 md:col-span-1">
<h4 className="text-white font-medium mb-4" style={{}}>Newsletter</h4>
<div className="flex gap-2">
<input className="bg-orange-900 border border-orange-800 rounded-lg px-3 py-2 text-sm text-white w-full focus:outline-none focus:border-orange-600 transition-colors" placeholder="Email address" style={{}} type="email"/>
<button className="bg-white text-black rounded-lg px-3 py-2 text-sm font-medium hover:bg-orange-200 transition-colors" style={{}}>
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
<div className="max-w-6xl mx-auto mt-16 pt-8 border-t border-orange-900 text-center md:text-left" style={{}}>
<p className="text-xs text-orange-600" style={{}}>© 2024 Vortex Agency Inc. All rights reserved.</p>
</div>
</footer>

    </>
  );
}
