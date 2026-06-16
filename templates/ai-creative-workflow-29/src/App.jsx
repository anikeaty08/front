import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



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
document.addEventListener("DOMContentLoaded", () => {
document.querySelectorAll(selector).forEach((el) => {
window.__inViewIO.observe(el);
});
});
};
initInViewAnimations();
})();



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
      


    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    mobileMenuBtn?.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
    
    // Close mobile menu on link click
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="top-0 w-full h-screen -z-10 hue-rotate-15 absolute overflow-hidden pointer-events-none opacity-50">
<div className="top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="vRUeei6AVOtWgmHT28mN"></div>

</div>
</div>

<header className="sticky z-50 bg-gray-950/80 border-white/5 border-b top-0 backdrop-blur-xl [animation:fadeSlideIn_1s_ease-out_0.1s_both]">
<div className="max-w-7xl mx-auto px-6 sm:px-8 py-4">
<div className="flex items-center justify-between h-10">

<a className="flex items-center gap-2 text-xl font-medium tracking-tight text-white transition hover:text-white/80" href="#">
<iconify-icon className="text-2xl" icon="solar:layers-minimalistic-linear"></iconify-icon>
          LoveArt.ai
        </a>

<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium transition text-white/60 hover:text-white" href="#product">Product</a>
<a className="text-sm font-medium transition text-white/60 hover:text-white" href="#workflow">Workflow</a>
<a className="text-sm font-medium transition text-white/60 hover:text-white" href="#use-cases">Use Cases</a>
<a className="text-sm font-medium transition text-white/60 hover:text-white" href="#faq">FAQ</a>
<a className="text-sm font-medium transition text-white/60 hover:text-white" href="#waitlist">Waitlist</a>
</nav>

<div className="flex items-center gap-4">
<a className="hidden sm:inline-flex min-w-[120px] cursor-pointer transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] hover:-translate-y-[2px] hover:text-white overflow-hidden font-medium text-white/80 tracking-tight bg-white/5 border-white/10 border rounded-xl px-4 py-2.5 relative shadow-[0_2.8px_2.2px_rgba(0,0,0,0.3)] items-center justify-center group" href="#waitlist">
<span className="relative z-10 text-sm transition-all duration-500 ease-out group-hover:transform group-hover:translate-y-8 group-hover:opacity-0 group-hover:blur-md">Request Founding Access</span>
<span className="absolute inset-0 z-10 flex items-center justify-center text-sm transition-all duration-300 ease-in-out transform -translate-y-8 group-hover:translate-y-0 group-hover:opacity-100 group-hover:blur-none opacity-0 blur-md">Request Access</span>
<span aria-hidden="true" className="absolute bottom-0 left-1/2 h-[1px] w-[70%] -translate-x-1/2 transition-all duration-[1000ms] group-hover:opacity-80 bg-gradient-to-r from-transparent via-white/40 to-transparent blur-[2px]"></span>
<span aria-hidden="true" className="absolute bottom-0 left-0 right-0 h-[100%] group-hover:opacity-60 transition-all duration-[1000ms] pointer-events-none bg-gradient-to-t from-white/10 via-white/5 to-transparent"></span>
</a>
<button aria-label="Open menu" className="md:hidden inline-flex items-center justify-center rounded-lg border h-9 w-9 transition border-white/5 bg-black text-white/70 hover:bg-white/5" id="mobile-menu-btn">
<iconify-icon className="text-lg" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="hidden md:hidden border-t backdrop-blur border-white/5 bg-gray-950/95 absolute w-full" id="mobile-menu">
<div className="px-6 py-6 flex flex-col gap-4">
<a className="text-base font-medium text-white/70 hover:text-white" href="#product">Product</a>
<a className="text-base font-medium text-white/70 hover:text-white" href="#workflow">Workflow</a>
<a className="text-base font-medium text-white/70 hover:text-white" href="#use-cases">Use Cases</a>
<a className="text-base font-medium text-white/70 hover:text-white" href="#faq">FAQ</a>
<a className="text-base font-medium text-white/70 hover:text-white" href="#waitlist">Waitlist</a>
<a className="mt-4 inline-flex justify-center rounded-xl bg-white text-black px-4 py-3 text-sm font-medium" href="#waitlist">Request Founding Access</a>
</div>
</div>
</header>

<section className="max-w-7xl mx-auto px-6 sm:px-8 mt-20 sm:mt-32 mb-16 relative">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
<div className="max-w-2xl relative z-10">
<div className="inline-flex animate-fade-in-delay-3 [animation:fadeSlideIn_1s_ease-out_0.2s_both] bg-white/5 border-white/10 border rounded-full mb-6 px-3 py-1 backdrop-blur items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"></span>
<span className="text-xs font-medium text-white/80 uppercase tracking-widest">Launching Soon</span>
</div>
<h1 className="text-5xl sm:text-6xl lg:text-7xl leading-[1.05] animate-fade-in [animation:fadeSlideIn_1s_ease-out_0.3s_both] font-medium text-white tracking-tight">
          Create on-brand visuals without the usual AI chaos.
        </h1>
