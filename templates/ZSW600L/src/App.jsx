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
      

<div className="flex flex-col min-h-screen">

<header className="sticky top-0 z-40 border-b border-[color:var(--border)] backdrop-blur-xl bg-[color:var(--bg)]/70">
<div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
<div className="h-14 flex items-center justify-between">

<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-md bg-[color:var(--accent)] text-white grid place-content-center tracking-tight text-[11px] font-semibold shadow-sm shadow-[color:var(--accent)]/30">
                RL
              </div>
<div className="hidden sm:flex items-center gap-3">
<span className="text-slate-300/80">Relay</span>
<span className="text-slate-500">•</span>
<span className="text-slate-400">Spec &amp; UI Mock</span>
</div>
</div>

<div className="hidden md:flex flex-1 max-w-xl mx-6">
<div className="relative flex-1">
<input className="w-full rounded-md bg-[color:var(--panel)]/80 border border-[color:var(--border)] px-9 py-2 text-sm placeholder:text-slate-500 outline-none focus:ring-2 focus:ring-[color:var(--accent)]/40 focus:border-[color:var(--accent)]/40 transition" placeholder="Quick search (channels, people, files, commands)"/>
<div className="absolute inset-y-0 left-3 flex items-center text-slate-500">
<i className="w-4 h-4" data-lucide="search"></i>
</div>
<div className="absolute inset-y-0 right-3 hidden lg:flex items-center gap-1 text-[11px] text-slate-500">
<span className="px-1.5 py-0.5 rounded border border-[color:var(--border)]">⌘</span>
<span className="px-1.5 py-0.5 rounded border border-[color:var(--border)]">K</span>
</div>
</div>
</div>

<div className="flex items-center gap-2">
<button className="group inline-flex items-center gap-2 rounded-md border border-[color:var(--border)] bg-[color:var(--panel)]/70 px-3 py-2 text-sm text-slate-200 hover:border-[color:var(--accent)]/40 hover:bg-[color:var(--panel)] transition" id="copySpecBtn">
<i className="w-4 h-4 text-slate-400 group-hover:text-[color:var(--accent)]" data-lucide="clipboard"></i>
                Copy Spec
              </button>
<button className="group inline-flex items-center gap-2 rounded-md border border-[color:var(--border)] bg-[color:var(--panel)]/70 px-3 py-2 text-sm text-slate-200 hover:border-[color:var(--accent)]/40 hover:bg-[color:var(--panel)] transition" id="openTheme">
<i className="w-4 h-4 text-slate-400 group-hover:text-[color:var(--accent)]" data-lucide="palette"></i>
                Theme Studio
              </button>
<button className="group inline-flex items-center gap-2 rounded-md border border-[color:var(--border)] bg-[color:var(--panel)]/70 px-3 py-2 text-sm text-slate-200 hover:border-[color:var(--accent)]/40 hover:bg-[color:var(--panel)] transition" id="openCreate">
<i className="w-4 h-4 text-slate-400 group-hover:text-[color:var(--accent)]" data-lucide="plus"></i>
                New
              </button>
<button className="md:hidden inline-flex items-center justify-center rounded-md border border-[color:var(--border)] bg-[color:var(--panel)]/70 h-9 w-9 text-slate-200 hover:bg-[color:var(--panel)]">
<i className="w-4 h-4" data-lucide="menu"></i>
</button>
</div>
</div>
</div>
</header>

<main className="flex-1">
<div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 py-6">
<div className="grid grid-cols-1 xl:grid-cols-12 gap-6">

<aside className="xl:col-span-3">
<div className="rounded-xl border border-[color:var(--border)] bg-[color:var(--panel-2)]/70 overflow-hidden">

<div className="px-3 py-3 border-b border-[color:var(--border)]">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-7 w-7 rounded bg-[color:var(--accent)]/20 text-[color:var(--accent)] grid place-content-center">
<i className="w-4 h-4" data-lucide="orbit"></i>
</div>
<div className="text-sm">
<div className="font-semibold tracking-tight text-slate-200">Acme Labs</div>
<div className="text-xs text-slate-500">Workspace</div>
</div>
</div>
<button className="p-1.5 rounded-md hover:bg-white/5 transition">
<i className="w-4 h-4 text-slate-400" data-lucide="chevron-down"></i>
</button>
</div>
<div className="mt-3 flex items-center gap-2">
<div className="inline-flex items-center gap-1 rounded border border-[color:var(--border)] px-2 py-1 text-xs text-slate-300 hover:border-[color:var(--accent)]/40 transition">
<i className="w-3.5 h-3.5 text-slate-400" data-lucide="building-2"></i>
                      Switch org
                    </div>
<div className="inline-flex items-center gap-1 rounded border border-[color:var(--border)] px-2 py-1 text-xs text-slate-300 hover:border-[color:var(--accent)]/40 transition">
<i className="w-3.5 h-3.5 text-slate-400" data-lucide="plus"></i>
                      New workspace
                    </div>
</div>
</div>

