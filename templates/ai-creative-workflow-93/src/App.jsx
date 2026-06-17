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



/* Kept from original template */
(function () {
const once = true;
if (!window.__inViewIO) {
window.__inViewIO = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("animate");
if (once) window.__inViewIO.unobserve(entry.target);
}
});
}, { threshold: 0.1, rootMargin: "0px 0px -5% 0px" });
}
window.initInViewAnimations = function (selector = ".animate-on-scroll") {
document.querySelectorAll(selector).forEach((el) => {
window.__inViewIO.observe(el);
});
};
document.addEventListener("DOMContentLoaded", () => initInViewAnimations());
})();



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
      

<div className="pointer-events-none fixed inset-0 -z-10">
<div className="absolute inset-0 opacity-40" style={{background: 'radial-gradient(800px 400px at 50% -10%, rgba(139,92,246,0.15), transparent 60%), radial-gradient(800px 400px at 80% 50%, rgba(59,130,246,0.08), transparent 60%)'}}></div>
</div>
<div className="gradient-blur">
<div style={{backdropFilter: 'blur(1px)', mask: 'linear-gradient(to top, rgba(0, 0, 0, 0) 12.5%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 1) 37.5%, rgba(0, 0, 0, 0) 50%)', position: 'absolute', inset: '0', zIndex: '2'}}></div>
<div style={{backdropFilter: 'blur(2px)', mask: 'linear-gradient(to top, rgba(0, 0, 0, 0) 25%, rgba(0, 0, 0, 1) 37.5%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 62.5%)', position: 'absolute', inset: '0', zIndex: '3'}}></div>
<div style={{backdropFilter: 'blur(4px)', mask: 'linear-gradient(to top, rgba(0, 0, 0, 0) 37.5%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 1) 62.5%, rgba(0, 0, 0, 0) 75%)', position: 'absolute', inset: '0', zIndex: '4'}}></div>
<div style={{backdropFilter: 'blur(8px)', mask: 'linear-gradient(to top, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 1) 62.5%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 0) 87.5%)', position: 'absolute', inset: '0', zIndex: '5'}}></div>
<div style={{backdropFilter: 'blur(16px)', mask: 'linear-gradient(to top, rgba(0, 0, 0, 0) 62.5%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 0) 100%)', position: 'absolute', inset: '0', zIndex: '6'}}></div>
<div style={{backdropFilter: 'blur(32px)', mask: 'linear-gradient(to top, rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 1) 100%)', position: 'absolute', inset: '0', zIndex: '7'}}></div>
<div style={{content: '\'\'', zIndex: '1', backdropFilter: 'blur(0.5px)', mask: 'linear-gradient(to top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 12.5%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 0) 37.5%)', position: 'absolute', inset: '0'}}></div>
<div style={{content: '\'\'', zIndex: '8', backdropFilter: 'blur(64px)', mask: 'linear-gradient(to top, rgba(0, 0, 0, 0) 87.5%, rgba(0, 0, 0, 1) 100%)', position: 'absolute', inset: '0'}}></div>
</div>
<style>.gradient-blur { position: fixed; z-index: 50; inset: 0 0 auto 0; height: 80px; pointer-events: none; }</style>

<header className="fixed z-[60] top-0 right-0 left-0 bg-black/40 backdrop-blur-xl border-b border-white/5">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="flex h-16 items-center justify-between">

<a className="inline-flex items-center gap-2 text-white" href="#">
<iconify-icon className="text-xl text-violet-400" icon="solar:infinity-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-base font-medium tracking-tight">LoveArt.ai</span>
</a>

<nav className="hidden md:flex items-center gap-8 text-sm text-neutral-400 font-medium">
<a className="hover:text-white transition-colors" href="#product">Product</a>
<a className="hover:text-white transition-colors" href="#workflow">Workflow</a>
<a className="hover:text-white transition-colors" href="#use-cases">Use Cases</a>
<a className="hover:text-white transition-colors" href="#faq">FAQ</a>
<a className="hover:text-white transition-colors" href="#waitlist">Waitlist</a>
</nav>

<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex items-center justify-center rounded-full bg-white/10 px-4 py-2 text-xs font-medium text-white ring-1 ring-white/10 hover:bg-white/15 transition backdrop-blur" href="#waitlist">
          Request Founding Access
        </a>
<button className="inline-flex md:hidden h-9 w-9 items-center justify-center rounded-full bg-neutral-900/60 text-neutral-200 ring-1 ring-white/10 backdrop-blur hover:bg-neutral-900 transition border-gradient before:rounded-full">
<iconify-icon className="text-base" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</div>
</header>
<main className="relative pt-24">

<section className="max-w-7xl mr-auto ml-auto pt-20 md:pt-28 pr-6 pb-20 pl-6 text-center">
<div style={{animation: 'fadeSlideIn 1s ease-out 0.1s both'}}>
<span className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-300">
<span className="h-1.5 w-1.5 rounded-full bg-violet-400 animate-pulse"></span>
        Launching Soon
      </span>
</div>
<div className="mx-auto max-w-4xl mt-8" style={{animation: 'fadeSlideIn 1s ease-out 0.2s both'}}>
<h1 className="text-4xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight font-medium text-white">
        Create on-brand visuals without <span className="bg-gradient-to-r from-neutral-200 to-neutral-500 bg-clip-text text-transparent">the usual AI chaos.</span>
