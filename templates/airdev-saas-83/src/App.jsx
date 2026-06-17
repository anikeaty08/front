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



      document.addEventListener('DOMContentLoaded', () => {
        // Lucide icons with 1.5 stroke-width
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });

        // Mobile menu toggle
        const toggle = document.getElementById('mobileToggle');
        const menu = document.getElementById('mobileMenu');
        if (toggle && menu) {
          toggle.addEventListener('click', () => {
            menu.classList.toggle('hidden');
          });
        }

        // Year
        const y = document.getElementById('year');
        if (y) y.textContent = new Date().getFullYear();
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
      

<div className="pointer-events-none fixed inset-0 -z-10">
<div className="absolute inset-0" style={{background: 'radial-gradient(1200px 600px at 20% -10%, rgba(99,102,241,0.15), transparent 60%), radial-gradient(800px 500px at 85% 10%, rgba(56,189,248,0.12), transparent 55%), radial-gradient(900px 500px at 50% 120%, rgba(34,197,94,0.10), transparent 60%)'}}></div>
<div className="absolute inset-0 opacity-[0.06]" style={{backgroundImage: 'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)', backgroundSize: '36px 36px'}}></div>
</div>

<div className="fixed top-0 inset-x-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">

<a className="group flex items-center gap-3" href="#">
<div className="grid h-8 w-8 place-items-center rounded-md border border-white/15 bg-white/5 transition-colors group-hover:bg-white/10">
<span className="text-sm font-semibold tracking-tight">A</span>
</div>
<span className="text-[15px] font-semibold tracking-tight">AIRDEV</span>
</a>

<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-white/70 hover:text-white transition-colors" href="#features">Features</a>
<a className="text-sm font-medium text-white/70 hover:text-white transition-colors" href="#showcase">Showcase</a>
<a className="text-sm font-medium text-white/70 hover:text-white transition-colors" href="#pricing">Pricing</a>
<a className="text-sm font-medium text-white/70 hover:text-white transition-colors" href="#faq">FAQ</a>
</nav>

<div className="hidden md:flex items-center gap-3">
<a className="rounded-md border border-white/15 bg-white/5 px-3.5 py-2 text-sm font-medium text-white/90 hover:bg-white/10 hover:text-white transition-colors" href="#">Book a demo</a>
<a className="rounded-md bg-white text-black px-4 py-2.5 text-sm font-semibold hover:bg-white/90 transition-colors" href="#get-started">Get started</a>
</div>

<button className="md:hidden inline-flex items-center justify-center rounded-md border border-white/15 bg-white/5 p-2.5 hover:bg-white/10 transition" id="mobileToggle">
<i className="h-5 w-5 text-white/80" data-lucide="menu"></i>
</button>
</div>
</div>

<div className="md:hidden hidden border-t border-white/10 bg-black/60 backdrop-blur" id="mobileMenu">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
<div className="grid gap-2">
<a className="rounded-md px-3 py-2 text-sm font-medium text-white/80 hover:bg-white/5 hover:text-white transition" href="#features">Features</a>
<a className="rounded-md px-3 py-2 text-sm font-medium text-white/80 hover:bg-white/5 hover:text-white transition" href="#showcase">Showcase</a>
<a className="rounded-md px-3 py-2 text-sm font-medium text-white/80 hover:bg-white/5 hover:text-white transition" href="#pricing">Pricing</a>
<a className="rounded-md px-3 py-2 text-sm font-medium text-white/80 hover:bg-white/5 hover:text-white transition" href="#faq">FAQ</a>
<div className="mt-2 flex items-center gap-2">
<a className="flex-1 rounded-md border border-white/15 bg-white/5 px-3.5 py-2.5 text-sm font-medium text-white/90 hover:bg-white/10 transition" href="#">Book a demo</a>
<a className="flex-1 rounded-md bg-white text-black px-3.5 py-2.5 text-sm font-semibold hover:bg-white/90 transition" href="#get-started">Get started</a>
</div>
</div>
</div>
</div>
</div>
<main className="relative">

<section className="relative pt-32 sm:pt-36 lg:pt-40">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
<div>
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
<i className="h-4 w-4" data-lucide="sparkles"></i>
                New: Visual automations and AI blocks
              </div>
