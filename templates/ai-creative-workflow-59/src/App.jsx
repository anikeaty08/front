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



document.addEventListener("DOMContentLoaded", () => {
const observer = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("animate");
observer.unobserve(entry.target);
}
});
}, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });
document.querySelectorAll(".animate-on-scroll").forEach((el) => {
observer.observe(el);
});
});



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
      

<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
<div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[80vw] h-[50vh] bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.03),transparent_70%)] blur-3xl"></div>
</div>
<div className="gradient-blur">
<div></div><div></div><div></div><div></div><div></div><div></div>
</div>

<header className="sticky top-0 z-50 border-b border-white/5 bg-slate-950/50 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 text-white font-medium tracking-tight text-lg" href="#">
<iconify-icon className="text-xl opacity-80" icon="solar:gallery-bold-duotone"></iconify-icon>
                LoveArt.ai
            </a>
<nav className="hidden md:flex items-center gap-8 text-sm font-normal text-slate-400">
<a className="transition-colors hover:text-white" href="#product">Product</a>
<a className="transition-colors hover:text-white" href="#workflow">Workflow</a>
<a className="transition-colors hover:text-white" href="#use-cases">Use Cases</a>
<a className="transition-colors hover:text-white" href="#faq">FAQ</a>
<a className="transition-colors hover:text-white" href="#waitlist">Waitlist</a>
</nav>
<div className="flex items-center">
<a className="inline-flex items-center justify-center text-sm font-medium transition-all duration-200 rounded-full px-4 py-2 bg-white text-slate-950 hover:bg-slate-200 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.1)]" href="#waitlist">
                    Request Founding Access
                </a>
</div>
</div>
</header>
<main className="flex-1 z-10 relative">

<section className="pt-24 pb-16 md:pt-32 md:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center animate-on-scroll" style={{animation: 'fadeSlideIn 0.8s ease-out 0.1s both'}}>
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-3 py-1 text-xs font-medium text-slate-400 mb-8 backdrop-blur-sm">
<span className="flex h-1.5 w-1.5 rounded-full bg-white opacity-70 animate-pulse"></span>
                Launching Soon
            </div>
<h1 className="text-4xl sm:text-5xl md:text-7xl tracking-tighter font-medium text-white max-w-4xl mx-auto leading-[1.1]">
                Create on-brand visuals without the usual <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-slate-600">AI chaos.</span>
</h1>
<p className="mt-6 text-base md:text-xl font-normal text-slate-400 max-w-3xl mx-auto leading-relaxed">
                LoveArt.ai is the business-first AI creative workflow platform for founders, marketers, creators, agencies, and lean teams who need branded visuals fast. Build your brand context once, start projects with purpose, generate stronger concepts, refine faster, and reuse assets that actually fit your business.
            </p>
<div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto inline-flex items-center justify-center text-sm font-medium transition-all duration-200 rounded-full px-6 py-3 bg-white text-slate-950 hover:bg-slate-200 shadow-[0_0_30px_rgba(255,255,255,0.15)]" href="#waitlist">
                    Request Founding Access
                </a>
<a className="w-full sm:w-auto inline-flex items-center justify-center text-sm font-medium transition-all duration-200 rounded-full px-6 py-3 border border-white/10 bg-white/5 text-white hover:bg-white/10 backdrop-blur-sm" href="#workflow">
                    Explore the Workflow
                </a>
</div>
<p className="mt-4 text-xs text-slate-500 font-normal">
                Early access is opening soon. Join the waitlist and help shape what ships first.
            </p>

<div className="mt-16 md:mt-24 relative mx-auto w-full max-w-6xl">
<div className="absolute -inset-1 rounded-2xl bg-gradient-to-b from-white/10 to-transparent opacity-30 blur-xl"></div>
<div className="relative rounded-2xl border-gradient bg-slate-950/80 backdrop-blur-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row h-[60vh] min-h-[500px] border border-white/10">

<div className="hidden md:flex w-64 border-r border-white/5 bg-white/[0.01] flex-col p-4">
<div className="flex items-center gap-2 px-2 py-1 mb-6">
<div className="w-6 h-6 rounded bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center text-xs text-white">L</div>
<span className="text-sm font-medium text-white">Acme Studio</span>
<iconify-icon className="ml-auto text-slate-500" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<div className="text-xs font-medium text-slate-500 px-2 mb-2 uppercase tracking-wider">Brand Kits</div>
<div className="space-y-1 mb-6">
<div className="flex items-center gap-2 px-2 py-1.5 rounded-md bg-white/5 text-sm text-slate-200">
<span className="w-2 h-2 rounded-full bg-white"></span>
                                Primary Brand
                            </div>
