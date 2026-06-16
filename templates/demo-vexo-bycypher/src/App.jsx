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
      

<div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-900/20 blur-[120px] pointer-events-none -z-10"></div>
<div className="fixed bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-900/10 blur-[120px] pointer-events-none -z-10"></div>

<nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-b-0 border-t-0 border-l-0 border-r-0 border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-12">
<a className="text-xl font-semibold tracking-tighter text-white" href="#">VEXO</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm text-slate-400 hover:text-white transition-colors" href="#">Home</a>
<a className="text-sm text-slate-400 hover:text-white transition-colors" href="#">Community</a>
<a className="text-sm text-slate-400 hover:text-white transition-colors" href="#">Startups</a>
<a className="text-sm text-slate-400 hover:text-white transition-colors" href="#">Resources</a>
<a className="text-sm text-slate-400 hover:text-white transition-colors" href="#">About</a>
</div>
</div>
<div className="flex items-center">
<a className="text-sm font-medium text-white bg-white/10 hover:bg-white/15 border border-white/10 px-4 py-2 rounded-full transition-all flex items-center gap-2" href="#">
                    Join Now
                </a>
</div>
</div>
</nav>

<section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
<div className="absolute inset-0 bg-grid pointer-events-none -z-10"></div>
<div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-16 items-center">

<div className="flex flex-col gap-8 relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-cyan-400 text-xs font-medium w-fit">
<span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                    VEXO v2.0 is now live
                </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.1] text-gradient">
                    Build Your Startup. <br/>
                    Find Your Team. <br/>
<span className="text-gradient-accent">Launch Faster.</span>
</h1>
<p className="text-lg md:text-xl text-slate-400 max-w-xl leading-relaxed font-normal">
                    A community where builders, developers, designers and founders connect to turn ideas into real startups.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
<a className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white text-sm font-medium shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] transition-all flex items-center justify-center gap-2 group" href="#">
<iconify-icon className="text-lg group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" icon="solar:rocket-linear"></iconify-icon>
                        Join VEXO
                    </a>
<a className="w-full sm:w-auto px-8 py-3.5 rounded-full glass-panel hover:bg-white/5 text-white text-sm font-medium transition-all text-center" href="#">
                        Explore Community
                    </a>
</div>

<div className="pt-8 border-t border-white/5 flex items-center gap-4">
<div className="flex -space-x-3">
<div className="w-8 h-8 rounded-full border border-slate-900 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-xs font-medium">A</div>
<div className="w-8 h-8 rounded-full border border-slate-900 bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-xs font-medium">M</div>
<div className="w-8 h-8 rounded-full border border-slate-900 bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-xs font-medium">J</div>
<div className="w-8 h-8 rounded-full border border-slate-900 bg-slate-800 flex items-center justify-center text-xs font-medium">+2k</div>
</div>
<p className="text-xs text-slate-400 max-w-xs leading-snug">
                        Join a growing network of ambitious builders creating the next generation of startups.
                    </p>
</div>
</div>

<div className="relative w-full h-[500px] hidden lg:block perspective-[2000px]">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 animate-float">

<div className="absolute inset-0 bg-cyan-500/30 rounded-3xl blur-[50px] animate-glow"></div>

<div className="absolute inset-0 rounded-3xl border border-white/20 bg-gradient-to-br from-white/10 to-transparent backdrop-blur-md shadow-[inset_0_0_20px_rgba(255,255,255,0.05)] flex items-center justify-center z-20">
<div className="w-32 h-32 rounded-2xl border border-cyan-500/30 bg-cyan-500/5 backdrop-blur-sm flex items-center justify-center relative overflow-hidden">
<div className="absolute w-[200%] h-[1px] bg-cyan-400/30 rotate-45 top-1/2 -translate-y-1/2"></div>
<div className="absolute h-[200%] w-[1px] bg-cyan-400/30 -rotate-45 left-1/2 -translate-x-1/2"></div>
<iconify-icon className="text-6xl text-cyan-300 relative z-10 drop-shadow-[0_0_15px_rgba(103,232,249,0.5)]" icon="solar:box-minimalistic-linear"></iconify-icon>
</div>
</div>

<div className="absolute inset-4 rounded-3xl border border-blue-500/20 bg-blue-500/5 -z-10 translate-z-[-50px] rotate-6"></div>
</div>

