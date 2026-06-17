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



        // Icon initialization
        lucide.createIcons();

        // Scroll Animation Observer
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        }, { threshold: 0.1 });
        document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));

        // Workflow Tabs Logic
        const wfTabs = document.querySelectorAll('.wf-tab');
        const wfContents = document.querySelectorAll('.wf-content');
        const wfFileName = document.getElementById('wf-filename');
        
        const tabData = {
            push: { file: 'terminal', bg: 'bg-white', text: 'text-black' },
            build: { file: 'build-log.txt', bg: 'bg-white', text: 'text-black' },
            share: { file: 'success', bg: 'bg-white', text: 'text-black' }
        };

        wfTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const key = tab.getAttribute('data-tab');
                
                // Update Tabs UI
                wfTabs.forEach(t => {
                    t.classList.remove('bg-white', 'text-black');
                    t.classList.add('text-slate-400');
                });
                tab.classList.remove('text-slate-400');
                tab.classList.add('bg-white', 'text-black');

                // Update Content
                wfContents.forEach(c => c.classList.add('hidden'));
                document.getElementById(`content-${key}`).classList.remove('hidden');

                // Update filename
                wfFileName.textContent = tabData[key].file;
            });
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
      

<div className="fixed inset-0 z-[-1] bg-grid pointer-events-none"></div>
<div className="fixed top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-blue-900/10 to-transparent z-[-1] pointer-events-none blur-3xl"></div>

<header className="sticky top-0 z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl supports-[backdrop-filter]:bg-black/20">
<div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
<a className="flex items-center gap-2 group" href="#">

<svg className="text-white" fill="none" height="20" viewbox="0 0 54 32" width="34" xmlns="http://www.w3.org/2000/svg">
<path d="M10 28C5.58172 28 2 24.4183 2 20C2 15.5817 5.58172 12 10 12C11.55 12 13 12.44 14.25 13.2C14.85 9.05 18.4 6 22.5 6C26.15 6 29.35 8.4 30.45 11.8C31.5 10.05 33.4 8.8 35.6 8.8C39.1 8.8 42 11.5 42.4 14.9C42.9 14.85 43.45 14.8 44 14.8C48.4183 14.8 52 18.3817 52 22.8C52 27.2183 48.4183 30.8 44 30.8H10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.5"></path>
</svg>

<span className="text-2xl font-bold tracking-tighter text-white uppercase font-stretch-condensed" style={{fontFamily: '\'Geist\', \'Inter\', sans-serif', letterSpacing: '-0.05em'}}>Liteswell</span>
</a>
<nav className="hidden items-center gap-8 text-sm font-medium text-slate-400 md:flex">
<a className="transition-colors hover:text-white" href="#features">Features</a>
<a className="transition-colors hover:text-white" href="#workflow">Workflow</a>
<a className="transition-colors hover:text-white" href="#pricing">Pricing</a>
</nav>
<div className="flex items-center gap-4">
<a className="text-sm font-medium text-slate-400 transition-colors hover:text-white hidden sm:block" href="#">Log in</a>
<a className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition-transform hover:scale-105 active:scale-95" href="#">
                    Start Deploying
                </a>
</div>
</div>
</header>

<section className="relative pt-20 pb-20 sm:pt-32 sm:pb-24 overflow-hidden">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

<div className="mx-auto max-w-4xl text-center animate-enter">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-blue-300 backdrop-blur-sm mb-8">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                    Now supporting Next.js 14
                </div>
<h1 className="text-5xl font-semibold tracking-tighter text-white sm:text-7xl mb-6">
                    Deploy every commit. <br className="hidden sm:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Preview forever.</span>
</h1>
<p className="mx-auto max-w-2xl text-lg text-slate-400 leading-relaxed mb-10">
                    Liteswell creates a unique, persistent preview URL for every single push. 
                    No overrides, no expiration. Full history at your fingertips.
                </p>

<div className="mx-auto max-w-xl relative group">
<div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-blue-500/50 to-indigo-500/50 opacity-30 blur transition duration-500 group-hover:opacity-60"></div>
<form className="relative flex items-center rounded-lg bg-black border border-white/10 p-2 shadow-2xl ring-1 ring-white/5" onsubmit="event.preventDefault();">
<div className="flex h-10 w-10 items-center justify-center rounded text-slate-500">
<i className="h-5 w-5" data-lucide="github"></i>
</div>
<input className="h-full w-full bg-transparent border-0 px-2 text-sm text-white placeholder:text-slate-600 focus:ring-0 focus:outline-none font-mono" placeholder="github.com/username/repo" type="text" value="github.com/vercel/next.js"/>
<button className="ml-2 rounded-md bg-white px-4 py-2 text-sm font-semibold text-black shadow-sm hover:bg-slate-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all" type="submit">
                            Deploy
                        </button>
