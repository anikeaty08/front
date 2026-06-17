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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        const cards = document.querySelectorAll('.spotlight-card');
        cards.forEach(card => {
            card.onmousemove = e => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            };
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
      

<header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 md:px-6">
<nav aria-label="Main menu" className="border-white/[0.08] flex shadow-black/80 bg-[#0A0A0A]/90 w-full max-w-5xl border rounded-full p-1.5 pl-3 shadow-2xl backdrop-blur-md items-center justify-between">
<a aria-label="Home" className="flex items-center gap-3 pr-4 group shrink-0" href="/">
<div className="flex shadow-lg shadow-blue-500/10 overflow-hidden group-hover:bg-blue-500/20 group-hover:border-blue-500/30 transition-all duration-300 bg-blue-500/10 w-9 h-9 border-blue-500/20 border rounded-xl relative items-center justify-center">
<iconify-icon aria-hidden="true" className="text-blue-500 transition-transform duration-300 group-hover:scale-110" height="20" icon="solar:user-bold-duotone" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-white font-semibold tracking-tight text-sm">John S. Rosso</span>
</a>
<div className="flex shrink-0 border-white/10 border-l ml-2 pl-4 items-center">
<a className="text-sm hover:bg-blue-600 transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center gap-1.5 whitespace-nowrap font-medium text-white bg-blue-500 rounded-full pt-2.5 pr-5 pb-2.5 pl-5" href="#demo">
                    Book a Strategy Call
                    <iconify-icon aria-hidden="true" height="16" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</nav>
</header>
<main>

<section className="overflow-hidden min-h-[90vh] pt-44 pb-20 relative">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none opacity-50 mix-blend-screen z-0"></div>
<div className="absolute inset-0 bg-grid-pattern z-0 pointer-events-none"></div>
<div className="z-10 text-center max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-300 text-xs uppercase font-medium tracking-wide mb-8 hover:border-blue-500/40 transition-colors cursor-default shadow-[0_0_20px_rgba(59,130,246,0.1)] backdrop-blur-sm">
<span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-signal"></span>
                    Peak Performance Partners · Sandler Training Center
                </div>
<h1 className="md:text-7xl lg:text-8xl leading-[1.05] text-5xl font-semibold text-white tracking-tight mb-8">
                    Build a Sales Team That Performs <br/> <span className="bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-zinc-500 drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">Consistently.</span>
</h1>
<p className="leading-relaxed text-lg font-light text-zinc-400 max-w-2xl mr-auto mb-10 ml-auto">
                    John Rosso helps organizations strengthen sales leadership, improve team accountability, and implement the Sandler methodology to create consistent sales performance.
                </p>
<div className="flex flex-col mb-16 items-center justify-center">
<div className="flex w-full max-w-lg pr-4 pl-4 items-center justify-center">
<a className="group relative inline-flex h-12 items-center justify-center gap-2.5 rounded-full bg-blue-500 px-8 text-base font-medium text-white transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_40px_rgba(59,130,246,0.25)] hover:shadow-[0_0_60px_rgba(59,130,246,0.4)] hover:bg-blue-600 ring-1 ring-white/10" href="#demo">
                            Book a Strategy Call
                            <iconify-icon className="transition-transform duration-300 group-hover:translate-x-1" height="18" icon="solar:arrow-right-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
</div>
</div>

<div className="w-full max-w-4xl mx-auto relative z-10 p-1 rounded-3xl bg-gradient-to-b from-white/10 to-transparent shadow-2xl">
<div className="bg-[#09090b] border border-white/10 rounded-[23px] aspect-video flex flex-col items-center justify-center relative overflow-hidden group cursor-pointer">
<div className="absolute inset-0 bg-blue-500/5 group-hover:bg-blue-500/10 transition-colors"></div>
<div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/30 mb-4 z-10 shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-transform group-hover:scale-110">
<iconify-icon className="text-blue-500 ml-1" icon="solar:play-bold" width="24"></iconify-icon>
</div>
<span className="text-zinc-300 font-medium z-10 tracking-wide uppercase text-sm mb-1">VIDEO PLACEHOLDER</span>
<span className="text-zinc-500 text-sm z-10">Watch John Explain the Sandler Sales Approach</span>
</div>
</div>
</div>
</section>

<section className="py-12 border-t border-white/5 bg-[#020202] relative z-20">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-xs font-mono text-zinc-500 uppercase tracking-wide mb-8">Organizations developing stronger sales teams through Sandler training</p>
<div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale">
<div className="h-8 flex items-center justify-center font-bold text-xl text-white tracking-widest border border-dashed border-white/30 px-6 py-2 rounded">IMAGE PLACEHOLDER</div>
<div className="h-8 flex items-center justify-center font-bold text-xl text-white tracking-widest border border-dashed border-white/30 px-6 py-2 rounded hidden sm:flex">IMAGE PLACEHOLDER</div>
<div className="h-8 flex items-center justify-center font-bold text-xl text-white tracking-widest border border-dashed border-white/30 px-6 py-2 rounded hidden md:flex">IMAGE PLACEHOLDER</div>
<div className="h-8 flex items-center justify-center font-bold text-xl text-white tracking-widest border border-dashed border-white/30 px-6 py-2 rounded hidden lg:flex">IMAGE PLACEHOLDER</div>
</div>
</div>
</section>

<section className="py-32 border-t border-white/5 bg-[#020202] relative z-20" id="problem">
<div className="max-w-6xl mx-auto px-6 text-center">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-500/10 text-red-500 mb-8 border border-red-500/20">
<iconify-icon icon="solar:close-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-16 leading-tight">
                    Why Sales Teams Struggle to <br className="hidden md:block"/>Deliver Consistent Results
                </h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
<div className="p-8 rounded-2xl bg-zinc-900/30 border border-white/5 hover:border-white/10 transition-colors">
<div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center text-red-400 mb-6 border border-red-500/20">
<iconify-icon icon="solar:routing-2-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Unclear sales process</h3>
<p className="text-zinc-400 text-base leading-relaxed">Many teams operate without a defined system for managing opportunities, leading to unpredictable forecasting and lost deals.</p>
</div>
<div className="p-8 rounded-2xl bg-zinc-900/30 border border-white/5 hover:border-white/10 transition-colors">
<div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center text-red-400 mb-6 border border-red-500/20">
<iconify-icon icon="solar:users-group-two-rounded-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Weak leadership habits</h3>
<p className="text-zinc-400 text-base leading-relaxed">Managers often struggle to coach and develop their teams effectively, reverting to super-seller mode instead of leadership.</p>
</div>
<div className="p-8 rounded-2xl bg-zinc-900/30 border border-white/5 hover:border-white/10 transition-colors">
<div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center text-red-400 mb-6 border border-red-500/20">
<iconify-icon icon="solar:chart-down-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Low accountability</h3>
<p className="text-zinc-400 text-base leading-relaxed">Without structured expectations and consistent tracking of behaviors, sales performance becomes inconsistent and reliant on luck.</p>
</div>
<div className="p-8 rounded-2xl bg-zinc-900/30 border border-white/5 hover:border-white/10 transition-colors">
<div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center text-red-400 mb-6 border border-red-500/20">
<iconify-icon icon="solar:shield-warning-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Reactive selling</h3>
<p className="text-zinc-400 text-base leading-relaxed">Salespeople respond to prospects' demands and objections instead of confidently guiding conversations and maintaining control.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black border-y border-white/5 relative" id="solutions">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight">
                        Why Leaders Work With John Rosso
                    </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(280px,auto)]">
