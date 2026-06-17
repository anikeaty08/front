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



    document.getElementById('year').textContent = new Date().getFullYear();
  
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
      
<div className="relative min-h-screen overflow-hidden">

<div className="pointer-events-none fixed inset-0 z-0">
<div className="absolute -top-32 left-1/3 h-80 w-80 rounded-full bg-sky-500/20 blur-3xl"></div>
<div className="absolute top-1/4 -right-40 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl"></div>
<div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-sky-400/10 blur-3xl"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(15,23,42,0.9),_rgba(0,0,0,1))]"></div>
</div>

<div className="relative z-10 flex min-h-screen flex-col">

<header className="sticky top-0 z-30 border-b border-slate-800/80 bg-black/70 backdrop-blur-xl">
<nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">

<div className="flex items-center gap-2">
<div className="flex h-8 w-8 items-center justify-center rounded-lg border border-sky-500/40 bg-sky-500/10 text-xs font-semibold tracking-tight text-sky-100">
              LS
            </div>
<span className="text-sm font-semibold tracking-tight text-slate-100">
              LeadSync<span className="text-sky-400">AI</span>
</span>
</div>

<div className="hidden items-center gap-8 text-xs font-medium text-slate-300 sm:flex">
<a className="transition-colors hover:text-sky-400" href="#demo">Product</a>
<a className="transition-colors hover:text-sky-400" href="#features">Features</a>
<a className="transition-colors hover:text-sky-400" href="#pricing">Pricing</a>
<a className="transition-colors hover:text-sky-400" href="#teams">Teams</a>
<a className="transition-colors hover:text-sky-400" href="#faq">FAQ</a>
</div>

<div className="flex items-center gap-3">
<button className="hidden rounded-lg border border-slate-700 bg-slate-900/70 px-3 py-1.5 text-xs font-medium text-slate-200 shadow-sm shadow-black/40 transition hover:border-slate-500 hover:bg-slate-900 hover:text-white sm:inline-flex">
              Log in
            </button>
<button className="inline-flex items-center gap-1.5 rounded-lg bg-sky-500 px-3.5 py-1.5 text-xs font-semibold tracking-tight text-black shadow-sm shadow-sky-500/40 transition hover:bg-sky-400 hover:shadow-sky-400/50">
              Get started
              <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M5 12h14" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>
</div>
</nav>
</header>

<main className="flex-1">

<section className="relative flex min-h-[90vh] items-center" id="hero">

<div className="pointer-events-none absolute inset-0">
<div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/10 blur-3xl"></div>
</div>
<div className="mx-auto flex w-full max-w-6xl flex-col items-center px-4 py-16 sm:px-6 lg:px-8">

<div className="mb-6 flex items-center gap-3">
<div className="flex items-center gap-1.5 rounded-full border border-sky-500/40 bg-slate-900/80 px-2.5 py-1 text-[11px] font-medium text-sky-100 shadow-sm shadow-black/60">
<span className="relative flex h-2 w-2">
<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-60"></span>
<span className="relative inline-flex h-2 w-2 rounded-full bg-sky-400"></span>
</span>
<span>New</span>
<span className="h-1 w-1 rounded-full bg-slate-500"></span>
<span className="text-slate-300">Autonomous lead discovery just landed.</span>
</div>
</div>

<div className="max-w-3xl text-center">
<h1 className="text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl lg:text-6xl">
                Turn cold prospects into
                <span className="bg-gradient-to-r from-sky-400 via-sky-500 to-indigo-400 bg-clip-text text-transparent">
                  always-on pipelines
                </span>
                with AI.
              </h1>
<p className="mt-4 max-w-xl mx-auto text-sm text-slate-300 sm:text-base">
                LeadSync AI finds, enriches, and nurtures your ideal buyers on autopilot—so your team only focuses on conversations that are ready to convert.
              </p>
</div>

<div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
<button className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-sky-500 px-6 py-2.5 text-xs font-semibold tracking-tight text-black shadow-sm shadow-sky-500/40 transition hover:bg-sky-400 hover:shadow-sky-400/60">
                Book a live demo
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M5 12h14" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>
<button className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-slate-700 bg-slate-900/80 px-6 py-2.5 text-xs font-medium text-slate-200 shadow-sm shadow-black/40 transition hover:border-sky-500/70 hover:bg-slate-900 hover:text-sky-50">
                Watch product tour
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M8 5v14l11-7-11-7z" strokeLinejoin="round"></path>
</svg>
</button>
</div>

<div className="mt-10 grid w-full max-w-3xl grid-cols-1 gap-4 text-[11px] text-slate-400 sm:grid-cols-3">
<div className="flex items-center justify-center gap-2 rounded-lg border border-slate-800/80 bg-slate-950/60 px-3 py-2">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
<span>Live in inboxes &amp; CRMs</span>
</div>
<div className="flex items-center justify-center gap-2 rounded-lg border border-slate-800/80 bg-slate-950/60 px-3 py-2">
<span className="h-1.5 w-1.5 rounded-full bg-sky-400"></span>
<span>2k+ workflows automated</span>
</div>
<div className="flex items-center justify-center gap-2 rounded-lg border border-slate-800/80 bg-slate-950/60 px-3 py-2">
<span className="h-1.5 w-1.5 rounded-full bg-yellow-400"></span>
<span>GDPR-ready, SOC2 aligned</span>
</div>
</div>
</div>
</section>

<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
<div className="h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent"></div>
</div>

<section className="relative py-16 sm:py-20" id="demo">
<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
<div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
<div>
<p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-400/80">
                  LIVE DEMO
                </p>
<h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
                  See LeadSync AI find and warm up leads in seconds.
                </h2>
<p className="mt-2 max-w-xl text-sm text-slate-300">
                  From intent detection to multi-channel outreach—watch an entire campaign get created, launched, and optimized automatically.
                </p>
</div>
<div className="flex gap-3 text-[11px] text-slate-400">
<div className="flex items-center gap-1 rounded-full border border-slate-800 bg-slate-950/70 px-3 py-1">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                  Autoplay preview
                </div>
<div className="hidden items-center gap-1 rounded-full border border-slate-800 bg-slate-950/70 px-3 py-1 sm:flex">
<span className="h-1.5 w-1.5 rounded-full bg-sky-400"></span>
                  Real data anonymized
                </div>
</div>
</div>
<div className="mt-8 grid gap-6 md:grid-cols-2">

<div className="relative h-[420px] rounded-2xl border border-sky-500/20 bg-slate-950/70 p-4 shadow-xl shadow-black/60 backdrop-blur-md">
<div className="absolute inset-x-8 top-0 h-24 bg-gradient-to-b from-sky-500/10 via-slate-950/0 to-transparent blur-2xl"></div>

<div className="mb-3 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-500/20 text-sky-200">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<circle cx="12" cy="12" r="3.5"></circle>
<path d="M4.5 9A7.5 7.5 0 0112 4.5"></path>
<path d="M19.5 15A7.5 7.5 0 0112 19.5"></path>
</svg>
</div>
<div>
<p className="text-xs font-medium text-slate-100">LeadSync Copilot</p>
<p className="text-[11px] text-slate-400">Describe your ideal customer, we’ll do the rest.</p>
</div>
</div>
<span className="rounded-full bg-emerald-500/15 px-2 py-1 text-[10px] font-medium text-emerald-300">
                    Typing · · ·
                  </span>
</div>

<div className="flex h-[260px] flex-col gap-3 overflow-hidden rounded-xl border border-slate-800 bg-slate-950/70 p-3">

