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
      

<div className="fixed bg-center -z-10 w-full h-screen bg-cover top-0" data-alpha-mask="80" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/66b3ba2d-8056-42eb-b99c-5946564a502a_3840w.png")', maskImage: 'linear-gradient(180deg, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 80%, transparent)'}}></div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-neutral-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<iconify-icon className="text-blue-500 text-2xl" icon="solar:dumbbells-linear"></iconify-icon>
<span className="text-lg font-semibold tracking-tighter text-white">AURA</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#features">Features</a>
<a className="hover:text-white transition-colors" href="#workflow">Method</a>
<a className="hover:text-white transition-colors" href="#programs">Programs</a>
</div>
<a className="hidden md:inline-flex text-xs font-medium bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 rounded text-white transition-colors" href="#">
                Client Login
            </a>
</div>
</nav>

<section className="md:pt-48 md:pb-32 overflow-hidden pt-32 pb-20 relative">

<div className="-translate-x-1/2 blur-[120px] pointer-events-none bg-blue-600/20 opacity-50 w-full h-96 max-w-3xl rounded-full absolute top-0 left-1/2"></div>
<div className="grid grid-cols-1 lg:grid-cols-2 z-10 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative items-center">

<div className="lg:text-left text-center space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/20 border border-blue-500/20 text-blue-400 text-xs font-medium">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                    AI Training Engine v2.0 Live
                </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight leading-[1.1] text-white">
                    Train Smarter.<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-700">Train Stronger.</span>
</h1>
<p className="leading-relaxed lg:mx-0 text-lg font-light text-stone-200 bg-[radial-gradient(circle_at_bottom,var(--tw-gradient-stops))] from-white/10 to-white/0 opacity-100 mix-blend-difference max-w-xl mr-auto ml-auto">
                    Your AI-powered fitness coach guiding every rep with precision. Eliminate guesswork with real-time form correction and adaptive programming.
                </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
<button className="group relative px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] overflow-hidden">
<span className="flex items-center gap-2 z-10 relative">
                            Start Training
                            <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</span>
</button>
<button className="hover:border-neutral-500 transition-all text-sm font-medium text-gray-950 bg-[conic-gradient(from_285deg,var(--tw-gradient-stops))] from-blue-400 via-blue-600 to-blue-400 opacity-100 mix-blend-darken border-neutral-700 border rounded pt-3.5 pr-8 pb-3.5 pl-8">
                        See How It Works
                    </button>
</div>
</div>

<div className="lg:ml-auto aspect-[4/5] lg:aspect-square w-full max-w-lg mr-auto ml-auto relative">

<div className="absolute inset-0 rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-neutral-900">
<img alt="AI Trainer" className="w-full h-full object-cover opacity-80 mix-blend-overlay" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&amp;w=1470&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent"></div>

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
</div>

<div className="-left-4 md:-left-12 glow-box animate-[bounce_4s_infinite] bg-neutral-950/80 border-blue-500/30 border rounded-xl pt-4 pr-4 pb-4 pl-4 absolute top-12 shadow-lg backdrop-blur-md">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-blue-600/20 flex items-center justify-center text-blue-500">
<iconify-icon icon="solar:body-shape-linear" width="20"></iconify-icon>
</div>
<div className="">
<p className="text-xs text-neutral-400">Current Exercise</p>
<p className="text-sm font-medium text-white">Back Squats</p>
</div>
<div className="ml-4 text-right">
<p className="text-xs text-blue-400">98% Accuracy</p>
</div>
</div>
</div>

