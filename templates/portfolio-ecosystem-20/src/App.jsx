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
      
<div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900">

<div className="h-[1px] w-full bg-gradient-to-r from-blue-500/60 via-cyan-400/70 to-purple-500/60"></div>

<header className="border-b border-slate-800/80 backdrop-blur">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">

<a className="inline-flex items-center gap-2 group" href="#">
<div className="h-8 w-8 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center shadow-sm shadow-blue-500/30">
<span className="text-xs font-semibold tracking-tight text-blue-400 group-hover:text-blue-300 transition-colors duration-150">PE</span>
</div>
<div className="flex flex-col leading-tight">
<span className="text-sm font-semibold tracking-tight text-slate-100">PortEcosys</span>
<span className="text-[11px] text-slate-400">Portfolio Ecosystem Builder</span>
</div>
</a>

<nav className="hidden md:flex items-center gap-8 text-xs font-medium text-slate-300">
<a className="hover:text-slate-100 transition-colors duration-150" href="#features">Features</a>
<a className="hover:text-slate-100 transition-colors duration-150" href="#workflow">Workflow</a>
<a className="hover:text-slate-100 transition-colors duration-150" href="#templates">Templates</a>
<a className="hover:text-slate-100 transition-colors duration-150" href="#pricing">Pricing</a>
<a className="hover:text-slate-100 transition-colors duration-150" href="#faq">FAQ</a>
</nav>

<div className="flex items-center gap-3">
<button className="hidden sm:inline-flex items-center rounded-full border border-slate-700/70 bg-slate-900/70 px-3 py-1.5 text-xs font-medium text-slate-200 hover:border-slate-500 hover:bg-slate-900/90 transition-colors duration-150">
            Log in
          </button>
<button className="inline-flex items-center gap-2 rounded-full border border-blue-500/80 bg-blue-500 px-4 py-1.5 text-xs font-medium text-slate-950 shadow-lg shadow-blue-500/40 hover:bg-blue-400 hover:border-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/70 transition-colors duration-150">
<span>Get early access</span>
<i className="lucide lucide-arrow-right w-3.5 h-3.5"></i>
</button>
</div>
</div>
</header>

<main className="flex-1">

<section className="relative overflow-hidden border-b border-slate-800/70">

<div className="pointer-events-none absolute inset-0">
<div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-blue-500/10 blur-3xl"></div>
<div className="absolute inset-0 opacity-[0.12] mix-blend-soft-light" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(148, 163, 184, 0.18) 1px, transparent 0)', backgroundSize: '22px 22px'}}>
</div>
</div>
<div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 lg:pt-16 pb-16 lg:pb-24">
<div className="grid lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] gap-10 lg:gap-16 items-center">

<div>
<div className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/80 px-2.5 py-1 text-[11px] font-medium text-slate-300 mb-4 shadow-sm shadow-slate-900">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                Live in private beta
                <span className="h-3 w-px bg-slate-700 mx-1"></span>
<span className="text-slate-400">Ship your next portfolio in hours</span>
</div>
<h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-50 mb-4">
                Build your entire portfolio ecosystem in one place.
              </h1>
<p className="text-sm sm:text-base text-slate-300 max-w-xl mb-6">
                Orchestrate personal sites, case studies, microsites, and investor-ready decks from a single, composable system. Designed for founders, creatives, and operators who outgrew the single-page portfolio.
              </p>

<div className="flex flex-wrap gap-4 mb-7 text-xs text-slate-300">
<div className="inline-flex items-center gap-2">
<span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-400/40">
<i className="lucide lucide-layout-dashboard w-3 h-3 text-emerald-300"></i>
</span>
                  Modular page &amp; asset library
                </div>
<div className="inline-flex items-center gap-2">
<span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-500/10 border border-blue-400/40">
<i className="lucide lucide-wand-2 w-3 h-3 text-blue-300"></i>
</span>
                  Auto-synced case studies
                </div>
<div className="inline-flex items-center gap-2">
<span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-violet-500/10 border border-violet-400/40">
<i className="lucide lucide-share-2 w-3 h-3 text-violet-300"></i>
</span>
                  Share links for every stakeholder
                </div>
</div>

<div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-4">
<form className="flex-1 flex flex-col sm:flex-row gap-2">
<div className="relative flex-1">
<input className="w-full rounded-full border border-slate-700/80 bg-slate-950/70 px-4 py-2.5 text-xs text-slate-100 placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 focus-visible:border-blue-400 transition-all duration-150" placeholder="you@studio.co" type="email"/>
<span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[10px] text-slate-500 hidden sm:inline">
                      No spam. Ever.
                    </span>
</div>
<button className="inline-flex items-center justify-center whitespace-nowrap rounded-full border border-blue-500 bg-blue-500 px-4 py-2.5 text-xs font-medium text-slate-950 shadow-lg shadow-blue-500/40 hover:bg-blue-400 hover:border-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/70 transition-colors duration-150" type="submit">
                    Join the beta
                    <i className="lucide lucide-arrow-right w-3.5 h-3.5 ml-2"></i>
