import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
zinc: {
850: '#1f1f22',
950: '#09090b', // Custom darker background
}
}
}
}
}



        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="w-full md:w-64 border-b md:border-b-0 md:border-r border-white/5 flex flex-col justify-between bg-zinc-950/50 backdrop-blur-xl z-20 shrink-0">
<div>
<div className="p-6 flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-semibold tracking-tighter shadow-lg shadow-indigo-500/20">
                    G
                </div>
<span className="text-zinc-100 font-semibold tracking-tight text-lg">Gabits</span>
</div>
<nav className="px-3 space-y-1">
<a className="flex items-center gap-3 px-3 py-2 rounded-md bg-white/5 text-zinc-100 text-sm font-medium transition-colors border border-white/5" href="#">
<i className="w-4 h-4 text-indigo-400" data-lucide="layout-grid"></i>
                    Dashboard
                </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white/5 text-zinc-400 hover:text-zinc-100 text-sm font-medium transition-colors" href="#">
<i className="w-4 h-4" data-lucide="sword"></i>
                    Battle Arena
                </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white/5 text-zinc-400 hover:text-zinc-100 text-sm font-medium transition-colors" href="#">
<i className="w-4 h-4" data-lucide="book-open"></i>
                    Practice
                </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white/5 text-zinc-400 hover:text-zinc-100 text-sm font-medium transition-colors" href="#">
<i className="w-4 h-4" data-lucide="trophy"></i>
                    Leaderboard
                </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white/5 text-zinc-400 hover:text-zinc-100 text-sm font-medium transition-colors" href="#">
<i className="w-4 h-4" data-lucide="shopping-bag"></i>
                    Shop
                </a>
</nav>
</div>
<div className="p-4 border-t border-white/5">
<div className="bg-zinc-900/50 rounded-xl p-4 border border-white/5">
<div className="flex justify-between items-center mb-2">
<span className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Daily Goal</span>
<span className="text-xs text-indigo-400">80%</span>
</div>
<div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-indigo-500 w-[80%] rounded-full shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
</div>
<p className="text-xs text-zinc-500 mt-2">120/150 XP to next level</p>
</div>
<div className="flex items-center gap-3 mt-4 px-2">
<div className="w-8 h-8 rounded-full bg-zinc-800 border border-white/10 overflow-hidden">
<img alt="User" className="w-full h-full opacity-80" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Naman"/>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-zinc-200 truncate">Naman Sinha</p>
<p className="text-xs text-zinc-500 truncate">Math Explorer</p>
</div>
<i className="w-4 h-4 text-zinc-500 hover:text-zinc-300 cursor-pointer" data-lucide="settings"></i>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col overflow-hidden relative">

<header className="h-16 border-b border-white/5 flex items-center justify-between px-6 bg-zinc-950/80 backdrop-blur-md z-10">
<h1 className="text-sm font-medium text-zinc-400 hidden md:block">Let's Mine Knowledge</h1>
<div className="flex items-center gap-4 ml-auto">

<div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/20">
<i className="w-3.5 h-3.5 text-red-400 fill-red-400" data-lucide="heart"></i>
<span className="text-xs font-semibold text-red-400">5</span>
</div>

<div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/20">
<div className="w-3.5 h-3.5 rounded-full border-2 border-yellow-500/50 bg-yellow-500/20"></div>
<span className="text-xs font-semibold text-yellow-500">1,240</span>
</div>

<div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20">
<i className="w-3.5 h-3.5 text-cyan-400" data-lucide="gem"></i>
<span className="text-xs font-semibold text-cyan-400">45</span>
</div>
<div className="h-4 w-px bg-white/10 mx-2"></div>
<button className="relative">
<i className="w-5 h-5 text-zinc-400 hover:text-zinc-200 transition-colors" data-lucide="bell"></i>
<span className="absolute top-0 right-0 w-2 h-2 bg-indigo-500 rounded-full border-2 border-zinc-950"></span>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-4 md:p-8">
<div className="max-w-6xl mx-auto space-y-6">

