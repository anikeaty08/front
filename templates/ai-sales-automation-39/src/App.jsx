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



(function () {
const style = document.createElement("style");
style.textContent = `
.animate-on-scroll { animation-play-state: paused !important; }
.animate-on-scroll.animate { animation-play-state: running !important; }
`;
document.head.appendChild(style);
const once = true;
if (!window.__inViewIO) {
window.__inViewIO = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("animate");
if (once) window.__inViewIO.unobserve(entry.target);
}
});
}, { threshold: 0.2, rootMargin: "0px 0px -10% 0px" });
}
window.initInViewAnimations = function (selector = ".animate-on-scroll") {
document.querySelectorAll(selector).forEach((el) => {
window.__inViewIO.observe(el);
});
};
document.addEventListener("DOMContentLoaded", () => initInViewAnimations());
})();



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.33/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();



        function switchPricing(plan) {
            const bg = document.getElementById('toggle-bg');
            if (plan === 'yearly') {
                bg.style.left = '50%';
            } else {
                bg.style.left = '0';
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="1bY8o6HVTI1oxJxuCJEG"></div>
</div>

<div className="fixed inset-0 z-50 opacity-40 mix-blend-overlay" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=\\'0 0 400 400\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cfilter id=\\'noiseFilter\\'%3E%3CfeTurbulence type=\\'fractalNoise\\' baseFrequency=\\'0.9\\' numOctaves=\\'3\\' stitchTiles=\\'stitch\\'/%3E%3C/filter%3E%3Crect width=\\'100%25\\' height=\\'100%25\\' filter=\\'url(%23noiseFilter)\\' opacity=\\'0.05\\'/%3E%3C/svg%3E\')', pointerEvents: 'none'}}></div>

<nav className="fixed top-0 left-0 right-0 z-40 flex justify-center py-6 [animation:animationIn_0.8s_ease-out_0s_both]">
<div className="bg-white/[0.03] backdrop-blur-[12px] border border-white/[0.08] rounded-full px-6 py-3 flex items-center justify-between w-[90%] max-w-5xl shadow-2xl">
<div className="flex items-center gap-2">
<div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.4)]">
<span className="text-2xl tracking-tight text-white pb-1" style={{fontFamily: '\'Agbalumo\', system-ui'}}>P</span>
</div>
<span className="font-semibold text-lg tracking-tight hidden sm:block text-white">PitchwithAI</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-200">
<a className="hover:text-white transition-colors duration-300" href="#features">Capabilities</a>
<a className="hover:text-white transition-colors duration-300" href="#how-it-works">Workflow</a>
<a className="hover:text-white transition-colors duration-300" href="#pricing">Pricing</a>
</div>
<div className="flex items-center gap-4">
<button className="text-sm font-medium text-neutral-200 hover:text-white transition-colors">Login</button>
<button className="bg-white text-black text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-neutral-200 transition-colors shadow-lg shadow-white/10">
                    Start Campaign
                </button>
</div>
</div>
</nav>

<header className="min-h-screen flex flex-col overflow-hidden pt-32 pr-6 pb-20 pl-6 relative items-center justify-center">
<div className="max-w-4xl mx-auto text-center z-10 transition-all duration-1000 transform translate-y-0 opacity-100">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-blue-300 mb-8 shadow-[0_0_10px_rgba(37,99,235,0.15)] [animation:animationIn_0.8s_ease-out_0.1s_both]">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600 shadow-[0_0_8px_#2563eb]"></span>
</span>
                AI Sales Agent v2.0 is live
            </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight mb-8 leading-[0.95] bg-gradient-to-br from-white to-neutral-200 bg-clip-text text-transparent [animation:animationIn_0.8s_ease-out_0.2s_both]" style={{fontFamily: '\'Plus Jakarta Sans\', sans-serif'}}>
                Sales on <br/>
<span className="text-white/60 italic font-serif tracking-tight">Autopilot.</span>
</h1>
<p className="text-lg md:text-xl text-neutral-200 font-normal max-w-xl mx-auto mb-10 leading-relaxed [animation:animationIn_0.8s_ease-out_0.3s_both]">
                Stop manually prospecting. PitchwithAI autonomously finds leads, writes hyper-personalized outreach, and books meetings while you sleep.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 [animation:animationIn_0.8s_ease-out_0.4s_both]">
<button className="group relative px-8 py-4 bg-white text-black rounded-full font-semibold text-sm transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] overflow-hidden">
<span className="relative z-10 flex items-center gap-2">
                        Get Started Free <iconify-icon className="w-4 h-4 transition-transform group-hover:translate-x-1" icon="lucide:arrow-right" style={{strokeWidth: '1.5'}}></iconify-icon>