<div className="ml-auto max-w-[78%] rounded-2xl rounded-br-sm bg-sky-500/20 px-3 py-2">
<p className="text-[11px] text-slate-100">
                      Find 100 SaaS companies in the US with 20–200 employees using HubSpot and high hiring velocity.
                    </p>
</div>

<div className="mr-auto flex max-w-[90%] gap-2">
<div className="mt-1 h-5 w-5 rounded-full bg-sky-500/40"></div>
<div className="rounded-2xl rounded-bl-sm bg-slate-900 px-3 py-2">
<p className="text-[11px] text-slate-100">
                        I’ll source leads that match:
                      </p>
<ul className="mt-1 list-disc space-y-0.5 pl-4 text-[11px] text-slate-300">
<li>B2B SaaS, US-based, 20–200 employees</li>
<li>Tech stack: HubSpot + modern sales tools</li>
<li>High recent SDR/AE headcount growth</li>
</ul>
</div>
</div>

<div className="mr-auto flex max-w-[90%] gap-2">
<div className="mt-1 h-5 w-5 rounded-full bg-sky-500/40"></div>
<div className="rounded-2xl rounded-bl-sm bg-slate-900 px-3 py-2">
<p className="text-[11px] text-slate-100">
                        Next, I’ll:
                      </p>
<ol className="mt-1 list-decimal space-y-0.5 pl-4 text-[11px] text-slate-300">
<li>Map decision makers (VP Sales, RevOps, Marketing).</li>
<li>Enrich with email, LinkedIn, tech &amp; intent data.</li>
<li>Draft multi-touch sequences tailored to each ICP slice.</li>
</ol>
</div>
</div>
</div>

<div className="mt-3 h-[80px] rounded-xl border border-sky-500/30 bg-sky-950/40 p-3">
<div className="flex items-center justify-between text-[11px] text-slate-200">
<div className="flex items-center gap-2">
<span className="rounded-full bg-sky-500/20 px-2 py-0.5 text-[10px] font-medium text-sky-200">Leads preview</span>
<span className="text-sky-300">37 matches in view</span>
</div>
<span className="text-slate-400">Auto-sync to: <span className="text-sky-200">Salesforce · Outreach</span></span>
</div>
<div className="mt-2 flex items-center gap-2">
<div className="flex-1 rounded-lg bg-slate-950/80 px-3 py-1.5 text-[11px] text-slate-200">
<div className="flex items-center justify-between">
<span>Revloop</span>
<span className="text-xs text-emerald-300">92% fit</span>
</div>
<p className="text-[10px] text-slate-400">Series B · 85 employees · HubSpot · VP Sales, RevOps Director</p>
</div>
<div className="flex-1 rounded-lg bg-slate-950/80 px-3 py-1.5 text-[11px] text-slate-200">
<div className="flex items-center justify-between">
<span>Channelary</span>
<span className="text-xs text-emerald-300">89% fit</span>
</div>
<p className="text-[10px] text-slate-400">Series A · 40 employees · HubSpot · VP Revenue, Demand Gen</p>
</div>
</div>
</div>
</div>

<div className="relative h-[420px] rounded-2xl border border-sky-500/20 bg-slate-950/70 p-4 shadow-xl shadow-black/60 backdrop-blur-md">

<div className="mb-3 flex items-center justify-between">
<div>
<p className="text-xs font-medium text-slate-100">Outbound Engine · ICP SaaS US 20–200</p>
<p className="text-[11px] text-slate-400">Routing new leads into multi-channel campaigns in real time.</p>
</div>
<div className="flex items-center gap-1.5 text-[11px] text-slate-300">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                    Auto-running
                  </div>
</div>
<div className="grid h-[280px] grid-cols-5 gap-4">

<div className="col-span-2 flex flex-col gap-2">
<p className="text-[11px] font-medium text-slate-200">Flow overview</p>
<div className="space-y-2">

<div className="flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-950/70 px-2.5 py-2">
<div className="flex h-6 w-6 items-center justify-center rounded-full bg-sky-500/20 text-[11px] text-sky-300">
                          1
                        </div>
<div className="flex-1">
<p className="text-[11px] text-slate-100">Lead discovery</p>
<p className="text-[10px] text-slate-400">Copilot query → Enriched leads</p>
</div>
</div>
<div className="flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-950/70 px-2.5 py-2">
<div className="flex h-6 w-6 items-center justify-center rounded-full bg-sky-500/20 text-[11px] text-sky-300">
                          2
                        </div>
<div className="flex-1">
<p className="text-[11px] text-slate-100">Scoring &amp; routing</p>
<p className="text-[10px] text-slate-400">Fit &amp; intent scoring · rules engine</p>
</div>
</div>
<div className="flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-950/70 px-2.5 py-2">
<div className="flex h-6 w-6 items-center justify-center rounded-full bg-sky-500/20 text-[11px] text-sky-300">
                          3
                        </div>
<div className="flex-1">
<p className="text-[11px] text-slate-100">Sequencing</p>
<p className="text-[10px] text-slate-400">Email, LinkedIn, calling &amp; tasks</p>
</div>
</div>
<div className="flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-950/70 px-2.5 py-2">
<div className="flex h-6 w-6 items-center justify-center rounded-full bg-sky-500/20 text-[11px] text-sky-300">
                          4
                        </div>
<div className="flex-1">
<p className="text-[11px] text-slate-100">Replies &amp; handoff</p>
<p className="text-[10px] text-slate-400">Auto-triage to AE / SDR / Slack</p>
</div>
</div>
<div className="flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-950/70 px-2.5 py-2">
<div className="flex h-6 w-6 items-center justify-center rounded-full bg-sky-500/20 text-[11px] text-sky-300">
                          5
                        </div>
<div className="flex-1">
<p className="text-[11px] text-slate-100">Learning loop</p>
<p className="text-[10px] text-slate-400">Copy &amp; routing optimized daily</p>
</div>
</div>
</div>
</div>

<div className="col-span-3 flex flex-col gap-3">
<div className="grid grid-cols-3 gap-2">
<div className="rounded-lg border border-slate-800 bg-slate-950/80 px-2.5 py-2">
<p className="text-[10px] text-slate-400">Sent (24h)</p>
<p className="mt-1 text-sm font-semibold text-slate-50">3,482</p>
<div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
<div className="h-full w-4/5 rounded-full bg-sky-500"></div>
</div>
</div>
<div className="rounded-lg border border-slate-800 bg-slate-950/80 px-2.5 py-2">
<p className="text-[10px] text-slate-400">Open rate</p>
<p className="mt-1 text-sm font-semibold text-sky-300">64%</p>
<div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
<div className="h-full w-2/3 rounded-full bg-sky-400"></div>
</div>
</div>
<div className="rounded-lg border border-slate-800 bg-slate-950/80 px-2.5 py-2">
<p className="text-[10px] text-slate-400">Positive replies</p>
<p className="mt-1 text-sm font-semibold text-emerald-300">21%</p>
<div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
<div className="h-full w-[45%] rounded-full bg-emerald-400"></div>
</div>
</div>
</div>

<div className="flex flex-1 flex-col rounded-lg border border-slate-800 bg-slate-950/80 p-2.5">
<div className="flex items-center justify-between text-[11px] text-slate-300">
<span>Real-time activity</span>
<span className="flex items-center gap-1 text-[10px] text-slate-400">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span> Stream
                        </span>
</div>
<div className="mt-2 flex-1 space-y-1.5 overflow-hidden text-[11px] text-slate-200">
<div className="flex items-center justify-between rounded-md bg-slate-900/80 px-2 py-1">
<span>
<span className="text-sky-300">New lead</span> from LinkedIn Ads matched ICP “RevOps”.
                          </span>
