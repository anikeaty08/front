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
      

<div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
<div className="absolute top-[-10%] left-[20%] w-[40rem] h-[40rem] bg-indigo-900/10 rounded-full blur-[120px]"></div>
<div className="absolute bottom-[-10%] right-[10%] w-[30rem] h-[30rem] bg-violet-900/10 rounded-full blur-[100px]"></div>
<div className="absolute w-full h-full bg-noise top-0 left-0"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-semibold tracking-tighter text-white flex items-center gap-2" href="#">
<div className="w-5 h-5 bg-white rounded-sm flex items-center justify-center">
<div className="w-2 h-2 bg-slate-950 rounded-[1px]"></div>
</div>
                ELEVATE
            </a>
<a className="hidden md:inline-flex text-xs font-medium bg-white/10 hover:bg-white/15 text-white py-2 px-4 rounded-full transition-colors duration-200 border border-white/5" href="#contact">
                Request Strategy Call
            </a>
</div>
</nav>

<section className="pt-32 pb-20 md:pt-48 md:pb-32 px-6">
<div className="max-w-4xl mx-auto text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-indigo-300 font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                Accepting new partners for Q4
            </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-white mb-6 leading-[1.1]">
                We help founders build <br className="hidden md:block"/>
<span className="text-gradient">clarity, structure, and scalable growth.</span>
</h1>
<p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                Strategic consulting for businesses navigating growth, market complexity, and decision overload.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3.5 bg-white text-slate-950 text-sm font-medium rounded-lg hover:bg-slate-200 transition-colors flex items-center justify-center gap-2 group" href="#contact">
                    Request Strategy Call
                    <iconify-icon className="group-hover:translate-x-0.5 transition-transform" height="16" icon="lucide:arrow-right" width="16"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-3.5 bg-transparent border border-white/10 text-slate-300 text-sm font-medium rounded-lg hover:bg-white/5 transition-colors" href="#approach">
                    Explore Our Approach
                </a>
</div>
</div>
</section>

<section className="py-20 border-t border-white/5">
<div className="max-w-6xl mx-auto px-6">
<div className="mb-12">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-white mb-4">Who we work with</h2>
<p className="text-slate-400 max-w-xl text-sm md:text-base">If your business is growing faster than your internal structure — we’re likely a fit.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="group p-8 rounded-2xl border border-white/5 bg-gradient-to-b from-white/5 to-transparent hover:border-white/10 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-6 text-indigo-300">
<iconify-icon height="20" icon="lucide:user" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Founders &amp; CEOs</h3>
<p className="text-sm text-slate-400 leading-relaxed">Leaders seeking a sparring partner to validate strategic decisions and regain focus.</p>
</div>

<div className="group p-8 rounded-2xl border border-white/5 bg-gradient-to-b from-white/5 to-transparent hover:border-white/10 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-6 text-indigo-300">
<iconify-icon height="20" icon="lucide:trending-up" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Scaling Startups</h3>
<p className="text-sm text-slate-400 leading-relaxed">Companies moving from Pre-seed to Series A that need to operationalize chaos.</p>
</div>

<div className="group p-8 rounded-2xl border border-white/5 bg-gradient-to-b from-white/5 to-transparent hover:border-white/10 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-6 text-indigo-300">
<iconify-icon height="20" icon="lucide:globe" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">International SMBs</h3>
<p className="text-sm text-slate-400 leading-relaxed">Export-oriented businesses facing market complexity and scaling hurdles.</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
<div className="max-w-6xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-12 items-center">
<div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white leading-tight mb-8">
                        Growth without strategy creates <span className="text-indigo-400">chaos</span>.
                    </h2>
