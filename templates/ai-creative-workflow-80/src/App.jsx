import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
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
}, { threshold: 0.1, rootMargin: "0px 0px -5% 0px" });
document.querySelectorAll(".animate-on-scroll").forEach((el) => {
observer.observe(el);
});
let lastScroll = 0;
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
const currentScroll = window.pageYOffset;
if (currentScroll > lastScroll && currentScroll > 100) {
nav.classList.add('nav-scroll-hidden');
} else {
nav.classList.remove('nav-scroll-hidden');
}
lastScroll = currentScroll;
});
});



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
      

<div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
<div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[80%] h-[60%] bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.06),transparent_70%)] blur-3xl"></div>
</div>

<nav className="fixed z-50 top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl [animation:fadeSlideIn_0.8s_ease-out_0.1s_both]">
<div className="glass-panel rounded-full px-4 py-2 flex items-center justify-between shadow-2xl">
<div className="flex items-center gap-8 pl-2">
<a className="text-white font-medium text-lg tracking-tight flex items-center gap-2" href="#">
<iconify-icon icon="solar:box-minimalistic-linear" strokeWidth="1.5" width="24"></iconify-icon>
          LoveArt.ai
        </a>
<div className="hidden md:flex items-center gap-6 text-sm font-normal">
<a className="text-zinc-400 hover:text-white transition-colors" href="#product">Product</a>
<a className="text-zinc-400 hover:text-white transition-colors" href="#workflow">Workflow</a>
<a className="text-zinc-400 hover:text-white transition-colors" href="#use-cases">Use Cases</a>
<a className="text-zinc-400 hover:text-white transition-colors" href="#faq">FAQ</a>
<a className="text-zinc-400 hover:text-white transition-colors" href="#waitlist">Waitlist</a>
</div>
</div>
<a className="hidden sm:inline-flex items-center justify-center h-9 px-5 rounded-full bg-white text-black text-sm font-medium hover:bg-zinc-200 transition-colors" href="#waitlist">
        Request Founding Access
      </a>
</div>
</nav>

<section className="relative pt-40 pb-20 md:pt-52 md:pb-32 px-6 flex flex-col items-center text-center max-w-5xl mx-auto">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-xs text-zinc-300 font-medium mb-8 animate-on-scroll">
<span className="inline-block w-1.5 h-1.5 rounded-full bg-zinc-300"></span>
      Launching Soon
    </div>
<h1 className="text-5xl md:text-7xl text-white font-medium tracking-tight leading-[1.1] mb-6 max-w-4xl animate-on-scroll" style={{animationDelay: '0.1s'}}>
      Create on-brand visuals without the usual AI chaos.
    </h1>
<p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-3xl font-light leading-relaxed animate-on-scroll" style={{animationDelay: '0.2s'}}>
      LoveArt.ai is the business-first AI creative workflow platform for founders, marketers, creators, agencies, and lean teams who need branded visuals fast. Build your brand context once, start projects with purpose, generate stronger concepts, refine faster, and reuse assets that actually fit your business.
    </p>
<div className="flex flex-col sm:flex-row items-center gap-4 mb-6 animate-on-scroll" style={{animationDelay: '0.3s'}}>
<a className="shimmer-button inline-flex items-center justify-center h-12 px-8 rounded-full text-base font-medium w-full sm:w-auto shadow-[0_0_20px_rgba(255,255,255,0.1)]" href="#waitlist">
        Request Founding Access
      </a>
<a className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-white/[0.03] border border-white/10 text-white text-base font-medium hover:bg-white/[0.08] transition-colors w-full sm:w-auto" href="#workflow">
        Explore the Workflow
      </a>
</div>
<p className="text-sm text-zinc-500 animate-on-scroll" style={{animationDelay: '0.4s'}}>
      Early access is opening soon. Join the waitlist and help shape what ships first.
    </p>