<p className="text-lg sm:text-xl leading-relaxed animate-fade-in-delay-1 [animation:fadeSlideIn_1s_ease-out_0.4s_both] font-normal text-white/60 mt-6 max-w-xl">
          LoveArt.ai is the business-first AI creative workflow platform for founders, marketers, creators, agencies, and lean teams who need branded visuals fast. Build your brand context once, start projects with purpose, generate stronger concepts, refine faster, and reuse assets that actually fit your business.
        </p>
<div className="flex flex-col sm:flex-row animate-fade-in-delay-2 [animation:fadeSlideIn_1s_ease-out_0.5s_both] mt-10 gap-4 items-start sm:items-center">
<a className="group w-full sm:w-auto inline-flex min-w-[180px] cursor-pointer transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] hover:-translate-y-[2px] overflow-hidden font-medium text-black bg-white rounded-xl px-6 py-3.5 relative shadow-[0_0_20px_rgba(255,255,255,0.1)] items-center justify-center" href="#waitlist">
<span className="relative z-10 transition-all duration-300 group-hover:scale-95 text-sm">Request Founding Access</span>
</a>
<a className="inline-flex w-full sm:w-auto items-center justify-center gap-2 transition hover:bg-white/10 hover:text-white font-medium text-white/70 bg-white/5 border-white/10 border rounded-xl px-6 py-3.5 text-sm" href="#workflow">
<iconify-icon className="text-lg" icon="solar:play-circle-linear"></iconify-icon>
            Explore the Workflow
          </a>
</div>
<p className="text-xs text-white/40 mt-5 animate-fade-in-delay-3 [animation:fadeSlideIn_1s_ease-out_0.6s_both]">
          Early access is opening soon. Join the waitlist and help shape what ships first.
        </p>
</div>

<div className="relative animate-fade-in-delay-2 [animation:fadeSlideIn_1s_ease-out_0.5s_both] lg:ml-auto w-full max-w-lg lg:max-w-none">
<div className="aspect-[4/3] rounded-2xl bg-gray-900/40 border border-white/10 overflow-hidden relative shadow-2xl backdrop-blur-sm p-4 sm:p-6 flex flex-col gap-4">

<div className="flex items-center justify-between border-b border-white/5 pb-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center">
<iconify-icon className="text-white/80" icon="solar:palette-linear"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-white">Q3 Campaign Assets</div>
<div className="text-xs text-white/40">Brand Kit: Minimalist Dark</div>
</div>
</div>
<div className="flex gap-2">
<div className="h-6 w-16 bg-white/5 rounded-full border border-white/5"></div>
</div>
</div>

<div className="flex-1 grid grid-cols-12 gap-4">

<div className="col-span-4 flex flex-col gap-3">
<div className="h-8 bg-white/5 rounded border border-white/5 flex items-center px-3 gap-2">
<iconify-icon className="text-white/40 text-xs" icon="solar:document-text-linear"></iconify-icon>
<div className="h-2 w-12 bg-white/20 rounded-full"></div>
</div>
<div className="h-24 bg-white/5 rounded border border-white/5 p-3 flex flex-col gap-2">
<div className="h-2 w-16 bg-white/20 rounded-full"></div>
<div className="h-2 w-full bg-white/10 rounded-full mt-2"></div>
<div className="h-2 w-3/4 bg-white/10 rounded-full"></div>
</div>
<div className="mt-auto h-8 bg-indigo-500/20 rounded border border-indigo-500/30 flex items-center justify-center gap-2">
<iconify-icon className="text-indigo-300 text-xs" icon="solar:magic-stick-3-linear"></iconify-icon>
<div className="h-2 w-12 bg-indigo-300/50 rounded-full"></div>
</div>
</div>

