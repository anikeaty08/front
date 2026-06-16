import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      const profileToggle = document.getElementById("profile-toggle");
      const profilePanel = document.getElementById("profile-panel");
      const profileClose = document.getElementById("profile-close");

      if (profileToggle && profilePanel && profileClose) {
        profileToggle.addEventListener("click", () => {
          profilePanel.classList.remove("hidden");
        });

        profileClose.addEventListener("click", () => {
          profilePanel.classList.add("hidden");
        });

        profilePanel.addEventListener("click", (e) => {
          if (e.target === profilePanel) {
            profilePanel.classList.add("hidden");
          }
        });
      }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="flex-1 flex flex-col bg-slate-950">

<header className="w-full border-b border-slate-800/80 bg-slate-950/80 backdrop-blur">
<div className="max-w-7xl mx-auto flex items-center justify-between gap-4 px-4 sm:px-6 lg:px-8 py-3">

<div className="flex items-center gap-4">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-md bg-gradient-to-tr from-violet-500 via-sky-500 to-emerald-400 flex items-center justify-center text-xs font-semibold tracking-tight uppercase">
<span>Ps</span>
</div>
<span className="hidden sm:inline-block text-base font-semibold tracking-tight text-slate-50">
                PulseStream
              </span>
</div>
<div className="hidden md:flex items-center relative">
<span className="iconify text-slate-400 absolute left-3" data-height="16" data-icon="lucide:search" data-width="16" style={{strokeWidth: '1.5'}}></span>
<input className="pl-9 pr-3 py-1.5 rounded-md bg-slate-900/70 border border-slate-800/80 focus:border-violet-500/80 focus:outline-none focus:ring-0 text-sm text-slate-100 placeholder:text-slate-500 min-w-[18rem]" placeholder="Search creators, games, categories" type="text"/>
</div>
</div>

<nav className="hidden lg:flex items-center gap-6 text-sm text-slate-300">
<button className="inline-flex items-center gap-2 text-slate-100 font-medium tracking-tight">
<span className="iconify" data-height="16" data-icon="lucide:zap" data-width="16" style={{strokeWidth: '1.5'}}></span>
<span>Following</span>
</button>
<button className="inline-flex items-center gap-2 hover:text-slate-50 transition-colors">
<span className="iconify" data-height="16" data-icon="lucide:globe-2" data-width="16" style={{strokeWidth: '1.5'}}></span>
<span>Browse</span>
</button>
<button className="inline-flex items-center gap-2 hover:text-slate-50 transition-colors">
<span className="iconify" data-height="16" data-icon="lucide:gamepad-2" data-width="16" style={{strokeWidth: '1.5'}}></span>
<span>Esports</span>
</button>
<button className="inline-flex items-center gap-2 hover:text-slate-50 transition-colors">
<span className="iconify" data-height="16" data-icon="lucide:clapperboard" data-width="16" style={{strokeWidth: '1.5'}}></span>
<span>IRL</span>
</button>
</nav>

<div className="flex items-center gap-3">
<button className="inline-flex items-center justify-center h-9 w-9 rounded-full border border-slate-800/80 bg-slate-950/90 hover:bg-slate-900 transition-colors">
<span className="iconify text-slate-300" data-height="16" data-icon="lucide:bell" data-width="16" style={{strokeWidth: '1.5'}}></span>
</button>
<button className="hidden sm:inline-flex items-center gap-2 border border-violet-500/80 text-violet-100 bg-violet-500/10 hover:bg-violet-500/20 rounded-md px-3 py-1.5 text-sm font-medium tracking-tight transition-colors">
<span className="iconify" data-height="16" data-icon="lucide:radio" data-width="16" style={{strokeWidth: '1.5'}}></span>
<span>Go Live</span>
</button>

<button className="h-8 w-8 rounded-full bg-slate-800 flex items-center justify-center text-xs font-medium tracking-tight border border-slate-700/80 hover:bg-slate-700/80 transition-colors" id="profile-toggle">
<span>AK</span>
</button>
</div>
</div>
</header>

<main className="flex-1 flex overflow-hidden">

<aside className="hidden md:flex w-60 xl:w-64 border-r border-slate-800/80 bg-slate-950/90 flex-col overflow-hidden">
<div className="flex items-center justify-between px-3 pt-3 pb-2">
<h2 className="text-sm font-semibold tracking-tight text-slate-50">Following</h2>
<button className="text-[0.7rem] text-slate-400 hover:text-slate-200 transition-colors">
              See all
            </button>
</div>
<div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-800 scrollbar-transparent">
<ul className="space-y-1 px-2 pb-4">

