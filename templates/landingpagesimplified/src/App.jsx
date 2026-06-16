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
      

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-rose-600/10 blur-[120px] rounded-full mix-blend-screen"></div>
<div className="absolute bottom-[-10%] right-[10%] w-[600px] h-[600px] bg-purple-600/10 blur-[120px] rounded-full mix-blend-screen"></div>
<div className="absolute inset-0 bg-grid-pattern [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]"></div>
</div>


<header className="fixed z-50 bg-[#050505]/80 w-full border-white/5 border-b top-10 backdrop-blur-md">
</header>
<main className="z-0 pt-20 pb-20 relative">

<section className="max-w-7xl mx-auto px-6 mb-32">
<div className="flex flex-col gap-x-16 items-center gap-y-16 lg:flex-row">

<div className="flex-1 lg:text-left text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-rose-500/20 bg-rose-500/10 text-rose-300 text-xs font-medium mb-8 backdrop-blur-sm animate-in fade-in slide-in-from-bottom-4 duration-700">
<svg className="lucide lucide-zap" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
</svg>
<span className="">The Ultimate Landing Page Minicourse</span>
</div>
<h1 className="sm:text-6xl lg:text-7xl leading-[1.1] text-glow text-5xl font-bold text-white tracking-tight mb-6">
      Learn How
      to Create <br/>
<span className="bg-clip-text animate-gradient text-transparent bg-gradient-to-r from-rose-400 via-orange-400 to-amber-200">Premium Landing Pages</span>
<br/> even as a beginner.
    </h1>
<p className="lg:mx-0 leading-relaxed text-lg font-light text-neutral-400 max-w-2xl mr-auto mb-10 ml-auto">Design in
      Canva, write copy that converts, and build on GoHighLevel or Systeme.io and charge P5,000 to P25,000 per
      project. No coding skills required. Includes templates, contracts, and finding clients strategies.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
<a className="group relative flex items-center justify-center px-8 h-12 rounded-lg bg-white text-black text-sm font-semibold transition-all hover:scale-105 hover:shadow-[0_0_20px_-5px_rgba(255,255,255,0.5)]" href="#pricing">
<span>Get Instant Access</span>
<svg className="ml-2 transition-transform group-hover:translate-x-1" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
<a className="flex items-center justify-center hover:bg-white/5 transition-colors text-sm font-medium text-white h-12 border-white/10 border rounded-lg pr-8 pl-8" href="#curriculum">
        View Curriculum
      </a>
</div>
</div>

<div className="flex-1 w-full max-w-[500px] flex justify-center items-center py-10 lg:py-0 book-container">
<div className="relative w-[340px] h-[440px] bg-[#111] rounded-r-lg border-l-4 border-l-neutral-700 book">

<div className="absolute inset-0 rounded-r-lg bg-gradient-to-br from-[#1a1a1a] to-[#050505] border border-white/10 flex flex-col p-8 overflow-hidden shadow-2xl">

<div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-50 pointer-events-none">
</div>
<div className="mt-auto mb-auto relative z-10">
<div className="w-16 h-16 rounded-xl bg-gradient-to-tr from-rose-600 to-orange-600 flex items-center justify-center mb-6 shadow-lg shadow-rose-900/30">
<svg className="text-white" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2L2 7l10 5 10-5-10-5z"></path>
<path d="M2 17l10 5 10-5"></path>
<path d="M2 12l10 5 10-5"></path>
</svg>
</div>
<h3 className="text-4xl font-bold text-white tracking-tighter leading-none mb-2">PREMIUMPAGES</h3>
<div className="h-1 w-20 bg-rose-500 rounded-full mb-4"></div>
<p className="text-xs text-neutral-400 font-mono uppercase tracking-widest">Design • Copy • Tech</p>
<div className="mt-8 flex gap-2">
<span className="px-2 py-1 bg-white/10 rounded text-[10px] text-white">Canva</span>
<span className="px-2 py-1 bg-white/10 rounded text-[10px] text-white">GHL</span>
<span className="px-2 py-1 bg-white/10 rounded text-[10px] text-white">Systeme</span>
</div>
</div>

<div className="absolute top-2 bottom-2 right-0 w-4 bg-gradient-to-l from-white/10 to-transparent border-l border-white/5">
</div>
</div>
</div>

<div className="absolute bottom-[-40px] left-10 right-10 h-8 bg-black/60 blur-xl rounded-[50%] transform rotate-x-60">
</div>
</div>
</div>
</section>

