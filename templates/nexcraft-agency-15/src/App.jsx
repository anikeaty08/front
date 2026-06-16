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
      

<nav className="fixed w-full top-0 z-50 glass border-b border-zinc-800/50">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-white font-semibold tracking-tighter text-xl" href="#">NEXCRAFT</a>
<div className="hidden md:flex space-x-8 text-sm font-medium text-zinc-400">
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#work">Work</a>
<a className="hover:text-white transition-colors" href="#process">Process</a>
<a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
</div>
<a className="hidden md:inline-flex items-center justify-center bg-white text-black hover:bg-zinc-200 transition-colors rounded-full font-medium text-sm px-5 py-2" href="#contact">
                Book a Call
            </a>
<button className="md:hidden text-zinc-400 hover:text-white">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden flex flex-col items-center text-center">
<div className="glow-effect" style={{width: '600px', height: '600px', top: '40%', background: 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, rgba(0,0,0,0) 70%)'}}></div>
<div className="inline-flex items-center space-x-2 glass rounded-full px-3 py-1 mb-8 border border-zinc-800/50">
<span className="flex h-2 w-2 rounded-full bg-indigo-500"></span>
<span className="text-xs font-medium text-zinc-300">Premium Web &amp; App Agency</span>
</div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-white max-w-4xl mx-auto leading-[1.1]">
            We Build Digital Experiences <br className="hidden md:block"/> That <span className="text-gradient">Drive Results.</span>
</h1>
<p className="mt-6 text-base md:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            We partner with ambitious brands to design, build, and scale high-performance websites and mobile applications that convert.
        </p>
<div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
<a className="w-full sm:w-auto inline-flex items-center justify-center bg-white text-black hover:bg-zinc-200 transition-colors rounded-full font-medium text-sm px-8 py-3.5" href="#contact">
                Book a Free Call
            </a>
<a className="w-full sm:w-auto inline-flex items-center justify-center glass hover:bg-zinc-800/50 text-white transition-colors rounded-full font-medium text-sm px-8 py-3.5 border border-zinc-800" href="#work">
                View Our Work
            </a>
</div>

<div className="mt-20 w-full max-w-5xl mx-auto relative perspective-1000">
<div className="relative w-full aspect-[16/9] glass-card rounded-2xl md:rounded-3xl border border-zinc-800/50 overflow-hidden flex items-center justify-center bg-gradient-to-br from-zinc-900/50 to-zinc-950/80">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
<div className="relative z-10 grid grid-cols-3 gap-4 md:gap-6 p-6 md:p-12 w-full h-full opacity-60">
<div className="col-span-2 space-y-4">
<div className="h-8 w-1/3 bg-zinc-800/50 rounded-md"></div>
<div className="h-32 w-full bg-zinc-800/30 rounded-xl border border-zinc-700/30"></div>
<div className="grid grid-cols-2 gap-4">
<div className="h-20 bg-zinc-800/30 rounded-xl border border-zinc-700/30"></div>
<div className="h-20 bg-zinc-800/30 rounded-xl border border-zinc-700/30"></div>
</div>
</div>
<div className="col-span-1 space-y-4">
<div className="h-full w-full bg-indigo-500/10 rounded-xl border border-indigo-500/20"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-zinc-900" id="services">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col items-start mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">Our Expertise</h2>
<p className="text-zinc-400 text-base max-w-xl">End-to-end digital solutions crafted for performance, scalability, and user engagement.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="glass-card p-8 rounded-2xl relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="h-12 w-12 rounded-xl glass border border-zinc-700 flex items-center justify-center mb-6 text-indigo-400">
<iconify-icon className="text-2xl" icon="solar:laptop-minimalistic-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white mb-3 tracking-tight">Website Creation</h3>
<p className="text-sm text-zinc-400 leading-relaxed">High-converting landing pages, robust corporate sites, and seamless e-commerce experiences built for speed.</p>
</div>

<div className="glass-card p-8 rounded-2xl relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="h-12 w-12 rounded-xl glass border border-zinc-700 flex items-center justify-center mb-6 text-indigo-400">
<iconify-icon className="text-2xl" icon="solar:code-square-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white mb-3 tracking-tight">Custom Web Apps</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Complex SaaS platforms and internal tools developed with modern frameworks like React, Next.js, and Node.</p>
</div>

<div className="glass-card p-8 rounded-2xl relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="h-12 w-12 rounded-xl glass border border-zinc-700 flex items-center justify-center mb-6 text-indigo-400">
<iconify-icon className="text-2xl" icon="solar:smartphone-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white mb-3 tracking-tight">Mobile Development</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Native-feeling iOS and Android applications using React Native, focusing on smooth UI and offline capabilities.</p>
</div>

<div className="glass-card p-8 rounded-2xl relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="h-12 w-12 rounded-xl glass border border-zinc-700 flex items-center justify-center mb-6 text-indigo-400">
<iconify-icon className="text-2xl" icon="solar:pen-new-square-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white mb-3 tracking-tight">UI/UX Design</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Intuitive, aesthetic, and user-centric interfaces designed in Figma before a single line of code is written.</p>
</div>

<div className="glass-card p-8 rounded-2xl relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="h-12 w-12 rounded-xl glass border border-zinc-700 flex items-center justify-center mb-6 text-indigo-400">
<iconify-icon className="text-2xl" icon="solar:graph-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white mb-3 tracking-tight">SEO &amp; Performance</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Technical SEO audits, Core Web Vitals optimization, and architecture improvements to rank higher.</p>
</div>

<div className="glass-card p-8 rounded-2xl relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="h-12 w-12 rounded-xl glass border border-zinc-700 flex items-center justify-center mb-6 text-indigo-400">
<iconify-icon className="text-2xl" icon="solar:settings-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white mb-3 tracking-tight">Maintenance &amp; Support</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Ongoing security updates, feature additions, and 24/7 monitoring to keep your digital assets running smoothly.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-zinc-950/50 border-y border-zinc-900" id="work">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">Selected Work</h2>
<p className="text-zinc-400 text-base max-w-xl">We don't just build software; we build businesses. Here are some results we've delivered.</p>
</div>
<a className="inline-flex items-center space-x-2 text-sm font-medium text-white hover:text-indigo-400 transition-colors group" href="#contact">
<span>View all projects</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="group cursor-pointer">
<div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden glass border border-zinc-800 mb-6 bg-zinc-900 flex items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-tr from-zinc-900 to-indigo-900/20 opacity-50 group-hover:scale-105 transition-transform duration-700"></div>

<div className="w-3/4 h-3/4 border border-zinc-700/50 rounded-xl bg-zinc-950/80 shadow-2xl relative flex flex-col p-4 group-hover:scale-105 transition-transform duration-500">
<div className="h-4 w-full border-b border-zinc-800 mb-4 flex space-x-1.5 pb-2">
<div className="w-2 h-2 rounded-full bg-zinc-700"></div>
<div className="w-2 h-2 rounded-full bg-zinc-700"></div>
<div className="w-2 h-2 rounded-full bg-zinc-700"></div>
</div>
<div className="flex-1 rounded bg-zinc-900/50 border border-zinc-800"></div>
</div>
</div>
<div className="flex items-start justify-between">
<div>
<h3 className="text-xl font-semibold text-white tracking-tight mb-2">Fintech Dashboard UI</h3>
<p className="text-sm text-zinc-400">Web App • Next.js • Tailwind</p>
</div>
<div className="text-right">
<span className="block text-indigo-400 font-semibold text-sm">+200%</span>
<span className="text-xs text-zinc-500 uppercase tracking-widest">User Retention</span>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden glass border border-zinc-800 mb-6 bg-zinc-900 flex items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-tr from-zinc-900 to-purple-900/20 opacity-50 group-hover:scale-105 transition-transform duration-700"></div>

<div className="w-3/4 h-3/4 border border-zinc-700/50 rounded-xl bg-zinc-950/80 shadow-2xl relative p-4 flex gap-4 group-hover:scale-105 transition-transform duration-500">
<div className="w-1/3 h-full rounded bg-zinc-900/50 border border-zinc-800"></div>
<div className="w-2/3 h-full rounded bg-zinc-900/50 border border-zinc-800 flex flex-col gap-2">
<div className="w-full h-1/2 rounded bg-zinc-800/30"></div>
<div className="w-full h-1/2 rounded bg-zinc-800/30"></div>
</div>
</div>
</div>
<div className="flex items-start justify-between">
<div>
<h3 className="text-xl font-semibold text-white tracking-tight mb-2">Aura E-Commerce</h3>
<p className="text-sm text-zinc-400">Shopify Custom • Performance</p>
</div>
<div className="text-right">
<span className="block text-purple-400 font-semibold text-sm">&lt; 1.2s</span>
<span className="text-xs text-zinc-500 uppercase tracking-widest">Load Time</span>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden glass border border-zinc-800 mb-6 bg-zinc-900 flex items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-tr from-zinc-900 to-emerald-900/20 opacity-50 group-hover:scale-105 transition-transform duration-700"></div>

<div className="w-1/3 h-4/5 border border-zinc-700/50 rounded-3xl bg-zinc-950/80 shadow-2xl relative p-2 group-hover:scale-105 transition-transform duration-500">
<div className="w-full h-full rounded-2xl bg-zinc-900 border border-zinc-800 flex flex-col items-center pt-8 gap-4">
<div className="w-16 h-16 rounded-full bg-zinc-800/50"></div>
<div className="w-24 h-4 rounded bg-zinc-800/50"></div>
</div>
</div>
</div>
<div className="flex items-start justify-between">
<div>
<h3 className="text-xl font-semibold text-white tracking-tight mb-2">HealthTrack Mobile</h3>
<p className="text-sm text-zinc-400">iOS &amp; Android • React Native</p>
</div>
<div className="text-right">
<span className="block text-emerald-400 font-semibold text-sm">3 Weeks</span>
<span className="text-xs text-zinc-500 uppercase tracking-widest">Time to Market</span>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden glass border border-zinc-800 mb-6 bg-zinc-900 flex items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-tr from-zinc-900 to-blue-900/20 opacity-50 group-hover:scale-105 transition-transform duration-700"></div>

<div className="w-3/4 h-3/4 border border-zinc-700/50 rounded-xl bg-zinc-950/80 shadow-2xl relative p-6 flex flex-col gap-4 group-hover:scale-105 transition-transform duration-500">
<h4 className="text-2xl font-bold text-zinc-700 tracking-tighter">Acme Corp</h4>
<div className="flex-1 rounded bg-zinc-900/50 border border-zinc-800 p-4 font-mono text-xs text-zinc-600 overflow-hidden">
<div>function init() {</div>
<div className="ml-4">console.log('Scaling...');</div>
<div>}</div>
</div>
</div>
</div>
<div className="flex items-start justify-between">
<div>
<h3 className="text-xl font-semibold text-white tracking-tight mb-2">Enterprise SaaS Migration</h3>
<p className="text-sm text-zinc-400">Architecture • Node.js • AWS</p>
</div>
<div className="text-right">
<span className="block text-blue-400 font-semibold text-sm">99.99%</span>
<span className="text-xs text-zinc-500 uppercase tracking-widest">Uptime Target</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-b border-zinc-900 relative overflow-hidden" id="process">
<div className="glow-effect" style={{width: '500px', height: '500px', right: '-10%', top: '50%', background: 'radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, rgba(0,0,0,0) 70%)'}}></div>
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">How We Work</h2>
<p className="text-zinc-400 text-base max-w-2xl mx-auto">A streamlined, transparent process designed to deliver results on time and within budget.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">

<div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-zinc-800 via-zinc-600 to-zinc-800 z-0"></div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-24 h-24 rounded-full glass border border-zinc-700 flex items-center justify-center mb-6 bg-zinc-900/80 shadow-[0_0_30px_rgba(99,102,241,0.1)]">
<span className="text-2xl font-semibold text-zinc-500">01</span>
</div>
<h3 className="text-lg font-semibold text-white mb-2 tracking-tight">Discovery</h3>
<p className="text-sm text-zinc-400">We analyze your goals, target audience, and technical requirements to define the scope.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-24 h-24 rounded-full glass border border-zinc-700 flex items-center justify-center mb-6 bg-zinc-900/80 shadow-[0_0_30px_rgba(99,102,241,0.1)]">
<span className="text-2xl font-semibold text-zinc-500">02</span>
</div>
<h3 className="text-lg font-semibold text-white mb-2 tracking-tight">Design</h3>
<p className="text-sm text-zinc-400">Creating wireframes and high-fidelity prototypes to visualize the user experience.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-24 h-24 rounded-full glass border border-indigo-500/50 flex items-center justify-center mb-6 bg-indigo-500/10 shadow-[0_0_30px_rgba(99,102,241,0.2)]">
<span className="text-2xl font-semibold text-indigo-400">03</span>
</div>
<h3 className="text-lg font-semibold text-white mb-2 tracking-tight">Development</h3>
<p className="text-sm text-zinc-400">Writing clean, scalable code with weekly updates and staging links for your review.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-24 h-24 rounded-full glass border border-zinc-700 flex items-center justify-center mb-6 bg-zinc-900/80 shadow-[0_0_30px_rgba(99,102,241,0.1)]">
<span className="text-2xl font-semibold text-zinc-500">04</span>
</div>
<h3 className="text-lg font-semibold text-white mb-2 tracking-tight">Launch</h3>
<p className="text-sm text-zinc-400">Rigorous QA testing, performance optimization, and seamless deployment to production.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-5xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">Why Choose NEXCRAFT</h2>
<p className="text-zinc-400 text-base max-w-2xl mx-auto">We eliminate the typical frustrations of working with traditional agencies.</p>
</div>
<div className="glass border border-zinc-800 rounded-2xl overflow-hidden">
<div className="grid grid-cols-3 bg-zinc-900/50 border-b border-zinc-800 p-6 text-sm md:text-base">
<div className="font-medium text-zinc-400">Features</div>
<div className="font-semibold text-white text-center">NEXCRAFT</div>
<div className="font-medium text-zinc-500 text-center">Typical Agency</div>
</div>
<div className="divide-y divide-zinc-800/50">

<div className="grid grid-cols-3 p-6 items-center hover:bg-zinc-900/30 transition-colors text-sm md:text-base">
<div className="text-zinc-300">Delivery Speed</div>
<div className="text-center text-white font-medium">Weeks, not months</div>
<div className="text-center text-zinc-500">Months or years</div>
</div>

<div className="grid grid-cols-3 p-6 items-center hover:bg-zinc-900/30 transition-colors text-sm md:text-base">
<div className="text-zinc-300">Code Quality</div>
<div className="flex justify-center text-indigo-400"><iconify-icon className="text-xl" icon="solar:check-circle-linear"></iconify-icon></div>
<div className="flex justify-center text-zinc-600"><iconify-icon className="text-xl" icon="solar:close-circle-linear"></iconify-icon></div>
</div>

<div className="grid grid-cols-3 p-6 items-center hover:bg-zinc-900/30 transition-colors text-sm md:text-base">
<div className="text-zinc-300">Communication</div>
<div className="text-center text-white font-medium">Direct Slack Channel</div>
<div className="text-center text-zinc-500">Slow email threads</div>
</div>

<div className="grid grid-cols-3 p-6 items-center hover:bg-zinc-900/30 transition-colors text-sm md:text-base">
<div className="text-zinc-300">Pricing Structure</div>
<div className="text-center text-white font-medium">Transparent &amp; Fixed</div>
<div className="text-center text-zinc-500">Hidden fees</div>
</div>

<div className="grid grid-cols-3 p-6 items-center hover:bg-zinc-900/30 transition-colors text-sm md:text-base">
<div className="text-zinc-300">Dedicated Team</div>
<div className="flex justify-center text-indigo-400"><iconify-icon className="text-xl" icon="solar:check-circle-linear"></iconify-icon></div>
<div className="flex justify-center text-zinc-600"><iconify-icon className="text-xl" icon="solar:close-circle-linear"></iconify-icon></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-zinc-950/50 border-y border-zinc-900">
<div className="max-w-7xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center text-white mb-16">Client Success Stories</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="glass-card p-6 rounded-2xl flex flex-col justify-between">
<div>
<div className="flex text-indigo-400 mb-4 space-x-1">
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-zinc-300 leading-relaxed mb-6">"NEXCRAFT completely revamped our platform. Their attention to detail in UI design and the speed of the final product exceeded our expectations."</p>
</div>
<div className="flex items-center space-x-3">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-500">
<iconify-icon className="text-2xl" icon="solar:user-circle-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-white">Sarah Jenkins</h4>
<p className="text-xs text-zinc-500">Founder, TechFlow</p>
</div>
</div>
</div>

<div className="glass-card p-6 rounded-2xl flex flex-col justify-between">
<div>
<div className="flex text-indigo-400 mb-4 space-x-1">
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-zinc-300 leading-relaxed mb-6">"We needed a complex web app built fast. They delivered a scalable solution in 6 weeks that our internal team uses daily without a hitch."</p>
</div>
<div className="flex items-center space-x-3">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-500">
<iconify-icon className="text-2xl" icon="solar:user-circle-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-white">David Chen</h4>
<p className="text-xs text-zinc-500">CTO, Logistix</p>
</div>
</div>
</div>

<div className="glass-card p-6 rounded-2xl flex flex-col justify-between">
<div>
<div className="flex text-indigo-400 mb-4 space-x-1">
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-zinc-300 leading-relaxed mb-6">"The communication was phenomenal. We always knew what stage the project was in. Our conversion rate jumped 40% after the redesign."</p>
</div>
<div className="flex items-center space-x-3">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-500">
<iconify-icon className="text-2xl" icon="solar:user-circle-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-white">Elena Rostova</h4>
<p className="text-xs text-zinc-500">Marketing Dir, Aura</p>
</div>
</div>
</div>

<div className="glass-card p-6 rounded-2xl flex flex-col justify-between">
<div>
<div className="flex text-indigo-400 mb-4 space-x-1">
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-zinc-300 leading-relaxed mb-6">"Professional, fast, and highly skilled. They didn't just write code; they provided strategic advice that saved us money in the long run."</p>
</div>
<div className="flex items-center space-x-3">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-500">
<iconify-icon className="text-2xl" icon="solar:user-circle-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-white">Marcus Webb</h4>
<p className="text-xs text-zinc-500">CEO, Vertex</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative" id="pricing">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">Transparent Pricing</h2>
<p className="text-zinc-400 text-base max-w-2xl mx-auto">Choose a plan that fits your project scope. No hidden fees, ever.</p>
</div>

<div className="flex justify-center mb-16">
<div className="glass p-1 rounded-full inline-flex border border-zinc-800 relative">
<button className="px-6 py-2 rounded-full text-sm font-medium text-white bg-zinc-800/80 shadow-sm relative z-10 transition-colors">Monthly</button>
<button className="px-6 py-2 rounded-full text-sm font-medium text-zinc-400 hover:text-white transition-colors relative z-10">Yearly <span className="text-xs text-indigo-400 ml-1">-20%</span></button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-5xl mx-auto">

<div className="glass-card p-8 rounded-3xl border border-zinc-800">
<h3 className="text-lg font-semibold text-white tracking-tight mb-2">Starter</h3>
<p className="text-sm text-zinc-400 mb-6 h-10">Perfect for landing pages and small business websites.</p>
<div className="mb-8">
<span className="text-4xl font-semibold text-white tracking-tighter">$2,500</span>
<span className="text-zinc-500 text-sm">/project</span>
</div>
<a className="w-full block text-center glass border border-zinc-700 hover:bg-zinc-800 text-white transition-colors rounded-full font-medium text-sm px-6 py-3 mb-8" href="#contact">
                        Get Started
                    </a>
<ul className="space-y-4 text-sm text-zinc-300">
<li className="flex items-start space-x-3"><iconify-icon className="text-indigo-400 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon><span>Up to 5 Pages</span></li>
<li className="flex items-start space-x-3"><iconify-icon className="text-indigo-400 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon><span>Custom UI Design</span></li>
<li className="flex items-start space-x-3"><iconify-icon className="text-indigo-400 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon><span>Mobile Responsive</span></li>
<li className="flex items-start space-x-3"><iconify-icon className="text-indigo-400 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon><span>Basic SEO Setup</span></li>
<li className="flex items-start space-x-3 opacity-40"><iconify-icon className="text-zinc-500 text-lg shrink-0 mt-0.5" icon="solar:close-circle-linear"></iconify-icon><span>CMS Integration</span></li>
</ul>
</div>

<div className="glass-card p-8 rounded-3xl border border-indigo-500/50 bg-zinc-900/80 relative transform md:-translate-y-4 shadow-[0_0_40px_rgba(99,102,241,0.1)]">
<div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
<span className="bg-indigo-500 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">Most Popular</span>
</div>
<h3 className="text-lg font-semibold text-white tracking-tight mb-2">Pro</h3>
<p className="text-sm text-zinc-400 mb-6 h-10">Ideal for e-commerce, web apps, and growing startups.</p>
<div className="mb-8">
<span className="text-4xl font-semibold text-white tracking-tighter">$6,000</span>
<span className="text-zinc-500 text-sm">/project</span>
</div>
<a className="w-full block text-center bg-white text-black hover:bg-zinc-200 transition-colors rounded-full font-medium text-sm px-6 py-3 mb-8" href="#contact">
                        Get Started
                    </a>
<ul className="space-y-4 text-sm text-zinc-300">
<li className="flex items-start space-x-3"><iconify-icon className="text-indigo-400 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon><span>Unlimited Pages / Core App Features</span></li>
<li className="flex items-start space-x-3"><iconify-icon className="text-indigo-400 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon><span>Advanced Animations</span></li>
<li className="flex items-start space-x-3"><iconify-icon className="text-indigo-400 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon><span>CMS / Database Integration</span></li>
<li className="flex items-start space-x-3"><iconify-icon className="text-indigo-400 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon><span>Performance Optimization</span></li>
<li className="flex items-start space-x-3"><iconify-icon className="text-indigo-400 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon><span>30 Days Post-Launch Support</span></li>
</ul>
</div>

<div className="glass-card p-8 rounded-3xl border border-zinc-800">
<h3 className="text-lg font-semibold text-white tracking-tight mb-2">Enterprise</h3>
<p className="text-sm text-zinc-400 mb-6 h-10">For large-scale applications requiring dedicated resources.</p>
<div className="mb-8">
<span className="text-4xl font-semibold text-white tracking-tighter">Custom</span>
<span className="text-zinc-500 text-sm">/retainer</span>
</div>
<a className="w-full block text-center glass border border-zinc-700 hover:bg-zinc-800 text-white transition-colors rounded-full font-medium text-sm px-6 py-3 mb-8" href="#contact">
                        Contact Us
                    </a>
<ul className="space-y-4 text-sm text-zinc-300">
<li className="flex items-start space-x-3"><iconify-icon className="text-indigo-400 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon><span>Dedicated Development Team</span></li>
<li className="flex items-start space-x-3"><iconify-icon className="text-indigo-400 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon><span>Custom System Architecture</span></li>
<li className="flex items-start space-x-3"><iconify-icon className="text-indigo-400 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon><span>Third-Party API Integrations</span></li>
<li className="flex items-start space-x-3"><iconify-icon className="text-indigo-400 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon><span>SLA &amp; 24/7 Monitoring</span></li>
<li className="flex items-start space-x-3"><iconify-icon className="text-indigo-400 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon><span>Scalability Planning</span></li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-zinc-900">
<div className="max-w-3xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">Frequently Asked Questions</h2>
</div>
<div className="space-y-4">

<details className="group glass-card rounded-2xl border border-zinc-800 overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-white font-medium">
<h3 className="text-base tracking-tight">How long does a typical project take?</h3>
<span className="relative h-5 w-5 shrink-0 text-zinc-400 group-open:text-indigo-400 transition-colors">
<iconify-icon className="absolute inset-0 text-xl opacity-100 group-open:opacity-0 transition-opacity" icon="solar:add-circle-linear"></iconify-icon>
<iconify-icon className="absolute inset-0 text-xl opacity-0 group-open:opacity-100 transition-opacity" icon="solar:minus-circle-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-zinc-400 leading-relaxed border-t border-zinc-800/50 pt-4 mt-2">
                        A standard corporate website usually takes 3-4 weeks. More complex web or mobile applications typically range from 8 to 12 weeks depending on the feature set and integrations required. We provide a detailed timeline during the discovery phase.
                    </div>
</details>

<details className="group glass-card rounded-2xl border border-zinc-800 overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-white font-medium">
<h3 className="text-base tracking-tight">What tech stack do you use?</h3>
<span className="relative h-5 w-5 shrink-0 text-zinc-400 group-open:text-indigo-400 transition-colors">
<iconify-icon className="absolute inset-0 text-xl opacity-100 group-open:opacity-0 transition-opacity" icon="solar:add-circle-linear"></iconify-icon>
<iconify-icon className="absolute inset-0 text-xl opacity-0 group-open:opacity-100 transition-opacity" icon="solar:minus-circle-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-zinc-400 leading-relaxed border-t border-zinc-800/50 pt-4 mt-2">
                        We specialize in modern Javascript/TypeScript ecosystems. For web development, we primarily use React, Next.js, and Node.js. For mobile apps, we prefer React Native. We use Tailwind CSS for styling and rely on modern backend solutions like Supabase, Firebase, or custom AWS architectures.
                    </div>
</details>

<details className="group glass-card rounded-2xl border border-zinc-800 overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-white font-medium">
<h3 className="text-base tracking-tight">Do you provide maintenance after launch?</h3>
<span className="relative h-5 w-5 shrink-0 text-zinc-400 group-open:text-indigo-400 transition-colors">
<iconify-icon className="absolute inset-0 text-xl opacity-100 group-open:opacity-0 transition-opacity" icon="solar:add-circle-linear"></iconify-icon>
<iconify-icon className="absolute inset-0 text-xl opacity-0 group-open:opacity-100 transition-opacity" icon="solar:minus-circle-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-zinc-400 leading-relaxed border-t border-zinc-800/50 pt-4 mt-2">
                        Yes, we offer ongoing maintenance and support packages. This includes regular security updates, performance monitoring, bug fixes, and a set amount of hours for new feature development each month to ensure your product continues to scale.
                    </div>
</details>

<details className="group glass-card rounded-2xl border border-zinc-800 overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-white font-medium">
<h3 className="text-base tracking-tight">How do we communicate during the project?</h3>
<span className="relative h-5 w-5 shrink-0 text-zinc-400 group-open:text-indigo-400 transition-colors">
<iconify-icon className="absolute inset-0 text-xl opacity-100 group-open:opacity-0 transition-opacity" icon="solar:add-circle-linear"></iconify-icon>
<iconify-icon className="absolute inset-0 text-xl opacity-0 group-open:opacity-100 transition-opacity" icon="solar:minus-circle-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-zinc-400 leading-relaxed border-t border-zinc-800/50 pt-4 mt-2">
                        We set up a shared Slack or Discord channel for quick, day-to-day communication. We also hold weekly check-in calls (via Google Meet or Zoom) to review progress, demonstrate new features, and gather your feedback. You'll also have access to our project management board (Linear/Trello).
                    </div>
</details>

<details className="group glass-card rounded-2xl border border-zinc-800 overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-white font-medium">
<h3 className="text-base tracking-tight">Can you work with our existing design?</h3>
<span className="relative h-5 w-5 shrink-0 text-zinc-400 group-open:text-indigo-400 transition-colors">
<iconify-icon className="absolute inset-0 text-xl opacity-100 group-open:opacity-0 transition-opacity" icon="solar:add-circle-linear"></iconify-icon>
<iconify-icon className="absolute inset-0 text-xl opacity-0 group-open:opacity-100 transition-opacity" icon="solar:minus-circle-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-zinc-400 leading-relaxed border-t border-zinc-800/50 pt-4 mt-2">
                        Absolutely. If you already have Figma files or wireframes ready, our development team can step in and translate them into pixel-perfect, highly functional code. We might suggest UX improvements if we spot opportunities during the handoff.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden" id="contact">
<div className="max-w-5xl mx-auto">
<div className="glass-card rounded-3xl p-10 md:p-20 text-center border border-indigo-500/30 relative overflow-hidden bg-gradient-to-b from-zinc-900 to-zinc-950 shadow-[0_0_80px_rgba(99,102,241,0.15)]">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiLz48L3N2Zz4=')] [mask-image:radial-gradient(ellipse_at_center,white,transparent_80%)]"></div>
<div className="relative z-10">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-white mb-6">Ready to build <br className="md:hidden"/> something great?</h2>
<p className="text-zinc-400 text-base md:text-lg max-w-xl mx-auto mb-10">Let's discuss your project requirements and how NEXCRAFT can help you achieve your business goals.</p>
<a className="inline-flex items-center justify-center bg-white text-black hover:bg-zinc-200 transition-colors rounded-full font-medium text-base px-8 py-4 shadow-xl shadow-white/10" href="mailto:hello@nexcraft.com">
                        Let's Talk
                        <iconify-icon className="ml-2 text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<p className="mt-4 text-xs text-zinc-500">Free 30-minute discovery call • No obligation</p>
</div>
</div>
</div>
</section>

<footer className="border-t border-zinc-900 bg-zinc-950 pt-16 pb-8 px-6">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<a className="text-white font-semibold tracking-tighter text-xl mb-4 block" href="#">NEXCRAFT</a>
<p className="text-sm text-zinc-500 leading-relaxed mb-6 max-w-xs">We build digital experiences that drive results for ambitious brands worldwide.</p>
<div className="flex space-x-4">
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:twitter-linear"></iconify-icon></a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:linkedin-linear"></iconify-icon></a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:github-linear"></iconify-icon></a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:figma-linear"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-4">Services</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-indigo-400 transition-colors" href="#">Web Development</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Mobile Apps</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">UI/UX Design</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">E-Commerce</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">SEO Optimization</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-4">Company</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-white transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-white transition-colors" href="#work">Portfolio</a></li>
<li><a className="hover:text-white transition-colors" href="#pricing">Pricing</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-4">Contact</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-white transition-colors flex items-center gap-2" href="mailto:hello@nexcraft.agency"><iconify-icon icon="solar:letter-linear"></iconify-icon> hello@nexcraft.agency</a></li>
<li><span className="flex items-center gap-2"><iconify-icon icon="solar:map-point-linear"></iconify-icon> Remote / Global</span></li>
</ul>
</div>
</div>
<div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-600">
<p>© 2024 NEXCRAFT Agency. All rights reserved.</p>
<div className="flex space-x-6">
<a className="hover:text-zinc-400 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-zinc-400 transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