<div className="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-slate-400 hover:bg-white/5 transition-colors">
<span className="w-2 h-2 rounded-full bg-slate-600"></span>
                                Fall Campaign
                            </div>
</div>
<div className="text-xs font-medium text-slate-500 px-2 mb-2 uppercase tracking-wider">Projects</div>
<div className="space-y-1">
<div className="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-slate-400 hover:bg-white/5 transition-colors">
<iconify-icon icon="solar:folder-linear"></iconify-icon>
                                Q3 Ad Creatives
                            </div>
<div className="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-slate-400 hover:bg-white/5 transition-colors">
<iconify-icon icon="solar:folder-linear"></iconify-icon>
                                Website Hero Images
                            </div>
</div>
</div>

<div className="flex-1 flex flex-col bg-slate-950 relative">

<div className="h-14 border-b border-white/5 flex items-center justify-between px-4 sm:px-6">
<div className="flex items-center gap-3">
<span className="text-sm font-medium text-white">Q3 Ad Creatives</span>
<span className="text-slate-600 text-sm">/</span>
<span className="text-sm text-slate-400">Generate</span>
</div>
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
<iconify-icon className="text-slate-400 text-lg" icon="solar:settings-linear"></iconify-icon>
</div>
</div>
</div>

<div className="flex-1 p-4 sm:p-8 flex flex-col items-center justify-center relative overflow-hidden">

<div className="w-full max-w-2xl aspect-[16/9] sm:aspect-[2/1] rounded-xl border border-white/10 bg-slate-900 relative overflow-hidden group shadow-2xl">
<img alt="Premium generated visual placeholder" className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-700" src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>

<div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex justify-between items-end">
<div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-lg p-3 max-w-md">
<div className="flex gap-2 items-center mb-1">
<span className="px-1.5 py-0.5 rounded text-[10px] font-medium bg-white/20 text-white uppercase tracking-wider">Brand Applied</span>
<span className="text-xs text-slate-300 truncate">Primary Brand Context</span>
</div>
<p className="text-sm text-white font-medium line-clamp-1">Minimalist skincare product shot, harsh architectural shadows, editorial style...</p>
</div>
<div className="hidden sm:flex gap-2">
<div className="w-8 h-8 rounded-lg bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-white cursor-pointer hover:bg-white/10">
<iconify-icon icon="solar:refresh-linear"></iconify-icon>
</div>
<div className="w-8 h-8 rounded-lg bg-white text-black flex items-center justify-center cursor-pointer hover:bg-slate-200">
<iconify-icon icon="solar:check-read-linear"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="mt-8 w-full max-w-2xl bg-white/[0.03] border border-white/10 rounded-xl p-2 flex items-center gap-3 backdrop-blur-sm">
<div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center text-slate-400">
<iconify-icon icon="solar:magic-stick-3-linear"></iconify-icon>
</div>
<div className="flex-1 text-sm text-slate-500 font-normal">
                                    Describe the visual or select a saved concept...
                                </div>
<div className="px-3 py-1.5 rounded-lg bg-white/10 text-white text-xs font-medium cursor-pointer">
                                    Generate
                                </div>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="border-y border-white/5 bg-slate-950/50 backdrop-blur-sm py-6 overflow-hidden animate-on-scroll" style={{animation: 'fadeSlideIn 0.8s ease-out 0.2s both'}}>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm font-medium text-slate-400 tracking-tight">
<span className="flex items-center gap-2"><iconify-icon className="text-lg" icon="solar:palette-linear"></iconify-icon> Brand Kits</span>
<span className="hidden sm:block text-slate-700">•</span>
<span className="flex items-center gap-2"><iconify-icon className="text-lg" icon="solar:layers-linear"></iconify-icon> Project Workflows</span>
<span className="hidden sm:block text-slate-700">•</span>
<span className="flex items-center gap-2"><iconify-icon className="text-lg" icon="solar:routing-2-linear"></iconify-icon> Guided AI Generation</span>
<span className="hidden sm:block text-slate-700">•</span>
<span className="flex items-center gap-2"><iconify-icon className="text-lg" icon="solar:tuning-linear"></iconify-icon> Faster Refinement</span>
<span className="hidden sm:block text-slate-700">•</span>
<span className="flex items-center gap-2"><iconify-icon className="text-lg" icon="solar:library-linear"></iconify-icon> Reusable Assets</span>
</div>
</div>
</div>