<h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight">
                Build, ship, and scale apps faster with <span className="bg-gradient-to-r from-indigo-400 via-cyan-300 to-emerald-300 bg-clip-text text-transparent">Airdev</span>
</h1>
<p className="mt-5 text-base sm:text-lg text-white/70">
                A flexible platform that turns ideas into production-ready apps. Design visually, extend with code, and deploy in minutes—not months.
              </p>
<div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
<a className="inline-flex items-center justify-center rounded-md bg-white text-black px-5 py-3 text-sm font-semibold hover:bg-white/90 transition" href="#" id="get-started">
<i className="mr-2 h-4 w-4" data-lucide="rocket"></i>
                  Start free
                </a>
<a className="inline-flex items-center justify-center rounded-md border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 hover:bg-white/10 hover:text-white transition" href="#">
<i className="mr-2 h-4 w-4" data-lucide="play-circle"></i>
                  Watch demo
                </a>
</div>

<div className="mt-8 flex items-center gap-6">
<div className="flex -space-x-3">
<img alt="User" className="h-8 w-8 rounded-full ring-2 ring-black/50" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<img alt="User" className="h-8 w-8 rounded-full ring-2 ring-black/50" src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<img alt="User" className="h-8 w-8 rounded-full ring-2 ring-black/50" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<p className="text-sm text-white/60">
                  Trusted by 10k+ builders. 4.9/5 average satisfaction.
                </p>
</div>
</div>

<div className="relative">
<div className="absolute -inset-6 -z-10 rounded-2xl bg-gradient-to-tr from-indigo-500/10 via-cyan-500/10 to-emerald-500/10 blur-2xl"></div>
<div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:p-6 shadow-2xl backdrop-blur">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2 text-xs text-white/60">
<span className="size-2 rounded-full bg-emerald-400/80"></span>
                    Live Preview
                  </div>
<div className="flex items-center gap-2">
<div className="h-6 w-6 grid place-items-center rounded-md border border-white/10 bg-white/5">
<i className="h-3.5 w-3.5 text-white/70" data-lucide="bell"></i>
</div>
<div className="h-6 w-6 grid place-items-center rounded-md border border-white/10 bg-white/5">
<i className="h-3.5 w-3.5 text-white/70" data-lucide="share-2"></i>
</div>
</div>
</div>
<div className="mt-4 grid gap-4 sm:grid-cols-2">

<div className="rounded-lg border border-white/10 bg-black/60">
<div className="flex items-center justify-between border-b border-white/10 px-3 py-2">
<span className="text-xs text-white/60">Terminal</span>
<span className="text-[10px] text-emerald-300/80">Ready</span>
</div>
<div className="p-3">
<div className="flex items-center rounded-md border border-white/10 bg-white/5 px-2.5 py-2 text-[13px] text-white/90">
<i className="mr-2 h-4 w-4" data-lucide="command"></i>
                        npx create-airdev@latest
                      </div>
<div className="mt-2 rounded-md border border-white/10 bg-white/[0.03] p-2 text-[12px] text-white/60">
                        Scaffolding project... ✓<br/>
                        Installing deps... ✓<br/>
                        Launching dev server at http://localhost:3000
                      </div>
</div>
</div>

<div className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
<div className="flex items-center gap-2 text-[11px] text-white/60">
<i className="h-4 w-4" data-lucide="layout"></i>
                      Drag and drop blocks
                    </div>
