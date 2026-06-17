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



      const songUpload = document.getElementById('songUpload');
      const songPlayer = document.getElementById('songPlayer');
      const playSongButton = document.getElementById('playSongButton');
      const playSongLabel = document.getElementById('playSongLabel');

      let hasSong = false;
      let isPlaying = false;

      songUpload.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (!file) return;

        const url = URL.createObjectURL(file);
        songPlayer.src = url;
        hasSong = true;
        isPlaying = false;
        playSongLabel.textContent = 'Play our song';
      });

      playSongButton.addEventListener('click', () => {
        if (!hasSong) {
          songUpload.click();
          return;
        }

        if (isPlaying) {
          songPlayer.pause();
          isPlaying = false;
          playSongLabel.textContent = 'Play our song';
        } else {
          songPlayer.play();
          isPlaying = true;
          playSongLabel.textContent = 'Pause our song';
        }
      });

      songPlayer.addEventListener('ended', () => {
        isPlaying = false;
        playSongLabel.textContent = 'Play our song';
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
      
<div className="w-full max-w-5xl mx-auto flex flex-col">

<header className="relative overflow-hidden rounded-3xl border border-slate-800/80 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-950 shadow-[0_24px_80px_rgba(15,23,42,0.9)] mt-8 mb-8">

<div className="pointer-events-none absolute inset-0 opacity-70 mix-blend-screen" style={{background: 'radial-gradient(circle at 10% 0%, rgba(239,68,68,0.30), transparent 60%), radial-gradient(circle at 90% 100%, rgba(236,72,153,0.25), transparent 60%)'}}></div>
<div className="relative z-10 flex flex-col lg:flex-row items-stretch">

<div className="w-full lg:w-1/2 flex flex-col justify-between p-6 sm:p-10 lg:p-12 gap-10">
<div className="space-y-6">
<div className="inline-flex items-center gap-2 rounded-full border border-slate-700/70 bg-slate-900/70 px-3 py-1.5">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-rose-400/90 shadow-[0_0_8px_rgba(251,113,133,0.8)]"></span>
<span className="text-xs tracking-[0.16em] uppercase text-slate-300/80">A story of us</span>
</div>
<div className="space-y-3">
<h1 className="font-semibold tracking-tight text-3xl sm:text-4xl md:text-5xl text-slate-50">
                  Victoria
                  <span className="align-middle text-base sm:text-lg text-slate-500 mx-1">&amp;</span>
                  Win
                </h1>
<p className="text-base sm:text-lg text-slate-300/90 leading-relaxed max-w-md">
                  Two hearts, one quiet universe. This is our little corner of the world, where every moment we share
                  becomes part of something beautifully, endlessly ours.
                </p>
</div>
<div className="flex flex-wrap items-center gap-4 sm:gap-6">
<div className="flex items-center gap-3">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-rose-500/10 ring-1 ring-rose-400/40">
<svg aria-hidden="true" className="iconify text-rose-300 iconify--lucide" data-height="22" data-icon="lucide:heart" data-width="22" height="22" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676a.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
<div className="space-y-0.5">
<p className="text-xs uppercase tracking-[0.16em] text-slate-400">Since</p>
<p className="text-sm font-medium text-slate-100" style={{}}>June 15, 2025</p>
</div>
</div>
<div className="h-8 w-px bg-slate-700/60 hidden sm:block"></div>
<div className="space-y-1">
<p className="text-xs uppercase tracking-[0.18em] text-slate-400">Location</p>
<p className="text-sm text-slate-200/90">
                    Wherever we are together feels like home.
                  </p>
</div>
</div>
</div>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
<button className="inline-flex items-center gap-2 rounded-full bg-slate-50 text-slate-900 text-sm font-medium tracking-tight px-4 sm:px-5 py-2.5 hover:bg-rose-100 active:bg-rose-200/80 transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="18" data-icon="lucide:sparkles" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path><circle cx="4" cy="20" r="2"></circle></g></svg>
<span>View our story</span>
</button>

<div className="flex flex-col gap-2">
<button className="inline-flex gap-2 sm:px-4 hover:border-rose-300/70 hover:text-rose-100 transition-colors text-sm text-slate-200 bg-slate-900/60 border-slate-600/80 border rounded-full pt-2 pr-3.5 pb-2 pl-3.5 gap-x-2 gap-y-2 items-center" id="playSongButton">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="18" data-icon="lucide:music-2" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g className="" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle className="" cx="8" cy="18" r="4"></circle><path d="M12 18V2l7 4"></path></g></svg>
<span id="playSongLabel">Play our song</span>
</button>
<label className="inline-flex items-center gap-2 text-xs text-slate-400 cursor-pointer hover:text-slate-200" htmlFor="songUpload">
<span className="iconify" data-height="16" data-icon="lucide:upload" data-width="16" style={{strokeWidth: '1.5'}}></span>
<span>Upload an MP3 for our song</span>
</label>
<input accept="audio/mpeg,audio/mp3" className="hidden" id="songUpload" type="file"/>
<audio className="hidden" id="songPlayer"></audio>
</div>
</div>
</div>

<div className="w-full lg:w-1/2 relative">
<div className="absolute inset-0 bg-gradient-to-tl from-rose-500/10 via-transparent to-indigo-400/10 mix-blend-overlay pointer-events-none"></div>
<div className="relative h-full min-h-[18rem] sm:min-h-[22rem] lg:min-h-[24rem] flex items-center justify-center p-5 sm:p-8 lg:p-10">
<div className="grid grid-cols-2 gap-3 sm:gap-4 w-full max-w-md">

<div className="col-span-1 self-end">
<div className="aspect-[4/5] rounded-3xl border border-slate-700/70 bg-slate-900/90 overflow-hidden shadow-[0_18px_50px_rgba(15,23,42,0.9)]">
<div className="h-full w-full bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 flex items-end justify-start p-4 sm:p-5">
<div className="space-y-1">
<p className="text-xs tracking-[0.16em] uppercase text-slate-300/90">Victoria</p>
<p className="text-sm text-slate-200 leading-snug max-w-[10rem]">
                          The way you laugh still feels like the first sunrise.
                        </p>
</div>
</div>
</div>
</div>

<div className="col-span-1 self-start">
<div className="aspect-[4/5] rounded-3xl border border-slate-700/70 bg-slate-900/90 overflow-hidden shadow-[0_18px_50px_rgba(15,23,42,0.9)]">
<div className="h-full w-full bg-gradient-to-tl from-slate-800 via-slate-950 to-slate-900 flex items-start justify-end p-4 sm:p-5">
<div className="text-right space-y-1">
<p className="text-xs tracking-[0.16em] uppercase text-slate-300/90">Win</p>
<p className="text-sm text-slate-200 leading-snug max-w-[10rem] ml-auto">
                          With you, even the quiet moments feel like fireworks.
                        </p>
</div>
</div>
</div>
</div>

<div className="col-span-2">
<div className="rounded-3xl border border-slate-700/80 bg-slate-900/90 backdrop-blur-sm shadow-[0_18px_50px_rgba(15,23,42,0.9)] p-4 sm:p-5 flex flex-col gap-3">
<div className="flex items-center justify-between gap-2">
<div className="flex items-center gap-2.5">
<div className="flex -space-x-2">
<div className="h-8 w-8 rounded-full border border-slate-900/90 bg-gradient-to-br from-rose-400/70 to-rose-500/80 flex items-center justify-center text-[0.7rem] font-semibold tracking-tight text-slate-950">
                            V
                          </div>
<div className="h-8 w-8 rounded-full border border-slate-900/90 bg-gradient-to-br from-indigo-400/70 to-sky-500/80 flex items-center justify-center text-[0.7rem] font-semibold tracking-tight text-slate-950">
                            W
                          </div>
</div>
<div>
<p className="text-xs uppercase tracking-[0.16em] text-slate-400">Our promise</p>
<p className="text-sm text-slate-100">Always, in all ways.</p>
</div>
</div>
<svg aria-hidden="true" className="iconify text-rose-300 iconify--lucide" data-height="24" data-icon="lucide:infinity" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 16c5 0 7-8 12-8a4 4 0 0 1 0 8c-5 0-7-8-12-8a4 4 0 1 0 0 8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="text-sm text-slate-300 leading-relaxed">
                      No matter how ordinary the day, we choose each other, again and again.
                    </p>
</div>
</div>
</div>

<div className="absolute top-4 right-4 sm:top-6 sm:right-6">
<div className="rounded-2xl border border-rose-300/40 bg-slate-900/80 backdrop-blur-md shadow-[0_12px_40px_rgba(251,113,133,0.5)] px-4 py-2.5 flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-rose-200 iconify--lucide" data-height="18" data-icon="lucide:calendar-heart" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12.127 22H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5.125"></path><path d="M14.62 18.8A2.25 2.25 0 1 1 18 15.836a2.25 2.25 0 1 1 3.38 2.966l-2.626 2.856a.998.998 0 0 1-1.507 0zM16 2v4M3 10h18M8 2v4"></path></g></svg>
<div>
<p className="text-[0.7rem] uppercase tracking-[0.18em] text-rose-200/90">Next chapter</p>
<p className="text-xs text-slate-50">Forever, starting now.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</header>

<main className="flex-1 mb-10 space-y-10 sm:space-y-14">

<section className="rounded-3xl border border-slate-800/80 bg-slate-950/80 backdrop-blur-sm p-6 sm:p-8 lg:p-10 space-y-6 sm:space-y-8">
<div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
<div className="space-y-2">
<p className="text-xs uppercase tracking-[0.18em] text-slate-400">Our story</p>
<h2 className="font-semibold tracking-tight text-2xl sm:text-3xl text-slate-50">
                How Victoria met Win
              </h2>
</div>
<div className="text-sm text-slate-300 max-w-sm">
              A collection of tiny moments that somehow turned into everything.
            </div>
</div>
<div className="grid md:grid-cols-[1.4fr,1fr] gap-6 sm:gap-8">

<div className="space-y-6">
<div className="flex gap-4">
<div className="flex flex-col items-center">
<div className="h-2 w-2 rounded-full bg-rose-400 shadow-[0_0_10px_rgba(251,113,133,0.9)]"></div>
<div className="flex-1 w-px bg-slate-700/70 mt-1"></div>
</div>
<div className="pb-4 space-y-1.5">
<p className="text-xs uppercase tracking-[0.18em] text-slate-400">First hello</p>
<p className="text-sm font-medium text-slate-100">A message that changed everything</p>
<p className="text-base text-slate-300 leading-relaxed">
                    It started quietly — a shared joke, a late-night conversation, that feeling of
                    <span className="text-slate-100">“I could talk to you forever.”</span>
</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex flex-col items-center">
<div className="h-2 w-2 rounded-full bg-rose-300"></div>
<div className="flex-1 w-px bg-slate-700/70 mt-1"></div>
</div>
<div className="pb-4 space-y-1.5">
<p className="text-xs uppercase tracking-[0.18em] text-slate-400">First date</p>
<p className="text-sm font-medium text-slate-100">Time disappeared</p>
<p className="text-base text-slate-300 leading-relaxed">
                    The world got quieter, the city lights softer, and all that mattered was the person sitting across the table.
                  </p>
</div>
</div>
<div className="flex gap-4">
<div className="flex flex-col items-center">
<div className="h-2 w-2 rounded-full bg-rose-300"></div>
<div className="flex-1 w-px bg-slate-700/70 mt-1"></div>
</div>
<div className="pb-4 space-y-1.5">
<p className="text-xs uppercase tracking-[0.18em] text-slate-400">Us</p>
<p className="text-sm font-medium text-slate-100">Choosing each other</p>
<p className="text-base text-slate-300 leading-relaxed">
                    Not just in the big moments, but in sleepy mornings, shared playlists, and the comfort of knowing:
                    <span className="text-slate-100">“You’re my favorite place to be.”</span>
</p>
</div>
</div>
</div>

<div className="space-y-4 sm:space-y-5">
<div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 sm:p-5 flex flex-col gap-3">
<div className="flex items-center justify-between gap-2">
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-rose-200 iconify--lucide" data-height="18" data-icon="lucide:quote" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2zM5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<p className="text-xs uppercase tracking-[0.18em] text-slate-400">From Victoria</p>
</div>
<span className="text-[0.7rem] tracking-[0.16em] uppercase text-slate-500">to Win</span>
</div>
<p className="text-base text-slate-200 leading-relaxed">
                  I don’t know what the future looks like, but I know I want your hand in mine for every version of it.
                </p>
</div>
<div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 sm:p-5 flex flex-col gap-3">
<div className="flex items-center justify-between gap-2">
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-indigo-200 iconify--lucide" data-height="18" data-icon="lucide:quote" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2zM5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<p className="text-xs uppercase tracking-[0.18em] text-slate-400">From Win</p>
</div>
<span className="text-[0.7rem] tracking-[0.16em] uppercase text-slate-500">to Victoria</span>
</div>
<p className="text-base text-slate-200 leading-relaxed">
                  You turned ordinary days into a life I never want to pause. You’re my safest place and my favorite adventure.
                </p>
</div>
<div className="rounded-2xl border border-rose-400/40 bg-gradient-to-r from-rose-500/20 via-rose-500/10 to-transparent p-4 sm:p-5 flex items-center justify-between gap-3">
<div>
<p className="text-xs uppercase tracking-[0.18em] text-rose-100/80">Forever note</p>
<p className="text-sm text-rose-50 mt-1">
                    Whatever happens, it’s you and me, on the same side of the story.
                  </p>
</div>
<svg aria-hidden="true" className="iconify text-rose-100 iconify--lucide" data-height="24" data-icon="lucide:heart-handshake" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676a.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052a2.12 2.12 0 0 0-.004-3a2.124 2.124 0 1 0 3-3a2.124 2.124 0 0 0 3.004 0a2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0a2 2 0 0 1 0-2.828l2.823-2.762" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
</div>
</section>

<section className="rounded-3xl border border-slate-800/80 bg-slate-950/70 backdrop-blur-sm p-6 sm:p-8 lg:p-10 space-y-6 sm:space-y-8">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div className="space-y-2">
<p className="text-xs uppercase tracking-[0.18em] text-slate-400">Little snapshots</p>
<h2 className="font-semibold tracking-tight text-2xl sm:text-3xl text-slate-50">
                Our favorite memories
              </h2>
</div>
<div className="flex items-center gap-3 text-sm text-slate-300">
<svg aria-hidden="true" className="iconify text-rose-200 iconify--lucide" data-height="18" data-icon="lucide:camera" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"></path><circle cx="12" cy="13" r="3"></circle></g></svg>
<span>Someday, this will be filled with all our pictures.</span>
</div>
</div>
<div className="grid sm:grid-cols-3 gap-4 sm:gap-5">
<div className="rounded-2xl border border-slate-800 bg-slate-900/80 aspect-[4/3] flex flex-col justify-between p-4">
<div className="flex items-center justify-between gap-2">
<p className="text-xs uppercase tracking-[0.18em] text-slate-400">Late nights</p>
<svg aria-hidden="true" className="iconify text-slate-300 iconify--lucide" data-height="18" data-icon="lucide:moon-star" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M18 5h4m-2-2v4m.985 5.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="text-sm text-slate-200 leading-relaxed">
                Long talks, shared secrets, and “stay a little longer” turning into “it’s already morning.”
              </p>
</div>
<div className="rounded-2xl border border-slate-800 bg-slate-900/80 aspect-[4/3] flex flex-col justify-between p-4">
<div className="flex items-center justify-between gap-2">
<p className="text-xs uppercase tracking-[0.18em] text-slate-400">Tiny adventures</p>
<span className="iconify text-slate-300" data-height="18" data-icon="lucide:map-pin-heart" data-width="18" style={{strokeWidth: '1.5'}}></span>
</div>
<p className="text-sm text-slate-200 leading-relaxed">
                Getting lost in new streets, new cafés, new cities — never lost as long as we’re together.
              </p>
</div>
<div className="rounded-2xl border border-slate-800 bg-slate-900/80 aspect-[4/3] flex flex-col justify-between p-4">
<div className="flex items-center justify-between gap-2">
<p className="text-xs uppercase tracking-[0.18em] text-slate-400">Quiet moments</p>
<svg aria-hidden="true" className="iconify text-slate-300 iconify--lucide" data-height="18" data-icon="lucide:cup-soda" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m6 8l1.75 12.28a2 2 0 0 0 2 1.72h4.54a2 2 0 0 0 2-1.72L18 8M5 8h14"></path><path d="M7 15a6.47 6.47 0 0 1 5 0a6.47 6.47 0 0 0 5 0m-5-7l1-6h2"></path></g></svg>
</div>
<p className="text-sm text-slate-200 leading-relaxed">
                Sharing a playlist, cooking together, or just existing side by side — and that being more than enough.
              </p>
</div>
</div>
</section>
</main>

<footer className="mb-8">
<div className="rounded-3xl border border-slate-800/80 bg-slate-950/90 backdrop-blur-sm py-4 sm:py-5 px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-gradient-to-br from-rose-500/80 to-indigo-500/80 flex items-center justify-center text-[0.75rem] font-semibold tracking-tight text-slate-950">
              vw
            </div>
<div>
<p className="text-xs uppercase tracking-[0.18em] text-slate-400">Victoria &amp; Win</p>
<p className="text-sm text-slate-200">Made with a lot of love and a little stardust.</p>
</div>
</div>
<div className="flex items-center gap-3 text-xs text-slate-400">
<svg aria-hidden="true" className="iconify text-rose-300 iconify--lucide" data-height="16" data-icon="lucide:heart" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676a.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span>Wherever life takes us, we’ll meet there together.</span>
</div>
</div>
</footer>
</div>


    </>
  );
}
