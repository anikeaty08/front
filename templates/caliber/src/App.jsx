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



        function calculateLeak() {
            const revenue = document.getElementById('calc-revenue').value;
            const reps = document.getElementById('calc-reps').value; // Keeping logic simple as per prompt
            
            if (revenue) {
                const leak = revenue * 0.35;
                const formatter = new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD',
                    maximumFractionDigits: 0
                });
                
                document.getElementById('leak-amount').innerText = formatter.format(leak);
                document.getElementById('calc-result').classList.remove('hidden');
            }
        }
    
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
      

<nav className="fixed w-full z-50 top-0 border-b border-white/5 bg-[#0A0A0A]/80 backdrop-blur-xl h-16">
<div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-gradient-to-br from-white to-emerald-100 rounded-md flex items-center justify-center shadow-lg shadow-emerald-900/20">
<div className="w-2.5 h-2.5 bg-emerald-950 rounded-[2px]"></div>
</div>
<span className="text-sm font-semibold tracking-tight text-white">Caliber</span>
</div>
<div className="flex items-center gap-6">
<a className="hidden md:block text-xs font-medium text-neutral-400 hover:text-white transition-colors" href="#closers">I'm a Closer</a>
<a className="text-xs bg-white text-emerald-950 px-4 py-2 rounded-full font-medium hover:bg-emerald-50 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.1)]" href="#companies">
                    Get Verified Closers
                </a>
</div>
</div>
</nav>

<main className="relative pt-32 pb-20 overflow-hidden">
<div className="absolute inset-0 hero-glow blur-[100px] opacity-40 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

<div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.05] mb-6">
                        Clone Your <br/>
<span className="gradient-text">Best Closer.</span><br/>
                        As Many Times<br/>
                        As You Want.
                    </h1>
<p className="text-base md:text-lg text-neutral-400 font-light leading-relaxed mb-8 max-w-lg">
                        We verify every rep in an AI sales simulation and score them against elite performance benchmarks. You only meet the top performers.
                    </p>

<div className="flex flex-wrap gap-4 text-[10px] md:text-xs text-emerald-400/80 mb-8 font-medium tracking-wide uppercase">
<span className="flex items-center gap-1"><iconify-icon icon="solar:verified-check-linear"></iconify-icon> Simulation-verified</span>
<span className="w-1 h-1 rounded-full bg-neutral-700"></span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:crown-star-linear"></iconify-icon> Top performers only</span>
<span className="w-1 h-1 rounded-full bg-neutral-700"></span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:users-group-two-rounded-linear"></iconify-icon> Manager leverage</span>
</div>
<div className="flex flex-col sm:flex-row items-center gap-4">
<a className="w-full sm:w-auto px-8 py-3.5 bg-emerald-500 text-black rounded-full text-sm font-semibold hover:bg-emerald-400 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.2)]" href="#companies">
                            I'm Hiring Closers
                            <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-3.5 bg-white/5 border border-white/10 text-white rounded-full text-sm font-medium hover:bg-white/10 transition-all flex items-center justify-center" href="#closers">
                            I'm a Closer
                        </a>
</div>
</div>

<div className="relative flex justify-center lg:justify-end">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-emerald-500/10 blur-[80px] rounded-full pointer-events-none"></div>

<div className="relative w-full max-w-sm glass-panel rounded-2xl p-6 shadow-2xl animate-fade-in-up">
<div className="flex justify-between items-start mb-6 border-b border-white/5 pb-4">
<div>
<div className="text-xs text-neutral-400 mb-1">CANDIDATE ID: 8X-29</div>
<div className="text-xl font-medium text-white tracking-tight">Verified Assessment</div>
</div>
<div className="flex flex-col items-end">
<div className="text-[10px] uppercase tracking-wider text-emerald-400 mb-0.5">Caliber Score</div>
<div className="text-4xl font-semibold text-white">92</div>
</div>
</div>
<div className="space-y-4 mb-6">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="p-1.5 rounded bg-white/5 text-neutral-400"><iconify-icon icon="solar:shield-warning-linear"></iconify-icon></div>
<span className="text-sm text-neutral-300">Objection Handling</span>
</div>
<span className="px-2 py-0.5 rounded text-[10px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Strong</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="p-1.5 rounded bg-white/5 text-neutral-400"><iconify-icon icon="solar:magnifer-linear"></iconify-icon></div>
<span className="text-sm text-neutral-300">Discovery Depth</span>
</div>
<span className="px-2 py-0.5 rounded text-[10px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Strong</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="p-1.5 rounded bg-white/5 text-neutral-400"><iconify-icon icon="solar:check-circle-linear"></iconify-icon></div>
<span className="text-sm text-neutral-300">Close Discipline</span>
</div>
<span className="px-2 py-0.5 rounded text-[10px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Strong</span>
</div>
</div>
<div className="p-3 bg-neutral-900/50 rounded-lg border border-white/5">
<div className="flex items-start gap-2">
<iconify-icon className="text-emerald-500 mt-0.5" icon="solar:info-circle-linear"></iconify-icon>
<p className="text-xs text-neutral-400 italic">"Verified in simulation. Demonstrated exceptional ability to pivot during pricing negotiations."</p>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="py-20 border-t border-white/5 bg-[#0C0C0C]">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
                The Top Reps Carry Revenue.<br/>