</form>
</div>
<p className="mt-4 text-xs text-slate-500">Free for open source. No credit card required.</p>
</div>

<div className="mt-20 animate-enter-delay-2">
<div className="relative rounded-xl border border-white/10 bg-black/40 shadow-2xl backdrop-blur-sm overflow-hidden ring-1 ring-white/5">

<div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-4 py-3">
<div className="flex gap-1.5">
<div className="h-3 w-3 rounded-full bg-white/10"></div>
<div className="h-3 w-3 rounded-full bg-white/10"></div>
<div className="h-3 w-3 rounded-full bg-white/10"></div>
</div>
<div className="ml-4 flex items-center gap-2 rounded bg-black/50 px-2 py-0.5 text-xs text-slate-400 font-mono border border-white/5">
<i className="h-3 w-3" data-lucide="lock"></i> liteswell.app/dashboard
                        </div>
</div>

<div className="grid grid-cols-1 md:grid-cols-4 min-h-[500px]">

<div className="hidden md:block border-r border-white/10 bg-black/20 p-4">
<div className="flex items-center gap-2 mb-6 text-sm font-semibold text-white">
<div className="h-5 w-5 rounded bg-gradient-to-br from-indigo-500 to-purple-500"></div>
                                Acme Corp
                            </div>
<div className="space-y-1">
<div className="flex items-center gap-2 rounded-md bg-white/10 px-2 py-1.5 text-xs font-medium text-white">
<i className="h-4 w-4 text-white" data-lucide="git-commit-horizontal"></i> Deployments
                                </div>
<div className="flex items-center gap-2 rounded-md px-2 py-1.5 text-xs text-slate-400 hover:bg-white/5 transition">
<i className="h-4 w-4" data-lucide="settings"></i> Settings
                                </div>
<div className="flex items-center gap-2 rounded-md px-2 py-1.5 text-xs text-slate-400 hover:bg-white/5 transition">
<i className="h-4 w-4" data-lucide="activity"></i> Analytics
                                </div>
</div>
</div>

<div className="col-span-3 p-6">
<div className="flex items-center justify-between mb-6">
<h3 className="text-lg font-medium text-white">Deployment History</h3>
<div className="flex gap-2">
<span className="inline-flex items-center rounded border border-white/10 bg-white/5 px-2 py-1 text-xs text-slate-400">
<span className="h-1.5 w-1.5 rounded-full bg-green-500 mr-2"></span> main
                                    </span>
</div>
</div>

<div className="grid grid-cols-12 gap-4 border-b border-white/10 pb-2 text-xs font-medium text-slate-500 uppercase tracking-wider">
<div className="col-span-5">Commit</div>
<div className="col-span-2">State</div>
<div className="col-span-2">Time</div>
<div className="col-span-3 text-right">Preview URL</div>
</div>

<div className="space-y-1 mt-2">

<div className="group grid grid-cols-12 gap-4 items-center rounded-lg border border-transparent p-2 transition-all hover:bg-white/5 hover:border-white/5">
<div className="col-span-5">
<div className="flex items-center gap-3">
<i className="h-4 w-4 text-slate-500" data-lucide="git-commit-vertical"></i>
<div>
<p className="text-sm font-medium text-white">update pricing tier</p>
<p className="text-xs font-mono text-slate-500">git push -m "feat: pricing"</p>
</div>
</div>
</div>
<div className="col-span-2">
<span className="inline-flex items-center gap-1.5 rounded-full bg-green-500/10 px-2 py-0.5 text-xs font-medium text-green-400 border border-green-500/20">
                                            Ready
                                        </span>
</div>
<div className="col-span-2 text-xs text-slate-400">Just now</div>
<div className="col-span-3 text-right">
<a className="inline-flex items-center gap-1 text-xs font-mono text-blue-400 hover:text-blue-300 hover:underline" href="#">
                                            feat-pricing-x8z.lite.app <i className="h-3 w-3" data-lucide="external-link"></i>
</a>
</div>
</div>

