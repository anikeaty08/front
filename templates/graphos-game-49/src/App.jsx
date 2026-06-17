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



      document.addEventListener('DOMContentLoaded', () => {
        const observerOptions = {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target);
            }
          });
        }, observerOptions);

        document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));
      });
    
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
      

<div className="fixed top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-violet-900/20 blur-[150px] pointer-events-none mix-blend-screen z-0"></div>
<div className="fixed bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-fuchsia-900/10 blur-[150px] pointer-events-none mix-blend-screen z-0"></div>

<nav className="sticky top-0 z-50 bg-[#050505]/80 backdrop-blur-xl border-b border-white/5">
<div className="max-w-[1440px] mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex-shrink-0">
<a className="text-lg font-semibold tracking-tight text-white flex items-center gap-1" href="#">
            GraphOS
            <span className="opacity-80 text-fuchsia-500">_</span>
</a>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-gray-400 hover:text-white transition-colors" href="#">Platform</a>
<a className="text-sm font-medium text-gray-400 hover:text-white transition-colors" href="#">Engine SDKs</a>
<a className="text-sm font-medium text-gray-400 hover:text-white transition-colors" href="#">Docs</a>
<a className="text-sm font-medium text-gray-400 hover:text-white transition-colors" href="#">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="text-sm font-medium text-gray-300 hover:text-white transition-colors hidden sm:block" href="#">Log in</a>
<a className="bg-white text-black px-4 py-1.5 rounded-full text-sm font-semibold hover:bg-gray-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.1)]" href="#">
            Start Building
          </a>
</div>
</div>
</nav>
<main className="sm:px-6 max-w-[1440px] mr-auto ml-auto pr-4 pb-20 pl-4 relative z-10">

<div className="relative w-full rounded-[32px] sm:rounded-[48px] h-auto lg:h-[640px] overflow-hidden mt-6 border border-white/10 isolate group bg-[#0A0514]">
<div className="absolute inset-0 z-0 bg-grid-small opacity-30 mix-blend-overlay"></div>
<div className="absolute top-[20%] right-[10%] w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-fuchsia-600/20 to-violet-600/20 blur-[100px] opacity-60 mix-blend-screen"></div>
<div className="absolute inset-0 flex flex-col lg:flex-row items-center justify-between z-10 w-full h-full">

<div className="flex flex-col justify-center items-start max-w-2xl lg:max-w-xl z-20 pt-20 pb-12 px-8 sm:px-12 lg:pl-20 lg:pt-0">
<div className="animate-fade-in-up mb-6">
<div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-3 py-1">
<div className="w-2 h-2 rounded-full bg-fuchsia-500 animate-pulse"></div>
<span className="text-xs font-medium text-gray-300 tracking-wide">v3.0 Engine SDK Released</span>
</div>
</div>
<h1 className="animate-fade-in-up delay-100 text-4xl sm:text-5xl md:text-6xl leading-[1.1] font-semibold text-white tracking-tighter mb-6">
              Visual logic for
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-violet-400">complex games.</span>
</h1>
<p className="animate-fade-in-up delay-200 text-base sm:text-lg text-gray-400 leading-relaxed font-normal mb-8 max-w-md">
              Design quests, skill trees, and dialogue using an extensible node editor. Compile directly to JSON for seamless engine integration.
            </p>
<div className="animate-fade-in-up delay-300 flex flex-wrap items-center gap-4">
<a className="inline-flex items-center justify-center gap-2 bg-white text-black px-6 py-2.5 rounded-full font-semibold text-sm shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:shadow-[0_0_40px_rgba(255,255,255,0.25)] transition-all" href="#">
                Read the Docs
              </a>
<a className="inline-flex items-center justify-center gap-2 bg-white/5 text-white border border-white/10 px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-white/10 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:code-circle-linear"></iconify-icon>
                View API
              </a>
</div>
</div>

<div className="w-full lg:w-1/2 h-[400px] lg:h-full relative overflow-hidden bg-black/40 border-t lg:border-t-0 lg:border-l border-white/10">
<div className="absolute inset-0 bg-dots"></div>

<div className="absolute inset-0 w-full h-full [transform:scale(0.85)_translate(-5%,10%)] sm:[transform:scale(1)_translate(0,0)] transition-transform">

