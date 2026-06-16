import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}


!function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();


    lucide.createIcons();

    // Video functionality
    let isPlaying = false;
    let currentTime = 12 * 60 + 34; // 12:34
    const totalTime = 29 * 60 + 45; // 29:45
    
    const playBtn = document.getElementById('playBtn');
    const progress = document.getElementById('progress');
    const timeDisplay = document.getElementById('time');
    
    // Play/Pause functionality
    playBtn.addEventListener('click', () => {
      isPlaying = !isPlaying;
      const icon = playBtn.querySelector('i');
      if (isPlaying) {
        icon.setAttribute('data-lucide', 'pause');
        playBtn.innerHTML = '<i data-lucide="pause" class="h-5 w-5 text-white stroke-[1.5]"></i>';
      } else {
        icon.setAttribute('data-lucide', 'play');
        playBtn.innerHTML = '<i data-lucide="play" class="h-5 w-5 text-white stroke-[1.5]"></i>';
      }
      lucide.createIcons();
    });

    // Progress simulation
    setInterval(() => {
      if (isPlaying && currentTime < totalTime) {
        currentTime++;
        const percentage = (currentTime / totalTime) * 100;
        progress.style.width = percentage + '%';
        
        const minutes = Math.floor(currentTime / 60);
        const seconds = currentTime % 60;
        timeDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
      }
    }, 1000);

    // Progress bar click to seek
    progress.parentElement.addEventListener('click', (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const percentage = (clickX / rect.width) * 100;
      currentTime = Math.floor((percentage / 100) * totalTime);
      progress.style.width = percentage + '%';
      
      const minutes = Math.floor(currentTime / 60);
      const seconds = currentTime % 60;
      timeDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    });

    // Smooth scrolling for video list
    document.querySelectorAll('a[href="#"]').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
      });
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      <div className="aura-background-component fixed top-0 w-full h-screen -z-10"><div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="p7Ff6pfTrb5Gs59C7nLC"></div></div>
<div className="flex w-full max-w-[1400px] bg-[radial-gradient(circle_at_top,var(--tw-gradient-stops))] from-[#2E335A]/60 to-[#1C1B33]/20 border-slate-50/5 border rounded-lg mt-40 mr-auto mb-40 ml-auto backdrop-blur-xl">

<aside className="sticky top-0 hidden h-[100dvh] w-20 flex-col gap-3 xl:flex bg-white/5 border-white/10 rounded-l-lg border-t border-r pt-5 pr-3 pb-5 pl-3 backdrop-blur items-center">
<div className="absolute top-3 left-3 flex items-center gap-1.5">
<div className="w-3 h-3 bg-red-500 rounded-full"></div>
<div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
<div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
</div>
<div className="flex mt-8 mb-2 items-center justify-center">
<div className="group relative inline-flex size-11 hover:from-white/20 hover:to-white/10 text-slate-200 bg-gradient-to-b from-white/10 to-white/5 border-slate-50/5 border rounded-full items-center justify-center">
<svg className="lucide lucide-sparkles size-5 text-indigo-300" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
</div>
<nav className="flex flex-col gap-2 space-y-4 items-center">
<button className="group relative inline-flex size-11 hover:from-white/20 hover:to-white/10 text-slate-200 bg-gradient-to-b from-white/10 to-white/5 border-slate-50/5 border rounded-full items-center justify-center">
<svg className="lucide lucide-home size-5" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
<span className="absolute -right-3 -top-3 inline-flex h-6 items-center text-[10px] font-medium bg-indigo-500/90 rounded-full pr-1.5 pl-1.5 shadow">New</span>
</button>
<button className="group relative inline-flex size-11 hover:from-white/20 hover:to-white/10 text-slate-200 bg-gradient-to-b from-white/10 to-white/5 border-slate-50/5 border rounded-full items-center justify-center">
<svg className="lucide lucide-music size-5" data-lucide="music" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>
</button>
<button className="group relative inline-flex size-11 hover:from-white/20 hover:to-white/10 text-slate-200 bg-gradient-to-b from-white/10 to-white/5 border-slate-50/5 border rounded-full items-center justify-center">
<svg className="lucide lucide-gamepad-2 size-5 w-[24px] h-[24px]" data-icon-replaced="true" data-lucide="gamepad-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '24px', height: '24px', color: 'rgb(226, 232, 240)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="6" x2="10" y1="11" y2="11"></line><line x1="8" x2="8" y1="9" y2="13"></line><line x1="15" x2="15.01" y1="12" y2="12"></line><line x1="18" x2="18.01" y1="10" y2="10"></line><path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"></path></svg>
</button>
<button className="group relative inline-flex size-11 hover:from-white/20 hover:to-white/10 text-slate-200 bg-gradient-to-b from-white/10 to-white/5 border-slate-50/5 border rounded-full items-center justify-center">
<svg className="lucide lucide-graduation-cap size-5" data-lucide="graduation-cap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path><path d="M22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></svg>
</button>
<button className="group relative inline-flex size-11 hover:from-white/20 hover:to-white/10 text-slate-200 bg-gradient-to-b from-white/10 to-white/5 border-slate-50/5 border rounded-full items-center justify-center">
<svg className="lucide lucide-globe size-5" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
</button>
<button className="group relative inline-flex size-11 hover:from-white/20 hover:to-white/10 text-slate-200 bg-gradient-to-b from-white/10 to-white/5 border-slate-50/5 border rounded-full items-center justify-center">
<svg className="lucide lucide-clapperboard size-5" data-lucide="clapperboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z"></path><path d="m6.2 5.3 3.1 3.9"></path><path d="m12.4 3.4 3.1 4"></path><path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"></path></svg>
</button>
<button className="group relative inline-flex size-11 hover:from-white/20 hover:to-white/10 text-slate-200 bg-gradient-to-b from-white/10 to-white/5 border-slate-50/5 border rounded-full items-center justify-center">
<svg className="lucide lucide-users size-5" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</button>
</nav>
<div className="mt-auto flex flex-col items-center gap-2">
<button className="inline-flex size-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 hover:bg-white/10">
<svg className="lucide lucide-settings size-5" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg>
</button>
<button className="inline-flex size-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 hover:bg-white/10">
<svg className="lucide lucide-plus size-5" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
</aside>

