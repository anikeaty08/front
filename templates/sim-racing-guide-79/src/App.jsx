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
      

<nav className="w-full border-b border-zinc-900 bg-black/50 backdrop-blur-md sticky top-0 z-50">
<div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-white font-medium tracking-tighter text-lg hover:opacity-80 transition-opacity" href="#">
                MSC
            </a>
<div className="flex items-center gap-4">
<a className="hidden sm:flex items-center gap-2 text-xs font-medium text-zinc-400 hover:text-white transition-colors" href="https://mysimconfig.com/">
<span>Visit Builder</span>
<iconify-icon height="16" icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</nav>

<main className="flex-grow">
<article className="max-w-3xl mx-auto px-6 pt-20 pb-32">

<header className="mb-16">
<div className="flex items-center gap-3 mb-6">
<span className="px-2 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 text-xs font-medium text-zinc-300">Guide</span>
<span className="text-xs text-zinc-500">5 min read</span>
</div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white tracking-tight leading-[1.1] mb-8">
                    How to start building your <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 to-zinc-500">simracing setup</span>
</h1>
<p className="text-lg md:text-xl text-zinc-400 leading-relaxed max-w-2xl">
                    Entering the world of simulation racing is an exciting journey into motorsport immersion, but navigating the hardware landscape requires a strategic approach.
                </p>
</header>

<hr className="border-zinc-900 mb-16"/>

<section className="mb-20">
<div className="flex items-start gap-4 mb-6">
<div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300">
<iconify-icon height="24" icon="solar:gamepad-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>
<h2 className="text-2xl md:text-3xl font-medium text-white tracking-tight mb-6">
                    Simracing basics: Beyond the arcade
                </h2>
<div className="space-y-6 text-base md:text-lg leading-relaxed text-zinc-400">
<p>
                        Simracing differs fundamentally from traditional arcade racing. It isn't just about speed; it is about the accurate replication of physics, tire dynamics, and vehicular behavior. When you decide to build a setup, you aren't just buying a controller—you are constructing a simulation cockpit designed to trick your brain into believing you are on the tarmac.
                    </p>
<p>
                        The most challenging aspect for newcomers is the sheer density of technical elements. Concepts like <span className="text-zinc-200">Force Feedback (FFB)</span>, Direct Drive torque ranges, Load Cell braking pressure, and Field of View (FOV) calculations can be overwhelming. Understanding how these components communicate with your PC or console is crucial before spending a single dollar.
                    </p>
</div>
</section>

<section className="mb-20">
<div className="flex items-start gap-4 mb-6">
<div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300">
<iconify-icon height="24" icon="solar:tuning-square-2-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>
<h2 className="text-2xl md:text-3xl font-medium text-white tracking-tight mb-6">
                    How to build a simracing setup the right way
                </h2>
<div className="space-y-6 text-base md:text-lg leading-relaxed text-zinc-400">
<p>
                        A proper setup consists of three core pillars: the <span className="text-zinc-200">Wheel Base</span> (the motor), the <span className="text-zinc-200">Steering Rim</span>, and the <span className="text-zinc-200">Pedals</span>. While it might be tempting to mix and match brands for the best performance, this often leads to the industry's biggest headache: compatibility.
                    </p>
<p>
                        Hardware ecosystems are often walled gardens. A wheel rim from one brand may not fit a base from another without complex adapters. Furthermore, mounting these heavy components requires a sturdy rig that matches standard bolt patterns.
                    </p>
<div className="my-10 p-6 md:p-8 rounded-xl border border-zinc-800 bg-zinc-900/20 backdrop-blur-sm">
<div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
<div className="space-y-2">
<h3 className="text-white font-medium text-lg flex items-center gap-2">
<iconify-icon className="text-yellow-500/80" icon="solar:danger-circle-linear"></iconify-icon>
                                    Avoid compatibility issues
                                </h3>
