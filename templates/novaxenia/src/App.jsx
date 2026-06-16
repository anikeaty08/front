import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



/* Animation on Scroll */
(function () {
const style = document.createElement("style");
style.textContent = `
.animate-on-scroll { animation-play-state: paused !important; }
.animate-on-scroll.animate { animation-play-state: running !important; }
`;
document.head.appendChild(style);
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

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 -z-10">
<div className="absolute inset-0 opacity-[0.03]">
<svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
<defs>
<pattern height="64" id="grid" patternunits="userSpaceOnUse" width="64">
<path d="M64 0H0v64" fill="none" stroke="white" strokeWidth="0.5"></path>
</pattern>
</defs>
<rect fill="url(#grid)" height="100%" width="100%"></rect>
</svg>
</div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none"></div>
</div>

<header className="relative [animation:fadeSlideIn_0.8s_ease-out_0s_both] animate-on-scroll z-50 animate">
<nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
<a className="flex items-center gap-3" href="#">
<span className="text-lg font-semibold tracking-tight">Novaxenia</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm text-neutral-300">
<a className="hover:text-white transition-colors font-medium" href="#problems">Problems</a>
<a className="hover:text-white transition-colors font-medium" href="#services">Services</a>
<a className="hover:text-white transition-colors font-medium" href="#how-it-works">How it Works</a>
<a className="hover:text-white transition-colors font-medium" href="#pricing">Pricing</a>
</div>
<div className="flex items-center gap-3">
<button className="inline-flex gap-2 border-gradient hover:text-white transition-all hover:-translate-y-0.5 cursor-pointer text-sm font-medium text-white/80 bg-white/5 rounded-full pt-2 pr-4 pb-2 pl-4 backdrop-blur-xl gap-x-2 gap-y-2 items-center" onclick="window.location.href='https://calendly.com/novaxeniaofficial/30min'" role="button" style={{borderRadius: '9999px'}}>
        Book Discovery Call
      </button>
</div>
</nav>
</header>

<main className="z-10 relative">
<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 pb-16 md:pb-24 lg:pt-24 text-center">

<div className="mx-auto w-fit mb-6 [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll animate">
<div className="inline-flex items-center gap-2 rounded-full border-gradient bg-white/5 px-3 py-1.5 text-xs text-neutral-300" style={{borderRadius: '9999px'}}>
<span className="inline-flex items-center justify-center rounded-full bg-blue-400/20 text-blue-300 px-2 py-0.5">
          New
        </span>
<span className="font-medium">Flat monthly fee</span>
</div>
</div>

<div className="[animation:fadeSlideIn_0.8s_ease-out_0.2s_both] animate-on-scroll animate">
<h1 className="mx-auto max-w-4xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tighter text-white">
        Scale your brand without  scaling your team
      </h1>
<p className="sm:text-lg leading-relaxed text-base text-neutral-400 max-w-2xl mt-6 mr-auto ml-auto" style={{}}>Get a dedicated top 1% global video team for a flat monthly fee.</p>

<div className="flex flex-col sm:flex-row gap-3 mt-10 items-center justify-center">
<button className="sm:w-auto inline-flex hover:-translate-y-0.5 transition-all text-sm font-semibold text-neutral-900 bg-white w-full rounded-full pt-3.5 pr-8 pb-3.5 pl-8 shadow-[0_1px_0_0_rgba(255,255,255,0.4)_inset,0_1px_2px_rgba(0,0,0,0.2)] gap-x-2 gap-y-2 items-center justify-center" onclick="document.querySelector('footer').previousElementSibling.scrollIntoView({ behavior: 'smooth' })" style={{borderRadius: '9999px'}}>
  Start Posting
</button>
<button className="sm:w-auto inline-flex border-gradient hover:text-white transition-all hover:-translate-y-0.5 cursor-pointer text-sm font-medium text-white/80 bg-white/5 w-full rounded-full pt-3.5 pr-8 pb-3.5 pl-8 backdrop-blur-xl gap-x-2 gap-y-2 items-center justify-center" onclick="window.location.href='https://calendly.com/novaxeniaofficial/30min';window.location.href='https://calendly.com/novaxeniaofficial/30min'" role="button" style={{borderRadius: '9999px'}}>
          Book Discovery Call
        </button>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16" id="problems">
<div className="text-center mb-12 [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll animate">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter">We deal with the biggest problems you hate</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">

<div className="overflow-hidden border-gradient [animation:fadeSlideIn_0.8s_ease-out_0.2s_both] animate-on-scroll animate group hover:bg-white/[0.08] transition-colors bg-white/5 rounded-2xl pt-6 pr-6 pb-6 pl-6 relative">
<div className="h-10 w-10 rounded-lg bg-red-500/10 flex items-center justify-center mb-4 text-red-400">
<svg className="lucide lucide-building-2" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path><path d="M10 6h4"></path><path d="M10 10h4"></path><path d="M10 14h4"></path><path d="M10 18h4"></path></svg>
</div>
<h3 className="text-lg font-semibold text-white tracking-tight">Agencies</h3>
<p className="mt-2 text-sm text-neutral-400 leading-relaxed">Expensive ($5k+), slow, and push long-term contracts that lock you in.</p>
</div>

<div className="relative overflow-hidden rounded-2xl border-gradient bg-white/5 p-6 [animation:fadeSlideIn_0.8s_ease-out_0.3s_both] animate-on-scroll animate group hover:bg-white/[0.08] transition-colors">
<div className="h-10 w-10 rounded-lg bg-orange-500/10 flex items-center justify-center mb-4 text-orange-400">
<svg className="lucide lucide-user-x" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="17" x2="22" y1="8" y2="13"></line><line x1="22" x2="17" y1="8" y2="13"></line></svg>
</div>
<h3 className="text-lg font-semibold text-white tracking-tight">Freelancers</h3>
<p className="mt-2 text-sm text-neutral-400 leading-relaxed">Unreliable, ghost you when you need them most, and deliver inconsistent quality.</p>
</div>

<div className="relative overflow-hidden rounded-2xl border-gradient bg-white/5 p-6 [animation:fadeSlideIn_0.8s_ease-out_0.4s_both] animate-on-scroll animate group hover:bg-white/[0.08] transition-colors">
<div className="h-10 w-10 rounded-lg bg-yellow-500/10 flex items-center justify-center mb-4 text-yellow-400">
<svg className="lucide lucide-briefcase" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" ry="2" width="20" x="2" y="7"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
</div>
<h3 className="text-lg font-semibold text-white tracking-tight">Hiring</h3>
<p className="mt-2 text-sm text-neutral-400 leading-relaxed">Takes 60+ days, costs $10k+ in overhead, and is risky if the hire doesn't work out.</p>
</div>

<div className="relative overflow-hidden rounded-2xl border-gradient bg-white/5 p-6 [animation:fadeSlideIn_0.8s_ease-out_0.5s_both] animate-on-scroll animate group hover:bg-white/[0.08] transition-colors">
<div className="h-10 w-10 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4 text-purple-400">
<svg className="lucide lucide-scissors" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="6" r="3"></circle><path d="M8.12 8.12 12 12"></path><path d="M20 4 8.12 15.88"></path><circle cx="6" cy="18" r="3"></circle><path d="M14.8 14.8 20 20"></path></svg>
</div>
<h3 className="text-lg font-semibold text-white tracking-tight">Editing Yourself</h3>
<p className="mt-2 text-sm text-neutral-400 leading-relaxed">Wastes 20 hours/week and kills your founder productivity when you should be selling.</p>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
<div className="relative overflow-hidden rounded-3xl border-gradient bg-neutral-900/50 flex flex-col lg:flex-row group [animation:fadeSlideIn_0.8s_ease-out_0.2s_both] animate-on-scroll animate">

<div className="flex-1 p-8 md:p-12 lg:pr-8 relative z-20 flex flex-col justify-center">
<div className="pointer-events-none absolute -left-24 -top-24 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl"></div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-white mb-6 relative">Only the top 1% get approved</h2>
<p className="text-neutral-400 text-lg leading-relaxed mb-8 relative max-w-lg">
          We source talent globally, not locally. Our rigorous vetting process tests for technical skill, B2B SaaS understanding, and English fluency. You get senior-level output from day one.
        </p>

<div className="flex flex-wrap gap-3 mb-10 relative">
<div className="px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-white">Technical Skill</div>
<div className="px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-white">SaaS Understanding</div>
<div className="px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-white">English Fluency</div>
</div>

<div className="grid grid-cols-3 gap-6 border-t border-white/10 pt-8 relative">
<div>
<div className="text-2xl md:text-3xl font-bold tracking-tight text-white">99%</div>
<div className="text-[10px] uppercase tracking-wider text-neutral-500 font-semibold mt-1">Rejected</div>
</div>
<div>
<div className="text-2xl md:text-3xl font-bold tracking-tight text-white">30+</div>
<div className="text-[10px] uppercase tracking-wider text-neutral-500 font-semibold mt-1">Countries</div>
</div>
<div className="">
<div className="text-2xl md:text-3xl font-bold tracking-tight text-white">48h</div>
<div className="text-[10px] uppercase tracking-wider text-neutral-500 font-semibold mt-1">Turnaround</div>
</div>
</div>
</div>

<div className="relative lg:w-[48%] min-h-[400px] lg:min-h-full overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-neutral-900/90 via-transparent to-transparent z-10"></div>
<div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay z-10"></div>

<img alt="Diverse team collaborating on laptop" className="absolute inset-0 w-full h-full object-cover grayscale-[25%] group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2070&amp;q=80"/>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16" id="services">
<div className="text-center mb-12 [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll animate">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-white">Unlock your content engine in a few clicks</h2>
<p className="mt-4 text-neutral-400">One subscription covers all your video needs.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">

<div className="flex flex-col items-center justify-center p-8 rounded-2xl border-gradient bg-white/5 hover:bg-white/10 transition-colors group [animation:fadeSlideIn_0.8s_ease-out_0.2s_both] animate-on-scroll animate">
<div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 mb-4 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-monitor-play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m10 7 5 3-5 3Z"></path><rect height="14" rx="2" width="20" x="2" y="3"></rect><path d="M12 17v4"></path><path d="M8 21h8"></path></svg>
</div>
<span className="font-medium text-white text-center">SaaS Product Demos</span>
</div>

<div className="flex flex-col items-center justify-center p-8 rounded-2xl border-gradient bg-white/5 hover:bg-white/10 transition-colors group [animation:fadeSlideIn_0.8s_ease-out_0.2s_both] animate-on-scroll animate">
<div className="p-3 rounded-xl bg-pink-500/10 text-pink-400 mb-4 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-smartphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
</div>
<span className="font-medium text-white text-center">Social Media Shorts</span>
</div>

<div className="flex flex-col items-center justify-center p-8 rounded-2xl border-gradient bg-white/5 hover:bg-white/10 transition-colors group [animation:fadeSlideIn_0.8s_ease-out_0.2s_both] animate-on-scroll animate">
<div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 mb-4 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-mic" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" x2="12" y1="19" y2="22"></line></svg>
</div>
<span className="font-medium text-white text-center">Podcast Editing</span>
</div>

<div className="flex flex-col items-center justify-center p-8 rounded-2xl border-gradient bg-white/5 hover:bg-white/10 transition-colors group [animation:fadeSlideIn_0.8s_ease-out_0.3s_both] animate-on-scroll animate">
<div className="p-3 rounded-xl bg-green-500/10 text-green-400 mb-4 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-megaphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m3 11 18-5v12L3 14v-3z"></path><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"></path></svg>
</div>
<span className="font-medium text-white text-center">Ad Creatives</span>
</div>

<div className="flex flex-col items-center justify-center p-8 rounded-2xl border-gradient bg-white/5 hover:bg-white/10 transition-colors group [animation:fadeSlideIn_0.8s_ease-out_0.3s_both] animate-on-scroll animate">
<div className="p-3 rounded-xl bg-orange-500/10 text-orange-400 mb-4 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-recycle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5"></path><path d="M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12"></path><path d="m14 16-3 3 3 3"></path><path d="M8.293 13.596 7.196 9.5 3.1 10.598"></path><path d="m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843"></path><path d="m13.378 5 3 3-3 3"></path></svg>
</div>
<span className="font-medium text-white text-center">Content Repurposing</span>
</div>

<div className="flex flex-col items-center justify-center p-8 rounded-2xl border-gradient bg-white/5 hover:bg-white/10 transition-colors group [animation:fadeSlideIn_0.8s_ease-out_0.3s_both] animate-on-scroll animate">
<div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 mb-4 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-clapperboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20.2 6 3 11l-.9-2.4c-.5-1.1-.5-2.4.7-3.1C3.8 4.8 5 5 5.9 6l11.5-3.8c.8-.3 1.8 0 2.2.8.5 1 .3 2-.6 2.6l-1.6.8Z"></path><path d="M2 13v6c0 1.1.9 2 2 2h16a2 2 0 0 0 2-2v-6H2Z"></path><path d="M2 13v-2c0-1.1.9-2 2-2h1l13 4h2c1.1 0 2 .9 2 2v2"></path></svg>
</div>
<span className="font-medium text-white text-center">Motion Graphics</span>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 relative" id="how-it-works">
<div className="rounded-3xl border-gradient p-6 sm:p-10 relative backdrop-blur bg-neutral-900/40" style={{borderRadius: '24px'}}>
<div className="flex flex-col md:flex-row gap-6 items-start md:items-center mb-10 [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll animate">
<h2 className="text-4xl md:text-5xl text-white tracking-tighter">How it works?</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">

<div className="border-gradient rounded-2xl p-6 relative bg-white/5 [animation:fadeSlideIn_0.8s_ease-out_0.2s_both] animate-on-scroll animate">
<div className="absolute -top-3 left-6 inline-flex items-center px-3 py-1 rounded-full border border-white/20 bg-neutral-950 text-xs font-semibold text-white tracking-tight">STEP 1</div>
<div className="mb-4 mt-2 p-3 bg-white/5 w-fit rounded-lg text-white">
<svg className="lucide lucide-file-plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M9 15h6"></path><path d="M12 18v-6"></path></svg>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight mb-2">Create</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Submit your request in our portal or Slack. Attach raw footage and a simple brief.</p>
</div>

<div className="border-gradient rounded-2xl p-6 relative bg-white/5 [animation:fadeSlideIn_0.8s_ease-out_0.3s_both] animate-on-scroll animate">
<div className="absolute -top-3 left-6 inline-flex items-center px-3 py-1 rounded-full border border-white/20 bg-neutral-950 text-xs font-semibold text-white tracking-tight">STEP 2</div>
<div className="mb-4 mt-2 p-3 bg-white/5 w-fit rounded-lg text-white">
<svg className="lucide lucide-users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight mb-2">Match</h3>
<p className="text-sm text-neutral-400 leading-relaxed">We assign the perfect specialist—tech demos go to Eastern European pros, social clips to trend-savvy creators.</p>
</div>

<div className="border-gradient rounded-2xl p-6 relative bg-white/5 [animation:fadeSlideIn_0.8s_ease-out_0.4s_both] animate-on-scroll animate">
<div className="absolute -top-3 left-6 inline-flex items-center px-3 py-1 rounded-full border border-white/20 bg-neutral-950 text-xs font-semibold text-white tracking-tight">STEP 3</div>
<div className="mb-4 mt-2 p-3 bg-white/5 w-fit rounded-lg text-white">
<svg className="lucide lucide-eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight mb-2">Review</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Get your first draft in 48 hours. Unlimited revisions until it's perfect.</p>
</div>

<div className="border-gradient rounded-2xl p-6 relative bg-white/5 [animation:fadeSlideIn_0.8s_ease-out_0.5s_both] animate-on-scroll animate">
<div className="absolute -top-3 left-6 inline-flex items-center px-3 py-1 rounded-full border border-white/20 bg-neutral-950 text-xs font-semibold text-white tracking-tight">STEP 4</div>
<div className="mb-4 mt-2 p-3 bg-white/5 w-fit rounded-lg text-white">
<svg className="lucide lucide-rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.1 4-1 4-1"></path><path d="M12 15v5s3.03-.55 4-2c1.1-1.62 1-4 1-4"></path></svg>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight mb-2">Scale</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Approve and publish. Move to the next task immediately.</p>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
<div className="mb-12 text-center [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll animate">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-white">Why hire when you can subscribe?</h2>
</div>
<div className="overflow-hidden rounded-2xl border-gradient bg-white/5 [animation:fadeSlideIn_0.8s_ease-out_0.2s_both] animate-on-scroll animate">
<div className="overflow-x-auto">
<table className="w-full text-left text-sm comparison-table min-w-[600px]">
<thead className="">
<tr className="bg-white/5">
<th className="font-medium text-neutral-400">Feature</th>
<th className="font-semibold text-white text-lg w-1/3">Novaxenia Subscription</th>
<th className="font-medium text-neutral-400 w-1/3">Traditional Hiring</th>
</tr>
</thead>
<tbody className="">
<tr className="">
<td className="font-medium text-neutral-300">Cost</td>
<td className="text-white font-medium">Fixed monthly fee ($1,495+)</td>
<td className="text-neutral-500">Salary + Benefits + Overhead ($8k+)</td>
</tr>
<tr className="">
<td className="font-medium text-neutral-300">Time to Start</td>
<td className="flex font-medium text-green-600 gap-x-2 gap-y-2 items-center">
<svg className="lucide lucide-check-circle-2" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                Immediate (Today)
              </td>
<td className="text-neutral-500">30-60 Days</td>
</tr>
<tr className="">
<td className="font-medium text-neutral-300">Flexibility</td>
<td className="text-white font-medium">Pause/Cancel anytime</td>
<td className="text-neutral-500">Hard to fire/lay off</td>
</tr>
<tr className="">
<td className="font-medium text-neutral-300">Vetting</td>
<td className="text-white font-medium">Done for you (Top 1%)</td>
<td className="text-neutral-500">You do it yourself</td>
</tr>
<tr className="">
<td className="font-medium text-neutral-300">Management</td>
<td className="text-white font-medium">Zero management</td>
<td className="text-neutral-500">Weekly 1:1s, reviews, HR</td>
</tr>
<tr className="">
<td className="font-medium text-neutral-300">Risk</td>
<td className="text-white font-medium">Zero risk</td>
<td className="text-red-600">Bad hire costs $20k+</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16" id="pricing">
<div className="text-center mb-12 [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll animate">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-white">One subscription. Your hiring problems solved.</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="flex flex-col rounded-3xl border-gradient bg-white/5 p-8 [animation:fadeSlideIn_0.8s_ease-out_0.2s_both] animate-on-scroll animate">
<h3 className="text-lg font-medium text-white">Founder Brand</h3>
<p className="text-sm text-neutral-400 mt-1">Best for: Building Awareness</p>
<div className="mt-4 mb-6">
<span className="text-4xl font-bold tracking-tight text-white">$1,495</span>
<span className="text-neutral-500">/mo</span>
</div>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-center gap-2 text-sm text-neutral-300"><svg className="text-blue-500 w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg> 4 High-Impact Videos/mo</li>
<li className="flex items-center gap-2 text-sm text-neutral-300"><svg className="text-blue-500 w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg> 8 Social Posts/mo</li>
<li className="flex items-center gap-2 text-sm text-neutral-300"><svg className="text-blue-500 w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg> 48h turnaround</li>
</ul>
<button className="hover:bg-white/10 transition-colors text-sm font-semibold text-white bg-white/5 w-full border-white/20 border rounded-full pt-3 pb-3" onclick="window.location.href='https://yq53h8hrmwa.typeform.com/to/Wgjkozwj'" role="button">Get Started</button>
</div>

<div className="flex flex-col rounded-3xl border-gradient bg-white/[0.08] ring-1 ring-blue-500/50 p-8 relative [animation:fadeSlideIn_0.8s_ease-out_0.3s_both] animate-on-scroll animate">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold">Most Popular</div>
<h3 className="text-lg font-medium text-white">Growth Engine</h3>
<p className="text-sm text-neutral-400 mt-1">Best for: Building Trust</p>
<div className="mt-4 mb-6">
<span className="text-4xl font-bold tracking-tight text-white">$2,995</span>
<span className="text-neutral-500">/mo</span>
</div>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-center gap-2 text-sm text-white"><svg className="text-blue-400 w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg> 12 Videos/mo</li>
<li className="flex items-center gap-2 text-sm text-white"><svg className="text-blue-400 w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg> 20 Social Posts/mo</li>
<li className="flex items-center gap-2 text-sm text-white"><svg className="text-blue-400 w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg> Weekly Strategy Sync</li>
</ul>
<button className="hover:bg-neutral-200 transition-colors text-sm font-semibold text-neutral-950 bg-white w-full rounded-full pt-3 pb-3" onclick="window.location.href='https://yq53h8hrmwa.typeform.com/to/Wgjkozwj'" role="button">Get Started</button>
</div>

<div className="flex flex-col rounded-3xl border-gradient bg-white/5 p-8 [animation:fadeSlideIn_0.8s_ease-out_0.4s_both] animate-on-scroll animate">
<h3 className="text-lg font-medium text-white">Scale Suite</h3>
<p className="text-sm text-neutral-400 mt-1">Best for: Building Loyalty</p>
<div className="mt-4 mb-6">
<span className="text-4xl font-bold tracking-tight text-white">$4,995</span>
<span className="text-neutral-500">/mo</span>
</div>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-center gap-2 text-sm text-neutral-300"><svg className="text-blue-500 w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg> 20 Videos/mo</li>
<li className="flex items-center gap-2 text-sm text-neutral-300"><svg className="text-blue-500 w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg> 40 Social Posts/mo</li>
<li className="flex items-center gap-2 text-sm text-neutral-300"><svg className="text-blue-500 w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg> 24h Priority Turnaround</li>
</ul>
<button className="hover:bg-white/10 transition-colors text-sm font-semibold text-white bg-white/5 w-full border-white/20 border rounded-full pt-3 pb-3" onclick="window.location.href='https://yq53h8hrmwa.typeform.com/to/Wgjkozwj'" role="button">Get Started</button>
</div>
</div>
</section>

<section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
<div className="text-center mb-10 [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll animate">
<h2 className="text-3xl font-semibold tracking-tighter text-white">FAQ</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 [animation:fadeSlideIn_0.8s_ease-out_0.2s_both] animate-on-scroll animate">
<div className="space-y-2">
<h4 className="font-semibold text-white">How fast is the turnaround?</h4>
<p className="text-sm text-neutral-400 leading-relaxed">Simple edits (Reels, social clips) take 24-48 hours. Complex projects (product demos) take 2-3 days. You get daily updates.</p>
</div>
<div className="space-y-2">
<h4 className="font-semibold text-white">Can I pause my subscription?</h4>
<p className="text-sm text-neutral-400 leading-relaxed">Yes. If you don't have enough footage for a month, pause your subscription and resume when you're ready. No questions asked.</p>
</div>
<div className="space-y-2">
<h4 className="font-semibold text-white">Who are the editors?</h4>
<p className="text-sm text-neutral-400 leading-relaxed">We hire the top 1% of talent globally. We match you with specialists: Tech-savvy editors for demos, creative editors for ads. You get a dedicated pro, not a random freelancer.</p>
</div>
<div className="space-y-2">
<h4 className="font-semibold text-white">What if I don't like the video?</h4>
<p className="text-sm text-neutral-400 leading-relaxed">Unlimited revisions are included. We'll keep editing until you're 100% happy. If the editor isn't a fit, we'll rematch you instantly for free.</p>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
<div className="relative overflow-hidden rounded-3xl border-gradient bg-blue-600/10 p-12 text-center [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll animate">
<div className="pointer-events-none absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(closest-side,rgba(59,130,246,0.3),transparent)] blur-3xl"></div>
<div className="relative z-10 max-w-2xl mx-auto">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-white mb-4">Ready to scale your content?</h2>
<p className="text-lg text-neutral-300 mb-10">Fill out the form below to get started or book a discovery call.</p>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 text-left">
<div className="space-y-1.5">
<label className="text-xs font-medium text-neutral-400 ml-1">Full Name</label>
<input className="placeholder:text-neutral-500 focus:border-blue-500/50 focus:bg-white/10 focus:outline-none focus:ring-1 focus:ring-blue-500/50 transition-all text-sm text-white bg-white/5 w-full border-white/10 border rounded-lg pt-3 pr-4 pb-3 pl-4" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-neutral-400 ml-1">Work Email</label>
<input className="placeholder:text-neutral-500 focus:border-blue-500/50 focus:bg-white/10 focus:outline-none focus:ring-1 focus:ring-blue-500/50 transition-all text-sm text-white bg-white/5 w-full border-white/10 border rounded-lg pt-3 pr-4 pb-3 pl-4 invalid:border-red-500/50 invalid:text-red-400 invalid:focus:border-red-500 invalid:focus:ring-red-500/50" pattern="[^@\s]+@[^@\s]+\.[^@\s]+" placeholder="john@company.com" title="Please enter a valid email address" type="email"/>
</div>
</div>

<div className="flex flex-col sm:flex-row gap-3 justify-center">
<button className="inline-flex hover:-translate-y-0.5 transition-all sm:w-auto text-sm font-semibold text-neutral-900 bg-white w-full rounded-full pt-3.5 pr-8 pb-3.5 pl-8 shadow gap-x-2 gap-y-2 items-center justify-center cursor-pointer" onclick="window.location.href='https://yq53h8hrmwa.typeform.com/to/Wgjkozwj'" role="button" style={{borderRadius: '9999px'}}>
            Start Posting
          </button>
<button className="inline-flex border-gradient hover:text-white transition-all hover:-translate-y-0.5 sm:w-auto text-sm font-medium text-white/80 bg-neutral-950/50 w-full rounded-full pt-3.5 pr-8 pb-3.5 pl-8 gap-x-2 gap-y-2 items-center justify-center" onclick="window.location.href='https://calendly.com/novaxeniaofficial/30min'" role="button" style={{borderRadius: '9999px'}}>
            Book Discovery Call
          </button>
</div>
</div>
</div>
</section>

<footer className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12">
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="flex items-center gap-2">
<span className="font-semibold text-white text-sm">Novaxenia</span>
</div>
<p className="text-sm text-neutral-500">© 2025 Novaxenia. All rights reserved.</p></div></footer></main>
    </>
  );
}