<div className="md:col-span-2 sc-card rounded-[2rem] p-8 relative spotlight-card flex flex-col justify-between group overflow-hidden">
<div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-blue-500/5 to-transparent pointer-events-none"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 mb-6 shadow-lg shadow-black/50">
<iconify-icon aria-hidden="true" icon="solar:diploma-linear" width="20"></iconify-icon>
</div>
<h3 className="text-2xl text-white font-semibold tracking-tight mb-3">Sandler methodology expertise</h3>
<p className="text-zinc-400 text-base leading-relaxed max-w-md">Training built on proven Sandler sales principles, designed to challenge traditional sales behaviors and establish a robust, repeatable system for your organization.</p>
</div>
</div>
<div className="md:col-span-1 sc-card rounded-[2rem] p-8 relative spotlight-card flex flex-col group overflow-hidden">
<div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 mb-6 shadow-lg shadow-black/50">
<iconify-icon aria-hidden="true" icon="solar:users-group-two-rounded-linear" width="20"></iconify-icon>
</div>
<h3 className="text-2xl text-white font-semibold tracking-tight mb-3">Sales leadership development</h3>
<p className="text-zinc-400 text-base leading-relaxed mb-4">Helping managers become stronger coaches who drive accountability, motivate their teams, and lead by example rather than just managing numbers.</p>
</div>
<div className="md:col-span-1 sc-card rounded-[2rem] p-8 relative spotlight-card flex flex-col justify-between overflow-hidden">
<div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 mb-6 shadow-lg shadow-black/50">
<iconify-icon aria-hidden="true" icon="solar:diagram-up-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-2xl text-white font-semibold tracking-tight mb-2">Structured sales process</h3>
<p className="text-zinc-400 text-base leading-relaxed">Teams learn exactly how to manage opportunities effectively, qualify hard, and close smoothly.</p>
</div>
</div>
<div className="md:col-span-2 sc-card rounded-[2rem] p-8 relative spotlight-card flex flex-col md:flex-row items-center justify-between overflow-hidden gap-6">
<div className="relative z-10 max-w-sm">
<div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 mb-6 shadow-lg shadow-black/50">
<iconify-icon aria-hidden="true" icon="solar:target-linear" width="20"></iconify-icon>
</div>
<h3 className="text-2xl text-white font-semibold tracking-tight mb-3">Long-term performance focus</h3>
<p className="text-zinc-400 text-base leading-relaxed">We don't do motivational seminars. We focus on building the daily habits and mental toughness that create consistent, scalable results month after month.</p>
</div>
<div className="flex items-center gap-2 opacity-80 mt-6 md:mt-0">
<div className="px-4 py-3 bg-zinc-900 border border-white/10 rounded-lg text-xs text-zinc-400 flex items-center gap-2">
<iconify-icon icon="solar:calendar-linear" width="16"></iconify-icon> Discipline
                            </div>