<div className="space-y-6">
<div className="flex items-start gap-4">
<iconify-icon className="text-slate-500 mt-1" icon="lucide:x" width="20"></iconify-icon>
<div>
<h4 className="text-white font-medium text-lg">Growth ≠ Clarity</h4>
<p className="text-slate-500 text-sm mt-1">Revenue might be up, but understanding of why (and how to repeat it) is often missing.</p>
</div>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-slate-500 mt-1" icon="lucide:x" width="20"></iconify-icon>
<div>
<h4 className="text-white font-medium text-lg">More Channels ≠ Better Decisions</h4>
<p className="text-slate-500 text-sm mt-1">Expanding blindly dilutes resources. Focus is the ultimate leverage.</p>
</div>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-slate-500 mt-1" icon="lucide:x" width="20"></iconify-icon>
<div>
<h4 className="text-white font-medium text-lg">Data without Structure ≠ Insight</h4>
<p className="text-slate-500 text-sm mt-1">Dashboards are useless if they don't drive high-quality executive decisions.</p>
</div>
</div>
</div>
</div>
<div className="relative h-full min-h-[400px] border border-white/5 rounded-2xl bg-slate-900/50 p-8 flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 opacity-20 bg-[radial-gradient(#4f46e5_1px,transparent_1px)] [background-size:16px_16px]"></div>
<div className="relative z-10 text-center">
<div className="inline-flex flex-col gap-4">
<div className="flex gap-4 opacity-30 blur-[1px]">
<div className="w-16 h-4 bg-slate-600 rounded"></div>
<div className="w-8 h-4 bg-slate-600 rounded"></div>
</div>
<div className="flex gap-4 opacity-50 blur-[0.5px]">
<div className="w-12 h-4 bg-slate-500 rounded"></div>
<div className="w-20 h-4 bg-slate-500 rounded"></div>
</div>
<div className="p-6 border border-indigo-500/30 bg-indigo-500/10 rounded-lg backdrop-blur-sm shadow-[0_0_30px_-10px_rgba(99,102,241,0.3)]">
<span className="text-indigo-200 font-medium tracking-tight">Strategic Focus</span>
</div>
<div className="flex gap-4 justify-end opacity-50 blur-[0.5px]">
<div className="w-20 h-4 bg-slate-500 rounded"></div>
<div className="w-8 h-4 bg-slate-500 rounded"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900/20 border-y border-white/5" id="approach">
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-white mb-16 text-center">Our Approach</h2>
<div className="grid md:grid-cols-4 gap-4 relative">

<div className="hidden md:block absolute top-6 left-0 w-full h-px bg-white/10 -z-10"></div>

<div className="bg-slate-950 border border-white/10 p-6 rounded-xl relative group hover:-translate-y-1 transition-transform duration-300">
<div className="w-12 h-12 bg-slate-950 border border-white/10 rounded-full flex items-center justify-center text-white font-semibold text-sm mb-6 absolute -top-6 left-6 shadow-xl">01</div>
<h3 className="text-white font-medium text-lg mt-4 mb-3">Analysis</h3>
<ul className="space-y-2 text-sm text-slate-400">
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-indigo-500 rounded-full"></div>Market &amp; Competitors</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-indigo-500 rounded-full"></div>Business Model</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-indigo-500 rounded-full"></div>Unit Economics</li>
</ul>
</div>

<div className="bg-slate-950 border border-white/10 p-6 rounded-xl relative group hover:-translate-y-1 transition-transform duration-300">
<div className="w-12 h-12 bg-slate-950 border border-white/10 rounded-full flex items-center justify-center text-white font-semibold text-sm mb-6 absolute -top-6 left-6 shadow-xl">02</div>
<h3 className="text-white font-medium text-lg mt-4 mb-3">Clarity</h3>
<ul className="space-y-2 text-sm text-slate-400">
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-indigo-500 rounded-full"></div>Positioning</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-indigo-500 rounded-full"></div>Strategic Focus</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-indigo-500 rounded-full"></div>Priorities</li>
</ul>
</div>

<div className="bg-slate-950 border border-white/10 p-6 rounded-xl relative group hover:-translate-y-1 transition-transform duration-300">
<div className="w-12 h-12 bg-slate-950 border border-white/10 rounded-full flex items-center justify-center text-white font-semibold text-sm mb-6 absolute -top-6 left-6 shadow-xl">03</div>
<h3 className="text-white font-medium text-lg mt-4 mb-3">Strategy</h3>
<ul className="space-y-2 text-sm text-slate-400">
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-indigo-500 rounded-full"></div>Growth Scenarios</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-indigo-500 rounded-full"></div>Go-to-Market</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-indigo-500 rounded-full"></div>Roadmap</li>
</ul>
</div>

<div className="bg-slate-950 border border-white/10 p-6 rounded-xl relative group hover:-translate-y-1 transition-transform duration-300">
<div className="w-12 h-12 bg-slate-950 border border-white/10 rounded-full flex items-center justify-center text-white font-semibold text-sm mb-6 absolute -top-6 left-6 shadow-xl">04</div>
<h3 className="text-white font-medium text-lg mt-4 mb-3">Execution</h3>
<ul className="space-y-2 text-sm text-slate-400">
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-indigo-500 rounded-full"></div>Decision Support</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-indigo-500 rounded-full"></div>Metrics &amp; Control</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-indigo-500 rounded-full"></div>Iteration</li>
</ul>
</div>
</div>
<p className="text-center text-slate-500 text-sm mt-12">We don't sell "7-day results". We sell the quality of decisions.</p>
</div>
</section>

<section className="py-24">
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-white mb-12">Services</h2>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">

