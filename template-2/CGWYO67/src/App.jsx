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
      {

try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

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
      <div className="spline-container fixed top-0 w-full h-screen -z-10"><iframe frameborder="0" height="100%" src="https://my.spline.design/animatedgradientbackgroundforweb-uWFYyIpYVM3xYkd88RS2ewR8" width="100%"></iframe></div>

<div className="fixed inset-0 -z-10">

<div className="absolute inset-0 opacity-25">
<div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:24px_24px]"></div>
</div>

<div className="absolute -top-32 -left-32 h-[48rem] w-[48rem] rounded-full blur-3xl opacity-40 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.18),transparent_50%)]"></div>
<div className="absolute top-1/3 -right-40 h-[42rem] w-[42rem] rounded-full blur-3xl opacity-30 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.12),transparent_50%)]"></div>
<div className="absolute -bottom-40 left-1/4 h-[36rem] w-[36rem] rounded-full blur-3xl opacity-20 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.12),transparent_55%)]"></div>
</div>

<header className="fixed top-0 inset-x-0 z-50">
<nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="mt-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.5)]">
<div className="flex items-center justify-between px-4 sm:px-6 h-16">
<a className="flex items-center gap-3 group" href="/">
<div className="h-8 w-8 rounded-lg ring-1 ring-blue-500/40 bg-blue-500/10 grid place-items-center text-blue-400 font-semibold tracking-tight" style={{fontFamily: `'Geist', Inter, system-ui, -apple-system, Segoe UI, Roboto, 'Helvetica Neue', Arial, 'Noto Sans', 'Apple Color Emoji', 'Segoe UI Emoji'`}}>
                TR
              </div>
<span className="text-sm sm:text-base font-medium tracking-tight text-slate-200 group-hover:text-white transition-colors">TokenRing AI</span>
</a>
<div className="hidden md:flex items-center gap-1">
<a className="px-3 py-2 text-sm text-slate-300 hover:text-white rounded-md transition-colors" href="/">Home</a>
<a className="hover:text-white transition-colors text-sm text-slate-300 rounded-md pt-2 pr-3 pb-2 pl-3" href="/products">Products</a>
<a className="px-3 py-2 text-sm text-slate-300 hover:text-white rounded-md transition-colors" href="/about">About</a>
<a className="px-3 py-2 text-sm text-slate-300 hover:text-white rounded-md transition-colors" href="/contact">Contact</a>
</div>
<div className="hidden md:flex items-center gap-3">
<a className="px-3 py-2 text-sm rounded-md border border-white/10 bg-white/5 hover:bg-white/10 hover:border-blue-500/40 hover:ring-2 hover:ring-blue-500/30 transition-all" href="/products">Explore</a>
<a className="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-md bg-blue-500 text-white hover:bg-blue-400/90 hover:shadow-[0_0_0_3px_rgba(59,130,246,0.25)] transition-all" href="/sign-in">
<svg className="lucide lucide-log-in w-4 h-4" data-lucide="log-in" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg>
                Sign In
              </a>
</div>
<button aria-label="Open Menu" className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-white/5 hover:bg-white/10 hover:border-blue-500/40 hover:ring-2 hover:ring-blue-500/30 transition-all" id="menuBtn">
<svg className="lucide lucide-menu w-5 h-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg>
</button>
</div>
<div className="md:hidden hidden border-t border-white/10 px-4 sm:px-6 pb-4" id="mobileNav">
<div className="pt-3 grid gap-2">
<a className="px-3 py-2 rounded-md text-sm text-slate-300 hover:text-white hover:bg-white/5 transition-colors" href="/">Home</a>
<a className="px-3 py-2 rounded-md text-sm text-slate-300 hover:text-white hover:bg-white/5 transition-colors" href="/products">Products</a>
<a className="px-3 py-2 rounded-md text-sm text-slate-300 hover:text-white hover:bg-white/5 transition-colors" href="/about">About</a>
<a className="px-3 py-2 rounded-md text-sm text-slate-300 hover:text-white hover:bg-white/5 transition-colors" href="/contact">Contact</a>
<a className="mt-1 inline-flex items-center justify-center gap-2 px-3 py-2 text-sm rounded-md bg-blue-500 text-white hover:bg-blue-400/90 transition-colors" href="/sign-in">
<svg className="lucide lucide-log-in w-4 h-4" data-lucide="log-in" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg>
                Sign In
              </a>