<span className="text-neutral-500">Everyone Else Is Expensive Guesswork.</span>
</h2>
<p className="text-neutral-400 max-w-xl mx-auto mb-12 font-light">
                Hiring sales reps is still a lottery. Great on interviews, weak on real calls. Meanwhile your best closer quietly carries the number.
            </p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-3xl mx-auto mb-12">
<div className="p-4 rounded-xl border border-white/5 bg-neutral-900/30 flex gap-3">
<div className="flex-shrink-0 text-red-400 mt-0.5"><iconify-icon icon="solar:close-circle-linear" width="20"></iconify-icon></div>
<div>
<h3 className="text-sm font-medium text-white mb-1">Resume Roulette</h3>
<p className="text-xs text-neutral-500">Sounds great on paper, can't handle real objections.</p>
</div>
</div>
<div className="p-4 rounded-xl border border-white/5 bg-neutral-900/30 flex gap-3">
<div className="flex-shrink-0 text-red-400 mt-0.5"><iconify-icon icon="solar:graph-down-linear" width="20"></iconify-icon></div>
<div>
<h3 className="text-sm font-medium text-white mb-1">The Expensive Middle</h3>
<p className="text-xs text-neutral-500">Consumes same leads, delivers half the close rate.</p>
</div>
</div>
<div className="p-4 rounded-xl border border-white/5 bg-neutral-900/30 flex gap-3">
<div className="flex-shrink-0 text-red-400 mt-0.5"><iconify-icon icon="solar:headphones-round-linear" width="20"></iconify-icon></div>
<div>
<h3 className="text-sm font-medium text-white mb-1">The Management Trap</h3>
<p className="text-xs text-neutral-500">Reviewing 1% of calls means feedback arrives too late.</p>
</div>
</div>
<div className="p-4 rounded-xl border border-white/5 bg-neutral-900/30 flex gap-3">
<div className="flex-shrink-0 text-red-400 mt-0.5"><iconify-icon icon="solar:refresh-circle-linear" width="20"></iconify-icon></div>
<div>
<h3 className="text-sm font-medium text-white mb-1">The Recruiting Treadmill</h3>
<p className="text-xs text-neutral-500">Constant churn creates constant revenue drag.</p>
</div>
</div>
</div>
<p className="text-lg font-medium text-white">Caliber replaces guesswork with proof.</p>
</div>
</section>

<section className="py-20 bg-[#0A0A0A] relative overflow-hidden">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-emerald-900/10 blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-xl mx-auto px-6 relative z-10">
<div className="glass-panel p-8 rounded-2xl shadow-2xl">
<div className="text-center mb-8">
<h2 className="text-2xl font-semibold tracking-tight mb-2">Calculate Your Revenue Leak</h2>
<p className="text-sm text-neutral-400">Quick estimate of what underperformance costs you each year.</p>
</div>
<div className="space-y-6">
<div>
<label className="block text-xs font-medium text-neutral-400 mb-2">Current Annual Revenue</label>
<div className="relative">
<span className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500">$</span>
<input className="w-full pl-8 pr-4 py-3 rounded-lg bg-neutral-900 border border-white/10 text-white placeholder-neutral-600 focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50" id="calc-revenue" placeholder="5,000,000" type="number"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-neutral-400 mb-2">Number of Sales Reps</label>
<input className="w-full px-4 py-3 rounded-lg bg-neutral-900 border border-white/10 text-white placeholder-neutral-600 focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50" id="calc-reps" placeholder="10" type="number"/>
</div>
<button className="w-full py-3 bg-white text-black font-semibold rounded-lg hover:bg-neutral-200 transition-colors" onclick="calculateLeak()">
                        Calculate
                    </button>

<div className="hidden pt-6 border-t border-white/10 mt-6 animate-fade-in" id="calc-result">
<div className="text-center">
<div className="text-xs uppercase tracking-wide text-neutral-500 mb-2">Estimated revenue left on the table</div>
<div className="text-4xl md:text-5xl font-bold text-emerald-400 mb-4 tracking-tight" id="leak-amount">$0</div>
<p className="text-[10px] text-neutral-500 mb-6 max-w-xs mx-auto leading-relaxed">
                                Conservative model: assumes 35% leakage from underperformance. This does not include the upside of faster scaling.
                            </p>