<aside className="fixed inset-y-0 left-0 z-40 hidden w-64 max-w-full flex-col md:flex xl:relative xl:inset-auto xl:z-0 pt-0 pr-0 pb-0 pl-0 backdrop-blur-xl" id="side-nav">
<div className="h-full overflow-hidden rounded-tl-none rounded-bl-none xl:rounded-tl-none xl:rounded-bl-none rounded-2xl bg-white/[0.03] border border-white/[0.08] border-l-0">

<div className="hidden items-center gap-3 xl:hidden p-4 border-b border-white/[0.05]">
<div className="flex items-center gap-1.5">
<div className="w-3 h-3 bg-red-500 rounded-full"></div>
<div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
<div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
</div>
<div className="flex items-center gap-2 ml-2">
<div className="inline-flex size-8 items-center justify-center rounded-lg bg-indigo-500/20 ring-1 ring-indigo-300/30">
<svg className="lucide lucide-sparkles size-4 text-indigo-300" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<span className="text-lg font-semibold tracking-tight">Vega</span>
</div>
<button className="ml-auto inline-flex items-center justify-center rounded-md border border-white/10 bg-white/5 p-2 hover:bg-white/10 md:hidden" id="mobile-close">
<svg className="lucide lucide-x size-5" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>

<div className="flex flex-col h-full">

<div className="p-5 pb-4">
<h2 className="text-lg font-medium tracking-tight text-white mb-4">Browse</h2>

<div className="relative mb-4">
<input className="w-full placeholder:text-slate-400/70 outline-none focus:ring-2 focus:ring-indigo-500/50 text-sm text-slate-200 bg-white/5 border-white/10 border rounded-xl pt-2.5 pr-4 pb-2.5 pl-10" placeholder="Search categories..."/>
<svg className="lucide lucide-search pointer-events-none absolute left-3 top-2.5 size-4 text-slate-400/70" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</div>
</div>