</div>
</div>
</div>
</nav>
</header>

<section className="relative sm:pt-40 pt-36 pb-24">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
<div className="lg:col-span-6 space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-700 ease-out">
<span className="inline-flex items-center gap-2 rounded-full border border-blue-500/40 bg-blue-500/10 px-3 py-1 text-[11px] text-blue-300 tracking-tight">
<svg className="lucide lucide-sparkles w-3.5 h-3.5" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><circle cx="4" cy="20"></circle></svg>
              Enterprise-grade orchestration
            </span>
<h1 className="text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-white" style={{fontFamily: `'Geist', Inter, system-ui, -apple-system, Segoe UI, Roboto, 'Helvetica Neue', Arial`}}>
              Orchestrate AI Workflows with
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500">Intelligence</span>
</h1>
<p className="text-base sm:text-lg text-slate-300/90 max-w-2xl">
              TokenRing AI delivers multi-agent workflow orchestration, AI-powered development tools, and seamless remote collaboration—built for scale, reliability, and speed.
            </p>
<div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
<a className="inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm bg-blue-500 text-white hover:bg-blue-400/90 hover:shadow-[0_0_0_4px_rgba(59,130,246,0.2)] transition-all" href="/get-started">
                Get Started
                <svg className="lucide lucide-arrow-right w-4.5 h-4.5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</a>
<a className="inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm border border-white/10 bg-white/5 hover:bg-white/10 hover:border-blue-500/40 hover:ring-2 hover:ring-blue-500/30 transition-all" href="/products">
                Explore Products
                <svg className="lucide lucide-layout-grid w-4.5 h-4.5" data-lucide="layout-grid" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="7"></rect><rect height="7" rx="1" width="7"></rect><rect height="7" rx="1" width="7"></rect><rect height="7" rx="1" width="7"></rect></svg>
</a>
</div>
<div className="flex items-center gap-6 pt-4">
<div className="text-2xl font-semibold text-blue-300/90 tracking-tight" style={{fontFamily: `'Geist', Inter, system-ui`}}>100</div>
<div className="text-sm text-slate-400">Simultaneous agents</div>
<div className="h-5 w-px bg-white/10"></div>
<div className="text-2xl font-semibold tracking-tight text-blue-300/90" style={{fontFamily: `'Geist', Inter, system-ui`}}>
                50+
              </div>
<div className="text-sm text-slate-400">
                Integrations available
              </div>
</div>
</div>
<div className="lg:col-span-6 relative">

<div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_20px_120px_-40px_rgba(0,0,0,0.8)] animate-in fade-in slide-in-from-bottom-3 duration-700 ease-out">
<div className="flex items-center justify-between px-4 sm:px-5 py-3 border-b border-white/10">
<div className="flex items-center gap-2">
<span className="h-2.5 w-2.5 rounded-full bg-rose-400/70"></span>
<span className="h-2.5 w-2.5 rounded-full bg-amber-300/70"></span>
<span className="h-2.5 w-2.5 rounded-full bg-emerald-300/70"></span>
</div>
<div className="flex items-center gap-2 text-xs text-slate-300">
<svg className="lucide lucide-server w-3.5 h-3.5" data-lucide="server" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" ry="2" width="20"></rect><rect height="8" rx="2" ry="2" width="20"></rect><line></line><line></line></svg>
                  agent-converge • us-east-1
                </div>
</div>
<div className="grid md:grid-cols-2">
<div className="p-4 sm:p-6">
<div className="flex items-center gap-2 text-xs text-blue-300/90 mb-3">
<svg className="lucide lucide-bot w-4 h-4" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><rect height="12" rx="2" width="16"></rect><path></path><path></path><path></path><path></path></svg>
                    Multi-Agent Orchestration
                  </div>
<pre className="text-[11px] sm:text-xs leading-relaxed text-slate-200/95 whitespace-pre-wrap bg-black/20 rounded-xl p-4 ring-1 ring-white/5"><span className="text-blue-300">workflow</span> OrchestratePR {"{"}
  <span className="text-emerald-300">agents</span>: [coder, reviewer, tester]
  <span className="text-emerald-300">steps</span>:
    - plan(): coder -{">"} reviewer
    - implement(): coder
    - validate(): tester
    - merge(): reviewer
{"}"}</pre>
<div className="mt-4 flex items-center gap-2">
<span className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-slate-300">
<svg className="lucide lucide-git-branch w-3.5 h-3.5" data-lucide="git-branch" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line></line><circle cx="18" cy="6"></circle><circle cx="6" cy="18"></circle><path></path></svg> main
                    </span>