<span className="text-[10px] text-slate-500">4s</span>
</div>
<div className="flex items-center justify-between rounded-md bg-slate-900/80 px-2 py-1">
<span>Sequence “Warm intro – PLG” step 2 delivered.</span>
<span className="text-[10px] text-slate-500">12s</span>
</div>
<div className="flex items-center justify-between rounded-md bg-slate-900/80 px-2 py-1">
<span className="text-emerald-300">Positive reply</span><span> – handoff to AE team.</span>
<span className="text-[10px] text-slate-500">28s</span>
</div>
<div className="flex items-center justify-between rounded-md bg-slate-900/80 px-2 py-1">
<span>Learning loop: subject line variant C promoted.</span>
<span className="text-[10px] text-slate-500">1m</span>
</div>
</div>
</div>
</div>
</div>

<div className="mt-3 flex items-center justify-between text-[11px]">
<div className="flex items-center gap-2 text-slate-400">
<span className="h-1.5 w-1.5 rounded-full bg-sky-400"></span>
                    Campaign “ICP SaaS US” optimizing in real time.
                  </div>
<button className="rounded-full border border-sky-500/60 bg-sky-500/15 px-3 py-1 text-[11px] font-medium text-sky-100 transition hover:border-sky-400 hover:bg-sky-500/25">
                    Open in workspace
                  </button>
</div>
</div>
</div>
</div>
</section>

<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
<div className="h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent"></div>
</div>

<section className="py-16 sm:py-20" id="how-it-works">
<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
<div className="text-center">
<p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-400/80">
                HOW IT WORKS
              </p>
<h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
                Two simple steps from idea to live outbound.
              </h2>
<p className="mt-2 max-w-2xl mx-auto text-sm text-slate-300">
                Chat with LeadSync AI to define your ICP, then let it orchestrate your entire outbound engine across tools and channels.
              </p>
</div>
<div className="mt-10 space-y-10">

<div className="grid gap-8 md:grid-cols-2 md:items-center">
<div className="order-2 md:order-1">
<div className="inline-flex items-center gap-2 rounded-full border border-sky-500/40 bg-slate-950/80 px-3 py-1 text-[11px] font-medium text-sky-100">
<span className="flex h-5 w-5 items-center justify-center rounded-full bg-sky-500/20 text-[11px] text-sky-300">
                      1
                    </span>
                    Lead discovery
                  </div>
<h3 className="mt-3 text-xl font-semibold tracking-tight text-slate-50">
                    Describe your ideal customers once. We source them forever.
                  </h3>
<p className="mt-2 text-sm text-slate-300">
                    Use natural language to define your ICP. LeadSync AI translates it into thousands of structured filters across data providers and signals.
                  </p>
<ul className="mt-4 space-y-2 text-sm text-slate-300">
<li className="flex gap-2">
<span className="mt-1 h-4 w-4 rounded-full bg-sky-500/20 text-center text-[11px] text-sky-300">✓</span>
                      Combine firmographic, technographic, and hiring signals.
                    </li>
<li className="flex gap-2">
<span className="mt-1 h-4 w-4 rounded-full bg-sky-500/ text-center text-[11px] text-sky-300">✓</span>
                      Auto-refresh lead pools as companies grow or change                    </li>
<li className="flex gap-2">
<span className="mt-1 h-4 w-4 rounded-full bg-sky-500/20 text-center text-[11px] text-sky-300">✓</span>
                      Enrich with verified emails, social profiles, and intent.
                    </li>
</ul>
</div>
<div className="order-1 md:order-2">
<div className="relative h-64 rounded-2xl border border-sky-500/30 bg-slate-950/80 p-4 shadow-lg shadow-black/50">
<div className="flex items-center justify-between text-[11px] text-slate-300">
<span>Lead search</span>
<span className="rounded-full bg-slate-900 px-2 py-0.5 text-slate-400">AI-powered</span>
</div>
<div className="mt-3 rounded-xl border border-slate-800 bg-slate-950/90 p-3">
<div className="flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900/80 px-3 py-2">
<svg className="h-3.5 w-3.5 text-sky-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<circle cx="11" cy="11" r="6"></circle>
<path d="m16 16 4 4" strokeLinecap="round"></path>
</svg>
<p className="text-[11px] text-slate-300">
                          “Show me EMEA fintech companies using Stripe, 10–250 employees, hiring SDRs.”
                        </p>
</div>
<div className="mt-3 grid grid-cols-3 gap-2 text-[10px] text-slate-300">
<div className="rounded-lg border border-sky-500/30 bg-sky-950/50 px-2 py-1.5">
<p className="text-slate-400">Region</p>
<p className="mt-0.5 text-slate-100">EMEA</p>
</div>
<div className="rounded-lg border border-sky-500/30 bg-sky-950/50 px-2 py-1.5">
<p className="text-slate-400">Size</p>
<p className="mt-0.5 text-slate-100">10–250</p>
</div>
<div className="rounded-lg border border-sky-500/30 bg-sky-950/50 px-2 py-1.5">
<p className="text-slate-400">Tech</p>
<p className="mt-0.5 text-slate-100">Stripe</p>
</div>
</div>
<div className="mt-3 flex items-center justify-between text-[11px]">
<div className="flex items-center gap-2 text-slate-300">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                          428 matching companies
                        </div>
<button className="rounded-full border border-sky-500/70 bg-sky-500/15 px-3 py-1 text-[10px] font-medium text-sky-100 transition hover:border-sky-400 hover:bg-sky-500/25">
                          Save as ICP
                        </button>
</div>
</div>
</div>
</div>
</div>

<div className="grid gap-8 md:grid-cols-2 md:items-center">
<div className="md:order-1">
<div className="relative h-64 rounded-2xl border border-sky-500/30 bg-slate-950/80 p-4 shadow-lg shadow-black/50">
<div className="flex items-center justify-between text-[11px] text-slate-300">
<span>Sync &amp; orchestration</span>
<span className="rounded-full bg-slate-900 px-2 py-0.5 text-slate-400">No-code</span>
</div>
<div className="mt-3 grid grid-cols-3 gap-2 text-[10px] text-slate-300">
<div className="rounded-lg border border-slate-800 bg-slate-900/80 px-2 py-1.5">
<p className="text-slate-400">Destination</p>
<p className="mt-0.5 text-slate-100">Salesforce</p>
</div>
<div className="rounded-lg border border-slate-800 bg-slate-900/80 px-2 py-1.5">
<p className="text-slate-400">Campaign</p>
<p className="mt-0.5 text-slate-100">SaaS EMEA – Q1</p>
</div>
<div className="rounded-lg border border-slate-800 bg-slate-900/80 px-2 py-1.5">
<p className="text-slate-400">Mode</p>
<p className="mt-0.5 text-emerald-300">Live sync</p>
</div>
</div>
<div className="mt-4 space-y-2">
<div className="flex items-center justify-between text-[11px] text-slate-300">
<span>Sync progress</span>
<span>68% complete</span>
</div>
<div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
<div className="h-full w-2/3 rounded-full bg-sky-500"></div>
</div>
<p className="text-[10px] text-slate-400">
                        Mapping email, lifecycle stage, and ownership to your CRM schema.
                      </p>
</div>
</div>
</div>
<div className="md:order-2">
<div className="inline-flex items-center gap-2 rounded-full border border-sky-500/40 bg-slate-950/80 px-3 py-1 text-[11px] font-medium text-sky-100">
<span className="flex h-5 w-5 items-center justify-center rounded-full bg-sky-500/20 text-[11px] text-sky-300">
                      2
                    </span>
                    Seamless integration
                  </div>
