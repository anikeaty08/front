import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    document.getElementById('year').textContent = new Date().getFullYear();
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="flex-1 flex flex-col">

<div className="pointer-events-none fixed inset-x-0 top-0 z-0">
<div className="mx-auto h-40 max-w-4xl bg-gradient-to-b from-sky-500/20 via-cyan-400/10 to-transparent blur-3xl"></div>
</div>

<header className="relative z-20 border-b border-slate-800/60 bg-slate-950/70 backdrop-blur">
<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between py-4">
<div className="flex items-center gap-2">
<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-500/10 ring-1 ring-sky-400/40">
<span className="text-sm font-semibold tracking-tight text-sky-300">MS</span>
</div>
<div className="flex flex-col leading-tight">
<span className="text-base font-semibold tracking-tight">My Ai Staffer</span>
<span className="text-xs font-normal text-slate-400">AI staffing for small teams</span>
</div>
</div>
<nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
<a className="hover:text-slate-100 transition-colors" href="#how-it-works">How it works</a>
<a className="hover:text-slate-100 transition-colors" href="#roles">Roles we staff</a>
<a className="hover:text-slate-100 transition-colors" href="#results">Results</a>
</nav>
<div className="flex items-center gap-3">
<button className="hidden sm:inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/60 px-3 py-1.5 text-xs font-medium text-slate-200 hover:border-slate-500 hover:bg-slate-900 transition-colors">
<span className="iconify" data-icon="lucide:phone-call" data-inline="false" style={{fontSize: '1rem', strokeWidth: '1.5'}}></span>
              Talk to sales
            </button>
<a className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-4 py-1.5 text-xs font-semibold tracking-tight text-slate-950 shadow-lg shadow-sky-500/30 hover:bg-sky-400 transition-colors" href="#consultation">
              Get free consultation
              <span className="iconify" data-icon="lucide:arrow-right" data-inline="false" style={{fontSize: '1rem', strokeWidth: '1.5'}}></span>
</a>
</div>
</div>
</div>
</header>

<main className="relative z-10 flex-1">
<section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-10 pb-16 lg:pt-16 lg:pb-20">
<div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:items-center">

<div>
<div className="inline-flex items-center gap-2 rounded-full border border-sky-500/40 bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-200 mb-4">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-sky-400"></span>
              Built for busy small business owners
            </div>
<h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-50 mb-4">
              Turn AI into your most reliable staff member.
            </h1>
<p className="text-base sm:text-lg font-normal text-slate-300 mb-6 max-w-xl">
              My Ai Staffer designs and deploys AI-powered “team members” that handle repetitive work,
              so your real team can focus on growth. No hiring, no training, no overhead.
            </p>

<div className="grid gap-3 sm:grid-cols-3 mb-7">
<div className="flex flex-col rounded-xl border border-slate-800 bg-slate-900/40 px-3 py-3">
<span className="text-xs font-medium text-slate-400 mb-1">Average response time</span>
<span className="text-lg font-semibold tracking-tight text-sky-300">24/7</span>
</div>
<div className="flex flex-col rounded-xl border border-slate-800 bg-slate-900/40 px-3 py-3">
<span className="text-xs font-medium text-slate-400 mb-1">Cost vs hiring</span>
<span className="text-lg font-semibold tracking-tight text-emerald-300">Up to 70% less</span>
</div>
<div className="flex flex-col rounded-xl border border-slate-800 bg-slate-900/40 px-3 py-3">
<span className="text-xs font-medium text-slate-400 mb-1">Setup time</span>
<span className="text-lg font-semibold tracking-tight text-indigo-300">&lt; 14 days</span>
</div>
</div>