<div className="px-2 py-2">
<div className="text-[11px] uppercase tracking-wide text-slate-500 px-2 mb-2">Home</div>
<nav className="space-y-0.5">
<a className="group flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-white/5 transition" href="#">
<i className="w-4 h-4 text-slate-400 group-hover:text-[color:var(--accent)]" data-lucide="home"></i>
<span className="text-sm text-slate-300">Overview</span>
</a>
<a className="group flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-white/5 transition" href="#">
<i className="w-4 h-4 text-slate-400 group-hover:text-[color:var(--accent)]" data-lucide="bell"></i>
<span className="text-sm text-slate-300">Activity</span>
<span className="ml-auto text-[10px] text-white bg-[color:var(--danger)]/80 rounded px-1.5 py-0.5">5</span>
</a>
<a className="group flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-white/5 transition" href="#">
<i className="w-4 h-4 text-slate-400 group-hover:text-[color:var(--accent)]" data-lucide="messages-square"></i>
<span className="text-sm text-slate-300">DMs</span>
</a>
<a className="group flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-white/5 transition" href="#">
<i className="w-4 h-4 text-slate-400 group-hover:text-[color:var(--accent)]" data-lucide="folder-open"></i>
<span className="text-sm text-slate-300">Files</span>
</a>
<a className="group flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-white/5 transition" href="#">
<i className="w-4 h-4 text-slate-400 group-hover:text-[color:var(--accent)]" data-lucide="bookmark"></i>
<span className="text-sm text-slate-300">Later</span>
</a>
</nav>
</div>
<div className="mx-2 my-2 border-t border-[color:var(--border)]"></div>

<div className="px-2 pb-3">
<div className="flex items-center justify-between px-2">
<div className="text-[11px] uppercase tracking-wide text-slate-500">Channels</div>
<button className="p-1 rounded hover:bg-white/5 transition">
<i className="w-3.5 h-3.5 text-slate-400" data-lucide="plus"></i>
</button>
</div>

<div className="mt-2">
<button className="w-full flex items-center gap-2 px-2 py-1.5 rounded hover:bg-white/5 transition">
<i className="w-3.5 h-3.5 text-slate-500" data-lucide="chevron-down"></i>
<span className="text-[11px] uppercase tracking-wide text-slate-500">Team</span>
</button>
<div className="mt-1 space-y-0.5">
<a className="group flex items-center gap-2 px-2 py-1.5 rounded-md bg-white/5 border border-[color:var(--border)]">
<span className="text-slate-500">#</span>
<span className="text-sm text-slate-200">general</span>
<span className="ml-auto text-[10px] text-slate-500">42</span>
</a>
<a className="group flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-white/5 transition">
<span className="text-slate-500">#</span>
<span className="text-sm text-slate-300">announcements</span>
</a>
<a className="group flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-white/5 transition">
<span className="text-slate-500">#</span>
<span className="text-sm text-slate-300">standup</span>
<span className="ml-auto inline-flex items-center gap-1 text-[10px] text-[color:var(--success)]">
<i className="w-3.5 h-3.5" data-lucide="waveform"></i> live
                        </span>
</a>
</div>
</div>

<div className="mt-3">
<button className="w-full flex items-center gap-2 px-2 py-1.5 rounded hover:bg-white/5 transition">
<i className="w-3.5 h-3.5 text-slate-500" data-lucide="chevron-down"></i>
<span className="text-[11px] uppercase tracking-wide text-slate-500">Product</span>
</button>
<div className="mt-1 space-y-0.5">
<a className="group flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-white/5 transition">
<span className="text-slate-500">#</span>
<span className="text-sm text-slate-300">design</span>
<span className="ml-auto text-[10px] text-slate-500">12</span>
</a>
<a className="group flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-white/5 transition">
<span className="text-slate-500">#</span>
<span className="text-sm text-slate-300">engineering</span>
</a>
<a className="group flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-white/5 transition">
<span className="text-slate-500">#</span>
<span className="text-sm text-slate-300">qa</span>
</a>
</div>
</div>

<div className="mt-4">
<div className="flex items-center justify-between px-2">
<div className="text-[11px] uppercase tracking-wide text-slate-500">Direct messages</div>
<button className="p-1 rounded hover:bg-white/5 transition">
<i className="w-3.5 h-3.5 text-slate-400" data-lucide="plus"></i>
</button>
</div>
<div className="mt-2 space-y-0.5">
<a className="group flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-white/5 transition">
<img alt="" className="h-5 w-5 rounded-full ring-1 ring-[color:var(--border)]" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<span className="text-sm text-slate-300">Taylor</span>
<span className="ml-auto h-2 w-2 rounded-full bg-[color:var(--success)]"></span>
</a>
<a className="group flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-white/5 transition">
<img alt="" className="h-5 w-5 rounded-full ring-1 ring-[color:var(--border)]" src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<span className="text-sm text-slate-300">Riley</span>
<span className="ml-auto text-[10px] text-slate-500">2</span>
</a>
</div>
</div>
</div>
<div className="mt-auto px-2 py-3 border-t border-[color:var(--border)] bg-[color:var(--panel)]/60">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<img alt="" className="h-6 w-6 rounded-full ring-1 ring-[color:var(--border)]" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-medium tracking-tight">You</div>
<div className="text-xs text-slate-500">@you</div>
</div>
</div>
<div className="flex items-center gap-1.5">
<button className="p-1.5 rounded hover:bg-white/5"><i className="w-4 h-4 text-slate-400" data-lucide="settings"></i></button>
<button className="p-1.5 rounded hover:bg-white/5"><i className="w-4 h-4 text-slate-400" data-lucide="bell-off"></i></button>
<button className="p-1.5 rounded hover:bg-white/5"><i className="w-4 h-4 text-slate-400" data-lucide="log-out"></i></button>
</div>
</div>
</div>
</div>
</aside>

