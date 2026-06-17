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
darkMode: 'class',
theme: {
extend: {
fontFamily: { inter: ['Inter', 'sans-serif'] },
colors: {
brand: { 500: '#f97316', 600: '#ea580c' }
},
animation: {
blob: 'blob 10s infinite',
dash: 'dash 3s linear infinite',
enter: 'enter 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
'float-slow': 'float-slow 6s ease-in-out infinite',
'pulse-soft': 'pulse-soft 2s ease-in-out infinite',
'tool-ping': 'tool-ping 1.2s ease-out infinite',
'upload-pulse': 'upload-pulse 1.4s ease-out infinite'
},
keyframes: {
blob: {
'0%': { transform: 'translate(0px, 0px) scale(1)' },
'33%': { transform: 'translate(30px, -50px) scale(1.1)' },
'66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
'100%': { transform: 'translate(0px, 0px) scale(1)' }
},
dash: {
'0%': { strokeDashoffset: '40' },
'100%': { strokeDashoffset: '0' }
},
enter: {
'0%': { opacity: '0', transform: 'translateY(10px)' },
'100%': { opacity: '1', transform: 'translateY(0)' }
},
'float-slow': {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-8px)' }
},
'pulse-soft': {
'0%, 100%': { opacity: 0.6, transform: 'scale(1)' },
'50%': { opacity: 1, transform: 'scale(1.03)' }
},
'tool-ping': {
'0%': { transform: 'scale(1)', opacity: 0.9 },
'70%': { transform: 'scale(1.15)', opacity: 0 },
'100%': { transform: 'scale(1.15)', opacity: 0 }
},
'upload-pulse': {
'0%': { boxShadow: '0 0 0 0 rgba(249,115,22,0.35)' },
'70%': { boxShadow: '0 0 0 0.75rem rgba(249,115,22,0)' },
'100%': { boxShadow: '0 0 0 0 rgba(249,115,22,0)' }
}
}
}
}
}



          !(function () {
            if (!window.UnicornStudio) {
              window.UnicornStudio = { isInitialized: !1 }
              var i = document.createElement('script')
              ;(i.src =
                'https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js'),
                (i.onload = function () {
                  window.UnicornStudio.isInitialized ||
                    (UnicornStudio.init(),
                    (window.UnicornStudio.isInitialized = !0))
                }),
                (document.head || document.body).appendChild(i)
            }
          })()
        
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="60" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 90%, transparent)'}}>
<div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="ZHhDKfVqqu8PKOSMwfuA"></div>

</div>
</div>
<div className="cursor-dot" id="cursor-dot"></div>
<div className="cursor-ring" id="cursor-ring"></div>

<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
<div className="absolute inset-0 bg-grid-pattern opacity-50"></div>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40"></div>
<div className="absolute top-[-10%] left-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-purple-600/30 rounded-full mix-blend-screen filter blur-[60px] md:blur-[100px] animate-blob opacity-60 will-change-transform"></div>
<div className="absolute top-[20%] right-[-10%] w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-orange-500/30 rounded-full mix-blend-screen filter blur-[60px] md:blur-[100px] animate-blob animation-delay-2000 opacity-60 will-change-transform"></div>
</div>

<div className="relative z-10 w-full min-h-screen md:h-full flex flex-col md:p-5">

<div className="relative flex-1 w-full md:bg-[#111]/60 md:backdrop-blur-sm md:rounded-[32px] md:border md:border-white/10 md:overflow-y-auto md:overflow-x-hidden custom-scrollbar md:shadow-2xl" id="main-frame">

<header className="sticky top-0 w-full z-50 border-b border-white/5 bg-[#0a0a0a]/80 md:bg-transparent backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
<div className="flex items-center gap-2.5 group cursor-pointer interactable select-none">
<div className="relative w-8 h-8 flex items-center justify-center bg-gradient-to-br from-orange-500 to-red-600 rounded-lg shadow-lg shadow-orange-500/20 transition-transform duration-300 group-hover:scale-105">
<svg fill="none" height="18" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="18">
<path d="M12 2v20M2 12h20"></path>
</svg>
</div>
<span className="font-semibold text-lg tracking-tight text-white">Qolaba</span>
</div>
<nav className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
<a className="hover:text-white transition-colors interactable" href="#automation">Automation</a>
<a className="hover:text-white transition-colors interactable" href="#agents">Agents</a>
<a className="hover:text-white transition-colors interactable" href="#mediums">Creation</a>
<a className="hover:text-white transition-colors interactable" href="#uploads">Uploads</a>
<a className="hover:text-white transition-colors interactable" href="#workspace">Workspace</a>
<a className="hover:text-white transition-colors interactable" href="#pricing">Pricing</a>
</nav>
<div className="hidden md:flex items-center gap-4">
<a className="text-sm font-medium text-gray-400 hover:text-white transition-colors interactable" href="#">Log In</a>
<button className="text-sm font-semibold bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition-all shadow-[0_0_15px_rgba(255,255,255,0.1)] interactable hover:scale-105 active:scale-95">
                Start Building
              </button>
