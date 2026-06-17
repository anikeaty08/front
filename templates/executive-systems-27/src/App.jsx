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
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.remove('opacity-0');
entry.target.style.animationPlayState = 'running';
}
});
}, { threshold: 0.1 });
document.querySelectorAll('.animate-enter').forEach(el => observer.observe(el));
});



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

<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-15 mix-blend-overlay"></div>

<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

<div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[80vw] h-[50vh] bg-violet-900/10 blur-[120px] rounded-full mix-blend-screen"></div>
</div>

<nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2.5">
<div className="w-1.5 h-1.5 bg-violet-500 rounded-full purple-glow"></div>
<span className="text-xs font-semibold tracking-tight text-white/90">AURA.BUILD</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-[11px] font-medium text-zinc-500 hover:text-white transition-colors uppercase tracking-widest" href="#conflict">The Conflict</a>
<a className="text-[11px] font-medium text-zinc-500 hover:text-white transition-colors uppercase tracking-widest" href="#system">The System</a>
<a className="text-[11px] font-medium text-zinc-500 hover:text-white transition-colors uppercase tracking-widest" href="#executive">Executive</a>
</div>
<a className="hidden sm:block text-[11px] font-semibold bg-white text-black px-4 py-2 rounded hover:bg-zinc-200 transition-colors tracking-tight" href="#contact">
                Book Discovery
            </a>
</div>
</nav>

<section className="relative pt-40 pb-32 px-6 min-h-[95vh] flex flex-col justify-center items-center z-10 border-b border-white/5" id="conflict">
<div className="max-w-4xl mx-auto text-center">

<div className="animate-enter inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/20 bg-violet-500/5 mb-10 backdrop-blur-sm">
<span className="w-1 h-1 rounded-full bg-violet-400 animate-pulse"></span>
<span className="text-[10px] font-mono uppercase tracking-widest text-violet-300">System Awareness: Active</span>
</div>

<h1 className="animate-enter delay-100 text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-white leading-[1.05] mb-8">
                If your business stops when you stop, you're not scalable — <span className="text-transparent bg-clip-text bg-gradient-to-b from-violet-300 to-violet-600">you're trapped.</span>
</h1>

<p className="animate-enter delay-200 text-lg md:text-xl text-zinc-400 font-light max-w-xl mx-auto mb-12 leading-relaxed">
                Most founders don't have a growth problem.<br/>
                They have a systems problem.
            </p>

<div className="animate-enter delay-300 flex flex-col sm:flex-row items-center justify-center gap-5">
<a className="group relative px-8 py-4 bg-violet-600 text-white text-xs font-semibold uppercase tracking-widest rounded hover:bg-violet-500 transition-all purple-glow overflow-hidden w-full sm:w-auto text-center" href="#contact">
<span className="relative z-10">Book a Discovery Call</span>
<div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-fuchsia-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
</a>
<a className="px-8 py-4 text-zinc-400 text-xs font-medium uppercase tracking-widest hover:text-white transition-colors flex items-center justify-center gap-2 border border-white/5 rounded hover:bg-white/5 w-full sm:w-auto" href="#system">
                    See How the System Works
                </a>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
<i className="w-4 h-4 text-zinc-600" data-lucide="arrow-down"></i>
</div>
</section>

<section className="py-32 px-6 border-b border-white/5 bg-zinc-900/20">
<div className="max-w-5xl mx-auto">
<div className="grid lg:grid-cols-2 gap-20 items-center">

<div className="animate-enter">
<div className="text-violet-500 font-mono text-[10px] tracking-[0.2em] uppercase mb-4">The Realization</div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-6">
                        The "Overpaid Employee" Trap
                    </h2>
<div className="space-y-6 text-zinc-400 font-light leading-relaxed text-sm md:text-base">
<p>
                            If the business only runs when you're involved, effort becomes the bottleneck. Your biology is the cap on your revenue.
                        </p>
<p>
<span className="text-white font-medium">More hours don't create scale. Systems do.</span>
</p>
</div>
<div className="mt-8 pt-8 border-t border-white/5 grid grid-cols-2 gap-4">
<div className="flex items-center gap-3 opacity-60">
<i className="w-4 h-4 text-zinc-500" data-lucide="flame"></i>
<span className="text-xs text-zinc-400">Constant Firefighting</span>
</div>
<div className="flex items-center gap-3 opacity-60">
<i className="w-4 h-4 text-zinc-500" data-lucide="gauge"></i>
<span className="text-xs text-zinc-400">Human Speed Limits</span>
</div>
<div className="flex items-center gap-3 opacity-60">
<i className="w-4 h-4 text-zinc-500" data-lucide="repeat"></i>
<span className="text-xs text-zinc-400">Manual Grind</span>
</div>
</div>
</div>