<nav className="flex-1 px-5 space-y-1">
<a className="group flex items-center gap-3 transition hover:from-indigo-500/20 hover:to-indigo-500/10 bg-gradient-to-b from-indigo-500/10 to-indigo-500/5 border-indigo-400/20 border rounded-xl pt-3 pr-3 pb-3 pl-3" href="#">
<svg className="lucide lucide-house size-5 text-indigo-300 stroke-[1.5]" data-lucide="house" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
<div className="flex-1">
<div className="text-sm font-medium text-slate-100">Home</div>
<div className="text-xs text-indigo-300/70">Latest updates</div>
</div>
<div className="text-xs bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded-full">New</div>
</a>
<a className="flex items-center gap-3 hover:bg-white/[0.05] rounded-xl pt-3 pr-3 pb-3 pl-3 group transition-all" href="#">
<svg className="lucide lucide-music size-5 text-slate-300 stroke-[1.5]" data-lucide="music" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>
<div className="flex-1">
<div className="text-sm font-medium text-white/90 group-hover:text-white transition-colors">Music &amp; Audio</div>
<div className="text-xs text-white/50">Beats, production, mixing</div>
</div>
</a>
<a className="flex items-center gap-3 hover:bg-white/[0.05] rounded-xl pt-3 pr-3 pb-3 pl-3 group transition-all" href="#">
<svg className="lucide lucide-gamepad-2 size-5 text-slate-300 stroke-[1.5]" data-lucide="gamepad-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="6" x2="10" y1="11" y2="11"></line><line x1="8" x2="8" y1="9" y2="13"></line><line x1="15" x2="15.01" y1="12" y2="12"></line><line x1="18" x2="18.01" y1="10" y2="10"></line><path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"></path></svg>
<div className="flex-1">
<div className="text-sm font-medium text-white/90 group-hover:text-white transition-colors">Gaming</div>
<div className="text-xs text-white/50">Development, streaming</div>
</div>
<div className="text-xs text-emerald-400">•</div>
</a>
<a className="flex items-center gap-3 hover:bg-white/[0.05] rounded-xl pt-3 pr-3 pb-3 pl-3 group transition-all" href="#">
<svg className="lucide lucide-graduation-cap size-5 text-slate-300 stroke-[1.5]" data-lucide="graduation-cap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path><path d="M22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></svg>
<div className="flex-1">
<div className="text-sm font-medium text-white/90 group-hover:text-white transition-colors">Education</div>
<div className="text-xs text-white/50">Courses, tutorials, learning</div>
</div>
</a>
<a className="flex items-center gap-3 hover:bg-white/[0.05] rounded-xl pt-3 pr-3 pb-3 pl-3 group transition-all" href="#">
<svg className="lucide lucide-globe size-5 text-slate-300 stroke-[1.5]" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
<div className="flex-1">
<div className="text-sm font-medium text-white/90 group-hover:text-white transition-colors">Science &amp; Tech</div>
<div className="text-xs text-white/50">Innovation, research</div>
</div>
</a>
<a className="flex items-center gap-3 hover:bg-white/[0.05] rounded-xl pt-3 pr-3 pb-3 pl-3 group transition-all" href="#">
<svg className="lucide lucide-clapperboard size-5 text-slate-300 stroke-[1.5]" data-lucide="clapperboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z"></path><path d="m6.2 5.3 3.1 3.9"></path><path d="m12.4 3.4 3.1 4"></path><path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"></path></svg>
<div className="flex-1">
<div className="text-sm font-medium text-white/90 group-hover:text-white transition-colors">Entertainment</div>
<div className="text-xs text-white/50">Movies, shows, media</div>
</div>
</a>
<a className="flex items-center gap-3 hover:bg-white/[0.05] rounded-xl pt-3 pr-3 pb-3 pl-3 group transition-all" href="#">
<svg className="lucide lucide-users size-5 text-slate-300 stroke-[1.5]" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<div className="flex-1">
<div className="text-sm font-medium text-white/90 group-hover:text-white transition-colors">Communities</div>
<div className="text-xs text-white/50">Connect, collaborate</div>
</div>
</a>

<div className="h-px bg-white/[0.05] my-4"></div>

<div className="mb-3">
<h3 className="text-xs font-medium text-white/70 uppercase tracking-wider mb-3">Recently Viewed</h3>
<div className="space-y-2">
<a className="flex items-center gap-2 p-2 hover:bg-white/[0.05] rounded-lg transition-all group" href="#">
<div className="w-8 h-8 rounded-md overflow-hidden ring-1 ring-white/10">
<img alt="" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/68095e5c-2c97-40cc-9c50-a94964a0847c_800w.jpg"/>
</div>
<div className="flex-1 min-w-0">
<div className="text-xs font-medium text-white/90 group-hover:text-white transition-colors truncate">Motion Design Studio</div>
<div className="text-[10px] text-white/50">2 hours ago</div>
</div>
</a>
<a className="flex items-center gap-2 p-2 hover:bg-white/[0.05] rounded-lg transition-all group" href="#">
<div className="w-8 h-8 rounded-md bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center ring-1 ring-white/10">
<svg className="lucide lucide-code size-3 text-white" data-lucide="code" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path></svg>
</div>
<div className="flex-1 min-w-0">
<div className="text-xs font-medium text-white/90 group-hover:text-white transition-colors truncate">Code Academy</div>
<div className="text-[10px] text-white/50">Yesterday</div>
</div>
</a>
</div>
</div>
</nav>

