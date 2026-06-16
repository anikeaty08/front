import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="w-full max-w-[100rem] mb-12 flex justify-between items-center">
<div className="flex items-center gap-2 text-zinc-900">
<iconify-icon height="24" src="solar:target-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-base font-semibold tracking-tighter uppercase">Focus</span>
</div>
<nav className="flex gap-6 text-sm font-medium text-zinc-500">
<span className="text-zinc-900">Shooter Flow</span>
<span>Coach System</span>
</nav>
</header>

<main className="w-full max-w-[100rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="bg-white border border-zinc-200/80 rounded-3xl shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)] h-[44rem] flex flex-col relative overflow-hidden">
<div className="pt-10 pb-4 px-6 flex justify-between items-center">
<div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-600 border border-zinc-200">
<iconify-icon src="solar:user-linear" width="16"></iconify-icon>
</div>
<iconify-icon className="text-zinc-400" src="solar:bell-linear" width="20"></iconify-icon>
</div>
<div className="flex-1 overflow-y-auto no-scrollbar px-6 pb-24 space-y-8">
<div className="space-y-1 mt-2">
<h1 className="text-2xl font-semibold tracking-tight text-zinc-900">Good morning</h1>
<p className="text-sm text-zinc-500">Your readiness is optimal today.</p>
</div>
<div className="bg-zinc-50 rounded-2xl p-5 border border-zinc-100 flex justify-between items-end">
<div className="space-y-1">
<span className="text-xs text-zinc-500 uppercase tracking-widest">Avg Score</span>
<div className="text-3xl font-semibold tracking-tight text-zinc-900">92.4</div>
</div>
<div className="flex items-center gap-1 text-emerald-500 text-xs font-medium pb-1">
<iconify-icon src="solar:trend-up-linear" width="14"></iconify-icon>
<span>+2.1%</span>
</div>
</div>
<div className="space-y-4">
<div className="flex justify-between items-center">
<h3 className="text-sm font-medium tracking-tight text-zinc-900">Recent Sessions</h3>
<span className="text-xs text-zinc-400">See all</span>
</div>
<div className="space-y-3">
<div className="flex items-center justify-between p-3 rounded-xl border border-zinc-100 hover:bg-zinc-50 transition-colors cursor-pointer">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-zinc-100 flex items-center justify-center text-zinc-500">
<iconify-icon src="solar:calendar-linear" width="18"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-zinc-900">Standard 50</div>
<div className="text-xs text-zinc-500">Yesterday</div>
</div>
</div>
<span className="text-sm font-semibold text-zinc-900">91.0</span>
</div>
<div className="flex items-center justify-between p-3 rounded-xl border border-zinc-100 hover:bg-zinc-50 transition-colors cursor-pointer">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-zinc-100 flex items-center justify-center text-zinc-500">
<iconify-icon src="solar:calendar-linear" width="18"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-zinc-900">Stress Test</div>
<div className="text-xs text-zinc-500">Oct 12</div>
</div>
</div>
<span className="text-sm font-semibold text-zinc-900">88.5</span>
</div>
</div>
</div>
</div>
<div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-white via-white to-transparent">
<button className="w-full bg-zinc-900 text-white rounded-xl py-3.5 text-sm font-medium shadow-sm hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2">
<iconify-icon src="solar:add-circle-linear" width="18"></iconify-icon>
                    New Session
                </button>
</div>
</div>