</div>
<div className="md:hidden flex items-center">
<button aria-label="Open Menu" className="text-gray-300 hover:text-white p-2 -mr-2 interactable mobile-touch-target flex items-center justify-center" id="mobile-toggle">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</div>
</header>

<main className="relative pb-20 pt-8 md:pt-20">

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 md:mb-32 overflow-hidden">
<div className="text-center mb-16 mt-4 md:mt-10">
<h1 className="text-4xl sm:text-5xl md:text-7xl font-semibold tracking-tight mb-6 relative inline-block interactable animate-enter opacity-0 leading-[1.15]">
<span className="absolute -inset-10 blur-3xl bg-gradient-to-r from-orange-600/20 via-purple-600/10 to-red-600/20 opacity-60 rounded-full pointer-events-none"></span>
<span className="relative text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-400">
                  Qolaba AI Studio
                </span>
</h1>
<p className="text-base md:text-lg text-gray-400 mb-10 max-w-2xl mx-auto animate-enter opacity-0 leading-relaxed px-4" style={{animationDelay: '100ms'}}>
                The operating system for unified intelligence. Orchestrate LLMs,
                generate assets, and deploy autonomous agents in a single
                workspace.
              </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-enter opacity-0 px-4" style={{animationDelay: '200ms'}}>
<button className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white text-black text-sm font-semibold hover:bg-gray-200 transition-all interactable shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:scale-105 active:scale-95 flex items-center justify-center gap-2">
                  Start for Free
                  <span className="inline-flex items-center justify-center rounded-full bg-black text-white/80 w-5 h-5 animate-pulse-soft">
<i className="w-3.5 h-3.5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</span>
</button>
<button className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-white hover:bg-white/10 transition-all interactable hover:scale-105 active:scale-95 backdrop-blur-md flex items-center gap-2">
<i className="w-4 h-4 text-gray-300" data-lucide="file-code" strokeWidth="1.5"></i>
                  View Documentation
                </button>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-24 md:mb-32 reveal-text px-1 md:px-0">
<div className="glass-card p-8 rounded-2xl md:rounded-[32px] flex flex-col items-center justify-center min-h-[160px] md:min-h-[220px] group interactable text-center relative overflow-hidden">
<div className="border-shine"></div>
<div className="text-5xl md:text-6xl font-medium tracking-tight text-white mb-2 shadow-orange-500/50 drop-shadow-lg group-hover:scale-105 transition-transform duration-300">
<span className="counter" data-target="70">0</span>%
                </div>
<div className="text-xs font-bold text-gray-500 uppercase tracking-[0.2em]">
                  Faster Execution
                </div>
</div>
<div className="glass-card p-8 rounded-2xl md:rounded-[32px] flex flex-col items-center justify-center min-h-[160px] md:minh-[220px] group interactable text-center relative overflow-hidden">
<div className="border-shine"></div>
<div className="text-5xl md:text-6xl font-medium tracking-tight text-white mb-2 shadow-purple-500/50 drop-shadow-lg group-hover:scale-105 transition-transform duration-300">
<span className="counter" data-target="60">0</span>+
                </div>
<div className="text-xs font-bold text-gray-500 uppercase tracking-[0.2em]">
                  Models Integrated
                </div>
</div>
<div className="glass-card p-8 rounded-2xl md:rounded-[32px] flex flex-col items-center justify-center min-h-[160px] md:minh-[220px] group interactable text-center relative overflow-hidden">
<div className="border-shine"></div>
<div className="text-5xl md:text-6xl font-medium tracking-tight text-white mb-2 shadow-blue-500/50 drop-shadow-lg group-hover:scale-105 transition-transform duration-300">
<span className="counter" data-target="300">0</span>%
                </div>
<div className="text-xs font-bold text-gray-500 uppercase tracking-[0.2em]">
                  ROI Efficiency
                </div>
</div>
</div>

<div className="space-y-6 md:space-y-8 px-1 md:px-0" id="features">
<div className="glass-card rounded-2xl md:rounded-3xl overflow-hidden group interactable reveal-text relative">
<div className="border-shine"></div>
<div className="grid lg:grid-cols-2">
<div className="p-8 md:p-16 flex flex-col justify-center relative order-2 lg:order-1">
<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<h3 className="text-2xl md:text-3xl font-medium text-white mb-4 tracking-tight leading-tight relative z-10">
                      World-Class Models. One API.
                    </h3>
<p className="text-sm md:text-base text-gray-400 leading-relaxed relative z-10">
                      Access GPT-4.5, Claude 3.5, Gemini, and LLaMA seamlessly.
                      Switch models mid-execution based on complexity and cost.
                    </p>
</div>
<div className="bg-black/30 border-b lg:border-b-0 lg:border-l border-white/5 h-[300px] md:h-[400px] p-6 md:p-10 relative flex items-center justify-center overflow-hidden order-1 lg:order-2">
<div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
<div className="w-full max-w-[320px] bg-[#111] rounded-xl border border-white/10 p-4 shadow-2xl transform transition-transform duration-500 lg:group-hover:scale-105 lg:group-hover:-rotate-1 z-10">
<div className="flex items-center justify-between mb-4 border-b border-white/5 pb-3">
<div className="text-xs font-medium text-gray-400">
                          Model Selection
                        </div>