<div className="absolute top-[20%] right-[15%] w-12 h-12 rounded-full glass-card flex items-center justify-center animate-float-reverse shadow-[0_0_15px_rgba(59,130,246,0.3)]">
<iconify-icon className="text-xl text-blue-400" icon="solar:code-square-linear"></iconify-icon>
</div>
<div className="absolute bottom-[25%] left-[10%] w-14 h-14 rounded-xl glass-card flex items-center justify-center animate-float shadow-[0_0_15px_rgba(168,85,247,0.3)]" style={{animationDelay: '-2s'}}>
<iconify-icon className="text-2xl text-purple-400" icon="solar:pen-linear"></iconify-icon>
</div>
<div className="absolute top-[60%] right-[5%] w-10 h-10 rounded-full glass-card flex items-center justify-center animate-float-reverse shadow-[0_0_15px_rgba(34,211,238,0.3)]" style={{animationDelay: '-4s'}}>
<iconify-icon className="text-lg text-cyan-400" icon="solar:users-group-rounded-linear"></iconify-icon>
</div>

<svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20 -z-10" viewbox="0 0 500 500">
<path d="M 250 250 L 400 150 M 250 250 L 100 350 M 250 250 L 420 320" stroke="url(#line-gradient)" stroke-dasharray="4 4" strokeWidth="1"></path>
<defs>
<lineargradient id="line-gradient" x1="0%" x2="100%" y1="0%" y2="100%">
<stop offset="0%" stop-color="#3b82f6"></stop>
<stop offset="100%" stop-color="#22d3ee"></stop>
</lineargradient>
</defs>
</svg>
</div>
</div>
</section>

<section className="py-24 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
                    Everything You Need to Build a Startup
                </h2>
<p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
                    From finding the right people to launching your first product, VEXO provides the ecosystem for your success.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-card rounded-2xl p-8 relative overflow-hidden group">
<div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-[40px] group-hover:bg-blue-500/20 transition-colors"></div>
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-blue-500/50 transition-all">
<iconify-icon className="text-2xl text-blue-400" icon="solar:user-plus-rounded-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-white mb-2">Find Co-Founders</h3>
<p className="text-sm text-slate-400 leading-relaxed">
                        Connect with developers, designers and marketers ready to build. Filter by skills, interests, and commitment level.
                    </p>
</div>

<div className="glass-card rounded-2xl p-8 relative overflow-hidden group">
<div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-[40px] group-hover:bg-purple-500/20 transition-colors"></div>
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-purple-500/50 transition-all">
<iconify-icon className="text-2xl text-purple-400" icon="solar:lightbulb-bolt-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-white mb-2">Collaborate on Ideas</h3>
<p className="text-sm text-slate-400 leading-relaxed">
                        Turn ideas into real projects with ambitious builders. Use our shared workspaces to map out your MVP.
                    </p>
</div>

<div className="glass-card rounded-2xl p-8 relative overflow-hidden group">
<div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-[40px] group-hover:bg-cyan-500/20 transition-colors"></div>
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-cyan-500/50 transition-all">
<iconify-icon className="text-2xl text-cyan-400" icon="solar:rocket-2-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-white mb-2">Launch Faster</h3>
<p className="text-sm text-slate-400 leading-relaxed">
                        Build MVPs, validate ideas and grow together. Get early feedback from a community that understands shipping.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-grid opacity-30 pointer-events-none mask-radial"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6">
                A Network of Builders
            </h2>
<p className="text-base md:text-lg text-slate-400 mb-12 max-w-2xl mx-auto">
                VEXO brings together ambitious creators from around the world who want to build the next big thing. Stop building in isolation.
            </p>

