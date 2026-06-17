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
      

<header className="h-14 border-b border-white/5 bg-[#050505] flex items-center justify-between px-4 z-50 shrink-0">
<div className="flex items-center gap-4">
<a className="flex items-center gap-2 group mr-4" href="#">
<div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-all duration-300">
<iconify-icon icon="solar:infinity-linear" strokeWidth="2" width="18"></iconify-icon>
</div>
<span className="text-sm font-semibold text-white tracking-tight">Flowstate</span>
</a>
<div className="h-6 w-px bg-white/10"></div>
<div className="flex items-center gap-2 text-sm">
<span className="text-neutral-500 hover:text-white cursor-pointer transition-colors">Workflows</span>
<iconify-icon className="text-neutral-600" icon="solar:alt-arrow-right-linear" width="12"></iconify-icon>
<div className="flex items-center gap-2 px-2 py-1 rounded-md hover:bg-white/5 cursor-pointer transition-colors group/title">
<span className="text-white font-medium">New User Onboarding</span>
<iconify-icon className="opacity-0 group-hover/title:opacity-100 transition-opacity text-neutral-500" icon="solar:pen-linear" width="12"></iconify-icon>
</div>
<div className="flex items-center gap-1.5 ml-2 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
<span className="w-1 h-1 rounded-full bg-emerald-500"></span>
<span className="text-[10px] text-emerald-500 font-medium">v2.4 Live</span>
</div>
</div>
</div>
<div className="flex items-center gap-3">

<div className="flex items-center bg-neutral-900 rounded-lg p-0.5 border border-white/5">
<button className="px-3 py-1 rounded-md text-[10px] font-medium bg-neutral-800 text-white shadow-sm border border-white/5">Editor</button>
<button className="px-3 py-1 rounded-md text-[10px] font-medium text-neutral-500 hover:text-white transition-all">Logs</button>
</div>
<div className="h-6 w-px bg-white/10 mx-2"></div>

<div className="flex items-center -space-x-2 mr-2">
<div className="w-7 h-7 rounded-full bg-neutral-800 ring-2 ring-[#050505] flex items-center justify-center text-[10px] text-white font-medium select-none cursor-help" title="You">me</div>
<div className="w-7 h-7 rounded-full bg-indigo-900 ring-2 ring-[#050505] flex items-center justify-center text-[10px] text-indigo-200 font-medium select-none" title="Sarah">SM</div>
<div className="w-7 h-7 rounded-full bg-neutral-800 ring-2 ring-[#050505] flex items-center justify-center text-[10px] text-neutral-400 font-medium select-none hover:bg-neutral-700 transition-colors cursor-pointer">+2</div>
</div>
<button className="flex items-center gap-2 px-3 py-1.5 bg-white text-black rounded-md text-xs font-semibold hover:bg-neutral-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.1)]">
<iconify-icon icon="solar:rocket-2-bold" width="14"></iconify-icon>
                Deploy
            </button>
<button className="w-8 h-8 rounded-md hover:bg-neutral-900 flex items-center justify-center text-neutral-400 transition-colors border border-transparent hover:border-white/5">
<iconify-icon icon="solar:settings-linear" width="18"></iconify-icon>
</button>
</div>
</header>

<main className="flex-1 flex overflow-hidden">

<aside className="w-64 border-r border-white/5 bg-[#050505] flex flex-col z-40">

<div className="p-3 border-b border-white/5">
<button className="w-full bg-neutral-900/50 border border-white/5 rounded-md py-1.5 px-3 text-xs text-left text-neutral-500 hover:border-white/20 hover:text-neutral-300 transition-all flex items-center justify-between group">
<span className="flex items-center gap-2">
<iconify-icon icon="solar:magnifer-linear" width="14"></iconify-icon>
                        Find nodes...
                    </span>
<kbd className="bg-white/5 rounded px-1.5 py-0.5 text-[9px] text-neutral-500 border border-white/5 font-mono group-hover:border-white/10 group-hover:text-neutral-400">⌘K</kbd>
</button>
</div>

<div className="flex-1 overflow-y-auto px-3 py-4 space-y-6">

