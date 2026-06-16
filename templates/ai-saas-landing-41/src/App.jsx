import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
animation: {
'float': 'float 6s ease-in-out infinite',
'float-delayed': 'float 6s ease-in-out 3s infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-20px)' },
}
}
}
},
plugins: [
function({ addUtilities }) {
addUtilities({
'.rotate-y-12': { transform: 'rotateY(12deg)' },
'.rotate-x-12': { transform: 'rotateX(12deg)' },
'.perspective-1000': { perspective: '1000px' },
'.transform-style-3d': { transformStyle: 'preserve-3d' },
'.backface-hidden': { backfaceVisibility: 'hidden' },
});
}
]
};



        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 pointer-events-none">

<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black"></div>

<div className="absolute inset-0 bg-grid [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>

<div className="absolute -top-1/4 -left-1/4 w-[80%] h-[80%] bg-purple-900/20 rounded-full blur-[120px] mix-blend-screen animate-pulse duration-[4s]"></div>

<div className="absolute -bottom-1/4 -right-1/4 w-[70%] h-[70%] bg-blue-900/10 rounded-full blur-[100px] mix-blend-screen"></div>

<div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay"></div>
</div>

<nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
<div className="bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-full px-2 py-2 flex items-center justify-between w-full max-w-3xl shadow-2xl shadow-purple-900/10 ring-1 ring-white/5">

<div className="flex items-center gap-4 pl-4">
<div className="flex items-center gap-2">
<div className="w-5 h-5 bg-gradient-to-tr from-purple-500 to-cyan-500 rounded-md flex items-center justify-center">
<span className="font-bold text-[10px] text-white">A</span>
</div>
<span className="font-semibold tracking-tight text-sm">Acme AI</span>
</div>
<div className="h-4 w-[1px] bg-white/10"></div>

<div className="hidden md:flex items-center gap-6 text-xs font-medium text-slate-400">
<a className="text-white hover:text-purple-300 transition-colors relative group" href="#">
                        Overview
                    </a>
<a className="hover:text-white transition-colors" href="#">Integration</a>
<a className="hover:text-white transition-colors" href="#">Safety</a>
<a className="hover:text-white transition-colors" href="#">Docs</a>
</div>
</div>

<div className="flex items-center gap-2 pr-1">
<button className="hidden sm:flex items-center gap-2 text-xs font-medium text-slate-400 hover:text-white px-3 py-1.5 transition-colors">
                    Sign In
                </button>
<button className="bg-white text-black text-xs font-semibold px-4 py-2 rounded-full hover:bg-slate-200 transition-colors shadow-lg shadow-white/10 flex items-center gap-2">
                    Start Building
                    <i className="w-3 h-3" data-lucide="chevron-right"></i>
</button>
</div>
</div>
</nav>

<main className="relative z-10 container mx-auto px-6 min-h-screen flex flex-col lg:flex-row items-center justify-center pt-32 lg:pt-0 gap-16 lg:gap-12">

<div className="w-full lg:w-5/12 flex flex-col items-start text-left space-y-8 relative">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-[10px] font-mono mb-2">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
</span>
                v2.0 Public Beta is live
            </div>
<h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.1]">
<span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-slate-400">Scale your</span><br/>
<span className="text-white">Neural Logic.</span>
</h1>
<p className="text-lg text-slate-400 font-light max-w-lg leading-relaxed">
                The complete toolkit for AI-native applications. Train, deploy, and monitor your models with <span className="text-slate-200 font-medium">zero latency</span> infrastructure.
            </p>

<div className="w-full max-w-md relative group cursor-text">
<div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg opacity-30 group-hover:opacity-60 blur transition duration-500"></div>
<div className="relative bg-slate-900 border border-white/10 rounded-lg p-3 flex items-center gap-3 shadow-2xl">
<span className="text-slate-500"><i className="w-4 h-4" data-lucide="terminal"></i></span>
<span className="text-sm text-slate-400 font-mono">npm install @acme/ai-sdk</span>
<div className="ml-auto flex gap-2">
<div className="w-2 h-2 rounded-full bg-slate-700"></div>
<div className="w-2 h-2 rounded-full bg-slate-700"></div>
</div>
</div>
</div>
<div className="flex flex-col sm:flex-row gap-4 w-full pt-2">
<button className="group relative px-6 py-3.5 rounded-lg text-white font-medium text-sm overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto text-center">
<div className="absolute inset-0 bg-white opacity-10 group-hover:opacity-20 transition-opacity"></div>
<span className="relative">Start Free Trial</span>
</button>
<button className="px-6 py-3.5 rounded-lg text-slate-300 font-medium text-sm border border-white/5 bg-transparent hover:bg-white/5 hover:text-white transition-all w-full sm:w-auto flex items-center justify-center gap-2">
<i className="w-4 h-4" data-lucide="play-circle"></i>
                    View Changelog
                </button>
</div>

