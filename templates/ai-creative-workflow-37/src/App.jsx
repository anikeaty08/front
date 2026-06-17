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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<div className="fixed inset-0 z-[-1] pointer-events-none glow-bg"></div>
<div className="fixed inset-0 z-[-1] pointer-events-none" style={{backgroundImage: 'radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '32px 32px', opacity: '0.4'}}></div>

<header className="fixed top-0 inset-x-0 z-50 glass-panel border-x-0 border-t-0 bg-neutral-950/60 transition-all">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-white font-medium text-lg tracking-tight flex items-center gap-2" href="#">
<div className="w-6 h-6 rounded-md bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center">
<iconify-icon className="text-white text-sm" icon="solar:pen-new-square-linear" strokeWidth="1.5"></iconify-icon>
</div>
                LoveArt.ai
            </a>
<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium hover:text-white transition-colors" href="#product">Product</a>
<a className="text-sm font-medium hover:text-white transition-colors" href="#workflow">Workflow</a>
<a className="text-sm font-medium hover:text-white transition-colors" href="#use-cases">Use Cases</a>
<a className="text-sm font-medium hover:text-white transition-colors" href="#faq">FAQ</a>
<a className="text-sm font-medium hover:text-white transition-colors" href="#waitlist">Waitlist</a>
</nav>
<div className="flex items-center gap-4">
<a className="hidden sm:inline-flex items-center justify-center rounded-full bg-white text-neutral-950 px-4 py-2 text-sm font-medium hover:bg-neutral-200 transition-colors" href="#waitlist">
                    Request Founding Access
                </a>
</div>
</div>
</header>
<main className="pt-32 pb-24">

<section className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-16 animate-fade-up">
<div className="flex-1 max-w-2xl">
<div className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1.5 text-xs font-medium text-violet-300 mb-8">
<span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse"></span>
                    Launching Soon
                </div>
<h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold text-gradient tracking-tight leading-[1.1] mb-6">
                    Create on-brand visuals without the usual AI chaos.
                </h1>
<p className="text-base sm:text-lg text-neutral-400 leading-relaxed mb-8 max-w-xl">
                    LoveArt.ai is the business-first AI creative workflow platform for founders, marketers, creators, agencies, and lean teams who need branded visuals fast. Build your brand context once, start projects with purpose, generate stronger concepts, refine faster, and reuse assets that actually fit your business.
                </p>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
<a className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-neutral-950 px-6 py-3 text-sm font-medium hover:bg-neutral-200 transition-colors w-full sm:w-auto" href="#waitlist">
                        Request Founding Access
                        <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center gap-2 rounded-full glass-panel hover:bg-white/10 px-6 py-3 text-sm font-medium text-white transition-colors w-full sm:w-auto" href="#workflow">
                        Explore the Workflow
                    </a>
</div>
<p className="text-xs text-neutral-500 flex items-center gap-2">
<iconify-icon icon="solar:info-circle-linear" strokeWidth="1.5"></iconify-icon>
                    Early access is opening soon. Join the waitlist and help shape what ships first.
                </p>
</div>

<div className="flex-1 w-full lg:w-auto perspective-1000 relative">

<div className="absolute inset-0 bg-violet-500/20 blur-[100px] rounded-full z-[-1]"></div>
<div className="glass-panel rounded-2xl shadow-2xl overflow-hidden border border-white/10 flex flex-col h-[500px] transform rotate-y-[-5deg] rotate-x-[5deg] transition-transform hover:rotate-0 duration-700">

<div className="h-12 border-b border-white/10 flex items-center px-4 justify-between bg-neutral-900/50">
<div className="flex items-center gap-3">
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full bg-neutral-700"></div>
<div className="w-3 h-3 rounded-full bg-neutral-700"></div>
<div className="w-3 h-3 rounded-full bg-neutral-700"></div>
</div>
<div className="h-4 w-px bg-white/10 mx-2"></div>
<span className="text-xs font-medium text-neutral-400">Project: Q3 Campaign Concept</span>
</div>
<div className="flex gap-2">
<div className="w-20 h-6 rounded bg-white/5 border border-white/5"></div>
<div className="w-8 h-6 rounded bg-violet-500/20 border border-violet-500/30"></div>
</div>
</div>

<div className="flex flex-1 overflow-hidden">

<div className="w-48 border-r border-white/10 p-4 bg-neutral-950/50 flex flex-col gap-4">
<div>
<div className="text-[10px] font-medium text-neutral-500 uppercase tracking-wider mb-2">Active Brand Kit</div>
<div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded p-2">
<div className="w-6 h-6 rounded bg-gradient-to-tr from-orange-400 to-pink-500"></div>
<span className="text-xs text-white">Acme Corp</span>
</div>
</div>
<div className="space-y-2">
<div className="h-6 w-full rounded bg-white/5 flex items-center px-2 gap-2">
<iconify-icon className="text-neutral-500 text-xs" icon="solar:palette-linear"></iconify-icon>
<div className="h-2 w-16 bg-white/10 rounded"></div>
</div>
<div className="h-6 w-full rounded bg-white/5 flex items-center px-2 gap-2">
<iconify-icon className="text-neutral-500 text-xs" icon="solar:camera-linear"></iconify-icon>
<div className="h-2 w-20 bg-white/10 rounded"></div>
</div>
<div className="h-6 w-full rounded bg-white/5 flex items-center px-2 gap-2">
<iconify-icon className="text-neutral-500 text-xs" icon="solar:folder-with-files-linear"></iconify-icon>
<div className="h-2 w-12 bg-white/10 rounded"></div>
</div>
</div>
</div>

<div className="flex-1 p-6 flex flex-col bg-neutral-900/30 relative">
<div className="flex-1 rounded-xl border border-white/10 overflow-hidden relative group">
<img alt="AI Generated Graphic" className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 left-4 right-4 glass-panel rounded-lg p-3 flex items-center justify-between">
<div className="text-xs text-neutral-300 truncate mr-4">Minimalist product flatlay, orange accent, clean lighting...</div>
<div className="flex gap-2 shrink-0">
<div className="w-6 h-6 rounded bg-white/10 flex items-center justify-center"><iconify-icon className="text-xs text-white" icon="solar:refresh-linear"></iconify-icon></div>
<div className="w-6 h-6 rounded bg-white text-black flex items-center justify-center"><iconify-icon className="text-xs" icon="solar:check-read-linear"></iconify-icon></div>
</div>
</div>
</div>
</div>

<div className="w-56 border-l border-white/10 p-4 bg-neutral-950/50 flex flex-col gap-4">
<div className="text-[10px] font-medium text-neutral-500 uppercase tracking-wider">Refinement</div>
<div className="space-y-4">
<div>
<div className="flex justify-between text-xs mb-1"><span className="text-neutral-400">Style Match</span><span className="text-white">High</span></div>
<div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
<div className="h-full w-[85%] bg-violet-500 rounded-full"></div>
</div>
</div>
<div>
<div className="text-xs text-neutral-400 mb-2">Subject Variations</div>
<div className="grid grid-cols-2 gap-2">
<div className="aspect-square rounded border border-white/20 bg-neutral-800"></div>
<div className="aspect-square rounded border border-white/5 bg-neutral-800 opacity-50"></div>
<div className="aspect-square rounded border border-white/5 bg-neutral-800 opacity-50"></div>
<div className="aspect-square rounded border border-white/5 bg-neutral-800 opacity-50"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-white/10 bg-neutral-900/50 mt-24 py-6 px-6 overflow-hidden flex items-center justify-center animate-fade-up delay-100">
<div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-x-8 gap-y-4 sm:gap-x-12">
<div className="flex items-center gap-2 text-sm text-neutral-400 font-medium">
<iconify-icon className="text-neutral-500" icon="solar:palette-linear"></iconify-icon> Brand Kits
                </div>
<div className="flex items-center gap-2 text-sm text-neutral-400 font-medium">
<iconify-icon className="text-neutral-500" icon="solar:folder-with-files-linear"></iconify-icon> Project Workflows
                </div>
<div className="flex items-center gap-2 text-sm text-neutral-400 font-medium">
<iconify-icon className="text-neutral-500" icon="solar:magic-stick-3-linear"></iconify-icon> Guided AI Generation
                </div>
<div className="flex items-center gap-2 text-sm text-neutral-400 font-medium">
<iconify-icon className="text-neutral-500" icon="solar:tuning-square-2-linear"></iconify-icon> Faster Refinement
                </div>
<div className="flex items-center gap-2 text-sm text-neutral-400 font-medium">
<iconify-icon className="text-neutral-500" icon="solar:gallery-wide-linear"></iconify-icon> Reusable Assets
                </div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24 animate-fade-up delay-200">
<div className="max-w-3xl mb-16">
<span className="text-violet-400 font-medium text-sm tracking-tight mb-2 block">Why this matters</span>
<h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-4">Most AI image tools create more work than they remove.</h2>
<p className="text-base text-neutral-400 leading-relaxed">You can generate endless images. That does not mean you get assets you can actually use. Prompts drift. Styles change. Files get scattered. Teams waste hours recreating the same visual direction over and over.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="glass-panel p-6 rounded-2xl flex flex-col gap-4">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
<iconify-icon className="text-xl text-neutral-300" icon="solar:dices-linear"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-medium text-white tracking-tight mb-2">Prompt roulette</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Too much time disappears into rewrites, rerolls, and almost-right outputs.</p>
</div>
</div>
<div className="glass-panel p-6 rounded-2xl flex flex-col gap-4">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
<iconify-icon className="text-xl text-neutral-300" icon="solar:brain-linear"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-medium text-white tracking-tight mb-2">No brand memory</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Most tools forget your visual rules the moment you move to the next idea.</p>
</div>
</div>
<div className="glass-panel p-6 rounded-2xl flex flex-col gap-4">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
<iconify-icon className="text-xl text-neutral-300" icon="solar:link-broken-linear"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-medium text-white tracking-tight mb-2">Disconnected workflow</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Generate in one place. Edit in another. Save somewhere else. Then repeat the whole mess next week.</p>
</div>
</div>
</div>
</section>

<section className="relative py-24 overflow-hidden">
<div className="absolute inset-0 bg-violet-900/10 border-y border-white/5"></div>
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.15),transparent_50%)]"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">
<span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-neutral-300 mb-6">
                    The better way
                </span>
