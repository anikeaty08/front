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
      
<div className="w-full max-w-6xl mx-auto flex flex-col gap-10 lg:gap-14 py-6 lg:py-10 px-4 lg:px-0">

<header className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-md bg-gradient-to-br from-violet-500 to-sky-400 flex items-center justify-center text-xs font-semibold tracking-tight">
            V
          </div>
<div className="flex flex-col">
<div className="text-sm font-semibold tracking-tight text-slate-100">
              Vulk Command Center
            </div>
<div className="text-sm text-slate-500">
              Compile your code into influence.
            </div>
</div>
</div>
<div className="flex items-center gap-3 text-xs font-medium text-slate-400">
<span className="uppercase tracking-[0.18em] text-[0.7rem]">Session</span>
<span className="inline-flex items-center gap-1 rounded-full border border-slate-800/80 bg-slate-950/60 px-2.5 py-1">
<span className="relative flex h-1.5 w-1.5">
<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-50"></span>
<span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
</span>
<span className="text-[0.7rem] uppercase tracking-[0.22em] text-emerald-300">
              Live
            </span>
</span>
</div>
</header>

<section className="flex flex-col gap-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="text-[0.7rem] uppercase tracking-[0.22em] text-slate-500 font-medium">
              Setup Pipeline
            </span>
</div>
<div className="flex items-center gap-2 text-xs text-slate-400">
<span className="uppercase tracking-[0.18em] text-[0.68rem]">Node</span>
<span className="text-[0.7rem] text-slate-300">01</span>
<span className="text-[0.7rem] text-slate-500">/03</span>
</div>
</div>
<div className="flex items-center gap-3">

<div className="flex-1 flex items-center gap-2">
<div className="h-6 w-6 rounded-full border border-emerald-400/80 bg-emerald-500/20 flex items-center justify-center">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-300"></span>
</div>
<div className="h-px flex-1 bg-gradient-to-r from-emerald-400 via-emerald-400/40 to-slate-800"></div>
</div>

<div className="flex-1 flex items-center gap-2">
<div className="h-6 w-6 rounded-full border border-slate-700/80 bg-slate-900/60 flex items-center justify-center">
<span className="h-1 w-1 rounded-full bg-slate-600"></span>
</div>
<div className="h-px flex-1 bg-gradient-to-r from-slate-800 via-slate-800 to-slate-900"></div>
</div>

<div className="flex items-center">
<div className="h-6 w-6 rounded-full border border-slate-700/80 bg-slate-900/60 flex items-center justify-center">
<span className="h-1 w-1 rounded-full bg-slate-600"></span>
</div>
</div>
</div>
</section>

<section className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 rounded-2xl border border-slate-800/70 bg-slate-950/60 backdrop-blur-xl shadow-[0_0_120px_rgba(15,23,42,0.9)]">

<div className="flex flex-col gap-6 lg:gap-8 p-4 lg:p-7">
<div className="space-y-2">
<h2 className="text-2xl lg:text-3xl font-bold tracking-tight text-slate-50 drop-shadow-[0_0_16px_rgba(129,140,248,0.4)]" style={{fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', sans-serif'}}>
              Connect your source.
            </h2>
<p className="text-base lg:text-lg text-slate-400">
              Dock your repository and let Vulk map your contribution lattice.
            </p>
</div>

<div className="rounded-xl border border-slate-800 bg-[#050507] bg-[radial-gradient(circle_at_top,rgba(129,140,248,0.22),transparent_55%)] shadow-inner shadow-black/80">
<div className="flex items-center justify-between border-b border-slate-900/80 px-3 lg:px-4 py-2">
<div className="flex items-center gap-2 text-[0.7rem] text-slate-500">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400/70"></span>
<span className="uppercase tracking-[0.22em]" style={{fontFamily: '\'JetBrains Mono\', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \'Liberation Mono\', \'Courier New\', monospace'}}>
                  Input Channel
                </span>
</div>
<div className="flex items-center gap-1.5 text-[0.7rem] text-slate-500">
<span className="h-1 w-1 rounded-sm bg-slate-600"></span>
<span className="h-1 w-1 rounded-sm bg-slate-700"></span>
<span className="h-1 w-1 rounded-sm bg-slate-800"></span>
</div>
</div>
<div className="px-3 lg:px-4 py-3 lg:py-4">
<label className="mb-1.5 flex items-center gap-2 text-[0.68rem] uppercase tracking-[0.22em] text-slate-500" style={{fontFamily: '\'JetBrains Mono\', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \'Liberation Mono\', \'Courier New\', monospace'}}>
<span className="inline-flex h-1 w-1 rounded-full bg-emerald-400/80"></span>
                Repository Endpoint
              </label>
<div className="mt-1.5 flex items-center rounded-lg border border-slate-800 bg-gradient-to-r from-black via-slate-950 to-black px-3 py-2.5 text-sm text-slate-300 shadow-[0_0_0_1px_rgba(15,23,42,0.8)]" style="
                  font-family: 'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
                ">
<span className="text-emerald-400 mr-2">$</span>
<input className="flex-1 bg-transparent outline-none placeholder:text-slate-600 text-xs lg:text-sm" placeholder="https://github.com/username/repo" type="text"/>
<span className="ml-3 inline-flex items-center rounded-full border border-emerald-400/40 bg-emerald-500/5 px-2 py-0.5 text-[0.68rem] uppercase tracking-[0.18em] text-emerald-300">
                  scan
                </span>
</div>
<p className="mt-2 text-sm text-slate-500">
                Public or private, we only read metadata and commit history.
              </p>
</div>
</div>

<div className="space-y-2">
<p className="text-[0.68rem] uppercase tracking-[0.25em] text-slate-500" style={{fontFamily: '\'JetBrains Mono\', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \'Liberation Mono\', \'Courier New\', monospace'}}>
              Docking Adapters
            </p>
<div className="flex flex-col sm:flex-row gap-3">