<div className="flex flex-wrap items-center justify-center gap-4 mb-16">
<div className="px-5 py-2.5 rounded-full glass-panel flex items-center gap-2 hover:-translate-y-1 transition-transform cursor-default border-blue-500/20">
<iconify-icon className="text-blue-400" icon="solar:user-linear"></iconify-icon>
<span className="text-sm font-medium text-slate-200">Founders</span>
</div>
<div className="px-5 py-2.5 rounded-full glass-panel flex items-center gap-2 hover:-translate-y-1 transition-transform cursor-default border-cyan-500/20">
<iconify-icon className="text-cyan-400" icon="solar:code-circle-linear"></iconify-icon>
<span className="text-sm font-medium text-slate-200">Developers</span>
</div>
<div className="px-5 py-2.5 rounded-full glass-panel flex items-center gap-2 hover:-translate-y-1 transition-transform cursor-default border-purple-500/20">
<iconify-icon className="text-purple-400" icon="solar:pen-linear"></iconify-icon>
<span className="text-sm font-medium text-slate-200">Designers</span>
</div>
<div className="px-5 py-2.5 rounded-full glass-panel flex items-center gap-2 hover:-translate-y-1 transition-transform cursor-default border-emerald-500/20">
<iconify-icon className="text-emerald-400" icon="solar:laptop-minimalistic-linear"></iconify-icon>
<span className="text-sm font-medium text-slate-200">Indie Hackers</span>
</div>
</div>

<div className="relative w-full max-w-lg mx-auto h-64">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-white/10 flex items-center justify-center">
<div className="w-24 h-24 rounded-full border border-white/20 flex items-center justify-center bg-white/5 backdrop-blur-sm">
<iconify-icon className="text-4xl text-slate-300" icon="solar:users-group-two-rounded-linear"></iconify-icon>
</div>
</div>

<div className="absolute top-4 left-[20%] w-12 h-12 rounded-full border border-blue-500/30 bg-blue-950/50 backdrop-blur-md flex items-center justify-center animate-float shadow-[0_0_20px_rgba(59,130,246,0.2)]">
<span className="text-xs font-semibold text-blue-300">JD</span>
</div>
<div className="absolute bottom-10 left-[10%] w-10 h-10 rounded-full border border-cyan-500/30 bg-cyan-950/50 backdrop-blur-md flex items-center justify-center animate-float-reverse" style={{animationDelay: '-1s'}}>
<span className="text-xs font-semibold text-cyan-300">AL</span>
</div>
<div className="absolute top-10 right-[15%] w-14 h-14 rounded-full border border-purple-500/30 bg-purple-950/50 backdrop-blur-md flex items-center justify-center animate-float" style={{animationDelay: '-2s'}}>
<span className="text-xs font-semibold text-purple-300">MK</span>
</div>
<div className="absolute bottom-4 right-[25%] w-10 h-10 rounded-full border border-emerald-500/30 bg-emerald-950/50 backdrop-blur-md flex items-center justify-center animate-float-reverse" style={{animationDelay: '-3s'}}>
<span className="text-xs font-semibold text-emerald-300">RS</span>
</div>

<svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" viewbox="0 0 500 250">
<path d="M 250 125 L 150 40 M 250 125 L 100 210 M 250 125 L 380 60 M 250 125 L 350 220" stroke="white" stroke-dasharray="2 4" strokeWidth="1"></path>
</svg>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-12">
                Start Building in Minutes
            </h2>
<div className="grid grid-cols-1 md:grid-cols-4 gap-4">

<div className="glass-card rounded-2xl p-6 relative overflow-hidden group h-full">
<div className="absolute -right-4 -bottom-8 text-8xl font-semibold text-white/[0.03] group-hover:text-white/[0.05] transition-colors pointer-events-none">1</div>
<div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-4">
<iconify-icon className="text-xl text-slate-300" icon="solar:login-2-linear"></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight text-white mb-2">Join the community</h3>
<p className="text-xs text-slate-400 leading-relaxed">Create your builder profile and set your preferences.</p>
</div>

<div className="glass-card rounded-2xl p-6 relative overflow-hidden group h-full">
<div className="absolute -right-4 -bottom-8 text-8xl font-semibold text-white/[0.03] group-hover:text-white/[0.05] transition-colors pointer-events-none">2</div>
<div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-4">
<iconify-icon className="text-xl text-slate-300" icon="solar:lightbulb-linear"></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight text-white mb-2">Share or discover</h3>
<p className="text-xs text-slate-400 leading-relaxed">Pitch your startup idea or browse projects looking for talent.</p>
</div>