</button>
</form>
</div>
<div className="flex flex-wrap items-center gap-4 text-[11px] text-slate-400">
<div className="flex -space-x-2">
<img alt="Avatar 1" className="h-7 w-7 rounded-full border border-slate-800 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<img alt="Avatar 2" className="h-7 w-7 rounded-full border border-slate-800 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<img alt="Avatar 3" className="h-7 w-7 rounded-full border border-slate-800 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<span>Trusted by early teams at studios, funds, and solo builders.</span>
</div>
</div>

<div className="relative">
<div className="absolute -top-4 -right-3 hidden sm:block">
<span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/40 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-medium text-emerald-300 shadow-sm shadow-emerald-500/30">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Ecosystem health: <span className="text-emerald-100">97%</span>
</span>
</div>
<div className="relative rounded-3xl border border-slate-700/80 bg-slate-950/80 shadow-2xl shadow-slate-900/80 overflow-hidden backdrop-blur">

<div className="flex items-center justify-between px-4 py-3 border-b border-slate-800 bg-slate-950/70">
<div className="flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-slate-600"></span>
<span className="h-2 w-2 rounded-full bg-slate-600"></span>
<span className="h-2 w-2 rounded-full bg-slate-600"></span>
<span className="ml-2 text-[11px] font-medium text-slate-300">Portfolio Ecosystem</span>
</div>
<div className="flex items-center gap-2 text-[11px] text-slate-400">
<span className="inline-flex items-center gap-1 rounded-full bg-slate-900/90 border border-slate-700/80 px-2 py-0.5">
<i className="lucide lucide-globe-2 w-3 h-3"></i>
                      Live
                    </span>
<i className="lucide lucide-more-horizontal w-3.5 h-3.5 text-slate-500"></i>
</div>
</div>

<div className="grid grid-cols-12">

<div className="col-span-5 border-r border-slate-800 bg-slate-950/90 p-3 sm:p-4">
<div className="flex items-center justify-between mb-3">
<span className="text-[11px] font-medium text-slate-300 tracking-tight">Ecosystem views</span>
<button className="inline-flex items-center gap-1 rounded-full border border-slate-700/80 bg-slate-900/80 px-2 py-0.5 text-[10px] text-slate-300 hover:border-blue-400/70 hover:text-blue-200 transition-colors duration-150">
<i className="lucide lucide-plus w-3 h-3"></i>
                        New
                      </button>
</div>
<div className="space-y-1.5 text-[11px]">
<button className="w-full flex items-center justify-between rounded-xl border border-slate-700 bg-slate-900/80 px-2.5 py-1.5 text-left hover:border-blue-400/70 hover:bg-slate-900 transition-colors duration-150">
<span className="flex items-center gap-2">
<span className="h-5 w-5 rounded-lg bg-blue-500/15 border border-blue-400/40 flex items-center justify-center">
<i className="lucide lucide-user-circle-2 w-3 h-3 text-blue-200"></i>
</span>
<span>
<span className="block text-slate-100">Personal hub</span>
<span className="block text-[10px] text-slate-400">Public site + links</span>
</span>
</span>
<span className="text-[10px] text-emerald-300">Active</span>
</button>
<button className="w-full flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/80 px-2.5 py-1.5 text-left hover:border-slate-700 hover:bg-slate-900/70 transition-colors duration-150">
<span className="flex items-center gap-2">
<span className="h-5 w-5 rounded-lg bg-violet-500/15 border border-violet-400/40 flex items-center justify-center">
<i className="lucide lucide-briefcase w-3 h-3 text-violet-200"></i>
</span>
<span>
<span className="block text-slate-100">Client work</span>
<span className="block text-[10px] text-slate-400">Case study library</span>
</span>
</span>
<span className="text-[10px] text-slate-400">4 live</span>
</button>
<button className="w-full flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/80 px-2.5 py-1.5 text-left hover:border-slate-700 hover:bg-slate-900/70 transition-colors duration-150">
<span className="flex items-center gap-2">
<span className="h-5 w-5 rounded-lg bg-emerald-500/15 border border-emerald-400/40 flex items-center justify-center">
<i className="lucide lucide-presentation w-3 h-3 text-emerald-200"></i>
</span>
<span>
<span className="block text-slate-100">Investor deck</span>
<span className="block text-[10px] text-slate-400">Private share links</span>
</span>
</span>
<span className="text-[10px] text-slate-400">3 versions</span>
</button>
</div>
<div className="mt-4 rounded-xl border border-slate-800 bg-slate-950/90 p-3">
<div className="flex items-center justify-between mb-2">
<span className="text-[11px] text-slate-300">Signal overview</span>
<span className="text-[10px] text-slate-500">7 days</span>
</div>
<div className="grid grid-cols-3 gap-2 text-[10px]">
<div className="rounded-lg bg-slate-900/90 border border-slate-800 p-2">
<span className="block text-slate-400 mb-1">Views</span>
<span className="block text-slate-50 font-semibold">4.2k</span>
</div>
<div className="rounded-lg bg-slate-900/90 border border-slate-800 p-2">
<span className="block text-slate-400 mb-1">Shares</span>
<span className="block text-slate-50 font-semibold">312</span>
</div>
<div className="rounded-lg bg-slate-900/90 border border-slate-800 p-2">
<span className="block text-slate-400 mb-1">Deck opens</span>
<span className="block text-slate-50 font-semibold">91</span>
</div>
</div>
</div>
</div>