<div>
<h3 className="text-[10px] font-bold uppercase tracking-widest text-neutral-600 mb-3 px-1">Logic Blocks</h3>
<div className="space-y-1">
<div className="group flex items-center gap-3 p-2 rounded-md hover:bg-neutral-900 border border-transparent hover:border-white/5 cursor-grab active:cursor-grabbing transition-all">
<div className="w-7 h-7 rounded bg-blue-500/10 text-blue-400 flex items-center justify-center border border-blue-500/20 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:mailbox-linear" width="14"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-xs text-neutral-300 font-medium group-hover:text-white">Webhook</span>
<span className="text-[10px] text-neutral-600 group-hover:text-neutral-500">HTTP Trigger</span>
</div>
</div>
<div className="group flex items-center gap-3 p-2 rounded-md hover:bg-neutral-900 border border-transparent hover:border-white/5 cursor-grab active:cursor-grabbing transition-all">
<div className="w-7 h-7 rounded bg-purple-500/10 text-purple-400 flex items-center justify-center border border-purple-500/20 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:magic-stick-3-linear" width="14"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-xs text-neutral-300 font-medium group-hover:text-white">AI Agent</span>
<span className="text-[10px] text-neutral-600 group-hover:text-neutral-500">LLM Processing</span>
</div>
</div>
<div className="group flex items-center gap-3 p-2 rounded-md hover:bg-neutral-900 border border-transparent hover:border-white/5 cursor-grab active:cursor-grabbing transition-all">
<div className="w-7 h-7 rounded bg-orange-500/10 text-orange-400 flex items-center justify-center border border-orange-500/20 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:branching-paths-down-linear" width="14"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-xs text-neutral-300 font-medium group-hover:text-white">Condition</span>
<span className="text-[10px] text-neutral-600 group-hover:text-neutral-500">If / Else Logic</span>
</div>
</div>
</div>
</div>

<div>
<h3 className="text-[10px] font-bold uppercase tracking-widest text-neutral-600 mb-3 px-1">Connectors</h3>
<div className="space-y-1">
<div className="group flex items-center gap-3 p-2 rounded-md hover:bg-neutral-900 border border-transparent hover:border-white/5 cursor-grab active:cursor-grabbing transition-all">
<div className="w-7 h-7 rounded bg-white/5 text-neutral-300 flex items-center justify-center border border-white/10 group-hover:bg-white/10">
<iconify-icon className="grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all" icon="logos:supabase-icon" width="14"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-xs text-neutral-300 font-medium group-hover:text-white">Supabase</span>
<span className="text-[10px] text-neutral-600 group-hover:text-neutral-500">Database Actions</span>
</div>
</div>
<div className="group flex items-center gap-3 p-2 rounded-md hover:bg-neutral-900 border border-transparent hover:border-white/5 cursor-grab active:cursor-grabbing transition-all">
<div className="w-7 h-7 rounded bg-white/5 text-neutral-300 flex items-center justify-center border border-white/10 group-hover:bg-white/10">
<iconify-icon className="grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all" icon="logos:slack-icon" width="14"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-xs text-neutral-300 font-medium group-hover:text-white">Slack</span>
<span className="text-[10px] text-neutral-600 group-hover:text-neutral-500">Send Message</span>
</div>
</div>
<div className="group flex items-center gap-3 p-2 rounded-md hover:bg-neutral-900 border border-transparent hover:border-white/5 cursor-grab active:cursor-grabbing transition-all">
<div className="w-7 h-7 rounded bg-white/5 text-neutral-300 flex items-center justify-center border border-white/10 group-hover:bg-white/10">
<iconify-icon icon="solar:code-square-linear" width="14"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-xs text-neutral-300 font-medium group-hover:text-white">Custom API</span>
<span className="text-[10px] text-neutral-600 group-hover:text-neutral-500">Fetch / Axios</span>
</div>
</div>
</div>
</div>
</div>

<div className="p-3 border-t border-white/5">
<div className="bg-gradient-to-r from-emerald-500/10 to-transparent rounded-md p-2 flex items-center gap-2 border border-emerald-500/10 hover:border-emerald-500/20 transition-colors cursor-pointer">
<div className="relative">
<div className="w-2 h-2 rounded-full bg-emerald-500"></div>
<div className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-50"></div>
</div>
<span className="text-[10px] text-emerald-400 font-medium">System Operational</span>
</div>
</div>
</aside>