<h2 className="text-4xl sm:text-5xl font-semibold text-gradient tracking-tight mb-6">LoveArt.ai gives your creative workflow a memory.</h2>
<p className="text-base sm:text-lg text-neutral-300 leading-relaxed mb-6">
                    Set your brand direction once. Start projects with real context. Generate better options, refine the strongest ones, and keep the assets worth reusing. The result is a faster, cleaner path from rough idea to on-brand business visual.
                </p>
<p className="text-sm font-medium text-violet-300">
                    Less starting from scratch. More visuals you can actually publish.
                </p>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24" id="workflow">
<div className="text-center mb-16">
<span className="text-violet-400 font-medium text-sm tracking-tight mb-2 block">How it works</span>
<h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">A simpler path from brief to usable asset.</h2>
</div>
<div className="relative">

<div className="hidden md:block absolute top-[45px] left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-white/20 to-transparent z-0"></div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">

<div className="flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-lg font-medium text-white mb-6 border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.1)] relative">
                            1
                            <div className="absolute -inset-1 rounded-full border border-white/10 animate-[spin_10s_linear_infinite]"></div>
</div>
<h3 className="text-base font-medium text-white mb-2">Create your Brand Kit</h3>
<p className="text-sm text-neutral-400">Save your visual direction, references, and brand context once so you stop repeating yourself every session.</p>
</div>