<section className="max-w-5xl mx-auto px-6 mb-32">
<div className="relative rounded-3xl border border-white/10 bg-[#0A0A0A] p-10 md:p-16 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-rose-900/10 to-transparent pointer-events-none"></div>
<div className="relative z-10 text-center">
<h2 className="text-3xl md:text-4xl font-semibold text-white mb-8 tracking-tight">
          Does your landing page design look... cheap?
        </h2>
<div className="grid md:grid-cols-2 gap-8 text-left max-w-3xl mx-auto">
<div className="flex gap-4">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6 6 18"></path>
<path d="m6 6 12 12"></path>
</svg>
</div>
<div className="">
<h3 className="text-white font-medium mb-1">Stuck on "Developer" Mode</h3>
<p className="text-neutral-400 font-light leading-relaxed text-sm">
                You can drag and drop elements, but the final result looks amateur. You struggle with spacing,
                typography, and making it look "expensive."
              </p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6 6 18"></path>
<path d="m6 6 12 12"></path>
</svg>
</div>
<div className="">
<h3 className="text-white font-medium mb-1">Tech Overwhelm</h3>
<p className="text-neutral-400 font-light leading-relaxed text-sm">
                GHL and Systeme.io are powerful, but confusing. You spend hours fighting the tool instead of building
                the funnel.
              </p>
</div>
</div>
</div>
<div className="mt-12 p-4 inline-block">
<p className="text-white text-lg font-medium">It's time to bridge the gap between "template" and "premium custom
            design".</p>
</div>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 mb-32" id="curriculum">
<div className="text-center mb-16">
<span className="text-rose-400 text-sm font-semibold tracking-wider uppercase mb-3 block">What You Will Learn</span>
<h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">The Complete Framework</h2>
<p className="text-neutral-400 text-lg font-light">From blank canvas to high-converting funnel launch.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="group relative rounded-2xl border border-white/10 bg-[#0A0A0A] p-8 hover:border-white/20 transition-all duration-300 overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-rose-600/10 blur-[50px] rounded-full group-hover:bg-rose-600/20 transition-all">
</div>
<div className="w-12 h-12 rounded-lg bg-neutral-900 border border-white/10 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect>
<circle cx="8.5" cy="8.5" r="1.5"></circle>
<polyline points="21 15 16 10 5 21"></polyline>
</svg>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Premium Design in Canva</h3>
<p className="text-neutral-400 font-light leading-relaxed">
          Master the art of visual hierarchy, font pairing, and custom assets. Learn how to design a full landing page
          mockup in Canva before touching any code.
        </p>
</div>

<div className="group relative rounded-2xl border border-white/10 bg-[#0A0A0A] p-8 hover:border-white/20 transition-all duration-300 overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-orange-600/10 blur-[50px] rounded-full group-hover:bg-orange-600/20 transition-all">
</div>
<div className="w-12 h-12 rounded-lg bg-neutral-900 border border-white/10 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
</svg>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Copy That Actually Converts</h3>
<p className="text-neutral-400 font-light leading-relaxed">
          Don't just fill space with words. Learn the psychological triggers that make people buy. We cover headlines,
          bullet points, and offer structuring.
        </p>
</div>

<div className="group relative rounded-2xl border border-white/10 bg-[#0A0A0A] p-8 hover:border-white/20 transition-all duration-300 overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/10 blur-[50px] rounded-full group-hover:bg-purple-600/20 transition-all">
</div>
<div className="w-12 h-12 rounded-lg bg-neutral-900 border border-white/10 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m12 19 7-7 3 3-7 7-3-3z"></path>
<path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
<path d="m2 2 7.586 7.586"></path>
<circle cx="11" cy="11" r="2"></circle>
</svg>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Build on GHL &amp; Systeme.io</h3>
<p className="text-neutral-400 font-light leading-relaxed">
          Stop struggling with tech. Step-by-step tutorials on how to take your Canva design and build it
          pixel-perfectly in GoHighLevel and Systeme.io.
        </p>
</div>

<div className="group relative rounded-2xl border border-white/10 bg-[#0A0A0A] p-8 hover:border-white/20 transition-all duration-300 overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 blur-[50px] rounded-full group-hover:bg-blue-600/20 transition-all">
</div>
<div className="w-12 h-12 rounded-lg bg-neutral-900 border border-white/10 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<circle cx="9" cy="7" r="4"></circle>
<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
</svg>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Client Acquisition &amp; Portfolio</h3>
<p className="text-neutral-400 font-light leading-relaxed">
          How to create a portfolio even if you have zero clients, and the exact strategies to find high-paying clients
          who need your new skills.
        </p>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-32">
<div className="grid md:grid-cols-2 gap-12">