<div className="pt-8 border-t border-white/5 w-full">
<p className="text-[10px] text-slate-500 mb-4 font-mono uppercase tracking-widest">Powering next-gen teams</p>
<div className="flex flex-wrap gap-x-8 gap-y-4 text-slate-600 font-semibold tracking-tighter text-sm">
<span className="hover:text-slate-400 transition-colors cursor-default">VERTEX</span>
<span className="hover:text-slate-400 transition-colors cursor-default">NOVA</span>
<span className="hover:text-slate-400 transition-colors cursor-default">LIGHTSPEED</span>
<span className="hover:text-slate-400 transition-colors cursor-default">ECHO</span>
</div>
</div>
</div>

<div className="w-full lg:w-7/12 relative h-[600px] perspective-1000 flex items-center justify-center lg:pl-10">

<div className="absolute top-10 left-0 w-64 bg-[#0d1117] rounded-xl border border-white/10 p-4 shadow-2xl z-0 transform -rotate-12 translate-y-8 opacity-60 scale-90 blur-[1px]">
<div className="flex gap-1.5 mb-3">
<div className="w-2 h-2 rounded-full bg-red-500/50"></div>
<div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
<div className="w-2 h-2 rounded-full bg-green-500/50"></div>
</div>
<div className="space-y-1.5 font-mono text-[8px] leading-relaxed text-slate-400">
<div className="flex"><span className="text-purple-400 w-4">1</span><span>import { <span className="text-yellow-200">Neural</span> } from 'sdk';</span></div>
<div className="flex"><span className="text-slate-600 w-4">2</span><span></span></div>
<div className="flex"><span className="text-slate-600 w-4">3</span><span>const <span className="text-blue-400">model</span> = new Neural({</span></div>
<div className="flex"><span className="text-slate-600 w-4">4</span><span className="pl-2">mode: <span className="text-green-400">'fast'</span>,</span></div>
<div className="flex"><span className="text-slate-600 w-4">5</span><span className="pl-2">latency: <span className="text-orange-400">0.02</span></span></div>
<div className="flex"><span className="text-slate-600 w-4">6</span><span>});</span></div>
</div>
</div>

<div className="relative w-full max-w-xl bg-slate-900/60 backdrop-blur-md border border-white/10 rounded-2xl p-1 shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)] overflow-hidden transform rotate-y-[-8deg] rotate-x-[5deg] hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-700 ease-out z-10 group">

<div className="bg-slate-950/50 rounded-xl h-full w-full overflow-hidden flex flex-col">

<div className="h-12 border-b border-white/5 flex items-center justify-between px-4 bg-white/5">
<div className="flex items-center gap-3">
<div className="w-20 h-2 bg-white/10 rounded-full"></div>
<div className="w-12 h-2 bg-white/5 rounded-full"></div>
</div>
<div className="flex items-center gap-3">
<div className="px-2 py-0.5 rounded text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
<div className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse"></div>
                                 Connected
                             </div>
</div>
</div>
<div className="flex flex-1 overflow-hidden">

<div className="w-14 border-r border-white/5 flex flex-col items-center py-4 gap-4 bg-white/[0.02]">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-purple-500/20">
<i className="w-4 h-4 fill-current" data-lucide="zap"></i>
</div>
<div className="h-[1px] w-6 bg-white/10 my-1"></div>
<div className="p-2 rounded-md hover:bg-white/5 text-slate-400 hover:text-white transition-colors"><i className="w-4 h-4" data-lucide="bar-chart"></i></div>
<div className="p-2 rounded-md hover:bg-white/5 text-slate-400 hover:text-white transition-colors"><i className="w-4 h-4" data-lucide="database"></i></div>
<div className="p-2 rounded-md hover:bg-white/5 text-slate-400 hover:text-white transition-colors"><i className="w-4 h-4" data-lucide="globe"></i></div>
<div className="mt-auto p-2 rounded-full border border-white/10"><img className="w-5 h-5 rounded-full grayscale hover:grayscale-0 transition-all" src="https://i.pravatar.cc/150?img=60"/></div>
</div>

<div className="flex-1 p-5 bg-gradient-to-br from-transparent to-black/20">

<div className="grid grid-cols-3 gap-3 mb-5">
<div className="bg-white/5 rounded-lg border border-white/5 p-3">
<div className="text-[10px] text-slate-400 uppercase tracking-wider mb-1">Requests</div>
<div className="text-lg font-semibold text-white">2.4M</div>
<div className="text-[10px] text-emerald-400 mt-1 flex items-center gap-1"><i className="w-3 h-3" data-lucide="arrow-up-right"></i> 12%</div>
</div>
<div className="bg-white/5 rounded-lg border border-white/5 p-3">
<div className="text-[10px] text-slate-400 uppercase tracking-wider mb-1">Latency</div>
<div className="text-lg font-semibold text-white">14ms</div>
<div className="text-[10px] text-emerald-400 mt-1 flex items-center gap-1"><i className="w-3 h-3" data-lucide="arrow-down-right"></i> -4%</div>
</div>
<div className="bg-white/5 rounded-lg border border-white/5 p-3 relative overflow-hidden">
<div className="absolute inset-0 bg-purple-500/5"></div>
<div className="text-[10px] text-slate-400 uppercase tracking-wider mb-1">Tokens</div>
<div className="text-lg font-semibold text-white">89k</div>
<div className="w-full bg-slate-800 h-1 mt-3 rounded-full overflow-hidden">
<div className="bg-purple-500 h-full w-[70%] rounded-full"></div>
</div>
</div>
</div>

