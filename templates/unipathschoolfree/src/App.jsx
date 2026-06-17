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



        // Simple Interaction for visual flair
        const checkboxes = document.querySelectorAll('.custom-check');
        checkboxes.forEach(box => {
            box.addEventListener('click', (e) => {
                e.preventDefault(); // Prevent actual checking since it's a demo
            });
        });

        // Smooth reveal on scroll (Simple Intersection Observer)
        const observerOptions = {
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('opacity-100', 'translate-y-0');
                    entry.target.classList.remove('opacity-0', 'translate-y-4');
                }
            });
        }, observerOptions);

        document.querySelectorAll('section > div').forEach(el => {
            el.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-4');
            observer.observe(el);
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
      
<div className="noise"></div>

<nav className="fixed top-0 w-full z-40 border-b border-white/5 bg-[#030303]/80 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-2 font-medium tracking-tight">
<iconify-icon className="text-white text-xl" icon="solar:route-linear"></iconify-icon>
<span>UniPath</span>
</div>
<div className="flex items-center gap-6 text-sm font-medium">
<a className="text-[#737373] hover:text-white transition-colors" href="#school">School</a>
<a className="text-[#F97316] hover:text-white transition-colors" href="#pro">Pro</a>
<button className="bg-white text-black px-4 py-1.5 rounded-full text-xs hover:bg-[#ccc] transition-colors">
                    Start Free
                </button>
</div>
</div>
</nav>

<section className="pt-32 pb-20 px-6 max-w-6xl mx-auto text-center border-b border-white/5">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-8">
<span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]"></span>
<span className="text-[11px] font-mono text-[#737373] uppercase tracking-wide">Structured Growth Engine v1.0</span>
</div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tighter mb-6 text-white leading-[1.1]">
            From confusion<br/>
<span className="text-[#737373]">to radical clarity.</span>
</h1>
<p className="text-[#737373] text-lg max-w-xl mx-auto mb-10 leading-relaxed font-light">
            We replace random exploration with guided paths. <br/>
            Choose <span className="text-white border-b border-white/20">free exploration</span> or <span className="text-[#F97316] border-b border-[#F97316]/30">disciplined execution</span>.
        </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-8 py-3 rounded-md bg-[#0A0A0A] border border-white/10 hover:border-white/30 text-sm font-medium transition-all flex items-center justify-center gap-2 group" onclick="document.getElementById('school').scrollIntoView({behavior:'smooth'})">
<span>Explore School</span>
<iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="w-full sm:w-auto px-8 py-3 rounded-md bg-[#F97316] text-black text-sm font-semibold hover:bg-[#ea580c] transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(249,115,22,0.2)]" onclick="document.getElementById('pro').scrollIntoView({behavior:'smooth'})">
<span>Join Pro Pipeline</span>
<iconify-icon icon="solar:lock-keyhole-minimalistic-linear"></iconify-icon>
</button>
</div>
</section>

<section className="py-24 px-6 max-w-6xl mx-auto border-b border-white/5 relative overflow-hidden" id="school">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#3B82F6] rounded-full blur-[120px] opacity-[0.03] pointer-events-none"></div>
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<div className="text-[#3B82F6] font-mono text-xs uppercase tracking-wider mb-2">UniPath School — Free Tier</div>
<h2 className="text-3xl font-medium tracking-tight text-gradient-school">Foundation for Career Growth</h2>
<p className="text-[#737373] mt-4 max-w-md text-sm leading-relaxed">
                    Explore, understand, and prepare. No pressure. Access curated insights and basic tools to build your readiness.
                </p>
</div>
<button className="text-sm border-b border-[#3B82F6] text-[#3B82F6] pb-1 hover:text-white hover:border-white transition-colors">Start Free Journey</button>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10 overflow-hidden rounded-lg">

<div className="bg-[#080808] p-8 hover:bg-[#0C0C0C] transition-colors group relative">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-6 group-hover:bg-[#3B82F6]/10 transition-colors">
<iconify-icon className="text-xl text-[#737373] group-hover:text-[#3B82F6] transition-colors" icon="solar:globus-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium mb-2">Industry Insights</h3>
<p className="text-[#737373] text-sm leading-relaxed mb-4">Replace noise with relevance. Curated tech news and role demand signals.</p>
<div className="flex items-center gap-2 text-[10px] font-mono text-[#555]">
<span className="w-1 h-1 rounded-full bg-[#3B82F6]"></span>
<span>DAILY UPDATES</span>
</div>
</div>

<div className="bg-[#080808] p-8 hover:bg-[#0C0C0C] transition-colors group relative">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-6 group-hover:bg-[#3B82F6]/10 transition-colors">
<iconify-icon className="text-xl text-[#737373] group-hover:text-[#3B82F6] transition-colors" icon="solar:file-check-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium mb-2">AI Resume Builder</h3>
<p className="text-[#737373] text-sm leading-relaxed mb-4">Structured for clarity and ATS compatibility. Ensure you meet baseline standards.</p>
<div className="flex items-center gap-2 text-[10px] font-mono text-[#555]">
<span className="w-1 h-1 rounded-full bg-[#3B82F6]"></span>
<span>ATS SCORING</span>
</div>
</div>

<div className="bg-[#080808] p-8 hover:bg-[#0C0C0C] transition-colors group relative">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-6 group-hover:bg-[#3B82F6]/10 transition-colors">
<iconify-icon className="text-xl text-[#737373] group-hover:text-[#3B82F6] transition-colors" icon="solar:pen-new-square-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium mb-2">Cover Letter Gen</h3>
<p className="text-[#737373] text-sm leading-relaxed mb-4">Simple, role-aligned letters without overengineering. Communicate intent clearly.</p>
</div>

<div className="bg-[#080808] p-8 hover:bg-[#0C0C0C] transition-colors group relative">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-6 group-hover:bg-[#3B82F6]/10 transition-colors">
<iconify-icon className="text-xl text-[#737373] group-hover:text-[#3B82F6] transition-colors" icon="solar:chat-round-line-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium mb-2">Interview Prep</h3>
<p className="text-[#737373] text-sm leading-relaxed mb-4">Practice fundamentals. Reduce anxiety with common questions and frameworks.</p>
</div>

<div className="bg-[#080808] p-8 hover:bg-[#0C0C0C] transition-colors group relative md:col-span-2">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-6 group-hover:bg-[#3B82F6]/10 transition-colors">
<iconify-icon className="text-xl text-[#737373] group-hover:text-[#3B82F6] transition-colors" icon="solar:map-arrow-right-linear"></iconify-icon>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-lg font-medium mb-2">Roadmap Generator</h3>
<p className="text-[#737373] text-sm leading-relaxed max-w-md">A simple starting point. Get a 3-month outlook with milestones and entry-level skill recommendations.</p>
</div>
<div className="hidden md:block">
<div className="flex items-center gap-1 mb-1">
<div className="h-1 w-8 bg-[#333] rounded-full"></div>
<div className="h-1 w-8 bg-[#333] rounded-full"></div>
<div className="h-1 w-8 bg-[#333] rounded-full"></div>
</div>
<div className="text-[9px] font-mono text-right text-[#555]">LIMITED PREVIEW</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-b border-white/5 bg-[#050505] relative" id="pro">

<div className="absolute bottom-0 left-0 w-[800px] h-[600px] bg-[#F97316] rounded-full blur-[150px] opacity-[0.03] pointer-events-none"></div>
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<div className="inline-flex items-center gap-2 mb-4 text-[#F97316]">
<iconify-icon icon="solar:danger-circle-linear"></iconify-icon>
<span className="font-mono text-xs uppercase tracking-wider">Discipline Required</span>
</div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">
                    90 Days of Discipline.<br/>
<span className="text-[#737373]">Results — or Your Money Back.</span>
</h2>
<p className="text-[#737373] max-w-xl mx-auto leading-relaxed">
                    UniPath Pro is not for exploration. It is for execution. <br/>
                    A focused system that enforces discipline and tracks consistency.
                </p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">

<div className="lg:col-span-7 bg-[#0A0A0A] border border-white/10 rounded-xl overflow-hidden shadow-2xl relative group">

<div className="h-10 bg-[#111] border-b border-white/5 flex items-center justify-between px-4">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-[#333]"></div>
<div className="w-2.5 h-2.5 rounded-full bg-[#333]"></div>
</div>
<div className="text-[10px] font-mono text-[#555] flex items-center gap-2">
<iconify-icon className="text-[#F97316]" icon="solar:lock-keyhole-linear"></iconify-icon>
                            PATH_LOCK_ACTIVE
                        </div>
<div className="w-4"></div>
</div>

<div className="p-6 md:p-8 font-mono">
<div className="flex items-start gap-4 mb-8">
<div className="w-10 h-10 rounded bg-[#F97316]/10 flex-shrink-0 flex items-center justify-center text-[#F97316] border border-[#F97316]/20">
<span className="text-sm font-bold">01</span>
</div>
<div>
<h3 className="text-[#EDEDED] text-sm font-bold uppercase tracking-wide mb-1">Path Selection</h3>
<p className="text-[#737373] text-xs leading-relaxed">System locked to "Full Stack Developer". No switching permitted during execution phase.</p>
</div>
</div>

<div className="relative pl-5 border-l border-[#333] space-y-8 mb-8">

<div className="relative">
<div className="absolute -left-[25px] top-0 w-3 h-3 rounded-full bg-[#F97316] shadow-[0_0_10px_#F97316]"></div>
<div className="text-[10px] text-[#F97316] mb-1">PHASE 1: CONSISTENCY CHECK</div>
<div className="bg-[#111] border border-white/10 p-3 rounded text-xs text-[#EDEDED] flex justify-between items-center">
<span>7 Days of Tasks</span>
<span className="text-[#737373]">In Progress</span>
</div>
<div className="mt-2 grid grid-cols-7 gap-1">
<div className="h-1 bg-[#F97316] rounded-full"></div>
<div className="h-1 bg-[#F97316] rounded-full"></div>
<div className="h-1 bg-[#F97316] rounded-full"></div>
<div className="h-1 bg-[#333] rounded-full animate-pulse"></div>
<div className="h-1 bg-[#333] rounded-full"></div>
<div className="h-1 bg-[#333] rounded-full"></div>
<div className="h-1 bg-[#333] rounded-full"></div>
</div>
</div>

<div className="relative opacity-50">
<div className="absolute -left-[25px] top-0 w-3 h-3 rounded-full bg-[#333] border border-[#555]"></div>
<div className="text-[10px] text-[#737373] mb-1">PHASE 2: EXECUTION</div>
<div className="bg-[#111] border border-white/10 p-3 rounded text-xs text-[#737373] flex justify-between items-center blur-[1px]">
<span>Payment Unlocked</span>
<iconify-icon icon="solar:lock-keyhole-linear"></iconify-icon>
</div>
</div>
</div>

<div className="bg-[#F97316]/5 border border-[#F97316]/20 p-3 rounded text-[10px] text-[#F97316]">
                            &gt; SYSTEM: Payment gate opens only after 7 days of proven consistency.
                        </div>
</div>

<div className="scan-line opacity-20"></div>
</div>

<div className="lg:col-span-5 flex flex-col justify-center space-y-8">
<div className="space-y-4">
<div className="flex gap-4">
<div className="mt-1 text-[#F97316]">
<iconify-icon icon="solar:shield-check-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium text-sm">Discipline Rules</h4>
<p className="text-[#737373] text-sm mt-1">Miss tasks → refund eligibility reduced.<br/>Complete tasks → results or full refund.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 text-[#F97316]">
<iconify-icon icon="solar:chart-square-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium text-sm">Binary Tracking</h4>
<p className="text-[#737373] text-sm mt-1">Daily tasks are tracked as Done / Not Done. No excuses. No partial credit.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 text-[#F97316]">
<iconify-icon icon="solar:user-speak-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium text-sm">AI Mock Interviews</h4>
<p className="text-[#737373] text-sm mt-1">Practice with rigorous, role-specific simulations that provide score-based feedback.</p>
</div>
</div>
</div>
<div className="p-6 bg-[#111] border border-white/10 rounded-lg">
<div className="flex justify-between items-center mb-4">
<span className="text-sm text-[#EDEDED]">UniPath Pro</span>
<span className="font-mono text-lg text-white">₹499<span className="text-xs text-[#737373]">/mo</span></span>
</div>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-2 text-xs text-[#737373]">
<iconify-icon className="text-[#F97316]" icon="solar:check-circle-linear"></iconify-icon> 90-Day Path Lock
                            </li>
<li className="flex items-center gap-2 text-xs text-[#737373]">
<iconify-icon className="text-[#F97316]" icon="solar:check-circle-linear"></iconify-icon> Advanced Market Analytics
                            </li>
<li className="flex items-center gap-2 text-xs text-[#737373]">
<iconify-icon className="text-[#F97316]" icon="solar:check-circle-linear"></iconify-icon> Full Refund Guarantee
                            </li>
</ul>
<button className="w-full bg-[#EDEDED] hover:bg-white text-black py-2.5 rounded text-xs font-bold uppercase tracking-wide transition-colors">
                            Join the Disciplined
                        </button>
<p className="text-center text-[10px] text-[#555] mt-3">Payment unlocks after 7 days</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 max-w-4xl mx-auto">
<div className="grid grid-cols-2 gap-4 md:gap-12">
<div className="text-right border-r border-white/10 pr-6 md:pr-12">
<div className="text-[#737373] font-mono text-xs uppercase tracking-wider mb-2">School</div>
<h3 className="text-2xl text-white font-medium mb-6">Learn</h3>
<ul className="space-y-4 text-sm text-[#737373]">
<li>Foundation &amp; Clarity</li>
<li>Exploration</li>
<li>Preparation</li>
</ul>
<div className="mt-8">
<button className="text-xs text-[#EDEDED] border border-white/20 px-4 py-2 rounded hover:bg-white/5 transition-all">Start Free</button>
</div>
</div>
<div className="pl-2">
<div className="text-[#F97316] font-mono text-xs uppercase tracking-wider mb-2">Pro</div>
<h3 className="text-2xl text-white font-medium mb-6">Execute</h3>
<ul className="space-y-4 text-sm text-[#EDEDED]">
<li className="flex items-center gap-2"><iconify-icon className="text-[#F97316]" icon="solar:bolt-linear"></iconify-icon> Execution &amp; Results</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#F97316]" icon="solar:bolt-linear"></iconify-icon> Commitment</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#F97316]" icon="solar:bolt-linear"></iconify-icon> Transformation</li>
</ul>
<div className="mt-8">
<button className="text-xs bg-[#F97316] text-black font-semibold px-4 py-2 rounded hover:bg-[#ea580c] transition-all shadow-[0_0_15px_rgba(249,115,22,0.3)]">Lock In Path</button>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/10 bg-[#030303] py-12 px-6">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
<div>
<div className="flex items-center gap-2 font-medium tracking-tight text-white mb-4">
<iconify-icon icon="solar:route-linear"></iconify-icon>
<span>UniPath</span>
</div>
<p className="text-[#555] text-xs max-w-xs">
                    Career transformation through radical discipline. <br/>
                    No motivation hacks. Only execution.
                </p>
</div>
<div className="flex gap-12 text-xs text-[#737373]">
<div className="flex flex-col gap-3">
<span className="text-white font-medium">Platform</span>
<a className="hover:text-white transition-colors" href="#">School (Free)</a>
<a className="hover:text-white transition-colors" href="#">Pro (Paid)</a>
<a className="hover:text-white transition-colors" href="#">Guarantee</a>
</div>
<div className="flex flex-col gap-3">
<span className="text-white font-medium">Company</span>
<a className="hover:text-white transition-colors" href="#">About</a>
<a className="hover:text-white transition-colors" href="#">Contact</a>
<a className="hover:text-white transition-colors" href="#">Privacy</a>
</div>
</div>
</div>
<div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-white/5 text-[10px] text-[#333] flex justify-between">
<span>© 2024 UniPath Systems.</span>
<span className="font-mono">STATUS: OPERATIONAL</span>
</div>
</footer>


    </>
  );
}