<section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto animate-on-scroll" style={{animation: 'fadeSlideIn 0.8s ease-out 0.1s both'}}>
<div className="max-w-3xl">
<p className="text-xs uppercase tracking-widest font-medium text-slate-500 mb-3">Why this matters</p>
<h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-white mb-6">
                    Most AI image tools create more work than they remove.
                </h2>
<p className="text-base md:text-lg font-normal text-slate-400">
                    You can generate endless images. That does not mean you get assets you can actually use. Prompts drift. Styles change. Files get scattered. Teams waste hours recreating the same visual direction over and over.
                </p>
</div>
<div className="mt-16 grid gap-6 md:grid-cols-3">
<div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 hover:bg-white/[0.04] transition-colors">
<iconify-icon className="text-3xl text-slate-300 mb-5" icon="solar:dice-5-linear"></iconify-icon>
<h3 className="text-lg font-medium text-white mb-2">Prompt roulette</h3>
<p className="text-sm text-slate-400 font-normal leading-relaxed">
                        Too much time disappears into rewrites, rerolls, and almost-right outputs.
                    </p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 hover:bg-white/[0.04] transition-colors">
<iconify-icon className="text-3xl text-slate-300 mb-5" icon="solar:ghost-linear"></iconify-icon>
<h3 className="text-lg font-medium text-white mb-2">No brand memory</h3>
<p className="text-sm text-slate-400 font-normal leading-relaxed">
                        Most tools forget your visual rules the moment you move to the next idea.
                    </p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 hover:bg-white/[0.04] transition-colors">
<iconify-icon className="text-3xl text-slate-300 mb-5" icon="solar:link-broken-linear"></iconify-icon>
<h3 className="text-lg font-medium text-white mb-2">Disconnected workflow</h3>
<p className="text-sm text-slate-400 font-normal leading-relaxed">
                        Generate in one place. Edit in another. Save somewhere else. Then repeat the whole mess next week.
                    </p>
</div>
</div>
</section>

<section className="py-24 bg-white/[0.01] border-y border-white/5 relative overflow-hidden animate-on-scroll" style={{animation: 'fadeSlideIn 0.8s ease-out 0.1s both'}}>
<div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_50%)]"></div>
<div className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center relative z-10">
<p className="text-xs uppercase tracking-widest font-medium text-slate-500 mb-3">The better way</p>
<h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-white mb-6">
                    LoveArt.ai gives your creative workflow a memory.
                </h2>
<p className="text-base md:text-lg font-normal text-slate-400 mb-8">
                    Set your brand direction once. Start projects with real context. Generate better options, refine the strongest ones, and keep the assets worth reusing. The result is a faster, cleaner path from rough idea to on-brand business visual.
                </p>
<p className="text-sm font-medium text-white px-6 py-3 rounded-full border border-white/10 bg-white/5 inline-block backdrop-blur-sm">
                    Less starting from scratch. More visuals you can actually publish.
                </p>
</div>
</section>

<section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto animate-on-scroll" id="workflow" style={{animation: 'fadeSlideIn 0.8s ease-out 0.1s both'}}>
<div className="text-center mb-16 md:mb-24">
<p className="text-xs uppercase tracking-widest font-medium text-slate-500 mb-3">How it works</p>
<h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-white">
                    A simpler path from brief to usable asset.
                </h2>
</div>
<div className="relative max-w-4xl mx-auto">

<div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-white/20 via-white/5 to-transparent md:-translate-x-1/2 hidden sm:block"></div>
<div className="space-y-12 md:space-y-24">

