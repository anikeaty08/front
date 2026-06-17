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
      

<div className="fixed inset-0 z-0 pointer-events-none code-grid-bg opacity-40"></div>
<div className="fixed inset-0 z-0 pointer-events-none bg-gradient-to-b from-transparent via-[#050505]/80 to-[#050505]"></div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-8 h-8 rounded bg-gradient-to-br from-emerald-500 to-green-800 flex items-center justify-center text-black font-bold font-mono text-lg neon-glow group-hover:scale-105 transition-transform duration-300">
                    &gt;_
                </div>
<span className="font-semibold text-lg tracking-tight text-white group-hover:text-emerald-400 transition-colors">Cherry IDE</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
<a className="hover:text-emerald-400 transition-colors" href="#features">Stack</a>
<a className="hover:text-emerald-400 transition-colors" href="#pipeline">Pipeline</a>
<a className="hover:text-emerald-400 transition-colors" href="#vibebros">Community</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm font-medium" href="#">
<iconify-icon icon="solar:github-linear" width="20"></iconify-icon>
<span>Star</span>
</a>
<a className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded text-sm font-medium text-white transition-all hover:border-emerald-500/50 flex items-center gap-2" href="#">
<span>Install</span>
<span className="text-xs text-emerald-500 font-mono">v0.1.0-alpha</span>
</a>
</div>
</div>
</nav>

<main className="relative z-10 pt-32 pb-20 lg:pt-48 lg:pb-32 px-6">
<div className="max-w-4xl mx-auto text-center">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 mb-8 animate-fade-in-up">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
<span className="text-xs font-mono text-emerald-400 tracking-wide uppercase">Built by the Vibebros community 🍒</span>
</div>

<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-white mb-6 leading-[1.1]">
                Code with AI.<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-green-300 to-teal-400 neon-text-glow">On your terms.</span>
</h1>

<p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                Cherry IDE is an AI-powered code editor built for developers who want full control — open-source models, custom APIs, and zero lock-in.
            </p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
<button className="w-full sm:w-auto px-8 py-3.5 bg-emerald-500 text-black font-semibold rounded hover:bg-emerald-400 transition-all neon-glow flex items-center justify-center gap-2 group">
<iconify-icon className="group-hover:-translate-y-0.5 transition-transform" icon="solar:download-square-linear" width="20"></iconify-icon>
                    Get Early Access
                </button>
<button className="w-full sm:w-auto px-8 py-3.5 bg-black border border-white/15 text-white font-medium rounded hover:bg-white/5 hover:border-white/30 transition-all flex items-center justify-center gap-2 group">
<iconify-icon icon="solar:brand-github-linear" width="20"></iconify-icon>
                    View on GitHub
                </button>
</div>

<div className="relative max-w-4xl mx-auto text-left rounded-lg border border-white/10 bg-[#0A0A0A] shadow-2xl overflow-hidden glass-panel group hover:border-emerald-500/30 transition-colors duration-500">

<div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-black/40">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="flex items-center gap-2 text-xs font-mono text-gray-500">
<iconify-icon icon="solar:file-code-linear"></iconify-icon>
                        main.rs
                    </div>
<div className="w-10"></div>
</div>

