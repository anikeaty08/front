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
      
      document.addEventListener('DOMContentLoaded', function () {
        if (window.lucide) {
          lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        }
        var y = document.getElementById('y');
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
      

<header className="fixed inset-x-0 top-0 z-50">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="mt-4 rounded-xl border border-white/10 bg-neutral-900/40 backdrop-blur-md">
<div className="flex items-center justify-between px-4 py-3 sm:px-6">
<a className="group inline-flex items-center gap-3" href="#">
<div className="flex h-8 w-8 items-center justify-center rounded-md border border-white/10 bg-white/5 text-white shadow-sm ring-1 ring-inset ring-white/10 transition-colors group-hover:bg-white/10">
<span className="text-[13px] font-semibold tracking-tight">L</span>
</div>
<span className="text-sm font-semibold tracking-tight text-white/90">Lucid</span>
</a>
<nav className="hidden md:flex items-center gap-6">
<a className="text-sm text-white/70 hover:text-white transition-colors" href="#features">Features</a>
<a className="text-sm text-white/70 hover:text-white transition-colors" href="#editor">Editor</a>
<a className="text-sm text-white/70 hover:text-white transition-colors" href="#pricing">Pricing</a>
<a className="text-sm text-white/70 hover:text-white transition-colors" href="#faq">FAQ</a>
</nav>
<div className="flex items-center gap-2">
<a className="hidden sm:inline-flex items-center rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 hover:bg-white/10 hover:text-white transition-colors focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/30" href="#">Sign in</a>
<a className="inline-flex items-center gap-2 rounded-lg border border-indigo-500/30 bg-indigo-500/10 px-3.5 py-2 text-sm font-medium text-indigo-200 hover:bg-indigo-500/20 hover:text-indigo-100 transition-colors focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400/40" href="#">
<i className="h-4 w-4" data-lucide="zap"></i>
                Start free
              </a>
</div>
</div>
</div>
</div>
</header>

<section className="relative isolate flex min-h-[92vh] items-end overflow-hidden pt-24">

<div className="absolute inset-0 -z-10">
<img alt="Snow-capped mountains above a tranquil valley with soft clouds" className="h-full w-full object-cover object-center" src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2940&auto=format&fit=crop" />
<div className="absolute inset-0 bg-gradient-to-b from-neutral-950/40 via-neutral-950/60 to-neutral-950"></div>
<div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_10%,rgba(99,102,241,0.15),transparent)]"></div>
</div>
<div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">
<div className="max-w-3xl">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur-md">
<span className="inline-flex items-center gap-1">
<i className="h-4 w-4 text-indigo-300" data-lucide="sparkles"></i>
              New
            </span>
<span className="text-white/60">AI‑native, document‑first</span>
</div>
<h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
            Write with clarity.
            <span className="text-white/80">Create at the speed of thought.</span>
</h1>
<p className="mt-4 text-base sm:text-lg text-white/70">
            Lucid blends an editor you already love with intelligence that feels invisible. Autocomplete ideas, apply quick edits, and collaborate with AI—without breaking your writing flow.
          </p>
<div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
<a className="inline-flex items-center justify-center gap-2 rounded-xl border border-indigo-500/40 bg-indigo-500/20 px-5 py-3 text-sm font-medium text-indigo-100 shadow-sm hover:bg-indigo-500/30 hover:text-white transition-colors focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400/50" href="#">
<i className="h-4 w-4" data-lucide="pen-line"></i>
              Start writing free
            </a>
<a className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-white/80 hover:bg-white/10 hover:text-white transition-colors focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/30" href="#">
<i className="h-4 w-4" data-lucide="play-circle"></i>
              See it in action
            </a>
<div className="hidden sm:flex items-center gap-4 ml-auto">
<div className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/70">
<span className="inline-flex items-center gap-1"><i className="h-4 w-4 text-white/60" data-lucide="corner-down-left"></i> Tab</span>
<span className="text-white/50">Autocomplete</span>
</div>
<div className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/70">
<span className="rounded-md border border-white/15 bg-white/5 px-1.5 py-0.5 text-[11px] tracking-tight">⌘K</span>
<span className="text-white/50">Quick Edits</span>
</div>
<div className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/70">
<i className="h-4 w-4 text-white/60" data-lucide="message-square"></i>
<span className="text-white/50">Chat in‑doc</span>
</div>
</div>
</div>
</div>

<div className="mt-10 sm:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-6">