</h1>
</div>
<p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-neutral-400 font-normal leading-relaxed" style={{animation: 'fadeSlideIn 1s ease-out 0.3s both'}}>
      LoveArt.ai is the business-first AI creative workflow platform for founders, marketers, creators, agencies, and lean teams who need branded visuals fast. Build your brand context once, start projects with purpose, generate stronger concepts, refine faster, and reuse assets that actually fit your business.
    </p>
<div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4" style={{animation: 'fadeSlideIn 1s ease-out 0.4s both'}}>
<a className="group w-full sm:w-auto inline-flex h-11 items-center justify-center gap-2 rounded-full px-6 text-sm font-medium text-white transition-all duration-500 hover:-translate-y-0.5 outline outline-1 outline-white/10 hover:outline-white/20 relative border-gradient before:rounded-full" href="#waitlist">

<span aria-hidden="true" className="absolute -inset-px h-full w-full overflow-hidden rounded-full">
<span className="absolute inset-0 rounded-full" style={{background: 'linear-gradient(140deg, rgba(20,20,22,1) 0%, rgba(40,30,50,1) 35%, rgba(60,40,80,1) 70%, rgba(20,15,30,1) 100%)'}}></span>
<span className="absolute top-0 right-1 h-[28px] w-20 bg-violet-400 opacity-20 mix-blend-lighten blur-[25px] rounded-full"></span>
<span className="absolute inset-0 ring-1 ring-inset ring-white/15 rounded-full"></span>
</span>
<span className="relative z-10 flex items-center gap-2">
          Request Founding Access
          <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</span>
</a>
<a className="inline-flex w-full sm:w-auto h-11 items-center justify-center gap-2 rounded-full bg-neutral-900/50 px-6 text-sm font-medium text-neutral-300 ring-1 ring-white/10 hover:bg-neutral-800 hover:text-white transition border-gradient before:rounded-full" href="#workflow">
        Explore the Workflow
      </a>
</div>
<p className="mt-4 text-xs text-neutral-500 font-normal" style={{animation: 'fadeSlideIn 1s ease-out 0.5s both'}}>
      Early access is opening soon. Join the waitlist and help shape what ships first.
    </p>

<div className="mt-16 sm:mt-20 relative mx-auto max-w-5xl" style={{animation: 'fadeSlideIn 1.2s ease-out 0.6s both'}}>

<div className="absolute -inset-1 bg-gradient-to-b from-violet-500/20 to-transparent blur-2xl rounded-[2rem] opacity-50"></div>

<div className="relative rounded-2xl sm:rounded-3xl border border-white/10 bg-[#0a0a0a]/90 backdrop-blur-xl shadow-2xl shadow-black/50 overflow-hidden flex flex-col sm:flex-row aspect-square sm:aspect-video before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/5 before:to-transparent before:pointer-events-none text-left">

<div className="hidden sm:flex w-56 flex-col border-r border-white/5 bg-white/[0.02] p-4">
<div className="flex items-center gap-2 px-2 py-3 text-white/90">
<div className="h-6 w-6 rounded border border-white/10 bg-white/5 flex items-center justify-center text-xs">M</div>
<span className="text-xs font-medium tracking-tight">Modernist Agency</span>
<iconify-icon className="ml-auto text-neutral-500" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="mt-4 flex flex-col gap-1">
<div className="text-[10px] font-medium uppercase tracking-widest text-neutral-500 px-2 mb-1">Library</div>
<div className="flex items-center gap-2 rounded-lg bg-white/10 px-2 py-1.5 text-xs font-medium text-white cursor-default">
<iconify-icon className="text-sm text-violet-400" icon="solar:folder-with-files-linear" strokeWidth="1.5"></iconify-icon> Active Projects
            </div>
<div className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-xs font-medium text-neutral-400 hover:text-neutral-200">
<iconify-icon className="text-sm" icon="solar:palette-linear" strokeWidth="1.5"></iconify-icon> Brand Kits
            </div>
<div className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-xs font-medium text-neutral-400 hover:text-neutral-200">
<iconify-icon className="text-sm" icon="solar:gallery-bold-duotone" strokeWidth="1.5"></iconify-icon> Reusable Assets
            </div>
</div>
</div>

<div className="flex-1 flex flex-col p-4 sm:p-6 bg-[radial-gradient(ellipse_at_top_right,rgba(139,92,246,0.05),transparent_50%)] relative z-10">

<div className="flex items-center justify-between border-b border-white/5 pb-4 mb-4">
<div>
<div className="flex items-center gap-2 text-xs text-neutral-500 mb-1">
<span>Projects</span> <iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon> <span>Q3 Campaign</span>
</div>
<h2 className="text-lg font-medium tracking-tight text-white">Product Launch Visuals</h2>
</div>
<div className="flex items-center gap-2">
<span className="hidden sm:inline-flex items-center gap-1.5 rounded bg-white/5 border border-white/10 px-2 py-1 text-[10px] text-neutral-400">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span> Brand Context Active
              </span>
<button className="h-8 rounded bg-violet-600 px-3 text-xs font-medium text-white hover:bg-violet-500 transition">Generate</button>
</div>
</div>