<div className="group grid grid-cols-12 gap-4 items-center rounded-lg border border-transparent p-2 transition-all hover:bg-white/5 hover:border-white/5">
<div className="col-span-5">
<div className="flex items-center gap-3">
<i className="h-4 w-4 text-slate-500" data-lucide="git-commit-vertical"></i>
<div>
<p className="text-sm font-medium text-white">fix: navbar overflow mobile</p>
<p className="text-xs font-mono text-slate-500">7b3a1c2</p>
</div>
</div>
</div>
<div className="col-span-2">
<span className="inline-flex items-center gap-1.5 rounded-full bg-green-500/10 px-2 py-0.5 text-xs font-medium text-green-400 border border-green-500/20">
                                            Ready
                                        </span>
</div>
<div className="col-span-2 text-xs text-slate-400">2h ago</div>
<div className="col-span-3 text-right">
<a className="inline-flex items-center gap-1 text-xs font-mono text-blue-400 hover:text-blue-300 hover:underline" href="#">
                                            fix-nav-7b3.lite.app <i className="h-3 w-3" data-lucide="external-link"></i>
</a>
</div>
</div>

<div className="group grid grid-cols-12 gap-4 items-center rounded-lg border border-transparent p-2 transition-all hover:bg-white/5 hover:border-white/5">
<div className="col-span-5">
<div className="flex items-center gap-3">
<i className="h-4 w-4 text-slate-500" data-lucide="git-commit-vertical"></i>
<div>
<p className="text-sm font-medium text-white">docs: update readme</p>
<p className="text-xs font-mono text-slate-500">9c4d2e1</p>
</div>
</div>
</div>
<div className="col-span-2">
<span className="inline-flex items-center gap-1.5 rounded-full bg-green-500/10 px-2 py-0.5 text-xs font-medium text-green-400 border border-green-500/20">
                                            Ready
                                        </span>
</div>
<div className="col-span-2 text-xs text-slate-400">5h ago</div>
<div className="col-span-3 text-right">
<a className="inline-flex items-center gap-1 text-xs font-mono text-blue-400 hover:text-blue-300 hover:underline" href="#">
                                            docs-readme-9c4.lite.app <i className="h-3 w-3" data-lucide="external-link"></i>
</a>
</div>
</div>

<div className="group grid grid-cols-12 gap-4 items-center rounded-lg border border-transparent p-2 transition-all hover:bg-white/5 hover:border-white/5 opacity-60">
<div className="col-span-5">
<div className="flex items-center gap-3">
<i className="h-4 w-4 text-slate-500" data-lucide="git-commit-vertical"></i>
<div>
<p className="text-sm font-medium text-white">wip: hero animation</p>
<p className="text-xs font-mono text-slate-500">1a2b3c4</p>
</div>
</div>
</div>
<div className="col-span-2">
<span className="inline-flex items-center gap-1.5 rounded-full bg-slate-500/10 px-2 py-0.5 text-xs font-medium text-slate-400 border border-slate-500/20">
                                            Archived
                                        </span>
</div>
<div className="col-span-2 text-xs text-slate-400">1d ago</div>
<div className="col-span-3 text-right">
<a className="inline-flex items-center gap-1 text-xs font-mono text-slate-500 hover:text-slate-400 hover:underline" href="#">
                                            wip-hero-1a2.lite.app <i className="h-3 w-3" data-lucide="external-link"></i>
</a>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="animate-on-scroll py-24 relative" id="features">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-white sm:text-5xl">Built for speed. <span className="text-slate-500">Designed for history.</span></h2>
<p className="mt-4 max-w-xl text-lg text-slate-400">Traditional hosting overrides previous builds. Liteswell keeps them all alive, giving you a time machine for your UI.</p>
</div>
<div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:grid-rows-2 h-auto lg:h-[600px]">

<div className="group relative col-span-1 lg:col-span-2 row-span-1 overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/50 p-8 transition-colors hover:bg-neutral-900/80">
<div className="absolute top-0 right-0 -mt-16 -mr-16 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl transition-opacity group-hover:opacity-100"></div>
<div className="relative z-10 flex h-full flex-col justify-between">
<div>
<div className="inline-flex rounded-lg bg-blue-500/10 p-2 text-blue-400 mb-4">
<i className="h-6 w-6" data-lucide="infinity"></i>
</div>
<h3 className="text-xl font-medium text-white">Immutable History</h3>
<p className="mt-2 text-sm text-slate-400 max-w-md">Every push generates a unique URL that never expires. Share version v1 while working on v2. Compare changes visually side-by-side.</p>
</div>