<li>
<button className="w-full flex items-center gap-2 rounded-md px-2 py-1.5 hover:bg-slate-900/80 transition-colors">
<div className="relative">
<div className="h-7 w-7 rounded-full bg-gradient-to-tr from-fuchsia-500 to-violet-500 flex items-center justify-center text-[0.65rem] font-medium tracking-tight">
<span>NY</span>
</div>
<span className="absolute -bottom-0.5 -right-0 h-2 w-2 rounded-full bg-emerald-400 ring-2 ring-slate-950"></span>
</div>
<div className="flex-1 flex flex-col items-start">
<span className="text-xs font-medium text-slate-100">NightlyYuki</span>
<span className="text-[0.7rem] text-slate-400">Valorant</span>
</div>
<span className="text-[0.7rem] text-emerald-400 ml-auto">
                    3.2K
                  </span>
</button>
</li>
<li>
<button className="w-full flex items-center gap-2 rounded-md px-2 py-1.5 hover:bg-slate-900/80 transition-colors">
<div className="relative">
<div className="h-7 w-7 rounded-full bg-gradient-to-tr from-sky-500 to-cyan-400 flex items-center justify-center text-[0.65rem] font-medium tracking-tight">
<span>FT</span>
</div>
<span className="absolute -bottom-0.5 -right-0 h-2 w-2 rounded-full bg-emerald-400 ring-2 ring-slate-950"></span>
</div>
<div className="flex-1 flex flex-col items-start">
<span className="text-xs font-medium text-slate-100">FrostTech</span>
<span className="text-[0.7rem] text-slate-400">Software &amp; Dev</span>
</div>
<span className="text-[0.7rem] text-emerald-400 ml-auto">
                    820
                  </span>
</button>
</li>
<li>
<button className="w-full flex items-center gap-2 rounded-md px-2 py-1.5 hover:bg-slate-900/80 transition-colors">
<div className="relative">
<div className="h-7 w-7 rounded-full bg-gradient-to-tr from-orange-500 to-rose-500 flex items-center justify-center text-[0.65rem] font-medium tracking-tight">
<span>GM</span>
</div>
<span className="absolute -bottom-0.5 -right-0 h-2 w-2 rounded-full bg-rose-500 ring-2 ring-slate-950"></span>
</div>
<div className="flex-1 flex flex-col items-start">
<span className="text-xs font-medium text-slate-100">GrindMode</span>
<span className="text-[0.7rem] text-slate-400">Just Chatting</span>
</div>
<span className="text-[0.7rem] text-emerald-400 ml-auto">
                    12.4K
                  </span>
</button>
</li>
<div className="pt-3 pb-1 px-1 text-[0.7rem] uppercase tracking-tight text-slate-500 font-medium">
                Recommended
              </div>
<li>
<button className="w-full flex items-center gap-2 rounded-md px-2 py-1.5 hover:bg-slate-900/80 transition-colors">
<div className="h-7 w-7 rounded-full bg-slate-800 flex items-center justify-center text-[0.65rem] font-medium tracking-tight">
<span>RX</span>
</div>
<div className="flex-1 flex flex-col items-start">
<span className="text-xs font-medium text-slate-100">RogueX</span>
<span className="text-[0.7rem] text-slate-400">Apex Legends</span>
</div>
<span className="text-[0.7rem] text-emerald-400 ml-auto">
                    540
                  </span>
</button>
</li>
<li>
<button className="w-full flex items-center gap-2 rounded-md px-2 py-1.5 hover:bg-slate-900/80 transition-colors">
<div className="h-7 w-7 rounded-full bg-slate-800 flex items-center justify-center text-[0.65rem] font-medium tracking-tight">
<span>LK</span>
</div>
<div className="flex-1 flex flex-col items-start">
<span className="text-xs font-medium text-slate-100">LofiKitsune</span>
<span className="text-[0.7rem] text-slate-400">Music</span>
</div>
<span className="text-[0.7rem] text-emerald-400 ml-auto">
                    1.1K
                  </span>
</button>
</li>
</ul>
</div>
</aside>

<section className="flex-1 flex flex-col overflow-hidden">

<div className="relative bg-slate-900 border-b border-slate-800/80">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
<div className="aspect-video w-full rounded-lg bg-slate-900 overflow-hidden relative">

<div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950">
<div className="absolute inset-0 opacity-70 mix-blend-screen bg-[radial-gradient(circle_at_top,_#4f46e5_0,_transparent_50%),radial-gradient(circle_at_bottom,_#22c55e_0,_transparent_45%)]"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0,_rgba(148,163,184,0.3)_0,_transparent_50%)]"></div>
<div className="absolute inset-0 flex flex-col justify-between p-4 sm:p-6">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-slate-950/80 border border-slate-700/80 flex items-center justify-center text-[0.65rem] font-medium tracking-tight text-slate-100">
<span>FT</span>
</div>
<div className="flex flex-col">
<span className="text-sm sm:text-base font-semibold tracking-tight text-slate-50">
                            FrostTech
                          </span>