</span>
</button>
<button className="px-8 py-4 bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10 shadow-[0_2px_10px_rgba(0,0,0,0.2)] hover:bg-white/10 hover:border-white/20 transition-all duration-300 rounded-full text-neutral-100 font-medium text-sm hover:text-white flex items-center gap-2 group">
<iconify-icon className="w-4 h-4 text-neutral-300 group-hover:text-blue-400 transition-colors" icon="lucide:play-circle" style={{strokeWidth: '1.5'}}></iconify-icon>
                    Watch the Demo
                </button>
</div>
</div>

<div className="[animation:animationIn_0.8s_ease-out_0.6s_both] w-full max-w-6xl mt-24 relative">

<div className="absolute -top-24 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-blue-700/40 overflow-hidden">
<div className="absolute left-1/2 -translate-x-1/2 w-[2px] h-12 bg-gradient-to-b from-transparent to-blue-600 drop-animation"></div>
</div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-[2px] bg-gradient-to-r from-transparent via-blue-600 to-transparent shadow-[0_0_8px_rgba(37,99,235,0.4)] z-20"></div>
<div className="-top-20 -translate-x-1/2 blur-[100px] -z-10 bg-blue-600/5 w-[80%] h-[200px] rounded-full absolute left-1/2"></div>
<div className="backdrop-blur-[12px] border-white/[0.08] border rounded-2xl pt-1.5 pr-1.5 pb-1.5 pl-1.5 shadow-[0_30px_60px_rgba(0,0,0,0.6)] relative z-10">
<div className="overflow-hidden flex flex-col bg-[#050505] border-white/10 border rounded-xl" style={{height: '550px'}}>

<div className="h-12 border-b border-white/5 flex items-center justify-between px-4 bg-[#080808] shrink-0">

<div className="flex items-center gap-2 w-1/4">
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full bg-red-500/50 border border-red-500/20"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/50 border border-yellow-500/20"></div>
<div className="w-3 h-3 rounded-full bg-green-500/50 border border-green-500/20"></div>
</div>
</div>

<div className="flex items-center justify-center gap-3 text-sm text-neutral-300 font-normal flex-1">
<div className="flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/5 border border-blue-500/20 text-blue-300 font-medium">
<div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse shadow-[0_0_8px_#3b82f6]"></div>
                                Active Fleet
                            </div>
<span className="text-neutral-500">/</span>
<span>looper.ai</span>
<span className="text-neutral-500">/</span>
<span className="text-white font-medium">orchestration</span>
</div>

<div className="flex items-center justify-end gap-5 text-neutral-300 w-1/4">
<iconify-icon className="w-4 h-4 hover:text-white transition-colors cursor-pointer" icon="lucide:search" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon className="w-4 h-4 hover:text-white transition-colors cursor-pointer" icon="lucide:code-2" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon className="w-4 h-4 hover:text-white transition-colors cursor-pointer" icon="lucide:menu" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>

<div className="flex flex-1 overflow-hidden">

<div className="w-64 border-r border-white/5 bg-[#080808] flex flex-col shrink-0 relative z-20">
<div className="p-5 flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-[0_0_15px_rgba(37,99,235,0.3)]">
<iconify-icon className="w-4 h-4" icon="lucide:infinity" style={{strokeWidth: '2'}}></iconify-icon>
</div>
<span className="text-white font-semibold text-sm tracking-tight">Fleet Command</span>
</div>
<div className="px-4 mb-6">
<div className="bg-[#111] border border-white/5 rounded-md px-3 py-2 flex items-center justify-between text-neutral-300 group focus-within:border-white/20 transition-colors cursor-text">
<div className="flex items-center gap-2">
<iconify-icon className="w-4 h-4" icon="lucide:search" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-xs font-normal">Search agents, logs...</span>
</div>
<div className="flex items-center gap-1 text-xs font-mono bg-white/5 px-1.5 py-0.5 rounded text-neutral-300">
<iconify-icon className="w-3 h-3" icon="lucide:command"></iconify-icon>K
                                    </div>
</div>
</div>
<div className="flex-1 overflow-y-auto px-3 space-y-6">
<div className="">
<div className="text-xs uppercase tracking-widest text-neutral-400 font-semibold mb-2 px-2">HQ</div>
<div className="space-y-1">
<div className="flex items-center gap-3 px-2 py-1.5 rounded-md text-neutral-200 hover:text-white hover:bg-white/5 transition-colors cursor-pointer text-sm font-normal">
<iconify-icon className="w-4 h-4" icon="lucide:layout-dashboard" style={{strokeWidth: '1.5'}}></iconify-icon> Overview
                                        </div>
<div className="flex items-center justify-between px-2 py-1.5 rounded-md text-neutral-200 hover:text-white hover:bg-white/5 transition-colors cursor-pointer text-sm font-normal">
<div className="flex items-center gap-3">
<iconify-icon className="w-4 h-4" icon="lucide:inbox" style={{strokeWidth: '1.5'}}></iconify-icon> Agent Inbox
                                            </div>
<span className="bg-blue-500/20 text-blue-300 text-xs px-2 py-0.5 rounded-full font-semibold">12</span>
</div>
</div>
</div>
<div className="">
<div className="text-xs uppercase tracking-widest text-neutral-400 font-semibold mb-2 px-2">Workforces</div>
<div className="space-y-1">
<div className="flex items-center gap-3 px-2 py-1.5 rounded-md text-white bg-white/5 border-l-2 border-blue-500 transition-colors cursor-pointer text-sm font-semibold">
<iconify-icon className="w-4 h-4 text-blue-400" icon="lucide:network" style={{strokeWidth: '1.5'}}></iconify-icon> Sales SDR Swarm
                                        </div>
<div className="flex items-center gap-3 px-2 py-1.5 rounded-md text-neutral-200 hover:text-white hover:bg-white/5 transition-colors cursor-pointer text-sm font-normal">
<iconify-icon className="w-4 h-4" icon="lucide:user-cog" style={{strokeWidth: '1.5'}}></iconify-icon> CEO Co-Pilot
                                        </div>
<div className="flex items-center gap-3 px-2 py-1.5 rounded-md text-neutral-200 hover:text-white hover:bg-white/5 transition-colors cursor-pointer text-sm font-normal">
<iconify-icon className="w-4 h-4" icon="lucide:server-cog" style={{strokeWidth: '1.5'}}></iconify-icon> IT Support Agent
                                        </div>
</div>
</div>
</div>

<div className="p-4 border-t border-white/5 mt-auto flex items-center gap-3 cursor-pointer hover:bg-white/5 transition-colors">
<div className="w-8 h-8 rounded-full bg-neutral-800 border border-white/10 flex items-center justify-center text-xs text-white font-semibold">SJ</div>
<div className="flex-1">
<div className="text-sm text-white font-semibold tracking-tight">Sarah Jenkins</div>
<div className="text-xs text-neutral-300 font-normal">sarah@looper.ai</div>
</div>
<iconify-icon className="w-4 h-4 text-neutral-300" icon="lucide:settings" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>

<div className="flex-1 bg-[#030303] relative overflow-hidden flex flex-col z-10">

<div className="absolute inset-0 pointer-events-none opacity-20" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)', backgroundSize: '24px 24px'}}></div>