<iconify-icon aria-hidden="true" className="text-zinc-600" icon="solar:arrow-right-linear" width="16"></iconify-icon>
<div className="px-4 py-3 bg-blue-900/30 border border-blue-500/30 rounded-lg text-xs text-blue-300 flex items-center gap-2">
<iconify-icon icon="solar:bolt-linear" width="16"></iconify-icon> Execution
                            </div>
<iconify-icon aria-hidden="true" className="text-zinc-600" icon="solar:arrow-right-linear" width="16"></iconify-icon>
<div className="px-4 py-3 bg-white border border-white rounded-lg text-xs text-black font-semibold flex items-center gap-2">
<iconify-icon icon="solar:chart-2-bold" width="16"></iconify-icon> Results
                            </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black relative">
<div className="max-w-5xl mx-auto px-6">
<div className="p-1 rounded-[2rem] bg-gradient-to-b from-white/10 to-transparent">
<div className="bg-[#0A0A0A] border border-white/10 rounded-[31px] p-8 md:p-12 flex flex-col md:flex-row items-center gap-12">
<div className="w-full md:w-1/2 aspect-square rounded-2xl bg-zinc-900 border border-dashed border-white/30 flex flex-col items-center justify-center relative overflow-hidden group">
<span className="text-zinc-500 font-medium tracking-wide uppercase text-sm z-10 mb-2">IMAGE PLACEHOLDER</span>
<span className="text-zinc-600 text-xs text-center px-6 leading-relaxed max-w-xs">Sales teams strengthening performance through Sandler training</span>
</div>
<div className="w-full md:w-1/2">
<iconify-icon className="text-blue-500/30 mb-6" icon="solar:quote-left-bold" width="40"></iconify-icon>
<p className="text-xl md:text-2xl text-white font-light leading-relaxed">
                                "Organizations partner with John Rosso to implement structured sales training that improves accountability, leadership, and team performance."
                            </p>
