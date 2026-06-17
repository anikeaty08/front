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
      

<div className="hidden fixed inset-0 z-50 flex items-center justify-center bg-[#050914]/80 backdrop-blur-sm p-4" id="cta-modal">
<div className="bg-[#0A101D] border border-white/10 rounded-2xl w-full max-w-md p-6 sm:p-8 relative shadow-2xl">

<button className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors" onclick="document.getElementById('cta-modal').classList.add('hidden')">
<iconify-icon icon="solar:close-circle-linear" style={{strokeWidth: '1.5', fontSize: '1.5rem'}}></iconify-icon>
</button>
<div className="mb-8 text-center">
<div className="w-12 h-12 rounded-lg bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-500 mx-auto mb-4">
<iconify-icon icon="solar:pulse-linear" style={{strokeWidth: '1.5', fontSize: '1.5rem'}}></iconify-icon>
</div>
<h3 className="text-2xl font-medium text-white tracking-tight">Partner with Laminar</h3>
<p className="text-base text-slate-400 mt-2 font-light">Enter your details to schedule a demo.</p>
</div>
<form className="space-y-4" onsubmit="event.preventDefault(); document.getElementById('cta-modal').classList.add('hidden');">
<div>
<label className="block text-sm font-medium text-slate-300 mb-1.5">Full Name</label>
<input className="w-full bg-[#050914] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-base" placeholder="Dr. Jane Doe" required="" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-300 mb-1.5">Email Address</label>
<input className="w-full bg-[#050914] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-base" placeholder="jane@hospital.org" required="" type="email"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-300 mb-1.5">Practice Details (Specialization)</label>
<input className="w-full bg-[#050914] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-base" placeholder="e.g. Neuro-oncology, Vascular" required="" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-300 mb-1.5">Organization Name</label>
<input className="w-full bg-[#050914] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-base" placeholder="Medical Center Name" required="" type="text"/>
</div>
<div className="pt-4">
<button className="w-full bg-blue-600 text-white px-5 py-3.5 rounded-lg hover:bg-blue-500 transition-colors font-medium text-lg" type="submit">
                        Submit Details
                    </button>
</div>
</form>
</div>
</div>

<div className="max-w-[1400px] mx-auto p-4 sm:p-6 lg:p-8 relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none z-0"></div>

<nav className="relative z-20 flex items-center justify-between px-2 py-4 border-b border-white/5 mb-8">

<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-500">
<iconify-icon icon="solar:pulse-linear" style={{strokeWidth: '1.5', fontSize: '1.5rem'}}></iconify-icon>
</div>
<span className="text-white text-2xl font-medium tracking-tight">Laminar Neuro</span>
</div>

<div className="flex items-center gap-6">
<a className="hidden md:block text-lg font-light text-slate-400 hover:text-white transition-colors" href="#case-study">Case Study</a>
<button className="group flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-md hover:bg-blue-500 transition-colors" onclick="document.getElementById('cta-modal').classList.remove('hidden')">
<span className="text-lg font-medium">Schedule a Demo</span>
</button>
</div>
</nav>

<header className="relative w-full py-12 lg:py-20 flex flex-col items-center justify-center text-center z-10">
<div className="absolute inset-0 bg-grid-pattern [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_40%,transparent_100%)] -z-10 pointer-events-none"></div>
<div className="max-w-4xl mx-auto space-y-6">
<h1 className="text-4xl sm:text-5xl lg:text-7xl text-white font-medium tracking-tight leading-[1.1]">
                    Advanced Neurology Care. <br className="hidden sm:block"/>
<span className="block text-2xl sm:text-3xl lg:text-4xl text-slate-500 font-light mt-4">Integrated Into Every Setting.</span>
</h1>
<p className="text-xl sm:text-2xl text-slate-400 font-light leading-relaxed max-w-3xl mx-auto">
                    AI-native digital neurology clinic — from referral to surgery to longitudinal follow-up.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
<button className="w-full sm:w-auto inline-flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-md hover:bg-blue-500 transition-colors" onclick="document.getElementById('cta-modal').classList.remove('hidden')">
<span className="text-lg font-medium">Schedule a Demo</span>
</button>
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-transparent text-white border border-white/10 px-8 py-4 rounded-md hover:bg-white/5 transition-colors group" href="#case-study">
<span className="text-lg font-medium">See the Neurosurgery Case Study</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:alt-arrow-right-linear" style={{strokeWidth: '1.5', fontSize: '1.25rem'}}></iconify-icon>
</a>
</div>
</div>
</header>