<p className="text-sm text-zinc-400">
                                    Don't guess. Use a dedicated tool to ensure every part of your rig works together seamlessly before you buy.
                                </p>
</div>
<a className="group whitespace-nowrap inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-white text-black font-medium text-sm transition-all hover:bg-zinc-200 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]" href="https://mysimconfig.com/" target="_blank">
                                Use Simracing Setup Builder
                                <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
<p>
                        To mitigate these risks, the current best practice is to utilize a <span className="text-zinc-200">simracing setup builder</span>. These tools visualize the connections and validate compatibility, ensuring that your quick-release matches your wheelbase and your pedals fit your cockpit plate.
                    </p>
</div>
</section>

<section className="relative">

<div className="absolute -inset-x-4 -inset-y-4 bg-gradient-to-b from-zinc-900/0 via-zinc-900/10 to-zinc-900/0 rounded-2xl blur-xl"></div>
<div className="relative">
<div className="flex items-start gap-4 mb-6">
<div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300">
<iconify-icon height="24" icon="solar:stars-minimalistic-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>
<h2 className="text-2xl md:text-3xl font-medium text-white tracking-tight mb-8">
                        Why configure with Mysimconfig?
                    </h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="p-6 rounded-xl border border-zinc-800 bg-black hover:border-zinc-700 transition-colors">
<div className="h-10 w-10 rounded-full bg-zinc-900 flex items-center justify-center text-white mb-4">
<iconify-icon height="20" icon="solar:shield-check-linear" width="20"></iconify-icon>
</div>
<h3 className="text-zinc-200 font-medium mb-2">Expert Reliability</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                                Built by passionate experts who understand the nuance of torque figures and bolt patterns. The database is curated to prevent costly mistakes.
                            </p>
</div>

<div className="p-6 rounded-xl border border-zinc-800 bg-black hover:border-zinc-700 transition-colors">
<div className="h-10 w-10 rounded-full bg-zinc-900 flex items-center justify-center text-white mb-4">
<iconify-icon height="20" icon="solar:graph-up-linear" width="20"></iconify-icon>
</div>
<h3 className="text-zinc-200 font-medium mb-2">Rapid Innovation</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                                The platform is on a strong uptrend, frequently deploying new features and maintaining a high level of updates to match new hardware releases.
                            </p>
</div>

<div className="md:col-span-2 p-6 rounded-xl border border-zinc-800 bg-black hover:border-zinc-700 transition-colors flex flex-col md:flex-row gap-6 items-start md:items-center">
<div className="flex-grow">
<div className="flex items-center gap-3 mb-3">
<div className="h-10 w-10 rounded-full bg-zinc-900 flex items-center justify-center text-white">
<iconify-icon height="20" icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
</div>
<h3 className="text-zinc-200 font-medium">Community Focused</h3>
</div>
<p className="text-sm text-zinc-500 leading-relaxed">
                                    Simracing is about community. Mysimconfig isn't just a database; it's a tool shaped by user feedback, ensuring it solves real problems for real racers.
                                </p>
</div>
<div className="shrink-0">
<a className="text-sm text-white border-b border-zinc-700 pb-0.5 hover:border-white transition-colors" href="https://mysimconfig.com/">
                                    Start configuring
                                </a>
</div>
</div>
</div>
</div>
</section>
</article>
</main>

<footer className="border-t border-zinc-900 py-12 bg-black">
<div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="text-zinc-600 font-medium tracking-tighter">MSC</span>
<span className="text-zinc-700 text-sm">© 2026</span>
</div>
<div className="flex gap-6">
<a className="text-zinc-600 hover:text-zinc-400 text-sm transition-colors" href="#">Privacy</a>
<a className="text-zinc-600 hover:text-zinc-400 text-sm transition-colors" href="#">Terms</a>
<a className="text-zinc-600 hover:text-zinc-400 text-sm transition-colors" href="#">Twitter</a>
</div>
</div>
</footer>

    </>
  );
}
