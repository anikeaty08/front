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
850: '#151e2e',
900: '#0f172a',
950: '#020617',
}
},
backgroundImage: {
'grid-pattern': "linear-gradient(to right, #1e293b 1px, transparent 1px), linear-gradient(to bottom, #1e293b 1px, transparent 1px)",
}
}
}
}



        function setPricing(plan) {
            const btnMonthly = document.getElementById('btn-monthly');
            const btnYearly = document.getElementById('btn-yearly');
            const priceDisplay = document.getElementById('price-display');
            const periodDisplay = document.getElementById('period-display');

            if (plan === 'monthly') {
                // UI State
                btnMonthly.classList.add('bg-white', 'text-slate-950', 'shadow-md');
                btnMonthly.classList.remove('text-slate-400');
                btnYearly.classList.remove('bg-white', 'text-slate-950', 'shadow-md');
                btnYearly.classList.add('text-slate-400');
                
                // Data Update
                priceDisplay.textContent = '$12';
                periodDisplay.textContent = '/ month';
            } else {
                // UI State
                btnYearly.classList.add('bg-white', 'text-slate-950', 'shadow-md');
                btnYearly.classList.remove('text-slate-400');
                btnMonthly.classList.remove('bg-white', 'text-slate-950', 'shadow-md');
                btnMonthly.classList.add('text-slate-400');
                
                // Data Update
                priceDisplay.textContent = '$9';
                periodDisplay.textContent = '/ month';
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
      

<nav className="fixed w-full z-50 top-0 border-b border-white/5 bg-slate-950/80 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-5 h-5 bg-white rounded-sm flex items-center justify-center">
<span className="iconify text-slate-950" data-icon="lucide:layout-grid" data-strokeWidth="2.5" style={{fontSize: '12px'}}></span>
</div>
<span className="text-sm font-semibold tracking-tight text-white">ChessRise</span>
</div>
<div className="hidden md:flex items-center gap-8 text-xs font-medium text-slate-400">
<a className="hover:text-white transition-colors" href="#features">Features</a>
<a className="hover:text-white transition-colors" href="#levels">Levels</a>
<a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="text-xs font-medium text-slate-400 hover:text-white transition-colors hidden sm:block" href="#">Log in</a>
<a className="text-xs font-medium bg-white text-slate-950 px-4 py-2 rounded-full hover:bg-slate-200 transition-colors" href="#">Get Started</a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">

<div className="absolute inset-0 bg-grid-pattern opacity-[0.15] grid-bg pointer-events-none"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40rem] h-[20rem] bg-indigo-500/20 blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] font-medium text-indigo-300 mb-8 uppercase tracking-widest">
<span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"></span>
                Now available in Beta
            </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 mb-6 text-glow leading-[1.1]">
                Unlock Your <br className="hidden md:block"/> Chess Potential
            </h1>
<p className="text-lg md:text-xl text-slate-400 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
                Master strategy, sharpen your thinking, and climb the ranks with guided lessons, powerful tools, and personalized improvement paths.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="h-10 px-6 rounded-full bg-white text-slate-950 text-sm font-medium hover:bg-slate-200 transition-colors flex items-center gap-2 group">
                    Start Your Rise Today
                    <span className="iconify group-hover:translate-x-0.5 transition-transform" data-icon="lucide:arrow-right" data-strokeWidth="1.5"></span>
</button>
<button className="h-10 px-6 rounded-full border border-white/10 bg-white/5 text-slate-300 text-sm font-medium hover:bg-white/10 transition-colors">
                    View Methodology
                </button>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-slate-950/50" id="about">
<div className="max-w-3xl mx-auto px-6 text-center">
<span className="iconify mx-auto text-indigo-400 mb-6" data-icon="lucide:sparkles" data-strokeWidth="1.5" style={{fontSize: '24px'}}></span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6">What Is ChessRise?</h2>
<p className="text-base md:text-lg text-slate-400 leading-relaxed mb-6">
                ChessRise is an online platform designed to help players of all skill levels progress quickly and effectively.
            </p>
<p className="text-base md:text-lg text-slate-400 leading-relaxed">
                Whether you're discovering chess for the first time or striving to break into higher ELO brackets, ChessRise provides the structure, insights, and practice you need to grow.
            </p>
</div>
</section>

<section className="py-24 px-6 max-w-6xl mx-auto" id="features">
<div className="mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-white mb-4">Why You’ll Improve Faster</h2>
<p className="text-slate-400">Engineered for rapid growth and deep understanding.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="glass-card p-8 rounded-2xl group hover:border-indigo-500/30 transition-colors duration-300">
<div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-6 text-indigo-400 group-hover:text-indigo-300 transition-colors">
<span className="iconify" data-icon="lucide:target" data-strokeWidth="1.5" style={{fontSize: '20px'}}></span>
</div>
<h3 className="text-lg font-medium text-white mb-2">Personalized Training Paths</h3>
<p className="text-sm text-slate-400 leading-relaxed">
                    Follow structured courses tailored specifically to your strengths, weaknesses, and personal goals. No more guessing what to study next.
                </p>
