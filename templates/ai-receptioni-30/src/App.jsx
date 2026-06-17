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
      

<nav className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/80 backdrop-blur-md">
<div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
<div className="flex items-center gap-2">
<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white shadow-sm shadow-indigo-200">
<iconify-icon icon="solar:soundwave-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-lg font-semibold tracking-tight text-slate-900">VoiceFlow</span>
</div>
<div className="hidden gap-8 md:flex">
<a className="text-sm font-medium text-slate-500 transition hover:text-indigo-600" href="#how-it-works">How it works</a>
<a className="text-sm font-medium text-slate-500 transition hover:text-indigo-600" href="#dashboard-preview">Features</a>
<a className="text-sm font-medium text-slate-500 transition hover:text-indigo-600" href="#pricing">Pricing</a>
</div>
<div className="flex items-center gap-3">

<a className="hidden md:flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 transition hover:bg-slate-50 hover:text-indigo-600" href="#dashboard-preview">
<iconify-icon icon="solar:widget-2-linear" width="16"></iconify-icon>
                    Dashboard
                </a>
<button className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800 hover:shadow-lg shadow-sm">Start Free Trial</button>
</div>
</div>
</nav>

<section className="relative overflow-hidden pt-20 pb-24 lg:pt-32 lg:pb-32">
<div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-50 via-white to-white opacity-70"></div>
<div className="mx-auto max-w-7xl px-6 text-center">
<div className="fade-in mx-auto mb-6 flex w-fit items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50/50 px-3 py-1 text-xs font-semibold text-indigo-600 backdrop-blur-sm">
<span className="relative flex h-2 w-2">
<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-500"></span>
</span>
                New: Multilingual Support Available
            </div>
<h1 className="fade-in fade-in-delay-1 mx-auto max-w-4xl text-5xl font-semibold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
                Your calls, answered <br className="hidden sm:block"/> <span className="text-indigo-600">professionally</span> — 24/7.
            </h1>
<p className="fade-in fade-in-delay-2 mx-auto mt-6 max-w-2xl text-lg text-slate-500 leading-relaxed">
                An AI voice receptionist that handles your business calls with warmth and precision. Syncs instantly with your CRM and calendar.
            </p>
<div className="fade-in fade-in-delay-3 mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
<button className="flex items-center gap-2 rounded-xl bg-indigo-600 px-8 py-3.5 text-sm font-semibold text-white shadow-md shadow-indigo-200 transition hover:bg-indigo-700 hover:shadow-lg hover:-translate-y-0.5">
                    Start 3-Day Free Trial
                    <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
<button className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-8 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50">
<iconify-icon icon="solar:play-circle-linear" strokeWidth="1.5" width="16"></iconify-icon>
                    Hear a sample call
                </button>
</div>

</div>

<div className="mx-auto mt-20 max-w-7xl px-6">
<p className="text-center text-xs font-semibold uppercase tracking-wide text-slate-400">Trusted by forward-thinking companies</p>
<div className="mt-8 flex flex-wrap justify-center gap-x-12 gap-y-8 opacity-60 grayscale transition duration-500 hover:grayscale-0">
<div className="flex items-center gap-2 font-semibold text-xl text-slate-800"><iconify-icon icon="solar:box-minimalistic-linear" width="24"></iconify-icon> Acme Corp</div>
<div className="flex items-center gap-2 font-semibold text-xl text-slate-800"><iconify-icon icon="solar:atom-linear" width="24"></iconify-icon> Nexus</div>
<div className="flex items-center gap-2 font-semibold text-xl text-slate-800"><iconify-icon icon="solar:planet-linear" width="24"></iconify-icon> Sphere</div>
<div className="flex items-center gap-2 font-semibold text-xl text-slate-800"><iconify-icon icon="solar:layers-minimalistic-linear" width="24"></iconify-icon> Cube Inc</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-y border-slate-100" id="how-it-works">
<div className="mx-auto max-w-7xl px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">How It Works</h2>
<p className="mt-4 text-slate-500">From call to action in seconds. Simple, seamless, automatic.</p>
</div>
<div className="relative grid grid-cols-1 gap-8 md:grid-cols-3">