<div className="mt-3 grid grid-cols-3 gap-2">
<button className="group rounded-md border border-white/10 bg-white/5 p-3 text-left hover:border-white/20 transition">
<i className="h-4 w-4 text-white/80" data-lucide="box"></i>
<p className="mt-2 text-[12px] text-white/80">UI Block</p>
<p className="text-[11px] text-white/50">Buttons, nav, cards</p>
</button>
<button className="group rounded-md border border-white/10 bg-white/5 p-3 text-left hover:border-white/20 transition">
<i className="h-4 w-4 text-white/80" data-lucide="bolt"></i>
<p className="mt-2 text-[12px] text-white/80">Automation</p>
<p className="text-[11px] text-white/50">Triggers &amp; flows</p>
</button>
<button className="group rounded-md border border-white/10 bg-white/5 p-3 text-left hover:border-white/20 transition">
<i className="h-4 w-4 text-white/80" data-lucide="database"></i>
<p className="mt-2 text-[12px] text-white/80">Data</p>
<p className="text-[11px] text-white/50">Models &amp; auth</p>
</button>
</div>
<div className="mt-3 rounded-md border border-white/10 bg-black/50 p-3">
<div className="flex items-center justify-between text-[11px] text-white/60">
<span>Preview</span>
<span className="text-emerald-300/80">0 errors</span>
</div>
<div className="mt-2 h-28 w-full rounded-md border border-white/10 bg-[url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&amp;w=1200&amp;auto=format&amp;fit=crop')] bg-cover bg-center"></div>
</div>
</div>
</div>
<div className="mt-4 grid grid-cols-2 gap-3">
<button className="inline-flex items-center justify-center rounded-md border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-white/90 hover:bg-white/10 transition">
<i className="mr-2 h-4 w-4" data-lucide="save"></i>
                    Save draft
                  </button>
<button className="inline-flex items-center justify-center rounded-md bg-white text-black px-3 py-2 text-xs font-semibold hover:bg-white/90 transition">
<i className="mr-2 h-4 w-4" data-lucide="send"></i>
                    Deploy
                  </button>
</div>
</div>
</div>
</div>

<div className="mt-16 border-t border-white/10 pt-10">
<p className="text-xs uppercase tracking-wide text-white/50">Trusted by teams at</p>
<div className="mt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
<div className="rounded-md border border-white/10 bg-white/5 px-3 py-2 text-center text-xs font-semibold tracking-tight text-white/70 hover:text-white hover:bg-white/10 transition">NOVA</div>
<div className="rounded-md border border-white/10 bg-white/5 px-3 py-2 text-center text-xs font-semibold tracking-tight text-white/70 hover:text-white hover:bg-white/10 transition">QUANTA</div>
<div className="rounded-md border border-white/10 bg-white/5 px-3 py-2 text-center text-xs font-semibold tracking-tight text-white/70 hover:text-white hover:bg-white/10 transition">ARCOS</div>
<div className="rounded-md border border-white/10 bg-white/5 px-3 py-2 text-center text-xs font-semibold tracking-tight text-white/70 hover:text-white hover:bg-white/10 transition">LYNX</div>
<div className="rounded-md border border-white/10 bg-white/5 px-3 py-2 text-center text-xs font-semibold tracking-tight text-white/70 hover:text-white hover:bg-white/10 transition">ZENO</div>
<div className="rounded-md border border-white/10 bg-white/5 px-3 py-2 text-center text-xs font-semibold tracking-tight text-white/70 hover:text-white hover:bg-white/10 transition">ATLAS</div>
</div>
</div>
</div>
</section>