<div className="relative flex flex-col md:flex-row items-start md:items-center group">
<div className="hidden sm:flex absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-slate-950 border border-white/20 items-center justify-center text-xs font-medium text-white md:-translate-x-1/2 z-10 group-hover:border-white/50 transition-colors">1</div>
<div className="md:w-1/2 md:pr-16 md:text-right pl-12 sm:pl-16 md:pl-0">
<h3 className="text-xl font-medium text-white mb-2">Create your Brand Kit</h3>
<p className="text-sm text-slate-400 font-normal leading-relaxed">Save your visual direction, references, and brand context once so you stop repeating yourself every session.</p>
</div>
<div className="md:w-1/2 hidden md:block pl-16">
<div className="rounded-xl border border-white/10 bg-white/[0.02] p-4 aspect-[4/3] flex items-center justify-center">
<iconify-icon className="text-5xl text-slate-700" icon="solar:palette-round-linear"></iconify-icon>
</div>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-start md:items-center group">
<div className="hidden sm:flex absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-slate-950 border border-white/20 items-center justify-center text-xs font-medium text-white md:-translate-x-1/2 z-10 group-hover:border-white/50 transition-colors">2</div>
<div className="md:w-1/2 hidden md:block pr-16">
<div className="rounded-xl border border-white/10 bg-white/[0.02] p-4 aspect-[4/3] flex items-center justify-center">
<iconify-icon className="text-5xl text-slate-700" icon="solar:folder-with-files-linear"></iconify-icon>
</div>
</div>
<div className="md:w-1/2 pl-12 sm:pl-16">
<h3 className="text-xl font-medium text-white mb-2">Start a Project</h3>
<p className="text-sm text-slate-400 font-normal leading-relaxed">Tell LoveArt.ai what you need to create, where it will be used, and what the asset needs to achieve.</p>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-start md:items-center group">
<div className="hidden sm:flex absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-slate-950 border border-white/20 items-center justify-center text-xs font-medium text-white md:-translate-x-1/2 z-10 group-hover:border-white/50 transition-colors">3</div>
<div className="md:w-1/2 md:pr-16 md:text-right pl-12 sm:pl-16 md:pl-0">
<h3 className="text-xl font-medium text-white mb-2">Generate and refine</h3>
<p className="text-sm text-slate-400 font-normal leading-relaxed">Create stronger concepts, iterate faster, and improve good outputs without restarting from zero.</p>
</div>
<div className="md:w-1/2 hidden md:block pl-16">
<div className="rounded-xl border border-white/10 bg-white/[0.02] p-4 aspect-[4/3] flex items-center justify-center">
<iconify-icon className="text-5xl text-slate-700" icon="solar:magic-stick-linear"></iconify-icon>
</div>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-start md:items-center group">
<div className="hidden sm:flex absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-slate-950 border border-white/20 items-center justify-center text-xs font-medium text-white md:-translate-x-1/2 z-10 group-hover:border-white/50 transition-colors">4</div>
<div className="md:w-1/2 hidden md:block pr-16">
<div className="rounded-xl border border-white/10 bg-white/[0.02] p-4 aspect-[4/3] flex items-center justify-center">
<iconify-icon className="text-5xl text-slate-700" icon="solar:gallery-favourite-linear"></iconify-icon>
</div>
</div>
<div className="md:w-1/2 pl-12 sm:pl-16">
<h3 className="text-xl font-medium text-white mb-2">Save and reuse what works</h3>
<p className="text-sm text-slate-400 font-normal leading-relaxed">Keep approved assets organized so your best creative direction becomes easier to repeat and scale.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto animate-on-scroll" id="product" style={{animation: 'fadeSlideIn 0.8s ease-out 0.1s both'}}>
<div className="mb-12">
<p className="text-xs uppercase tracking-widest font-medium text-slate-500 mb-3">Built for real brand work</p>
<h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-white max-w-2xl">
                    A workflow system, not another random generator.
                </h2>
</div>

<div className="grid grid-cols-1 md:grid-cols-6 gap-6">

<div className="md:col-span-4 border-gradient rounded-3xl p-1 bg-white/[0.02] overflow-hidden group">
<div className="h-full bg-slate-950 rounded-[22px] p-8 flex flex-col justify-between relative overflow-hidden">
<div className="absolute right-0 top-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
<iconify-icon className="text-[200px] -mt-10 -mr-10" icon="solar:palette-linear"></iconify-icon>
</div>
<div className="relative z-10 max-w-md">
<div className="w-10 h-10 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center mb-6">
<iconify-icon className="text-lg text-white" icon="solar:palette-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Brand Kits</h3>
<p className="text-sm text-slate-400 font-normal leading-relaxed">
                                Give your visuals a foundation with reusable brand context, style direction, references, and creative guardrails.
                            </p>