<span className="text-xs text-slate-300">
                            Building a Live Streaming Platform in React
                          </span>
</div>
</div>
<div className="hidden sm:flex items-center gap-2">
<span className="inline-flex items-center gap-1.5 rounded-full bg-rose-500/20 text-rose-200 border border-rose-500/80 px-2 py-0.5 text-[0.7rem] font-medium tracking-tight">
<span className="iconify" data-height="12" data-icon="lucide:radio" data-width="12" style={{strokeWidth: '1.5'}}></span>
<span>LIVE</span>
</span>
<span className="inline-flex items-center gap-1.5 rounded-full bg-slate-950/70 text-slate-200 border border-slate-700/80 px-2 py-0.5 text-[0.7rem]">
<span className="iconify text-emerald-400" data-height="12" data-icon="lucide:users" data-width="12" style={{strokeWidth: '1.5'}}></span>
<span>2,341 watching</span>
</span>
</div>
</div>
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
<div className="text-xs sm:text-sm text-slate-200 max-w-md">
<p className="font-medium mb-1">
                          Live coding: chat-driven feature requests, Q&amp;A, and architecture talk.
                        </p>
<p className="text-slate-300">
                          Topic: scalable chat, low-latency video, moderation, and overlays.
                        </p>
</div>
<div className="flex items-center gap-2 sm:gap-3">
<button className="inline-flex items-center gap-1.5 rounded-md bg-slate-950/80 border border-slate-700/80 hover:bg-slate-900/90 text-slate-100 px-2.5 sm:px-3 py-1.5 text-xs sm:text-sm font-medium tracking-tight transition-colors">
<span className="iconify" data-height="14" data-icon="lucide:heart" data-width="14" style={{strokeWidth: '1.5'}}></span>
<span>Follow</span>
</button>
<button className="inline-flex items-center gap-1.5 rounded-md bg-violet-500 hover:bg-violet-400 text-slate-950 px-2.5 sm:px-3 py-1.5 text-xs sm:text-sm font-medium tracking-tight transition-colors">
<span className="iconify" data-height="14" data-icon="lucide:thumbs-up" data-width="14" style={{strokeWidth: '1.5'}}></span>
<span>React</span>
</button>
<button className="inline-flex items-center gap-1.5 rounded-md bg-amber-400/90 hover:bg-amber-300 text-slate-950 px-2.5 sm:px-3 py-1.5 text-xs sm:text-sm font-medium tracking-tight transition-colors">
<span className="iconify" data-height="14" data-icon="lucide:coins" data-width="14" style={{strokeWidth: '1.5'}}></span>
<span>Support</span>
</button>
</div>
</div>
</div>
</div>

<div className="absolute inset-x-0 bottom-0 p-2 sm:p-3 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent">
<div className="flex items-center justify-between gap-3">
<div className="flex items-center gap-3">
<button className="h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-slate-950/80 border border-slate-700/80 flex items-center justify-center hover:bg-slate-900/80 transition-colors">
<span className="iconify text-slate-100" data-height="14" data-icon="lucide:play" data-width="14" style={{strokeWidth: '1.5'}}></span>
</button>
<div className="hidden sm:flex items-center gap-2 text-[0.7rem] text-slate-200">
<span>02:43:17</span>
<span className="text-slate-500">•</span>
<span>Live</span>
</div>
</div>
<div className="flex-1 hidden sm:flex items-center gap-2">
<div className="h-1.5 rounded-full bg-slate-800 overflow-hidden flex-1">
<div className="h-full w-2/3 bg-gradient-to-r from-emerald-400 via-sky-400 to-violet-500"></div>
</div>
</div>
<div className="flex items-center gap-2 sm:gap-3 text-[0.7rem] sm:text-xs text-slate-200">
<button className="inline-flex items-center justify-center h-7 w-7 rounded-full bg-slate-950/80 border border-slate-700/80 hover:bg-slate-900/80 transition-colors">
<span className="iconify text-slate-200" data-height="14" data-icon="lucide:volume-2" data-width="14" style={{strokeWidth: '1.5'}}></span>
</button>
<button className="hidden sm:inline-flex items-center justify-center h-7 w-7 rounded-full bg-slate-950/80 border border-slate-700/80 hover:bg-slate-900/80 transition-colors">
<span className="iconify text-slate-200" data-height="14" data-icon="lucide:settings-2" data-width="14" style={{strokeWidth: '1.5'}}></span>
</button>
<button className="inline-flex items-center justify-center h-7 w-7 rounded-md bg-slate-950/80 border border-slate-700/80 hover:bg-slate-900/80 transition-colors">
<span className="iconify text-slate-200" data-height="14" data-icon="lucide:maximize-2" data-width="14" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
</div>
</div>
</div>