<div className="bg-white border border-zinc-200/80 rounded-3xl shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)] h-[44rem] flex flex-col relative overflow-hidden">
<div className="pt-10 pb-4 px-6 flex justify-between items-center bg-white z-10">
<iconify-icon className="text-zinc-400" src="solar:arrow-left-linear" width="20"></iconify-icon>
<h2 className="text-sm font-medium tracking-tight">Pre-Session</h2>
<div className="w-5"></div>
</div>
<div className="flex-1 overflow-y-auto no-scrollbar px-6 pb-24 flex flex-col items-center justify-center relative">
<div className="relative w-48 h-48 mb-8 flex items-center justify-center">
<svg className="absolute inset-0 w-full h-full transform -rotate-90">
<circle className="text-zinc-100" cx="96" cy="96" fill="transparent" r="90" stroke="currentColor" strokeWidth="2"></circle>
<circle className="text-emerald-400 drop-shadow-sm transition-all duration-1000 ease-out" cx="96" cy="96" fill="transparent" r="90" stroke="currentColor" stroke-dasharray="565" stroke-dashoffset="140" strokeWidth="4"></circle>
</svg>
<div className="flex flex-col items-center">
<span className="text-4xl font-semibold tracking-tight text-zinc-900">75%</span>
<span className="text-xs text-zinc-500 mt-1 uppercase tracking-widest">Readiness</span>
</div>
</div>
<div className="w-full space-y-4">
<div className="bg-amber-50/50 border border-amber-100 rounded-2xl p-4 flex flex-col items-center text-center">
<span className="text-sm font-medium text-amber-700 tracking-tight mb-1">Moderate Stress Detected</span>
<span className="text-sm text-amber-600/80">Heart rate is slightly elevated at 82 BPM.</span>
</div>
<div className="flex items-center justify-center gap-2 text-sm text-zinc-500 py-2">
<iconify-icon src="solar:heart-pulse-linear" width="18"></iconify-icon>
<span>Action: Take 2 deep breaths</span>
</div>
</div>
</div>
<div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-white via-white to-transparent">
<button className="w-full bg-zinc-900 text-white rounded-xl py-3.5 text-sm font-medium shadow-sm hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2">
                    Start Session
                    <iconify-icon src="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>

<div className="bg-zinc-50 border border-zinc-200/80 rounded-3xl shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)] h-[44rem] flex flex-col relative overflow-hidden">
<div className="pt-10 pb-4 px-6 flex justify-between items-center z-10">
<div className="w-5"></div>
<div className="flex items-center gap-1.5 px-3 py-1 bg-white rounded-full shadow-sm border border-zinc-100">
<div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
<span className="text-xs font-medium tracking-tight text-zinc-900">Live Session</span>
</div>
<iconify-icon className="text-zinc-400" src="solar:maximize-linear" width="20"></iconify-icon>
</div>
<div className="flex-1 flex flex-col items-center justify-center px-6 relative">

<div className="flex flex-col items-center mb-16 relative">
<div className="absolute -inset-10 border border-zinc-200 rounded-full opacity-50 scale-150"></div>
<div className="absolute -inset-10 border border-zinc-200 rounded-full opacity-20 scale-[2]"></div>
<span className="text-[7rem] font-light tracking-tighter text-zinc-900 leading-none z-10">12</span>
<span className="text-xs text-zinc-500 uppercase tracking-widest mt-2 z-10">Current Shot</span>
</div>

<div className="w-full grid grid-cols-2 gap-4 mt-8">
<div className="bg-white rounded-2xl p-4 border border-zinc-100 flex flex-col items-center shadow-sm">
<iconify-icon className="text-red-500 mb-2 animate-pulse-subtle" src="solar:heart-pulse-linear" width="24"></iconify-icon>
<span className="text-2xl font-semibold tracking-tight text-zinc-900">84</span>
<span className="text-xs text-zinc-400 uppercase tracking-widest mt-1">BPM</span>
</div>
<div className="bg-white rounded-2xl p-4 border border-zinc-100 flex flex-col items-center shadow-sm">
<iconify-icon className="text-zinc-400 mb-2" src="solar:stopwatch-linear" width="24"></iconify-icon>
<span className="text-2xl font-semibold tracking-tight text-zinc-900">2.4s</span>
<span className="text-xs text-zinc-400 uppercase tracking-widest mt-1">Split</span>
</div>
</div>
</div>
<div className="p-6 bg-transparent">
<button className="w-full bg-white border border-red-200 text-red-600 rounded-xl py-3.5 text-sm font-medium shadow-sm hover:bg-red-50 transition-colors">
                    End Session
                </button>
</div>
</div>