<div className="mt-8 flex gap-2 overflow-hidden mask-linear-fade">
<div className="flex-shrink-0 w-48 rounded border border-white/10 bg-black p-3">
<div className="text-[10px] text-slate-500 mb-2 font-mono">commit-a1b2.lite.app</div>
<div className="h-2 w-12 bg-blue-500/20 rounded mb-2"></div>
<div className="h-1.5 w-full bg-white/10 rounded mb-1"></div>
<div className="h-1.5 w-2/3 bg-white/10 rounded"></div>
</div>
<div className="flex-shrink-0 w-48 rounded border border-white/10 bg-black p-3">
<div className="text-[10px] text-slate-500 mb-2 font-mono">commit-c3d4.lite.app</div>
<div className="h-2 w-12 bg-purple-500/20 rounded mb-2"></div>
<div className="h-1.5 w-full bg-white/10 rounded mb-1"></div>
<div className="h-1.5 w-2/3 bg-white/10 rounded"></div>
</div>
<div className="flex-shrink-0 w-48 rounded border border-white/10 bg-black p-3 opacity-50">
<div className="text-[10px] text-slate-500 mb-2 font-mono">commit-e5f6.lite.app</div>
<div className="h-2 w-12 bg-slate-500/20 rounded mb-2"></div>
<div className="h-1.5 w-full bg-white/10 rounded mb-1"></div>
<div className="h-1.5 w-2/3 bg-white/10 rounded"></div>
</div>
</div>
</div>
</div>

<div className="group relative col-span-1 row-span-1 overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/50 p-8 transition-colors hover:bg-neutral-900/80">
<div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
<div className="inline-flex rounded-lg bg-indigo-500/10 p-2 text-indigo-400 mb-4">
<i className="h-6 w-6" data-lucide="layers"></i>
</div>
<h3 className="text-xl font-medium text-white">Framework Agnostic</h3>
<p className="mt-2 text-sm text-slate-400">Optimized for modern stacks.</p>
<div className="mt-8 grid grid-cols-2 gap-3">
<div className="flex items-center gap-2 rounded border border-white/10 bg-black/40 px-3 py-2 text-xs text-slate-300">
<i className="h-3 w-3 fill-white text-transparent" data-lucide="triangle"></i> Next.js
                        </div>
<div className="flex items-center gap-2 rounded border border-white/10 bg-black/40 px-3 py-2 text-xs text-slate-300">
<i className="h-3 w-3 text-cyan-400" data-lucide="atom"></i> React
                        </div>
<div className="flex items-center gap-2 rounded border border-white/10 bg-black/40 px-3 py-2 text-xs text-slate-300">
<div className="h-3 w-3 rounded-full bg-green-500"></div> Vue
                        </div>
<div className="flex items-center gap-2 rounded border border-white/10 bg-black/40 px-3 py-2 text-xs text-slate-300">
<div className="h-3 w-3 rounded-full bg-orange-500"></div> Svelte
                        </div>
</div>
</div>

<div className="group relative col-span-1 row-span-1 overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/50 p-8 transition-colors hover:bg-neutral-900/80">
<div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-black/50 to-transparent"></div>
<div className="inline-flex rounded-lg bg-green-500/10 p-2 text-green-400 mb-4">
<i className="h-6 w-6" data-lucide="zap"></i>
</div>
<h3 className="text-xl font-medium text-white">Instant Builds</h3>
<p className="mt-2 text-sm text-slate-400">Intelligent caching means builds finish in seconds, not minutes. We only rebuild what changed.</p>
<div className="mt-6 flex items-center gap-2 text-2xl font-semibold font-mono tracking-tight text-white">
<span className="text-green-400">~1.2s</span> <span className="text-sm text-slate-500 font-sans font-normal">avg build time</span>
</div>
</div>