<div className="mt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
<div>
<h1 className="text-lg sm:text-xl font-semibold tracking-tight text-slate-50">
                    Building a Live Video Streaming Platform From Scratch
                  </h1>
<div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-slate-300">
<span>@FrostTech</span>
<span className="text-slate-600">•</span>
<span>Software &amp; Dev</span>
<span className="text-slate-600">•</span>
<span>EN</span>
<span className="inline-flex items-center gap-1 rounded-full bg-slate-900/90 border border-slate-800/90 px-2 py-0.5 text-[0.7rem]">
<span className="iconify text-rose-400" data-height="12" data-icon="lucide:flame" data-width="12" style={{strokeWidth: '1.5'}}></span>
<span>Trending</span>
</span>
</div>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1.5 rounded-md bg-slate-900/80 border border-slate-800/80 hover:bg-slate-800/90 px-2.5 py-1.5 text-xs text-slate-200 transition-colors">
<span className="iconify" data-height="14" data-icon="lucide:share-2" data-width="14" style={{strokeWidth: '1.5'}}></span>
<span>Share</span>
</button>
<button className="inline-flex items-center gap-1.5 rounded-md bg-slate-900/80 border border-slate-800/80 hover:bg-slate-800/90 px-2.5 py-1.5 text-xs text-slate-200 transition-colors">
<span className="iconify" data-height="14" data-icon="lucide:bookmark" data-width="14" style={{strokeWidth: '1.5'}}></span>
<span>Save</span>
</button>
<button className="inline-flex items-center gap-1.5 rounded-md bg-slate-900/80 border border-emerald-500/80 text-emerald-100 hover:bg-emerald-500/10 px-2.5 py-1.5 text-xs font-medium tracking-tight transition-colors">
<span className="iconify" data-height="14" data-icon="lucide:badge-check" data-width="14" style={{strokeWidth: '1.5'}}></span>
<span>Subscribe</span>
</button>
</div>
</div>
</div>
</div>

<div className="flex-1 flex overflow-hidden">
<div className="flex-1 flex flex-col overflow-hidden">

<div className="border-b border-slate-800/80 bg-slate-950/90">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center gap-4 text-xs sm:text-sm text-slate-400">
<button className="inline-flex items-center gap-1 border-b-2 border-violet-500 text-slate-100 py-2">
<span className="iconify" data-height="14" data-icon="lucide:message-circle" data-width="14" style={{strokeWidth: '1.5'}}></span>
<span>About</span>
</button>
<button className="inline-flex items-center gap-1 py-2 hover:text-slate-100 transition-colors">
<span className="iconify" data-height="14" data-icon="lucide:list-video" data-width="14" style={{strokeWidth: '1.5'}}></span>
<span>Videos</span>
</button>
<button className="inline-flex items-center gap-1 py-2 hover:text-slate-100 transition-colors">
<span className="iconify" data-height="14" data-icon="lucide:calendar-clock" data-width="14" style={{strokeWidth: '1.5'}}></span>
<span>Schedule</span>
</button>
<button className="inline-flex items-center gap-1 py-2 hover:text-slate-100 transition-colors">
<span className="iconify" data-height="14" data-icon="lucide:medal" data-width="14" style={{strokeWidth: '1.5'}}></span>
<span>Rewards</span>
</button>
</div>
</div>
</div>

<div className="flex-1 overflow-y-auto bg-slate-950">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5 space-y-4">
<section>
<h3 className="text-sm font-semibold tracking-tight text-slate-50 mb-2">
                      Stream details
                    </h3>
<div className="text-sm text-slate-200 space-y-2">
<p>
                        Today we are designing and prototyping a full live streaming platform interface: player controls, chat, reactions, and creator tools. We will walk through the architecture that powers low-latency video and scalable real-time chat.
                      </p>
<p className="text-slate-300">
                        Stack overview: WebRTC for ingestion, HLS for playback, WebSocket chat, and edge caching for global viewers.
                      </p>
</div>
<div className="mt-3 flex flex-wrap gap-2 text-[0.7rem] text-slate-200">
<span className="inline-flex items-center gap-1 rounded-full bg-slate-900/80 border border-slate-800/80 px-2 py-0.5">
<span className="iconify text-sky-400" data-height="12" data-icon="lucide:code-2" data-width="12" style={{strokeWidth: '1.5'}}></span>
<span>TypeScript</span>
</span>
<span className="inline-flex items-center gap-1 rounded-full bg-slate-900/80 border border-slate-800/80 px-2 py-0.5">
<span className="iconify text-emerald-400" data-height="12" data-icon="lucide:server" data-width="12" style={{strokeWidth: '1.5'}}></span>
<span>Edge</span>
</span>
<span className="inline-flex items-center gap-1 rounded-full bg-slate-900/80 border border-slate-800/80 px-2 py-0.5">
<span className="iconify text-violet-400" data-height="12" data-icon="lucide:radar" data-width="12" style={{strokeWidth: '1.5'}}></span>
<span>Low latency</span>
</span>
</div>
</section>
<section>
<h3 className="text-sm font-semibold tracking-tight text-slate-50 mb-2">
                      Recent streams
                    </h3>
