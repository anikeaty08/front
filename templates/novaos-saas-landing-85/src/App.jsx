import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Simple auto year
      document.getElementById('year').textContent = new Date().getFullYear();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="relative flex min-h-screen flex-col overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(148,163,253,0.18),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(56,189,248,0.18),_transparent_55%)]">

<div className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[40rem] -translate-x-1/2 rounded-full bg-indigo-500/25 blur-3xl"></div>

<header className="z-20 border-b border-slate-800/80 bg-slate-950/60 backdrop-blur-xl">
<div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 md:px-6 lg:px-8">
<div className="flex items-center gap-3">
<div className="flex h-8 w-8 items-center justify-center rounded-2xl bg-slate-900/80 ring-1 ring-slate-700/80">
<span className="text-sm font-semibold tracking-tight text-slate-100" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', \'SF Pro Display\', sans-serif'}}>
                N
              </span>
</div>
<span className="text-base font-semibold tracking-tight text-slate-100" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Display\', sans-serif'}}>
              nova<span className="text-slate-400">OS</span>
</span>
</div>
<nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
<a className="transition-colors hover:text-slate-50" href="#product">
              Product
            </a>
<a className="transition-colors hover:text-slate-50" href="#features">
              Features
            </a>
<a className="transition-colors hover:text-slate-50" href="#testimonials">
              Customers
            </a>
<a className="transition-colors hover:text-slate-50" href="#pricing">
              Pricing
            </a>
</nav>
<div className="hidden items-center gap-3 md:flex">
<button className="rounded-full border border-slate-700/80 bg-slate-900/60 px-4 py-1.5 text-sm font-medium tracking-tight text-slate-100 shadow-sm shadow-slate-900/40 transition hover:border-slate-500 hover:bg-slate-900" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
              Sign in
            </button>
<button className="rounded-full bg-indigo-500/90 px-4 py-1.5 text-sm font-medium tracking-tight text-slate-50 shadow-lg shadow-indigo-500/40 transition hover:bg-indigo-400" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
              Get started
            </button>
</div>

<button aria-label="Toggle navigation" className="inline-flex items-center justify-center rounded-full border border-slate-700/70 bg-slate-900/70 p-2 text-slate-200 shadow-sm shadow-slate-900/40 md:hidden">
<i className="lucide lucide-menu w-5 h-5" style={{strokeWidth: '1.5'}}></i>
</button>
</div>
</header>

<main className="flex-1">
<section className="relative mx-auto flex max-w-6xl flex-col gap-12 px-4 pb-16 pt-10 md:px-6 lg:flex-row lg:items-center lg:gap-16 lg:px-8 lg:pb-24 lg:pt-16" id="hero">

<div className="relative z-10 flex-1 space-y-7">
<div className="inline-flex items-center gap-2 rounded-full bg-slate-900/70 px-3 py-1 text-xs text-slate-300 ring-1 ring-slate-700/80 backdrop-blur">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
<span className="font-medium tracking-tight" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                New
              </span>
<span className="text-slate-400">NovaOS 3.0 now available</span>
</div>
<div className="space-y-4">
<h1 className="max-w-xl text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl lg:text-6xl" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Display\', sans-serif'}}>
                The operating system for your
                <span className="bg-gradient-to-r from-indigo-400 via-sky-400 to-slate-100 bg-clip-text text-transparent">modern team</span>.
              </h1>
<p className="max-w-lg text-base leading-relaxed text-slate-300 md:text-lg" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                NovaOS connects product, engineering, and operations into a single,
                calm workspace. Plan, build, and ship without switching tabs.
              </p>
</div>
<div className="flex flex-wrap items-center gap-3">
<button className="inline-flex items-center justify-center rounded-full bg-slate-50 px-6 py-2 text-sm font-medium tracking-tight text-slate-900 shadow-xl shadow-slate-950/40 transition hover:bg-slate-200" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                Start free trial
                <i className="lucide lucide-arrow-right ml-2 h-4 w-4" style={{strokeWidth: '1.5'}}></i>
</button>
<button className="inline-flex items-center justify-center rounded-full border border-slate-700/80 bg-slate-900/70 px-5 py-2 text-sm font-medium tracking-tight text-slate-100 shadow-sm shadow-slate-950/40 transition hover:border-slate-500" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                Watch demo
                <i className="lucide lucide-play ml-2 h-4 w-4" style={{strokeWidth: '1.5'}}></i>
</button>
</div>
<div className="flex flex-wrap items-center gap-6 pt-2">
<div className="flex -space-x-2">
<div className="h-7 w-7 rounded-full border border-slate-900 bg-gradient-to-br from-slate-600 to-slate-300"></div>
<div className="h-7 w-7 rounded-full border border-slate-900 bg-gradient-to-br from-indigo-500 to-sky-400"></div>
<div className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-900 bg-slate-800/80 text-[0.625rem] font-medium text-slate-200" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                  +42k
                </div>