<div className="col-span-8 grid grid-cols-2 gap-3">
<div className="rounded-lg bg-white/5 border border-white/10 relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
<div className="absolute top-2 right-2 w-5 h-5 rounded border border-white/20 bg-black/50 flex items-center justify-center backdrop-blur">
<iconify-icon className="text-white/40 text-xs" icon="solar:check-circle-linear"></iconify-icon>
</div>
</div>
<div className="rounded-lg bg-white/5 border border-white/10 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent"></div>
<div className="absolute inset-0 ring-1 ring-inset ring-indigo-500/30 rounded-lg"></div>
<div className="absolute top-2 right-2 w-5 h-5 rounded border border-indigo-400 bg-indigo-500/20 flex items-center justify-center backdrop-blur">
<iconify-icon className="text-indigo-400 text-xs" icon="solar:check-circle-linear"></iconify-icon>
</div>
</div>
<div className="rounded-lg bg-white/5 border border-white/10 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent"></div>
</div>
<div className="rounded-lg bg-white/5 border border-white/10 relative overflow-hidden flex items-center justify-center">
<iconify-icon className="text-white/20 text-xl" icon="solar:gallery-add-linear"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="absolute -right-6 top-10 bg-gray-900 border border-white/10 px-4 py-2.5 rounded-xl shadow-xl flex items-center gap-3 backdrop-blur-md animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.7s_both]">
<iconify-icon className="text-amber-400" icon="solar:star-fall-linear"></iconify-icon>
<span className="text-xs font-medium">Refined successfully</span>
</div>
<div className="absolute -left-6 bottom-10 bg-gray-900 border border-white/10 px-4 py-2.5 rounded-xl shadow-xl flex items-center gap-3 backdrop-blur-md animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.9s_both]">
<iconify-icon className="text-emerald-400" icon="solar:bookmark-linear"></iconify-icon>
<span className="text-xs font-medium">Saved to Asset Library</span>
</div>
</div>
</div>
</section>

<div className="max-w-7xl mx-auto px-6 sm:px-8 mb-24 animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.2s_both]">
<div className="flex flex-wrap justify-center sm:justify-between items-center gap-x-8 gap-y-6 py-8 border-y border-white/5 text-sm font-medium text-white/50">
<div className="flex items-center gap-2"><iconify-icon className="text-lg" icon="solar:ruler-pen-linear"></iconify-icon> Brand Kits</div>
<div className="hidden sm:block w-1 h-1 rounded-full bg-white/10"></div>
<div className="flex items-center gap-2"><iconify-icon className="text-lg" icon="solar:folder-with-files-linear"></iconify-icon> Project Workflows</div>
<div className="hidden md:block w-1 h-1 rounded-full bg-white/10"></div>
<div className="flex items-center gap-2"><iconify-icon className="text-lg" icon="solar:magic-stick-3-linear"></iconify-icon> Guided AI Generation</div>
<div className="hidden lg:block w-1 h-1 rounded-full bg-white/10"></div>
<div className="flex items-center gap-2"><iconify-icon className="text-lg" icon="solar:tuning-square-2-linear"></iconify-icon> Faster Refinement</div>
<div className="hidden xl:block w-1 h-1 rounded-full bg-white/10"></div>
<div className="flex items-center gap-2"><iconify-icon className="text-lg" icon="solar:box-linear"></iconify-icon> Reusable Assets</div>
</div>
</div>

<div className="max-w-7xl mx-auto px-6 sm:px-8 mb-32 space-y-6">
<div className="flex items-center gap-2 text-white/30 mb-6 [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll">
<span className="text-xs">+</span>
<div className="h-px flex-1 bg-white/10"></div>
<span className="text-xs font-medium tracking-widest uppercase">Why this matters</span>
<div className="h-px flex-1 bg-white/10"></div>
<span className="text-xs">+</span>
</div>
<section className="pb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
<div className="max-w-3xl">
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-white tracking-tight [animation:fadeSlideIn_1s_ease-out_0.2s_both] animate-on-scroll">
          Most AI image tools create more work than they remove.
        </h2>
</div>
<div className="max-w-md">
<p className="text-base text-white/50 [animation:fadeSlideIn_1s_ease-out_0.3s_both] animate-on-scroll leading-relaxed">
          You can generate endless images. That does not mean you get assets you can actually use. Prompts drift. Styles change. Files get scattered. Teams waste hours recreating the same visual direction over and over.
        </p>
</div>
</section>
<div className="grid md:grid-cols-3 gap-6 [animation:fadeSlideIn_1s_ease-out_0.4s_both] animate-on-scroll">

<div className="bg-gray-900/40 ring-1 ring-white/5 rounded-3xl p-8 backdrop-blur transition hover:ring-white/10 hover:bg-gray-900/60 flex flex-col gap-4">
<div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 mb-2">
<iconify-icon className="text-2xl" icon="solar:roulette-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-white">Prompt roulette</h3>
<p className="text-sm text-white/50 leading-relaxed">Too much time disappears into rewrites, rerolls, and almost-right outputs.</p>
</div>

<div className="bg-gray-900/40 ring-1 ring-white/5 rounded-3xl p-8 backdrop-blur transition hover:ring-white/10 hover:bg-gray-900/60 flex flex-col gap-4">
<div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 mb-2">
<iconify-icon className="text-2xl" icon="solar:ghost-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-white">No brand memory</h3>
<p className="text-sm text-white/50 leading-relaxed">Most tools forget your visual rules the moment you move to the next idea.</p>
</div>