<div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center">
<iconify-icon className="text-zinc-400" icon="solar:buildings-2-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-white font-medium text-sm">Peak Performance Partners</p>
<p className="text-zinc-500 text-xs">Sandler Training Center</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#050505] border-y border-white/5" id="process">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-24">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6">
                        How Sales Teams Improve With <br/><span className="text-blue-500">Sandler Training</span>
</h2>
<p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
                        A systematic approach to diagnosing your sales issues and building a robust framework for long-term growth and accountability.
                    </p>
</div>

<div className="relative pl-8 md:pl-16 pb-24 border-l border-zinc-800 last:border-0 group scroll-mt-32">
<div className="absolute left-0 top-0 -translate-x-1/2 w-12 h-12 rounded-full bg-[#111] border border-zinc-700 flex items-center justify-center text-white z-10 shadow-[0_0_0_8px_#050505] group-hover:border-blue-500 transition-colors">
<span className="font-mono font-medium">1</span>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
<div className="lg:col-span-5 pt-1">
<span className="text-blue-400 font-mono text-xs uppercase tracking-wide mb-3 block">Phase 01</span>
<h3 className="text-3xl text-white font-semibold mb-4 tracking-tight">Assess Current Sales Process</h3>
</div>
<div className="lg:col-span-7">
<div className="bg-zinc-900/40 border border-white/5 rounded-2xl p-8 hover:bg-zinc-900/80 hover:border-white/10 transition-colors sc-card">
<div className="flex items-center gap-4 mb-4">
<div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
<iconify-icon icon="solar:magnifer-linear" width="22"></iconify-icon>
</div>
<h4 className="text-white text-lg font-medium">Identify Gaps</h4>
</div>
<p className="text-zinc-400 text-base leading-relaxed">
                                    Identify gaps in leadership and sales habits. We look closely at how your team currently manages opportunities, handles objections, and forecasts revenue to understand the root causes of inconsistent performance.
                                </p>
</div>
</div>
</div>
</div>

<div className="relative pl-8 md:pl-16 pb-24 border-l border-zinc-800 last:border-0 group scroll-mt-32">
<div className="absolute left-0 top-0 -translate-x-1/2 w-12 h-12 rounded-full bg-[#111] border border-zinc-700 flex items-center justify-center text-white z-10 shadow-[0_0_0_8px_#050505] group-hover:border-blue-500 transition-colors">
<span className="font-mono font-medium">2</span>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
<div className="lg:col-span-5 pt-1">
<span className="text-blue-400 font-mono text-xs uppercase tracking-wide mb-3 block">Phase 02</span>
<h3 className="text-3xl text-white font-semibold mb-4 tracking-tight">Implement Sandler Methodology</h3>
</div>
<div className="lg:col-span-7">
<div className="bg-zinc-900/40 border border-white/5 rounded-2xl p-8 hover:bg-zinc-900/80 hover:border-white/10 transition-colors sc-card">
<div className="flex items-center gap-4 mb-4">
<div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
<iconify-icon icon="solar:layers-linear" width="22"></iconify-icon>
</div>
<h4 className="text-white text-lg font-medium">Structured Frameworks</h4>
</div>
<p className="text-zinc-400 text-base leading-relaxed">
                                    Introduce structured frameworks for sales conversations and pipeline management. Equip your team with the Sandler Submarine approach to take control of the buyer's journey and qualify prospects effectively.
                                </p>
</div>
</div>
</div>
</div>

