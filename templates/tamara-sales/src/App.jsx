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
      

<nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
<div className="glass-panel rounded-full px-6 py-3 flex items-center justify-between gap-12 shadow-2xl shadow-black/50">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-black font-semibold text-xs tracking-tighter">TS</div>
<span className="text-sm font-medium text-white tracking-tight">Tamara Schenk</span>
</div>
<div className="hidden md:flex items-center gap-6 text-xs font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#approach">Approach</a>
<a className="hover:text-white transition-colors" href="#deliverables">Deliverables</a>
<a className="hover:text-white transition-colors" href="#about">About</a>
</div>
<a className="bg-white text-black hover:bg-neutral-200 px-4 py-1.5 rounded-full text-xs font-medium transition-colors" href="#book">
                Book Conversation
            </a>
</div>
</nav>

<section className="relative pt-32 pb-20 overflow-hidden bg-grid">
<div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-black via-transparent to-transparent z-10"></div>
<div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-[#050505] to-transparent z-10"></div>
<div className="max-w-5xl mx-auto px-6 relative z-20 flex flex-col items-center text-center">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-neutral-400 text-[10px] uppercase tracking-widest font-medium mb-8">
<span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                Executive Advisory • B2B Focus
            </div>

<h1 className="text-6xl md:text-8xl font-medium tracking-tighter text-white mb-8 leading-[0.9]">
                Turn Sales Enablement <br/>
<span className="text-neutral-500">into a Revenue Driver.</span>
</h1>
<p className="text-lg md:text-xl text-neutral-400 max-w-2xl leading-relaxed mb-16">
                Tamara Schenk helps B2B revenue leaders align strategy, enablement, and execution to improve commercial performance.
            </p>

<div className="w-full max-w-3xl mx-auto mb-16 text-left relative z-30">
<div className="mb-6 text-center">
<h3 className="text-2xl font-medium text-white tracking-tight mb-2">Watch Tamara Explain Revenue Enablement</h3>
<p className="text-sm text-neutral-400 max-w-xl mx-auto">In this short video, Tamara explains why enablement must move beyond activity and become strategically aligned with measurable business outcomes.</p>
</div>
<div className="relative w-full aspect-video rounded-3xl overflow-hidden glass-panel flex items-center justify-center border border-white/10 shadow-2xl group cursor-pointer">
<div className="absolute inset-0 bg-neutral-900/60 flex items-center justify-center transition-all group-hover:bg-neutral-900/40">
<div className="w-20 h-20 rounded-full bg-white text-black flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
<iconify-icon icon="solar:play-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
</div>

<div className="absolute bottom-6 left-6 text-xs font-medium text-white/50 tracking-widest uppercase">Video Embed Placeholder</div>
</div>
</div>

<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto relative z-30">
<a className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-neutral-200 text-black font-medium rounded-2xl text-sm transition-all flex items-center justify-center gap-2" href="#book">
                    Book an Executive Conversation
                    <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</div>
</section>

<div className="w-full border-y border-white/5 bg-neutral-900/20 overflow-hidden py-4">
<div className="flex whitespace-nowrap animate-scroll">
<div className="flex items-center gap-12 px-6">
<span className="text-4xl font-semibold text-white/5 tracking-tighter">REVENUE ENABLEMENT</span>
<span className="text-4xl font-semibold text-white/10 tracking-tighter">STRATEGIC ALIGNMENT</span>
<span className="text-4xl font-semibold text-white/5 tracking-tighter">EXECUTIVE ADVISORY</span>
<span className="text-4xl font-semibold text-white/10 tracking-tighter">COMMERCIAL PERFORMANCE</span>
<span className="text-4xl font-semibold text-white/5 tracking-tighter">MEASURABLE OUTCOMES</span>
</div>
<div className="flex items-center gap-12 px-6">
<span className="text-4xl font-semibold text-white/5 tracking-tighter">REVENUE ENABLEMENT</span>
<span className="text-4xl font-semibold text-white/10 tracking-tighter">STRATEGIC ALIGNMENT</span>
<span className="text-4xl font-semibold text-white/5 tracking-tighter">EXECUTIVE ADVISORY</span>
<span className="text-4xl font-semibold text-white/10 tracking-tighter">COMMERCIAL PERFORMANCE</span>
<span className="text-4xl font-semibold text-white/5 tracking-tighter">MEASURABLE OUTCOMES</span>
</div>
</div>
</div>

<section className="py-24 relative" id="approach">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div className="max-w-2xl">
<h2 className="text-4xl font-medium text-white tracking-tighter mb-4">The Alignment Problem</h2>
<p className="text-neutral-400 leading-relaxed">
                        Enablement programs exist. Sales strategy is defined. Results still underperform. In complex B2B organisations, misalignment between strategy, enablement, and execution quietly limits impact.
                    </p>
</div>
<div className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-lg text-blue-400 text-xs font-medium flex items-center gap-2">
<iconify-icon icon="solar:danger-circle-linear" strokeWidth="1.5" width="14"></iconify-icon>
                    Strategic Advisory Framework
                </div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[500px]">

<div className="md:col-span-2 md:row-span-2 bg-neutral-900 border border-white/5 rounded-3xl p-8 md:p-12 flex flex-col justify-between card-hover relative overflow-hidden group">
<div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-white/10 transition-colors"></div>
<div>
<div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white mb-6">
<iconify-icon icon="solar:target-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-3xl font-medium text-white tracking-tight mb-2">Assess Enablement &amp; Revenue Alignment</h3>
<p className="text-neutral-400 text-sm md:text-base leading-relaxed max-w-md">
                            Identify structural and strategic gaps. We map your current enablement activities against your core business objectives to find where execution breaks down.
                        </p>
</div>
<div className="mt-8 space-y-4">
<div className="flex items-center justify-between p-4 bg-black/40 rounded-xl border border-white/5">
<span className="text-neutral-400 text-sm">Target Environment</span>
<span className="text-white font-mono text-sm md:text-xl tracking-tight font-medium">Enterprise B2B</span>
</div>
<div className="flex items-center justify-between p-4 bg-blue-950/20 rounded-xl border border-blue-500/10">
<span className="text-blue-200 text-sm">Primary Focus</span>
<span className="text-blue-400 font-mono text-sm md:text-lg tracking-tight font-medium">Cross-Functional Alignment</span>
</div>
</div>
</div>

<div className="bg-neutral-900 border border-white/5 rounded-3xl p-8 flex flex-col justify-between card-hover">
<div className="flex justify-between items-start">
<div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center text-neutral-400">
<iconify-icon icon="solar:flag-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
</div>
<div>
<h3 className="text-xl font-medium text-white tracking-tight mb-2">Define Strategic Priorities</h3>
<p className="text-xs text-neutral-500 leading-relaxed">
                            Clarify focus areas that directly influence revenue performance, stripping away vanity metrics and low-impact activities.
                        </p>
</div>
</div>

<div className="bg-neutral-900 border border-white/5 rounded-3xl p-8 flex flex-col justify-between card-hover">
<div className="flex justify-between items-start">
<div className="w-10 h-10 rounded-lg bg-white text-black flex items-center justify-center">
<iconify-icon icon="solar:chart-square-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
</div>
<div>
<h3 className="text-xl font-medium text-white tracking-tight mb-2">Embed Measurement &amp; Accountability</h3>
<p className="text-xs text-neutral-500 leading-relaxed">
                            Ensure enablement drives measurable impact with clear KPIs tied to commercial outcomes, not just completion rates.
                        </p>
</div>
</div>
</div>
<div className="mt-12 text-center md:text-left">
<a className="inline-flex items-center gap-2 text-white text-sm font-medium hover:text-neutral-300 transition-colors" href="#book">
                    Schedule a Strategic Discussion <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-neutral-950" id="deliverables">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tighter mb-6">
                        Align Strategy, Enablement <br/> &amp; Execution.
                    </h2>
<p className="text-neutral-400 mb-8 leading-relaxed">
                        Tamara works with executive leaders to close the gap. Instead of tactical sales training, we focus on structural enablement capabilities that scale.
                    </p>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<div className="mt-1 w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0">
<iconify-icon icon="solar:check-circle-linear" strokeWidth="1.5" width="12"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium text-sm">Revenue Enablement Strategy</h4>
<p className="text-neutral-500 text-xs mt-1">Align enablement initiatives with overarching business objectives.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0">
<iconify-icon icon="solar:check-circle-linear" strokeWidth="1.5" width="12"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium text-sm">Sales Performance Alignment</h4>
<p className="text-neutral-500 text-xs mt-1">Connect go-to-market strategy seamlessly to frontline execution.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0">
<iconify-icon icon="solar:check-circle-linear" strokeWidth="1.5" width="12"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium text-sm">Executive Advisory</h4>
<p className="text-neutral-500 text-xs mt-1">Partner with senior leaders to strengthen accountability and focus.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0">
<iconify-icon icon="solar:check-circle-linear" strokeWidth="1.5" width="12"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium text-sm">Enablement Maturity Development</h4>
<p className="text-neutral-500 text-xs mt-1">Build structured, robust, and measurable enablement capabilities.</p>
</div>
</li>
</ul>
</div>
<div className="relative">

<div className="bg-neutral-900 border border-white/5 rounded-3xl p-6 relative z-10 shadow-2xl">
<div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-neutral-700"></div>
<div className="w-3 h-3 rounded-full bg-neutral-600"></div>
<div className="w-3 h-3 rounded-full bg-white/50"></div>
</div>
<div className="text-[10px] font-mono text-neutral-500">PERFORMANCE_IMPACT.json</div>
</div>
<div className="space-y-3 font-mono text-xs">
<div className="flex justify-between items-center text-neutral-400">
<span>STRATEGIC_ALIGNMENT</span>
<span className="text-white">98%</span>
</div>
<div className="flex justify-between items-center text-neutral-400">
<span>EXECUTION_GAP</span>
<span className="text-white">-45%</span>
</div>
<div className="h-px bg-white/5 my-2"></div>
<div className="flex justify-between items-center text-neutral-400">
<span>WIN_RATE_UPLIFT</span>
<span className="text-blue-400">+12.4%</span>
</div>
<div className="flex justify-between items-center text-neutral-400">
<span>REVENUE_IMPACT</span>
<span className="text-blue-400">High</span>
</div>
</div>

<div className="mt-8 flex items-end justify-between gap-1 h-32 opacity-80">
<div className="w-full bg-neutral-800 rounded-t h-[30%]"></div>
<div className="w-full bg-neutral-800 rounded-t h-[45%]"></div>
<div className="w-full bg-neutral-800 rounded-t h-[40%]"></div>
<div className="w-full bg-neutral-800 rounded-t h-[60%]"></div>
<div className="w-full bg-white rounded-t h-[75%] shadow-[0_0_15px_rgba(255,255,255,0.3)]"></div>
<div className="w-full bg-neutral-800 rounded-t h-[70%]"></div>
<div className="w-full bg-neutral-800 rounded-t h-[85%]"></div>
</div>
</div>

<div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-[50px] pointer-events-none"></div>
</div>
</div>
<div className="mt-16 text-center md:text-left">
<a className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-neutral-200 text-black font-medium rounded-xl text-xs transition-colors" href="#book">
                    Explore the Approach
                </a>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-black" id="about">
<div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div>
<h2 className="text-4xl font-medium text-white tracking-tighter mb-8">About Tamara</h2>
<div className="space-y-6 text-neutral-400 leading-relaxed">
<p className="text-white font-medium">Hi, I’m Tamara Schenk.</p>
<p>Through Bartlett &amp; Schenk, I work with senior revenue and enablement leaders to transform sales enablement into a strategic lever for performance.</p>
<p>My focus is alignment — connecting strategy, enablement, and execution to measurable business impact.</p>
</div>
<div className="mt-10">
<a className="inline-flex items-center gap-2 text-white font-medium hover:text-neutral-300 transition-colors text-sm" href="#book">
                        Start the Conversation <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</div>

<div className="bg-neutral-900 border border-white/5 rounded-3xl p-8 md:p-10 shadow-2xl">
<h3 className="text-2xl font-medium text-white tracking-tight mb-8">Why Tamara</h3>
<div className="space-y-8">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white shrink-0">
<iconify-icon icon="solar:cup-star-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium text-sm">Led by Tamara Schenk</h4>
<p className="text-neutral-500 text-xs mt-1 leading-relaxed">Recognised authority in B2B sales and revenue enablement.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white shrink-0">
<iconify-icon icon="solar:global-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium text-sm">Strategic Perspective</h4>
<p className="text-neutral-500 text-xs mt-1 leading-relaxed">Focused on enterprise complexity and cross-functional alignment.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white shrink-0">
<iconify-icon icon="solar:graph-up-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium text-sm">Performance-Oriented</h4>
<p className="text-neutral-500 text-xs mt-1 leading-relaxed">Enablement tied to revenue outcomes, not activity volume.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white shrink-0">
<iconify-icon icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium text-sm">Executive-Level Engagement</h4>
<p className="text-neutral-500 text-xs mt-1 leading-relaxed">Designed specifically for senior decision-makers.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-neutral-950">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-3xl font-medium text-white tracking-tighter mb-12">The Transformation</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">

<div className="bg-neutral-900 border border-white/5 rounded-3xl p-8 card-hover relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full blur-[40px] -translate-y-1/2 translate-x-1/2"></div>
<h3 className="text-neutral-300 font-medium mb-6 flex items-center gap-3 tracking-tight">
<iconify-icon className="text-neutral-500" icon="solar:danger-circle-linear" width="20"></iconify-icon> Before
                    </h3>
<ul className="space-y-4 text-sm text-neutral-400">
<li className="flex gap-3"><span className="text-neutral-600 font-serif">›</span> Enablement activity without clear impact.</li>
<li className="flex gap-3"><span className="text-neutral-600 font-serif">›</span> Disconnected strategy and execution.</li>
<li className="flex gap-3"><span className="text-neutral-600 font-serif">›</span> Limited visibility into results.</li>
</ul>
</div>

<div className="bg-neutral-900 border border-white/10 rounded-3xl p-8 card-hover relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-[40px] -translate-y-1/2 translate-x-1/2"></div>
<h3 className="text-white font-medium mb-6 flex items-center gap-3 tracking-tight">
<iconify-icon className="text-white" icon="solar:check-circle-linear" width="20"></iconify-icon> After
                    </h3>
<ul className="space-y-4 text-sm text-neutral-300">
<li className="flex gap-3"><span className="text-white/40 font-serif">›</span> Aligned revenue functions.</li>
<li className="flex gap-3"><span className="text-white/40 font-serif">›</span> Strategic enablement priorities.</li>
<li className="flex gap-3"><span className="text-white/40 font-serif">›</span> Stronger performance focus.</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-black">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-medium text-white tracking-tighter mb-12 text-center">Frequently Asked Questions</h2>
<div className="space-y-4">
<div className="p-6 bg-neutral-900/50 border border-white/5 rounded-2xl">
<h4 className="text-white font-medium mb-2 text-sm">What is revenue enablement?</h4>
<p className="text-neutral-400 text-xs leading-relaxed">A strategic approach that aligns enablement initiatives with business outcomes.</p>
</div>
<div className="p-6 bg-neutral-900/50 border border-white/5 rounded-2xl">
<h4 className="text-white font-medium mb-2 text-sm">Who is this designed for?</h4>
<p className="text-neutral-400 text-xs leading-relaxed">Senior revenue and enablement leaders in complex B2B organisations.</p>
</div>
<div className="p-6 bg-neutral-900/50 border border-white/5 rounded-2xl">
<h4 className="text-white font-medium mb-2 text-sm">Is this sales training?</h4>
<p className="text-neutral-400 text-xs leading-relaxed">No. It focuses on strategic alignment and performance improvement.</p>
</div>
<div className="p-6 bg-neutral-900/50 border border-white/5 rounded-2xl">
<h4 className="text-white font-medium mb-2 text-sm">How is this different from traditional enablement consulting?</h4>
<p className="text-neutral-400 text-xs leading-relaxed">The emphasis is on measurable impact and executive alignment.</p>
</div>
<div className="p-6 bg-neutral-900/50 border border-white/5 rounded-2xl">
<h4 className="text-white font-medium mb-2 text-sm">How do we begin?</h4>
<p className="text-neutral-400 text-xs leading-relaxed">Book an executive conversation to explore priorities and fit.</p>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden bg-grid border-t border-white/5" id="book">
<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-transparent to-[#050505] z-10 pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-20">
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tighter mb-6">Align Enablement with <br/>Revenue Performance.</h2>
<p className="text-neutral-400 mb-12 max-w-lg mx-auto leading-relaxed">
                Schedule a conversation with Tamara Schenk to explore how strategic revenue enablement can strengthen your organisation.
            </p>
<div className="glass-panel p-2 rounded-3xl inline-block w-full max-w-2xl mx-auto mb-10 shadow-2xl">
<div className="bg-neutral-900 rounded-[20px] overflow-hidden border border-white/5 flex flex-col items-center justify-center p-12 min-h-[350px] relative">

<div className="absolute inset-0 bg-[url('https://api.iconify.design/solar/calendar-linear.svg?color=%23ffffff')] opacity-[0.02] bg-[length:120px_120px] bg-center"></div>
<div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-black mb-6 shadow-xl relative z-10">
<iconify-icon icon="solar:calendar-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2 relative z-10">Executive Conversation</h3>
<p className="text-sm text-neutral-400 mb-8 relative z-10">30 min • Secure Web Conference</p>
<button className="px-8 py-4 bg-white text-black font-medium rounded-xl text-sm hover:bg-neutral-200 transition-colors tracking-tight relative z-10">
                        Load Booking Calendar
                    </button>
</div>
</div>
<p className="text-neutral-500 text-xs font-medium tracking-widest uppercase">
                Alignment drives sustainable performance.
            </p>
</div>
</section>

<footer className="py-12 border-t border-white/5 bg-black text-center">
<div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
<div className="text-white font-medium tracking-tight mb-2">Tamara Schenk</div>
<div className="text-neutral-500 text-sm mb-6">Part of Bartlett &amp; Schenk</div>
<div className="flex gap-6 mb-8 text-neutral-500 text-xs font-medium uppercase tracking-widest">
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
<a className="hover:text-white transition-colors" href="#">Advisory Services</a>
<a className="hover:text-white transition-colors" href="#">Contact</a>
</div>
<p className="text-neutral-600 text-[10px] max-w-lg mx-auto">
                © 2024 Bartlett &amp; Schenk. All rights reserved. Strategic revenue and enablement advisory for complex B2B organisations.
            </p>
</div>
</footer>

    </>
  );
}
