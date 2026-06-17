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
      
<div className="flex-1 flex flex-col">

<div className="pointer-events-none fixed inset-x-0 -top-32 h-64 opacity-80 blur-3xl">
<div className="mx-auto h-full max-w-4xl bg-[radial-gradient(circle_at_top,_rgba(246,99,74,0.4),_transparent_55%),radial-gradient(circle_at_center,_rgba(56,189,248,0.3),_transparent_60%)] rounded-full"></div>
</div>

<header className="relative z-20 border-b border-slate-800/80 bg-slate-950/70 backdrop-blur">
<div className="flex gap-4 lg:py-5 sm:px-6 lg:px-8 w-full max-w-6xl mr-auto ml-auto pt-4 pr-4 pb-4 pl-4 gap-x-4 gap-y-4 items-center justify-between">
<div className="flex items-center gap-2">
<div className="shadow-[#F6634A]/60 flex bg-gradient-to-tr from-[#F6634A] via-rose-400 to-amber-300 w-8 h-8 rounded-full shadow-md items-center justify-center">
<span className="text-xs font-semibold text-white tracking-tight font-jakarta" style={{}}>SM</span>
</div>
<span className="text-base font-semibold text-slate-50 tracking-tight font-jakarta" style={{}}>SmartBooks</span>
</div>
<nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
<a className="hover:text-slate-50 transition-colors font-jakarta" href="#what" style={{}}>Product</a>
<a className="hover:text-slate-50 transition-colors font-jakarta" href="#vision" style={{}}>Vision</a>
<a className="hover:text-slate-50 transition-colors font-jakarta" href="#how" style={{}}>How it works</a>
<a className="hover:text-slate-50 transition-colors font-jakarta" href="#benefits" style={{}}>Impact</a>
<a className="hover:text-slate-50 transition-colors font-jakarta" href="#social" style={{}}>Customers</a>
</nav>
<div className="flex items-center gap-3">
<button className="hidden sm:inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/60 text-sm font-medium text-slate-200 hover:border-slate-500 hover:text-white transition-colors h-9 px-4 font-jakarta" style={{}}>
            Sign in
          </button>
<button className="inline-flex items-center justify-center rounded-full bg-[#F6634A] text-sm font-semibold text-white shadow-[0_0_25px_rgba(246,99,74,0.45)] hover:bg-[#e4583f] transition-colors h-9 px-4 sm:h-10 sm:px-5 font-jakarta" style={{}}>
            Get started
          </button>
</div>
</div>
</header>

<main className="relative z-10 flex-1">
<section className="relative" id="what">

<div className="pointer-events-none absolute -left-16 top-24 h-40 w-40 rounded-full bg-sky-400/25 blur-3xl"></div>
<div className="pointer-events-none absolute -right-10 top-10 h-48 w-48 rounded-full bg-[#F6634A]/25 blur-3xl"></div>
<div className="sm:px-6 lg:px-8 lg:pt-20 lg:pb-24 grid lg:grid-cols-[1.1fr,minmax(0,1fr)] w-full max-w-6xl mr-auto ml-auto pt-12 pr-4 pb-16 pl-4 gap-x-10 gap-y-10 items-center">
<div className="space-y-6">
<div className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/70 backdrop-blur px-3 py-1 shadow-[0_0_25px_rgba(15,23,42,0.6)]">
<span className="h-1.5 w-1.5 rounded-full bg-[#F6634A] shadow-[0_0_12px_rgba(246,99,74,0.8)]"></span>
<p className="text-xs font-medium text-slate-200 font-jakarta" style={{}}>AI answers that feel human, not robotic</p>
</div>
<div className="space-y-4">
<h1 className="sm:text-4xl lg:text-5xl text-3xl text-slate-50 tracking-tight font-medium font-merriweather" style={{}}>
                Make your knowledge base feel<br className="hidden sm:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-50 via-sky-300 to-[#F6634A] font-medium font-merriweather" style={{}}>
                  alive and intuitive.
                </span>
</h1>
<p className="sm:text-lg text-base text-slate-300 max-w-xl font-jakarta" style={{}}>
                CosmicMind turns scattered docs, FAQs, and past conversations into a single, friendly AI guide that gives clear answers to every customer and teammate.
              </p>
</div>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
<button className="inline-flex items-center justify-center rounded-full bg-[#F6634A] text-sm font-semibold text-white shadow-[0_0_35px_rgba(246,99,74,0.6)] hover:bg-[#e4583f] transition-colors h-10 sm:h-11 px-6 sm:px-7 font-jakarta" style={{}}>
                Start free workspace
              </button>
