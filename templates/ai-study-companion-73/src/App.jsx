import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
bg: '#121212',
surface: '#1E1E2E',
primary: '#7F5AF0',
cyan: '#2CB67D',
success: '#22C55E',
warning: '#EF4444',
text: '#FFFFFE',
subtext: '#94A1B2',
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
}
}
}
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">

<div className="w-[320px] h-[680px] bg-bg rounded-[2rem] border border-white/10 overflow-hidden flex flex-col shadow-2xl relative">

<div className="h-6 w-full flex justify-between items-center px-6 mt-3">
<span className="text-xs font-medium text-white">9:41</span>
<div className="flex gap-1.5">
<span className="iconify text-white text-xs" data-icon="lucide:signal"></span>
<span className="iconify text-white text-xs" data-icon="lucide:wifi"></span>
<span className="iconify text-white text-xs" data-icon="lucide:battery-full"></span>
</div>
</div>

<div className="px-6 py-4 flex justify-between items-center">
<h1 className="text-lg font-semibold tracking-tight text-white">MindFlow</h1>
<div className="w-8 h-8 rounded-full bg-surface border border-white/5 flex items-center justify-center">
<span className="iconify text-subtext" data-icon="lucide:bell" data-width="14"></span>
</div>
</div>

<div className="flex-1 overflow-y-auto no-scrollbar px-6 pb-20">

<div className="flex items-start gap-4 mb-8">
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-cyan flex items-center justify-center avatar-glow shrink-0">
<span className="iconify text-white" data-icon="lucide:hexagon" data-width="24"></span>
</div>
<div className="bg-surface rounded-2xl rounded-tl-none p-3 border border-white/5 shadow-lg">
<p className="text-sm text-subtext leading-relaxed">
                            Welcome back! Ready to conquer that <span className="text-primary font-medium">Biology</span> deck today?
                        </p>
</div>
</div>

<div className="gradient-border-mask p-4 mb-8 flex flex-col items-center justify-center gap-3 cursor-pointer group">
<div className="w-10 h-10 rounded-full bg-bg flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform">
<span className="iconify text-primary" data-icon="lucide:wand-2" data-width="20"></span>
</div>
<p className="text-sm font-medium text-white">New Magic Deck</p>
<p className="text-xs text-subtext">Paste text or upload photo</p>
</div>

<div className="flex justify-between items-end mb-4">
<h2 className="text-sm font-medium text-white tracking-tight">Recent Decks</h2>
<span className="text-xs text-primary cursor-pointer">View All</span>
</div>
<div className="space-y-3">

<div className="bg-surface p-4 rounded-xl border border-white/5 flex items-center gap-4">
<div className="relative w-10 h-10 flex items-center justify-center">
<svg className="w-full h-full -rotate-90" viewbox="0 0 36 36">
<path className="text-white/5" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3"></path>
<path className="text-warning" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-dasharray="40, 100" strokeWidth="3"></path>
</svg>
<span className="iconify text-white absolute" data-icon="lucide:play" data-width="12"></span>
</div>
<div className="flex-1">
<h3 className="text-sm font-medium text-white">Intro to Python</h3>
<p className="text-xs text-subtext mt-0.5">20 cards • <span className="text-warning">Due for review</span></p>
</div>
</div>

<div className="bg-surface p-4 rounded-xl border border-white/5 flex items-center gap-4 opacity-75">
<div className="relative w-10 h-10 flex items-center justify-center">
<svg className="w-full h-full -rotate-90" viewbox="0 0 36 36">
<path className="text-white/5" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3"></path>
<path className="text-success" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-dasharray="100, 100" strokeWidth="3"></path>
</svg>
<span className="iconify text-success absolute" data-icon="lucide:check" data-width="14"></span>
</div>
<div className="flex-1">
<h3 className="text-sm font-medium text-white">European History</h3>
<p className="text-xs text-subtext mt-0.5">55 cards • <span className="text-success">Mastered</span></p>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 w-full h-16 bg-surface/80 backdrop-blur-md border-t border-white/5 flex justify-around items-center px-2">
<div className="flex flex-col items-center gap-1 p-2 cursor-pointer">
<span className="iconify text-primary" data-icon="lucide:home" data-width="20"></span>
<span className="text-[10px] text-primary font-medium">Home</span>
</div>
<div className="flex flex-col items-center gap-1 p-2 cursor-pointer">
<span className="iconify text-subtext" data-icon="lucide:sparkles" data-width="20"></span>
<span className="text-[10px] text-subtext font-medium">Chat</span>
</div>
<div className="flex flex-col items-center gap-1 p-2 cursor-pointer">
<span className="iconify text-subtext" data-icon="lucide:user" data-width="20"></span>
<span className="text-[10px] text-subtext font-medium">Profile</span>
</div>
</div>
</div>