<div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4" id="consultation">
<div className="flex-1 max-w-md rounded-2xl border border-slate-800 bg-slate-900/80 p-4 shadow-[0_0_40rem] shadow-sky-500/10">
<form className="space-y-3">
<div className="flex flex-col gap-2 sm:flex-row">
<div className="flex-1">
<label className="block text-xs font-medium text-slate-300 mb-1">Work email</label>
<input className="w-full rounded-lg border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-sky-400 focus:outline-none focus:ring-1 focus:ring-sky-500" placeholder="you@business.com" type="email"/>
</div>
<div className="flex-1">
<label className="block text-xs font-medium text-slate-300 mb-1">Company size</label>
<select className="w-full rounded-lg border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 focus:border-sky-400 focus:outline-none focus:ring-1 focus:ring-sky-500">
<option className="bg-slate-900">1–5 employees</option>
<option className="bg-slate-900">6–20 employees</option>
<option className="bg-slate-900">21–50 employees</option>
<option className="bg-slate-900">51–100 employees</option>
</select>
</div>
</div>
<div className="flex flex-col sm:flex-row gap-2 sm:items-center">
<button className="inline-flex justify-center items-center gap-2 rounded-lg bg-sky-500 px-4 py-2 text-sm font-semibold tracking-tight text-slate-950 shadow-lg shadow-sky-500/30 hover:bg-sky-400 transition-colors w-full sm:w-auto" type="submit">
                      Book free 30‑min consultation
                      <span className="iconify" data-icon="lucide:calendar-clock" data-inline="false" style={{fontSize: '1rem', strokeWidth: '1.5'}}></span>
</button>
<p className="text-xs font-normal text-slate-400">
                      No obligation. We’ll map out one AI “role” you can deploy in under 2 weeks.
                    </p>
</div>
</form>
</div>
</div>

<div className="flex flex-col sm:flex-row sm:items-center gap-3">
<div className="flex -space-x-2">
<div className="h-7 w-7 rounded-full border border-slate-900 bg-gradient-to-br from-sky-400 to-cyan-500"></div>
<div className="h-7 w-7 rounded-full border border-slate-900 bg-gradient-to-br from-fuchsia-400 to-sky-500"></div>
<div className="h-7 w-7 rounded-full border border-slate-900 bg-gradient-to-br from-amber-400 to-rose-500"></div>
</div>
<p className="text-xs font-normal text-slate-400">
                Trusted by agencies, ecommerce shops, and local service businesses across North America.
              </p>
</div>
</div>

<div className="relative">
<div className="absolute -top-6 -right-4 h-32 w-32 rounded-full bg-sky-500/20 blur-3xl"></div>
<div className="relative rounded-3xl border border-slate-800 bg-gradient-to-b from-slate-900/80 to-slate-950/80 p-5 shadow-2xl shadow-black/50">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-xl bg-sky-500/20 flex items-center justify-center ring-1 ring-sky-400/40">
<span className="iconify text-sky-200" data-icon="lucide:bot" data-inline="false" style={{fontSize: '1.1rem', strokeWidth: '1.5'}}></span>
</div>
<div className="flex flex-col leading-tight">
<span className="text-sm font-semibold tracking-tight">Customer Support Staffer</span>
<span className="text-xs font-normal text-slate-400">AI “employee” • Tier 1 support</span>
</div>
</div>
<span className="rounded-full bg-emerald-500/10 px-2 py-1 text-[0.7rem] font-medium text-emerald-300 border border-emerald-400/40">
                  Online • 24/7
                </span>
</div>

<div className="space-y-2 mb-4">
<div className="flex justify-start">
<div className="max-w-[80%] rounded-2xl rounded-bl-sm bg-slate-900/90 border border-slate-700 px-3 py-2">
<p className="text-xs font-normal text-slate-50">
                      Can you confirm my booking for tomorrow and send me an invoice?
                    </p>
</div>
</div>
<div className="flex justify-end">
<div className="max-w-[80%] rounded-2xl rounded-br-sm bg-sky-500/15 border border-sky-500/40 px-3 py-2">
<p className="text-xs font-normal text-slate-100">
                      I’ve confirmed your 10:30am appointment for tomorrow and emailed the invoice to you.
                      You can pay online using the secure link provided.
                    </p>
</div>
</div>
<div className="flex justify-end">
<div className="max-w-[80%] rounded-2xl rounded-br-sm bg-sky-500/15 border border-sky-500/40 px-3 py-2">
<p className="text-xs font-normal text-slate-100">
                      Anything else I can help you with before your visit?
                    </p>
</div>
</div>
</div>