<div className="bg-gray-900/40 ring-1 ring-white/5 rounded-3xl p-8 backdrop-blur transition hover:ring-white/10 hover:bg-gray-900/60 flex flex-col gap-4">
<div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 mb-2">
<iconify-icon className="text-2xl" icon="solar:broken-bone-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-white">Disconnected workflow</h3>
<p className="text-sm text-white/50 leading-relaxed">Generate in one place. Edit in another. Save somewhere else. Then repeat the whole mess next week.</p>
</div>
</div>
</div>

<div className="max-w-4xl mx-auto px-6 sm:px-8 mb-32 text-center [animation:fadeSlideIn_1s_ease-out_0.2s_both] animate-on-scroll">
<div className="inline-flex items-center justify-center gap-2 mb-6">
<div className="h-px w-8 bg-white/20"></div>
<span className="text-xs font-medium tracking-widest text-white/40 uppercase">The better way</span>
<div className="h-px w-8 bg-white/20"></div>
</div>
<h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-white tracking-tight mb-8">
      LoveArt.ai gives your creative workflow a memory.
    </h2>
<p className="text-lg text-white/60 leading-relaxed mb-6">
      Set your brand direction once. Start projects with real context. Generate better options, refine the strongest ones, and keep the assets worth reusing. The result is a faster, cleaner path from rough idea to on-brand business visual.
    </p>
<p className="text-base font-medium text-white/80">
      Less starting from scratch. More visuals you can actually publish.
    </p>
</div>

<div className="max-w-7xl mx-auto px-6 sm:px-8 mb-32 space-y-6 scroll-mt-24" id="workflow">
<div className="flex items-center gap-2 text-white/30 mb-6 [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll">
<span className="text-xs">+</span>
<div className="h-px flex-1 bg-white/10"></div>
<span className="text-xs font-medium tracking-widest uppercase">How it works</span>
<div className="h-px flex-1 bg-white/10"></div>
<span className="text-xs">+</span>
</div>
<section className="pb-10">
<h2 className="text-3xl sm:text-4xl font-medium text-white tracking-tight [animation:fadeSlideIn_1s_ease-out_0.2s_both] animate-on-scroll">
        A simpler path from brief to usable asset.
      </h2>
</section>
<div className="bg-gray-900/40 ring-1 ring-white/5 rounded-3xl p-8 sm:p-12 backdrop-blur relative overflow-hidden [animation:fadeSlideIn_1s_ease-out_0.3s_both] animate-on-scroll">
<div className="grid lg:grid-cols-2 gap-12 items-center">

<div className="relative pl-6 sm:pl-8 py-4">
<div className="absolute left-[11px] sm:left-[15px] top-6 bottom-6 w-px bg-gradient-to-b from-white/40 via-white/10 to-transparent"></div>
<div className="space-y-12 relative">

<div className="relative flex gap-6">
<div className="absolute -left-[30px] sm:-left-[34px] w-3 h-3 rounded-full bg-gray-950 border-2 border-white/60 mt-1.5 z-10 flex items-center justify-center">
<div className="w-1 h-1 bg-white/80 rounded-full"></div>
</div>
<div>
<h3 className="text-lg font-medium text-white tracking-tight">Create your Brand Kit</h3>
<p className="text-sm text-white/50 mt-2 leading-relaxed">Save your visual direction, references, and brand context once so you stop repeating yourself every session.</p>
</div>
</div>

<div className="relative flex gap-6">
<div className="absolute -left-[30px] sm:-left-[34px] w-3 h-3 rounded-full bg-gray-950 border-2 border-white/40 mt-1.5 z-10 flex items-center justify-center"></div>
<div>
<h3 className="text-lg font-medium text-white tracking-tight">Start a Project</h3>
<p className="text-sm text-white/50 mt-2 leading-relaxed">Tell LoveArt.ai what you need to create, where it will be used, and what the asset needs to achieve.</p>
</div>
</div>

<div className="relative flex gap-6">
<div className="absolute -left-[30px] sm:-left-[34px] w-3 h-3 rounded-full bg-gray-950 border-2 border-white/20 mt-1.5 z-10 flex items-center justify-center"></div>
<div>
<h3 className="text-lg font-medium text-white tracking-tight">Generate and refine</h3>
<p className="text-sm text-white/50 mt-2 leading-relaxed">Create stronger concepts, iterate faster, and improve good outputs without restarting from zero.</p>
</div>
</div>

<div className="relative flex gap-6">
<div className="absolute -left-[30px] sm:-left-[34px] w-3 h-3 rounded-full bg-gray-950 border-2 border-white/10 mt-1.5 z-10 flex items-center justify-center"></div>
<div>
<h3 className="text-lg font-medium text-white tracking-tight">Save and reuse what works</h3>
<p className="text-sm text-white/50 mt-2 leading-relaxed">Keep approved assets organized so your best creative direction becomes easier to repeat and scale.</p>
</div>
</div>
</div>
</div>