<div className="lg:col-span-8 rounded-2xl border border-white/10 bg-neutral-900/50 shadow-2xl ring-1 ring-white/10 backdrop-blur-md">
<div className="flex items-center justify-between border-b border-white/10 px-4 py-2">
<div className="flex items-center gap-2">
<span className="h-2.5 w-2.5 rounded-full bg-red-400/80"></span>
<span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80"></span>
<span className="h-2.5 w-2.5 rounded-full bg-green-400/80"></span>
</div>
<div className="flex-1 px-3">
<p className="truncate text-center text-xs text-white/60">Research Notes — lucid.doc</p>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[11px] text-white/70 hover:bg-white/10">
<i className="h-3.5 w-3.5" data-lucide="share-2"></i>
                  Share
                </button>
</div>
</div>
<div className="p-4 sm:p-6">
<div className="mx-auto max-w-2xl space-y-4">
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-white">Planning an alpine trek</h2>
<p className="text-sm sm:text-base leading-7 text-white/80">
                  The key to a safe, rewarding alpine trek is preparation. Weather patterns shift quickly, and altitude magnifies small mistakes. With the right plan, the route becomes a rhythm.
                  <span className="ml-1 rounded-md bg-indigo-500/10 px-1.5 py-0.5 text-indigo-200">|</span>
</p>

<div className="relative">
<p className="text-sm sm:text-base leading-7 text-white/80">
                    Pack light, then lighter. Start early. Hydrate often. 
                    <span className="text-white/40">Consider acclimatization days to reduce fatigue and sharpen decision‑making.</span>
</p>
<div className="absolute -top-2 right-0 inline-flex items-center gap-1 rounded-md border border-indigo-500/30 bg-indigo-500/10 px-2 py-1 text-[11px] text-indigo-200">
<i className="h-3.5 w-3.5" data-lucide="sparkles"></i>
                    Tab to accept
                  </div>
</div>

<div className="mt-4 rounded-lg border border-white/10 bg-white/[0.03] p-3">
<div className="flex items-center gap-2 text-xs text-white/60">
<span className="rounded-md border border-white/15 bg-white/5 px-1.5 py-0.5 text-[11px]">⌘K</span>
<span>“make this more concise”</span>
</div>
<p className="mt-2 text-sm leading-7 text-white/80">
                    The mountains reward patient hikers with quiet, crystalline mornings.
                    <span className="text-white/40 line-through"> that feel peaceful</span>
</p>
</div>

<div className="rounded-lg border border-emerald-500/20 bg-emerald-500/10 p-3">
<div className="flex items-center gap-2 text-xs text-emerald-200">
<i className="h-4 w-4" data-lucide="check-circle-2"></i>
                    Edit applied
                  </div>
<p className="mt-1 text-sm text-emerald-100/90">Concise rewrite inserted.</p>
</div>
</div>
</div>
</div>

<aside className="lg:col-span-4 flex flex-col rounded-2xl border border-white/10 bg-neutral-900/50 shadow-2xl ring-1 ring-white/10 backdrop-blur-md">
<div className="flex items-center justify-between border-b border-white/10 px-4 py-2">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-white/80" data-lucide="message-square"></i>
<span className="text-sm text-white/80">AI Chat</span>
</div>
<div className="flex items-center gap-2">
<span className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] text-white/60">Shift+Enter</span>
<span className="text-[11px] text-white/50">new line</span>
</div>
</div>
<div className="flex-1 space-y-3 overflow-hidden p-4">
<div className="max-h-64 space-y-3 overflow-y-auto pr-1">
<div className="flex items-start gap-3">
<div className="h-7 w-7 shrink-0 rounded-full border border-white/10 bg-white/10"></div>
<div className="rounded-lg border border-white/10 bg-white/5 p-3">
<p className="text-sm text-white/80">Summarize the safety checklist into three bullet points.</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="h-7 w-7 shrink-0 rounded-full border border-indigo-500/30 bg-indigo-500/20"></div>
<div className="w-full rounded-lg border border-indigo-500/30 bg-indigo-500/10 p-3">
<ul className="list-disc pl-5 text-sm text-indigo-100/90">
<li>Weather + route plan with turnaround times</li>
<li>Layered clothing, water, calories, first‑aid</li>
<li>Communication, map, leave itinerary</li>
</ul>
<div className="mt-2 flex gap-2">
<button className="inline-flex items-center gap-1 rounded-md border border-indigo-400/30 bg-indigo-400/10 px-2 py-1 text-[11px] text-indigo-100 hover:bg-indigo-400/20">
<i className="h-3.5 w-3.5" data-lucide="plus"></i>
                        Insert
                      </button>
<button className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[11px] text-white/70 hover:bg-white/10">
<i className="h-3.5 w-3.5" data-lucide="replace"></i>
                        Replace selection
                      </button>