<div className="w-[320px] h-[680px] bg-bg rounded-[2rem] border border-white/10 overflow-hidden flex flex-col shadow-2xl relative">
<div className="h-6 w-full mt-3"></div> 
<div className="px-6 py-4 flex items-center gap-3">
<span className="iconify text-subtext" data-icon="lucide:arrow-left" data-width="20"></span>
<span className="text-sm font-medium text-white">Generating Deck</span>
</div>

<div className="flex-1 flex flex-col items-center pt-8 px-6 relative">

<div className="w-24 h-24 mb-8 relative flex items-center justify-center">
<div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl animate-pulse"></div>
<span className="iconify text-cyan animate-spin-slow duration-[10s]" data-icon="lucide:cpu" data-width="48"></span>
<div className="absolute inset-0 border border-primary/30 rounded-full scale-125 opacity-50 animate-ping"></div>
</div>
<div className="text-center mb-8">
<p className="text-sm font-medium text-white mb-2">Analyzing your notes...</p>
<p className="text-xs text-subtext">Generating 15 flashcards</p>
</div>

<div className="w-full h-1 bg-surface rounded-full overflow-hidden mb-10 relative">
<div className="absolute inset-0 neural-bar w-2/3 rounded-full"></div>
</div>

<div className="w-full space-y-3 opacity-90">
<div className="text-xs font-medium text-subtext uppercase tracking-wider mb-2">Preview</div>
<div className="bg-surface border border-white/5 rounded-lg p-3 relative group">
<div className="absolute top-3 right-3 opacity-50">
<span className="iconify text-subtext" data-icon="lucide:pencil" data-width="12"></span>
</div>
<p className="text-xs text-subtext mb-1">Q: What is a mitochondria?</p>
<p className="text-xs text-white">A: Powerhouse of the cell.</p>
</div>
<div className="bg-surface border border-white/5 rounded-lg p-3 relative opacity-50">
<p className="text-xs text-subtext mb-1">Q: Define Osmosis.</p>
<p className="text-xs text-white">A: Movement of water molecules...</p>
</div>
</div>
</div>

<div className="p-6 bg-gradient-to-t from-bg to-transparent">
<button className="w-full bg-primary hover:bg-violet-600 text-white text-sm font-medium py-3.5 rounded-xl shadow-[0_0_20px_-5px_rgba(127,90,240,0.5)] transition-all flex items-center justify-center gap-2">
<span className="iconify" data-icon="lucide:save" data-width="16"></span>
                    Save Deck &amp; Start Studying
                </button>
</div>
</div>

<div className="w-[320px] h-[680px] bg-bg rounded-[2rem] border border-white/10 overflow-hidden flex flex-col shadow-2xl relative">
<div className="h-6 w-full mt-3"></div> 

<div className="px-6 py-4 flex justify-between items-center">
<div className="flex items-center gap-2">
<div className="w-8 h-1 bg-surface rounded-full overflow-hidden w-[100px]">
<div className="bg-success h-full w-1/4"></div>
</div>
<span className="text-xs text-subtext font-mono">5/20</span>
</div>
<span className="iconify text-primary opacity-80" data-icon="lucide:eye" data-width="18"></span>
</div>

<div className="flex-1 flex flex-col items-center justify-center px-6 pb-24">
<div className="w-full aspect-[4/5] bg-surface border border-white/5 rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-lg relative overflow-hidden group">

<div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-10 -mt-10"></div>
<div className="flex-1 flex flex-col justify-center items-center w-full">
<span className="text-xs font-medium text-subtext uppercase tracking-widest mb-4">Question</span>
<h2 className="text-xl font-medium text-white tracking-tight leading-snug">Define "Spaced Repetition"</h2>
</div>
<div className="w-full h-px bg-white/5 my-6"></div>
<div className="flex-1 flex flex-col justify-center items-center w-full animate-[fadeIn_0.5s_ease-out]">
<span className="text-xs font-medium text-success uppercase tracking-widest mb-4">Answer</span>
<p className="text-sm text-subtext leading-relaxed">
                            A learning technique that incorporates increasing intervals of time between subsequent review of previously learned material to exploit the psychological spacing effect.
                        </p>