<div className="grid grid-cols-3 gap-2 mb-3">
<div className="rounded-xl border border-slate-800 bg-slate-950/80 px-2.5 py-2">
<span className="text-[0.7rem] font-medium text-slate-400">Conversations</span>
<p className="text-sm font-semibold tracking-tight text-slate-50">1,248</p>
</div>
<div className="rounded-xl border border-slate-800 bg-slate-950/80 px-2.5 py-2">
<span className="text-[0.7rem] font-medium text-slate-400">Resolved by AI</span>
<p className="text-sm font-semibold tracking-tight text-emerald-300">82%</p>
</div>
<div className="rounded-xl border border-slate-800 bg-slate-950/80 px-2.5 py-2">
<span className="text-[0.7rem] font-medium text-slate-400">Avg. response</span>
<p className="text-sm font-semibold tracking-tight text-sky-300">4s</p>
</div>
</div>

<div className="mt-3 border-t border-slate-800 pt-3">
<p className="text-xs font-medium text-slate-300 mb-2">
                  From idea to live “staffer” in 3 steps:
                </p>
<ol className="space-y-1.5 text-xs font-normal text-slate-300">
<li className="flex items-start gap-2">
<span className="mt-0.5 h-4 w-4 shrink-0 rounded-full border border-slate-600 bg-slate-900 flex items-center justify-center text-[0.65rem] text-slate-200">1</span>
<span>Free consult to identify the top 1–2 roles we can automate.</span>
</li>
<li className="flex items-start gap-2">
<span className="mt-0.5 h-4 w-4 shrink-0 rounded-full border border-slate-600 bg-slate-900 flex items-center justify-center text-[0.65rem] text-slate-200">2</span>
<span>We design, build, and train your AI staffer on your processes.</span>
</li>
<li className="flex items-start gap-2">
<span className="mt-0.5 h-4 w-4 shrink-0 rounded-full border border-slate-600 bg-slate-900 flex items-center justify-center text-[0.65rem] text-slate-200">3</span>
<span>We integrate with your tools and go live—with real-time monitoring.</span>
</li>
</ol>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-slate-900/80 bg-slate-950/80" id="how-it-works">
<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
<div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
<div>
<h2 className="text-2xl lg:text-3xl font-semibold tracking-tight text-slate-50 mb-2">How My Ai Staffer works</h2>
<p className="text-base font-normal text-slate-300 max-w-xl">
                A done‑for‑you service that finds the best use cases, builds your AI staff, and keeps everything running smoothly.
              </p>
</div>
<div className="rounded-2xl border border-emerald-500/40 bg-emerald-500/10 px-4 py-3 text-xs font-medium text-emerald-200 max-w-sm">
<span className="inline-flex items-center gap-1">
<span className="iconify" data-icon="lucide:sparkles" data-inline="false" style={{fontSize: '1rem', strokeWidth: '1.5'}}></span>
                Free consultation offer
              </span>
<p className="mt-1 text-xs font-normal text-emerald-100">
                We’ll identify 3–5 tasks your business can delegate to AI in the next 30 days and estimate savings.
              </p>
</div>
</div>
<div className="grid gap-5 md:grid-cols-3">

<div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-5">
<div className="flex items-center justify-between mb-3">
<span className="text-xs font-semibold tracking-tight text-sky-300">Step 1</span>
<span className="rounded-full bg-slate-900/80 px-2 py-0.5 text-[0.7rem] font-medium text-slate-400 border border-slate-700">Day 0–3</span>
</div>
<h3 className="text-base font-semibold tracking-tight text-slate-50 mb-2">
                Map your workflows
              </h3>
<p className="text-sm font-normal text-slate-300 mb-3">
                In a 30‑minute call, we learn how your business works—where leads come from, how you talk to customers, and what slows your team down.
              </p>
<ul className="space-y-1.5 text-sm font-normal text-slate-300">
<li className="flex gap-2">
<span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400"></span>
                  Audit of your top 3 processes (support, sales, admin, etc.)
                </li>
<li className="flex gap-2">
<span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400"></span>
                  Clear ROI estimate for at least one AI role
                </li>
</ul>
</div>

<div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-5">
<div className="flex items-center justify-between mb-3">
<span className="text-xs font-semibold tracking-tight text-sky-300">Step 2</span>
<span className="rounded-full bg-slate-900/80 px-2 py-0.5 text-[0.7rem] font-medium text-slate-400 border border-slate-700">Day 4–10</span>
</div>
<h3 className="text-base font-semibold tracking-tight text-slate-50 mb-2">
                Build your AI staff
              </h3>