<div className="p-5 border-t border-white/[0.05]">
<div className="rounded-xl bg-gradient-to-b from-white/[0.08] to-white/[0.03] border border-white/10 p-4">
<div className="flex items-center gap-2 mb-2">
<svg className="lucide lucide-sparkles size-4 text-indigo-400 stroke-[1.5]" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<div className="text-sm font-medium text-white">Go Pro</div>
</div>
<p className="text-xs text-white/70 mb-3 leading-relaxed">Unlock premium features, unlimited uploads, and exclusive content.</p>
<button className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 px-3 py-2.5 text-xs font-medium text-white transition-all shadow-lg shadow-indigo-500/25">
<svg className="lucide lucide-zap size-3 stroke-[1.5]" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
                    Upgrade Now
                  </button>
</div>
</div>
</div>
</div>
</aside>

<div className="relative">

<header className="opacity-0 animate-fade-in sticky top-0 z-50 backdrop-blur-xl supports-[backdrop-filter]:bg-purple-950/80 bg-purple-950/90 border-b border-white/[0.08]">
<div className="mx-auto max-w-[1600px] px-4 lg:px-6">
<div className="flex items-center h-16 gap-6">

<div className="flex items-center gap-6">
<a className="text-xl md:text-2xl tracking-tight font-medium text-white" href="#">Vega</a>
<nav className="hidden lg:flex items-center gap-8 text-[15px]">
<a className="text-white hover:text-white/80 transition-colors" href="#">Explore</a>
<a className="text-white/70 hover:text-white transition-colors" href="#">Trending</a>
<a className="text-white/70 hover:text-white transition-colors" href="#">Library</a>
<a className="text-white/70 hover:text-white transition-colors" href="#">Studio</a>
</nav>
</div>

<div className="flex-1 max-w-2xl">
<div className="group relative">
<svg className="lucide lucide-search absolute left-4 top-3 h-5 w-5 text-white/50 stroke-[1.5]" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<input className="w-full placeholder:text-white/40 pl-12 pr-4 h-11 rounded-full bg-white/[0.08] border border-white/[0.12] focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-white/20 focus:bg-white/[0.12] transition-all" placeholder="Search for creators, tutorials, inspiration..." type="text"/>
</div>
</div>

<div className="flex items-center gap-2">
<button className="hidden sm:flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.08] border border-white/[0.12] hover:bg-white/[0.15] transition-all">
<svg className="lucide lucide-bell h-5 w-5 text-white/80 stroke-[1.5]" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
</button>
<button className="hidden sm:flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.08] border border-white/[0.12] hover:bg-white/[0.15] transition-all">
<svg className="lucide lucide-plus h-5 w-5 text-white/80 stroke-[1.5]" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
<div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 ring-2 ring-white/10 overflow-hidden">
<img alt="Profile" className="h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/bcc9e052-c6e1-4b79-9be3-32e9825ace91_320w.jpg"/>
</div>
</div>
</div>
</div>
</header>

<main className="max-w-[1600px] lg:px-6 lg:py-8 mr-auto ml-auto pt-6 pr-4 pb-6 pl-4">
<div className="grid grid-cols-1 xl:grid-cols-12 gap-6 lg:gap-8">

<section className="xl:col-span-8 space-y-6">

<div className="opacity-0 animate-blur-in delay-200 relative rounded-2xl overflow-hidden bg-white/[0.02] border border-white/[0.08] ring-1 ring-white/[0.05]">

<div className="relative group">
<div className="aspect-video bg-black/60">
<img alt="Advanced Motion Graphics in After Effects" className="h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/3aa0792c-4408-4b05-88bd-3d38d695f27e_800w.jpg"/>
</div>

<div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60"></div>

<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<button className="h-20 w-20 rounded-full bg-white/20 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/30 transition-all">
<svg className="lucide lucide-play h-8 w-8 text-white ml-1 stroke-[1.5]" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</button>
</div>

<div className="absolute inset-x-0 bottom-0 p-4 lg:p-6">

<div className="mb-4">
<div className="h-1 rounded-full bg-white/20 overflow-hidden cursor-pointer">
<div className="h-full w-[42%] bg-gradient-to-r from-blue-500 to-purple-600 transition-all" id="progress"></div>
</div>
<div className="flex items-center justify-between text-sm text-white/80 mt-2 font-mono">
<span id="time">12:34</span>
<span className="text-white/60">29:45</span>
</div>
</div>

