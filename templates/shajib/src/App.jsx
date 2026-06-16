import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



/* Scroll Animation Observer */
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

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 bg-[#0F172A]"></div>
<div className="fixed inset-0 z-0 bg-grid-pattern opacity-60"></div>
<div className="fixed top-0 left-0 w-full h-[500px] bg-gradient-to-b from-[#1E293B]/50 to-transparent z-0 pointer-events-none"></div>

<div className="fixed top-0 left-0 w-full z-50 px-6 py-6">
<nav className="max-w-7xl mx-auto flex items-center justify-between bg-[#0F172A]/80 backdrop-blur-md border border-white/5 rounded-full px-6 py-3 shadow-2xl hover:shadow-[0_0_25px_rgba(250,204,21,0.1)] hover:border-[#FACC15]/30 transition-all duration-500 ease-out">
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-[#FACC15] rounded-full shadow-[0_0_10px_#FACC15] animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite]"></div>
<span className="text-sm font-semibold tracking-widest uppercase font-manrope text-white">
            Mindlab
          </span>
</div>
<div className="flex items-center gap-6">
<span className="text-xs font-medium text-slate-400 font-mono hidden md:block">
            Brain Status:
            <span className="text-[#FACC15]">Active</span>
</span>
<div className="h-4 w-[1px] bg-white/10 hidden md:block"></div>
<span className="text-xs font-semibold tracking-wide text-white font-manrope">
            Shajib
            <span className="text-slate-500 mx-1">|</span>
            Systems Architect
          </span>
</div>
</nav>
</div>

<section className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 pt-32 pb-20 overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-20 pointer-events-none">
<svg className="w-full h-full animate-[spin_60s_linear_infinite]" viewbox="0 0 100 100">
<circle cx="50" cy="50" fill="none" r="45" stroke="#FACC15" stroke-dasharray="2 4" strokeWidth="0.2"></circle>
<circle cx="50" cy="50" fill="none" r="35" stroke="white" stroke-dasharray="1 3" strokeWidth="0.1"></circle>
<circle cx="50" cy="50" fill="none" r="25" stroke="#FACC15" strokeWidth="0.1"></circle>
</svg>
</div>
<div className="text-center max-w-5xl mx-auto relative z-20">
<div className="[animation:fadeSlideIn_1s_ease-out_0.5s_both] animate-on-scroll inline-flex items-center gap-2 border border-[#FACC15]/20 bg-[#FACC15]/5 px-3 py-1 rounded-sm mb-8 backdrop-blur-sm animate-float hover:shadow-[0_0_15px_rgba(250,204,21,0.2)] hover:bg-[#FACC15]/10 transition-all duration-300">
<span className="font-mono text-[10px] text-[#FACC15] uppercase tracking-wider">
            // Next Gen Business Intelligence
          </span>
</div>
<h1 className="[animation:fadeSlideIn_1s_ease-out_0.7s_both] animate-on-scroll text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter font-manrope text-white leading-[1.1] mb-8">
          Automate your
          <br/>
          business with
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FACC15] via-white to-[#FACC15] animate-shimmer">
            AI
          </span>
</h1>
<p className="[animation:fadeSlideIn_1s_ease-out_0.9s_both] animate-on-scroll text-xl md:text-2xl text-slate-300 font-light font-manrope max-w-2xl mx-auto leading-relaxed mb-12">
          Build the brain for your Brand.
        </p>
<div className="[animation:fadeSlideIn_1s_ease-out_1.1s_both] animate-on-scroll flex flex-col md:flex-row items-center justify-center gap-6">
<button className="group relative px-8 py-4 bg-[#FACC15] text-[#0F172A] font-semibold font-manrope text-sm tracking-wide overflow-hidden rounded-sm transition-transform active:scale-95 hover:shadow-[0_0_35px_rgba(250,204,21,0.5)] hover:scale-105 hover:-translate-y-1 transition-all duration-300 ease-out">
<div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
<span className="relative flex items-center gap-2">
              Install the System
              <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</span>
</button>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
<span className="text-[10px] font-mono text-slate-500 uppercase">
          Scroll to Initialize
        </span>
<iconify-icon className="text-white" icon="solar:mouse-minimalistic-linear" width="20"></iconify-icon>
</div>
</section>

<section className="relative z-10 py-24 px-6 border-t border-white/5 bg-[#0F172A]">
<div className="max-w-4xl mx-auto [animation:fadeSlideIn_1s_ease-out_0.2s_both] animate-on-scroll">
<div className="flex items-baseline gap-4 mb-8">
<span className="text-[#FACC15] font-mono text-xs">01.</span>
<h2 className="text-3xl font-medium text-white font-manrope tracking-tight">
            The Architect's Note
          </h2>
</div>
<div className="bg-[#1E293B]/30 border border-white/5 p-8 md:p-12 rounded-sm relative backdrop-blur-sm">

<div className="absolute -top-6 -left-4 text-8xl text-[#FACC15]/10 font-serif leading-none">
            “
          </div>
<div className="space-y-6 text-slate-300 font-sans text-lg leading-relaxed">
<p>
              Manual growth is a bottleneck. In a world of infinite leverage,
              your business should not depend on how many hours you can stay
              awake.
            </p>
<p>
              I am
              <span className="text-white font-medium border-b border-[#FACC15]/40">
                Shajib
              </span>
              . I do not just build websites or run ads; I architect digital
              neural networks. I replace manual labor with autonomous agents and
              gut-feeling with algorithmic precision.
            </p>
<p>
              At
              <span className="text-white font-medium">Mindlab</span>
              , we build the brain for your brand. A central nervous system that
              works, learns, and scales while you sleep.
            </p>
</div>
<div className="mt-8 pt-8 border-t border-white/5 flex items-center justify-between">
<div className="flex flex-col">
<span className="text-white font-manrope font-medium text-sm">
                Shajib
              </span>
<span className="text-slate-500 text-xs font-mono mt-1">
                Lead Architect, Mindlab
              </span>
</div>
<iconify-icon className="text-[#FACC15]/40 text-3xl" icon="solar:cpu-bolt-linear"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-32 px-6">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 [animation:fadeSlideIn_1s_ease-out_0.2s_both] animate-on-scroll">
<div>
<div className="flex items-baseline gap-4 mb-2">
<span className="text-[#FACC15] font-mono text-xs">02.</span>
<h2 className="text-3xl md:text-4xl font-medium text-white font-manrope tracking-tight">
                System Protocols
              </h2>
</div>
<p className="text-slate-400 font-sans max-w-md">
              Four pillars of autonomous business growth.
            </p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="group relative bg-[#1E293B]/20 border border-white/5 p-8 hover:border-[#FACC15]/30 transition-colors duration-500 [animation:fadeSlideIn_1s_ease-out_0.3s_both] animate-on-scroll hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(250,204,21,0.15)] hover:border-[#FACC15]/40 hover:bg-[#1E293B]/60 transition-all">
<div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
<iconify-icon className="text-[#FACC15]" icon="solar:arrow-right-up-linear" width="24"></iconify-icon>
</div>
<div className="h-12 w-12 rounded-sm bg-[#FACC15]/10 flex items-center justify-center mb-6 text-[#FACC15]">
<iconify-icon className="group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500" icon="solar:user-hand-up-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white font-manrope mb-3">
              AI Agents
            </h3>
<p className="text-sm text-slate-400 font-sans leading-relaxed mb-6">
              Deploy digital workers that handle support, sales, and outreach
              24/7. These intelligent agents mimic human nuance but operate at
              machine speed.
            </p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-xs font-mono text-slate-500">
<span className="w-1 h-1 bg-[#FACC15] rounded-full"></span>
                24/7 Customer Support
              </li>
<li className="flex items-center gap-2 text-xs font-mono text-slate-500">
<span className="w-1 h-1 bg-[#FACC15] rounded-full"></span>
                Autonomous Sales Reps
              </li>
</ul>
</div>

<div className="group relative bg-[#1E293B]/20 border border-white/5 p-8 hover:border-[#FACC15]/30 transition-colors duration-500 [animation:fadeSlideIn_1s_ease-out_0.4s_both] animate-on-scroll hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(250,204,21,0.15)] hover:border-[#FACC15]/40 hover:bg-[#1E293B]/60 transition-all">
<div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
<iconify-icon className="text-[#FACC15]" icon="solar:arrow-right-up-linear" width="24"></iconify-icon>
</div>
<div className="h-12 w-12 rounded-sm bg-[#FACC15]/10 flex items-center justify-center mb-6 text-[#FACC15]">
<iconify-icon className="group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500" icon="solar:graph-up-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white font-manrope mb-3">
              AI Automation Systems
            </h3>
<p className="text-sm text-slate-400 font-sans leading-relaxed mb-6">
              End-to-end operational logic connecting your apps. We build
              self-healing workflows that eliminate manual data entry and
              repetitive tasks.
            </p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-xs font-mono text-slate-500">
<span className="w-1 h-1 bg-[#FACC15] rounded-full"></span>
                Cross-Platform Integration
              </li>
<li className="flex items-center gap-2 text-xs font-mono text-slate-500">
<span className="w-1 h-1 bg-[#FACC15] rounded-full"></span>
                Error-Correction Logic
              </li>
</ul>
</div>

<div className="group relative bg-[#1E293B]/20 border border-white/5 p-8 hover:border-[#FACC15]/30 transition-colors duration-500 [animation:fadeSlideIn_1s_ease-out_0.5s_both] animate-on-scroll hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(250,204,21,0.15)] hover:border-[#FACC15]/40 hover:bg-[#1E293B]/60 transition-all">
<div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
<iconify-icon className="text-[#FACC15]" icon="solar:arrow-right-up-linear" width="24"></iconify-icon>
</div>
<div className="h-12 w-12 rounded-sm bg-[#FACC15]/10 flex items-center justify-center mb-6 text-[#FACC15]">
<iconify-icon className="group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500" icon="solar:monitor-smartphone-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white font-manrope mb-3">
              Web Building
            </h3>
<p className="text-sm text-slate-400 font-sans leading-relaxed mb-6">
              High-performance digital headquarters built for conversion. We
              engineer fast, responsive, and SEO-optimized web architectures
              that serve as the foundation of your growth.
            </p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-xs font-mono text-slate-500">
<span className="w-1 h-1 bg-[#FACC15] rounded-full"></span>
                Next.js / Tailwind Architecture
              </li>
<li className="flex items-center gap-2 text-xs font-mono text-slate-500">
<span className="w-1 h-1 bg-[#FACC15] rounded-full"></span>
                Conversion Rate Optimization
              </li>
</ul>
</div>

<div className="group relative bg-[#1E293B]/20 border border-white/5 p-8 hover:border-[#FACC15]/30 transition-colors duration-500 [animation:fadeSlideIn_1s_ease-out_0.6s_both] animate-on-scroll hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(250,204,21,0.15)] hover:border-[#FACC15]/40 hover:bg-[#1E293B]/60 transition-all">
<div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
<iconify-icon className="text-[#FACC15]" icon="solar:arrow-right-up-linear" width="24"></iconify-icon>
</div>
<div className="h-12 w-12 rounded-sm bg-[#FACC15]/10 flex items-center justify-center mb-6 text-[#FACC15]">
<iconify-icon className="group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500" icon="solar:palette-round-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white font-manrope mb-3">
              Brand Redesign with AI
            </h3>
<p className="text-sm text-slate-400 font-sans leading-relaxed mb-6">
              Accelerated identity evolution. We leverage generative AI models
              to rapidly iterate and define visual languages that resonate with
              your market.
            </p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-xs font-mono text-slate-500">
<span className="w-1 h-1 bg-[#FACC15] rounded-full"></span>
                Generative Asset Creation
              </li>
<li className="flex items-center gap-2 text-xs font-mono text-slate-500">
<span className="w-1 h-1 bg-[#FACC15] rounded-full"></span>
                Identity Systems
              </li>
</ul>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-20 px-6 bg-[#0F172A] border-y border-white/5">
<div className="max-w-7xl mx-auto text-center mb-16 [animation:fadeSlideIn_1s_ease-out_0.2s_both] animate-on-scroll">
<span className="text-[#FACC15] font-mono text-xs uppercase tracking-widest">
          Methodology
        </span>
<h2 className="text-3xl font-medium text-white font-manrope mt-3">
          The Blueprint
        </h2>
</div>
<div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 [animation:fadeSlideIn_1s_ease-out_0.4s_both] animate-on-scroll">

<div className="relative p-6 border-l md:border-l-0 md:border-t border-white/10 group hover:border-[#FACC15] transition-colors duration-500 hover:bg-[#FACC15]/5 hover:border-[#FACC15]/40 hover:shadow-[0_0_15px_rgba(250,204,21,0.1)] hover:-translate-y-1 transition-all duration-300 cursor-crosshair">
<span className="text-4xl font-bold text-slate-800 absolute top-4 right-4 group-hover:text-[#FACC15]/10 transition-colors">
            01
          </span>
<div className="mb-4 text-[#FACC15]">
<iconify-icon icon="solar:magnifer-linear" width="24"></iconify-icon>
</div>
<h4 className="text-white font-medium mb-2 font-manrope">Audit</h4>
<p className="text-xs text-slate-400 font-sans leading-relaxed">
            Deep dive into current bottlenecks and manual fail points.
          </p>
</div>

<div className="relative p-6 border-l md:border-l-0 md:border-t border-white/10 group hover:border-[#FACC15] transition-colors duration-500 hover:bg-[#FACC15]/5 hover:border-[#FACC15]/40 hover:shadow-[0_0_15px_rgba(250,204,21,0.1)] hover:-translate-y-1 transition-all duration-300 cursor-crosshair">
<span className="text-4xl font-bold text-slate-800 absolute top-4 right-4 group-hover:text-[#FACC15]/10 transition-colors">
            02
          </span>
<div className="mb-4 text-[#FACC15]">
<iconify-icon icon="solar:sitemap-linear" width="24"></iconify-icon>
</div>
<h4 className="text-white font-medium mb-2 font-manrope">Architect</h4>
<p className="text-xs text-slate-400 font-sans leading-relaxed">
            Designing the custom neural infrastructure for your brand.
          </p>
</div>

<div className="relative p-6 border-l md:border-l-0 md:border-t border-white/10 group hover:border-[#FACC15] transition-colors duration-500 hover:bg-[#FACC15]/5 hover:border-[#FACC15]/40 hover:shadow-[0_0_15px_rgba(250,204,21,0.1)] hover:-translate-y-1 transition-all duration-300 cursor-crosshair">
<span className="text-4xl font-bold text-slate-800 absolute top-4 right-4 group-hover:text-[#FACC15]/10 transition-colors">
            03
          </span>
<div className="mb-4 text-[#FACC15]">
<iconify-icon icon="solar:cpu-linear" width="24"></iconify-icon>
</div>
<h4 className="text-white font-medium mb-2 font-manrope">Automate</h4>
<p className="text-xs text-slate-400 font-sans leading-relaxed">
            Deploying agents and workflows to execute without oversight.
          </p>
</div>

<div className="relative p-6 border-l md:border-l-0 md:border-t border-white/10 group hover:border-[#FACC15] transition-colors duration-500 hover:bg-[#FACC15]/5 hover:border-[#FACC15]/40 hover:shadow-[0_0_15px_rgba(250,204,21,0.1)] hover:-translate-y-1 transition-all duration-300 cursor-crosshair">
<span className="text-4xl font-bold text-slate-800 absolute top-4 right-4 group-hover:text-[#FACC15]/10 transition-colors">
            04
          </span>
<div className="mb-4 text-[#FACC15]">
<iconify-icon icon="solar:rocket-2-linear" width="24"></iconify-icon>
</div>
<h4 className="text-white font-medium mb-2 font-manrope">Scale</h4>
<p className="text-xs text-slate-400 font-sans leading-relaxed">
            Vertical growth powered by validated data loops.
          </p>
</div>
</div>
</section>

<section className="relative z-10 py-32 px-6">
<div className="max-w-7xl mx-auto">
<div className="flex items-baseline gap-4 mb-16 [animation:fadeSlideIn_1s_ease-out_0.2s_both] animate-on-scroll">
<span className="text-[#FACC15] font-mono text-xs">03.</span>
<h2 className="text-3xl md:text-4xl font-medium text-white font-manrope tracking-tight">
            Active Neural Networks
          </h2>
</div>
<div className="space-y-24">

<div className="grid lg:grid-cols-2 gap-12 items-center group [animation:fadeSlideIn_1s_ease-out_0.3s_both] animate-on-scroll hover:bg-white/[0.02] hover:shadow-2xl hover:shadow-black/50 p-8 -m-8 rounded-3xl transition-all duration-500">

<div className="order-2 lg:order-1 relative bg-[#1E293B]/50 border border-white/5 aspect-video overflow-hidden rounded-sm group-hover:border-[#FACC15]/30 transition-all">
<div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-800 via-[#0F172A] to-[#0F172A]">
<div className="grid grid-cols-3 gap-2 opacity-50">
<div className="w-16 h-20 border border-white/10 rounded-sm animate-pulse"></div>
<div className="w-16 h-20 border border-[#FACC15]/20 bg-[#FACC15]/5 rounded-sm flex items-center justify-center text-[#FACC15]">
<iconify-icon icon="solar:chat-round-line-linear" width="20"></iconify-icon>
</div>
<div className="w-16 h-20 border border-white/10 rounded-sm animate-pulse" style={{animationDelay: '0.2s'}}></div>
</div>
</div>
<div className="absolute bottom-4 left-4 font-mono text-[10px] text-[#FACC15]">
                Agent Status: ONLINE
              </div>
</div>

<div className="order-1 lg:order-2">
<h3 className="text-2xl font-medium text-white font-manrope mb-4">
                Autonomous Customer Service Agent
              </h3>
<p className="text-slate-400 font-sans leading-relaxed mb-6">
                Constructed a custom AI agent for a logistics company. The brain
                handles 90% of inbound support tickets, tracking orders and
                resolving claims without human intervention, reducing response
                time from 4 hours to 30 seconds.
              </p>
<div className="flex flex-wrap gap-3 mb-8">
<span className="px-2 py-1 border border-white/10 text-[10px] font-mono text-slate-300">
                  Custom LLM
                </span>
<span className="px-2 py-1 border border-white/10 text-[10px] font-mono text-slate-300">
                  OpenAI API
                </span>
<span className="px-2 py-1 border border-white/10 text-[10px] font-mono text-slate-300">
                  Zendesk Integration
                </span>
</div>
<a className="inline-flex items-center gap-2 text-[#FACC15] text-sm hover:underline underline-offset-4" href="#">
                View Architecture
                <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="grid lg:grid-cols-2 gap-12 items-center group [animation:fadeSlideIn_1s_ease-out_0.4s_both] animate-on-scroll hover:bg-white/[0.02] hover:shadow-2xl hover:shadow-black/50 p-8 -m-8 rounded-3xl transition-all duration-500">

<div className="">
<h3 className="text-2xl font-medium text-white font-manrope mb-4">
                E-Commerce Brand Overhaul
              </h3>
<p className="text-slate-400 font-sans leading-relaxed mb-6">
                A complete brand redesign and web build for a DTC fashion label.
                Leveraged generative AI to create a unique visual identity
                system, implemented into a high-speed custom web build optimized
                for automated sales funnels.
              </p>
<div className="flex flex-wrap gap-3 mb-8">
<span className="px-2 py-1 border border-white/10 text-[10px] font-mono text-slate-300">
                  Midjourney V6
                </span>
<span className="px-2 py-1 border border-white/10 text-[10px] font-mono text-slate-300">
                  Web Development
                </span>
<span className="px-2 py-1 border border-white/10 text-[10px] font-mono text-slate-300">
                  Shopify Headless
                </span>
</div>
<a className="inline-flex items-center gap-2 text-[#FACC15] text-sm hover:underline underline-offset-4" href="#">
                View Architecture
                <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="relative bg-[#1E293B]/50 border border-white/5 aspect-video overflow-hidden rounded-sm group-hover:border-[#FACC15]/30 transition-all">
<div className="absolute inset-0 flex items-center justify-center">
<svg className="w-full h-full opacity-20" viewbox="0 0 400 200">
<path className="animate-pulse" d="M50 100 Q 200 50 350 100" fill="none" stroke="#FACC15" stroke-dasharray="4 4" strokeWidth="1"></path>
<circle cx="50" cy="100" fill="#fff" r="4"></circle>
<circle cx="350" cy="100" fill="#FACC15" r="4"></circle>
</svg>
</div>
<div className="absolute bottom-4 right-4 font-mono text-[10px] text-slate-500">
                Processing Nodes: 14
              </div>
</div>
</div>
</div>
</div>
</section>

<footer className="relative z-10 pt-32 pb-12 px-6 border-t border-white/5 bg-[#0F172A]">
<div className="max-w-4xl mx-auto text-center mb-20 [animation:fadeSlideIn_1s_ease-out_0.2s_both] animate-on-scroll">
<h2 className="text-4xl md:text-5xl font-medium text-white font-manrope tracking-tight mb-8">
          Ready to install the
          <span className="text-[#FACC15]">brain</span>
          into your brand?
        </h2>
<p className="text-slate-400 mb-12 max-w-lg mx-auto">
          I accept a limited number of architectural commissions per quarter.
          Serious inquiries only.
        </p>
<form className="max-w-md mx-auto space-y-4 text-left">
<div className="group relative">
<input className="peer w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-transparent focus:border-[#FACC15] focus:outline-none transition-colors font-sans focus:shadow-[0_10px_30px_-10px_rgba(250,204,21,0.2)] focus:bg-[#1E293B]/50 transition-all duration-300" placeholder=" " required="" type="email"/>
<label className="absolute left-0 -top-3 text-[10px] text-[#FACC15] uppercase tracking-wider font-medium transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 peer-placeholder-shown:top-3 peer-focus:-top-3 peer-focus:text-[10px] peer-focus:text-[#FACC15]">
              Enter Business Email
            </label>
</div>
<div className="group relative">
<textarea className="peer w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-transparent focus:border-[#FACC15] focus:outline-none transition-colors font-sans resize-none focus:shadow-[0_10px_30px_-10px_rgba(250,204,21,0.2)] focus:bg-[#1E293B]/50 transition-all duration-300" placeholder=" " rows="1"></textarea>
<label className="absolute left-0 -top-3 text-[10px] text-[#FACC15] uppercase tracking-wider font-medium transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 peer-placeholder-shown:top-3 peer-focus:-top-3 peer-focus:text-[10px] peer-focus:text-[#FACC15]">
              System Requirements (Message)
            </label>
</div>
<div className="pt-6">
<button className="w-full bg-[#FACC15] hover:bg-[#eab308] text-[#0F172A] font-bold py-4 px-6 rounded-sm transition-colors font-manrope tracking-wide uppercase text-xs flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(250,204,21,0.6)] hover:scale-[1.02] transition-all duration-300 active:scale-95" type="button">
              Initiate Sequence
              <iconify-icon icon="solar:plain-linear"></iconify-icon>
</button>
</div>
</form>
</div>
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between pt-12 border-t border-white/5 gap-6">
<div className="flex items-center gap-2">
<div className="w-3 h-3 bg-[#FACC15] rounded-sm"></div>
<span className="text-lg font-bold tracking-tight text-white font-manrope">
            Mindlab
          </span>
</div>
<p className="text-xs text-slate-500 font-mono">
          © 2026 Mindlab | Architected by Shajib
        </p>
<div className="flex gap-6">
<a className="text-slate-500 hover:text-[#FACC15] transition-colors" href="#">
<iconify-icon icon="solar:brand-x-linear" width="18"></iconify-icon>
</a>
<a className="text-slate-500 hover:text-[#FACC15] transition-colors" href="#">
<iconify-icon icon="solar:brand-instagram-linear" width="18"></iconify-icon>
</a>
</div>
</div>
</footer>

    </>
  );
}
