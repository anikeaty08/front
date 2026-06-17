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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.querySelectorAll('.card-spotlight-wrapper').forEach(card => {
            card.addEventListener('mousemove', e => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            });
        });
    
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
      

<div className="fixed inset-0 z-0 pointer-events-none flex justify-center w-full max-w-7xl mx-auto px-6">
<div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-x border-white/[0.03]">
<div className="border-r border-white/[0.03] hidden sm:block"></div>
<div className="border-r border-white/[0.03] hidden lg:block"></div>
<div className="border-r border-white/[0.03] hidden lg:block"></div>
<div></div>
</div>
</div>

<div className="fixed top-0 left-0 w-full h-[800px] ambient-glow pointer-events-none z-0"></div>

<header className="w-full px-6 py-6 relative z-50 border-b border-white/[0.08] backdrop-blur-md bg-[#050505]/50 sticky top-0">
<div className="max-w-7xl mx-auto flex items-center justify-between">
<div className="flex items-center gap-8">

<div className="flex items-center gap-2 cursor-pointer">
<div className="w-8 h-8 rounded bg-white flex items-center justify-center text-black font-semibold text-sm tracking-tighter">
                        NX
                    </div>
<span className="font-medium text-sm tracking-tight hidden sm:block">Nexus</span>
</div>
<nav className="hidden md:flex items-center gap-6 text-sm font-medium text-neutral-400">
<a className="text-white transition-colors" href="#">Features</a>
<a className="hover:text-white transition-colors" href="#">Methodology</a>
<a className="hover:text-white transition-colors" href="#">Customers</a>
<a className="hover:text-white transition-colors" href="#">Pricing</a>
</nav>
</div>
<div className="flex items-center gap-4">
<a className="text-sm font-medium text-neutral-300 hover:text-white transition-colors hidden sm:block" href="#">Log in</a>

<div className="p-[1px] rounded-lg bg-border-gradient overflow-hidden">
<button className="bg-black/80 backdrop-blur-sm text-white px-4 py-1.5 rounded-[7px] text-sm font-medium hover:bg-neutral-900 transition-colors">
                        Sign up
                    </button>
</div>
</div>
</div>
</header>
<main className="relative z-10 flex-1 flex flex-col items-center">

<section className="w-full max-w-7xl mx-auto px-6 pt-32 pb-24 flex flex-col items-center text-center relative">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 z-0 pointer-events-none">
<div className="absolute inset-0 border border-indigo-500/30 rounded-full animate-sonar"></div>
<div className="absolute inset-0 border border-indigo-500/20 rounded-full animate-sonar-delay"></div>
</div>

<div className="relative inline-flex overflow-hidden rounded-full p-[1px] group mb-8 z-10 cursor-pointer">

<span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>

<div className="inline-flex h-full w-full items-center justify-center rounded-full bg-[#050505] px-4 py-1.5 text-xs font-medium text-neutral-300 z-10 gap-2 border border-white/10 group-hover:border-transparent transition-colors">
<span className="flex h-1.5 w-1.5 rounded-full bg-indigo-500"></span>
                    Nexus Workflows 2.0 is live
                    <iconify-icon className="text-neutral-500 group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
<h1 className="text-5xl sm:text-6xl md:text-8xl font-semibold tracking-tighter mb-6 bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent leading-[1.1] max-w-5xl z-10">
                Orchestrate code, <br className="hidden sm:block"/>not infrastructure.
            </h1>
<p className="text-base sm:text-lg text-neutral-400 font-normal max-w-2xl mb-10 leading-relaxed z-10">
                Nexus is a distributed workflow engine that lets you build, observe, and manage reliable background jobs without managing queues or state.
            </p>
<div className="flex flex-col sm:flex-row items-center gap-4 z-10">

<div className="p-[1px] rounded-full bg-border-gradient w-full sm:w-auto shadow-[0_0_40px_rgba(255,255,255,0.05)] hover:shadow-[0_0_60px_rgba(255,255,255,0.1)] transition-shadow">
<button className="w-full sm:w-auto bg-neutral-100 text-black px-8 py-3 rounded-full text-sm font-medium hover:bg-white transition-colors flex items-center justify-center gap-2">
                        Start Building Free
                    </button>
</div>

<button className="w-full sm:w-auto px-8 py-3 rounded-full text-sm font-medium text-neutral-300 border border-white/10 bg-white/[0.02] hover:bg-white/5 transition-all flex items-center justify-center gap-2 backdrop-blur-sm">
<iconify-icon className="text-lg" icon="solar:document-text-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                    Read the Docs
                </button>
</div>
</section>