<div className="animate-enter delay-200">
<div className="relative group">

<div className="absolute -inset-1 bg-gradient-to-r from-red-900/20 to-orange-900/20 rounded-xl blur-xl opacity-50 group-hover:opacity-30 transition duration-1000"></div>

<div className="relative glass rounded-xl overflow-hidden border border-white/5">
<div className="p-8">
<div className="flex items-center justify-between mb-8">
<div className="text-[10px] font-mono text-zinc-500 uppercase">Current State</div>
<div className="w-2 h-2 rounded-full bg-red-500/50 animate-pulse"></div>
</div>
<div className="space-y-4">

<div className="flex gap-2 items-end h-32 w-full border-b border-white/5 pb-2">
<div className="w-1/6 bg-zinc-800 h-[40%] rounded-t-sm"></div>
<div className="w-1/6 bg-zinc-800 h-[80%] rounded-t-sm"></div>
<div className="w-1/6 bg-zinc-800 h-[30%] rounded-t-sm"></div>
<div className="w-1/6 bg-zinc-800 h-[90%] rounded-t-sm"></div>
<div className="w-1/6 bg-red-900/40 h-[20%] rounded-t-sm border-t border-red-500/30"></div>
<div className="w-1/6 bg-zinc-800 h-[60%] rounded-t-sm"></div>
</div>
<div className="flex justify-between items-center text-xs text-zinc-500 font-mono">
<span>INPUT: MAX</span>
<span className="text-red-400">OUTPUT: UNSTABLE</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-40 px-6 border-b border-white/5 bg-black relative overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-violet-900/5 blur-[100px] rounded-full"></div>
<div className="max-w-3xl mx-auto text-center relative z-10 animate-enter">
<div className="w-px h-16 bg-gradient-to-b from-transparent via-violet-500 to-transparent mx-auto mb-8"></div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-8 leading-tight">
                The Shift From Operator to Executive
            </h2>
<p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed">
                Real scale begins when execution is handled by <span className="text-white">systems</span> — not people.
            </p>
<p className="mt-6 text-sm text-zinc-500 font-mono">
                This is where the business stops depending on you.
            </p>
</div>
</section>

<section className="py-32 px-6 relative bg-[#080808]" id="system">
<div className="max-w-6xl mx-auto">
<div className="mb-20 animate-enter">
<h2 className="text-4xl md:text-6xl font-medium tracking-tighter text-white mb-4">
                    The Aware System
                </h2>
<div className="h-1 w-20 bg-violet-600 rounded-full"></div>
</div>

<div className="grid md:grid-cols-3 gap-8 relative">

<div className="hidden md:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-900/40 to-transparent z-0"></div>

<div className="group relative animate-enter delay-100 z-10">
<div className="glass p-8 rounded-2xl h-full flex flex-col hover:bg-white/[0.03] transition-colors duration-500">
<div className="flex items-center justify-between mb-8">
<span className="text-violet-500 font-mono text-xs tracking-widest uppercase">Phase 01</span>
<div className="w-8 h-8 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-500 text-xs font-mono">
                                01
                            </div>
</div>
<h3 className="text-2xl text-white font-medium mb-4">Digital Revamp</h3>
<p className="text-sm text-zinc-400 leading-relaxed mb-8 flex-1">
                            Your digital presence rebuilt as operational infrastructure. Websites and tools become control layers — not just marketing assets.
                        </p>

<div className="h-24 w-full bg-zinc-900/50 rounded border border-white/5 flex items-center justify-center relative overflow-hidden group-hover:border-violet-500/20 transition-colors">
<div className="absolute inset-0 bg-grid-white/[0.02]"></div>
<div className="flex gap-2 items-center">
<div className="w-12 h-16 border border-zinc-700 rounded bg-zinc-800/50"></div>
<div className="w-16 h-12 border border-zinc-700 rounded bg-zinc-800/50"></div>
</div>
</div>
</div>
</div>

<div className="group relative animate-enter delay-200 z-10">

