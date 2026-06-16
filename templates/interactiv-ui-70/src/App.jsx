import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Lucide Icons
        lucide.createIcons();

        // Playback Logic
        document.addEventListener('DOMContentLoaded', () => {
            const cards = document.querySelectorAll('.card-component');

            cards.forEach(card => {
                const video = card.querySelector('video');
                
                if (video) {
                    // Click handler for both mobile and desktop
                    card.addEventListener('click', (e) => {
                        e.preventDefault();
                        
                        if (video.paused) {
                            // Reset other videos
                            document.querySelectorAll('video').forEach(v => {
                                if(v !== video) {
                                    v.pause();
                                    v.closest('.card-component').classList.remove('playing');
                                }
                            });

                            video.play();
                            card.classList.add('playing');
                        } else {
                            video.pause();
                            card.classList.remove('playing');
                        }
                    });

                    video.addEventListener('ended', () => {
                        card.classList.remove('playing');
                    });
                }
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl mx-auto">

<div className="card-component group relative flex flex-col gap-2 p-2 bg-[#111111] rounded-[20px] border border-zinc-800 hover:border-zinc-700 transition-colors duration-300 cursor-pointer">

<div className="relative w-full aspect-[4/3] bg-zinc-900/50 rounded-xl overflow-hidden border border-white/5">

<video className="w-full h-full object-cover opacity-60 mix-blend-screen group-hover:opacity-80 transition-opacity duration-500" loop="" muted="" playsinline="">
<source src="https://cdn.coverr.co/videos/coverr-typing-code-on-a-monitor-4638/1080p.mp4" type="video/mp4"/>
</video>

<div className="absolute inset-0 p-6 flex flex-col justify-center pointer-events-none">
<div className="space-y-2 opacity-50 blur-[0.5px]">
<div className="h-2 w-3/4 bg-zinc-700 rounded-full"></div>
<div className="h-2 w-full bg-zinc-700 rounded-full"></div>
<div className="h-2 w-5/6 bg-zinc-700 rounded-full"></div>
<div className="h-2 w-4/5 bg-zinc-700 rounded-full"></div>
</div>

<div className="absolute bottom-6 left-6 right-6 h-12 bg-zinc-900/80 backdrop-blur-md rounded-lg border border-white/10 flex items-center justify-center px-4">
<div className="flex items-end gap-[2px] h-4">
<div className="w-[2px] h-2 bg-red-500 rounded-full animate-pulse"></div>
<div className="w-[2px] h-3 bg-zinc-600 rounded-full"></div>
<div className="w-[2px] h-4 bg-zinc-600 rounded-full"></div>
<div className="w-[2px] h-2 bg-zinc-600 rounded-full"></div>
<div className="w-[2px] h-3 bg-zinc-600 rounded-full"></div>
<div className="w-[2px] h-2 bg-zinc-600 rounded-full"></div>
</div>
</div>
</div>

<div className="absolute top-3 right-3 flex items-center justify-center w-6 h-6 rounded-full bg-black/40 border border-white/10 backdrop-blur-sm">
<span className="text-[10px] font-semibold text-zinc-400">$</span>
</div>
</div>

<div className="flex items-center justify-between px-1.5 pb-1">
<h3 className="text-base font-semibold text-zinc-100 tracking-tight">Anime js scrollbar</h3>
<span className="text-xs text-zinc-500 font-medium">skiper1</span>
</div>
</div>

<div className="card-component group relative flex flex-col gap-2 p-2 bg-[#111111] rounded-[20px] border border-zinc-800 hover:border-zinc-700 transition-colors duration-300 cursor-pointer">

<div className="relative w-full aspect-[4/3] bg-[#1A1A1A] rounded-xl overflow-hidden border border-white/5 flex items-center justify-center">

<video className="absolute inset-0 w-full h-full object-cover opacity-0 group-[.playing]:opacity-100 transition-opacity duration-500" loop="" muted="" playsinline="">
<source src="https://cdn.coverr.co/videos/coverr-walking-in-a-forest-4433/1080p.mp4" type="video/mp4"/>
</video>

<div className="absolute z-10 bg-black rounded-[2rem] px-1 py-1 flex items-center gap-4 shadow-2xl border border-zinc-800/50 scale-90 md:scale-100 transition-transform duration-300">
<div className="relative w-12 h-12 rounded-full overflow-hidden bg-zinc-800 shrink-0">
<img alt="Album" className="w-full h-full object-cover opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 flex items-center justify-center bg-black/20">
<div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></div>
</div>
</div>
<div className="flex flex-col pr-6">
<span className="text-[10px] font-semibold text-red-500 tracking-wider mb-0.5">0:02</span>
<span className="text-xs font-medium text-white tracking-tight whitespace-nowrap">Recording Saved</span>
</div>
<div className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center mr-1">
<i className="w-3 h-3 text-zinc-400" data-lucide="mic"></i>
</div>
</div>

<div className="absolute top-3 right-3 flex items-center justify-center w-6 h-6 rounded-full bg-black/40 border border-white/10 backdrop-blur-sm z-20">
<span className="text-[10px] font-semibold text-zinc-400">$</span>
</div>
</div>

<div className="flex items-center justify-between px-1.5 pb-1">
<h3 className="text-base font-semibold text-zinc-100 tracking-tight">Dynamic island</h3>
<span className="text-xs text-zinc-500 font-medium">skiper2</span>
</div>
</div>

<div className="card-component group relative flex flex-col gap-2 p-2 bg-[#111111] rounded-[20px] border border-zinc-800 hover:border-zinc-700 transition-colors duration-300 cursor-pointer">

<div className="relative w-full aspect-[4/3] bg-white rounded-xl overflow-hidden border border-white/5 group">

<video className="absolute inset-0 w-full h-full object-cover z-0 opacity-0 group-[.playing]:opacity-100 transition-opacity duration-300" loop="" muted="" playsinline="">
<source src="https://cdn.coverr.co/videos/coverr-scroll-through-mobile-app-4636/1080p.mp4" type="video/mp4"/>
</video>

<div className="absolute inset-0 grid grid-cols-4 gap-4 p-6 bg-white z-10 group-[.playing]:opacity-0 transition-opacity duration-300 pointer-events-none">

<div className="aspect-square flex items-center justify-center"><span className="text-2xl filter drop-shadow-md">🏰</span></div>
<div className="aspect-square flex items-center justify-center"><span className="text-2xl filter drop-shadow-md">🧥</span></div>
<div className="aspect-square flex items-center justify-center"><span className="text-2xl filter drop-shadow-md">📦</span></div>
<div className="aspect-square flex items-center justify-center"><span className="text-2xl filter drop-shadow-md">🍝</span></div>

<div className="aspect-square flex items-center justify-center"><span className="text-2xl filter drop-shadow-md">🐠</span></div>
<div className="aspect-square flex items-center justify-center"><span className="text-2xl filter drop-shadow-md">⛳</span></div>
<div className="aspect-square flex items-center justify-center"><span className="text-2xl filter drop-shadow-md">🥚</span></div>
<div className="aspect-square flex items-center justify-center"><span className="text-2xl filter drop-shadow-md">🔫</span></div>

<div className="aspect-square flex items-center justify-center"><span className="text-2xl filter drop-shadow-md">🧊</span></div>
<div className="aspect-square flex items-center justify-center"><span className="text-2xl filter drop-shadow-md">🛡️</span></div>
<div className="aspect-square flex items-center justify-center"><span className="text-2xl filter drop-shadow-md">🍬</span></div>
<div className="aspect-square flex items-center justify-center"><span className="text-2xl filter drop-shadow-md">🗑️</span></div>
</div>

<div className="absolute top-3 right-3 flex items-center justify-center w-6 h-6 rounded-full bg-white border border-zinc-200 shadow-sm z-20">
<span className="text-[10px] font-semibold text-zinc-900">$</span>
</div>
</div>

<div className="flex items-center justify-between px-1.5 pb-1">
<h3 className="text-base font-semibold text-zinc-100 tracking-tight">Things drag and scroll</h3>
<span className="text-xs text-zinc-500 font-medium">skiper5</span>
</div>
</div>
</div>


    </>
  );
}
