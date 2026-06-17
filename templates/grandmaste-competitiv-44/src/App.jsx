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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 text-white font-medium tracking-tight">
<iconify-icon height="24" icon="solar:crown-star-linear" width="24"></iconify-icon>
<span className="text-sm uppercase tracking-widest">Grandmaster</span>
</div>
<div className="flex items-center gap-6">
<a className="hidden md:block text-sm text-zinc-400 hover:text-white transition-colors duration-300" href="#">Platform</a>
<a className="hidden md:block text-sm text-zinc-400 hover:text-white transition-colors duration-300" href="#">Safety</a>
<a className="text-xs bg-white text-black px-5 py-2 rounded-full font-medium hover:bg-zinc-200 transition-colors" href="#">
                    Login
                </a>
</div>
</div>
</nav>

<section className="relative min-h-screen flex flex-col justify-center items-center pt-20 overflow-hidden">

<div className="absolute inset-0 grid-bg fade-mask pointer-events-none z-0"></div>
<div className="absolute inset-0 radial-glow z-0 pointer-events-none"></div>
<div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8 animate-[fadeIn_1s_ease-out]">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></span>
<span className="text-xs font-light tracking-wide text-zinc-300">Competitive Season 1 is Live</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-white tracking-tighter mb-6 leading-[1.1]">
                Skill Decides<br/>Everything.
            </h1>
<p className="text-lg md:text-xl text-zinc-400 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
                Step into real competition where every decision matters, pressure reveals mistakes, and skill alone defines the outcome.
            </p>
<div className="flex flex-col items-center gap-4">
<button className="group relative px-8 py-4 bg-white text-black text-sm font-medium rounded-lg overflow-hidden transition-all hover:bg-zinc-200 hover:scale-[1.02]">
<div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
<span className="relative flex items-center gap-2">
                        Register Now
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</span>
</button>
<span className="text-xs text-zinc-500 font-light">Join in under a minute. No downloads required.</span>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-zinc-950 to-transparent z-10"></div>
</section>

<section className="relative py-24 md:py-32 border-t border-white/5 bg-zinc-950">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-6">
                        A Platform Built for<br/>Real Players
                    </h2>
<p className="text-zinc-400 font-light leading-relaxed mb-8 text-lg">
                        This is a competitive chess environment designed for players who want more than casual games. Here, preparation, focus, and decision-making are tested in every match.
                    </p>
<div className="space-y-6">
<div className="flex items-start gap-4 group">
<div className="p-2 rounded-lg bg-zinc-900 border border-white/10 text-white group-hover:border-white/30 transition-colors">
<iconify-icon icon="solar:users-group-two-rounded-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-white text-sm font-medium mb-1">Play against real opponents</h3>
<p className="text-zinc-500 text-sm font-light">Verified human players only.</p>
</div>
</div>
<div className="flex items-start gap-4 group">
<div className="p-2 rounded-lg bg-zinc-900 border border-white/10 text-white group-hover:border-white/30 transition-colors">
<iconify-icon icon="solar:scale-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-white text-sm font-medium mb-1">Balanced competitive format</h3>
<p className="text-zinc-500 text-sm font-light">Matchmaking based on true ELO.</p>
</div>
</div>
<div className="flex items-start gap-4 group">
<div className="p-2 rounded-lg bg-zinc-900 border border-white/10 text-white group-hover:border-white/30 transition-colors">
<iconify-icon icon="solar:cup-star-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-white text-sm font-medium mb-1">Matches that actually matter</h3>
<p className="text-zinc-500 text-sm font-light">Tournaments with verifiable stakes.</p>
</div>
</div>
</div>
</div>

<div className="relative aspect-square md:aspect-[4/3] bg-zinc-900 rounded-2xl border border-white/5 overflow-hidden group">
<div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.02)_25%,rgba(255,255,255,0.02)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.02)_75%,rgba(255,255,255,0.02)_100%)] bg-[length:20px_20px] opacity-20"></div>
<div className="absolute inset-0 flex items-center justify-center">

<div className="relative w-32 h-32 flex items-center justify-center">
<div className="absolute inset-0 bg-white/5 blur-3xl rounded-full"></div>
<iconify-icon className="text-white relative z-10 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]" icon="solar:crown-linear" width="80"></iconify-icon>
</div>
</div>