<section className="relative py-20 sm:py-24" id="features">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="mx-auto max-w-2xl text-center">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Everything you need to ship quality software</h2>
<p className="mt-3 text-white/70">From design to deploy — unified, extensible, and blazing fast.</p>
</div>
<div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
<div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:bg-white/10/10 transition">
<div className="h-10 w-10 grid place-items-center rounded-md border border-white/10 bg-white/5">
<i className="h-5 w-5" data-lucide="boxes"></i>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight">Composable blocks</h3>
<p className="mt-2 text-sm text-white/70">Drag, drop, and wire up building blocks. Customize with code when you need to.</p>
</div>
<div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:bg-white/10/10 transition">
<div className="h-10 w-10 grid place-items-center rounded-md border border-white/10 bg-white/5">
<i className="h-5 w-5" data-lucide="workflow"></i>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight">Visual automations</h3>
<p className="mt-2 text-sm text-white/70">Trigger actions, schedule jobs, and connect services via a simple canvas.</p>
</div>
<div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:bg-white/10/10 transition">
<div className="h-10 w-10 grid place-items-center rounded-md border border-white/10 bg-white/5">
<i className="h-5 w-5" data-lucide="shield-check"></i>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight">Secure by default</h3>
<p className="mt-2 text-sm text-white/70">Built-in auth, roles, and secrets. SOC2-ready patterns out of the box.</p>
</div>
<div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:bg-white/10/10 transition">
<div className="h-10 w-10 grid place-items-center rounded-md border border-white/10 bg-white/5">
<i className="h-5 w-5" data-lucide="cpu"></i>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight">AI-native</h3>
<p className="mt-2 text-sm text-white/70">Generate scaffolds, tests, and mock data. Let AI handle the boilerplate.</p>
</div>
</div>
<div className="mt-10 grid gap-6 lg:grid-cols-3">
<div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold tracking-tight">Data &amp; Models</h3>
<i className="h-5 w-5 text-white/70" data-lucide="database"></i>
</div>
<p className="mt-2 text-sm text-white/70">Define entities visually, migrate safely, and inspect production data in one place.</p>
<div className="mt-4 rounded-lg border border-white/10 bg-black/40 p-4">
<div className="flex items-center justify-between text-xs text-white/60">
<span>Schema</span><span>3 changes</span>
</div>
<div className="mt-2 grid gap-2">
<div className="flex items-center justify-between rounded-md border border-white/10 bg-white/5 p-2">
<span className="text-[13px]">users</span>
<span className="text-[11px] text-emerald-400/80">+ column: role</span>
</div>
<div className="flex items-center justify-between rounded-md border border-white/10 bg-white/5 p-2">
<span className="text-[13px]">projects</span>
<span className="text-[11px] text-emerald-400/80">+ relation: owner</span>
</div>
<div className="flex items-center justify-between rounded-md border border-white/10 bg-white/5 p-2">
<span className="text-[13px]">tasks</span>
<span className="text-[11px] text-amber-300/80">~ type: status</span>
</div>
</div>
</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold tracking-tight">Collaboration</h3>
<i className="h-5 w-5 text-white/70" data-lucide="users"></i>
</div>
<p className="mt-2 text-sm text-white/70">Real-time presence, comments, and review requests streamline your workflow.</p>
<div className="mt-4 rounded-lg border border-white/10 bg-black/40 p-4">
<div className="flex items-center gap-2 text-xs text-white/60">
<span className="size-2 rounded-full bg-emerald-400/80"></span> You
                  <span className="size-2 rounded-full bg-cyan-400/80 ml-3"></span> Sam
                  <span className="size-2 rounded-full bg-violet-400/80 ml-3"></span> Lee
                </div>
<div className="mt-3 space-y-2">
<div className="flex items-center justify-between rounded-md border border-white/10 bg-white/5 p-2">
<div className="flex items-center gap-2">
<img alt="avatar" className="h-6 w-6 rounded-full" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<span className="text-[13px]">Requested review on “Auth flow”</span>
</div>
<button className="rounded-md bg-white/10 px-2 py-1 text-[11px] hover:bg-white/20">Open</button>
</div>
<div className="flex items-center justify-between rounded-md border border-white/10 bg-white/5 p-2">
<div className="flex items-center gap-2">
<img alt="avatar" className="h-6 w-6 rounded-full" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<span className="text-[13px]">Commented on “Billing page”</span>
</div>
<span className="text-[11px] text-white/60">2m ago</span>
</div>
</div>
</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold tracking-tight">Deploy &amp; Observe</h3>
<i className="h-5 w-5 text-white/70" data-lucide="radar"></i>
</div>
<p className="mt-2 text-sm text-white/70">One-click deploys with instant rollbacks. Logs and metrics built in.</p>
<div className="mt-4 rounded-lg border border-white/10 bg-black/40 p-4">
<div className="grid grid-cols-3 gap-2 text-center">
<div className="rounded-md border border-white/10 bg-white/5 p-3">
<div className="text-[11px] text-white/60">Latency</div>
<div className="text-sm font-medium">38ms</div>
</div>
<div className="rounded-md border border-white/10 bg-white/5 p-3">
<div className="text-[11px] text-white/60">Uptime</div>
<div className="text-sm font-medium">99.99%</div>
</div>
<div className="rounded-md border border-white/10 bg-white/5 p-3">
<div className="text-[11px] text-white/60">Errors</div>
<div className="text-sm font-medium text-emerald-300">0.02%</div>
</div>
</div>
<div className="mt-3 h-24 rounded-md border border-white/10 bg-gradient-to-b from-white/5 to-transparent"></div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-20 sm:py-24 border-t border-white/10" id="showcase">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-10 items-center">
<div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Design visually. Extend with code.</h2>
<p className="mt-3 text-white/70">Craft beautiful interfaces, wire data, and automate tasks. When you need more, jump into code—no limits.</p>
<ul className="mt-6 grid gap-3">
<li className="flex items-start gap-3">
<i className="mt-[2px] h-5 w-5 text-emerald-400" data-lucide="check-circle-2"></i>
<div>
<p className="text-sm font-medium">Blocks for common patterns</p>
<p className="text-sm text-white/60">Auth flows, billing pages, dashboards, and more.</p>
</div>
</li>
<li className="flex items-start gap-3">
<i className="mt-[2px] h-5 w-5 text-emerald-400" data-lucide="check-circle-2"></i>
<div>
<p className="text-sm font-medium">Connect your stack</p>
<p className="text-sm text-white/60">Databases, queues, webhooks, and third‑party APIs.</p>
</div>
</li>
<li className="flex items-start gap-3">
<i className="mt-[2px] h-5 w-5 text-emerald-400" data-lucide="check-circle-2"></i>
<div>
<p className="text-sm font-medium">Preview and ship</p>
<p className="text-sm text-white/60">Run locally, preview with teammates, deploy globally.</p>
</div>
</li>
</ul>
<div className="mt-8 flex items-center gap-3">
<a className="inline-flex items-center rounded-md bg-white text-black px-4 py-2.5 text-sm font-semibold hover:bg-white/90 transition" href="#">
<i className="mr-2 h-4 w-4" data-lucide="download"></i>
                  Try the starter
                </a>