<div className="glass-purple p-8 rounded-2xl h-full flex flex-col shadow-[0_0_50px_-20px_rgba(139,92,246,0.15)]">
<div className="flex items-center justify-between mb-8">
<span className="text-violet-400 font-mono text-xs tracking-widest uppercase">Phase 02</span>
<div className="w-8 h-8 rounded bg-violet-500/10 border border-violet-500/40 flex items-center justify-center text-violet-300 text-xs font-mono">
                                02
                            </div>
</div>
<h3 className="text-2xl text-white font-medium mb-4">Automation Engine</h3>
<p className="text-sm text-zinc-400 leading-relaxed mb-8 flex-1">
                            Manual work removed. Logic enforced. Systems run. If a task is repeated, it shouldn't be manual. Zero-touch workflows.
                        </p>

<div className="h-24 w-full bg-violet-900/10 rounded border border-violet-500/20 flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-full h-[1px] bg-violet-500/30"></div>
<div className="absolute w-2 h-2 bg-violet-400 rounded-full shadow-[0_0_10px_#8b5cf6] animate-ping"></div>
</div>
<i className="w-6 h-6 text-violet-400 relative z-10" data-lucide="zap"></i>
</div>
</div>
</div>

<div className="group relative animate-enter delay-300 z-10">
<div className="glass p-8 rounded-2xl h-full flex flex-col hover:bg-white/[0.03] transition-colors duration-500">
<div className="flex items-center justify-between mb-8">
<span className="text-violet-500 font-mono text-xs tracking-widest uppercase">Phase 03</span>
<div className="w-8 h-8 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-500 text-xs font-mono">
                                03
                            </div>
</div>
<h3 className="text-2xl text-white font-medium mb-4">Executive Control</h3>
<p className="text-sm text-zinc-400 leading-relaxed mb-8 flex-1">
                            Dashboards, unified intelligence, predictable growth. The control room for your business giving you a God's-eye view.
                        </p>

<div className="h-24 w-full bg-zinc-900/50 rounded border border-white/5 flex items-end justify-center p-4 gap-1 relative overflow-hidden group-hover:border-violet-500/20 transition-colors">
<div className="w-full bg-zinc-700 h-[30%] rounded-t-sm"></div>
<div className="w-full bg-zinc-700 h-[50%] rounded-t-sm"></div>
<div className="w-full bg-violet-500 h-[80%] rounded-t-sm shadow-[0_0_10px_rgba(139,92,246,0.5)]"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 border-b border-white/5 bg-zinc-900/10" id="executive">
<div className="max-w-6xl mx-auto">
<div className="grid md:grid-cols-2 gap-16">
<div className="animate-enter">
<div className="text-violet-500 font-mono text-[10px] tracking-[0.2em] uppercase mb-4">The Outcome</div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-8">
                        What Happens When the System Is in Place
                    </h2>
<div className="grid gap-6">
<div className="flex gap-4 items-start group">
<div className="mt-1 w-6 h-6 rounded bg-violet-500/10 flex items-center justify-center border border-violet-500/30 group-hover:border-violet-500 transition-colors">
<i className="w-3.5 h-3.5 text-violet-400" data-lucide="check"></i>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-1">Less Firefighting</h4>
<p className="text-xs text-zinc-500">Operational noise is silenced. You stop solving the same problem twice.</p>
</div>
</div>
<div className="flex gap-4 items-start group">
<div className="mt-1 w-6 h-6 rounded bg-violet-500/10 flex items-center justify-center border border-violet-500/30 group-hover:border-violet-500 transition-colors">
<i className="w-3.5 h-3.5 text-violet-400" data-lucide="check"></i>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-1">More Control</h4>
<p className="text-xs text-zinc-500">You don't guess; you know. Data drives decisions, not gut feeling.</p>
</div>
</div>
<div className="flex gap-4 items-start group">
<div className="mt-1 w-6 h-6 rounded bg-violet-500/10 flex items-center justify-center border border-violet-500/30 group-hover:border-violet-500 transition-colors">
<i className="w-3.5 h-3.5 text-violet-400" data-lucide="check"></i>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-1">Predictable Execution</h4>
<p className="text-xs text-zinc-500">The business delivers the same high quality, regardless of volume.</p>
</div>
</div>
<div className="flex gap-4 items-start group">
<div className="mt-1 w-6 h-6 rounded bg-violet-500/10 flex items-center justify-center border border-violet-500/30 group-hover:border-violet-500 transition-colors">
<i className="w-3.5 h-3.5 text-violet-400" data-lucide="check"></i>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-1">Strategic Decision-Making</h4>
<p className="text-xs text-zinc-500">You finally have the time to work *on* the business, not *in* it.</p>
</div>
</div>
</div>
</div>
<div className="animate-enter delay-200 relative h-full min-h-[400px]">
<div className="absolute inset-0 bg-gradient-to-tr from-violet-900/10 to-transparent rounded-2xl border border-white/5">
<div className="absolute inset-0 flex items-center justify-center">