<div className="w-2 h-2 bg-green-500 rounded-full animate-pulse-soft"></div>
</div>
<div className="space-y-2">
<button className="p-3 rounded-lg bg-white/5 border border-blue-500/30 flex items-center justify-between w-full text-left hover:bg-blue-500/10 transition-colors">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-blue-500/20 flex items-center justify-center">
<i className="w-4 h-4 text-blue-400" data-lucide="zap" strokeWidth="1.5"></i>
</div>
<div>
<div className="text-xs font-semibold text-white flex items-center gap-1">
                                GPT-4 Turbo
                                <span className="inline-flex rounded-full bg-blue-500/10 text-blue-300 text-[10px] px-1.5 py-0.5">Live</span>
</div>
<div className="text-[10px] text-gray-500">
                                OpenAI • Low Latency
                              </div>
</div>
</div>
<i className="w-4 h-4 text-blue-500" data-lucide="check" strokeWidth="1.5"></i>
</button>
<button className="p-3 rounded-lg border border-white/5 hover:border-purple-500/40 hover:bg-purple-500/5 transition-colors flex items-center justify-between w-full text-left">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-purple-500/20 flex items-center justify-center">
<i className="w-4 h-4 text-purple-400" data-lucide="sparkles" strokeWidth="1.5"></i>
</div>
<div>
<div className="text-xs font-semibold text-gray-300">
                                Claude 3.5 Sonnet
                              </div>
<div className="text-[10px] text-gray-500">
                                Anthropic • Long Context
                              </div>
</div>
</div>
<span className="inline-flex items-center justify-center rounded-full bg-purple-500/15 px-1.5 py-0.5">
<i className="w-3 h-3 text-purple-300" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</span>
</button>
</div>
</div>
</div>
</div>
</div>

<div className="glass-card rounded-2xl md:rounded-3xl overflow-hidden group interactable reveal-text relative">
<div className="border-shine"></div>
<div className="grid lg:grid-cols-2">
<div className="bg-black/30 border-b lg:border-b-0 lg:border-r border-white/5 h-[300px] md:h-[400px] p-6 md:p-10 relative flex items-center justify-center overflow-hidden order-1">
<div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent opacity-40"></div>
<div className="w-full max-w-[320px] bg-[#111] rounded-xl border border-white/10 p-5 shadow-2xl transform transition-transform duration-500 lg:group-hover:translate-x-2 z-10">
<div className="flex items-center gap-2 mb-4 text-xs font-bold text-purple-400 uppercase tracking-widest">
<i className="w-4 h-4" data-lucide="bot" strokeWidth="1.5"></i>
                        New Agent
                      </div>
<div className="space-y-4">
<div>
<label className="block text-[10px] text-gray-500 mb-1.5 uppercase">Identity</label>
<div className="px-3 py-2 bg-black/50 border border-white/10 rounded text-sm text-white">
                            Marketing Specialist
                          </div>
</div>
<div>
<label className="block text-[10px] text-gray-500 mb-1.5 uppercase">Goal</label>
<div className="px-3 py-2 bg-black/50 border border-white/10 rounded text-sm text-gray-400">
                            Generate high-converting ad copy...
                          </div>
</div>
<div className="flex items-center justify-between pt-1">
<div className="flex items-center gap-2">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse-soft"></span>
<span className="text-[10px] text-gray-400">Ready to deploy</span>
</div>
<button className="text-[10px] px-2 py-1 rounded-full bg-purple-600/80 text-white hover:bg-purple-500 transition-colors">
                            Preview
                          </button>
</div>
</div>
</div>
</div>
<div className="p-8 md:p-16 flex flex-col justify-center relative order-2">
<div className="absolute inset-0 bg-gradient-to-bl from-purple-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<h3 className="text-2xl md:text-3xl font-medium text-white mb-4 tracking-tight leading-tight relative z-10">
                      Autonomous Agents, No Code Required.
                    </h3>
<p className="text-sm md:text-base text-gray-400 leading-relaxed relative z-10">
                      Train custom agents on your data. Define personality,
                      memory, and tools. Deploy them to Slack, Discord, or your
                      own app in minutes.
                    </p>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 md:mb-28 reveal-text" id="mediums">
<div className="glass-card rounded-3xl border border-white/10 bg-black/70 px-4 sm:px-8 py-8 sm:py-10 md:py-12 flex flex-col lg:flex-row gap-8 lg:gap-10 group relative overflow-hidden">
<div className="border-shine"></div>

<div className="flex-1 space-y-3 sm:space-y-4 relative z-10">
<h2 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-white">
                  Create With AI Across All Mediums
                </h2>
<p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  Create with top-tier tools — GPT, Flux Pro, Recraft V3,
                  Ideogram and SD3 for images; ElevenLabs for voice; Runway,
                  Kling, Veo 2 and LumaLabs for video. Ideal for marketing,
                  learning, ads, and storytelling.
                </p>