</div>
</div>
</div>
<div className="flex items-start gap-3">
<div className="h-7 w-7 shrink-0 rounded-full border border-indigo-500/30 bg-indigo-500/20"></div>
<div className="w-full rounded-lg border border-indigo-500/30 bg-indigo-500/10 p-3">
<p className="text-sm text-indigo-100/90">Want me to add a “Gear Checklist” section after “Planning an alpine trek”?</p>
<div className="mt-2 flex gap-2">
<button className="inline-flex items-center gap-1 rounded-md border border-emerald-400/30 bg-emerald-400/10 px-2 py-1 text-[11px] text-emerald-100 hover:bg-emerald-400/20">
<i className="h-3.5 w-3.5" data-lucide="check"></i>
                        Yes
                      </button>
<button className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[11px] text-white/70 hover:bg-white/10">
<i className="h-3.5 w-3.5" data-lucide="x"></i>
                        No
                      </button>
</div>
</div>
</div>
</div>

<div className="mt-2 rounded-xl border border-white/10 bg-white/5 p-2">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-white/60" data-lucide="sparkles"></i>
<input className="w-full bg-transparent text-sm text-white/80 placeholder-white/40 focus:outline-none" placeholder="Ask about this doc or generate edits…" type="text" />
<button className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/10 px-2 py-1 text-[11px] text-white/70 hover:bg-white/20">
<i className="h-3.5 w-3.5" data-lucide="send"></i>
                    Send
                  </button>
</div>
</div>
</div>
</aside>
</div>

<div className="mt-10 sm:mt-14 flex flex-wrap items-center gap-x-6 gap-y-3 text-white/40">
<span className="text-xs">Trusted by teams and independent writers</span>
<div className="h-px w-8 bg-white/10"></div>
<div className="flex items-center gap-4">
<div className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[11px] tracking-tight">ALP</div>
<div className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[11px] tracking-tight">NOVA</div>
<div className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[11px] tracking-tight">RIDGE</div>
<div className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[11px] tracking-tight">ORBIT</div>
</div>
</div>
</div>
</section>

<section className="relative border-t border-white/10 bg-neutral-950 py-16 sm:py-24" id="features">
<div className="absolute inset-0 bg-[radial-gradient(45%_35%_at_50%_0%,rgba(99,102,241,0.12),transparent)]"></div>
<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="max-w-3xl">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Everything flows from the document</h2>
<p className="mt-3 text-base text-white/70">Lucid keeps your hands on the keyboard. Write, refine, and orchestrate research directly inside the page.</p>
</div>
<div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">

<div className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/[0.07] transition-colors">
<div className="flex items-center gap-2">
<div className="rounded-md border border-indigo-400/30 bg-indigo-400/10 p-2">
<i className="h-5 w-5 text-indigo-200" data-lucide="sparkles"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight">AI Autocomplete</h3>
</div>
<p className="mt-2 text-sm text-white/70">Press Tab to complete sentences or generate the next one from context.</p>
<div className="mt-4 rounded-lg border border-white/10 bg-neutral-900 p-4">
<p className="text-sm text-white/80">
                Alpine air is thin and <span className="text-white/40">the body adapts by pacing, hydrating, and resting appropriately.</span>
</p>
<div className="mt-2 inline-flex items-center gap-1 rounded-md border border-indigo-500/30 bg-indigo-500/10 px-2 py-1 text-[11px] text-indigo-200">
<i className="h-3.5 w-3.5" data-lucide="corner-down-left"></i>
                Tab to accept
              </div>
</div>
</div>

<div className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/[0.07] transition-colors">
<div className="flex items-center gap-2">
<div className="rounded-md border border-emerald-400/30 bg-emerald-400/10 p-2">
<i className="h-5 w-5 text-emerald-200" data-lucide="wand-2"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight">Quick Edits</h3>
</div>
<p className="mt-2 text-sm text-white/70">Highlight any text, press ⌘K, and describe the change—“make this more concise.”</p>
<div className="mt-4 space-y-2 rounded-lg border border-white/10 bg-neutral-900 p-4">
<div className="flex items-center gap-2 text-xs text-white/60">
<span className="rounded-md border border-white/15 bg-white/5 px-1.5 py-0.5 text-[11px]">⌘K</span>
<span>“sharpen tone”</span>
</div>
<p className="text-sm text-white/80">
                The forecast looks <span className="line-through text-white/40">pretty okay</span> <span className="text-emerald-200">stable</span> for a summit attempt.
              </p>
</div>
</div>

