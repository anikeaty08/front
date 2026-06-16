import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="w-full max-w-6xl min-h-screen md:min-h-[32rem] flex md:items-center md:justify-center p-3 md:p-8" id="app-root">

<div className="relative w-full h-full flex flex-col md:flex-row rounded-3xl bg-white/70 dark:bg-slate-900/70 shadow-[0_24px_60px_rgba(15,23,42,0.18)] backdrop-blur-xl border border-white/60 dark:border-slate-700/70 overflow-hidden transition-colors duration-300">

<div className="absolute z-20 right-4 top-4 flex items-center gap-2 rounded-full bg-white/70 dark:bg-slate-900/80 border border-white/70 dark:border-slate-700/80 shadow-sm backdrop-blur px-2.5 py-1.5">
<span className="text-xs font-medium text-slate-500 dark:text-slate-400 select-none">
            Mood
          </span>
<button className="relative inline-flex items-center rounded-full bg-slate-900/5 dark:bg-slate-700/80 px-0.5 py-0.5 transition-colors duration-300" onclick="document.documentElement.classList.toggle('dark')" type="button">
<span className="inline-flex items-center justify-center rounded-full bg-white dark:bg-slate-900 shadow-sm transform transition-transform duration-300 h-6 w-6 translate-x-0 dark:translate-x-6">
<iconify-icon className="w-3.5 h-3.5 text-amber-400 dark:hidden" icon="solar:sun-2-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon className="w-3.5 h-3.5 text-sky-300 hidden dark:inline-block" icon="solar:moon-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</span>
<span className="sr-only">Toggle theme</span>
</button>
</div>

<aside className="w-full md:w-80 flex flex-col border-b md:border-b-0 md:border-r border-white/70 dark:border-slate-700/80 bg-white/60 dark:bg-slate-900/70 backdrop-blur-xl">

<div className="flex items-center justify-between gap-3 px-4 md:px-5 pt-6 pb-4">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-2xl bg-gradient-to-tr from-violet-300 via-sky-200 to-emerald-200 dark:from-violet-500/80 dark:via-sky-500/80 dark:to-emerald-500/80 flex items-center justify-center shadow-sm">
<span className="text-sm font-semibold tracking-tight text-slate-800 dark:text-slate-900">
                  ☁
                </span>
</div>
<div className="flex flex-col">
<span className="text-base font-semibold tracking-tight text-slate-900 dark:text-slate-50">
                  PastelChat
                </span>
<span className="text-sm text-slate-500 dark:text-slate-400">
                  Soft space for real talk
                </span>
</div>
</div>
<button className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-white/80 dark:bg-slate-800/80 border border-violet-100/80 dark:border-slate-700 shadow-sm hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 transition-all duration-200" type="button">
<iconify-icon className="w-4.5 h-4.5 text-violet-500" icon="solar:add-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>

<div className="px-4 md:px-5 pb-4">
<label className="relative flex items-center rounded-full bg-slate-50/80 dark:bg-slate-800/80 border border-slate-100 dark:border-slate-700/80 px-3 py-1.5 shadow-sm">
<iconify-icon className="w-4 h-4 text-slate-400" icon="solar:magnifer-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<input className="w-full bg-transparent border-none outline-none focus:ring-0 placeholder:text-slate-400 text-sm text-slate-700 dark:text-slate-100 pl-2" placeholder="Find a cozy chat..." type="text"/>
</label>
</div>

<div className="px-4 md:px-5 pb-3 flex gap-1.5 overflow-x-auto no-scrollbar">
<button className="px-3 py-1.5 rounded-full bg-gradient-to-r from-violet-200 via-sky-200 to-emerald-200 dark:from-violet-500/70 dark:via-sky-500/70 dark:to-emerald-500/70 text-xs font-medium text-slate-800 shadow-sm whitespace-nowrap hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 transition-all duration-200" type="button">
              All chats
            </button>
