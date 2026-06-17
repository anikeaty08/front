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



tailwind.config = {
theme: {
extend: {
colors: {
background: '#050507',
surface: '#0A0A0F',
primary: '#6366f1',
},
backgroundImage: {
'grid-pattern': "linear-gradient(to right, #ffffff05 1px, transparent 1px), linear-gradient(to bottom, #ffffff05 1px, transparent 1px)",
}
}
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
      

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[500px] bg-violet-600/20 blur-[120px] rounded-full opacity-60"></div>
<div className="absolute inset-0 bg-grid-pattern bg-[size:40px_40px] [mask-image:linear-gradient(to_bottom,black_40%,transparent_90%)]"></div>
</div>

<nav className="relative z-50 w-full max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
<div className="flex items-center gap-2">
<span className="text-xl font-semibold tracking-tight text-white">Flare</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
<a className="hover:text-white transition-colors" href="#">Features</a>
<a className="hover:text-white transition-colors" href="#">How it Works</a>
<a className="hover:text-white transition-colors" href="#">News</a>
<a className="hover:text-white transition-colors" href="#">Pricing</a>
<a className="hover:text-white transition-colors" href="#">Contact Us</a>
</div>
<button className="md:hidden text-white">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</nav>
<main className="relative z-10 w-full flex flex-col items-center pt-16 pb-32">

<section className="max-w-5xl mx-auto px-6 text-center flex flex-col items-center">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/30 bg-violet-500/10 backdrop-blur-sm mb-8 animate-fade-in-up">
<span className="flex h-2 w-2 rounded-full bg-violet-400"></span>
<span className="text-sm font-medium text-violet-200">New Update <span className="text-slate-400 mx-1">|</span> Dashboard Live v.3</span>
</div>

<h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tight leading-[1.1] mb-6 drop-shadow-2xl">
                Your Digital Safety Net, <br className="hidden md:block"/>
<span className="bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent">on Autopilot.</span>
</h1>

<p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10 font-light">
                Intelligence-driven cybersecurity, without the noise. Protect your assets with real-time monitoring and automated threat detection.
            </p>

<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<button className="px-8 py-3 bg-violet-600 hover:bg-violet-700 text-white text-base font-medium rounded-lg transition-all shadow-[0_0_20px_-5px_rgba(124,58,237,0.5)]">
                    Try Flare Now
                </button>
<button className="px-8 py-3 bg-white hover:bg-slate-200 text-slate-900 text-base font-medium rounded-lg transition-all">
                    Learn More
                </button>
</div>
</section>

<section className="w-full max-w-6xl mx-auto px-6 mt-24 mb-32">
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 opacity-40 items-center justify-items-center grayscale">
<div className="flex items-center gap-2">
<iconify-icon icon="solar:atom-linear" width="32"></iconify-icon>
<span className="text-xl font-semibold tracking-tight">logoipsum</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon icon="solar:record-circle-linear" width="32"></iconify-icon>
<span className="text-xl font-semibold tracking-tight">logoipsum</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon icon="solar:asteroid-linear" width="32"></iconify-icon>
<span className="text-xl font-semibold tracking-tight">logoipsum</span>
</div>
<div className="flex items-center gap-2 border border-current px-2 py-1">
<span className="text-lg font-bold tracking-widest uppercase">Logo Ipsum</span>
</div>
</div>
</section>

<section className="max-w-5xl mx-auto px-6 text-center mb-32">
<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-slate-700 bg-slate-800/50 text-slate-300 text-sm font-medium mb-8">
<iconify-icon className="text-violet-400" icon="solar:stars-minimalistic-linear" width="16"></iconify-icon>
                About
            </div>
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight leading-snug mb-16">
                In an era where threats are constant and evolving, we believe your defense system should be just as dynamic.
            </h2>

<div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-slate-800 pt-12">
<div className="flex flex-col items-center">
<span className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-2">1.2M+</span>
<span className="text-base text-slate-500 font-medium">Attacks Blocked</span>
</div>
<div className="flex flex-col items-center">
<span className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-2">30 sec</span>
<span className="text-base text-slate-500 font-medium">Response Time</span>
</div>
<div className="flex flex-col items-center">
<span className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-2">20+</span>
<span className="text-base text-slate-500 font-medium">Integrations</span>
</div>
<div className="flex flex-col items-center">
<span className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-2">99.9%</span>
<span className="text-base text-slate-500 font-medium">Accuracy</span>
</div>
</div>
</section>

<section className="w-full max-w-6xl mx-auto px-6 mb-32">
<div className="flex flex-col items-center mb-16">
<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-slate-700 bg-slate-800/50 text-slate-300 text-sm font-medium mb-6">
<iconify-icon className="text-violet-400" icon="solar:bolt-linear" width="16"></iconify-icon>
                    Features
                </div>
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight text-center">
                    Building trust in digital safety
                </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="relative group overflow-hidden rounded-2xl bg-surface border border-slate-800 hover:border-slate-700 transition-colors h-[400px] flex flex-col justify-end">
<div className="absolute inset-0 flex items-center justify-center -translate-y-12">
<div className="w-48 h-32 bg-slate-700/20 rounded-lg border border-slate-600/30 transform -translate-x-8 -translate-y-4 backdrop-blur-sm"></div>
<div className="absolute w-56 h-40 bg-gradient-to-br from-slate-600/20 to-slate-800/40 rounded-lg border border-slate-500/30 shadow-2xl backdrop-blur-md flex items-center justify-center">
<div className="w-full h-full bg-gradient-to-t from-violet-500/10 to-transparent"></div>
</div>
</div>
<div className="relative z-10 p-8 bg-gradient-to-t from-surface via-surface/90 to-transparent">
<h3 className="text-xl font-medium text-white mb-2">Behavior-based Detection</h3>
<p className="text-base text-slate-400 leading-relaxed">
                            Goes beyond traditional firewalls by analyzing behavioral anomalies, not just file patterns.
                        </p>
</div>
</div>

<div className="relative group overflow-hidden rounded-2xl bg-surface border border-slate-800 hover:border-slate-700 transition-colors h-[400px] flex flex-col justify-end">
<div className="absolute inset-0 p-8 pb-32 opacity-50">
<div className="grid grid-cols-4 gap-3 h-full w-full">
<div className="col-span-1 flex flex-col gap-3 h-full">
<div className="h-10 w-full bg-slate-700/30 rounded-md"></div>
<div className="h-10 w-full bg-slate-700/30 rounded-md"></div>
<div className="h-10 w-full bg-slate-700/30 rounded-md"></div>
<div className="h-10 w-full bg-slate-700/30 rounded-md"></div>
<div className="flex-1 w-full bg-slate-700/20 rounded-md"></div>
</div>
<div className="col-span-3 grid grid-rows-2 gap-3 h-full">
<div className="grid grid-cols-2 gap-3 h-full">
<div className="bg-slate-700/30 rounded-md h-full w-full border border-slate-600/20 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-tr from-violet-500/10 to-transparent"></div>
</div>
<div className="bg-slate-700/30 rounded-md h-full w-full border border-slate-600/20"></div>
</div>
<div className="grid grid-cols-3 gap-3 h-full">
<div className="bg-slate-700/30 rounded-md h-full w-full border border-slate-600/20"></div>
<div className="bg-slate-700/30 rounded-md h-full w-full border border-slate-600/20"></div>
<div className="bg-slate-700/30 rounded-md h-full w-full border border-slate-600/20"></div>
</div>
</div>
</div>
</div>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-surface pointer-events-none"></div>
</div>
</div>
</section>

<section className="w-full max-w-6xl mx-auto px-6 py-12 border-t border-slate-800/50">

<div className="flex flex-col md:flex-row md:justify-between md:items-end mb-12 gap-6">
<div className="">
<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-slate-700 bg-slate-800/50 text-slate-300 text-sm font-medium mb-4">
<iconify-icon icon="solar:document-text-linear" width="16"></iconify-icon>
                        Latest News
                    </div>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight">Security Insights</h2>
</div>
<a className="hidden md:flex items-center gap-1.5 text-sm font-medium text-slate-400 hover:text-white transition-colors group" href="#">
                    View all articles
                    <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<article className="group cursor-pointer flex flex-col h-full">
<div className="aspect-[16/10] w-full rounded-xl bg-surface border border-slate-800 overflow-hidden mb-5 relative">
<div className="absolute inset-0 bg-slate-900 flex items-center justify-center">
<iconify-icon className="text-slate-700 group-hover:text-violet-500/50 transition-colors duration-500" icon="solar:shield-warning-linear" width="48"></iconify-icon>
</div>

<div className="absolute inset-0 z-10 overflow-hidden">
<img alt="Cyber Security" className="h-full w-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=2160&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
<div className="bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-slate-700/20 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
</div>
</div>
<div className="flex items-center gap-3 text-xs font-medium text-slate-500 mb-3">
<span className="text-violet-400 uppercase tracking-wider">Threat Analysis</span>
<span className="h-1 w-1 rounded-full bg-slate-700"></span>
<span>Oct 12, 2023</span>
</div>
<h3 className="text-lg font-medium text-white tracking-tight mb-2 group-hover:text-violet-300 transition-colors">The evolution of Zero Trust</h3>
<p className="text-sm text-slate-400 line-clamp-3 leading-relaxed mb-4 flex-grow">
                        Why the traditional castle-and-moat security model is obsolete in a cloud-first world, and how to adapt your infrastructure.
                    </p>
<div className="flex items-center gap-1.5 text-sm font-medium text-slate-300 mt-auto">
                        Read article
                        <iconify-icon icon="solar:arrow-right-up-linear" width="14"></iconify-icon>
</div>
</article>

<article className="group cursor-pointer flex flex-col h-full">
<div className="aspect-[16/10] w-full rounded-xl bg-surface border border-slate-800 overflow-hidden mb-5 relative">
<div className="absolute inset-0 bg-slate-900 flex items-center justify-center">
<iconify-icon className="text-slate-700 group-hover:text-violet-500/50 transition-colors duration-500" icon="solar:user-id-linear" width="48"></iconify-icon>
</div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-slate-700/10 to-transparent"></div>
</div>
<div className="flex items-center gap-3 text-xs font-medium text-slate-500 mb-3">
<span className="text-violet-400 uppercase tracking-wider">Engineering</span>
<span className="h-1 w-1 rounded-full bg-slate-700"></span>
<span>Sep 28, 2023</span>
</div>
<h3 className="text-lg font-medium text-white tracking-tight mb-2 group-hover:text-violet-300 transition-colors">Social Engineering in 2024</h3>
<p className="text-sm text-slate-400 line-clamp-3 leading-relaxed mb-4 flex-grow">
                        Phishing is getting smarter with AI. Learn how generative models are being weaponized to create indistinguishable campaigns.
                    </p>
<div className="flex items-center gap-1.5 text-sm font-medium text-slate-300 mt-auto">
                        Read article
                        <iconify-icon icon="solar:arrow-right-up-linear" width="14"></iconify-icon>
</div>
</article>

<article className="group cursor-pointer flex flex-col h-full">
<div className="aspect-[16/10] w-full rounded-xl bg-surface border border-slate-800 overflow-hidden mb-5 relative">
<div className="absolute inset-0 bg-slate-900 flex items-center justify-center">
<iconify-icon className="text-slate-700 group-hover:text-violet-500/50 transition-colors duration-500" icon="solar:code-scan-linear" width="48"></iconify-icon>
</div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-700/10 to-transparent"></div>
</div>
<div className="flex items-center gap-3 text-xs font-medium text-slate-500 mb-3">
<span className="text-violet-400 uppercase tracking-wider">Product</span>
<span className="h-1 w-1 rounded-full bg-slate-700"></span>
<span>Sep 15, 2023</span>
</div>
<h3 className="text-lg font-medium text-white tracking-tight mb-2 group-hover:text-violet-300 transition-colors">Automating Response Protocols</h3>
<p className="text-sm text-slate-400 line-clamp-3 leading-relaxed mb-4 flex-grow">
                        Reducing mean time to resolution (MTTR) by implementing automated playbooks for common security incidents.
                    </p>
<div className="flex items-center gap-1.5 text-sm font-medium text-slate-300 mt-auto">
                        Read article
                        <iconify-icon icon="solar:arrow-right-up-linear" width="14"></iconify-icon>
</div>
</article>
</div>
<a className="md:hidden mt-8 flex items-center gap-1.5 text-sm font-medium text-slate-400 hover:text-white transition-colors" href="#">
                View all articles
                <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</section>
</main>

    </>
  );
}