<span className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-slate-300">
<svg className="lucide lucide-shield-check w-3.5 h-3.5" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg> policy: strict
                    </span>
</div>
</div>
<div className="p-4 sm:p-6 border-t md:border-t-0 md:border-l border-white/10">
<div className="flex items-center gap-2 text-xs text-blue-300/90 mb-3">
<svg className="lucide lucide-terminal w-4 h-4" data-lucide="terminal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
                    Realtime Logs
                  </div>
<div className="rounded-xl bg-black/20 ring-1 ring-white/5 p-4 text-[11px] sm:text-xs leading-relaxed">
<div className="text-emerald-300/90">[ok] connected: host-agent • 12ms</div>
<div className="text-blue-300/90">[info] plan(): estimated 4 steps</div>
<div className="text-blue-200/80">[info] implement(): creating patch D1243</div>
<div className="text-amber-300/80">[warn] validate(): flaky test detected</div>
<div className="text-emerald-300/90">[ok] re-run(): test stabilized • 2/2</div>
<div className="text-emerald-300/90">[ok] merge(): PR #4821 merged</div>
</div>
<div className="mt-4 flex items-center gap-2">
<button className="inline-flex items-center gap-1.5 rounded-md px-3 py-2 text-[11px] border border-white/10 bg-white/5 hover:bg-white/10 hover:border-blue-500/40 hover:ring-2 hover:ring-blue-500/30 transition-all">
<svg className="lucide lucide-play w-3.5 h-3.5" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
                      Run
                    </button>
<button className="inline-flex items-center gap-1.5 rounded-md px-3 py-2 text-[11px] border border-white/10 bg-white/5 hover:bg-white/10 hover:border-blue-500/40 hover:ring-2 hover:ring-blue-500/30 transition-all">
<svg className="lucide lucide-settings-2 w-3.5 h-3.5" data-lucide="settings-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><circle cx="17" cy="17"></circle><circle cx="7" cy="7"></circle></svg>
                      Configure
                    </button>
</div>
</div>
</div>
</div>

<div className="pointer-events-none absolute -inset-3 rounded-3xl ring-1 ring-inset ring-blue-500/10"></div>
</div>
</div>
</div>
</section>

<section className="relative py-16 sm:py-20">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="mx-auto max-w-3xl text-center space-y-3 animate-in fade-in slide-in-from-bottom-2 duration-700">
<h2 className="text-3xl sm:text-4xl tracking-tight text-white font-semibold" style={{fontFamily: `'Geist', Inter, system-ui`}}>Why Choose TokenRing AI?</h2>
<p className="text-base sm:text-lg text-slate-300/90">
            A comprehensive suite that transforms how teams automate workflows, build software, and collaborate—securely and at scale.
          </p>
</div>
<div className="mt-10 grid gap-6 sm:gap-8 md:grid-cols-3">

<div className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:border-blue-500/40 hover:shadow-[0_0_0_4px_rgba(59,130,246,0.12)] transition-all animate-in fade-in slide-in-from-bottom-2 duration-700">
<div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-500/15 ring-1 ring-blue-500/30 mb-4">
<svg className="lucide lucide-network w-6 h-6 text-blue-300" data-lucide="network" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="6" rx="1" width="6"></rect><rect height="6" rx="1" width="6"></rect><rect height="6" rx="1" width="6"></rect><path></path><path></path></svg>
</div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-2" style={{fontFamily: `'Geist', Inter, system-ui`}}>Multi-Agent Orchestration</h3>
<p className="text-slate-300/90 text-sm">
              Coordinate complex pipelines with intelligent agent management, reliable execution, and seamless integrations.
            </p>
</div>

<div className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:border-blue-500/40 hover:shadow-[0_0_0_4px_rgba(59,130,246,0.12)] transition-all animate-in fade-in slide-in-from-bottom-2 duration-700 [animation-delay:100ms]">
<div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-500/15 ring-1 ring-blue-500/30 mb-4">
<svg className="lucide lucide-code-2 w-6 h-6 text-blue-300" data-lucide="code-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg>
</div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-2" style={{fontFamily: `'Geist', Inter, system-ui`}}>AI-Powered Development</h3>
<p className="text-slate-300/90 text-sm">
              Accelerate shipping with intelligent assistance, testing automation, and natural language tooling.
            </p>