<div className="absolute bottom-6 left-6 right-6 p-4 bg-black/40 backdrop-blur-md border border-white/10 rounded-xl flex justify-between items-center">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center text-xs text-white">GM</div>
<div className="text-xs">
<div className="text-white font-medium">Magnus_Sim</div>
<div className="text-zinc-500">Rank 1 • Live</div>
</div>
</div>
<div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-950 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Simple. Fair. Competitive.</h2>
</div>
<div className="grid md:grid-cols-3 gap-8 relative">

<div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent z-0"></div>

<div className="relative z-10 group">
<div className="w-24 h-24 mx-auto bg-zinc-950 border border-zinc-800 rounded-2xl flex items-center justify-center mb-6 group-hover:border-zinc-600 transition-colors shadow-[0_0_30px_rgba(0,0,0,1)]">
<iconify-icon className="text-white" icon="solar:user-id-linear" width="32"></iconify-icon>
</div>
<div className="text-center">
<span className="block text-xs font-mono text-zinc-500 mb-2">STEP 01</span>
<h3 className="text-white text-lg font-medium mb-2">Create an account</h3>
<p className="text-sm text-zinc-400 font-light max-w-xs mx-auto">Enter the arena instantly. Secure verification ensures fair play.</p>
</div>
</div>

<div className="relative z-10 group">
<div className="w-24 h-24 mx-auto bg-zinc-950 border border-zinc-800 rounded-2xl flex items-center justify-center mb-6 group-hover:border-zinc-600 transition-colors shadow-[0_0_30px_rgba(0,0,0,1)]">
<iconify-icon className="text-white" icon="solar:settings-linear" width="32"></iconify-icon>
</div>
<div className="text-center">
<span className="block text-xs font-mono text-zinc-500 mb-2">STEP 02</span>
<h3 className="text-white text-lg font-medium mb-2">Choose format</h3>
<p className="text-sm text-zinc-400 font-light max-w-xs mx-auto">Select time controls that suit your strategic depth.</p>
</div>
</div>

<div className="relative z-10 group">
<div className="w-24 h-24 mx-auto bg-zinc-950 border border-zinc-800 rounded-2xl flex items-center justify-center mb-6 group-hover:border-zinc-600 transition-colors shadow-[0_0_30px_rgba(0,0,0,1)]">
<iconify-icon className="text-white" icon="solar:play-circle-linear" width="32"></iconify-icon>
</div>
<div className="text-center">
<span className="block text-xs font-mono text-zinc-500 mb-2">STEP 03</span>
<h3 className="text-white text-lg font-medium mb-2">Play focused games</h3>
<p className="text-sm text-zinc-400 font-light max-w-xs mx-auto">Match against similarly skilled opponents. No distractions.</p>
</div>
</div>
</div>
<div className="text-center mt-16 pt-16 border-t border-white/5">
<p className="text-zinc-500 font-light tracking-wide text-sm">NO RANDOMNESS. NO SHORTCUTS. JUST MEANINGFUL COMPETITION.</p>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900/30 border-y border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-12">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight">Why Players Choose Us</h2>
</div>
<div className="grid md:grid-cols-2 gap-6">

<div className="p-8 rounded-xl border border-white/5 bg-zinc-950 hover:border-white/10 transition-colors duration-300">
<iconify-icon className="text-white mb-4" icon="solar:chart-square-linear" width="28"></iconify-icon>
<h3 className="text-xl text-white font-medium mb-2">Skill-based competition</h3>
<p className="text-zinc-400 font-light text-sm leading-relaxed">Outcomes are driven by decisions, not chance. The purity of the game is preserved through strict matchmaking algorithms.</p>
</div>

<div className="p-8 rounded-xl border border-white/5 bg-zinc-950 hover:border-white/10 transition-colors duration-300">
<iconify-icon className="text-white mb-4" icon="solar:eye-linear" width="28"></iconify-icon>
<h3 className="text-xl text-white font-medium mb-2">Serious environment</h3>
<p className="text-zinc-400 font-light text-sm leading-relaxed">Built for focus and improvement. A minimalist interface removes clutter so you can calculate your next move.</p>
</div>

<div className="p-8 rounded-xl border border-white/5 bg-zinc-950 hover:border-white/10 transition-colors duration-300">
<iconify-icon className="text-white mb-4" icon="solar:document-text-linear" width="28"></iconify-icon>
<h3 className="text-xl text-white font-medium mb-2">Clear rules</h3>
<p className="text-zinc-400 font-light text-sm leading-relaxed">Transparent structure and fair play enforcement ensure that your rating reflects your true ability.</p>
</div>