<div className="mt-4 flex flex-wrap gap-2">
<span className="inline-flex items-center rounded-full bg-white/5 border border-white/10 px-3 py-1 text-[11px] text-gray-200">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400 mr-1.5 animate-pulse-soft"></span>
                    Unified creation canvas
                  </span>
<span className="inline-flex items-center rounded-full bg-orange-500/10 border border-orange-500/40 px-3 py-1 text-[11px] text-orange-200">
<i className="w-3 h-3 mr-1" data-lucide="sparkles" strokeWidth="1.5"></i>
                    Multi‑modal by default
                  </span>
</div>
</div>

<div className="w-full lg:max-w-sm border border-white/10 rounded-2xl bg-black/70 px-4 sm:px-6 py-5 sm:py-6 relative z-10 interactable">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/5">
<i className="w-4 h-4 text-gray-300" data-lucide="layout-dashboard" strokeWidth="1.5"></i>
</span>
<div className="flex flex-col">
<span className="text-[11px] font-medium text-gray-200 tracking-[0.16em]">
                        AI TOOLS
                      </span>
<span className="text-[10px] text-gray-500">
                        Hover or tap to explore
                      </span>
</div>
</div>
<span className="inline-flex items-center gap-1 text-[11px] text-gray-400">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse-soft"></span>
                    Live
                  </span>
</div>
<div className="space-y-2.5" id="tool-list">

<button className="tool-row w-full flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.02] px-3 py-2.5 text-left text-sm text-gray-200 hover:border-orange-500/60 hover:bg-orange-500/5 transition-all group/row" data-description="Conversational assistants powered by GPT with memory, tools, and guardrails." data-tool="Chatbot">
<div className="flex items-center gap-3">
<div className="relative">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-gray-200">
<i className="w-4 h-4" data-lucide="message-circle" strokeWidth="1.5"></i>
</span>
<span className="pointer-events-none absolute inset-0 rounded-full border border-orange-500/40 opacity-0 group-[.is-active]/row:opacity-60 animate-tool-ping"></span>
</div>
<span className="text-xs sm:text-sm">Chatbot</span>
</div>
<i className="w-3.5 h-3.5 text-gray-500 group-[.is-active]/row:text-orange-400 transition-colors" data-lucide="chevron-right" strokeWidth="1.5"></i>
</button>

<button className="tool-row w-full flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.02] px-3 py-2.5 text-left text-sm text-gray-200 hover:border-orange-500/60 hover:bg-orange-500/5 transition-all group/row" data-description="Turn prompts into production‑ready visuals using Flux Pro, Recraft V3, Ideogram, and SD3." data-tool="Text To Image">
<div className="flex items-center gap-3">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-gray-200">
<i className="w-4 h-4" data-lucide="image-plus" strokeWidth="1.5"></i>
</span>
<span className="text-xs sm:text-sm">Text To Image</span>
</div>
<i className="w-3.5 h-3.5 text-gray-500 group-[.is-active]/row:text-orange-400 transition-colors" data-lucide="chevron-right" strokeWidth="1.5"></i>
</button>

<button className="tool-row w-full flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.02] px-3 py-2.5 text-left text-sm text-gray-200 hover:border-orange-500/60 hover:bg-orange-500/5 transition-all group/row" data-description="Apply styles, lighting, and variations while preserving structure and brand guidelines." data-tool="Image To Image">
<div className="flex items-center gap-3">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-gray-200">
<i className="w-4 h-4" data-lucide="images" strokeWidth="1.5"></i>
</span>
<span className="text-xs sm:text-sm">Image To Image</span>
</div>
<i className="w-3.5 h-3.5 text-gray-500 group-[.is-active]/row:text-orange-400 transition-colors" data-lucide="chevron-right" strokeWidth="1.5"></i>
</button>

<button className="tool-row w-full flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.02] px-3 py-2.5 text-left text-sm text-gray-200 hover:border-orange-500/60 hover:bg-orange-500/5 transition-all group/row" data-description="Non‑destructive edits, object removals, and smart fills built on Flux and SD3." data-tool="Image Editing">
<div className="flex items-center gap-3">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-gray-200">
<i className="w-4 h-4" data-lucide="wand-2" strokeWidth="1.5"></i>
</span>
<span className="text-xs sm:text-sm">Image Editing</span>
</div>
<i className="w-3.5 h-3.5 text-gray-500 group-[.is-active]/row:text-orange-400 transition-colors" data-lucide="chevron-right" strokeWidth="1.5"></i>
</button>

<button className="tool-row w-full flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.02] px-3 py-2.5 text-left text-sm text-gray-200 hover:border-orange-500/60 hover:bg-orange-500/5 transition-all group/row" data-description="Generate scenes with Runway, Kling, Veo 2 and LumaLabs for campaigns, explainers, and storytelling." data-tool="Video Generation">
<div className="flex items-center gap-3">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-gray-200">
<i className="w-4 h-4" data-lucide="clapperboard" strokeWidth="1.5"></i>
</span>
<span className="text-xs sm:text-sm">Video Generation</span>
</div>
<i className="w-3.5 h-3.5 text-gray-500 group-[.is-active]/row:text-orange-400 transition-colors" data-lucide="chevron-right" strokeWidth="1.5"></i>
</button>

