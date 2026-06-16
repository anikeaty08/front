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
      

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#88e788] opacity-[0.08] blur-[120px] rounded-full"></div>
<div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#88e788] opacity-[0.03] blur-[100px] rounded-full"></div>
<div className="absolute inset-0 bg-grid mask-image-gradient"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/70 backdrop-blur-xl transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<span className="iconify text-[#88e788] group-hover:rotate-90 transition-transform duration-500" data-height="20" data-icon="lucide:cpu" data-width="20"></span>
<span className="text-white font-semibold text-lg tracking-tight">Blinkpage</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
<a className="hover:text-white transition-colors" href="#">Features</a>
<a className="hover:text-white transition-colors" href="#">Templates</a>
<a className="hover:text-white transition-colors" href="#">Pricing</a>
<a className="hover:text-white transition-colors" href="#">Enterprise</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-gray-400 hover:text-white transition-colors" href="#">Log in</a>
<a className="px-4 py-2 bg-white/5 hover:bg-white/10 text-white text-xs font-medium rounded-full border border-white/10 transition-all hover:border-[#88e788]/30 hover:shadow-[0_0_15px_rgba(136,231,136,0.2)]" href="#">
                    Get Started
                </a>
</div>
</div>
</nav>

<main className="relative z-10 pt-32 pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#88e788]/20 bg-[#88e788]/5 text-[#88e788] text-[10px] uppercase tracking-widest font-medium mb-8 animate-fade-in">
<span className="w-1.5 h-1.5 rounded-full bg-[#88e788] animate-pulse"></span>
            Blinkpage AI 2.0 Now Live
        </div>

<h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tight leading-[1.1] mb-6 max-w-4xl">
            Dream it. <br className="md:hidden"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50">Describe it.</span>
<span className="text-[#88e788]">Deploy it.</span>
</h1>
<p className="text-gray-400 text-lg md:text-xl max-w-2xl mb-10 font-light leading-relaxed">
            Generate high-fidelity, responsive websites in seconds with a single prompt. 
            The first AI builder that understands design systems.
        </p>

<div className="w-full max-w-xl relative group mb-16">
<div className="absolute -inset-0.5 bg-gradient-to-r from-[#88e788]/50 to-[#88e788]/10 rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
<div className="relative bg-black rounded-xl border border-white/10 p-2 pl-4 flex items-center input-glow transition-all duration-300">
<span className="iconify text-gray-500 mr-3" data-icon="lucide:sparkles" data-width="20"></span>
<input className="bg-transparent w-full text-white placeholder-gray-600 focus:outline-none text-sm h-10" placeholder="A portfolio for a minimal architect in Tokyo..." type="text"/>
<button className="bg-[#88e788] hover:bg-[#76d676] text-black px-5 py-2.5 rounded-lg text-sm font-semibold tracking-tight transition-all shadow-[0_0_20px_rgba(136,231,136,0.3)] hover:shadow-[0_0_30px_rgba(136,231,136,0.5)] flex items-center gap-2">
                    Generate
                    <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
</div>
</div>