<div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center z-30 pointer-events-none">
<div className="flex items-center gap-2 text-sm text-neutral-200 font-normal pointer-events-auto">
<iconify-icon className="w-4 h-4 hover:text-white cursor-pointer" icon="lucide:chevron-left" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="hover:text-white cursor-pointer transition-colors">Workforces</span>
<span className="text-neutral-400">/</span>
<span className="text-white font-semibold">Sales SDR Swarm</span>
</div>
<div className="flex gap-3 pointer-events-auto">
<button className="px-4 py-1.5 rounded-md border border-white/10 text-neutral-100 text-sm font-medium hover:bg-white/5 transition-colors flex items-center gap-2">
<iconify-icon className="w-3 h-3" icon="lucide:play" style={{strokeWidth: '1.5'}}></iconify-icon> Simulate Run
                                    </button>
<button className="px-4 py-1.5 rounded-md bg-blue-600 text-white text-sm font-semibold hover:bg-blue-500 transition-colors shadow-[0_0_15px_rgba(37,99,235,0.4)]">
                                        Activate Swarm
                                    </button>
</div>
</div>

<div className="relative w-full h-full overflow-x-auto overflow-y-hidden">
<div className="w-[1000px] h-[600px] relative">

<svg className="absolute inset-0 pointer-events-none w-full h-full z-0">

<path d="M 330 300 C 400 300, 400 200, 500 200" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="2"></path>
<path className="animate-flow" d="M 330 300 C 400 300, 400 200, 500 200" fill="none" stroke="#2563eb" stroke-dasharray="8 8" strokeWidth="2"></path>

<path d="M 330 300 C 400 300, 400 400, 500 400" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="2"></path>
<path className="animate-flow-slow" d="M 330 300 C 400 300, 400 400, 500 400" fill="none" stroke="#2563eb" stroke-dasharray="8 8" strokeWidth="2"></path>

<circle className="animate-pulse shadow-[0_0_8px_#2563eb]" cx="330" cy="300" fill="#080808" r="4" stroke="#2563eb" strokeWidth="2"></circle>
<circle cx="500" cy="200" fill="#080808" r="4" stroke="#2563eb" strokeWidth="2"></circle>
<circle cx="500" cy="400" fill="#080808" r="4" stroke="#2563eb" strokeWidth="2"></circle>
</svg>

<div className="absolute w-[280px] bg-[#0c0c0c] border border-white/10 rounded-xl p-4 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:border-blue-500/30 transition-colors z-10" style={{left: '50px', top: '240px'}}>
<div className="absolute -top-3 left-4 bg-blue-900/40 border border-blue-500/30 text-blue-300 text-xs font-semibold px-2 py-0.5 rounded uppercase tracking-wider backdrop-blur-md">
                                            Data Source
                                        </div>