</div>
<p className="text-xs text-slate-400 md:text-sm" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                Trusted by fast-moving teams worldwide.
              </p>
</div>
</div>

<div className="relative flex-1">
<div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(129,140,248,0.22),_transparent_60%)]"></div>
<div className="relative mx-auto mt-4 w-full max-w-xl rounded-3xl border border-slate-700/70 bg-slate-900/60 p-3 shadow-2xl shadow-slate-900/70 backdrop-blur-xl">

<div className="flex items-center justify-between rounded-2xl bg-slate-900/80 px-3 py-2">
<div className="flex items-center gap-1.5">
<span className="h-2 w-2 rounded-full bg-rose-500/80"></span>
<span className="h-2 w-2 rounded-full bg-amber-400/80"></span>
<span className="h-2 w-2 rounded-full bg-emerald-400/80"></span>
</div>
<div className="flex items-center gap-2 text-[0.625rem] text-slate-400">
<span className="rounded-full bg-slate-800/80 px-2 py-0.5" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                    app.novaos.com
                  </span>
</div>
</div>
<div className="space-y-3 p-3">

<div className="flex flex-wrap items-center justify-between gap-2">
<div className="flex items-center gap-2">
<div className="flex h-7 w-7 items-center justify-center rounded-xl bg-indigo-500/90 text-xs font-semibold text-slate-50 shadow-md shadow-indigo-500/40" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Display\', sans-serif'}}>
                      N
                    </div>
<div>
<p className="text-xs font-medium tracking-tight text-slate-100 md:text-sm" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                        Launch roadmap
                      </p>
<p className="text-[0.7rem] text-slate-400 md:text-xs" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                        Q4 • Product · Engineering
                      </p>
</div>
</div>
<div className="flex items-center gap-2">
<span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[0.7rem] font-medium text-emerald-300 ring-1 ring-emerald-500/40" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                      On track
                    </span>
<i className="lucide lucide-more-horizontal h-4 w-4 text-slate-500" style={{strokeWidth: '1.5'}}></i>
</div>
</div>

<div className="grid gap-3 md:grid-cols-3">

<div className="space-y-2 rounded-2xl bg-slate-900/80 p-2 ring-1 ring-slate-700/70">
<p className="mb-1 text-[0.7rem] font-medium tracking-tight text-slate-300 md:text-xs" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                      Today
                    </p>
<div className="space-y-1.5 text-[0.7rem] text-slate-200 md:text-xs" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
<div className="flex items-center justify-between rounded-xl bg-slate-800/80 px-2 py-1">
<span>Spec API contracts</span>
<span className="text-slate-400">09:30</span>
</div>
<div className="flex items-center justify-between rounded-xl bg-slate-800/60 px-2 py-1">
<span>Design review v3</span>
<span className="text-slate-400">11:00</span>
</div>
<div className="flex items-center justify-between rounded-xl bg-slate-800/40 px-2 py-1">
<span>Infra sync</span>
<span className="text-slate-400">14:15</span>
</div>
</div>
</div>

<div className="col-span-2 space-y-2 rounded-2xl bg-slate-900/80 p-2 ring-1 ring-slate-700/70">
<div className="flex items-center justify-between text-[0.7rem] text-slate-300 md:text-xs" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
<span>Velocity</span>
<span className="text-slate-500">Last 6 weeks</span>
</div>
<div className="flex h-16 items-end gap-1 overflow-hidden rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 px-1.5 pb-1.5">
<div className="h-4 flex-1 rounded-full bg-slate-700/80"></div>
<div className="h-6 flex-1 rounded-full bg-slate-600/80"></div>
<div className="h-9 flex-1 rounded-full bg-indigo-500/90"></div>
<div className="h-7 flex-1 rounded-full bg-slate-600/80"></div>
<div className="h-11 flex-1 rounded-full bg-sky-400/90"></div>
<div className="h-10 flex-1 rounded-full bg-indigo-500/90"></div>
</div>
</div>
</div>