<div className="w-3/4 aspect-video bg-[#0A0A0A] rounded border border-white/10 shadow-2xl overflow-hidden flex flex-col">
<div className="h-8 border-b border-white/5 flex items-center px-4 gap-2">
<div className="w-2 h-2 rounded-full bg-zinc-700"></div>
<div className="w-2 h-2 rounded-full bg-zinc-700"></div>
<div className="ml-auto text-[9px] font-mono text-zinc-600">EXEC_VIEW_V2</div>
</div>
<div className="p-6 flex-1 flex flex-col gap-4">
<div className="flex justify-between items-end">
<div className="space-y-1">
<div className="h-2 w-12 bg-zinc-800 rounded"></div>
<div className="h-6 w-24 bg-white rounded"></div>
</div>
<div className="h-4 w-12 bg-violet-500/20 text-violet-400 text-[9px] font-mono flex items-center justify-center rounded">
                                            +24%
                                        </div>
</div>
<div className="flex-1 flex items-end gap-1 mt-4">
<div className="w-full bg-zinc-800/30 h-[20%] rounded-sm"></div>
<div className="w-full bg-zinc-800/30 h-[40%] rounded-sm"></div>
<div className="w-full bg-zinc-800/30 h-[35%] rounded-sm"></div>
<div className="w-full bg-zinc-800/30 h-[55%] rounded-sm"></div>
<div className="w-full bg-zinc-800/30 h-[45%] rounded-sm"></div>
<div className="w-full bg-zinc-800/30 h-[70%] rounded-sm"></div>
<div className="w-full bg-violet-600 h-[85%] rounded-sm relative shadow-[0_0_15px_#7c3aed]"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative overflow-hidden bg-black" id="contact">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-violet-900/10 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-xl mx-auto text-center relative z-10 animate-enter">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6 leading-tight">
                Build the system once.<br/>
                Run the business from above.
            </h2>
<p className="text-zinc-500 mb-10 text-sm font-mono">
                SELECTIVE INTAKE · EXECUTIVE TONE
            </p>
<form className="w-full bg-[#0A0A0A] border border-white/10 rounded-lg p-1.5 flex flex-col sm:flex-row gap-2 shadow-2xl purple-border-glow">
<input className="flex-1 bg-transparent border-none text-white px-4 py-3 placeholder-zinc-700 text-sm focus:outline-none focus:ring-0 font-light" placeholder="Enter your work email..." type="email"/>
<button className="bg-violet-600 hover:bg-violet-500 text-white text-xs font-semibold uppercase tracking-widest px-8 py-3 rounded transition-all whitespace-nowrap">
                    Book Discovery Call
                </button>
</form>
<div className="mt-8 flex items-center justify-center gap-6 text-[10px] text-zinc-600 font-mono uppercase tracking-widest">
<div className="flex items-center gap-2">
<i className="w-3 h-3" data-lucide="shield-check"></i>
<span>Secure Infrastructure</span>
</div>
<div className="flex items-center gap-2">
<i className="w-3 h-3" data-lucide="lock"></i>
<span>Confidential</span>
</div>
</div>
</div>
</section>

<footer className="py-12 px-6 border-t border-white/5 bg-[#050505]">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 bg-violet-500 rounded-full"></div>
<span className="text-xs font-bold tracking-tight text-zinc-400">AURA.BUILD</span>
</div>
<div className="flex gap-6">
<a className="text-[10px] text-zinc-600 hover:text-zinc-400 uppercase tracking-widest" href="#">Process</a>
<a className="text-[10px] text-zinc-600 hover:text-zinc-400 uppercase tracking-widest" href="#">Digital Infrastructure</a>
<a className="text-[10px] text-zinc-600 hover:text-zinc-400 uppercase tracking-widest" href="#">Automation</a>
</div>
<div className="text-[10px] text-zinc-700 font-mono">
                © 2024 EXECUTIVE SYSTEMS
            </div>
</div>
</footer>


    </>
  );
}