<div className="flex items-center gap-3 mt-2">
<div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 text-blue-300">
<iconify-icon className="w-4 h-4" icon="lucide:database" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<div className="text-sm text-white font-semibold tracking-tight">High-Intent Lead</div>
<div className="text-xs text-neutral-300 font-normal">Signal from Apollo</div>
</div>
</div>
<div className="mt-4 p-3 bg-black/40 rounded-lg border border-white/5 text-xs text-neutral-200 font-normal flex flex-col gap-1.5">
<div className="flex justify-between"><span>Enrich:</span> <span className="text-white font-medium">Clearbit API</span></div>
<div className="w-full h-px bg-white/5"></div>
<div className="flex justify-between"><span>Filter:</span> <span className="text-white font-medium">ICP Match</span></div>
</div>
</div>

<div className="absolute w-[280px] bg-[#0c0c0c] border border-white/10 rounded-xl p-4 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:border-white/20 transition-colors z-10" style={{left: '500px', top: '120px'}}>
<div className="absolute -top-3 left-4 bg-neutral-800 border border-white/10 text-neutral-200 text-xs font-semibold px-2 py-0.5 rounded uppercase tracking-wider">
                                            Agent: SDR
                                        </div>
<div className="flex items-center gap-3 mt-2">
<div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 text-neutral-200">
<iconify-icon className="w-4 h-4" icon="lucide:message-square-dashed" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="text-sm text-white font-semibold tracking-tight">Draft Outreach</div>
</div>
<div className="mt-4 p-3 bg-black/40 rounded-lg border border-white/5 text-center">
<div className="text-xs text-neutral-300 uppercase tracking-widest font-medium mb-1">Context</div>
<div className="text-sm text-white font-normal">Analyze recent company news</div>
</div>
<div className="mt-3 flex gap-2">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded bg-blue-500/10 border border-blue-500/20 text-xs text-blue-300 font-semibold">
<div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> GPT-4o Reasoning
                                            </span>
</div>
</div>

<div className="absolute w-[280px] bg-[#0c0c0c] border border-white/10 rounded-xl p-4 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:border-white/20 transition-colors z-10" style={{left: '500px', top: '340px'}}>
<div className="absolute -top-3 left-4 bg-neutral-800 border border-white/10 text-neutral-200 text-xs font-semibold px-2 py-0.5 rounded uppercase tracking-wider">
                                            Agent: Co-Pilot
                                        </div>