<div className="flex flex-wrap items-center justify-between gap-2 pt-1">
<div className="flex items-center gap-2">
<div className="inline-flex items-center gap-1 rounded-full bg-slate-900/80 px-2 py-1 text-[0.7rem] text-slate-300 ring-1 ring-slate-700/80 md:text-xs" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
<i className="lucide lucide-bolt h-3.5 w-3.5 text-amber-300" style={{strokeWidth: '1.5'}}></i>
<span>Automations</span>
</div>
<div className="inline-flex items-center gap-1 rounded-full bg-slate-900/80 px-2 py-1 text-[0.7rem] text-slate-300 ring-1 ring-slate-700/80 md:text-xs" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
<i className="lucide lucide-shield-check h-3.5 w-3.5 text-emerald-300" style={{strokeWidth: '1.5'}}></i>
<span>Secure by default</span>
</div>
</div>
<div className="flex items-center gap-1 text-[0.7rem] text-slate-400 md:text-xs" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
<i className="lucide lucide-users h-3.5 w-3.5" style={{strokeWidth: '1.5'}}></i>
<span>42 teammates online</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-6xl space-y-6 px-4 pb-16 md:px-6 lg:px-8 lg:pb-20" id="product">
<div className="flex flex-wrap items-end justify-between gap-4">
<div>
<p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400 md:text-sm" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                Overview
              </p>
<h2 className="mt-1 text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Display\', sans-serif'}}>
                One surface for your entire product lifecycle.
              </h2>
</div>
<p className="max-w-md text-sm text-slate-300 md:text-base" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
              Switch between roadmap, tasks, and live metrics in a single
              interface. NovaOS keeps everyone aligned without the noisy overhead.
            </p>
</div>
<div className="grid gap-3 md:grid-cols-5">
<div className="md:col-span-3 rounded-3xl border border-slate-800/80 bg-slate-900/70 p-3 shadow-xl shadow-slate-950/60 backdrop-blur-xl">
<div className="h-48 rounded-2xl bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 md:h-64">

<div className="flex h-full flex-col gap-2 p-3 text-[0.7rem] md:text-xs" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="rounded-full bg-slate-900/80 px-2 py-0.5 text-slate-200">
                        Sprint 24
                      </span>
<span className="text-slate-500">Ship NovaOS 3.0</span>
</div>
<div className="flex items-center gap-2 text-slate-400">
<i className="lucide lucide-filter h-3.5 w-3.5" style={{strokeWidth: '1.5'}}></i>
<i className="lucide lucide-layout-dashboard h-3.5 w-3.5" style={{strokeWidth: '1.5'}}></i>
</div>
</div>
<div className="grid flex-1 grid-cols-4 gap-1.5 pt-1.5">
<div className="space-y-1 rounded-xl bg-slate-900/80 p-1.5 text-slate-200">
<p className="text-[0.7rem] font-medium">Backlog</p>
<div className="space-y-1">
<div className="rounded-lg bg-slate-800/80 p-1.5 text-[0.65rem]">
                          OAuth device flow
                        </div>
<div className="rounded-lg bg-slate-800/70 p-1.5 text-[0.65rem]">
                          Billing edge cases
                        </div>
</div>
</div>
<div className="space-y-1 rounded-xl bg-slate-900/80 p-1.5 text-slate-200">
<p className="text-[0.7rem] font-medium">In progress</p>
<div className="space-y-1">
<div className="rounded-lg bg-indigo-500/20 p-1.5 text-[0.65rem] text-indigo-100 ring-1 ring-indigo-500/40">
                          Real-time presence
                        </div>
<div className="rounded-lg bg-slate-800/70 p-1.5 text-[0.65rem]">
                          New sidebar navigation
                        </div>
</div>
</div>
<div className="space-y-1 rounded-xl bg-slate-900/80 p-1.5 text-slate-200">
<p className="text-[0.7rem] font-medium">Review</p>
<div className="space-y-1">
<div className="rounded-lg bg-slate-800/70 p-1.5 text-[0.65rem]">
                          Incident workflow
                        </div>
<div className="rounded-lg bg-slate-800/50 p-1.5 text-[0.65rem]">
                          App performance
                        </div>
</div>
</div>
<div className="space-y-1 rounded-xl bg-slate-900/80 p-1.5 text-slate-200">
<p className="text-[0.7rem] font-medium">Shipped</p>
<div className="space-y-1">
<div className="flex items-center justify-between rounded-lg bg-emerald-500/10 p-1.5 text-[0.65rem] text-emerald-100 ring-1 ring-emerald-500/40">
<span>Spaces v2</span>
<i className="lucide lucide-check h-3 w-3" style={{strokeWidth: '1.5'}}></i>
</div>
<div className="rounded-lg bg-slate-800/50 p-1.5 text-[0.65rem]">
                          Alert routing
                        </div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="md:col-span-2 space-y-3">
<div className="rounded-2xl border border-slate-800/80 bg-slate-900/70 p-3 shadow-lg shadow-slate-950/50 backdrop-blur-xl">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2 text-xs text-slate-200 md:text-sm" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
<i className="lucide lucide-activity h-4 w-4 text-sky-300" style={{strokeWidth: '1.5'}}></i>
<span>Live health</span>
</div>
<span className="text-[0.7rem] text-emerald-300 md:text-xs" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                    99.98% uptime
                  </span>
