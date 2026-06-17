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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#020205]/80 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-purple-600 flex items-center justify-center text-white">
<i className="w-5 h-5" data-lucide="aperture"></i>
</div>
<span className="text-white font-semibold tracking-tight text-lg">Krishapex</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
<a className="hover:text-purple-400 transition-colors" href="#system">Solutions</a>
<a className="hover:text-purple-400 transition-colors" href="#process">Process</a>
<a className="hover:text-purple-400 transition-colors" href="#results">Results</a>
<a className="hover:text-purple-400 transition-colors" href="#faq">Resources</a>
</div>
<div>
<button className="bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold px-6 py-2.5 rounded-sm transition-all shadow-[0_0_15px_-3px_rgba(124,58,237,0.5)] tracking-wide uppercase">
                    Book a Call
                </button>
</div>
</div>
</nav>
<main className="relative z-10 pt-32 pb-20">

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-full max-w-3xl h-[600px] bg-purple-800/20 blur-[120px] rounded-full opacity-50"></div>
<div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-900/10 blur-[100px] rounded-full"></div>
</div>

<section className="max-w-5xl mx-auto px-6 mb-40 relative z-10 text-center">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-xs font-medium text-purple-300 mb-8">
<span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse"></span>
                Acquisition Intelligence v2.0
            </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold text-white tracking-tighter leading-[1.1] mb-8">
                Client Acquisition <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 text-glow">Built to Scale.</span>
</h1>
<p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-light mb-12">
                Predictable High-Ticket Clients Without Ads, Hustle, or Referrals. We install outbound, inbound, and sales infrastructure that generates consistent revenue.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-6">
<button className="h-12 px-8 rounded-sm bg-white text-black text-sm font-semibold hover:bg-slate-200 transition-all flex items-center gap-2 shadow-[0_0_30px_-5px_rgba(255,255,255,0.2)] uppercase tracking-wide">
                    Start Strategy
                    <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
<button className="h-12 px-8 rounded-sm text-slate-300 border border-white/10 hover:bg-white/5 transition-all text-sm font-medium flex items-center gap-2 uppercase tracking-wide">
                    View Systems
                </button>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 py-24 relative" id="process">

<div className="absolute left-6 md:left-[8%] top-24 bottom-24 w-px bg-white/10 hidden md:block">
<div className="absolute top-0 w-full h-1/2 bg-gradient-to-b from-purple-600 via-purple-900 to-transparent"></div>
</div>
<div className="space-y-32">

<div className="relative md:pl-[15%] group">

<div className="hidden md:flex absolute left-[8%] top-8 -translate-x-1/2 w-4 h-4 rounded-full bg-[#020205] border-2 border-purple-600 shadow-[0_0_15px_rgba(124,58,237,0.8)] items-center justify-center z-10">
<div className="w-1.5 h-1.5 rounded-full bg-purple-400"></div>
</div>
<div className="relative">
<h2 className="text-4xl md:text-6xl font-semibold text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-500 mb-8 uppercase tracking-tighter">
                            Outbound <br/> <span className="text-purple-500">Infrastructure</span>
</h2>
<div className="absolute -z-10 -top-10 -left-10 text-[180px] font-bold text-white/5 select-none leading-none">1</div>
<div className="glass-panel p-8 md:p-12 rounded-2xl relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 blur-[80px] rounded-full"></div>
<p className="text-lg text-slate-300 font-light leading-relaxed mb-6">
                                Outbound is where speed and clarity come from. We install multiple automated outbound systems across platforms where decision-makers already are.
                            </p>
<p className="text-base text-slate-500 leading-relaxed">
                                We don't depend on a single channel. Start relevant conversations, validate offers quickly, and generate booked calls immediately.
                            </p>
<div className="mt-8 flex items-center gap-4 text-xs font-semibold text-purple-400 uppercase tracking-wider">
<i className="w-4 h-4" data-lucide="check-circle-2"></i>
                                Predictable Appointment Flow
                            </div>
</div>
</div>
</div>

<div className="relative md:pl-[15%] group">