<svg className="absolute inset-0 w-full h-full z-0 pointer-events-none" viewbox="0 0 600 500">

<path className="animate-flow" d="M 200 120 C 260 120, 260 200, 320 200" fill="none" stroke="#d946ef" strokeLinecap="round" strokeWidth="2"></path>
<path d="M 200 120 C 260 120, 260 200, 320 200" fill="none" stroke="rgba(217,70,239,0.2)" strokeLinecap="round" strokeWidth="6"></path>

<path d="M 480 180 C 520 180, 520 120, 560 120" fill="none" stroke="#4b5563" stroke-dasharray="4 4" strokeWidth="2"></path>

<path d="M 480 220 C 520 220, 520 280, 560 280" fill="none" stroke="#4b5563" strokeWidth="2"></path>
</svg>

<div className="absolute top-[80px] left-[40px] w-[160px] bg-[#12081e] border border-fuchsia-500/30 rounded-lg shadow-xl z-10 flex flex-col backdrop-blur-sm">
<div className="px-3 py-2 border-b border-white/10 flex items-center gap-2 bg-gradient-to-r from-fuchsia-500/10 to-transparent rounded-t-lg">
<iconify-icon className="text-fuchsia-400 text-sm" icon="solar:bolt-linear"></iconify-icon>
<span className="text-xs font-semibold text-gray-200 tracking-wide">On Quest Start</span>
</div>
<div className="p-3 relative bg-black/40 rounded-b-lg">
<div className="text-[10px] text-gray-500 mb-1">Trigger ID</div>
<div className="text-xs text-fuchsia-300 font-mono bg-white/5 px-2 py-1 rounded inline-block">Q_Main_01</div>

<div className="absolute -right-[5px] top-1/2 -translate-y-1/2 w-[10px] h-[10px] bg-[#12081e] border-2 border-fuchsia-500 rounded-full shadow-[0_0_10px_rgba(217,70,239,0.5)]"></div>
</div>
</div>

<div className="absolute top-[160px] left-[320px] w-[160px] bg-[#0a0a0a] border border-white/10 rounded-lg shadow-xl z-10 flex flex-col">
<div className="px-3 py-2 border-b border-white/10 flex items-center gap-2 bg-white/[0.02]">
<iconify-icon className="text-gray-400 text-sm" icon="solar:git-branch-linear"></iconify-icon>
<span className="text-xs font-semibold text-gray-200 tracking-wide">Check State</span>
</div>
<div className="p-3 relative flex flex-col gap-3">

<div className="absolute -left-[5px] top-[25px] w-[10px] h-[10px] bg-[#0a0a0a] border-2 border-fuchsia-500 rounded-full"></div>
<div className="flex items-center justify-between">
<span className="text-[10px] text-gray-500">Condition</span>
<span className="text-[10px] font-mono text-gray-300 bg-white/10 px-1 rounded">Level &gt; 5</span>
</div>

<div className="flex items-center justify-end relative">
<span className="text-[10px] text-green-400 mr-2">True</span>
<div className="absolute -right-[17px] top-1/2 -translate-y-1/2 w-[10px] h-[10px] bg-[#0a0a0a] border-2 border-gray-600 rounded-full"></div>
</div>

<div className="flex items-center justify-end relative">
<span className="text-[10px] text-red-400 mr-2">False</span>
<div className="absolute -right-[17px] top-1/2 -translate-y-1/2 w-[10px] h-[10px] bg-[#0a0a0a] border-2 border-gray-600 rounded-full"></div>
</div>
</div>
</div>

<div className="absolute top-[100px] left-[560px] w-[150px] bg-[#0a0a0a] border border-white/10 rounded-lg shadow-xl z-10 opacity-70">
<div className="px-3 py-2 border-b border-white/10 flex items-center gap-2">
<iconify-icon className="text-gray-400 text-sm" icon="solar:box-linear"></iconify-icon>
<span className="text-xs font-semibold text-gray-200 tracking-wide">Grant Item</span>
</div>
<div className="p-3 relative">

<div className="absolute -left-[5px] top-1/2 -translate-y-1/2 w-[10px] h-[10px] bg-[#0a0a0a] border-2 border-gray-600 rounded-full"></div>
<div className="text-[10px] text-gray-500">Item_Sword_01</div>
</div>
</div>