<div className="relative pl-8 md:pl-16 pb-12 border-l border-zinc-800 last:border-0 group scroll-mt-32">
<div className="absolute left-0 top-0 -translate-x-1/2 w-12 h-12 rounded-full bg-[#111] border border-zinc-700 flex items-center justify-center text-white z-10 shadow-[0_0_0_8px_#050505] group-hover:border-blue-500 transition-colors">
<span className="font-mono font-medium">3</span>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
<div className="lg:col-span-5 pt-1">
<span className="text-blue-400 font-mono text-xs uppercase tracking-wide mb-3 block">Phase 03</span>
<h3 className="text-3xl text-white font-semibold mb-4 tracking-tight">Strengthen Leadership</h3>
</div>
<div className="lg:col-span-7">
<div className="bg-zinc-900/40 border border-white/5 rounded-2xl p-8 hover:bg-zinc-900/80 hover:border-white/10 transition-colors sc-card">
<div className="flex items-center gap-4 mb-4">
<div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
<iconify-icon icon="solar:shield-star-linear" width="22"></iconify-icon>
</div>
<h4 className="text-white text-lg font-medium">Drive Accountability</h4>
</div>
<p className="text-zinc-400 text-base leading-relaxed">
                                    Develop leadership habits that reinforce consistent sales behavior. We train managers to become true coaches, establish clear metrics, and foster a culture of high performance and continuous improvement.
                                </p>
</div>
</div>
</div>
</div>
<div className="flex justify-center mt-20">
<a className="group relative inline-flex h-14 items-center justify-center gap-2.5 rounded-full bg-white px-8 text-base font-medium text-black transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:shadow-[0_0_60px_rgba(255,255,255,0.25)] ring-1 ring-black/5" href="#demo">
                        Strengthen My Sales Team
                        <iconify-icon className="transition-transform duration-300 group-hover:translate-x-1" height="18" icon="solar:arrow-right-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 bg-black border-t border-white/5 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-4">What's Included</h2>
<p className="text-zinc-400 text-lg">Comprehensive programs to transform your sales organization.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">

<div className="p-8 rounded-2xl bg-zinc-900/30 border border-white/10 flex flex-col gap-4 hover:border-white/20 hover:bg-zinc-900/50 transition-colors">
<iconify-icon className="text-blue-500 mb-2" icon="solar:book-bookmark-bold-duotone" width="32"></iconify-icon>
<h3 className="text-white text-xl font-medium">Sandler Sales Training</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Foundational and advanced methodology training for your entire sales force to establish a common language and process.</p>
</div>

<div className="p-8 rounded-2xl bg-zinc-900/30 border border-white/10 flex flex-col gap-4 hover:border-white/20 hover:bg-zinc-900/50 transition-colors">
<iconify-icon className="text-blue-500 mb-2" icon="solar:user-speak-bold-duotone" width="32"></iconify-icon>
<h3 className="text-white text-xl font-medium">Sales Leadership Coaching</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Dedicated sessions for leaders to develop coaching skills, manage team dynamics, and drive strategic initiatives.</p>
</div>

<div className="p-8 rounded-2xl bg-zinc-900/30 border border-white/10 flex flex-col gap-4 hover:border-white/20 hover:bg-zinc-900/50 transition-colors">
<iconify-icon className="text-blue-500 mb-2" icon="solar:flow-node-bold-duotone" width="32"></iconify-icon>
<h3 className="text-white text-xl font-medium">Sales Process Development</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Customized design and implementation of a structured sales pipeline tailored to your specific market and offering.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">

<div className="p-8 rounded-2xl bg-zinc-900/30 border border-white/10 flex flex-col gap-4 hover:border-white/20 hover:bg-zinc-900/50 transition-colors">
<iconify-icon className="text-blue-500 mb-2" icon="solar:users-group-two-rounded-bold-duotone" width="32"></iconify-icon>
<h3 className="text-white text-xl font-medium">Manager Coaching Programs</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Equipping your frontline managers with the tools to hold teams accountable and conduct effective 1-on-1s.</p>
</div>