</div>
</div>
</div>

<div className="md:col-span-2 border-gradient rounded-3xl p-1 bg-white/[0.02] group">
<div className="h-full bg-slate-950 rounded-[22px] p-8 relative overflow-hidden">
<div className="w-10 h-10 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center mb-6">
<iconify-icon className="text-lg text-white" icon="solar:folder-with-files-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Projects</h3>
<p className="text-sm text-slate-400 font-normal leading-relaxed">
                            Keep campaigns, concepts, and asset goals organized instead of buried inside one-off prompts.
                        </p>
</div>
</div>

<div className="md:col-span-2 border-gradient rounded-3xl p-1 bg-white/[0.02] group">
<div className="h-full bg-slate-950 rounded-[22px] p-8 relative overflow-hidden">
<div className="w-10 h-10 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center mb-6">
<iconify-icon className="text-lg text-white" icon="solar:display-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Guided Studio</h3>
<p className="text-sm text-slate-400 font-normal leading-relaxed">
                            Move from idea to output with a cleaner workflow built for business visuals, not novelty generations.
                        </p>
</div>
</div>

<div className="md:col-span-4 border-gradient rounded-3xl p-1 bg-white/[0.02] group">
<div className="h-full bg-slate-950 rounded-[22px] p-8 relative overflow-hidden flex flex-col justify-end min-h-[250px]">
<div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.05),transparent_60%)] pointer-events-none"></div>
<div className="relative z-10 md:w-2/3">
<div className="w-10 h-10 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center mb-6">
<iconify-icon className="text-lg text-white" icon="solar:tuning-square-2-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Smarter Refinement</h3>
<p className="text-sm text-slate-400 font-normal leading-relaxed">
                                Improve, adjust, and evolve strong outputs without throwing everything away and starting over.
                            </p>
</div>
</div>
</div>

<div className="md:col-span-6 border-gradient rounded-3xl p-1 bg-white/[0.02] group">
<div className="h-full bg-slate-950 rounded-[22px] p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center gap-8">
<div className="md:w-1/2">
<div className="w-10 h-10 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center mb-6">
<iconify-icon className="text-lg text-white" icon="solar:gallery-favourite-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Reusable Asset Library</h3>
<p className="text-sm text-slate-400 font-normal leading-relaxed">
                                Save the visuals worth keeping and turn winning creative directions into repeatable assets. Present this as meaningful product pillars, not as a random tool directory.
                            </p>
</div>
<div className="md:w-1/2 w-full h-48 bg-white/[0.03] rounded-xl border border-white/10 flex items-center justify-center">
<span className="text-xs text-slate-600 font-medium tracking-widest uppercase">Asset Library Concept</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white/[0.01] border-y border-white/5 animate-on-scroll" id="use-cases" style={{animation: 'fadeSlideIn 0.8s ease-out 0.1s both'}}>
<div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
<div className="mb-16">
<p className="text-xs uppercase tracking-widest font-medium text-slate-500 mb-3">What you can create</p>
<h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-white max-w-2xl">
                        The kinds of visuals teams actually need.
                    </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