<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">

<article className="group rounded-lg border border-slate-800/80 bg-slate-950/90 hover:border-slate-700 hover:bg-slate-900/80 transition-colors overflow-hidden">
<div className="aspect-video bg-slate-900 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-tr from-slate-900 via-slate-900 to-slate-950"></div>
<span className="absolute left-2 top-2 inline-flex items-center gap-1 rounded-full bg-slate-950/80 border border-slate-700/80 px-1.5 py-0.5 text-[0.7rem] text-slate-200">
<span className="iconify" data-height="10" data-icon="lucide:rotate-ccw" data-width="10" style={{strokeWidth: '1.5'}}></span>
<span>Replay</span>
</span>
<span className="absolute right-2 bottom-2 text-[0.7rem] bg-slate-950/80 border border-slate-700/80 rounded px-1.5 py-0.5 text-slate-200">
                            1:47:23
                          </span>
</div>
<div className="p-2.5 space-y-1">
<h4 className="text-xs font-medium text-slate-100">
                            Designing Creator Dashboards for Live Streams
                          </h4>
<p className="text-[0.7rem] text-slate-400">
                            9.1K views • 2 days ago
                          </p>
</div>
</article>
<article className="group rounded-lg border border-slate-800/80 bg-slate-950/90 hover:border-slate-700 hover:bg-slate-900/80 transition-colors overflow-hidden">
<div className="aspect-video bg-slate-900 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-tr from-slate-900 via-slate-900 to-slate-950"></div>
<span className="absolute left-2 top-2 inline-flex items-center gap-1 rounded-full bg-slate-950/80 border border-slate-700/80 px-1.5 py-0.5 text-[0.7rem] text-slate-200">
<span className="iconify" data-height="10" data-icon="lucide:rotate-ccw" data-width="10" style={{strokeWidth: '1.5'}}></span>
<span>Replay</span>
</span>
<span className="absolute right-2 bottom-2 text-[0.7rem] bg-slate-950/80 border border-slate-700/80 rounded px-1.5 py-0.5 text-slate-200">
                            58:12
                          </span>
</div>
<div className="p-2.5 space-y-1">
<h4 className="text-xs font-medium text-slate-100">
                            Scaling Chat to Millions of Concurrent Users
                          </h4>
<p className="text-[0.7rem] text-slate-400">
                            14.3K views • 1 week ago
                          </p>
</div>
</article>
<article className="group rounded-lg border border-slate-800/80 bg-slate-950/90 hover:border-slate-700 hover:bg-slate-900/80 transition-colors overflow-hidden">
<div className="aspect-video bg-slate-900 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-tr from-slate-900 via-slate-900 to-slate-950"></div>
<span className="absolute left-2 top-2 inline-flex items-center gap-1 rounded-full bg-slate-950/80 border border-slate-700/80 px-1.5 py-0.5 text-[0.7rem] text-slate-200">
<span className="iconify" data-height="10" data-icon="lucide:rotate-ccw" data-width="10" style={{strokeWidth: '1.5'}}></span>
<span>Replay</span>
</span>
<span className="absolute right-2 bottom-2 text-[0.7rem] bg-slate-950/80 border border-slate-700/80 rounded px-1.5 py-0.5 text-slate-200">
                            2:11:09
                          </span>
</div>
<div className="p-2.5 space-y-1">
<h4 className="text-xs font-medium text-slate-100">
                            Creator Monetization: Subs, Donations, and Boosts
                          </h4>
<p className="text-[0.7rem] text-slate-400">
                            6.4K views • 3 weeks ago
                          </p>
</div>
</article>
</div>
</section>
</div>
</div>
</div>

<aside className="w-72 xl:w-80 border-l border-slate-800/80 bg-slate-950/90 flex flex-col">

<div className="flex items-center justify-between px-3 py-2 border-b border-slate-800/80">
<div>
<h3 className="text-sm font-semibold tracking-tight text-slate-50">
                    Live chat
                  </h3>
<p className="text-[0.7rem] text-slate-400">
                    Be respectful. Follow community guidelines.
                  </p>
</div>
<button className="inline-flex items-center justify-center h-7 w-7 rounded-full bg-slate-900/90 border border-slate-700/80 hover:bg-slate-800/90 transition-colors">
<span className="iconify text-slate-300" data-height="14" data-icon="lucide:more-horizontal" data-width="14" style={{strokeWidth: '1.5'}}></span>
</button>
</div>