<section className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 bg-zinc-900/40 rounded-2xl border border-white/10 overflow-hidden flex flex-col shadow-2xl shadow-black/50">
<div className="p-4 border-b border-white/5 flex justify-between items-center bg-zinc-900/60">
<div className="flex items-center gap-2">
<span className="px-2 py-0.5 rounded text-[10px] font-medium bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">CALCULUS</span>
<span className="text-xs text-zinc-500">Question 4/10</span>
</div>
<div className="flex items-center gap-3">
<span className="text-xs font-mono text-zinc-400">00:24</span>
<button className="text-zinc-500 hover:text-zinc-300">
<i className="w-4 h-4" data-lucide="info"></i>
</button>
</div>
</div>
<div className="flex-1 flex flex-col md:flex-row">

<div className="flex-1 p-6 md:p-8 relative">
<h3 className="text-zinc-100 text-lg md:text-xl font-medium tracking-tight mb-6">
                                    Find the derivative of the function:
                                </h3>
<div className="bg-black/20 rounded-xl p-6 border border-white/5 mb-8 flex items-center justify-center min-h-[120px]">
<p className="text-2xl md:text-3xl text-zinc-200 math-serif">
                                        f(x) = 3x<sup>2</sup> + sin(x)
                                    </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
<button className="group p-4 rounded-xl border border-white/10 hover:border-indigo-500/50 hover:bg-indigo-500/5 transition-all text-left flex items-center gap-3">
<span className="w-6 h-6 rounded flex items-center justify-center bg-zinc-800 text-xs text-zinc-400 group-hover:bg-indigo-500 group-hover:text-white transition-colors">A</span>
<span className="text-sm text-zinc-300 math-serif">6x + cos(x)</span>
</button>
<button className="group p-4 rounded-xl border border-white/10 hover:border-indigo-500/50 hover:bg-indigo-500/5 transition-all text-left flex items-center gap-3">
<span className="w-6 h-6 rounded flex items-center justify-center bg-zinc-800 text-xs text-zinc-400 group-hover:bg-indigo-500 group-hover:text-white transition-colors">B</span>
<span className="text-sm text-zinc-300 math-serif">6x - cos(x)</span>
</button>
<button className="group p-4 rounded-xl border border-white/10 hover:border-indigo-500/50 hover:bg-indigo-500/5 transition-all text-left flex items-center gap-3">
<span className="w-6 h-6 rounded flex items-center justify-center bg-zinc-800 text-xs text-zinc-400 group-hover:bg-indigo-500 group-hover:text-white transition-colors">C</span>
<span className="text-sm text-zinc-300 math-serif">3x + cos(x)</span>
</button>
<button className="group p-4 rounded-xl border border-white/10 hover:border-indigo-500/50 hover:bg-indigo-500/5 transition-all text-left flex items-center gap-3">
<span className="w-6 h-6 rounded flex items-center justify-center bg-zinc-800 text-xs text-zinc-400 group-hover:bg-indigo-500 group-hover:text-white transition-colors">D</span>
<span className="text-sm text-zinc-300 math-serif">x<sup>3</sup> + cos(x)</span>
</button>
</div>
<div className="flex justify-between mt-8">
<button className="text-xs font-medium text-zinc-500 hover:text-zinc-300 flex items-center gap-1">
<i className="w-3 h-3" data-lucide="lightbulb"></i> Get Hint (-10 coins)
                                    </button>
<button className="bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium px-6 py-2 rounded-lg shadow-lg shadow-indigo-900/20 transition-all transform active:scale-95">
                                        Check Answer
                                    </button>
</div>
</div>

<div className="hidden md:flex w-72 border-l border-white/5 flex-col bg-zinc-950/30 scribble-grid relative group">
<div className="absolute top-4 right-4 flex gap-2">
<button className="p-1.5 rounded bg-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-700 transition-colors">
<i className="w-3.5 h-3.5" data-lucide="eraser"></i>
</button>
<button className="p-1.5 rounded bg-indigo-500 text-white shadow-lg shadow-indigo-500/20">
<i className="w-3.5 h-3.5" data-lucide="pencil"></i>
</button>
</div>
<div className="mt-auto p-4">
<p className="text-[10px] text-zinc-600 font-mono text-center">Scribble Area</p>
</div>

<svg className="absolute inset-0 pointer-events-none opacity-60" height="100%" width="100%">
<path d="M 40 80 Q 50 120 90 90 T 150 120" fill="none" stroke="#6366f1" strokeWidth="2"></path>
<text fill="#6366f1" fontFamily="monospace" fontSize="12" x="160" y="110">dx</text>
</svg>
</div>
</div>
</div>