<section className="xl:col-span-6">
<div className="rounded-xl overflow-hidden border border-[color:var(--border)] bg-[color:var(--panel-2)]/70">

<div className="px-4 py-3 border-b border-[color:var(--border)] flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-slate-500">#</span>
<h2 className="text-lg tracking-tight font-semibold text-slate-200">general</h2>
<span className="text-xs text-slate-500">Team</span>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1.5 rounded-md border border-[color:var(--border)] px-2.5 py-1.5 text-sm text-slate-300 hover:bg-white/5 transition">
<i className="w-4 h-4 text-slate-400" data-lucide="user-plus"></i>
                      Invite
                    </button>
<button className="inline-flex items-center gap-1.5 rounded-md border border-[color:var(--border)] px-2.5 py-1.5 text-sm text-slate-300 hover:bg-white/5 transition">
<i className="w-4 h-4 text-slate-400" data-lucide="pin"></i>
                      Pins
                    </button>
<button className="inline-flex items-center gap-1.5 rounded-md border border-[color:var(--border)] px-2.5 py-1.5 text-sm text-slate-300 hover:bg-white/5 transition">
<i className="w-4 h-4 text-slate-400" data-lucide="users"></i>
                      24
                    </button>
<button className="inline-flex items-center gap-1.5 rounded-md border border-[color:var(--border)] px-2.5 py-1.5 text-sm text-slate-300 hover:bg-white/5 transition">
<i className="w-4 h-4 text-slate-400" data-lucide="phone"></i>
                      Huddle
                    </button>
<button className="inline-flex items-center gap-1.5 rounded-md border border-[color:var(--border)] px-2.5 py-1.5 text-sm text-slate-300 hover:bg-white/5 transition">
<i className="w-4 h-4 text-slate-400" data-lucide="settings-2"></i>
                      Settings
                    </button>
</div>
</div>

<div className="h-[520px] overflow-y-auto bg-[color:var(--chat)]/80">
<div className="p-4 space-y-6">

<div className="flex items-center gap-3">
<div className="flex-1 h-px bg-[color:var(--border)]"></div>
<div className="text-[11px] text-slate-500">Today</div>
<div className="flex-1 h-px bg-[color:var(--border)]"></div>
</div>

<div className="flex items-start gap-3">
<img alt="" className="h-8 w-8 rounded-full ring-1 ring-[color:var(--border)]" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div className="flex-1 min-w-0">
<div className="flex items-center gap-2">
<span className="text-sm font-medium tracking-tight">Taylor</span>
<span className="text-xs text-slate-500">09:42</span>
</div>
<div className="mt-1 text-[15px] leading-6 text-slate-200">
                          Morning! Kicking off the weekly updates. Please drop your blockers in thread. Also testing voice notes today.
                        </div>
<div className="mt-2 flex items-center gap-2">
<button className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-slate-200 transition"><i className="w-3.5 h-3.5" data-lucide="message-square-text"></i> Reply</button>
<button className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-slate-200 transition"><i className="w-3.5 h-3.5" data-lucide="smile-plus"></i> React</button>
<button className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-slate-200 transition"><i className="w-3.5 h-3.5" data-lucide="pin"></i> Pin</button>
</div>
</div>
</div>

<div className="flex items-start gap-3">
<img alt="" className="h-8 w-8 rounded-full ring-1 ring-[color:var(--border)]" src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div className="flex-1 min-w-0">
<div className="flex items-center gap-2">
<span className="text-sm font-medium tracking-tight">Riley</span>
<span className="text-xs text-slate-500">09:45</span>
</div>
<div className="mt-2 rounded-lg border border-[color:var(--border)] bg-[color:var(--panel)]/60 p-3">
<div className="flex items-center gap-3">
<button className="h-9 w-9 rounded-full grid place-content-center bg-white/5 hover:bg-white/10 transition">
<i className="w-5 h-5 text-slate-200" data-lucide="play"></i>
</button>
<div className="flex-1">
<div className="h-2 rounded bg-white/5 overflow-hidden">
<div className="h-full w-2/3 bg-[color:var(--accent)]/60"></div>
</div>
<div className="mt-1 flex items-center justify-between text-[11px] text-slate-500">
<span>00:38</span>
<span>1.2 MB • m4a</span>
</div>
</div>
<button className="p-2 rounded hover:bg-white/5"><i className="w-4 h-4 text-slate-400" data-lucide="download"></i></button>
</div>
</div>
<div className="mt-2 flex items-center gap-2">
<button className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-slate-200 transition"><i className="w-3.5 h-3.5" data-lucide="message-square-text"></i> Thread</button>
<button className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-slate-200 transition"><i className="w-3.5 h-3.5" data-lucide="bookmark-plus"></i> Save</button>
</div>
</div>
</div>