<div className="rounded-3xl bg-neutral-900/40 border border-green-500/20 p-8 md:p-12 relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-green-500/5 blur-[80px] rounded-full pointer-events-none"></div>
<h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
<span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-500/20 text-green-400">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
</span>
          This IS for you if...
        </h3>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-neutral-300 font-light">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2.5"></span>
            You are a complete beginner wanting to learn a high-income skill.
          </li>
<li className="flex items-start gap-3 text-neutral-300 font-light">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2.5"></span>
            You know the basics but your designs feel cluttered or outdated.
          </li>
<li className="flex items-start gap-3 text-neutral-300 font-light">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2.5"></span>
            You want to offer full funnel services (Copy + Design + Build).
          </li>
<li className="flex items-start gap-3 text-neutral-300 font-light">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2.5"></span>
            You struggle with the tech side of GHL or Systeme.io.
          </li>
</ul>
</div>

<div className="rounded-3xl bg-neutral-900/40 border border-red-500/20 p-8 md:p-12 relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 blur-[80px] rounded-full pointer-events-none"></div>
<h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
<span className="flex items-center justify-center w-8 h-8 rounded-full bg-red-500/20 text-red-400">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><line x1="18" x2="6" y1="6" y2="18"></line><line x1="6" x2="18" y1="6" y2="18"></line></svg>
</span>
          This is NOT for you if...
        </h3>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-neutral-300 font-light">
<span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2.5"></span>
            You expect a "get rich quick" scheme without putting in the work.
          </li>
<li className="flex items-start gap-3 text-neutral-300 font-light">
<span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2.5"></span>
            You are not willing to learn new software tools.
          </li>
<li className="flex items-start gap-3 text-neutral-300 font-light">
<span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2.5"></span>
            You think design doesn't matter for conversions.
          </li>
<li className="flex items-start gap-3 text-neutral-300 font-light">
<span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2.5"></span>
            You are already an advanced senior developer creating custom CSS frameworks.
          </li>
</ul>
</div>
</div>
</section>

<section className="max-w-4xl mx-auto px-6 mb-20">
<div className="text-center mb-10">
<h2 className="text-3xl font-bold text-white mb-4">Plus 8 Exclusive Bonuses</h2>
<p className="text-rose-400 font-medium">Included for FREE when you join today</p>
</div>
<div className="grid md:grid-cols-2 gap-4">

<div className="flex items-start gap-4 p-5 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 transition-colors">
<div className="text-yellow-400 mt-1"><svg fill="currentColor" height="20" stroke="none" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z">
</path>
</svg></div>
<div>
<h4 className="font-semibold text-white">Funnel Conversion Blueprint</h4>
<p className="text-xs text-neutral-400 mt-1">Our signature 56-page guide + ChatGPT prompts.</p>
</div>
</div>

<div className="flex items-start gap-4 p-5 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 transition-colors">
<div className="text-yellow-400 mt-1"><svg fill="currentColor" height="20" stroke="none" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z">
</path>
</svg></div>
<div>
<h4 className="font-semibold text-white">Development Checklist</h4>
<p className="text-xs text-neutral-400 mt-1">Never miss a step before launching.</p>
</div>
</div>

<div className="flex items-start gap-4 p-5 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 transition-colors">
<div className="text-yellow-400 mt-1"><svg fill="currentColor" height="20" stroke="none" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z">
</path>
</svg></div>
<div>
<h4 className="font-semibold text-white">Proposal Template</h4>
<p className="text-xs text-neutral-400 mt-1">Close clients with this proven document.</p>
</div>
</div>

<div className="flex items-start gap-4 p-5 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 transition-colors">
<div className="text-yellow-400 mt-1"><svg fill="currentColor" height="20" stroke="none" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z">
</path>
</svg></div>
<div>
<h4 className="font-semibold text-white">Contract Template</h4>
<p className="text-xs text-neutral-400 mt-1">Protect yourself and look professional.</p>
</div>
</div>

<div className="flex items-start gap-4 p-5 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 transition-colors">
<div className="text-yellow-400 mt-1"><svg fill="currentColor" height="20" stroke="none" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z">
</path>
</svg></div>
<div>
<h4 className="font-semibold text-white">Onboarding Questionnaire</h4>
<p className="text-xs text-neutral-400 mt-1">Get the info you need from clients fast.</p>
</div>
</div>

<div className="flex items-start gap-4 p-5 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 transition-colors">
<div className="text-yellow-400 mt-1"><svg fill="currentColor" height="20" stroke="none" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z">
</path>
</svg></div>
<div>
<h4 className="font-semibold text-white">Portfolio Creation Guide</h4>
<p className="text-xs text-neutral-400 mt-1">Showcase your work effectively.</p>
</div>
</div>