<div className="rounded-xl border border-white/10 bg-black/50 p-3 flex flex-col gap-3">
<div className="flex flex-wrap items-center gap-2">
<span className="inline-flex items-center gap-1 rounded bg-violet-500/10 border border-violet-500/20 px-2 py-0.5 text-[10px] text-violet-300">
<iconify-icon icon="solar:tag-linear"></iconify-icon> Kit: Minimalist Dark
              </span>
<span className="inline-flex items-center gap-1 rounded bg-blue-500/10 border border-blue-500/20 px-2 py-0.5 text-[10px] text-blue-300">
<iconify-icon icon="solar:aspect-ratio-linear"></iconify-icon> 16:9 Ad
              </span>
</div>
<div className="flex items-start gap-2">
<iconify-icon className="text-neutral-500 mt-0.5" icon="solar:pen-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-sm text-neutral-300">Sleek, atmospheric product shot of our new smart device on a dark marble pedestal, subtle neon violet underglow, professional studio lighting, photorealistic.</p>
</div>
</div>

<div className="mt-4 grid grid-cols-2 lg:grid-cols-3 gap-3 flex-1 overflow-hidden">

<div className="group relative rounded-lg border border-white/10 bg-white/5 overflow-hidden flex flex-col">
<div className="flex-1 bg-neutral-900 flex items-center justify-center relative">
<div className="absolute inset-0 bg-gradient-to-tr from-violet-900/40 to-black/80"></div>
<iconify-icon className="text-3xl text-neutral-700" icon="solar:image-outline"></iconify-icon>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-2">
<button className="h-7 w-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center backdrop-blur"><iconify-icon className="text-xs" icon="solar:magic-stick-3-linear"></iconify-icon></button>
<button className="h-7 w-7 rounded-full bg-violet-500 hover:bg-violet-400 flex items-center justify-center"><iconify-icon className="text-xs text-white" icon="solar:bookmark-linear"></iconify-icon></button>
</div>
</div>
</div>

<div className="group relative rounded-lg border border-white/10 bg-white/5 overflow-hidden flex flex-col hidden sm:flex">
<div className="flex-1 bg-neutral-900 flex items-center justify-center relative">
<div className="absolute inset-0 bg-gradient-to-bl from-blue-900/30 to-black/80"></div>
<iconify-icon className="text-3xl text-neutral-700" icon="solar:image-outline"></iconify-icon>
</div>
</div>

<div className="rounded-lg border border-white/5 border-dashed bg-white/[0.02] flex items-center justify-center hidden lg:flex">
<span className="text-xs text-neutral-600 font-medium">+ Generating variants...</span>
</div>
</div>
</div>
</div>

<div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-20 bg-black blur-2xl -z-10"></div>
</div>
</section>

<section className="border-y border-white/5 bg-white/[0.01] py-4 overflow-hidden relative" style={{animation: 'fadeSlideIn 1s ease-out 0.8s both'}}>
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-wrap md:flex-nowrap items-center justify-center md:justify-between gap-x-8 gap-y-4 text-xs sm:text-sm font-medium text-neutral-400 opacity-80">
<span className="flex items-center gap-2"><iconify-icon className="text-violet-400" icon="solar:verified-check-circle-linear"></iconify-icon> Brand Kits</span>
<span className="hidden md:block h-1 w-1 rounded-full bg-neutral-700"></span>
<span className="flex items-center gap-2"><iconify-icon className="text-violet-400" icon="solar:verified-check-circle-linear"></iconify-icon> Project Workflows</span>
<span className="hidden md:block h-1 w-1 rounded-full bg-neutral-700"></span>
<span className="flex items-center gap-2"><iconify-icon className="text-violet-400" icon="solar:verified-check-circle-linear"></iconify-icon> Guided AI Generation</span>
<span className="hidden md:block h-1 w-1 rounded-full bg-neutral-700"></span>
<span className="flex items-center gap-2"><iconify-icon className="text-violet-400" icon="solar:verified-check-circle-linear"></iconify-icon> Faster Refinement</span>
<span className="hidden md:block h-1 w-1 rounded-full bg-neutral-700"></span>
<span className="flex items-center gap-2"><iconify-icon className="text-violet-400" icon="solar:verified-check-circle-linear"></iconify-icon> Reusable Assets</span>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 pt-24 pb-16 md:pt-32 md:pb-24 animate-on-scroll">
<div className="text-center max-w-2xl mx-auto">
<span className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/50 px-3 py-1 text-xs font-medium text-neutral-400">
        Why this matters
      </span>
<h2 className="mt-6 text-3xl md:text-5xl font-medium tracking-tight text-white leading-tight">
        Most AI image tools create more work than they remove.
      </h2>
<p className="mt-4 text-base text-neutral-400 leading-relaxed">
        You can generate endless images. That does not mean you get assets you can actually use. Prompts drift. Styles change. Files get scattered. Teams waste hours recreating the same visual direction over and over.
      </p>
</div>
<div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="rounded-2xl border-gradient bg-neutral-900/40 p-6 sm:p-8 backdrop-blur-sm">
<div className="h-12 w-12 rounded-xl bg-neutral-800/50 border border-white/5 flex items-center justify-center mb-6">
<iconify-icon className="text-2xl text-red-400" icon="solar:gamepad-broken-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white tracking-tight">Prompt roulette</h3>
<p className="mt-2 text-sm text-neutral-400 leading-relaxed">Too much time disappears into rewrites, rerolls, and almost-right outputs.</p>
</div>