<section className="w-full border-y border-white/[0.05] bg-[#050505]/50 backdrop-blur-sm py-12 relative z-10 overflow-hidden flex flex-col items-center">
<p className="text-xs font-medium text-neutral-500 uppercase tracking-widest mb-8 text-center">Powering modern engineering teams</p>
<div className="w-full max-w-7xl mask-edges flex overflow-hidden">
<div className="flex w-max min-w-full animate-marquee items-center gap-16 pr-16 text-neutral-500">

<iconify-icon className="hover:text-white transition-colors" height="48" icon="simple-icons:nasa" width="48"></iconify-icon>
<iconify-icon className="hover:text-white transition-colors" height="48" icon="simple-icons:spacex" width="48"></iconify-icon>
<iconify-icon className="hover:text-white transition-colors" height="48" icon="simple-icons:uber" width="48"></iconify-icon>
<iconify-icon className="hover:text-white transition-colors" height="48" icon="simple-icons:visa" width="48"></iconify-icon>
<iconify-icon className="hover:text-white transition-colors" height="48" icon="simple-icons:grab" width="48"></iconify-icon>
<iconify-icon className="hover:text-white transition-colors" height="48" icon="simple-icons:bose" width="48"></iconify-icon>
<iconify-icon className="hover:text-white transition-colors" height="48" icon="simple-icons:discover" width="48"></iconify-icon>
<iconify-icon className="hover:text-white transition-colors" height="48" icon="simple-icons:dji" width="48"></iconify-icon>
<iconify-icon className="hover:text-white transition-colors" height="48" icon="simple-icons:nikon" width="48"></iconify-icon>
<iconify-icon className="hover:text-white transition-colors" height="48" icon="simple-icons:sony" width="48"></iconify-icon>

<iconify-icon className="hover:text-white transition-colors" height="48" icon="simple-icons:nasa" width="48"></iconify-icon>
<iconify-icon className="hover:text-white transition-colors" height="48" icon="simple-icons:spacex" width="48"></iconify-icon>
<iconify-icon className="hover:text-white transition-colors" height="48" icon="simple-icons:uber" width="48"></iconify-icon>
<iconify-icon className="hover:text-white transition-colors" height="48" icon="simple-icons:visa" width="48"></iconify-icon>
<iconify-icon className="hover:text-white transition-colors" height="48" icon="simple-icons:grab" width="48"></iconify-icon>
<iconify-icon className="hover:text-white transition-colors" height="48" icon="simple-icons:bose" width="48"></iconify-icon>
<iconify-icon className="hover:text-white transition-colors" height="48" icon="simple-icons:discover" width="48"></iconify-icon>
<iconify-icon className="hover:text-white transition-colors" height="48" icon="simple-icons:dji" width="48"></iconify-icon>
<iconify-icon className="hover:text-white transition-colors" height="48" icon="simple-icons:nikon" width="48"></iconify-icon>
<iconify-icon className="hover:text-white transition-colors" height="48" icon="simple-icons:sony" width="48"></iconify-icon>
</div>
</div>
</section>

<section className="w-full max-w-7xl mx-auto px-6 py-32 relative z-10">
<div className="mb-16 max-w-2xl">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tighter mb-4">Engineered for resilience.</h2>
<p className="text-neutral-400 text-base leading-relaxed">Built from the ground up to handle distributed state, retries, and complex routing logic without the operational overhead.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="card-spotlight-wrapper group md:col-span-2 md:row-span-2 min-h-[400px]">
<div className="card-spotlight-inner p-8 flex flex-col justify-between">
<div className="flex justify-between items-start mb-8">
<div className="w-12 h-12 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
<iconify-icon className="text-2xl" icon="solar:code-scan-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-xs font-mono text-neutral-600 font-medium">01</span>
</div>

<div className="flex-1 w-full border border-white/5 rounded-xl bg-[#0a0a0a] mb-8 relative overflow-hidden flex items-center justify-center">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
<div className="flex flex-col gap-3 w-3/4 relative z-10">
<div className="h-8 w-full bg-white/5 rounded-md border border-white/10 flex items-center px-4">
<span className="text-[0.65rem] text-emerald-400 font-mono">await step.run("charge-stripe", ...)</span>
</div>
<div className="h-8 w-4/5 bg-white/5 rounded-md border border-white/10 flex items-center px-4 ml-6 opacity-70">
<span className="text-[0.65rem] text-indigo-400 font-mono">await step.run("send-email", ...)</span>
</div>
<div className="h-8 w-2/3 bg-white/5 rounded-md border border-white/10 flex items-center px-4 ml-12 opacity-40">
<span className="text-[0.65rem] text-amber-400 font-mono">await step.sleep("3 days")</span>
</div>
</div>
</div>
<div>
<h3 className="text-xl font-medium tracking-tight mb-2 text-white group-hover:text-indigo-400 transition-colors">Durable Execution</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Write standard code. We automatically checkpoint state after every step. If a container dies, the workflow resumes exactly where it left off.</p>
</div>
</div>
</div>