<div className="absolute top-12 left-0 hidden w-full md:block px-16 pointer-events-none">
<div className="h-0.5 w-full border-t-2 border-dashed border-slate-200"></div>
<div className="absolute top-[-8px] left-[32%] text-slate-300 bg-slate-50 px-1">
<iconify-icon icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
</div>
<div className="absolute top-[-8px] right-[32%] text-slate-300 bg-slate-50 px-1">
<iconify-icon icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
</div>
</div>

<div className="group relative z-10 flex flex-col items-start rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-md hover:border-indigo-100">
<div className="mb-6 flex items-center justify-between w-full">
<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-sm shadow-indigo-200">
<iconify-icon icon="solar:phone-calling-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-600">Step 01</span>
</div>
<h3 className="text-lg font-semibold text-slate-900">Incoming Call</h3>
<p className="mt-3 text-sm leading-relaxed text-slate-500">
                        Customer calls your business number. Our system picks up instantly, 24/7, ensuring no lead is ever lost to voicemail.
                    </p>
</div>

<div className="group relative z-10 flex flex-col items-start rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-md hover:border-indigo-100">
<div className="mb-6 flex items-center justify-between w-full">
<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-sm shadow-indigo-200">
<iconify-icon icon="solar:chat-round-line-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-600">Step 02</span>
</div>
<h3 className="text-lg font-semibold text-slate-900">AI Agent Answers</h3>
<p className="mt-3 text-sm leading-relaxed text-slate-500">
                        A human-sounding AI voice agent greets the caller, understands their intent naturally, and handles their request with empathy.
                    </p>
</div>

<div className="group relative z-10 flex flex-col items-start rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-md hover:border-indigo-100">
<div className="mb-6 flex items-center justify-between w-full">
<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-sm shadow-indigo-200">
<iconify-icon icon="solar:widget-2-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-600">Step 03</span>
</div>
<h3 className="text-lg font-semibold text-slate-900">Dashboard &amp; CRM Sync</h3>
<p className="mt-3 text-sm leading-relaxed text-slate-500">
                        All data, transcripts, and action items flow to your dashboard and CRM instantly. Ready for you to review or act on.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden" id="dashboard-preview">
<div className="mx-auto max-w-7xl px-6">
<div className="mb-12 flex items-end justify-between">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">Powerful Control Center</h2>
<p className="mt-4 text-slate-500 max-w-xl">
                        Monitor your calls, manage leads, and configure your AI agent from a beautiful, intuitive dashboard designed for efficiency.
                    </p>
</div>
<div className="hidden sm:flex gap-2">
<span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                        Live Demo
                    </span>
</div>
</div>

<div className="relative w-full rounded-xl border border-slate-200 bg-slate-50 shadow-2xl shadow-slate-200/50 overflow-hidden">
<div className="flex h-[700px] w-full">

<aside className="w-64 flex-shrink-0 border-r border-slate-200 bg-white flex flex-col">
<div className="flex h-16 items-center px-6 border-b border-slate-100">
<div className="flex items-center gap-2 text-indigo-600">
<iconify-icon icon="solar:soundwave-linear" width="24"></iconify-icon>
<span className="font-semibold text-slate-900 tracking-tight">VoiceFlow</span>
</div>
</div>
<div className="p-4 space-y-1 overflow-y-auto flex-1">
<div className="px-2 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">Overview</div>
<button className="flex w-full items-center gap-3 rounded-lg bg-indigo-50 px-3 py-2 text-sm font-medium text-indigo-600">
<iconify-icon icon="solar:widget-2-linear" width="18"></iconify-icon>
                                Dashboard
                            </button>
<button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900">
<iconify-icon icon="solar:phone-calling-linear" width="18"></iconify-icon>
                                Call Logs
                            </button>
<button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900">
<iconify-icon icon="solar:users-group-rounded-linear" width="18"></iconify-icon>
                                Contacts
                            </button>
<button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900">
<iconify-icon icon="solar:calendar-linear" width="18"></iconify-icon>
                                Calendar
                            </button>
<div className="mt-8 px-2 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">Configuration</div>
<button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900">
<iconify-icon icon="solar:settings-linear" width="18"></iconify-icon>
                                Agent Settings
                            </button>
<button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900">
<iconify-icon icon="solar:card-linear" width="18"></iconify-icon>
                                Billing
                            </button>