<div className="bg-slate-950 p-8 hover:bg-slate-900/50 transition-colors">
<iconify-icon className="text-indigo-400 mb-4" height="24" icon="lucide:search" strokeWidth="1.5" width="24"></iconify-icon>
<h3 className="text-white font-medium mb-2">Market Research &amp; Intelligence</h3>
<p className="text-sm text-slate-400">Deep dive into market dynamics, opportunities, and competitive landscapes.</p>
</div>

<div className="bg-slate-950 p-8 hover:bg-slate-900/50 transition-colors">
<iconify-icon className="text-indigo-400 mb-4" height="24" icon="lucide:bar-chart-2" strokeWidth="1.5" width="24"></iconify-icon>
<h3 className="text-white font-medium mb-2">Business &amp; Growth Strategy</h3>
<p className="text-sm text-slate-400">Building the fundamental architecture for sustainable revenue scaling.</p>
</div>

<div className="bg-slate-950 p-8 hover:bg-slate-900/50 transition-colors">
<iconify-icon className="text-indigo-400 mb-4" height="24" icon="lucide:rocket" strokeWidth="1.5" width="24"></iconify-icon>
<h3 className="text-white font-medium mb-2">Go-To-Market Strategy</h3>
<p className="text-sm text-slate-400">Actionable plans to launch products or enter new segments effectively.</p>
</div>

<div className="bg-slate-950 p-8 hover:bg-slate-900/50 transition-colors">
<iconify-icon className="text-indigo-400 mb-4" height="24" icon="lucide:target" strokeWidth="1.5" width="24"></iconify-icon>
<h3 className="text-white font-medium mb-2">Product &amp; Positioning</h3>
<p className="text-sm text-slate-400">Aligning product value with customer needs to achieve market fit.</p>
</div>

<div className="bg-slate-950 p-8 hover:bg-slate-900/50 transition-colors">
<iconify-icon className="text-indigo-400 mb-4" height="24" icon="lucide:map" strokeWidth="1.5" width="24"></iconify-icon>
<h3 className="text-white font-medium mb-2">Market Entry &amp; Expansion</h3>
<p className="text-sm text-slate-400">Structured roadmaps for internationalization and new region entry.</p>
</div>

<div className="bg-slate-950 p-8 hover:bg-slate-900/50 transition-colors">
<iconify-icon className="text-indigo-400 mb-4" height="24" icon="lucide:messages-square" strokeWidth="1.5" width="24"></iconify-icon>
<h3 className="text-white font-medium mb-2">Strategic Advisory</h3>
<p className="text-sm text-slate-400">Retainer-based partnership for ongoing executive decision support.</p>
</div>
</div>
</div>
</section>

<section className="py-20 border-y border-white/5 bg-white/[0.02]">
<div className="max-w-6xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-12">
<div>
<h2 className="text-2xl font-medium tracking-tight text-white mb-6">Experience Based</h2>
<p className="text-slate-400 text-sm leading-relaxed mb-8">
                        We don't rely on theory. Our frameworks are built on real-world challenges solved for companies ranging from pre-seed disruptors to established international players.
                    </p>