<div className="card-spotlight-wrapper group min-h-[300px]">
<div className="card-spotlight-inner p-8 flex flex-col justify-between">
<div className="flex justify-between items-start mb-6">
<div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
<iconify-icon className="text-xl" icon="solar:routing-2-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-xs font-mono text-neutral-600 font-medium">02</span>
</div>
<div>
<h3 className="text-lg font-medium tracking-tight mb-2 text-white">Visual Debugging</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Inspect input, output, and execution state of every single step in a visual timeline.</p>
</div>
</div>
</div>

<div className="card-spotlight-wrapper group min-h-[300px]">
<div className="card-spotlight-inner p-8 flex flex-col justify-between">
<div className="flex justify-between items-start mb-6">
<div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
<iconify-icon className="text-xl" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-xs font-mono text-neutral-600 font-medium">03</span>
</div>
<div>
<h3 className="text-lg font-medium tracking-tight mb-2 text-white">Type-safe SDKs</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Full TypeScript support out of the box. Catch orchestration errors at compile time.</p>
</div>
</div>
</div>
</div>
</section>

<section className="w-full max-w-7xl mx-auto px-6 py-24 relative z-10 border-t border-white/[0.05]">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tighter mb-4">Trusted by engineers</h2>
<p className="text-neutral-400 text-sm">Teams scale faster when they don't have to build infrastructure.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="card-spotlight-wrapper group">
<div className="card-spotlight-inner p-6 flex flex-col justify-between h-full">
<p className="text-sm text-neutral-300 leading-relaxed mb-8">"Nexus completely eliminated our need for complex Kafka setups. We define workflows in code, and it just handles the state and retries flawlessly."</p>
<div className="flex items-center gap-3">
<img alt="Sarah J." className="w-10 h-10 rounded-full object-cover grayscale opacity-80 border border-white/10" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=100&amp;h=100&amp;q=80"/>
<div>
<p className="text-sm font-medium text-white">Sarah Jenkins</p>
<p className="text-xs text-neutral-500">Staff Engineer @ TechCorp</p>
</div>
</div>
</div>
</div>
<div className="card-spotlight-wrapper group">
<div className="card-spotlight-inner p-6 flex flex-col justify-between h-full">
<p className="text-sm text-neutral-300 leading-relaxed mb-8">"The visual debugging timeline is a game changer. When a multi-step onboarding flow fails, we know exactly where and why within seconds."</p>
<div className="flex items-center gap-3">
<img alt="Marcus T." className="w-10 h-10 rounded-full object-cover grayscale opacity-80 border border-white/10" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=100&amp;h=100&amp;q=80"/>
<div>
<p className="text-sm font-medium text-white">Marcus Thorne</p>
<p className="text-xs text-neutral-500">CTO @ FinStart</p>
</div>
</div>
</div>
</div>
<div className="card-spotlight-wrapper group">
<div className="card-spotlight-inner p-6 flex flex-col justify-between h-full">
<p className="text-sm text-neutral-300 leading-relaxed mb-8">"Adopting Nexus was the highest ROI engineering decision we made this year. It allowed us to ship features that previously seemed too complex to orchestrate."</p>
<div className="flex items-center gap-3">
<img alt="Elena R." className="w-10 h-10 rounded-full object-cover grayscale opacity-80 border border-white/10" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;w=100&amp;h=100&amp;q=80"/>
<div>
<p className="text-sm font-medium text-white">Elena Rodriguez</p>
<p className="text-xs text-neutral-500">Lead Backend @ ScaleUp</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full max-w-5xl mx-auto px-6 py-24 relative z-10">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tighter mb-4">Simple, usage-based pricing.</h2>
<p className="text-neutral-400 text-sm">Start for free, scale infinitely.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="border border-white/10 rounded-2xl p-8 bg-white/[0.01] flex flex-col">
<h3 className="text-xl font-medium tracking-tight mb-2">Hobby</h3>
<p className="text-sm text-neutral-400 mb-6">Perfect for side projects and evaluating.</p>
<div className="mb-8">
<span className="text-4xl font-semibold tracking-tighter">$0</span>
<span className="text-sm text-neutral-500">/mo</span>
</div>
<ul className="flex flex-col gap-3 mb-8 flex-1 text-sm text-neutral-300">
<li className="flex items-center gap-3"><iconify-icon className="text-neutral-500" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon> 10,000 runs per month</li>
<li className="flex items-center gap-3"><iconify-icon className="text-neutral-500" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon> 3 day execution retention</li>
<li className="flex items-center gap-3"><iconify-icon className="text-neutral-500" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Community support</li>
</ul>
<button className="w-full py-2.5 rounded-lg text-sm font-medium text-white border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">Start Free</button>
</div>