<div className="flex items-start gap-3">
<img alt="" className="h-8 w-8 rounded-full ring-1 ring-[color:var(--border)]" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div className="flex-1 min-w-0">
<div className="flex items-center gap-2">
<span className="text-sm font-medium tracking-tight">You</span>
<span className="text-xs text-slate-500">09:48</span>
</div>
<div className="mt-2 rounded-lg border border-[color:var(--border)] bg-[color:var(--panel)]/60 overflow-hidden">
<div className="p-3 flex items-center gap-3">
<div className="h-10 w-10 rounded bg-indigo-500/15 text-indigo-300 grid place-content-center">
<i className="w-5 h-5" data-lucide="file-text"></i>
</div>
<div className="flex-1 min-w-0">
<div className="text-sm text-slate-200 truncate">Q3-Launch-Checklist.md</div>
<div className="text-xs text-slate-500">Shared in #general • 84 KB</div>
</div>
<button className="p-2 rounded hover:bg-white/5"><i className="w-4 h-4 text-slate-400" data-lucide="open"></i></button>
</div>
</div>
</div>
</div>

<div className="flex items-start gap-3">
<img alt="" className="h-8 w-8 rounded-full ring-1 ring-[color:var(--border)]" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div className="flex-1 min-w-0">
<div className="flex items-center gap-2">
<span className="text-sm font-medium tracking-tight">Taylor</span>
<span className="text-xs text-slate-500">09:50</span>
</div>
<div className="mt-1 text-[15px] leading-6">
                          Thanks <span className="text-[color:var(--accent)]">@you</span> — can you also make a private channel for partner handoff and restrict to the <span className="text-sky-300">@partner</span> role?
                        </div>
</div>
</div>
</div>
</div>

<div className="px-3 py-3 border-t border-[color:var(--border)] bg-[color:var(--panel)]/70">
<div className="rounded-lg border border-[color:var(--border)] bg-[color:var(--panel)]/50">
<div className="px-3 py-2 flex items-center gap-2 border-b border-[color:var(--border)]">
<div className="text-xs text-slate-500">Message #general</div>
<div className="ml-auto flex items-center gap-2">
<button className="p-1.5 rounded hover:bg-white/5"><i className="w-4 h-4 text-slate-400" data-lucide="bell"></i></button>
<button className="p-1.5 rounded hover:bg-white/5"><i className="w-4 h-4 text-slate-400" data-lucide="hash"></i></button>
<button className="p-1.5 rounded hover:bg-white/5"><i className="w-4 h-4 text-slate-400" data-lucide="at-sign"></i></button>
<div className="h-4 w-px bg-[color:var(--border)]"></div>
<div className="inline-flex items-center gap-2 text-xs text-slate-500">
<span>Network:</span>
<span className="inline-flex items-center gap-1 rounded px-1.5 py-0.5 border border-[color:var(--border)]">
<i className="w-3.5 h-3.5 text-[color:var(--success)]" data-lucide="signal"></i> Cellular
                          </span>
</div>
</div>
</div>
<div className="px-3 py-2">
<div className="flex items-end gap-2">
<button className="p-2 rounded-md hover:bg-white/5"><i className="w-5 h-5 text-slate-400" data-lucide="paperclip"></i></button>
<div className="flex-1">
<textarea className="w-full resize-none bg-transparent text-[15px] leading-6 outline-none placeholder:text-slate-500" placeholder="Write a message, use / for commands" rows="1"></textarea>
</div>
<button className="p-2 rounded-md hover:bg-white/5" title="Record voice note">
<i className="w-5 h-5 text-slate-400" data-lucide="mic"></i>
</button>
<button className="p-2 rounded-md hover:bg-white/5">
<i className="w-5 h-5 text-slate-400" data-lucide="smile"></i>
</button>
<button className="inline-flex items-center gap-1.5 rounded-md bg-[color:var(--accent)]/90 hover:bg-[color:var(--accent)] px-3 py-2 text-sm font-medium tracking-tight text-white shadow-sm">
<i className="w-4 h-4" data-lucide="send"></i> Send
                        </button>
</div>
</div>
</div>
<div className="mt-2 text-[11px] text-slate-500">
                    Tip: Hold mic to record, release to preview; messages queue offline and send when back online.
                  </div>
</div>
</div>
</section>

<aside className="xl:col-span-3">
<div className="rounded-xl border border-[color:var(--border)] bg-[color:var(--panel-2)]/70 overflow-hidden">
<div className="px-4 py-3 border-b border-[color:var(--border)] flex items-center justify-between">
<h3 className="text-base font-semibold tracking-tight text-slate-200">Product Spec</h3>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1 rounded-md border border-[color:var(--border)] px-2.5 py-1.5 text-xs text-slate-300 hover:bg-white/5" id="expandAll">
<i className="w-4 h-4 text-slate-400" data-lucide="square-plus"></i> Expand all
                    </button>