<a className="inline-flex items-center rounded-md border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-medium text-white/90 hover:bg-white/10 transition" href="#">
<i className="mr-2 h-4 w-4" data-lucide="book-open"></i>
                  Documentation
                </a>
</div>
</div>
<div className="relative">
<div className="absolute -inset-6 -z-10 rounded-2xl bg-gradient-to-tr from-blue-500/10 via-violet-500/10 to-cyan-500/10 blur-2xl"></div>
<div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] shadow-2xl">
<img alt="Product interface" className="h-80 w-full object-cover" src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="border-t border-white/10 p-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2 text-xs text-white/70">
<i className="h-4 w-4" data-lucide="cursor-click"></i>
                      Drag elements to build UI
                    </div>
<button className="inline-flex items-center rounded-md border border-white/15 bg-white/5 px-3 py-1.5 text-xs hover:bg-white/10 transition">
<i className="mr-2 h-4 w-4" data-lucide="eye"></i>
                      Preview
                    </button>
</div>
</div>
</div>
</div>
</div>

<div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
<div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
<div className="flex items-center gap-3">
<img alt="avatar" className="h-9 w-9 rounded-full" src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm font-medium">Jordan</p>
<p className="text-xs text-white/60">Founder, ArcLab</p>
</div>
</div>
<p className="mt-4 text-sm text-white/80">We shipped our MVP in two weeks. The editor and deploys are a joy.</p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
<div className="flex items-center gap-3">
<img alt="avatar" className="h-9 w-9 rounded-full" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div>
<p className="text-sm font-medium">Meera</p>
<p className="text-xs text-white/60">Engineering Lead, Nova</p>
</div>
</div>
<p className="mt-4 text-sm text-white/80">Best developer experience we’ve had—our team iterates daily.</p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
<div className="flex items-center gap-3">
<img alt="avatar" className="h-9 w-9 rounded-full" src="https://images.unsplash.com/photo-1546525848-3ce03ca516f6?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm font-medium">Kai</p>
<p className="text-xs text-white/60">CTO, Zeno</p>
</div>
</div>
<p className="mt-4 text-sm text-white/80">From prototype to scale without rewrites. Exactly what we needed.</p>
</div>
</div>
</div>
</section>

<section className="relative py-20 sm:py-24 border-t border-white/10" id="pricing">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="mx-auto max-w-2xl text-center">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Simple, transparent pricing</h2>
<p className="mt-3 text-white/70">Start free. Upgrade when you’re ready.</p>
</div>
<div className="mt-12 grid gap-6 lg:grid-cols-3">