<button className="group relative flex-1 overflow-hidden rounded-xl border border-slate-700/80 bg-slate-950/70 px-4 py-3 text-left shadow-[0_0_0_1px_rgba(15,23,42,0.9)] transition hover:border-slate-50 hover:shadow-[0_0_24px_rgba(248,250,252,0.35)]" style={{backgroundImage: 'radial-gradient(circle_at_top_left,rgba(148,163,184,0.24),transparent_60%)'}}>
<div className="pointer-events-none absolute inset-0 opacity-[0.18] mix-blend-soft-light" style="
                    background-image: url('https://grainy-gradients.vercel.app/noise.svg');
                    background-size: 360%;
                  "></div>
<div className="relative flex items-center gap-3">
<div className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-700/80 bg-slate-900/80 group-hover:border-slate-200 group-hover:bg-slate-900">

<svg className="h-4 w-4 text-slate-300 group-hover:text-slate-50" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 4h16a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="m8 9 3 3-3 3M13 15h3" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<div className="flex-1">
<div className="flex items-center justify-between gap-2">
<span className="text-sm font-medium text-slate-100">GitHub</span>
<span className="text-[0.65rem] uppercase tracking-[0.22em] text-slate-500 group-hover:text-slate-300" style={{fontFamily: '\'JetBrains Mono\', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \'Liberation Mono\', \'Courier New\', monospace'}}>
                        Oauth
                      </span>
</div>
<p className="mt-0.5 text-sm text-slate-500">
                      Authorize via device code. 2–3s handshake.
                    </p>
</div>
</div>
</button>

<button className="group relative flex-1 overflow-hidden rounded-xl border border-slate-700/80 bg-slate-950/70 px-4 py-3 text-left shadow-[0_0_0_1px_rgba(15,23,42,0.9)] transition hover:border-orange-400 hover:shadow-[0_0_24px_rgba(251,146,60,0.55)]" style={{backgroundImage: 'radial-gradient(circle_at_top_right,rgba(248,113,113,0.3),transparent_60%)'}}>
<div className="pointer-events-none absolute inset-0 opacity-[0.18] mix-blend-soft-light" style="
                    background-image: url('https://grainy-gradients.vercel.app/noise.svg');
                    background-size: 360%;
                  "></div>
<div className="relative flex items-center gap-3">
<div className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-700/80 bg-slate-900/80 group-hover:border-orange-300 group-hover:bg-slate-950">

<svg className="h-4 w-4 text-orange-300 group-hover:text-orange-200" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5 4.5C14.5 7 12 8 12 10.5c0 1.657 1.343 3 3 3 .943 0 1.8-.435 2.43-1.11A6.97 6.97 0 0 1 19 15.5 7 7 0 1 1 8.5 9.75c0 1.75.75 3.25.75 3.25" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<div className="flex-1">
<div className="flex items-center justify-between gap-2">
<span className="text-sm font-medium text-slate-100">GitLab</span>
<span className="text-[0.65rem] uppercase tracking-[0.22em] text-slate-500 group-hover:text-orange-200" style={{fontFamily: '\'JetBrains Mono\', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \'Liberation Mono\', \'Courier New\', monospace'}}>
                        Token
                      </span>
</div>
<p className="mt-0.5 text-sm text-slate-500">
                      Paste a personal access token with read-only scope.
                    </p>
</div>
</div>
</button>
</div>
</div>

<div className="flex items-center justify-between pt-1">
<div className="flex items-center gap-2 text-[0.68rem] uppercase tracking-[0.22em] text-slate-500" style={{fontFamily: '\'JetBrains Mono\', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \'Liberation Mono\', \'Courier New\', monospace'}}>
<span className="h-1.5 w-1.5 rounded-full bg-sky-400/70"></span>
              Telemetry: Off by default
            </div>
<button className="text-[0.7rem] text-slate-300 underline decoration-dotted underline-offset-4 hover:text-slate-100" type="button">
              View ingestion manifest
            </button>
</div>
</div>

<div className="relative flex items-stretch justify-center rounded-b-2xl lg:rounded-r-2xl lg:rounded-bl-none bg-gradient-to-br from-slate-950/60 via-slate-950/20 to-slate-950/70 overflow-hidden">
<div className="pointer-events-none absolute inset-0 opacity-40" style="
              background-image: radial-gradient(circle at 50% 0%, rgba(129,140,248,0.36), transparent 55%);
            "></div>
<div className="relative flex flex-col justify-center items-center w-full p-4 lg:p-7">
<div className="mb-4 flex items-center justify-between w-full text-[0.7rem] text-slate-400">
<span className="uppercase tracking-[0.22em]" style={{fontFamily: '\'JetBrains Mono\', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \'Liberation Mono\', \'Courier New\', monospace'}}>
                Activity Probe
              </span>
<span className="inline-flex items-center gap-1 rounded-full border border-emerald-400/40 bg-emerald-500/10 px-2 py-0.5 text-[0.65rem] uppercase tracking-[0.18em] text-emerald-200" style={{fontFamily: '\'JetBrains Mono\', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \'Liberation Mono\', \'Courier New\', monospace'}}>
<span className="h-1.5 w-1.5 rounded-full bg-emerald-300"></span>
                Simulated
              </span>
</div>

<div className="w-full rounded-2xl border border-slate-500/20 bg-slate-900/40 backdrop-blur-2xl shadow-[0_0_60px_rgba(15,23,42,0.9)]">

<div className="flex items-center justify-between border-b border-slate-500/20 px-4 py-2.5">
<div className="flex items-center gap-2">
<div className="flex -space-x-1">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
<span className="h-1.5 w-1.5 rounded-full bg-amber-300"></span>
<span className="h-1.5 w-1.5 rounded-full bg-rose-400"></span>
</div>
<span className="text-[0.7rem] uppercase tracking-[0.22em] text-slate-300" style={{fontFamily: '\'JetBrains Mono\', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \'Liberation Mono\', \'Courier New\', monospace'}}>
                    github/activity
                  </span>