</div>
<div className="mt-2 h-16 rounded-xl bg-gradient-to-r from-slate-900 to-slate-950">
<div className="flex h-full items-center justify-between px-3">
<div className="h-8 w-24 rounded-lg bg-gradient-to-r from-emerald-400/70 to-sky-400/70"></div>
<div className="h-10 w-28 rounded-lg bg-gradient-to-r from-indigo-500/70 to-sky-400/70"></div>
<div className="h-6 w-20 rounded-lg bg-gradient-to-r from-slate-600/80 to-slate-500/80"></div>
</div>
</div>
</div>
<div className="rounded-2xl border border-slate-800/80 bg-slate-900/70 p-3 shadow-lg shadow-slate-950/50 backdrop-blur-xl">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2 text-xs text-slate-200 md:text-sm" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
<i className="lucide lucide-message-circle h-4 w-4 text-indigo-300" style={{strokeWidth: '1.5'}}></i>
<span>Team inbox</span>
</div>
<span className="text-[0.7rem] text-slate-400 md:text-xs" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                    4 unresolved
                  </span>
</div>
<div className="mt-2 space-y-1.5 text-[0.7rem] md:text-xs">
<div className="flex items-center justify-between rounded-xl bg-slate-800/80 px-2 py-1.5 text-slate-100">
<span>Deploy preview feedback</span>
<span className="text-slate-400">Product</span>
</div>
<div className="flex items-center justify-between rounded-xl bg-slate-800/50 px-2 py-1.5 text-slate-100">
<span>Incident #1942 follow-up</span>
<span className="text-slate-400">Ops</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-6xl space-y-8 px-4 pb-16 md:px-6 lg:px-8 lg:pb-20" id="features">
<div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
<div>
<p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400 md:text-sm" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                Features
              </p>
<h2 className="mt-1 text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Display\', sans-serif'}}>
                Built for speed, designed for clarity.
              </h2>
</div>
<p className="max-w-md text-sm text-slate-300 md:text-base" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
              Every detail is tuned to keep teams in flow—from instant search to
              ambient presence and deep integrations.
            </p>
</div>
<div className="grid gap-4 md:grid-cols-3">

<article className="group rounded-3xl border border-slate-800/80 bg-slate-950/60 p-4 shadow-lg shadow-slate-950/60 ring-1 ring-transparent backdrop-blur-xl transition hover:border-slate-700 hover:ring-indigo-500/40">
<div className="flex items-center justify-between gap-2">
<div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-indigo-500/20 text-indigo-200">
<i className="lucide lucide-command h-4 w-4" style={{strokeWidth: '1.5'}}></i>
</div>
<span className="rounded-full bg-slate-900/80 px-2 py-0.5 text-[0.7rem] text-slate-300" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                  Keyboard-first
                </span>
</div>
<h3 className="mt-4 text-base font-semibold tracking-tight text-slate-50 md:text-lg" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Display\', sans-serif'}}>
                Command palette everything
              </h3>
<p className="mt-2 text-sm text-slate-300 md:text-base" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                Jump between workspaces, create tasks, or trigger automations with a
                single keystroke. No menus, no friction.
              </p>
</article>
<article className="group rounded-3xl border border-slate-800/80 bg-slate-950/60 p-4 shadow-lg shadow-slate-950/60 ring-1 ring-transparent backdrop-blur-xl transition hover:border-slate-700 hover:ring-indigo-500/40">
<div className="flex items-center justify-between gap-2">
<div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-sky-500/20 text-sky-200">
<i className="lucide lucide-radar h-4 w-4" style={{strokeWidth: '1.5'}}></i>
</div>
<span className="rounded-full bg-slate-900/80 px-2 py-0.5 text-[0.7rem] text-slate-300" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                  Live awareness
                </span>
</div>
<h3 className="mt-4 text-base font-semibold tracking-tight text-slate-50 md:text-lg" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Display\', sans-serif'}}>
                Presence that stays quiet
              </h3>
<p className="mt-2 text-sm text-slate-300 md:text-base" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                See who is viewing or editing without flashing avatars everywhere.
                Collaboration, without the noise.
              </p>
</article>
<article className="group rounded-3xl border border-slate-800/80 bg-slate-950/60 p-4 shadow-lg shadow-slate-950/60 ring-1 ring-transparent backdrop-blur-xl transition hover:border-slate-700 hover:ring-indigo-500/40">
<div className="flex items-center justify-between gap-2">
<div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-emerald-500/20 text-emerald-200">
<i className="lucide lucide-plug-2 h-4 w-4" style={{strokeWidth: '1.5'}}></i>
</div>
<span className="rounded-full bg-slate-900/80 px-2 py-0.5 text-[0.7rem] text-slate-300" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                  Deep integrations
                </span>