<div className="hidden lg:block relative h-full min-h-[400px]">
<div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl border border-white/10 overflow-hidden shadow-2xl flex items-center justify-center p-8">
<div className="w-full h-full relative">

<div className="absolute top-4 left-4 w-32 h-24 rounded-lg border border-white/10 bg-white/5 backdrop-blur shadow-sm"></div>
<div className="absolute top-8 left-12 w-48 h-32 rounded-lg border border-white/20 bg-gray-900 shadow-xl flex items-center justify-center">
<iconify-icon className="text-white/30 text-3xl" icon="solar:tuning-square-2-linear"></iconify-icon>
</div>
<div className="absolute bottom-12 right-12 w-40 h-40 rounded-full border border-indigo-500/20 bg-gradient-to-tr from-indigo-500/5 to-transparent flex items-center justify-center shadow-lg backdrop-blur">
<iconify-icon className="text-indigo-300/50 text-4xl" icon="solar:gallery-favourite-linear"></iconify-icon>
</div>

<svg className="absolute inset-0 w-full h-full pointer-events-none" style={{opacity: '0.2'}}>
<path d="M 120 80 Q 200 80 200 160 T 300 240" fill="none" stroke="white" stroke-dasharray="4 4" strokeWidth="1"></path>
</svg>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="max-w-7xl mx-auto px-6 sm:px-8 mb-32 space-y-6 scroll-mt-24" id="product">
<div className="flex items-center gap-2 text-white/30 mb-6 [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll">
<span className="text-xs">+</span>
<div className="h-px flex-1 bg-white/10"></div>
<span className="text-xs font-medium tracking-widest uppercase">Built for real brand work</span>
<div className="h-px flex-1 bg-white/10"></div>
<span className="text-xs">+</span>
</div>
<section className="pb-10">
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-white tracking-tight [animation:fadeSlideIn_1s_ease-out_0.2s_both] animate-on-scroll">
        A workflow system, not another random generator.
      </h2>
</section>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 [animation:fadeSlideIn_1s_ease-out_0.3s_both] animate-on-scroll">

<div className="lg:col-span-2 relative overflow-hidden ring-1 ring-white/10 bg-gray-900/40 rounded-3xl p-8 hover:bg-gray-900/60 transition group flex flex-col justify-between min-h-[300px]">
<div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl group-hover:bg-indigo-500/20 transition duration-700 pointer-events-none"></div>
<div className="relative z-10 max-w-md">
<div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/80 mb-6">
<iconify-icon className="text-xl" icon="solar:ruler-pen-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-medium tracking-tight text-white mb-3">Brand Kits</h3>
<p className="text-sm text-white/50 leading-relaxed">Give your visuals a foundation with reusable brand context, style direction, references, and creative guardrails.</p>
</div>
</div>

<div className="relative overflow-hidden ring-1 ring-white/10 bg-gray-900/40 rounded-3xl p-8 hover:bg-gray-900/60 transition group flex flex-col justify-between min-h-[300px]">
<div className="relative z-10">
<div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/80 mb-6">
<iconify-icon className="text-xl" icon="solar:folder-with-files-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-3">Projects</h3>
<p className="text-sm text-white/50 leading-relaxed">Keep campaigns, concepts, and asset goals organized instead of buried inside one-off prompts.</p>
</div>
</div>

<div className="relative overflow-hidden ring-1 ring-white/10 bg-gray-900/40 rounded-3xl p-8 hover:bg-gray-900/60 transition group flex flex-col justify-between min-h-[300px]">
<div className="relative z-10">
<div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/80 mb-6">
<iconify-icon className="text-xl" icon="solar:monitor-camera-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-3">Guided Studio</h3>
<p className="text-sm text-white/50 leading-relaxed">Move from idea to output with a cleaner workflow built for business visuals, not novelty generations.</p>
</div>
</div>

<div className="relative overflow-hidden ring-1 ring-white/10 bg-gray-900/40 rounded-3xl p-8 hover:bg-gray-900/60 transition group flex flex-col justify-between min-h-[300px]">
<div className="relative z-10">
<div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/80 mb-6">
<iconify-icon className="text-xl" icon="solar:tuning-square-2-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-3">Smarter Refinement</h3>
<p className="text-sm text-white/50 leading-relaxed">Improve, adjust, and evolve strong outputs without throwing everything away and starting over.</p>
</div>
</div>