</div>
<div className="p-4 border-t border-slate-100">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs font-bold">JD</div>
<div className="flex-1 min-w-0">
<p className="text-xs font-medium text-slate-900 truncate">John Doe</p>
<p className="text-[10px] text-slate-500 truncate">Acme Corp</p>
</div>
<iconify-icon className="text-slate-400" icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col bg-slate-50 overflow-hidden">

<header className="h-16 border-b border-slate-200 bg-white px-8 flex items-center justify-between">
<h2 className="text-lg font-semibold text-slate-900">Dashboard</h2>
<div className="flex items-center gap-4">
<button className="text-slate-400 hover:text-slate-600">
<iconify-icon icon="solar:bell-linear" width="20"></iconify-icon>
</button>
<button className="rounded-lg bg-indigo-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-indigo-700 shadow-sm shadow-indigo-100">
                                    + New Number
                                </button>
</div>
</header>
<div className="flex-1 overflow-y-auto p-8">

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
<div className="rounded-xl bg-white p-6 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] border border-slate-100">
<div className="flex items-center justify-between">
<p className="text-sm font-medium text-slate-500">Total Calls</p>
<span className="text-emerald-500 text-xs font-medium flex items-center gap-1">+12% <iconify-icon icon="solar:arrow-right-up-linear" width="12"></iconify-icon></span>
</div>
<p className="mt-2 text-3xl font-semibold text-slate-900 tracking-tight">1,248</p>
</div>
<div className="rounded-xl bg-white p-6 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] border border-slate-100">
<div className="flex items-center justify-between">
<p className="text-sm font-medium text-slate-500">Minutes Saved</p>
<span className="text-emerald-500 text-xs font-medium flex items-center gap-1">+5.4h <iconify-icon icon="solar:arrow-right-up-linear" width="12"></iconify-icon></span>
</div>
<p className="mt-2 text-3xl font-semibold text-slate-900 tracking-tight">86h</p>
</div>
<div className="rounded-xl bg-white p-6 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] border border-slate-100">
<div className="flex items-center justify-between">
<p className="text-sm font-medium text-slate-500">Appointments Set</p>
<span className="text-indigo-500 text-xs font-medium flex items-center gap-1">New</span>
</div>
<p className="mt-2 text-3xl font-semibold text-slate-900 tracking-tight">42</p>
</div>
</div>