<div className="flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-lg font-medium text-white mb-6 border-white/20">2</div>
<h3 className="text-base font-medium text-white mb-2">Start a Project</h3>
<p className="text-sm text-neutral-400">Tell LoveArt.ai what you need to create, where it will be used, and what the asset needs to achieve.</p>
</div>

<div className="flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-lg font-medium text-white mb-6 border-white/20">3</div>
<h3 className="text-base font-medium text-white mb-2">Generate and refine</h3>
<p className="text-sm text-neutral-400">Create stronger concepts, iterate faster, and improve good outputs without restarting from zero.</p>
</div>

<div className="flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-violet-500/20 border border-violet-500/50 flex items-center justify-center text-lg font-medium text-white mb-6 shadow-[0_0_20px_rgba(124,58,237,0.3)]">4</div>
<h3 className="text-base font-medium text-white mb-2">Save and reuse what works</h3>
<p className="text-sm text-neutral-400">Keep approved assets organized so your best creative direction becomes easier to repeat and scale.</p>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24" id="product">
<div className="max-w-3xl mb-16">
<span className="text-violet-400 font-medium text-sm tracking-tight mb-2 block">Built for real brand work</span>
<h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">A workflow system, not another random generator.</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 glass-panel p-8 rounded-2xl flex flex-col md:flex-row gap-8 items-center group">
<div className="flex-1">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6">
<iconify-icon className="text-xl text-neutral-300" icon="solar:palette-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-3">Brand Kits</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Give your visuals a foundation with reusable brand context, style direction, references, and creative guardrails.</p>
</div>