<div className="hidden md:flex absolute left-[8%] top-8 -translate-x-1/2 w-4 h-4 rounded-full bg-[#020205] border border-white/20 group-hover:border-purple-600 group-hover:shadow-[0_0_15px_rgba(124,58,237,0.8)] transition-all items-center justify-center z-10">
<div className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-purple-400 transition-colors"></div>
</div>
<div className="relative">
<h2 className="text-4xl md:text-6xl font-semibold text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-500 mb-8 uppercase tracking-tighter">
                            Inbound <br/> <span className="text-purple-500">Authority</span>
</h2>
<div className="absolute -z-10 -top-10 -left-10 text-[180px] font-bold text-white/5 select-none leading-none">2</div>
<div className="glass-panel p-8 md:p-12 rounded-2xl relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 blur-[80px] rounded-full"></div>
<p className="text-lg text-slate-300 font-light leading-relaxed mb-6">
                                Once outbound proves demand, we convert that proof into inbound authority. Structured content and positioning systems educate prospects automatically.
                            </p>
<p className="text-base text-slate-500 leading-relaxed">
                                No "influencer" tactics — just clarity, proof, and relevance. Turn strangers into informed, high-intent leads before the call happens.
                            </p>
<div className="mt-8 flex items-center gap-4 text-xs font-semibold text-purple-400 uppercase tracking-wider">
<i className="w-4 h-4" data-lucide="check-circle-2"></i>
                                Automated Trust Building
                            </div>
</div>
</div>
</div>

<div className="relative md:pl-[15%] group">

<div className="hidden md:flex absolute left-[8%] top-8 -translate-x-1/2 w-4 h-4 rounded-full bg-[#020205] border border-white/20 group-hover:border-purple-600 group-hover:shadow-[0_0_15px_rgba(124,58,237,0.8)] transition-all items-center justify-center z-10">
<div className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-purple-400 transition-colors"></div>
</div>
<div className="relative">
<h2 className="text-4xl md:text-6xl font-semibold text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-indigo-600 mb-8 uppercase tracking-tighter">
                            Sales <br/> Mastery
                        </h2>
<div className="absolute -z-10 -top-10 -left-10 text-[180px] font-bold text-purple-900/10 select-none leading-none">3</div>
<div className="glass-panel p-8 md:p-12 rounded-2xl relative overflow-hidden border-purple-500/20">

<div className="absolute -right-20 -top-20 w-96 h-96 bg-purple-600/20 blur-[100px] rounded-full pointer-events-none"></div>
<p className="text-lg text-slate-300 font-light leading-relaxed mb-6">
                                After Proof of Concept has been established, we will coach you to <span className="text-white font-semibold">Sell, Extremely f**king Well.</span>
</p>
<p className="text-lg text-slate-300 font-light leading-relaxed mb-6">
                                We will help you create a <span className="text-purple-400 font-medium">Plug and Play Sales System</span> that helps you skyrocket your sales.
                            </p>
<p className="text-base text-slate-400 leading-relaxed mb-6">
                                We ensure you close high-ticket deals consistently, by refining your pitch, flow, and objection handling process using a system so dialed-in, <span className="text-white font-medium">it feels unfair</span> to everyone else.
                            </p>
<p className="text-base text-white font-medium leading-relaxed">
                                This system has personally helped us close over 500+ clients in less than 3 years.
                            </p>
</div>
</div>
</div>

<div className="relative md:pl-[15%] group">

<div className="hidden md:flex absolute left-[8%] top-8 -translate-x-1/2 w-4 h-4 rounded-full bg-[#020205] border border-white/20 group-hover:border-purple-600 group-hover:shadow-[0_0_15px_rgba(124,58,237,0.8)] transition-all items-center justify-center z-10">
<div className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-purple-400 transition-colors"></div>
</div>
<div className="relative">
<h2 className="text-4xl md:text-6xl font-semibold text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-500 mb-8 uppercase tracking-tighter">
                            Radical <br/> <span className="text-purple-500">Discipline</span>
</h2>
<div className="absolute -z-10 -top-10 -left-10 text-[180px] font-bold text-white/5 select-none leading-none">4</div>
<div className="glass-panel p-8 md:p-12 rounded-2xl relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 blur-[80px] rounded-full"></div>
<p className="text-lg text-slate-300 font-light leading-relaxed mb-6">
                                The greatest strategy fails without the engine of execution. We don't just hand you a map; we ensure you walk the path.
                            </p>
<p className="text-base text-slate-500 leading-relaxed">
                                We install daily tracking protocols, KPI scorecards, and a rhythm of accountability that eliminates "motivation" from the equation. Success becomes a mathematical inevitability of your routine.
                            </p>