</div>

<div className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:border-blue-500/40 hover:shadow-[0_0_0_4px_rgba(59,130,246,0.12)] transition-all animate-in fade-in slide-in-from-bottom-2 duration-700 [animation-delay:200ms]">
<div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-500/15 ring-1 ring-blue-500/30 mb-4">
<svg className="lucide lucide-cloud w-6 h-6 text-blue-300" data-lucide="cloud" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-2" style={{fontFamily: `'Geist', Inter, system-ui`}}>Remote Collaboration</h3>
<p className="text-slate-300/90 text-sm">
              Secure access anywhere, real-time collaboration, and cross-platform compatibility out of the box.
            </p>
</div>
</div>
</div>
</section>

<section className="relative sm:py-20 pt-16 pb-16">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="mx-auto max-w-3xl text-center space-y-3">
<h2 className="text-3xl sm:text-4xl tracking-tight text-white font-semibold" style={{fontFamily: `'Geist', Inter, system-ui`}}>Our Product Ecosystem</h2>
<p className="sm:text-lg text-base text-slate-300/90">Nine integrated solutions for modern AI-driven organizations</p>
</div>
<div className="mt-10 grid gap-4 sm:gap-6 md:grid-cols-3">

<a className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 hover:border-blue-500/40 hover:shadow-[0_0_0_4px_rgba(59,130,246,0.12)] transition-all" href="/products/converge">
<span className="absolute top-3 right-3 text-[10px] px-2 py-0.5 rounded-full bg-amber-500/90 text-white">Coming Soon</span>
<div className="h-12 w-12 rounded-full bg-blue-500/15 ring-1 ring-blue-500/30 grid place-items-center mb-4">
<svg className="lucide lucide-table w-6 h-6 text-emerald-300" data-lucide="table" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><rect height="18" rx="2" width="18"></rect><path></path><path></path></svg>
</div>
<h3 className="text-lg font-semibold tracking-tight text-white" style={{fontFamily: `'Geist', Inter, system-ui`}}>Converge</h3>
<p className="text-slate-300/90 text-sm">Multi-agent workflow orchestration platform</p>
</a>

<a className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 hover:border-blue-500/40 hover:shadow-[0_0_0_4px_rgba(59,130,246,0.12)] transition-all" href="/products/coder">
<div className="h-12 w-12 rounded-full bg-blue-500/15 ring-1 ring-blue-500/30 grid place-items-center mb-4">
<svg className="lucide lucide-terminal w-6 h-6 text-sky-300" data-lucide="terminal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</div>
<h3 className="text-lg font-semibold tracking-tight text-white" style={{fontFamily: `'Geist', Inter, system-ui`}}>Coder</h3>
<p className="text-slate-300/90 text-sm">AI-assisted command line development tool</p>
</a>

<a className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 hover:border-blue-500/40 hover:shadow-[0_0_0_4px_rgba(59,130,246,0.12)] transition-all" href="/products/writer">
<div className="h-12 w-12 rounded-full bg-blue-500/15 ring-1 ring-blue-500/30 grid place-items-center mb-4">
<svg className="lucide lucide-pen-tool w-6 h-6 text-pink-300" data-lucide="pen-tool" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><circle cx="11" cy="11"></circle></svg>
</div>
<h3 className="text-lg font-semibold tracking-tight text-white" style={{fontFamily: `'Geist', Inter, system-ui`}}>Writer</h3>
<p className="text-slate-300/90 text-sm">AI-powered content creation and publishing</p>
</a>

<a className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 hover:border-blue-500/40 hover:shadow-[0_0_0_4px_rgba(59,130,246,0.12)] transition-all" href="/products/web-terminal">
<div className="h-12 w-12 rounded-full bg-blue-500/15 ring-1 ring-blue-500/30 grid place-items-center mb-4">
<svg className="lucide lucide-globe w-6 h-6 text-indigo-300" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12"></circle><path></path><path></path></svg>
</div>
<h3 className="text-lg font-semibold tracking-tight text-white" style={{fontFamily: `'Geist', Inter, system-ui`}}>WebTerminal</h3>
<p className="text-slate-300/90 text-sm">Browser-based coding terminal and file explorer</p>
</a>