<div className="glass-card rounded-2xl p-6 relative overflow-hidden group h-full">
<div className="absolute -right-4 -bottom-8 text-8xl font-semibold text-white/[0.03] group-hover:text-white/[0.05] transition-colors pointer-events-none">3</div>
<div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-4">
<iconify-icon className="text-xl text-slate-300" icon="solar:users-group-rounded-linear"></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight text-white mb-2">Find teammates</h3>
<p className="text-xs text-slate-400 leading-relaxed">Connect, chat, and form your founding team within the platform.</p>
</div>

<div className="glass-card rounded-2xl p-6 relative overflow-hidden group h-full">
<div className="absolute -right-4 -bottom-8 text-8xl font-semibold text-white/[0.03] group-hover:text-white/[0.05] transition-colors pointer-events-none">4</div>
<div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-4">
<iconify-icon className="text-xl text-slate-300" icon="solar:rocket-linear"></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight text-white mb-2">Launch project</h3>
<p className="text-xs text-slate-400 leading-relaxed">Build your MVP, get early traction, and launch to the world.</p>
</div>
</div>
</div>
</section>

<section className="py-32 relative border-t border-white/5">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-8 leading-tight">
                The Launchpad for the <br/> Next Generation of <span className="text-gradient">Founders</span>
</h2>
<div className="flex flex-col gap-2 text-lg md:text-xl text-slate-400 font-normal">
<p>VEXO is where ideas meet execution.</p>
<p>Where builders meet cofounders.</p>
<p className="text-slate-200">Where startups begin.</p>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-5xl mx-auto rounded-3xl glass-panel relative overflow-hidden border border-white/10">

<div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/20 blur-[100px] rounded-full mix-blend-screen pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500/20 blur-[100px] rounded-full mix-blend-screen pointer-events-none"></div>
<div className="relative z-10 p-12 md:p-20 text-center flex flex-col items-center">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6">
                    Your Startup Journey Starts Here
                </h2>
<p className="text-sm md:text-base text-slate-400 mb-10 max-w-lg">
                    Start building with people who believe in big ideas. Join thousands of founders shaping the future.
                </p>
<a className="px-8 py-4 rounded-full bg-white text-black hover:bg-slate-200 text-sm font-semibold transition-all flex items-center gap-2 shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)]" href="#">
<iconify-icon className="text-lg" icon="solar:rocket-linear"></iconify-icon>
                    Join VEXO Now
                </a>
</div>
</div>
</section>

<footer className="border-t border-white/5 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
<div>
<a className="text-xl font-semibold tracking-tighter text-white inline-block mb-4" href="#">VEXO</a>
<p className="text-xs text-slate-500 max-w-xs">
                        The community platform connecting builders, designers, and founders to launch the next generation of startups.
                    </p>
</div>
<div className="flex gap-16">
<div className="flex flex-col gap-4">
<span className="text-sm font-semibold text-white">Product</span>
<a className="text-xs text-slate-400 hover:text-white transition-colors" href="#">Features</a>
<a className="text-xs text-slate-400 hover:text-white transition-colors" href="#">Pricing</a>
<a className="text-xs text-slate-400 hover:text-white transition-colors" href="#">Changelog</a>
</div>
<div className="flex flex-col gap-4">
<span className="text-sm font-semibold text-white">Community</span>
<a className="text-xs text-slate-400 hover:text-white transition-colors" href="#">Explore</a>
<a className="text-xs text-slate-400 hover:text-white transition-colors" href="#">Startups</a>
<a className="text-xs text-slate-400 hover:text-white transition-colors" href="#">Events</a>
</div>
<div className="flex flex-col gap-4">
<span className="text-sm font-semibold text-white">Resources</span>
<a className="text-xs text-slate-400 hover:text-white transition-colors" href="#">Blog</a>
<a className="text-xs text-slate-400 hover:text-white transition-colors" href="#">Guides</a>
<a className="text-xs text-slate-400 hover:text-white transition-colors" href="#">Help Center</a>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/5">
<p className="text-xs text-slate-500">© 2026 VEXO — Build the Future</p>
<div className="flex items-center gap-4">
<a className="text-slate-500 hover:text-white transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:twitter-linear"></iconify-icon>
</a>
<a className="text-slate-500 hover:text-white transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:github-linear"></iconify-icon>
</a>
<a className="text-slate-500 hover:text-white transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:discord-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