<div className="p-8 rounded-2xl bg-zinc-900/30 border border-white/10 flex flex-col gap-4 hover:border-white/20 hover:bg-zinc-900/50 transition-colors">
<iconify-icon className="text-blue-500 mb-2" icon="solar:presentation-graph-bold-duotone" width="32"></iconify-icon>
<h3 className="text-white text-xl font-medium">Sales Team Workshops</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Interactive, high-impact sessions focused on role-playing, overcoming specific objections, and reinforcing new habits.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#050505] border-y border-white/5 relative" id="about">
<div className="max-w-5xl mx-auto px-6">
<div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
<div className="w-full md:w-2/5 aspect-[3/4] rounded-3xl bg-zinc-900 border border-dashed border-white/30 flex flex-col items-center justify-center relative shadow-2xl">
<span className="text-zinc-500 font-medium tracking-wide uppercase text-sm">IMAGE PLACEHOLDER</span>
<span className="text-zinc-600 text-xs mt-2">John S. Rosso</span>
</div>
<div className="w-full md:w-3/5">
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-8">Hi, I'm John Rosso.</h2>
<div className="space-y-6 text-lg text-zinc-400 leading-relaxed">
<p>
                                Through Peak Performance Partners, I help organizations implement the Sandler methodology to improve sales leadership and team performance.
                            </p>
<p>
                                With years of experience working closely with sales leaders and business owners, I understand why conventional sales training often fails to produce lasting change. It focuses on temporary motivation rather than systemic behavioral shifts.
                            </p>
<p>
                                My focus is helping teams develop structured sales processes and leadership habits that create consistent results. We build the discipline required to stop reactive selling and start commanding the sales process.
                            </p>
</div>
<div className="mt-10">
<a className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors" href="#demo">
                                Let's discuss your team's potential
                                <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black relative">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Frequently Asked Questions</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="p-8 rounded-2xl bg-zinc-900/30 border border-white/10">
<h3 className="text-lg font-medium text-white mb-3">Who is this designed for?</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Sales leaders, business owners, and organizations looking to strengthen team performance and establish a predictable revenue engine.</p>
</div>
<div className="p-8 rounded-2xl bg-zinc-900/30 border border-white/10">
<h3 className="text-lg font-medium text-white mb-3">Is this sales training or leadership development?</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Both — focusing on improving leadership capabilities to drive accountability, alongside tactical sales execution for the frontline team.</p>
</div>
<div className="p-8 rounded-2xl bg-zinc-900/30 border border-white/10">
<h3 className="text-lg font-medium text-white mb-3">Does this work for experienced sales teams?</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Yes. Even veterans benefit. The training helps experienced teams strengthen their discipline, refine their structure, and eliminate bad habits developed over time.</p>
</div>
<div className="p-8 rounded-2xl bg-zinc-900/30 border border-white/10">
<h3 className="text-lg font-medium text-white mb-3">What makes Sandler different?</h3>
<p className="text-zinc-400 text-sm leading-relaxed">The methodology focuses on structured selling, psychology, and long-term performance improvement rather than quick fixes or high-pressure closing tactics.</p>
</div>
</div>
<div className="mt-12 text-center">
<p className="text-zinc-300 font-medium mb-4">How do we get started?</p>
<a className="inline-flex items-center gap-2 text-sm text-black bg-white hover:bg-zinc-200 px-6 py-2.5 rounded-full font-medium transition-colors" href="#demo">
                        Book a strategy call
                    </a>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden" id="demo">