<div className="relative overflow-hidden ring-1 ring-white/10 bg-gray-900/40 rounded-3xl p-8 hover:bg-gray-900/60 transition group flex flex-col justify-between min-h-[300px]">
<div className="relative z-10">
<div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/80 mb-6">
<iconify-icon className="text-xl" icon="solar:box-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-3">Reusable Asset Library</h3>
<p className="text-sm text-white/50 leading-relaxed">Save the visuals worth keeping and turn winning creative directions into repeatable assets.</p>
</div>
</div>
</div>
</div>

<div className="max-w-7xl mx-auto px-6 sm:px-8 mb-32 space-y-6 scroll-mt-24" id="use-cases">
<div className="flex items-center gap-2 text-white/30 mb-6 [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll">
<span className="text-xs">+</span>
<div className="h-px flex-1 bg-white/10"></div>
<span className="text-xs font-medium tracking-widest uppercase">What you can create</span>
<div className="h-px flex-1 bg-white/10"></div>
<span className="text-xs">+</span>
</div>
<section className="pb-10">
<h2 className="text-3xl sm:text-4xl font-medium text-white tracking-tight [animation:fadeSlideIn_1s_ease-out_0.2s_both] animate-on-scroll">
        The kinds of visuals teams actually need.
      </h2>
</section>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 [animation:fadeSlideIn_1s_ease-out_0.3s_both] animate-on-scroll">
<div className="bg-transparent border border-white/10 rounded-2xl p-6 transition hover:bg-white/5">
<h3 className="text-base font-medium text-white mb-2">Ad creatives</h3>
<p className="text-sm text-white/50">Build stronger visual directions for paid campaigns without burning hours on prompt roulette.</p>
</div>
<div className="bg-transparent border border-white/10 rounded-2xl p-6 transition hover:bg-white/5">
<h3 className="text-base font-medium text-white mb-2">Social content</h3>
<p className="text-sm text-white/50">Create branded visuals for ongoing content without reinventing your look every week.</p>
</div>
<div className="bg-transparent border border-white/10 rounded-2xl p-6 transition hover:bg-white/5">
<h3 className="text-base font-medium text-white mb-2">Landing page visuals</h3>
<p className="text-sm text-white/50">Generate cleaner concepts for hero sections, promos, launches, and offers.</p>
</div>
<div className="bg-transparent border border-white/10 rounded-2xl p-6 transition hover:bg-white/5">
<h3 className="text-base font-medium text-white mb-2">Product and promo art</h3>
<p className="text-sm text-white/50">Create visuals for launches, sales pushes, seasonal campaigns, and branded announcements.</p>
</div>
<div className="bg-transparent border border-white/10 rounded-2xl p-6 transition hover:bg-white/5">
<h3 className="text-base font-medium text-white mb-2">Content graphics</h3>
<p className="text-sm text-white/50">Support articles, newsletters, and editorial content with visuals that fit your brand.</p>
</div>
<div className="bg-transparent border border-white/10 rounded-2xl p-6 transition hover:bg-white/5">
<h3 className="text-base font-medium text-white mb-2">Brand exploration</h3>
<p className="text-sm text-white/50">Test new visual directions quickly without losing structure or consistency.</p>
</div>
</div>
</div>

<div className="max-w-7xl mx-auto px-6 sm:px-8 mb-32 scroll-mt-24 [animation:fadeSlideIn_1s_ease-out_0.2s_both] animate-on-scroll" id="waitlist">
<div className="bg-gray-900/60 ring-1 ring-white/10 rounded-3xl overflow-hidden backdrop-blur shadow-2xl">
<div className="grid lg:grid-cols-5 gap-0">

<div className="lg:col-span-2 p-8 sm:p-12 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col justify-center bg-gray-950/40">
<div className="inline-flex items-center gap-2 text-xs font-medium tracking-widest text-white/40 uppercase mb-4">
<iconify-icon icon="solar:star-fall-linear"></iconify-icon> Founding Access
          </div>
<h2 className="text-3xl sm:text-4xl font-medium text-white tracking-tight mb-6">
            Get early access before the public launch.
          </h2>
<p className="text-base text-white/60 leading-relaxed mb-8">
            LoveArt.ai is launching soon. Join the waitlist to get launch updates, early access invitations, and a chance to influence the first release.
          </p>
<div className="bg-white/5 rounded-xl p-5 border border-white/5 mt-auto">
<p className="text-xs text-white/50 leading-relaxed">
              We’re using waitlist feedback to shape launch priorities. You’ll get product updates and early access details when invitations open.
            </p>
</div>
</div>