<div className="mt-8 flex items-center gap-4 text-xs font-semibold text-purple-400 uppercase tracking-wider">
<i className="w-4 h-4" data-lucide="check-circle-2"></i>
                                Elite Performance Habits
                            </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative border-y border-white/5 bg-black/20" id="system">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight">Two Paths. One Standard.</h2>
<p className="text-slate-400 max-w-2xl mx-auto">
                        Whether we build it with you or for you, the destination is the same: predictable scale.
                    </p>
</div>
<div className="grid md:grid-cols-2 gap-8">

<div className="glass-panel p-10 rounded-2xl relative group">
<div className="absolute top-0 right-0 w-40 h-40 bg-purple-500/10 rounded-full blur-[60px] group-hover:bg-purple-500/20 transition-all"></div>
<div className="text-xs font-bold text-purple-400 mb-6 uppercase tracking-widest">Done-With-You</div>
<h3 className="text-2xl font-semibold text-white mb-4">Implementation &amp; Consulting</h3>
<p className="text-sm text-slate-400 leading-relaxed mb-8">
                            We work closely with you to install a complete client-acquisition infrastructure. Define a clear niche, build a high-ticket offer, and set up automated systems.
                        </p>
<ul className="space-y-4 mb-10">
<li className="flex items-center gap-3 text-sm text-slate-300">
<i className="text-purple-500 w-4 h-4" data-lucide="check"></i> Focus on knowledge transfer
                            </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<i className="text-purple-500 w-4 h-4" data-lucide="check"></i> Weekly implementation calls
                            </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<i className="text-purple-500 w-4 h-4" data-lucide="check"></i> Full asset library access
                            </li>
</ul>
</div>

<div className="glass-panel p-10 rounded-2xl relative group border-purple-500/30">
<div className="absolute top-0 right-0 w-40 h-40 bg-indigo-500/20 rounded-full blur-[60px] group-hover:bg-indigo-500/30 transition-all"></div>
<div className="text-xs font-bold text-indigo-400 mb-6 uppercase tracking-widest">Done-For-You</div>
<h3 className="text-2xl font-semibold text-white mb-4">Full Scale Execution</h3>
<p className="text-sm text-slate-400 leading-relaxed mb-8">
                            We take full ownership. From engineering demand-driven offers to building automated booking systems and refining sales. Your role is strategy.
                        </p>
<ul className="space-y-4 mb-10">
<li className="flex items-center gap-3 text-sm text-slate-300">
<i className="text-indigo-500 w-4 h-4" data-lucide="check"></i> Complete system build-out
                            </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<i className="text-indigo-500 w-4 h-4" data-lucide="check"></i> Dedicated account manager
                            </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<i className="text-indigo-500 w-4 h-4" data-lucide="check"></i> Revenue-share opportunities
                            </li>
</ul>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-[#010103] pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-2 mb-6">
<div className="w-6 h-6 rounded bg-purple-600 flex items-center justify-center text-white">
<i className="w-4 h-4" data-lucide="aperture"></i>
</div>
<span className="text-white font-semibold text-lg">Krishapex</span>
</div>
<p className="text-sm text-slate-500 max-w-sm">
                            The modern client acquisition infrastructure for scale. Monotonous consistency, radical discipline, and systems that work.
                        </p>
</div>
<div>
<h4 className="text-white text-sm font-semibold mb-6 uppercase tracking-wider">Company</h4>
<ul className="space-y-4 text-sm text-slate-500">
<li><a className="hover:text-purple-400 transition-colors" href="#">Our Process</a></li>
<li><a className="hover:text-purple-400 transition-colors" href="#">Case Studies</a></li>
<li><a className="hover:text-purple-400 transition-colors" href="#">Book a Call</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-semibold mb-6 uppercase tracking-wider">Legal</h4>
<ul className="space-y-4 text-sm text-slate-500">
<li><a className="hover:text-purple-400 transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-purple-400 transition-colors" href="#">Terms</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-600">© 2024 Krishapex. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-slate-600 hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="twitter"></i></a>
<a className="text-slate-600 hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="linkedin"></i></a>
<a className="text-slate-600 hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="instagram"></i></a>
</div>
</div>
</div>
</footer>
</main>


    </>
  );
}