</div>
</div>
</div>

<div className="absolute bottom-8 left-0 w-full px-6 flex gap-3">
<button className="flex-1 bg-surface border border-warning/20 hover:border-warning/50 rounded-xl py-3 flex flex-col items-center gap-1 transition-colors">
<span className="text-xs font-semibold text-warning">Hard</span>
<span className="text-[10px] text-subtext">1 min</span>
</button>
<button className="flex-1 bg-surface border border-yellow-500/20 hover:border-yellow-500/50 rounded-xl py-3 flex flex-col items-center gap-1 transition-colors">
<span className="text-xs font-semibold text-yellow-500">Good</span>
<span className="text-[10px] text-subtext">1 day</span>
</button>
<button className="flex-1 bg-surface border border-success/20 hover:border-success/50 rounded-xl py-3 flex flex-col items-center gap-1 transition-colors">
<span className="text-xs font-semibold text-success">Easy</span>
<span className="text-[10px] text-subtext">4 days</span>
</button>
</div>
</div>

<div className="w-[320px] h-[680px] bg-bg rounded-[2rem] border border-white/10 overflow-hidden flex flex-col shadow-2xl relative">
<div className="h-6 w-full mt-3"></div> 

<div className="px-6 py-4 border-b border-white/5 bg-bg/95 backdrop-blur z-10">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-cyan flex items-center justify-center">
<span className="iconify text-white" data-icon="lucide:sparkles" data-width="14"></span>
</div>
<div>
<h2 className="text-sm font-medium text-white">MindFlow Companion</h2>
<div className="flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-success"></span>
<span className="text-[10px] text-subtext">Online</span>
</div>
</div>
</div>
</div>

<div className="flex-1 overflow-y-auto no-scrollbar p-4 space-y-6">

<div className="flex justify-center">
<span className="text-[10px] text-subtext/50 font-medium">Today, 2:30 PM</span>
</div>

<div className="flex justify-end">
<div className="max-w-[85%] bg-primary rounded-2xl rounded-tr-sm px-4 py-3 shadow-[0_4px_15px_-3px_rgba(127,90,240,0.3)]">
<p className="text-xs text-white leading-relaxed">Can you explain the concept of 'recursion' simply?</p>
</div>
</div>

<div className="flex items-start gap-3">
<div className="w-6 h-6 rounded-full bg-surface border border-white/10 flex items-center justify-center shrink-0 mt-1">
<span className="iconify text-cyan" data-icon="lucide:bot" data-width="14"></span>
</div>
<div className="flex flex-col gap-2 max-w-[85%]">
<div className="bg-surface border border-white/5 rounded-2xl rounded-tl-sm px-4 py-3">
<p className="text-xs text-subtext leading-relaxed">
                                Think of <span className="text-white font-medium">recursion</span> like standing between two mirrors. The image repeats itself infinitely, getting smaller each time, until it reaches a stopping point.
                            </p>
<p className="text-xs text-subtext leading-relaxed mt-2">
                                In code, it's a function calling itself until a <span className="text-cyan">base condition</span> is met.
                            </p>
</div>

<div className="flex flex-wrap gap-2 mt-1">
<button className="px-3 py-1.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-[10px] text-subtext transition-colors">
                                Python example
                            </button>
<button className="px-3 py-1.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-[10px] text-subtext transition-colors flex items-center gap-1">
<span className="iconify" data-icon="lucide:play-circle" data-width="10"></span>
                                Quiz me
                            </button>
</div>
</div>
</div>
</div>

<div className="p-4 bg-bg border-t border-white/5">
<div className="relative">
<input className="w-full bg-surface border border-white/10 text-white text-xs rounded-full py-3 pl-4 pr-10 focus:outline-none focus:border-primary/50 placeholder:text-subtext/50" placeholder="Ask anything..." type="text"/>
<button className="absolute right-1.5 top-1.5 w-7 h-7 bg-primary rounded-full flex items-center justify-center hover:bg-violet-400 transition-colors">
<span className="iconify text-white" data-icon="lucide:arrow-up" data-width="14"></span>
</button>
</div>
</div>
</div>
</div>

    </>
  );
}
