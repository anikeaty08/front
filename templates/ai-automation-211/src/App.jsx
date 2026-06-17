import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
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
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 blur-[100px] rounded-full mix-blend-screen"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600/10 blur-[100px] rounded-full mix-blend-screen"></div>
<div className="absolute inset-0 bg-grid z-0"></div>
</div>

<nav className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
<div className="glass rounded-full px-6 py-3 flex items-center justify-between gap-8 md:gap-12 shadow-2xl shadow-black/50">
<a className="text-lg font-semibold tracking-tight text-white flex items-center gap-2.5 group" href="#">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-xs font-bold shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">MA</div>
<span className="hidden sm:inline">Morsalin</span>
</a>
<div className="hidden md:flex items-center gap-1 bg-white/5 rounded-full p-1 border border-white/5">
<a className="px-4 py-1.5 text-xs font-medium text-slate-400 hover:text-white hover:bg-white/10 rounded-full transition-all" href="#about">About</a>
<a className="px-4 py-1.5 text-xs font-medium text-slate-400 hover:text-white hover:bg-white/10 rounded-full transition-all" href="#stack">Stack</a>
<a className="px-4 py-1.5 text-xs font-medium text-slate-400 hover:text-white hover:bg-white/10 rounded-full transition-all" href="#services">Services</a>
<a className="px-4 py-1.5 text-xs font-medium text-slate-400 hover:text-white hover:bg-white/10 rounded-full transition-all" href="#process">Process</a>
</div>
<a className="flex items-center gap-2 text-xs font-semibold text-black bg-white px-5 py-2 rounded-full hover:bg-slate-200 transition-colors shadow-[0_0_15px_-3px_rgba(255,255,255,0.3)]" href="#contact">
                Let's Talk <i className="w-3.5 h-3.5" data-lucide="arrow-right"></i>
</a>
</div>
</nav>

<main className="relative z-10 pt-32 pb-20 md:pt-48 md:pb-32 px-6">
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

<div className="space-y-8 relative">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-medium tracking-wide uppercase animate-fade-in">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                    Available for new projects
                </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white leading-[1.1]">
                    Mastering AI <br/>
<span className="text-gradient-primary">Growth &amp; Code.</span>
</h1>
<p className="text-lg text-slate-400 font-light leading-relaxed max-w-xl border-l-2 border-white/10 pl-6">
                    I design intelligent ecosystems. Bridging 
                    <strong className="text-white font-medium">AI Automation</strong> and <strong className="text-white font-medium">Lead Generation</strong> with creative content strategies to help businesses scale effortlessly.
                </p>
<div className="flex flex-wrap gap-4 pt-4">
<a className="h-12 px-8 rounded-full bg-white text-black text-sm font-semibold hover:bg-slate-100 transition-all flex items-center gap-2 shadow-[0_0_20px_-5px_rgba(255,255,255,0.4)]" href="#contact">
                        Start Growing
                    </a>
<a className="h-12 px-8 rounded-full border border-white/10 hover:bg-white/5 text-white text-sm font-medium transition-all flex items-center gap-2 group" href="#work">
                        View Portfolio
                        <i className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" data-lucide="chevron-down"></i>
</a>
</div>

<div className="flex items-center gap-4 pt-8 opacity-80">
<div className="flex -space-x-3">
<div className="w-8 h-8 rounded-full border-2 border-[#050505] bg-slate-800 flex items-center justify-center text-[10px] text-white">MA</div>
<div className="w-8 h-8 rounded-full border-2 border-[#050505] bg-slate-700 flex items-center justify-center text-[10px] text-white">JD</div>
<div className="w-8 h-8 rounded-full border-2 border-[#050505] bg-slate-600 flex items-center justify-center text-[10px] text-white">RK</div>
</div>
<div className="text-xs text-slate-500">
                        Trusted by clients from <span className="text-slate-300">USA, UK &amp; BD</span>
</div>
</div>
</div>

<div className="relative hidden lg:block perspective-[2000px]">

<div className="relative w-full aspect-square max-w-lg mx-auto transform rotate-y-[-12deg] rotate-x-[5deg] hover:rotate-y-[-5deg] hover:rotate-x-[2deg] transition-all duration-700 ease-out">