<div className="-right-4 md:-right-8 hover:border-blue-500/50 transition-colors bg-neutral-950/80 border-neutral-800 border rounded-xl pt-3 pr-3 pb-3 pl-3 absolute bottom-24 shadow-lg backdrop-blur-md">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-neutral-800 flex items-center justify-center text-white">
<iconify-icon icon="solar:dumbbell-large-linear" width="16"></iconify-icon>
</div>
<div className="">
<p className="text-xs font-medium text-white">DB Shoulder Press</p>
<div className="w-24 h-1 bg-neutral-800 rounded-full mt-1 overflow-hidden">
<div className="w-3/4 h-full bg-blue-600 rounded-full"></div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-8 left-8 bg-neutral-950/80 backdrop-blur-md border border-neutral-800 p-3 rounded-lg shadow-lg flex items-center gap-2">
<div className="h-2 w-2 rounded-full bg-red-500 animate-pulse"></div>
<p className="text-xs font-medium text-white">Plank Hold: 00:45</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-950 border-t border-white/5 relative" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">Precision Tracking</h2>
<p className="text-neutral-400 max-w-2xl mx-auto">Our computer vision analyzes 24 key points on your body to ensure perfect form.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group bg-neutral-900/40 border border-neutral-800 p-8 rounded-2xl hover:bg-neutral-900/60 card-hover transition-all duration-300">
<div className="w-12 h-12 bg-neutral-950 border border-neutral-800 rounded-lg flex items-center justify-center text-blue-500 mb-6 group-hover:text-blue-400 transition-colors">
<iconify-icon icon="solar:graph-up-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Velocity Tracking</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                        Measure the speed of every rep to optimize load and prevent fatigue failure before it happens.
                    </p>
</div>

<div className="group bg-neutral-900/40 border border-neutral-800 p-8 rounded-2xl hover:bg-neutral-900/60 card-hover transition-all duration-300">
<div className="w-12 h-12 bg-neutral-950 border border-neutral-800 rounded-lg flex items-center justify-center text-blue-500 mb-6 group-hover:text-blue-400 transition-colors">
<iconify-icon icon="solar:danger-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Form Correction</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                        Real-time audio feedback when your spine curvature or knee alignment drifts off optimal path.
                    </p>
</div>

<div className="group bg-neutral-900/40 border border-neutral-800 p-8 rounded-2xl hover:bg-neutral-900/60 card-hover transition-all duration-300">
<div className="w-12 h-12 bg-neutral-950 border border-neutral-800 rounded-lg flex items-center justify-center text-blue-500 mb-6 group-hover:text-blue-400 transition-colors">
<iconify-icon icon="solar:chart-square-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Progressive Overload</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                        The AI adjusts weights automatically based on your daily performance and recovery data.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black relative" id="workflow">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">How Your AI Trainer Works</h2>
<div className="h-1 w-20 bg-blue-600 rounded-full"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">

<div className="hidden md:block absolute top-12 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-900 to-transparent z-0"></div>

<div className="relative z-10">
<div className="w-24 h-24 bg-black border border-neutral-800 rounded-full flex items-center justify-center text-blue-500 mb-6 mx-auto shadow-[0_0_20px_rgba(37,99,235,0.15)]">
<iconify-icon icon="solar:target-linear" strokeWidth="1.5" width="40"></iconify-icon>
</div>
<div className="text-center">
<h3 className="text-xl font-medium text-white mb-2">1. Choose Your Goal</h3>
<p className="text-sm text-neutral-400">Define your objective: Hypertrophy, Strength, or Endurance.</p>
</div>
</div>

<div className="relative z-10">
<div className="w-24 h-24 bg-black border border-neutral-800 rounded-full flex items-center justify-center text-blue-500 mb-6 mx-auto shadow-[0_0_20px_rgba(37,99,235,0.15)]">
<iconify-icon icon="solar:cpu-linear" strokeWidth="1.5" width="40"></iconify-icon>
</div>
<div className="text-center">
<h3 className="text-xl font-medium text-white mb-2">2. Get Your AI Plan</h3>
<p className="text-sm text-neutral-400">Algorithm generates a 12-week micro-cycle tailored to your biometrics.</p>
</div>
</div>