</div>

<div className="glass-card p-8 rounded-2xl group hover:border-indigo-500/30 transition-colors duration-300">
<div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center mb-6 text-purple-400 group-hover:text-purple-300 transition-colors">
<span className="iconify" data-icon="lucide:brain-circuit" data-strokeWidth="1.5" style={{fontSize: '20px'}}></span>
</div>
<h3 className="text-lg font-medium text-white mb-2">Right Concepts, Right Time</h3>
<p className="text-sm text-slate-400 leading-relaxed">
                    Clear, concise lessons focused on practical improvement: openings, tactics, strategy, endgames, and mindset—delivered when you need them.
                </p>
</div>

<div className="glass-card p-8 rounded-2xl group hover:border-indigo-500/30 transition-colors duration-300">
<div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-6 text-emerald-400 group-hover:text-emerald-300 transition-colors">
<span className="iconify" data-icon="lucide:swords" data-strokeWidth="1.5" style={{fontSize: '20px'}}></span>
</div>
<h3 className="text-lg font-medium text-white mb-2">Practice That Builds Skill</h3>
<p className="text-sm text-slate-400 leading-relaxed">
                    Interactive drills, puzzles, and real-game scenarios designed to reinforce what matters most, moving knowledge from your head to the board.
                </p>
</div>

<div className="glass-card p-8 rounded-2xl group hover:border-indigo-500/30 transition-colors duration-300">
<div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center mb-6 text-amber-400 group-hover:text-amber-300 transition-colors">
<span className="iconify" data-icon="lucide:bar-chart-2" data-strokeWidth="1.5" style={{fontSize: '20px'}}></span>
</div>
<h3 className="text-lg font-medium text-white mb-2">Track Your Rise</h3>
<p className="text-sm text-slate-400 leading-relaxed">
                    Monitor your progress with smart analytics that visualize your strengths and reveal your blind spots, so you can adjust your training instantly.
                </p>
</div>
</div>
</section>

<section className="py-24 px-6 border-y border-white/5 bg-slate-900/30" id="levels">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-white mb-4">Designed for Every Player</h2>
<p className="text-slate-400">Content that adapts to your ELO and experience level.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="flex flex-col items-center text-center p-6">
<div className="w-12 h-12 rounded-full border border-white/10 bg-slate-850 flex items-center justify-center mb-6 shadow-lg shadow-black/50">
<span className="iconify text-slate-200" data-icon="lucide:sprout" data-strokeWidth="1.5" style={{fontSize: '20px'}}></span>
</div>
<h3 className="text-lg font-medium text-white mb-3">Beginner</h3>
<p className="text-sm text-slate-400 leading-relaxed max-w-xs">
                        Learn the rules, core principles, and basic patterns to build a solid foundation that lasts a lifetime.
                    </p>
</div>

<div className="flex flex-col items-center text-center p-6 relative">

<div className="hidden md:block absolute top-12 -left-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
<div className="w-12 h-12 rounded-full border border-indigo-500/30 bg-indigo-500/10 flex items-center justify-center mb-6 shadow-lg shadow-indigo-900/20 z-10">
<span className="iconify text-indigo-300" data-icon="lucide:shield" data-strokeWidth="1.5" style={{fontSize: '20px'}}></span>
</div>
<h3 className="text-lg font-medium text-white mb-3">Intermediate</h3>
<p className="text-sm text-slate-400 leading-relaxed max-w-xs">
                        Develop strategic vision, master key openings, and avoid common mistakes to break through plateaus.
                    </p>
</div>

<div className="flex flex-col items-center text-center p-6">
<div className="w-12 h-12 rounded-full border border-white/10 bg-slate-850 flex items-center justify-center mb-6 shadow-lg shadow-black/50">
<span className="iconify text-slate-200" data-icon="lucide:crown" data-strokeWidth="1.5" style={{fontSize: '20px'}}></span>
</div>
<h3 className="text-lg font-medium text-white mb-3">Advanced</h3>
<p className="text-sm text-slate-400 leading-relaxed max-w-xs">
                        Deepen your understanding of complex positions, calculation techniques, and long-term planning.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-6xl mx-auto">