<button className="tool-row w-full flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.02] px-3 py-2.5 text-left text-sm text-gray-200 hover:border-orange-500/60 hover:bg-orange-500/5 transition-all group/row" data-description="High‑fidelity voiceovers and narration powered by ElevenLabs for any language or tone." data-tool="Speech Generator">
<div className="flex items-center gap-3">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-gray-200">
<i className="w-4 h-4" data-lucide="audio-lines" strokeWidth="1.5"></i>
</span>
<span className="text-xs sm:text-sm">Speech Generator</span>
</div>
<i className="w-3.5 h-3.5 text-gray-500 group-[.is-active]/row:text-orange-400 transition-colors" data-lucide="chevron-right" strokeWidth="1.5"></i>
</button>
</div>

<div className="mt-4 rounded-xl border border-white/10 bg-white/[0.02] px-3.5 py-3 text-[11px] text-gray-300 flex items-start gap-2 opacity-0 translate-y-1 pointer-events-none transition-all duration-300" id="tool-detail">
<span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-orange-500/20 text-orange-300 mt-0.5 shrink-0">
<i className="w-3 h-3" data-lucide="info" strokeWidth="1.5"></i>
</span>
<p className="leading-relaxed">
                    Select a tool to see how it uses Qolaba’s unified multi‑modal
                    stack.
                  </p>
</div>
</div>

<div className="pointer-events-none absolute -right-40 top-0 h-64 w-64 rounded-full bg-gradient-to-br from-orange-500/20 via-purple-500/15 to-transparent blur-3xl opacity-70"></div>
</div>
</section>

<section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 md:mb-28 reveal-text" id="uploads">
<div className="glass-card rounded-3xl border border-white/10 bg-black/70 overflow-hidden group relative">
<div className="border-shine"></div>
<div className="grid lg:grid-cols-2 gap-0">

<div className="bg-black/60 border-b lg:border-b-0 lg:border-r border-white/10 p-4 sm:p-6 md:p-8 flex items-center">
<div className="w-full max-w-xl mx-auto rounded-2xl bg-[#050505] border border-white/10 shadow-2xl overflow-hidden">

<div className="flex items-center justify-between px-4 py-2 border-b border-white/10 bg-black/80">
<div className="flex items-center gap-2">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse-soft"></span>
<span className="text-xs text-gray-300">Add to test</span>
</div>
<button className="text-gray-500 hover:text-gray-300 transition-colors">
<i className="w-3.5 h-3.5" data-lucide="x" strokeWidth="1.5"></i>
</button>
</div>

<div className="flex items-center border-b border-white/10">
<button className="upload-tab flex-1 px-4 py-2.5 text-xs font-medium text-white bg-brand-500 hover:bg-brand-600 transition-colors" data-tab="new">
                        Add New
                      </button>
<button className="upload-tab flex-1 px-4 py-2.5 text-xs font-medium text-gray-300 bg-transparent hover:bg-white/5 transition-colors" data-tab="history">
                        Choose from History
                      </button>
<div className="hidden sm:flex items-center gap-1 pr-3 text-[11px] text-gray-500 ml-auto">
<i className="w-3 h-3" data-lucide="gauge" strokeWidth="1.5"></i>
<span>Upload limit</span>
</div>
</div>

<div className="space-y-4 px-4 py-4 upload-pane" id="upload-pane-new">

<div className="relative rounded-xl border border-dashed border-white/20 bg-black/60 px-4 py-3 cursor-pointer hover:border-brand-500 hover:bg-black/80 transition-all flex gap-3 items-center upload-drop-zone">
<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-gray-200">
<i className="w-5 h-5" data-lucide="file-up" strokeWidth="1.5"></i>
</div>
<div className="flex-1">
<p className="text-xs text-gray-100 mb-0.5 flex flex-wrap gap-1">
                            Drop your Image, PDF, DOC, DOCX, TXT here, or
                            <button className="text-brand-500 hover:text-brand-600 underline decoration-dotted underline-offset-2 ml-1 upload-browse-btn" type="button">
                              browse
                            </button>
</p>
<p className="text-[10px] text-gray-500">
                            Maximum size: 20MB for images and 1000 pages (or
                            200MB) for files
                          </p>
</div>
<div className="absolute inset-0 rounded-xl pointer-events-none border border-brand-500/0 upload-zone-highlight"></div>
</div>
<p className="text-[10px] text-gray-500 leading-relaxed bg-black/40 rounded-lg px-3 py-2">
                        Please note: Credits will be used for document uploads.
                        Credit deduction varies with file size — bigger documents
                        use more credits.
                      </p>

<div className="flex items-center gap-2">
<div className="flex-1 h-px bg-white/10"></div>
<span className="text-[10px] text-gray-500 uppercase">
                          OR
                        </span>
<div className="flex-1 h-px bg-white/10"></div>
</div>