<button className="px-3 py-1.5 rounded-full bg-white/80 dark:bg-slate-800/80 border border-slate-100 dark:border-slate-700 text-xs font-medium text-slate-500 dark:text-slate-300 whitespace-nowrap hover:-translate-y-0.5 hover:shadow-sm active:translate-y-0 transition-all duration-200" type="button">
              Close friends
            </button>
<button className="px-3 py-1.5 rounded-full bg-white/80 dark:bg-slate-800/80 border border-slate-100 dark:border-slate-700 text-xs font-medium text-slate-500 dark:text-slate-300 whitespace-nowrap hover:-translate-y-0.5 hover:shadow-sm active:translate-y-0 transition-all duration-200" type="button">
              Unread
            </button>
</div>

<div className="flex-1 overflow-y-auto no-scrollbar px-2 pb-4 md:pb-6 space-y-1.5">

<button className="group w-full flex items-center gap-3 rounded-2xl px-3.5 py-3 bg-gradient-to-r from-violet-100/80 via-sky-100/70 to-emerald-100/70 dark:from-violet-600/30 dark:via-sky-600/30 dark:to-emerald-600/30 border border-violet-100/80 dark:border-violet-500/40 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200" type="button">
<div className="relative">
<img alt="User avatar" className="h-10 w-10 rounded-2xl object-cover border border-white/70 dark:border-slate-900 shadow-sm" src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=80"/>
<span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_0_3px_rgba(255,255,255,0.9)] dark:shadow-[0_0_0_3px_rgba(15,23,42,0.9)]"></span>
<span className="absolute -bottom-1.5 -right-1.5 h-4 w-4 rounded-full bg-emerald-400/40 blur-sm pointer-events-none"></span>
</div>
<div className="flex-1 flex flex-col items-start">
<div className="flex w-full items-center gap-1">
<span className="text-sm font-semibold tracking-tight text-slate-900 dark:text-slate-50">
                    Luna ☽
                  </span>
<span className="text-[0.65rem] uppercase tracking-[0.14em] rounded-full bg-white/70 dark:bg-slate-900/60 border border-violet-100/80 dark:border-violet-500/40 px-1.5 py-0.5 text-violet-500 font-medium">
                    bestie
                  </span>
<span className="ml-auto text-[0.65rem] text-slate-400 dark:text-slate-500">
                    2 min
                  </span>
</div>
<div className="flex items-center gap-1.5 w-full">
<span className="text-sm text-slate-700 dark:text-slate-200 truncate">
                    “sending you a meme for emotional support” 💌
                  </span>
<span className="ml-auto inline-flex h-4.5 min-w-[1.125rem] items-center justify-center rounded-full bg-violet-500 text-[0.65rem] font-medium text-white shadow-sm">
                    3
                  </span>
</div>
</div>
</button>

<button className="group w-full flex items-center gap-3 rounded-2xl px-3.5 py-3 bg-white/70 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800 shadow-sm hover:bg-sky-50/60 dark:hover:bg-slate-800/70 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 transition-all duration-200" type="button">
<div className="relative">
<img alt="User avatar" className="h-10 w-10 rounded-2xl object-cover border border-white/70 dark:border-slate-900 shadow-sm" src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=80"/>
<span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-emerald-300 shadow-[0_0_0_3px_rgba(255,255,255,0.9)] dark:shadow-[0_0_0_3px_rgba(15,23,42,0.9)] opacity-70"></span>
</div>
<div className="flex-1 flex flex-col items-start">
<div className="flex w-full items-center gap-1">
<span className="text-sm font-semibold tracking-tight text-slate-900 dark:text-slate-50">
                    Study Squad 📚
                  </span>
<span className="ml-auto text-[0.65rem] text-slate-400 dark:text-slate-500">
                    18:23
                  </span>
</div>
<span className="text-sm text-slate-500 dark:text-slate-300 truncate">
                  You: “brb tea break ☕”
                </span>
</div>
</button>