<button className="inline-flex items-center gap-2 rounded-full border border-slate-600 bg-slate-900/70 text-sm font-medium text-slate-100 hover:border-slate-400 hover:text-white transition-colors h-10 sm:h-11 px-5 font-jakarta" style={{}}>
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polygon points="5 3 19 12 5 21 5 3"></polygon>
</svg>
                Watch demo
              </button>
</div>
<div className="flex flex-wrap items-center gap-4 text-xs text-slate-400">
<div className="flex -space-x-2">
<div className="h-7 w-7 rounded-full bg-slate-700 border border-slate-900 flex items-center justify-center text-[0.625rem] font-semibold text-slate-50 font-jakarta" style={{}}>AK</div>
<div className="h-7 w-7 rounded-full bg-slate-700 border border-slate-900 flex items-center justify-center text-[0.625rem] font-semibold text-slate-50 font-jakarta" style={{}}>JW</div>
<div className="h-7 w-7 rounded-full bg-slate-700 border border-slate-900 flex items-center justify-center text-[0.625rem] font-semibold text-slate-50 font-jakarta" style={{}}>LM</div>
</div>
<span className="font-jakarta" style={{}}>Trusted by product, support, and ops teams at fast-growing companies.</span>
</div>
</div>

<div className="relative">
<div className="absolute -right-6 -top-4 h-10 w-10 rounded-full bg-gradient-to-br from-sky-300 to-indigo-400 shadow-lg shadow-sky-500/40 flex items-center justify-center">
<span className="text-[0.625rem] font-semibold text-slate-950 tracking-tight font-jakarta" style={{}}>AI</span>
</div>
<div className="absolute left-0 -bottom-4 h-16 w-16 rounded-full bg-[#F6634A]/20 border border-[#F6634A]/40 flex items-center justify-center">
<div className="h-8 w-8 rounded-full border border-dashed border-[#F6634A]/60"></div>
</div>

<div className="absolute -inset-4 bg-[radial-gradient(circle_at_top,_rgba(129,140,248,0.35),_transparent_55%)] opacity-80 blur-3xl"></div>
<div className="relative rounded-3xl bg-slate-950/80 border border-slate-700 shadow-[0_30px_80px_rgba(15,23,42,0.9)] p-5 sm:p-6 lg:p-7 overflow-hidden">
<div className="absolute -right-24 -top-24 h-48 w-48 rounded-full bg-[conic-gradient(from_120deg,_rgba(246,99,74,0.4),rgba(56,189,248,0.5),transparent)] opacity-70 blur-2xl"></div>
<div className="relative space-y-5">
<div className="flex items-center justify-between gap-4">
<div className="">
<p className="text-xs font-medium text-slate-400 font-jakarta" style={{}}>Multiple Product Lines</p>
<p className="text-2xl text-slate-50 tracking-tight mt-1 font-medium font-merriweather" style={{}}>93%</p>
</div>
<div className="flex flex-col items-end gap-1">
<span className="text-[0.625rem] font-medium text-slate-400 font-jakarta" style={{}}>AI coverage</span>
<div className="flex items-center gap-2">
<div className="h-1.5 w-16 rounded-full bg-slate-800 overflow-hidden">
<div className="h-full w-11/12 rounded-full bg-gradient-to-r from-emerald-400 to-sky-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]"></div>
</div>
<span className="text-xs font-semibold text-slate-50 font-jakarta" style={{}}>88%</span>
</div>
</div>
</div>

<div className="rounded-2xl border border-slate-700 bg-slate-900/80 overflow-hidden">
<img alt="CosmicMind dashboard overview" className="w-full h-auto object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/981e0e82-5094-4161-aad4-588ce037c292_800w.png"/>
</div>
<div className="grid grid-cols-2 gap-3 text-xs text-slate-300">
<div className="rounded-2xl border border-slate-700 bg-slate-900/80 p-3 space-y-1 shadow-[0_18px_45px_rgba(15,23,42,0.85)]">
<p className="text-[0.625rem] font-medium text-slate-400 font-jakarta" style={{}}>Resolution time</p>
<p className="text-lg font-semibold tracking-tight text-slate-50 font-jakarta" style={{}}>–41%</p>
<p className="font-jakarta" style={{}}>Average handle time across support channels.</p>
</div>
<div className="rounded-2xl border border-slate-700 bg-slate-900/80 p-3 space-y-1 shadow-[0_18px_45px_rgba(15,23,42,0.85)]">
<p className="text-[0.625rem] font-medium text-slate-400 font-jakarta" style={{}}>Self-serve rate</p>
<p className="text-lg font-semibold tracking-tight text-slate-50 font-jakarta" style={{}}>+63%</p>
<p className="font-jakarta" style={{}}>Customers who solve issues without a ticket.</p>
</div>
</div>
</div>