<div className="relative w-full max-w-5xl h-[400px] md:h-[600px] perspective-[2000px] mt-10">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[#88e788] opacity-[0.05] blur-[80px]"></div>

<div className="absolute top-10 -left-10 md:left-0 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-[#0a0a0a] border border-white/10 rounded-lg shadow-2xl transform -rotate-6 translate-z-[-50px] opacity-60 z-0 overflow-hidden">
<div className="p-4 border-b border-white/5 flex gap-2">
<div className="w-2 h-2 rounded-full bg-white/20"></div>
<div className="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<div className="p-6 space-y-4 opacity-50">
<div className="h-8 w-1/2 bg-white/10 rounded"></div>
<div className="h-4 w-full bg-white/5 rounded"></div>
<div className="h-4 w-3/4 bg-white/5 rounded"></div>
<div className="grid grid-cols-2 gap-4 mt-8">
<div className="h-24 bg-white/5 rounded"></div>
<div className="h-24 bg-white/5 rounded"></div>
</div>
</div>
</div>

<div className="absolute top-10 -right-10 md:right-0 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-[#0a0a0a] border border-white/10 rounded-lg shadow-2xl transform rotate-6 translate-z-[-50px] opacity-60 z-0 overflow-hidden">
<div className="p-4 border-b border-white/5 flex gap-2">
<div className="w-2 h-2 rounded-full bg-white/20"></div>
<div className="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<div className="p-6 flex flex-col items-center justify-center h-full opacity-50">
<div className="w-20 h-20 rounded-full bg-white/10 mb-4"></div>
<div className="h-4 w-32 bg-white/10 rounded mb-2"></div>
<div className="h-3 w-20 bg-white/5 rounded"></div>
</div>
</div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[340px] md:w-[600px] h-auto aspect-[16/10] bg-[#050505] border border-white/10 rounded-xl shadow-[0_20px_50px_-12px_rgba(0,0,0,1)] ring-1 ring-white/5 z-10 animate-float overflow-hidden">

<div className="h-10 border-b border-white/5 bg-white/[0.02] flex items-center px-4 gap-2">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57] opacity-80"></div>
<div className="w-2.5 h-2.5 rounded-full bg-[#febc2e] opacity-80"></div>
<div className="w-2.5 h-2.5 rounded-full bg-[#28c840] opacity-80"></div>
</div>
<div className="mx-auto w-1/2 h-5 bg-white/5 rounded-full flex items-center justify-center text-[8px] text-gray-500 font-mono">blinkpage.ai/generated-site</div>
</div>

<div className="p-8 md:p-12 text-left relative">
<div className="absolute top-0 right-0 p-8">
<div className="w-8 h-8 rounded-full border border-[#88e788] flex items-center justify-center">
<span className="iconify text-[#88e788]" data-icon="lucide:arrow-up-right" data-width="16"></span>
</div>
</div>
<h3 className="text-3xl md:text-4xl font-semibold text-white mb-4 tracking-tight">Future <br/><span className="text-[#88e788]">Architecture.</span></h3>
<p className="text-gray-500 text-xs md:text-sm max-w-[250px] mb-8 leading-relaxed">
                        Sustainable living spaces designed by artificial intelligence, built for the human experience.
                    </p>
<div className="flex gap-4">
<div className="w-24 h-32 bg-white/5 rounded-lg border border-white/5"></div>
<div className="w-24 h-32 bg-white/5 rounded-lg border border-white/5"></div>
</div>
</div>
</div>
</div>
</main>

<section className="border-y border-white/5 bg-white/[0.01]">
<div className="max-w-7xl mx-auto px-6 py-10 flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">

<span className="text-lg font-semibold tracking-tighter">ACME <span className="font-light">CORP</span></span>
<span className="text-lg font-semibold tracking-tighter">VERTEX</span>
<span className="text-lg font-semibold tracking-tighter">OXYGEN</span>
<span className="text-lg font-semibold tracking-tighter">LAYER</span>
<span className="text-lg font-semibold tracking-tighter">SPLICER</span>
</div>
</section>

<section className="py-32 px-6 max-w-7xl mx-auto">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Powerful Features. <br/><span className="text-gray-600">Zero Complexity.</span></h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-card p-8 rounded-2xl group hover:border-[#88e788]/30 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-[#88e788]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<span className="iconify text-[#88e788]" data-icon="lucide:wand-2" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-lg font-medium text-white mb-2">Generative Layouts</h3>
<p className="text-sm text-gray-400 leading-relaxed">
                    Our AI understands spacing, typography, and visual hierarchy. No more broken templates.
                </p>
</div>

<div className="glass-card p-8 rounded-2xl group hover:border-[#88e788]/30 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-[#88e788]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<span className="iconify text-[#88e788]" data-icon="lucide:layers" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-lg font-medium text-white mb-2">Smart Components</h3>
<p className="text-sm text-gray-400 leading-relaxed">
                    Drag and drop intelligent blocks that adapt their style to match your brand automatically.
                </p>
</div>

<div className="glass-card p-8 rounded-2xl group hover:border-[#88e788]/30 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-[#88e788]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<span className="iconify text-[#88e788]" data-icon="lucide:zap" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-lg font-medium text-white mb-2">Instant Publish</h3>
<p className="text-sm text-gray-400 leading-relaxed">
                    Deploy to a global edge network in milliseconds. SSL and custom domains included.
                </p>
</div>

<div className="glass-card p-8 rounded-2xl group hover:border-[#88e788]/30 transition-all duration-300 md:col-span-2 relative overflow-hidden">
<div className="absolute right-0 top-0 w-64 h-64 bg-gradient-to-bl from-[#88e788]/5 to-transparent pointer-events-none"></div>
<div className="flex flex-col md:flex-row gap-8 items-start md:items-center h-full">
<div className="flex-1">
<div className="w-10 h-10 rounded-lg bg-[#88e788]/10 flex items-center justify-center mb-6">
<span className="iconify text-[#88e788]" data-icon="lucide:palette" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-lg font-medium text-white mb-2">Contextual Branding</h3>
<p className="text-sm text-gray-400 leading-relaxed max-w-sm">
                            Upload your logo and let Blinkpage extract colors, fonts, and vibes to build a matching design system instantly.
                        </p>
</div>
<div className="flex-1 w-full bg-black/50 border border-white/10 rounded-lg p-4 h-32 flex items-center justify-center relative">
<div className="absolute inset-0 bg-[#88e788]/5 blur-xl"></div>
<div className="flex gap-2">
<div className="w-8 h-8 rounded bg-[#88e788]"></div>
<div className="w-8 h-8 rounded bg-[#1a1a1a] border border-[#88e788]"></div>
<div className="w-8 h-8 rounded bg-white"></div>
</div>
</div>
</div>
</div>

<div className="glass-card p-8 rounded-2xl group hover:border-[#88e788]/30 transition-all duration-300 flex flex-col justify-between">
<div>
<div className="w-10 h-10 rounded-lg bg-[#88e788]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<span className="iconify text-[#88e788]" data-icon="lucide:code-2" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-lg font-medium text-white mb-2">Export Code</h3>
<p className="text-sm text-gray-400 leading-relaxed">
                        Don't want to host with us? Export clean HTML/Tailwind code.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-20 border-t border-white/5 relative">
<div className="absolute left-0 top-0 w-full h-px bg-gradient-to-r from-transparent via-[#88e788]/50 to-transparent"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-end mb-12">
<div>
<h2 className="text-3xl font-semibold text-white tracking-tight mb-2">Made with Blinkpage</h2>
<p className="text-gray-500 text-sm">Explore what's possible with AI generation.</p>
</div>
<a className="text-sm text-[#88e788] hover:text-white transition-colors flex items-center gap-1" href="#">
                    View Gallery <span className="iconify" data-icon="lucide:arrow-right" data-width="14"></span>
</a>
</div>

<div className="flex gap-6 overflow-x-auto pb-12 -mx-6 px-6 md:mx-0 md:px-0 no-scrollbar">

<div className="min-w-[300px] md:min-w-[350px] aspect-[4/3] rounded-xl relative group overflow-hidden border border-white/10 bg-[#050505]">
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 z-10"></div>
<div className="absolute bottom-0 left-0 p-6 z-20 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
<span className="text-[10px] text-[#88e788] uppercase tracking-wider mb-1 block">SaaS</span>
<h4 className="text-white font-medium text-lg">Linear Clone</h4>
</div>

<div className="w-full h-full bg-[#111] flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
<div className="w-3/4 h-3/4 border border-white/5 rounded bg-white/5 flex flex-col p-3 gap-2">
<div className="h-2 w-1/3 bg-white/20 rounded"></div>
<div className="h-16 w-full bg-white/10 rounded"></div>
</div>
</div>

<div className="absolute inset-0 border-2 border-[#88e788] opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300 pointer-events-none shadow-[inset_0_0_20px_rgba(136,231,136,0.2)]"></div>
</div>

<div className="min-w-[300px] md:min-w-[350px] aspect-[4/3] rounded-xl relative group overflow-hidden border border-white/10 bg-[#050505]">
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 z-10"></div>
<div className="absolute bottom-0 left-0 p-6 z-20 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
<span className="text-[10px] text-[#88e788] uppercase tracking-wider mb-1 block">Portfolio</span>
<h4 className="text-white font-medium text-lg">Dark Mode Portfolio</h4>
</div>
<div className="w-full h-full bg-[#111] flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
<div className="w-20 h-20 rounded-full border border-white/10 bg-white/5"></div>
</div>
<div className="absolute inset-0 border-2 border-[#88e788] opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300 pointer-events-none shadow-[inset_0_0_20px_rgba(136,231,136,0.2)]"></div>
</div>

<div className="min-w-[300px] md:min-w-[350px] aspect-[4/3] rounded-xl relative group overflow-hidden border border-white/10 bg-[#050505]">
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 z-10"></div>
<div className="absolute bottom-0 left-0 p-6 z-20 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
<span className="text-[10px] text-[#88e788] uppercase tracking-wider mb-1 block">E-Commerce</span>
<h4 className="text-white font-medium text-lg">Neon Shop</h4>
</div>
<div className="w-full h-full bg-[#111] flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
<div className="grid grid-cols-2 gap-2 w-1/2">
<div className="aspect-square bg-white/10 rounded"></div>
<div className="aspect-square bg-white/10 rounded"></div>
<div className="aspect-square bg-white/10 rounded"></div>
<div className="aspect-square bg-white/10 rounded"></div>
</div>
</div>
<div className="absolute inset-0 border-2 border-[#88e788] opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300 pointer-events-none shadow-[inset_0_0_20px_rgba(136,231,136,0.2)]"></div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6">
<div className="max-w-4xl mx-auto text-center relative">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#88e788] opacity-[0.03] blur-[100px] rounded-full"></div>
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6 relative z-10">
                Ready to build the future?
            </h2>
<p className="text-gray-400 text-lg mb-10 relative z-10">
                Join 10,000+ creators building faster with Blinkpage AI.
            </p>
<div className="flex flex-col md:flex-row gap-4 justify-center relative z-10">
<button className="bg-[#88e788] text-black px-8 py-3 rounded-full text-sm font-semibold hover:bg-[#76d676] transition-all shadow-[0_0_20px_rgba(136,231,136,0.2)]">
                    Start Generating Free
                </button>
<button className="bg-black text-white border border-white/20 px-8 py-3 rounded-full text-sm font-medium hover:bg-white/5 transition-all">
                    View Pricing
                </button>
</div>
</div>
</section>

<footer className="border-t border-white/10 bg-black pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<span className="iconify text-[#88e788]" data-icon="lucide:cpu" data-width="18"></span>
<span className="text-white font-semibold tracking-tight">Blinkpage</span>
</div>
<p className="text-xs text-gray-500 leading-relaxed">
                        AI-powered web builder for the next generation of creators.
                    </p>
</div>
<div>
<h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-4">Product</h4>
<ul className="space-y-2 text-sm text-gray-500">
<li><a className="hover:text-[#88e788] transition-colors" href="#">Changelog</a></li>
<li><a className="hover:text-[#88e788] transition-colors" href="#">Documentation</a></li>
<li><a className="hover:text-[#88e788] transition-colors" href="#">Integrations</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-4">Company</h4>
<ul className="space-y-2 text-sm text-gray-500">
<li><a className="hover:text-[#88e788] transition-colors" href="#">About</a></li>
<li><a className="hover:text-[#88e788] transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-[#88e788] transition-colors" href="#">Legal</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-4">Social</h4>
<ul className="space-y-2 text-sm text-gray-500">
<li><a className="hover:text-[#88e788] transition-colors" href="#">Twitter</a></li>
<li><a className="hover:text-[#88e788] transition-colors" href="#">GitHub</a></li>
<li><a className="hover:text-[#88e788] transition-colors" href="#">Discord</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-[10px] text-gray-600">© 2024 Blinkpage AI Inc. All rights reserved.</p>
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-[#88e788] animate-pulse"></div>
<span className="text-[10px] text-gray-500">All Systems Normal</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