<div className="absolute top-[260px] left-[560px] w-[150px] bg-[#0a0a0a] border border-white/10 rounded-lg shadow-xl z-10">
<div className="px-3 py-2 border-b border-white/10 flex items-center gap-2">
<iconify-icon className="text-gray-400 text-sm" icon="solar:chat-round-line-linear"></iconify-icon>
<span className="text-xs font-semibold text-gray-200 tracking-wide">Play Dialogue</span>
</div>
<div className="p-3 relative">

<div className="absolute -left-[5px] top-1/2 -translate-y-1/2 w-[10px] h-[10px] bg-[#0a0a0a] border-2 border-gray-500 rounded-full"></div>
<div className="text-[10px] text-gray-500">DLG_Reject_Level</div>
</div>
</div>

<div className="absolute bottom-4 left-4 bg-[#0a0a0a] border border-white/10 rounded-lg p-1.5 flex gap-1 z-20 shadow-lg">
<button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 rounded transition-colors"><iconify-icon icon="solar:add-circle-linear"></iconify-icon></button>
<button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 rounded transition-colors"><iconify-icon icon="solar:minus-circle-linear"></iconify-icon></button>
<div className="w-px h-8 bg-white/10 mx-1"></div>
<button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 rounded transition-colors"><iconify-icon icon="solar:maximize-square-linear"></iconify-icon></button>
</div>
</div>
</div>
</div>
</div>

<div className="sm:mt-28 mt-20 pr-4 pl-4 relative">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-violet-900/10 blur-[100px] rounded-full pointer-events-none -z-10"></div>
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-white/5 pb-8 reveal-on-scroll">
<div className="max-w-2xl">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">
              SaaS logic infrastructure
            </h2>
<p className="text-base text-gray-400 mt-2 font-normal leading-relaxed">
              Decouple your narrative and game logic from hardcoded scripts. Manage state and execution paths via visual graphs.
            </p>
</div>
<div className="flex-shrink-0 mb-1">
<a className="group inline-flex items-center gap-2 text-sm font-medium text-fuchsia-400 hover:text-fuchsia-300 transition-colors" href="#">
              Read Architecture Specs
              <iconify-icon className="text-sm transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-[#0A0514] border border-white/5 rounded-[24px] p-8 hover:bg-white/[0.02] transition-colors reveal-on-scroll delay-100 relative overflow-hidden group">
<div className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center mb-6">
<iconify-icon className="text-lg text-white group-hover:text-fuchsia-400 transition-colors" icon="solar:sitemap-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white tracking-tight mb-2">Behavior Trees</h3>
<p className="text-sm text-gray-400 leading-relaxed">
              Construct complex AI behaviors and quest states using hierarchical state machines and condition evaluations.
            </p>
</div>
<div className="bg-[#0A0514] border border-white/5 rounded-[24px] p-8 hover:bg-white/[0.02] transition-colors reveal-on-scroll delay-200 relative overflow-hidden group">
<div className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center mb-6">
<iconify-icon className="text-lg text-white group-hover:text-violet-400 transition-colors" icon="solar:database-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white tracking-tight mb-2">Global State Management</h3>
<p className="text-sm text-gray-400 leading-relaxed">
              Track player decisions, inventory flags, and world context in a unified data store accessible by all nodes.
            </p>
</div>
<div className="bg-[#0A0514] border border-white/5 rounded-[24px] p-8 hover:bg-white/[0.02] transition-colors reveal-on-scroll delay-300 relative overflow-hidden group">
<div className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center mb-6">
<iconify-icon className="text-lg text-white group-hover:text-purple-400 transition-colors" icon="solar:code-scan-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white tracking-tight mb-2">Type-Safe Payloads</h3>
<p className="text-sm text-gray-400 leading-relaxed">
              Nodes emit strictly typed JSON configurations, ensuring your game engine interprets data without parsing errors.
            </p>
</div>
</div>
</div>

<div className="mt-24 sm:mt-32 px-4 sm:px-6 relative reveal-on-scroll">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
          Built for technical pipelines
        </h2>
<p className="text-base text-gray-400 mb-12 max-w-2xl">
          Designed for technical designers and engineers. Skip the manual boilerplate and focus on building robust gameplay systems.
        </p>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:h-[450px]">