<div className="w-full md:w-64 h-48 bg-neutral-950/50 rounded-xl border border-white/10 p-4 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-transparent"></div>
<div className="flex gap-2 mb-3">
<div className="w-8 h-8 rounded-full bg-blue-500"></div>
<div className="w-8 h-8 rounded-full bg-orange-400"></div>
<div className="w-8 h-8 rounded-full bg-emerald-400"></div>
</div>
<div className="h-2 w-3/4 bg-white/10 rounded mb-2"></div>
<div className="h-2 w-1/2 bg-white/10 rounded mb-4"></div>
<div className="grid grid-cols-2 gap-2">
<div className="h-16 bg-white/5 rounded"></div>
<div className="h-16 bg-white/5 rounded"></div>
</div>
</div>
</div>

<div className="glass-panel p-8 rounded-2xl flex flex-col group">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6">
<iconify-icon className="text-xl text-neutral-300" icon="solar:folder-with-files-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-3">Projects</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Keep campaigns, concepts, and asset goals organized instead of buried inside one-off prompts.</p>
</div>

<div className="glass-panel p-8 rounded-2xl flex flex-col group">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6">
<iconify-icon className="text-xl text-neutral-300" icon="solar:magic-stick-3-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-3">Guided Studio</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Move from idea to output with a cleaner workflow built for business visuals, not novelty generations.</p>
</div>

<div className="glass-panel p-8 rounded-2xl flex flex-col group">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6">
<iconify-icon className="text-xl text-neutral-300" icon="solar:tuning-square-2-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-3">Smarter Refinement</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Improve, adjust, and evolve strong outputs without throwing everything away and starting over.</p>
</div>

<div className="glass-panel p-8 rounded-2xl flex flex-col group relative overflow-hidden">
<div className="absolute -right-10 -bottom-10 opacity-10">
<iconify-icon icon="solar:gallery-wide-linear" style={{fontSize: '150px'}}></iconify-icon>
</div>
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 relative z-10">
<iconify-icon className="text-xl text-neutral-300" icon="solar:gallery-wide-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-3 relative z-10">Reusable Asset Library</h3>
<p className="text-sm text-neutral-400 leading-relaxed relative z-10">Save the visuals worth keeping and turn winning creative directions into repeatable assets.</p>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24 border-t border-white/5" id="use-cases">
<div className="max-w-3xl mb-16 text-center mx-auto">
<span className="text-violet-400 font-medium text-sm tracking-tight mb-2 block">What you can create</span>
<h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">The kinds of visuals teams actually need.</h2>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
<div className="flex flex-col gap-3">
<div className="flex items-center gap-2 mb-1">
<iconify-icon className="text-violet-400 text-lg" icon="solar:ad-linear"></iconify-icon>
<h3 className="text-base font-medium text-white tracking-tight">Ad creatives</h3>
</div>
<p className="text-sm text-neutral-400 leading-relaxed">Build stronger visual directions for paid campaigns without burning hours on prompt roulette.</p>
</div>
<div className="flex flex-col gap-3">
<div className="flex items-center gap-2 mb-1">
<iconify-icon className="text-violet-400 text-lg" icon="solar:chat-square-like-linear"></iconify-icon>
<h3 className="text-base font-medium text-white tracking-tight">Social content</h3>
</div>
<p className="text-sm text-neutral-400 leading-relaxed">Create branded visuals for ongoing content without reinventing your look every week.</p>
</div>
<div className="flex flex-col gap-3">
<div className="flex items-center gap-2 mb-1">
<iconify-icon className="text-violet-400 text-lg" icon="solar:monitor-smartphone-linear"></iconify-icon>
<h3 className="text-base font-medium text-white tracking-tight">Landing page visuals</h3>
</div>
<p className="text-sm text-neutral-400 leading-relaxed">Generate cleaner concepts for hero sections, promos, launches, and offers.</p>
</div>
<div className="flex flex-col gap-3">
<div className="flex items-center gap-2 mb-1">
<iconify-icon className="text-violet-400 text-lg" icon="solar:bag-3-linear"></iconify-icon>
<h3 className="text-base font-medium text-white tracking-tight">Product and promo art</h3>
</div>
<p className="text-sm text-neutral-400 leading-relaxed">Create visuals for launches, sales pushes, seasonal campaigns, and branded announcements.</p>
</div>
<div className="flex flex-col gap-3">
<div className="flex items-center gap-2 mb-1">
<iconify-icon className="text-violet-400 text-lg" icon="solar:document-text-linear"></iconify-icon>
<h3 className="text-base font-medium text-white tracking-tight">Content graphics</h3>
</div>
<p className="text-sm text-neutral-400 leading-relaxed">Support articles, newsletters, and editorial content with visuals that fit your brand.</p>
</div>
<div className="flex flex-col gap-3">
<div className="flex items-center gap-2 mb-1">
<iconify-icon className="text-violet-400 text-lg" icon="solar:compass-linear"></iconify-icon>
<h3 className="text-base font-medium text-white tracking-tight">Brand exploration</h3>
</div>
<p className="text-sm text-neutral-400 leading-relaxed">Test new visual directions quickly without losing structure or consistency.</p>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24" id="waitlist">
<div className="glass-panel rounded-3xl p-8 sm:p-12 relative overflow-hidden flex flex-col lg:flex-row gap-16 items-center">