<div className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/[0.07] transition-colors">
<div className="flex items-center gap-2">
<div className="rounded-md border border-sky-400/30 bg-sky-400/10 p-2">
<i className="h-5 w-5 text-sky-200" data-lucide="message-square"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight">AI Chat</h3>
</div>
<p className="mt-2 text-sm text-white/70">Research, ask questions, and generate edits—or insert new sections—without leaving the doc.</p>
<div className="mt-4 rounded-lg border border-white/10 bg-neutral-900 p-4">
<div className="flex items-center justify-between">
<p className="text-sm text-white/80">“Add a section on nutrition for high‑altitude.”</p>
<button className="inline-flex items-center gap-1 rounded-md border border-sky-400/30 bg-sky-400/10 px-2 py-1 text-[11px] text-sky-100 hover:bg-sky-400/20">
<i className="h-3.5 w-3.5" data-lucide="plus"></i>
                  Insert
                </button>
</div>
</div>
</div>
</div>

<div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-12" id="editor">
<div className="lg:col-span-7 rounded-2xl border border-white/10 bg-white/[0.04] p-6">
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold tracking-tight">A workspace built around the page</h3>
<div className="inline-flex items-center gap-2 text-xs text-white/60">
<span className="rounded-md border border-white/15 bg-white/5 px-1.5 py-0.5 text-[11px]">/</span>
<span>slash commands</span>
</div>
</div>
<p className="mt-2 text-sm text-white/70">Organize sections, version drafts, and apply AI changes as structured operations you can review and revert.</p>
<div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
<div className="rounded-lg border border-white/10 bg-neutral-900 p-4">
<div className="flex items-center gap-2 text-xs text-white/60">
<i className="h-4 w-4" data-lucide="history"></i>
                  Change history
                </div>
<ul className="mt-2 space-y-2 text-sm text-white/80">
<li className="flex items-center justify-between">
<span>Inserted “Gear Checklist”</span>
<span className="text-white/40">+142 words</span>
</li>
<li className="flex items-center justify-between">
<span>Concise rewrite</span>
<span className="text-white/40">−23 words</span>
</li>
</ul>
</div>
<div className="rounded-lg border border-white/10 bg-neutral-900 p-4">
<div className="flex items-center gap-2 text-xs text-white/60">
<i className="h-4 w-4" data-lucide="search"></i>
                  Context aware
                </div>
<p className="mt-2 text-sm text-white/80">Prompts automatically include section headers, selections, and prior edits to keep outcomes precise.</p>
</div>
</div>
</div>
<div className="lg:col-span-5 rounded-2xl border border-white/10 bg-white/[0.04] p-6">
<h3 className="text-lg font-semibold tracking-tight">Keyboard‑first by design</h3>
<p className="mt-2 text-sm text-white/70">Type, Tab, and ⌘K—no context switching required.</p>
<div className="mt-4 space-y-3">
<div className="flex items-center justify-between rounded-lg border border-white/10 bg-neutral-900 p-3">
<div className="flex items-center gap-2 text-sm text-white/80">
<i className="h-4 w-4 text-white/60" data-lucide="corner-down-left"></i>
                  Tab to autocomplete
                </div>
<span className="rounded-md border border-white/15 bg-white/5 px-1.5 py-0.5 text-[11px]">Tab</span>
</div>
<div className="flex items-center justify-between rounded-lg border border-white/10 bg-neutral-900 p-3">
<div className="flex items-center gap-2 text-sm text-white/80">
<i className="h-4 w-4 text-white/60" data-lucide="wand-2"></i>
                  Quick Edits palette
                </div>
<span className="rounded-md border border-white/15 bg-white/5 px-1.5 py-0.5 text-[11px]">⌘K</span>
</div>
<div className="flex items-center justify-between rounded-lg border border-white/10 bg-neutral-900 p-3">
<div className="flex items-center gap-2 text-sm text-white/80">
<i className="h-4 w-4 text-white/60" data-lucide="message-square"></i>
                  Chat in document
                </div>
<span className="rounded-md border border-white/15 bg-white/5 px-1.5 py-0.5 text-[11px]">⌘⇧C</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative border-t border-white/10 bg-neutral-950 py-16 sm:py-24" id="pricing">
<div className="absolute inset-0 bg-[radial-gradient(40%_30%_at_70%_0%,rgba(16,185,129,0.09),transparent)]"></div>
<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
<div className="lg:col-span-7">
<h3 className="text-3xl sm:text-4xl font-semibold tracking-tight">From draft to publish—without friction</h3>
<p className="mt-3 text-base text-white/70">Start free. Upgrade when you need more collaborators, longer context, or workspace controls.</p>
<ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
<li className="flex items-center gap-2 text-sm text-white/80">
<i className="h-4 w-4 text-emerald-300" data-lucide="check"></i>
                Unlimited documents
              </li>