<div className="lg:col-span-5 flex flex-col justify-center space-y-3">
<div className="p-5 rounded-2xl bg-white/5 border border-white/10 cursor-pointer relative overflow-hidden group">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-fuchsia-500 rounded-l-2xl"></div>
<h4 className="text-base font-semibold text-white tracking-tight mb-1 flex items-center gap-2">
<iconify-icon className="text-fuchsia-400" icon="solar:bug-linear"></iconify-icon>
                Real-time Compilation
              </h4>
<p className="text-sm text-gray-400 ml-6">
                Graphs compile to optimized JSON payloads instantly. Errors are highlighted directly on invalid nodes.
              </p>
</div>
<div className="p-5 rounded-2xl border border-transparent hover:bg-white/[0.02] cursor-pointer transition-colors group">
<h4 className="text-base font-semibold text-gray-300 group-hover:text-white tracking-tight mb-1 flex items-center gap-2">
<iconify-icon className="text-gray-500 group-hover:text-gray-400" icon="solar:history-linear"></iconify-icon>
                Version Control Native
              </h4>
<p className="text-sm text-gray-500 group-hover:text-gray-400 ml-6 transition-colors">
                Data structures are designed to be diff-friendly in Git. Collaborate with multiple designers safely.
              </p>
</div>
<div className="p-5 rounded-2xl border border-transparent hover:bg-white/[0.02] cursor-pointer transition-colors group">
<h4 className="text-base font-semibold text-gray-300 group-hover:text-white tracking-tight mb-1 flex items-center gap-2">
<iconify-icon className="text-gray-500 group-hover:text-gray-400" icon="solar:plugin-linear"></iconify-icon>
                Custom Node Schemas
              </h4>
<p className="text-sm text-gray-500 group-hover:text-gray-400 ml-6 transition-colors">
                Define custom node types using our Schema Builder. Extend the editor to fit your game's unique mechanics.
              </p>
</div>
</div>

<div className="lg:col-span-7 bg-[#05030A] border border-white/10 rounded-2xl overflow-hidden flex flex-col shadow-2xl relative">
<div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/5 to-transparent pointer-events-none"></div>

<div className="h-12 border-b border-white/10 bg-white/[0.02] flex items-center px-4 justify-between">
<div className="flex items-center gap-2">
<iconify-icon className="text-gray-500" icon="solar:document-text-linear"></iconify-icon>
<span className="text-xs font-mono text-gray-400">quest_compiled.json</span>
</div>
<div className="flex gap-2">
<span className="text-[10px] font-medium px-2 py-0.5 rounded bg-green-500/10 text-green-400 border border-green-500/20">Valid</span>
</div>
</div>

<div className="p-6 overflow-x-auto text-sm font-mono leading-relaxed text-gray-300 flex-1 relative">
<div className="absolute left-0 top-0 bottom-0 w-12 bg-white/[0.02] border-r border-white/5 flex flex-col text-right pr-3 pt-6 text-gray-600 select-none text-xs">
<span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span><span>10</span><span>11</span><span>12</span><span>13</span>
</div>
<pre className="pl-10 m-0"><code className="language-json"><span className="text-purple-400">{</span>
  <span className="text-fuchsia-300">"graph_id"</span>: <span className="text-green-300">"q_main_01"</span>,
  <span className="text-fuchsia-300">"version"</span>: <span className="text-blue-300">3.0</span>,
  <span className="text-fuchsia-300">"entry_nodes"</span>: <span className="text-purple-400">[</span><span className="text-green-300">"node_start_1"</span><span className="text-purple-400">]</span>,
  <span className="text-fuchsia-300">"nodes"</span>: <span className="text-purple-400">{</span>
    <span className="text-fuchsia-300">"node_start_1"</span>: <span className="text-yellow-200">{</span>
      <span className="text-fuchsia-300">"type"</span>: <span className="text-green-300">"Trigger"</span>,
      <span className="text-fuchsia-300">"data"</span>: <span className="text-blue-200">{</span> <span className="text-fuchsia-300">"event"</span>: <span className="text-green-300">"OnInteract"</span> <span className="text-blue-200">}</span>,
      <span className="text-fuchsia-300">"next"</span>: <span className="text-purple-400">[</span><span className="text-green-300">"node_cond_1"</span><span className="text-purple-400">]</span>
    <span className="text-yellow-200">}</span>,
    <span className="text-gray-500 italic">// execution path branches automatically parsed</span>
  <span className="text-purple-400">}</span>
<span className="text-purple-400">}</span></code></pre>
</div>
</div>
</div>
</div>