</div>
<h3 className="mt-4 text-base font-semibold tracking-tight text-slate-50 md:text-lg" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Display\', sans-serif'}}>
                Connect your stack in minutes
              </h3>
<p className="mt-2 text-sm text-slate-300 md:text-base" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                First-class support for Git, incidents, alerts, and customer data
                so every decision is grounded in reality.
              </p>
</article>
<article className="group rounded-3xl border border-slate-800/80 bg-slate-950/60 p-4 shadow-lg shadow-slate-950/60 ring-1 ring-transparent backdrop-blur-xl transition hover:border-slate-700 hover:ring-indigo-500/40">
<div className="flex items-center justify-between gap-2">
<div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-amber-500/20 text-amber-200">
<i className="lucide lucide-sparkles h-4 w-4" style={{strokeWidth: '1.5'}}></i>
</div>
<span className="rounded-full bg-slate-900/80 px-2 py-0.5 text-[0.7rem] text-slate-300" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                  AI assist
                </span>
</div>
<h3 className="mt-4 text-base font-semibold tracking-tight text-slate-50 md:text-lg" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Display\', sans-serif'}}>
                Summaries that actually help
              </h3>
<p className="mt-2 text-sm text-slate-300 md:text-base" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                Turn noisy threads and incident logs into crisp briefs in seconds,
                always linked back to the source.
              </p>
</article>
<article className="group rounded-3xl border border-slate-800/80 bg-slate-950/60 p-4 shadow-lg shadow-slate-950/60 ring-1 ring-transparent backdrop-blur-xl transition hover:border-slate-700 hover:ring-indigo-500/40">
<div className="flex items-center justify-between gap-2">
<div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-rose-500/20 text-rose-200">
<i className="lucide lucide-lock-keyhole h-4 w-4" style={{strokeWidth: '1.5'}}></i>
</div>
<span className="rounded-full bg-slate-900/80 px-2 py-0.5 text-[0.7rem] text-slate-300" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                  Enterprise ready
                </span>
</div>
<h3 className="mt-4 text-base font-semibold tracking-tight text-slate-50 md:text-lg" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Display\', sans-serif'}}>
                Security by default
              </h3>
<p className="mt-2 text-sm text-slate-300 md:text-base" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                SSO, audit logs, granular permissions, and regional data
                residency—built in from day one.
              </p>
</article>
<article className="group rounded-3xl border border-slate-800/80 bg-slate-950/60 p-4 shadow-lg shadow-slate-950/60 ring-1 ring-transparent backdrop-blur-xl transition hover:border-slate-700 hover:ring-indigo-500/40">
<div className="flex items-center justify-between gap-2">
<div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-slate-500/25 text-slate-100">
<i className="lucide lucide-globe-2 h-4 w-4" style={{strokeWidth: '1.5'}}></i>
</div>
<span className="rounded-full bg-slate-900/80 px-2 py-0.5 text-[0.7rem] text-slate-300" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                  Global
                </span>
</div>
<h3 className="mt-4 text-base font-semibold tracking-tight text-slate-50 md:text-lg" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Display\', sans-serif'}}>
                Fast, everywhere
              </h3>
<p className="mt-2 text-sm text-slate-300 md:text-base" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                Edge-cached assets, intelligent sync, and offline-aware clients
                keep teams unblocked across time zones.
              </p>
</article>
</div>
</section>

<section className="mx-auto max-w-6xl space-y-8 px-4 pb-16 md:px-6 lg:px-8 lg:pb-20" id="testimonials">
<div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
<div>
<p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400 md:text-sm" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                Testimonials
              </p>
<h2 className="mt-1 text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Display\', sans-serif'}}>
                Teams that move fast, without the chaos.
              </h2>
</div>
<div className="flex items-center gap-3 text-xs text-slate-400 md:text-sm">
<span style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                4.9 average rating across 1,200+ teams
              </span>
</div>
</div>
<div className="relative overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-950/70 p-4 shadow-xl shadow-slate-950/60 backdrop-blur-xl md:p-6">