</div>
<span className="text-[0.7rem] text-slate-400" style={{fontFamily: '\'JetBrains Mono\', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \'Liberation Mono\', \'Courier New\', monospace'}}>
                  v1.3.7
                </span>
</div>

<div className="px-4 pt-3 pb-4">
<div className="mb-2 flex items-center justify-between">
<p className="text-sm text-slate-300">
                    Last 52 weeks of signal density.
                  </p>
<div className="flex items-center gap-1 text-[0.65rem] text-slate-500">
<span className="uppercase tracking-[0.22em]" style={{fontFamily: '\'JetBrains Mono\', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \'Liberation Mono\', \'Courier New\', monospace'}}>
                      Intensity
                    </span>
<div className="flex items-center gap-0.5">
<span className="h-1.5 w-3 rounded-sm bg-emerald-900"></span>
<span className="h-1.5 w-3 rounded-sm bg-emerald-700"></span>
<span className="h-1.5 w-3 rounded-sm bg-emerald-500"></span>
<span className="h-1.5 w-3 rounded-sm bg-emerald-300"></span>
</div>
</div>
</div>
<div className="mt-1 rounded-lg border border-emerald-400/20 bg-black/80 p-3" style={{boxShadow: '0 0 24px rgba(16,185,129,0.2) inset'}}>

<div className="flex justify-between items-end gap-1 w-full h-full">

<div className="flex flex-col gap-1">
<span className="h-1.5 w-1.5 rounded-[1px] bg-emerald-900"></span>
<span className="h-1.5 w-1.5 rounded-[1px] bg-slate-800/40"></span>
<span className="h-1.5 w-1.5 rounded-[1px] bg-slate-800/40"></span>
<span className="h-1.5 w-1.5 rounded-[1px] bg-slate-800/40"></span>
<span className="h-1.5 w-1.5 rounded-[1px] bg-slate-800/40"></span>
<span className="h-1.5 w-1.5 rounded-[1px] bg-emerald-900"></span>
<span className="h-1.5 w-1.5 rounded-[1px] bg-slate-800/40"></span>
</div>

<div className="flex flex-col gap-1">
<span className="h-1.5 w-1.5 rounded-[1px] bg-slate-800/40"></span>
<span className="h-1.5 w-1.5 rounded-[1px] bg-emerald-900"></span>
<span className="h-1.5 w-1.5 rounded-[1px] bg-emerald-700"></span>
<span className="h-1.5 w-1.5 rounded-[1px] bg-emerald-900"></span>
<span className="h-1.5 w-1.5 rounded-[1px] bg-slate-800/40"></span>
<span className="h-1.5 w-1.5 rounded-[1px] bg-slate-800/40"></span>
<span className="h-1.5 w-1.5 rounded-[1px] bg-slate-800/40"></span>
</div>

<div className="flex flex-col gap-1">
<span className="h-1.5 w-1.5 rounded-[1px] bg-emerald-500"></span>
<span className="h-1.5 w-1.5 rounded-[1px] bg-emerald-300"></span>
<span className="h-1.5 w-1.5 rounded-[1px] bg-emerald-500"></span>
<span className="h-1.5 w-1.5 rounded-[1px] bg-slate-800/40"></span>
<span className="h-1.5 w-1.5 rounded-[1px] bg-slate-800/40"></span>
<span className="h-1.5 w-1.5 rounded-[1px] bg-emerald-900"></span>
<span className="h-1.5 w-1.5 rounded-[1px] bg-slate-800/40"></span>
</div>

<div className="flex flex-col gap-1">
<span className="h-1.5 w-1.5 rounded-[1px] bg-slate-800/40"></span>
<span className="h-1.5 w-1.5 rounded-[1px] bg-slate-800/40"></span>
<span className="h-1.5 w-1.5 rounded-[1px] bg-emerald-900"></span>
<span className="h-1.5 w-1.5 rounded-[1px] bg-emerald-700"></span>
<span className="h-1.5 w-1.5 rounded-[1px] bg-emerald-500"></span>
<span className="h-1.5 w-1.5 rounded-[1px] bg-emerald-900"></span>
<span className="h-1.5 w-1.5 rounded-[1px] bg-slate-800/40"></span>
</div>

<div className="flex flex-col gap-1">
<span className="h-1.5 w-1.5 rounded-[1px] bg-emerald-300"></span>
<span className="h-1.5 w-1.5 rounded-[1px] bg-emerald-500"></span>
<span className="h-1.5 w-1.5 rounded-[1px] bg-emerald-700"></span>
<span className="h-1.5 w-1.5 rounded-[1px] bg-emerald-900"></span>
<span className="h-1.5 w-1.5 rounded-[1px] bg-slate-800/40"></span>
<span className="h-1.5 w-1.5 rounded-[1px] bg-slate-800/40"></span>
<span className="h-1.5 w-1.5 rounded-[1px] bg-slate-800/40"></span>
</div>

<div className="flex flex-col gap-1">
<span className="h-1.5 w-1.5 rounded-[1px] bg-slate-800/40"></span>
<span className="h-1.5 w-1.5 rounded-[1px] bg-emerald-900"></span>
<span className="h-1.5 w-1.5 rounded-[1px] bg-emerald-900"></span>
<span className="h-1.5 w-1.5 rounded-[1px] bg-slate-800/40"></span>
<span className="h-1.5 w-1.5 rounded-[1px] bg-emerald-700"></span>
<span className="h-1.5 w-1.5 rounded-[1px] bg-emerald-500"></span>
<span className="h-1.5 w-1.5 rounded-[1px] bg-emerald-300"></span>
</div>