<div className="flex-1 overflow-y-auto px-3 py-2 space-y-2 scrollbar-thin scrollbar-thumb-slate-800 scrollbar-track-transparent text-sm">
<div className="flex items-start gap-2">
<div className="h-6 w-6 rounded-full bg-slate-800 flex items-center justify-center text-[0.6rem] font-medium tracking-tight">
<span>MV</span>
</div>
<div className="flex-1">
<div className="flex items-center gap-1.5">
<span className="text-xs font-medium text-slate-100">
                        matrix_viewer
                      </span>
<span className="text-[0.7rem] text-emerald-400 inline-flex items-center gap-0.5">
<span className="iconify" data-height="10" data-icon="lucide:sparkles" data-width="10" style={{strokeWidth: '1.5'}}></span>
<span>Member</span>
</span>
</div>
<p className="text-xs text-slate-200">
                      This UI is super clean. How do you structure your components for chat?
                    </p>
</div>
</div>
<div className="flex items-start gap-2">
<div className="h-6 w-6 rounded-full bg-slate-800 flex items-center justify-center text-[0.6rem] font-medium tracking-tight">
<span>FT</span>
</div>
<div className="flex-1">
<div className="flex items-center gap-1.5">
<span className="text-xs font-medium text-emerald-400">
                        FrostTech
                      </span>
<span className="text-[0.7rem] text-slate-400">
                        • Host
                      </span>
</div>
<p className="text-xs text-slate-200">
                      Great question! We’ll cover that in the “Scaling chat” section in a few minutes.
                    </p>
</div>
</div>
<div className="flex items-start gap-2">
<div className="h-6 w-6 rounded-full bg-slate-800 flex items-center justify-center text-[0.6rem] font-medium tracking-tight">
<span>JS</span>
</div>
<div className="flex-1">
<div className="flex items-center gap-1.5">
<span className="text-xs font-medium text-slate-100">
                        jsninja
                      </span>
<span className="text-[0.7rem] text-violet-400 inline-flex items-center gap-0.5">
<span className="iconify" data-height="10" data-icon="lucide:badge-check" data-width="10" style={{strokeWidth: '1.5'}}></span>
<span>Sub</span>
</span>
</div>
<p className="text-xs text-slate-200">
                      Can we get the code for the custom player controls after stream?
                    </p>
</div>
</div>
<div className="flex items-start gap-2">
<div className="h-6 w-6 rounded-full bg-slate-800 flex items-center justify-center text-[0.6rem] font-medium tracking-tight">
<span>AL</span>
</div>
<div className="flex-1">
<div className="flex items-center gap-1.5">
<span className="text-xs font-medium text-slate-100">
                        async_lurker
                      </span>
</div>
<p className="text-xs text-slate-200">
                      Lurking and learning. This is exactly what I needed for my thesis.
                    </p>
</div>
</div>
<div className="flex items-start gap-2">
<div className="h-6 w-6 rounded-full bg-slate-800 flex items-center justify-center text-[0.6rem] font-medium tracking-tight">
<span>RN</span>
</div>
<div className="flex-1">
<div className="flex items-center gap-1.5">
<span className="text-xs font-medium text-slate-100">
                        render_now
                      </span>
</div>
<p className="text-xs text-slate-200">
                      Please talk about handling spam and moderation bots 🙏
                    </p>
</div>
</div>
</div>

<div className="border-t border-slate-800/80 bg-slate-950/95 p-2.5 space-y-2">
<div className="flex items-center gap-2 text-[0.7rem] text-slate-400">
<span className="iconify text-emerald-400" data-height="12" data-icon="lucide:shield-check" data-width="12" style={{strokeWidth: '1.5'}}></span>
<span>Slow mode: 3s between messages</span>
</div>
<div className="flex items gap-2">
<div className="flex-1 relative">
<textarea className="w-full resize-none rounded-md bg-slate-950/90 border border-slate-800/90 focus:border-violet-500/80 focus:outline-none focus:ring-0 text-xs text-slate-100 placeholder:text-slate-500 py-1.5 pl-2.5 pr-10" placeholder="Send a message" rows="1"></textarea>
<div className="absolute inset-y-0 right-1 flex items-center gap-1">
<button className="inline-flex items-center justify-center h-6 w-6 rounded-md bg-slate-900/90 border border-slate-700/80 hover:bg-slate-800/90 transition-colors">
<span className="iconify text-slate-300" data-height="12" data-icon="lucide:smile-plus" data-width="12" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
</div>
<button className="inline-flex items-center justify-center h-8 w-8 rounded-md bg-violet-500 hover:bg-violet-400 text-slate-950 transition-colors">
<span className="iconify" data-height="14" data-icon="lucide:send" data-width="14" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
<div className="flex items-center justify-between text-[0.7rem] text-slate-400">
<button className="inline-flex items-center gap-1 hover:text-slate-200 transition-colors">
<span className="iconify" data-height="12" data-icon="lucide:gift" data-width="12" style={{strokeWidth: '1.5'}}></span>
<span>Send support</span>
</button>
<button className="inline-flex items-center gap-1 hover:text-slate-200 transition-colors">
<span className="iconify" data-height="12" data-icon="lucide:filter" data-width="12" style={{strokeWidth: '1.5'}}></span>
<span>Filters</span>
</button>
</div>
</div>
</aside>
</div>
</section>
</main>
</div>

