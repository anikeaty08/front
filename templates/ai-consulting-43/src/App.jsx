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
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
brand: {
DEFAULT: '#FF6B35',
dark: '#E55A25',
glow: '#FF6B3540',
},
dark: {
bg: '#0a0a0a',
card: '#121212',
border: '#2a2a2a',
surface: '#171717'
}
},
backgroundImage: {
'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
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
      

<nav className="fixed w-full z-50 top-0 start-0 border-b border-white/5 bg-dark-bg/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex justify-between items-center">

<div className="flex items-center gap-1 select-none group cursor-default">
<span className="font-serif italic text-2xl text-white group-hover:text-brand transition-colors duration-300">mac</span>
<span className="font-sans font-medium text-lg tracking-tight text-gray-500 group-hover:text-gray-300 transition-colors">consulting</span>
</div>
<div className="flex items-center gap-4">
<a className="inline-flex items-center text-sm font-medium text-gray-300 hover:text-white transition-colors border border-white/10 hover:border-brand/50 hover:bg-white/5 px-5 py-2.5 rounded-full" href="https://tally.so/r/Zj6OaB" target="_blank">
                    Start Your Transformation
                    <iconify-icon className="ml-2 text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">

<div className="absolute inset-0 bg-grid-dark opacity-20 pointer-events-none"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-brand/20 rounded-full blur-[120px] opacity-20 pointer-events-none"></div>
<div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center">

<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 hover:border-brand/40 transition-colors cursor-default">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
</span>
<span className="text-gray-300 text-xs font-medium tracking-wide uppercase">Free Consulting Spots Available</span>
</div>

<h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8 leading-[1.1]">
                Future-Proof Your Personal Brand with <span className="text-brand">Intelligent Systems</span>
</h1>

<p className="text-xl text-gray-400 font-normal leading-relaxed max-w-2xl mx-auto mb-10">
                Stop trading time for content. We build custom AI infrastructures that automate your authority and scale your reach. Let us help you grow for free.
            </p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto inline-flex justify-center items-center bg-white text-black hover:bg-gray-200 text-lg font-medium py-4 px-8 rounded-full transition-all hover:scale-105" href="https://tally.so/r/Zj6OaB" target="_blank">
                    Start Your Transformation
                    <iconify-icon className="ml-2 text-xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
<p className="mt-8 text-sm text-gray-600 font-medium">
                100% Free Strategy Session • Custom Implementation Plan
            </p>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-dark-bg relative">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="bg-dark-card p-8 rounded-2xl border border-white/5 hover:border-brand/30 transition-all duration-500 group">
<div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center text-gray-300 mb-6 group-hover:text-brand transition-colors">
<iconify-icon className="text-2xl" icon="solar:clock-circle-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-3">The Content Treadmill</h3>
<p className="text-gray-500 leading-relaxed">Most coaches spend 80% of their time creating content that expires in 24 hours. Break free from the algorithm's demands.</p>
</div>

<div className="bg-dark-card p-8 rounded-2xl border border-white/5 hover:border-brand/30 transition-all duration-500 group">
<div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center text-gray-300 mb-6 group-hover:text-brand transition-colors">
<iconify-icon className="text-2xl" icon="solar:users-group-rounded-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Inconsistent Leads</h3>
<p className="text-gray-500 leading-relaxed">Relying on referrals or "hope marketing" creates feast or famine cycles. You need a predictable machine.</p>
</div>

<div className="bg-dark-card p-8 rounded-2xl border border-white/5 hover:border-brand/30 transition-all duration-500 group">
<div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center text-gray-300 mb-6 group-hover:text-brand transition-colors">
<iconify-icon className="text-2xl" icon="solar:graph-up-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Uncapped Potential</h3>
<p className="text-gray-500 leading-relaxed">Your expertise is valuable, but your reach is limited by your manual efforts. AI removes the ceiling on your impact.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-dark-surface border-y border-white/5 relative overflow-hidden">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/5 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-5xl mx-auto px-6 md:px-12 text-center relative z-10">
<h2 className="text-3xl md:text-5xl font-bold text-white mb-6">What You Get in the Free Session</h2>
<p className="text-gray-500 mb-16 max-w-2xl mx-auto">This isn't a sales pitch. It's a completely free consulting session to map out your AI infrastructure.</p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">

<div className="p-6 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors">
<div className="flex items-start gap-4">
<iconify-icon className="text-brand text-2xl mt-1" icon="solar:magnifer-linear"></iconify-icon>
<div>
<h3 className="text-white font-medium text-lg">Opportunity Audit</h3>
<p className="text-gray-500 text-sm mt-2">We analyze your current digital presence to find the lowest-hanging fruit for automation.</p>
</div>
</div>
</div>

<div className="p-6 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors">
<div className="flex items-start gap-4">
<iconify-icon className="text-brand text-2xl mt-1" icon="solar:map-point-linear"></iconify-icon>
<div>
<h3 className="text-white font-medium text-lg">The "Blue Ocean" Roadmap</h3>
<p className="text-gray-500 text-sm mt-2">A step-by-step plan to position yourself where your competitors aren't looking.</p>
</div>
</div>
</div>

<div className="p-6 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors">
<div className="flex items-start gap-4">
<iconify-icon className="text-brand text-2xl mt-1" icon="solar:layers-linear"></iconify-icon>
<div>
<h3 className="text-white font-medium text-lg">Tool Stack Reveal</h3>
<p className="text-gray-500 text-sm mt-2">We'll show you the exact software stack that replaces a 5-person marketing team.</p>
</div>
</div>
</div>

<div className="p-6 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors">
<div className="flex items-start gap-4">
<iconify-icon className="text-brand text-2xl mt-1" icon="solar:shield-check-linear"></iconify-icon>
<div>
<h3 className="text-white font-medium text-lg">Clarity &amp; Focus</h3>
<p className="text-gray-500 text-sm mt-2">Walk away knowing exactly what to do next to grow, completely free of charge.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">
<div className="absolute inset-0 bg-brand/10 bg-grid-dark opacity-50"></div>
<div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent"></div>
<div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
<h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-8">Ready to Scale?</h2>
<p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                Secure your free AI growth consulting session today.
            </p>
<div className="flex flex-col items-center gap-6">
<a className="group relative inline-flex justify-center items-center bg-white text-black hover:bg-brand hover:text-white text-xl font-medium py-5 px-12 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,107,53,0.6)]" href="https://tally.so/r/Zj6OaB" target="_blank">
                    Start Your Transformation
                    <iconify-icon className="ml-2 transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<footer className="py-12 bg-black border-t border-white/5 text-center">
<div className="flex items-center justify-center gap-1 select-none mb-6 opacity-50 hover:opacity-100 transition-opacity">
<span className="font-serif italic text-2xl text-white">mac</span>
<span className="font-sans font-medium text-lg tracking-tight text-gray-500">consulting</span>
</div>
<div className="flex justify-center gap-6 mb-8">
<a className="text-gray-600 hover:text-white transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:letter-linear"></iconify-icon></a>
</div>
<p className="text-gray-600 text-xs">© 2023 Mac Consulting. All rights reserved.</p>
</footer>

    </>
  );
}