<div className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-6">
<div className="absolute -top-3 left-6 rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] text-white/70">Starter</div>
<h3 className="text-lg font-semibold tracking-tight">Free</h3>
<p className="mt-1 text-sm text-white/70">For hobby projects and exploration.</p>
<div className="mt-5 flex items-end gap-1">
<span className="text-3xl font-semibold tracking-tight">$0</span>
<span className="mb-1 text-sm text-white/60">/mo</span>
</div>
<ul className="mt-4 space-y-2 text-sm">
<li className="flex items-center gap-2 text-white/80"><i className="h-4 w-4 text-emerald-400" data-lucide="check"></i> 1 project</li>
<li className="flex items-center gap-2 text-white/80"><i className="h-4 w-4 text-emerald-400" data-lucide="check"></i> Community support</li>
<li className="flex items-center gap-2 text-white/60"><i className="h-4 w-4 text-white/40" data-lucide="minus"></i> No custom domains</li>
</ul>
<a className="mt-6 inline-flex w-full items-center justify-center rounded-md border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-medium text-white/90 hover:bg-white/10 transition" href="#">Get started</a>
</div>

<div className="relative rounded-2xl border border-emerald-400/30 bg-gradient-to-b from-emerald-400/10 to-transparent p-6">
<div className="absolute -top-3 left-6 rounded-full border border-white/20 bg-white/10 px-2 py-0.5 text-[11px] text-white">Most popular</div>
<h3 className="text-lg font-semibold tracking-tight">Pro</h3>
<p className="mt-1 text-sm text-white/70">For growing teams shipping production apps.</p>
<div className="mt-5 flex items-end gap-1">
<span className="text-3xl font-semibold tracking-tight">$29</span>
<span className="mb-1 text-sm text-white/60">/mo</span>
</div>
<ul className="mt-4 space-y-2 text-sm">
<li className="flex items-center gap-2 text-white/80"><i className="h-4 w-4 text-emerald-400" data-lucide="check"></i> Unlimited projects</li>
<li className="flex items-center gap-2 text-white/80"><i className="h-4 w-4 text-emerald-400" data-lucide="check"></i> Custom domains</li>
<li className="flex items-center gap-2 text-white/80"><i className="h-4 w-4 text-emerald-400" data-lucide="check"></i> Team collaboration</li>
<li className="flex items-center gap-2 text-white/80"><i className="h-4 w-4 text-emerald-400" data-lucide="check"></i> Priority support</li>
</ul>
<a className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-white text-black px-4 py-2.5 text-sm font-semibold hover:bg-white/90 transition" href="#">Upgrade</a>
</div>

<div className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-6">
<div className="absolute -top-3 left-6 rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] text-white/70">Enterprise</div>
<h3 className="text-lg font-semibold tracking-tight">Custom</h3>
<p className="mt-1 text-sm text-white/70">For advanced security, SLAs, and onboarding.</p>
<div className="mt-5 flex items-end gap-1">
<span className="text-3xl font-semibold tracking-tight">Let’s talk</span>
</div>
<ul className="mt-4 space-y-2 text-sm">
<li className="flex items-center gap-2 text-white/80"><i className="h-4 w-4 text-emerald-400" data-lucide="check"></i> SSO/SAML</li>
<li className="flex items-center gap-2 text-white/80"><i className="h-4 w-4 text-emerald-400" data-lucide="check"></i> Dedicated support</li>
<li className="flex items-center gap-2 text-white/80"><i className="h-4 w-4 text-emerald-400" data-lucide="check"></i> Onboarding &amp; training</li>
</ul>
<a className="mt-6 inline-flex w-full items-center justify-center rounded-md border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-medium text-white/90 hover:bg-white/10 transition" href="#">Contact sales</a>
</div>
</div>
</div>
</section>