<div className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center z-40 hidden" id="profile-panel">
<div className="w-full max-w-3xl mx-4 bg-slate-950 border border-slate-800/80 rounded-xl shadow-xl overflow-hidden">

<div className="relative h-32 bg-gradient-to-r from-violet-500/40 via-sky-500/30 to-emerald-400/30">
<button className="absolute top-2 right-2 inline-flex items-center justify-center h-7 w-7 rounded-full bg-slate-950/80 border border-slate-700/80 hover:bg-slate-900/90 transition-colors" id="profile-close">
<span className="iconify text-slate-200" data-height="14" data-icon="lucide:x" data-width="14" style={{strokeWidth: '1.5'}}></span>
</button>
<div className="absolute -bottom-8 left-6 flex items-end gap-3">
<div className="h-16 w-16 rounded-full bg-slate-950 border-2 border-slate-900 flex items-center justify-center text-sm font-semibold tracking-tight">
<span>AK</span>
</div>
<div className="pb-2">
<div className="flex items-center gap-2">
<h2 className="text-lg font-semibold tracking-tight text-slate-50">
                  async_kei
                </h2>
<span className="inline-flex items-center gap-1 rounded-full border border-emerald-400/80 bg-emerald-400/10 text-[0.7rem] text-emerald-200 px-1.5 py-0.5">
<span className="iconify" data-height="10" data-icon="lucide:badge-check" data-width="10" style={{strokeWidth: '1.5'}}></span>
<span>Member</span>
</span>
</div>
<p className="text-xs text-slate-300">
                Frontend engineer • loves live coding &amp; design systems
              </p>
</div>
</div>
</div>

<div className="pt-10 px-4 sm:px-6 pb-4 sm:pb-5 space-y-4">

<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
<div className="flex gap-4 text-xs text-slate-300">
<div>
<p className="text-[0.7rem] text-slate-400 uppercase tracking-tight">
                  Following
                </p>
<p className="text-sm font-medium text-slate-100">
                  128
                </p>
</div>
<div>
<p className="text-[0.7rem] text-slate-400 uppercase tracking-tight">
                  Followers
                </p>
<p className="text-sm font-medium text-slate-100">
                  2.4K
                </p>
</div>
<div>
<p className="text-[0.7rem] text-slate-400 uppercase tracking-tight">
                  Watch time
                </p>
<p className="text-sm font-medium text-slate-100">
                  182h
                </p>
</div>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1.5 rounded-md bg-slate-900/80 border border-slate-800/80 hover:bg-slate-800/90 px-2.5 py-1.5 text-xs text-slate-200 transition-colors">
<span className="iconify" data-height="14" data-icon="lucide:settings" data-width="14" style={{strokeWidth: '1.5'}}></span>
<span>Settings</span>
</button>
<button className="inline-flex items-center gap-1.5 rounded-md bg-rose-500/10 border border-rose-500/80 text-rose-100 hover:bg-rose-500/20 px-2.5 py-1.5 text-xs transition-colors">
<span className="iconify" data-height="14" data-icon="lucide:log-out" data-width="14" style={{strokeWidth: '1.5'}}></span>
<span>Sign out</span>
</button>
</div>
</div>

<div className="space-y-3">

<div className="flex items-center gap-4 text-xs text-slate-400 border-b border-slate-800/80">
<button className="inline-flex items-center gap-1 border-b-2 border-violet-500 text-slate-100 py-1.5">
<span className="iconify" data-height="12" data-icon="lucide:user" data-width="12" style={{strokeWidth: '1.5'}}></span>
<span>Overview</span>
</button>
<button className="inline-flex items-center gap-1 py-1.5 hover:text-slate-100 transition-colors">
<span className="iconify" data-height="12" data-icon="lucide:star" data-width="12" style={{strokeWidth: '1.5'}}></span>
<span>Subscriptions</span>
</button>
<button className="inline-flex items-center gap-1 py-1.5 hover:text-slate-100 transition-colors">
<span className="iconify" data-height="12" data-icon="lucide:history" data-width="12" style={{strokeWidth: '1.5'}}></span>
<span>History</span>
</button>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-3">