<div className="flex-1 flex flex-col relative bg-grid-canvas overflow-hidden">

<div className="absolute top-6 left-6 right-80 z-30 flex items-center justify-between pointer-events-none">
<div className="pointer-events-auto flex items-center gap-1">
<div className="flex bg-neutral-900/90 backdrop-blur-md border border-white/10 rounded-lg shadow-xl overflow-hidden p-1">
<button className="w-7 h-7 flex items-center justify-center rounded hover:bg-white/10 text-neutral-400 hover:text-white transition-colors">
<iconify-icon icon="solar:cursor-linear" width="16"></iconify-icon>
</button>
<button className="w-7 h-7 flex items-center justify-center rounded hover:bg-white/10 text-neutral-400 hover:text-white transition-colors bg-white/10 text-white">
<iconify-icon icon="solar:hand-shake-linear" width="16"></iconify-icon>
</button>
<button className="w-7 h-7 flex items-center justify-center rounded hover:bg-white/10 text-neutral-400 hover:text-white transition-colors">
<iconify-icon icon="solar:chat-round-dots-linear" width="16"></iconify-icon>
</button>
</div>
</div>
<div className="pointer-events-auto flex items-center gap-2">
<div className="text-[10px] text-neutral-500 bg-neutral-900/50 backdrop-blur border border-white/5 px-2 py-1 rounded font-mono">
                        Auto-save: 2s ago
                    </div>
<button className="flex items-center gap-2 px-3 py-1.5 bg-neutral-900/90 backdrop-blur-md border border-white/10 text-white rounded-md text-xs font-medium hover:bg-neutral-800 transition-colors shadow-lg group">
<iconify-icon className="text-emerald-500 group-hover:text-emerald-400" icon="solar:play-linear" width="14"></iconify-icon>
                        Test Workflow
                    </button>
</div>
</div>

<div className="flex-1 relative cursor-grab active:cursor-grabbing" style={{minHeight: '0'}}>

<svg className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible">
<defs>
<lineargradient id="gradient-line" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" stop-color="#6366f1"></stop>
<stop offset="100%" stop-color="#8b5cf6"></stop>
</lineargradient>
<marker id="arrowhead" markerheight="7" markerwidth="10" orient="auto" refx="9" refy="3.5">
<polygon fill="#404040" points="0 0, 10 3.5, 0 7"></polygon>
</marker>
<marker id="arrowhead-active" markerheight="7" markerwidth="10" orient="auto" refx="9" refy="3.5">
<polygon fill="#6366f1" points="0 0, 10 3.5, 0 7"></polygon>
</marker>
</defs>

<path d="M 340 180 C 440 180, 440 280, 540 280" fill="none" stroke="#333" strokeWidth="2"></path>
<path className="flow-line" d="M 340 180 C 440 180, 440 280, 540 280" fill="none" marker-end="url(#arrowhead-active)" stroke="url(#gradient-line)" strokeWidth="2"></path>

<path d="M 800 280 C 900 280, 900 200, 1000 200" fill="none" marker-end="url(#arrowhead)" stroke="#404040" strokeWidth="2"></path>

<path d="M 800 280 C 900 280, 900 360, 1000 360" fill="none" marker-end="url(#arrowhead)" stroke="#404040" stroke-dasharray="4,4" strokeWidth="2"></path>
</svg>

<div className="absolute inset-0 z-20" style={{transform: 'translate(50px, 50px)'}}>

<div className="absolute left-[40px] top-[140px] w-64 bg-[#0A0A0A] border border-blue-500/30 rounded-xl shadow-2xl shadow-blue-900/5 group hover:border-blue-500/60 transition-colors select-none">

