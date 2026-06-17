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
    


      (function(){const h=[`Skill Decides <span class="text-amber-500">Everything.</span>`,`Platform Built for <span class="text-amber-500">Real Players.</span>`,`Fair & Balanced <span class="text-amber-500">Competition.</span>`,`Matches That <span class="text-amber-500">Actually Matter.</span>`];let i=0;const e=document.getElementById('hero-headline');if(e){setInterval(()=>{i=(i+1)%h.length;e.style.opacity='0';setTimeout(()=>{e.innerHTML=h[i];e.style.opacity='1'},500)},15000)}})();
    
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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#0b0d11]/80 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-b from-amber-500/20 to-amber-500/5 border border-amber-500/20">
<i className="w-6 h-6 text-amber-500 stroke-[1.5]" data-lucide="crown"></i>
</div>
<span className="text-xl font-semibold tracking-tight text-white">
            ChessGame
          </span>
</div>
<div className="flex items-center gap-6">
<a className="hidden md:block text-sm font-medium text-slate-400 hover:text-white transition-colors" href="#">
            Sign In
          </a>
<a className="group relative px-5 py-2.5 bg-white text-slate-950 text-sm font-medium rounded-lg hover:bg-slate-200 transition-all overflow-hidden" href="#">
<span className="relative z-10">Register Now</span>
</a>
</div>
</div>
</nav>

<section className="relative pt-40 pb-32 overflow-hidden">
<div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
<div className="absolute top-[20%] left-[10%] text-6xl text-amber-500/10 animate-float-1 blur-[1px]">
          ♟️
        </div>
<div className="absolute top-[60%] left-[5%] text-7xl text-white/5 animate-float-2 blur-[2px]">
          ♞
        </div>
<div className="absolute bottom-[20%] right-[10%] text-8xl text-amber-500/10 animate-float-3 blur-[1px]">
          ♛
        </div>
<div className="absolute top-[15%] right-[20%] text-5xl text-white/5 animate-float-2 delay-1000">
          ♜
        </div>
<div className="absolute bottom-[40%] left-[50%] text-4xl text-amber-500/5 animate-float-1 delay-2000">
          ♝
        </div>
</div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-amber-500 mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
</span>
          Live Competitive Arena
        </div>
<h1 className="text-6xl md:text-7xl font-semibold text-white tracking-tight leading-[1.1] mb-8 transition-opacity duration-500" id="hero-headline">
          Skill Decides
          <span className="text-amber-500">Everything.</span>
</h1>
<p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-12">
          Step into real competition where every decision matters, pressure
          reveals mistakes, and skill alone defines the outcome.
        </p>
<div className="flex flex-col items-center gap-4">
<a className="inline-flex items-center justify-center h-14 px-8 text-lg font-semibold text-[#0b0d11] transition-all duration-200 bg-amber-500 rounded-lg hover:bg-amber-400 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 focus:ring-offset-[#0b0d11]" href="#">
            Register Now
            <i className="ml-2 w-5 h-5 stroke-[1.5]" data-lucide="arrow-right"></i>