<button className="group w-full flex items-center gap-3 rounded-2xl px-3.5 py-3 bg-white/70 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800 shadow-sm hover:bg-pink-50/60 dark:hover:bg-slate-800/70 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 transition-all duration-200" type="button">
<div className="relative">
<img alt="User avatar" className="h-10 w-10 rounded-2xl object-cover border border-white/70 dark:border-slate-900 shadow-sm" src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=80"/>
<span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-slate-300 shadow-[0_0_0_3px_rgba(255,255,255,0.9)] dark:shadow-[0_0_0_3px_rgba(15,23,42,0.9)]"></span>
</div>
<div className="flex-1 flex flex-col items-start">
<div className="flex w-full items-center gap-1">
<span className="text-sm font-semibold tracking-tight text-slate-900 dark:text-slate-50">
                    Mom
                  </span>
<span className="ml-auto text-[0.65rem] text-slate-400 dark:text-slate-500">
                    16:07
                  </span>
</div>
<span className="text-sm text-slate-500 dark:text-slate-300 truncate">
                  “Send pics when you arrive 💕”
                </span>
</div>
</button>

<button className="group w-full flex items-center gap-3 rounded-2xl px-3.5 py-3 bg-white/70 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800 shadow-sm hover:bg-mint-50/60 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 transition-all duration-200" type="button">
<div className="relative">
<div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-sky-200 via-indigo-200 to-violet-200 dark:from-sky-500/80 dark:via-indigo-500/80 dark:to-violet-500/80 flex items-center justify-center text-slate-800 dark:text-slate-950 text-base font-semibold tracking-tight border border-white/70 dark:border-slate-900 shadow-sm">
                  💭
                </div>
</div>
<div className="flex-1 flex flex-col items-start">
<div className="flex w-full items-center gap-1">
<span className="text-sm font-semibold tracking-tight text-slate-900 dark:text-slate-50">
                    Notes to self
                  </span>
<span className="ml-auto text-[0.65rem] text-slate-400 dark:text-slate-500">
                    Yesterday
                  </span>
</div>
<span className="text-sm text-slate-500 dark:text-slate-300 truncate">
                  “remember: you’re doing enough.”
                </span>
</div>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col bg-gradient-to-br from-violet-50/60 via-sky-50/60 to-emerald-50/60 dark:from-slate-950/80 dark:via-slate-900/80 dark:to-slate-900/90">

<header className="flex items-center justify-between gap-3 px-4 md:px-6 pt-6 pb-3 border-b border-white/70 dark:border-slate-800/80 bg-white/50 dark:bg-slate-950/60 backdrop-blur-xl">
<div className="flex items-center gap-3 md:gap-4">
<button className="inline-flex md:hidden items-center justify-center h-9 w-9 rounded-full bg-white/80 dark:bg-slate-900/80 border border-slate-100 dark:border-slate-700 shadow-sm hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 transition-all duration-200" type="button">
<iconify-icon className="w-4.5 h-4.5 text-slate-500" icon="solar:sidebar-minimalistic-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<div className="relative">
<img alt="Chat avatar" className="h-10 w-10 rounded-2xl object-cover border border-white/80 dark:border-slate-900 shadow-sm" src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=80"/>
<span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_0_3px_rgba(255,255,255,0.95)] dark:shadow-[0_0_0_3px_rgba(15,23,42,0.95)]"></span>
<span className="absolute -bottom-1.5 -right-1.5 h-4 w-4 rounded-full bg-emerald-400/40 blur-sm pointer-events-none"></span>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-2">
<span className="text-base md:text-lg font-semibold tracking-tight text-slate-900 dark:text-slate-50">
                    Luna
                  </span>
<span className="inline-flex items-center gap-1 rounded-full bg-emerald-100/70 dark:bg-emerald-500/20 px-2 py-0.5">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_0_3px_rgba(34,197,94,0.18)]"></span>
<span className="text-[0.65rem] font-medium uppercase tracking-[0.14em] text-emerald-600 dark:text-emerald-300">
                      online
                    </span>