<h3 className="mt-3 text-xl font-semibold tracking-tight text-slate-50">
                    Sync to your stack and launch workflows in one click.
                  </h3>
<p className="mt-2 text-sm text-slate-300">
                    LeadSync AI keeps your CRM, sequences, and routing rules perfectly in sync so your team stays focused on qualified conversations.
                  </p>
<ul className="mt-4 space-y-2 text-sm text-slate-300">
<li className="flex gap-2">
<span className="mt-1 h-4 w-4 rounded-full bg-sky-500/20 text-center text-[11px] text-sky-300">✓</span>
                      Native sync with CRMs, outreach tools, and data providers.
                    </li>
<li className="flex gap-2">
<span className="mt-1 h-4 w-4 rounded-full bg-sky-500/20 text-center text-[11px] text-sky-300">✓</span>
                      Granular controls: owners, territories, stages, and SLAs.
                    </li>
<li className="flex gap-2">
<span className="mt-1 h-4 w-4 rounded-full bg-sky-500/20 text-center text-[11px] text-sky-300">✓</span>
                      Guardrails for compliance, opt-outs, and data residency.
                    </li>
</ul>
</div>
</div>
</div>
<div className="mt-10 flex justify-center">
<button className="inline-flex items-center gap-1.5 rounded-lg border border-sky-500/60 bg-sky-500/10 px-5 py-2 text-xs font-semibold tracking-tight text-sky-100 transition hover:border-sky-400 hover:bg-sky-500/20">
                Explore full workflow library
                <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M5 12h14" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>
</div>
</div>
</section>

<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
<div className="h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent"></div>
</div>

<section className="py-16 sm:py-20" id="teams">
<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
<div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
<div>
<p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-400/80">
                  BUILT FOR TEAMS
                </p>
<h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
                  Designed for every go-to-market motion.
                </h2>
<p className="mt-2 max-w-xl text-sm text-slate-300">
                  Whether you’re running high-volume outbound, ABM, or partner-led motions, LeadSync AI adapts to your workflow—not the other way around.
                </p>
</div>
<button className="inline-flex items-center gap-1.5 self-start rounded-lg border border-slate-700 bg-slate-950/80 px-4 py-2 text-xs font-medium text-slate-200 transition hover:border-sky-500/70 hover:bg-slate-900 hover:text-sky-50">
                See team playbooks
                <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M5 12h14" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>
</div>
<div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

<div className="group rounded-2xl border border-slate-800 bg-slate-950/80 p-4 shadow-lg shadow-black/50 transition hover:-translate-y-1 hover:border-sky-500/60 hover:shadow-sky-900/60">
<div className="flex h-9 w-9 items-center justify-center rounded-lg border border-sky-500/40 bg-sky-500/10 text-sky-200 transition group-hover:border-sky-400 group-hover:bg-sky-500/20">
<svg className="h-4 w-4 group-hover:rotate-3 transition" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M3 4h18"></path>
<path d="M3 10h18"></path>
<path d="M5 6h4v8H5z"></path>
<path d="M15 6h4v5h-4z"></path>
<path d="M10 6h4v12h-4z"></path>
</svg>
</div>
<h3 className="mt-3 text-sm font-semibold text-slate-50">Sales teams</h3>
<p className="mt-1 text-sm text-slate-300">
                  Automate prospecting, routing, and follow-ups so reps spend their time booking and running meetings.
                </p>
</div>
<div className="group rounded-2xl border border-slate-800 bg-slate-950/80 p-4 shadow-lg shadow-black/50 transition hover:-translate-y-1 hover:border-sky-500/60 hover:shadow-sky-900/60">
<div className="flex h-9 w-9 items-center justify-center rounded-lg border border-sky-500/40 bg-sky-500/10 text-sky-200 transition group-hover:border-sky-400 group-hover:bg-sky-500/20">
<svg className="h-4 w-4 group-hover:rotate-3 transition" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M3 12c2-4 5-6 9-6s7 2 9 6"></path>
<circle cx="12" cy="12" r="3"></circle>
<path d="M12 15v6"></path>
</svg>
</div>
<h3 className="mt-3 text-sm font-semibold text-slate-50">Marketing &amp; demand gen</h3>
<p className="mt-1 text-sm text-slate-300">
                  Turn intent signals into orchestrated multi-channel plays without manual list pulls or spreadsheets.
                </p>
</div>
<div className="group rounded-2xl border border-slate-800 bg-slate-950/80 p-4 shadow-lg shadow-black/50 transition hover:-translate-y-1 hover:border-sky-500/60 hover:shadow-sky-900/60">
<div className="flex h-9 w-9 items-center justify-center rounded-lg border border-sky-500/40 bg-sky-500/10 text-sky-200 transition group-hover:border-sky-400 group-hover:bg-sky-500/20">
<svg className="h-4 w-4 group-hover:rotate-3 transition" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<rect height="13" rx="1" width="7" x="3" y="8"></rect>
<rect height="18" rx="1" width="7" x="14" y="3"></rect>
<path d="M7 3v3"></path>
<path d="M17 21v-3"></path>
</svg>
</div>
<h3 className="mt-3 text-sm font-semibold text-slate-50">RevOps &amp; sales ops</h3>
<p className="mt-1 text-sm text-slate-300">
                  Maintain clean routing, ownership, and reporting with guardrails that protect your CRM from chaos.
                </p>
</div>
<div className="group rounded-2xl border border-slate-800 bg-slate-950/80 p-4 shadow-lg shadow-black/50 transition hover:-translate-y-1 hover:border-sky-500/60 hover:shadow-sky-900/60">
<div className="flex h-9 w-9 items-center justify-center rounded-lg border border-sky-500/40 bg-sky-500/10 text-sky-200 transition group-hover:border-sky-400 group-hover:bg-sky-500/20">
<svg className="h-4 w-4 group-hover:rotate-3 transition" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<circle cx="9" cy="7" r="4"></circle>
<path d="M17 11l2 2 4-4"></path>
<path d="M3 21v-1a6 6 0 0 1 6-6h1.5"></path>
</svg>
</div>
<h3 className="mt-3 text-sm font-semibold text-slate-50">Founders &amp; early-stage teams</h3>
<p className="mt-1 text-sm text-slate-300">
                  Ship a professional outbound engine before you hire your first SDR or RevOps lead.
                </p>
</div>
<div className="group rounded-2xl border border-slate-800 bg-slate-950/80 p-4 shadow-lg shadow-black/50 transition hover:-translate-y-1 hover:border-sky-500/60 hover:shadow-sky-900/60">
<div className="flex h-9 w-9 items-center justify-center rounded-lg border border-sky-500/40 bg-sky-500/10 text-sky-200 transition group-hover:border-sky-400 group-hover:bg-sky-500/20">
<svg className="h-4 w-4 group-hover:rotate-3 transition" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M7 10v12"></path>
<path d="M17 4v18"></path>
<path d="M3 6l4 4 4-4"></path>
<path d="M13 8l4-4 4 4"></path>
</svg>
</div>
<h3 className="mt-3 text-sm font-semibold text-slate-50">Agencies &amp; consultants</h3>
<p className="mt-1 text-sm text-slate-300">
                  Run outbound for multiple clients with isolated workspaces, templates, and reporting.
                </p>
