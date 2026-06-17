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
      

<div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[80%] max-w-[1000px] h-[600px] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none z-0"></div>

<nav className="sticky top-0 z-50 backdrop-blur-xl border-b border-white/5 bg-[#050505]/60">
<div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="font-semibold text-base tracking-tighter text-white" href="#">SYNAPSE</a>
<div className="hidden md:flex items-center gap-6 text-sm font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#">Product</a>
<a className="hover:text-white transition-colors" href="#">Templates</a>
<a className="hover:text-white transition-colors" href="#">Customers</a>
<a className="hover:text-white transition-colors" href="#">Pricing</a>
</div>
</div>
<div className="flex items-center gap-5">
<a className="text-sm font-medium text-neutral-400 hover:text-white transition-colors hidden sm:block" href="#">Log in</a>
<a className="h-8 px-4 inline-flex items-center justify-center text-xs font-medium bg-white text-black rounded-md hover:bg-neutral-200 transition-colors shadow-sm" href="#">
                    Start Building
                </a>
</div>
</div>
</nav>

<section className="relative pt-24 pb-20 z-10 flex flex-col items-center text-center px-6">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-neutral-300 mb-8 backdrop-blur-sm">
<span className="flex h-1.5 w-1.5 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.8)]"></span>
            Synapse AI v2.0 is live
        </div>
<h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-white mb-6 max-w-4xl leading-[1.1]">
            Build applications <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">at the speed of thought.</span>
</h1>
<p className="text-base md:text-lg text-neutral-400 max-w-2xl mb-10 font-normal leading-relaxed">
            The visual development platform for modern teams. Design, build, and scale production-ready web apps without managing infrastructure.
        </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<a className="h-12 px-8 w-full sm:w-auto inline-flex items-center justify-center text-sm font-medium bg-white text-black rounded-lg hover:bg-neutral-200 transition-colors gap-2 shadow-[0_0_20px_-5px_rgba(255,255,255,0.2)]" href="#">
                Start for free
                <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="h-12 px-8 w-full sm:w-auto inline-flex items-center justify-center text-sm font-medium bg-neutral-900 border border-white/10 text-white rounded-lg hover:bg-neutral-800 transition-colors gap-2" href="#">
<iconify-icon className="text-lg" icon="solar:play-circle-linear" strokeWidth="1.5"></iconify-icon>
                View Demo
            </a>
</div>
</section>

<section className="relative max-w-6xl mx-auto px-6 pb-32 z-10">
<div className="rounded-xl border border-white/10 bg-[#0a0a0a] shadow-2xl overflow-hidden flex flex-col ring-1 ring-white/5">

<div className="h-12 border-b border-white/5 flex items-center px-4 justify-between bg-[#080808]">
<div className="flex gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-neutral-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-neutral-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-neutral-700"></div>
</div>
<div className="bg-neutral-900/50 border border-white/5 rounded text-xs font-medium text-neutral-500 px-3 py-1 flex items-center gap-2">
<iconify-icon icon="solar:lock-keyhole-linear"></iconify-icon>
                    synapse.build/project
                </div>
<div className="flex items-center gap-3 text-neutral-500">
<iconify-icon className="text-sm hover:text-white cursor-pointer" icon="solar:minimize-square-3-linear"></iconify-icon>
<iconify-icon className="text-sm hover:text-white cursor-pointer" icon="solar:sidebar-minimalistic-linear"></iconify-icon>
</div>
</div>

<div className="flex flex-1 min-h-[500px]">

<div className="w-56 border-r border-white/5 p-4 flex flex-col gap-6 bg-[#080808] hidden md:flex">
<div>
<div className="text-xs font-medium text-neutral-500 uppercase tracking-widest mb-3">Elements</div>
<div className="space-y-1">
<div className="p-2 rounded bg-white/5 border border-white/5 text-xs font-medium text-neutral-300 flex items-center gap-2 cursor-pointer">
<iconify-icon icon="solar:code-square-linear"></iconify-icon> Container
                            </div>
<div className="p-2 rounded text-xs font-medium text-neutral-400 hover:bg-white/5 flex items-center gap-2 cursor-pointer transition-colors">
<iconify-icon icon="solar:text-square-linear"></iconify-icon> Typography
                            </div>
<div className="p-2 rounded text-xs font-medium text-neutral-400 hover:bg-white/5 flex items-center gap-2 cursor-pointer transition-colors">
<iconify-icon icon="solar:mouse-circle-linear"></iconify-icon> Buttons
                            </div>
<div className="p-2 rounded text-xs font-medium text-neutral-400 hover:bg-white/5 flex items-center gap-2 cursor-pointer transition-colors">
<iconify-icon icon="solar:gallery-linear"></iconify-icon> Media
                            </div>
