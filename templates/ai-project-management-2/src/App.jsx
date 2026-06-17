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
      

<nav className="sticky top-0 z-50 w-full border-b border-white/5 bg-black/60 backdrop-blur-xl">
<div className="mx-auto max-w-7xl px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-10">
<a className="text-sm font-semibold tracking-tighter text-white" href="#">SYNAPSE</a>
<div className="hidden md:flex items-center gap-6 text-sm text-zinc-400 font-medium">
<a className="hover:text-white transition-colors" href="#">Platform</a>
<a className="hover:text-white transition-colors" href="#">Solutions</a>
<a className="hover:text-white transition-colors" href="#">Pricing</a>
<a className="hover:text-white transition-colors" href="#">Docs</a>
</div>
</div>
<div className="flex items-center gap-5 text-sm font-medium">
<a className="text-zinc-400 hover:text-white transition-colors hidden sm:block" href="#">Sign in</a>
<a className="bg-white text-black px-4 py-1.5 rounded-full hover:bg-zinc-200 transition-colors" href="#">Get started</a>
</div>
</div>
</nav>

<main className="flex-1 w-full flex flex-col items-center justify-start pt-24 pb-20 px-6 relative overflow-hidden bg-grid">

<div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-zinc-800/30 blur-[120px] rounded-full pointer-events-none"></div>
<div className="mx-auto max-w-4xl text-center z-10 flex flex-col items-center">
<a className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-zinc-300 mb-8 hover:bg-white/10 transition-colors backdrop-blur-sm" href="#">
<iconify-icon icon="solar:stars-linear"></iconify-icon>
<span>Synapse 2.0 is now available</span>
<iconify-icon className="text-zinc-500" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter text-white mb-6 glow-text leading-[1.05]">
                Plan at the speed <br className="hidden sm:block"/> of thought.
            </h1>
<p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl font-normal leading-relaxed">
                The first AI-native workspace that understands your goals, breaks down complex tasks autonomously, and predicts bottlenecks before they happen.
            </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<button className="w-full sm:w-auto px-6 py-3 bg-white text-black text-sm font-medium rounded-full hover:bg-zinc-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                    Start building for free
                </button>
<button className="w-full sm:w-auto px-6 py-3 bg-transparent text-white text-sm font-medium rounded-full border border-white/10 hover:bg-white/5 transition-colors flex items-center justify-center gap-2">
<iconify-icon className="text-lg" icon="solar:play-circle-linear"></iconify-icon>
                    Watch workflow
                </button>
</div>
</div>

<div className="mt-20 w-full max-w-5xl mx-auto relative z-10">
<div className="rounded-xl border border-white/10 bg-[#09090b]/80 backdrop-blur-2xl shadow-2xl overflow-hidden ring-1 ring-white/5 transform transition-transform hover:scale-[1.005] duration-500">

<div className="h-10 border-b border-white/5 bg-white/5 flex items-center px-4 relative">
<div className="flex gap-1.5 absolute left-4">
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
</div>
<div className="mx-auto text-xs text-zinc-500 font-medium flex items-center gap-1.5">
<iconify-icon icon="solar:shield-check-linear"></iconify-icon> app.synapse.ai / Q4 Launch
                    </div>
</div>

<div className="flex h-[450px] md:h-[550px]">

<div className="w-56 border-r border-white/5 p-4 hidden md:flex flex-col bg-black/50">
<div className="text-xs font-semibold tracking-tight text-zinc-500 mb-4 px-2">WORKSPACE</div>
<div className="space-y-0.5 flex-1">
<div className="flex items-center gap-2 text-sm text-zinc-300 hover:bg-white/5 px-2 py-1.5 rounded-md transition-colors cursor-pointer">
<iconify-icon className="text-zinc-400" icon="solar:home-smile-linear"></iconify-icon> Overview
                            </div>
<div className="flex items-center gap-2 text-sm text-zinc-300 hover:bg-white/5 px-2 py-1.5 rounded-md transition-colors cursor-pointer">
<iconify-icon className="text-zinc-400" icon="solar:inbox-in-linear"></iconify-icon> Inbox <span className="ml-auto bg-white/10 text-white text-xs px-1.5 rounded">3</span>
</div>
<div className="flex items-center gap-2 text-sm text-white bg-white/10 px-2 py-1.5 rounded-md cursor-pointer">
<iconify-icon className="text-white" icon="solar:folder-with-files-linear"></iconify-icon> Q4 Launch
                            </div>
</div>
<div className="pt-4 border-t border-white/5">
<div className="flex items-center gap-3 px-2">
<div className="w-6 h-6 rounded bg-gradient-to-tr from-zinc-700 to-zinc-500 border border-white/10"></div>
<div className="text-sm font-medium text-white">Acme Corp</div>
</div>
</div>
</div>

<div className="flex-1 flex flex-col relative bg-black/20">