<section className="mt-16 relative z-10">
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">

<div className="bg-[#0A101D] border border-white/5 p-10 rounded-2xl hover:bg-[#0D1424] transition-colors">
<div className="mb-8 text-slate-500">
<iconify-icon icon="solar:clock-circle-linear" style={{strokeWidth: '1.5', fontSize: '2.5rem'}}></iconify-icon>
</div>
<span className="block text-sm font-medium uppercase tracking-widest text-slate-500 mb-4">The Access Bottleneck</span>
<h3 className="text-4xl sm:text-5xl font-medium tracking-tight text-white mb-2">90–120 Day</h3>
<div className="text-xl font-medium text-blue-400 mb-6">Rural Wait Times</div>
<p className="text-lg text-slate-400 font-light leading-relaxed">Delayed triage leads to delayed intervention.</p>
</div>

<div className="bg-[#0A101D] border border-white/5 p-10 rounded-2xl hover:bg-[#0D1424] transition-colors">
<div className="mb-8 text-slate-500">
<iconify-icon icon="solar:graph-down-linear" style={{strokeWidth: '1.5', fontSize: '2.5rem'}}></iconify-icon>
</div>
<span className="block text-sm font-medium uppercase tracking-widest text-slate-500 mb-4">Referral Leakage</span>
<h3 className="text-4xl sm:text-5xl font-medium tracking-tight text-white mb-2">$1.5M+</h3>
<div className="text-xl font-medium text-blue-400 mb-6">Lost Revenue per 100 Patients</div>
<p className="text-lg text-slate-400 font-light leading-relaxed">Imaging drop-off and poor routing reduce surgical yield.</p>
</div>

<div className="bg-[#0A101D] border border-white/5 p-10 rounded-2xl hover:bg-[#0D1424] transition-colors">
<div className="mb-8 text-slate-500">
<iconify-icon icon="solar:user-speak-linear" style={{strokeWidth: '1.5', fontSize: '2.5rem'}}></iconify-icon>
</div>
<span className="block text-sm font-medium uppercase tracking-widest text-slate-500 mb-4">Specialist Time Drain</span>
<h3 className="text-4xl sm:text-5xl font-medium tracking-tight text-white mb-2">35–40%</h3>
<div className="text-xl font-medium text-blue-400 mb-6">Administrative Load</div>
<p className="text-lg text-slate-400 font-light leading-relaxed">Neurosurgeons spending time on coordination instead of procedures.</p>
</div>
</div>
</section>

<section className="mt-20 text-center relative z-10">
<h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-white mb-16">The Laminar Neuro Pathway</h2>

<div className="relative max-w-5xl mx-auto mb-16">

<div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent -translate-y-1/2 z-0"></div>
<div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-2 relative z-10">

<div className="flex flex-col items-center gap-4 bg-[#050914] px-4">
<div className="w-16 h-16 rounded-full border border-blue-500/30 bg-[#0A101D] flex items-center justify-center text-blue-400">
<iconify-icon icon="solar:document-add-linear" style={{strokeWidth: '1.5', fontSize: '1.75rem'}}></iconify-icon>
</div>
<span className="text-base font-medium text-slate-300">Referral</span>
</div>

<div className="flex flex-col items-center gap-4 bg-[#050914] px-4">
<div className="w-16 h-16 rounded-full border border-white/10 bg-[#0A101D] flex items-center justify-center text-slate-400">
<iconify-icon icon="solar:cpu-linear" style={{strokeWidth: '1.5', fontSize: '1.75rem'}}></iconify-icon>
</div>
<span className="text-base font-medium text-slate-300">AI Triage</span>
</div>

<div className="flex flex-col items-center gap-4 bg-[#050914] px-4">
<div className="w-16 h-16 rounded-full border border-white/10 bg-[#0A101D] flex items-center justify-center text-slate-400">
<iconify-icon icon="solar:routing-linear" style={{strokeWidth: '1.5', fontSize: '1.75rem'}}></iconify-icon>
</div>
<span className="text-base font-medium text-slate-300">Sub-specialty Match</span>
</div>