</div>
</div>
<div>
<div className="text-xs font-medium text-neutral-500 uppercase tracking-widest mb-3">Layers</div>
<div className="space-y-1 pl-2 border-l border-white/5 ml-2 text-xs text-neutral-400">
<div className="py-1 flex items-center gap-2"><iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon> Hero Section</div>
<div className="py-1 pl-4 flex items-center gap-2 text-indigo-400"><iconify-icon icon="solar:document-text-linear"></iconify-icon> Heading</div>
<div className="py-1 pl-4 flex items-center gap-2"><iconify-icon icon="solar:document-text-linear"></iconify-icon> Subtitle</div>
<div className="py-1 pl-4 flex items-center gap-2"><iconify-icon icon="solar:mouse-circle-linear"></iconify-icon> CTA Group</div>
</div>
</div>
</div>

<div className="flex-1 bg-[#030303] bg-grid relative flex flex-col items-center justify-center p-8 overflow-hidden">

<div className="absolute top-4 flex gap-2 z-10 bg-[#0a0a0a] border border-white/10 rounded-md p-1 shadow-lg">
<div className="w-8 h-8 rounded hover:bg-white/10 flex items-center justify-center text-neutral-400 cursor-pointer"><iconify-icon icon="solar:monitor-linear"></iconify-icon></div>
<div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center text-white cursor-pointer"><iconify-icon icon="solar:tablet-linear"></iconify-icon></div>
<div className="w-8 h-8 rounded hover:bg-white/10 flex items-center justify-center text-neutral-400 cursor-pointer"><iconify-icon icon="solar:smartphone-linear"></iconify-icon></div>
</div>

<div className="relative w-full max-w-md bg-black border border-indigo-500/30 rounded-lg p-8 shadow-[0_0_40px_-10px_rgba(99,102,241,0.15)] ring-1 ring-indigo-500/20">

<div className="absolute -top-[1px] -left-[1px] -right-[1px] -bottom-[1px] border border-indigo-500 pointer-events-none rounded-lg">
<div className="absolute -top-2 -left-2 w-2 h-2 bg-indigo-500 rounded-sm"></div>
<div className="absolute -top-2 -right-2 w-2 h-2 bg-indigo-500 rounded-sm"></div>
<div className="absolute -bottom-2 -left-2 w-2 h-2 bg-indigo-500 rounded-sm"></div>
<div className="absolute -bottom-2 -right-2 w-2 h-2 bg-indigo-500 rounded-sm"></div>
<div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-indigo-500 text-white text-[10px] px-2 py-0.5 rounded font-medium">Hero Container</div>
</div>
<div className="w-10 h-10 rounded-md bg-gradient-to-br from-neutral-800 to-neutral-900 border border-white/10 flex items-center justify-center mb-5">
<iconify-icon className="text-white text-lg" icon="solar:cpu-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-white mb-3">Next-Gen Architecture</h3>
<p className="text-sm text-neutral-400 mb-6 line-clamp-2">Leverage edge computing and serverless databases to deliver lightning-fast experiences to your users globally.</p>
<div className="h-9 w-fit px-4 rounded bg-white text-black text-xs font-medium flex items-center cursor-pointer">Explore Docs</div>
</div>
</div>

<div className="w-64 border-l border-white/5 p-4 flex flex-col gap-5 bg-[#080808] hidden lg:flex overflow-y-auto hide-scrollbar">
<div className="flex items-center justify-between border-b border-white/5 pb-3">
<span className="text-xs font-medium text-white">Design</span>
<span className="text-xs text-neutral-500">Settings</span>
</div>

<div className="space-y-4">

<div>
<span className="text-[10px] font-medium text-neutral-500 uppercase tracking-wider block mb-2">Layout</span>
<div className="grid grid-cols-3 gap-1 bg-neutral-900 p-1 rounded border border-white/5">
<div className="h-7 rounded bg-neutral-800 flex items-center justify-center text-white cursor-pointer"><iconify-icon icon="solar:align-left-linear"></iconify-icon></div>
<div className="h-7 rounded hover:bg-neutral-800 flex items-center justify-center text-neutral-500 cursor-pointer"><iconify-icon icon="solar:align-horizontal-center-linear"></iconify-icon></div>
<div className="h-7 rounded hover:bg-neutral-800 flex items-center justify-center text-neutral-500 cursor-pointer"><iconify-icon icon="solar:align-right-linear"></iconify-icon></div>
</div>
</div>

<div>
<div className="flex justify-between text-xs text-neutral-300 mb-1.5">
<span>Padding</span>
<span className="text-neutral-500">32px</span>
</div>
<div className="relative h-1.5 bg-neutral-900 rounded-full overflow-hidden border border-white/5">
<div className="absolute left-0 top-0 bottom-0 w-[40%] bg-indigo-500"></div>
</div>
</div>