<div className="flex flex-col gap-1">
<span className="h-1.5 w-1.5 rounded-[1px] bg-emerald-500"></span>
<span className="h-1.5 w-1.5 rounded-[1px] bg-emerald-700"></span>
<span className="h-1.5 w-1.5 rounded-[1px] bg-emerald-900"></span>
<span className="h-1.5 w-1.5 rounded-[1px] bg-slate-800/40"></span>
<span className="h-1.5 w-1.5 rounded-[1px] bg-slate-800/40"></span>
<span className="h-1.5 w-1.5 rounded-[1px] bg-emerald-900"></span>
<span className="h-1.5 w-1.5 rounded-[1px] bg-emerald-700"></span>
</div>

<div className="flex flex-col gap-1">
<span className="h-1.5 w-1.5 rounded-[1px] bg-slate-800/40"></span>
<span className="h-1.5 w-1.5 rounded-[1px] bg-slate-800/40"></span>
<span className="h-1.5 w-1.5 rounded-[1px] bg-emerald-900"></span>
<span className="h-1.5 w-1.5 rounded-[1px] bg-slate-800/40"></span>
<span className="h-1.5 w-1.5 rounded-[1px] bg-emerald-300"></span>
<span className="h-1.5 w-1.5 rounded-[1px] bg-emerald-500"></span>
<span className="h-1.5 w-1.5 rounded-[1px] bg-emerald-700"></span>
</div>

<div className="flex flex-col gap-1">
<span className="h-1.5 w-1.5 rounded-[1px] bg-emerald-300"></span>
<span className="h-1.5 w-1.5 rounded-[1px] bg-emerald-500"></span>
<span className="h-1.5 w-1.5 rounded-[1px] bg-emerald-700"></span>
<span className="h-1.5 w-1.5 rounded-[1px] bg-emerald-500"></span>
<span className="h-1.5 w-1.5 rounded-[1px] bg-emerald-300"></span>
<span className="h-1.5 w-1.5 rounded-[1px] bg-emerald-500"></span>
<span className="h-1.5 w-1.5 rounded-[1px] bg-emerald-700"></span>
</div>

<div className="flex flex-col gap-1">
<span className="h-1.5 w-1.5 rounded-[1px] bg-slate-800/40"></span>
<span className="h-1.5 w-1.5 rounded-[1px] bg-slate-800/40"></span>
<span className="h-1.5 w-1.5 rounded-[1px] bg-emerald-900"></span>
<span className="h-1.5 w-1.5 rounded-[1px] bg-slate-800/40"></span>
<span className="h-1.5 w-1.5 rounded-[1px] bg-emerald-500"></span>
<span className="h-1.5 w-1.5 rounded-[1px] bg-emerald-300"></span>
<span className="h-1.5 w-1.5 rounded-[1px] bg-emerald-500"></span>
</div>

<div className="flex flex-col gap-1">
<span className="h-1.5 w-1.5 rounded-[1px] bg-emerald-700"></span>
<span className="h-1.5 w-1.5 rounded-[1px] bg-emerald-900"></span>
<span className="h-1.5 w-1.5 rounded-[1px] bg-slate-800/40"></span>
<span className="h-1.5 w-1.5 rounded-[1px] bg-slate-800/40"></span>
<span className="h-1.5 w-1.5 rounded-[1px] bg-slate-800/40"></span>
<span className="h-1.5 w-1.5 rounded-[1px] bg-emerald-900"></span>
<span className="h-1.5 w-1.5 rounded-[1px] bg-slate-800/40"></span>
</div>

<div className="flex flex-col gap-1">
<span className="h-1.5 w-1.5 rounded-[1px] bg-slate-800/40"></span>
<span className="h-1.5 w-1.5 rounded-[1px] bg-emerald-500"></span>
<span className="h-1.5 w-1.5 rounded-[1px] bg-emerald-300"></span>
<span className="h-1.5 w-1.5 rounded-[1px] bg-emerald-500"></span>
<span className="h-1.5 w-1.5 rounded-[1px] bg-emerald-700"></span>
<span className="h-1.5 w-1.5 rounded-[1px] bg-emerald-900"></span>
<span className="h-1.5 w-1.5 rounded-[1px] bg-slate-800/40"></span>
</div>

<div className="flex flex-col gap-1">
<span className="h-1.5 w-1.5 rounded-[1px] bg-emerald-300"></span>
<span className="h-1.5 w-1.5 rounded-[1px] bg-emerald-500"></span>
<span className="h-1.5 w-1.5 rounded-[1px] bg-emerald-700"></span>
<span className="h-1.5 w-1.5 rounded-[1px] bg-emerald-900"></span>
<span className="h-1.5 w-1.5 rounded-[1px] bg-slate-800/40"></span>
<span className="h-1.5 w-1.5 rounded-[1px] bg-slate-800/40"></span>
<span className="h-1.5 w-1.5 rounded-[1px] bg-emerald-900"></span>
</div>
</div>
</div>
</div>

<div className="border-t border-slate-500/20 bg-slate-950/40 px-4 py-3 flex flex-col gap-3">
<div className="grid grid-cols-3 gap-3">

<div className="flex flex-col">
<span className="text-base lg:text-lg text-slate-50" style={{fontFamily: '\'JetBrains Mono\', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \'Liberation Mono\', \'Courier New\', monospace'}}>
                      247
                    </span>
<span className="text-[0.68rem] uppercase tracking-[0.28em] text-slate-500" style={{fontFamily: '\'JetBrains Mono\', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \'Liberation Mono\', \'Courier New\', monospace'}}>
                      Commits
                    </span>
</div>

<div className="flex flex-col">
<span className="text-base lg:text-lg text-slate-50" style={{fontFamily: '\'JetBrains Mono\', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \'Liberation Mono\', \'Courier New\', monospace'}}>
                      63
                    </span>
<span className="text-[0.68rem] uppercase tracking-[0.28em] text-slate-500" style={{fontFamily: '\'JetBrains Mono\', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \'Liberation Mono\', \'Courier New\', monospace'}}>
                      Merged PRs
                    </span>
</div>