<div className="space-y-6">

<div className="bg-zinc-900/40 rounded-2xl border border-white/10 p-5">
<h3 className="text-zinc-100 text-sm font-medium tracking-tight mb-4 flex items-center gap-2">
<i className="w-4 h-4 text-orange-500" data-lucide="flame"></i>
                                Streak Tracker
                            </h3>
<div className="grid grid-cols-7 gap-1 mb-4">
<div className="flex flex-col items-center gap-1">
<span className="text-[10px] text-zinc-600">M</span>
<div className="w-6 h-6 rounded bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center">
<i className="w-3 h-3 text-indigo-400" data-lucide="check"></i>
</div>
</div>
<div className="flex flex-col items-center gap-1">
<span className="text-[10px] text-zinc-600">T</span>
<div className="w-6 h-6 rounded bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center">
<i className="w-3 h-3 text-indigo-400" data-lucide="check"></i>
</div>
</div>
<div className="flex flex-col items-center gap-1">
<span className="text-[10px] text-zinc-600">W</span>
<div className="w-6 h-6 rounded bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center">
<i className="w-3 h-3 text-indigo-400" data-lucide="check"></i>
</div>
</div>
<div className="flex flex-col items-center gap-1">
<span className="text-[10px] text-zinc-100 font-medium">T</span>
<div className="w-6 h-6 rounded bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)] flex items-center justify-center text-white">
<span className="text-[10px]">4</span>
</div>
</div>
<div className="flex flex-col items-center gap-1">
<span className="text-[10px] text-zinc-600">F</span>
<div className="w-6 h-6 rounded bg-zinc-800/50 border border-white/5"></div>
</div>
<div className="flex flex-col items-center gap-1">
<span className="text-[10px] text-zinc-600">S</span>
<div className="w-6 h-6 rounded bg-zinc-800/50 border border-white/5"></div>
</div>
<div className="flex flex-col items-center gap-1">
<span className="text-[10px] text-zinc-600">S</span>
<div className="w-6 h-6 rounded bg-zinc-800/50 border border-white/5"></div>
</div>
</div>
<div className="p-3 bg-zinc-950/50 rounded-lg border border-white/5 flex items-center justify-between">
<span className="text-xs text-zinc-400">Practice Streak</span>
<span className="text-xs font-mono text-orange-400">4 Days 🔥</span>
</div>
</div>

<div className="bg-zinc-900/40 rounded-2xl border border-white/10 p-5">
<h3 className="text-zinc-100 text-sm font-medium tracking-tight mb-4">Recent Badges</h3>
<div className="flex gap-3">
<div className="group relative">
<div className="w-10 h-10 rounded-full bg-gradient-to-b from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 flex items-center justify-center group-hover:scale-110 transition-transform cursor-help">
<i className="w-5 h-5 text-yellow-500" data-lucide="zap"></i>
</div>
</div>
<div className="group relative">
<div className="w-10 h-10 rounded-full bg-gradient-to-b from-blue-500/20 to-cyan-500/20 border border-cyan-500/30 flex items-center justify-center group-hover:scale-110 transition-transform cursor-help">
<i className="w-5 h-5 text-cyan-400" data-lucide="brain"></i>
</div>
</div>
<div className="w-10 h-10 rounded-full bg-zinc-800/50 border border-white/5 border-dashed flex items-center justify-center">
<span className="text-[10px] text-zinc-600">?</span>
</div>
</div>
</div>
</div>
</section>

<section>
<h2 className="text-zinc-100 text-lg font-medium tracking-tight mb-4">Select Mode</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

<button className="group p-5 bg-zinc-900/40 hover:bg-zinc-900/80 rounded-xl border border-white/5 hover:border-emerald-500/30 transition-all text-left relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
<i className="w-5 h-5 text-emerald-400" data-lucide="book"></i>
</div>
<h3 className="text-zinc-200 font-medium text-sm mb-1">Practice Mode</h3>
<p className="text-xs text-zinc-500 leading-relaxed">Self-paced learning. Unlimited time.</p>
</button>