<div className="lg:col-span-3 p-8 sm:p-12">
<form className="space-y-8">
<div className="grid sm:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-sm font-medium text-white/80">Full Name</label>
<input className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:ring-1 focus:ring-white/30 focus:border-white/30 outline-none transition placeholder-white/20" placeholder="Jane Doe" required="" type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-white/80">Work Email</label>
<input className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:ring-1 focus:ring-white/30 focus:border-white/30 outline-none transition placeholder-white/20" placeholder="jane@company.com" required="" type="email"/>
</div>
</div>
<div className="space-y-3">
<label className="text-sm font-medium text-white/80">What best describes you?</label>
<div className="flex flex-wrap gap-2">
<label className="cursor-pointer">
<input className="peer sr-only" name="role" type="radio" value="Founder"/>
<span className="inline-flex items-center rounded-xl px-4 py-2 text-sm font-medium ring-1 ring-inset transition bg-gray-900/50 text-white/50 ring-white/10 peer-checked:bg-white/10 peer-checked:text-white peer-checked:ring-white/30 hover:bg-gray-800">Founder</span>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="role" type="radio" value="Marketer"/>
<span className="inline-flex items-center rounded-xl px-4 py-2 text-sm font-medium ring-1 ring-inset transition bg-gray-900/50 text-white/50 ring-white/10 peer-checked:bg-white/10 peer-checked:text-white peer-checked:ring-white/30 hover:bg-gray-800">Marketer</span>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="role" type="radio" value="Creator"/>
<span className="inline-flex items-center rounded-xl px-4 py-2 text-sm font-medium ring-1 ring-inset transition bg-gray-900/50 text-white/50 ring-white/10 peer-checked:bg-white/10 peer-checked:text-white peer-checked:ring-white/30 hover:bg-gray-800">Creator</span>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="role" type="radio" value="Agency"/>
<span className="inline-flex items-center rounded-xl px-4 py-2 text-sm font-medium ring-1 ring-inset transition bg-gray-900/50 text-white/50 ring-white/10 peer-checked:bg-white/10 peer-checked:text-white peer-checked:ring-white/30 hover:bg-gray-800">Agency</span>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="role" type="radio" value="Ecommerce Brand"/>
<span className="inline-flex items-center rounded-xl px-4 py-2 text-sm font-medium ring-1 ring-inset transition bg-gray-900/50 text-white/50 ring-white/10 peer-checked:bg-white/10 peer-checked:text-white peer-checked:ring-white/30 hover:bg-gray-800">Ecommerce Brand</span>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="role" type="radio" value="Other"/>
<span className="inline-flex items-center rounded-xl px-4 py-2 text-sm font-medium ring-1 ring-inset transition bg-gray-900/50 text-white/50 ring-white/10 peer-checked:bg-white/10 peer-checked:text-white peer-checked:ring-white/30 hover:bg-gray-800">Other</span>
</label>
</div>
</div>
<div className="space-y-3">
<label className="text-sm font-medium text-white/80">What type of visual assets do you need most often?</label>
<div className="relative">
<select className="w-full appearance-none bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:ring-1 focus:ring-white/30 focus:border-white/30 outline-none transition cursor-pointer">
<option className="text-white/20" disabled="" selected="" value="">Select an option...</option>
<option className="bg-gray-900" value="ad-creatives">Ad creatives</option>
<option className="bg-gray-900" value="social-posts">Social posts</option>
<option className="bg-gray-900" value="landing-page">Landing page visuals</option>
<option className="bg-gray-900" value="product-promo">Product promo visuals</option>
<option className="bg-gray-900" value="blog-content">Blog or content graphics</option>
<option className="bg-gray-900" value="brand-concepts">Brand concepts</option>
<option className="bg-gray-900" value="other">Other</option>
</select>
<div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/50">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-white/80">What’s your top pain point or feature need right now?</label>
<textarea className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:ring-1 focus:ring-white/30 focus:border-white/30 outline-none transition placeholder-white/20 resize-none" placeholder="Tell us what slows you down, what is missing in current tools, or what would make this an instant yes for you." rows="3"></textarea>
</div>
<button className="w-full group inline-flex cursor-pointer transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] hover:-translate-y-[2px] overflow-hidden font-medium text-black bg-white rounded-xl px-6 py-4 relative shadow-[0_0_15px_rgba(255,255,255,0.1)] items-center justify-center" type="button">
<span className="relative z-10 transition-all duration-300 group-hover:scale-95 text-sm">Join the Waitlist</span>
</button>
</form>
</div>
</div>
</div>
</div>

<div className="max-w-3xl mx-auto px-6 sm:px-8 mb-32 scroll-mt-24 [animation:fadeSlideIn_1s_ease-out_0.2s_both] animate-on-scroll" id="faq">
<div className="text-center mb-12">
<h2 className="text-3xl sm:text-4xl font-medium text-white tracking-tight">
        Questions serious users usually ask first.
      </h2>