<div className="flex gap-4">
<div className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs text-white">Market Entry</div>
<div className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs text-white">Scaling</div>
<div className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs text-white">Repositioning</div>
</div>
</div>
<div className="space-y-6">
<div className="flex gap-4 items-start">
<iconify-icon className="text-slate-600 mt-0.5 flex-shrink-0" icon="lucide:check-circle-2" width="20"></iconify-icon>
<p className="text-slate-300 text-sm">Guided market entry strategies for companies expanding into new geographic regions.</p>
</div>
<div className="flex gap-4 items-start">
<iconify-icon className="text-slate-600 mt-0.5 flex-shrink-0" icon="lucide:check-circle-2" width="20"></iconify-icon>
<p className="text-slate-300 text-sm">Transformed chaotic early traction into structured, predictable growth engines.</p>
</div>
<div className="flex gap-4 items-start">
<iconify-icon className="text-slate-600 mt-0.5 flex-shrink-0" icon="lucide:check-circle-2" width="20"></iconify-icon>
<p className="text-slate-300 text-sm">Successfully repositioned brands in highly competitive "red ocean" markets.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-white mb-12 text-center">Why Elevate Company</h2>
<div className="grid md:grid-cols-3 gap-8">
<div className="p-6 border-l border-white/10 pl-6">
<h3 className="text-white font-medium mb-2">Strategy before execution</h3>
<p className="text-sm text-slate-400">We don't just "do things". We determine the right things to do first.</p>
</div>
<div className="p-6 border-l border-white/10 pl-6">
<h3 className="text-white font-medium mb-2">No templates</h3>
<p className="text-sm text-slate-400">Tailored frameworks designed specifically for your business model and stage.</p>
</div>
<div className="p-6 border-l border-white/10 pl-6">
<h3 className="text-white font-medium mb-2">Founder-level thinking</h3>
<p className="text-sm text-slate-400">We understand the weight of decision-making and the loneliness of the role.</p>
</div>
<div className="p-6 border-l border-white/10 pl-6">
<h3 className="text-white font-medium mb-2">Data-driven</h3>
<p className="text-sm text-slate-400">Insights derived from hard metrics, not ephemeral market trends.</p>
</div>
<div className="p-6 border-l border-white/10 pl-6">
<h3 className="text-white font-medium mb-2">International Mindset</h3>
<p className="text-sm text-slate-400">Global perspective for businesses looking beyond local borders.</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-900/30">
<div className="max-w-4xl mx-auto px-6">
<h2 className="text-2xl font-medium tracking-tight text-white mb-10 text-center">How we work</h2>
<div className="space-y-4">
<div className="flex items-center gap-6 p-4 rounded-xl hover:bg-white/5 transition-colors">
<span className="text-slate-500 font-mono text-sm">01</span>
<div className="h-px bg-white/10 flex-grow"></div>
<span className="text-white text-sm font-medium">Intro call (fit &amp; goals)</span>
</div>
<div className="flex items-center gap-6 p-4 rounded-xl hover:bg-white/5 transition-colors">
<span className="text-slate-500 font-mono text-sm">02</span>
<div className="h-px bg-white/10 flex-grow"></div>
<span className="text-white text-sm font-medium">Diagnostic phase</span>
</div>
<div className="flex items-center gap-6 p-4 rounded-xl hover:bg-white/5 transition-colors">
<span className="text-slate-500 font-mono text-sm">03</span>
<div className="h-px bg-white/10 flex-grow"></div>
<span className="text-white text-sm font-medium">Strategy design</span>
</div>
<div className="flex items-center gap-6 p-4 rounded-xl hover:bg-white/5 transition-colors">
<span className="text-slate-500 font-mono text-sm">04</span>
<div className="h-px bg-white/10 flex-grow"></div>
<span className="text-white text-sm font-medium">Support &amp; iteration</span>
</div>
</div>
</div>
</section>

<section className="py-24 px-6" id="contact">
<div className="max-w-xl mx-auto">
<div className="text-center mb-10">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">Let’s elevate your decision-making.</h2>
<p className="text-slate-400 text-sm">Fill out the form below to request a strategy call.</p>
</div>
<form className="space-y-6 bg-slate-900/50 p-8 rounded-2xl border border-white/5">
<div className="space-y-1">
<label className="text-xs text-slate-400 uppercase tracking-wider font-medium">Name</label>
<input className="w-full bg-transparent border-b border-white/10 focus:border-white py-2 text-white outline-none transition-colors placeholder:text-slate-700" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs text-slate-400 uppercase tracking-wider font-medium">Work Email</label>
<input className="w-full bg-transparent border-b border-white/10 focus:border-white py-2 text-white outline-none transition-colors placeholder:text-slate-700" placeholder="john@company.com" type="email"/>
</div>
<div className="grid grid-cols-2 gap-6">
<div className="space-y-1">
<label className="text-xs text-slate-400 uppercase tracking-wider font-medium">Company</label>
<input className="w-full bg-transparent border-b border-white/10 focus:border-white py-2 text-white outline-none transition-colors placeholder:text-slate-700" placeholder="Acme Inc" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs text-slate-400 uppercase tracking-wider font-medium">Role</label>
<input className="w-full bg-transparent border-b border-white/10 focus:border-white py-2 text-white outline-none transition-colors placeholder:text-slate-700" placeholder="CEO / Founder" type="text"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs text-slate-400 uppercase tracking-wider font-medium">Challenge</label>
<textarea className="w-full bg-transparent border-b border-white/10 focus:border-white py-2 text-white outline-none transition-colors placeholder:text-slate-700 resize-none h-24" placeholder="Briefly describe your current strategic challenge..."></textarea>
</div>
<button className="w-full mt-8 bg-white text-slate-950 font-medium py-3 rounded-lg hover:bg-slate-200 transition-colors" type="submit">
                    Request Strategy Call
                </button>
<p className="text-center text-xs text-slate-600 mt-4">We respect your privacy. Zero spam.</p>
</form>
</div>
</section>

<footer className="py-12 border-t border-white/5 text-center px-6">
<a className="text-sm font-semibold tracking-tighter text-white inline-flex items-center gap-2 mb-6" href="#">
<div className="w-4 h-4 bg-white rounded-sm flex items-center justify-center">
<div className="w-1.5 h-1.5 bg-slate-950 rounded-[1px]"></div>
</div>
            ELEVATE
        </a>
<p className="text-slate-600 text-xs">© 2023 Elevate Company. All rights reserved.</p>
</footer>

    </>
  );
}
