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
      

<div className="fixed inset-0 pointer-events-none z-0">
<div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-neutral-900/30 blur-[120px] rounded-full mix-blend-screen"></div>
<div className="absolute bottom-[-10%] left-0 w-[600px] h-[600px] bg-neutral-900/20 blur-[100px] rounded-full mix-blend-screen"></div>
</div>

<nav className="fixed top-0 w-full z-50 backdrop-blur-md border-b border-neutral-900/50 bg-neutral-950/70">
<div className="max-w-2xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-white font-medium tracking-tighter text-sm uppercase" href="#">
                SPWM
            </a>
<a className="text-xs font-medium text-neutral-400 hover:text-white transition-colors" href="#contact">
                Contact
            </a>
</div>
</nav>
<main className="relative z-10 max-w-2xl mx-auto px-6">

<section className="pt-40 pb-24 md:pt-48 md:pb-32 fade-in">
<div className="flex flex-col gap-6">
<h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white tracking-tight leading-[1.1]">
                    Wealth Management Is Becoming Increasingly Difficult
                </h1>
<p className="text-xl md:text-2xl text-neutral-300 font-light tracking-tight">
                    Costs rise. Complexity grows. Expectations never slow down.
                </p>
<p className="text-base md:text-lg text-neutral-500 font-light leading-relaxed max-w-lg">
                    Across markets, wealth management firms are facing challenges that traditional approaches no longer resolve.
                </p>
</div>
<div className="mt-12">
<div className="w-px h-16 bg-gradient-to-b from-neutral-800 to-transparent"></div>
</div>
</section>

<section className="py-20 border-t border-neutral-900 fade-in delay-100">
<span className="text-xs font-medium uppercase tracking-widest text-neutral-600 mb-8 block">The Reality</span>
<h2 className="text-2xl md:text-3xl font-medium text-white tracking-tight mb-12">
                Where Wealth Managers Feel Stuck
            </h2>
<div className="space-y-4">

<div className="group flex items-start gap-4 p-4 rounded-xl hover:bg-neutral-900/40 transition-colors border border-transparent hover:border-neutral-900">
<iconify-icon className="text-neutral-500 mt-1 shrink-0" height="20" icon="solar:chart-square-linear" width="20"></iconify-icon>
<p className="text-neutral-300 font-light text-sm md:text-base leading-relaxed">
                        Winning new clients requires more effort, more spend, and longer cycles
                    </p>
</div>
<div className="group flex items-start gap-4 p-4 rounded-xl hover:bg-neutral-900/40 transition-colors border border-transparent hover:border-neutral-900">
<iconify-icon className="text-neutral-500 mt-1 shrink-0" height="20" icon="solar:graph-down-linear" width="20"></iconify-icon>
<p className="text-neutral-300 font-light text-sm md:text-base leading-relaxed">
                        Margins continue to compress while service demands increase
                    </p>
</div>
<div className="group flex items-start gap-4 p-4 rounded-xl hover:bg-neutral-900/40 transition-colors border border-transparent hover:border-neutral-900">
<iconify-icon className="text-neutral-500 mt-1 shrink-0" height="20" icon="solar:document-add-linear" width="20"></iconify-icon>
<p className="text-neutral-300 font-light text-sm md:text-base leading-relaxed">
                        Regulatory requirements grow, but add little strategic value
                    </p>
</div>
<div className="group flex items-start gap-4 p-4 rounded-xl hover:bg-neutral-900/40 transition-colors border border-transparent hover:border-neutral-900">
<iconify-icon className="text-neutral-500 mt-1 shrink-0" height="20" icon="solar:server-square-linear" width="20"></iconify-icon>
<p className="text-neutral-300 font-light text-sm md:text-base leading-relaxed">
                        Technology initiatives promise efficiency, yet introduce fragmentation
                    </p>
</div>
<div className="group flex items-start gap-4 p-4 rounded-xl hover:bg-neutral-900/40 transition-colors border border-transparent hover:border-neutral-900">
<iconify-icon className="text-neutral-500 mt-1 shrink-0" height="20" icon="solar:clock-circle-linear" width="20"></iconify-icon>
<p className="text-neutral-300 font-light text-sm md:text-base leading-relaxed">
                        Advisors spend more time managing systems than managing relationships
                    </p>
</div>
</div>
<div className="mt-12 p-6 bg-neutral-900/30 border border-neutral-900 rounded-lg text-center">
<p className="text-neutral-400 text-sm font-light">
                    Most firms recognize these pressures.<br/>
<span className="text-neutral-200">Many struggle to move beyond them.</span>
</p>
</div>
</section>

<section className="py-20 border-t border-neutral-900 fade-in delay-200">
<span className="text-xs font-medium uppercase tracking-widest text-neutral-600 mb-8 block">Root Causes</span>
<h2 className="text-2xl md:text-3xl font-medium text-white tracking-tight mb-12">
                Why Progress Feels So Hard
            </h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="p-6 rounded-2xl bg-neutral-900/20 border border-neutral-800/50 backdrop-blur-sm">
<iconify-icon className="text-neutral-400 mb-4" height="24" icon="solar:medical-kit-linear" width="24"></iconify-icon>
<p className="text-sm text-neutral-300 font-light leading-relaxed">
                        Initiatives address symptoms rather than root causes
                    </p>
</div>
<div className="p-6 rounded-2xl bg-neutral-900/20 border border-neutral-800/50 backdrop-blur-sm">
<iconify-icon className="text-neutral-400 mb-4" height="24" icon="solar:signpost-2-linear" width="24"></iconify-icon>
<p className="text-sm text-neutral-300 font-light leading-relaxed">
                        Growth, risk, and compliance pull the business in different directions
                    </p>