<div className="flex items-center gap-3 mt-2">
<div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 text-green-400">
<iconify-icon className="w-4 h-4" icon="lucide:shield-check" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="text-sm text-white font-semibold tracking-tight">Review &amp; Approve</div>
</div>
<div className="mt-4 p-3 bg-black/40 rounded-lg border border-white/5 flex justify-between items-center text-xs">
<span className="text-neutral-300 font-normal">Rule Engine</span>
<span className="text-cyan-400 font-mono font-medium">Brand Safety</span>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 h-10 border-t border-white/5 bg-[#080808]/80 backdrop-blur-md flex items-center justify-between px-4 z-20">
<div className="flex items-center gap-4 text-xs font-normal text-neutral-200">
<div className="flex items-center gap-2">
<iconify-icon className="w-3.5 h-3.5" icon="lucide:activity" style={{strokeWidth: '1.5'}}></iconify-icon>
                                        Agent Status
                                    </div>
<div className="w-1 h-1 rounded-full bg-white/20"></div>
<div>Success rate <span className="text-blue-300 font-semibold ml-1">99.2%</span></div>
</div>
<div className="flex items-center gap-4 text-xs font-normal text-neutral-200">
<span>Last action: 2m ago</span>
<div className="flex items-center gap-1.5 text-green-400 font-medium">
<div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_#22c55e]"></div>
                                        Swarm Active
                                    </div>
</div>
</div>
</div>

<div className="w-80 border-l border-white/5 bg-[#080808] flex flex-col shrink-0 relative z-20 overflow-y-auto">
<div className="p-6 border-b border-white/5">
<h2 className="text-base text-white font-semibold tracking-tight mb-1">AI SDR Agent</h2>
<p className="text-xs text-neutral-300 font-normal flex items-center gap-1.5">
                                    Role <span className="w-1 h-1 rounded-full bg-neutral-600"></span> Outbound Sales
                                </p>
</div>
<div className="p-5 flex-1 space-y-6">

<div className="bg-[#0c0c0c] border border-white/5 rounded-xl overflow-hidden shadow-sm">
<div className="p-4 border-b border-white/5">
<div className="text-xs text-neutral-300 uppercase tracking-widest font-semibold mb-2">Agent Mandate</div>
<p className="text-xs text-white font-normal leading-relaxed">
                                            Instruct the agent in plain text. It will adapt its approach based on your guidelines.
                                        </p>
</div>
<div className="p-4 bg-black/30 relative">
<p className="text-xs text-neutral-200 font-mono leading-relaxed opacity-90 mb-6">
                                            e.g. Focus on VP level targets. Use a casual tone. Reference their recent funding round if applicable.<span className="inline-block w-1.5 h-3.5 bg-neutral-400 ml-1 align-middle animate-pulse"></span>
</p>
<div className="flex justify-end">
<button className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold px-4 py-1.5 rounded-md transition-colors shadow-[0_0_10px_rgba(37,99,235,0.2)]">
                                                Update
                                            </button>
</div>
</div>
</div>

<div>
<div className="flex items-center justify-between mb-3">
<div className="text-xs text-neutral-300 uppercase tracking-widest font-semibold">Knowledge Base</div>
<span className="text-xs text-green-400 bg-green-500/10 border border-green-500/20 px-2 py-0.5 rounded-full font-semibold">Synced</span>
</div>
<div className="space-y-2">
<div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5 text-sm font-normal text-neutral-100 hover:border-white/10 transition-colors cursor-pointer">
<iconify-icon className="text-neutral-300" icon="lucide:file-text" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="truncate">Company_Pitch_Deck.pdf</span>
</div>
<div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5 text-sm font-normal text-neutral-100 hover:border-white/10 transition-colors cursor-pointer">
<iconify-icon className="text-neutral-300" icon="lucide:link" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="truncate">looper.ai/case-studies</span>
</div>
</div>
</div>
</div>

<div className="p-5 border-t border-white/5 bg-[#0a0a0a]">
<div className="flex justify-between items-center mb-4">
<span className="text-xs text-neutral-300 font-normal">Swarm Health</span>
<span className="text-xs text-green-400 font-semibold">Optimal</span>
</div>
<div className="grid grid-cols-2 gap-3">
<div className="bg-[#111] border border-white/5 rounded-lg p-3 text-center">
<div className="text-xs text-neutral-400 font-normal mb-1">Active Agents</div>
<div className="text-lg text-white font-semibold">3</div>
</div>
<div className="bg-[#111] border border-white/5 rounded-lg p-3 text-center">
<div className="text-xs text-neutral-400 font-normal mb-1">Tasks Executed</div>
<div className="text-lg text-white font-semibold">1,402</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="py-12 border-y border-white/5 bg-black/40 overflow-hidden relative">
<div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none"></div>
<div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none"></div>
<div className="flex flex-wrap justify-center gap-16 md:gap-24 items-center px-10 opacity-70 grayscale hover:grayscale-0 transition-all duration-700 max-w-7xl mx-auto [animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll">
<span className="text-xl font-semibold tracking-tight font-sans text-neutral-200">ACME CORP</span>
<span className="text-xl font-medium tracking-tight font-serif text-neutral-200">Globex</span>
<span className="text-xl font-normal tracking-tight font-mono text-neutral-200">Soylent</span>
<span className="text-xl font-semibold tracking-tight italic text-neutral-200">Umbrella</span>
<span className="text-xl font-medium tracking-tight text-neutral-200">Initech</span>
<span className="text-xl font-semibold tracking-tight font-sans text-neutral-200 hidden sm:block">Massive Dynamic</span>
</div>
</section>

<section className="py-32 px-6 relative" id="features">
<div className="max-w-6xl mx-auto">
<div className="mb-20 md:text-center max-w-3xl mx-auto [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6 text-white" style={{fontFamily: '\'Plus Jakarta Sans\', sans-serif'}}>
                    The engine room for <br/> <span className="text-neutral-300">modern revenue teams.</span>
</h2>
<p className="text-neutral-200 text-sm md:text-lg font-normal">Forget templates. Our AI analyzes your prospect's recent news, LinkedIn posts, and company reports to craft messages that actually get read.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 group relative rounded-3xl p-8 bg-black/40 border border-white/5 hover:border-blue-500/20 transition-all duration-500 overflow-hidden min-h-[400px] [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll">
<div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="">
<div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center mb-6 text-white group-hover:bg-blue-900/50 group-hover:text-blue-400 transition-colors">
<iconify-icon className="text-xl" icon="lucide:search" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-2xl font-medium tracking-tight text-white mb-3" style={{fontFamily: '\'Plus Jakarta Sans\', sans-serif'}}>Deep Search Prospecting</h3>
<p className="text-neutral-200 font-normal text-sm max-w-md">Filter 500M+ profiles by technology stack, funding rounds, and hiring intent. The AI builds your list automatically.</p>
</div>

<div className="mt-10 relative">
<div className="flex gap-3 overflow-hidden" style={{maskImage: 'linear-gradient(to right, black 60%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to right, black 60%, transparent 100%)'}}>
<div className="bg-neutral-800/80 rounded-lg p-4 w-64 border border-white/5 backdrop-blur-sm">
<div className="flex items-center gap-3 mb-3">
<div className="w-8 h-8 rounded-full bg-blue-500/20"></div>
<div>
<div className="h-2 w-20 bg-white/20 rounded mb-1"></div>
<div className="h-2 w-12 bg-white/10 rounded"></div>
</div>
</div>
<div className="space-y-2">
<div className="text-xs font-normal text-neutral-300 flex justify-between">
<span>Match Score</span>
<span className="text-blue-400 font-medium">98%</span>
</div>
<div className="h-1 w-full bg-neutral-700 rounded-full overflow-hidden">
<div className="h-full w-[98%] bg-blue-400 shadow-[0_0_10px_#3b82f6]"></div>
</div>
</div>
</div>
<div className="bg-neutral-800/80 rounded-lg p-4 w-64 border border-white/5 backdrop-blur-sm opacity-60">
<div className="flex items-center gap-3 mb-3">
<div className="w-8 h-8 rounded-full bg-cyan-500/20"></div>
<div>
<div className="h-2 w-20 bg-white/20 rounded mb-1"></div>
<div className="h-2 w-12 bg-white/10 rounded"></div>
</div>
</div>
<div className="space-y-2">
<div className="text-xs font-normal text-neutral-300 flex justify-between">
<span>Match Score</span>
<span className="text-cyan-400 font-medium">94%</span>
</div>
<div className="h-1 w-full bg-neutral-700 rounded-full overflow-hidden">
<div className="h-full w-[94%] bg-cyan-400 shadow-[0_0_10px_#22d3ee]"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="md:col-span-1 group relative rounded-3xl p-8 bg-black/40 border border-white/5 hover:border-blue-500/20 transition-all duration-500 overflow-hidden [animation:animationIn_0.8s_ease-out_0.3s_both] animate-on-scroll">
<div className="absolute inset-0 bg-gradient-to-bl from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<div className="relative z-10 h-full flex flex-col">
<div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center mb-6 text-white group-hover:bg-blue-900/50 group-hover:text-blue-400 transition-colors">
<iconify-icon className="text-xl" icon="lucide:pen-tool" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-2xl font-medium tracking-tight text-white mb-3" style={{fontFamily: '\'Plus Jakarta Sans\', sans-serif'}}>Human-Level Copy</h3>
<p className="text-neutral-200 font-normal text-sm mb-8">Context-aware generation that references specific details about the prospect.</p>
<div className="flex-1 bg-black/40 rounded-xl p-4 font-mono text-xs text-neutral-100 font-medium border border-white/5 shadow-inner relative overflow-hidden">
<div className="absolute top-0 left-0 w-1 h-full bg-blue-500 shadow-[0_0_10px_#3b82f6]"></div>
<p className="leading-relaxed opacity-90">
                                "Hey Sarah,<br/><br/>
                                Saw PitchwithAI just raised Series A—congrats!<br/><br/>
                                Given you're scaling the sales team..."
                            </p>
<div className="mt-2 inline-block w-1.5 h-3.5 bg-blue-500 animate-pulse shadow-[0_0_8px_#3b82f6]"></div>
</div>
</div>
</div>

<div className="md:col-span-1 group relative rounded-3xl p-8 bg-black/40 border border-white/5 hover:border-blue-500/20 transition-all duration-500 [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll">
<div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center mb-6 text-white group-hover:bg-blue-900/50 group-hover:text-blue-400 transition-colors">
<iconify-icon className="text-xl" icon="lucide:share-2" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-2xl font-medium tracking-tight text-white mb-3" style={{fontFamily: '\'Plus Jakarta Sans\', sans-serif'}}>Omnichannel</h3>
<p className="text-neutral-200 font-normal text-sm mb-6">Seamlessly weave between Email, LinkedIn, and Phone steps.</p>
<div className="flex justify-around items-center mt-8">
<div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-neutral-800 relative z-10">
<iconify-icon className="text-xl text-neutral-300" icon="lucide:mail" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="h-[1px] w-8 bg-neutral-700"></div>
<div className="w-12 h-12 rounded-full border border-blue-500/50 flex items-center justify-center bg-blue-900/20 relative z-10 shadow-[0_0_20px_rgba(59,130,246,0.4)]">
<iconify-icon className="text-xl text-blue-400" icon="lucide:users" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="h-[1px] w-8 bg-neutral-700"></div>
<div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-neutral-800 relative z-10">
<iconify-icon className="text-xl text-neutral-300" icon="lucide:phone" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
</div>
</div>

<div className="md:col-span-2 group relative rounded-3xl p-8 bg-black/40 border border-white/5 hover:border-blue-500/20 transition-all duration-500 overflow-hidden [animation:animationIn_0.8s_ease-out_0.3s_both] animate-on-scroll">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center h-full">
<div className="relative z-10">
<div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center mb-6 text-white group-hover:bg-blue-900/50 group-hover:text-blue-400 transition-colors">
<iconify-icon className="text-xl" icon="lucide:bar-chart-2" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-2xl font-medium tracking-tight text-white mb-3" style={{fontFamily: '\'Plus Jakarta Sans\', sans-serif'}}>Predictive Analytics</h3>
<p className="text-neutral-200 font-normal text-sm">Know which campaigns will succeed before you launch them. Optimization based on millions of data points.</p>
</div>
<div className="relative h-40 md:h-full w-full flex items-center justify-center">

<div className="flex items-end gap-2 h-32 w-full px-4">
<div className="w-full bg-neutral-800 rounded-t-sm h-[30%] group-hover:h-[40%] transition-all duration-700"></div>
<div className="w-full bg-neutral-800 rounded-t-sm h-[50%] group-hover:h-[65%] transition-all duration-700"></div>
<div className="w-full bg-neutral-800 rounded-t-sm h-[40%] group-hover:h-[45%] transition-all duration-700"></div>
<div className="w-full bg-neutral-800 rounded-t-sm h-[70%] group-hover:h-[80%] transition-all duration-700"></div>
<div className="w-full bg-blue-500 rounded-t-sm h-[55%] group-hover:h-[90%] transition-all duration-700 shadow-[0_0_20px_rgba(59,130,246,0.5)]"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative overflow-hidden" id="pricing">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent to-neutral-800"></div>
<div className="max-w-7xl mx-auto">
<div className="text-center mb-20 [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll">
<h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-6 text-white" style={{fontFamily: '\'Plus Jakarta Sans\', sans-serif'}}>
                    ROI in <span className="text-blue-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">Days</span>, Not Months.
                </h2>
<p className="text-neutral-200 text-sm md:text-lg font-normal max-w-2xl mx-auto mb-10">
                    Cheaper than an SDR. Smarter than a template. Costs less than a lost deal.
                </p>

<div className="inline-flex bg-neutral-900 p-1 rounded-full border border-white/10 relative">
<div className="w-1/2 h-full absolute left-0 bg-neutral-800 rounded-full transition-all duration-300" id="toggle-bg"></div>
<button className="relative z-10 px-6 py-2 text-sm font-medium text-white rounded-full" onclick="switchPricing('monthly')">Monthly</button>
<button className="relative z-10 px-6 py-2 text-sm font-medium text-neutral-300 hover:text-white rounded-full" onclick="switchPricing('yearly')">Yearly <span className="text-xs text-blue-400 ml-1 font-semibold">-20%</span></button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">

<div className="bg-white/[0.01] bg-black/40 backdrop-blur-[12px] border border-white/[0.08] rounded-3xl p-8 flex flex-col hover:border-white/15 transition-colors [animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll">
<div className="mb-6">
<h3 className="text-lg font-medium tracking-tight text-white mb-2" style={{fontFamily: '\'Plus Jakarta Sans\', sans-serif'}}>Solo Pilot</h3>
<div className="flex items-baseline gap-1">
<span className="text-4xl font-medium text-white tracking-tight" style={{fontFamily: '\'Plus Jakarta Sans\', sans-serif'}}>$49</span>
<span className="text-neutral-400 font-normal">/mo</span>
</div>
<p className="text-neutral-200 text-sm font-normal mt-4">Perfect for founders doing their own sales.</p>
</div>
<div className="h-px w-full bg-white/5 mb-6"></div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-white font-normal">
<iconify-icon className="text-lg text-neutral-400" icon="lucide:check-circle-2" style={{strokeWidth: '1.5'}}></iconify-icon> 500 AI Credits
                        </li>
<li className="flex items-center gap-3 text-sm text-white font-normal">
<iconify-icon className="text-lg text-neutral-400" icon="lucide:check-circle-2" style={{strokeWidth: '1.5'}}></iconify-icon> Email Automation
                        </li>
<li className="flex items-center gap-3 text-sm text-white font-normal">
<iconify-icon className="text-lg text-neutral-400" icon="lucide:check-circle-2" style={{strokeWidth: '1.5'}}></iconify-icon> Basic Analytics
                        </li>
</ul>
<button className="w-full py-3 rounded-xl bg-neutral-800 text-white font-medium text-sm hover:bg-neutral-700 transition-colors border border-white/5">
                        Start Free Trial
                    </button>
</div>

<div className="bg-gradient-to-b from-blue-950/30 to-black/40 backdrop-blur-[12px] border border-blue-500/20 rounded-3xl p-8 relative md:-mt-8 shadow-[0_0_30px_-10px_rgba(37,99,235,0.2)] [animation:animationIn_0.8s_ease-out_0.4s_both] animate-on-scroll">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.5)] text-white text-xs font-semibold px-4 py-1 rounded-full tracking-wide uppercase">
                        Most Popular
                    </div>