<div className="absolute -top-40 -left-40 w-96 h-96 bg-violet-500/20 blur-[120px] rounded-full pointer-events-none"></div>
<div className="flex-1 relative z-10 max-w-xl">
<span className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1.5 text-xs font-medium text-violet-300 mb-6">
                        Founding Access
                    </span>
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight mb-6">Get early access before the public launch.</h2>
<p className="text-base text-neutral-400 leading-relaxed mb-8">
                        LoveArt.ai is launching soon. Join the waitlist to get launch updates, early access invitations, and a chance to influence the first release.
                    </p>
<div className="flex items-start gap-4 p-4 rounded-xl bg-neutral-900/50 border border-white/5">
<iconify-icon className="text-violet-400 text-2xl shrink-0 mt-0.5" icon="solar:shield-check-linear"></iconify-icon>
<p className="text-xs text-neutral-400 leading-relaxed">
                            We’re using waitlist feedback to shape launch priorities. You’ll get product updates and early access details when invitations open.
                        </p>
</div>
</div>
<div className="w-full lg:w-[480px] relative z-10">
<form className="bg-neutral-950 border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col gap-5 shadow-2xl">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-neutral-300">Full Name</label>
<input className="w-full rounded-lg bg-neutral-900 border border-white/10 px-3 py-2.5 text-sm text-white focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50 transition-all placeholder:text-neutral-600" placeholder="Jane Doe" required="" type="text"/>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-neutral-300">Work Email</label>
<input className="w-full rounded-lg bg-neutral-900 border border-white/10 px-3 py-2.5 text-sm text-white focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50 transition-all placeholder:text-neutral-600" placeholder="jane@company.com" required="" type="email"/>
</div>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-neutral-300">What best describes you?</label>
<div className="relative">
<select className="w-full appearance-none rounded-lg bg-neutral-900 border border-white/10 px-3 py-2.5 text-sm text-white focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50 transition-all pr-10" required="">
<option className="text-neutral-500" disabled="" selected="" value="">Select your role...</option>
<option value="Founder">Founder</option>
<option value="Marketer">Marketer</option>
<option value="Creator">Creator</option>
<option value="Agency">Agency</option>
<option value="Ecommerce Brand">Ecommerce Brand</option>
<option value="Other">Other</option>
</select>
<div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
<iconify-icon className="text-neutral-500" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-neutral-300">What type of visual assets do you need most often?</label>
<div className="relative">
<select className="w-full appearance-none rounded-lg bg-neutral-900 border border-white/10 px-3 py-2.5 text-sm text-white focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50 transition-all pr-10" required="">
<option className="text-neutral-500" disabled="" selected="" value="">Select primary need...</option>
<option value="Ad creatives">Ad creatives</option>
<option value="Social posts">Social posts</option>
<option value="Landing page visuals">Landing page visuals</option>
<option value="Product promo visuals">Product promo visuals</option>
<option value="Blog or content graphics">Blog or content graphics</option>
<option value="Brand concepts">Brand concepts</option>
<option value="Other">Other</option>
</select>
<div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
<iconify-icon className="text-neutral-500" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-neutral-300">What’s your top pain point or feature need right now?</label>
<textarea className="w-full rounded-lg bg-neutral-900 border border-white/10 px-3 py-2.5 text-sm text-white focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50 transition-all placeholder:text-neutral-600 custom-scrollbar resize-none" placeholder="Tell us what slows you down, what is missing in current tools, or what would make this an instant yes for you." rows="3"></textarea>
</div>
<button className="mt-2 w-full rounded-lg bg-white text-neutral-950 font-medium text-sm px-4 py-3 hover:bg-neutral-200 transition-colors flex justify-center items-center gap-2" type="button">
                            Join the Waitlist
                            <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</form>