</div>
<div className="p-6 rounded-2xl bg-neutral-900/20 border border-neutral-800/50 backdrop-blur-sm">
<iconify-icon className="text-neutral-400 mb-4" height="24" icon="solar:layers-linear" width="24"></iconify-icon>
<p className="text-sm text-neutral-300 font-light leading-relaxed">
                        Operating models were not designed for today’s scale or complexity
                    </p>
</div>
<div className="p-6 rounded-2xl bg-neutral-900/20 border border-neutral-800/50 backdrop-blur-sm">
<iconify-icon className="text-neutral-400 mb-4" height="24" icon="solar:globe-linear" width="24"></iconify-icon>
<p className="text-sm text-neutral-300 font-light leading-relaxed">
                        What works locally often fails when applied globally
                    </p>
</div>
<div className="p-6 rounded-2xl bg-neutral-900/20 border border-neutral-800/50 backdrop-blur-sm md:col-span-2">
<iconify-icon className="text-neutral-400 mb-4" height="24" icon="solar:calendar-linear" width="24"></iconify-icon>
<p className="text-sm text-neutral-300 font-light leading-relaxed">
                        Day-to-day demands leave little space for structural change
                    </p>
</div>
</div>
<div className="mt-10">
<p className="text-lg md:text-xl text-neutral-200 font-light tracking-tight">
                    The result is slow, incremental improvement — when decisive change is required.
                </p>
</div>
</section>

<section className="py-20 border-t border-neutral-900 fade-in delay-300">
<h2 className="text-2xl md:text-3xl font-medium text-white tracking-tight mb-6">
                Rethinking the Way Forward
            </h2>
<div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-neutral-900/40 to-neutral-900/10 border border-neutral-800 p-8 md:p-10">
<div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white/5 blur-3xl rounded-full pointer-events-none"></div>
<p className="text-base md:text-lg text-neutral-300 font-light leading-relaxed mb-6">
                    We are developing a structured approach to address these challenges in a practical and scalable way — without increasing operational or regulatory risk.
                </p>
<div className="flex items-center gap-3 text-neutral-500">
<iconify-icon height="18" icon="solar:lock-keyhole-minimalistic-linear" width="18"></iconify-icon>
<span className="text-sm font-medium tracking-wide">Details are shared selectively.</span>
</div>
</div>
</section>

<section className="py-20 border-t border-neutral-900 mb-20 fade-in delay-300" id="contact">
<div className="flex flex-col md:flex-row gap-12">
<div className="md:w-1/3">
<h2 className="text-2xl font-medium text-white tracking-tight mb-4">
                        Interested in Learning More?
                    </h2>
<p className="text-sm text-neutral-400 font-light leading-relaxed mb-6">
                        If these challenges resonate with you, share your interest. We will reach out to discuss how this approach applies to your organisation.
                    </p>
<div className="flex items-center gap-2 text-xs text-neutral-600">
<iconify-icon height="16" icon="solar:shield-check-linear" width="16"></iconify-icon>
<span>All information shared is treated with strict confidentiality.</span>
</div>
</div>
<div className="md:w-2/3">
<form className="space-y-4">
<div className="space-y-1">
<label className="text-xs text-neutral-500 ml-1" htmlFor="name">Full Name</label>
<input className="w-full bg-neutral-900/50 border border-neutral-800 rounded-lg px-4 py-3 text-sm text-neutral-200 placeholder-neutral-700 focus:outline-none focus:border-neutral-600 focus:ring-1 focus:ring-neutral-600 transition-all" id="name" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs text-neutral-500 ml-1" htmlFor="org">Organisation Name</label>
<input className="w-full bg-neutral-900/50 border border-neutral-800 rounded-lg px-4 py-3 text-sm text-neutral-200 placeholder-neutral-700 focus:outline-none focus:border-neutral-600 focus:ring-1 focus:ring-neutral-600 transition-all" id="org" placeholder="Acme Wealth" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs text-neutral-500 ml-1" htmlFor="email">Business Email</label>
<input className="w-full bg-neutral-900/50 border border-neutral-800 rounded-lg px-4 py-3 text-sm text-neutral-200 placeholder-neutral-700 focus:outline-none focus:border-neutral-600 focus:ring-1 focus:ring-neutral-600 transition-all" id="email" placeholder="john@acme.com" type="email"/>
</div>
<div className="space-y-1">
<label className="text-xs text-neutral-500 ml-1" htmlFor="mobile">Mobile Number</label>
<input className="w-full bg-neutral-900/50 border border-neutral-800 rounded-lg px-4 py-3 text-sm text-neutral-200 placeholder-neutral-700 focus:outline-none focus:border-neutral-600 focus:ring-1 focus:ring-neutral-600 transition-all" id="mobile" placeholder="+44 7700 900000" type="tel"/>
</div>
<button className="mt-6 w-full bg-white hover:bg-neutral-200 text-black text-sm font-medium py-3.5 rounded-lg transition-colors flex items-center justify-center gap-2 group" type="button">
                            Share My Interest
                            <iconify-icon className="group-hover:translate-x-0.5 transition-transform" height="18" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
</form>
</div>
</div>
</section>
</main>

<footer className="border-t border-neutral-900 py-12 bg-neutral-950">
<div className="max-w-2xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-neutral-600">
                © Solving Problems of Wealth Managers
            </p>
<a className="text-xs text-neutral-600 hover:text-neutral-400 transition-colors" href="#">
                Privacy Policy
            </a>
</div>
</footer>

    </>
  );
}