<div className="grid gap-6 md:grid-cols-[1.5fr,1fr] md:items-center">
<div className="space-y-4">
<div className="flex items-center gap-1 text-amber-300">
<i className="lucide lucide-star h-4 w-4" style={{strokeWidth: '1.5'}}></i>
<i className="lucide lucide-star h-4 w-4" style={{strokeWidth: '1.5'}}></i>
<i className="lucide lucide-star h-4 w-4" style={{strokeWidth: '1.5'}}></i>
<i className="lucide lucide-star h-4 w-4" style={{strokeWidth: '1.5'}}></i>
<i className="lucide lucide-star h-4 w-4" style={{strokeWidth: '1.5'}}></i>
</div>
<p className="text-lg font-medium leading-relaxed tracking-tight text-slate-50 md:text-xl" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Display\', sans-serif'}}>
                  “NovaOS is the first tool that actually reduced our meetings. Everyone
                  can see what matters in one place, in real time.”
                </p>
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-full bg-gradient-to-br from-slate-300 to-slate-500"></div>
<div>
<p className="text-sm font-medium text-slate-100 md:text-base" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                      Amira Chen
                    </p>
<p className="text-xs text-slate-400 md:text-sm" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                      VP Product, Northwind Labs
                    </p>
</div>
</div>
</div>
<div className="space-y-4 rounded-2xl bg-slate-900/60 p-4 ring-1 ring-slate-800">
<p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400 md:text-sm" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                  Impact
                </p>
<div className="space-y-3">
<div className="flex items-center justify-between">
<div>
<p className="text-sm font-medium text-slate-100 md:text-base" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                        36% faster shipping
                      </p>
<p className="text-xs text-slate-400 md:text-sm" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                        Cycle time, Q1 vs Q2
                      </p>
</div>
<span className="rounded-full bg-emerald-500/15 px-2 py-1 text-xs font-medium text-emerald-300 ring-1 ring-emerald-500/40 md:text-sm" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                      +36%
                    </span>
</div>
<div className="flex items-center justify-between">
<div>
<p className="text-sm font-medium text-slate-100 md:text-base" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                        12 fewer meetings/wk
                      </p>
<p className="text-xs text-slate-400 md:text-sm" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                        Across product &amp; eng
                      </p>
</div>
<span className="rounded-full bg-slate-800/80 px-2 py-1 text-xs font-medium text-slate-200 md:text-sm" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                      –27 hrs
                    </span>
</div>
<div className="flex items-center justify-between">
<div>
<p className="text-sm font-medium text-slate-100 md:text-base" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                        NPS 86
                      </p>
<p className="text-xs text-slate-400 md:text-sm" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                        From 68 in three months
                      </p>
</div>
<span className="rounded-full bg-indigo-500/15 px-2 py-1 text-xs font-medium text-indigo-200 ring-1 ring-indigo-500/40 md:text-sm" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                      +18
                    </span>
</div>
</div>
</div>
</div>

<div className="mt-4 flex items-center justify-between border-t border-slate-800 pt-4 text-xs text-slate-400 md:mt-6 md:text-sm">
<p style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                1 of 3 case studies
              </p>
<div className="flex items-center gap-3">
<button aria-label="Previous testimonial" className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-700/80 bg-slate-900/80 text-slate-200 shadow-sm shadow-slate-950/40 transition hover:border-slate-500">
<i className="lucide lucide-chevron-left h-4 w-4" style={{strokeWidth: '1.5'}}></i>
</button>
<button aria-label="Next testimonial" className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-700/80 bg-slate-900/80 text-slate-200 shadow-sm shadow-slate-950/40 transition hover:border-slate-500">
<i className="lucide lucide-chevron-right h-4 w-4" style={{strokeWidth: '1.5'}}></i>
</button>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-6xl space-y-8 px-4 pb-20 md:px-6 lg:px-8 lg:pb-24" id="pricing">
<div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
<div>
<p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400 md:text-sm" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                Pricing
              </p>
<h2 className="mt-1 text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Display\', sans-serif'}}>
                Simple, transparent plans.
              </h2>
</div>
<div className="flex items-center gap-2 text-xs text-slate-400 md:text-sm">
<span style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                No credit card required. Cancel anytime.
              </span>
</div>
</div>

<div className="flex items-center justify-center gap-3 rounded-2xl bg-slate-900/60 p-2 text-xs text-slate-300 ring-1 ring-slate-800 md:text-sm">
<span className="rounded-full bg-slate-800/80 px-3 py-1 font-medium tracking-tight text-slate-50" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
              Monthly
            </span>
<span className="rounded-full px-3 py-1 text-slate-400" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
              Yearly
            </span>
<span className="rounded-full bg-emerald-500/10 px-3 py-1 text-[0.7rem] font-medium text-emerald-300 ring-1 ring-emerald-500/40 md:text-xs" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
              Save 20%
            </span>
</div>
<div className="grid gap-4 md:grid-cols-3">