<button className="inline-flex items-center gap-1 rounded-md border border-[color:var(--border)] px-2.5 py-1.5 text-xs text-slate-300 hover:bg-white/5" id="collapseAll">
<i className="w-4 h-4 text-slate-400" data-lucide="square-minus"></i> Collapse all
                    </button>
</div>
</div>
<div className="divide-y divide-[color:var(--border)]">

<details className="group open:bg-white/0" open="">
<summary className="list-none cursor-pointer select-none">
<div className="px-4 py-3 flex items-center justify-between hover:bg-white/5 transition">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-slate-400 group-open:text-[color:var(--accent)]" data-lucide="target"></i>
<span className="text-sm font-medium tracking-tight">1) Vision</span>
</div>
<i className="w-4 h-4 text-slate-500 group-open:rotate-180 transition" data-lucide="chevron-down"></i>
</div>
</summary>
<div className="px-4 pb-4 text-sm text-slate-300">
                      Build a multi-workspace, role-based communication platform with the immediacy of real-time chat, the structure of channels and categories, rich files, voice notes, and lightweight calls. Accessible on web, mobile, and desktop, with customizable themes and reliable operation on Wi‑Fi and cellular. Optimized for teams across many businesses, each with their own workspaces and access controls.
                    </div>
</details>
<details className="group">
<summary className="list-none cursor-pointer select-none">
<div className="px-4 py-3 flex items-center justify-between hover:bg-white/5 transition">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-slate-400 group-open:text-[color:var(--accent)]" data-lucide="monitor-smartphone"></i>
<span className="text-sm font-medium tracking-tight">2) Platforms &amp; Packaging</span>
</div>
<i className="w-4 h-4 text-slate-500 group-open:rotate-180 transition" data-lucide="chevron-down"></i>
</div>
</summary>
<div className="px-4 pb-4 text-sm text-slate-300 space-y-2">
<ul className="list-disc pl-5 space-y-1">
<li>Web app with PWA support (installable, offline cache, push)</li>
<li>iOS &amp; Android apps (shared core, native push, background sync)</li>
<li>Desktop app for macOS/Windows/Linux (system tray, badge counts)</li>
<li>All support cellular data and low-bandwidth mode</li>
</ul>
</div>
</details>
<details className="group">
<summary className="list-none cursor-pointer select-none">
<div className="px-4 py-3 flex items-center justify-between hover:bg-white/5 transition">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-slate-400 group-open:text-[color:var(--accent)]" data-lucide="sitemap"></i>
<span className="text-sm font-medium tracking-tight">3) Information Architecture</span>
</div>
<i className="w-4 h-4 text-slate-500 group-open:rotate-180 transition" data-lucide="chevron-down"></i>
</div>
</summary>
<div className="px-4 pb-4 text-sm text-slate-300 space-y-2">
<ul className="list-disc pl-5 space-y-1">
<li>Home: switch orgs/workspaces, quick actions</li>
<li>Activity: mentions, replies, reactions, system events</li>
<li>DMs: 1:1 and small groups</li>
<li>Files: uploads, canvases, lists, search and filters</li>
<li>Later: saved items, reminders</li>
<li>Per-Workspace: channel categories, threads, huddles/calls, members, invites, roles, pins, settings</li>
</ul>
</div>
</details>
<details className="group">
<summary className="list-none cursor-pointer select-none">
<div className="px-4 py-3 flex items-center justify-between hover:bg-white/5 transition">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-slate-400 group-open:text-[color:var(--accent)]" data-lucide="check-circle"></i>
<span className="text-sm font-medium tracking-tight">4) Core Features</span>
</div>
<i className="w-4 h-4 text-slate-500 group-open:rotate-180 transition" data-lucide="chevron-down"></i>
</div>
</summary>
<div className="px-4 pb-4 text-sm text-slate-300 space-y-3">
<div>
<div className="text-[13px] text-slate-400 mb-1">Workspaces</div>
<ul className="list-disc pl-5 space-y-1">
<li>Subscription owner gets 2–3 workspaces included; additional as add-ons</li>
<li>Members join free; optional member upgrades for perks</li>
</ul>
</div>
<div>
<div className="text-[13px] text-slate-400 mb-1">Channels &amp; Categories</div>
<ul className="list-disc pl-5 space-y-1">
<li>Public and private channels, grouped by category</li>
<li>Pins, files, threads, mentions, role-based access</li>
<li>Custom channel icon/profile and description</li>
</ul>
</div>
<div>
<div className="text-[13px] text-slate-400 mb-1">Messaging</div>
<ul className="list-disc pl-5 space-y-1">
<li>Text, emoji, reactions, @mentions, #channel links, slash commands</li>
<li>Attachments: files, images; in-line previews; canvases and lists</li>
<li>Voice notes: record, preview, transcribe, send</li>
</ul>
</div>
<div>
<div className="text-[13px] text-slate-400 mb-1">Calls &amp; Huddles</div>
<ul className="list-disc pl-5 space-y-1">
<li>1:1 and channel huddles; join/leave freely</li>
<li>Mute/unmute, screen share, hand raise (later)</li>
</ul>
</div>
<div>
<div className="text-[13px] text-slate-400 mb-1">Profiles &amp; Notifications</div>
<ul className="list-disc pl-5 space-y-1">
<li>Avatar, display name/handle, bio, contact info, status</li>
<li>Per-channel mute, DND schedule, silence notifications</li>
</ul>
</div>
<div>
<div className="text-[13px] text-slate-400 mb-1">Customization</div>
<ul className="list-disc pl-5 space-y-1">
<li>Change workspace icon/name; user themes for dashboard and chat background</li>
<li>Accessibility: density and font size controls</li>
</ul>
</div>
<div>
<div className="text-[13px] text-slate-400 mb-1">Security &amp; Privacy</div>
<ul className="list-disc pl-5 space-y-1">
<li>2FA, SSO (later), in-transit encryption, role-based permissions</li>
<li>Private channels by member/role; audit logs; retention</li>
</ul>
</div>
<div>
<div className="text-[13px] text-slate-400 mb-1">Offline &amp; Network</div>
<ul className="list-disc pl-5 space-y-1">
<li>Offline-first messaging; queue and retry on reconnect</li>
<li>Optimized for cellular data; low-bandwidth mode</li>
</ul>
</div>
</div>
</details>
<details className="group">
<summary className="list-none cursor-pointer select-none">
<div className="px-4 py-3 flex items-center justify-between hover:bg-white/5 transition">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-slate-400 group-open:text-[color:var(--accent)]" data-lucide="coins"></i>
<span className="text-sm font-medium tracking-tight">5) Monetization</span>
</div>
<i className="w-4 h-4 text-slate-500 group-open:rotate-180 transition" data-lucide="chevron-down"></i>
</div>
</summary>
<div className="px-4 pb-4 text-sm text-slate-300">
                      Owner monthly subscription includes 2–3 workspaces and base storage; upgrades for more workspaces, storage, retention, and optional member perks (larger uploads, AI summaries, advanced search, theme packs).
                    </div>