<div className="pointer-events-none absolute inset-0">
<div className="absolute -left-10 top-10 w-48 h-48 border border-dashed border-slate-700/60 rounded-full opacity-60"></div>
<div className="absolute -right-20 bottom-0 w-56 h-56 border border-dashed border-slate-700/40 rounded-full opacity-40"></div>
</div>
</div>
</div>
</div>
</section>

<section className="relative border-t border-slate-800 bg-slate-950/80" id="vision">
<div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-sky-500/10 to-transparent"></div>
<div className="mx-auto max-w-6xl w-full px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-10">
<div className="flex flex-col md:flex-row md:items md:justify-between gap-6">
<div className="space-y-3 max-w-xl">
<p className="text-xs font-medium uppercase tracking-wide text-[#F6634A] font-jakarta" style={{}}>Where it’s headed</p>
<h2 className="text-2xl sm:text-3xl tracking-tight text-slate-50 font-medium font-merriweather" style={{}}>
                From static help centers to living, conversational knowledge.
              </h2>
<p className="text-base text-slate-300 font-jakarta" style={{}}>
                We’re building an AI layer that quietly learns from every conversation, update, and edge case—then turns that learning into answers anyone can trust.
              </p>
</div>
<div className="max-w-md text-sm text-slate-400 font-jakarta" style={{}}>
              CosmicMind is designed for teams that grow fast, change often, and need every answer to feel consistent, on-brand, and correct—no matter who’s asking.
            </div>