<div className="flex flex-col">
<span className="text-base lg:text-lg text-slate-50" style={{fontFamily: '\'JetBrains Mono\', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \'Liberation Mono\', \'Courier New\', monospace'}}>
                      9
                    </span>
<span className="text-[0.68rem] uppercase tracking-[0.28em] text-slate-500" style={{fontFamily: '\'JetBrains Mono\', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \'Liberation Mono\', \'Courier New\', monospace'}}>
                      Active Repos
                    </span>
</div>
</div>
<div className="flex items-center justify-between text-[0.7rem] text-slate-500">
<div className="flex items-center gap-1.5">

<svg className="h-3.5 w-3.5 text-emerald-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polyline points="22 12 18 12 15 21 9 3 6 12 2 12" strokeLinecap="round" strokeLinejoin="round"></polyline>
</svg>
<span className="uppercase tracking-[0.24em]" style={{fontFamily: '\'JetBrains Mono\', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \'Liberation Mono\', \'Courier New\', monospace'}}>
                      Signal: Stable
                    </span>
</div>
<span className="text-[0.68rem]" style={{fontFamily: '\'JetBrains Mono\', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \'Liberation Mono\', \'Courier New\', monospace'}}>
                    Ready to compile narratives
                  </span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 rounded-2xl border border-slate-800/70 bg-slate-950/80 backdrop-blur-2xl">

<div className="p-4 lg:p-7 flex flex-col gap-6 lg:gap-7">
<div className="space-y-2">
<h2 className="text-2xl lg:text-3xl font-bold tracking-tight text-slate-50" style={{fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', sans-serif'}}>
              Help us sound like you.
            </h2>
<p className="text-base lg:text-lg text-slate-400">
              Feed Vulk your public voice or start clean. Either way, you stay in control.
            </p>
</div>
<div className="space-y-3">
<p className="text-[0.68rem] uppercase tracking-[0.25em] text-slate-500" style={{fontFamily: '\'JetBrains Mono\', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \'Liberation Mono\', \'Courier New\', monospace'}}>
              Choose input
            </p>

<button className="group relative w-full overflow-hidden rounded-xl border border-sky-500/60 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 px-4 py-3.5 text-left shadow-[0_0_0_1px_rgba(56,189,248,0.8)]" style="
                box-shadow:
                  0 0 32px rgba(56,189,248,0.45),
                  inset 0 0 24px rgba(15,23,42,1);
              " type="button">
<div className="pointer-events-none absolute inset-0 opacity-70" style="
                  background:
                    radial-gradient(circle at 0% 0%, rgba(56,189,248,0.48), transparent 55%),
                    radial-gradient(circle at 100% 100%, rgba(8,47,73,0.9), transparent 60%);
                "></div>
<div className="relative flex items-center gap-3">
<div className="flex h-8 w-8 items-center justify-center rounded-lg border border-sky-300/80 bg-slate-950/80 shadow-[0_0_16px_rgba(56,189,248,0.7)]">

<svg className="h-4 w-4 text-sky-100" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 4h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3z" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M9 17v-6M9 8h.01M15 17v-3a2 2 0 0 0-4 0" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<div className="flex-1">
<p className="text-sm font-medium text-slate-50">
                    Connect LinkedIn
                  </p>
<p className="text-sm text-sky-100/80">
                    Import posts, comments, and article titles to fingerprint your tone.
                  </p>
</div>
<span className="text-[0.7rem] uppercase tracking-[0.22em] text-sky-100/80" style={{fontFamily: '\'JetBrains Mono\', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \'Liberation Mono\', \'Courier New\', monospace'}}>
                  Recommended
                </span>
</div>
</button>

<button className="w-full rounded-xl border border-slate-700/80 bg-slate-950/80 px-4 py-3.5 text-left hover:border-slate-400/90" type="button">
<div className="flex items-center gap-3">
<div className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-700/80 bg-slate-900/80">

<svg className="h-4 w-4 text-slate-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<line strokeLinecap="round" strokeLinejoin="round" x1="21" x2="14" y1="4" y2="4"></line>
<line strokeLinecap="round" strokeLinejoin="round" x1="10" x2="3" y1="4" y2="4"></line>
<line strokeLinecap="round" strokeLinejoin="round" x1="21" x2="12" y1="12" y2="12"></line>
<line strokeLinecap="round" strokeLinejoin="round" x1="8" x2="3" y1="12" y2="12"></line>
<line strokeLinecap="round" strokeLinejoin="round" x1="21" x2="16" y1="20" y2="20"></line>
<line strokeLinecap="round" strokeLinejoin="round" x1="12" x2="3" y1="20" y2="20"></line>
<circle cx="12" cy="4" r="1"></circle>
<circle cx="8" cy="12" r="1"></circle>
<circle cx="16" cy="20" r="1"></circle>
</svg>
</div>
<div className="flex-1">
<p className="text-sm font-medium text-slate-100">
                    Start fresh
                  </p>
<p className="text-sm text-slate-400">
                    Skip imports and manually tune your voice over a short calibration run.
                  </p>
</div>
</div>
</button>
</div>
<div className="pt-2 flex items-center justify-between text-[0.7rem] text-slate-500">
<div className="flex items-center gap-2">

<svg className="h-3.5 w-3.5 text-slate-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="10" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round" width="14" x="5" y="11"></rect>
<path d="M9 11V7a3 3 0 0 1 6 0v4" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<span>
                We never post without explicit confirmation.
              </span>
</div>
<button className="text-[0.68rem] text-slate-300 underline decoration-dotted underline-offset-4" type="button">
              Privacy details
            </button>
</div>
</div>

<div className="p-4 lg:p-7 flex flex-col gap-6 lg:gap-7 border-t lg:border-t-0 lg:border-l border-slate-800/70 bg-gradient-to-br from-slate-950/80 via-slate-950/60 to-slate-950/90">
<div className="space-y-2">
<h3 className="text-lg lg:text-xl font-semibold tracking-tight text-slate-50">
              Voice Spectrum Preview
            </h3>