<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<button className="h-11 w-11 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/25 transition-all" id="playBtn">
<svg className="lucide lucide-play h-5 w-5 text-white stroke-[1.5]" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</button>
<button className="h-10 w-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all">
<svg className="lucide lucide-volume-2 h-4 w-4 text-white stroke-[1.5]" data-lucide="volume-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"></path><path d="M16 9a5 5 0 0 1 0 6"></path><path d="M19.364 18.364a9 9 0 0 0 0-12.728"></path></svg>
</button>
<div className="hidden lg:flex items-center gap-2">
<div className="px-3 py-1.5 rounded-full bg-white/15 text-xs font-medium text-white/90 border border-white/20">4K</div>
<div className="px-3 py-1.5 rounded-full bg-white/15 text-xs font-medium text-white/90 border border-white/20">CC</div>
</div>
</div>
<div className="flex items-center gap-2">
<button className="h-10 w-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all">
<svg className="lucide lucide-picture-in-picture-2 h-4 w-4 text-white stroke-[1.5]" data-lucide="picture-in-picture-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 9V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h4"></path><rect height="7" rx="2" width="10" x="12" y="13"></rect></svg>
</button>
<button className="h-10 w-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all">
<svg className="lucide lucide-settings h-4 w-4 text-white stroke-[1.5]" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg>
</button>
<button className="h-10 w-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all">
<svg className="lucide lucide-maximize h-4 w-4 text-white stroke-[1.5]" data-lucide="maximize" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 3H5a2 2 0 0 0-2 2v3"></path><path d="M21 8V5a2 2 0 0 0-2-2h-3"></path><path d="M3 16v3a2 2 0 0 0 2 2h3"></path><path d="M16 21h3a2 2 0 0 0 2-2v-3"></path></svg>
</button>
</div>
</div>
</div>
</div>
</div>

<div className="opacity-0 animate-slide-up delay-300 space-y-4">
<h1 className="text-2xl lg:text-3xl xl:text-4xl tracking-tight font-medium text-white leading-tight">
              Advanced Motion Graphics Techniques in After Effects
            </h1>

<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div className="flex items-center gap-4">
<div className="h-14 w-14 rounded-full ring-2 ring-white/10 overflow-hidden">
<img alt="Motion Design Studio" className="h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/68095e5c-2c97-40cc-9c50-a94964a0847c_800w.jpg"/>
</div>
<div>
<div className="font-medium text-white text-lg">Motion Design Studio</div>
<div className="text-sm text-white/60">2.4M subscribers • Verified Creator</div>
</div>
</div>
<div className="flex items-center gap-3">
<button className="px-6 py-2.5 rounded-full bg-white/[0.08] hover:bg-white/[0.15] border border-white/[0.12] text-sm font-medium text-white transition-all">
                  Follow
                </button>
<button className="px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-sm font-medium text-white transition-all shadow-lg shadow-blue-500/25">
                  Subscribe
                </button>
</div>
</div>

<div className="flex items-center gap-2 flex-wrap">
<button className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/[0.08] border border-white/[0.12] hover:bg-white/[0.15] transition-all">
<svg className="lucide lucide-thumbs-up h-4 w-4 text-white/80 stroke-[1.5]" data-lucide="thumbs-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10v12"></path><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"></path></svg>
<span className="text-sm font-medium text-white">2.3K</span>
</button>
<button className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/[0.08] border border-white/[0.12] hover:bg-white/[0.15] transition-all">
<svg className="lucide lucide-thumbs-down h-4 w-4 text-white/70 stroke-[1.5]" data-lucide="thumbs-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17 14V2"></path><path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z"></path></svg>
</button>
<button className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/[0.08] border border-white/[0.12] hover:bg-white/[0.15] transition-all">
<svg className="lucide lucide-share h-4 w-4 text-white/80 stroke-[1.5]" data-lucide="share" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v13"></path><path d="m16 6-4-4-4 4"></path><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path></svg>
<span className="text-sm font-medium text-white">Share</span>
</button>
<button className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/[0.08] border border-white/[0.12] hover:bg-white/[0.15] transition-all">
<svg className="lucide lucide-bookmark h-4 w-4 text-white/80 stroke-[1.5]" data-lucide="bookmark" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg>
<span className="text-sm font-medium text-white">Save</span>
</button>
<button className="h-10 w-10 rounded-full bg-white/[0.08] border border-white/[0.12] hover:bg-white/[0.15] flex items-center justify-center transition-all">
<svg className="lucide lucide-more-horizontal h-4 w-4 text-white/70 stroke-[1.5]" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
</div>
</div>