<div className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-[#0A0A0A] border-2 border-blue-500 rounded-full z-10 hover:scale-125 transition-transform cursor-crosshair"></div>
<div className="px-4 py-3 flex items-center justify-between border-b border-white/5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center ring-1 ring-blue-500/20">
<iconify-icon icon="solar:mailbox-linear" width="16"></iconify-icon>
</div>
<div>
<div className="text-xs font-semibold text-white">Form Submission</div>
<div className="text-[9px] text-blue-400 font-mono">POST /hooks/v1</div>
</div>
</div>
</div>
<div className="p-3 bg-neutral-900/30 rounded-b-xl">
<div className="text-[10px] text-neutral-500 mb-1.5 font-mono flex justify-between">
<span>Payload</span>
<span className="text-emerald-500">JSON</span>
</div>
<div className="text-[10px] text-neutral-400 bg-[#050505] rounded px-2 py-1.5 border border-white/5 font-mono truncate">
                                { "email": "user@test.com"... }
                            </div>
</div>
</div>

<div className="absolute left-[420px] top-[140px] w-40 bg-yellow-400/5 backdrop-blur-sm border border-yellow-400/20 rounded-lg p-3 -rotate-2 shadow-lg hover:rotate-0 transition-transform cursor-pointer group">
<div className="flex items-start gap-2">
<iconify-icon className="text-yellow-400 shrink-0 mt-0.5" icon="solar:pin-linear" width="12"></iconify-icon>
<p className="text-[10px] text-yellow-100/80 leading-relaxed font-medium font-handwriting">
                                Validating schema before processing with AI model to save tokens.
                            </p>
</div>
</div>

<div className="absolute left-[540px] top-[220px] w-72 bg-[#0A0A0A] border border-indigo-500 rounded-xl shadow-[0_0_30px_rgba(99,102,241,0.15)] ring-1 ring-indigo-500/30 select-none z-10">

<div className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-[#0A0A0A] border-2 border-indigo-500 rounded-full z-10"></div>

<div className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-[#0A0A0A] border-2 border-indigo-500 rounded-full z-10 hover:scale-125 transition-transform cursor-crosshair"></div>

<div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-indigo-500 text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide shadow-lg shadow-indigo-500/20">
<iconify-icon icon="svg-spinners:ring-resize" width="10"></iconify-icon>
                            Processing
                        </div>
<div className="px-4 py-3 flex items-center justify-between border-b border-white/5 bg-indigo-500/5 rounded-t-xl">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center ring-1 ring-indigo-500/30">
<iconify-icon icon="solar:magic-stick-3-linear" width="16"></iconify-icon>
</div>
<div>
<div className="text-xs font-semibold text-white">Summarize Content</div>
<div className="text-[9px] text-indigo-300 font-mono">GPT-4 Turbo</div>
</div>
</div>
<button className="text-neutral-500 hover:text-white transition-colors">
<iconify-icon icon="solar:menu-dots-linear" width="16"></iconify-icon>
</button>
</div>
<div className="p-3 bg-neutral-900/30 space-y-2 rounded-b-xl">
<div className="flex items-center justify-between text-[10px] text-neutral-500">
<span>Input Tokens</span>
<span className="font-mono text-neutral-300">~450</span>
</div>
<div className="w-full bg-neutral-800 rounded-full h-1 overflow-hidden">
<div className="bg-indigo-500 h-1 rounded-full w-[60%] animate-pulse"></div>
</div>
</div>
</div>

<div className="absolute left-[1000px] top-[140px] w-64 bg-[#0A0A0A] border border-white/10 rounded-xl shadow-xl group hover:border-emerald-500/50 transition-colors select-none">

<div className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-[#0A0A0A] border-2 border-neutral-600 rounded-full z-10"></div>
<div className="px-4 py-3 flex items-center justify-between border-b border-white/5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center ring-1 ring-emerald-500/20">
<iconify-icon icon="solar:database-linear" width="16"></iconify-icon>
</div>
<div>
<div className="text-xs font-semibold text-white">Save Result</div>
<div className="text-[9px] text-emerald-500/80 font-mono">postgres_main</div>
</div>
</div>
</div>
<div className="p-3 bg-neutral-900/30 rounded-b-xl">
<div className="flex gap-2">
<span className="text-[9px] bg-white/5 text-neutral-400 px-1.5 py-0.5 rounded border border-white/5">INSERT</span>
<span className="text-[9px] bg-white/5 text-neutral-400 px-1.5 py-0.5 rounded border border-white/5">public.users</span>
</div>
</div>
</div>

<div className="absolute left-[1000px] top-[300px] w-64 bg-[#0A0A0A] border border-amber-500/40 rounded-xl shadow-xl shadow-amber-900/5 group select-none">

<div className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-[#0A0A0A] border-2 border-neutral-600 rounded-full z-10"></div>

<div className="absolute -top-2 -right-2 bg-amber-500 text-black w-5 h-5 flex items-center justify-center rounded-full shadow-lg z-20 animate-bounce">
<iconify-icon icon="solar:exclamation-mark-bold" width="12"></iconify-icon>
</div>
<div className="px-4 py-3 flex items-center justify-between border-b border-white/5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-500 flex items-center justify-center ring-1 ring-amber-500/20">
<iconify-icon className="grayscale brightness-200" icon="logos:slack-icon" width="16"></iconify-icon>
</div>
<div>
<div className="text-xs font-semibold text-white">Notify Team</div>
<div className="text-[9px] text-amber-500 font-mono">Missing Config</div>
</div>
</div>
</div>
<div className="p-3 bg-neutral-900/30 rounded-b-xl">
<div className="text-[10px] text-neutral-500 flex items-center gap-2">
<iconify-icon icon="solar:link-broken-linear" width="12"></iconify-icon>
                                Channel ID required
                            </div>
</div>
</div>
</div>
</div>

<div className="h-48 bg-[#050505] border-t border-white/10 flex flex-col z-40 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">

<div className="flex items-center justify-between px-4 py-1.5 bg-neutral-900/50 border-b border-white/5">
<div className="flex items-center gap-4">
<div className="flex items-center gap-1 text-[10px] text-neutral-400 hover:text-white cursor-pointer transition-colors">
<iconify-icon icon="solar:terminal-linear" width="12"></iconify-icon>
                            Console
                        </div>
<div className="flex items-center gap-1 text-[10px] text-indigo-400 font-medium border-b border-indigo-500 pb-0.5 cursor-pointer">
<iconify-icon icon="solar:history-linear" width="12"></iconify-icon>
                            Executions
                        </div>
<div className="flex items-center gap-1 text-[10px] text-neutral-400 hover:text-white cursor-pointer transition-colors">
<iconify-icon icon="solar:bug-linear" width="12"></iconify-icon>
                            Debug
                        </div>
</div>
<div className="flex items-center gap-2">
<button className="text-neutral-500 hover:text-white transition-colors"><iconify-icon icon="solar:trash-bin-trash-linear" width="12"></iconify-icon></button>
<button className="text-neutral-500 hover:text-white transition-colors"><iconify-icon icon="solar:maximize-linear" width="12"></iconify-icon></button>
<button className="text-neutral-500 hover:text-white transition-colors"><iconify-icon icon="solar:close-linear" width="14"></iconify-icon></button>
</div>
</div>

<div className="flex-1 overflow-y-auto font-mono text-[10px] p-2 space-y-1 bg-[#080808]">
<div className="flex gap-2 opacity-50">
<span className="text-neutral-600">14:02:40</span>
<span className="text-blue-400">INFO</span>
<span className="text-neutral-400">Workflow triggered by webhook event_id: evt_9921</span>
</div>
<div className="flex gap-2 opacity-75">
<span className="text-neutral-600">14:02:41</span>
<span className="text-blue-400">INFO</span>
<span className="text-neutral-400">Node "Summarize Content" started...</span>
</div>
<div className="flex gap-2 bg-indigo-500/10 -mx-2 px-2 py-0.5 border-l-2 border-indigo-500">
<span className="text-neutral-500">14:02:42</span>
<span className="text-indigo-400">DEBUG</span>
<span className="text-indigo-200">Generating completion with model "gpt-4-turbo" (temp: 0.7)</span>
</div>
<div className="flex gap-2">
<span className="text-neutral-500">14:02:44</span>
<span className="text-emerald-500">SUCCESS</span>
<span className="text-emerald-100">AI Output received (45 tokens). Moving to next step.</span>
</div>
<div className="flex gap-2 animate-pulse">
<span className="text-neutral-500">14:02:44</span>
<span className="text-neutral-400">...</span>
<span className="text-neutral-500">Writing to database "postgres_main"...</span>
</div>
</div>
</div>
</div>

<aside className="w-80 border-l border-white/5 bg-[#050505] flex flex-col z-40 overflow-y-auto">
<div className="flex items-center px-4 pt-4 border-b border-white/5 gap-6">
<button className="text-xs font-medium text-white pb-3 border-b-2 border-indigo-500">Configuration</button>
<button className="text-xs font-medium text-neutral-500 pb-3 border-b-2 border-transparent hover:text-neutral-300 transition-colors">Test Data</button>
<div className="flex-1"></div>
<button className="text-neutral-500 hover:text-white pb-3">
<iconify-icon icon="solar:close-circle-linear" width="16"></iconify-icon>
</button>
</div>
<div className="p-4 space-y-6">

<div className="flex items-start gap-3">
<div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500/20 to-purple-500/20 text-indigo-400 flex items-center justify-center border border-indigo-500/30 shrink-0">
<iconify-icon icon="solar:magic-stick-3-linear" width="20"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<h2 className="text-sm font-semibold text-white">Summarize Content</h2>
<div className="flex items-center gap-2 mt-1">
<span className="text-[10px] text-neutral-500 font-mono bg-white/5 px-1.5 rounded">ID: ai_882</span>
<span className="w-1 h-1 bg-neutral-600 rounded-full"></span>
<span className="text-[10px] text-emerald-500">Active</span>
</div>
</div>
</div>

<div className="space-y-4">
<div className="space-y-2">
<label className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider">Prompt Template</label>
<div className="relative group">
<div className="absolute top-2 right-2 flex gap-1">
<button className="p-1 hover:bg-white/10 rounded text-neutral-500 hover:text-white" title="Optimize with AI"><iconify-icon icon="solar:magic-stick-3-linear" width="12"></iconify-icon></button>
<button className="p-1 hover:bg-white/10 rounded text-neutral-500 hover:text-white"><iconify-icon icon="solar:maximize-square-linear" width="12"></iconify-icon></button>
</div>
<textarea className="w-full bg-[#0F0F0F] border border-white/10 rounded-lg py-3 px-3 text-xs text-neutral-300 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all font-mono min-h-[140px] resize-none leading-relaxed placeholder-neutral-700" placeholder="Enter system prompt...">Summarize the following user feedback into 3 bullet points. Focus on sentiment and feature requests.

Context: {{webhook.body}}</textarea>
</div>
</div>

<div className="space-y-2">
<label className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider flex justify-between">
                            Model Parameters
                            <span className="text-indigo-400 cursor-pointer hover:text-indigo-300">Reset</span>
</label>
<div className="bg-[#0F0F0F] rounded-lg border border-white/5 p-3 space-y-4">

<div className="space-y-2">
<div className="flex justify-between text-[10px]">
<span className="text-neutral-400">Temperature</span>
<span className="text-white font-mono">0.7</span>
</div>
<input className="w-full h-1 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-indigo-500" max="1" min="0" step="0.1" type="range" value="0.7"/>
</div>

<div className="space-y-1">
<span className="text-[10px] text-neutral-400">Max Tokens</span>
<input className="w-full bg-black border border-white/10 rounded px-2 py-1.5 text-xs text-white focus:outline-none focus:border-indigo-500/50" type="number" value="256"/>
</div>
</div>
</div>
<div className="pt-4 border-t border-white/5">
<button className="w-full py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-md text-xs font-semibold shadow-lg shadow-indigo-900/20 transition-all flex items-center justify-center gap-2">
<iconify-icon icon="solar:play-linear" width="14"></iconify-icon>
                            Test Node Output
                        </button>
</div>

<div className="pt-2">
<h4 className="text-[10px] font-bold text-neutral-600 uppercase tracking-wider mb-2">Last 3 Runs</h4>
<div className="space-y-1">
<div className="flex items-center justify-between p-2 rounded hover:bg-white/5 cursor-pointer group transition-colors">
<div className="flex items-center gap-2">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-linear" width="12"></iconify-icon>
<span className="text-[10px] text-neutral-400 group-hover:text-white">Success</span>
</div>
<span className="text-[10px] text-neutral-600 font-mono">350ms</span>
</div>
<div className="flex items-center justify-between p-2 rounded hover:bg-white/5 cursor-pointer group transition-colors">
<div className="flex items-center gap-2">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-linear" width="12"></iconify-icon>
<span className="text-[10px] text-neutral-400 group-hover:text-white">Success</span>
</div>
<span className="text-[10px] text-neutral-600 font-mono">420ms</span>
</div>
</div>
</div>
</div>
</div>
</aside>
</main>

    </>
  );
}