<div className="flex items-center justify-between rounded-lg bg-[#111] px-3 py-2.5 border border-white/10">
<div className="flex flex-col">
<div className="flex items-center gap-1.5 mb-0.5">
<span className="text-xs text-gray-100">
                              Deep Scraping
                            </span>
<button className="text-gray-500 hover:text-gray-300" type="button">
<i className="w-3 h-3" data-lucide="info" strokeWidth="1.5"></i>
</button>
</div>
<span className="text-[10px] text-gray-500">
                            Scrape all internal links on the page
                          </span>
</div>

<button className="deep-toggle relative inline-flex h-5 w-9 items-center rounded-full border border-white/15 bg-black/60 transition-colors" type="button">
<span className="deep-toggle-thumb inline-flex h-4 w-4 translate-x-0.5 items-center justify-center rounded-full bg-gray-400 shadow-sm transition-transform"></span>
</button>
</div>

<div className="space-y-1">
<label className="text-[10px] text-gray-500 uppercase tracking-[0.16em]">Enter Website URLs</label>
<div className="flex items-center rounded-lg bg-black/70 border border-white/15 px-3 py-2 gap-2">
<i className="w-3.5 h-3.5 text-gray-500" data-lucide="globe" strokeWidth="1.5"></i>
<input className="flex-1 bg-transparent text-xs text-gray-100 placeholder-gray-600 focus:outline-none" placeholder="https://example.com, https://blog.example.com" type="text"/>
<button className="px-2 py-1 rounded-md bg-white/5 text-[11px] text-gray-100 hover:bg-white/10 transition-colors upload-url-btn" type="button">
                            Enter
                          </button>
</div>
</div>

<div className="flex items-center justify-between pt-2 border-t border-white/10 mt-1">
<span className="text-[10px] text-gray-500">
                          2/2
                        </span>
<div className="flex gap-2">
<button className="px-3 py-1.5 rounded-lg text-[11px] text-gray-300 hover:bg-white/5 transition-colors" type="button">
                            Previous
                          </button>
<button className="px-3.5 py-1.5 rounded-lg bg-brand-500 text-[11px] font-medium text-black hover:bg-brand-600 transition-colors flex items-center gap-1.5 upload-cta-btn" type="button">
<span>Add To Knowledge Base</span>
<span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-black/20">
<i className="w-3 h-3" data-lucide="arrow-right" strokeWidth="1.5"></i>
</span>
</button>
</div>
</div>
</div>

<div className="hidden px-4 py-4 upload-pane" id="upload-pane-history">
<div className="rounded-xl border border-white/10 bg-black/60 px-3 py-3 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-white/5">
<i className="w-4 h-4 text-gray-300" data-lucide="clock-3" strokeWidth="1.5"></i>
</div>
<div className="flex flex-col">
<span className="text-xs text-gray-100">
                              Last used uploads
                            </span>
<span className="text-[10px] text-gray-500">
                              Quickly attach files and sites from previous runs.
                            </span>
</div>
</div>
<button className="text-[11px] text-gray-300 hover:text-white underline decoration-dotted underline-offset-2" type="button">
                          View history
                        </button>
</div>
</div>
</div>
</div>

<div className="p-6 sm:p-8 md:p-10 flex flex-col justify-center space-y-4 relative">
<div className="pointer-events-none absolute -right-24 -bottom-24 h-56 w-56 rounded-full bg-gradient-to-br from-brand-500/20 via-amber-500/10 to-transparent blur-3xl opacity-80"></div>
<h2 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-white">
                    Smart File Uploads &amp; Web Analysis
                  </h2>
<p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    Drag and drop PDFs, DOCs, and images, or extract content from
                    entire websites. Great for content reuse, audits, and
                    creating briefs.
                  </p>
<ul className="space-y-2 text-sm text-gray-200">
<li className="flex items-start gap-2">
<i className="w-4 h-4 text-brand-500 mt-0.5" data-lucide="file-text" strokeWidth="1.5"></i>
<span>Support for images, PDFs, DOC, DOCX, and TXT with smart
                        credit-aware uploads.</span>
</li>
<li className="flex items-start gap-2">
<i className="w-4 h-4 text-brand-500 mt-0.5" data-lucide="sitemap" strokeWidth="1.5"></i>
<span>Deep scraping automatically follows internal links to
                        capture full site context.</span>
</li>
<li className="flex items-start gap-2">
<i className="w-4 h-4 text-brand-500 mt-0.5" data-lucide="notebook-pen" strokeWidth="1.5"></i>
<span>Output is structured into a reusable knowledge base for
                        analysis, audits, and briefing workflows.</span>
</li>
</ul>

<div className="flex flex-wrap gap-3 pt-2">
<div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-3 py-1.5 text-[11px] text-gray-200">
<span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500/20">
<i className="w-3 h-3 text-emerald-400" data-lucide="gauge" strokeWidth="1.5"></i>
</span>
<span>Up to 1000 pages per file</span>
</div>
<div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-3 py-1.5 text-[11px] text-gray-200">
<span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-purple-500/20">
<i className="w-3 h-3 text-purple-300" data-lucide="sparkles" strokeWidth="1.5"></i>
</span>
<span>Optimized for audits &amp; briefs</span>
</div>
</div>