<a className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 hover:border-blue-500/40 hover:shadow-[0_0_0_4px_rgba(59,130,246,0.12)] transition-all" href="/products/host-agent">
<div className="h-12 w-12 rounded-full bg-blue-500/15 ring-1 ring-blue-500/30 grid place-items-center mb-4">
<svg className="lucide lucide-server w-6 h-6 text-violet-300" data-lucide="server" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" ry="2" width="20"></rect><rect height="8" rx="2" ry="2" width="20"></rect><line></line><line></line></svg>
</div>
<h3 className="text-lg font-semibold tracking-tight text-white" style={{fontFamily: `'Geist', Inter, system-ui`}}>Host Agent</h3>
<p className="text-slate-300/90 text-sm">Bridge service for remote resource access</p>
</a>

<a className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 hover:border-blue-500/40 hover:shadow-[0_0_0_4px_rgba(59,130,246,0.12)] transition-all" href="/products/sprint">
<span className="absolute top-3 right-3 text-[10px] px-2 py-0.5 rounded-full bg-amber-500/90 text-white">Coming Soon</span>
<div className="h-12 w-12 rounded-full bg-blue-500/15 ring-1 ring-blue-500/30 grid place-items-center mb-4">
<svg className="lucide lucide-zap w-6 h-6 text-amber-300" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</div>
<h3 className="text-lg font-semibold tracking-tight text-white" style={{fontFamily: `'Geist', Inter, system-ui`}}>Sprint</h3>
<p className="text-slate-300/90 text-sm">Pay-per-sprint AI agent task completion</p>
</a>

<a className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 hover:border-blue-500/40 hover:shadow-[0_0_0_4px_rgba(59,130,246,0.12)] transition-all" href="/products/observe">
<span className="absolute top-3 right-3 text-[10px] px-2 py-0.5 rounded-full bg-amber-500/90 text-white">Coming Soon</span>
<div className="h-12 w-12 rounded-full bg-blue-500/15 ring-1 ring-blue-500/30 grid place-items-center mb-4">
<svg className="lucide lucide-eye w-6 h-6 text-purple-300" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><circle cx="12" cy="12"></circle></svg>
</div>
<h3 className="text-lg font-semibold tracking-tight text-white" style={{fontFamily: `'Geist', Inter, system-ui`}}>Observe</h3>
<p className="text-slate-300/90 text-sm">Real-world data observation and monitoring</p>
</a>

<a className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 hover:border-blue-500/40 hover:shadow-[0_0_0_4px_rgba(59,130,246,0.12)] transition-all" href="/products/interact">
<span className="absolute top-3 right-3 text-[10px] px-2 py-0.5 rounded-full bg-amber-500/90 text-white">Coming Soon</span>
<div className="h-12 w-12 rounded-full bg-blue-500/15 ring-1 ring-blue-500/30 grid place-items-center mb-4">
<svg className="lucide lucide-message-square w-6 h-6 text-rose-300" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</div>
<h3 className="text-lg font-semibold tracking-tight text-white" style={{fontFamily: `'Geist', Inter, system-ui`}}>Interact</h3>
<p className="text-slate-300/90 text-sm">AI action execution and human collaboration</p>
</a>

<a className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 hover:border-blue-500/40 hover:shadow-[0_0_0_4px_rgba(59,130,246,0.12)] transition-all" href="/products/bounty">
<span className="absolute top-3 right-3 text-[10px] px-2 py-0.5 rounded-full bg-amber-500/90 text-white">Coming Soon</span>
<div className="h-12 w-12 rounded-full bg-blue-500/15 ring-1 ring-blue-500/30 grid place-items-center mb-4">
<svg className="lucide lucide-coins w-6 h-6 text-yellow-300" data-lucide="coins" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8"></circle><path></path><path></path><path></path></svg>
</div>
<h3 className="text-lg font-semibold tracking-tight text-white" style={{fontFamily: `'Geist', Inter, system-ui`}}>Bounty</h3>
<p className="text-slate-300/90 text-sm">Crowd-powered AI‑perfected feature delivery</p>
</a>
</div>
<div className="text-center mt-10">
<a className="inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm border border-white/10 bg-white/5 hover:bg-white/10 hover:border-blue-500/40 hover:ring-2 hover:ring-blue-500/30 transition-all" href="/products">
            Learn More About Our Products
            <svg className="lucide lucide-arrow-right w-4.5 h-4.5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</a>
</div>
</div>
</section>