<div className="bg-zinc-950 rounded-3xl shadow-[0_2px_12px_-4px_rgba(0,0,0,0.4)] h-[44rem] flex flex-col relative overflow-hidden text-zinc-50 border border-zinc-800">
<div className="pt-10 pb-4 px-6 flex justify-between items-center z-10">
<div className="w-5"></div>
<div className="flex items-center gap-1.5 px-3 py-1 bg-white/10 rounded-full">
<div className="w-2 h-2 rounded-full bg-red-500"></div>
<span className="text-xs font-medium tracking-tight">Live</span>
</div>
<div className="w-5"></div>
</div>
<div className="flex-1 flex flex-col items-center justify-center relative px-6 z-10">
<div className="text-center mb-12 space-y-2">
<h2 className="text-2xl font-semibold tracking-tight">Pause</h2>
<p className="text-sm text-zinc-400">Reset before next shot.</p>
</div>
<div className="relative w-64 h-64 flex items-center justify-center mb-12">
<div className="absolute inset-0 rounded-full border border-white/20 animate-breathe"></div>
<div className="absolute inset-4 rounded-full border border-white/30 animate-breathe" style={{animationDelay: '0.5s'}}></div>
<div className="relative z-10 flex flex-col items-center">
<span className="text-6xl font-light tracking-tighter">08</span>
<span className="text-xs text-zinc-400 uppercase tracking-widest mt-2">Seconds</span>
</div>
</div>
<div className="flex items-center gap-2 text-sm text-zinc-400 bg-white/5 px-4 py-2 rounded-lg">
<iconify-icon src="solar:info-circle-linear" width="16"></iconify-icon>
<span>Heart rate spiked after shot 12</span>
</div>
</div>
<div className="absolute bottom-0 inset-x-0 p-6 z-10">
<button className="w-full bg-white text-zinc-900 rounded-xl py-3.5 text-sm font-medium shadow-sm hover:bg-zinc-100 transition-colors">
                    Resume
                </button>
</div>
<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-zinc-800 rounded-full blur-[100px] opacity-20 pointer-events-none"></div>
</div>

<div className="bg-white border border-zinc-200/80 rounded-3xl shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)] h-[44rem] flex flex-col relative overflow-hidden">
<div className="flex-1 flex flex-col items-center justify-center px-6 text-center space-y-6">
<div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-500 mb-4 border border-emerald-100">
<iconify-icon src="solar:check-circle-linear" width="40"></iconify-icon>
</div>
<div className="space-y-2">
<h2 className="text-2xl font-semibold tracking-tight text-zinc-900">Session Complete</h2>
<p className="text-sm text-zinc-500">All data has been synced to your profile.</p>
</div>
<div className="w-full bg-zinc-50 rounded-2xl p-4 border border-zinc-100 mt-8 flex justify-center gap-8">
<div className="text-center">
<div className="text-sm font-semibold text-zinc-900">18:42</div>
<div className="text-xs text-zinc-500 mt-1">Duration</div>
</div>
<div className="w-px bg-zinc-200"></div>
<div className="text-center">
<div className="text-sm font-semibold text-zinc-900">50</div>
<div className="text-xs text-zinc-500 mt-1">Total Shots</div>
</div>
</div>
</div>
<div className="p-6">
<button className="w-full bg-zinc-900 text-white rounded-xl py-3.5 text-sm font-medium shadow-sm hover:bg-zinc-800 transition-colors">
                    View Summary
                </button>
</div>
</div>

<div className="bg-white border border-zinc-200/80 rounded-3xl shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)] h-[44rem] flex flex-col relative overflow-hidden">
<div className="pt-10 pb-4 px-6 flex justify-between items-center border-b border-zinc-100">
<iconify-icon className="text-zinc-400" src="solar:arrow-left-linear" width="20"></iconify-icon>
<h2 className="text-sm font-medium tracking-tight">Session Summary</h2>
<div className="w-5"></div>
</div>
<div className="flex-1 overflow-y-auto no-scrollbar px-6 py-8 space-y-8">

<div className="flex flex-col items-center text-center">
<span className="text-xs text-zinc-500 uppercase tracking-widest mb-2">Overall Score</span>
<span className="text-6xl font-light tracking-tighter text-zinc-900">94.2</span>
<div className="mt-4 px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-medium rounded-full border border-emerald-100">
                        Top 10% Performance
                    </div>
</div>