<div className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
<div className="border-b border-slate-200 px-6 py-4 flex items-center justify-between bg-white">
<h3 className="font-semibold text-slate-900">Recent Calls</h3>
<button className="text-xs font-medium text-indigo-600 hover:text-indigo-700">View All</button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left text-sm text-slate-600">
<thead className="bg-slate-50/50 text-xs uppercase text-slate-400 font-medium">
<tr>
<th className="px-6 py-3">Caller</th>
<th className="px-6 py-3">Status</th>
<th className="px-6 py-3">Duration</th>
<th className="px-6 py-3">Sentiment</th>
<th className="px-6 py-3">Date</th>
<th className="px-6 py-3 text-right">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100">
<tr className="hover:bg-slate-50/50 transition">
<td className="px-6 py-4 font-medium text-slate-900">+1 (555) 012-3456</td>
<td className="px-6 py-4"><span className="inline-flex items-center rounded-full bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-700 ring-1 ring-inset ring-emerald-600/20">Completed</span></td>
<td className="px-6 py-4">2m 14s</td>
<td className="px-6 py-4">
<div className="flex items-center gap-1.5">
<iconify-icon className="text-emerald-500" icon="solar:emoji-funny-circle-linear" width="16"></iconify-icon>
<span>Positive</span>
</div>
</td>
<td className="px-6 py-4 text-slate-500">Just now</td>
<td className="px-6 py-4 text-right">
<button className="text-slate-400 hover:text-indigo-600 transition"><iconify-icon icon="solar:menu-dots-bold" width="16"></iconify-icon></button>
</td>
</tr>
<tr className="hover:bg-slate-50/50 transition">
<td className="px-6 py-4 font-medium text-slate-900">Sarah Johnson</td>
<td className="px-6 py-4"><span className="inline-flex items-center rounded-full bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-600/20">Action Required</span></td>
<td className="px-6 py-4">4m 32s</td>
<td className="px-6 py-4">
<div className="flex items-center gap-1.5">
<iconify-icon className="text-yellow-500" icon="solar:emoji-circle-linear" width="16"></iconify-icon>
<span>Neutral</span>
</div>
</td>
<td className="px-6 py-4 text-slate-500">2h ago</td>
<td className="px-6 py-4 text-right">
<button className="text-slate-400 hover:text-indigo-600 transition"><iconify-icon icon="solar:menu-dots-bold" width="16"></iconify-icon></button>
</td>
</tr>
<tr className="hover:bg-slate-50/50 transition">
<td className="px-6 py-4 font-medium text-slate-900">+1 (555) 987-6543</td>
<td className="px-6 py-4"><span className="inline-flex items-center rounded-full bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/20">Missed</span></td>
<td className="px-6 py-4">0m 00s</td>
<td className="px-6 py-4">
<div className="flex items-center gap-1.5 text-slate-400">
<span>—</span>
</div>
</td>
<td className="px-6 py-4 text-slate-500">5h ago</td>
<td className="px-6 py-4 text-right">
<button className="text-slate-400 hover:text-indigo-600 transition"><iconify-icon icon="solar:menu-dots-bold" width="16"></iconify-icon></button>
</td>
</tr>
<tr className="hover:bg-slate-50/50 transition">
<td className="px-6 py-4 font-medium text-slate-900">Michael Chen</td>
<td className="px-6 py-4"><span className="inline-flex items-center rounded-full bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-700 ring-1 ring-inset ring-emerald-600/20">Completed</span></td>
<td className="px-6 py-4">1m 45s</td>
<td className="px-6 py-4">
<div className="flex items-center gap-1.5">
<iconify-icon className="text-emerald-500" icon="solar:emoji-funny-circle-linear" width="16"></iconify-icon>
<span>Positive</span>
</div>
</td>
<td className="px-6 py-4 text-slate-500">Yesterday</td>
<td className="px-6 py-4 text-right">
<button className="text-slate-400 hover:text-indigo-600 transition"><iconify-icon icon="solar:menu-dots-bold" width="16"></iconify-icon></button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</main>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200" id="pricing">
<div className="mx-auto max-w-7xl px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">Simple, transparent pricing</h2>
<p className="mt-4 text-slate-500">Start for free. Scale as you grow.</p>
</div>
<div className="grid grid-cols-1 gap-8 md:grid-cols-3">

<div className="flex flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-lg">
<h3 className="text-lg font-semibold text-slate-900">Starter</h3>
<p className="text-sm text-slate-500 mt-2">Perfect for solo practitioners.</p>
<div className="mt-6 flex items-baseline">
<span className="text-4xl font-bold tracking-tight text-slate-900">$99</span>
<span className="ml-1 text-sm font-semibold text-slate-500">/month</span>
</div>
<ul className="mt-8 space-y-4 flex-1">
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="w-5 h-5 text-indigo-600 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                            150 mins of talk time
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="w-5 h-5 text-indigo-600 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                            1 AI Voice Agent
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="w-5 h-5 text-indigo-600 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                            Basic Call Forwarding
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="w-5 h-5 text-indigo-600 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                            Email Summaries
                        </li>
</ul>
<a className="mt-8 block w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-center text-sm font-semibold text-slate-700 transition hover:bg-slate-50 hover:border-slate-300" href="#">
                        Start 3-day free trial
                    </a>
</div>

<div className="relative flex flex-col rounded-2xl border border-indigo-200 bg-white p-8 shadow-lg shadow-indigo-100 ring-1 ring-indigo-500/10">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold text-white">
                        Most Popular
                    </div>
<h3 className="text-lg font-semibold text-slate-900">Pro</h3>
<p className="text-sm text-slate-500 mt-2">For growing small businesses.</p>
<div className="mt-6 flex items-baseline">
<span className="text-4xl font-bold tracking-tight text-slate-900">$149</span>
<span className="ml-1 text-sm font-semibold text-slate-500">/month</span>
</div>
<ul className="mt-8 space-y-4 flex-1">
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="w-5 h-5 text-indigo-600 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                            400 mins of talk time
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="w-5 h-5 text-indigo-600 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                            3 AI Voice Agents
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="w-5 h-5 text-indigo-600 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                            CRM Integration (HubSpot)
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="w-5 h-5 text-indigo-600 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                            Calendar Booking
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="w-5 h-5 text-indigo-600 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                            Priority Support
                        </li>