<div className="h-14 border-b border-white/5 px-6 flex items-center justify-between">
<div className="flex items-center gap-3">
<h2 className="text-sm font-semibold text-white">Engineering Sprint</h2>
<span className="px-2 py-0.5 rounded text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">On Track</span>
</div>
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-xs text-white z-20">A</div>
<div className="w-6 h-6 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-xs text-white -ml-3 z-10">B</div>
<button className="ml-2 bg-white/5 hover:bg-white/10 text-zinc-300 px-2.5 py-1 rounded text-xs font-medium transition-colors border border-white/5">Share</button>
</div>
</div>
<div className="p-6 flex-1 flex flex-col relative overflow-hidden">

<div className="mb-6 relative group">
<div className="absolute inset-0 bg-gradient-to-r from-zinc-800 to-zinc-800 rounded-lg blur opacity-20 group-focus-within:opacity-50 transition-opacity"></div>
<div className="relative flex items-center bg-[#09090b] border border-white/10 rounded-lg overflow-hidden focus-within:border-zinc-600 transition-colors shadow-inner">
<div className="pl-4 pr-2 text-zinc-500 flex items-center">
<iconify-icon className="text-lg" icon="solar:magic-stick-3-linear"></iconify-icon>
</div>
<input className="w-full bg-transparent py-3 pr-4 text-sm text-white placeholder-zinc-500 focus:outline-none" readonly="" type="text" value="Draft a timeline for the authentication refactor and assign reviewers."/>
<button className="mr-2 p-1.5 rounded-md bg-white/10 text-white hover:bg-white/20 transition-colors">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>

<div className="flex-1 space-y-2 overflow-hidden relative">
<div className="text-xs font-medium text-zinc-500 mb-3 flex items-center gap-2">
<iconify-icon icon="solar:stars-linear"></iconify-icon> Generated Plan
                                </div>

<div className="flex items-center justify-between p-3 rounded-lg border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors cursor-pointer group">
<div className="flex items-center gap-3">

<div className="w-4 h-4 rounded-[4px] border border-zinc-600 bg-black flex items-center justify-center group-hover:border-zinc-400 transition-colors"></div>
<span className="text-sm text-zinc-200">Audit existing JWT implementation</span>
</div>
<div className="flex items-center gap-4">
<span className="text-xs text-zinc-500 flex items-center gap-1"><iconify-icon icon="solar:calendar-linear"></iconify-icon> Oct 12</span>
<div className="w-5 h-5 rounded-full bg-blue-900 border border-blue-700 flex items-center justify-center text-[10px] text-white">SK</div>
</div>
</div>

<div className="flex items-center justify-between p-3 rounded-lg border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors cursor-pointer group">
<div className="flex items-center gap-3">
<div className="w-4 h-4 rounded-[4px] border border-zinc-600 bg-black flex items-center justify-center group-hover:border-zinc-400 transition-colors"></div>
<span className="text-sm text-zinc-200">Design new OAuth flow</span>
</div>
<div className="flex items-center gap-4">
<span className="text-xs px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-400 border border-zinc-700">Design</span>
<div className="w-5 h-5 rounded-full border border-dashed border-zinc-600 flex items-center justify-center text-xs text-zinc-500"><iconify-icon icon="solar:user-plus-linear"></iconify-icon></div>
</div>
</div>

<div className="flex items-center justify-between p-3 rounded-lg border border-zinc-700/50 bg-zinc-800/20 cursor-pointer relative overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-0.5 bg-white"></div>
<div className="flex items-center gap-3">
<div className="w-4 h-4 rounded-[4px] bg-white flex items-center justify-center">
<iconify-icon className="text-black text-[10px]" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="text-sm text-white line-through opacity-70">Update database schema</span>
</div>
<div className="flex items-center gap-4">
<span className="text-xs text-zinc-500">Done</span>
<div className="w-5 h-5 rounded-full bg-zinc-700 flex items-center justify-center text-[10px] text-white">JD</div>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#09090b] to-transparent pointer-events-none"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="w-full py-24 px-6 border-t border-white/5 bg-black">
<div className="mx-auto max-w-7xl">
<div className="flex flex-col mb-16 max-w-2xl">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-white mb-4">Intelligence at every layer.</h2>
<p className="text-zinc-400 text-sm md:text-base leading-relaxed">Stop manually updating tickets. Synapse integrates deeply with your stack to provide ambient context and automate the busywork.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

<div className="p-8 rounded-2xl border border-white/5 bg-[#09090b] hover:bg-zinc-900/50 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6 group-hover:scale-105 transition-transform duration-300">
<iconify-icon className="text-xl" icon="solar:magnifer-zoom-in-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-3 tracking-tight">Semantic Search</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Find anything instantly. Chat with your entire workspace history, documents, and code commits using natural language.</p>
</div>

<div className="p-8 rounded-2xl border border-white/5 bg-[#09090b] hover:bg-zinc-900/50 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6 group-hover:scale-105 transition-transform duration-300">
<iconify-icon className="text-xl" icon="solar:branching-paths-up-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-3 tracking-tight">Auto-Scoping</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Paste a brief. Our agents generate comprehensive epics, break them into tasks, and estimate effort automatically.</p>
</div>