<div className="md:col-span-2 space-y-3">
<div className="rounded-lg border border-slate-800/80 bg-slate-950/90 p-3">
<h3 className="text-xs font-semibold tracking-tight text-slate-50 mb-1.5">
                    About you
                  </h3>
<p className="text-sm text-slate-200">
                    Watching live coding, design reviews, and product launches. Usually lurking, sometimes asking way too detailed questions.
                  </p>
<div className="mt-2 flex flex-wrap gap-1.5 text-[0.7rem] text-slate-200">
<span className="inline-flex items-center gap-1 rounded-full bg-slate-900/80 border border-slate-800/80 px-2 py-0.5">
<span className="iconify text-sky-400" data-height="10" data-icon="lucide:code-2" data-width="10" style={{strokeWidth: '1.5'}}></span>
<span>Frontend</span>
</span>
<span className="inline-flex items-center gap-1 rounded-full bg-slate-900/80 border border-slate-800/80 px-2 py-0.5">
<span className="iconify text-violet-400" data-height="10" data-icon="lucide:palette" data-width="10" style={{strokeWidth: '1.5'}}></span>
<span>Design</span>
</span>
<span className="inline-flex items-center gap-1 rounded-full bg-slate-900/80 border border-slate-800/80 px-2 py-0.5">
<span className="iconify text-emerald-400" data-height="10" data-icon="lucide:rocket" data-width="10" style={{strokeWidth: '1.5'}}></span>
<span>Launches</span>
</span>
</div>
</div>
<div className="rounded-lg border border-slate-800/80 bg-slate-950/90 p-3">
<h3 className="text-xs font-semibold tracking-tight text-slate-50 mb-1.5">
                    Recently watched creators
                  </h3>
<div className="space-y-1.5 text-xs text-slate-200">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-6 w-6 rounded-full bg-gradient-to-tr from-sky-500 to-cyan-400 flex items-center justify-center text-[0.6rem] font-medium tracking-tight">
<span>FT</span>
</div>
<div>
<p className="font-medium text-slate-100">
                            FrostTech
                          </p>
<p className="text-[0.7rem] text-slate-400">
                            Software &amp; Dev
                          </p>
</div>
</div>
<p className="text-[0.7rem] text-slate-400">
                        12h watched
                      </p>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-6 w-6 rounded-full bg-gradient-to-tr from-fuchsia-500 to-rose-500 flex items-center justify-center text-[0.6rem] font-medium tracking-tight">
<span>NY</span>
</div>
<div>
<p className="font-medium text-slate-100">
                            NightlyYuki
                          </p>
<p className="text-[0.7rem] text-slate-400">
                            Valorant
                          </p>
</div>
</div>
<p className="text-[0.7rem] text-slate-400">
                        4h watched
                      </p>
</div>
</div>
</div>
</div>

<div className="space-y-3">
<div className="rounded-lg border border-slate-800/80 bg-slate-950/90 p-3 space-y-2">
<h3 className="text-xs font-semibold tracking-tight text-slate-50">
                    Quick preferences
                  </h3>
<div className="flex items-center justify-between text-xs text-slate-200">
<span>Dark mode</span>
<button className="relative inline-flex h-4 w-7 items-center rounded-full bg-slate-800">
<span className="inline-block h-3 w-3 transform rounded-full bg-slate-200 translate-x-3"></span>
</button>
</div>
<div className="flex items-center justify-between text-xs text-slate-200">
<span>Mature content</span>
<button className="relative inline-flex h-4 w-7 items-center rounded-full bg-slate-900 border border-slate-700">
<span className="inline-block h-3 w-3 transform rounded-full bg-slate-400 translate-x-0.5"></span>
</button>
</div>
<div className="flex items-center justify-between text-xs text-slate-200">
<span>Chat highlights</span>
<button className="relative inline-flex h-4 w-7 items-center rounded-full bg-violet-500/60">
<span className="inline-block h-3 w-3 transform rounded-full bg-slate-950 translate-x-3"></span>
</button>
</div>
</div>
<div className="rounded-lg border border-slate-800/80 bg-slate-950/90 p-3 space-y-1.5">
<h3 className="text-xs font-semibold tracking-tight text-slate-50">
                    Account
                  </h3>
<p className="text-[0.7rem] text-slate-300">
                    Email: <span className="text-slate-100">async.kei@example.com</span>
</p>
<p className="text-[0.7rem] text-slate-300">
                    Member since <span className="text-slate-100">2022</span>
</p>
<button className="mt-1 inline-flex items-center gap-1.5 rounded-md bg-slate-900/80 border border-slate-800/80 hover:bg-slate-800/90 px-2 py-1 text-[0.7rem] text-slate-200 transition-colors">
<span className="iconify" data-height="12" data-icon="lucide:shield" data-width="12" style={{strokeWidth: '1.5'}}></span>
<span>Security center</span>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>




    </>
  );
}