<section className="relative py-10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
<div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 text-center">
<div className="sm:text-3xl text-2xl font-semibold text-blue-300 tracking-tight" style={{fontFamily: `'Geist', Inter, system-ui`}}>100</div>
<div className="sm:text-sm text-xs text-slate-400">Simultaneous agents</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 text-center">
<div className="text-2xl sm:text-3xl font-semibold tracking-tight text-blue-300" style={{fontFamily: `'Geist', Inter, system-ui`}}>50+</div>
<div className="text-slate-400 text-xs sm:text-sm">Integrations</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 text-center">
<div className="sm:text-3xl text-2xl font-semibold text-blue-300 tracking-tight" style={{fontFamily: `'Geist', Inter, system-ui`}}>200+</div>
<div className="sm:text-sm text-xs text-slate-400">Models</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 text-center">
<div className="sm:text-3xl text-2xl font-semibold text-blue-300 tracking-tight" style={{fontFamily: `'Geist', Inter, system-ui`}}>95%+</div>
<div className="sm:text-sm text-xs text-slate-400">Task completion</div>
</div>
</div>
</div>
</section>

<footer className="relative pt-16 pb-16">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 sm:p-10">
<div className="grid md:grid-cols-4 gap-8">
<div className="md:col-span-1">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-lg ring-1 ring-blue-500/40 bg-blue-500/10 grid place-items-center text-blue-400 font-semibold tracking-tight" style={{fontFamily: `'Geist', Inter, system-ui`}}>TR</div>
<span className="text-sm font-medium tracking-tight text-slate-200">TokenRing AI</span>
</div>
<p className="text-slate-300/90 text-sm mt-4">
                Pioneering the future of AI‑powered workflow orchestration and development tools.
              </p>
<div className="flex items-center gap-3 mt-5">
<a className="h-9 w-9 grid place-items-center rounded-md border border-white/10 bg-white/5 hover:bg-white/10 hover:border-blue-500/40 transition-colors" href="https://x.com/TokenRingAI" rel="noopener" target="_blank">
<svg className="lucide lucide-twitter w-4.5 h-4.5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</a>
<a className="h-9 w-9 grid place-items-center rounded-md border border-white/10 bg-white/5 hover:bg-white/10 hover:border-blue-500/40 transition-colors" href="https://www.linkedin.com/company/tokenring-ai" rel="noopener" target="_blank">
<svg className="lucide lucide-linkedin w-4.5 h-4.5" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><rect height="12" width="4"></rect><circle cx="4" cy="4"></circle></svg>
</a>
<a className="h-9 w-9 grid place-items-center rounded-md border border-white/10 bg-white/5 hover:bg-white/10 hover:border-blue-500/40 transition-colors" href="https://github.com/tokenring-ai" rel="noopener" target="_blank">
<svg className="lucide lucide-github w-4.5 h-4.5" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</a>
</div>
</div>
<div className="">
<h4 className="text-sm font-semibold tracking-tight text-white mb-3" style={{fontFamily: `'Geist', Inter, system-ui`}}>Products</h4>
<ul className="space-y-2 text-sm">
<li><a className="text-slate-300 hover:text-white transition-colors" href="/products/converge">Converge</a></li>
<li><a className="text-slate-300 hover:text-white transition-colors" href="/products/coder">Coder</a></li>
<li><a className="text-slate-300 hover:text-white transition-colors" href="/products/writer">Writer</a></li>
<li><a className="text-slate-300 hover:text-white transition-colors" href="/products/web-terminal">WebTerminal</a></li>
<li><a className="text-slate-300 hover:text-white transition-colors" href="/products/host-agent">Host Agent</a></li>
<li><a className="text-slate-300 hover:text-white transition-colors" href="/products/sprint">Sprint</a></li>
<li><a className="text-slate-300 hover:text-white transition-colors" href="/products/observe">Observe</a></li>
<li><a className="text-slate-300 hover:text-white transition-colors" href="/products/interact">Interact</a></li>
<li><a className="text-slate-300 hover:text-white transition-colors" href="/products/bounty">Bounty</a></li>
</ul>
</div>
<div className="">
<h4 className="text-sm font-semibold tracking-tight text-white mb-3" style={{fontFamily: `'Geist', Inter, system-ui`}}>Company</h4>
<ul className="space-y-2 text-sm">
<li className=""><a className="text-slate-300 hover:text-white transition-colors" href="/about">About Us</a></li>
<li className=""><a className="text-slate-300 hover:text-white transition-colors" href="#">Careers</a></li>
<li></li></ul></div></div></div></div></footer>
    </>
  );
}