<div className="p-8 rounded-2xl border border-white/5 bg-[#09090b] hover:bg-zinc-900/50 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6 group-hover:scale-105 transition-transform duration-300">
<iconify-icon className="text-xl" icon="solar:chart-square-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-3 tracking-tight">Velocity Prediction</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Real-time forecasting based on actual developer output, not arbitrary story points. Know exactly when you'll ship.</p>
</div>
</div>
</div>
</section>

<section className="w-full py-24 px-6 border-t border-white/5 bg-[#09090b]">
<div className="mx-auto max-w-7xl">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-white mb-6">Dial in the autonomy.</h2>
<p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-8">You decide how much control the AI has. Keep it as a passive assistant that drafts suggestions, or grant it permission to automatically assign tasks, nudge team members, and shift deadlines.</p>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-zinc-500" icon="solar:check-circle-linear"></iconify-icon> Strict draft-only mode
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-zinc-500" icon="solar:check-circle-linear"></iconify-icon> Auto-routing based on workload
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-zinc-500" icon="solar:check-circle-linear"></iconify-icon> Connect to custom LLMs
                        </li>
</ul>
</div>

<div className="bg-black border border-white/10 rounded-2xl p-8 shadow-2xl relative">
<div className="absolute inset-0 bg-gradient-to-tr from-white/[0.02] to-transparent rounded-2xl pointer-events-none"></div>
<div className="flex items-center gap-3 mb-8 border-b border-white/5 pb-6">
<div className="w-8 h-8 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center">
<iconify-icon className="text-zinc-400" icon="solar:settings-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-white">Agent Permissions</h4>
<p className="text-xs text-zinc-500">Configure global AI behaviors</p>
</div>
</div>
<div className="space-y-8">

<div className="flex items-center justify-between group">
<div>
<div className="text-sm font-medium text-white mb-1 group-hover:text-white transition-colors">Auto-resolve Blockers</div>
<div className="text-xs text-zinc-500">Allow agent to reassign tasks if overdue.</div>
</div>

<div className="w-11 h-6 bg-white rounded-full relative cursor-pointer flex items-center px-0.5 transition-colors">
<div className="w-5 h-5 bg-black rounded-full translate-x-5 shadow-sm transition-transform"></div>
</div>
</div>

<div className="flex items-center justify-between group">
<div>
<div className="text-sm font-medium text-zinc-300 mb-1 group-hover:text-white transition-colors">External Communications</div>
<div className="text-xs text-zinc-500">Allow agent to draft client updates.</div>
</div>

<div className="w-11 h-6 bg-zinc-900 rounded-full border border-white/10 relative cursor-pointer flex items-center px-0.5 transition-colors">
<div className="w-4 h-4 bg-zinc-500 rounded-full translate-x-0 shadow-sm transition-transform"></div>
</div>
</div>

<div className="pt-2">
<div className="flex items-center justify-between mb-3">
<div className="text-sm font-medium text-white">Reasoning Depth</div>
<div className="text-xs font-mono text-zinc-400 bg-white/5 px-2 py-0.5 rounded">High</div>
</div>
<div className="relative w-full h-1.5 bg-zinc-900 rounded-full border border-white/5">
<div className="absolute top-0 left-0 h-full w-[75%] bg-zinc-300 rounded-full"></div>

<div className="absolute top-1/2 left-[75%] -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.3)] cursor-grab"></div>
</div>
<div className="flex justify-between mt-3 text-xs text-zinc-600 font-medium">
<span>Fast</span>
<span>Thorough</span>
</div>
</div>

<div className="pt-2">
<div className="text-sm font-medium text-white mb-2">Model Selection</div>
<div className="flex items-center justify-between w-full border border-white/10 bg-black rounded-lg px-4 py-3 cursor-pointer hover:bg-zinc-900/50 transition-colors text-sm text-white">
<div className="flex items-center gap-2">
<iconify-icon className="text-zinc-400" icon="solar:cpu-bolt-linear"></iconify-icon>
                                    Synapse Pro (GPT-4)
                                </div>
<iconify-icon className="text-zinc-500" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="w-full border-t border-white/5 bg-black py-12 px-6 mt-auto">
<div className="mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-3">
<span className="text-sm font-semibold tracking-tighter text-white">SYNAPSE</span>
<span className="w-1 h-1 rounded-full bg-zinc-800"></span>
<span className="text-xs font-medium text-zinc-500">Systemizing intelligence.</span>
</div>
<div className="flex gap-6 text-sm text-zinc-500 font-medium">
<a className="hover:text-white transition-colors" href="#">X (Twitter)</a>
<a className="hover:text-white transition-colors" href="#">GitHub</a>
<a className="hover:text-white transition-colors" href="#">Changelog</a>
<a className="hover:text-white transition-colors" href="#">Privacy</a>
</div>
</div>
</footer>

    </>
  );
}
