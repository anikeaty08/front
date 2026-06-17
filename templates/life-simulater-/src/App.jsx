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
      
<div className="mx-auto flex min-h-screen w-full max-w-md flex-col overflow-hidden border-x border-white/10 bg-white/5 backdrop-blur-xl">
<header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
<div className="flex items-center justify-between px-5 py-4">
<div className="flex items-center gap-3">
<div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-400/10 shadow-[0_0_2rem_rgba(34,211,238,0.18)]">
<span className="text-sm font-semibold tracking-tight text-cyan-300">LS</span>
</div>
<div>
<h1 className="text-base font-medium tracking-tight text-white">Life Simulator AI</h1>
<p className="text-xs text-slate-400">Real Future Game</p>
</div>
</div>
<button className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-300">
<iconify-icon data-width="1.5" height="20" icon="solar:settings-linear" style={{color: 'currentColor'}} width="20"></iconify-icon>
</button>
</div>
</header>
<main className="flex-1 overflow-y-auto">
<section className="px-5 pt-6 pb-4">
<div className="rounded-[1.75rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 via-slate-900/80 to-fuchsia-400/10 p-5 shadow-[0_0_3rem_rgba(34,211,238,0.10)]">
<div className="flex items-start justify-between gap-4">
<div>
<p className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-300/80">Future Simulation</p>
<h2 className="mt-2 text-3xl font-semibold tracking-tight text-white">Design your real life. Preview your future.</h2>
<p className="mt-3 text-sm leading-6 text-slate-300">
                Turn everyday choices into story-driven life outcomes powered by AI.
              </p>
</div>
<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-fuchsia-400/20 bg-fuchsia-400/10 text-fuchsia-300">
<iconify-icon data-width="1.5" height="24" icon="solar:stars-line-duotone" style={{color: 'currentColor'}} width="24"></iconify-icon>
</div>
</div>
<div className="mt-5 grid grid-cols-3 gap-3">
<div className="rounded-2xl border border-white/10 bg-white/5 p-3">
<p className="text-xs text-slate-400">Money</p>
<p className="mt-2 text-lg font-medium tracking-tight text-emerald-300">$42k</p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-3">
<p className="text-xs text-slate-400">Happiness</p>
<p className="mt-2 text-lg font-medium tracking-tight text-cyan-300">78%</p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-3">
<p className="text-xs text-slate-400">Success</p>
<p className="mt-2 text-lg font-medium tracking-tight text-fuchsia-300">Level 6</p>
</div>
</div>
<div className="mt-5 flex gap-3">
<button className="flex-1 rounded-full bg-cyan-400 px-4 py-3 text-sm font-medium text-slate-950 shadow-[0_0_1.5rem_rgba(34,211,238,0.35)]">
              Start Simulation
            </button>
<button className="rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white">
              Watch Demo
            </button>