<div className="col-span-7 bg-slate-950/60 p-3 sm:p-4">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2 text-[11px]">
<button className="inline-flex items-center gap-1 rounded-full bg-slate-900/80 border border-slate-700/80 px-2 py-0.5 text-slate-200">
<i className="lucide lucide-layout-template w-3 h-3"></i>
                          Layout
                        </button>
<button className="inline-flex items-center gap-1 rounded-full bg-slate-950/60 border border-slate-800 px-2 py-0.5 text-slate-400 hover:border-slate-600 hover:text-slate-200 transition-colors duration-150">
<i className="lucide lucide-images w-3 h-3"></i>
                          Assets
                        </button>
<button className="inline-flex items-center gap-1 rounded-full bg-slate-950/60 border border-slate-800 px-2 py-0.5 text-slate-400 hover:border-slate-600 hover:text-slate-200 transition-colors duration-150">
<i className="lucide lucide-rocket w-3 h-3"></i>
                          Publish
                        </button>
</div>
<button className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/60 bg-emerald-500/15 px-2.5 py-0.5 text-[10px] text-emerald-200 hover:border-emerald-300 hover:bg-emerald-500/20 transition-colors duration-150">
<i className="lucide lucide-bolt w-3 h-3"></i>
                        2 updates synced
                      </button>
</div>
<div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-3 sm:p-4 space-y-3">

<div className="flex flex-col gap-3 sm:flex-row sm:items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-2xl border border-slate-700 bg-slate-900 overflow-hidden">
<img alt="Profile" className="h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
<div className="text-xs">
<div className="flex items-center gap-1">
<span className="text-slate-100 font-medium">Aria Jensen</span>
<span className="text-[10px] text-slate-500">/ ecosystem builder</span>
</div>
<p className="text-[11px] text-slate-400 max-w-xs">
                              Product, brand, and systems design for ambitious teams.
                            </p>
</div>
</div>
<div className="flex gap-2 text-[10px]">
<span className="inline-flex items-center gap-1 rounded-full bg-slate-900/90 border border-slate-700/70 px-2 py-1 text-slate-300">
<i className="lucide lucide-link-2 w-3 h-3"></i>
                            aria.studio
                          </span>
<span className="inline-flex items-center gap-1 rounded-full bg-slate-900/90 border border-slate-700/70 px-2 py-1 text-slate-300">
<i className="lucide lucide-mail w-3 h-3"></i>
                            intro deck
                          </span>
</div>
</div>

<div className="grid grid-cols-2 gap-3 text-[11px]">
<div className="rounded-xl bg-slate-900/80 border border-slate-800 p-2.5">
<div className="flex items-center justify-between mb-2">
<span className="text-slate-300">Case study grid</span>
<span className="inline-flex items-center gap-0.5 text-[10px] text-slate-500">
<i className="lucide lucide-layout-grid w-3 h-3"></i>
                              8
                            </span>
</div>
<div className="grid grid-cols-3 gap-1">
<div className="h-10 rounded-lg bg-slate-800/80"></div>
<div className="h-10 rounded-lg bg-slate-800/80"></div>
<div className="h-10 rounded-lg bg-slate-800/80"></div>
<div className="h-10 rounded-lg bg-slate-800/80"></div>
<div className="h-10 rounded-lg bg-slate-800/80"></div>
<div className="h-10 rounded-lg bg-slate-800/80"></div>
</div>
</div>
<div className="rounded-xl bg-slate-900/80 border border-slate-800 p-2.5">
<div className="flex items-center justify-between mb-2">
<span className="text-slate-300">Stakeholder views</span>
<span className="inline-flex items-center gap-0.5 text-[10px] text-slate-500">
<i className="lucide lucide-users w-3 h-3"></i>
                              3
                            </span>
</div>
<div className="space-y-1.5">
<div className="flex items-center justify-between">
<span className="text-slate-400">Recruiting</span>
<span className="inline-flex items-center gap-1 text-[10px] text-slate-300">
<span className="h-1.5 w-6 rounded-full bg-emerald-500/50"></span>
                                87%
                              </span>
</div>
<div className="flex items-center justify-between">
<span className="text-slate-400">Investors</span>
<span className="inline-flex items-center gap-1 text-[10px] text-slate-300">
<span className="h-1.5 w-6 rounded-full bg-blue-500/50"></span>
                                93%
                              </span>
