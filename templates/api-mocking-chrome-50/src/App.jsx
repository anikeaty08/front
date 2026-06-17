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
colors: {
zinc: {
850: '#1f1f22',
950: '#09090b', // Slightly deeper black
}
},
animation: {
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
}
}
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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 glass-panel">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20">
<span className="iconify" data-height="16" data-icon="lucide:zap" data-strokeWidth="2.5" data-width="16"></span>
</div>
<span className="text-zinc-100 font-semibold tracking-tight text-sm group-hover:opacity-80 transition-opacity">Mock Studio</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors" href="#features">Features</a>
<a className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors" href="#">Docs</a>
<a className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors" href="#">Changelog</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-zinc-400 hover:text-white transition-colors" href="#">
<span className="iconify" data-height="20" data-icon="lucide:github" data-strokeWidth="1.5" data-width="20"></span>
</a>
<button className="bg-zinc-100 text-black text-xs font-medium px-4 py-2 rounded-full hover:bg-white transition-all shadow-[0_0_15px_rgba(255,255,255,0.1)] flex items-center gap-2">
<span className="iconify" data-height="14" data-icon="lucide:chrome" data-width="14"></span>
                    Add to Chrome
                </button>
</div>
</div>
</nav>

<main className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-indigo-600/20 opacity-20 blur-[120px] rounded-full pointer-events-none"></div>
<div className="absolute inset-0 bg-grid pointer-events-none mask-image-gradient"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/10 text-indigo-300 text-xs mb-8 animate-fade-in-up">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                v2.0 is now available
            </div>
<h1 className="text-5xl md:text-7xl font-semibold text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-zinc-500 tracking-tight mb-6 max-w-4xl mx-auto leading-[1.1]">
                The API mocking tool <br/> for frontend pros.
            </h1>
<p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                Intercept, mock, and inspect network requests directly in your browser. <br className="hidden md:block"/>
                Build robust UIs without waiting for the backend.
            </p>
<div className="flex flex-col sm:flex-row items-center gap-4 mb-20">
<button className="h-10 px-6 rounded-full bg-white text-black text-sm font-medium hover:bg-zinc-200 transition-colors flex items-center gap-2">
                    Start Mocking
                    <span className="iconify" data-height="16" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
<button className="h-10 px-6 rounded-full border border-zinc-800 bg-zinc-900/50 text-zinc-300 text-sm font-medium hover:bg-zinc-800 transition-colors">
                    Read the Manifest
                </button>
</div>

<div className="relative w-full max-w-5xl mx-auto rounded-xl border border-white/10 bg-zinc-950 shadow-2xl shadow-indigo-900/20 overflow-hidden flex flex-col h-[500px] md:h-[600px] text-left group perspective-1000">

<div className="h-10 border-b border-white/5 bg-zinc-900/50 flex items-center px-4 gap-4">
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full bg-zinc-700/50"></div>
<div className="w-3 h-3 rounded-full bg-zinc-700/50"></div>
<div className="w-3 h-3 rounded-full bg-zinc-700/50"></div>
</div>
<div className="flex-1 flex justify-center">
<div className="h-5 w-64 bg-zinc-800/50 rounded flex items-center justify-center text-[10px] text-zinc-500 font-mono">
                            mock-studio://project/dashboard
                        </div>
</div>
<div className="w-16"></div> 
</div>

<div className="flex-1 flex overflow-hidden">

<div className="w-64 border-r border-white/5 bg-zinc-900/20 flex flex-col">
<div className="p-3 border-b border-white/5 flex items-center justify-between">
<span className="text-xs font-medium text-zinc-300">Collections</span>
<span className="iconify text-zinc-500 hover:text-white cursor-pointer" data-icon="lucide:plus" data-width="14"></span>
</div>
<div className="flex-1 overflow-y-auto custom-scrollbar p-2 space-y-0.5">