<div className="rounded-2xl border-gradient bg-neutral-900/40 p-6 sm:p-8 backdrop-blur-sm">
<div className="h-12 w-12 rounded-xl bg-neutral-800/50 border border-white/5 flex items-center justify-center mb-6">
<iconify-icon className="text-2xl text-orange-400" icon="solar:ghost-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white tracking-tight">No brand memory</h3>
<p className="mt-2 text-sm text-neutral-400 leading-relaxed">Most tools forget your visual rules the moment you move to the next idea.</p>
</div>

<div className="rounded-2xl border-gradient bg-neutral-900/40 p-6 sm:p-8 backdrop-blur-sm">
<div className="h-12 w-12 rounded-xl bg-neutral-800/50 border border-white/5 flex items-center justify-center mb-6">
<iconify-icon className="text-2xl text-neutral-400" icon="solar:link-broken-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white tracking-tight">Disconnected workflow</h3>
<p className="mt-2 text-sm text-neutral-400 leading-relaxed">Generate in one place. Edit in another. Save somewhere else. Then repeat the whole mess next week.</p>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-gradient-to-b from-neutral-900/20 to-black relative py-20 overflow-hidden animate-on-scroll">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-violet-500/50 to-transparent"></div>
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.1),transparent_50%)]"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<span className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-300">
        The better way
      </span>
<h2 className="mt-6 text-3xl md:text-5xl font-medium tracking-tight text-white leading-tight">
        LoveArt.ai gives your creative workflow a memory.
      </h2>
<p className="mt-6 text-base md:text-lg text-neutral-300 leading-relaxed max-w-2xl mx-auto">
        Set your brand direction once. Start projects with real context. Generate better options, refine the strongest ones, and keep the assets worth reusing. The result is a faster, cleaner path from rough idea to on-brand business visual.
      </p>
<p className="mt-4 text-sm font-medium text-violet-400 tracking-wide uppercase">
        Less starting from scratch. More visuals you can actually publish.
      </p>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 pt-24 pb-16 animate-on-scroll" id="workflow">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white leading-tight">
        A simpler path from brief to usable asset.
      </h2>
<p className="mt-4 text-sm text-neutral-400 uppercase tracking-widest font-medium">How it works</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">

<div className="flex flex-col gap-6 sm:gap-8">

<div className="relative rounded-2xl border-gradient bg-neutral-900/40 p-6 sm:p-8 hover:bg-neutral-900/60 transition-colors flex flex-col sm:flex-row gap-6 items-start">
<div className="shrink-0 flex items-center justify-center h-10 w-10 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 font-medium text-sm">01</div>
<div>
<h3 className="text-xl font-medium text-white tracking-tight">Create your Brand Kit</h3>
<p className="mt-2 text-sm text-neutral-400 leading-relaxed">Save your visual direction, references, and brand context once so you stop repeating yourself every session.</p>
</div>
</div>

<div className="relative rounded-2xl border-gradient bg-neutral-900/40 p-6 sm:p-8 hover:bg-neutral-900/60 transition-colors flex flex-col sm:flex-row gap-6 items-start">
<div className="shrink-0 flex items-center justify-center h-10 w-10 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 font-medium text-sm">02</div>
<div>
<h3 className="text-xl font-medium text-white tracking-tight">Start a Project</h3>
<p className="mt-2 text-sm text-neutral-400 leading-relaxed">Tell LoveArt.ai what you need to create, where it will be used, and what the asset needs to achieve.</p>
</div>
</div>
</div>

<div className="flex flex-col gap-6 sm:gap-8">

<div className="relative rounded-2xl border-gradient bg-neutral-900/40 p-6 sm:p-8 hover:bg-neutral-900/60 transition-colors flex flex-col sm:flex-row gap-6 items-start">
<div className="shrink-0 flex items-center justify-center h-10 w-10 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 font-medium text-sm">03</div>
<div>
<h3 className="text-xl font-medium text-white tracking-tight">Generate and refine</h3>
<p className="mt-2 text-sm text-neutral-400 leading-relaxed">Create stronger concepts, iterate faster, and improve good outputs without restarting from zero.</p>
</div>
</div>

<div className="relative rounded-2xl border-gradient bg-neutral-900/40 p-6 sm:p-8 hover:bg-neutral-900/60 transition-colors flex flex-col sm:flex-row gap-6 items-start">
<div className="shrink-0 flex items-center justify-center h-10 w-10 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 font-medium text-sm">04</div>
<div>
<h3 className="text-xl font-medium text-white tracking-tight">Save and reuse what works</h3>
<p className="mt-2 text-sm text-neutral-400 leading-relaxed">Keep approved assets organized so your best creative direction becomes easier to repeat and scale.</p>
</div>
</div>
</div>
</div>
</section>
<div className="mx-auto max-w-7xl px-6"><div className="h-px w-full bg-white/5"></div></div>

<section className="max-w-7xl mx-auto px-6 pt-24 pb-16 animate-on-scroll" id="product">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/50 px-3 py-1 text-xs font-medium text-neutral-400">
        Built for real brand work
      </span>
<h2 className="mt-6 text-3xl md:text-5xl font-medium tracking-tight text-white leading-tight">
        A workflow system, not another random generator.
      </h2>
</div>