<div className="flex flex-col lg:flex-row items-center gap-16">
<div className="lg:w-1/2">
<h2 className="text-3xl font-semibold tracking-tight text-white mb-8">What Makes ChessRise Different</h2>
<ul className="space-y-6">
<li className="flex items-start gap-3">
<span className="iconify text-indigo-400 mt-0.5 shrink-0" data-icon="lucide:check-circle-2" data-strokeWidth="1.5" style={{fontSize: '18px'}}></span>
<span className="text-sm text-slate-300">A clear, scalable learning method suited for modern players.</span>
</li>
<li className="flex items-start gap-3">
<span className="iconify text-indigo-400 mt-0.5 shrink-0" data-icon="lucide:check-circle-2" data-strokeWidth="1.5" style={{fontSize: '18px'}}></span>
<span className="text-sm text-slate-300">Real-world examples analyzed from master-level games.</span>
</li>
<li className="flex items-start gap-3">
<span className="iconify text-indigo-400 mt-0.5 shrink-0" data-icon="lucide:check-circle-2" data-strokeWidth="1.5" style={{fontSize: '18px'}}></span>
<span className="text-sm text-slate-300">Practical lessons you can apply immediately in your next match.</span>
</li>
<li className="flex items-start gap-3">
<span className="iconify text-indigo-400 mt-0.5 shrink-0" data-icon="lucide:check-circle-2" data-strokeWidth="1.5" style={{fontSize: '18px'}}></span>
<span className="text-sm text-slate-300">A simple, clean interface designed for focused daily training.</span>
</li>
<li className="flex items-start gap-3">
<span className="iconify text-indigo-400 mt-0.5 shrink-0" data-icon="lucide:check-circle-2" data-strokeWidth="1.5" style={{fontSize: '18px'}}></span>
<span className="text-sm text-slate-300">A community of learners rising together.</span>
</li>
</ul>
</div>

<div className="lg:w-1/2 w-full">
<div className="relative w-full aspect-square max-w-md mx-auto">

<div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 rounded-xl blur-2xl"></div>

<div className="relative h-full w-full bg-slate-900 border border-white/10 rounded-xl overflow-hidden grid grid-cols-4 grid-rows-4 shadow-2xl">

<div className="border-r border-b border-white/5 bg-white/[0.02]"></div>
<div className="border-r border-b border-white/5"></div>
<div className="border-r border-b border-white/5 bg-white/[0.02] relative group">

<div className="absolute inset-0 flex items-center justify-center">
<div className="w-8 h-8 rounded-full border-2 border-slate-600 opacity-50"></div>
</div>
</div>
<div className="border-b border-white/5"></div>
<div className="border-r border-b border-white/5"></div>
<div className="border-r border-b border-white/5 bg-indigo-500/10 relative">

<div className="absolute inset-2 border border-indigo-400/50 rounded-full flex items-center justify-center">
<span className="w-2 h-2 bg-indigo-400 rounded-full shadow-[0_0_10px_rgba(129,140,248,0.8)]"></span>
</div>
</div>
<div className="border-r border-b border-white/5"></div>
<div className="border-b border-white/5 bg-white/[0.02]"></div>
<div className="border-r border-b border-white/5 bg-white/[0.02]"></div>
<div className="border-r border-b border-white/5"></div>
<div className="border-r border-b border-white/5 bg-white/[0.02]"></div>
<div className="border-b border-white/5"></div>
<div className="border-r border-white/5"></div>
<div className="border-r border-white/5 bg-white/[0.02]"></div>
<div className="border-r border-white/5"></div>
<div className="bg-white/[0.02]"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-slate-950" id="pricing">
<div className="max-w-6xl mx-auto">
<div className="flex flex-col items-center text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-white mb-4">Invest in Your Growth</h2>
<p className="text-slate-400 mb-8">Simple, transparent pricing. No hidden fees.</p>

<div className="flex items-center gap-4 p-1 rounded-full border border-white/5 bg-white/5">
<button className="px-6 py-1.5 rounded-full text-sm font-medium transition-all bg-white text-slate-950 shadow-md" id="btn-monthly" onclick="setPricing('monthly')">Monthly</button>
<button className="px-6 py-1.5 rounded-full text-sm font-medium transition-all text-slate-400 hover:text-white" id="btn-yearly" onclick="setPricing('yearly')">
                        Yearly <span className="text-indigo-400 text-[10px] ml-1">-20%</span>
</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

<div className="glass-card p-8 rounded-2xl flex flex-col">
<div className="mb-6">
<span className="text-sm font-medium text-slate-400 uppercase tracking-wider">Basic</span>
<div className="flex items-baseline gap-1 mt-2">
<span className="text-4xl font-semibold text-white">$0</span>
<span className="text-slate-500">/ forever</span>
</div>
<p className="text-sm text-slate-400 mt-4 leading-relaxed">
                            Perfect for casual players looking to understand the fundamentals.
                        </p>