</span>
</div>
<span className="text-sm text-slate-500 dark:text-slate-400">
                  “Currently hyperfixated on cozy vibes”
                </span>
</div>
</div>
<div className="flex items-center gap-1.5 md:gap-2">
<button className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-white/80 dark:bg-slate-900/80 border border-slate-100 dark:border-slate-700 shadow-sm hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 transition-all duration-200" type="button">
<iconify-icon className="w-4.5 h-4.5 text-slate-500" icon="solar:phone-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<button className="hidden sm:inline-flex items-center justify-center h-9 w-9 rounded-full bg-white/80 dark:bg-slate-900/80 border border-slate-100 dark:border-slate-700 shadow-sm hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 transition-all duration-200" type="button">
<iconify-icon className="w-4.5 h-4.5 text-slate-500" icon="solar:video-frame-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<button className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-white/80 dark:bg-slate-900/80 border border-slate-100 dark:border-slate-700 shadow-sm hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 transition-all duration-200" type="button">
<iconify-icon className="w-4.5 h-4.5 text-slate-500" icon="solar:dots-vertical-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</header>

<section className="flex-1 overflow-y-auto no-scrollbar px-3 md:px-6 py-3 md:py-4 space-y-4 md:space-y-5">

<div className="flex items-center gap-3">
<div className="flex-1 h-px bg-slate-200/70 dark:bg-slate-800/80"></div>
<span className="text-[0.7rem] uppercase tracking-[0.16em] text-slate-400 dark:text-slate-500 bg-white/70 dark:bg-slate-950/70 rounded-full px-3 py-0.5 border border-white/80 dark:border-slate-800/80">
                Today
              </span>
<div className="flex-1 h-px bg-slate-200/70 dark:bg-slate-800/80"></div>
</div>

<div className="flex items-start gap-2 md:gap-3 max-w-xl">
<div className="mt-0.5">
<img alt="Luna avatar" className="h-8 w-8 rounded-2xl object-cover border border-white/70 dark:border-slate-900 shadow-sm" src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=80"/>
</div>
<div className="flex flex-col gap-0.5">
<div className="flex items-baseline gap-2">
<span className="text-sm font-semibold tracking-tight text-slate-900 dark:text-slate-50">
                    Luna
                  </span>
<span className="text-[0.65rem] text-slate-400 dark:text-slate-500">
                    18:04
                  </span>
</div>
<div className="inline-flex flex-col gap-1 max-w-full rounded-3xl rounded-tl-sm bg-white/80 dark:bg-slate-900/80 border border-violet-100/80 dark:border-slate-800/80 shadow-sm px-3 py-2">
<p className="text-sm text-slate-800 dark:text-slate-100">
                    how was your day? do you need a tiny rant-safe-space? 🌸
                  </p>
<div className="flex items-center gap-1.5 mt-0.5">
<button className="inline-flex items-center justify-center h-5.5 min-w-[1.5rem] rounded-full bg-violet-50/80 dark:bg-slate-800/80 border border-violet-100/80 dark:border-slate-700/80 text-xs text-violet-500 hover:-translate-y-0.5 hover:shadow-sm active:translate-y-0 transition-all duration-200" type="button">
                      ✨
                    </button>
<button className="inline-flex items-center justify-center h-5.5 min-w-[1.5rem] rounded-full bg-pink-50/80 dark:bg-slate-800/80 border border-pink-100/80 dark:border-slate-700/80 text-xs text-pink-500 hover:-translate-y-0.5 hover:shadow-sm active:translate-y-0 transition-all duration-200" type="button">
                      🤍
                    </button>
</div>
</div>
</div>
</div>

<div className="flex justify-end">
<div className="flex flex-col items-end gap-1 max-w-xl">
<div className="flex items-baseline gap-2">
<span className="text-[0.65rem] text-slate-400 dark:text-slate-500">
                    18:06
                  </span>