<div className="grid grid-cols-1 md:grid-cols-6 gap-4 sm:gap-6">

<div className="md:col-span-4 rounded-2xl border-gradient bg-neutral-900/40 p-8 flex flex-col justify-end min-h-[300px] relative overflow-hidden group">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(139,92,246,0.15),transparent_60%)] transition-opacity group-hover:opacity-100 opacity-50"></div>
<div className="relative z-10">
<iconify-icon className="text-3xl text-violet-400 mb-4" icon="solar:palette-linear"></iconify-icon>
<h3 className="text-2xl font-medium text-white tracking-tight">Brand Kits</h3>
<p className="mt-2 text-base text-neutral-400 max-w-md">Give your visuals a foundation with reusable brand context, style direction, references, and creative guardrails.</p>
</div>
</div>

<div className="md:col-span-2 rounded-2xl border-gradient bg-neutral-900/40 p-8 flex flex-col justify-end min-h-[300px] relative overflow-hidden">
<div className="relative z-10">
<iconify-icon className="text-3xl text-blue-400 mb-4" icon="solar:folder-with-files-linear"></iconify-icon>
<h3 className="text-xl font-medium text-white tracking-tight">Projects</h3>
<p className="mt-2 text-sm text-neutral-400">Keep campaigns, concepts, and asset goals organized instead of buried inside one-off prompts.</p>
</div>
</div>

<div className="md:col-span-2 rounded-2xl border-gradient bg-neutral-900/40 p-8 flex flex-col justify-end min-h-[250px] relative overflow-hidden">
<div className="relative z-10">
<iconify-icon className="text-3xl text-emerald-400 mb-4" icon="solar:magic-stick-3-linear"></iconify-icon>
<h3 className="text-xl font-medium text-white tracking-tight">Guided Studio</h3>
<p className="mt-2 text-sm text-neutral-400">Move from idea to output with a cleaner workflow built for business visuals, not novelty generations.</p>
</div>
</div>

<div className="md:col-span-2 rounded-2xl border-gradient bg-neutral-900/40 p-8 flex flex-col justify-end min-h-[250px] relative overflow-hidden">
<div className="relative z-10">
<iconify-icon className="text-3xl text-amber-400 mb-4" icon="solar:pen-new-square-linear"></iconify-icon>
<h3 className="text-xl font-medium text-white tracking-tight">Smarter Refinement</h3>
<p className="mt-2 text-sm text-neutral-400">Improve, adjust, and evolve strong outputs without throwing everything away and starting over.</p>
</div>
</div>

<div className="md:col-span-2 rounded-2xl border-gradient bg-neutral-900/40 p-8 flex flex-col justify-end min-h-[250px] relative overflow-hidden">
<div className="relative z-10">
<iconify-icon className="text-3xl text-pink-400 mb-4" icon="solar:gallery-bold-duotone"></iconify-icon>
<h3 className="text-xl font-medium text-white tracking-tight">Reusable Asset Library</h3>
<p className="mt-2 text-sm text-neutral-400">Save the visuals worth keeping and turn winning creative directions into repeatable assets.</p>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 pt-24 pb-24 animate-on-scroll" id="use-cases">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/50 px-3 py-1 text-xs font-medium text-neutral-400">
        What you can create
      </span>
<h2 className="mt-6 text-3xl md:text-5xl font-medium tracking-tight text-white leading-tight">
        The kinds of visuals teams actually need.
      </h2>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">

<div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 hover:bg-white/[0.04] transition-colors">
<h3 className="text-base font-medium text-white flex items-center gap-2">
<iconify-icon className="text-violet-400" icon="solar:ad-linear"></iconify-icon> Ad creatives
        </h3>
<p className="mt-2 text-sm text-neutral-400 leading-relaxed">Build stronger visual directions for paid campaigns without burning hours on prompt roulette.</p>
</div>

<div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 hover:bg-white/[0.04] transition-colors">
<h3 className="text-base font-medium text-white flex items-center gap-2">
<iconify-icon className="text-pink-400" icon="solar:heart-linear"></iconify-icon> Social content
        </h3>
<p className="mt-2 text-sm text-neutral-400 leading-relaxed">Create branded visuals for ongoing content without reinventing your look every week.</p>
</div>

<div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 hover:bg-white/[0.04] transition-colors">
<h3 className="text-base font-medium text-white flex items-center gap-2">
<iconify-icon className="text-blue-400" icon="solar:monitor-smartphone-linear"></iconify-icon> Landing page visuals
        </h3>
<p className="mt-2 text-sm text-neutral-400 leading-relaxed">Generate cleaner concepts for hero sections, promos, launches, and offers.</p>
</div>

<div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 hover:bg-white/[0.04] transition-colors">
<h3 className="text-base font-medium text-white flex items-center gap-2">
<iconify-icon className="text-amber-400" icon="solar:box-linear"></iconify-icon> Product and promo art
        </h3>
<p className="mt-2 text-sm text-neutral-400 leading-relaxed">Create visuals for launches, sales pushes, seasonal campaigns, and branded announcements.</p>
</div>

<div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 hover:bg-white/[0.04] transition-colors">
<h3 className="text-base font-medium text-white flex items-center gap-2">
<iconify-icon className="text-emerald-400" icon="solar:document-text-linear"></iconify-icon> Content graphics
        </h3>
