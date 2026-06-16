import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    // Inject lucide icons
    document.addEventListener("DOMContentLoaded", () => {
      const icons = {
        "demo-icon": "calendar",
        "arrow-up-icon": "trending-up",
        "sparkles-icon": "sparkles",
        "cursor-icon": "cursor-click",
        "timeline-icon": "activity",
        "flask-icon": "flask-conical",
        "database-icon": "database"
      };

      for (const [id, name] of Object.entries(icons)) {
        const el = document.getElementById(id);
        if (el) {
          const iconNode = lucide.createElement(lucide[name], {
            size: 16,
            strokeWidth: 1.5
          });
          el.replaceWith(iconNode);
        }
      }

      const yearEl = document.getElementById("year");
      if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
      }
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="flex flex-col min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900">

<header className="w-full border-b border-slate-800/80">
<div className="max-w-6xl mx-auto flex items-center justify-between gap-4 py-4 px-4 sm:px-6 lg:px-8">

<a className="inline-flex items-center gap-2" href="#">
<div className="h-8 w-8 rounded-xl bg-gradient-to-br from-sky-500 to-violet-500 flex items-center justify-center shadow-lg shadow-sky-500/30">
<span className="text-xs font-semibold tracking-tight">MA</span>
</div>
<span className="text-lg font-semibold tracking-tight">Modura Analytics</span>
</a>

<nav className="hidden md:flex items-center gap-8 text-sm">
<a className="text-slate-300/90 hover:text-slate-50 transition-colors" href="#product">Product</a>
<a className="text-slate-300/90 hover:text-slate-50 transition-colors" href="#solutions">Solutions</a>
<a className="text-slate-300/90 hover:text-slate-50 transition-colors" href="#customers">Customers</a>
<a className="text-slate-300/90 hover:text-slate-50 transition-colors" href="#pricing">Pricing</a>
</nav>

<div className="flex items-center gap-3">
<button className="hidden sm:inline-flex items-center justify-center rounded-full border border-slate-700/80 text-xs sm:text-sm font-medium text-slate-200 hover:text-white hover:border-slate-500/80 bg-slate-900/40 hover:bg-slate-900/90 px-3 sm:px-4 py-1.5 transition-colors">
            Sign in
          </button>
<button className="inline-flex items-center justify-center rounded-full bg-sky-500 hover:bg-sky-400 text-xs sm:text-sm font-medium text-slate-950 px-3 sm:px-4 py-1.5 shadow-md shadow-sky-500/40 transition-colors">
            Get started
          </button>
</div>
</div>
</header>

<main className="flex-1">
<section className="w-full border-b border-slate-800/70">
<div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center py-10 sm:py-14 lg:py-20 px-4 sm:px-6 lg:px-8">

<div className="space-y-6">

<div className="inline-flex items-center gap-2 rounded-full border border-sky-500/40 bg-sky-500/5 text-sky-200/90 text-xs font-medium px-2.5 py-1">
<span className="h-1.5 w-1.5 rounded-full bg-sky-400"></span>
              Real-time product insights for modern teams
            </div>

<h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-50 leading-tight">
              Turn product data <span className="text-sky-400">into clarity</span>, not chaos.
            </h1>

<p className="text-base sm:text-lg text-slate-300/90 leading-relaxed max-w-xl">
              Modura Analytics connects events, experiments, and customers into one live canvas,
              so product teams can ship faster with confidence—not guesswork.
            </p>

<div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
<button className="inline-flex items-center justify-center rounded-full bg-sky-500 hover:bg-sky-400 text-sm font-medium text-slate-950 px-5 py-2.5 shadow-lg shadow-sky-500/40 transition-colors">
                Start free workspace
              </button>
<button className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/40 hover:bg-slate-900/80 text-sm font-medium text-slate-200 hover:text-white px-4 py-2 transition-colors">
<span className="h-4 w-4" id="demo-icon"></span>
                Book a demo
              </button>
</div>

<div className="space-y-2 pt-2">
<p className="text-xs sm:text-sm text-slate-400">
                Trusted by product and data teams at fast-growing companies
              </p>
<div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-500">
<span className="tracking-tight font-semibold text-slate-300/90">NOVA</span>
<span className="tracking-tight font-semibold text-slate-300/90">LUMIQ</span>
<span className="tracking-tight font-semibold text-slate-300/90">ARCLINE</span>
<span className="tracking-tight font-semibold text-slate-300/90">VERTIS</span>
</div>
</div>
</div>

<div className="relative">

<div className="absolute inset-0 -translate-y-6 blur-3xl opacity-60 pointer-events-none" style={{background: 'radial-gradient(circle at 20% 0%, rgba(56,189,248,0.35), transparent 55%), radial-gradient(circle at 80% 10%, rgba(129,140,248,0.3), transparent 55%)'}}></div>
<div className="relative border border-slate-800/90 rounded-3xl bg-slate-950/80 backdrop-blur-xl shadow-[0_0_0_1px_rgba(15,23,42,0.9)] shadow-sky-500/10 overflow-hidden">

<div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-slate-800/80 bg-gradient-to-r from-slate-950/80 via-slate-950/90 to-slate-950/60">
<div className="flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-rose-500/90"></span>
<span className="h-2 w-2 rounded-full bg-amber-400/90"></span>
<span className="h-2 w-2 rounded-full bg-emerald-400/90"></span>
</div>
<p className="text-xs sm:text-sm text-slate-300/80 font-medium">
                  Live Cohort Performance
                </p>
<span className="text-[0.6rem] sm:text-xs text-slate-500">Updated 5s ago</span>
</div>

<div className="grid grid-cols-1 md:grid-cols-5 gap-4 sm:gap-5 p-4 sm:p-5">

<div className="md:col-span-2 flex flex-col gap-3">

<div className="rounded-2xl border border-slate-800/80 bg-slate-950/80 p-3 sm:p-4 space-y-2">
<div className="flex items-center justify-between gap-2">
<p className="text-xs sm:text-sm text-slate-400">Activation rate</p>
<span className="inline-flex items-center rounded-full bg-emerald-500/10 text-emerald-400 text-[0.6rem] sm:text-xs font-medium px-2 py-0.5">
                        +12.4%
                      </span>
</div>
<div className="flex items-end justify-between gap-2">
<p className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-50">
                        68.2%
                      </p>
<p className="text-[0.6rem] sm:text-xs text-slate-500">
                        vs last release
                      </p>
</div>
<div className="mt-2 flex items-center gap-2">
<div className="flex -space-x-1">
<span className="h-5 w-5 rounded-full bg-sky-500/80 border border-slate-900/90"></span>
<span className="h-5 w-5 rounded-full bg-violet-500/80 border border-slate-900/90"></span>
<span className="h-5 w-5 rounded-full bg-emerald-500/80 border border-slate-900/90"></span>
</div>
<p className="text-[0.6rem] sm:text-xs text-slate-400">
                        Beta, self-serve, &amp; enterprise cohorts
                      </p>
</div>
</div>

<div className="rounded-2xl border border-slate-800/80 bg-slate-950/70 p-3 sm:p-4 space-y-2">
<div className="flex items-center justify-between gap-2">
<p className="text-xs sm:text-sm text-slate-400">Net revenue impact</p>
<span className="inline-flex items-center gap-1 text-[0.6rem] sm:text-xs text-emerald-400">
<span className="h-3 w-3" id="arrow-up-icon"></span>
                        +$124k
                      </span>
</div>
<p className="text-base sm:text-lg font-medium text-slate-100">
                      Experiment <span className="text-sky-400">"Onboarding v3"</span> is outperforming control.
                    </p>
</div>
</div>

<div className="md:col-span-3 flex flex-col gap-3">

<div className="rounded-2xl border border-slate-800/80 bg-gradient-to-br from-slate-950/80 via-slate-950/60 to-slate-900/70 p-3 sm:p-4">
<div className="flex items-center justify-between gap-2 mb-2">
<div className="flex items-center gap-2">
<p className="text-xs sm:text-sm text-slate-300/90 font-medium">
                          Weekly active users
                        </p>
<span className="text-[0.6rem] sm:text-xs text-slate-500">
                          Cohort: Onboarded &lt; 14 days
                        </span>
</div>
<div className="flex items-center gap-1.5 text-[0.6rem] sm:text-xs">
<span className="inline-flex items-center gap-1 text-sky-300">
<span className="h-1.5 w-3 rounded-full bg-sky-400/80"></span>
                          Feature A
                        </span>
<span className="inline-flex items-center gap-1 text-violet-300">
<span className="h-1.5 w-3 rounded-full bg-violet-400/80"></span>
                          Feature B
                        </span>
</div>
</div>

<div className="relative mt-2 h-32 sm:h-36">

<div className="absolute inset-0 flex flex-col justify-between">
<span className="h-px w-full bg-slate-800/80"></span>
<span className="h-px w-full bg-slate-800/80"></span>
<span className="h-px w-full bg-slate-800/80"></span>
<span className="h-px w-full bg-slate-800/80"></span>
</div>

<svg className="relative h-full w-full">
<polyline className="drop-shadow-[0_0_8px_rgba(56,189,248,0.6)]" fill="none" points="0,70 40,60 80,50 120,55 160,40 200,35 240,30 280,25 320,20" stroke="url(#skyGradient)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polyline>
<polyline className="drop-shadow-[0_0_8px_rgba(129,140,248,0.6)]" fill="none" points="0,80 40,72 80,68 120,64 160,60 200,58 240,50 280,45 320,42" stroke="url(#violetGradient)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polyline>
<defs>
<lineargradient id="skyGradient" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" stop-color="#38bdf8" stop-opacity="0.4"></stop>
<stop offset="50%" stop-color="#38bdf8" stop-opacity="0.9"></stop>
<stop offset="100%" stop-color="#22c55e" stop-opacity="0.9"></stop>
</lineargradient>
<lineargradient id="violetGradient" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" stop-color="#6366f1" stop-opacity="0.3"></stop>
<stop offset="50%" stop-color="#6366f1" stop-opacity="0.9"></stop>
<stop offset="100%" stop-color="#a855f7" stop-opacity="0.9"></stop>
</lineargradient>
</defs>
</svg>
</div>

<div className="mt-2 flex justify-between text-[0.6rem] sm:text-xs text-slate-500">
<span>W1</span><span>W2</span><span>W3</span><span>W4</span><span>W5</span>
</div>
</div>

<div className="grid grid-cols-2 gap-3">
<div className="rounded-2xl border border-slate-800/80 bg-slate-950/80 p-3 sm:p-3.5 space-y-1.5">
<p className="text-xs sm:text-sm text-slate-400">Drop-off surface</p>
<p className="text-sm sm:text-base text-slate-100">
                        Step 3 in onboarding causes <span className="text-rose-400">32%</span> of churn.
                      </p>
</div>
<div className="rounded-2xl border border-slate-800/80 bg-slate-950/80 p-3 sm:p-3.5 space-y-1.5">
<p className="text-xs sm:text-sm text-slate-400">Predicted impact</p>
<p className="text-sm sm:text-base text-slate-100">
                        Fixing it unlocks an estimated <span className="text-emerald-400">+7.8%</span> LTV per user.
                      </p>
</div>
</div>
</div>
</div>

<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-4 sm:px-5 py-3 border-t border-slate-800/90 bg-slate-950/90">
<div className="flex items-center gap-2 text-[0.6rem] sm:text-xs text-slate-400">
<span className="h-3.5 w-3.5" id="sparkles-icon"></span>
<span>AI suggestions enabled for new experiments.</span>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1.5 rounded-full border border-slate-700/80 text-[0.6rem] sm:text-xs text-slate-200 hover:text-white bg-slate-900/60 hover:bg-slate-900/90 px-2.5 py-1 transition-colors">
<span className="h-3 w-3" id="cursor-icon"></span>
                    Open in workspace
                  </button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full border-b border-slate-800/70" id="product">
<div className="max-w-6xl mx-auto py-10 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8 space-y-8">
<div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
<div className="space-y-3 max-w-xl">
<p className="text-xs sm:text-sm font-medium text-sky-400 uppercase tracking-[0.16em]">
                Product overview
              </p>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50">
                One analytics surface for product, data, and growth.
              </h2>
<p className="text-base text-slate-300/90">
                Replace fragmented dashboards with a single, live system of truth that connects
                events, funnels, experiments, and revenue.
              </p>
</div>
<div className="flex flex-wrap gap-2 text-[0.6rem] sm:text-xs text-slate-400">
<span className="inline-flex items-center gap-1 rounded-full border border-slate-700/80 bg-slate-950/80 px-2.5 py-1">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                No-code event tracking
              </span>
<span className="inline-flex items-center gap-1 rounded-full border border-slate-700/80 bg-slate-950/80 px-2.5 py-1">
<span className="h-1.5 w-1.5 rounded-full bg-sky-400"></span>
                Warehouse-native queries
              </span>
<span className="inline-flex items-center gap-1 rounded-full border border-slate-700/80 bg-slate-950/80 px-2.5 py-1">
<span className="h-1.5 w-1.5 rounded-full bg-violet-400"></span>
                AI anomaly detection
              </span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-5">

<div className="rounded-2xl border border-slate-800/80 bg-slate-950/80 p-4 sm:p-5 flex flex-col gap-3">
<div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-sky-500/10 border border-sky-500/40">
<span className="h-4 w-4 text-sky-400" id="timeline-icon"></span>
</div>
<div className="space-y-1.5">
<h3 className="text-base sm:text-lg font-semibold tracking-tight text-slate-50">
                  Session intelligence
                </h3>
<p className="text-sm sm:text-base text-slate-300/90">
                  Visualize every user journey with event-context, device data, and real-time streams,
                  without drowning in raw logs.
                </p>
</div>
<ul className="mt-1 space-y-1.5 text-xs sm:text-sm text-slate-400">
<li>• Live funnels and pathing</li>
<li>• Retroactive event definitions</li>
<li>• Behavioral cohorts in seconds</li>
</ul>
</div>

<div className="rounded-2xl border border-slate-800/80 bg-slate-950/80 p-4 sm:p-5 flex flex-col gap-3">
<div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/40">
<span className="h-4 w-4 text-emerald-400" id="flask-icon"></span>
</div>
<div className="space-y-1.5">
<h3 className="text-base sm:text-lg font-semibold tracking-tight text-slate-50">
                  Experiment system
                </h3>
<p className="text-sm sm:text-base text-slate-300/90">
                  Run, monitor, and decide on experiments from a unified hub that keeps stats and
                  guardrails front and center.
                </p>
</div>
<ul className="mt-1 space-y-1.5 text-xs sm:text-sm text-slate-400">
<li>• Sequential experiments, no double-counting</li>
<li>• Multi-metric decision frameworks</li>
<li>• AI-written experiment briefs</li>
</ul>
</div>

<div className="rounded-2xl border border-slate-800/80 bg-slate-950/80 p-4 sm:p-5 flex flex-col gap-3">
<div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-violet-500/10 border border-violet-500/40">
<span className="h-4 w-4 text-violet-400" id="database-icon"></span>
</div>
<div className="space-y-1.5">
<h3 className="text-base sm:text-lg font-semibold tracking-tight text-slate-50">
                  Warehouse native
                </h3>
<p className="text-sm sm:text-base text-slate-300/90">
                  Connect your existing warehouse and let Modura handle semantic layers, caching,
                  and governance automatically.
                </p>
</div>
<ul className="mt-1 space-y-1.5 text-xs sm:text-sm text-slate-400">
<li>• No data duplication</li>
<li>• Granular access policies</li>
<li>• SQL when you need full control</li>
</ul>
</div>
</div>
</div>
</section>

<section className="w-full" id="pricing">
<div className="max-w-6xl mx-auto py-10 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8">
<div className="rounded-3xl border border-slate-800/80 bg-slate-950/90 px-5 sm:px-8 py-8 sm:py-10 flex flex-col lg:flex-row gap-6 lg:gap-10 items-start lg:items-center">
<div className="flex-1 space-y-3">
<p className="text-xs sm:text-sm font-medium text-sky-400 uppercase tracking-[0.16em]">
                Pricing
              </p>
<h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-50">
                Start free, scale when analytics becomes mission-critical.
              </h3>
<p className="text-base text-slate-300/90">
                No credit card required. Every workspace starts on a 14-day trial of our full
                capabilities, then switches to a generous free tier.
              </p>
<div className="flex flex-wrap gap-3 text-xs sm:text-sm text-slate-300/90">
<span className="inline-flex items-center gap-1 rounded-full bg-slate-900/90 border border-slate-700/80 px-2.5 py-1">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                  Unlimited read-only viewers
                </span>
<span className="inline-flex items-center gap-1 rounded-full bg-slate-900/90 border border-slate-700/80 px-2.5 py-1">
<span className="h-1.5 w-1.5 rounded-full bg-sky-400"></span>
                  Volume-based event pricing
                </span>
</div>
</div>
<div className="w-full max-w-xs lg:max-w-sm rounded-2xl border border-slate-700/80 bg-slate-950/80 p-4 sm:p-5 space-y-4">
<div className="flex items-baseline justify-between">
<div>
<p className="text-xs sm:text-sm text-slate-400">From</p>
<div className="flex items-baseline gap-1">
<span className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50">
                      $0
                    </span>
<span className="text-xs sm:text-sm text-slate-400">/month</span>
</div>
</div>
<span className="text-[0.6rem] sm:text-xs text-emerald-400 font-medium bg-emerald-500/10 border border-emerald-500/40 rounded-full px-2 py-0.5">
                  Free tier included
                </span>
</div>
<ul className="space-y-1.5 text-xs sm:text-sm text-slate-300/90">
<li>• 3 editor seats</li>
<li>• 1M monthly tracked events</li>
<li>• Unlimited dashboards &amp; reports</li>
<li>• Slack &amp; email alerts</li>
</ul>
<button className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-sky-500 hover:bg-sky-400 text-sm font-medium text-slate-950 px-4 py-2.5 shadow-md shadow-sky-500/40 transition-colors">
                Create your workspace
              </button>
<p className="text-[0.6rem] sm:text-xs text-slate-500 text-center">
                Need enterprise? <a className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline" href="#">Talk to sales</a>.
              </p>
</div>
</div>
</div>
</section>
</main>

<footer className="w-full border-t border-slate-800/80">
<div className="max-w-6xl mx-auto py-6 sm:py-8 px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-6 w-6 rounded-lg bg-slate-900 border border-slate-700/80 flex items-center justify-center">
<span className="text-[0.65rem] font-semibold tracking-tight text-slate-200">MA</span>
</div>
<p className="text-xs sm:text-sm text-slate-500">
            © <span id="year"></span> Modura Analytics. All rights reserved.
          </p>
</div>
<div className="flex flex-wrap gap-4 text-xs sm:text-sm text-slate-500">
<a className="hover:text-slate-300" href="#">Security</a>
<a className="hover:text-slate-300" href="#">Privacy</a>
<a className="hover:text-slate-300" href="#">Status</a>
<a className="hover:text-slate-300" href="#">Docs</a>
</div>
</div>
</footer>
</div>


    </>
  );
}