</div>
<div className="group rounded-2xl border border-slate-800 bg-slate-950/80 p-4 shadow-lg shadow-black/50 transition hover:-translate-y-1 hover:border-sky-500/60 hover:shadow-sky-900/60">
<div className="flex h-9 w-9 items-center justify-center rounded-lg border border-sky-500/40 bg-sky-500/10 text-sky-200 transition group-hover:border-sky-400 group-hover:bg-sky-500/20">
<svg className="h-4 w-4 group-hover:rotate-3 transition" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M4 4h16v16H4z"></path>
<path d="M9 4v16"></path>
<path d="M4 9h16"></path>
</svg>
</div>
<h3 className="mt-3 text-sm font-semibold text-slate-50">Partnerships &amp; ecosystem</h3>
<p className="mt-1 text-sm text-slate-300">
                  Activate and measure co-selling, partner-sourced, and ecosystem-led deals at scale.
                </p>
</div>
</div>
<div className="mt-8 flex justify-center">
<button className="inline-flex items-center gap-1.5 rounded-lg bg-sky-500 px-5 py-2 text-xs font-semibold tracking-tight text-black shadow-sm shadow-sky-500/40 transition hover:bg-sky-400 hover:shadow-sky-400/60">
                Talk to our team
                <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M5 12h14" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>
</div>
</div>
</section>

<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
<div className="h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent"></div>
</div>

<section className="py-16 sm:py-20" id="features">
<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
<div className="text-center">
<p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-400/80">
                FEATURES
              </p>
<h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
                Everything you need to run AI-first outbound.
              </h2>
<p className="mt-2 max-w-2xl mx-auto text-sm text-slate-300">
                LeadSync AI combines data, automation, and intelligence into a single workspace you can trust.
              </p>
</div>
<div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

<div className="group rounded-2xl border border-slate-800 bg-slate-950/80 p-4 shadow-lg shadow-black/50 transition hover:-translate-y-1 hover:border-sky-500/60 hover:shadow-sky-900/60">
<div className="flex h-9 w-9 items-center justify-center rounded-lg border border-sky-500/40 bg-sky-500/10 text-sky-200">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<circle cx="11" cy="11" r="6"></circle>
<path d="m16 16 4 4" strokeLinecap="round"></path>
</svg>
</div>
<h3 className="mt-3 text-sm font-semibold text-slate-50">AI lead search</h3>
<p className="mt-1 text-sm text-slate-300">
                  Describe your ICP in natural language, and let the engine translate it into precise, multi-source queries.
                </p>
</div>

<div className="group rounded-2xl border border-slate-800 bg-slate-950/80 p-4 shadow-lg shadow-black/50 transition hover:-translate-y-1 hover:border-sky-500/60 hover:shadow-sky-900/60">
<div className="flex h-9 w-9 items-center justify-center rounded-lg border border-sky-500/40 bg-sky-500/10 text-sky-200">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M12 3 5 5v6c0 5 3.5 9 7 10 3.5-1 7-5 7-10V5z"></path>
<path d="m9 12 2 2 4-4"></path>
</svg>
</div>
<h3 className="mt-3 text-sm font-semibold text-slate-50">Compliance guardrails</h3>
<p className="mt-1 text-sm text-slate-300">
                  Embedded consent, opt-out, and region-aware rules ensure your outreach remains compliant by design.
                </p>
</div>

<div className="group rounded-2xl border border-slate-800 bg-slate-950/80 p-4 shadow-lg shadow-black/50 transition hover:-translate-y-1 hover:border-sky-500/60 hover:shadow-sky-900/60">
<div className="flex h-9 w-9 items-center justify-center rounded-lg border border-sky-500/40 bg-sky-500/10 text-sky-200">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M13 3 4 14h7l-1 7 9-11h-7z"></path>
</svg>
</div>
<h3 className="mt-3 text-sm font-semibold text-slate-50">Autonomous sequencing</h3>
<p className="mt-1 text-sm text-slate-300">
                  AI drafts, tests, and optimizes sequences for every persona, channel, and region—no templates required.
                </p>
</div>

<div className="group rounded-2xl border border-slate-800 bg-slate-950/80 p-4 shadow-lg shadow-black/50 transition hover:-translate-y-1 hover:border-sky-500/60 hover:shadow-sky-900/60">
<div className="flex h-9 w-9 items-center justify-center rounded-lg border border-sky-500/40 bg-sky-500/10 text-sky-200">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<rect height="7" rx="1" width="7" x="3" y="3"></rect>
<rect height="7" rx="1" width="7" x="14" y="3"></rect>
<rect height="7" rx="1" width="7" x="14" y="14"></rect>
<path d="M7 10v4a1 1 0 0 0 1 1h6"></path>
</svg>
</div>
<h3 className="mt-3 text-sm font-semibold text-slate-50">Visual workflows</h3>
<p className="mt-1 text-sm text-slate-300">
                  Drag-and-drop workflows connect data sources, scoring, and routing into one cohesive automation.
                </p>
</div>

<div className="group rounded-2xl border border-slate-800 bg-slate-950/80 p-4 shadow-lg shadow-black/50 transition hover:-translate-y-1 hover:border-sky-500/60 hover:shadow-sky-900/60">
<div className="flex h-9 w-9 items-center justify-center rounded-lg border border-sky-500/40 bg-sky-500/10 text-sky-200">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<circle cx="12" cy="12" r="9"></circle>
<path d="M3 12h18"></path>
<path d="M12 3a15.3 15.3 0 0 1 4 9 15.3 15.3 0 0 1-4 9 15.3 15.3 0 0 1-4-9 15.3 15.3 0 0 1 4-9z"></path>
</svg>
</div>
<h3 className="mt-3 text-sm font-semibold text-slate-50">Global coverage</h3>
<p className="mt-1 text-sm text-slate-300">
                  Reach buyers in every major market with localized copy, send windows, and compliance by region.
                </p>
</div>

<div className="group rounded-2xl border border-slate-800 bg-slate-950/80 p-4 shadow-lg shadow-black/50 transition hover:-translate-y-1 hover:border-sky-500/60 hover:shadow-sky-900/60">
<div className="flex h-9 w-9 items-center justify-center rounded-lg border border-sky-500/40 bg-sky-500/10 text-sky-200">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M13 4.5a2.5 2.5 0 0 1 4 2V9a2 2 0 0 1 2 2 2.5 2.5 0 0 1-2 2.5"></path>
<path d="M11 4.5a2.5 2.5 0 0 0-4 2V9a2 2 0 0 0-2 2 2.5 2.5 0 0 0 2 2.5"></path>
<path d="M12 13v2.5a2.5 2.5 0 0 0 4 2"></path>
<path d="M12 13v2.5a2.5 2.5 0 0 1-4 2"></path>
</svg>
</div>
<h3 className="mt-3 text-sm font-semibold text-slate-50">Learning engine</h3>
<p className="mt-1 text-sm text-slate-300">
                  Every reply, conversion, and closed-won deal feeds the model, improving targeting and messaging daily.
                </p>
</div>
</div>
<div className="mt-8 flex justify-center">
<button className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-950/80 px-5 py-2 text-xs font-medium text-slate-200 transition hover:border-sky-500/70 hover:bg-slate-900 hover:text-sky-50">
                View full feature list
              </button>
</div>
</div>
</section>

<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
<div className="h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent"></div>
</div>

<section className="py-16 sm:py-20" id="pricing">
<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
<div className="text-center">
<p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-400/80">
                PRICING
              </p>
<h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
                Start small, scale to thousands of accounts.
              </h2>
<p className="mt-2 max-w-2xl mx-auto text-sm text-slate-300">
                Simple, usage-based pricing that grows with your outbound engine. Switch plans or cancel anytime.
              </p>