<p className="text-sm font-normal text-slate-300 mb-3">
                We design and train one or more AI “staffers” tailored to your tone, policies, and tools.
              </p>
<ul className="space-y-1.5 text-sm font-normal text-slate-300">
<li className="flex gap-2">
<span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400"></span>
                  Custom persona, processes, and escalation rules
                </li>
<li className="flex gap-2">
<span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400"></span>
                  Safe data handling and permission controls
                </li>
</ul>
</div>

<div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-5">
<div className="flex items-center justify-between mb-3">
<span className="text-xs font-semibold tracking-tight text-sky-300">Step 3</span>
<span className="rounded-full bg-slate-900/80 px-2 py-0.5 text-[0.7rem] font-medium text-slate-400 border border-slate-700">Day 11–14</span>
</div>
<h3 className="text-base font-semibold tracking-tight text-slate-50 mb-2">
                Launch &amp; optimize
              </h3>
<p className="text-sm font-normal text-slate-300 mb-3">
                We roll out your AI staffer where you need it most and keep improving it with real data.
              </p>
<ul className="space-y-1.5 text-sm font-normal text-slate-300">
<li className="flex gap-2">
<span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400"></span>
                  Integrations with chat, email, CRM, calendar, and more
                </li>
<li className="flex gap-2">
<span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400"></span>
                  Ongoing tuning based on performance and your feedback
                </li>
</ul>
</div>
</div>
</div>
</section>

<section className="border-t border-slate-900/80 bg-slate-950" id="roles">
<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
<div>
<h2 className="text-2xl lg:text-3xl font-semibold tracking-tight text-slate-50 mb-2">
                AI “roles” we staff for you
              </h2>
<p className="text-base font-normal text-slate-300 max-w-xl">
                Start with one role or build a small team of AI staffers that cover your front office, back office, and growth.
              </p>
</div>
<div className="text-xs font-normal text-slate-400 max-w-xs">
              Every role includes reporting, safety controls, and a human‑in‑the‑loop option for sensitive decisions.
            </div>
</div>
<div className="grid gap-6 lg:grid-cols-3">

<div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-5 flex flex-col">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2">
<span className="iconify text-sky-300" data-icon="lucide:headset" data-inline="false" style={{fontSize: '1.1rem', strokeWidth: '1.5'}}></span>
<h3 className="text-base font-semibold tracking-tight text-slate-50">Customer Support Staffer</h3>
</div>
<span className="rounded-full bg-slate-900 px-2 py-0.5 text-[0.7rem] font-medium text-slate-400 border border-slate-700">
                  Most popular
                </span>
</div>
<p className="text-sm font-normal text-slate-300 mb-3">
                Handles FAQs, order lookups, scheduling, and simple troubleshooting on chat, email, or SMS.
              </p>
<ul className="space-y-1.5 text-sm font-normal text-slate-300 mb-4">
<li className="flex gap-2">
<span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                  24/7 instant replies for common questions
                </li>
<li className="flex gap-2">
<span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                  Smart routing to humans for complex issues
                </li>
</ul>
<div className="mt-auto flex items-center justify-between pt-3 border-t border-slate-800">
<span className="text-xs font-medium text-slate-400">Great for: local services, ecommerce, agencies</span>
</div>
</div>

<div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-5 flex flex-col">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2">
<span className="iconify text-sky-300" data-icon="lucide:messages-square" data-inline="false" style={{fontSize: '1.1rem', strokeWidth: '1.5'}}></span>
<h3 className="text-base font-semibold tracking-tight text-slate-50">Lead Qualifier Staffer</h3>
</div>
<span className="rounded-full bg-slate-900 px-2 py-0.5 text-[0.7rem] font-medium text-slate-400 border border-slate-700">
                  Revenue focused
                </span>
</div>
<p className="text-sm font-normal text-slate-300 mb-3">
                Captures website visitors, qualifies them with smart questions, and books calls straight to your calendar.
              </p>
<ul className="space-y-1.5 text-sm font-normal text-slate-300 mb-4">
<li className="flex gap-2">
<span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                  Plays your sales script, not a generic chatbot
                </li>
<li className="flex gap-2">
<span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                  Integrates with your CRM and calendar
                </li>