<div className="flex items-start gap-4 p-5 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 transition-colors">
<div className="text-yellow-400 mt-1"><svg fill="currentColor" height="20" stroke="none" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z">
</path>
</svg></div>
<div>
<h4 className="font-semibold text-white">Client Finding Masterclass</h4>
<p className="text-xs text-neutral-400 mt-1">Where and how to find paying clients.</p>
</div>
</div>

<div className="flex items-start gap-4 p-5 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 transition-colors">
<div className="text-yellow-400 mt-1"><svg fill="currentColor" height="20" stroke="none" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z">
</path>
</svg></div>
<div className="">
<h4 className="font-semibold text-white">Exclusive Community</h4>
<p className="text-xs text-neutral-400 mt-1">Get support and answers to your questions.</p>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-32 relative" id="pricing">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-rose-600/10 blur-[100px] rounded-full pointer-events-none">
</div>
<div className="relative z-10 max-w-lg mx-auto">
<div className="rounded-3xl border border-white/10 bg-[#0A0A0A] p-1 overflow-hidden shadow-2xl relative">

<div className="absolute top-0 inset-x-0 h-1 scarcity-bar"></div>
<div className="bg-neutral-900/50 rounded-[22px] p-8 sm:p-10 text-center backdrop-blur-sm border border-white/5">
<div className="inline-block px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-bold uppercase tracking-wider mb-6">
            Limited Time Offer
          </div>
<h2 className="text-4xl font-bold text-white mb-2">Minicourse + All Bonuses</h2>

<div className="flex flex-col items-center justify-center mb-6 mt-4">
<span className="text-neutral-500 line-through text-lg">₱2,999</span>
<div className="flex items-start gap-1">
<span className="text-5xl font-bold text-white tracking-tight">₱1,499</span>
</div>
<p className="text-rose-400 text-xs font-medium mt-2 animate-pulse">Low price ending soon</p>
</div>
<button className="hover:shadow-[0_0_30px_-5px_rgba(225,29,72,0.4)] transition-all transform hover:scale-[1.02] flex text-lg font-bold text-white bg-gradient-to-r from-rose-600 to-orange-600 w-full h-14 rounded-xl mb-6 gap-x-2 gap-y-2 items-center justify-center cursor-pointer" onclick="window.location.href='https://www.checkout.xendit.co/od/landingpagedesigncourse'" role="button">
<span className="">Get Instant Access</span>
<svg className="" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path className="" d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<div className="space-y-3 text-left bg-white/5 rounded-xl p-6">
<p className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-2">What's Included:</p>
<div className="flex items-center gap-3 text-sm text-neutral-300">
<svg className="text-green-500 min-w-[16px]" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span className=""><strong>Module 1:</strong> Design in Canva</span>
</div>
<div className="flex items-center gap-3 text-sm text-neutral-300">
<svg className="text-green-500 min-w-[16px]" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span className=""><strong>Module 2:</strong> Copywriting Frameworks</span>
</div>
<div className="flex items-center gap-3 text-sm text-neutral-300">
<svg className="text-green-500 min-w-[16px]" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span className=""><strong>Module 3:</strong> GHL &amp; Systeme.io Build</span>
</div>
<div className="h-px bg-white/10 my-2"></div>
<div className="flex items-center gap-3 text-sm text-white font-medium">
<svg className="text-yellow-500 min-w-[16px]" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z">
</path>
</svg>
<span className=""><strong>ALL 8 Bonuses Included</strong></span>
</div>
</div>
<div className="mt-6 flex items-center justify-center gap-2 text-[10px] text-neutral-500">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect>
<path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
</svg>
            Secure SSL Payment
          </div>
</div>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 mb-32">
<h2 className="text-3xl font-bold text-white text-center mb-12">Success Stories</h2>
<div className="grid md:grid-cols-3 gap-6">

<div className="p-6 rounded-2xl bg-[#0A0A0A] border border-white/5">
<div className="flex gap-1 text-yellow-500 mb-4">
<svg fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
</polygon>
</svg>
<svg fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
</polygon>
</svg>
<svg fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
</polygon>
</svg>
<svg fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
</polygon>
</svg>
<svg fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
</polygon>
</svg>
</div>
<p className="text-neutral-400 text-sm leading-relaxed mb-4">"I had no idea how to use GHL. This course made it so
          simple. I landed my first ₱25k client two weeks after finishing."</p>
<p className="text-white text-xs font-semibold">Mark D.
          <span className="text-neutral-600 font-normal">- Freelancer</span></p>
</div>