<div className="grid grid-cols-2 gap-4">
<div className="bg-zinc-50 p-4 rounded-2xl border border-zinc-100">
<div className="flex items-center gap-2 text-zinc-500 mb-2">
<iconify-icon src="solar:target-linear" width="16"></iconify-icon>
<span className="text-xs font-medium">Accuracy</span>
</div>
<div className="text-xl font-semibold tracking-tight text-zinc-900">96%</div>
</div>
<div className="bg-zinc-50 p-4 rounded-2xl border border-zinc-100">
<div className="flex items-center gap-2 text-zinc-500 mb-2">
<iconify-icon src="solar:stopwatch-linear" width="16"></iconify-icon>
<span className="text-xs font-medium">Avg Split</span>
</div>
<div className="text-xl font-semibold tracking-tight text-zinc-900">2.1s</div>
</div>
<div className="bg-zinc-50 p-4 rounded-2xl border border-zinc-100">
<div className="flex items-center gap-2 text-zinc-500 mb-2">
<iconify-icon src="solar:heart-pulse-linear" width="16"></iconify-icon>
<span className="text-xs font-medium">Avg HR</span>
</div>
<div className="text-xl font-semibold tracking-tight text-zinc-900">78 BPM</div>
</div>
<div className="bg-zinc-50 p-4 rounded-2xl border border-zinc-100">
<div className="flex items-center gap-2 text-zinc-500 mb-2">
<iconify-icon src="solar:lungs-linear" width="16"></iconify-icon>
<span className="text-xs font-medium">Regulation</span>
</div>
<div className="text-xl font-semibold tracking-tight text-zinc-900">Optimal</div>
</div>
</div>
</div>
<div className="p-6 border-t border-zinc-100 bg-zinc-50/50">
<button className="w-full bg-white border border-zinc-200 text-zinc-900 rounded-xl py-3 text-sm font-medium shadow-sm hover:bg-zinc-50 transition-colors flex items-center justify-center gap-2">
                    Detailed Insights
                    <iconify-icon src="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>

<div className="bg-white border border-zinc-200/80 rounded-3xl shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)] h-[44rem] flex flex-col relative overflow-hidden">
<div className="pt-10 pb-4 px-6 flex justify-between items-center border-b border-zinc-100">
<iconify-icon className="text-zinc-400" src="solar:arrow-left-linear" width="20"></iconify-icon>
<h2 className="text-sm font-medium tracking-tight">Insights</h2>
<iconify-icon className="text-zinc-900" src="solar:share-linear" width="20"></iconify-icon>
</div>
<div className="flex-1 overflow-y-auto no-scrollbar px-6 py-6 space-y-8">
<div className="space-y-4">
<div className="flex justify-between items-end">
<h3 className="text-sm font-medium tracking-tight text-zinc-900">Performance vs Stress</h3>
<span className="text-xs text-zinc-500">Session timeline</span>
</div>
<div className="h-32 bg-zinc-50 rounded-xl relative flex items-end p-2 border border-zinc-100">
<svg className="w-full h-full overflow-visible" preserveaspectratio="none" viewbox="0 0 100 40">
<line className="text-zinc-200" stroke="currentColor" stroke-dasharray="2 2" strokeWidth="0.5" x1="0" x2="100" y1="10" y2="10"></line>
<line className="text-zinc-200" stroke="currentColor" stroke-dasharray="2 2" strokeWidth="0.5" x1="0" x2="100" y1="30" y2="30"></line>
<path className="text-zinc-300" d="M0,20 Q15,18 30,22 T60,20" fill="none" stroke="currentColor" strokeWidth="1.5"></path>
<rect className="text-red-50" fill="currentColor" height="40" width="20" x="60" y="0"></rect>
<path className="text-zinc-800" d="M60,20 Q70,35 80,32" fill="none" stroke="currentColor" strokeWidth="1.5"></path>
<path className="text-zinc-300" d="M80,32 Q90,25 100,22" fill="none" stroke="currentColor" strokeWidth="1.5"></path>
<circle className="text-red-500" cx="70" cy="30" fill="currentColor" r="1.5"></circle>
<line className="text-red-300" stroke="currentColor" stroke-dasharray="1 1" strokeWidth="0.5" x1="70" x2="70" y1="30" y2="40"></line>
</svg>
</div>
</div>
<div className="space-y-6">
<div className="pb-5 border-b border-zinc-100">
<div className="flex items-center gap-2 text-red-500 mb-2">
<iconify-icon src="solar:danger-triangle-linear" width="16"></iconify-icon>
<h4 className="text-xs font-semibold tracking-tight uppercase">Critical Moment</h4>
</div>
<p className="text-sm text-zinc-900 font-medium">Performance dropped significantly at shot 28.</p>
</div>
<div className="pb-5 border-b border-zinc-100">
<h4 className="text-xs text-zinc-500 mb-3">Identified Causes</h4>
<div className="flex gap-4">
<div className="flex-1 bg-zinc-50 rounded-lg p-3 flex items-center gap-3 border border-zinc-100">
<iconify-icon className="text-zinc-400" src="solar:heart-pulse-linear" width="20"></iconify-icon>
<div>
<div className="text-xs font-medium text-zinc-900">+15 BPM</div>
<div className="text-[10px] text-zinc-500">HR Spike</div>
</div>
</div>
<div className="flex-1 bg-zinc-50 rounded-lg p-3 flex items-center gap-3 border border-zinc-100">
<iconify-icon className="text-zinc-400" src="solar:stopwatch-linear" width="20"></iconify-icon>
<div>
<div className="text-xs font-medium text-zinc-900">-0.8s</div>
<div className="text-[10px] text-zinc-500">Shot Speed</div>
</div>
</div>
</div>
</div>
<div>
<h4 className="text-xs text-zinc-500 mb-2">Actionable Insight</h4>
<p className="text-sm text-zinc-900 leading-relaxed bg-zinc-50 p-4 rounded-xl border border-zinc-100">
                            You rushed subsequent shots after a missed target. Next session, enforce a mandatory 10-second pause and stabilize breathing.
                        </p>