<button className="group p-5 bg-zinc-900/40 hover:bg-zinc-900/80 rounded-xl border border-white/5 hover:border-orange-500/30 transition-all text-left relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
<i className="w-5 h-5 text-orange-400" data-lucide="timer"></i>
</div>
<h3 className="text-zinc-200 font-medium text-sm mb-1">Speed Drive</h3>
<p className="text-xs text-zinc-500 leading-relaxed">10 questions. 30s each. Be fast.</p>
</button>

<button className="group p-5 bg-zinc-900/40 hover:bg-zinc-900/80 rounded-xl border border-white/5 hover:border-purple-500/30 transition-all text-left relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
<i className="w-5 h-5 text-purple-400" data-lucide="bot"></i>
</div>
<h3 className="text-zinc-200 font-medium text-sm mb-1">Battle AI</h3>
<p className="text-xs text-zinc-500 leading-relaxed">Compete against the machine.</p>
</button>

<button className="group p-5 bg-zinc-900/40 hover:bg-zinc-900/80 rounded-xl border border-white/5 hover:border-blue-500/30 transition-all text-left relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
<i className="w-5 h-5 text-blue-400" data-lucide="users"></i>
</div>
<h3 className="text-zinc-200 font-medium text-sm mb-1">Battle Friends</h3>
<p className="text-xs text-zinc-500 leading-relaxed">Join lobby. Challenge peers.</p>
</button>
</div>
</section>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 bg-zinc-900/40 rounded-2xl border border-white/10 p-6">
<div className="flex items-center justify-between mb-4">
<h3 className="text-zinc-100 text-sm font-medium tracking-tight">Topics Mined</h3>
<button className="text-xs text-indigo-400 hover:text-indigo-300">View All</button>
</div>
<div className="space-y-3">
<div className="flex items-center justify-between p-3 rounded-lg bg-zinc-950/50 border border-white/5 hover:border-white/10 transition-colors">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-zinc-800 flex items-center justify-center text-zinc-400 font-serif italic">∫</div>
<div>
<p className="text-sm text-zinc-200">Integrals</p>
<p className="text-[10px] text-zinc-500">Calculus • Hard</p>
</div>
</div>
<div className="text-right">
<p className="text-xs text-emerald-400">Mastered</p>
</div>
</div>
<div className="flex items-center justify-between p-3 rounded-lg bg-zinc-950/50 border border-white/5 hover:border-white/10 transition-colors">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-zinc-800 flex items-center justify-center text-zinc-400 font-serif italic">Σ</div>
<div>
<p className="text-sm text-zinc-200">Summations</p>
<p className="text-[10px] text-zinc-500">Algebra • Moderate</p>
</div>
</div>
<div className="text-right">
<p className="text-xs text-yellow-500">In Progress (60%)</p>
</div>
</div>
</div>
</div>

<div className="bg-zinc-900/40 rounded-2xl border border-white/10 p-6">
<h3 className="text-zinc-100 text-sm font-medium tracking-tight mb-4">Top Miners</h3>
<div className="space-y-4">
<div className="flex items-center gap-3">
<span className="text-xs font-bold text-yellow-500 w-4">1</span>
<div className="w-8 h-8 rounded-full bg-zinc-800">
<img alt="" className="w-full h-full opacity-80" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex"/>
</div>
<div className="flex-1">
<p className="text-xs text-zinc-200">Alex_M</p>
<p className="text-[10px] text-zinc-500">12,400 XP</p>
</div>
</div>
<div className="flex items-center gap-3">
<span className="text-xs font-bold text-zinc-400 w-4">2</span>
<div className="w-8 h-8 rounded-full bg-zinc-800">
<img alt="" className="w-full h-full opacity-80" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"/>
</div>
<div className="flex-1">
<p className="text-xs text-zinc-200">Sarah.K</p>
<p className="text-[10px] text-zinc-500">11,200 XP</p>
</div>
</div>
<div className="flex items-center gap-3">
<span className="text-xs font-bold text-orange-700 w-4">3</span>
<div className="w-8 h-8 rounded-full bg-zinc-800">
<img alt="" className="w-full h-full opacity-80" src="https://api.dicebear.com/7.x/avataaars/svg?seed=John"/>
</div>
<div className="flex-1">
<p className="text-xs text-zinc-200">J_Doe</p>
<p className="text-[10px] text-zinc-500">10,850 XP</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