<div className="absolute inset-0 translate-z-[-50px] translate-x-8 translate-y-8 glass rounded-2xl p-6 opacity-40 border border-white/5">
<div className="space-y-3 font-mono text-xs text-slate-600">
<div className="h-2 w-1/3 bg-slate-800 rounded"></div>
<div className="h-2 w-2/3 bg-slate-800 rounded"></div>
<div className="h-2 w-1/2 bg-slate-800 rounded"></div>
<div className="h-2 w-3/4 bg-slate-800 rounded"></div>
</div>
</div>

<div className="absolute inset-0 bg-[#0A0A0A]/90 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl p-8 flex flex-col justify-between overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

<div className="flex items-center justify-between mb-8">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-red-500"></div>
<div className="w-2 h-2 rounded-full bg-yellow-500"></div>
<div className="w-2 h-2 rounded-full bg-green-500"></div>
</div>
<span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest">ai_lead_gen.json</span>
</div>

<div className="relative flex-1 flex flex-col justify-center gap-6">

<div className="flex items-center gap-4 group">
<div className="w-12 h-12 rounded-xl bg-[#2a2a2a] border border-white/5 flex items-center justify-center text-blue-400 shadow-lg group-hover:border-blue-500/50 transition-colors z-10 relative">
<i className="w-5 h-5" data-lucide="facebook"></i>
<div className="absolute -right-1 -top-1 w-3 h-3 bg-green-500 rounded-full border-2 border-[#0A0A0A]"></div>
</div>
<div>
<div className="text-sm font-medium text-white">FB Lead Form</div>
<div className="text-[10px] text-slate-500">New Lead Captured</div>
</div>
</div>

<div className="absolute left-6 top-10 bottom-10 w-0.5 bg-gradient-to-b from-blue-500/20 via-purple-500/50 to-blue-500/20 -z-0"></div>

<div className="flex items-center gap-4 pl-12 group">
<div className="w-10 h-10 rounded-lg bg-[#2a2a2a] border border-white/5 flex items-center justify-center text-purple-400 z-10 relative group-hover:scale-110 transition-transform">
<i className="w-4 h-4" data-lucide="bot"></i>
</div>
<div className="glass px-3 py-1.5 rounded-md">
<div className="text-xs font-medium text-slate-300">AI Qualification</div>
<div className="text-[9px] text-slate-500 font-mono">Score Lead &amp; Draft Email</div>
</div>
</div>

<div className="flex items-center gap-4 group">
<div className="w-12 h-12 rounded-xl bg-[#2a2a2a] border border-white/5 flex items-center justify-center text-sky-400 shadow-lg group-hover:border-sky-500/50 transition-colors z-10 relative">
<i className="w-5 h-5" data-lucide="mail-check"></i>
</div>
<div>
<div className="text-sm font-medium text-white">Outreach</div>
<div className="text-[10px] text-slate-500">Send Personalized Offer</div>
</div>
</div>
</div>

<div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
<span className="text-[10px] text-green-400 font-medium">System Active</span>
</div>
<span className="text-[10px] text-slate-600 font-mono">0.4s execution</span>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="py-10 border-y border-white/5 bg-white/[0.01] overflow-hidden" id="stack">
<div className="max-w-7xl mx-auto px-6 mb-6">
<p className="text-xs font-mono text-slate-500 uppercase tracking-widest text-center md:text-left">Tech Stack &amp; Skills</p>
</div>
<div className="relative flex w-full overflow-hidden mask-linear">
<div className="animate-scroll flex min-w-full shrink-0 gap-12 items-center px-6">