<div className="w-full mt-20 animate-on-scroll" style={{animationDelay: '0.5s'}}>
<div className="glass-panel rounded-2xl p-2 border-gradient shadow-[0_0_50px_rgba(0,0,0,0.5)]">
<div className="bg-[#0A0A0A] rounded-xl border border-white/5 overflow-hidden flex flex-col md:flex-row h-[500px]">

<div className="hidden md:flex flex-col w-64 border-r border-white/5 p-4 bg-white/[0.01]">
<div className="text-xs font-medium text-zinc-500 mb-4 uppercase tracking-wider">Brand Kit</div>
<div className="space-y-2 mb-8">
<div className="h-8 rounded flex items-center px-3 bg-white/5 text-sm text-white border border-white/10">Acme Corp Guidelines</div>
<div className="h-8 rounded flex items-center px-3 text-sm text-zinc-500 hover:bg-white/5 transition-colors">Color Palette</div>
<div className="h-8 rounded flex items-center px-3 text-sm text-zinc-500 hover:bg-white/5 transition-colors">Typography</div>
</div>
<div className="text-xs font-medium text-zinc-500 mb-4 uppercase tracking-wider">Projects</div>
<div className="space-y-2">
<div className="h-8 rounded flex items-center px-3 text-sm text-zinc-500 hover:bg-white/5 transition-colors">Q3 Campaign Ads</div>
<div className="h-8 rounded flex items-center px-3 text-sm text-zinc-500 hover:bg-white/5 transition-colors">Social Templates</div>
</div>
</div>

<div className="flex-1 flex flex-col p-6 relative">
<div className="flex justify-between items-center mb-6">
<div className="text-sm font-medium text-white flex items-center gap-2">
<iconify-icon icon="solar:folder-with-files-linear" width="18"></iconify-icon>
                Q3 Campaign Ads / Hero Image
              </div>
<div className="h-8 w-24 rounded-full bg-white/10 flex items-center justify-center text-xs text-white">Generate</div>
</div>
<div className="flex-1 rounded-lg border border-white/10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] relative flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-tr from-zinc-900 via-transparent to-zinc-900 opacity-50"></div>
<div className="w-64 h-64 border border-white/10 bg-white/[0.02] rounded-lg shadow-2xl flex items-center justify-center relative backdrop-blur-sm">
<iconify-icon className="text-zinc-700" icon="solar:gallery-wide-linear" width="48"></iconify-icon>
<div className="absolute bottom-4 left-4 right-4 h-1 bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-zinc-400 w-2/3 rounded-full"></div>
</div>
</div>
</div>
<div className="h-12 mt-6 rounded-lg bg-white/5 border border-white/10 flex items-center px-4 gap-3 text-sm text-zinc-500">
<iconify-icon icon="solar:magic-stick-3-linear" width="18"></iconify-icon>
              Refine the lighting to match Acme Corp brand colors...
            </div>
</div>