</div>

<div className="mt-6 flex justify-center">
<div className="inline-flex items-center gap-3 rounded-full border border-slate-800 bg-slate-950/80 px-2 py-1 text-[11px] text-slate-300">
<button className="rounded-full bg-slate-900 px-3 py-1 text-[11px] font-medium text-slate-100">
                  Monthly
                </button>
<button className="rounded-full px-3 py-1 text-[11px] font-medium text-slate-400">
                  Annual
                </button>
<span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] font-medium text-emerald-300">
                  Save up to 20%
                </span>
</div>
</div>
<div className="mt-8 grid gap-5 md:grid-cols-3">

<div className="flex flex-col rounded-2xl border border-slate-800 bg-slate-950/80 p-5 shadow-lg shadow-black/50">
<div className="flex items-center justify-between">
<div>
<h3 className="text-sm font-semibold text-slate-50">Starter</h3>
<p className="mt-1 text-[11px] text-slate-400">For solo founders and tiny teams.</p>
</div>
</div>
<div className="mt-4 flex items-baseline gap-1">
<p className="text-2xl font-semibold tracking-tight text-slate-50">$89</p>
<span className="text-xs text-slate-400">/month</span>
</div>
<p className="mt-1 text-[11px] text-slate-400">Billed monthly. No long-term contracts.</p>
<button className="mt-4 inline-flex items-center justify-center rounded-lg border border-slate-700 bg-slate-900/80 px-4 py-2 text-xs font-medium text-slate-100 transition hover:border-sky-500/70 hover:bg-slate-900 hover:text-sky-50">
                  Start free trial
                </button>
<ul className="mt-4 space-y-2 text-[11px] text-slate-300">
<li className="flex gap-2">
<span className="mt-0.5 h-3.5 w-3.5 rounded-full bg-sky-500/20 text-center text-[9px] text-sky-300">✓</span>
                    Up to 2,000 leads/month
                  </li>
<li className="flex gap-2">
<span className="mt-0.5 h-3.5 w-3.5 rounded-full bg-sky-500/20 text-center text-[9px] text-sky-300">✓</span>
                    1 workspace, 3 users
                  </li>
<li className="flex gap-2">
<span className="mt-0.5 h-3.5 w-3.5 rounded-full bg-sky-500/20 text-center text-[9px] text-sky-300">✓</span>
                    Core AI lead search &amp; enrichment
                  </li>
<li className="flex gap-2">
<span className="mt-0.5 h-3.5 w-3.5 rounded-full bg-sky-500/20 text-center text-[9px] text-sky-300">✓</span>
                    Email &amp; Slack support
                  </li>
</ul>
</div>

<div className="relative flex flex-col rounded-2xl border border-sky-500/80 bg-sky-950/40 p-5 shadow-xl shadow-sky-900/70">
<div className="absolute -top-3 right-4 rounded-full bg-sky-500 px-2.5 py-0.5 text-[10px] font-semibold tracking-tight text-black shadow-sm shadow-sky-500/60">
                  Most popular
                </div>
<div className="flex items-center justify-between">
<div>
<h3 className="text-sm font-semibold text-slate-50">Growth</h3>
<p className="mt-1 text-[11px] text-slate-200">For scaling outbound and GTM teams.</p>
</div>
</div>
<div className="mt-4 flex items-baseline gap-1">
<p className="text-2xl font-semibold tracking-tight text-slate-50">$249</p>
<span className="text-xs text-slate-200">/month</span>
</div>
<p className="mt-1 text-[11px] text-slate-300">Best for teams from 3–30 sellers.</p>
<button className="mt-4 inline-flex items-center justify-center rounded-lg bg-sky-500 px-4 py-2 text-xs font-semibold tracking-tight text-black shadow-sm shadow-sky-500/60 transition hover:bg-sky-400 hover:shadow-sky-400/60">
                  Talk to sales
                </button>
<ul className="mt-4 space-y-2 text-[11px] text-slate-100">
<li className="flex gap-2">
<span className="mt-0.5 h-3.5 w-3.5 rounded-full bg-sky-500/30 text-center text-[9px] text-sky-100">✓</span>
                    Up to 15,000 leads/month
                  </li>
<li className="flex gap-2">
<span className="mt-0.5 h-3.5 w-3.5 rounded-full bg-sky-500/30 text-center text-[9px] text-sky-100">✓</span>
                    Unlimited workspaces &amp; 30 users
                  </li>
<li className="flex gap-2">
<span className="mt-0.5 h-3.5 w-3.5 rounded-full bg-sky-500/30 text-center text-[9px] text-sky-100">✓</span>
                    Autonomous sequences &amp; reply triage
                  </li>
<li className="flex gap-2">
<span className="mt-0.5 h-3.5 w-3.5 rounded-full bg-sky-500/30 text-center text-[9px] text-sky-100">✓</span>
                    CRM &amp; sales engagement integrations
                  </li>
<li className="flex gap-2">
<span className="mt-0.5 h-3.5 w-3.5 rounded-full bg-sky-500/30 text-center text-[9px] text-sky-100">✓</span>
                    Priority onboarding &amp; strategy sessions
                  </li>
</ul>
</div>

<div className="flex flex-col rounded-2xl border border-slate-800 bg-slate-950/80 p-5 shadow-lg shadow-black/50">
<div className="flex items-center justify-between">
<div>
<h3 className="text-sm font-semibold text-slate-50">Enterprise</h3>
<p className="mt-1 text-[11px] text-slate-400">For global, multi-team organizations.</p>
</div>
</div>
<div className="mt-4">
<p className="text-2xl font-semibold tracking-tight text-slate-50">Custom</p>
<p className="mt-1 text-[11px] text-slate-400">Tailored to your data, regions, and security needs.</p>
</div>
<button className="mt-4 inline-flex items-center justify-center rounded-lg border border-slate-700 bg-slate-900/80 px-4 py-2 text-xs font-medium text-slate-100 transition hover:border-sky-500/70 hover:bg-slate-900 hover:text-sky-50">
                  Contact enterprise
                </button>
<ul className="mt-4 space-y-2 text-[11px] text-slate-300">
<li className="flex gap-2">
<span className="mt-0.5 h-3.5 w-3.5 rounded-full bg-sky-500/20 text-center text-[9px] text-sky-300">✓</span>
                    Unlimited leads &amp; custom SLAs
                  </li>
<li className="flex gap-2">
<span className="mt-0.5 h-3.5 w-3.5 rounded-full bg-sky-500/20 text-center text-[9px] text-sky-300">✓</span>
                    SSO, SCIM, audit logs, and granular roles
                  </li>
<li className="flex gap-2">
<span className="mt-0.5 h-3.5 w-3.5 rounded-full bg-sky-500/20 text-center text-[9px] text-sky-300">✓</span>
                    Dedicated CSM &amp; RevOps consulting
                  </li>
<li className="flex gap-2">
<span className="mt-0.5 h-3.5 w-3.5 rounded-full bg-sky-500/20 text-center text-[9px] text-sky-300">✓</span>
                    Data residency &amp; security reviews
                  </li>
</ul>
</div>
</div>
</div>
</section>

<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
<div className="h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent"></div>
</div>

<section className="py-16 sm:py-20" id="testimonials">
<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
<div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
<div>
<p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-400/80">
                  TESTIMONIALS
                </p>
<h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
                  Teams closing more with less manual work.
                </h2>
<p className="mt-2 max-w-xl text-sm text-slate-300">
                  LeadSync AI quietly runs in the background while your team focuses on high-intent conversations.
                </p>