<p className="mt-2 text-sm text-neutral-400 leading-relaxed">Support articles, newsletters, and editorial content with visuals that fit your brand.</p>
</div>

<div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 hover:bg-white/[0.04] transition-colors">
<h3 className="text-base font-medium text-white flex items-center gap-2">
<iconify-icon className="text-neutral-300" icon="solar:compass-linear"></iconify-icon> Brand exploration
        </h3>
<p className="mt-2 text-sm text-neutral-400 leading-relaxed">Test new visual directions quickly without losing structure or consistency.</p>
</div>
</div>
</section>

<section className="max-w-4xl mx-auto px-6 pt-16 pb-24 animate-on-scroll" id="waitlist">
<div className="relative rounded-[2.5rem] border-gradient bg-neutral-900/60 p-8 sm:p-12 md:p-16 overflow-hidden shadow-2xl bg-[radial-gradient(1000px_600px_at_50%_0%,rgba(139,92,246,0.15),transparent)]">
<div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent"></div>
<div className="text-center mb-10">
<span className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-300">
          Founding Access
        </span>
<h2 className="mt-6 text-3xl md:text-5xl font-medium tracking-tight text-white leading-tight">
          Get early access before the public launch.
        </h2>
<p className="mt-4 text-sm sm:text-base text-neutral-400 max-w-xl mx-auto">
          LoveArt.ai is launching soon. Join the waitlist to get launch updates, early access invitations, and a chance to influence the first release.
        </p>
</div>
<form className="flex flex-col gap-6 max-w-2xl mx-auto">

<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-neutral-300 ml-1">Full Name</label>
<input className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-sm text-white placeholder-neutral-600 focus:border-violet-500/50 focus:outline-none focus:ring-1 focus:ring-violet-500/50 transition-all" placeholder="Jane Doe" type="text"/>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-neutral-300 ml-1">Work Email</label>
<input className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-sm text-white placeholder-neutral-600 focus:border-violet-500/50 focus:outline-none focus:ring-1 focus:ring-violet-500/50 transition-all" placeholder="jane@company.com" type="email"/>
</div>
</div>

<div className="flex flex-col gap-2">
<label className="text-xs font-medium text-neutral-300 ml-1">What best describes you?</label>
<div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
<label className="cursor-pointer group">
<input className="peer sr-only" name="role" type="radio" value="founder"/>
<div className="rounded-lg border border-white/10 bg-black/30 px-3 py-2.5 text-xs text-neutral-400 peer-checked:border-violet-500/50 peer-checked:bg-violet-500/10 peer-checked:text-white group-hover:bg-white/5 transition-all text-center">Founder</div>
</label>
<label className="cursor-pointer group">
<input className="peer sr-only" name="role" type="radio" value="marketer"/>
<div className="rounded-lg border border-white/10 bg-black/30 px-3 py-2.5 text-xs text-neutral-400 peer-checked:border-violet-500/50 peer-checked:bg-violet-500/10 peer-checked:text-white group-hover:bg-white/5 transition-all text-center">Marketer</div>
</label>
<label className="cursor-pointer group">
<input className="peer sr-only" name="role" type="radio" value="creator"/>
<div className="rounded-lg border border-white/10 bg-black/30 px-3 py-2.5 text-xs text-neutral-400 peer-checked:border-violet-500/50 peer-checked:bg-violet-500/10 peer-checked:text-white group-hover:bg-white/5 transition-all text-center">Creator</div>
</label>
<label className="cursor-pointer group">
<input className="peer sr-only" name="role" type="radio" value="agency"/>
<div className="rounded-lg border border-white/10 bg-black/30 px-3 py-2.5 text-xs text-neutral-400 peer-checked:border-violet-500/50 peer-checked:bg-violet-500/10 peer-checked:text-white group-hover:bg-white/5 transition-all text-center">Agency</div>
</label>
<label className="cursor-pointer group">
<input className="peer sr-only" name="role" type="radio" value="ecommerce"/>
<div className="rounded-lg border border-white/10 bg-black/30 px-3 py-2.5 text-xs text-neutral-400 peer-checked:border-violet-500/50 peer-checked:bg-violet-500/10 peer-checked:text-white group-hover:bg-white/5 transition-all text-center">Ecommerce Brand</div>
</label>
<label className="cursor-pointer group">
<input className="peer sr-only" name="role" type="radio" value="other"/>
<div className="rounded-lg border border-white/10 bg-black/30 px-3 py-2.5 text-xs text-neutral-400 peer-checked:border-violet-500/50 peer-checked:bg-violet-500/10 peer-checked:text-white group-hover:bg-white/5 transition-all text-center">Other</div>
</label>
</div>
</div>