<div className="group relative col-span-1 lg:col-span-2 row-span-1 overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/50 p-8 transition-colors hover:bg-neutral-900/80">
<div className="absolute top-0 left-0 -mt-16 -ml-16 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl transition-opacity group-hover:opacity-100"></div>
<div className="flex h-full flex-col lg:flex-row lg:items-center gap-8">
<div className="flex-1">
<div className="inline-flex rounded-lg bg-purple-500/10 p-2 text-purple-400 mb-4">
<i className="h-6 w-6" data-lucide="wand-2"></i>
</div>
<h3 className="text-xl font-medium text-white">Zero Configuration</h3>
<p className="mt-2 text-sm text-slate-400">Liteswell automatically detects your framework, build command, and output directory. Just push code.</p>
</div>
<div className="flex-1 w-full max-w-sm">
<div className="rounded-lg border border-white/10 bg-black p-4 font-mono text-xs text-slate-300">
<div className="flex gap-2 mb-2">
<span className="text-green-400">➜</span>
<span>git push origin main</span>
</div>
<div className="text-slate-500 mb-1">Detecting framework... Next.js</div>
<div className="text-slate-500 mb-1">Building... Done in 980ms</div>
<div className="text-slate-500 mb-2">Deploying...</div>
<div className="flex gap-2 pt-2 border-t border-white/10">
<span className="text-green-400">✔</span>
<span className="text-white">Deployed: <span className="underline decoration-slate-600">project-v8.lite.app</span></span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="animate-on-scroll py-24 border-y border-white/5 bg-white/[0.02]" id="workflow">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex flex-col items-center text-center mb-12">
<h2 className="text-3xl font-semibold tracking-tight text-white">How it works</h2>
<div className="mt-8 flex rounded-full border border-white/10 bg-black/50 p-1 backdrop-blur" id="wf-tabs">
<button className="wf-tab rounded-full bg-white px-6 py-2 text-sm font-medium text-black shadow-sm transition-all" data-tab="push">1. Push</button>
<button className="wf-tab rounded-full px-6 py-2 text-sm font-medium text-slate-400 hover:text-white transition-all" data-tab="build">2. Build</button>
<button className="wf-tab rounded-full px-6 py-2 text-sm font-medium text-slate-400 hover:text-white transition-all" data-tab="share">3. Share</button>
</div>
</div>
<div className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-black shadow-2xl overflow-hidden min-h-[300px] flex flex-col">
<div className="border-b border-white/10 bg-white/5 px-4 py-3 flex items-center justify-between">
<div className="flex gap-1.5">
<div className="h-3 w-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="h-3 w-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="h-3 w-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<span className="text-xs font-mono text-slate-500" id="wf-filename">terminal</span>
<div className="w-10"></div>
</div>
<div className="flex-1 p-6 font-mono text-sm relative">

<div className="wf-content space-y-2" id="content-push">
<div className="flex gap-2">
<span className="text-green-400">user@dev:~/my-app$</span>
<span className="text-white typing-effect">git push origin feat/new-header</span>
</div>
<div className="text-slate-400 pl-4 pt-2 opacity-0 animate-enter-delay-1">
                            Enumerating objects: 15, done.<br/>
                            Counting objects: 100% (15/15), done.<br/>
                            Delta compression using up to 8 threads<br/>
                            Compressing objects: 100% (12/12), done.<br/>
                            Writing objects: 100% (15/15), 3.24 KiB | 3.24 MiB/s, done.<br/>
                            Total 15 (delta 8), reused 0 (delta 0)<br/>
                            To github.com:user/my-app.git<br/>
<span className="text-yellow-400">* [new branch]      feat/new-header -&gt; feat/new-header</span>
</div>
</div>

<div className="wf-content hidden space-y-2" id="content-build">
<div className="text-blue-400 font-bold mb-4">→ Liteswell Webhook Triggered</div>
<div className="pl-4 border-l-2 border-white/10 space-y-2">
<div className="flex items-center gap-2 text-slate-300">
<i className="h-4 w-4" data-lucide="package"></i> Cloning repository...
                            </div>
<div className="flex items-center gap-2 text-slate-300">
<i className="h-4 w-4" data-lucide="cpu"></i> Analyzing project structure...
                            </div>
<div className="flex items-center gap-2 text-slate-300">
<i className="h-4 w-4 text-yellow-400" data-lucide="zap"></i> Detected Next.js framework
                            </div>
<div className="flex items-center gap-2 text-slate-300">
<i className="h-4 w-4" data-lucide="hammer"></i> Running `npm run build`...
                            </div>
<div className="text-green-400 pt-2">✔ Build completed in 1.4s</div>
</div>
</div>