</div>
<div className="border-t border-white/5 my-6"></div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3">
<span className="iconify text-slate-500" data-icon="lucide:check" style={{fontSize: '16px'}}></span>
<span className="text-sm text-slate-300">Access to Beginner courses</span>
</li>
<li className="flex items-center gap-3">
<span className="iconify text-slate-500" data-icon="lucide:check" style={{fontSize: '16px'}}></span>
<span className="text-sm text-slate-300">5 Daily Puzzles</span>
</li>
<li className="flex items-center gap-3">
<span className="iconify text-slate-500" data-icon="lucide:check" style={{fontSize: '16px'}}></span>
<span className="text-sm text-slate-300">Basic Opening Explorer</span>
</li>
</ul>
<button className="w-full py-2.5 rounded-lg border border-white/10 bg-white/5 text-slate-300 text-sm font-medium hover:bg-white/10 transition-colors">
                        Get Started
                    </button>
</div>

<div className="relative p-[1px] rounded-2xl bg-gradient-to-b from-indigo-500/50 to-transparent">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-indigo-500 text-white text-[10px] font-semibold uppercase tracking-widest rounded-full shadow-lg shadow-indigo-500/20">
                        Most Popular
                    </div>
<div className="bg-slate-900 rounded-2xl p-8 h-full flex flex-col relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-[80px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
<div className="mb-6 relative z-10">
<span className="text-sm font-medium text-indigo-300 uppercase tracking-wider">Grandmaster</span>
<div className="flex items-baseline gap-1 mt-2">
<span className="text-4xl font-semibold text-white transition-all duration-300" id="price-display">$12</span>
<span className="text-slate-500 transition-all duration-300" id="period-display">/ month</span>
</div>
<p className="text-sm text-slate-400 mt-4 leading-relaxed">
                                Full access to all tools, courses, and advanced analytics.
                            </p>
</div>
<div className="border-t border-white/5 my-6"></div>
<ul className="space-y-4 mb-8 flex-1 relative z-10">
<li className="flex items-center gap-3">
<span className="iconify text-indigo-400" data-icon="lucide:check" style={{fontSize: '16px'}}></span>
<span className="text-sm text-slate-200">Unlimited Course Access</span>
</li>
<li className="flex items-center gap-3">
<span className="iconify text-indigo-400" data-icon="lucide:check" style={{fontSize: '16px'}}></span>
<span className="text-sm text-slate-200">Unlimited Puzzles &amp; Drills</span>
</li>
<li className="flex items-center gap-3">
<span className="iconify text-indigo-400" data-icon="lucide:check" style={{fontSize: '16px'}}></span>
<span className="text-sm text-slate-200">Advanced Game Analysis</span>
</li>
<li className="flex items-center gap-3">
<span className="iconify text-indigo-400" data-icon="lucide:check" style={{fontSize: '16px'}}></span>
<span className="text-sm text-slate-200">Priority Support</span>
</li>
</ul>
<button className="w-full py-2.5 rounded-lg bg-white text-slate-950 text-sm font-medium hover:bg-indigo-50 transition-colors relative z-10 shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]">
                            Upgrade to Pro
                        </button>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 text-center relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-indigo-900/10 pointer-events-none"></div>
<div className="max-w-2xl mx-auto relative z-10">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-white mb-6">Ready to level up your game?</h2>
<p className="text-lg text-slate-400 mb-10 font-light">
                Start your journey now and become the player you’re meant to be.
            </p>
<button className="h-12 px-8 rounded-full bg-white text-slate-950 text-sm font-medium hover:bg-slate-200 transition-all transform hover:scale-105 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]">
                Begin Your Rise →
            </button>
</div>
</section>

<footer className="border-t border-white/5 py-12 bg-slate-950 text-center">
<div className="flex items-center justify-center gap-2 mb-6">
<span className="iconify text-slate-600" data-icon="lucide:layout-grid" style={{fontSize: '16px'}}></span>
<span className="text-sm font-semibold text-slate-500 tracking-tight">ChessRise</span>
</div>
<div className="flex justify-center gap-6 mb-8 text-xs text-slate-500">
<a className="hover:text-slate-300 transition-colors" href="#">Privacy</a>
<a className="hover:text-slate-300 transition-colors" href="#">Terms</a>
<a className="hover:text-slate-300 transition-colors" href="#">Twitter</a>
<a className="hover:text-slate-300 transition-colors" href="#">Contact</a>
</div>
<p className="text-[10px] text-slate-700 uppercase tracking-widest">© 2023 ChessRise Inc.</p>
</footer>



    </>
  );
}