</a>
<p className="text-sm text-slate-500">
            Join in under a minute. No downloads required.
          </p>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-[#0f1116]">
<div className="max-w-6xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-4xl font-semibold text-white tracking-tight mb-6">
              A Platform Built for
              <span className="text-amber-500">Real Players</span>
</h2>
<p className="text-xl text-slate-400 leading-relaxed mb-8">
              This is a competitive chess environment designed for players who
              want more than casual games. Here, preparation, focus, and
              decision-making are tested in every match.
            </p>
</div>
<div className="space-y-6">
<div className="flex items-start gap-4 p-6 rounded-xl bg-white/[0.02] border border-white/5 hover:border-amber-500/20 transition-colors">
<div className="p-3 rounded-lg bg-amber-500/10 text-amber-500 shrink-0">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="swords"></i>
</div>
<div>
<h3 className="text-xl font-medium text-white mb-2">
                  Play against real opponents
                </h3>
<p className="text-lg text-slate-400">
                  Matchmaking designed to find human competition, strictly
                  verified.
                </p>
</div>
</div>
<div className="flex items-start gap-4 p-6 rounded-xl bg-white/[0.02] border border-white/5 hover:border-amber-500/20 transition-colors">
<div className="p-3 rounded-lg bg-amber-500/10 text-amber-500 shrink-0">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="scale"></i>
</div>
<div>
<h3 className="text-xl font-medium text-white mb-2">
                  Balanced competitive format
                </h3>
<p className="text-lg text-slate-400">
                  Fair structures that ensure skill is the only differentiator.
                </p>
</div>
</div>
<div className="flex items-start gap-4 p-6 rounded-xl bg-white/[0.02] border border-white/5 hover:border-amber-500/20 transition-colors">
<div className="p-3 rounded-lg bg-amber-500/10 text-amber-500 shrink-0">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="target"></i>
</div>
<div>
<h3 className="text-xl font-medium text-white mb-2">
                  Matches that actually matter
                </h3>
<p className="text-lg text-slate-400">
                  High stakes environments where focus is mandatory.
                </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-4xl font-semibold text-white tracking-tight mb-4">
            Simple. Fair. Competitive.
          </h2>
<p className="text-xl text-slate-400">
            No randomness. No shortcuts. Just meaningful competition.
          </p>
</div>
<div className="grid md:grid-cols-3 gap-8 relative">

<div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-0"></div>

<div className="relative z-10 bg-[#0b0d11] p-6 text-center group">
<div className="w-24 h-24 mx-auto bg-[#1c2029] rounded-full border border-white/10 flex items-center justify-center mb-6 shadow-[0_0_30px_-10px_rgba(255,170,0,0.1)] group-hover:border-amber-500/50 transition-colors">
<span className="text-3xl font-semibold text-amber-500">1</span>
</div>
<h3 className="text-xl font-medium text-white mb-3">
              Create an account
            </h3>
<p className="text-lg text-slate-400">
              Enter the arena in seconds. Setup is minimal.
            </p>
</div>

<div className="relative z-10 bg-[#0b0d11] p-6 text-center group">
<div className="w-24 h-24 mx-auto bg-[#1c2029] rounded-full border border-white/10 flex items-center justify-center mb-6 shadow-[0_0_30px_-10px_rgba(255,170,0,0.1)] group-hover:border-amber-500/50 transition-colors">
<span className="text-3xl font-semibold text-amber-500">2</span>
</div>
<h3 className="text-xl font-medium text-white mb-3">Choose format</h3>
<p className="text-lg text-slate-400">
              Select your preferred match settings and stakes.
            </p>
</div>

<div className="relative z-10 bg-[#0b0d11] p-6 text-center group">
<div className="w-24 h-24 mx-auto bg-[#1c2029] rounded-full border border-white/10 flex items-center justify-center mb-6 shadow-[0_0_30px_-10px_rgba(255,170,0,0.1)] group-hover:border-amber-500/50 transition-colors">
<span className="text-3xl font-semibold text-amber-500">3</span>
</div>
<h3 className="text-xl font-medium text-white mb-3">
              Play focused games
            </h3>
<p className="text-lg text-slate-400">
              Compete against similarly skilled players immediately.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-white/5 bg-[#0f1116]">
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-4xl font-semibold text-white tracking-tight mb-12">
          Why Players
          <span className="text-amber-500">Choose Us</span>
</h2>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="p-8 rounded-xl bg-gradient-to-br from-white/[0.03] to-transparent border border-white/5 hover:border-amber-500/30 transition-all group">
<div className="mb-6 inline-flex p-3 rounded-lg bg-blue-500/10 text-blue-400 group-hover:text-blue-300">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="brain-circuit"></i>
</div>
<h3 className="text-xl font-medium text-white mb-3">Skill-based</h3>
<p className="text-lg text-slate-400">
              Outcomes are driven by decisions, not chance.
            </p>
</div>
<div className="p-8 rounded-xl bg-gradient-to-br from-white/[0.03] to-transparent border border-white/5 hover:border-amber-500/30 transition-all group">
<div className="mb-6 inline-flex p-3 rounded-lg bg-amber-500/10 text-amber-500 group-hover:text-amber-400">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="zap"></i>
</div>
<h3 className="text-xl font-medium text-white mb-3">
              Serious Environment
            </h3>
<p className="text-lg text-slate-400">
              Built for deep focus and continuous improvement.
            </p>
</div>
<div className="p-8 rounded-xl bg-gradient-to-br from-white/[0.03] to-transparent border border-white/5 hover:border-amber-500/30 transition-all group">
<div className="mb-6 inline-flex p-3 rounded-lg bg-green-500/10 text-green-400 group-hover:text-green-300">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="book-open"></i>
</div>
<h3 className="text-xl font-medium text-white mb-3">Clear Rules</h3>
<p className="text-lg text-slate-400">
              Transparent structure ensuring complete fair play.
            </p>
</div>
<div className="p-8 rounded-xl bg-gradient-to-br from-white/[0.03] to-transparent border border-white/5 hover:border-amber-500/30 transition-all group">
<div className="mb-6 inline-flex p-3 rounded-lg bg-purple-500/10 text-purple-400 group-hover:text-purple-300">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="trophy"></i>
</div>
<h3 className="text-xl font-medium text-white mb-3">
              Consistent Challenge
            </h3>
<p className="text-lg text-slate-400">
              Every match tests something new in your game.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-4xl font-semibold text-white tracking-tight mb-4">
          Who It’s For
        </h2>
<p className="text-xl text-slate-400 mb-12">
          This platform is for players who:
        </p>
<div className="grid md:grid-cols-2 gap-4 text-left">
<div className="flex items-center gap-4 p-4 rounded-lg border border-white/5 bg-white/[0.02]">
<div className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center border border-amber-500/30">
<i className="w-3 h-3 text-amber-500" data-lucide="check"></i>
</div>
<span className="text-lg text-slate-200">
              Enjoy structured competition
            </span>
</div>
<div className="flex items-center gap-4 p-4 rounded-lg border border-white/5 bg-white/[0.02]">
<div className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center border border-amber-500/30">
<i className="w-3 h-3 text-amber-500" data-lucide="check"></i>
</div>
<span className="text-lg text-slate-200">
              Want their decisions to have real weight
            </span>
</div>
<div className="flex items-center gap-4 p-4 rounded-lg border border-white/5 bg-white/[0.02]">
<div className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center border border-amber-500/30">
<i className="w-3 h-3 text-amber-500" data-lucide="check"></i>
</div>
<span className="text-lg text-slate-200">
              Prefer focus over casual play
            </span>
</div>
<div className="flex items-center gap-4 p-4 rounded-lg border border-white/5 bg-white/[0.02]">
<div className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center border border-amber-500/30">
<i className="w-3 h-3 text-amber-500" data-lucide="check"></i>
</div>
<span className="text-lg text-slate-200">
              Care about improving through meaningful games
            </span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0f1116] border-y border-white/5">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row gap-16">
<div className="md:w-1/3">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-4">
              A Responsible
              <br/>
              Competitive Experience
            </h2>
<p className="text-lg text-slate-400 mb-8">
              We focus on fair competition, clear rules, and a respectful
              environment.
            </p>
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20">
<i className="w-5 h-5" data-lucide="shield-check"></i>
<span className="font-medium">Verified Fair Play</span>
</div>
</div>
<div className="md:w-2/3">
<h3 className="text-xl font-medium text-white mb-6">
              How Fair Play Is Maintained
            </h3>
<div className="space-y-6">
<div className="flex gap-4">
<i className="w-6 h-6 text-slate-500 shrink-0 mt-1" data-lucide="bot"></i>
<div>
<h4 className="text-lg font-medium text-slate-200">
                    Automated Detection
                  </h4>
<p className="text-lg text-slate-400 mt-1">
                    Systems identify unusual performance patterns instantly.
                  </p>
</div>
</div>
<div className="flex gap-4">
<i className="w-6 h-6 text-slate-500 shrink-0 mt-1" data-lucide="history"></i>
<div>
<h4 className="text-lg font-medium text-slate-200">
                    Consistency Reviews
                  </h4>
<p className="text-lg text-slate-400 mt-1">
                    Gameplay consistency is reviewed when necessary to ensure
                    integrity.
                  </p>
</div>
</div>
<div className="flex gap-4">
<i className="w-6 h-6 text-slate-500 shrink-0 mt-1" data-lucide="alert-triangle"></i>
<div>
<h4 className="text-lg font-medium text-slate-200">
                    Evaluation First
                  </h4>
<p className="text-lg text-slate-400 mt-1">
                    Suspicious activity is carefully evaluated before any action
                    is taken.
                  </p>
</div>
</div>
<div className="flex gap-4">
<i className="w-6 h-6 text-slate-500 shrink-0 mt-1" data-lucide="user-check"></i>
<div>
<h4 className="text-lg font-medium text-slate-200">
                    Human Oversight
                  </h4>
<p className="text-lg text-slate-400 mt-1">
                    Final decisions are reviewed to avoid false positives.
                  </p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden text-center">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-[#0b0d11]/50 to-[#0b0d11] pointer-events-none"></div>
<div className="relative z-10 max-w-3xl mx-auto px-6">
<h2 className="text-2xl font-medium text-amber-500 mb-4">
          Ready to Test Your Skill?
        </h2>
<h3 className="text-5xl md:text-6xl font-semibold text-white tracking-tight mb-10">
          Skill Decides Everything.
        </h3>
<a className="inline-flex items-center justify-center h-16 px-10 text-xl font-semibold text-[#0b0d11] transition-all duration-200 bg-white rounded-lg hover:bg-slate-200 hover:scale-[1.02] shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]" href="#">
          Register Now
        </a>
<p className="mt-6 text-lg text-slate-500">Start playing today.</p>
</div>
</section>

<footer className="border-t border-white/5 py-12 bg-[#0b0d11]">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-amber-500" data-lucide="crown"></i>
<span className="text-lg font-medium text-white">ChessGame</span>
</div>
<div className="text-sm text-slate-500">
          © 2023 ChessGame. All rights reserved.
        </div>
</div>
</footer>



    </>
  );
}