<div className="mt-4 inline-flex items-center gap-2 rounded-full bg-black/80 border border-white/10 px-3 py-1.5 text-[11px] text-gray-200 shadow-lg opacity-0 translate-y-1 upload-status-toast transition-all duration-300">
<span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
<i className="w-3 h-3" data-lucide="check" strokeWidth="1.5"></i>
</span>
<span className="upload-status-text">
                      File added to knowledge base
                    </span>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 md:mb-28 reveal-text" id="agents">
<div className="glass-card rounded-3xl border border-white/10 bg-black/60 overflow-hidden group relative">
<div className="border-shine"></div>
<div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
<div className="grid lg:grid-cols-2 gap-0 items-stretch relative z-10">

<div className="border-b lg:border-b-0 lg:border-r border-white/10 bg-black/40 p-4 sm:p-6 md:p-8 flex items-center">
<div className="w-full space-y-4">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-2">
<span className="inline-flex items-center justify-center rounded-full bg-emerald-500/10 text-emerald-300 px-2 py-0.5 text-[10px] font-medium">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1 animate-pulse-soft"></span>
                          Create Agent
                        </span>
</div>
<button className="inline-flex items-center gap-1 text-[10px] text-gray-400 hover:text-white transition-colors">
<i className="w-3.5 h-3.5" data-lucide="history" strokeWidth="1.5"></i>
                        Recent
                      </button>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
<div className="space-y-2">
<label className="block text-[10px] text-gray-500 uppercase tracking-[0.16em]">Select Base AI Model</label>
<div className="flex gap-2">
<button className="flex-1 px-3 py-2 rounded-lg border border-sky-500/60 bg-sky-500/10 text-xs text-sky-100 flex items-center justify-between shadow-[0_0_0_1px_rgba(56,189,248,0.35)] hover:border-sky-400 transition-colors">
<span className="flex items-center gap-2">
<span className="inline-flex h-5 w-5 items-center justify-center rounded-md bg-sky-500/20">
<i className="w-3 h-3 text-sky-300" data-lucide="sparkles" strokeWidth="1.5"></i>
</span>
<span className="text-[11px] font-medium">GEMINI 2.0 Flash</span>
</span>
<span className="inline-flex items-center rounded-full bg-sky-500/20 text-[9px] px-1.5 py-0.5">Recommended</span>
</button>
</div>
</div>
<div className="space-y-2">
<label className="block text-[10px] text-gray-500 uppercase tracking-[0.16em]">What would you like to call your Agent?</label>
<input className="w-full rounded-lg bg-black/50 border border-white/10 px-3 py-2 text-xs text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-brand-500 focus:border-brand-500 transition-all" placeholder="Name your Agent" type="text"/>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
<div className="space-y-2">
<label className="block text-[10px] text-gray-500 uppercase tracking-[0.16em]">Tagline (optional)</label>
<input className="w-full rounded-lg bg-black/50 border border-white/10 px-3 py-2 text-xs text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-brand-500 focus:border-brand-500 transition-all" placeholder="Add a short tagline" type="text"/>
</div>
<div className="space-y-2">
<label className="block text-[10px] text-gray-500 uppercase tracking-[0.16em]">Upload Knowledge</label>
<label className="group/drag flex items-center gap-3 rounded-lg border border-dashed border-white/15 bg-black/40 px-3 py-2 cursor-pointer hover:border-brand-500/60 hover:bg-black/60 transition-all">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-orange-500/15 text-orange-300">
<i className="w-4 h-4" data-lucide="upload-cloud" strokeWidth="1.5"></i>
</span>
<div className="flex flex-col">
<span className="text-[11px] text-gray-200 font-medium">Drop your PDF, CSV, DOCX, or TXT here</span>
<span className="text-[10px] text-gray-500">Maximum size 250 MB per file</span>
</div>
<span className="ml-auto text-[10px] text-gray-300 underline decoration-dotted underline-offset-2">Browse</span>
</label>
</div>
</div>
<div className="space-y-2">
<label className="block text-[10px] text-gray-500 uppercase tracking-[0.16em]">What’s your agent background, profession, and
                        expertise?</label>
<div className="relative rounded-lg bg-black/50 border border-white/10 overflow-hidden">
<textarea className="w-full bg-transparent px-3 py-2 text-xs text-gray-200 placeholder-gray-600 focus:outline-none resize-none" placeholder="Submit your prompt. Be creative, bold, or straightforward— we’ll manage the rest." rows="4"></textarea>
<div className="absolute bottom-1 right-2 flex items-center gap-3 text-[10px] text-gray-500">
<div className="flex items-center gap-1">
<i className="w-3 h-3" data-lucide="sparkles" strokeWidth="1.5"></i>
<span>Prompt tips</span>
</div>
<span>0 / 400</span>
</div>
</div>
</div>
<div className="flex items-center justify-between pt-1 border-t border-white/5 mt-1">
<button className="inline-flex items-center gap-1 text-[11px] text-gray-400 hover:text-gray-200 transition-colors">
<i className="w-3.5 h-3.5" data-lucide="wand-2" strokeWidth="1.5"></i>
                        Surprise me
                      </button>