</details>
<details className="group">
<summary className="list-none cursor-pointer select-none">
<div className="px-4 py-3 flex items-center justify-between hover:bg-white/5 transition">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-slate-400 group-open:text-[color:var(--accent)]" data-lucide="cpu"></i>
<span className="text-sm font-medium tracking-tight">6) Technical Approach</span>
</div>
<i className="w-4 h-4 text-slate-500 group-open:rotate-180 transition" data-lucide="chevron-down"></i>
</div>
</summary>
<div className="px-4 pb-4 text-sm text-slate-300 space-y-2">
<ul className="list-disc pl-5 space-y-1">
<li>Frontend: reactive SPA with PWA; mobile via a shared codebase; desktop wrapper</li>
<li>Realtime: WebSocket for chat and presence; REST/GraphQL for CRUD</li>
<li>Media: MediaRecorder for voice notes; WebRTC + TURN for huddles</li>
<li>Storage: object storage for files/voice; CDN; signed URLs</li>
<li>Auth &amp; RBAC: roles, permissions, invites; 2FA; optional SSO</li>
<li>Push: APNs/FCM; background sync service workers</li>
<li>Search: message and file index; highlighting</li>
</ul>
</div>
</details>
<details className="group">
<summary className="list-none cursor-pointer select-none">
<div className="px-4 py-3 flex items-center justify-between hover:bg-white/5 transition">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-slate-400 group-open:text-[color:var(--accent)]" data-lucide="database"></i>
<span className="text-sm font-medium tracking-tight">7) Data Model (high-level)</span>
</div>
<i className="w-4 h-4 text-slate-500 group-open:rotate-180 transition" data-lucide="chevron-down"></i>
</div>
</summary>
<div className="px-4 pb-4 text-sm text-slate-300">
                      Entities: Org, Workspace, ChannelCategory, Channel, Message, Thread, Reaction, VoiceNote, File, Member, Role, Permission, Invite, Reminder, CallSession, Presence. Key relations: Org 1—N Workspace; Workspace 1—N ChannelCategory; Category 1—N Channel; Channel 1—N Message; Message 0—N Thread/Reaction/File/VoiceNote; Workspace N—M Member via Role; Channel N—M Member via ACL; Member 1—N Reminder; Channel 1—N CallSession.
                    </div>