<div className="flex flex-col gap-2">
<label className="text-xs font-medium text-neutral-300 ml-1">What type of visual assets do you need most often?</label>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
<label className="cursor-pointer group">
<input className="peer sr-only" name="asset" type="radio" value="ads"/>
<div className="rounded-lg border border-white/10 bg-black/30 px-3 py-2.5 text-xs text-neutral-400 peer-checked:border-violet-500/50 peer-checked:bg-violet-500/10 peer-checked:text-white group-hover:bg-white/5 transition-all">Ad creatives</div>
</label>
<label className="cursor-pointer group">
<input className="peer sr-only" name="asset" type="radio" value="social"/>
<div className="rounded-lg border border-white/10 bg-black/30 px-3 py-2.5 text-xs text-neutral-400 peer-checked:border-violet-500/50 peer-checked:bg-violet-500/10 peer-checked:text-white group-hover:bg-white/5 transition-all">Social posts</div>
</label>
<label className="cursor-pointer group">
<input className="peer sr-only" name="asset" type="radio" value="landing"/>
<div className="rounded-lg border border-white/10 bg-black/30 px-3 py-2.5 text-xs text-neutral-400 peer-checked:border-violet-500/50 peer-checked:bg-violet-500/10 peer-checked:text-white group-hover:bg-white/5 transition-all">Landing page visuals</div>
</label>
<label className="cursor-pointer group">
<input className="peer sr-only" name="asset" type="radio" value="promo"/>
<div className="rounded-lg border border-white/10 bg-black/30 px-3 py-2.5 text-xs text-neutral-400 peer-checked:border-violet-500/50 peer-checked:bg-violet-500/10 peer-checked:text-white group-hover:bg-white/5 transition-all">Product promo visuals</div>
</label>
<label className="cursor-pointer group">
<input className="peer sr-only" name="asset" type="radio" value="blog"/>
<div className="rounded-lg border border-white/10 bg-black/30 px-3 py-2.5 text-xs text-neutral-400 peer-checked:border-violet-500/50 peer-checked:bg-violet-500/10 peer-checked:text-white group-hover:bg-white/5 transition-all">Blog or content graphics</div>
</label>
<label className="cursor-pointer group">
<input className="peer sr-only" name="asset" type="radio" value="concepts"/>
<div className="rounded-lg border border-white/10 bg-black/30 px-3 py-2.5 text-xs text-neutral-400 peer-checked:border-violet-500/50 peer-checked:bg-violet-500/10 peer-checked:text-white group-hover:bg-white/5 transition-all">Brand concepts</div>
</label>
</div>
</div>

<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-neutral-300 ml-1">What’s your top pain point or feature need right now?</label>
<textarea className="custom-scroll w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-sm text-white placeholder-neutral-600 focus:border-violet-500/50 focus:outline-none focus:ring-1 focus:ring-violet-500/50 transition-all resize-none" placeholder="Tell us what slows you down, what is missing in current tools, or what would make this an instant yes for you." rows="3"></textarea>
</div>

<div className="mt-4">
<button className="group w-full inline-flex h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-medium text-white transition-all duration-500 hover:-translate-y-0.5 outline outline-1 outline-white/10 hover:outline-white/20 relative border-gradient before:rounded-full" type="button">
<span aria-hidden="true" className="absolute -inset-px h-full w-full overflow-hidden rounded-full">
<span className="absolute inset-0 rounded-full" style={{background: 'linear-gradient(140deg, rgba(20,20,22,1) 0%, rgba(40,30,50,1) 35%, rgba(60,40,80,1) 70%, rgba(20,15,30,1) 100%)'}}></span>
<span className="absolute top-0 right-1 h-[28px] w-20 bg-violet-400 opacity-20 mix-blend-lighten blur-[25px] rounded-full"></span>
<span className="absolute inset-0 ring-1 ring-inset ring-white/15 rounded-full"></span>
</span>
<span className="relative z-10 flex items-center gap-2">
              Join the Waitlist
            </span>
</button>
<p className="mt-4 text-center text-xs text-neutral-500 max-w-sm mx-auto">
            We’re using waitlist feedback to shape launch priorities. You’ll get product updates and early access details when invitations open.
          </p>
</div>
</form>
</div>
</section>
<div className="mx-auto max-w-7xl px-6"><div className="h-px w-full bg-white/5"></div></div>

<section className="max-w-4xl mx-auto px-6 pt-24 pb-24 animate-on-scroll" id="faq">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white">
        Questions serious users usually ask first.
      </h2>
</div>
<div className="flex flex-col border-t border-white/10">

<details className="group py-5 border-b border-white/10 cursor-pointer">
<summary className="flex items-center justify-between font-medium text-base text-neutral-200 list-none [&amp;::-webkit-details-marker]:hidden">
          Who is LoveArt.ai for?
          <iconify-icon className="text-neutral-500 transition-transform duration-300 group-open:-rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<p className="mt-4 text-sm text-neutral-400 leading-relaxed pr-8">
          LoveArt.ai is being built for founders, marketers, creators, agencies, and lean teams that need branded visual assets faster and with less inconsistency.
        </p>
</details>

<details className="group py-5 border-b border-white/10 cursor-pointer">
<summary className="flex items-center justify-between font-medium text-base text-neutral-200 list-none [&amp;::-webkit-details-marker]:hidden">
          Is this just another AI image generator?
          <iconify-icon className="text-neutral-500 transition-transform duration-300 group-open:-rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<p className="mt-4 text-sm text-neutral-400 leading-relaxed pr-8">
          No. The goal is not endless random outputs. The goal is a more structured workflow for creating, refining, saving, and reusing on-brand visuals for real business needs.
        </p>
</details>