<div className="flex gap-2">
<button className="px-3 py-1.5 rounded-lg text-[11px] text-gray-300 hover:bg-white/5 transition-colors">
                          Cancel
                        </button>
<button className="px-4 py-1.5 rounded-lg bg-brand-500 text-[11px] font-medium text-black hover:bg-brand-600 transition-colors flex items-center gap-1.5 shadow-[0_0_18px_rgba(249,115,22,0.35)] create-agent-btn">
<span>Create</span>
<span className="relative flex items-center justify-center">
<span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-black/20">
<i className="w-3 h-3" data-lucide="arrow-right" strokeWidth="1.5"></i>
</span>
</span>
</button>
</div>
</div>
</div>

<div className="p-6 sm:p-8 md:p-10 flex flex-col justify-center space-y-4 relative overflow-hidden">
<div className="absolute -right-24 -top-24 w-56 h-56 rounded-full bg-gradient-to-br from-brand-500/15 via-purple-500/10 to-transparent blur-3xl opacity-70 animate-float-slow"></div>
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-white">
                      Build Custom AI Agents, No Code Needed
                    </h2>
<p className="text-sm md:text-base text-gray-400 leading-relaxed">
                      Train your AI with PDFs, Docs, and URLs, while customizing
                      its behavior, tone, and memory. Perfect for support bots,
                      research assistants, and personal AI use cases.
                    </p>
<ul className="space-y-2 text-sm text-gray-300">
<li className="flex items-start gap-2">
<i className="w-4 h-4 text-emerald-400 mt-0.5" data-lucide="check-circle2" strokeWidth="1.5"></i>
<span>Point-and-click configuration in under 2 minutes.</span>
</li>
<li className="flex items-start gap-2">
<i className="w-4 h-4 text-emerald-400 mt-0.5" data-lucide="check-circle2" strokeWidth="1.5"></i>
<span>Instant previews before you ship to production.</span>
</li>
<li className="flex items-start gap-2">
<i className="w-4 h-4 text-emerald-400 mt-0.5" data-lucide="check-circle2" strokeWidth="1.5"></i>
<span>Multi-channel deployment to chat, web, and APIs.</span>
</li>
</ul>
<div className="flex flex-wrap items-center gap-3 pt-2">
<div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-3 py-1.5 text-[11px] text-gray-200">
<span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500/20">
<i className="w-3 h-3 text-emerald-400" data-lucide="zap" strokeWidth="1.5"></i>
</span>
<span>Agent shipped in 42 seconds</span>
</div>
<button className="inline-flex items-center gap-1 text-[11px] text-gray-300 hover:text-white transition-colors">
                        View agent templates
                        <i className="w-3 h-3" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</button>
</div>
</div>
</div>
</div>
</div></section>

<section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 reveal-text" id="workspace">
<div className="relative rounded-3xl border border-white/10 bg-gradient-to-r from-white/5 via-white/2 to-transparent px-6 sm:px-10 py-10 md:py-14 overflow-hidden group">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(249,115,22,0.25),_transparent_60%)] opacity-40 pointer-events-none"></div>
<div className="relative z-10 flex flex-col gap-6 items-start">
<div className="inline-flex items-center gap-2 rounded-full bg-black/60 border border-white/15 px-3 py-1 text-[11px] text-gray-200 shadow-[0_0_0_1px_rgba(255,255,255,0.05)] animate-float-slow">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse-soft"></span>
                  Unified AI workspace
                </div>
<p className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tight text-white leading-snug">
                  Managing 10+ tools? Qolaba replaces them with one smart,
                  seamless AI workspace for creation, collaboration, and
                  automation.
                </p>
<div className="mt-2 grid sm:grid-cols-3 gap-4 w-full">
<div className="flex items-center gap-2 text-sm text-gray-300 bg-black/40 border border-white/10 rounded-2xl px-3 py-2 group-hover:bg-black/60 transition-colors">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-xl bg-brand-500/15 text-brand-500">
<i className="w-4 h-4" data-lucide="workflow" strokeWidth="1.5"></i>
</span>
<span className="text-xs sm:text-sm">Visual workflows</span>
</div>
<div className="flex items-center gap-2 text-sm text-gray-300 bg-black/40 border border-white/10 rounded-2xl px-3 py-2">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-xl bg-purple-500/15 text-purple-400">
<i className="w-4 h-4" data-lucide="users" strokeWidth="1.5"></i>
</span>
<span className="text-xs sm:text-sm">Shared agent hub</span>
</div>
<div className="flex items-center gap-2 text-sm text-gray-300 bg-black/40 border border-white/10 rounded-2xl px-3 py-2">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-400">
<i className="w-4 h-4" data-lucide="shield-check" strokeWidth="1.5"></i>
</span>
<span className="text-xs sm:text-sm">Enterprise controls</span>
</div></div></div></div></section></main></div></div>
    </>
  );
}