</details>
<details className="group">
<summary className="list-none cursor-pointer select-none">
<div className="px-4 py-3 flex items-center justify-between hover:bg-white/5 transition">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-slate-400 group-open:text-[color:var(--accent)]" data-lucide="git-branch"></i>
<span className="text-sm font-medium tracking-tight">8) UX Flows</span>
</div>
<i className="w-4 h-4 text-slate-500 group-open:rotate-180 transition" data-lucide="chevron-down"></i>
</div>
</summary>
<div className="px-4 pb-4 text-sm text-slate-300 space-y-2">
<ol className="list-decimal pl-5 space-y-1">
<li>Create org → subscribe → create 2–3 workspaces → invite members</li>
<li>Join via invite → set profile → join default channels</li>
<li>Create channel → set privacy and role access → add members</li>
<li>Send voice note → record → preview → transcribe → send</li>
<li>Start huddle → members join → screen share → end</li>
<li>Save message for later → set reminder → notification</li>
<li>Mute channel or schedule DND</li>
<li>Customize theme colors and chat background</li>
</ol>
</div>
</details>
<details className="group">
<summary className="list-none cursor-pointer select-none">
<div className="px-4 py-3 flex items-center justify-between hover:bg-white/5 transition">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-slate-400 group-open:text-[color:var(--accent)]" data-lucide="shield"></i>
<span className="text-sm font-medium tracking-tight">9) Non-Functional &amp; Security</span>
</div>
<i className="w-4 h-4 text-slate-500 group-open:rotate-180 transition" data-lucide="chevron-down"></i>
</div>
</summary>
<div className="px-4 pb-4 text-sm text-slate-300 space-y-2">
<ul className="list-disc pl-5 space-y-1">
<li>Performance: p95 send latency &lt; 250 ms (LAN), p95 load &lt; 2.5 s</li>
<li>Reliability: 99.9% monthly uptime; auto-reconnect</li>
<li>Accessibility: keyboard navigation, screen reader labels, contrast</li>
<li>Compliance-ready approach to data residency and retention policies</li>
</ul>
</div>
</details>
<details className="group">
<summary className="list-none cursor-pointer select-none">
<div className="px-4 py-3 flex items-center justify-between hover:bg-white/5 transition">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-slate-400 group-open:text-[color:var(--accent)]" data-lucide="flag"></i>
<span className="text-sm font-medium tracking-tight">10) Roadmap &amp; Acceptance Criteria</span>
</div>
<i className="w-4 h-4 text-slate-500 group-open:rotate-180 transition" data-lucide="chevron-down"></i>
</div>
</summary>
<div className="px-4 pb-4 text-sm text-slate-300 space-y-3">
<div>
<div className="text-[13px] text-slate-400 mb-1">Milestones</div>
<ul className="list-disc pl-5 space-y-1">
<li>M0 Foundation, M1 Messaging, M2 Channels/Roles, M3 Voice Notes</li>
<li>M4 Huddles, M5 Files/Later, M6 Themes, M7 Mobile/Desktop</li>
<li>M8 Admin/Security, M9 Integrations, M10 Scale &amp; Optimize</li>
</ul>
</div>
<div>
<div className="text-[13px] text-slate-400 mb-1">Acceptance examples</div>
<ul className="list-disc pl-5 space-y-1">
<li>As a member, I can record and send a voice note in under 3 taps</li>
<li>As an admin, I can create a private channel restricted to a role</li>
<li>As a user, I can customize app and chat background colors</li>
<li>Offline messages queue and send automatically on cellular</li>
</ul>
</div>
</div>
</details>
</div>

<pre className="hidden" id="specText">
Product Specification: Relay (Multi-Workspace Team Chat)

Vision:
- Multi-workspace, role-based chat with channels, categories, files, pins, voice notes, and calls. Runs on web, mobile, and desktop. Customizable themes and reliable on cellular.

Platforms &amp; Packaging:
- Web app with PWA (offline cache, push)
- iOS and Android apps (native push, background sync)
- Desktop app (system tray, auto-launch, badges)

Information Architecture:
- Home, Activity, DMs, Files, Later, Settings/Profile
- Per-Workspace: Channels (by category), Threads, Huddles/Calls, Members, Invites, Roles/Permissions, Pins, Files, Integrations, Audit

Core Features:
- Workspaces: Owner subscription includes 2–3 workspaces; free members; optional member upgrades
- Channels: public/private, categories, pins, files, threads, mentions, role-based access, custom channel icon/profile
- Messaging: text, emoji, @mentions, #channel links, uploads, canvases, lists, reactions, slash commands
- Voice Notes: record, preview, transcribe, send
- Calls/Huddles: 1:1 and channel; mute; screen share
- Activity: mentions, replies, reactions; filters
- Files: uploads, previews, search, versioning
- Later: saved messages and reminders
- Profiles: avatar, display name/handle, bio, contact info, status; per-channel mute; DND schedule
- Customization: workspace icon/name; user themes for dashboard and chat background; accessibility options
- Security: 2FA, optional SSO, TLS, RBAC; private channels; audit logs; retention
- Offline &amp; Network: offline-first queue; automatic retry; low-bandwidth mode; presence fallback

Monetization:
- Monthly owner subscription (2–3 workspaces included)
- Add-ons for extra workspaces/storage/retention
- Optional member perks (bigger uploads, AI summaries, advanced search, theme packs)

Technical Approach:
- Frontend: SPA with PWA; mobile via shared core; desktop wrapper
- Realtime: WebSocket for chat/presence; REST/GraphQL for CRUD
- Media: MediaRecorder for voice notes; WebRTC + TURN for huddles
- Storage: object storage + CDN; signed URLs
- Auth &amp; RBAC: roles/permissions; invites; 2FA; optional SSO
- Push: APNs/FCM; background sync via service workers
- Search: full-text message/file index

Data Model (high-level):
- Org, Workspace, ChannelCategory, Channel, Message, Thread, Reaction, VoiceNote, File, Member, Role, Permission, Invite, Reminder, CallSession, Presence
- Relations: Org 1—N Workspace; Workspace 1—N Category; Category 1—N Channel; Channel 1—N Message; Message 0—N Thread/Reaction/File/VoiceNote; Workspace N—M Member via Role; Channel N—M Member via ACL; Member 1—N Reminder; Channel 1—N CallSession