<details className="group py-5 border-b border-white/10 cursor-pointer">
<summary className="flex items-center justify-between font-medium text-base text-neutral-200 list-none [&amp;::-webkit-details-marker]:hidden">
          What kinds of visuals will LoveArt.ai support?
          <iconify-icon className="text-neutral-500 transition-transform duration-300 group-open:-rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<p className="mt-4 text-sm text-neutral-400 leading-relaxed pr-8">
          The platform is being designed around the visuals teams use most often: ad creatives, social assets, landing page visuals, product promo art, content graphics, and brand concept directions.
        </p>
</details>

<details className="group py-5 border-b border-white/10 cursor-pointer">
<summary className="flex items-center justify-between font-medium text-base text-neutral-200 list-none [&amp;::-webkit-details-marker]:hidden">
          Do I need design experience?
          <iconify-icon className="text-neutral-500 transition-transform duration-300 group-open:-rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<p className="mt-4 text-sm text-neutral-400 leading-relaxed pr-8">
          No. LoveArt.ai is being built to help non-designers and design-conscious teams move faster without getting buried in endless prompt experimentation.
        </p>
</details>

<details className="group py-5 border-b border-white/10 cursor-pointer">
<summary className="flex items-center justify-between font-medium text-base text-neutral-200 list-none [&amp;::-webkit-details-marker]:hidden">
          When will early access open?
          <iconify-icon className="text-neutral-500 transition-transform duration-300 group-open:-rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<p className="mt-4 text-sm text-neutral-400 leading-relaxed pr-8">
          Soon. Waitlist members will hear first when early access invitations begin rolling out.
        </p>
</details>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 pb-24 animate-on-scroll">
<div className="relative rounded-3xl border-gradient bg-neutral-900/60 p-10 md:p-16 overflow-hidden text-center bg-[radial-gradient(800px_400px_at_50%_100%,rgba(139,92,246,0.15),transparent)]">
<div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none"></div>
<div className="relative z-10 max-w-2xl mx-auto">
<h2 className="text-3xl md:text-5xl tracking-tight font-medium text-white">
          Stop starting from scratch every time you need a visual.
        </h2>
<p className="mt-6 text-base text-neutral-400 leading-relaxed">
          Join the LoveArt.ai waitlist and get early access to a smarter, more structured way to create on-brand business visuals.
        </p>
<div className="mt-10 flex flex-col items-center justify-center">
<a className="group inline-flex h-12 items-center justify-center gap-2 rounded-full px-8 text-sm font-medium text-white transition-all duration-500 hover:-translate-y-0.5 outline outline-1 outline-white/10 hover:outline-white/20 relative border-gradient before:rounded-full shadow-lg shadow-black/50" href="#waitlist">
<span aria-hidden="true" className="absolute -inset-px h-full w-full overflow-hidden rounded-full">
<span className="absolute inset-0 rounded-full" style={{background: 'linear-gradient(140deg, rgba(20,20,22,1) 0%, rgba(40,30,50,1) 35%, rgba(60,40,80,1) 70%, rgba(20,15,30,1) 100%)'}}></span>
<span className="absolute top-0 right-1 h-[28px] w-20 bg-violet-400 opacity-20 mix-blend-lighten blur-[25px] rounded-full"></span>
<span className="absolute inset-0 ring-1 ring-inset ring-white/15 rounded-full"></span>
</span>
<span className="relative z-10 flex items-center gap-2">
              Request Founding Access
            </span>
</a>
<p className="mt-6 text-xs text-neutral-500 font-medium tracking-wide">
            Launching soon. Early access spots will roll out in stages.
          </p>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/5 bg-black">
<div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
<div className="flex flex-col md:flex-row justify-between items-start gap-10 pb-12 border-b border-white/5">

<div className="max-w-xs">
<a className="inline-flex items-center gap-2 text-white" href="#">
<iconify-icon className="text-xl text-violet-400" icon="solar:infinity-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-base font-medium tracking-tight">LoveArt.ai</span>
</a>
<p className="mt-4 text-sm text-neutral-500 leading-relaxed">
          LoveArt.ai — Business-first AI creative workflows for on-brand visuals.
        </p>
</div>

<div className="flex flex-wrap gap-x-12 gap-y-8">
<div className="flex flex-col gap-3">
<a className="text-sm text-neutral-400 hover:text-white transition-colors" href="#product">Product</a>
<a className="text-sm text-neutral-400 hover:text-white transition-colors" href="#workflow">Workflow</a>
<a className="text-sm text-neutral-400 hover:text-white transition-colors" href="#use-cases">Use Cases</a>
</div>
<div className="flex flex-col gap-3">
<a className="text-sm text-neutral-400 hover:text-white transition-colors" href="#faq">FAQ</a>
<a className="text-sm text-neutral-400 hover:text-white transition-colors" href="#waitlist">Waitlist</a>
</div>
<div className="flex flex-col gap-3">
<a className="text-sm text-neutral-400 hover:text-white transition-colors" href="#">Privacy</a>
<a className="text-sm text-neutral-400 hover:text-white transition-colors" href="#">Terms</a>
</div>
</div>
</div>

<div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
<p className="text-xs text-neutral-600">
        © 2024 LoveArt.ai. All rights reserved.
      </p>
<div className="flex items-center gap-4 text-neutral-600">
<a className="hover:text-neutral-400 transition" href="#"><iconify-icon className="text-lg" icon="solar:twitter-linear"></iconify-icon></a>
<a className="hover:text-neutral-400 transition" href="#"><iconify-icon className="text-lg" icon="solar:linkedin-linear"></iconify-icon></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