</div>
</div>
</section>
<section className="px-5 py-4">
<div className="mb-4 flex items-center justify-between">
<h3 className="text-lg font-medium tracking-tight text-white">Character Creation</h3>
<span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-300">Step 1</span>
</div>
<div className="space-y-3 rounded-[1.5rem] border border-white/10 bg-white/5 p-4 backdrop-blur-md">
<div>
<label className="mb-2 block text-xs font-medium uppercase tracking-[0.16em] text-slate-400">Name</label>
<div className="rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-sm text-slate-300">Alex Carter</div>
</div>
<div className="grid grid-cols-2 gap-3">
<div>
<label className="mb-2 block text-xs font-medium uppercase tracking-[0.16em] text-slate-400">Age</label>
<div className="rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-sm text-slate-300">24</div>
</div>
<div>
<label className="mb-2 block text-xs font-medium uppercase tracking-[0.16em] text-slate-400">Primary Goal</label>
<div className="rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-sm text-slate-300">Financial Freedom</div>
</div>
</div>
<div>
<label className="mb-2 block text-xs font-medium uppercase tracking-[0.16em] text-slate-400">Personality Traits</label>
<div className="flex flex-wrap gap-2">
<span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1.5 text-xs text-cyan-300">Ambitious</span>
<span className="rounded-full border border-fuchsia-400/20 bg-fuchsia-400/10 px-3 py-1.5 text-xs text-fuchsia-300">Creative</span>
<span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-xs text-emerald-300">Disciplined</span>
</div>
</div>
</div>
</section>
<section className="px-5 py-4">
<div className="mb-4 flex items-center justify-between">
<h3 className="text-lg font-medium tracking-tight text-white">Life Decision Engine</h3>
<span className="text-xs text-slate-400">Dynamic choices</span>
</div>
<div className="grid grid-cols-2 gap-3">
<div className="rounded-[1.25rem] border border-white/10 bg-white/5 p-4">
<div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
<iconify-icon data-width="1.5" height="20" icon="solar:notebook-linear" style={{color: 'currentColor'}} width="20"></iconify-icon>
</div>
<h4 className="mt-3 text-sm font-medium text-white">Education</h4>
<p className="mt-1 text-xs leading-5 text-slate-400">Choose degree, study routine, and skill focus.</p>
</div>
<div className="rounded-[1.25rem] border border-white/10 bg-white/5 p-4">
<div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-fuchsia-400/10 text-fuchsia-300">
<iconify-icon data-width="1.5" height="20" icon="solar:case-linear" style={{color: 'currentColor'}} width="20"></iconify-icon>
</div>
<h4 className="mt-3 text-sm font-medium text-white">Career</h4>
<p className="mt-1 text-xs leading-5 text-slate-400">Jobs, entrepreneurship, growth, promotions.</p>
</div>
<div className="rounded-[1.25rem] border border-white/10 bg-white/5 p-4">
<div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-400/10 text-emerald-300">
<iconify-icon data-width="1.5" height="20" icon="solar:heart-pulse-linear" style={{color: 'currentColor'}} width="20"></iconify-icon>
</div>
<h4 className="mt-3 text-sm font-medium text-white">Health</h4>
<p className="mt-1 text-xs leading-5 text-slate-400">Sleep, fitness, diet, and energy habits.</p>
</div>
<div className="rounded-[1.25rem] border border-white/10 bg-white/5 p-4">
<div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-400/10 text-amber-300">
<iconify-icon data-width="1.5" height="20" icon="solar:wallet-money-linear" style={{color: 'currentColor'}} width="20"></iconify-icon>
</div>
<h4 className="mt-3 text-sm font-medium text-white">Finance</h4>
<p className="mt-1 text-xs leading-5 text-slate-400">Income, saving, spending, and investing.</p>
</div>
<div className="col-span-2 rounded-[1.25rem] border border-white/10 bg-white/5 p-4">
<div className="flex items-start gap-4">
<div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-violet-400/10 text-violet-300">
<iconify-icon data-width="1.5" height="20" icon="solar:users-group-rounded-linear" style={{color: 'currentColor'}} width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-white">Relationships</h4>
<p className="mt-1 text-xs leading-5 text-slate-400">Family, friendships, emotional choices, and social balance.</p>
</div>
</div>
</div>
</div>
</section>
<section className="px-5 py-4">
<div className="mb-4 flex items-center justify-between">
<h3 className="text-lg font-medium tracking-tight text-white">AI Future Simulation</h3>
<span className="rounded-full border border-fuchsia-400/20 bg-fuchsia-400/10 px-3 py-1 text-xs text-fuchsia-300">1Y • 5Y • 10Y</span>
</div>
<div className="space-y-4">
<div className="rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-slate-900 to-slate-900/60 p-4 shadow-[0_0_2rem_rgba(168,85,247,0.10)]">
<div className="flex items-center justify-between">
<h4 className="text-sm font-medium text-white">1 Year Outcome</h4>
<span className="text-xs text-cyan-300">Stable Growth</span>
</div>
<div className="mt-3 rounded-2xl border border-white/10 bg-[linear-gradient(135deg,rgba(34,211,238,0.18),rgba(168,85,247,0.12))] p-4">
<p className="text-xs leading-6 text-slate-300">
                You commit to consistent learning and healthier habits. Within a year, your income improves, confidence grows, and your social life becomes more balanced.
              </p>
</div>
</div>
<div className="rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-slate-900 to-slate-900/60 p-4 shadow-[0_0_2rem_rgba(34,211,238,0.10)]">
<div className="flex items-center justify-between">
<h4 className="text-sm font-medium text-white">5 Year Outcome</h4>
<span className="text-xs text-fuchsia-300">Major Breakthrough</span>
</div>
<div className="mt-3 rounded-2xl border border-white/10 bg-[linear-gradient(135deg,rgba(168,85,247,0.18),rgba(34,211,238,0.12))] p-4">
<p className="text-xs leading-6 text-slate-300">
                By prioritizing career growth and discipline, you move into leadership, build stronger financial security, and create a more intentional lifestyle.
              </p>
</div>
</div>
<div className="rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-slate-900 to-slate-900/60 p-4 shadow-[0_0_2rem_rgba(52,211,153,0.10)]">
<div className="flex items-center justify-between">
<h4 className="text-sm font-medium text-white">10 Year Outcome</h4>
<span className="text-xs text-emerald-300">Legacy Path</span>
</div>
<div className="mt-3 rounded-2xl border border-white/10 bg-[linear-gradient(135deg,rgba(16,185,129,0.16),rgba(34,211,238,0.10))] p-4">
<p className="text-xs leading-6 text-slate-300">
                Your compound decisions lead to long-term wealth, fulfillment, and influence. The version of you in ten years enjoys freedom built through consistency.
              </p>