</div>
<div className="flex items-center justify-between">
<span className="text-slate-400">Clients</span>
<span className="inline-flex items-center gap-1 text-[10px] text-slate-300">
<span className="h-1.5 w-6 rounded-full bg-violet-500/50"></span>
                                81%
                              </span>
</div>
</div>
</div>
</div>

<div className="flex flex-col sm:flex-row gap-3 text-[11px]">
<div className="flex-1 rounded-xl bg-slate-900/80 border border-slate-800 p-2.5">
<div className="flex items-center justify-between mb-1.5">
<span className="text-slate-300">Content sync</span>
<span className="text-[10px] text-emerald-300 inline-flex items-center gap-1">
<i className="lucide lucide-check-circle-2 w-3 h-3"></i>
                              All up to date
                            </span>
</div>
<p className="text-[11px] text-slate-400 mb-2">
                            Update once, and every deck, page, and link that uses that module is rebuilt automatically.
                          </p>
<div className="flex items-center gap-2">
<div className="h-1.5 flex-1 rounded-full bg-slate-800 overflow-hidden">
<div className="h-full w-3/4 bg-gradient-to-r from-blue-500 via-emerald-400 to-violet-500"></div>
</div>
<span className="text-[10px] text-slate-400">Sync 76%</span>
</div>
</div>
<div className="w-full sm:w-40 rounded-xl bg-slate-900/80 border border-slate-800 p-2.5 flex flex-col justify-between">
<span className="text-slate-300 mb-1.5">Share modes</span>
<div className="space-y-1 text-[10px] text-slate-400">
<div className="flex items-center justify-between">
<span className="inline-flex items-center gap-1">
<i className="lucide lucide-lock-keyhole w-3 h-3 text-slate-500"></i>
                                Private
                              </span>
<span className="h-3 w-6 rounded-full bg-slate-800 border border-slate-600 flex items-center p-[1px]">
<span className="h-2.5 w-2.5 rounded-full bg-emerald-400 ml-auto"></span>
</span>
</div>
<div className="flex items-center justify-between">
<span className="inline-flex items-center gap-1">
<i className="lucide lucide-link-2 w-3 h-3 text-slate-500"></i>
                                Link-only
                              </span>
<span className="h-3 w-6 rounded-full bg-slate-900 border border-slate-700 flex items-center p-[1px]">
<span className="h-2.5 w-2.5 rounded-full bg-slate-500"></span>
</span>
</div>
<div className="flex items-center justify-between">
<span className="inline-flex items-center gap-1">
<i className="lucide lucide-globe-2 w-3 h-3 text-slate-500"></i>
                                Public
                              </span>
<span className="h-3 w-6 rounded-full bg-slate-900 border border-slate-700 flex items-center p-[1px]">
<span className="h-2.5 w-2.5 rounded-full bg-slate-500"></span>
</span>
</div>
</div>
<button className="mt-2 inline-flex items-center justify-center rounded-full border border-blue-400/70 bg-blue-500/15 px-2 py-1 text-[10px] text-blue-100 hover:bg-blue-500/25 hover:border-blue-300 transition-colors duration-150">
<i className="lucide lucide-send w-3 h-3 mr-1"></i>
                            Copy share link
                          </button>
</div>
</div>
</div>
</div>
</div> 
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-slate-800/70">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
<div className="flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-[11px] text-slate-400 max-w-xs">
              Built for ecosystem builders behind multi-brand studios, creator collectives, and thesis-driven funds.
            </p>
<div className="flex flex-wrap items-center justify-end gap-x-6 gap-y-2 text-[10px] font-medium text-slate-500 tracking-[0.16em] uppercase">
<span className="border border-slate-800/90 rounded-full px-3 py-1 bg-slate-950/60">FOCUS STUDIO</span>
<span className="border border-slate-800/90 rounded-full px-3 py-1 bg-slate-950/60">ATLAS FUND</span>
<span className="border border-slate-800/90 rounded-full px-3 py-1 bg-slate-950/60">NORTHSIDE LABS</span>
<span className="border border-slate-800/90 rounded-full px-3 py-1 bg-slate-950/60">PARALLEL OPS</span>
</div>
</div>
</div>
</section>

<section className="border-b border-slate-800/70" id="features">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50 mb-3">
                Everything your portfolio ecosystem needs to stay coherent.
              </h2>
<p className="text-sm text-slate-300 max-w-lg">
                Connect pages, decks, assets, and narratives into a single system that can adapt to new roles, new markets, and new audiences—without starting from zero every time.
              </p>