<div className="flex items-center gap-2 text-slate-400 font-medium"><i className="text-purple-500 w-4 h-4" data-lucide="zap"></i> Make.com</div>
<div className="flex items-center gap-2 text-slate-400 font-medium"><i className="text-pink-500 w-4 h-4" data-lucide="users"></i> Lead Gen</div>
<div className="flex items-center gap-2 text-slate-400 font-medium"><i className="text-blue-400 w-4 h-4" data-lucide="bot"></i> AI Tools</div>
<div className="flex items-center gap-2 text-slate-400 font-medium"><i className="text-orange-400 w-4 h-4" data-lucide="pen-tool"></i> Content Writing</div>
<div className="flex items-center gap-2 text-slate-400 font-medium"><i className="text-red-400 w-4 h-4" data-lucide="camera"></i> Photography</div>
<div className="flex items-center gap-2 text-slate-400 font-medium"><i className="text-blue-600 w-4 h-4" data-lucide="facebook"></i> Facebook</div>
<div className="flex items-center gap-2 text-slate-400 font-medium"><i className="text-yellow-400 w-4 h-4" data-lucide="code-2"></i> JavaScript</div>
<div className="flex items-center gap-2 text-slate-400 font-medium"><i className="text-sky-400 w-4 h-4" data-lucide="wind"></i> Tailwind</div>
<div className="flex items-center gap-2 text-slate-400 font-medium"><i className="text-blue-600 w-4 h-4" data-lucide="layout"></i> WordPress</div>

<div className="flex items-center gap-2 text-slate-400 font-medium"><i className="text-purple-500 w-4 h-4" data-lucide="zap"></i> Make.com</div>
<div className="flex items-center gap-2 text-slate-400 font-medium"><i className="text-pink-500 w-4 h-4" data-lucide="users"></i> Lead Gen</div>
<div className="flex items-center gap-2 text-slate-400 font-medium"><i className="text-blue-400 w-4 h-4" data-lucide="bot"></i> AI Tools</div>
<div className="flex items-center gap-2 text-slate-400 font-medium"><i className="text-orange-400 w-4 h-4" data-lucide="pen-tool"></i> Content Writing</div>
<div className="flex items-center gap-2 text-slate-400 font-medium"><i className="text-red-400 w-4 h-4" data-lucide="camera"></i> Photography</div>
<div className="flex items-center gap-2 text-slate-400 font-medium"><i className="text-blue-600 w-4 h-4" data-lucide="facebook"></i> Facebook</div>
<div className="flex items-center gap-2 text-slate-400 font-medium"><i className="text-yellow-400 w-4 h-4" data-lucide="code-2"></i> JavaScript</div>
<div className="flex items-center gap-2 text-slate-400 font-medium"><i className="text-sky-400 w-4 h-4" data-lucide="wind"></i> Tailwind</div>
<div className="flex items-center gap-2 text-slate-400 font-medium"><i className="text-blue-600 w-4 h-4" data-lucide="layout"></i> WordPress</div>
</div>

<div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10"></div>
<div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10"></div>
</div>
</section>

<section className="py-24 md:py-32 relative" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 md:flex md:items-end md:justify-between">
<div className="max-w-2xl">
<span className="text-blue-500 font-mono text-xs uppercase tracking-widest font-semibold block mb-4">What I Deliver</span>
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-4">Comprehensive <span className="text-slate-500">Digital Growth</span></h2>
<p className="text-slate-400 font-light">
                        I combine technical automation with creative content strategies to drive real results.
                    </p>
</div>
<a className="hidden md:flex items-center gap-2 text-sm text-white hover:text-blue-400 transition-colors" href="#contact">
                    Discuss a project <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[300px]">

<div className="md:col-span-2 group relative glass rounded-3xl p-8 overflow-hidden hover:border-white/10 transition-colors">
<div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-white mb-4">
<i className="w-6 h-6" data-lucide="target"></i>
</div>
<div>
<h3 className="text-2xl font-semibold text-white mb-2">Automated Lead Generation</h3>
<p className="text-slate-400 text-sm leading-relaxed max-w-md">
                                I build systems that find and nurture clients automatically. By integrating <strong>AI Tools</strong> with Facebook Lead Forms and CRMs, I deliver qualified leads while you sleep.
                            </p>
</div>
</div>

<div className="absolute right-[-20px] top-10 opacity-20 md:opacity-50 group-hover:scale-105 transition-transform duration-500">
<div className="w-64 h-64 border border-dashed border-white/20 rounded-full grid place-items-center">
<div className="w-40 h-40 border border-white/20 rounded-full"></div>
</div>
</div>
</div>