<div className="hidden lg:flex flex-col w-72 border-l border-white/5 p-4 bg-white/[0.01]">
<div className="text-xs font-medium text-zinc-500 mb-4 uppercase tracking-wider">Refinement</div>
<div className="space-y-4">
<div>
<div className="flex justify-between text-xs text-zinc-400 mb-2"><span>Style Adherence</span><span>Strong</span></div>
<div className="h-1.5 bg-white/10 rounded-full"><div className="h-full bg-zinc-300 w-[85%] rounded-full"></div></div>
</div>
<div className="grid grid-cols-2 gap-2 mt-4">
<div className="h-20 rounded border border-white/10 bg-white/5 flex items-center justify-center text-zinc-600"><iconify-icon icon="solar:history-linear"></iconify-icon></div>
<div className="h-20 rounded border border-white/10 bg-white/5 flex items-center justify-center text-zinc-600"><iconify-icon icon="solar:history-linear"></iconify-icon></div>
<div className="h-20 rounded border border-white/20 bg-white/10 flex items-center justify-center text-zinc-300 ring-1 ring-white/30"><iconify-icon icon="solar:check-circle-linear"></iconify-icon></div>
<div className="h-20 rounded border border-white/10 bg-white/5 flex items-center justify-center text-zinc-600"><iconify-icon icon="solar:history-linear"></iconify-icon></div>
</div>
<button className="w-full h-9 mt-4 rounded bg-white/10 text-xs text-white hover:bg-white/20 transition-colors">Save to Asset Library</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-[#080808] py-6 animate-on-scroll">
<div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-center gap-x-12 gap-y-4 text-sm font-medium text-zinc-400 tracking-tight">
<div className="flex items-center gap-2"><iconify-icon icon="solar:palette-linear" width="18"></iconify-icon> Brand Kits</div>
<div className="flex items-center gap-2"><iconify-icon icon="solar:folder-open-linear" width="18"></iconify-icon> Project Workflows</div>
<div className="flex items-center gap-2"><iconify-icon icon="solar:magic-stick-linear" width="18"></iconify-icon> Guided AI Generation</div>
<div className="flex items-center gap-2"><iconify-icon icon="solar:tuning-square-2-linear" width="18"></iconify-icon> Faster Refinement</div>
<div className="flex items-center gap-2"><iconify-icon icon="solar:database-linear" width="18"></iconify-icon> Reusable Assets</div>
</div>
</section>

<section className="py-24 px-6 max-w-6xl mx-auto animate-on-scroll">
<div className="text-center mb-16">
<h3 className="text-sm font-medium text-zinc-500 uppercase tracking-widest mb-3">Why this matters</h3>
<h2 className="text-3xl md:text-5xl text-white font-medium tracking-tight mb-6 max-w-3xl mx-auto">
        Most AI image tools create more work than they remove.
      </h2>
<p className="text-lg text-zinc-400 font-light max-w-2xl mx-auto">
        You can generate endless images. That does not mean you get assets you can actually use. Prompts drift. Styles change. Files get scattered. Teams waste hours recreating the same visual direction over and over.
      </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="glass-panel p-8 rounded-2xl border-gradient">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 mb-6">
<iconify-icon className="text-zinc-300" icon="solar:refresh-circle-linear" width="20"></iconify-icon>
</div>
<h4 className="text-xl text-white font-medium tracking-tight mb-3">Prompt roulette</h4>
<p className="text-sm text-zinc-400 font-light leading-relaxed">
          Too much time disappears into rewrites, rerolls, and almost-right outputs.
        </p>
</div>
<div className="glass-panel p-8 rounded-2xl border-gradient">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 mb-6">
<iconify-icon className="text-zinc-300" icon="solar:brain-linear" width="20"></iconify-icon>
</div>
<h4 className="text-xl text-white font-medium tracking-tight mb-3">No brand memory</h4>
<p className="text-sm text-zinc-400 font-light leading-relaxed">
          Most tools forget your visual rules the moment you move to the next idea.
        </p>
</div>
<div className="glass-panel p-8 rounded-2xl border-gradient">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 mb-6">
<iconify-icon className="text-zinc-300" icon="solar:link-broken-linear" width="20"></iconify-icon>
</div>
<h4 className="text-xl text-white font-medium tracking-tight mb-3">Disconnected workflow</h4>
<p className="text-sm text-zinc-400 font-light leading-relaxed">
          Generate in one place. Edit in another. Save somewhere else. Then repeat the whole mess next week.
        </p>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03),transparent_50%)] animate-on-scroll">
<div className="max-w-4xl mx-auto text-center">
<h3 className="text-sm font-medium text-zinc-500 uppercase tracking-widest mb-3">The better way</h3>
<h2 className="text-4xl md:text-6xl text-white font-medium tracking-tight mb-8">
        LoveArt.ai gives your creative workflow a memory.
      </h2>
<p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed mb-6">
        Set your brand direction once. Start projects with real context. Generate better options, refine the strongest ones, and keep the assets worth reusing. The result is a faster, cleaner path from rough idea to on-brand business visual.
      </p>
<p className="text-base text-zinc-300 font-medium tracking-tight">
        Less starting from scratch. More visuals you can actually publish.
      </p>
</div>
</section>