<p className="text-base text-slate-400">
              We treat tone like an equalizer. You can always re-balance later.
            </p>
</div>

<div className="space-y-4">

<div className="space-y-1">
<div className="flex items-center justify-between">
<span className="text-sm text-slate-200">
                  Professional
                </span>
<span className="text-[0.68rem] uppercase tracking-[0.22em] text-slate-500" style={{fontFamily: '\'JetBrains Mono\', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \'Liberation Mono\', \'Courier New\', monospace'}}>
                  Primary
                </span>
</div>
<div className="h-16 rounded-xl border border-slate-800 bg-slate-950/80 flex items-end gap-1.5 px-2">

<div className="flex-1 flex flex-col justify-end gap-0.5">
<div className="w-full rounded-[3px] bg-gradient-to-t from-sky-900 via-sky-500 to-sky-300 h-6"></div>
</div>
<div className="flex-1 flex flex-col justify-end gap-0.5">
<div className="w-full rounded-[3px] bg-gradient-to-t from-sky-900 via-sky-500 to-sky-200 h-10"></div>
</div>
<div className="flex-1 flex flex-col justify-end gap-0.5">
<div className="w-full rounded-[3px] bg-gradient-to-t from-sky-900 via-sky-400 to-sky-200 h-8"></div>
</div>
<div className="flex-1 flex flex-col justify-end gap-0.5">
<div className="w-full rounded-[3px] bg-gradient-to-t from-sky-900 via-sky-500 to-sky-300 h-12"></div>
</div>
<div className="flex-1 flex flex-col justify-end gap-0.5">
<div className="w-full rounded-[3px] bg-gradient-to-t from-sky-900 via-sky-500 to-sky-200 h-7"></div>
</div>
</div>
</div>

<div className="space-y-1">
<div className="flex items-center justify-between">
<span className="text-sm text-slate-200">
                  Educational
                </span>
<span className="text-[0.68rem] uppercase tracking-[0.22em] text-slate-500" style={{fontFamily: '\'JetBrains Mono\', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \'Liberation Mono\', \'Courier New\', monospace'}}>
                  Support
                </span>
</div>
<div className="h-16 rounded-xl border border-slate-800 bg-slate-950/80 flex items-end gap-1.5 px-2">
<div className="flex-1 flex flex-col justify-end gap-0.5">
<div className="w-full rounded-[3px] bg-gradient-to-t from-emerald-900 via-emerald-500 to-emerald-300 h-8"></div>
</div>
<div className="flex-1 flex flex-col justify-end gap-0.5">
<div className="w-full rounded-[3px] bg-gradient-to-t from-emerald-900 via-emerald-500 to-emerald-200 h-6"></div>
</div>
<div className="flex-1 flex flex-col justify-end gap-0.5">
<div className="w-full rounded-[3px] bg-gradient-to-t from-emerald-900 via-emerald-400 to-emerald-200 h-10"></div>
</div>
<div className="flex-1 flex flex-col justify-end gap-0.5">
<div className="w-full rounded-[3px] bg-gradient-to-t from-emerald-900 via-emerald-500 to-emerald-300 h-5"></div>
</div>
<div className="flex-1 flex flex-col justify-end gap-0.5">
<div className="w-full rounded-[3px] bg-gradient-to-t from-emerald-900 via-emerald-500 to-emerald-200 h-7"></div>
</div>
</div>
</div>

<div className="space-y-1">
<div className="flex items-center justify-between">
<span className="text-sm text-slate-200">
                  Personal
                </span>
<span className="text-[0.68rem] uppercase tracking-[0.22em] text-slate-500" style={{fontFamily: '\'JetBrains Mono\', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \'Liberation Mono\', \'Courier New\', monospace'}}>
                  Accent
                </span>
</div>
<div className="h-16 rounded-xl border border-slate-800 bg-slate-950/80 flex items-end gap-1.5 px-2">
<div className="flex-1 flex flex-col justify-end gap-0.5">
<div className="w-full rounded-[3px] bg-gradient-to-t from-violet-900 via-violet-500 to-violet-300 h-4"></div>
</div>
<div className="flex-1 flex flex-col justify-end gap-0.5">
<div className="w-full rounded-[3px] bg-gradient-to-t from-violet-900 via-violet-500 to-violet-200 h-7"></div>
</div>
<div className="flex-1 flex flex-col justify-end gap-0.5">
<div className="w-full rounded-[3px] bg-gradient-to-t from-violet-900 via-violet-400 to-violet-200 h-5"></div>
</div>
<div className="flex-1 flex flex-col justify-end gap-0.5">
<div className="w-full rounded-[3px] bg-gradient-to-t from-violet-900 via-violet-500 to-violet-300 h-6"></div>
</div>
<div className="flex-1 flex flex-col justify-end gap-0.5">
<div className="w-full rounded-[3px] bg-gradient-to-t from-violet-900 via-violet-500 to-violet-200 h-3"></div>
</div>
</div>
</div>
</div>

<div className="mt-2 rounded-2xl border border-slate-700/80 bg-slate-950/90 shadow-[0_0_50px_rgba(15,23,42,0.9)]">
<div className="border-b border-slate-800/80 px-4 py-2.5 flex items-center justify-between">
<div className="flex items-center gap-2">

<svg className="h-3.5 w-3.5 text-slate-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 15a2 2 0 0 1-2 2h-5l-4 3v-3H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="m10 8-2 2 2 2m4-4 2 2-2 2" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<span className="text-[0.7rem] uppercase tracking-[0.22em] text-slate-400" style={{fontFamily: '\'JetBrains Mono\', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \'Liberation Mono\', \'Courier New\', monospace'}}>
                  Your Professional Voice
                </span>
</div>
<span className="text-[0.68rem] text-slate-500" style={{fontFamily: '\'JetBrains Mono\', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \'Liberation Mono\', \'Courier New\', monospace'}}>
                Preview
              </span>