<li className="flex items-center gap-2 text-sm text-white/80">
<i className="h-4 w-4 text-emerald-300" data-lucide="check"></i>
                Contextual autocomplete
              </li>
<li className="flex items-center gap-2 text-sm text-white/80">
<i className="h-4 w-4 text-emerald-300" data-lucide="check"></i>
                Quick Edits (⌘K) actions
              </li>
<li className="flex items-center gap-2 text-sm text-white/80">
<i className="h-4 w-4 text-emerald-300" data-lucide="check"></i>
                In‑doc AI chat
              </li>
</ul>
</div>
<div className="lg:col-span-5">
<div className="rounded-2xl border border-white/10 bg-white/5 p-6">
<div className="flex items-baseline gap-2">
<span className="text-3xl font-semibold tracking-tight text-white">$0</span>
<span className="text-sm text-white/60">Starter</span>
</div>
<p className="mt-2 text-sm text-white/70">Everything you need to write smarter. No credit card.</p>
<a className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-emerald-400/30 bg-emerald-400/10 px-4 py-2.5 text-sm font-medium text-emerald-100 hover:bg-emerald-400/20" href="#">
<i className="h-4 w-4" data-lucide="rocket"></i>
                Create your account
              </a>
<div className="mt-4 h-px w-full bg-white/10"></div>
<div className="mt-4 flex items-center justify-between text-sm text-white/70">
<span>Pro</span>
<span className="text-white/90">$12/user/mo</span>
</div>
<div className="mt-2 flex items-center justify-between text-sm text-white/70">
<span>Team</span>
<span className="text-white/90">Custom</span>
</div>
<a className="mt-3 inline-flex items-center gap-2 text-xs text-white/60 hover:text-white" href="#">
<i className="h-4 w-4" data-lucide="help-circle"></i>
                Compare plans
              </a>
</div>
</div>
</div>
</div>
</section>

<section className="relative border-t border-white/10 bg-neutral-950 py-16" id="faq">
<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 gap-10 md:grid-cols-2">
<div>
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">Questions, answered</h3>
<p className="mt-2 text-sm text-white/70">If you have other questions, we’re just a message away.</p>
</div>
<div className="space-y-6">
<div className="rounded-2xl border border-white/10 bg-white/5 p-5">
<div className="flex items-start justify-between gap-8">
<div>
<h4 className="text-base font-medium">How is Lucid different from chat‑first tools?</h4>
<p className="mt-1 text-sm text-white/70">Lucid is document‑first. Chat augments writing instead of replacing it, so your ideas stay structured and editable.</p>
</div>
</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-5">
<h4 className="text-base font-medium">Can I review edits before applying?</h4>
<p className="mt-1 text-sm text-white/70">Yes. Every AI action is diff‑able and reversible, with a clear history you can roll back.</p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-5">
<h4 className="text-base font-medium">Does autocomplete learn my style?</h4>
<p className="mt-1 text-sm text-white/70">Autocomplete adapts to document context and your prior edits, producing suggestions aligned to your tone.</p>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/10 bg-neutral-950">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
<div className="flex items-center gap-3">
<div className="flex h-8 w-8 items-center justify-center rounded-md border border-white/10 bg-white/5 text-white shadow-sm ring-1 ring-inset ring-white/10">
<span className="text-[13px] font-semibold tracking-tight">L</span>
</div>
<span className="text-sm font-semibold tracking-tight text-white/80">Lucid</span>
</div>
<div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/60">
<a className="hover:text-white" href="#">Privacy</a>
<a className="hover:text-white" href="#">Terms</a>
<a className="hover:text-white" href="#">Security</a>
<a className="hover:text-white" href="#">Contact</a>
</div>
</div>
<div className="mt-6 flex items-center justify-between border-t border-white/10 pt-6">
<p className="text-xs text-white/40">© <span id="y">2025</span> Lucid. All rights reserved.</p>
<div className="flex items-center gap-3">
<a className="inline-flex items-center justify-center rounded-md border border-white/10 bg-white/5 p-1.5 text-white/70 hover:bg-white/10" href="#">
<i className="h-4 w-4" data-lucide="twitter"></i>
</a>
<a className="inline-flex items-center justify-center rounded-md border border-white/10 bg-white/5 p-1.5 text-white/70 hover:bg-white/10" href="#">
<i className="h-4 w-4" data-lucide="github"></i>
</a>
</div>
</div>
</div>
</footer>




    </>
  );
}