<div className="flex flex-col items-center gap-4 bg-[#050914] px-4">
<div className="w-16 h-16 rounded-full border border-white/10 bg-[#0A101D] flex items-center justify-center text-slate-400">
<iconify-icon icon="solar:scanner-linear" style={{strokeWidth: '1.5', fontSize: '1.75rem'}}></iconify-icon>
</div>
<span className="text-base font-medium text-slate-300">Imaging Coordination</span>
</div>

<div className="flex flex-col items-center gap-4 bg-[#050914] px-4">
<div className="w-16 h-16 rounded-full border border-blue-500/30 bg-[#0A101D] flex items-center justify-center text-blue-400 shadow-[0_0_20px_rgba(37,99,235,0.2)]">
<iconify-icon icon="solar:health-linear" style={{strokeWidth: '1.5', fontSize: '1.75rem'}}></iconify-icon>
</div>
<span className="text-base font-medium text-white">Consultation</span>
</div>

<div className="flex flex-col items-center gap-4 bg-[#050914] px-4">
<div className="w-16 h-16 rounded-full border border-white/10 bg-[#0A101D] flex items-center justify-center text-slate-400">
<iconify-icon icon="solar:history-linear" style={{strokeWidth: '1.5', fontSize: '1.75rem'}}></iconify-icon>
</div>
<span className="text-base font-medium text-slate-300">Follow-up</span>
</div>
</div>
</div>
<p className="text-xl text-slate-400 font-light max-w-4xl mx-auto leading-relaxed">
                Laminar Neuro operates as an AI-native neurology layer embedded across your system — not another portal, but an orchestration engine.
            </p>
</section>

<section className="mt-20 relative z-10">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

<div className="bg-[#0A101D] border border-white/5 p-10 rounded-2xl flex flex-col h-full hover:bg-[#0D1424] transition-colors">
<iconify-icon className="text-white mb-6" icon="solar:pulse-linear" style={{strokeWidth: '1.5', fontSize: '2rem'}}></iconify-icon>
<h3 className="text-2xl font-medium tracking-tight text-white mb-4">Neuro Continuity Intelligence</h3>
<p className="text-lg text-slate-400 font-light leading-relaxed flex-grow">
                        AI-driven urgency flagging and surgical candidacy identification. Ensures high-acuity patients are prioritized and conversion risk is reduced.
                    </p>
</div>

<div className="bg-[#0A101D] border border-white/5 p-10 rounded-2xl flex flex-col h-full hover:bg-[#0D1424] transition-colors">
<iconify-icon className="text-white mb-6" icon="solar:layers-minimalistic-linear" style={{strokeWidth: '1.5', fontSize: '2rem'}}></iconify-icon>
<h3 className="text-2xl font-medium tracking-tight text-white mb-4">Admin Intelligence</h3>
<div className="flex-grow">
<ul className="text-lg text-slate-400 font-light leading-relaxed space-y-3">
<li className="flex items-start gap-3">
<iconify-icon className="mt-1 text-blue-500" icon="solar:check-circle-linear"></iconify-icon>
                                Automated referral parsing.
                            </li>
<li className="flex items-start gap-3">
<iconify-icon className="mt-1 text-blue-500" icon="solar:check-circle-linear"></iconify-icon>
                                Imaging readiness checks.
                            </li>
<li className="flex items-start gap-3">
<iconify-icon className="mt-1 text-blue-500" icon="solar:check-circle-linear"></iconify-icon>
                                Structured intake coordination.
                            </li>
</ul>
</div>
<p className="text-lg text-slate-500 font-light mt-6 pt-6 border-t border-white/5">Reduces specialist admin load.</p>
</div>

<div className="bg-[#0A101D] border border-white/5 p-10 rounded-2xl flex flex-col h-full hover:bg-[#0D1424] transition-colors">
<iconify-icon className="text-white mb-6" icon="solar:network-linear" style={{strokeWidth: '1.5', fontSize: '2rem'}}></iconify-icon>
<h3 className="text-2xl font-medium tracking-tight text-white mb-4">Sub-specialty Routing</h3>
<p className="text-lg text-slate-400 font-light leading-relaxed flex-grow">
                        Precision matching to Vascular, Epilepsy, or Neuro-oncology experts. Optimizes surgical yield and continuity of care.
                    </p>