</div>
<div className="px-4 py-3.5 space-y-2.5">
<p className="text-sm text-slate-200">
                You sound like a senior engineer explaining trade-offs to other builders—direct, specific, and calm under pressure.
              </p>
<p className="text-sm text-slate-400">
                Vulk will favor clear incident narratives, before/after performance graphs, and real-world constraints over generic “growth hacks.”
              </p>

<div className="mt-1 flex flex-wrap gap-1.5">
<span className="inline-flex items-center gap-1 rounded-md border border-emerald-500/40 bg-emerald-500/10 px-2 py-0.5 text-xs text-emerald-200" style={{fontFamily: '\'JetBrains Mono\', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \'Liberation Mono\', \'Courier New\', monospace'}}>
<span className="text-emerald-400">#</span>performance
                </span>
<span className="inline-flex items-center gap-1 rounded-md border border-sky-500/40 bg-sky-500/10 px-2 py-0.5 text-xs text-sky-200" style={{fontFamily: '\'JetBrains Mono\', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \'Liberation Mono\', \'Courier New\', monospace'}}>
<span className="text-sky-400">#</span>webdev
                </span>
<span className="inline-flex items-center gap-1 rounded-md border border-violet-500/40 bg-violet-500/10 px-2 py-0.5 text-xs text-violet-200" style={{fontFamily: '\'JetBrains Mono\', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \'Liberation Mono\', \'Courier New\', monospace'}}>
<span className="text-violet-400">#</span>postmortems
                </span>
</div>
</div>
</div>
</div>
</section>

<section className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 rounded-2xl border border-slate-800/70 bg-slate-950/70 backdrop-blur-2xl">

<div className="p-4 lg:p-7 flex flex-col gap-6 lg:gap-7">
<div className="space-y-2">
<h2 className="text-2xl lg:text-3xl font-bold tracking-tight text-slate-50" style={{fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', sans-serif'}}>
              Extracting Narratives...
            </h2>
<p className="text-base lg:text-lg text-slate-400">
              We are compiling your commit history into a story engine.
            </p>
</div>

<div className="space-y-3">
<div className="flex items-center justify-between">
<span className="text-[0.68rem] uppercase tracking-[0.25em] text-slate-500" style={{fontFamily: '\'JetBrains Mono\', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \'Liberation Mono\', \'Courier New\', monospace'}}>
                Build Pipeline
              </span>
<span className="text-[0.68rem] text-slate-300" style={{fontFamily: '\'JetBrains Mono\', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \'Liberation Mono\', \'Courier New\', monospace'}}>
                67%
              </span>
</div>
<div className="relative h-6 rounded-full bg-slate-950/80 border border-slate-800/80 overflow-hidden">
<div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-transparent via-slate-800/40 to-transparent"></div>

<div className="absolute top-1/2 h-[1px] w-3/4 -translate-y-1/2 bg-gradient-to-r from-transparent via-sky-300 to-transparent">

<div className="absolute right-[8%] top-1/2 h-2 w-6 -translate-y-1/2 rounded-full bg-sky-200/80 blur-[2px]"></div>
</div>

<div className="absolute inset-y-0 left-0 w-2/3 bg-gradient-to-r from-sky-500/10 via-sky-400/5 to-transparent"></div>
</div>
</div>

<div className="mt-2 rounded-xl border border-slate-800 bg-black/80 shadow-inner shadow-black/70">
<div className="flex items-center justify-between border-b border-slate-900/80 px-3 lg:px-4 py-2">
<div className="flex items-center gap-2">

<svg className="h-3.5 w-3.5 text-slate-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round" width="18" x="3" y="3"></rect>
<path d="m8 9 3 3-3 3M13 15h3" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<span className="text-[0.7rem] uppercase tracking-[0.22em] text-slate-400" style={{fontFamily: '\'JetBrains Mono\', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \'Liberation Mono\', \'Courier New\', monospace'}}>
                  Build Logs
                </span>
</div>
<span className="text-[0.68rem] text-slate-500" style={{fontFamily: '\'JetBrains Mono\', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \'Liberation Mono\', \'Courier New\', monospace'}}>
                tail -f
              </span>
</div>
<div className="px-3 lg:px-4 py-3 text-sm text-slate-300 space-y-1.5" style={{fontFamily: '\'JetBrains Mono\', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \'Liberation Mono\', \'Courier New\', monospace'}}>
<p>
<span className="text-emerald-400">&gt;</span>
                Parsing commit <span className="text-slate-400">4f3a2c9</span>... <span className="text-emerald-400">ok</span>