</div>
</div>
</div>
</div>

<div className="bg-white border border-zinc-200/80 rounded-3xl shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)] h-[44rem] flex flex-col relative overflow-hidden bg-zinc-50/50">
<div className="pt-10 pb-4 px-6 bg-white border-b border-zinc-100 flex justify-between items-center">
<iconify-icon className="text-zinc-400" src="solar:arrow-left-linear" width="20"></iconify-icon>
<h2 className="text-sm font-medium tracking-tight">Trends</h2>
<div className="w-5"></div>
</div>
<div className="flex-1 overflow-y-auto no-scrollbar px-6 py-6 space-y-8">

<div className="bg-white p-5 rounded-2xl border border-zinc-100 shadow-sm space-y-4">
<div className="flex justify-between items-center">
<h3 className="text-xs font-medium text-zinc-500 uppercase tracking-widest">Score History</h3>
<span className="text-xs text-zinc-400">Last 5 sessions</span>
</div>
<div className="h-32 flex items-end justify-between gap-2 pt-4">
<div className="w-full bg-zinc-100 rounded-t-sm h-[60%] relative group hover:bg-zinc-200 transition-colors"></div>
<div className="w-full bg-zinc-100 rounded-t-sm h-[65%] relative group hover:bg-zinc-200 transition-colors"></div>
<div className="w-full bg-zinc-100 rounded-t-sm h-[50%] relative group hover:bg-zinc-200 transition-colors"></div>
<div className="w-full bg-zinc-100 rounded-t-sm h-[80%] relative group hover:bg-zinc-200 transition-colors"></div>
<div className="w-full bg-zinc-900 rounded-t-sm h-[95%] relative shadow-sm">
<div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs font-medium text-zinc-900">94</div>
</div>
</div>
</div>

<div className="space-y-3">
<h3 className="text-xs font-medium text-zinc-500 uppercase tracking-widest">Key Adaptations</h3>
<div className="bg-white p-4 rounded-xl border border-zinc-200 shadow-sm flex items-start gap-4">
<div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5">
<iconify-icon src="solar:graph-up-linear" width="16"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-zinc-900 mb-1">Stress Tolerance</h4>
<p className="text-xs text-zinc-500 leading-relaxed">Your baseline HR during active phases has decreased by 4 BPM over the last two weeks.</p>
</div>
</div>
<div className="bg-white p-4 rounded-xl border border-zinc-200 shadow-sm flex items-start gap-4">
<div className="w-8 h-8 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-600 shrink-0 mt-0.5 border border-zinc-100">
<iconify-icon src="solar:target-linear" width="16"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-zinc-900 mb-1">Consistency Score</h4>
<div className="flex items-center gap-3 mt-2">
<div className="flex-1 h-1.5 bg-zinc-100 rounded-full overflow-hidden">
<div className="h-full bg-zinc-900 w-[85%] rounded-full"></div>
</div>
<span className="text-xs font-medium text-zinc-900">85/100</span>
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