<span className="text-sm font-semibold tracking-tight text-slate-900 dark:text-slate-50">
                    You
                  </span>
</div>
<div className="inline-flex flex-col gap-1 max-w-full rounded-3xl rounded-tr-sm bg-gradient-to-br from-violet-300/90 via-sky-300/80 to-emerald-300/80 dark:from-violet-500/90 dark:via-sky-500/90 dark:to-emerald-500/90 text-slate-900 shadow-md px-3 py-2">
<p className="text-sm">
                    honestly? emotionally tired but in a hopeful way ✨
                  </p>
<p className="text-sm">
                    today was a lot, but i’m proud i made it through 💫
                  </p>
<div className="flex items-center gap-1 justify-end mt-0.5">
<span className="inline-flex h-4.5 min-w-[1.5rem] items-center justify-center rounded-full bg-white/70 text-[0.65rem] text-violet-500 shadow-sm">
                      💜 2
                    </span>
<iconify-icon className="w-4 h-4 text-slate-800/80" icon="solar:check-read-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
</div>
</div>

<div className="flex items-start gap-2 md:gap-3 max-w-xl">
<div className="mt-0.5">
<img alt="Luna avatar" className="h-8 w-8 rounded-2xl object-cover border border-white/70 dark:border-slate-900 shadow-sm" src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=80"/>
</div>
<div className="flex flex-col gap-1">
<div className="inline-flex flex-col gap-1 max-w-full rounded-3xl rounded-tl-sm bg-white/80 dark:bg-slate-900/80 border border-violet-100/80 dark:border-slate-800/80 shadow-sm px-3 py-2">
<p className="text-sm text-slate-800 dark:text-slate-100">
                    proud of you too, soft warrior 💖
                  </p>
</div>
<div className="inline-flex flex-col gap-1 max-w-full rounded-3xl rounded-tl-sm bg-white/80 dark:bg-slate-900/80 border border-violet-100/80 dark:border-slate-800/80 shadow-sm px-3 py-2">
<p className="text-sm text-slate-800 dark:text-slate-100">
                    wanna do a tiny win check-in? like 3 things you did today,
                    even if they feel small.
                  </p>
</div>
<div className="flex items-center gap-1 text-[0.65rem] text-slate-400 dark:text-slate-500 mt-0.5">
<span>18:08</span>
<span>Seen</span>
</div>
</div>
</div>

<div className="flex items-center gap-2 md:gap-3 max-w-xs">
<div className="mt-0.5">
<img alt="Luna avatar" className="h-7 w-7 rounded-2xl object-cover border border-white/70 dark:border-slate-900 shadow-sm" src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=80"/>
</div>
<div className="inline-flex items-center rounded-full bg-white/80 dark:bg-slate-900/80 border border-violet-100/80 dark:border-slate-800/80 px-2.5 py-1.5 shadow-sm">
<span className="flex items-center gap-1.5">
<span className="h-1.5 w-1.5 rounded-full bg-slate-400 dark:bg-slate-300 animate-bounce" style={{animationDuration: '1.1s'}}></span>
<span className="h-1.5 w-1.5 rounded-full bg-slate-400 dark:bg-slate-300 animate-bounce" style={{animationDuration: '1.1s', animationDelay: '0.12s'}}></span>
<span className="h-1.5 w-1.5 rounded-full bg-slate-400 dark:bg-slate-300 animate-bounce" style={{animationDuration: '1.1s', animationDelay: '0.24s'}}></span>
</span>
</div>
</div>
</section>

<footer className="border-t border-white/70 dark:border-slate-800/80 bg-white/60 dark:bg-slate-950/70 backdrop-blur-xl px-3 md:px-6 pt-3 pb-4 space-y-2">