<div className="glass glass-hover rounded-3xl p-8 flex flex-col justify-between group transition-all">
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-pink-400 mb-4">
<i className="w-6 h-6" data-lucide="pen-tool"></i>
</div>
<div>
<h3 className="text-xl font-semibold text-white mb-2">Content &amp; Social</h3>
<p className="text-slate-400 text-sm">Professional <strong>Content Writing</strong> and <strong>Facebook Page Management</strong>. I keep your audience engaged with high-quality posts.</p>
</div>
</div>

<div className="glass glass-hover rounded-3xl p-8 flex flex-col justify-between group transition-all">
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-orange-400 mb-4">
<i className="w-6 h-6" data-lucide="camera"></i>
</div>
<div>
<h3 className="text-xl font-semibold text-white mb-2">Photography</h3>
<p className="text-slate-400 text-sm">Visual storytelling through expert photography to elevate your brand identity and social media presence.</p>
</div>
</div>

<div className="md:col-span-2 group relative glass rounded-3xl p-8 overflow-hidden hover:border-white/10 transition-colors">
<div className="absolute inset-0 bg-gradient-to-bl from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-white mb-4">
<i className="w-6 h-6" data-lucide="cpu"></i>
</div>
<div>
<h3 className="text-2xl font-semibold text-white mb-2">AI Tools &amp; Automation</h3>
<p className="text-slate-400 text-sm leading-relaxed max-w-md">
                                Expert in deploying AI solutions. From simple <strong>Facebook post automation</strong> to complex data workflows, I replace manual effort with intelligent scripts.
                            </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#080808] border-y border-white/5" id="process">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-20">
<span className="text-purple-500 font-mono text-xs uppercase tracking-widest font-semibold block mb-4">How I Work</span>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">From Chaos to <span className="text-white">Clarity</span></h2>
<p className="text-slate-400">My structured approach ensures your project is delivered on time and solves the root problem.</p>
</div>
<div className="grid md:grid-cols-4 gap-8 relative">

<div className="hidden md:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

<div className="relative pt-8 md:pt-16">
<div className="absolute top-0 left-1/2 -translate-x-1/2 md:left-auto md:-translate-x-0 md:top-9 w-6 h-6 rounded-full bg-[#080808] border-2 border-slate-700 z-10 flex items-center justify-center">
<div className="w-2 h-2 rounded-full bg-slate-500"></div>
</div>
<div className="glass p-6 rounded-2xl text-center md:text-left hover:-translate-y-2 transition-transform duration-300">
<div className="text-4xl font-bold text-white/10 mb-4">01</div>
<h4 className="text-lg font-semibold text-white mb-2">Discovery</h4>
<p className="text-sm text-slate-400">I analyze your current manual processes to identify bottlenecks and lead gen opportunities.</p>
</div>
</div>

<div className="relative pt-8 md:pt-16">
<div className="absolute top-0 left-1/2 -translate-x-1/2 md:left-auto md:-translate-x-0 md:top-9 w-6 h-6 rounded-full bg-[#080808] border-2 border-blue-500 z-10 flex items-center justify-center shadow-[0_0_10px_rgba(59,130,246,0.5)]">
<div className="w-2 h-2 rounded-full bg-blue-500"></div>
</div>
<div className="glass p-6 rounded-2xl text-center md:text-left hover:-translate-y-2 transition-transform duration-300">
<div className="text-4xl font-bold text-blue-500/10 mb-4">02</div>
<h4 className="text-lg font-semibold text-white mb-2">Strategy</h4>
<p className="text-sm text-slate-400">I design a workflow blueprint, selecting the best AI tools and content strategies.</p>
</div>
</div>

<div className="relative pt-8 md:pt-16">
<div className="absolute top-0 left-1/2 -translate-x-1/2 md:left-auto md:-translate-x-0 md:top-9 w-6 h-6 rounded-full bg-[#080808] border-2 border-slate-700 z-10 flex items-center justify-center">
<div className="w-2 h-2 rounded-full bg-slate-500"></div>
</div>
<div className="glass p-6 rounded-2xl text-center md:text-left hover:-translate-y-2 transition-transform duration-300">
<div className="text-4xl font-bold text-white/10 mb-4">03</div>
<h4 className="text-lg font-semibold text-white mb-2">Build</h4>
<p className="text-sm text-slate-400">Development phase. I build the integration, write the content, and test rigorously.</p>
</div>
</div>