<div className="opacity-0 animate-slide-up delay-400 rounded-2xl bg-white/[0.03] border border-white/[0.08] p-6">
<div className="flex items-center gap-4 text-sm text-white/70 mb-4">
<span className="text-white/90 font-medium">847K views</span>
<span>•</span>
<span>3 weeks ago</span>
<span>•</span>
<div className="flex items-center gap-1">
<svg className="lucide lucide-clock h-4 w-4 stroke-[1.5]" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span>29:45</span>
</div>
</div>
<p className="text-[15px] leading-relaxed text-white/80 mb-4">
              Master advanced motion graphics techniques with professional workflows used by top studios. This comprehensive tutorial covers keyframe animation, expression scripting, and complex compositing methods.
            </p>
<p className="text-[15px] leading-relaxed text-white/70 mb-4">
              🎯 What you'll learn:
              • Advanced keyframe interpolation
              • Expression-driven animations
              • 3D layer compositing
              • Professional render settings
            </p>
<div className="flex items-center gap-3 text-sm">
<span className="text-white/60">Tools:</span>
<span className="px-2 py-1 rounded-md bg-white/[0.08] text-white/80">After Effects 2024</span>
<span className="px-2 py-1 rounded-md bg-white/[0.08] text-white/80">Cinema 4D</span>
<span className="px-2 py-1 rounded-md bg-white/[0.08] text-white/80">Adobe CC</span>
</div>
<button className="mt-4 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors">Show more</button>
</div>

<div className="opacity-0 animate-slide-up delay-500 space-y-6">
<div className="flex items-center justify-between">
<h3 className="text-xl font-medium text-white">2,847 Comments</h3>
<button className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors">
<svg className="lucide lucide-arrow-up-down h-4 w-4 stroke-[1.5]" data-lucide="arrow-up-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 16-4 4-4-4"></path><path d="M17 20V4"></path><path d="m3 8 4-4 4 4"></path><path d="M7 4v16"></path></svg>
                Sort by Top
              </button>
</div>

<div className="flex gap-4">
<img alt="You" className="h-10 w-10 rounded-full object-cover ring-1 ring-white/10" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/e08496f1-bdba-4cb4-83c1-96ac5be57ace_320w.jpg"/>
<div className="flex-1">
<textarea className="w-full h-12 resize-none px-4 py-3 rounded-xl bg-white/[0.05] border border-white/[0.12] focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-white/20 text-white placeholder:text-white/50 text-[15px]" placeholder="Share your thoughts..."></textarea>
<div className="flex items-center justify-end gap-2 mt-2">
<button className="px-4 py-2 text-sm text-white/70 hover:text-white transition-colors">Cancel</button>
<button className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-sm font-medium text-white transition-all">Comment</button>
</div>
</div>
</div>

<div className="space-y-6 max-h-96 overflow-y-auto scrollbar-hide">

<div className="flex gap-4">
<img alt="Alex Chen" className="h-10 w-10 rounded-full object-cover ring-1 ring-white/10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/04b430ce-45fe-4c6d-b375-4a4d349051a7_320w.jpg"/>
<div className="flex-1">
<div className="flex items-center gap-2 text-sm mb-1">
<span className="font-medium text-white">Alex Chen</span>
<span className="text-white/50">@alexmotion</span>
<span className="text-white/40">•</span>
<span className="text-white/50">5 hours ago</span>
</div>
<p className="text-[15px] text-white/85 leading-relaxed mb-3">This is exactly what I needed! The expression scripting section was incredibly detailed. Can you do a follow-up on particle systems?</p>
<div className="flex items-center gap-4 text-sm">
<button className="flex items-center gap-1.5 text-white/70 hover:text-white transition-colors">
<svg className="lucide lucide-thumbs-up h-4 w-4 stroke-[1.5]" data-lucide="thumbs-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10v12"></path><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"></path></svg>
<span>127</span>
</button>
<button className="flex items-center gap-1.5 text-white/70 hover:text-white transition-colors">
<svg className="lucide lucide-thumbs-down h-4 w-4 stroke-[1.5]" data-lucide="thumbs-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17 14V2"></path><path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z"></path></svg>
</button>
<button className="text-white/70 hover:text-white transition-colors">Reply</button>
</div>
</div>
</div>