</div>
<div className="flex items-center gap-2 text-[11px] text-slate-400">
<span>4.9 / 5.0</span>
<span className="flex">
<span className="text-yellow-400">★</span>
<span className="text-yellow-400">★</span>
<span className="text-yellow-400">★</span>
<span className="text-yellow-400">★</span>
<span className="text-yellow-400">★</span>
</span>
<span>Based on 120+ teams</span>
</div>
</div>

<div className="mt-8 grid gap-4 md:grid-cols-2">

<div className="flex flex-col rounded-2xl border border-slate-800 bg-slate-950/80 p-5 shadow-lg shadow-black/50">
<div className="flex items-center justify-between text-[11px] text-slate-400">
<div className="flex items-center gap-2">
<svg className="h-4 w-4 text-sky-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M7 9h4v11H5a2 2 0 0 1-2-2v-1.5c0-3.038 1.592-5.747 4-7.5z"></path>
<path d="M17 9h4v11h-6a2 2 0 0 1-2-2v-1.5c0-3.038 1.592-5.747 4-7.5z"></path>
</svg>
<span>Outbound, automated</span>
</div>
<span className="text-yellow-400">★★★★★</span>
</div>
<p className="mt-3 text-sm text-slate-100">
                  “LeadSync AI replaced three tools and half of our manual workflows. Our reps now start every day with a queue of qualified conversations instead of a blank list.”
                </p>
<div className="mt-4 flex items-center gap-3">
<img alt="Customer" className="h-9 w-9 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div>
<p className="text-xs font-medium text-slate-100">Mia Rodriguez</p>
<p className="text-[11px] text-slate-400">VP Sales · Series B SaaS</p>
</div>
</div>
</div>

<div className="flex flex-col rounded-2xl border border-slate-800 bg-slate-950/80 p-5 shadow-lg shadow-black/50">
<div className="flex items-center justify-between text-[11px] text-slate-400">
<div className="flex items-center gap-2">
<svg className="h-4 w-4 text-sky-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M12 3v18"></path>
<path d="M5 12h14"></path>
</svg>
<span>Ops, simplified</span>
</div>
<span className="text-yellow-400">★★★★★</span>
</div>
<p className="mt-3 text-sm text-slate-100">
                  “We finally have a single source of truth for outbound. Data quality is up, response rates are up, and the team spends dramatically less time cleaning spreadsheets.”
                </p>
<div className="mt-4 flex items-center gap-3">
<img alt="Customer" className="h-9 w-9 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div>
<p className="text-xs font-medium text-slate-100">Jordan Kim</p>
<p className="text-[11px] text-slate-400">Head of RevOps · SaaS Unicorn</p>
</div>
</div>
</div>
</div>

<div className="mt-6 flex items-center justify-between text-[11px] text-slate-400">
<div className="flex items-center gap-2">
<button className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-800 bg-slate-950/80 transition hover:border-sky-500/60 hover:text-sky-200">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>
<button className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-800 bg-slate-950/80 transition hover:border-sky-500/60 hover:text-sky-200">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>
<span>Auto-rotating carousel</span>
</div>
<div className="flex items-center gap-1">
<span className="h-1.5 w-4 rounded-full bg-sky-500"></span>
<span className="h-1.5 w-1.5 rounded-full bg-slate-700"></span>
<span className="h-1.5 w-1.5 rounded-full bg-slate-700"></span>
<span className="h-1.5 w-1.5 rounded-full bg-slate-700"></span>
</div>
</div>

<div className="mt-10 flex justify-center">
<button className="inline-flex items-center gap-1.5 rounded-lg bg-sky-500 px-5 py-2 text-xs font-semibold tracking-tight text-black shadow-sm shadow-sky-500/40 transition hover:bg-sky-400 hover:shadow-sky-400/60">
                Join high-performing GTM teams
              </button>
</div>
</div>
</section>

<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
<div className="h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent"></div>
</div>

<section className="py-16 sm:py-20" id="faq">
<div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
<div className="text-center">
<p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-400/80">
                FAQ
              </p>
<h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
                Answers to common questions.
              </h2>
<p className="mt-2 text-sm text-slate-300">
                Everything you need to know about onboarding, integrations, and how LeadSync AI fits into your stack.
              </p>
</div>
<div className="mt-8 space-y-3">

<div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4">
<button className="flex w-full items-center justify-between text-left">
<span className="text-sm font-medium text-slate-100">
                    How long does it take to get value from LeadSync AI?
                  </span>
<span className="ml-4 flex h-6 w-6 items-center justify-center rounded-full border border-slate-700 text-slate-300 transition hover:border-sky-500/70 hover:text-sky-200">
<svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</span>
</button>
<div className="mt-3 text-[13px] text-slate-300">
                  Most teams launch their first AI-powered campaign in under a week. We provide guided onboarding sessions to help you define ICPs, connect your tools, and set up workflows.
                </div>
</div>
<div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4">
<button className="flex w-full items-center justify-between text-left">
<span className="text-sm font-medium text-slate-100">
                    Which tools does LeadSync AI integrate with?
                  </span>
<span className="ml-4 flex h-6 w-6 items-center justify-center rounded-full border border-slate-700 text-slate-300 transition hover:border-sky-500/70 hover:text-sky-200">
<svg 5v14"="" className="h-3 w-3" fill="none                    &lt;path d=" m12="" stroke="currentColor" strokeWidth="1.5">
<path d="M5 12h14"></path>
</svg>
</span>
</button>
<div className="mt-3 text-[13px] text-slate-300">
                LeadSync AI connects with major CRMs (Salesforce, HubSpot), sales engagement platforms (Outreach, Salesloft), email and calendar providers, data partners, and collaboration tools like Slack.
              </div>
</div>
<div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4">
<button className="flex w-full items-center justify-between text-left">
<span className="text-sm font-medium text-slate-100">
                  How does pricing work as we scale?
                </span>
<span className="ml-4 flex h-6 w-6 items-center justify-center rounded-full border border-slate-700 text-slate-300 transition hover:border-sky-500/70 hover:text-sky-200">
<svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M12 5v14"></path>
<path d="M5 12h14"></path>
</svg>
</span>
</button>
<div className="mt-3 text-[13px] text-slate-300">
                Plans are based on monthly lead volume, workspaces, and advanced capabilities. You can upgrade or downgrade at any time, and we’ll work with you on custom tiers for larger teams.
              </div>
</div>
<div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4">
<button className="flex w-full items-center justify-between text-left">
<span className="text-sm font-medium text-slate-100">
                  How do you handle data privacy and compliance?
                </span>
<span className="ml-4 flex h-6 w-6 items-center justify-center rounded-full border border-slate-700 text-slate-300 transition hover:border-sky-500/70 hover:text-sky-200">
<svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M12 5v14"></path>
<path d="M5 12h14"></path>
</svg>
</span>
</button>
<div className="mt-3 text-[13px] text-slate-300">
                LeadSync AI is built with privacy and security by default, including regional routing, consent management, audit logs, and support for SOC2-aligned processes and GDPR requirements.
              </div>
</div>
<div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4">
<button className="flex w-full items-center justify-between text-left">
<span className="text-sm font-medium text-slate-100">
                  Do you replace our SDRs or just augment them?
                </span>
<span className="ml-4 flex h-6 w-6 items-center justify-center rounded-full border border-slate-700 text-slate-300 transition hover:border-sky-500/70 hover:text-sky-200">
<svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M12 5v14"></path>
<path d="M5 12h14"></path>
</svg>
</span>
</button>
<div className="mt-3 text-[13px] text-slate-300">
                LeadSync AI is designed to handle the repetitive, operational work so SDRs and AEs can focus on human conversations, complex deals, and strategy—not building lists or managing workflows.
              </div>