UX Flows:
- Create org → subscribe → create 2–3 workspaces → invite members
- Join via invite → set profile → auto-join default channels
- Create channel → set privacy → assign role ACL → add members
- Send voice note → record → preview → transcribe → send
- Start huddle → members join → optional screen share
- Save message for later → set reminder
- Mute channel or set DND schedule
- Customize theme colors and chat background

Non-Functional &amp; Security:
- p95 send latency &lt; 250 ms (LAN); p95 load &lt; 2.5 s
- 99.9% uptime; auto-reconnect; retry with backoff
- Accessibility: keyboard-first, screen reader labels, WCAG AA
- Logging, metrics, auditing, data lifecycle controls

Roadmap:
- M0 Foundation, M1 Messaging, M2 Channels/Roles, M3 Voice Notes
- M4 Huddles, M5 Files/Later, M6 Themes, M7 Mobile/Desktop
- M8 Admin/Security, M9 Integrations, M10 Scale &amp; Optimize

Acceptance Criteria (samples):
- Record and send a voice note in ≤ 3 taps
- Create a private channel restricted to a role
- Customize app and chat background colors
- Offline messages queue and auto-send on cellular
                </pre>
</div>
</aside>
</div>
</div>
</main>

<footer className="border-t border-[color:var(--border)]">
<div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
<div className="text-xs text-slate-500">Demo for planning and handoff. Customize the spec, then copy.</div>
<div className="flex items-center gap-3 text-xs text-slate-500">
<span className="inline-flex items-center gap-1">
<i className="w-3.5 h-3.5" data-lucide="wifi-off"></i> Offline-ready
            </span>
<span className="inline-flex items-center gap-1">
<i className="w-3.5 h-3.5" data-lucide="lock"></i> Role-based access
            </span>
</div>
</div>
</footer>
</div>

<div className="fixed inset-0 z-[60] hidden" id="themeModal">
<div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
<div className="relative mx-auto mt-20 w-full max-w-xl">
<div className="rounded-xl border border-[color:var(--border)] bg-[color:var(--panel-2)] shadow-2xl">
<div className="px-4 py-3 border-b border-[color:var(--border)] flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-slate-400" data-lucide="palette"></i>
<h4 className="text-base font-semibold tracking-tight text-slate-200">Theme Studio</h4>
</div>
<button className="p-1.5 rounded hover:bg-white/5" id="closeTheme">
<i className="w-4 h-4 text-slate-400" data-lucide="x"></i>
</button>
</div>
<div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="rounded-lg border border-[color:var(--border)] p-4 bg-[color:var(--panel)]/60">
<div className="text-sm font-medium tracking-tight mb-2">Accent</div>
<input className="w-full h-10 rounded cursor-pointer border border-[color:var(--border)] bg-transparent" id="accentColor" type="color" value="#6366F1"/>
<div className="mt-2 text-xs text-slate-500">Affects buttons, highlights, mentions.</div>
</div>
<div className="rounded-lg border border-[color:var(--border)] p-4 bg-[color:var(--panel)]/60">
<div className="text-sm font-medium tracking-tight mb-2">App Background</div>
<input className="w-full h-10 rounded cursor-pointer border border-[color:var(--border)] bg-transparent" id="bgColor" type="color" value="#0A0C10"/>
<div className="mt-2 text-xs text-slate-500">Main shell background.</div>
</div>
<div className="rounded-lg border border-[color:var(--border)] p-4 bg-[color:var(--panel)]/60">
<div className="text-sm font-medium tracking-tight mb-2">Panels</div>
<input className="w-full h-10 rounded cursor-pointer border border-[color:var(--border)] bg-transparent" id="panelColor" type="color" value="#0F1420"/>
<div className="mt-2 text-xs text-slate-500">Cards, sidebars, overlays.</div>
</div>
<div className="rounded-lg border border-[color:var(--border)] p-4 bg-[color:var(--panel)]/60">
<div className="text-sm font-medium tracking-tight mb-2">Chat Background</div>
<input className="w-full h-10 rounded cursor-pointer border border-[color:var(--border)] bg-transparent" id="chatColor" type="color" value="#0B1018"/>
<div className="mt-2 text-xs text-slate-500">Message area background.</div>
</div>
</div>
<div className="px-4 py-3 border-t border-[color:var(--border)] flex items-center justify-between">
<div className="text-xs text-slate-500">Your theme saves for this session.</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1.5 rounded-md border border-[color:var(--border)] px-3 py-2 text-sm text-slate-300 hover:bg-white/5" id="resetTheme">
<i className="w-4 h-4 text-slate-400" data-lucide="rotate-ccw"></i> Reset
              </button>
<button className="inline-flex items-center gap-1.5 rounded-md bg-[color:var(--accent)]/90 hover:bg-[color:var(--accent)] px-3 py-2 text-sm text-white font-medium tracking-tight" id="closeTheme2">
<i className="w-4 h-4" data-lucide="check"></i> Done
              </button>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