<div className="mb-6">
<h3 className="text-lg font-medium tracking-tight text-white mb-2" style={{fontFamily: '\'Plus Jakarta Sans\', sans-serif'}}>Growth Engine</h3>
<div className="flex items-baseline gap-1">
<span className="text-4xl font-medium text-white tracking-tight" style={{fontFamily: '\'Plus Jakarta Sans\', sans-serif'}}>$149</span>
<span className="text-neutral-400 font-normal">/mo</span>
</div>
<p className="text-neutral-200 text-sm font-normal mt-4">Full power for closing teams.</p>
</div>
<div className="h-px w-full bg-white/10 mb-6"></div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-white font-normal">
<iconify-icon className="text-lg text-blue-400 drop-shadow-[0_0_5px_rgba(59,130,246,0.8)]" icon="lucide:check-circle-2" style={{strokeWidth: '1.5'}}></iconify-icon> Unlimited AI Credits
                        </li>
<li className="flex items-center gap-3 text-sm text-white font-normal">
<iconify-icon className="text-lg text-blue-400 drop-shadow-[0_0_5px_rgba(59,130,246,0.8)]" icon="lucide:check-circle-2" style={{strokeWidth: '1.5'}}></iconify-icon> Multi-channel (Email + LI)
                        </li>
<li className="flex items-center gap-3 text-sm text-white font-normal">
<iconify-icon className="text-lg text-blue-400 drop-shadow-[0_0_5px_rgba(59,130,246,0.8)]" icon="lucide:check-circle-2" style={{strokeWidth: '1.5'}}></iconify-icon> Intent Data Signals
                        </li>