</div>
<div className="grid gap-4 md:grid-cols-3 gap-x-4 gap-y-4">
<div className="relative rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900/80 to-slate-900/40 p-4 sm:p-5 shadow-[0_16px_40px_rgba(15,23,42,0.85)]">
<div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 border border-slate-700 text-[#F6634A] shadow-[0_0_18px_rgba(246,99,74,0.7)]">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M2 12h20"></path>
<path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
</svg>
</div>
<h3 className="text-sm font-semibold tracking-tight text-slate-50 mb-1.5 font-jakarta" style={{}}>Unified knowledge orbit</h3>
<p className="text-sm text-slate-300 font-jakarta" style={{}}>
                Connect docs, tickets, product updates, and recordings into a single AI workspace that stays perfectly in sync.
              </p>
</div>
<div className="relative rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900/80 to-slate-900/40 p-4 sm:p-5 shadow-[0_16px_40px_rgba(15,23,42,0.85)]">
<div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 border border-slate-700 text-[#F6634A] shadow-[0_0_18px_rgba(246,99,74,0.7)]">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M12 16v-4"></path>
<path d="M12 8h.01"></path>
</svg>
</div>
<h3 className="text-sm font-semibold tracking-tight text-slate-50 mb-1.5 font-jakarta" style={{}}>Answers with receipts</h3>
<p className="text-sm text-slate-300 font-jakarta" style={{}}>
                Every response is grounded in your content, with transparent sources so your team can review, refine, and trust.
              </p>
</div>
<div className="relative rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900/80 to-slate-900/40 p-4 sm:p-5 shadow-[0_16px_40px_rgba(15,23,42,0.85)]">
<div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 border border-slate-700 text-[#F6634A] shadow-[0_0_18px_rgba(246,99,74,0.7)]">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 21v-2a4 4 0 0 0-3-3.87"></path>
<path d="M4 21v-2a4 4 0 0 1 3-3.87"></path>
<circle cx="12" cy="7" r="4"></circle>
<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
</svg>
</div>
<h3 className="text-sm font-semibold tracking-tight text-slate-50 mb-1.5 font-jakarta" style={{}}>Co-pilot for every team</h3>
<p className="text-sm text-slate-300 font-jakarta" style={{}}>
                From support to product to revenue, bring the same intelligent helper into every workflow and channel.
              </p>
</div>
</div>
</div>
</section>

<section className="relative bg-[#050816] border-t border-slate-900/80" id="how">
<div className="pointer-events-none absolute inset-x-0 -top-16 h-32 bg-gradient-to-b from-slate-900/90 to-transparent"></div>
<div className="mx-auto max-w-6xl w-full px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-10">
<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
<div className="space-y-3 max-w-xl">
<p className="text-xs font-medium uppercase tracking-wide text-[#F6634A] font-jakarta" style={{}}>How it works</p>
<h2 className="text-2xl sm:text-3xl tracking-tight text-slate-50 font-medium font-merriweather" style={{}}>
                Three steps from scattered docs to a calm, cosmic overview.
              </h2>
<p className="text-base text-slate-300 font-jakarta" style={{}}>
                Plug in your existing tools, train your AI once, and let it handle the questions that keep everyone busy.
              </p>
</div>
<div className="flex items-center gap-3 text-xs text-slate-400">
<div className="h-8 w-8 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center">
<span className="text-[0.625rem] font-semibold text-slate-50 font-jakarta" style={{}}>5m</span>
</div>
<span className="font-jakarta" style={{}}>Average time to your first AI answer in production.</span>
</div>
</div>
<div className="grid gap-6 lg:grid-cols-[minmax(0,1.3fr),minmax(0,1fr)] items-start">

<div className="space-y-4">
<div className="flex gap-4 rounded-2xl border border-slate-800 bg-slate-950/80 p-4 sm:p-5 shadow-[0_18px_50px_rgba(15,23,42,0.9)]">
<div className="mt-1 h-7 w-7 rounded-full bg-[#F6634A]/15 flex items-center justify-center text-xs font-semibold text-[#F6634A] font-jakarta" style={{}}>
                  1
                </div>
<div className="space-y-1.5">
<h3 className="text-sm font-semibold tracking-tight text-slate-50 font-jakarta" style={{}}>Connect your universe</h3>
<p className="text-sm text-slate-300 font-jakarta" style={{}}>
                    Link your help center, docs, CRM, chat history, and more. CosmicMind syncs content continuously so answers never age out.
                  </p>
<div className="flex flex-wrap gap-2 mt-1">
<span className="inline-flex items-center rounded-full bg-slate-900 border border-slate-700 text-[0.625rem] text-slate-200 px-2 py-0.5 font-jakarta" style={{}}>
                      Docs
                    </span>
<span className="inline-flex items-center rounded-full bg-slate-900 border border-slate-700 text-[0.625rem] text-slate-200 px-2 py-0.5 font-jakarta" style={{}}>
                      Ticketing
                    </span>
<span className="inline-flex items-center rounded-full bg-slate-900 border border-slate-700 text-[0.625rem] text-slate-200 px-2 py-0.5 font-jakarta" style={{}}>
                      Chat &amp; email
                    </span>
</div>
</div>
</div>
<div className="flex gap-4 rounded-2xl border border-slate-800 bg-slate-950/80 p-4 sm:p-5 shadow-[0_18px_50px_rgba(15,23,42,0.9)]">
<div className="mt-1 h-7 w-7 rounded-full bg-[#F6634A]/15 flex items-center justify-center text-xs font-semibold text-[#F6634A] font-jakarta" style={{}}>
                  2
                </div>
<div className="space-y-1.5">
<h3 className="text-sm font-semibold tracking-tight text-slate-50 font-jakarta" style={{}}>Teach tone and guardrails</h3>
<p className="text-sm text-slate-300 font-jakarta" style={{}}>
                    Define how your brand speaks, what the AI can and can’t say, and which sources it must rely on before giving an answer.
                  </p>
<div className="rounded-xl border border-dashed border-slate-700 bg-slate-900/80 p-3 text-xs text-slate-300 space-y-1.5">
<div className="flex items-center justify-between">
<span className="font-jakarta" style={{}}>Voice: Calm, confident, concise</span>
<span className="inline-flex items-center rounded-full bg-slate-950 border border-slate-700 text-[0.625rem] text-slate-200 px-2 py-0.5 font-jakarta" style={{}}>Preview</span>
</div>
<p className="font-jakarta" style={{}}>“Explain this like I’m a new customer, avoid internal jargon, and always include next-best steps.”</p>
</div>
</div>
</div>
<div className="flex gap-4 rounded-2xl border border-slate-800 bg-slate-950/80 p-4 sm:p-5 shadow-[0_18px_50px_rgba(15,23,42,0.9)]">
<div className="mt-1 h-7 w-7 rounded-full bg-[#F6634A]/15 flex items-center justify-center text-xs font-semibold text-[#F6634A] font-jakarta" style={{}}>
                  3
                </div>
<div className="space-y-1.5">
<h3 className="text-sm font-semibold tracking-tight text-slate-50 font-jakarta" style={{}}>Deploy everywhere</h3>
<p className="text-sm text-slate-300 font-jakarta" style={{}}>
                    Drop the widget on your site, add it to your support inbox, or give your team an internal AI console—no engineering backlog required.
                  </p>
<div className="flex flex-wrap gap-2 mt-1">
<span className="inline-flex items-center rounded-full bg-slate-900 border border-slate-700 text-[0.625rem] text-slate-200 px-2 py-0.5 font-jakarta" style={{}}>
                      Web widget
                    </span>
<span className="inline-flex items-center rounded-full bg-slate-900 border border-slate-700 text-[0.625rem] text-slate-200 px-2 py-0.5 font-jakarta" style={{}}>
                      Help center
                    </span>
<span className="inline-flex items-center rounded-full bg-slate-900 border border-slate-700 text-[0.625rem] text-slate-200 px-2 py-0.5 font-jakarta" style={{}}>
                      Internal search
                    </span>
</div>
</div>
</div>
</div>

<div className="relative">
<div className="absolute -right-6 -top-4 h-16 w-16 rounded-full bg-sky-500/25 blur-2xl"></div>
<div className="relative rounded-3xl border border-slate-800 bg-slate-950/90 shadow-[0_24px_60px_rgba(15,23,42,1)] p-4 sm:p-5 flex flex-col gap-4 overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),transparent_60%),radial-gradient(circle_at_bottom,_rgba(246,99,74,0.18),transparent_60%)] opacity-80"></div>
<div className="relative flex items-center justify-between gap-3">
<div>
<p className="text-xs font-medium text-slate-400 font-jakarta" style={{}}>AI rollout</p>
<p className="text-lg font-semibold tracking-tight text-slate-50 font-jakarta" style={{}}>Live in 5 days</p>
</div>
<button className="inline-flex items-center justify-center rounded-full bg-slate-50 text-[0.625rem] font-medium text-slate-950 h-7 px-3 hover:bg-slate-200 transition-colors font-jakarta" style={{}}>
                    Start free workspace
                  </button>
</div>
<div className="relative mt-2">
<div className="absolute left-2 top-0 bottom-0 w-px bg-gradient-to-b from-[#F6634A] via-slate-700 to-slate-700"></div>
<div className="space-y-4">
<div className="flex gap-3 items-start">
<div className="relative mt-0.5 h-4 w-4 rounded-full bg-slate-950 border border-[#F6634A] flex items-center justify-center">
<div className="h-1.5 w-1.5 rounded-full bg-[#F6634A] shadow-[0_0_10px_rgba(246,99,74,0.9)]"></div>
</div>
<div>
<p className="text-xs font-semibold text-slate-100 font-jakarta" style={{}}>Day 1 — Connect sources</p>
<p className="text-xs text-slate-400 font-jakarta" style={{}}>Syncs docs, help center, and 6 months of conversations.</p>
</div>
</div>
<div className="flex gap-3 items-start">
<div className="relative mt-0.5 h-4 w-4 rounded-full bg-slate-950 border border-slate-700 flex items-center justify-center">
<div className="h-1 w-1 rounded-full bg-slate-400"></div>
</div>
<div>
<p className="text-xs font-semibold text-slate-100 font-jakarta" style={{}}>Day 2 — Review suggestions</p>
<p className="text-xs text-slate-400 font-jakarta" style={{}}>AI surfaces gaps, duplicates, and risky content.</p>
</div>
</div>
<div className="flex gap-3 items-start">
<div className="relative mt-0.5 h-4 w-4 rounded-full bg-slate-950 border border-slate-700 flex items-center justify-center">
<div className="h-1 w-1 rounded-full bg-slate-400"></div>
</div>
<div>
<p className="text-xs font-semibold text-slate-100 font-jakarta" style={{}}>Day 3–4 — Tune guardrails</p>
<p className="text-xs text-slate-400 font-jakarta" style={{}}>Set tone, escalation rules, and approvals for sensitive topics.</p>
</div>
</div>
<div className="flex gap-3 items-start">
<div className="relative mt-0.5 h-4 w-4 rounded-full bg-[#F6634A]/15 border border-[#F6634A]/70 flex items-center justify-center">
<div className="h-1 w-1 rounded-full bg-[#F6634A]"></div>
</div>
<div>
<p className="text-xs font-semibold text-slate-100 font-jakarta" style={{}}>Day 5 — Go live, measure impact</p>
<p className="text-xs text-slate-400 font-jakarta" style={{}}>Track deflection, CSAT, and AI answer quality from day one.</p>
</div>
</div>
</div>
</div>
<div className="relative rounded-2xl bg-slate-950/80 border border-slate-700 p-3 flex items-center justify-between gap-3">
<div className="space-y-0.5">
<p className="text-[0.625rem] font-medium text-slate-400 uppercase tracking-wide font-jakarta" style={{}}>Preview</p>
<p className="text-xs text-slate-100 line-clamp-2 font-jakarta" style={{}}>
                      “Within seconds, CosmicMind understood our product and started answering questions better than our internal docs.”
                    </p>
</div>
<div className="h-9 w-9 rounded-full bg-gradient-to-tr from-sky-400/40 to-indigo-500/60 flex items-center justify-center shadow-[0_0_25px_rgba(56,189,248,0.8)]">
<svg className="h-4 w-4 text-slate-950" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 20h9"></path>
<path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path>
</svg>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative bg-slate-950/90 border-t border-slate-900" id="benefits">
<div className="pointer-events-none absolute inset-x-0 -top-12 h-24 bg-gradient-to-b from-sky-500/12 to-transparent"></div>
<div className="mx-auto max-w-6xl w-full px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-10">
<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
<div className="space-y-3 max-w-xl">
<p className="text-xs font-medium uppercase tracking-wide text-[#F6634A] font-jakarta" style={{}}>Benefits &amp; impact</p>
<h2 className="text-2xl sm:text-3xl tracking-tight text-slate-50 font-medium font-merriweather" style={{}}>
                Help your customers faster. Help your team think clearer.
              </h2>
<p className="text-base text-slate-300 font-jakarta" style={{}}>
                CosmicMind quietly reduces repetitive work while making every answer feel more thoughtful, precise, and on-brand.
              </p>
</div>
<div className="flex flex-col gap-3 text-sm text-slate-400">
<div className="flex items-center gap-2">
<div className="h-5 w-5 rounded-full bg-[#F6634A]/15 flex items-center justify-center">
<span className="h-1.5 w-1.5 rounded-full bg-[#F6634A] shadow-[0_0_12px_rgba(246,99,74,0.8)]"></span>
</div>
<span className="font-jakarta" style={{}}>Median 2.1x increase in self-serve resolution in the first 30 days.</span>
</div>
<div className="flex items-center gap-2">
<div className="h-5 w-5 rounded-full bg-sky-500/20 flex items-center justify-center">
<span className="h-1.5 w-1.5 rounded-full bg-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.9)]"></span>
</div>
<span className="font-jakarta" style={{}}>Avg. 30–40% fewer internal “quick questions” across product and ops.</span>
</div>
</div>
</div>
<div className="grid gap-6 lg:grid-cols-[minmax(0,1.3fr),minmax(0,1fr)] items-start">
<div className="grid gap-4 sm:grid-cols-2">
<div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4 sm:p-5 space-y-2 shadow-[0_18px_50px_rgba(15,23,42,0.9)]">
<div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 border border-slate-700 text-[#F6634A] mb-1 shadow-[0_0_20px_rgba(246,99,74,0.7)]">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5"></path>
<path d="m9 10 2 2 4-4"></path>
</svg>
</div>
<h3 className="text-sm font-semibold tracking-tight text-slate-50 font-jakarta" style={{}}>Deflect tickets, not customers</h3>
<p className="text-sm text-slate-300 font-jakarta" style={{}}>
                  Give customers fast, accurate answers that feel like a conversation with your best agent—not a search bar.
                </p>
</div>
<div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4 sm:p-5 space-y-2 shadow-[0_18px_50px_rgba(15,23,42,0.9)]">
<div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 border border-slate-700 text-[#F6634A] mb-1 shadow-[0_0_20px_rgba(246,99,74,0.7)]">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" width="18" x="3" y="3"></rect>
<path d="M9 3v18"></path>
<path d="M3 9h6"></path>
</svg>
</div>
<h3 className="text-sm font-semibold tracking-tight text-slate-50 font-jakarta" style={{}}>Clarity for new teammates</h3>
<p className="text-sm text-slate-300 font-jakarta" style={{}}>
                  Replace tribal knowledge with a simple AI console where anyone can ask “how do we handle this?” and get a safe, guided answer.
                </p>
</div>
<div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4 sm:p-5 space-y-2 shadow-[0_18px_50px_rgba(15,23,42,0.9)]">
<div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 border border-slate-700 text-[#F6634A] mb-1 shadow-[0_0_20px_rgba(246,99,74,0.7)]">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-.93-.93a5.5 5.5 0 1 0-7.78 7.78l.93.93L12 21.23l7.78-7.78.93-.93a5.5 5.5 0 0 0 0-7.78Z"></path>
</svg>
</div>
<h3 className="text-sm font-semibold tracking-tight text-slate-50 font-jakarta" style={{}}>On-brand every time</h3>
<p className="text-sm text-slate-300 font-jakarta" style={{}}>
                  Your tone, your disclaimers, your way of saying “we’ve got you”—baked into every AI response by design.
                </p>
</div>
<div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4 sm:p-5 space-y-2 shadow-[0_18px_50px_rgba(15,23,42,0.9)]">
<div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 border border-slate-700 text-[#F6634A] mb-1 shadow-[0_0_20px_rgba(246,99,74,0.7)]">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3v5h.01"></path>
<path d="M7 3v9h.01"></path>
<path d="M11 3v13h.01"></path>
<path d="M15 3v9h.01"></path>
<path d="M19 3v5h.01"></path>
<path d="M3 13a9 9 0 0 0 18 0"></path>
</svg>
</div>
<h3 className="text-sm font-semibold tracking-tight text-slate-50 font-jakarta" style={{}}>Insight from every question</h3>
<p className="text-sm text-slate-300 font-jakarta" style={{}}>
                  See what customers are really asking, which answers land, and where your product or docs need attention next.
                </p>
</div>
</div>

<div className="relative">
<div className="absolute -left-10 -top-6 h-20 w-20 rounded-full bg-sky-500/20 blur-2xl"></div>
<div className="relative rounded-3xl border border-slate-700 bg-slate-950 text-slate-50 p-5 sm:p-6 space-y-5 overflow-hidden shadow-[0_28px_70px_rgba(15,23,42,1)]">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(246,99,74,0.22),transparent_55%),radial-gradient(circle_at_bottom,_rgba(56,189,248,0.22),transparent_55%)] opacity-90"></div>
<div className="relative flex items-center justify-between gap-3">
<div>
<p className="text-xs font-medium text-slate-200 font-jakarta" style={{}}>Teams using CosmicMind see</p>
<p className="text-2xl tracking-tight text-slate-50 mt-1 font-medium font-merriweather" style={{}}>Visible lift in a few weeks.</p>
</div>
<div className="h-10 w-10 rounded-full bg-slate-900/60 border border-slate-600 flex items-center justify-center">
<svg className="h-4 w-4 text-slate-100" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polyline points="3 17 9 11 13 15 21 7"></polyline>
<polyline points="14 7 21 7 21 14"></polyline>
</svg>
</div>
</div>
<div className="relative grid grid-cols-2 gap-4">
<div className="space-y-1.5">
<p className="text-xs text-slate-200 font-jakarta" style={{}}>Average ticket deflection</p>
<p className="text-xl font-semibold tracking-tight text-slate-50 font-jakarta" style={{}}>+54%</p>
<p className="text-xs text-slate-200 font-jakarta" style={{}}>After 60 days, across email, chat, and in-app.</p>
</div>
<div className="space-y-1.5">
<p className="text-xs text-slate-200 font-jakarta" style={{}}>Time-to-first-answer</p>
<p className="text-xl font-semibold tracking-tight text-slate-50 font-jakarta" style={{}}>–38%</p>
<p className="text-xs text-slate-200 font-jakarta" style={{}}>Even when complex routing is involved.</p>
</div>
</div>
<div className="relative rounded-2xl bg-slate-950/80 border border-slate-700 p-3 space-y-2">
<div className="flex items-center justify-between gap-3">
<p className="text-xs font-medium text-slate-100 font-jakarta" style={{}}>AI answer quality</p>
<div className="flex items-center gap-1 text-[0.625rem] text-slate-200">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)]"></span>
<span className="font-jakarta" style={{}}>93% helpful</span>
</div>
</div>
<div className="h-1.5 w-full rounded-full bg-slate-900 overflow-hidden">
<div className="h-full w-11/12 rounded-full bg-gradient-to-r from-emerald-400 to-sky-400 shadow-[0_0_14px_rgba(56,189,248,0.9)]"></div>
</div>
<p className="text-[0.625rem] text-slate-200 font-jakarta" style={{}}>
                    Measured by explicit thumbs up/down on AI answers over the last 30 days.
                  </p>
</div>
<button className="relative inline-flex items-center justify-center rounded-full bg-slate-50 text-xs font-semibold text-slate-950 h-9 px-5 hover:bg-slate-200 transition-colors font-jakarta" style={{}}>
                  Talk to our team
                  <svg className="ml-1.5 h-3.5 w-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="relative bg-[#050816] border-t border-slate-900/80" id="social">
<div className="pointer-events-none absolute inset-x-0 -top-12 h-24 bg-gradient-to-b from-slate-900/90 to-transparent"></div>
<div className="mx-auto max-w-6xl w-full px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-10">

<div className="space-y-4">
<p className="text-xs font-medium text-slate-400 uppercase tracking-wide text-center font-jakarta" style={{}}>Trusted by customer-obsessed teams at</p>
<div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-medium text-slate-500">
<span className="tracking-tight font-jakarta" style={{}}>Orbitly</span>
<span className="tracking-tight font-jakarta" style={{}}>Northloop</span>
<span className="tracking-tight font-jakarta" style={{}}>BeaconFlow</span>
<span className="tracking-tight font-jakarta" style={{}}>Atlaslane</span>
<span className="tracking-tight font-jakarta" style={{}}>NovaStack</span>
</div>
</div>
<div className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr),minmax(0,1fr)] items-start">

<div className="relative rounded-3xl border border-slate-800 bg-slate-950/90 p-5 sm:p-6 space-y-4 overflow-hidden shadow-[0_22px_60px_rgba(15,23,42,1)]">
<div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-[#F6634A]/18 blur-xl"></div>
<div className="relative flex items-center gap-2 text-xs text-[#F6634A]">
<div className="h-6 w-6 rounded-full bg-[#F6634A]/15 flex items-center justify-center">
<svg className="h-3.5 w-3.5 text-[#F6634A]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M11 4H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h3v3l3-3h1"></path>
<path d="M15.7 7.3a3.3 3.3 0 0 1 4.6 4.6L17 15.6 13.4 12Z"></path>
</svg>
</div>
<span className="font-semibold tracking-tight font-jakarta" style={{}}>Customer stories</span>
</div>
<blockquote className="relative text-base text-slate-100 font-jakarta" style={{}}>
                “CosmicMind quietly became the teammate everyone asks first. Our customers get friendly, confident answers, and our team finally has space to work on the hard problems.”
              </blockquote>
<div className="relative flex items-center justify-between gap-4">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-full bg-slate-700 flex items-center justify-center text-xs font-semibold text-slate-50 font-jakarta" style={{}}>
                    AR
                  </div>
<div className="space-y-0.5">
<p className="text-xs font-semibold text-slate-50 font-jakarta" style={{}}>Amrita Rao</p>
<p className="text-xs text-slate-400 font-jakarta" style={{}}>VP Customer Experience, Orbitly</p>
</div>
</div>
<div className="flex flex-col items-end gap-1 text-xs text-slate-400">
<span className="font-jakarta" style={{}}>92 → 96 CSAT</span>
<span className="inline-flex items-center gap-1 font-jakarta" style={{}}>
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)]"></span>
                    AI answers live in 7 days
                  </span>
</div>
</div>
</div>

<div className="space-y-4">
<div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4 sm:p-5 space-y-3 shadow-[0_20px_55px_rgba(15,23,42,0.95)]">
<div className="flex items-center justify-between gap-3">
<p className="text-xs font-medium text-slate-300 font-jakarta" style={{}}>By the numbers</p>
<div className="flex items-center gap-2 text-[0.625rem] text-slate-400">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)]"></span>
<span className="font-jakarta" style={{}}>Data from last 90 days</span>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<p className="text-2xl tracking-tight text-slate-50 font-medium font-merriweather" style={{}}>18M+</p>
<p className="text-xs text-slate-300 font-jakarta" style={{}}>AI-powered answers served across web, chat, and email.</p>
</div>
<div>
<p className="text-2xl tracking-tight text-slate-50 font-medium font-merriweather" style={{}}>74%</p>
<p className="text-xs text-slate-300 font-jakarta" style={{}}>Of customers resolve their issue without opening a ticket.</p>
</div>
</div>
</div>
<div className="rounded-2xl border border-dashed border-slate-700 bg-slate-950/80 p-4 sm:p-5 space-y-3 shadow-[0_18px_50px_rgba(15,23,42,0.95)]">
<p className="text-sm font-semibold tracking-tight text-slate-50 font-jakarta" style={{}}>Ready to see your own data in orbit?</p>
<p className="text-sm text-slate-300 font-jakarta" style={{}}>
                  Connect your help center, let CosmicMind draft real answers, and invite your team to review—all before you commit.
                </p>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