</p>
<p>
<span className="text-emerald-400">&gt;</span>
                Detecting semantic patterns in <span className="text-slate-400">feature/*</span> branches...
              </p>
<p>
<span className="text-emerald-400">&gt;</span>
                Clustering refactors and incidents into narrative threads...
              </p>
<p className="text-slate-500">
<span className="text-sky-400">#</span>
                Upcoming: aligning commit tone to your writing style.
              </p>
</div>
</div>
</div>

<div className="p-4 lg:p-7 flex flex-col gap-6 lg:gap-7 border-t lg:border-t-0 lg:border-l border-slate-800/70 bg-slate-950/60">
<div className="space-y-2">
<h3 className="text-lg lg:text-xl font-semibold tracking-tight text-slate-50">
              What happens next
            </h3>
<p className="text-base text-slate-400">
              Vulk turns raw history into stories your audience can actually follow.
            </p>
</div>

<div className="relative mt-1">
<div className="absolute left-3 top-2 bottom-6 w-px bg-gradient-to-b from-slate-600 via-slate-800 to-transparent"></div>
<ol className="space-y-5">

<li className="relative pl-8">
<div className="absolute left-[0.625rem] top-2 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-slate-950 border border-emerald-400/70">

<svg className="h-2.5 w-2.5 text-emerald-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="9" strokeLinecap="round" strokeLinejoin="round"></circle>
<path d="M12 12 18 8" strokeLinecap="round" strokeLinejoin="round"></path>
<circle cx="12" cy="12" r="1"></circle>
</svg>
</div>
<div className="space-y-1">
<h4 className="text-sm font-medium text-slate-100">
                    Code Analysis
                  </h4>
<p className="text-sm text-slate-400">
                    We scan your repos for architectural shifts, incident clusters, and long-running threads of work.
                  </p>
<p className="text-[0.68rem] uppercase tracking-[0.22em] text-emerald-300" style={{fontFamily: '\'JetBrains Mono\', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \'Liberation Mono\', \'Courier New\', monospace'}}>
                    Live scanner · 3–5s
                  </p>
</div>
</li>

<li className="relative pl-8">
<div className="absolute left-[0.625rem] top-2 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-slate-950 border border-violet-400/80">

<svg className="h-2.5 w-2.5 text-violet-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 3 13.5 8.5 19 10 13.5 11.5 12 17 10.5 11.5 5 10 10.5 8.5 12 3z" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M6 18 6.75 20 9 20.75 6.75 21.5 6 23.5 5.25 21.5 3 20.75 5.25 20 6 18z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<div className="space-y-1">
<h4 className="text-sm font-medium text-slate-100">
                    Story Identification
                  </h4>
<p className="text-sm text-slate-400">
                    We detect narrative arcs (launches, migrations, outages) that map cleanly to posts and threads.
                  </p>
<p className="text-[0.68rem] uppercase tracking-[0.22em] text-violet-300" style={{fontFamily: '\'JetBrains Mono\', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \'Liberation Mono\', \'Courier New\', monospace'}}>
                    Pattern engine · ~12 threads
                  </p>
</div>
</li>

<li className="relative pl-8">
<div className="absolute left-[0.625rem] top-2 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-slate-950 border border-sky-400/80">

<svg className="h-2.5 w-2.5 text-sky-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 14.5A8 8 0 1 0 4 14.5" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M12 12 15 9" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<div className="space-y-1">
<h4 className="text-sm font-medium text-slate-100">
                    Voice Alignment
                  </h4>
<p className="text-sm text-slate-400">
                    We benchmark your tone and cadence so your posts feel like you wrote them—on a good day.
                  </p>
<p className="text-[0.68rem] uppercase tracking-[0.22em] text-sky-300" style={{fontFamily: '\'JetBrains Mono\', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \'Liberation Mono\', \'Courier New\', monospace'}}>
                    Next: Calibration
                  </p>
</div>
</li>
</ol>
</div>

<div className="mt-2 rounded-2xl border border-slate-700/80 bg-slate-950/80 shadow-[0_0_50px_rgba(15,23,42,0.9)] relative overflow-hidden">
<div className="pointer-events-none absolute inset-0 opacity-60" style="
                background:
                  radial-gradient(circle at 0% 0%, rgba(250,204,21,0.28), transparent 55%),
                  radial-gradient(circle at 100% 100%, rgba(255,255,255,0.22), transparent 55%);
              "></div>
<div className="relative p-4 lg:p-5 flex flex-col gap-3">
<div className="flex items-center justify-between">
<div>
<p className="text-[0.7rem] uppercase tracking-[0.25em] text-slate-400" style={{fontFamily: '\'JetBrains Mono\', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \'Liberation Mono\', \'Courier New\', monospace'}}>
                    Success Prediction
                  </p>
<p className="text-sm text-slate-300 mt-1">
                    Estimated time you recover by letting Vulk drive.
                  </p>
</div>

<div className="flex h-8 w-8 items-center justify-center rounded-full border border-amber-300/60 bg-amber-500/10">
<svg className="h-4 w-4 text-amber-200" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3v18h18" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="m7 14 4-4 3 3 5-7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
</div>
<div className="mt-1 flex items-end justify-between gap-4">
<div className="flex flex-col gap-1">
<div className="text-xl lg:text-2xl font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-amber-100 to-slate-50">
                    ~20h Time Saved
                  </div>
<p className="text-sm text-slate-400">
                    per month, based on your current commit velocity and posting cadence.
                  </p>
</div>
<div className="flex flex-col gap-1 text-right">
<p className="text-xs text-slate-400">
                    Launch probability
                  </p>
<p className="text-sm text-slate-100" style={{fontFamily: '\'JetBrains Mono\', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \'Liberation Mono\', \'Courier New\', monospace'}}>
                    87.3%
                  </p>
<p className="text-xs text-emerald-300">
                    +19.4% vs. manual posting
                  </p>
</div>
</div>
<div className="mt-2 flex items-center justify-between text-[0.7rem] text-slate-400">
<div className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]"></span>
<span className="uppercase tracking-[0.22em]" style={{fontFamily: '\'JetBrains Mono\', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \'Liberation Mono\', \'Courier New\', monospace'}}>
                    Engine Warmed
                  </span>
</div>
<span className="text-[0.68rem] text-slate-500">
                  Next step: calibrate your voice
                </span>
</div>
</div>
</div>
</div>
</section>

<footer className="flex items-center justify-between pt-2">
<div className="text-[0.7rem] uppercase tracking-[0.22em] text-slate-500 flex items-center gap-2" style={{fontFamily: '\'JetBrains Mono\', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \'Liberation Mono\', \'Courier New\', monospace'}}>
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400/80"></span>
          Vulk is now ready to compile your code into influence.
        </div>
<div className="flex items-center gap-3">
<button className="rounded-lg border border-slate-700/80 bg-slate-950/80 px-3 py-1.5 text-xs text-slate-300 hover:border-slate-400" type="button">
            Back
          </button>
<button className="inline-flex items-center gap-2 rounded-lg bg-slate-50 text-slate-900 px-4 py-1.5 text-xs font-medium hover:bg-slate-200" type="button">
            Continue to launch
            
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>
</div>
</footer>
</div>

    </>
  );
}
