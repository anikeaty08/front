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



      window.addEventListener("DOMContentLoaded", () => {
        lucide.createIcons({ attrs: { "stroke-width": 1.5 } });
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
      
<main className="flex-1 flex flex-col min-w-0">

<header className="glass-panel border-b border-subtle h-16 flex items-center justify-between px-4 sm:px-8">
<div className="flex items-center gap-4 min-w-0">
<div className="flex h-9 w-9 items-center justify-center rounded-full border border-subtle-soft bg-neutral-900 text-sm font-medium tracking-tight">
            fb
          </div>
<div className="min-w-0">
<div className="text-lg sm:text-xl font-semibold tracking-tight text-slate-50 truncate">
              firstbuild · GitHub Integration
            </div>
<p className="text-sm text-slate-400 truncate">
              Manage your GitHub connection and recently processed repositories.
            </p>
</div>
</div>
<div className="hidden md:flex items-center gap-4">
<button className="inline-flex items-center gap-1.5 rounded-lg border border-subtle-soft bg-neutral-950 px-3 py-1.5 text-sm font-medium text-slate-200 hover:bg-neutral-900 transition-colors">
<i className="w-4 h-4" data-lucide="file-text"></i>
<span>Docs</span>
</button>
<button className="inline-flex items-center gap-1.5 rounded-lg border accent-border bg-neutral-950 px-4 py-1.5 text-sm font-medium accent-text hover:bg-neutral-900 transition-colors">
<i className="w-4 h-4" data-lucide="life-buoy"></i>
<span>Support</span>
</button>
</div>
</header>

<div className="flex-1 flex flex-col items-stretch px-4 sm:px-8 py-6 overflow-y-auto">

<section className="glass-panel border border-subtle rounded-2xl px-4 sm:px-6 py-4 sm:py-5 mb-6 flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center">
<div className="flex items-start gap-4 min-w-0">
<div className="h-10 w-10 flex items-center justify-center rounded-full bg-neutral-900 border border-subtle-soft">
<i className="w-5 h-5 text-slate-200" data-lucide="github"></i>
</div>
<div className="min-w-0">
<div className="flex items-center gap-2 flex-wrap">
<h2 className="text-xl font-semibold tracking-tight text-slate-50 truncate">
                  @micah-sircularity
                </h2>
<span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/60 bg-emerald-500/10 px-2.5 py-0.5 text-xs font-semibold text-emerald-300 uppercase tracking-wide">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                  Connected
                </span>
</div>
<div className="mt-2 flex flex-wrap items-center gap-3 text-sm">
<div className="flex items-center gap-2 text-slate-400">
<i className="w-4 h-4" data-lucide="calendar"></i>
<span>Connected on 12/8/2025</span>
</div>
<span className="hidden sm:inline text-slate-600">•</span>
<div className="flex items-center gap-2 text-slate-400">
<i className="w-4 h-4" data-lucide="database"></i>
<span>0 repositories synced</span>
</div>
<span className="hidden sm:inline text-slate-600">•</span>
<div className="flex items-center gap-2 text-slate-400">
<i className="w-4 h-4" data-lucide="shield-check"></i>
<span>Permissions: repo, user:email</span>
</div>
</div>
</div>
</div>
<div className="flex-1"></div>
<div className="flex items-center gap-3 self-stretch sm:self-center">
<button className="inline-flex items-center gap-1.5 rounded-lg border accent-border accent-bg-soft px-3 sm:px-4 py-1.5 text-sm font-medium accent-text hover:bg-neutral-900 transition-colors w-full sm:w-auto justify-center">
<i className="w-4 h-4" data-lucide="refresh-ccw"></i>
<span>Sync Repos</span>
</button>
<button className="inline-flex items-center gap-1.5 rounded-lg border border-subtle-soft bg-neutral-950 px-3 sm:px-4 py-1.5 text-sm font-medium text-slate-200 hover:bg-neutral-900 transition-colors w-full sm:w-auto justify-center">
<i className="w-4 h-4" data-lucide="trash-2"></i>
<span>Revoke</span>
</button>
</div>
</section>

<div className="flex flex-col lg:flex-row gap-6 items-start">

<section className="flex-1 min-w-0">
<div className="flex items-center justify-between mb-3 gap-3 flex-wrap">
<div>
<h3 className="text-xl font-semibold tracking-tight text-slate-50 mb-1">
                  Recent Activity
                </h3>
<p className="text-sm text-slate-400">
                  Latest issue processing runs from your connected repositories.
                </p>
</div>
<div className="flex items-center gap-2 text-sm text-slate-400">
<i className="w-4 h-4" data-lucide="clock"></i>
<span>Updated just now</span>
</div>
</div>
<div className="border border-subtle rounded-2xl overflow-hidden bg-neutral-950">

<div className="hidden md:grid grid-cols-[2fr_1fr_1fr] gap-4 px-4 sm:px-6 py-3 border-b border-subtle-soft text-xs font-medium uppercase tracking-wide text-slate-500">
<span>Repository</span>
<span>Issues</span>
<span>Run</span>
</div>

<div className="divide-y divide-subtle-soft">

<article className="px-4 sm:px-6 py-4 hover:bg-neutral-900/60 transition-colors">
<div className="flex flex-col md:grid md:grid-cols-[2fr_1fr_1fr] gap-4 items-start">
<div className="min-w-0">
<div className="flex items-center gap-2 mb-1 flex-wrap">
<a className="text-sm font-medium text-slate-100 hover:underline truncate" href="#">
                          micah-sircularity/Sircularity-1.0
                        </a>
<span className="badge-soft px-2.5 py-0.5 text-xs text-slate-100 bg-neutral-950">
                          Completed
                        </span>
</div>
<div className="flex items-center gap-2 text-xs text-slate-500">
<span className="inline-flex items-center gap-1">
<i className="w-3.5 h-3.5" data-lucide="git-branch"></i>
<span>default</span>
</span>
<span>•</span>
<span className="inline-flex items-center gap-1">
<i className="w-3.5 h-3.5" data-lucide="settings-2"></i>
<span>Full scan</span>
</span>
</div>
</div>
<div className="flex items-center gap-2 text-sm text-slate-400">
<i className="w-4 h-4" data-lucide="hash"></i>
<span>23 issues</span>
</div>
<div className="flex items-center gap-3 text-sm text-slate-400 flex-wrap">
<span className="inline-flex items-center gap-1 text-slate-300">
<i className="w-4 h-4" data-lucide="calendar"></i>
<span>11/8/2025</span>
</span>
<span className="inline-flex items-center gap-1">
<i className="w-4 h-4" data-lucide="timer"></i>
<span>2m 14s</span>
</span>
</div>
</div>
</article>
<article className="px-4 sm:px-6 py-4 hover:bg-neutral-900/60 transition-colors">
<div className="flex flex-col md:grid md:grid-cols-[2fr_1fr_1fr] gap-4 items-start">
<div className="min-w-0">
<div className="flex items-center gap-2 mb-1 flex-wrap">
<a className="text-sm font-medium text-slate-100 hover:underline truncate" href="#">
                          micah-sircularity/Sircularity-1.0
                        </a>
<span className="badge-soft px-2.5 py-0.5 text-xs text-slate-100 bg-neutral-950">
                          Completed
                        </span>
</div>
<div className="flex items-center gap-2 text-xs text-slate-500">
<span className="inline-flex items-center gap-1">
<i className="w-3.5 h-3.5" data-lucide="git-branch"></i>
<span>release/1.0</span>
</span>
<span>•</span>
<span className="inline-flex items-center gap-1">
<i className="w-3.5 h-3.5" data-lucide="settings-2"></i>
<span>Incremental</span>
</span>
</div>
</div>
<div className="flex items-center gap-2 text-sm text-slate-400">
<i className="w-4 h-4" data-lucide="hash"></i>
<span>21 issues</span>
</div>
<div className="flex items-center gap-3 text-sm text-slate-400 flex-wrap">
<span className="inline-flex items-center gap-1 text-slate-300">
<i className="w-4 h-4" data-lucide="calendar"></i>
<span>11/8/2025</span>
</span>
<span className="inline-flex items-center gap-1">
<i className="w-4 h-4" data-lucide="timer"></i>
<span>1m 08s</span>
</span>
</div>
</div>
</article>
<article className="px-4 sm:px-6 py-4 hover:bg-neutral-900/60 transition-colors">
<div className="flex flex-col md:grid md:grid-cols-[2fr_1fr_1fr] gap-4 items-start">
<div className="min-w-0">
<div className="flex items-center gap-2 mb-1 flex-wrap">
<a className="text-sm font-medium text-slate-100 hover:underline truncate" href="#">
                          micah-sircularity/chezkitchen
                        </a>
<span className="badge-soft px-2.5 py-0.5 text-xs text-slate-100 bg-neutral-950">
                          Completed
                        </span>
</div>
<div className="flex items-center gap-2 text-xs text-slate-500">
<span className="inline-flex items-center gap-1">
<i className="w-3.5 h-3.5" data-lucide="git-branch"></i>
<span>main</span>
</span>
<span>•</span>
<span className="inline-flex items-center gap-1">
<i className="w-3.5 h-3.5" data-lucide="bug"></i>
<span>Kitchen insights</span>
</span>
</div>
</div>
<div className="flex items-center gap-2 text-sm text-slate-400">
<i className="w-4 h-4" data-lucide="hash"></i>
<span>20 issues</span>
</div>
<div className="flex items-center gap-3 text-sm text-slate-400 flex-wrap">
<span className="inline-flex items-center gap-1 text-slate-300">
<i className="w-4 h-4" data-lucide="calendar"></i>
<span>11/8/2025</span>
</span>
<span className="inline-flex items-center gap-1">
<i className="w-4 h-4" data-lucide="timer"></i>
<span>1m 42s</span>
</span>
</div>
</div>
</article>
<article className="px-4 sm:px-6 py-4 hover:bg-neutral-900/60 transition-colors">
<div className="flex flex-col md:grid md:grid-cols-[2fr_1fr_1fr] gap-4 items-start">
<div className="min-w-0">
<div className="flex items-center gap-2 mb-1 flex-wrap">
<a className="text-sm font-medium text-slate-100 hover:underline truncate" href="#">
                          micah-sircularity/aiprepapp
                        </a>
<span className="badge-soft px-2.5 py-0.5 text-xs text-slate-100 bg-neutral-950">
                          Completed
                        </span>
</div>
<div className="flex items-center gap-2 text-xs text-slate-500">
<span className="inline-flex items-center gap-1">
<i className="w-3.5 h-3.5" data-lucide="git-branch"></i>
<span>main</span>
</span>
<span>•</span>
<span className="inline-flex items-center gap-1">
<i className="w-3.5 h-3.5" data-lucide="cpu"></i>
<span>Preview</span>
</span>
</div>
</div>
<div className="flex items-center gap-2 text-sm text-slate-400">
<i className="w-4 h-4" data-lucide="hash"></i>
<span>5 issues</span>
</div>
<div className="flex items-center gap-3 text-sm text-slate-400 flex-wrap">
<span className="inline-flex items-center gap-1 text-slate-300">
<i className="w-4 h-4" data-lucide="calendar"></i>
<span>11/8/2025</span>
</span>
<span className="inline-flex items-center gap-1">
<i className="w-4 h-4" data-lucide="timer"></i>
<span>54s</span>
</span>
</div>
</div>
</article>
<article className="px-4 sm:px-6 py-4 hover:bg-neutral-900/60 transition-colors">
<div className="flex flex-col md:grid md:grid-cols-[2fr_1fr_1fr] gap-4 items-start">
<div className="min-w-0">
<div className="flex items-center gap-2 mb-1 flex-wrap">
<a className="text-sm font-medium text-slate-100 hover:underline truncate" href="#">
                          micah-sircularity/aiprepapp
                        </a>
<span className="badge-soft px-2.5 py-0.5 text-xs text-slate-100 bg-neutral-950">
                          Completed
                        </span>
</div>
<div className="flex items-center gap-2 text-xs text-slate-500">
<span className="inline-flex items-center gap-1">
<i className="w-3.5 h-3.5" data-lucide="git-branch"></i>
<span>experiment/agents</span>
</span>
<span>•</span>
<span className="inline-flex items-center gap-1">
<i className="w-3.5 h-3.5" data-lucide="zap"></i>
<span>Experiment</span>
</span>
</div>
</div>
<div className="flex items-center gap-2 text-sm text-slate-400">
<i className="w-4 h-4" data-lucide="hash"></i>
<span>5 issues</span>
</div>
<div className="flex items-center gap-3 text-sm text-slate-400 flex-wrap">
<span className="inline-flex items-center gap-1 text-slate-300">
<i className="w-4 h-4" data-lucide="calendar"></i>
<span>11/8/2025</span>
</span>
<span className="inline-flex items-center gap-1">
<i className="w-4 h-4" data-lucide="timer"></i>
<span>49s</span>
</span>
</div>
</div>
</article>
</div>
</div>
</section>

<aside className="w-full lg:w-80 xl:w-96 glass-panel border border-subtle rounded-2xl px-4 sm:px-5 py-4 lg:py-5 flex-shrink-0">
<div className="flex items-center justify-between mb-3">
<h4 className="text-base font-semibold tracking-tight text-slate-50">
                Sync Summary
              </h4>
<span className="text-xs text-slate-500">Last 24 hours</span>
</div>
<div className="space-y-3 mb-5">
<div className="flex items-center justify-between rounded-xl border border-subtle-soft bg-neutral-950/60 px-3 py-2.5">
<div className="flex items-center gap-2">
<div className="h-7 w-7 rounded-full flex items-center justify-center bg-violet-500/15 border border-violet-500/40">
<i className="w-3.5 h-3.5" data-lucide="archive"></i>
</div>
<div>
<p className="text-xs text-slate-400">Repositories scanned</p>
<p className="text-sm font-medium text-slate-100">5 total</p>
</div>
</div>
</div>
<div className="flex items-center justify-between rounded-xl border border-subtle-soft bg-neutral-950/60 px-3 py-2.5">
<div className="flex items-center gap-2">
<div className="h-7 w-7 rounded-full flex items-center justify-center bg-emerald-500/15 border border-emerald-500/40">
<i className="w-3.5 h-3.5" data-lucide="check-circle-2"></i>
</div>
<div>
<p className="text-xs text-slate-400">Successful runs</p>
<p className="text-sm font-medium text-slate-100">5 / 5</p>
</div>
</div>
</div>
<div className="flex items-center justify-between rounded-xl border border-subtle-soft bg-neutral-950/60 px-3 py-2.5">
<div className="flex items-center gap-2">
<div className="h-7 w-7 rounded-full flex items-center justify-center bg-sky-500/15 border border-sky-500/40">
<i className="w-3.5 h-3.5" data-lucide="list-tree"></i>
</div>
<div>
<p className="text-xs text-slate-400">Issues discovered</p>
<p className="text-sm font-medium text-slate-100">
                      74 open items
                    </p>
</div>
</div>
</div>
</div>
<div className="border-t border-subtle-soft pt-4 mt-1">
<p className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-3">
                Next steps
              </p>
<ul className="space-y-2 text-sm text-slate-300">
<li className="flex items-start gap-2">
<span className="mt-1 h-1.5 w-1.5 rounded-full bg-violet-400"></span>
<span>Run a full sync for your monorepos.</span>
</li>
<li className="flex items-start gap-2">
<span className="mt-1 h-1.5 w-1.5 rounded-full bg-violet-400"></span>
<span>Configure auto-sync on new push events.</span>
</li>
<li className="flex items-start gap-2">
<span className="mt-1 h-1.5 w-1.5 rounded-full bg-violet-400"></span>
<span>Invite teammates to review issue queues.</span>
</li>
</ul>
</div>
</aside>
</div>
</div>

<footer className="h-12 border-t border-subtle flex items-center justify-between px-4 sm:px-8 bg-black/80">
<div className="flex items-center gap-2 text-xs text-slate-500">
<span>© 2025 firstbuild</span>
<span className="hidden sm:inline">•</span>
<button className="hidden sm:inline hover:text-slate-300">
            Privacy
          </button>
<span className="hidden sm:inline">·</span>
<button className="hidden sm:inline hover:text-slate-300">
            Terms
          </button>
</div>
<div className="flex items-center gap-3">
<button className="h-7 w-7 rounded-full border border-subtle-soft bg-neutral-950 flex items-center justify-center text-xs font-medium">
            N
          </button>
<button className="h-8 w-8 rounded-full border border-subtle-soft bg-gradient-to-tr from-amber-500 via-orange-400 to-emerald-400 flex items-center justify-center text-xs font-medium text-black">
            AI
          </button>
</div>
</footer>
</main>


    </>
  );
}
