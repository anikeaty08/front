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
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
slate: {
850: '#151b2e',
900: '#0f172a',
950: '#020617',
}
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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
<a className="text-white font-medium tracking-tighter text-lg flex items-center gap-2" href="#">
<span className="iconify text-indigo-400" data-icon="lucide:cpu" data-width="18"></span>
                lrnrai
            </a>
<div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-400">
<a className="hover:text-white transition-colors" href="#">About</a>
<a className="hover:text-white transition-colors" href="#auto">/auto</a>
<a className="text-white bg-white/10 hover:bg-white/15 px-3 py-1.5 rounded-md border border-white/5 transition-all text-xs" href="#">
                    Join List
                </a>
</div>
</div>
</nav>



<main className="relative pt-32 pb-20 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-indigo-900/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>

<section className="max-w-3xl mx-auto px-6 text-center mb-24">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                Building in public
            </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white mb-6 leading-[1.1]">
                Learn AI.<br/>
<span className="text-slate-400">Build Real Products.</span><br/>
                Make Money.
            </h1>
<p className="text-lg text-slate-400 leading-relaxed mb-10 max-w-xl mx-auto font-light">
                I build and ship real AI products in public. No hype. Just the tools, systems, and frameworks that actually work — with real numbers and breakdowns from my own builds.
            </p>

<div className="max-w-sm mx-auto flex flex-col sm:flex-row gap-3">
<input className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500/50 transition-all" placeholder="enter@email.com" type="email"/>
<button className="bg-white text-slate-950 font-medium px-5 py-3 rounded-lg text-sm hover:bg-slate-200 transition-colors flex items-center justify-center gap-2 whitespace-nowrap">
                    Get Tactics
                    <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
</div>
<p className="text-xs text-slate-600 mt-4">Join 1,000+ builders. No spam, just value.</p>
</section>

<section className="max-w-4xl mx-auto px-6 mb-24">
<div className="border-t border-white/5 pt-16">
<p className="text-sm font-medium text-slate-500 uppercase tracking-widest mb-8 text-center">Every week you get</p>
<div className="grid md:grid-cols-3 gap-6">

<div className="glass-card p-6 rounded-xl">
<span className="iconify text-indigo-400 mb-4" data-icon="lucide:workflow" data-strokeWidth="1.5" data-width="24"></span>
<h3 className="text-white font-medium text-sm mb-2 tracking-tight">Exact Systems</h3>
<p className="text-sm text-slate-500 leading-relaxed">The workflows I use to automate tasks and ship products faster than competitors.</p>
</div>

<div className="glass-card p-6 rounded-xl">
<span className="iconify text-indigo-400 mb-4" data-icon="lucide:flask-conical" data-strokeWidth="1.5" data-width="24"></span>
<h3 className="text-white font-medium text-sm mb-2 tracking-tight">Real Experiments</h3>
<p className="text-sm text-slate-500 leading-relaxed">Honest breakdowns of wins and failures. No cherry-picked stats.</p>
</div>

<div className="glass-card p-6 rounded-xl">
<span className="iconify text-indigo-400 mb-4" data-icon="lucide:activity" data-strokeWidth="1.5" data-width="24"></span>
<h3 className="text-white font-medium text-sm mb-2 tracking-tight">Behind the Scenes</h3>
<p className="text-sm text-slate-500 leading-relaxed">Deep dives into building in HealthTech + AI, documented in real-time.</p>
</div>
</div>
<div className="mt-10 text-center">
<button className="text-sm text-slate-300 hover:text-white border-b border-slate-700 hover:border-white pb-0.5 transition-all">
                        Join the Builder List
                    </button>
</div>
</div>
</section>

<section className="max-w-4xl mx-auto px-6 mb-24">
<div className="glass-card rounded-2xl p-8 md:p-12 relative overflow-hidden group">