</div>
</div>
</div>
</section>
<section className="px-5 py-4">
<div className="mb-4 flex items-center justify-between">
<h3 className="text-lg font-medium tracking-tight text-white">Gamification</h3>
<span className="text-xs text-slate-400">Daily progress</span>
</div>
<div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4">
<div className="flex items-center justify-between">
<div>
<p className="text-xs text-slate-400">Current XP</p>
<p className="mt-1 text-2xl font-semibold tracking-tight text-white">2,480 XP</p>
</div>
<div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-right">
<p className="text-xs text-cyan-300">Level</p>
<p className="text-lg font-medium tracking-tight text-cyan-200">12</p>
</div>
</div>
<div className="mt-4">
<div className="mb-2 flex items-center justify-between text-xs text-slate-400">
<span>Progress to next level</span>
<span>74%</span>
</div>
<div className="h-3 rounded-full bg-slate-800">
<div className="h-3 w-3/4 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-400 shadow-[0_0_1rem_rgba(34,211,238,0.35)]"></div>
</div>
</div>
<div className="mt-5 space-y-3">
<div className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/60 p-3">
<div className="flex items-center gap-3">
<div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
<iconify-icon data-width="1.5" height="18" icon="solar:book-linear" style={{color: 'currentColor'}} width="18"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-white">Study for 1 hour</p>
<p className="text-xs text-slate-400">+60 XP</p>
</div>
</div>
<div className="h-5 w-5 rounded-md border border-cyan-400/40 bg-cyan-400/20"></div>
</div>
<div className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/60 p-3">
<div className="flex items-center gap-3">
<div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-300">
<iconify-icon data-width="1.5" height="18" icon="solar:dumbbell-large-minimalistic-linear" style={{color: 'currentColor'}} width="18"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-white">Exercise</p>
<p className="text-xs text-slate-400">+40 XP</p>
</div>
</div>
<div className="h-5 w-5 rounded-md border border-white/10 bg-white/5"></div>
</div>
<div className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/60 p-3">
<div className="flex items-center gap-3">
<div className="flex h-9 w-9 items-center justify-center rounded-xl bg-fuchsia-400/10 text-fuchsia-300">
<iconify-icon data-width="1.5" height="18" icon="solar:code-linear" style={{color: 'currentColor'}} width="18"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-white">Learn a new skill</p>
<p className="text-xs text-slate-400">+80 XP</p>
</div>
</div>
<div className="h-5 w-5 rounded-md border border-white/10 bg-white/5"></div>
</div>
</div>
</div>
</section>
<section className="px-5 py-4">
<div className="mb-4 flex items-center justify-between">
<h3 className="text-lg font-medium tracking-tight text-white">Life Score Dashboard</h3>
<span className="text-xs text-slate-400">Performance metrics</span>
</div>
<div className="grid grid-cols-2 gap-3">
<div className="rounded-[1.25rem] border border-white/10 bg-white/5 p-4">
<p className="text-xs text-slate-400">Financial Score</p>
<p className="mt-2 text-xl font-medium tracking-tight text-emerald-300">82</p>
<div className="mt-3 h-2 rounded-full bg-slate-800">
<div className="h-2 w-4/5 rounded-full bg-emerald-400"></div>
</div>
</div>
<div className="rounded-[1.25rem] border border-white/10 bg-white/5 p-4">
<p className="text-xs text-slate-400">Health Score</p>
<p className="mt-2 text-xl font-medium tracking-tight text-cyan-300">69</p>
<div className="mt-3 h-2 rounded-full bg-slate-800">
<div className="h-2 w-2/3 rounded-full bg-cyan-400"></div>
</div>
</div>
<div className="rounded-[1.25rem] border border-white/10 bg-white/5 p-4">
<p className="text-xs text-slate-400">Career Score</p>
<p className="mt-2 text-xl font-medium tracking-tight text-fuchsia-300">76</p>
<div className="mt-3 h-2 rounded-full bg-slate-800">
<div className="h-2 w-3/4 rounded-full bg-fuchsia-400"></div>
</div>
</div>
<div className="rounded-[1.25rem] border border-white/10 bg-white/5 p-4">
<p className="text-xs text-slate-400">Relationship Score</p>
<p className="mt-2 text-xl font-medium tracking-tight text-violet-300">71</p>
<div className="mt-3 h-2 rounded-full bg-slate-800">
<div className="h-2 w-[70%] rounded-full bg-violet-400"></div>
</div>
</div>
</div>
<div className="mt-3 rounded-[1.5rem] border border-white/10 bg-white/5 p-4">
<div className="mb-4 flex items-center justify-between">
<p className="text-sm font-medium text-white">Life Performance Graph</p>
<p className="text-xs text-slate-400">Last 6 months</p>
</div>
<div className="flex h-32 items-end justify-between gap-2">
<div className="w-full rounded-t-xl bg-cyan-400/60" style={{height: '34%'}}></div>
<div className="w-full rounded-t-xl bg-cyan-400/60" style={{height: '48%'}}></div>
<div className="w-full rounded-t-xl bg-fuchsia-400/70" style={{height: '52%'}}></div>
<div className="w-full rounded-t-xl bg-fuchsia-400/70" style={{height: '68%'}}></div>
<div className="w-full rounded-t-xl bg-emerald-400/70" style={{height: '72%'}}></div>
<div className="w-full rounded-t-xl bg-emerald-400/80" style={{height: '86%'}}></div>
</div>
</div>
</section>
<section className="px-5 py-4 pb-28">
<div className="mb-4 flex items-center justify-between">
<h3 className="text-lg font-medium tracking-tight text-white">AI Guidance</h3>
<span className="rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1 text-xs text-amber-300">Smart Warnings</span>
</div>
<div className="space-y-3">
<div className="rounded-[1.5rem] border border-emerald-400/20 bg-emerald-400/10 p-4">
<div className="flex items-start gap-3">
<div className="mt-0.5 text-emerald-300">
<iconify-icon data-width="1.5" height="20" icon="solar:lightbulb-linear" style={{color: 'currentColor'}} width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-white">AI Suggestion</p>
<p className="mt-1 text-xs leading-6 text-slate-200">
                  Increase skill-learning time by three sessions a week to boost your 5-year career outcome.
                </p>