</div>
<div className="space-y-4">
<details className="group bg-gray-900/30 border border-white/10 rounded-2xl cursor-pointer transition hover:bg-gray-900/50">
<summary className="flex items-center justify-between p-6 text-base font-medium text-white">
          Who is LoveArt.ai for?
          <iconify-icon className="text-white/40 transition-transform duration-300 group-open:-rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-sm text-white/50 leading-relaxed border-t border-white/5 pt-4 mt-2">
          LoveArt.ai is being built for founders, marketers, creators, agencies, and lean teams that need branded visual assets faster and with less inconsistency.
        </div>
</details>
<details className="group bg-gray-900/30 border border-white/10 rounded-2xl cursor-pointer transition hover:bg-gray-900/50">
<summary className="flex items-center justify-between p-6 text-base font-medium text-white">
          Is this just another AI image generator?
          <iconify-icon className="text-white/40 transition-transform duration-300 group-open:-rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-sm text-white/50 leading-relaxed border-t border-white/5 pt-4 mt-2">
          No. The goal is not endless random outputs. The goal is a more structured workflow for creating, refining, saving, and reusing on-brand visuals for real business needs.
        </div>
</details>
<details className="group bg-gray-900/30 border border-white/10 rounded-2xl cursor-pointer transition hover:bg-gray-900/50">
<summary className="flex items-center justify-between p-6 text-base font-medium text-white">
          What kinds of visuals will LoveArt.ai support?
          <iconify-icon className="text-white/40 transition-transform duration-300 group-open:-rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-sm text-white/50 leading-relaxed border-t border-white/5 pt-4 mt-2">
          The platform is being designed around the visuals teams use most often: ad creatives, social assets, landing page visuals, product promo art, content graphics, and brand concept directions.
        </div>
</details>
<details className="group bg-gray-900/30 border border-white/10 rounded-2xl cursor-pointer transition hover:bg-gray-900/50">
<summary className="flex items-center justify-between p-6 text-base font-medium text-white">
          Do I need design experience?
          <iconify-icon className="text-white/40 transition-transform duration-300 group-open:-rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-sm text-white/50 leading-relaxed border-t border-white/5 pt-4 mt-2">
          No. LoveArt.ai is being built to help non-designers and design-conscious teams move faster without getting buried in endless prompt experimentation.
        </div>
</details>
<details className="group bg-gray-900/30 border border-white/10 rounded-2xl cursor-pointer transition hover:bg-gray-900/50">
<summary className="flex items-center justify-between p-6 text-base font-medium text-white">
          When will early access open?
          <iconify-icon className="text-white/40 transition-transform duration-300 group-open:-rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-sm text-white/50 leading-relaxed border-t border-white/5 pt-4 mt-2">
          Soon. Waitlist members will hear first when early access invitations begin rolling out.
        </div>
</details>
</div>
</div>

<div className="max-w-4xl mx-auto px-6 sm:px-8 mb-32 text-center [animation:fadeSlideIn_1s_ease-out_0.2s_both] animate-on-scroll">
<h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-white tracking-tight mb-6">
      Stop starting from scratch every time you need a visual.
    </h2>
<p className="text-lg text-white/60 leading-relaxed mb-10 max-w-2xl mx-auto">
      Join the LoveArt.ai waitlist and get early access to a smarter, more structured way to create on-brand business visuals.
    </p>
<div className="flex flex-col items-center gap-4">
<a className="group inline-flex min-w-[200px] cursor-pointer transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] hover:-translate-y-[2px] overflow-hidden font-medium text-black bg-white rounded-xl px-8 py-4 relative shadow-[0_0_20px_rgba(255,255,255,0.1)] items-center justify-center" href="#waitlist">
<span className="relative z-10 transition-all duration-300 group-hover:scale-95 text-base">Request Founding Access</span>
</a>
<span className="text-xs text-white/40 font-medium">Launching soon. Early access spots will roll out in stages.</span>
</div>
</div>

<footer className="border-t border-white/5 pt-16 pb-12 px-6 sm:px-8 bg-gray-950">
<div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
<div className="flex flex-col items-center sm:items-start gap-2">
<a className="flex items-center gap-2 text-lg font-medium tracking-tight text-white transition hover:text-white/80" href="#">
<iconify-icon icon="solar:layers-minimalistic-linear"></iconify-icon>
          LoveArt.ai
        </a>
<p className="text-xs text-white/40">Business-first AI creative workflows for on-brand visuals.</p>
</div>
<nav className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm font-medium text-white/60">
<a className="transition hover:text-white" href="#product">Product</a>
<a className="transition hover:text-white" href="#workflow">Workflow</a>
<a className="transition hover:text-white" href="#use-cases">Use Cases</a>
<a className="transition hover:text-white" href="#faq">FAQ</a>
<a className="transition hover:text-white" href="#waitlist">Waitlist</a>
<a className="transition hover:text-white" href="#">Privacy</a>
<a className="transition hover:text-white" href="#">Terms</a>
</nav>
</div>
</footer>


    </>
  );
}