</div>
</div>
</section>

<section className="max-w-3xl mx-auto px-6 py-24" id="faq">
<h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight mb-10 text-center">Questions serious users usually ask first.</h2>
<div className="flex flex-col gap-6">
<div className="border-b border-white/10 pb-6">
<h3 className="text-base font-medium text-white mb-2">Who is LoveArt.ai for?</h3>
<p className="text-sm text-neutral-400 leading-relaxed">LoveArt.ai is being built for founders, marketers, creators, agencies, and lean teams that need branded visual assets faster and with less inconsistency.</p>
</div>
<div className="border-b border-white/10 pb-6">
<h3 className="text-base font-medium text-white mb-2">Is this just another AI image generator?</h3>
<p className="text-sm text-neutral-400 leading-relaxed">No. The goal is not endless random outputs. The goal is a more structured workflow for creating, refining, saving, and reusing on-brand visuals for real business needs.</p>
</div>
<div className="border-b border-white/10 pb-6">
<h3 className="text-base font-medium text-white mb-2">What kinds of visuals will LoveArt.ai support?</h3>
<p className="text-sm text-neutral-400 leading-relaxed">The platform is being designed around the visuals teams use most often: ad creatives, social assets, landing page visuals, product promo art, content graphics, and brand concept directions.</p>
</div>
<div className="border-b border-white/10 pb-6">
<h3 className="text-base font-medium text-white mb-2">Do I need design experience?</h3>
<p className="text-sm text-neutral-400 leading-relaxed">No. LoveArt.ai is being built to help non-designers and design-conscious teams move faster without getting buried in endless prompt experimentation.</p>
</div>
<div className="pb-2">
<h3 className="text-base font-medium text-white mb-2">When will early access open?</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Soon. Waitlist members will hear first when early access invitations begin rolling out.</p>
</div>
</div>
</section>

<section className="max-w-4xl mx-auto px-6 py-32 text-center relative">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-64 bg-violet-600/20 blur-[100px] rounded-full z-[-1]"></div>
<h2 className="text-4xl sm:text-5xl font-semibold text-white tracking-tight mb-6">Stop starting from scratch every time you need a visual.</h2>
<p className="text-base sm:text-lg text-neutral-400 leading-relaxed mb-10 max-w-2xl mx-auto">
                Join the LoveArt.ai waitlist and get early access to a smarter, more structured way to create on-brand business visuals.
            </p>
<div className="flex flex-col items-center justify-center gap-4">
<a className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-neutral-950 px-8 py-4 text-sm font-medium hover:bg-neutral-200 transition-colors" href="#waitlist">
                    Request Founding Access
                </a>
<span className="text-xs text-neutral-500">Launching soon. Early access spots will roll out in stages.</span>
</div>
</section>
</main>

<footer className="border-t border-white/10 bg-neutral-950">
<div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="text-sm font-medium text-white flex items-center gap-2">
<div className="w-5 h-5 rounded flex items-center justify-center bg-white/10">
<iconify-icon className="text-white text-xs" icon="solar:pen-new-square-linear"></iconify-icon>
</div>
                LoveArt.ai
            </div>
<nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-xs font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#product">Product</a>
<a className="hover:text-white transition-colors" href="#workflow">Workflow</a>
<a className="hover:text-white transition-colors" href="#use-cases">Use Cases</a>
<a className="hover:text-white transition-colors" href="#faq">FAQ</a>
<a className="hover:text-white transition-colors" href="#waitlist">Waitlist</a>
<a className="hover:text-white transition-colors ml-4 sm:ml-8" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
</nav>
</div>
<div className="border-t border-white/5 py-6 text-center">
<p className="text-xs text-neutral-500">LoveArt.ai — Business-first AI creative workflows for on-brand visuals.</p>
</div>
</footer>

    </>
  );
}