</ul>
<div className="mt-auto flex items-center justify-between pt-3 border-t border-slate-800">
<span className="text-xs font-medium text-slate-400">Great for: B2B services, agencies, SaaS</span>
</div>
</div>

<div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-5 flex flex-col">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2">
<span className="iconify text-sky-300" data-icon="lucide:clipboard-list" data-inline="false" style={{fontSize: '1.1rem', strokeWidth: '1.5'}}></span>
<h3 className="text-base font-semibold tracking-tight text-slate-50">Operations &amp; Admin Staffer</h3>
</div>
</div>
<p className="text-sm font-normal text-slate-300 mb-3">
                Keeps your back office moving—reminders, follow‑ups, simple data entry, and status updates.
              </p>
<ul className="space-y-1.5 text-sm font-normal text-slate-300 mb-4">
<li className="flex gap-2">
<span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                  Sends reminders and follow‑ups automatically
                </li>
<li className="flex gap-2">
<span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                  Syncs notes and updates in your tools
                </li>
</ul>
<div className="mt-auto flex items-center justify-between pt-3 border-t border-slate-800">
<span className="text-xs font-medium text-slate-400">Great for: clinics, studios, local services</span>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-slate-900/80 bg-slate-950/90" id="results">
<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
<div>
<h2 className="text-2xl lg:text-3xl font-semibold tracking-tight text-slate-50 mb-2">
                What small businesses are seeing
              </h2>
<p className="text-base font-normal text-slate-300 max-w-xl">
                We focus on clear, measurable outcomes—more revenue, lower support load, and fewer dropped balls.
              </p>
</div>
<div className="grid grid-cols-2 gap-3 max-w-sm">
<div className="rounded-xl border border-slate-800 bg-slate-950/80 px-3 py-2">
<p className="text-xs font-medium text-slate-400 mb-1">Support time saved</p>
<p className="text-lg font-semibold tracking-tight text-emerald-300">35+ hrs/week</p>
</div>
<div className="rounded-xl border border-slate-800 bg-slate-950/80 px-3 py-2">
<p className="text-xs font-medium text-slate-400 mb-1">New revenue from leads</p>
<p className="text-lg font-semibold tracking-tight text-sky-300">+22%</p>
</div>
</div>
</div>
<div className="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">

<div className="rounded-2xl border border-slate-800 bg-slate-950/90 p-5">
<div className="flex items-center gap-3 mb-4">
<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 text-xs font-semibold tracking-tight text-slate-200">
                  LA
                </div>
<div className="flex flex-col">
<span className="text-sm font-semibold tracking-tight text-slate-50">Local agency</span>
<span className="text-xs font-normal text-slate-400">8‑person marketing team • North America</span>
</div>
</div>
<p className="text-base font-normal text-slate-100 mb-3">
                “It feels like we hired a full‑time coordinator who never sleeps. Our AI staffer now handles first‑line support,
                schedules intro calls, and chases up overdue tasks—without us adding headcount.”
              </p>
<div className="grid grid-cols-3 gap-3 mt-4">
<div className="rounded-xl border border-slate-800 bg-slate-950/80 px-3 py-2">
<p className="text-xs font-medium text-slate-400 mb-1">Emails auto‑handled</p>
<p className="text-sm font-semibold tracking-tight text-slate-50">68%</p>
</div>
<div className="rounded-xl border border-slate-800 bg-slate-950/80 px-3 py-2">
<p className="text-xs font-medium text-slate-400 mb-1">New bookings</p>
<p className="text-sm font-semibold tracking-tight text-emerald-300">+19%</p>
</div>
<div className="rounded-xl border border-slate-800 bg-slate-950/80 px-3 py-2">
<p className="text-xs font-medium text-slate-400 mb-1">Avg. payback</p>
<p className="text-sm font-semibold tracking-tight text-sky-300">&lt; 6 weeks</p>
</div>
</div>
</div>

<div className="flex flex-col gap-4">
<div className="rounded-2xl border border-slate-800 bg-slate-950/90 p-5">
<h3 className="text-base font-semibold tracking-tight text-slate-50 mb-2">
                  Is this right for my business?
                </h3>
<p className="text-sm font-normal text-slate-300 mb-3">
                  My Ai Staffer is a fit if you:
                </p>