<div className="flex gap-4">
<img alt="Sarah Kim" className="h-10 w-10 rounded-full object-cover ring-1 ring-white/10" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/2a59325f-6c7c-497d-be59-b73f7bbb9e60_320w.jpg"/>
<div className="flex-1">
<div className="flex items-center gap-2 text-sm mb-1">
<span className="font-medium text-white">Sarah Kim</span>
<span className="text-white/50">@sarahdesigns</span>
<span className="text-white/40">•</span>
<span className="text-white/50">1 day ago</span>
</div>
<p className="text-[15px] text-white/85 leading-relaxed mb-3">Professional quality tutorial! The render optimization tips alone saved me hours of work. Thank you! 🙏</p>
<div className="flex items-center gap-4 text-sm">
<button className="flex items-center gap-1.5 text-white/70 hover:text-white transition-colors">
<svg className="lucide lucide-thumbs-up h-4 w-4 stroke-[1.5]" data-lucide="thumbs-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10v12"></path><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"></path></svg>
<span>89</span>
</button>
<button className="text-white/70 hover:text-white transition-colors">Reply</button>
</div>
</div>
</div>
</div>
</div>
</section>

<aside className="xl:col-span-4">
<div className="opacity-0 animate-slide-up delay-600 sticky top-24 max-h-[calc(100vh-6rem)] overflow-hidden">

<div className="rounded-2xl bg-white/[0.03] border border-white/[0.08] overflow-hidden h-full flex flex-col">
<div className="p-4 border-b border-white/[0.08] shrink-0">
<h3 className="font-medium text-white">Up Next</h3>
</div>

<div className="flex gap-2 p-3 border-b border-white/[0.05] overflow-x-auto scrollbar-hide shrink-0">
<button className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-sm font-medium text-white shrink-0">All</button>
<button className="px-4 py-2 rounded-full bg-white/[0.08] hover:bg-white/[0.15] text-sm text-white/80 transition-all shrink-0">Motion Design</button>
<button className="px-4 py-2 rounded-full bg-white/[0.08] hover:bg-white/[0.15] text-sm text-white/80 transition-all shrink-0">Tutorials</button>
<button className="px-4 py-2 rounded-full bg-white/[0.08] hover:bg-white/[0.15] text-sm text-white/80 transition-all shrink-0">3D</button>
</div>

<div className="flex-1 overflow-y-auto scrollbar-hide">

<a className="hover-gradient flex gap-3 p-3 hover:bg-white/[0.05] transition-all border-b border-white/[0.03] group relative" href="#">
<div className="relative w-32 aspect-video shrink-0 rounded-lg overflow-hidden ring-1 ring-white/[0.08]">
<img alt="3D Typography Animation" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/40da0c82-6e2f-4b70-a7b5-0498f0e7f525_320w.jpg"/>
<div className="absolute bottom-1 right-1 text-[11px] px-1.5 py-0.5 rounded bg-black/80 text-white font-mono">15:24</div>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
</div>
<div className="min-w-0 flex-1">
<div className="font-medium text-white leading-snug mb-1 group-hover:text-blue-400 transition-colors">3D Typography Animation Masterclass</div>
<div className="text-xs text-white/60 mb-1">Design Academy</div>
<div className="text-xs text-white/50">234K views • 1 week ago</div>
</div>
</a>