<div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-indigo-500/10 transition-all duration-700"></div>
<div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
<div className="max-w-md">
<div className="flex items-center gap-2 mb-3">
<span className="iconify text-indigo-400" data-icon="lucide:zap" data-width="16"></span>
<span className="text-xs font-medium text-indigo-400 uppercase tracking-wider">Free Guide</span>
</div>
<h3 className="text-2xl font-medium text-white mb-2 tracking-tight">The 5-Min Automation Starter Kit</h3>
<p className="text-sm text-slate-400 mb-6">A simple workflow, a video breakdown, and a prompt pack to get you started immediately.</p>
<div className="flex items-center gap-4 text-xs text-slate-500">
<span className="flex items-center gap-1"><span className="iconify" data-icon="lucide:check" data-width="12"></span> Workflow</span>
<span className="flex items-center gap-1"><span className="iconify" data-icon="lucide:check" data-width="12"></span> Video</span>
<span className="flex items-center gap-1"><span className="iconify" data-icon="lucide:check" data-width="12"></span> Prompts</span>
</div>
</div>
<div>
<a className="inline-flex items-center justify-center h-10 px-6 rounded-lg bg-white text-slate-950 text-sm font-medium hover:bg-slate-200 transition-colors" href="#auto">
                            Get the Guide
                        </a>
</div>
</div>
</div>
</section>

<section className="max-w-2xl mx-auto px-6 text-center mb-24">
<p className="text-sm text-slate-500 mb-6">Built by a founder shipping in public</p>
<div className="flex flex-wrap justify-center gap-8 md:gap-16 border-y border-white/5 py-8">
<div>
<div className="text-2xl font-medium text-white tracking-tight mb-1">1,000+</div>
<div className="text-xs text-slate-500 uppercase tracking-wider">Early Learners</div>
</div>
<div>
<div className="text-2xl font-medium text-white tracking-tight mb-1">2+</div>
<div className="text-xs text-slate-500 uppercase tracking-wider">HealthTech MVPs</div>
</div>
<div>
<div className="text-2xl font-medium text-white tracking-tight mb-1">Daily</div>
<div className="text-xs text-slate-500 uppercase tracking-wider">Builds Documented</div>
</div>
</div>
</section>

<footer className="max-w-6xl mx-auto px-6 py-12 border-t border-white/5">
<div className="flex flex-col md:flex-row justify-between items-center gap-6">
<span className="text-sm font-medium text-white tracking-tight">lrnrai</span>
<div className="flex gap-6 text-xs text-slate-500">
<a className="hover:text-slate-300 transition-colors" href="#">About</a>
<a className="hover:text-slate-300 transition-colors" href="#">Contact</a>
<a className="hover:text-slate-300 transition-colors" href="#auto">/auto</a>
<a className="hover:text-slate-300 transition-colors" href="#">Terms</a>
</div>
<div className="flex gap-4">
<a className="text-slate-500 hover:text-white transition-colors" href="#">
<span className="iconify" data-icon="lucide:twitter" data-width="16"></span>
</a>
<a className="text-slate-500 hover:text-white transition-colors" href="#">
<span className="iconify" data-icon="lucide:instagram" data-width="16"></span>
</a>
</div>
</div>
</footer>
</main>

<div className="bg-indigo-900 py-4 text-center border-y border-indigo-700">
<p className="text-indigo-200 text-xs font-mono tracking-widest uppercase">
            ▼ Page Template: lrnrai.com/auto ▼
        </p>
</div>



<div className="bg-slate-950 min-h-screen relative pt-24 pb-24" id="auto">

<section className="max-w-3xl mx-auto px-6 text-center mb-20">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-white/10 mb-8">
<span className="iconify text-white" data-icon="lucide:bot" data-width="24"></span>
</div>
<h1 className="text-4xl md:text-6xl font-medium tracking-tight text-white mb-6 leading-tight">
                Automate Your Channel<br/>in 10 Minutes.
            </h1>