<button className="inline-flex items-center justify-center rounded-full bg-[#F6634A] text-sm font-semibold text-white h-10 px-6 hover:bg-[#e4583f] transition-colors shadow-[0_0_30px_rgba(246,99,74,0.8)] font-jakarta" style={{}}>
                    Start free workspace
                  </button>
<div className="flex items-center gap-2 text-xs text-slate-400">
<svg className="h-3.5 w-3.5 text-emerald-400" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span className="font-jakarta" style={{}}>No credit card. Live in under a week.</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="relative border-t border-slate-900 bg-slate-950">
<div className="mx-auto max-w-6xl w-full px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
<div className="flex items-center gap-2">
<span className="text-sm font-semibold tracking-tight text-slate-50 font-jakarta" style={{}}>CosmicMind</span>
<span className="text-slate-700 font-jakarta" style={{}}>•</span>
<span className="font-jakarta" style={{}}>Making AI support feel human.</span>
</div>
<div className="flex items-center gap-4">
<a className="hover:text-slate-100 transition-colors font-jakarta" href="#" style={{}}>Security</a>
<a className="hover:text-slate-100 transition-colors font-jakarta" href="#" style={{}}>Status</a>
<a className="hover:text-slate-100 transition-colors font-jakarta" href="#" style={{}}>Privacy</a>
<span className="text-slate-700 font-jakarta" style={{}}>©</span>
<span className="font-jakarta" style={{}}>2025 CosmicMind, Inc.</span>
</div>
</div>
</footer>
</div>

    </>
  );
}