<div className="group">
<div className="mb-4 text-slate-300 group-hover:text-white transition-colors">
<iconify-icon className="text-2xl" icon="solar:ad-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium text-white mb-2">Ad creatives</h3>
<p className="text-sm text-slate-400 font-normal leading-relaxed">Build stronger visual directions for paid campaigns without burning hours on prompt roulette.</p>
</div>
<div className="group">
<div className="mb-4 text-slate-300 group-hover:text-white transition-colors">
<iconify-icon className="text-2xl" icon="solar:hashtag-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium text-white mb-2">Social content</h3>
<p className="text-sm text-slate-400 font-normal leading-relaxed">Create branded visuals for ongoing content without reinventing your look every week.</p>
</div>
<div className="group">
<div className="mb-4 text-slate-300 group-hover:text-white transition-colors">
<iconify-icon className="text-2xl" icon="solar:monitor-smartphone-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium text-white mb-2">Landing page visuals</h3>
<p className="text-sm text-slate-400 font-normal leading-relaxed">Generate cleaner concepts for hero sections, promos, launches, and offers.</p>
</div>
<div className="group">
<div className="mb-4 text-slate-300 group-hover:text-white transition-colors">
<iconify-icon className="text-2xl" icon="solar:bag-heart-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium text-white mb-2">Product and promo art</h3>
<p className="text-sm text-slate-400 font-normal leading-relaxed">Create visuals for launches, sales pushes, seasonal campaigns, and branded announcements.</p>
</div>
<div className="group">
<div className="mb-4 text-slate-300 group-hover:text-white transition-colors">
<iconify-icon className="text-2xl" icon="solar:document-text-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium text-white mb-2">Content graphics</h3>
<p className="text-sm text-slate-400 font-normal leading-relaxed">Support articles, newsletters, and editorial content with visuals that fit your brand.</p>
</div>
<div className="group">
<div className="mb-4 text-slate-300 group-hover:text-white transition-colors">
<iconify-icon className="text-2xl" icon="solar:compass-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium text-white mb-2">Brand exploration</h3>
<p className="text-sm text-slate-400 font-normal leading-relaxed">Test new visual directions quickly without losing structure or consistency.</p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto animate-on-scroll" id="waitlist" style={{animation: 'fadeSlideIn 0.8s ease-out 0.1s both'}}>
<div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-start">
<div>
<p className="text-xs uppercase tracking-widest font-medium text-slate-500 mb-3">Founding Access</p>
<h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-white mb-6">
                        Get early access before the public launch.
                    </h2>
<p className="text-base font-normal text-slate-400 mb-8">
                        LoveArt.ai is launching soon. Join the waitlist to get launch updates, early access invitations, and a chance to influence the first release.
                    </p>
<div className="hidden md:flex flex-col gap-4">
<div className="flex items-center gap-3 text-sm text-slate-400">
<iconify-icon className="text-white text-lg" icon="solar:check-circle-linear"></iconify-icon> Influence launch priorities
                        </div>
<div className="flex items-center gap-3 text-sm text-slate-400">
<iconify-icon className="text-white text-lg" icon="solar:check-circle-linear"></iconify-icon> Secure early onboarding
                        </div>
<div className="flex items-center gap-3 text-sm text-slate-400">
<iconify-icon className="text-white text-lg" icon="solar:check-circle-linear"></iconify-icon> Direct access to founders
                        </div>
</div>
</div>