<p className="text-lg text-slate-400 mb-2">No BS. No Overwhelm. Just a working system.</p>
<div className="mt-8 mb-10 max-w-xl mx-auto bg-white/5 border border-white/5 rounded-lg p-4">
<p className="text-sm text-slate-300">
<span className="text-indigo-400 font-medium">Operator Note:</span> This is the exact DM automation setup I’m using on TikTok + Instagram to convert content into leads and followers automatically.
                </p>
</div>
<button className="bg-white text-slate-950 font-medium px-8 py-3.5 rounded-lg text-sm hover:bg-slate-200 hover:scale-[1.01] transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] flex items-center gap-2 mx-auto">
<span className="iconify" data-icon="lucide:download" data-width="16"></span>
                Download the Kit
            </button>
</section>

<section className="max-w-5xl mx-auto px-6 mb-24">
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="bg-slate-900/50 border border-white/5 p-6 rounded-xl hover:bg-slate-900 transition-colors">
<span className="iconify text-indigo-400 mb-3" data-icon="lucide:workflow" data-width="20"></span>
<h3 className="text-white text-sm font-medium mb-1">ManyChat Flow</h3>
<p className="text-xs text-slate-500">The exact logic tree setup (no fluff).</p>
</div>

<div className="bg-slate-900/50 border border-white/5 p-6 rounded-xl hover:bg-slate-900 transition-colors">
<span className="iconify text-indigo-400 mb-3" data-icon="lucide:message-square" data-width="20"></span>
<h3 className="text-white text-sm font-medium mb-1">Engagement Scripts</h3>
<p className="text-xs text-slate-500">Triggers that get people to comment.</p>
</div>

<div className="bg-slate-900/50 border border-white/5 p-6 rounded-xl hover:bg-slate-900 transition-colors">
<span className="iconify text-indigo-400 mb-3" data-icon="lucide:copy" data-width="20"></span>
<h3 className="text-white text-sm font-medium mb-1">DM Templates</h3>
<p className="text-xs text-slate-500">Copy-paste messages that convert.</p>
</div>

<div className="bg-slate-900/50 border border-white/5 p-6 rounded-xl hover:bg-slate-900 transition-colors">
<span className="iconify text-indigo-400 mb-3" data-icon="lucide:video" data-width="20"></span>
<h3 className="text-white text-sm font-medium mb-1">Video Breakdown</h3>
<p className="text-xs text-slate-500">Step-by-step install guide.</p>
</div>
</div>
</section>

<section className="max-w-3xl mx-auto px-6 mb-24">
<div className="glass-card p-8 rounded-2xl border border-white/10 flex flex-col md:flex-row gap-8 items-center">
<div className="flex-shrink-0">

<div className="w-16 h-16 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center">
<span className="text-xl font-medium text-slate-500">LR</span>
</div>
</div>
<div>
<h3 className="text-white font-medium text-lg mb-2 tracking-tight">From a Real Operator</h3>
<p className="text-sm text-slate-400 leading-relaxed">
                        I’m not teaching theory. I’m showing you the exact systems I use to launch products like <span className="text-white">MyTongueAI</span> and grow my own channels daily. This is the playbook I wish I had when I started.
                    </p>
</div>
</div>
</section>

<section className="max-w-2xl mx-auto px-6 text-center mb-16">
<h2 className="text-2xl font-medium text-white tracking-tight mb-6">Stop wasting traffic. Capture it.</h2>
<button className="w-full md:w-auto bg-white text-slate-950 font-medium px-8 py-3.5 rounded-lg text-sm hover:bg-slate-200 transition-colors flex items-center justify-center gap-2 mx-auto">
                Download + Join Builder List
                <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
</section>

<section className="max-w-xl mx-auto px-6 text-center border-t border-white/5 pt-8">
<p className="text-xs text-slate-600">
                If you want to go deeper, the <strong className="text-slate-500 font-medium">LRNRAI Cohort</strong> opens early 2026. Members learn exactly how I build products end-to-end.
            </p>
</section>
</div>

    </>
  );
}