<a className="inline-flex items-center gap-2 text-sm font-medium text-white border-b border-emerald-500 pb-0.5 hover:text-emerald-400 transition-colors" href="#companies">
                                Recover This Revenue <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 border-t border-white/5 bg-[#0C0C0C]">
<div className="max-w-6xl mx-auto px-6">
<div className="mb-12">
<h2 className="text-3xl font-medium tracking-tight mb-2">Your Best Closer, Multiplied.</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-6 rounded-2xl bg-[#0A0A0A] border border-white/5 hover:border-white/10 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-emerald-900/20 text-emerald-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:filters-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Simulation-Verified Hiring</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                        Every candidate runs a real scenario — objections, pricing pushback, close pressure. You only meet the ones who perform.
                    </p>
</div>

<div className="p-6 rounded-2xl bg-[#0A0A0A] border border-white/5 hover:border-white/10 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-blue-900/20 text-blue-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:stars-minimalistic-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Coaching on 100% of Calls</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                        Real-time, rep-specific nudges and feedback — so managers stop drowning in call reviews and start driving strategy.
                    </p>
</div>

<div className="p-6 rounded-2xl bg-[#0A0A0A] border border-white/5 hover:border-white/10 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-purple-900/20 text-purple-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:global-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">On-Demand Sales Capacity</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                        When you need closers, you tap a bench of already-verified reps. Scale up without the recruiting circus.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-[#0A0A0A]">
<div className="max-w-5xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-medium tracking-tight mb-2">From Unknown to Verified.</h2>
<p className="text-neutral-500">Before they ever touch your pipeline.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">

<div className="hidden md:block absolute top-6 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
<div className="relative z-10 text-center md:text-left">
<div className="w-12 h-12 rounded-full bg-[#0A0A0A] border border-white/10 flex items-center justify-center text-sm font-medium text-white mx-auto md:mx-0 mb-4 shadow-[0_0_15px_rgba(0,0,0,1)]">1</div>
<h3 className="text-sm font-semibold text-white mb-1">Define "Great"</h3>
<p className="text-xs text-neutral-500">We calibrate to your offer and target customer profile.</p>
</div>
<div className="relative z-10 text-center md:text-left">
<div className="w-12 h-12 rounded-full bg-[#0A0A0A] border border-white/10 flex items-center justify-center text-sm font-medium text-white mx-auto md:mx-0 mb-4 shadow-[0_0_15px_rgba(0,0,0,1)]">2</div>
<h3 className="text-sm font-semibold text-white mb-1">Enter Simulation</h3>
<p className="text-xs text-neutral-500">Candidates face unscripted, high-pressure scenarios.</p>
</div>
<div className="relative z-10 text-center md:text-left">
<div className="w-12 h-12 rounded-full bg-[#0A0A0A] border border-white/10 flex items-center justify-center text-sm font-medium text-white mx-auto md:mx-0 mb-4 shadow-[0_0_15px_rgba(0,0,0,1)]">3</div>
<h3 className="text-sm font-semibold text-white mb-1">Performance Score</h3>
<p className="text-xs text-neutral-500">We analyze discovery, objection handling, and closing.</p>
</div>
<div className="relative z-10 text-center md:text-left">
<div className="w-12 h-12 rounded-full bg-emerald-500 text-black flex items-center justify-center text-sm font-bold mx-auto md:mx-0 mb-4 shadow-[0_0_15px_rgba(16,185,129,0.3)]">4</div>
<h3 className="text-sm font-semibold text-white mb-1">You Meet the Few</h3>
<p className="text-xs text-neutral-500">Skip the screening. Hire faster, ramp faster.</p>
</div>
</div>
</div>
</section>

<section className="py-20 border-t border-white/5 bg-[#0C0C0C]">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-2xl font-medium tracking-tight mb-8 text-center">Why This Isn't Traditional Hiring</h2>
<div className="border border-white/5 rounded-xl overflow-hidden bg-[#0A0A0A]">

<div className="grid grid-cols-2 border-b border-white/5 bg-neutral-900/50">
<div className="p-4 text-xs font-medium text-neutral-500 uppercase tracking-wider text-center">Traditional Hiring</div>
<div className="p-4 text-xs font-bold text-emerald-400 uppercase tracking-wider text-center bg-emerald-500/5">Caliber</div>
</div>

<div className="grid grid-cols-2 border-b border-white/5">
<div className="p-6 text-sm text-neutral-400 text-center border-r border-white/5">Interviews &amp; Gut Feel</div>
<div className="p-6 text-sm text-white font-medium text-center relative">
                        Simulation + Data
                        <div className="absolute inset-0 bg-emerald-500/5 pointer-events-none"></div>
</div>
</div>

<div className="grid grid-cols-2 border-b border-white/5">
<div className="p-6 text-sm text-neutral-400 text-center border-r border-white/5">Weeks of Recruiting</div>
<div className="p-6 text-sm text-white font-medium text-center relative">
                        Verified Candidates Instantly
                        <div className="absolute inset-0 bg-emerald-500/5 pointer-events-none"></div>
</div>
</div>

<div className="grid grid-cols-2">
<div className="p-6 text-sm text-neutral-400 text-center border-r border-white/5">Manager Reviews 1% of Calls</div>
<div className="p-6 text-sm text-white font-medium text-center relative">
                        Co-Pilot Covers 100%
                        <div className="absolute inset-0 bg-emerald-500/5 pointer-events-none"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0A0A0A] relative">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">

<div className="bg-neutral-900/20 border border-white/5 rounded-2xl p-8 lg:p-10" id="companies">
<div className="mb-8">
<div className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium mb-4">For Companies</div>
<h2 className="text-3xl font-medium tracking-tight mb-3">Stop Gambling on Interviews.</h2>
<p className="text-neutral-400 text-sm leading-relaxed">Get verified closers and make coaching scalable. Fill out the form below to access the talent network.</p>
</div>
<form className="space-y-4">
<div>
<label className="block text-xs font-medium text-neutral-500 mb-1.5">Name</label>
<input className="w-full px-4 py-2.5 rounded-lg bg-[#0F0F0F] border border-white/10 focus:border-emerald-500/50" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-neutral-500 mb-1.5">Work Email</label>
<input className="w-full px-4 py-2.5 rounded-lg bg-[#0F0F0F] border border-white/10 focus:border-emerald-500/50" type="email"/>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-neutral-500 mb-1.5">Company</label>
<input className="w-full px-4 py-2.5 rounded-lg bg-[#0F0F0F] border border-white/10 focus:border-emerald-500/50" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-neutral-500 mb-1.5">Team Size</label>
<select className="w-full px-4 py-2.5 rounded-lg bg-[#0F0F0F] border border-white/10 focus:border-emerald-500/50 text-neutral-300">
<option>1-5 Reps</option>
<option>6-20 Reps</option>
<option>20+ Reps</option>
</select>
</div>
</div>
<div>
<label className="block text-xs font-medium text-neutral-500 mb-1.5">Notes</label>
<textarea className="w-full px-4 py-2.5 rounded-lg bg-[#0F0F0F] border border-white/10 focus:border-emerald-500/50" rows="3"></textarea>
</div>
<button className="w-full py-3 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold rounded-lg transition-colors mt-2">
                            Get Verified Closers
                        </button>
</form>
</div>

<div className="bg-transparent border border-white/5 rounded-2xl p-8 lg:p-10 relative overflow-hidden" id="closers">
<div className="absolute inset-0 bg-white/[0.02]"></div>
<div className="relative z-10">
<div className="mb-8">
<div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white text-xs font-medium mb-4">For Closers</div>
<h2 className="text-3xl font-medium tracking-tight mb-3">Prove it in the Arena.</h2>
<p className="text-neutral-400 text-sm leading-relaxed">Get your Caliber Score and access opportunities matched to your actual skill level.</p>
</div>
<form className="space-y-4">
<div>
<label className="block text-xs font-medium text-neutral-500 mb-1.5">Name</label>
<input className="w-full px-4 py-2.5 rounded-lg bg-[#0F0F0F] border border-white/10 focus:border-white/30" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-neutral-500 mb-1.5">Email</label>
<input className="w-full px-4 py-2.5 rounded-lg bg-[#0F0F0F] border border-white/10 focus:border-white/30" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-neutral-500 mb-1.5">LinkedIn URL</label>
<input className="w-full px-4 py-2.5 rounded-lg bg-[#0F0F0F] border border-white/10 focus:border-white/30" type="url"/>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-neutral-500 mb-1.5">Years Closing</label>
<input className="w-full px-4 py-2.5 rounded-lg bg-[#0F0F0F] border border-white/10 focus:border-white/30" type="number"/>
</div>
<div>
<label className="block text-xs font-medium text-neutral-500 mb-1.5">Typical ACV</label>
<input className="w-full px-4 py-2.5 rounded-lg bg-[#0F0F0F] border border-white/10 focus:border-white/30" placeholder="$10k+" type="text"/>
</div>
</div>
<button className="w-full py-3 bg-white hover:bg-neutral-200 text-black font-semibold rounded-lg transition-colors mt-2">
                                Get Scored
                            </button>
</form>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 py-8 bg-[#050505]">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="flex items-center gap-2">
<div className="w-3 h-3 bg-emerald-500 rounded-[2px]"></div>
<span className="text-xs font-medium text-white">Caliber © 2024</span>
</div>
<div className="flex gap-6 text-[11px] text-neutral-500">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="mailto:hello@caliber.aura.build">Contact</a>
</div>
</div>
</footer>


    </>
  );
}