<div className="flex flex-col rounded-3xl border border-slate-800/80 bg-slate-950/70 p-4 shadow-lg shadow-slate-950/60 backdrop-blur-xl">
<div className="mb-4 flex items-center justify-between">
<div>
<h3 className="text-base font-semibold tracking-tight text-slate-50 md:text-lg" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Display\', sans-serif'}}>
                    Starter
                  </h3>
<p className="text-xs text-slate-400 md:text-sm" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                    For small teams exploring NovaOS.
                  </p>
</div>
</div>
<div className="mb-4 flex items-baseline gap-1">
<span className="text-3xl font-semibold tracking-tight text-slate-50" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Display\', sans-serif'}}>
                  $12
                </span>
<span className="text-xs text-slate-400 md:text-sm" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                  /seat · month
                </span>
</div>
<button className="mb-4 inline-flex items-center justify-center rounded-full border border-slate-700/80 bg-slate-900/80 px-4 py-2 text-sm font-medium tracking-tight text-slate-100 shadow-sm shadow-slate-950/40 transition hover:border-slate-500" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                Start free
              </button>
<ul className="space-y-2 text-xs text-slate-300 md:text-sm" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
<li className="flex items-start gap-2">
<i className="lucide lucide-check-circle-2 mt-0.5 h-3.5 w-3.5 text-emerald-300" style={{strokeWidth: '1.5'}}></i>
<span>Up to 10 teammates</span>
</li>
<li className="flex items-start gap-2">
<i className="lucide lucide-check-circle-2 mt-0.5 h-3.5 w-3.5 text-emerald-300" style={{strokeWidth: '1.5'}}></i>
<span>Core roadmap &amp; tasks</span>
</li>
<li className="flex items-start gap-2">
<i className="lucide lucide-check-circle-2 mt-0.5 h-3.5 w-3.5 text-emerald-300" style={{strokeWidth: '1.5'}}></i>
<span>Standard integrations</span>
</li>
</ul>
</div>

<div className="relative flex flex-col rounded-3xl border border-indigo-500/60 bg-gradient-to-b from-indigo-500/15 via-slate-950/80 to-slate-950/80 p-4 shadow-2xl shadow-indigo-900/70 backdrop-blur-2xl">
<div className="absolute right-4 top-4 rounded-full bg-indigo-500/90 px-3 py-1 text-[0.7rem] font-medium tracking-tight text-slate-50 shadow-md shadow-indigo-500/50 md:text-xs" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                Most popular
              </div>
<div className="mb-4 flex items-center justify-between">
<div>
<h3 className="text-base font-semibold tracking-tight text-slate-50 md:text-lg" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Display\', sans-serif'}}>
                    Growth
                  </h3>
<p className="text-xs text-slate-200 md:text-sm" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                    For product-led teams scaling quickly.
                  </p>
</div>
</div>
<div className="mb-4 flex items-baseline gap-1">
<span className="text-3xl font-semibold tracking-tight text-slate-50" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Display\', sans-serif'}}>
                  $24
                </span>
<span className="text-xs text-slate-200 md:text-sm" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                  /seat · month
                </span>
</div>
<button className="mb-4 inline-flex items-center justify-center rounded-full bg-slate-50 px-4 py-2 text-sm font-medium tracking-tight text-slate-900 shadow-xl shadow-slate-950/40 transition hover:bg-slate-200" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                Choose Growth
              </button>
<ul className="space-y-2 text-xs text-slate-100 md:text-sm" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
<li className="flex items-start gap-2">
<i className="lucide lucide-check-circle-2 mt-0.5 h-3.5 w-3.5 text-emerald-300" style={{strokeWidth: '1.5'}}></i>
<span>Unlimited teammates &amp; workspaces</span>
</li>
<li className="flex items-start gap-2">
<i className="lucide lucide-check-circle-2 mt-0.5 h-3.5 w-3.5 text-emerald-300" style={{strokeWidth: '1.5'}}></i>
<span>Advanced automations &amp; rules</span>
</li>
<li className="flex items-start gap-2">
<i className="lucide lucide-check-circle-2 mt-0.5 h-3.5 w-3.5 text-emerald-300" style={{strokeWidth: '1.5'}}></i>
<span>Priority support &amp; onboarding</span>
</li>
<li className="flex items-start gap-2">
<i className="lucide lucide-check-circle-2 mt-0.5 h-3.5 w-3.5 text-emerald-300" style={{strokeWidth: '1.5'}}></i>
<span>Usage analytics &amp; reporting</span>
</li>
</ul>
</div>

<div className="flex flex-col rounded-3xl border border-slate-800/80 bg-slate-950/70 p-4 shadow-lg shadow-slate-950/60 backdrop-blur-xl">
<div className="mb-4 flex items-center justify-between">
<div>
<h3 className="text-base font-semibold tracking-tight text-slate-50 md:text-lg" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Display\', sans-serif'}}>
                    Enterprise
                  </h3>