<div className="relative pt-8 md:pt-16">
<div className="absolute top-0 left-1/2 -translate-x-1/2 md:left-auto md:-translate-x-0 md:top-9 w-6 h-6 rounded-full bg-[#080808] border-2 border-slate-700 z-10 flex items-center justify-center">
<div className="w-2 h-2 rounded-full bg-slate-500"></div>
</div>
<div className="glass p-6 rounded-2xl text-center md:text-left hover:-translate-y-2 transition-transform duration-300">
<div className="text-4xl font-bold text-white/10 mb-4">04</div>
<h4 className="text-lg font-semibold text-white mb-2">Handoff</h4>
<p className="text-sm text-slate-400">I launch the system and provide a video walkthrough so you can manage your growth.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-start">
<div>
<span className="text-green-500 font-mono text-xs uppercase tracking-widest font-semibold block mb-4">About Me</span>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6">
                        Bridging Creativity <br/> &amp; Technology.
                    </h2>
<div className="space-y-6 text-slate-400 font-light leading-relaxed">
<p>
                            I'm <strong className="text-white font-medium">Morsalin Ahmed Suzon</strong>, an Automation Specialist and Content Strategist based in Bangladesh.
                        </p>
<p>
                            My journey is defined by a unique blend of skills: I don't just build the technical systems; I create the content that fuels them. From <strong>Content Writing</strong> and <strong>Photography</strong> to complex <strong>Lead Generation</strong> workflows, I offer a full-stack approach to digital growth.
                        </p>
<p>
                            Currently studying at National University, I am continuously expanding my expertise in <strong>AI Tools</strong> and <strong>Facebook Marketing</strong> to help businesses scale faster with less manual work.
                        </p>
</div>
<div className="mt-10 grid grid-cols-2 gap-6">
<div>
<div className="text-3xl font-bold text-white mb-1">3+</div>
<div className="text-xs text-slate-500 uppercase tracking-wider">Years Experience</div>
</div>
<div>
<div className="text-3xl font-bold text-white mb-1">50+</div>
<div className="text-xs text-slate-500 uppercase tracking-wider">Projects Completed</div>
</div>
</div>
</div>

<div className="glass rounded-3xl p-8 space-y-8">

<div>
<h4 className="text-white font-medium mb-4 flex items-center gap-2">
<i className="w-4 h-4 text-blue-500" data-lucide="cpu"></i> Technical &amp; Automation
                        </h4>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 rounded-md bg-white/5 border border-white/5 text-xs text-slate-300">AI Automation</span>
<span className="px-3 py-1 rounded-md bg-white/5 border border-white/5 text-xs text-slate-300">AI Tools Expert</span>
<span className="px-3 py-1 rounded-md bg-white/5 border border-white/5 text-xs text-slate-300">Process Automation</span>
<span className="px-3 py-1 rounded-md bg-white/5 border border-white/5 text-xs text-slate-300">API Integration</span>
<span className="px-3 py-1 rounded-md bg-white/5 border border-white/5 text-xs text-slate-300">Frontend Dev</span>
</div>
</div>

<div>
<h4 className="text-white font-medium mb-4 flex items-center gap-2">
<i className="w-4 h-4 text-pink-500" data-lucide="palette"></i> Creative &amp; Growth
                        </h4>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 rounded-md bg-white/5 border border-white/5 text-xs text-slate-300">Content Writing</span>
<span className="px-3 py-1 rounded-md bg-white/5 border border-white/5 text-xs text-slate-300">Lead Generation</span>
<span className="px-3 py-1 rounded-md bg-white/5 border border-white/5 text-xs text-slate-300">Facebook Management</span>
<span className="px-3 py-1 rounded-md bg-white/5 border border-white/5 text-xs text-slate-300">Photography</span>
<span className="px-3 py-1 rounded-md bg-white/5 border border-white/5 text-xs text-slate-300">Social Media Strategy</span>
</div>
</div>

<div>
<h4 className="text-white font-medium mb-4 flex items-center gap-2">
<i className="w-4 h-4 text-purple-500" data-lucide="layers"></i> Tools I Use Daily
                        </h4>