<div>
<span className="text-[10px] font-medium text-neutral-500 uppercase tracking-wider block mb-2">Border</span>
<div className="h-8 rounded border border-white/10 bg-neutral-900 flex items-center justify-between px-2.5 text-xs text-neutral-300 cursor-pointer hover:border-white/20 transition-colors">
<div className="flex items-center gap-2">
<div className="w-3 h-0.5 bg-neutral-500"></div>
                                    Solid
                                </div>
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<div className="flex gap-2 mt-2">
<div className="h-8 flex-1 rounded border border-white/10 bg-neutral-900 flex items-center justify-center text-xs text-neutral-300">1px</div>
<div className="h-8 flex-1 rounded border border-white/10 bg-neutral-900 flex items-center justify-center text-xs text-neutral-300 gap-1"><div className="w-2 h-2 rounded-full bg-indigo-500/30 border border-indigo-500"></div></div>
</div>
</div>

<div>
<span className="text-[10px] font-medium text-neutral-500 uppercase tracking-wider block mb-2">Effects</span>
<div className="flex items-center justify-between bg-neutral-900 border border-white/5 rounded px-2.5 py-2">
<span className="text-xs text-neutral-300">Backdrop Blur</span>
<div className="w-7 h-4 bg-indigo-500 rounded-full relative cursor-pointer">
<div className="w-3 h-3 bg-white rounded-full absolute top-0.5 right-0.5 shadow-sm"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 relative bg-[#030303]">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">A complete toolkit for the modern web.</h2>
<p className="text-sm md:text-base text-neutral-400 max-w-xl">Everything you need to go from idea to production. Powerful primitives wrapped in an intuitive interface.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[280px]">

<div className="md:col-span-2 rounded-2xl border border-white/5 bg-neutral-900/20 p-8 flex flex-col relative overflow-hidden group hover:border-white/10 transition-colors">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-auto relative z-10">
<iconify-icon className="text-lg text-neutral-300" icon="solar:code-scan-linear"></iconify-icon>
</div>
<div className="relative z-10 mt-8 w-full md:w-3/4">
<h3 className="text-xl font-medium tracking-tight text-white mb-2">Clean Code Export</h3>
<p className="text-sm text-neutral-400 leading-relaxed">No lock-in. Export semantic HTML, modern CSS, or full React components anytime. Synapse writes code like a senior engineer.</p>
</div>

<div className="absolute right-0 bottom-0 translate-y-1/4 translate-x-1/4 w-64 h-64 bg-neutral-950 border border-white/5 rounded-tl-xl p-4 font-mono text-[10px] text-neutral-600 hidden sm:block shadow-2xl group-hover:-translate-y-4 group-hover:-translate-x-4 transition-transform duration-500">
<div className="text-indigo-400 mb-2">import { Box } from '@synapse/ui'</div>
<div className="mb-1">export const Hero = () =&gt; (</div>
<div className="pl-2 mb-1">&lt;Box className="flex flex-col gap-4"&gt;</div>
<div className="pl-4 text-white/50 mb-1">&lt;h1 className="text-4xl font-bold"&gt;</div>
<div className="pl-6 text-white/30 mb-1">Welcome back</div>
<div className="pl-4 text-white/50 mb-1">&lt;/h1&gt;</div>
<div className="pl-2 mb-1">&lt;/Box&gt;</div>
<div>)</div>
</div>
</div>

<div className="rounded-2xl border border-white/5 bg-neutral-900/20 p-8 flex flex-col relative overflow-hidden group hover:border-white/10 transition-colors">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-auto relative z-10">
<iconify-icon className="text-lg text-neutral-300" icon="solar:server-square-linear"></iconify-icon>
</div>
<div className="relative z-10 mt-8">
<h3 className="text-xl font-medium tracking-tight text-white mb-2">Edge Deployment</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Push to production in seconds. Global edge caching ensures sub-50ms load times worldwide.</p>
</div>
</div>

<div className="rounded-2xl border border-white/5 bg-neutral-900/20 p-8 flex flex-col relative overflow-hidden group hover:border-white/10 transition-colors">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-auto relative z-10">
<iconify-icon className="text-lg text-neutral-300" icon="solar:magic-stick-3-linear"></iconify-icon>
</div>
<div className="relative z-10 mt-8">
<h3 className="text-xl font-medium tracking-tight text-white mb-2">AI Copilot</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Describe your component in plain English and watch it appear on the canvas instantly.</p>
</div>
</div>

<div className="md:col-span-2 rounded-2xl border border-white/5 bg-neutral-900/20 p-8 flex flex-col relative overflow-hidden group hover:border-white/10 transition-colors">
<div className="absolute inset-0 bg-gradient-to-tl from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-auto relative z-10">
<iconify-icon className="text-lg text-neutral-300" icon="solar:database-linear"></iconify-icon>
</div>
<div className="relative z-10 mt-8 w-full md:w-1/2">
<h3 className="text-xl font-medium tracking-tight text-white mb-2">Visual Database</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Define schemas, manage relationships, and edit data in a spreadsheet-like interface. Fully integrated with your UI.</p>
</div>

<div className="absolute right-6 bottom-6 top-6 w-[40%] hidden sm:flex flex-col gap-2 relative z-0">
<div className="h-8 w-full bg-neutral-950 border border-white/5 rounded flex items-center px-3 text-[10px] text-neutral-500 gap-4 opacity-50">
<span className="w-1/3">id</span><span className="w-1/3">name</span><span>email</span>
</div>
<div className="h-8 w-full bg-neutral-900/50 border border-white/10 rounded flex items-center px-3 text-[10px] text-neutral-300 gap-4">
<span className="w-1/3 text-indigo-400">1</span><span className="w-1/3">Alice V.</span><span>alice@example.com</span>
</div>
<div className="h-8 w-full bg-neutral-900/50 border border-white/10 rounded flex items-center px-3 text-[10px] text-neutral-300 gap-4">
<span className="w-1/3 text-indigo-400">2</span><span className="w-1/3">Bob C.</span><span>bob@example.com</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#050505]">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-20">
<h2 className="text-3xl font-semibold tracking-tight text-white mb-4">How it works</h2>
</div>
<div className="relative border-l border-white/10 ml-4 md:ml-0 md:border-none space-y-12 md:space-y-0 md:grid md:grid-cols-3 md:gap-8">

<div className="relative pl-8 md:pl-0">
<div className="absolute md:static left-[-16px] md:left-auto top-0 w-8 h-8 rounded-full bg-[#050505] border border-white/20 flex items-center justify-center text-xs font-medium text-white mb-6 z-10 shadow-[0_0_15px_rgba(255,255,255,0.1)]">1</div>
<h4 className="text-lg font-medium tracking-tight text-white mb-2">Design</h4>
<p className="text-sm text-neutral-400 leading-relaxed">Drag and drop unstyled HTML elements or pre-built Tailwind components onto the canvas.</p>
</div>

<div className="relative pl-8 md:pl-0 md:before:content-[''] md:before:absolute md:before:top-4 md:before:-left-[50%] md:before:w-full md:before:h-[1px] md:before:bg-gradient-to-r md:before:from-transparent md:before:via-white/10 md:before:to-transparent">
<div className="absolute md:static left-[-16px] md:left-auto top-0 w-8 h-8 rounded-full bg-[#050505] border border-white/20 flex items-center justify-center text-xs font-medium text-white mb-6 z-10 shadow-[0_0_15px_rgba(255,255,255,0.1)]">2</div>
<h4 className="text-lg font-medium tracking-tight text-white mb-2">Connect</h4>
<p className="text-sm text-neutral-400 leading-relaxed">Bind UI elements to your database, set up authentication, and write custom logic visually.</p>
</div>

<div className="relative pl-8 md:pl-0 md:before:content-[''] md:before:absolute md:before:top-4 md:before:-left-[50%] md:before:w-full md:before:h-[1px] md:before:bg-gradient-to-r md:before:from-transparent md:before:via-white/10 md:before:to-transparent">
<div className="absolute md:static left-[-16px] md:left-auto top-0 w-8 h-8 rounded-full bg-white flex items-center justify-center text-xs font-medium text-black mb-6 z-10 shadow-[0_0_20px_rgba(255,255,255,0.3)]">3</div>
<h4 className="text-lg font-medium tracking-tight text-white mb-2">Ship</h4>
<p className="text-sm text-neutral-400 leading-relaxed">Click deploy. Your app is instantly available globally on our secure edge infrastructure.</p>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden border-t border-white/5 bg-[#030303]">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[300px] bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-3xl mx-auto px-6 text-center relative z-10">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">Stop coding boilerplate.</h2>
<p className="text-base text-neutral-400 mb-10 max-w-xl mx-auto">Join the next generation of builders creating faster, more scalable applications with Synapse.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="h-12 px-8 inline-flex items-center justify-center text-sm font-medium bg-white text-black rounded-lg hover:bg-neutral-200 transition-colors gap-2 w-full sm:w-auto" href="#">
                    Start Building Free
                    <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<footer className="border-t border-white/5 py-12 bg-[#050505]">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="font-semibold text-sm tracking-tighter text-white">SYNAPSE</div>
<div className="flex gap-6 text-xs text-neutral-500 font-medium">
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="#">GitHub</a>
<a className="hover:text-white transition-colors" href="#">Discord</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
</div>
<div className="text-xs text-neutral-600">
                © 2024 Synapse. All rights reserved.
            </div>
</div>
</footer>

    </>
  );
}
