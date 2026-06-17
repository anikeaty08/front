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
      

<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/60">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="uppercase text-sm font-black text-[#0B1F3B] tracking-widest">
                Brandon Clauser
            </div>
<a className="hidden sm:inline-flex items-center justify-center hover:bg-slate-50 transition-colors text-sm font-medium text-slate-50 bg-red-700 border-slate-200 border rounded-md px-4 py-2 shadow-sm" href="#book">
                Strategy Call
            </a>
</div>
</nav>

<section className="overflow-hidden md:pt-32 md:pb-32 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-[#8fa4c1] via-[#132158] to-[#1c1e22] pt-20 pb-24 relative">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none z-0"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
<div className="max-w-2xl">
<div className="inline-flex gap-2 bg-blue-900/50 border-blue-800/50 border rounded-full mb-6 px-3 py-1 gap-x-2 gap-y-2 items-center">
<span className="w-2 h-2 rounded-full bg-blue-400"></span>
<span className="text-xs font-medium text-blue-100">Executive Sales Execution</span>
</div>
<h1 className="sm:text-5xl lg:text-6xl leading-[1.1] text-4xl font-semibold text-slate-50 tracking-tight">Close Bigger Enterprise Deals by Leading With Business Value</h1>
<p className="leading-relaxed text-lg text-slate-300 mt-6">
                        1:1 coaching for B2B SaaS Account Executives and sales leaders who want more executive meetings, stronger deal control, and measurable impact in today’s CFO-driven buying cycles.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 mt-8 gap-x-4 gap-y-4">
<a className="inline-flex items-center justify-center hover:bg-opacity-90 transition-all hover:shadow-lg text-base font-medium text-neutral-50 bg-red-600 rounded-lg pt-3.5 pr-7 pb-3.5 pl-7 shadow-md" href="#book">
                            Book a Free Strategy Call
                        </a>
</div>
</div>

<div className="relative aspect-[16/9] bg-slate-900/50 rounded-2xl border border-slate-700/50 overflow-hidden shadow-2xl flex items-center justify-center group cursor-pointer w-full backdrop-blur-sm">
<div className="absolute inset-0 bg-gradient-to-tr from-slate-900/80 to-slate-800/20 group-hover:opacity-75 transition-opacity"></div>
<div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform relative z-10">
<iconify-icon className="text-[#0B1F3B] text-3xl" icon="solar:play-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-xs font-medium text-slate-200 bg-slate-900/80 backdrop-blur-md px-3 py-2 rounded-md shadow-sm border border-slate-700/50 z-10">
<span>[MAIN VSL.mp4]</span>
<span>04:23</span>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#FAFAFA] border-slate-200/60 border-t pt-24 pb-24">
<div className="max-w-7xl mx-auto px-6">

<div className="flex flex-col items-center mb-24">
<p className="text-sm font-medium text-slate-400 uppercase tracking-widest mb-8 text-center">Strategies used to close deals at</p>
<div className="flex flex-wrap opacity-60 grayscale gap-x-12 gap-y-8 items-center justify-center">
<span className="text-xl font-semibold tracking-tight text-slate-800">SALESFORCE</span>
<span className="text-xl font-semibold tracking-tight text-slate-800">WORKDAY</span>
<span className="text-xl font-semibold tracking-tight text-slate-800">ASANA</span>
<span className="text-xl font-semibold tracking-tight text-slate-800">ZENDESK</span>
</div>
</div>
<div className="text-center max-w-3xl mr-auto mb-16 ml-auto">
<h2 className="sm:text-5xl text-3xl font-semibold text-[#0B1F3B] tracking-tight">The Enterprise Execution Gap</h2>
<p className="text-lg text-slate-700 mt-4">The reality of selling to modern buying committees.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="hover:border-slate-300 transition-colors text-slate-50 bg-slate-900 border-slate-200 border rounded-xl pt-6 pr-6 pb-6 pl-6 shadow-sm">
<iconify-icon className="text-2xl text-[#0B1F3B] mb-4" icon="solar:stop-circle-linear" strokeWidth="1.5" style={{color: 'rgb(248, 250, 252)'}}></iconify-icon>
<h3 className="text-base font-semibold text-slate-50 tracking-tight mb-2">Deals Stall After Discovery</h3>
<p className="leading-relaxed text-sm text-slate-50">You get interest, but conversations never convert into finance-backed business cases.</p>
</div>

<div className="hover:border-slate-300 transition-colors bg-slate-900 border-slate-200 border rounded-xl px-6 py-6 shadow-sm">
<iconify-icon className="text-2xl text-[#0B1F3B] mb-4" icon="solar:user-cross-linear" strokeWidth="1.5" style={{color: 'rgb(248, 250, 252)'}}></iconify-icon>
<h3 className="text-base font-semibold text-slate-50 tracking-tight mb-2">Executive Meetings Are Hard</h3>
<p className="leading-relaxed text-sm text-slate-50">You struggle to reach CFOs, CROs, and economic buyers with a narrative that resonates.</p>
</div>

<div className="hover:border-slate-300 transition-colors bg-slate-900 border-slate-200 border rounded-xl pt-6 pr-6 pb-6 pl-6 shadow-sm">
<iconify-icon className="text-2xl text-[#0B1F3B] mb-4" icon="solar:calculator-linear" strokeWidth="1.5" style={{color: 'rgb(248, 250, 252)'}}></iconify-icon>
<h3 className="text-base font-semibold text-slate-50 tracking-tight mb-2">Value Isn’t Quantified</h3>
<p className="leading-relaxed text-sm text-slate-50">You talk about capabilities, not cost reduction, revenue lift, or risk mitigation.</p>
</div>

<div className="hover:border-slate-300 transition-colors bg-slate-900 border-slate-200 border rounded-xl px-6 py-6 shadow-sm">
<iconify-icon className="text-2xl text-[#0B1F3B] mb-4" icon="solar:chart-square-linear" strokeWidth="1.5" style={{color: 'rgb(248, 250, 252)'}}></iconify-icon>
<h3 className="text-base font-semibold text-slate-50 tracking-tight mb-2">Forecasts Feel Like Hope</h3>
<p className="leading-relaxed text-sm text-slate-50">Compelling events, timelines, and deal control aren’t clearly defined.</p>
</div>

<div className="hover:border-slate-300 transition-colors bg-slate-900 border-slate-200 border rounded-xl px-6 py-6 shadow-sm">
<iconify-icon className="text-2xl text-[#0B1F3B] mb-4" icon="solar:map-linear" strokeWidth="1.5" style={{color: 'rgb(248, 250, 252)'}}></iconify-icon>
<h3 className="text-base font-semibold text-slate-50 tracking-tight mb-2">Strategy Is Reactive</h3>
<p className="leading-relaxed text-sm text-slate-50">All accounts get equal attention, instead of being categorized by buying potential.</p>
</div>

<div className="hover:border-slate-300 transition-colors bg-slate-900 border-slate-200 border rounded-xl pt-6 pr-6 pb-6 pl-6 shadow-sm">
<iconify-icon className="text-2xl text-[#0B1F3B] mb-4" icon="solar:letter-linear" strokeWidth="1.5" style={{color: 'rgb(248, 250, 252)'}}></iconify-icon>
<h3 className="text-base font-semibold text-slate-50 tracking-tight mb-2">Outreach Lacks Relevance</h3>
<p className="leading-relaxed text-sm text-slate-50">Cold emails and calls don’t clearly tie to measurable business impact.</p>
</div>

<div className="hover:border-slate-300 transition-colors bg-slate-900 border-slate-200 border rounded-xl px-6 py-6 shadow-sm">
<iconify-icon className="text-2xl text-[#0B1F3B] mb-4" icon="solar:shield-warning-linear" strokeWidth="1.5" style={{color: 'rgb(248, 250, 252)'}}></iconify-icon>
<h3 className="text-base font-semibold text-slate-50 tracking-tight mb-2">Confidence Breaks</h3>
<p className="leading-relaxed text-sm text-slate-50">Overthinking and internal doubt impact performance in high-stakes deals.</p>
</div>

<div className="hover:border-slate-300 transition-colors bg-slate-900 border-slate-200 border rounded-xl px-6 py-6 shadow-sm">
<iconify-icon className="text-2xl text-[#0B1F3B] mb-4" icon="solar:book-bookmark-linear" strokeWidth="1.5" style={{color: 'rgb(248, 250, 252)'}}></iconify-icon>
<h3 className="text-base font-semibold text-slate-50 tracking-tight mb-2">Training Feels Theoretical</h3>
<p className="leading-relaxed text-sm text-slate-50">You’ve learned frameworks — but they don’t translate into real enterprise wins.</p>
</div>
</div>
</div>
</section>

<section className="bg-[#0B1F3B] border-slate-200/60 border-t py-24">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-12 gap-12 lg:gap-8">
<div className="lg:col-span-5">
<div className="sticky top-24">
<h2 className="sm:text-4xl leading-tight text-3xl font-semibold text-slate-50 tracking-tight mb-6">Built on real enterprise performance. Not theory.</h2>
<p className="leading-relaxed text-base text-slate-300 mb-6">
                            As a former top-producing enterprise seller who closed $27M+ in SaaS revenue, including a $13.75M deal, Brandon teaches what actually works in modern, CFO-run buying environments.
                        </p>
<a className="inline-flex items-center gap-2 hover:opacity-80 transition-opacity text-sm font-medium text-slate-50" href="#book">
                            Explore the methodology <iconify-icon className="" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
<div className="lg:col-span-6 lg:col-start-7">
<h3 className="uppercase text-xs font-semibold text-slate-400 tracking-widest mb-8">What Makes This Different</h3>
<ul className="space-y-6">
<li className="flex gap-4 items-start">
<div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mt-0.5">
<iconify-icon className="text-blue-400 text-sm" icon="solar:check-circle-linear"></iconify-icon>
</div>
<div className="">
<h4 className="text-base font-semibold text-slate-50">Business Value Power Rankings™</h4>
<p className="text-sm text-slate-400 mt-1">Framework centered entirely on quantifiable impact.</p>
</div>
</li>
<li className="flex gap-4 items-start">
<div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mt-0.5">
<iconify-icon className="text-blue-400 text-sm" icon="solar:check-circle-linear"></iconify-icon>
</div>
<div className="">
<h4 className="text-base font-semibold text-slate-50">Strategic Territory Categorization</h4>
<p className="text-sm text-slate-400 mt-1">Segmenting accounts into buying, CSAT/renewal, and implementation buckets.</p>
</div>
</li>
<li className="flex gap-4 items-start">
<div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mt-0.5">
<iconify-icon className="text-blue-400 text-sm" icon="solar:check-circle-linear"></iconify-icon>
</div>
<div className="">
<h4 className="text-base font-semibold text-slate-50">CFO-Ready ROI Positioning</h4>
<p className="text-sm text-slate-400 mt-1">Develop an executive-level value narrative that secures funding.</p>
</div>
</li>
<li className="flex gap-4 items-start">
<div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mt-0.5">
<iconify-icon className="text-blue-400 text-sm" icon="solar:check-circle-linear"></iconify-icon>
</div>
<div className="">
<h4 className="text-base font-semibold text-slate-50">1:1 Tailored Coaching</h4>
<p className="text-sm text-slate-400 mt-1">No generic group programs. Deep dives into your specific pipeline.</p>
</div>
</li>
<li className="flex gap-4 items-start">
<div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mt-0.5">
<iconify-icon className="text-blue-400 text-sm" icon="solar:check-circle-linear"></iconify-icon>
</div>
<div className="">
<h4 className="text-base font-semibold text-slate-50">Deal Control &amp; Compelling Events</h4>
<p className="text-sm text-slate-400 mt-1">Real-time deal reviews, negotiation strategy, and forecast predictability.</p>
</div>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#FAFAFA] border-t border-slate-200/60">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-4xl font-semibold text-[#0B1F3B] tracking-tight">Results from the Field</h2>
<p className="text-lg text-slate-500 mt-4">Hear from Account Executives who transformed their execution.</p>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">

<div className="relative aspect-[9/16] bg-slate-200 rounded-xl overflow-hidden group cursor-pointer border border-slate-200 shadow-sm">
<div className="absolute inset-0 bg-slate-800/10 group-hover:bg-slate-800/20 transition-colors"></div>
<div className="absolute inset-0 flex items-center justify-center">
<iconify-icon className="text-white text-4xl drop-shadow-md opacity-90 group-hover:scale-110 transition-transform" icon="solar:play-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-slate-900/60 to-transparent">
<p className="text-white text-xs font-medium">[Client Video 1]</p>
</div>
</div>

<div className="relative aspect-[9/16] bg-slate-200 rounded-xl overflow-hidden group cursor-pointer border border-slate-200 shadow-sm">
<div className="absolute inset-0 bg-slate-800/10 group-hover:bg-slate-800/20 transition-colors"></div>
<div className="absolute inset-0 flex items-center justify-center">
<iconify-icon className="text-white text-4xl drop-shadow-md opacity-90 group-hover:scale-110 transition-transform" icon="solar:play-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-slate-900/60 to-transparent">
<p className="text-white text-xs font-medium">[Client Video 2]</p>
</div>
</div>

<div className="relative aspect-[9/16] bg-slate-200 rounded-xl overflow-hidden group cursor-pointer border border-slate-200 shadow-sm">
<div className="absolute inset-0 bg-slate-800/10 group-hover:bg-slate-800/20 transition-colors"></div>
<div className="absolute inset-0 flex items-center justify-center">
<iconify-icon className="text-white text-4xl drop-shadow-md opacity-90 group-hover:scale-110 transition-transform" icon="solar:play-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-slate-900/60 to-transparent">
<p className="text-white text-xs font-medium">[Client Video 3]</p>
</div>
</div>

<div className="relative aspect-[9/16] bg-slate-200 rounded-xl overflow-hidden group cursor-pointer border border-slate-200 shadow-sm">
<div className="absolute inset-0 bg-slate-800/10 group-hover:bg-slate-800/20 transition-colors"></div>
<div className="absolute inset-0 flex items-center justify-center">
<iconify-icon className="text-white text-4xl drop-shadow-md opacity-90 group-hover:scale-110 transition-transform" icon="solar:play-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-slate-900/60 to-transparent">
<p className="text-white text-xs font-medium">[Client Video 4]</p>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="bg-blue-50 border-blue-100 border rounded-xl px-8 py-8 shadow-sm">
<iconify-icon className="text-3xl text-blue-200 mb-4" icon="solar:quote-right-linear"></iconify-icon>
<p className="text-sm text-slate-600 leading-relaxed mb-6">"[Quote Placeholder: Detailing how coaching shifted conversations from features to CFO-level metrics, leading to a major close.]"</p>
<div className="">
<p className="text-sm font-semibold text-[#0B1F3B] tracking-tight">[Name]</p>
<p className="text-xs text-slate-500">[Title], [Company]</p>
</div>
</div>
<div className="bg-blue-50 border-blue-100 border rounded-xl pt-8 pr-8 pb-8 pl-8 shadow-sm">
<iconify-icon className="text-3xl text-blue-200 mb-4" icon="solar:quote-right-linear"></iconify-icon>
<p className="text-sm text-slate-600 leading-relaxed mb-6">"[Quote Placeholder: Highlighting the impact of territory mapping and gaining control over a previously stalled enterprise deal.]"</p>
<div className="">
<p className="text-sm font-semibold text-[#0B1F3B] tracking-tight">[Name]</p>
<p className="text-xs text-slate-500">[Title], [Company]</p>
</div>
</div>
<div className="bg-blue-50 border-blue-100 border rounded-xl px-8 py-8 shadow-sm">
<iconify-icon className="text-3xl text-blue-200 mb-4" icon="solar:quote-right-linear"></iconify-icon>
<p className="text-sm text-slate-600 leading-relaxed mb-6">"[Quote Placeholder: Focusing on the confidence gained during high-stakes negotiations using the value framework.]"</p>
<div className="">
<p className="text-sm font-semibold text-[#0B1F3B] tracking-tight">[Name]</p>
<p className="text-xs text-slate-500">[Title], [Company]</p>
</div>
</div>
<div className="bg-blue-50 border-blue-100 border rounded-xl px-8 py-8 shadow-sm">
<iconify-icon className="text-3xl text-blue-200 mb-4" icon="solar:quote-right-linear"></iconify-icon>
<p className="text-sm text-slate-600 leading-relaxed mb-6">"[Quote Placeholder: Emphasizing the difference between theoretical sales training and Brandon's real-world execution strategy.]"</p>
<div className="">
<p className="text-sm font-semibold text-[#0B1F3B] tracking-tight">[Name]</p>
<p className="text-xs text-slate-500">[Title], [Company]</p>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-[#0B1F3B] border-slate-200/60 border-t pt-24 pb-24">
<div className="max-w-7xl mr-auto mb-10 ml-auto px-6 py-5">
<div className="mb-16">
<h2 className="text-3xl font-semibold text-slate-50 tracking-tight py-5">Execution Framework</h2>
<p className="text-base text-slate-300 max-w-2xl mt-4">A structured progression designed for modern CFO-led buying cycles — not outdated scripts.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 relative">

<div className="z-10 text-slate-50 relative">
<div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white font-semibold text-sm shadow-sm mb-5">1</div>
<h4 className="text-base font-semibold text-slate-50 tracking-tight mb-2">Clarify Value Narrative</h4>
<p className="leading-relaxed text-sm text-slate-400">Define measurable cost reduction, revenue growth, and risk mitigation impact.</p>
</div>

<div className="relative z-10 text-slate-50">
<div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white font-semibold text-sm shadow-sm mb-5">2</div>
<h4 className="text-base font-semibold text-slate-50 tracking-tight mb-2">Territory Categorization</h4>
<p className="leading-relaxed text-sm text-slate-400">Organize accounts into buying, CSAT/renewal, and implementation segments.</p>
</div>

<div className="relative z-10 text-slate-50">
<div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white font-semibold text-sm shadow-sm mb-5">3</div>
<h4 className="text-base font-semibold text-slate-50 tracking-tight mb-2">Executive Alignment</h4>
<p className="leading-relaxed text-sm text-slate-400">Build messaging that connects directly to economic buyer priorities and initiatives.</p>
</div>

<div className="relative z-10 text-slate-50">
<div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white font-semibold text-sm shadow-sm mb-5">4</div>
<h4 className="text-base font-semibold text-slate-50 tracking-tight mb-2">Event &amp; Qualification</h4>
<p className="leading-relaxed text-sm text-slate-400">Establish timeline clarity and eliminate "hope-based" pipeline forecasting.</p>
</div>

<div className="relative z-10 text-slate-50">
<div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white font-semibold text-sm shadow-sm mb-5">5</div>
<h4 className="text-base font-semibold text-slate-50 tracking-tight mb-2">CFO Business Case</h4>
<p className="leading-relaxed text-sm text-slate-400">Quantify impact in financial terms that drive executive funding decisions.</p>
</div>

<div className="relative z-10 text-slate-50">
<div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white font-semibold text-sm shadow-sm mb-5">6</div>
<h4 className="text-base font-semibold text-slate-50 tracking-tight mb-2">Negotiation Strategy</h4>
<p className="leading-relaxed text-sm text-slate-400">Protect value and defend pricing through impact-based, controlled positioning.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#FAFAFA] border-t border-slate-200/60">
<div className="max-w-4xl mx-auto px-6">
<h2 className="text-2xl font-semibold tracking-tight text-[#0B1F3B] mb-10 text-center">Comprehensive 1:1 Coaching Program</h2>
<div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
<div className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
<div className="p-8">
<ul className="space-y-5">
<li className="flex items-center gap-3 text-sm text-slate-600"><iconify-icon className="text-[#0B1F3B] text-lg" icon="solar:check-read-linear"></iconify-icon> 1:1 personalized coaching sessions</li>
<li className="flex items-center gap-3 text-sm text-slate-600"><iconify-icon className="text-[#0B1F3B] text-lg" icon="solar:check-read-linear"></iconify-icon> Business Value Power Rankings™</li>
<li className="flex items-center gap-3 text-sm text-slate-600"><iconify-icon className="text-[#0B1F3B] text-lg" icon="solar:check-read-linear"></iconify-icon> Territory strategy &amp; mapping</li>
<li className="flex items-center gap-3 text-sm text-slate-600"><iconify-icon className="text-[#0B1F3B] text-lg" icon="solar:check-read-linear"></iconify-icon> Executive outreach refinement</li>
<li className="flex items-center gap-3 text-sm text-slate-600"><iconify-icon className="text-[#0B1F3B] text-lg" icon="solar:check-read-linear"></iconify-icon> Deal review &amp; pipeline analysis</li>
</ul>
</div>
<div className="p-8">
<ul className="space-y-5">
<li className="flex items-center gap-3 text-sm text-slate-600"><iconify-icon className="text-[#0B1F3B] text-lg" icon="solar:check-read-linear"></iconify-icon> Compelling event strategy</li>
<li className="flex items-center gap-3 text-sm text-slate-600"><iconify-icon className="text-[#0B1F3B] text-lg" icon="solar:check-read-linear"></iconify-icon> Forecast predictability tactics</li>
<li className="flex items-center gap-3 text-sm text-slate-600"><iconify-icon className="text-[#0B1F3B] text-lg" icon="solar:check-read-linear"></iconify-icon> CFO-level value quantification</li>
<li className="flex items-center gap-3 text-sm text-slate-600"><iconify-icon className="text-[#0B1F3B] text-lg" icon="solar:check-read-linear"></iconify-icon> Negotiation positioning support</li>
<li className="flex items-center gap-3 text-sm text-slate-600"><iconify-icon className="text-[#0B1F3B] text-lg" icon="solar:check-read-linear"></iconify-icon> Ongoing performance accountability</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-white border-slate-200/60 border-t pt-24 pb-24 relative">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0B1F3B]/5 rounded-full blur-3xl pointer-events-none"></div>
<div className="max-w-3xl mx-auto px-6 text-center relative z-10">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#0B1F3B] mb-6 leading-tight">
                Strengthen your executive engagement, quantify your value, and close larger enterprise deals.
            </h2>
<p className="text-base text-slate-500 mb-10 max-w-2xl mx-auto">
<strong className="font-medium text-slate-800">Zero-Risk Strategy Session:</strong> Book your free initial call. If you don’t walk away with actionable clarity on improving your specific deal execution, there is absolutely no obligation to continue.
            </p>
<a className="inline-flex items-center justify-center bg-[#0B1F3B] text-white px-8 py-3.5 rounded-lg font-medium text-base hover:bg-opacity-90 transition-all shadow-md hover:shadow-lg" href="#book">
                Reserve Your Free Strategy Call
            </a>
</div>
</section>

<section className="bg-slate-50 border-slate-200/60 border-t pt-24 pb-24">
<div className="max-w-5xl mx-auto px-6">
<div className="flex flex-col md:flex-row gap-12 items-center">
<div className="w-full md:w-1/3">
<div className="aspect-[4/5] bg-slate-200 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden">

<div className="absolute inset-0 flex items-center justify-center text-slate-400">
<iconify-icon className="text-6xl" icon="solar:user-circle-linear"></iconify-icon>
</div>
</div>
</div>
<div className="w-full md:w-2/3">
<h2 className="text-3xl font-semibold text-[#0B1F3B] tracking-tight mb-6">About Brandon Clauser</h2>
<div className="space-y-4 text-base text-slate-600 leading-relaxed">
<p className="">
                            Brandon is a former enterprise SaaS producer with <strong className="">$27M+ closed revenue</strong> across industry-leading companies including Salesforce, Workday, and Asana.
                        </p>
<p className="">
                            He built his reputation by closing complex deals, including a <strong>$13.75M enterprise agreement</strong>, achieved entirely by leading with business value rather than traditional product pitching.
                        </p>
<p className="">
                            As the founder of Brandon Clauser Sales Coaching, he focuses exclusively on performance-based, real-world sales execution. His methodology specializes in CFO-driven buying cycles and executive-level engagement.
                        </p>
<p className="">
                            Known for a highly structured, disciplined, and measurable approach, Brandon helps reps move away from "hope-based" selling and build repeatable enterprise success.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-200/60">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-2xl font-semibold tracking-tight text-[#0B1F3B] mb-10">Frequently Asked Questions</h2>
<div className="divide-y divide-slate-200 border-t border-slate-200">

<details className="group py-5 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between font-medium text-base text-[#0B1F3B] tracking-tight">
                        Who is this coaching designed for?
                        <span className="transition-transform duration-300 group-open:-rotate-180 text-slate-400">
<iconify-icon icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</span>
</summary>
<p className="mt-4 text-sm text-slate-500 leading-relaxed pr-8">
                        B2B SaaS Account Executives and sales leaders targeting enterprise accounts and executive buyers who want to increase deal sizes and win rates.
                    </p>
</details>

<details className="group py-5 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between font-medium text-base text-[#0B1F3B] tracking-tight">
                        Is this a course or group program?
                        <span className="transition-transform duration-300 group-open:-rotate-180 text-slate-400">
<iconify-icon icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</span>
</summary>
<p className="mt-4 text-sm text-slate-500 leading-relaxed pr-8">
                        No. This is 1:1 tailored coaching focused specifically on your territory, your pipeline, and your active deals.
                    </p>
</details>

<details className="group py-5 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between font-medium text-base text-[#0B1F3B] tracking-tight">
                        How quickly will I see impact?
                        <span className="transition-transform duration-300 group-open:-rotate-180 text-slate-400">
<iconify-icon icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</span>
</summary>
<p className="mt-4 text-sm text-slate-500 leading-relaxed pr-8">
                        Impact begins immediately as your messaging shifts to quantified business value, leading to increased executive meetings and tighter deal control.
                    </p>
</details>

<details className="group py-5 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between font-medium text-base text-[#0B1F3B] tracking-tight">
                        Does this replace my company’s sales methodology?
                        <span className="transition-transform duration-300 group-open:-rotate-180 text-slate-400">
<iconify-icon icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</span>
</summary>
<p className="mt-4 text-sm text-slate-500 leading-relaxed pr-8">
                        No. It enhances your execution by strengthening value articulation and deal control, working alongside existing frameworks like MEDDPICC.
                    </p>
</details>

<details className="group py-5 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between font-medium text-base text-[#0B1F3B] tracking-tight">
                        What industries does this apply to?
                        <span className="transition-transform duration-300 group-open:-rotate-180 text-slate-400">
<iconify-icon icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</span>
</summary>
<p className="mt-4 text-sm text-slate-500 leading-relaxed pr-8">
                        The core principles apply across B2B SaaS, particularly in complex, high-ACV environments where CFOs and economic buyers are deeply involved in funding decisions.
                    </p>
</details>
</div>
</div>
</section>

    </>
  );
}