</div>
</div>

<div className="mt-10 flex flex-col items-center gap-3 text-center text-sm text-slate-300">
<p>Still have questions? We’re happy to walk you through your specific use case.</p>
<button className="inline-flex items-center gap-1.5 rounded-lg border border-sky-500/70 bg-sky-500/10 px-5 py-2 text-xs font-semibold tracking-tight text-sky-100 transition hover:border-sky-400 hover:bg-sky-500/20">
              Chat with our team
              <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M5 12h14" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>
</div>
</div></section>

<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
<div className="h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent"></div>
</div>

<section className="py-16 sm:py-20" id="cta">
<div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
<div className="relative overflow-hidden rounded-3xl border border-sky-500/40 bg-gradient-to-br from-slate-950 via-slate-950 to-sky-950/40 p-8 shadow-2xl shadow-sky-900/60 sm:p-10">
<div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-sky-500/20 blur-3xl"></div>
<div className="pointer-events-none absolute -left-16 bottom-0 h-40 w-40 rounded-full bg-indigo-500/20 blur-3xl"></div>
<div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
<div className="max-w-xl">
<p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-200/80">
                    READY WHEN YOU ARE
                  </p>
<h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
                    Launch an AI-powered outbound engine in days, not months.
                  </h2>
<p className="mt-2 text-sm text-slate-200">
                    Book a live walkthrough with our team and see how LeadSync AI would plug into your exact stack, ICP, and workflows.
                  </p>
<ul className="mt-4 space-y-1.5 text-[13px] text-slate-200">
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                      Personalized demo with real-world playbooks.
                    </li>
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-sky-400"></span>
                      No-pressure consultation with GTM experts.
                    </li>
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-yellow-400"></span>
                      Secure, privacy-first architecture from day one.
                    </li>
</ul>
</div>

<div className="relative mt-4 w-full max-w-xs rounded-2xl border border-slate-800 bg-slate-950/80 p-4 text-xs text-slate-200 shadow-lg shadow-black/60 md:mt-0">
<p className="text-[11px] font-medium text-slate-100">Request a demo</p>
<p className="mt-1 text-[11px] text-slate-400">Share a few details and we’ll follow up within one business day.</p>
<form className="mt-3 space-y-2">
<div>
<label className="mb-1 block text-[11px] text-slate-300" htmlFor="name">Full name</label>
<input className="w-full rounded-lg border border-slate-800 bg-slate-900/80 px-2 py-1.5 text-[11px] text-slate-100 outline-none ring-0 transition focus:border-sky-500/70 focus:bg-slate-900 focus:ring-1 focus:ring-sky-500/60" id="name" placeholder="Alex Rivera" type="text"/>
</div>
<div>
<label className="mb-1 block text-[11px] text-slate-300" htmlFor="email">Work email</label>
<input className="w-full rounded-lg border border-slate-800 bg-slate-900/80 px-2 py-1.5 text-[11px] text-slate-100 outline-none ring-0 transition focus:border-sky-500/70 focus:bg-slate-900 focus:ring-1 focus:ring-sky-500/60" id="email" placeholder="you@company.com" type="email"/>
</div>
<div>
<label className="mb-1 block text-[11px] text-slate-300" htmlFor="team-size">Team size</label>
<select className="w-full rounded-lg border border-slate-800 bg-slate-900/80 px-2 py-1.5 text-[11px] text-slate-100 outline-none ring-0 transition focus:border-sky-500/70 focus:bg-slate-900 focus:ring-1 focus:ring-sky-500/60" id="team-size">
<option className="bg-slate-900">1–3 people</option>
<option className="bg-slate-900">4–10 people</option>
<option className="bg-slate-900">11–30 people</option>
<option className="bg-slate-900">31–100 people</option>
<option className="bg-slate-900">100+ people</option>
</select>
</div>
<button className="mt-2 inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-sky-500 px-3 py-1.5 text-[11px] font-semibold tracking-tight text-black shadow-sm shadow-sky-500/40 transition hover:bg-sky-400 hover:shadow-sky-400/60" type="button">
                      Book my demo
                      <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M5 12h14" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>
<p className="mt-2 text-[10px] leading-snug text-slate-500">
                      By submitting this form you agree to receive communications about LeadSync AI. You can opt out at any time.
                    </p>
</form>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-slate-800/80 bg-black/80">
<div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
<div className="flex flex-col gap-8 md:flex-row md:justify-between">
<div className="max-w-sm">
<div className="flex items-center gap-2">
<div className="flex h-8 w-8 items-center justify-center rounded-lg border border-sky-500/40 bg-sky-500/10 text-xs font-semibold tracking-tight text-sky-100">
                  LS
                </div>
<span className="text-sm font-semibold tracking-tight text-slate-100">
                  LeadSync<span className="text-sky-400">AI</span>
</span>
</div>
<p className="mt-3 text-xs text-slate-400">
                LeadSync AI helps modern GTM teams discover, enrich, and activate leads autonomously across channels—while keeping your systems clean and compliant.
              </p>
</div>
<div className="grid flex-1 grid-cols-2 gap-6 text-xs text-slate-300 sm:grid-cols-4">
<div>
<p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Product
                </p>
<ul className="mt-3 space-y-1.5">
<li><a className="transition hover:text-sky-400" href="#demo">Live demo</a></li>
<li><a className="transition hover:text-sky-400" href="#features">Features</a></li>
<li><a className="transition hover:text-sky-400" href="#pricing">Pricing</a></li>
<li><a className="transition hover:text-sky-400" href="#faq">FAQ</a></li>
</ul>
</div>
<div>
<p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Solutions
                </p>
<ul className="mt-3 space-y-1.5">
<li><a className="transition hover:text-sky-400" href="#teams">Sales teams</a></li>
<li><a className="transition hover:text-sky-400" href="#teams">Marketing teams</a></li>
<li><a className="transition hover:text-sky-400" href="#teams">RevOps</a></li>
<li><a className="transition hover:text-sky-400" href="#teams">Agencies</a></li>
</ul>
</div>
<div>
<p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Company
                </p>
<ul className="mt-3 space-y-1.5">
<li><a className="transition hover:text-sky-400" href="#">About</a></li>
<li><a className="transition hover:text-sky-400" href="#">Blog</a></li>
<li><a className="transition hover:text-sky-400" href="#">Careers</a></li>
<li><a className="transition hover:text-sky-400" href="#">Partners</a></li>
</ul>
</div>
<div>
<p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Resources
                </p>
<ul className="mt-3 space-y-1.5">
<li><a className="transition hover:text-sky-400" href="#">Security</a></li>
<li><a className="transition hover:text-sky-400" href="#">Status</a></li>
<li><a className="transition hover:text-sky-400" href="#">Docs</a></li>
<li><a className="transition hover:text-sky-400" href="#">Support</a></li>
</ul>
</div>
</div>
</div>
<div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-slate-900 pt-4 text-[11px] text-slate-500 sm:flex-row">
<p>© <span id="year"></span> LeadSync AI. All rights reserved.</p>
<div className="flex items-center gap-4">
<a className="transition hover:text-sky-400" href="#">Privacy</a>
<a className="transition hover:text-sky-400" href="#">Terms</a>
<a className="transition hover:text-sky-400" href="#">Cookies</a>
</div>
</div>
</div>
</footer>
</div>
</div>



    </>
  );
}