</div>
</div>
</div>
<div className="rounded-[1.5rem] border border-amber-400/20 bg-amber-400/10 p-4">
<div className="flex items-start gap-3">
<div className="mt-0.5 text-amber-300">
<iconify-icon data-width="1.5" height="20" icon="solar:danger-triangle-linear" style={{color: 'currentColor'}} width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-white">Bad Habit Warning</p>
<p className="mt-1 text-xs leading-6 text-slate-200">
                  Irregular sleep and rising monthly expenses may reduce your future happiness and savings trajectory.
                </p>
</div>
</div>
</div>
<div className="rounded-[1.5rem] border border-cyan-400/20 bg-cyan-400/10 p-4">
<div className="flex items-start gap-3">
<div className="mt-0.5 text-cyan-300">
<iconify-icon data-width="1.5" height="20" icon="solar:target-linear" style={{color: 'currentColor'}} width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-white">Recommended Goal</p>
<p className="mt-1 text-xs leading-6 text-slate-200">
                  Set a savings target and pair it with daily study streaks to improve both finance and career scores.
                </p>
</div>
</div>
</div>
</div>
</section>
</main>
<nav className="fixed bottom-0 left-1/2 z-50 w-full max-w-md -translate-x-1/2 border-t border-white/10 bg-slate-950/80 backdrop-blur-xl">
<div className="grid grid-cols-5 px-3 py-3">
<button className="flex flex-col items-center gap-1 text-cyan-300">
<iconify-icon data-width="1.5" height="20" icon="solar:home-2-linear" style={{color: 'currentColor'}} width="20"></iconify-icon>
<span className="text-xs">Home</span>
</button>
<button className="flex flex-col items-center gap-1 text-slate-500">
<iconify-icon data-width="1.5" height="20" icon="solar:user-id-linear" style={{color: 'currentColor'}} width="20"></iconify-icon>
<span className="text-xs">Profile</span>
</button>
<button className="flex flex-col items-center gap-1 text-slate-500">
<iconify-icon data-width="1.5" height="20" icon="solar:magic-stick-3-linear" style={{color: 'currentColor'}} width="20"></iconify-icon>
<span className="text-xs">Simulate</span>
</button>
<button className="flex flex-col items-center gap-1 text-slate-500">
<iconify-icon data-width="1.5" height="20" icon="solar:chart-2-linear" style={{color: 'currentColor'}} width="20"></iconify-icon>
<span className="text-xs">Scores</span>
</button>
<button className="flex flex-col items-center gap-1 text-slate-500">
<iconify-icon data-width="1.5" height="20" icon="solar:crown-linear" style={{color: 'currentColor'}} width="20"></iconify-icon>
<span className="text-xs">Premium</span>
</button>
</div>
</nav>
</div>

    </>
  );
}