<div className="bg-white/5 rounded-lg border border-white/5 p-4 mb-4 h-36 relative w-full">
<div className="flex justify-between items-center mb-4">
<div className="text-xs font-medium text-slate-300">Throughput</div>
<div className="flex gap-2">
<span className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-slate-400">1h</span>
<span className="text-[10px] px-2 py-0.5 rounded bg-white/10 text-white">24h</span>
</div>
</div>

<div className="absolute inset-x-4 top-12 bottom-4 flex flex-col justify-between pointer-events-none opacity-20">
<div className="border-t border-dashed border-slate-400 w-full h-px"></div>
<div className="border-t border-dashed border-slate-400 w-full h-px"></div>
<div className="border-t border-dashed border-slate-400 w-full h-px"></div>
</div>

<div className="absolute inset-x-4 top-12 bottom-4 flex items-end gap-1">
<div className="w-full h-[30%] bg-purple-500/20 rounded-t-sm relative group/bar hover:bg-purple-500/40 transition-colors"></div>
<div className="w-full h-[50%] bg-purple-500/20 rounded-t-sm relative group/bar hover:bg-purple-500/40 transition-colors"></div>
<div className="w-full h-[45%] bg-purple-500/20 rounded-t-sm relative group/bar hover:bg-purple-500/40 transition-colors"></div>
<div className="w-full h-[70%] bg-purple-500/20 rounded-t-sm relative group/bar hover:bg-purple-500/40 transition-colors"></div>
<div className="w-full h-[60%] bg-purple-500/20 rounded-t-sm relative group/bar hover:bg-purple-500/40 transition-colors"></div>
<div className="w-full h-[85%] bg-purple-500/20 rounded-t-sm relative group/bar hover:bg-purple-500/40 transition-colors"></div>
<div className="w-full h-[65%] bg-purple-500/20 rounded-t-sm relative group/bar hover:bg-purple-500/40 transition-colors"></div>
<div className="w-full h-[95%] bg-purple-500/50 rounded-t-sm relative shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
</div>
</div>

<div className="space-y-2">
<div className="text-[10px] text-slate-500 font-medium uppercase px-1">Recent Activity</div>
<div className="bg-white/5 border border-white/5 rounded-md p-2 flex items-center justify-between group/item hover:bg-white/10 transition-colors cursor-pointer">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-blue-500/20 text-blue-400 flex items-center justify-center"><i className="w-3 h-3" data-lucide="code"></i></div>
<div className="flex flex-col">
<span className="text-xs text-slate-200">API Key Created</span>
<span className="text-[10px] text-slate-500">Just now</span>
</div>
</div>
<i className="w-3 h-3 text-slate-600 group-hover/item:text-slate-300" data-lucide="chevron-right"></i>
</div>
<div className="bg-white/5 border border-white/5 rounded-md p-2 flex items-center justify-between group/item hover:bg-white/10 transition-colors cursor-pointer">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-purple-500/20 text-purple-400 flex items-center justify-center"><i className="w-3 h-3" data-lucide="webhook"></i></div>
<div className="flex flex-col">
<span className="text-xs text-slate-200">Webhook Failed</span>
<span className="text-[10px] text-slate-500">2 mins ago</span>
</div>
</div>
<div className="w-2 h-2 rounded-full bg-red-500"></div>
</div>
</div>
</div>
</div>
</div>
</div>


<div className="absolute bottom-12 -left-4 w-48 bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-xl p-4 shadow-2xl z-30 transform translate-y-4 animate-float">
<div className="flex items-start gap-3">
<div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
<i className="w-4 h-4" data-lucide="shield-check"></i>
</div>
<div>
<div className="text-xs text-slate-400">Security Audit</div>
<div className="text-sm font-semibold text-white">Passed 100%</div>
<div className="w-full bg-slate-800 h-1 mt-2 rounded-full overflow-hidden">
<div className="bg-cyan-400 h-full w-full"></div>
</div>
</div>
</div>
</div>

<div className="absolute -top-6 -right-6 w-40 bg-black/80 backdrop-blur-md border border-white/10 rounded-lg p-3 shadow-2xl z-20 transform rotate-6 animate-float-delayed">
<div className="text-[10px] font-mono text-slate-400">
<span className="text-purple-400">await</span> generate(<br/>
                      <span className="text-green-400">"opt-125m"</span>,<br/>
                      { temp: <span className="text-orange-400">0.7</span> }<br/>
                    );
                </div>
</div>
</div>
</main>

<div className="fixed bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent pointer-events-none z-40"></div>


    </>
  );
}