<div className="border-gradient rounded-3xl p-1 bg-white/[0.02]">
<div className="bg-slate-950 rounded-[22px] p-6 sm:p-8">
<form className="space-y-6">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="block text-xs font-medium text-slate-300">Full Name</label>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all" placeholder="Jane Doe" type="text"/>
</div>
<div className="space-y-2">
<label className="block text-xs font-medium text-slate-300">Work Email</label>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all" placeholder="jane@company.com" type="email"/>
</div>
</div>
<div className="space-y-3">
<label className="block text-xs font-medium text-slate-300">What best describes you?</label>
<div className="flex flex-wrap gap-2">
<label className="cursor-pointer">
<input className="sr-only peer" name="role" type="radio"/>
<div className="px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs text-slate-400 hover:bg-white/10 peer-checked:bg-white peer-checked:text-black peer-checked:border-white transition-all">Founder</div>
</label>
<label className="cursor-pointer">
<input className="sr-only peer" name="role" type="radio"/>
<div className="px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs text-slate-400 hover:bg-white/10 peer-checked:bg-white peer-checked:text-black peer-checked:border-white transition-all">Marketer</div>
</label>
<label className="cursor-pointer">
<input className="sr-only peer" name="role" type="radio"/>
<div className="px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs text-slate-400 hover:bg-white/10 peer-checked:bg-white peer-checked:text-black peer-checked:border-white transition-all">Creator</div>
</label>
<label className="cursor-pointer">
<input className="sr-only peer" name="role" type="radio"/>
<div className="px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs text-slate-400 hover:bg-white/10 peer-checked:bg-white peer-checked:text-black peer-checked:border-white transition-all">Agency</div>
</label>
<label className="cursor-pointer">
<input className="sr-only peer" name="role" type="radio"/>
<div className="px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs text-slate-400 hover:bg-white/10 peer-checked:bg-white peer-checked:text-black peer-checked:border-white transition-all">Ecommerce Brand</div>
</label>
<label className="cursor-pointer">
<input className="sr-only peer" name="role" type="radio"/>
<div className="px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs text-slate-400 hover:bg-white/10 peer-checked:bg-white peer-checked:text-black peer-checked:border-white transition-all">Other</div>
</label>
</div>
</div>
<div className="space-y-3">
<label className="block text-xs font-medium text-slate-300">What type of visual assets do you need most often?</label>
<div className="flex flex-wrap gap-2">
<label className="cursor-pointer">
<input className="sr-only peer" name="assets" type="radio"/>
<div className="px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs text-slate-400 hover:bg-white/10 peer-checked:bg-white peer-checked:text-black peer-checked:border-white transition-all">Ad creatives</div>
</label>
<label className="cursor-pointer">
<input className="sr-only peer" name="assets" type="radio"/>
<div className="px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs text-slate-400 hover:bg-white/10 peer-checked:bg-white peer-checked:text-black peer-checked:border-white transition-all">Social posts</div>
</label>
<label className="cursor-pointer">
<input className="sr-only peer" name="assets" type="radio"/>
<div className="px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs text-slate-400 hover:bg-white/10 peer-checked:bg-white peer-checked:text-black peer-checked:border-white transition-all">Landing page visuals</div>
</label>
<label className="cursor-pointer">
<input className="sr-only peer" name="assets" type="radio"/>
<div className="px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs text-slate-400 hover:bg-white/10 peer-checked:bg-white peer-checked:text-black peer-checked:border-white transition-all">Product promo visuals</div>
</label>
<label className="cursor-pointer">
<input className="sr-only peer" name="assets" type="radio"/>
<div className="px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs text-slate-400 hover:bg-white/10 peer-checked:bg-white peer-checked:text-black peer-checked:border-white transition-all">Blog or content graphics</div>
</label>
<label className="cursor-pointer">
<input className="sr-only peer" name="assets" type="radio"/>
<div className="px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs text-slate-400 hover:bg-white/10 peer-checked:bg-white peer-checked:text-black peer-checked:border-white transition-all">Brand concepts</div>
</label>
</div>
</div>
<div className="space-y-2">
<label className="block text-xs font-medium text-slate-300">What’s your top pain point or feature need right now?</label>
<textarea className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all resize-none" placeholder="Tell us what slows you down, what is missing in current tools, or what would make this an instant yes for you." rows="3"></textarea>
</div>
<button className="w-full flex items-center justify-center text-sm font-medium transition-all duration-200 rounded-lg px-6 py-3.5 bg-white text-slate-950 hover:bg-slate-200 hover:scale-[1.02] active:scale-[0.98]" type="button">
                                Join the Waitlist
                            </button>
<p className="text-xs text-slate-500 text-center mt-4">
                                We’re using waitlist feedback to shape launch priorities. You’ll get product updates and early access details when invitations open.
                            </p>
</form>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 animate-on-scroll" id="faq" style={{animation: 'fadeSlideIn 0.8s ease-out 0.1s both'}}>
<div className="px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
<h2 className="text-3xl font-medium tracking-tighter text-white mb-10 text-center">
                    Questions serious users usually ask first.
                </h2>
<div className="space-y-4 text-sm">
<details className="group bg-white/[0.02] border border-white/10 rounded-xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-5 cursor-pointer font-medium text-white hover:bg-white/[0.02] transition-colors">
                            Who is LoveArt.ai for?
                            <span className="ml-6 flex-shrink-0 transition-transform duration-200 group-open:rotate-45">
<iconify-icon className="text-xl text-slate-500" icon="solar:add-circle-linear"></iconify-icon>
</span>
</summary>
<div className="p-5 pt-0 text-slate-400 leading-relaxed font-normal border-t border-white/5 mt-1">
                            LoveArt.ai is being built for founders, marketers, creators, agencies, and lean teams that need branded visual assets faster and with less inconsistency.
                        </div>
</details>
<details className="group bg-white/[0.02] border border-white/10 rounded-xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-5 cursor-pointer font-medium text-white hover:bg-white/[0.02] transition-colors">
                            Is this just another AI image generator?
                            <span className="ml-6 flex-shrink-0 transition-transform duration-200 group-open:rotate-45">