<div className="flex items-center justify-between gap-2">
<div className="flex items-center gap-1.5">
<button className="inline-flex items-center justify-center h-7 min-w-[1.75rem] rounded-full bg-violet-50/90 dark:bg-slate-900/80 border border-violet-100/80 dark:border-violet-500/40 text-xs text-violet-500 hover:-translate-y-0.5 hover:shadow-sm active:translate-y-0 transition-all duration-200" type="button">
                  ✨
                </button>
<button className="inline-flex items-center justify-center h-7 min-w-[1.75rem] rounded-full bg-pink-50/90 dark:bg-slate-900/80 border border-pink-100/80 dark:border-pink-500/40 text-xs text-pink-500 hover:-translate-y-0.5 hover:shadow-sm active:translate-y-0 transition-all duration-200" type="button">
                  🤍
                </button>
<button className="inline-flex items-center justify-center h-7 min-w-[1.75rem] rounded-full bg-sky-50/90 dark:bg-slate-900/80 border border-sky-100/80 dark:border-sky-500/40 text-xs text-sky-500 hover:-translate-y-0.5 hover:shadow-sm active:translate-y-0 transition-all duration-200" type="button">
                  🌈
                </button>
</div>
<span className="text-[0.65rem] text-slate-400 dark:text-slate-500">
                gently typing is encouraged, oversharing is welcome ✨
              </span>
</div>

<div className="flex items-end gap-2 md:gap-3 rounded-3xl bg-slate-50/80 dark:bg-slate-900/80 border border-slate-100 dark:border-slate-800 shadow-[0_10px_40px_rgba(15,23,42,0.12)] px-3 md:px-3.5 py-1.5 md:py-2">
<button className="inline-flex items-center justify-center h-9 w-9 rounded-2xl bg-white/80 dark:bg-slate-950/80 border border-slate-100 dark:border-slate-700 shadow-sm hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 transition-all duration-200" type="button">
<iconify-icon className="w-4.5 h-4.5 text-slate-500" icon="solar:smile-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<div className="flex-1 flex flex-col">
<textarea className="w-full bg-transparent resize-none border-none outline-none focus:ring-0 text-sm text-slate-800 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 leading-relaxed" oninput="this.style.height='auto';this.style.height=(this.scrollHeight)+'px';" placeholder="Send a soft message..." rows="1"></textarea>
<div className="flex items-center justify-between gap-2 mt-0.5">
<div className="flex items-center gap-1.5">
<button className="inline-flex items-center justify-center h-7 w-7 rounded-2xl bg-white/70 dark:bg-slate-950/80 border border-slate-100 dark:border-slate-800 shadow-sm hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 transition-all duration-200" type="button">
<iconify-icon className="w-3.5 h-3.5 text-slate-500" icon="solar:paperclip-2-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<button className="inline-flex items-center justify-center h-7 w-7 rounded-2xl bg-white/70 dark:bg-slate-950/80 border border-slate-100 dark:border-slate-800 shadow-sm hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 transition-all duration-200" type="button">
<iconify-icon className="w-3.5 h-3.5 text-slate-500" icon="solar:image-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<button className="hidden sm:inline-flex items-center justify-center h-7 w-7 rounded-2xl bg-white/70 dark:bg-slate-950/80 border border-slate-100 dark:border-slate-800 shadow-sm hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 transition-all duration-200" type="button">
<iconify-icon className="w-3.5 h-3.5 text-slate-500" icon="solar:microphone-2-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
<div className="flex items-center gap-1.5">
<span className="text-[0.65rem] text-slate-400 dark:text-slate-500 mr-1 hidden md:inline">
                      press Enter to send
                    </span>
<button className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-violet-400 via-sky-400 to-emerald-400 text-xs font-semibold tracking-tight text-white shadow-md px-3.5 py-1.5 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200" type="button">
<span>Send</span>
<iconify-icon className="w-3.5 h-3.5" icon="solar:paperplane-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</footer>
</main>
</div>
</div>

<div className="hidden">

</div>

    </>
  );
}