<div className="flex items-center gap-2 px-2 py-1.5 text-xs text-zinc-400 hover:bg-white/5 rounded cursor-pointer">
<span className="iconify" data-icon="lucide:folder" data-width="14"></span>
<span>Auth Service</span>
</div>

<div className="flex items-center justify-between px-2 py-1.5 text-xs bg-indigo-500/10 text-indigo-200 border border-indigo-500/20 rounded cursor-pointer">
<div className="flex items-center gap-2">
<span className="text-[10px] font-bold text-green-400">GET</span>
<span>/user/profile</span>
</div>
<div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]"></div>
</div>

<div className="flex items-center justify-between px-2 py-1.5 text-xs text-zinc-400 hover:bg-white/5 rounded cursor-pointer group/item">
<div className="flex items-center gap-2">
<span className="text-[10px] font-bold text-orange-400">POST</span>
<span>/auth/login</span>
</div>
<span className="iconify opacity-0 group-hover/item:opacity-100" data-icon="lucide:more-horizontal" data-width="14"></span>
</div>
<div className="flex items-center justify-between px-2 py-1.5 text-xs text-zinc-400 hover:bg-white/5 rounded cursor-pointer group/item">
<div className="flex items-center gap-2">
<span className="text-[10px] font-bold text-blue-400">PUT</span>
<span>/settings/update</span>
</div>
</div>

<div className="flex items-center gap-2 px-2 py-1.5 text-xs text-zinc-400 hover:bg-white/5 rounded cursor-pointer mt-2">
<span className="iconify" data-icon="lucide:folder" data-width="14"></span>
<span>Billing API</span>
</div>
</div>

<div className="p-3 border-t border-white/5 bg-zinc-900/40">
<div className="flex items-center gap-2 text-xs text-zinc-400">
<span className="iconify" data-icon="lucide:git-branch" data-width="14"></span>
<span>main</span>
<span className="ml-auto flex h-2 w-2 relative">
<span className="absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75 animate-ping"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
</div>
</div>
</div>

<div className="flex-1 flex flex-col bg-zinc-950">

<div className="h-9 border-b border-white/5 flex items-center px-4 justify-between bg-zinc-900/10">
<div className="flex gap-4 text-xs">
<span className="text-zinc-100 border-b border-indigo-500 h-9 flex items-center">Response Body</span>
<span className="text-zinc-500 h-9 flex items-center hover:text-zinc-300 cursor-pointer">Headers</span>
<span className="text-zinc-500 h-9 flex items-center hover:text-zinc-300 cursor-pointer">Rules</span>
</div>
<div className="flex items-center gap-2">
<div className="px-2 py-0.5 rounded bg-zinc-800 border border-zinc-700 text-[10px] text-zinc-400">200 OK</div>
<div className="px-2 py-0.5 rounded bg-zinc-800 border border-zinc-700 text-[10px] text-zinc-400">145ms</div>
</div>
</div>

<div className="flex-1 p-6 font-mono text-sm leading-6 overflow-y-auto">
<pre><code><span className="text-zinc-500">// Simulating user profile response</span>
<span className="text-zinc-300">{</span>
  <span className="token-key">"id"</span><span className="text-zinc-500">:</span> <span className="token-string">"usr_8x92m01"</span><span className="text-zinc-300">,</span>
  <span className="token-key">"email"</span><span className="text-zinc-500">:</span> <span className="token-string">"alex.dev@mockstudio.com"</span><span className="text-zinc-300">,</span>
  <span className="token-key">"role"</span><span className="text-zinc-500">:</span> <span className="token-string">"admin"</span><span className="text-zinc-300">,</span>
  <span className="token-key">"features"</span><span className="text-zinc-500">:</span> <span className="text-zinc-300">{</span>
    <span className="token-key">"beta_access"</span><span className="text-zinc-500">:</span> <span className="token-bool">true</span><span className="text-zinc-300">,</span>
    <span className="token-key">"max_projects"</span><span className="text-zinc-500">:</span> <span className="token-number">50</span><span className="text-zinc-300">,</span>
    <span className="token-key">"notifications"</span><span className="text-zinc-500">:</span> <span className="text-zinc-300">[</span>
      <span className="text-zinc-300">{</span>
        <span className="token-key">"id"</span><span className="text-zinc-500">:</span> <span className="token-number">1</span><span className="text-zinc-300">,</span>
        <span className="token-key">"text"</span><span className="text-zinc-500">:</span> <span className="token-string">"Welcome to Mock Studio"</span>
      <span className="text-zinc-300">}</span>
    <span className="text-zinc-300">]</span>
  <span className="text-zinc-300">},</span>
  <span className="token-key">"verified"</span><span className="text-zinc-500">:</span> <span className="token-bool">true</span>
<span className="text-zinc-300">}</span></code></pre>
</div>
</div>