</ul>
<button className="w-full py-3 rounded-xl bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                        Get Growth
                    </button>
</div>

<div className="bg-white/[0.01] bg-black/40 backdrop-blur-[12px] border border-white/[0.08] rounded-3xl p-8 flex flex-col hover:border-white/15 transition-colors [animation:animationIn_0.8s_ease-out_0.6s_both] animate-on-scroll">
<div className="mb-6">
<h3 className="text-lg font-medium tracking-tight text-white mb-2" style={{fontFamily: '\'Plus Jakarta Sans\', sans-serif'}}>Scale</h3>
<div className="flex items-baseline gap-1">
<span className="text-4xl font-medium text-white tracking-tight" style={{fontFamily: '\'Plus Jakarta Sans\', sans-serif'}}>Custom</span>
</div>
<p className="text-neutral-200 text-sm font-normal mt-4">For large organizations requiring API access.</p>
</div>
<div className="h-px w-full bg-white/5 mb-6"></div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-white font-normal">
<iconify-icon className="text-lg text-neutral-400" icon="lucide:check-circle-2" style={{strokeWidth: '1.5'}}></iconify-icon> API Access
                        </li>
<li className="flex items-center gap-3 text-sm text-white font-normal">
<iconify-icon className="text-lg text-neutral-400" icon="lucide:check-circle-2" style={{strokeWidth: '1.5'}}></iconify-icon> White-glove Onboarding
                        </li>