<div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto rounded-[2.5rem] overflow-hidden border border-white/10 bg-[#080808] relative z-10 shadow-2xl">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-12 p-8 md:p-12 lg:p-16 items-center">

<div className="flex flex-col justify-center h-full pt-4 lg:pt-0">
<h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight leading-[1.1]">
                            Strengthen Your Sales Team
                        </h2>
<p className="text-zinc-400 text-lg mb-8 leading-relaxed max-w-md">
                            Book a conversation with John Rosso to explore how Sandler training can help your team develop stronger sales habits and leadership.
                        </p>
<div className="space-y-4 mb-8">
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 border border-blue-500/30">
<iconify-icon aria-hidden="true" icon="solar:check-circle-bold" width="14"></iconify-icon>
</div>
<span className="text-sm text-zinc-300">Discuss your current sales challenges</span>
</div>
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 border border-blue-500/30">
<iconify-icon aria-hidden="true" icon="solar:check-circle-bold" width="14"></iconify-icon>
</div>
<span className="text-sm text-zinc-300">Evaluate fit for Sandler methodology</span>
</div>
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 border border-blue-500/30">
<iconify-icon aria-hidden="true" icon="solar:check-circle-bold" width="14"></iconify-icon>
</div>
<span className="text-sm text-zinc-300">Outline a potential roadmap for growth</span>
</div>
</div>
</div>

<div className="relative w-full h-full min-h-[400px] lg:min-h-[500px] bg-[#0c0c0c] border border-white/10 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/5 flex flex-col items-center justify-center p-8 text-center group">
<div className="w-16 h-16 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center mb-6">
<iconify-icon className="text-blue-500" icon="solar:calendar-date-bold-duotone" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Schedule Your Strategy Call</h3>
<p className="text-zinc-500 text-sm mb-8 max-w-xs">Select a time that works for you to discuss your team's performance with John Rosso.</p>
<div className="w-full max-w-xs border border-dashed border-white/20 rounded-xl p-8 mb-8 bg-zinc-900/30">
<span className="text-zinc-500 font-medium tracking-wide uppercase text-sm">CALENDLY PLACEHOLDER</span>
</div>
<button className="w-full max-w-xs bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-xl transition-colors shadow-lg shadow-blue-500/20">
                            Book My Call
                        </button>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-black border-t border-white/5 pt-20 pb-10 text-sm">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-16">
<div className="col-span-2 pr-8">
<a aria-label="Home" className="flex items-center gap-3 text-white font-semibold tracking-tight text-lg mb-6 group" href="/">
<div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shadow-lg shadow-blue-500/5 relative overflow-hidden group-hover:bg-blue-500/10 group-hover:border-blue-500/20 transition-all duration-300">
<iconify-icon className="text-white group-hover:text-blue-500 transition-colors duration-300" icon="solar:user-bold-duotone" strokeWidth="1.5" width="20"></iconify-icon>
</div>
                        John S. Rosso
                    </a>
<p className="text-zinc-500 mb-6 leading-relaxed max-w-xs">
                        Peak Performance Partners.<br/>
                        Helping organizations implement the Sandler methodology to improve sales leadership and team performance.
                    </p>
</div>
<div className="flex flex-col gap-4">
<h4 className="text-white font-medium">Programs</h4>
<a className="text-zinc-500 hover:text-blue-400 transition-colors" href="#">Sandler Sales Training</a>
<a className="text-zinc-500 hover:text-blue-400 transition-colors" href="#">Leadership Coaching</a>
<a className="text-zinc-500 hover:text-blue-400 transition-colors" href="#">Process Development</a>
</div>
<div className="flex flex-col gap-4">
<h4 className="text-white font-medium">Resources</h4>
<a className="text-zinc-500 hover:text-blue-400 transition-colors" href="#">Insights</a>
<a className="text-zinc-500 hover:text-blue-400 transition-colors" href="#">Methodology</a>
</div>
<div className="flex flex-col gap-4">
<h4 className="text-white font-medium">Company</h4>
<a className="text-zinc-500 hover:text-blue-400 transition-colors" href="#">About John Rosso</a>
<a className="text-zinc-500 hover:text-blue-400 transition-colors" href="#">Contact</a>
<a className="text-zinc-500 hover:text-blue-400 transition-colors" href="#">Privacy Policy</a>
</div>
</div>
<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-zinc-600 text-xs">
                    © 2024 Peak Performance Partners. All rights reserved.
                </div>
</div>
</div>
</footer>


    </>
  );
}