</div>
</div>
</section>

<section className="mt-20 relative z-10" id="case-study">
<div className="bg-[#0A101D] border border-white/5 rounded-2xl overflow-hidden flex flex-col lg:flex-row shadow-2xl">

<div className="lg:w-1/2 p-10 sm:p-14 lg:p-16 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/5 relative">
<div className="absolute inset-0 bg-blue-600/5 blur-[80px] rounded-full z-0 pointer-events-none"></div>
<div className="relative z-10">
<h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-white mb-8">Routine Neurosurgery Leakage</h2>
<p className="text-xl text-slate-400 font-light mb-12 leading-relaxed">
                            Laminar Neuro closes the operational gaps between referral and consultation — converting eligible patients who would otherwise be lost to fragmentation.
                        </p>
<div>
<button className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3 rounded-lg text-blue-400 hover:text-blue-300 hover:bg-white/10 font-medium text-lg transition-all group" onclick="document.getElementById('cta-modal').classList.remove('hidden')">
                                See the Full Case Study 
                                <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:alt-arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
</div>

<div className="lg:w-1/2 p-10 sm:p-14 lg:p-16 bg-gradient-to-br from-[#0D1424] to-[#0A101D] relative">
<div className="space-y-8 relative z-10">

<div className="bg-[#050914]/80 border border-white/5 rounded-xl p-8 backdrop-blur-md">
<div className="flex items-center gap-3 mb-4">
<iconify-icon className="text-slate-500 text-xl" icon="solar:close-circle-linear"></iconify-icon>
<span className="text-sm font-medium uppercase tracking-widest text-slate-500">Before Laminar</span>
</div>
<div className="flex items-end gap-4 mb-2">
<div className="text-5xl font-medium text-slate-300 tracking-tight">25%</div>
<div className="text-xl text-slate-500 font-light mb-1">Loss Rate</div>
</div>
<p className="text-lg text-slate-400 font-light">of surgical candidates lost before imaging completion.</p>
</div>

<div className="bg-blue-600/10 border border-blue-500/20 rounded-xl p-8 backdrop-blur-md relative overflow-hidden">
<div className="absolute right-0 top-0 w-32 h-32 bg-blue-500/20 blur-[40px] rounded-full"></div>
<div className="flex items-center gap-3 mb-4 relative z-10">
<iconify-icon className="text-blue-400 text-xl" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm font-medium uppercase tracking-widest text-blue-400">After Laminar</span>
</div>
<div className="text-3xl sm:text-4xl font-medium text-white tracking-tight mb-4 relative z-10">Increased Completion</div>
<p className="text-lg text-slate-300 font-light mb-6 relative z-10">Higher imaging completion rates leading to surgical readiness.</p>
<div className="inline-flex items-center gap-3 bg-blue-500/20 border border-blue-500/30 rounded-lg px-5 py-3 text-blue-300 font-medium text-lg relative z-10">
<iconify-icon className="text-xl" icon="solar:wad-of-money-linear"></iconify-icon>
                                $1.5M additional captured revenue / 100 patients
                            </div>
</div>
</div>
</div>
</div>
</section>

<footer className="mt-24 pb-16 text-center relative z-10">
<div className="max-w-4xl mx-auto space-y-10">
<h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-[1.2]">
                    Laminar Neuro - Where Location Doesn't Limit Care.
                </h2>
<button className="inline-flex items-center justify-center bg-white text-[#050914] px-10 py-4 rounded-md hover:bg-slate-200 transition-colors mt-4 shadow-[0_0_30px_rgba(255,255,255,0.15)]" onclick="document.getElementById('cta-modal').classList.remove('hidden')">
<span className="text-xl font-medium">Partner With Us</span>
</button>
</div>
<div className="mt-24 flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-white/5 text-sm text-slate-500 font-light">
<div className="flex items-center gap-2 mb-4 sm:mb-0">
<iconify-icon icon="solar:pulse-linear" style={{strokeWidth: '1.5', fontSize: '1.25rem'}}></iconify-icon>
<span className="font-medium text-slate-400">Laminar Neuro Systems</span>
</div>
<div>© 2024 Laminar Neuro. Enterprise Grade Operations.</div>
</div>
</footer>
</div>

    </>
  );
}