<div className="grid grid-cols-2 gap-3">
<div className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors">
<div className="w-8 h-8 rounded bg-[#6E3CBC] flex items-center justify-center text-white font-bold text-xs">Mk</div>
<span className="text-sm text-slate-300">Make.com</span>
</div>
<div className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors">
<div className="w-8 h-8 rounded bg-blue-600 flex items-center justify-center text-white"><i className="w-4 h-4" data-lucide="facebook"></i></div>
<span className="text-sm text-slate-300">Facebook Bus.</span>
</div>
<div className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors">
<div className="w-8 h-8 rounded bg-[#1C9945] flex items-center justify-center text-white"><i className="w-4 h-4" data-lucide="sheet"></i></div>
<span className="text-sm text-slate-300">Google Sheets</span>
</div>
<div className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors">
<div className="w-8 h-8 rounded bg-orange-500 flex items-center justify-center text-white font-bold text-xs"><i className="w-4 h-4" data-lucide="zap"></i></div>
<span className="text-sm text-slate-300">ChatGPT/AI</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5" id="work">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-12">Selected Projects</h2>
<div className="space-y-20">

<div className="group grid md:grid-cols-2 gap-8 items-center">
<div className="order-2 md:order-1 relative rounded-2xl overflow-hidden border border-white/10 bg-[#111] aspect-video">
<div className="absolute inset-0 bg-slate-900 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">

<div className="w-3/4 h-3/4 glass rounded-xl flex flex-col p-4">
<div className="flex gap-2 mb-4">
<div className="w-2 h-2 rounded-full bg-red-500"></div>
<div className="w-2 h-2 rounded-full bg-yellow-500"></div>
</div>
<div className="flex-1 space-y-2">
<div className="flex items-center justify-between p-2 bg-white/5 rounded">
<div className="h-2 w-20 bg-slate-700 rounded"></div>
<div className="h-2 w-8 bg-green-500/50 rounded"></div>
</div>
<div className="flex items-center justify-between p-2 bg-white/5 rounded">
<div className="h-2 w-24 bg-slate-700 rounded"></div>
<div className="h-2 w-8 bg-green-500/50 rounded"></div>
</div>
<div className="flex items-center justify-center pt-8 text-blue-500">
<i className="w-6 h-6 animate-bounce" data-lucide="arrow-down"></i>
</div>
</div>
</div>
</div>
</div>
<div className="order-1 md:order-2 space-y-4">
<div className="flex items-center gap-2">
<span className="text-xs font-mono px-2 py-1 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">Lead Gen</span>
<span className="text-xs font-mono px-2 py-1 rounded bg-white/5 text-slate-400 border border-white/10">Make.com</span>
</div>
<h3 className="text-2xl font-bold text-white">Automated Lead System</h3>
<p className="text-slate-400 leading-relaxed">
                            A fully automated lead capture system. When a user interacts with a Facebook ad or Telegram bot, their data is parsed, qualified by AI, and instantly logged into a structured Google Sheet.
                        </p>
<ul className="space-y-2 text-sm text-slate-500">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-green-500" data-lucide="check"></i> Zero manual data entry</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-green-500" data-lucide="check"></i> AI Lead Qualification</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-green-500" data-lucide="check"></i> Instant Admin Alerts</li>
</ul>
</div>
</div>

<div className="group grid md:grid-cols-2 gap-8 items-center">
<div className="space-y-4">
<div className="flex items-center gap-2">
<span className="text-xs font-mono px-2 py-1 rounded bg-pink-500/10 text-pink-400 border border-pink-500/20">Content</span>
<span className="text-xs font-mono px-2 py-1 rounded bg-white/5 text-slate-400 border border-white/10">Social Media</span>
</div>
<h3 className="text-2xl font-bold text-white">Brand Growth Strategy</h3>
<p className="text-slate-400 leading-relaxed">
                            Complete Facebook page management and content creation. I handled the photography, wrote engaging copy, and scheduled posts, resulting in a 40% increase in organic engagement.
                        </p>