<div className="mt-24 sm:mt-32 px-4 sm:px-6 relative reveal-on-scroll delay-100">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
            Engine Agnostic
          </h2>
<p className="text-base text-gray-400 font-normal">
            GraphOS exports logic to standard formats. Drop our lightweight C++, C#, or GDScript runtimes into your engine to interpret nodes instantly.
          </p>
</div>
<div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">

<div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center gap-4 hover:bg-white/5 hover:border-white/10 transition-all cursor-pointer group">
<div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
<span className="text-2xl font-serif font-bold italic">U</span>
</div>
<div className="text-center">
<h4 className="text-sm font-semibold text-white">Unreal Engine</h4>
<p className="text-xs text-gray-500 mt-1">C++ Plugin</p>
</div>
</div>

<div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center gap-4 hover:bg-white/5 hover:border-white/10 transition-all cursor-pointer group">
<div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl" icon="solar:box-minimalistic-linear"></iconify-icon>
</div>
<div className="text-center">
<h4 className="text-sm font-semibold text-white">Unity</h4>
<p className="text-xs text-gray-500 mt-1">C# Package</p>
</div>
</div>

<div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center gap-4 hover:bg-white/5 hover:border-white/10 transition-all cursor-pointer group">
<div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl" icon="solar:ghost-linear"></iconify-icon>
</div>
<div className="text-center">
<h4 className="text-sm font-semibold text-white">Godot</h4>
<p className="text-xs text-gray-500 mt-1">GDScript / C++</p>
</div>
</div>

<div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center gap-4 hover:bg-white/5 hover:border-white/10 transition-all cursor-pointer group">
<div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl" icon="solar:code-linear"></iconify-icon>
</div>
<div className="text-center">
<h4 className="text-sm font-semibold text-white">Custom Engine</h4>
<p className="text-xs text-gray-500 mt-1">REST API / JSON</p>
</div>
</div>
</div>
</div>

<div className="mt-24 sm:mt-32 relative reveal-on-scroll">
<div className="text-center mb-12">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">
            Trusted by technical designers
          </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-gradient-to-b from-[#10081c] to-[#0a0514] border border-white/10 rounded-2xl p-8 flex flex-col justify-between">
<div>
<div className="flex gap-1 text-fuchsia-500 mb-6">
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-gray-300 leading-relaxed mb-8">
                "GraphOS completely removed the bottleneck between our narrative team and engineers. Writing custom node schemas in C# took hours instead of weeks, and the JSON output is flawlessly parsed."
              </p>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gray-300 font-semibold text-sm">AT</div>
<div>
<p className="text-sm font-semibold text-white">Alex Tanner</p>
<p className="text-xs text-gray-500">Lead Programmer</p>
</div>
</div>
</div>

<div className="bg-gradient-to-b from-[#10081c] to-[#0a0514] border border-white/10 rounded-2xl p-8 flex flex-col justify-between">
<div>
<div className="flex gap-1 text-fuchsia-500 mb-6">
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-gray-300 leading-relaxed mb-8">
                "We use the state machine functionality to drive all enemy AI phases. Having a visual debugger to step through nodes while the engine runs has saved us countless hours of logging."
              </p>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gray-300 font-semibold text-sm">SJ</div>
<div>
<p className="text-sm font-semibold text-white">Sam Jenkins</p>
<p className="text-xs text-gray-500">Systems Designer</p>
</div>
</div>
</div>

<div className="bg-gradient-to-b from-[#10081c] to-[#0a0514] border border-white/10 rounded-2xl p-8 flex flex-col justify-between">
<div>
<div className="flex gap-1 text-fuchsia-500 mb-6">
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-gray-300 leading-relaxed mb-8">
                "The fact that it's Git-friendly is huge. Previous visual scripting tools generated binary blobs, but GraphOS structures JSON beautifully so our team can diff and merge logic files seamlessly."
              </p>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gray-300 font-semibold text-sm">MR</div>
<div>
<p className="text-sm font-semibold text-white">Maya Rossi</p>
<p className="text-xs text-gray-500">Technical Director</p>
</div>
</div>
</div>
</div>
</div>
<div className="relative mt-24 sm:mt-32">
<div className="absolute -inset-1 bg-gradient-to-r from-fuchsia-600/30 via-violet-600/30 to-purple-600/30 rounded-[44px] sm:rounded-[64px] blur-3xl opacity-60"></div>
<footer className="relative bg-[#080310] rounded-[40px] sm:rounded-[60px] overflow-hidden text-white shadow-2xl ring-1 ring-white/10 reveal-on-scroll">
<div className="absolute inset-0 bg-grid opacity-30"></div>
<div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-fuchsia-500/50 to-transparent"></div>
<div className="absolute -top-[300px] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b from-fuchsia-900/40 to-violet-900/20 blur-[120px] rounded-full pointer-events-none mix-blend-screen"></div>
<div className="px-8 py-16 sm:px-16 sm:py-24 relative z-10">
<div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-24">
<div className="max-w-sm">
<a className="text-xl font-semibold tracking-tight text-white flex items-center gap-1 mb-6" href="#">
                  GraphOS
                  <span className="text-fuchsia-500 drop-shadow-[0_0_8px_rgba(217,70,239,0.8)]">_</span>
</a>
<p className="text-gray-400 text-sm leading-relaxed mb-8 font-normal">
                  A powerful visual scripting system bridging the gap between narrative design and technical implementation.
                </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-fuchsia-500/20 hover:border-fuchsia-500/50 hover:text-fuchsia-300 hover:scale-110 transition-all text-gray-400 border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.02)] hover:shadow-[0_0_20px_rgba(217,70,239,0.2)]" href="#">