<div className="w-60 border-l border-white/5 bg-zinc-900/10 hidden lg:flex flex-col">
<div className="p-3 border-b border-white/5 text-xs font-medium text-zinc-400">
                            Variants
                        </div>
<div className="p-3 space-y-3">
<div className="bg-zinc-900 border border-zinc-800 rounded p-2.5 cursor-pointer ring-1 ring-indigo-500/50 shadow-lg shadow-indigo-500/10">
<div className="flex items-center justify-between mb-1">
<span className="text-xs text-white font-medium">Success</span>
<span className="iconify text-indigo-400" data-icon="lucide:check-circle-2" data-width="12"></span>
</div>
<p className="text-[10px] text-zinc-500">Standard 200 response</p>
</div>
<div className="bg-transparent border border-white/5 rounded p-2.5 hover:bg-white/5 cursor-pointer transition-colors group">
<div className="flex items-center justify-between mb-1">
<span className="text-xs text-zinc-400 group-hover:text-zinc-200">Unauthorized</span>
</div>
<p className="text-[10px] text-zinc-600">401 Error simulation</p>
</div>
<div className="bg-transparent border border-white/5 rounded p-2.5 hover:bg-white/5 cursor-pointer transition-colors group">
<div className="flex items-center justify-between mb-1">
<span className="text-xs text-zinc-400 group-hover:text-zinc-200">Server Error</span>
</div>
<p className="text-[10px] text-zinc-600">500 with delay</p>
</div>
</div>
<div className="mt-auto p-3 border-t border-white/5">
<div className="text-[10px] uppercase tracking-wider text-zinc-600 mb-2 font-semibold">Environment</div>
<div className="flex items-center justify-between text-xs text-zinc-300 bg-zinc-900 border border-zinc-800 rounded px-2 py-1.5 cursor-pointer">
<span>Local Development</span>
<span className="iconify" data-icon="lucide:chevron-down" data-width="12"></span>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="py-24 border-t border-white/5 bg-zinc-950 relative" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Everything you need to <br/>mock perfectly.</h2>
<p className="text-zinc-500 text-lg max-w-xl">No more hardcoding mock data. Manage states, delays, and errors without leaving your browser context.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 rounded-2xl border border-white/10 bg-zinc-900/20 p-8 relative overflow-hidden group hover:border-white/20 transition-colors">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6 text-indigo-400">
<span className="iconify" data-height="20" data-icon="lucide:activity" data-strokeWidth="1.5" data-width="20"></span>
</div>
<h3 className="text-xl font-semibold text-white mb-2 tracking-tight">Full Network Inspection</h3>
<p className="text-sm text-zinc-400 max-w-sm mb-8">View, intercept and modify requests on the fly. It's like the Network tab, but writeable.</p>