<div className="p-8 rounded-xl border border-white/5 bg-zinc-950 hover:border-white/10 transition-colors duration-300">
<iconify-icon className="text-white mb-4" icon="solar:refresh-circle-linear" width="28"></iconify-icon>
<h3 className="text-xl text-white font-medium mb-2">Consistent challenge</h3>
<p className="text-zinc-400 font-light text-sm leading-relaxed">Every match tests something new, pushing you to adapt your strategy and refine your openings.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-950">
<div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-start justify-between gap-12">
<div className="md:w-1/3">
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight leading-none">Who<br/>It’s For</h2>
</div>
<div className="md:w-2/3">
<p className="text-lg text-zinc-400 mb-8 font-light">This platform is strictly for players who:</p>
<ul className="space-y-4">
<li className="flex items-center gap-4 text-zinc-200 font-light">
<iconify-icon className="text-white shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                        Enjoy structured competition
                    </li>
<li className="flex items-center gap-4 text-zinc-200 font-light">
<iconify-icon className="text-white shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                        Want their decisions to have real weight
                    </li>
<li className="flex items-center gap-4 text-zinc-200 font-light">
<iconify-icon className="text-white shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                        Prefer focus over casual play
                    </li>
<li className="flex items-center gap-4 text-zinc-200 font-light">
<iconify-icon className="text-white shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                        Care about improving through meaningful games
                    </li>
</ul>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-zinc-900/20">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-12 gap-12">
<div className="md:col-span-5">
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">A Responsible<br/>Competitive Experience</h2>
<p className="text-zinc-400 font-light text-sm leading-relaxed mb-6">
                        We focus on fair competition, clear rules, and a respectful environment. We believe trust is the currency of competitive play.
                    </p>
<div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-xs tracking-wide">
<span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                        Anti-Cheat Active
                    </div>
</div>
<div className="md:col-span-7">
<h3 className="text-sm font-medium text-white uppercase tracking-wider mb-6">How Fair Play Is Maintained</h3>
<div className="grid sm:grid-cols-2 gap-x-8 gap-y-8">
<div>
<iconify-icon className="text-white mb-3" icon="solar:shield-warning-linear" width="24"></iconify-icon>
<p className="text-sm text-zinc-400 font-light leading-relaxed">Automated systems identify unusual performance patterns instantly.</p>
</div>
<div>
<iconify-icon className="text-white mb-3" icon="solar:user-check-linear" width="24"></iconify-icon>
<p className="text-sm text-zinc-400 font-light leading-relaxed">Gameplay consistency is reviewed when necessary by experts.</p>
</div>
<div>
<iconify-icon className="text-white mb-3" icon="solar:magnifer-linear" width="24"></iconify-icon>
<p className="text-sm text-zinc-400 font-light leading-relaxed">Suspicious activity is carefully evaluated before action is taken.</p>
</div>
<div>
<iconify-icon className="text-white mb-3" icon="solar:gavel-linear" width="24"></iconify-icon>
<p className="text-sm text-zinc-400 font-light leading-relaxed">Final decisions are reviewed to avoid false positives.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden bg-zinc-950 flex flex-col items-center justify-center text-center">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white opacity-[0.03] blur-[100px] rounded-full pointer-events-none"></div>
<div className="relative z-10 px-6">
<h2 className="text-lg text-zinc-400 mb-4 font-light tracking-wide">Ready to Test Your Skill?</h2>
<h1 className="text-5xl md:text-7xl font-medium text-white tracking-tighter mb-10">
                Skill Decides Everything.
            </h1>
<div className="flex flex-col items-center gap-4">
<button className="px-10 py-4 bg-white text-black text-sm font-medium rounded-lg hover:bg-zinc-200 transition-all hover:scale-[1.02] shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                    Register Now
                </button>
<span className="text-xs text-zinc-500 font-light">Start playing today.</span>
</div>
</div>
</section>

<footer className="py-12 border-t border-white/5 bg-zinc-950 text-center">
<div className="flex items-center justify-center gap-2 text-white/50 mb-6">
<iconify-icon icon="solar:crown-star-linear" width="20"></iconify-icon>
<span className="text-xs uppercase tracking-widest font-medium">Grandmaster</span>
</div>
<p className="text-xs text-zinc-600 font-light">© 2023 Grandmaster Platform. All rights reserved.</p>
</footer>

    </>
  );
}