<li className="flex items-center gap-3 text-sm text-white font-normal">
<iconify-icon className="text-lg text-neutral-400" icon="lucide:check-circle-2" style={{strokeWidth: '1.5'}}></iconify-icon> Dedicated Success Manager
                        </li>
</ul>
<button className="w-full py-3 rounded-xl bg-neutral-800 text-white font-medium text-sm hover:bg-neutral-700 transition-colors border border-white/5">
                        Contact Sales
                    </button>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 border-t border-white/5 [animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll">
<div className="max-w-4xl mx-auto text-center relative">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none"></div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-8 text-white relative z-10" style={{fontFamily: '\'Plus Jakarta Sans\', sans-serif'}}>
                Ready to fill your calendar?
            </h2>
<div className="flex flex-col items-center gap-6 relative z-10">
<button className="px-10 py-4 bg-white text-black rounded-full font-semibold text-sm transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                    Start Your 14-Day Free Trial
                </button>
<p className="text-xs text-neutral-300 uppercase tracking-widest font-normal">No Credit Card Required</p>
</div>
</div>
</section>

<footer className="py-12 px-6 border-t border-white/5 bg-[#030303] text-neutral-300 text-sm [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-blue-700/40 to-transparent overflow-hidden">
<div className="absolute left-1/2 -translate-x-1/2 w-[2px] h-12 bg-gradient-to-b from-transparent to-blue-600 drop-animation" style={{animationDelay: '1.25s'}}></div>
</div>

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-[2px] bg-gradient-to-r from-transparent via-blue-600 to-transparent shadow-[0_0_8px_rgba(37,99,235,0.4)] z-20"></div>
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-neutral-800 rounded flex items-center justify-center">
<span className="text-xs text-white pb-0.5" style={{fontFamily: '\'Agbalumo\', system-ui'}}>P</span>
</div>
<span className="font-medium text-white">PitchwithAI</span>
</div>
<div className="flex gap-8 font-normal text-sm">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
</div>
<div className="font-normal text-sm">
                © 2024 PitchwithAI Inc.
            </div>
</div>
</footer>


    </>
  );
}