</div>
<div className="flex flex-col items-start md:items-end gap-2 text-[11px] text-slate-400">
<span>Built for:</span>
<div className="flex flex-wrap gap-2">
<span className="rounded-full border border-slate-700/80 bg-slate-950/80 px-2.5 py-1">Founders</span>
<span className="rounded-full border border-slate-700/80 bg-slate-950/80 px-2.5 py-1">Design leaders</span>
<span className="rounded-full border border-slate-700/80 bg-slate-950/80 px-2.5 py-1">Ecosystem builders</span>
<span className="rounded-full border border-slate-700/80 bg-slate-950/80 px-2.5 py-1">Investor relations</span>
</div>
</div>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-5 flex flex-col">
<div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/15 border border-blue-400/50 mb-4">
<i className="lucide lucide-layers w-4 h-4 text-blue-300"></i>
</div>
<h3 className="text-sm font-semibold tracking-tight text-slate-50 mb-2">
                Composable portfolio modules
              </h3>
<p className="text-xs text-slate-300 mb-4">
                Build once, reuse everywhere. Hero blocks, project modules, testimonials, and track records stay in sync across websites, decks, and microsites.
              </p>
<ul className="text-[11px] text-slate-400 space-y-1.5 mb-4">
<li className="flex items-center gap-2">
<span className="h-1 w-1 rounded-full bg-blue-400"></span>
                  Central library for projects and narratives
                </li>
<li className="flex items-center gap-2">
<span className="h-1 w-1 rounded-full bg-blue-400"></span>
                  Versioning for experimental angles
                </li>
<li className="flex items-center gap-2">
<span className="h-1 w-1 rounded-full bg-blue-400"></span>
                  Context-aware layouts per audience
                </li>
</ul>
<div className="mt-auto text-[11px] text-slate-400 border-t border-slate-800 pt-3 flex items-center justify-between">
<span>Works with any domain setup.</span>
<span className="inline-flex items-center gap-1 text-blue-300 hover:text-blue-200 cursor-pointer">
                  Learn more
                  <i className="lucide lucide-arrow-up-right w-3 h-3"></i>
</span>
</div>
</div>

<div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-5 flex flex-col">
<div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/15 border border-emerald-400/50 mb-4">
<i className="lucide lucide-orbit w-4 h-4 text-emerald-300"></i>
</div>
<h3 className="text-sm font-semibold tracking-tight text-slate-50 mb-2">
                Stakeholder-specific ecosystems
              </h3>
<p className="text-xs text-slate-300 mb-4">
                Curate focused experiences for investors, recruits, partners, and press—without duplicating work or losing narrative control.
              </p>
<ul className="text-[11px] text-slate-400 space-y-1.5 mb-4">
<li className="flex items-center gap-2">
<span className="h-1 w-1 rounded-full bg-emerald-400"></span>
                  One ecosystem, multiple perspectives
                </li>
<li className="flex items-center gap-2">
<span className="h-1 w-1 rounded-full bg-emerald-400"></span>
                  Smart filters by sector, stage, role, or region
                </li>
<li className="flex items-center gap-2">
<span className="h-1 w-1 rounded-full bg-emerald-400"></span>
                  Private decks with granular access
                </li>
</ul>
<div className="mt-auto text-[11px] text-slate-400 border-t border-slate-800 pt-3 flex items-center justify-between">
<span>Perfect for multi-brand ecosystems.</span>
<span className="inline-flex items-center gap-1 text-emerald-300 hover:text-emerald-200 cursor-pointer">
                  See examples
                  <i className="lucide lucide-arrow-up-right w-3 h-3"></i>
</span>
</div>
</div>

<div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-5 flex flex-col">
<div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-violet-500/15 border border-violet-400/50 mb-4">
<i className="lucide lucide-activity-square w-4 h-4 text-violet-300"></i>
</div>
<h3 className="text-sm font-semibold tracking-tight text-slate-50 mb-2">
                Signals, not vanity metrics
              </h3>
<p className="text-xs text-slate-300 mb-4">
                Understand which stories land with which audiences, and optimize your ecosystem narrative without turning into a growth dashboard.
              </p>
<ul className="text-[11px] text-slate-400 space-y-1.5 mb-4">
<li className="flex items-center gap-2">
<span className="h-1 w-1 rounded-full bg-violet-400"></span>
                  Deck open and scroll-depth analytics
                </li>
<li className="flex items-center gap-2">
<span className="h-1 w-1 rounded-full bg-violet-400"></span>
                  View affinity by sector &amp; story type
                </li>
<li className="flex items-center gap-2">
<span className="h-1 w-1 rounded-full bg-violet-400"></span>
                  Ecosystem health score over time
                </li>
</ul>
<div className="mt-auto text-[11px] text-slate-400 border-t border-slate-800 pt-3 flex items-center justify-between">
<span>No tracking pixels, privacy-first.</span>
<span className="inline-flex items-center gap-1 text-violet-300 hover:text-violet-200 cursor-pointer">
                  View insights
                  <i className="lucide lucide-arrow-up-right w-3 h-3"></i>
</span>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-slate-800/70" id="workflow">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50 mb-2">
                From scattered links to a living portfolio system.
              </h2>
<p className="text-sm text-slate-300 max-w-xl">
                Turn your scattered Notion docs, slides, PDFs, and landing pages into a single, navigable ecosystem in three steps.
              </p>