</ul>
<a className="mt-8 block w-full rounded-lg bg-indigo-600 px-4 py-2.5 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 hover:shadow-md" href="#">
                        Start 3-day free trial
                    </a>
</div>

<div className="flex flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-lg">
<h3 className="text-lg font-semibold text-slate-900">Premium</h3>
<p className="text-sm text-slate-500 mt-2">For large teams &amp; custom needs.</p>
<div className="mt-6 flex items-baseline">
<span className="text-4xl font-bold tracking-tight text-slate-900">Custom</span>
</div>
<ul className="mt-8 space-y-4 flex-1">
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="w-5 h-5 text-indigo-600 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                            Unlimited talk time
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="w-5 h-5 text-indigo-600 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                            Unlimited Agents
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="w-5 h-5 text-indigo-600 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                            Custom Workflows &amp; API
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="w-5 h-5 text-indigo-600 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                            Dedicated Account Manager
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="w-5 h-5 text-indigo-600 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                            SSO &amp; Advanced Security
                        </li>
</ul>
<a className="mt-8 block w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-center text-sm font-semibold text-slate-700 transition hover:bg-slate-50 hover:border-slate-300" href="#">
                        Contact Sales
                    </a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="mx-auto max-w-3xl px-6">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 text-center mb-12">Frequently Asked Questions</h2>
<div className="space-y-4">
<details className="group rounded-xl bg-slate-50 p-6 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900 font-medium">
<h3 className="text-base">Can I keep my existing phone number?</h3>
<iconify-icon className="w-5 h-5 text-slate-500 transition group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<p className="mt-4 leading-relaxed text-slate-600 text-sm">
                        Yes! You can simply forward calls from your existing business line to the number we provide, or port your number over to us completely.
                    </p>
</details>
<details className="group rounded-xl bg-slate-50 p-6 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900 font-medium">
<h3 className="text-base">Does the AI sound robotic?</h3>
<iconify-icon className="w-5 h-5 text-slate-500 transition group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<p className="mt-4 leading-relaxed text-slate-600 text-sm">
                        Not at all. We use advanced voice synthesis that includes natural pauses, intonation, and warmth. Most callers don't realize they are speaking to an AI.
                    </p>
</details>
<details className="group rounded-xl bg-slate-50 p-6 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900 font-medium">
<h3 className="text-base">How does the 3-day free trial work?</h3>
<iconify-icon className="w-5 h-5 text-slate-500 transition group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<p className="mt-4 leading-relaxed text-slate-600 text-sm">
                        You get full access to the Pro plan features for 3 days. You can set up your agent, test calls, and see how it works. No charge if you cancel before the trial ends.
                    </p>
</details>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden bg-slate-900">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e5,#818cf8)] opacity-20"></div>
<div className="relative mx-auto max-w-4xl px-6 text-center">
<h2 className="text-4xl font-semibold tracking-tight text-white">
                Ready to reclaim your time?
            </h2>
<p className="mx-auto mt-6 max-w-xl text-lg text-slate-300">
                Join hundreds of professionals who trust VoiceFlow. Setup takes less than 15 minutes.
            </p>
<div className="mt-10">
<button className="rounded-xl bg-white px-8 py-4 text-base font-semibold text-slate-900 transition hover:bg-slate-100 hover:shadow-xl hover:scale-105 transform duration-200">
                    Start your 3-day free trial
                </button>
<p className="mt-4 text-xs text-slate-400">No commitments. Cancel anytime.</p>
</div>
</div>
</section>

<footer className="border-t border-slate-200 bg-slate-50 py-12">
<div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="flex h-6 w-6 items-center justify-center rounded bg-slate-200 text-slate-600">
<iconify-icon icon="solar:soundwave-linear" width="16"></iconify-icon>
</div>
<span className="text-sm font-semibold text-slate-900">VoiceFlow AI</span>
</div>
<div className="flex gap-8">
<a className="text-sm font-medium text-slate-500 hover:text-slate-900" href="#">Privacy Policy</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900" href="#">Terms of Service</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900" href="#">Twitter</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900" href="#">LinkedIn</a>
</div>
<div className="text-sm text-slate-400">
                © 2024 VoiceFlow Inc.
            </div>
</div>
</footer>

    </>
  );
}