<ul className="space-y-2 text-sm text-slate-500">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-green-500" data-lucide="check"></i> Professional Photography</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-green-500" data-lucide="check"></i> SEO Optimized Content</li>
</ul>
</div>
<div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#111] aspect-video">
<div className="absolute inset-0 bg-slate-900 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
<div className="w-3/4 glass rounded-lg p-6 space-y-3">
<div className="h-2 w-1/4 bg-slate-600 rounded"></div>
<div className="h-8 w-full bg-slate-800 rounded border border-white/5"></div>
<div className="h-2 w-1/4 bg-slate-600 rounded"></div>
<div className="h-20 w-full bg-slate-800 rounded border border-white/5"></div>
<div className="h-8 w-1/3 bg-pink-600 rounded"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="contact">

<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-[#050505] to-[#050505]"></div>
<div className="max-w-3xl mx-auto px-6 relative z-10">
<div className="text-center mb-12">
<h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">Let's build something <br/> efficient.</h2>
<p className="text-slate-400">Need content or automation? Let's discuss your growth.</p>
</div>

<div className="glass p-8 rounded-3xl border border-white/10 shadow-2xl">
<form action="mailto:ahmedsuzon53@gmail.com" className="space-y-6" enctype="text/plain" method="post">
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-medium text-slate-400 ml-1">Name</label>
<input className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-400 ml-1">Email</label>
<input className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all" placeholder="john@example.com" type="email"/>
</div>
</div>
<div className="space-y-4">
<label className="text-xs font-medium text-slate-400 ml-1">What do you need help with?</label>
<div className="grid grid-cols-2 gap-3">
<label className="cursor-pointer">
<input className="peer sr-only" type="checkbox"/>
<div className="px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-sm text-slate-300 peer-checked:bg-blue-500/20 peer-checked:border-blue-500/50 peer-checked:text-blue-200 transition-all text-center hover:bg-white/10">
                                    Automation
                                </div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" type="checkbox"/>
<div className="px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-sm text-slate-300 peer-checked:bg-blue-500/20 peer-checked:border-blue-500/50 peer-checked:text-blue-200 transition-all text-center hover:bg-white/10">
                                    Lead Gen
                                </div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" type="checkbox"/>
<div className="px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-sm text-slate-300 peer-checked:bg-blue-500/20 peer-checked:border-blue-500/50 peer-checked:text-blue-200 transition-all text-center hover:bg-white/10">
                                    Content Writing
                                </div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" type="checkbox"/>
<div className="px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-sm text-slate-300 peer-checked:bg-blue-500/20 peer-checked:border-blue-500/50 peer-checked:text-blue-200 transition-all text-center hover:bg-white/10">
                                    Photography
                                </div>
</label>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-400 ml-1">Message</label>
<textarea className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all resize-none" placeholder="Tell me about your project..." rows="4"></textarea>
</div>
<button className="w-full bg-white text-black font-semibold h-12 rounded-xl hover:bg-slate-200 transition-colors flex items-center justify-center gap-2" type="submit">
                        Send Message <i className="w-4 h-4" data-lucide="send"></i>
</button>
</form>
<div className="mt-8 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-2 text-sm text-slate-400">
<i className="w-4 h-4" data-lucide="mail"></i> ahmedsuzon53@gmail.com
                    </div>
<a className="flex items-center gap-2 text-sm text-green-400 hover:text-green-300 transition-colors" href="https://wa.me/8801799665158">
<i className="w-4 h-4" data-lucide="message-circle"></i> WhatsApp Chat
                    </a>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-[#020202] py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex flex-col items-center md:items-start gap-2">
<a className="text-lg font-bold text-white" href="#">Morsalin<span className="text-slate-500">Ahmed</span></a>
<p className="text-xs text-slate-600">© 2024. All rights reserved.</p>
</div>
<div className="flex items-center gap-6">
<a aria-label="LinkedIn" className="text-slate-500 hover:text-white transition-colors" href="https://www.linkedin.com/in/morsalin-ahmed-863960277">
<i className="w-5 h-5" data-lucide="linkedin"></i>
</a>
<a aria-label="Facebook" className="text-slate-500 hover:text-white transition-colors" href="https://www.facebook.com/share/1AavX5rFV1">
<i className="w-5 h-5" data-lucide="facebook"></i>
</a>
<a aria-label="Email" className="text-slate-500 hover:text-white transition-colors" href="mailto:ahmedsuzon53@gmail.com">
<i className="w-5 h-5" data-lucide="mail"></i>
</a>
</div>
</div>
</footer>


    </>
  );
}