<div className="p-[1px] rounded-2xl bg-border-gradient flex flex-col relative overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-[100px] bg-indigo-500/20 blur-[60px] rounded-full pointer-events-none z-0"></div>
<div className="bg-[#0a0a0a] rounded-[15px] p-8 flex flex-col h-full relative z-10">
<div className="flex justify-between items-center mb-2">
<h3 className="text-xl font-medium tracking-tight text-white">Pro</h3>
<span className="px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 text-[0.65rem] font-medium border border-indigo-500/20">POPULAR</span>
</div>
<p className="text-sm text-neutral-400 mb-6">For production workloads.</p>
<div className="mb-8">
<span className="text-4xl font-semibold tracking-tighter">$29</span>
<span className="text-sm text-neutral-500">/mo + usage</span>
</div>
<ul className="flex flex-col gap-3 mb-8 flex-1 text-sm text-neutral-300">
<li className="flex items-center gap-3"><iconify-icon className="text-indigo-400" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Unlimited runs ($0.001/run)</li>
<li className="flex items-center gap-3"><iconify-icon className="text-indigo-400" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon> 90 day execution retention</li>
<li className="flex items-center gap-3"><iconify-icon className="text-indigo-400" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Priority email support</li>
<li className="flex items-center gap-3"><iconify-icon className="text-indigo-400" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Custom domains</li>
</ul>
<button className="w-full py-2.5 rounded-lg text-sm font-medium bg-white text-black hover:bg-neutral-200 transition-colors">Upgrade to Pro</button>
</div>
</div>
</div>
</section>
</main>

<footer className="w-full border-t border-white/[0.08] bg-[#050505] pt-16 pb-8 px-6 relative z-10">
<div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 rounded bg-white flex items-center justify-center text-black font-semibold text-[0.6rem] tracking-tighter">
                        NX
                    </div>
<span className="font-medium text-sm tracking-tight">Nexus</span>
</div>
<p className="text-xs text-neutral-500 max-w-xs">Orchestrating the next generation of reliable distributed systems.</p>
</div>
<div className="flex flex-col gap-3">
<h4 className="text-xs font-medium text-white mb-2">Product</h4>
<a className="text-xs text-neutral-400 hover:text-white transition-colors" href="#">Features</a>
<a className="text-xs text-neutral-400 hover:text-white transition-colors" href="#">Integrations</a>
<a className="text-xs text-neutral-400 hover:text-white transition-colors" href="#">Pricing</a>
<a className="text-xs text-neutral-400 hover:text-white transition-colors" href="#">Changelog</a>
</div>
<div className="flex flex-col gap-3">
<h4 className="text-xs font-medium text-white mb-2">Resources</h4>
<a className="text-xs text-neutral-400 hover:text-white transition-colors" href="#">Documentation</a>
<a className="text-xs text-neutral-400 hover:text-white transition-colors" href="#">API Reference</a>
<a className="text-xs text-neutral-400 hover:text-white transition-colors" href="#">Blog</a>
<a className="text-xs text-neutral-400 hover:text-white transition-colors" href="#">Community</a>
</div>
<div className="flex flex-col gap-3">
<h4 className="text-xs font-medium text-white mb-2">Company</h4>
<a className="text-xs text-neutral-400 hover:text-white transition-colors" href="#">About</a>
<a className="text-xs text-neutral-400 hover:text-white transition-colors" href="#">Careers</a>
<a className="text-xs text-neutral-400 hover:text-white transition-colors" href="#">Legal</a>
<a className="text-xs text-neutral-400 hover:text-white transition-colors" href="#">Contact</a>
</div>
</div>
<div className="max-w-7xl mx-auto pt-8 border-t border-white/[0.05] flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-[0.65rem] text-neutral-500">© 2024 Nexus Inc. All rights reserved.</p>
<div className="flex gap-4">
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<iconify-icon height="16" icon="simple-icons:x" width="16"></iconify-icon>
</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<iconify-icon height="16" icon="simple-icons:github" width="16"></iconify-icon>
</a>
</div>
</div>
</footer>



    </>
  );
}