<section className="relative py-20 sm:py-24 border-t border-white/10" id="faq">
<div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
<div className="mx-auto max-w-2xl text-center">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Frequently asked questions</h2>
<p className="mt-3 text-white/70">Can’t find what you’re looking for? Reach out to our team.</p>
</div>
<div className="mt-10 space-y-3">
<details className="group rounded-xl border border-white/10 bg-white/[0.03] p-4 open:bg-white/[0.05]">
<summary className="flex cursor-pointer list-none items-center justify-between">
<span className="text-sm font-medium">What is Airdev?</span>
<i className="h-4 w-4 transition group-open:rotate-45" data-lucide="plus"></i>
</summary>
<p className="mt-3 text-sm text-white/70">Airdev is a platform to design, build, and deploy apps using composable blocks, visual automations, and built-in deploys.</p>
</details>
<details className="group rounded-xl border border-white/10 bg-white/[0.03] p-4 open:bg-white/[0.05]">
<summary className="flex cursor-pointer list-none items-center justify-between">
<span className="text-sm font-medium">Can I use my own database and APIs?</span>
<i className="h-4 w-4 transition group-open:rotate-45" data-lucide="plus"></i>
</summary>
<p className="mt-3 text-sm text-white/70">Yes. Connect to external databases, queues, and REST/GraphQL APIs, or use the built-in data layer.</p>
</details>
<details className="group rounded-xl border border-white/10 bg-white/[0.03] p-4 open:bg-white/[0.05]">
<summary className="flex cursor-pointer list-none items-center justify-between">
<span className="text-sm font-medium">How does pricing work?</span>
<i className="h-4 w-4 transition group-open:rotate-45" data-lucide="plus"></i>
</summary>
<p className="mt-3 text-sm text-white/70">Start free. Upgrade for unlimited projects, custom domains, collaboration, and priority support.</p>
</details>
<details className="group rounded-xl border border-white/10 bg-white/[0.03] p-4 open:bg-white/[0.05]">
<summary className="flex cursor-pointer list-none items-center justify-between">
<span className="text-sm font-medium">Is it suitable for large teams?</span>
<i className="h-4 w-4 transition group-open:rotate-45" data-lucide="plus"></i>
</summary>
<p className="mt-3 text-sm text-white/70">Yes. Role-based access, audit logs, and approval workflows help teams collaborate at scale.</p>
</details>
</div>
</div>
</section>
</main>

<footer className="relative border-t border-white/10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
<div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
<div>
<div className="flex items-center gap-3">
<div className="grid h-8 w-8 place-items-center rounded-md border border-white/15 bg-white/5">
<span className="text-sm font-semibold tracking-tight">A</span>
</div>
<span className="text-[15px] font-semibold tracking-tight">AIRDEV</span>
</div>
<p className="mt-3 text-sm text-white/60">Build, ship, and scale faster — from idea to production.</p>
</div>
<div>
<p className="text-sm font-medium">Product</p>
<ul className="mt-3 space-y-2 text-sm text-white/70">
<li><a className="hover:text-white" href="#features">Features</a></li>
<li><a className="hover:text-white" href="#showcase">Showcase</a></li>
<li><a className="hover:text-white" href="#pricing">Pricing</a></li>
</ul>
</div>
<div>
<p className="text-sm font-medium">Company</p>
<ul className="mt-3 space-y-2 text-sm text-white/70">
<li><a className="hover:text-white" href="#">About</a></li>
<li><a className="hover:text-white" href="#">Careers</a></li>
<li><a className="hover:text-white" href="#">Press</a></li>
</ul>
</div>
<div>
<p className="text-sm font-medium">Resources</p>
<ul className="mt-3 space-y-2 text-sm text-white/70">
<li><a className="hover:text-white" href="#">Docs</a></li>
<li><a className="hover:text-white" href="#">Community</a></li>
<li><a className="hover:text-white" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-6">
<p className="text-xs text-white/50">© <span id="year"></span> Airdev. All rights reserved.</p>
<div className="flex items-center gap-4">
<a className="inline-flex items-center rounded-md border border-white/15 bg-white/5 px-2.5 py-1.5 text-xs text-white/80 hover:bg-white/10 transition" href="#">
<i className="mr-1.5 h-3.5 w-3.5" data-lucide="twitter"></i> Twitter
            </a>
<a className="inline-flex items-center rounded-md border border-white/15 bg-white/5 px-2.5 py-1.5 text-xs text-white/80 hover:bg-white/10 transition" href="#">
<i className="mr-1.5 h-3.5 w-3.5" data-lucide="github"></i> GitHub
            </a>
<a className="inline-flex items-center rounded-md border border-white/15 bg-white/5 px-2.5 py-1.5 text-xs text-white/80 hover:bg-white/10 transition" href="#">
<i className="mr-1.5 h-3.5 w-3.5" data-lucide="mail"></i> Email
            </a>
</div>
</div>
</div>
</footer>


    </>
  );
}