<div className="p-6 rounded-2xl bg-[#0A0A0A] border border-white/5">
<div className="flex gap-1 text-yellow-500 mb-4">
<svg fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
</polygon>
</svg>
<svg fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
</polygon>
</svg>
<svg fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
</polygon>
</svg>
<svg fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
</polygon>
</svg>
<svg fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
</polygon>
</svg>
</div>
<p className="text-neutral-400 text-sm leading-relaxed mb-4">"The contract and proposal templates alone are worth
          the price. I look so much more professional now."</p>
<p className="text-white text-xs font-semibold">Sarah L. <span className="text-neutral-600 font-normal">- Student</span>
</p>
</div>

<div className="p-6 rounded-2xl bg-[#0A0A0A] border border-white/5">
<div className="flex gap-1 text-yellow-500 mb-4">
<svg fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
</polygon>
</svg>
<svg fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
</polygon>
</svg>
<svg fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
</polygon>
</svg>
<svg fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
</polygon>
</svg>
<svg className="" fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
</polygon>
</svg>
</div>
<p className="text-neutral-400 text-sm leading-relaxed mb-4">"I used to think Canva wasn't for 'real' designers.
          This course proved me wrong. My pages look insane."</p>
<p className="text-white text-xs font-semibold">James T.
          <span className="text-neutral-600 font-normal">- Designer</span></p>
</div>
</div>
</section>

<section className="max-w-3xl mx-auto px-6 mb-32">
<h2 className="text-3xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
<div className="space-y-4">
<details className="group rounded-xl bg-white/5 border border-white/10 open:bg-white/10 transition-colors">
<summary className="flex cursor-pointer items-center justify-between p-6 font-medium text-white">
<span>Do I need to buy GHL or Systeme.io?</span>
<span className="transition-transform group-open:rotate-180">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="px-6 pb-6 text-neutral-400 font-light text-sm leading-relaxed">
          No purchase required to learn. Systeme.io has a free plan which is perfect for beginners. GHL has a trial, but
          we show you how to use it so you're ready when you get a client.
        </div>
</details>
<details className="group rounded-xl bg-white/5 border border-white/10 open:bg-white/10 transition-colors">
<summary className="flex cursor-pointer items-center justify-between p-6 font-medium text-white">
<span className="">I have zero design experience. Is this for me?</span>
<span className="transition-transform group-open:rotate-180">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="px-6 pb-6 text-neutral-400 font-light text-sm leading-relaxed">
          Yes! We start with the basics in Canva. We provide templates and layout guides so you don't have to design
          from scratch until you're comfortable.
        </div>
</details>
<details className="group rounded-xl bg-white/5 border border-white/10 open:bg-white/10 transition-colors">
<summary className="flex cursor-pointer items-center justify-between p-6 font-medium text-white">
<span className="">How long is the course?</span>
<span className="transition-transform group-open:rotate-180">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="px-6 pb-6 text-neutral-400 font-light text-sm leading-relaxed">
          It is a self-paced minicourse. You can binge-watch all modules in a weekend and start building your first
          premium funnel by Monday.
        </div>
</details>
<details className="group rounded-xl bg-white/5 border border-white/10 open:bg-white/10 transition-colors">
<summary className="flex cursor-pointer items-center justify-between p-6 font-medium text-white">
<span>How do I access the community?</span>
<span className="transition-transform group-open:rotate-180">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="px-6 pb-6 text-neutral-400 font-light text-sm leading-relaxed">
          After purchase, you'll receive an invite link to our private community platform where you can ask questions
          and network with other students.
        </div>
</details>
</div>
</section>

<section className="max-w-4xl mx-auto px-6 text-center">
<div className="relative p-12 rounded-3xl overflow-hidden border border-white/10 bg-[#0A0A0A]">
<div className="absolute inset-0 bg-gradient-to-tr from-rose-900/20 to-purple-900/20 pointer-events-none"></div>
<div className="relative z-10">
<h2 className="text-3xl font-bold text-white mb-6">Stop Overthinking. Start Building.</h2>
<p className="text-neutral-400 mb-8">Join hundreds of students creating premium funnels today.</p>
<a className="inline-flex items-center justify-center hover:bg-neutral-200 transition-colors font-bold text-black bg-white h-12 rounded-lg pr-8 pl-8" href="https://www.checkout.xendit.co/od/landingpagedesigncourse">
          Get Started for ₱1,499
        </a>
</div>
</div>
</section>
</main>
<footer className="border-t border-white/5 bg-[#030303] py-12 text-center text-sm text-neutral-500">
<p>© 2024 Premium Pages Course. All rights reserved.</p>
</footer>


    </>
  );
}