<div className="w-full h-32 bg-zinc-950 rounded-lg border border-white/5 overflow-hidden flex flex-col">
<div className="flex border-b border-white/5 text-[10px] text-zinc-500 py-2 px-4 bg-zinc-900/50">
<div className="w-1/4">Name</div>
<div className="w-1/4">Method</div>
<div className="w-1/4">Status</div>
<div className="w-1/4">Size</div>
</div>
<div className="flex border-b border-white/5 text-[11px] text-zinc-300 py-2 px-4 hover:bg-white/5 transition-colors cursor-default">
<div className="w-1/4 truncate">graphql</div>
<div className="w-1/4 text-zinc-400">POST</div>
<div className="w-1/4 text-green-400">200</div>
<div className="w-1/4 text-zinc-500">1.2kb</div>
</div>
<div className="flex border-b border-white/5 text-[11px] text-zinc-300 py-2 px-4 hover:bg-white/5 transition-colors cursor-default bg-indigo-500/10">
<div className="w-1/4 truncate">analytics</div>
<div className="w-1/4 text-zinc-400">POST</div>
<div className="w-1/4 text-yellow-400">Pending (Mock)</div>
<div className="w-1/4 text-zinc-500">-</div>
</div>
</div>
</div>
</div>

<div className="rounded-2xl border border-white/10 bg-zinc-900/20 p-8 relative overflow-hidden group hover:border-white/20 transition-colors">
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6 text-white">
<span className="iconify" data-height="20" data-icon="lucide:github" data-width="20"></span>
</div>
<h3 className="text-xl font-semibold text-white mb-2 tracking-tight">Git Sync</h3>
<p className="text-sm text-zinc-400 mb-6">Commit your mocks to your repo. Share configs with your team instantly.</p>
<div className="flex items-center gap-3 text-xs bg-zinc-950 p-3 rounded border border-white/5 font-mono text-zinc-400">
<span className="text-indigo-400">$</span> git push origin mocks
                        </div>
</div>
</div>

<div className="rounded-2xl border border-white/10 bg-zinc-900/20 p-8 relative overflow-hidden group hover:border-white/20 transition-colors">
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6 text-pink-400">
<span className="iconify" data-height="20" data-icon="lucide:layers" data-width="20"></span>
</div>
<h3 className="text-xl font-semibold text-white mb-2 tracking-tight">Scenario Variants</h3>
<p className="text-sm text-zinc-400 mb-6">Switch between "Happy Path", "Error State", or "Loading" with one click.</p>
<div className="space-y-2">
<div className="flex items-center justify-between p-2 rounded bg-zinc-950 border border-white/5">
<span className="text-xs text-zinc-300">Payment Failed</span>
<div className="w-8 h-4 bg-zinc-800 rounded-full relative">
<div className="w-4 h-4 bg-zinc-500 rounded-full absolute left-0 top-0"></div>
</div>
</div>
<div className="flex items-center justify-between p-2 rounded bg-zinc-950 border border-indigo-500/30">
<span className="text-xs text-white">Payment Success</span>
<div className="w-8 h-4 bg-indigo-900 rounded-full relative">
<div className="w-4 h-4 bg-indigo-500 rounded-full absolute right-0 top-0 shadow-lg shadow-indigo-500/50"></div>
</div>
</div>
</div>
</div>
</div>

<div className="md:col-span-2 rounded-2xl border border-white/10 bg-zinc-900/20 p-8 relative overflow-hidden group hover:border-white/20 transition-colors flex flex-col justify-between">
<div className="relative z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
<div>
<div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6 text-emerald-400">
<span className="iconify" data-height="20" data-icon="lucide:file-json" data-width="20"></span>
</div>
<h3 className="text-xl font-semibold text-white mb-2 tracking-tight">Universal Import/Export</h3>
<p className="text-sm text-zinc-400 max-w-sm">Import HAR files, Postman collections, or OpenAPI specs. Export to JSON to share manually.</p>
</div>
<div className="flex gap-3">
<div className="px-4 py-2 rounded bg-zinc-950 border border-white/5 flex items-center gap-2 text-xs text-zinc-300">
<span className="iconify" data-icon="lucide:upload-cloud" data-width="14"></span> Import
                            </div>