<div className="wf-content hidden flex flex-col items-center justify-center h-full min-h-[200px]" id="content-share">
<div className="text-center space-y-4">
<div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-green-500/20 text-green-400 mb-2">
<i className="h-8 w-8 stroke-[3]" data-lucide="check"></i>
</div>
<h4 className="text-xl font-medium text-white">Deployment Ready!</h4>
<div className="flex items-center gap-2 rounded-lg bg-white/10 border border-white/10 px-4 py-3">
<span className="text-blue-300 select-all">https://feat-header-x92.liteswell.app</span>
<button className="text-slate-400 hover:text-white transition"><i className="h-4 w-4" data-lucide="copy"></i></button>
</div>
<div className="flex justify-center gap-2 text-xs text-slate-500">
<span><i className="inline h-3 w-3" data-lucide="git-branch"></i> feat/new-header</span>
<span>•</span>
<span>24s ago</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="animate-on-scroll py-24 relative" id="pricing">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

<div className="relative rounded-3xl border border-white/10 bg-neutral-900/40 p-8 backdrop-blur transition hover:border-white/20">
<div className="mb-4 text-lg font-medium text-white">Hobby</div>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-bold tracking-tight text-white">$0</span>
<span className="text-sm text-slate-400">/month</span>
</div>
<ul className="space-y-4 mb-8 text-sm text-slate-300">
<li className="flex items-center gap-3"><i className="h-4 w-4 text-white" data-lucide="check"></i> 3 Projects</li>
<li className="flex items-center gap-3"><i className="h-4 w-4 text-white" data-lucide="check"></i> 100 Deployments / mo</li>
<li className="flex items-center gap-3"><i className="h-4 w-4 text-white" data-lucide="check"></i> 7-day Log Retention</li>
<li className="flex items-center gap-3"><i className="h-4 w-4 text-white" data-lucide="check"></i> Community Support</li>
</ul>
<a className="block w-full rounded-xl border border-white/10 bg-white/5 py-3 text-center text-sm font-medium text-white transition hover:bg-white/10" href="#">Start for free</a>
</div>

<div className="relative rounded-3xl border border-blue-500/30 bg-neutral-900/60 p-8 backdrop-blur shadow-[0_0_40px_-10px_rgba(59,130,246,0.15)]" style={{'--border-gradient': 'linear-gradient(135deg, rgba(59,130,246,0.5), rgba(0,0,0,0))'}}>
<div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white shadow-lg">Most Popular</div>
<div className="mb-4 text-lg font-medium text-white">Pro</div>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-bold tracking-tight text-white">$20</span>
<span className="text-sm text-slate-400">/month</span>
</div>
<ul className="space-y-4 mb-8 text-sm text-slate-300">
<li className="flex items-center gap-3"><i className="h-4 w-4 text-blue-400" data-lucide="check"></i> Unlimited Projects</li>
<li className="flex items-center gap-3"><i className="h-4 w-4 text-blue-400" data-lucide="check"></i> Unlimited Deployments</li>
<li className="flex items-center gap-3"><i className="h-4 w-4 text-blue-400" data-lucide="check"></i> Permanent History</li>
<li className="flex items-center gap-3"><i className="h-4 w-4 text-blue-400" data-lucide="check"></i> Password Protection</li>
</ul>
<a className="block w-full rounded-xl bg-white py-3 text-center text-sm font-medium text-black transition hover:bg-slate-200" href="#">Get Started</a>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/10 bg-black py-12">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex flex-col items-center justify-between gap-6 md:flex-row">
<a className="flex items-center gap-2 group" href="#">
<svg className="text-white" fill="none" height="14" viewbox="0 0 54 32" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M10 28C5.58172 28 2 24.4183 2 20C2 15.5817 5.58172 12 10 12C11.55 12 13 12.44 14.25 13.2C14.85 9.05 18.4 6 22.5 6C26.15 6 29.35 8.4 30.45 11.8C31.5 10.05 33.4 8.8 35.6 8.8C39.1 8.8 42 11.5 42.4 14.9C42.9 14.85 43.45 14.8 44 14.8C48.4183 14.8 52 18.3817 52 22.8C52 27.2183 48.4183 30.8 44 30.8H10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6"></path>
</svg>
<span className="text-base font-bold tracking-tighter text-white uppercase font-stretch-condensed" style={{fontFamily: '\'Geist\', sans-serif'}}>Liteswell</span>
</a>
<div className="flex gap-8 text-sm text-slate-500">
<a className="hover:text-white transition" href="#">Privacy</a>
<a className="hover:text-white transition" href="#">Terms</a>
<a className="hover:text-white transition" href="#">Twitter</a>
<a className="hover:text-white transition" href="#">GitHub</a>
</div>
<div className="text-xs text-slate-600">
                    © 2025 Liteswell Inc.
                </div>
</div>
</div>
</footer>



    </>
  );
}