<ul className="space-y-1.5 text-sm font-normal text-slate-300 mb-4">
<li className="flex gap-2">
<span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400"></span>
                    Have repeatable conversations or tasks each week
                  </li>
<li className="flex gap-2">
<span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400"></span>
                    Use tools like email, chat, CRM, booking, or help desk software
                  </li>
<li className="flex gap-2">
<span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400"></span>
                    Want the benefits of AI without hiring an internal AI team
                  </li>
</ul>
<div className="rounded-xl border border-slate-800 bg-slate-900/80 px-3 py-2 text-xs font-normal text-slate-300">
                  During your free consultation, we’ll tell you honestly if we don’t think AI staffing will pay off yet for your business.
                </div>
</div>
<div className="rounded-2xl border border-sky-500/50 bg-sky-500/10 p-4">
<div className="flex items-center gap-2 mb-2">
<span className="iconify text-sky-200" data-icon="lucide:calendar-range" data-inline="false" style={{fontSize: '1.1rem', strokeWidth: '1.5'}}></span>
<p className="text-sm font-semibold tracking-tight text-sky-100">
                    Ready to see what an AI staffer could do for you?
                  </p>
</div>
<p className="text-xs font-normal text-sky-100 mb-3">
                  Share a few details and we’ll come to your call with concrete ideas tailored to your workflows.
                </p>
<a className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-4 py-1.5 text-xs font-semibold tracking-tight text-slate-950 shadow-lg shadow-sky-500/30 hover:bg-sky-400 transition-colors" href="#consultation">
                  Claim your free consultation
                  <span className="iconify" data-icon="lucide:arrow-right" data-inline="false" style={{fontSize: '1rem', strokeWidth: '1.5'}}></span>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-slate-900 bg-slate-950">
<div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10 lg:py-12">
<div className="rounded-3xl border border-slate-800 bg-gradient-to-r from-slate-950 via-slate-950 to-sky-950/60 p-5 sm:p-7 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
<div className="max-w-xl">
<h2 className="text-2xl font-semibold tracking-tight text-slate-50 mb-2">
                Let’s design your first AI staffer—no cost, no commitment.
              </h2>
<p className="text-base font-normal text-slate-300">
                In 30 minutes, we’ll outline one role you can automate, what it would do day‑to‑day, and how much time and money you could save.
              </p>
</div>
<div className="w-full md:w-auto">
<form className="space-y-2">
<div className="flex flex-col sm:flex-row gap-2">
<input className="w-full sm:w-40 rounded-lg border border-slate-700 bg-slate-950/80 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-sky-400 focus:outline-none focus:ring-1 focus:ring-sky-500" placeholder="Name" type="text"/>
<input className="w-full sm:w-48 rounded-lg border border-slate-700 bg-slate-950/80 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-sky-400 focus:outline-none focus:ring-1 focus:ring-sky-500" placeholder="Work email" type="email"/>
</div>
<button className="inline-flex w-full justify-center items-center gap-2 rounded-lg bg-sky-500 px-4 py-2 text-sm font-semibold tracking-tight text-slate-950 shadow-lg shadow-sky-500/30 hover:bg-sky-400 transition-colors" type="submit">
                  Schedule my free consultation
                  <span className="iconify" data-icon="lucide:arrow-right" data-inline="false" style={{fontSize: '1rem', strokeWidth: '1.5'}}></span>
</button>
<p className="text-[0.7rem] font-normal text-slate-400">
                  We reply within one business day. No spam, ever.
                </p>
</form>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-slate-900 bg-slate-950">
<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
<div className="flex items-center gap-2">
<div className="flex h-6 w-6 items-center justify-center rounded-md bg-slate-900 border border-slate-700">
<span className="text-[0.7rem] font-semibold tracking-tight text-slate-200">MS</span>
</div>
<span className="text-xs font-medium text-slate-400">© <span id="year"></span> My Ai Staffer. All rights reserved.</span>
</div>
<div className="flex items-center gap-4 text-xs font-normal text-slate-400">
<a className="hover:text-slate-200 transition-colors" href="#">Privacy</a>
<a className="hover:text-slate-200 transition-colors" href="#">Terms</a>
<a className="hover:text-slate-200 transition-colors" href="#">Contact</a>
</div>
</div>
</footer>
</div>




    </>
  );
}