<iconify-icon className="text-xl text-slate-500" icon="solar:add-circle-linear"></iconify-icon>
</span>
</summary>
<div className="p-5 pt-0 text-slate-400 leading-relaxed font-normal border-t border-white/5 mt-1">
                            No. The goal is not endless random outputs. The goal is a more structured workflow for creating, refining, saving, and reusing on-brand visuals for real business needs.
                        </div>
</details>
<details className="group bg-white/[0.02] border border-white/10 rounded-xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-5 cursor-pointer font-medium text-white hover:bg-white/[0.02] transition-colors">
                            What kinds of visuals will LoveArt.ai support?
                            <span className="ml-6 flex-shrink-0 transition-transform duration-200 group-open:rotate-45">
<iconify-icon className="text-xl text-slate-500" icon="solar:add-circle-linear"></iconify-icon>
</span>
</summary>
<div className="p-5 pt-0 text-slate-400 leading-relaxed font-normal border-t border-white/5 mt-1">
                            The platform is being designed around the visuals teams use most often: ad creatives, social assets, landing page visuals, product promo art, content graphics, and brand concept directions.
                        </div>
</details>
<details className="group bg-white/[0.02] border border-white/10 rounded-xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-5 cursor-pointer font-medium text-white hover:bg-white/[0.02] transition-colors">
                            Do I need design experience?
                            <span className="ml-6 flex-shrink-0 transition-transform duration-200 group-open:rotate-45">
<iconify-icon className="text-xl text-slate-500" icon="solar:add-circle-linear"></iconify-icon>
</span>
</summary>
<div className="p-5 pt-0 text-slate-400 leading-relaxed font-normal border-t border-white/5 mt-1">
                            No. LoveArt.ai is being built to help non-designers and design-conscious teams move faster without getting buried in endless prompt experimentation.
                        </div>
</details>
<details className="group bg-white/[0.02] border border-white/10 rounded-xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-5 cursor-pointer font-medium text-white hover:bg-white/[0.02] transition-colors">
                            When will early access open?
                            <span className="ml-6 flex-shrink-0 transition-transform duration-200 group-open:rotate-45">
<iconify-icon className="text-xl text-slate-500" icon="solar:add-circle-linear"></iconify-icon>
</span>
</summary>
<div className="p-5 pt-0 text-slate-400 leading-relaxed font-normal border-t border-white/5 mt-1">
                            Soon. Waitlist members will hear first when early access invitations begin rolling out.
                        </div>
</details>
</div>
</div>
</section>

<section className="py-24 md:py-32 relative overflow-hidden text-center animate-on-scroll" style={{animation: 'fadeSlideIn 0.8s ease-out 0.1s both'}}>
<div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_bottom,rgba(255,255,255,0.05),transparent_60%)]"></div>
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tighter text-white mb-6">
                    Stop starting from scratch every time you need a visual.
                </h2>
<p className="text-base font-normal text-slate-400 mb-10 max-w-xl mx-auto">
                    Join the LoveArt.ai waitlist and get early access to a smarter, more structured way to create on-brand business visuals.
                </p>
<a className="inline-flex items-center justify-center text-sm font-medium transition-all duration-200 rounded-full px-8 py-3.5 bg-white text-slate-950 hover:bg-slate-200 hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.1)]" href="#waitlist">
                    Request Founding Access
                </a>
<p className="mt-6 text-xs text-slate-500 font-normal">
                    Launching soon. Early access spots will roll out in stages.
                </p>
</div>
</section>
</main>

<footer className="border-t border-white/5 bg-slate-950 relative z-10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-2 text-white font-medium tracking-tight">
<iconify-icon className="text-xl opacity-80" icon="solar:gallery-bold-duotone"></iconify-icon>
                LoveArt.ai
            </div>
<nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-xs font-normal text-slate-400">
<a className="hover:text-white transition-colors" href="#product">Product</a>
<a className="hover:text-white transition-colors" href="#workflow">Workflow</a>
<a className="hover:text-white transition-colors" href="#use-cases">Use Cases</a>
<a className="hover:text-white transition-colors" href="#faq">FAQ</a>
<a className="hover:text-white transition-colors" href="#waitlist">Waitlist</a>
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
</nav>
<p className="text-xs text-slate-500 text-center md:text-right w-full md:w-auto mt-4 md:mt-0">
                Business-first AI creative workflows for on-brand visuals.
            </p>
</div>
</footer>

    </>
  );
}