</div>
<div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-950/80 px-3 py-1.5 text-[11px] text-slate-300">
<i className="lucide lucide-timer w-3.5 h-3.5 text-emerald-300"></i>
<span>Set up in under 90 minutes.</span>
</div>
</div>
<div className="grid md:grid-cols-3 gap-6 text-xs">

<div className="relative rounded-2xl border border-slate-800 bg-slate-950/80 p-5 flex flex-col">
<div className="absolute -top-3 left-5 inline-flex items-center justify-center h-6 w-6 rounded-full bg-slate-950 border border-slate-700 text-[11px] text-slate-200">
                1
              </div>
<h3 className="text-sm font-semibold tracking-tight text-slate-50 mb-2 mt-2">
                Import your ecosystem
              </h3>
<p className="text-slate-300 mb-4">
                Pull in existing decks, case studies, and links. We auto-scan and cluster projects, themes, and relationships.
              </p>
<div className="rounded-xl border border-slate-800 bg-slate-950/80 p-3 text-[11px] text-slate-400">
<div className="flex items-center justify-between mb-2">
<span>Connected sources</span>
<span className="text-slate-500">5/8</span>
</div>
<div className="flex flex-wrap gap-1.5">
<span className="px-2 py-1 rounded-full border border-slate-700/70 bg-slate-900/70">Slides</span>
<span className="px-2 py-1 rounded-full border border-slate-700/70 bg-slate-900/70">Docs</span>
<span className="px-2 py-1 rounded-full border border-slate-700/70 bg-slate-900/70">Notion</span>
<span className="px-2 py-1 rounded-full border border-slate-700/70 bg-slate-900/70">Figma</span>
<span className="px-2 py-1 rounded-full border border-slate-700/70 bg-slate-900/70">Links</span>
</div>
</div>
</div>

<div className="relative rounded-2xl border border-slate-800 bg-slate-950/80 p-5 flex flex-col">
<div className="absolute -top-3 left-5 inline-flex items-center justify-center h-6 w-6 rounded-full bg-slate-950 border border-slate-700 text-[11px] text-slate-200">
                2
              </div>
<h3 className="text-sm font-semibold tracking-tight text-slate-50 mb-2 mt-2">
                Map your narratives
              </h3>
<p className="text-slate-300 mb-4">
                Define themes, journeys, and audiences. Your ecosystem becomes a graph of stories rather than a stack of files.
              </p>
<div className="rounded-xl border border-slate-800 bg-slate-950/80 p-3 text-[11px] text-slate-400">
<div className="flex items-center justify-between mb-2">
<span>Narrative graph</span>
<span className="text-slate-500">12 nodes</span>
</div>
<div className="flex items-center justify-between text-[10px]">
<span className="inline-flex items-center gap-1">
<span className="h-1.5 w-1.5 rounded-full bg-blue-400"></span>
                    Product arcs
                  </span>
<span className="inline-flex items-center gap-1">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                    Outcomes
                  </span>
<span className="inline-flex items-center gap-1">
<span className="h-1.5 w-1.5 rounded-full bg-violet-400"></span>
                    Proof points
                  </span>
</div>
</div>
</div>

<div className="relative rounded-2xl border border-slate-800 bg-slate-950/80 p-5 flex flex-col">
<div className="absolute -top-3 left-5 inline-flex items-center justify-center h-6 w-6 rounded-full bg-slate-950 border border-slate-700 text-[11px] text-slate-200">
                3
              </div>
<h3 className="text-sm font-semibold tracking-tight text-slate-50 mb-2 mt-2">
                Launch stakeholder views
              </h3>
<p className="text-slate-300 mb-4">
                Ship tailored portfolios in a few clicks, then refine them with live feedback and signal data.
              </p>
<div className="rounded-xl border border-slate-800 bg-slate-950/80 p-3 text-[11px] text-slate-400">
<div className="flex items-center justify-between mb-2">
<span>Active views</span>
<span className="text-emerald-300 inline-flex items-center gap-1">
<i className="lucide lucide-radar w-3 h-3"></i> 6 live
                  </span>
</div>
<div className="space-y-1.5 text-[10px]">
<div className="flex items-center justify-between">
<span>Investor overview</span>
<span className="text-slate-500">Password</span>
</div>
<div className="flex items-center justify-between">
<span>Recruiting hub</span>
<span className="text-slate-500">Public</span>
</div>
<div className="flex items-center justify-between">
<span>Client casebook</span>
<span className="text-slate-500">Link-only</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-slate-800/70" id="templates">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
<div className="flex items-center justify-between gap-4 mb-8">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50 mb-2">
                Templates for every part of your ecosystem.
              </h2>
<p className="text-sm text-slate-300">
                Start from curated flows, then customize every block to fit your practice.
              </p>