<div className="p-6 font-mono text-sm md:text-base overflow-x-auto">
<div className="flex gap-4">
<div className="text-gray-700 select-none text-right w-6 flex flex-col gap-1">
<span>1</span><span>2</span><span>3</span><span>4</span><span>5</span>
</div>
<div className="text-gray-300 w-full">
<div className="mb-1"><span className="text-purple-400">fn</span> <span className="text-blue-400">calculate_entropy</span>(data: <span className="text-emerald-400">&amp;[f64]</span>) -&gt; <span className="text-emerald-400">f64</span> {</div>
<div className="mb-1 pl-4"><span className="text-gray-500">// AI Model: Llama-3-70b-Local (Running on port 11434)</span></div>
<div className="mb-1 pl-4 relative group/code">
<span className="text-gray-500 italic">Computing Shannon entropy...</span>
<div className="absolute -top-10 left-10 bg-[#151515] border border-emerald-500/30 text-emerald-400 px-3 py-1.5 rounded text-xs shadow-lg flex items-center gap-2 animate-pulse">
<iconify-icon icon="solar:magic-stick-linear"></iconify-icon>
                                    Generating via localhost:11434...
                                </div>
</div>
<div className="mb-1 pl-4 opacity-50">    let mut frequency = HashMap::new();</div>
<div className="mb-1 pl-4 opacity-50">    for &amp;value in data {</div>
<div className="pl-4 text-emerald-500/50 animate-pulse">        *frequency.entry(value).or_insert(0) += 1;</div>
<div>}</div>
</div>
</div>
</div>

<div className="px-4 py-1.5 border-t border-white/5 bg-emerald-900/10 flex items-center justify-between text-[10px] md:text-xs font-mono text-emerald-500/80">
<div className="flex items-center gap-4">
<span className="flex items-center gap-1"><iconify-icon icon="solar:link-circle-linear"></iconify-icon> Connected: Ollama (Local)</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:cpu-linear"></iconify-icon> 14ms Latency</span>
</div>
<div>UTF-8 • Rust</div>
</div>
</div>
</div>
</main>

<section className="py-24 px-6 relative" id="features">
<div className="max-w-7xl mx-auto">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">The Stack</h2>
<p className="text-gray-400 max-w-xl">Built for speed, privacy, and modularity. Rip out the parts you don't like.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="p-6 rounded border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] hover:border-emerald-500/30 transition-all group">
<div className="w-10 h-10 rounded bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:server-square-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Model Freedom</h3>
<p className="text-sm text-gray-400 leading-relaxed">
                        Plug in GPT-4, Claude 3, or your local Llama 3 instance. Switch models per file or per function. You own the API keys.
                    </p>
</div>

<div className="p-6 rounded border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] hover:border-emerald-500/30 transition-all group">
<div className="w-10 h-10 rounded bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Air-Gapped Ready</h3>
<p className="text-sm text-gray-400 leading-relaxed">
                        Working on sensitive IP? Run Cherry with local models completely offline. No telemetry. No cloud sync unless you say so.
                    </p>
</div>

<div className="p-6 rounded border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] hover:border-emerald-500/30 transition-all group">
<div className="w-10 h-10 rounded bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:code-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Native Performance</h3>
<p className="text-sm text-gray-400 leading-relaxed">
                        Built in Rust. Starts instantly. Handles massive monorepos without choking. Low memory footprint compared to Electron giants.
                    </p>
</div>

<div className="p-6 rounded border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] hover:border-emerald-500/30 transition-all group">
<div className="w-10 h-10 rounded bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:settings-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Config over Magic</h3>
<p className="text-sm text-gray-400 leading-relaxed">
                        Every AI prompt, context window, and shortcut is configurable via simple JSON or Lua scripts. Hack your editor.
                    </p>
</div>

<div className="p-6 rounded border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] hover:border-emerald-500/30 transition-all group">
<div className="w-10 h-10 rounded bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:users-group-two-rounded-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Community Driven</h3>
<p className="text-sm text-gray-400 leading-relaxed">
                        No corporate agenda. Built by the Vibebros for the love of shipping code. Features are voted on by GitHub contributors.
                    </p>
</div>

<div className="p-6 rounded border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] hover:border-emerald-500/30 transition-all group">
<div className="w-10 h-10 rounded bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:bolt-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Context Awareness</h3>
<p className="text-sm text-gray-400 leading-relaxed">
                        Smart indexing of your codebase. Ask questions about functions across files without manually copying context.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-y border-white/5 bg-black/40" id="pipeline">
<div className="max-w-7xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold text-white mb-12 text-center">Pipeline</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">

<div className="hidden md:block absolute top-12 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent"></div>

<div className="relative flex flex-col items-center text-center group">
<div className="w-24 h-24 rounded-full bg-[#0A0A0A] border border-white/10 flex items-center justify-center mb-6 z-10 group-hover:border-emerald-500 transition-colors">
<span className="text-2xl font-mono font-bold text-gray-500 group-hover:text-emerald-400">01</span>
</div>
<h3 className="text-lg font-medium text-white mb-2">Install Cherry</h3>
<p className="text-sm text-gray-400 max-w-xs">
                        One command. Runs on Mac, Linux, and Windows. No login required to start.
                    </p>
<code className="mt-4 px-3 py-1 bg-white/5 rounded text-xs text-emerald-400 font-mono">brew install vibebros/cherry</code>
</div>

<div className="relative flex flex-col items-center text-center group">
<div className="w-24 h-24 rounded-full bg-[#0A0A0A] border border-white/10 flex items-center justify-center mb-6 z-10 group-hover:border-emerald-500 transition-colors">
<span className="text-2xl font-mono font-bold text-gray-500 group-hover:text-emerald-400">02</span>
</div>
<h3 className="text-lg font-medium text-white mb-2">Plug Your Intelligence</h3>
<p className="text-sm text-gray-400 max-w-xs">
                        Add your OpenAI key, Anthropic key, or point it to <span className="text-white">localhost:11434</span> for Ollama.
                    </p>
</div>

<div className="relative flex flex-col items-center text-center group">
<div className="w-24 h-24 rounded-full bg-[#0A0A0A] border border-white/10 flex items-center justify-center mb-6 z-10 group-hover:border-emerald-500 transition-colors">
<span className="text-2xl font-mono font-bold text-gray-500 group-hover:text-emerald-400">03</span>
</div>
<h3 className="text-lg font-medium text-white mb-2">Build Faster</h3>
<p className="text-sm text-gray-400 max-w-xs">
                        Generate tests, refactor functions, and debug errors with AI that actually knows your codebase.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-4xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">Reality Check</h2>
<p className="text-gray-400 mb-12">Don't rent your tools. Own them.</p>
<div className="overflow-hidden border border-white/10 rounded-lg">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-white/[0.02]">
<th className="p-6 text-sm font-medium text-gray-500 uppercase tracking-wider">Feature</th>
<th className="p-6 text-sm font-medium text-emerald-400 uppercase tracking-wider font-mono">Cherry IDE</th>
<th className="p-6 text-sm font-medium text-gray-500 uppercase tracking-wider">The "Others"</th>
</tr>
</thead>
<tbody className="divide-y divide-white/5">
<tr className="hover:bg-white/[0.01]">
<td className="p-6 text-gray-300 font-medium">Model Choice</td>
<td className="p-6 text-white"><span className="text-emerald-400">Any</span> (Local or Cloud)</td>
<td className="p-6 text-gray-500">Vendor Locked</td>
</tr>
<tr className="hover:bg-white/[0.01]">
<td className="p-6 text-gray-300 font-medium">Offline AI</td>
<td className="p-6 text-white"><span className="text-emerald-400">Native Support</span></td>
<td className="p-6 text-gray-500">Impossible</td>
</tr>
<tr className="hover:bg-white/[0.01]">
<td className="p-6 text-gray-300 font-medium">Data Privacy</td>
<td className="p-6 text-white">Zero Telemetry</td>
<td className="p-6 text-gray-500">Cloud Logging</td>
</tr>
<tr className="hover:bg-white/[0.01]">
<td className="p-6 text-gray-300 font-medium">Cost</td>
<td className="p-6 text-white">Free &amp; Open Source</td>
<td className="p-6 text-gray-500">$20/mo Subscription</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden" id="vibebros">

<div className="absolute right-0 top-0 w-1/3 h-full bg-emerald-500/5 blur-3xl pointer-events-none"></div>
<div className="max-w-4xl mx-auto relative z-10">
<div className="flex items-start gap-6">
<div className="hidden sm:block">
<iconify-icon className="text-emerald-500" icon="solar:code-square-linear" width="48"></iconify-icon>
</div>
<div>
<h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">The Vibebros Protocol</h2>
<p className="text-lg text-gray-400 mb-6 leading-relaxed">
                        We are a collective of developers tired of subscription fatigue and black-box software. Cherry IDE is our answer. It's experimental, it moves fast, and it's open for contributions.
                    </p>
<div className="flex flex-wrap gap-3">
<span className="px-3 py-1 border border-white/10 rounded-full text-xs font-mono text-gray-400">Rust</span>
<span className="px-3 py-1 border border-white/10 rounded-full text-xs font-mono text-gray-400">Tauri</span>
<span className="px-3 py-1 border border-white/10 rounded-full text-xs font-mono text-gray-400">Ollama</span>
<span className="px-3 py-1 border border-white/10 rounded-full text-xs font-mono text-gray-400">Tree-sitter</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 border-t border-white/10 bg-gradient-to-b from-[#050505] to-emerald-950/20">
<div className="max-w-3xl mx-auto text-center">
<h2 className="text-4xl md:text-5xl font-semibold text-white mb-8 tracking-tight">Stop renting your workflow.</h2>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-8 py-4 bg-emerald-500 text-black font-bold rounded hover:bg-emerald-400 transition-all shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:shadow-[0_0_50px_rgba(16,185,129,0.5)] flex items-center justify-center gap-2">
<iconify-icon icon="solar:rocket-linear" width="20"></iconify-icon>
                    Join the Beta
                </button>
<button className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/20 text-white font-medium rounded hover:bg-white/5 transition-all flex items-center justify-center gap-2">
<iconify-icon icon="solar:code-linear" width="20"></iconify-icon>
                    Contribute Code
                </button>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-[#020202] py-12 px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-emerald-500/20 flex items-center justify-center text-emerald-500 font-mono text-xs">
                    &gt;_
                </div>
<span className="text-gray-400 text-sm font-mono">Cherry IDE © 2024</span>
</div>
<div className="flex gap-6 text-sm text-gray-500">
<a className="hover:text-emerald-400 transition-colors" href="#">GitHub</a>
<a className="hover:text-emerald-400 transition-colors" href="#">Discord</a>
<a className="hover:text-emerald-400 transition-colors" href="#">Twitter</a>
</div>
</div>
</footer>

    </>
  );
}