<section className="py-24 px-6 max-w-6xl mx-auto animate-on-scroll" id="workflow">
<div className="mb-16">
<h3 className="text-sm font-medium text-zinc-500 uppercase tracking-widest mb-3">How it works</h3>
<h2 className="text-3xl md:text-5xl text-white font-medium tracking-tight">
        A simpler path from brief to usable asset.
      </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">

<div className="hidden md:block absolute top-6 left-[10%] right-[10%] h-[1px] bg-white/10 z-0"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-full bg-[#0A0A0A] border border-white/20 flex items-center justify-center text-white font-medium mb-6 mx-auto md:mx-0">1</div>
<h4 className="text-lg text-white font-medium tracking-tight mb-2 text-center md:text-left">Create your Brand Kit</h4>
<p className="text-sm text-zinc-400 font-light leading-relaxed text-center md:text-left">
          Save your visual direction, references, and brand context once so you stop repeating yourself every session.
        </p>
</div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-full bg-[#0A0A0A] border border-white/20 flex items-center justify-center text-white font-medium mb-6 mx-auto md:mx-0">2</div>
<h4 className="text-lg text-white font-medium tracking-tight mb-2 text-center md:text-left">Start a Project</h4>
<p className="text-sm text-zinc-400 font-light leading-relaxed text-center md:text-left">
          Tell LoveArt.ai what you need to create, where it will be used, and what the asset needs to achieve.
        </p>
</div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-full bg-[#0A0A0A] border border-white/20 flex items-center justify-center text-white font-medium mb-6 mx-auto md:mx-0">3</div>
<h4 className="text-lg text-white font-medium tracking-tight mb-2 text-center md:text-left">Generate and refine</h4>
<p className="text-sm text-zinc-400 font-light leading-relaxed text-center md:text-left">
          Create stronger concepts, iterate faster, and improve good outputs without restarting from zero.
        </p>
</div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-full bg-[#0A0A0A] border border-white/20 flex items-center justify-center text-white font-medium mb-6 mx-auto md:mx-0">4</div>
<h4 className="text-lg text-white font-medium tracking-tight mb-2 text-center md:text-left">Save and reuse what works</h4>
<p className="text-sm text-zinc-400 font-light leading-relaxed text-center md:text-left">
          Keep approved assets organized so your best creative direction becomes easier to repeat and scale.
        </p>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-[#050505] animate-on-scroll" id="product">
<div className="max-w-6xl mx-auto">
<div className="mb-16 md:w-2/3">
<h3 className="text-sm font-medium text-zinc-500 uppercase tracking-widest mb-3">Built for real brand work</h3>
<h2 className="text-3xl md:text-5xl text-white font-medium tracking-tight">
          A workflow system, not another random generator.
        </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-4">

<div className="md:col-span-8 glass-panel rounded-2xl p-8 border-gradient flex flex-col justify-end min-h-[300px] relative overflow-hidden group">
<div className="absolute top-8 right-8 text-white/10 group-hover:text-white/20 transition-colors"><iconify-icon icon="solar:palette-linear" width="80"></iconify-icon></div>
<h4 className="text-2xl text-white font-medium tracking-tight mb-3">Brand Kits</h4>
<p className="text-base text-zinc-400 font-light max-w-md">
            Give your visuals a foundation with reusable brand context, style direction, references, and creative guardrails.
          </p>
</div>

<div className="md:col-span-4 glass-panel rounded-2xl p-8 border-gradient flex flex-col justify-end min-h-[300px] relative overflow-hidden group">
<div className="absolute top-8 right-8 text-white/10 group-hover:text-white/20 transition-colors"><iconify-icon icon="solar:folder-with-files-linear" width="60"></iconify-icon></div>
<h4 className="text-xl text-white font-medium tracking-tight mb-3">Projects</h4>
<p className="text-sm text-zinc-400 font-light">
            Keep campaigns, concepts, and asset goals organized instead of buried inside one-off prompts.
          </p>
</div>

<div className="md:col-span-4 glass-panel rounded-2xl p-8 border-gradient flex flex-col justify-end min-h-[300px] relative overflow-hidden group">
<div className="absolute top-8 right-8 text-white/10 group-hover:text-white/20 transition-colors"><iconify-icon icon="solar:magic-stick-linear" width="60"></iconify-icon></div>
<h4 className="text-xl text-white font-medium tracking-tight mb-3">Guided Studio</h4>
<p className="text-sm text-zinc-400 font-light">
            Move from idea to output with a cleaner workflow built for business visuals, not novelty generations.
          </p>
</div>

<div className="md:col-span-8 glass-panel rounded-2xl p-8 border-gradient flex flex-col justify-end min-h-[300px] relative overflow-hidden group">
<div className="absolute top-8 right-8 text-white/10 group-hover:text-white/20 transition-colors"><iconify-icon icon="solar:tuning-square-2-linear" width="80"></iconify-icon></div>
<h4 className="text-2xl text-white font-medium tracking-tight mb-3">Smarter Refinement</h4>
<p className="text-base text-zinc-400 font-light max-w-md">
            Improve, adjust, and evolve strong outputs without throwing everything away and starting over.
          </p>
</div>

<div className="md:col-span-12 glass-panel rounded-2xl p-8 border-gradient flex flex-col justify-end min-h-[250px] relative overflow-hidden group">
<div className="absolute top-1/2 -translate-y-1/2 right-12 text-white/5 group-hover:text-white/10 transition-colors"><iconify-icon icon="solar:database-linear" width="120"></iconify-icon></div>
<h4 className="text-2xl text-white font-medium tracking-tight mb-3 z-10">Reusable Asset Library</h4>
<p className="text-base text-zinc-400 font-light max-w-xl z-10">
            Save the visuals worth keeping and turn winning creative directions into repeatable assets.
          </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-6xl mx-auto animate-on-scroll" id="use-cases">
<div className="mb-16 text-center">
<h3 className="text-sm font-medium text-zinc-500 uppercase tracking-widest mb-3">What you can create</h3>
<h2 className="text-3xl md:text-5xl text-white font-medium tracking-tight">
        The kinds of visuals teams actually need.
      </h2>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="p-6 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors cursor-default">
<h4 className="text-lg text-white font-medium tracking-tight mb-2">Ad creatives</h4>
<p className="text-sm text-zinc-400 font-light leading-relaxed">Build stronger visual directions for paid campaigns without burning hours on prompt roulette.</p>
</div>
<div className="p-6 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors cursor-default">
<h4 className="text-lg text-white font-medium tracking-tight mb-2">Social content</h4>
<p className="text-sm text-zinc-400 font-light leading-relaxed">Create branded visuals for ongoing content without reinventing your look every week.</p>
</div>
<div className="p-6 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors cursor-default">
<h4 className="text-lg text-white font-medium tracking-tight mb-2">Landing page visuals</h4>
<p className="text-sm text-zinc-400 font-light leading-relaxed">Generate cleaner concepts for hero sections, promos, launches, and offers.</p>
</div>
<div className="p-6 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors cursor-default">
<h4 className="text-lg text-white font-medium tracking-tight mb-2">Product and promo art</h4>
<p className="text-sm text-zinc-400 font-light leading-relaxed">Create visuals for launches, sales pushes, seasonal campaigns, and branded announcements.</p>
</div>
<div className="p-6 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors cursor-default">
<h4 className="text-lg text-white font-medium tracking-tight mb-2">Content graphics</h4>
<p className="text-sm text-zinc-400 font-light leading-relaxed">Support articles, newsletters, and editorial content with visuals that fit your brand.</p>
</div>
<div className="p-6 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors cursor-default">
<h4 className="text-lg text-white font-medium tracking-tight mb-2">Brand exploration</h4>
<p className="text-sm text-zinc-400 font-light leading-relaxed">Test new visual directions quickly without losing structure or consistency.</p>
</div>
</div>
</section>

<section className="py-32 px-6 border-t border-white/5 bg-[radial-gradient(ellipse_at_bottom,rgba(255,255,255,0.05),transparent_60%)] animate-on-scroll" id="waitlist">
<div className="max-w-2xl mx-auto">
<div className="text-center mb-12">
<h3 className="text-sm font-medium text-zinc-500 uppercase tracking-widest mb-3">Founding Access</h3>
<h2 className="text-4xl md:text-5xl text-white font-medium tracking-tight mb-6">
          Get early access before the public launch.
        </h2>
<p className="text-lg text-zinc-400 font-light leading-relaxed">
          LoveArt.ai is launching soon. Join the waitlist to get launch updates, early access invitations, and a chance to influence the first release.
        </p>
</div>
<div className="glass-panel p-6 sm:p-10 rounded-2xl border-gradient shadow-2xl">
<form className="space-y-6">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div>
<label className="block text-xs font-medium text-zinc-300 mb-2">Full Name</label>
<input className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-600 focus:border-white/30 focus:ring-1 focus:ring-white/30 outline-none transition-all" placeholder="Jane Doe" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-zinc-300 mb-2">Work Email</label>
<input className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-600 focus:border-white/30 focus:ring-1 focus:ring-white/30 outline-none transition-all" placeholder="jane@company.com" type="email"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-zinc-300 mb-2">What best describes you?</label>
<div className="relative">
<select className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-zinc-400 focus:text-white focus:border-white/30 focus:ring-1 focus:ring-white/30 outline-none transition-all cursor-pointer">
<option disabled="" hidden="" selected="" value="">Select your role...</option>
<option className="bg-zinc-900 text-white" value="Founder">Founder</option>
<option className="bg-zinc-900 text-white" value="Marketer">Marketer</option>
<option className="bg-zinc-900 text-white" value="Creator">Creator</option>
<option className="bg-zinc-900 text-white" value="Agency">Agency</option>
<option className="bg-zinc-900 text-white" value="Ecommerce Brand">Ecommerce Brand</option>
<option className="bg-zinc-900 text-white" value="Other">Other</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div>
<label className="block text-xs font-medium text-zinc-300 mb-2">What type of visual assets do you need most often?</label>
<div className="relative">
<select className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-zinc-400 focus:text-white focus:border-white/30 focus:ring-1 focus:ring-white/30 outline-none transition-all cursor-pointer">
<option disabled="" hidden="" selected="" value="">Select asset type...</option>
<option className="bg-zinc-900 text-white" value="Ad creatives">Ad creatives</option>
<option className="bg-zinc-900 text-white" value="Social posts">Social posts</option>
<option className="bg-zinc-900 text-white" value="Landing page visuals">Landing page visuals</option>
<option className="bg-zinc-900 text-white" value="Product promo visuals">Product promo visuals</option>
<option className="bg-zinc-900 text-white" value="Blog or content graphics">Blog or content graphics</option>
<option className="bg-zinc-900 text-white" value="Brand concepts">Brand concepts</option>
<option className="bg-zinc-900 text-white" value="Other">Other</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div>
<label className="block text-xs font-medium text-zinc-300 mb-2">What’s your top pain point or feature need right now?</label>
<textarea className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-600 focus:border-white/30 focus:ring-1 focus:ring-white/30 outline-none transition-all resize-none h-28" placeholder="Tell us what slows you down, what is missing in current tools, or what would make this an instant yes for you."></textarea>
</div>
<button className="w-full bg-white text-black font-medium py-3.5 rounded-lg text-base hover:bg-zinc-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.1)]" type="button">
            Join the Waitlist
          </button>
<p className="text-xs text-zinc-500 text-center mt-4">
            We’re using waitlist feedback to shape launch priorities. You’ll get product updates and early access details when invitations open.
          </p>
</form>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-3xl mx-auto border-t border-white/5 animate-on-scroll" id="faq">
<div className="mb-16 text-center">
<h2 className="text-3xl md:text-4xl text-white font-medium tracking-tight">
        Questions serious users usually ask first.
      </h2>
</div>
<div className="space-y-6">
<div className="border-b border-white/5 pb-6">
<h4 className="text-lg text-white font-medium mb-2">Who is LoveArt.ai for?</h4>
<p className="text-sm text-zinc-400 font-light leading-relaxed">LoveArt.ai is being built for founders, marketers, creators, agencies, and lean teams that need branded visual assets faster and with less inconsistency.</p>
</div>
<div className="border-b border-white/5 pb-6">
<h4 className="text-lg text-white font-medium mb-2">Is this just another AI image generator?</h4>
<p className="text-sm text-zinc-400 font-light leading-relaxed">No. The goal is not endless random outputs. The goal is a more structured workflow for creating, refining, saving, and reusing on-brand visuals for real business needs.</p>
</div>
<div className="border-b border-white/5 pb-6">
<h4 className="text-lg text-white font-medium mb-2">What kinds of visuals will LoveArt.ai support?</h4>
<p className="text-sm text-zinc-400 font-light leading-relaxed">The platform is being designed around the visuals teams use most often: ad creatives, social assets, landing page visuals, product promo art, content graphics, and brand concept directions.</p>
</div>
<div className="border-b border-white/5 pb-6">
<h4 className="text-lg text-white font-medium mb-2">Do I need design experience?</h4>
<p className="text-sm text-zinc-400 font-light leading-relaxed">No. LoveArt.ai is being built to help non-designers and design-conscious teams move faster without getting buried in endless prompt experimentation.</p>
</div>
<div className="pb-2">
<h4 className="text-lg text-white font-medium mb-2">When will early access open?</h4>
<p className="text-sm text-zinc-400 font-light leading-relaxed">Soon. Waitlist members will hear first when early access invitations begin rolling out.</p>
</div>
</div>
</section>

<section className="py-32 px-6 text-center animate-on-scroll">
<div className="max-w-3xl mx-auto">
<h2 className="text-4xl md:text-5xl text-white font-medium tracking-tight mb-6">
        Stop starting from scratch every time you need a visual.
      </h2>
<p className="text-lg text-zinc-400 font-light mb-10 max-w-2xl mx-auto">
        Join the LoveArt.ai waitlist and get early access to a smarter, more structured way to create on-brand business visuals.
      </p>
<div className="flex flex-col items-center gap-4">
<a className="shimmer-button inline-flex items-center justify-center h-14 px-10 rounded-full text-base font-medium shadow-[0_0_20px_rgba(255,255,255,0.15)]" href="#waitlist">
          Request Founding Access
        </a>
<p className="text-sm text-zinc-500 font-light">
          Launching soon. Early access spots will roll out in stages.
        </p>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-[#050505] pt-16 pb-8 px-6 text-center md:text-left animate-on-scroll">
<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
<div>
<a className="text-white font-medium text-lg tracking-tight flex items-center justify-center md:justify-start gap-2 mb-4" href="#">
<iconify-icon icon="solar:box-minimalistic-linear" strokeWidth="1.5" width="24"></iconify-icon>
          LoveArt.ai
        </a>
<p className="text-sm text-zinc-500 font-light">
          Business-first AI creative workflows for on-brand visuals.
        </p>
</div>
<div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm font-medium">
<a className="text-zinc-400 hover:text-white transition-colors" href="#product">Product</a>
<a className="text-zinc-400 hover:text-white transition-colors" href="#workflow">Workflow</a>
<a className="text-zinc-400 hover:text-white transition-colors" href="#use-cases">Use Cases</a>
<a className="text-zinc-400 hover:text-white transition-colors" href="#faq">FAQ</a>
<a className="text-zinc-400 hover:text-white transition-colors" href="#waitlist">Waitlist</a>
<a className="text-zinc-600 hover:text-zinc-300 transition-colors" href="#">Privacy</a>
<a className="text-zinc-600 hover:text-zinc-300 transition-colors" href="#">Terms</a>
</div>
</div>
<div className="max-w-6xl mx-auto text-center border-t border-white/5 pt-8">
<p className="text-xs text-zinc-600 font-light">
        © 2025 LoveArt.ai. All rights reserved.
      </p>
</div>
</footer>

    </>
  );
}