</div>
<button className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-slate-700/80 bg-slate-950/80 px-3 py-1.5 text-[11px] text-slate-300 hover:border-slate-500 hover:bg-slate-900 transition-colors duration-150">
<i className="lucide lucide-folder-open w-3.5 h-3.5"></i>
              Browse full library
            </button>
</div>
<div className="grid md:grid-cols-3 gap-6 text-xs">

<div className="rounded-2xl border border-slate-800 bg-slate-950/80 overflow-hidden group">
<div className="relative h-36 bg-slate-900/80 overflow-hidden">
<img alt="Template" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-200" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/0"></div>
</div>
<div className="p-4">
<div className="flex items-center justify-between mb-1">
<h3 className="text-sm font-semibold tracking-tight text-slate-50">Founder ecosystem</h3>
<span className="text-[10px] text-slate-400">14 blocks</span>
</div>
<p className="text-slate-300 mb-3">
                  For founders balancing product, fundraising, and talent pipelines in one cohesive presence.
                </p>
<div className="flex flex-wrap gap-1.5 text-[10px] text-slate-400 mb-3">
<span className="px-2 py-1 rounded-full border border-slate-700/70 bg-slate-950/80">Public site</span>
<span className="px-2 py-1 rounded-full border border-slate-700/70 bg-slate-950/80">Investor deck</span>
<span className="px-2 py-1 rounded-full border border-slate-700/70 bg-slate-950/80">Recruiting hub</span>
</div>
<button className="inline-flex items-center gap-1.5 rounded-full border border-slate-700/80 bg-slate-950/80 px-3 py-1.5 text-[11px] text-slate-200 hover:border-blue-400 hover:text-blue-200 transition-colors duration-150">
                  Use this setup
                  <i className="lucide lucide-arrow-right w-3 h-3"></i>
</button>
</div>
</div>

<div className="rounded-2xl border border-slate-800 bg-slate-950/80 overflow-hidden group">
<div className="relative h-36 bg-slate-900/80 overflow-hidden">
<img alt="Template" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-200" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/0"></div>
</div>
<div className="p-4">
<div className="flex items-center justify-between mb-1">
<h3 className="text-sm font-semibold tracking-tight text-slate-50">Studio network</h3>
<span className="text-[10px] text-slate-400">18 blocks</span>
</div>
<p className="text-slate-300 mb-3">
                  For studios running multiple brands, experiments, and venture projects under one umbrella.
                </p>
<div className="flex flex-wrap gap-1.5 text-[10px] text-slate-400 mb-3">
<span className="px-2 py-1 rounded-full border border-slate-700/70 bg-slate-950/80">Brand grid</span>
<span className="px-2 py-1 rounded-full border border-slate-700/70 bg-slate-950/80">Partner updates</span>
<span className="px-2 py-1 rounded-full border border-slate-700/70 bg-slate-950/80">Case study board</span>
</div>
<button className="inline-flex items-center gap-1.5 rounded-full border border-slate-700/80 bg-slate-950/80 px-3 py-1.5 text-[11px] text-slate-200 hover:border-emerald-400 hover:text-emerald-200 transition-colors duration-150">
                  Use this setup
                  <i className="lucide lucide-arrow-right w-3 h-3"></i>
</button>
</div>
</div>

<div className="rounded-2xl border border-slate-800 bg-slate-950/80 overflow-hidden group">
<div className="relative h-36 bg-slate-900/80 overflow-hidden">
<img alt="Template" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-200" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/0"></div>
</div>
<div className="p-4">
<div className="flex items-center justify-between mb-1">
<h3 className="text-sm font-semibold tracking-tight text-slate-50">Thesis-first fund</h3>
<span className="text-[10px] text-slate-400">16 blocks</span>
</div>
<p className="text-slate-300 mb-3">
                  For funds that want LP, founder, and public narratives aligned without maintaining multiple sites.
                </p>
<div className="flex flex-wrap gap-1.5 text-[10px] text-slate-400 mb-3">
<span className="px-2 py-1 rounded-full border border-slate-700/70 bg-slate-950/80">LP portal</span>
<span className="px-2 py-1 rounded-full border border-slate-700/70 bg-slate-950/80">Portfolio map</span>
<span className="px-2 py-1 rounded-full border border-slate-700/70 bg-slate-950/80">Public thesis</span>
</div>
<button className="inline-flex items-center gap-1.5 rounded-full border border-slate-700/80 bg-slate-950/80 px-3 py-1.5 text-[11px] text-slate-200 hover:border-violet-400 hover:text-violet-200 transition-colors duration-150">
                  Use this setup
                  <i className="lucide lucide-arrow-right w-3 h-3"></i>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-slate-800/70" id="pricing">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50 mb-2">
                Early access, founder-friendly pricing.
              </h2>
<p className="text-sm text-slate-300 max-w-xl">
                Join the private beta and lock in early pricing for life. No per-seat overages while we’re in beta.
              </p>