<div className="px-4 py-2 rounded bg-zinc-950 border border-white/5 flex items-center gap-2 text-xs text-zinc-300">
<span className="iconify" data-icon="lucide:download" data-width="14"></span> Export
                            </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-black">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row items-center gap-16">
<div className="md:w-1/2">
<div className="text-indigo-500 font-medium text-sm mb-4 tracking-wide uppercase">Workflow</div>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6">Initialize in seconds.<br/>Scale indefinitely.</h2>
<p className="text-zinc-400 text-lg leading-relaxed mb-8">
                        Mock Studio detects your project type and sets up the environment automatically. From folder organization to environment variables, we handle the boilerplate.
                    </p>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-zinc-300">
<span className="w-5 h-5 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400">
<span className="iconify" data-icon="lucide:check" data-width="12"></span>
</span>
                            Auto-folder structure generation
                        </li>
<li className="flex items-center gap-3 text-zinc-300">
<span className="w-5 h-5 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400">
<span className="iconify" data-icon="lucide:check" data-width="12"></span>
</span>
                            Dynamic route matching
                        </li>
<li className="flex items-center gap-3 text-zinc-300">
<span className="w-5 h-5 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400">
<span className="iconify" data-icon="lucide:check" data-width="12"></span>
</span>
                            Zero-config proxy setup
                        </li>
</ul>
</div>
<div className="md:w-1/2 w-full">
<div className="rounded-xl border border-white/10 bg-zinc-900/40 p-1">
<div className="rounded-lg bg-zinc-950 p-6 font-mono text-xs md:text-sm">
<div className="flex items-center gap-2 mb-4 text-zinc-500 border-b border-white/5 pb-2">
<span className="iconify" data-icon="lucide:terminal" data-width="14"></span>
<span>Terminal</span>
</div>
<div className="space-y-2">
<div className="flex">
<span className="text-green-400 mr-2">➜</span>
<span className="text-white">mock-studio init</span>
</div>
<div className="text-zinc-500 pl-4">Detected React project.</div>
<div className="text-zinc-500 pl-4">Scanning package.json... Done.</div>
<div className="text-zinc-500 pl-4">Created <span className="text-indigo-400">.mockstudio/</span> directory.</div>
<div className="flex mt-4">
<span className="text-green-400 mr-2">➜</span>
<span className="text-white">mock-studio start</span>
</div>
<div className="text-white pl-4"><span className="text-green-400">✔</span> Proxy running on port 3000</div>
<div className="text-indigo-400 pl-4 animate-pulse">Waiting for requests...</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 border-t border-white/5 relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-black to-black"></div>
<div className="max-w-3xl mx-auto px-6 text-center relative z-10">
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6">Ready to speed up <br/>development?</h2>
<p className="text-zinc-400 text-lg mb-10">Join 10,000+ developers mocking APIs with Mock Studio.</p>
<div className="flex justify-center gap-4">
<button className="bg-white text-black text-sm font-medium h-12 px-8 rounded-full hover:bg-zinc-200 transition-all flex items-center gap-2">
<span className="iconify" data-height="18" data-icon="lucide:chrome" data-width="18"></span>
                    Add to Chrome
                </button>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-black py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-zinc-800 flex items-center justify-center text-white">
<span className="iconify" data-height="12" data-icon="lucide:zap" data-width="12"></span>
</div>
<span className="text-zinc-300 font-semibold tracking-tight text-sm">Mock Studio</span>
</div>
<div className="flex gap-6 text-sm text-zinc-500">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="#">GitHub</a>
</div>
<div className="text-xs text-zinc-600">
                © 2023 Mock Studio Inc.
            </div>
</div>
</footer>

    </>
  );
}