<iconify-icon className="text-base" icon="solar:programming-linear"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-fuchsia-500/20 hover:border-fuchsia-500/50 hover:text-fuchsia-300 hover:scale-110 transition-all text-gray-400 border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.02)] hover:shadow-[0_0_20px_rgba(217,70,239,0.2)]" href="#">
<iconify-icon className="text-base" icon="solar:code-circle-linear"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-fuchsia-500/20 hover:border-fuchsia-500/50 hover:text-fuchsia-300 hover:scale-110 transition-all text-gray-400 border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.02)] hover:shadow-[0_0_20px_rgba(217,70,239,0.2)]" href="#">
<iconify-icon className="text-base" icon="solar:monitor-linear"></iconify-icon>
</a>
</div>
</div>
<div className="grid grid-cols-2 sm:grid-cols-3 gap-10 flex-1">
<div>
<h4 className="font-medium text-white mb-6 text-sm">Platform</h4>
<ul className="space-y-4 text-sm text-gray-400 font-normal">
<li><a className="hover:text-fuchsia-400 transition-colors" href="#">Node Editor</a></li>
<li><a className="hover:text-fuchsia-400 transition-colors" href="#">State Management</a></li>
<li><a className="hover:text-fuchsia-400 transition-colors" href="#">Engine Exports</a></li>
<li><a className="hover:text-fuchsia-400 transition-colors" href="#">Integrations</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-white mb-6 text-sm">Resources</h4>
<ul className="space-y-4 text-sm text-gray-400 font-normal">
<li><a className="hover:text-fuchsia-400 transition-colors" href="#">Documentation</a></li>
<li><a className="hover:text-fuchsia-400 transition-colors" href="#">API Reference</a></li>
<li><a className="hover:text-fuchsia-400 transition-colors" href="#">Tutorials</a></li>
<li><a className="hover:text-fuchsia-400 transition-colors" href="#">Community Forum</a></li>
</ul>
</div>
<div className="col-span-2 sm:col-span-1">
<h4 className="font-medium text-white mb-6 text-sm">Stay updated</h4>
<div className="relative">
<input className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-fuchsia-500/50 focus:ring-1 focus:ring-fuchsia-500/50 transition-all backdrop-blur-sm" placeholder="developer@studio.com" type="email"/>
<button className="absolute right-1.5 top-1.5 p-1 bg-white text-black rounded-lg hover:bg-fuchsia-100 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.2)] flex items-center justify-center">
<iconify-icon className="text-sm" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
<div className="mt-20 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-6">
<p className="text-xs text-gray-500 font-normal">
                © 2024 GraphOS Studio. All rights reserved.
              </p>
<div className="flex gap-8 text-xs text-gray-500 font-medium">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>
</div>
</main>


    </>
  );
}