<div className="relative z-10">
<div className="w-24 h-24 bg-black border border-neutral-800 rounded-full flex items-center justify-center text-blue-500 mb-6 mx-auto shadow-[0_0_20px_rgba(37,99,235,0.15)]">
<iconify-icon icon="solar:chart-2-linear" strokeWidth="1.5" width="40"></iconify-icon>
</div>
<div className="text-center">
<h3 className="text-xl font-medium text-white mb-2">3. Track &amp; Optimize</h3>
<p className="text-sm text-neutral-400">Log workouts via camera. The AI refines your plan every Sunday.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-950 border-t border-white/5" id="programs">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">Elite Programming</h2>
<p className="text-neutral-400">Choose the protocol that fits your physiology.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-neutral-900 border-t-4 border-t-blue-600 border-x border-b border-neutral-800 p-8 rounded-b-2xl relative group hover:-translate-y-1 transition-transform duration-300">
<h3 className="text-xl font-medium text-white mb-2">Fat Loss Protocol</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-3xl font-medium text-white">$29</span>
<span className="text-neutral-500 text-sm">/mo</span>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon>
                            High Intensity Interval AI
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon>
                            Metabolic conditioning
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon>
                            Calorie burn tracking
                        </li>
</ul>
<button className="w-full py-3 border border-blue-600 text-blue-500 font-medium text-sm rounded hover:bg-blue-600 hover:text-white transition-colors">Select Protocol</button>
</div>

<div className="bg-neutral-900 border-t-4 border-t-blue-500 border-x border-b border-neutral-800 p-8 rounded-b-2xl relative group hover:-translate-y-1 transition-transform duration-300 shadow-[0_0_30px_rgba(37,99,235,0.1)]">
<div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wider rounded-bl">Popular</div>
<h3 className="text-xl font-medium text-white mb-2">Muscle Builder</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-3xl font-medium text-white">$49</span>
<span className="text-neutral-500 text-sm">/mo</span>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon>
                            Hypertrophy focus
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon>
                            Volume load optimization
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon>
                            Advanced split routines
                        </li>
</ul>
<button className="w-full py-3 bg-blue-600 text-white font-medium text-sm rounded hover:bg-blue-500 transition-colors shadow-lg shadow-blue-900/40">Start Building</button>
</div>

<div className="bg-neutral-900 border-t-4 border-t-blue-800 border-x border-b border-neutral-800 p-8 rounded-b-2xl relative group hover:-translate-y-1 transition-transform duration-300">
<h3 className="text-xl font-medium text-white mb-2">Performance Elite</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-3xl font-medium text-white">$89</span>
<span className="text-neutral-500 text-sm">/mo</span>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon>
                            Sport-specific drills
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon>
                            Explosive power focus
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon>
                            1-on-1 Human Coach Chat
                        </li>
</ul>
<button className="w-full py-3 border border-blue-600 text-blue-500 font-medium text-sm rounded hover:bg-blue-600 hover:text-white transition-colors">Join Elite</button>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden bg-black">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
<h2 className="text-4xl md:text-6xl font-medium tracking-tight text-white mb-8">
                Ready to Unlock Your Peak?
            </h2>
<p className="text-neutral-400 text-lg mb-10 max-w-2xl mx-auto">
                Join the thousands of athletes using computer vision to redefine their limits. The gym is open.
            </p>
<button className="px-10 py-4 bg-white text-black text-sm font-semibold rounded hover:bg-neutral-200 transition-colors inline-flex items-center gap-2">
                View Full Program
                <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</section>

<footer className="border-t border-white/10 bg-black pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
<div>
<div className="flex items-center gap-2 mb-6">
<iconify-icon className="text-blue-500 text-2xl" icon="solar:dumbbells-linear"></iconify-icon>
<span className="text-xl font-semibold tracking-tighter text-white">AURA</span>
</div>
<p className="text-neutral-500 text-sm max-w-xs">
                        The world's first AI personal trainer designed for elite performance and bio-mechanical precision.
                    </p>
</div>
<div className="flex gap-16">
<div>
<h4 className="text-white font-medium mb-4 text-sm">Product</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-blue-500 transition-colors" href="#">Download App</a></li>
<li><a className="hover:text-blue-500 transition-colors" href="#">Vision AI</a></li>
<li><a className="hover:text-blue-500 transition-colors" href="#">Pricing</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Company</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-blue-500 transition-colors" href="#">About</a></li>
<li><a className="hover:text-blue-500 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-blue-500 transition-colors" href="#">Contact</a></li>
</ul>
</div>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-600">
<p>© 2024 Aura Performance Inc. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-neutral-400" href="#">Privacy</a>
<a className="hover:text-neutral-400" href="#">Terms</a>
<a className="hover:text-neutral-400" href="#">Twitter</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