</div>
<div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/60 bg-emerald-500/10 px-3 py-1.5 text-[11px] text-emerald-200">
<i className="lucide lucide-sparkles w-3.5 h-3.5"></i>
<span>Beta cohort #2 now onboarding.</span>
</div>
</div>
<div className="grid md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] gap-6 items-start">

<div className="rounded-2xl border border-blue-500/60 bg-slate-950/90 shadow-xl shadow-blue-500/30 p-6 relative overflow-hidden">
<div className="absolute inset-x-0 -top-20 h-40 bg-gradient-to-b from-blue-500/25 via-blue-500/0 to-transparent opacity-50 pointer-events-none"></div>
<div className="relative">
<div className="flex items-center justify-between mb-2">
<h3 className="text-sm font-semibold tracking-tight text-slate-50">Ecosystem Studio</h3>
<span className="text-[10px] text-blue-200 bg-blue-500/15 border border-blue-400/70 rounded-full px-2 py-0.5">
                    Beta pricing
                  </span>
</div>
<div className="flex items-end gap-2 mb-2">
<span className="text-3xl font-semibold tracking-tight text-slate-50">$39</span>
<span className="text-[11px] text-slate-400 mb-1">/ month</span>
</div>
<p className="text-xs text-slate-300 mb-4">
                  For individuals and small teams building a multi-layered portfolio ecosystem across sites and decks.
                </p>
<div className="text-[11px] text-slate-400 mb-4">
<span>Includes 3 teammates, unlimited views, and up to 50 projects.</span>
</div>
<button className="w-full inline-flex items-center justify-center gap-2 rounded-full border border-blue-500 bg-blue-500 px-4 py-2.5 text-xs font-medium text-slate-950 shadow-lg shadow-blue-500/40 hover:bg-blue-400 hover:border-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/70 transition-colors duration-150 mb-3">
                  Join the beta waitlist
                  <i className="lucide lucide-arrow-right w-3.5 h-3.5"></i>
</button>
<p className="text-[11px] text-slate-400 mb-4">
                  No credit card until you’re onboarded and building.
                </p>
<div className="grid grid-cols-2 gap-4 text-[11px]">
<ul className="space-y-1.5">
<li className="flex items-center gap-2">
<i className="lucide lucide-check w-3 h-3 text-emerald-300"></i>
                      Unlimited stakeholder views
                    </li>
<li className="flex items-center gap-2">
<i className="lucide lucide-check w-3 h-3 text-emerald-300"></i>
                      Shared block library
                    </li>
<li className="flex items-center gap-2">
<i className="lucide lucide-check w-3 h-3 text-emerald-300"></i>
                      Narrative graph builder
                    </li>
</ul>
<ul className="space-y-1.5">
<li className="flex items-center gap-2">
<i className="lucide lucide-check w-3 h-3 text-emerald-300"></i>
                      Private deck links &amp; analytics
                    </li>
<li className="flex items-center gap-2">
<i className="lucide lucide-check w-3 h-3 text-emerald-300"></i>
                      Custom domains for hubs
                    </li>
<li className="flex items-center gap-2">
<i className="lucide lucide-check w-3 h-3 text-emerald-300"></i>
                      Priority founder support
                    </li>
</ul>
</div>
</div>
</div>

<div className="space-y-4 text-xs">
<div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4">
<h4 className="text-sm font-semibold tracking-tight text-slate-50 mb-1.5">Team &amp; studio plans</h4>
<p className="text-slate-300 mb-3">
                  Need to run ecosystems for multiple founders, partners, or brands? We run a limited design partner program for studios and funds.
                </p>
<button className="inline-flex items-center gap-1.5 rounded-full border border-slate-700/80 bg-slate-950/80 px-3 py-1.5 text-[11px] text-slate-200 hover:border-emerald-400 hover:text-emerald-200 transition-colors duration-150">
                  Talk about a studio plan
                  <i className="lucide lucide-arrow-up-right w-3 h-3"></i>
</button>
</div>
<div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4 flex gap-3">
<img alt="Founder" className="h-10 w-10 rounded-xl border border-slate-700 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="text-[11px] text-slate-300">
<p className="mb-1">
                    “This finally lets us tell one coherent story across 20+ projects and experiments—without rebuilding everything every quarter.”
                  </p>
<p className="text-slate-400">
                    — Mira, studio founder &amp; ecosystem builder
                  </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-slate-800/70" id="faq">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
<div className="flex flex-col md:flex-row md:items-start justify-between gap-8 mb-8">
<div className="max-w-md">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50 mb-2">
                Questions about building an ecosystem-level portfolio?
              </h2>
<p className="text-sm text-slate-300 mb-4">
                A portfolio is more than a page. It’s an ecosystem: assets, stories, and relationships. Here’s how we help you manage it.
              </p>
<button className="inline-flex items-center gap-1.5 rounded-full border border-slate-700/80 bg-slate-950/80 px-3 py-1.5 text-[11px] text-slate-200 hover:border-slate-500 hover:bg-slate-900 transition-colors duration-150">
</button></div></div></div></section></main></div>
    </>
  );
}