<p className="text-xs text-slate-400 md:text-sm" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                    For organizations that need full control.
                  </p>
</div>
</div>
<div className="mb-4 flex items-baseline gap-1">
<span className="text-3xl font-semibold tracking-tight text-slate-50" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Display\', sans-serif'}}>
                  Let’s talk
                </span>
</div>
<button className="mb-4 inline-flex items-center justify-center rounded-full border border-slate-700/80 bg-slate-900/80 px-4 py-2 text-sm font-medium tracking-tight text-slate-100 shadow-sm shadow-slate-950/40 transition hover:border-slate-500" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                Contact sales
              </button>
<ul className="space-y-2 text-xs text-slate-300 md:text-sm" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
<li className="flex items-start gap-2">
<i className="lucide lucide-check-circle-2 mt-0.5 h-3.5 w-3.5 text-emerald-300" style={{strokeWidth: '1.5'}}></i>
<span>Custom SLAs &amp; dedicated CSM</span>
</li>
<li className="flex items-start gap-2">
<i className="lucide lucide-check-circle-2 mt-0.5 h-3.5 w-3.5 text-emerald-300" style={{strokeWidth: '1.5'}}></i>
<span>SSO, SCIM, and role-based access</span>
</li>
<li className="flex items-start gap-2">
<i className="lucide lucide-check-circle-2 mt-0.5 h-3.5 w-3.5 text-emerald-300" style={{strokeWidth: '1.5'}}></i>
<span>Data residency &amp; compliance add-ons</span>
</li>
<li className="flex items-start gap-2">
<i className="lucide lucide-check-circle-2 mt-0.5 h-3.5 w-3.5 text-emerald-300" style={{strokeWidth: '1.5'}}></i>
<span>On-prem &amp; private cloud options</span>
</li>
</ul>
</div>
</div>
</section>
</main>

<footer className="border-t border-slate-800/80 bg-slate-950/80 py-8 backdrop-blur-xl">
<div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 md:flex-row md:items-start md:justify-between md:px-6 lg:px-8">
<div className="space-y-3">
<div className="flex items-center gap-2">
<div className="flex h-7 w-7 items-center justify-center rounded-2xl bg-slate-900/80 ring-1 ring-slate-700/80">
<span className="text-xs font-semibold tracking-tight text-slate-100" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                  N
                </span>
</div>
<span className="text-sm font-semibold tracking-tight text-slate-100" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Display\', sans-serif'}}>
                nova<span className="text-slate-400">OS</span>
</span>
</div>
<p className="max-w-sm text-xs text-slate-400 md:text-sm" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
              A calmer operating system for modern product teams. Built with care,
              for teams that care about the details.
            </p>
<p className="text-xs text-slate-500 md:text-sm" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
              ©
              <span id="year">2025</span>
              NovaOS Technologies Inc. All rights reserved.
            </p>
</div>
<div className="grid flex-1 grid-cols-2 gap-6 text-xs md:grid-cols-4 md:text-sm">
<div className="space-y-2">
<p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400 md:text-sm" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                Product
              </p>
<ul className="space-y-1 text-slate-300" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
<li><a className="hover:text-slate-50" href="#features">Overview</a></li>
<li><a className="hover:text-slate-50" href="#pricing">Pricing</a></li>
<li><span className="cursor-pointer hover:text-slate-50">Changelog</span></li>
</ul>
</div>
<div className="space-y-2">
<p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400 md:text-sm" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                Company
              </p>
<ul className="space-y-1 text-slate-300" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
<li><span className="cursor-pointer hover:text-slate-50">About</span></li>
<li><span className="cursor-pointer hover:text-slate-50">Careers</span></li>
<li><span className="cursor-pointer hover:text-slate-50">Press</span></li>
</ul>
</div>
<div className="space-y-2">
<p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400 md:text-sm" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                Resources
              </p>
<ul className="space-y-1 text-slate-300" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
<li><span className="cursor-pointer hover:text-slate-50">Docs</span></li>
<li><span className="cursor-pointer hover:text-slate-50">Guides</span></li>
<li><span className="cursor-pointer hover:text-slate-50">Status</span></li>
</ul>
</div>
<div className="space-y-2">
<p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400 md:text-sm" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                Legal
              </p>
<ul className="space-y-1 text-slate-300" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
<li><span className="cursor-pointer hover:text-slate-50">Privacy</span></li>
<li><span className="cursor-pointer hover:text-slate-50">Terms</span></li>
<li><span className="cursor-pointer hover:text-slate-50">Security</span></li>
</ul>
</div>
</div>
</div>
</footer>
</div>


    </>
  );
}