<a className="hover-gradient flex gap-3 p-3 hover:bg-white/[0.05] transition-all border-b border-white/[0.03] group relative" href="#">
<div className="relative w-32 aspect-video shrink-0 rounded-lg overflow-hidden ring-1 ring-white/[0.08]">
<img alt="Cinematic Color Grading" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/d14dc069-558a-4c51-8aad-5cc237f9b61d_320w.jpg"/>
<div className="absolute bottom-1 right-1 text-[11px] px-1.5 py-0.5 rounded bg-black/80 text-white font-mono">22:18</div>
</div>
<div className="min-w-0 flex-1">
<div className="font-medium text-white leading-snug mb-1 group-hover:text-blue-400 transition-colors">Cinematic Color Grading in DaVinci</div>
<div className="text-xs text-white/60 mb-1">Color Theory Pro</div>
<div className="text-xs text-white/50">156K views • 3 days ago</div>
</div>
</a>
<a className="hover-gradient flex gap-3 p-3 hover:bg-white/[0.05] transition-all border-b border-white/[0.03] group relative" href="#">
<div className="relative w-32 aspect-video shrink-0 rounded-lg overflow-hidden ring-1 ring-white/[0.08]">
<img alt="Abstract Particle Systems" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/746edd35-fe15-42a9-9caf-04d636eac866_800w.jpg"/>
<div className="absolute bottom-1 right-1 text-[11px] px-1.5 py-0.5 rounded bg-black/80 text-white font-mono">18:45</div>
</div>
<div className="min-w-0 flex-1">
<div className="font-medium text-white leading-snug mb-1 group-hover:text-blue-400 transition-colors">Abstract Particle Systems</div>
<div className="text-xs text-white/60 mb-1">VFX Masters</div>
<div className="text-xs text-white/50">89K views • 5 days ago</div>
</div>
</a>
<a className="hover-gradient flex gap-3 p-3 hover:bg-white/[0.05] transition-all border-b border-white/[0.03] group relative" href="#">
<div className="relative w-32 aspect-video shrink-0 rounded-lg overflow-hidden ring-1 ring-white/[0.08]">
<img alt="UI Animation Principles" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-1 right-1 text-[11px] px-1.5 py-0.5 rounded bg-black/80 text-white font-mono">12:30</div>
</div>
<div className="min-w-0 flex-1">
<div className="font-medium text-white leading-snug mb-1 group-hover:text-blue-400 transition-colors">UI Animation Principles</div>
<div className="text-xs text-white/60 mb-1">Interface Design</div>
<div className="text-xs text-white/50">445K views • 2 weeks ago</div>
</div>
</a>
<a className="hover-gradient flex gap-3 p-3 hover:bg-white/[0.05] transition-all border-b border-white/[0.03] group relative" href="#">
<div className="relative w-32 aspect-video shrink-0 rounded-lg overflow-hidden ring-1 ring-white/[0.08]">
<img alt="Advanced Compositing" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/507d47d1-d71f-465b-b833-073b5ed3cdfa_320w.jpg"/>
<div className="absolute bottom-1 right-1 text-[11px] px-1.5 py-0.5 rounded bg-black/80 text-white font-mono">31:12</div>
</div>
<div className="min-w-0 flex-1">
<div className="font-medium text-white leading-snug mb-1 group-hover:text-blue-400 transition-colors">Advanced Compositing Techniques</div>
<div className="text-xs text-white/60 mb-1">Post Production Pro</div>
<div className="text-xs text-white/50">178K views • 1 week ago</div>
</div>
</a>
<a className="hover-gradient flex gap-3 p-3 hover:bg-white/[0.05] transition-all border-b border-white/[0.03] group relative" href="#">
<div className="relative w-32 aspect-video shrink-0 rounded-lg overflow-hidden ring-1 ring-white/[0.08]">
<img alt="Data Visualization" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/0b6e651c-02e3-4ca1-807b-56aad9651ad9_320w.jpg"/>
<div className="absolute bottom-1 right-1 text-[11px] px-1.5 py-0.5 rounded bg-black/80 text-white font-mono">26:15</div>
</div>
<div className="min-w-0 flex-1">
<div className="font-medium text-white leading-snug mb-1 group-hover:text-blue-400 transition-colors">Interactive Data Visualization</div>
<div className="text-xs text-white/60 mb-1">Data Design Co</div>
<div className="text-xs text-white/50">92K views • 4 days ago</div>
</div>
</a>
<a className="hover-gradient flex gap-3 p-3 hover:bg-white/[0.05] transition-all border-b border-white/[0.03] group relative" href="#">
<div className="relative w-32 aspect-video shrink-0 rounded-lg overflow-hidden ring-1 ring-white/[0.08]">
<img alt="Character Animation" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/0a125252-44d4-4ba1-9cce-2e89971cc827_320w.jpg"/>
<div className="absolute bottom-1 right-1 text-[11px] px-1.5 py-0.5 rounded bg-black/80 text-white font-mono">42:30</div>
</div>
<div className="min-w-0 flex-1">
<div className="font-medium text-white leading-snug mb-1 group-hover:text-blue-400 transition-colors">Character Animation Fundamentals</div>
<div className="text-xs text-white/60 mb-1">Animation Studios</div>
<div className="text-xs text-white/50">567K views • 2 weeks ago</div>
</div>
</a>
<a className="hover-gradient flex gap-3 p-3 hover:bg-white/[0.05] transition-all group relative" href="#">
<div className="relative w-32 aspect-video shrink-0 rounded-lg overflow-hidden ring-1 ring-white/[0.08]">
<img alt="Sound Design" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/a135f6da-de6f-439b-bf8d-1cdcd63227bc_320w.jpg"/>
<div className="absolute bottom-1 right-1 text-[11px] px-1.5 py-0.5 rounded bg-black/80 text-white font-mono">19:45</div>
</div>
<div className="min-w-0 flex-1">
<div className="font-medium text-white leading-snug mb-1 group-hover:text-blue-400 transition-colors">Audio Visual Synchronization</div>
<div className="text-xs text-white/60 mb-1">Sound Design Pro</div>
<div className="text-xs text-white/50">123K views • 6 days ago</div>
</div>
</a>
</div>
</div>
</div>
</aside>
</div>
</main>
</div>



</div>
    </>
  );
}
