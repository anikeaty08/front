import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    // Initialize icons
    document.addEventListener("DOMContentLoaded", () => {
      lucide.createIcons();

      // Toggle hearts in explore grid
      document.querySelectorAll(".like-toggle").forEach(btn => {
        btn.addEventListener("click", () => {
          const icon = btn.querySelector("svg");
          const active = btn.classList.toggle("bg-red-500");
          if (active) {
            btn.classList.remove("bg-white","text-neutral-900","bg-white/95");
            icon.classList.add("text-white");
          } else {
            btn.classList.add("bg-white/95","text-neutral-900");
            icon.classList.remove("text-white");
          }
        });
      });

      // Bookmark toggle
      document.querySelectorAll(".bookmark-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          btn.classList.toggle("bg-amber-400");
          btn.classList.toggle("text-neutral-900");
        });
      });

      // Filter pill removal
      document.querySelectorAll(".filter-pill .remove-pill").forEach(x => {
        x.addEventListener("click", (e) => {
          e.currentTarget.closest(".filter-pill").remove();
        });
      });

      // Simple swipe actions (mock)
      const like = document.querySelector(".like-btn");
      const dislike = document.querySelector(".dislike-btn");
      const superlike = document.querySelector(".superlike-btn");
      [like, dislike, superlike].forEach(btn => {
        btn?.addEventListener("click", () => {
          const card = btn.closest(".relative.h-\\[854px\\]")?.querySelector(".mx-5.mt-5");
          if (!card) return;
          card.animate([{ transform: "translateX(0)", opacity: 1 }, { transform: "translateX(-6px)", opacity: 0.98 }, { transform: "translateX(0)", opacity: 1 }], { duration: 300, easing: "ease-out" });
        });
      });
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      <div className="fixed top-0 w-full h-screen bg-cover bg-center -z-10" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b9f39422-aaf1-42f2-9440-78dfbd3869c7_3840w.jpg")'}}></div>
<div className="mx-auto max-w-7xl px-6 py-8 flex items-center min-h-screen">

<div className="grid gap-8 lg:grid-cols-3 w-full">

<div className="relative mx-auto">
<div className="relative h-[854px] w-[393px] overflow-hidden shadow-[0_25px_80px_-15px_rgba(0,0,0,0.8)] shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] bg-neutral-900 drop-shadow-2xl" style={{borderRadius: '47px'}}>

<div className="absolute left-0 right-0 top-0 z-50 flex h-12 pt-2 pr-8 pl-8 items-center justify-between">
<div className="status-bar-time text-[17px] font-semibold font-sans text-white">9:41</div>
<div className="flex items-center gap-1">
<div className="flex items-center gap-0.5">
<div className="h-1 w-1 rounded-full bg-white"></div>
<div className="h-1 w-1 rounded-full bg-white"></div>
<div className="h-1 w-1 rounded-full bg-white/40"></div>
<div className="h-1 w-1 rounded-full bg-white/40"></div>
</div>
<div className="ml-2 h-3 w-6 rounded-sm border border-white bg-white">
<div className="h-full w-4/5 rounded-sm bg-green-500"></div>
</div>
</div>
</div>

<div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/10 to-black/70"></div>

<div className="absolute inset-0 pt-14 flex flex-col">

<div className="px-5 pt-4">
<div className="flex items-center gap-2 ring-1 px-4 py-3 sf-pill backdrop-blur-xl bg-white/10 ring-white/10">
<svg className="h-5 w-5 text-white/75" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path>
</svg>
<input className="w-full bg-transparent text-[17px] placeholder-white/60 outline-none text-white/90" placeholder="Search"/>
<button className="p-2 rounded-full transition-colors hover:bg-white/10">
<svg className="h-5 w-5 text-white/80" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<line x1="21" x2="14" y1="4" y2="4"></line><line x1="10" x2="3" y1="4" y2="4"></line><line x1="21" x2="12" y1="12" y2="12"></line><line x1="8" x2="3" y1="12" y2="12"></line><line x1="21" x2="16" y1="20" y2="20"></line><line x1="12" x2="3" y1="20" y2="20"></line><line x1="14" x2="14" y1="2" y2="6"></line><line x1="8" x2="8" y1="10" y2="14"></line><line x1="16" x2="16" y1="18" y2="22"></line>
</svg>
</button>
</div>
</div>

<div className="mt-4 px-5">
<div className="flex gap-4 overflow-x-auto pb-2">

<div className="flex flex-col items-center min-w-[64px]">
<div className="p-[2px] rounded-full bg-gradient-to-tr from-fuchsia-500 to-pink-500">
<img alt="Emma" className="h-14 w-14 rounded-full object-cover ring-2 ring-neutral-900" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/a7a0f0f5-9a19-4888-87bf-ff8780ff8008_320w.jpg" style={{}}/>
</div>
<span className="mt-2 text-[13px] font-medium font-sans text-white/85">Emma</span>
</div>
<div className="flex flex-col items-center min-w-[64px]">
<div className="p-[2px] rounded-full bg-gradient-to-tr from-fuchsia-500 to-pink-500">
<img alt="Natalie" className="h-14 w-14 rounded-full object-cover ring-2 ring-neutral-900" src="https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&amp;w=256&amp;auto=format&amp;fit=crop" style={{}}/>
</div>
<span className="mt-2 text-[13px] font-medium font-sans text-white/85">Natalie</span>
</div>
<div className="flex flex-col items-center min-w-[64px]">
<div className="p-[2px] rounded-full bg-gradient-to-tr from-fuchsia-500 to-pink-500">
<img alt="Jennie" className="h-14 w-14 rounded-full object-cover ring-2 ring-neutral-900" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
</div>
<span className="mt-2 text-[13px] font-medium font-sans text-white/85">Jennie</span>
</div>
<div className="flex flex-col items-center min-w-[64px]">
<div className="p-[2px] rounded-full bg-gradient-to-tr from-fuchsia-500 to-pink-500">
<img alt="Diana" className="h-14 w-14 rounded-full object-cover ring-2 ring-neutral-900" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
</div>
<span className="mt-2 text-[13px] font-medium font-sans text-white/85">Diana</span>
</div>
<div className="flex flex-col items-center min-w-[64px]">
<div className="p-[2px] rounded-full bg-gradient-to-tr from-fuchsia-500 to-pink-500">
<img alt="Alina" className="h-14 w-14 rounded-full object-cover ring-2 ring-neutral-900" src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
</div>
<span className="mt-2 text-[13px] font-medium font-sans text-white/85">Alina</span>
</div>
<div className="flex flex-col items-center min-w-[64px]">
<div className="p-[2px] rounded-full bg-gradient-to-tr from-fuchsia-500 to-pink-500">
<img alt="Maya" className="h-14 w-14 rounded-full object-cover ring-2 ring-neutral-900" src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
</div>
<span className="mt-2 text-[13px] font-medium font-sans text-white/85">Maya</span>
</div>
</div>
</div>

<div className="px-5 mt-5">
<h2 className="text-[26px] tracking-tight font-sans font-semibold">Messages</h2>
</div>

<div className="flex-1 overflow-y-auto mt-3 pr-2 pb-28 pl-2">
<div className="divide-y bg-white/5/0 divide-white/5">

<button className="w-full px-3 py-3 flex items-center gap-3 transition-colors hover:bg-white/5">
<div className="relative">
<div className="p-[2px] rounded-full bg-gradient-to-tr from-fuchsia-500 to-pink-500">
<img alt="Samantha" className="h-12 w-12 rounded-full object-cover ring-2 ring-neutral-900" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="flex-1 text-left">
<div className="flex items-center justify-between">
<p className="text-[15px] font-semibold tracking-tight font-sans text-white">Samantha</p>
<span className="text-[13px] font-sans text-white/60">16m</span>
</div>
<p className="mt-0.5 text-[13px] font-sans text-white/70">Typing…</p>
</div>
<span className="inline-flex h-6 min-w-[1.5rem] items-center justify-center text-[13px] font-medium rounded-full ml-2 pr-2 pl-2 text-neutral-50 bg-pink-600">4</span>
</button>

<button className="w-full px-3 py-3 flex items-center gap-3 transition-colors hover:bg-white/5">
<img alt="Nicole" className="h-12 w-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div className="flex-1 text-left">
<div className="flex items-center justify-between">
<p className="text-[15px] font-semibold tracking-tight font-sans text-white">Nicole</p>
<span className="text-[13px] font-sans text-white/60">18m</span>
</div>
<p className="mt-0.5 text-[13px] truncate font-sans text-white/70">You: Hey! What's up, long time no s...</p>
</div>
</button>

<button className="w-full px-3 py-3 flex items-center gap-3 transition-colors hover:bg-white/5">
<img alt="Emma Ora" className="h-12 w-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div className="flex-1 text-left">
<div className="flex items-center justify-between">
<p className="text-[15px] font-semibold tracking-tight font-sans text-white">Emma Ora</p>
<span className="text-[13px] font-sans text-white/60">24m</span>
</div>
<p className="mt-0.5 text-[13px] font-sans text-white/70">Love you 💕</p>
</div>
<span className="inline-flex h-6 min-w-[1.5rem] items-center justify-center text-[13px] font-medium rounded-full ml-2 pr-2 pl-2 text-neutral-50 bg-pink-600">2</span>
</button>

<button className="w-full px-3 py-3 flex items-center gap-3 transition-colors hover:bg-white/5">
<img alt="Diana Morans" className="h-12 w-12 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/930ce830-f688-4032-a702-85ace409705c_320w.jpg"/>
<div className="flex-1 text-left">
<div className="flex items-center justify-between">
<p className="text-[15px] font-semibold tracking-tight font-sans text-white">Diana Morans</p>
<span className="text-[13px] font-sans text-white/60">24m</span>
</div>
<p className="mt-0.5 text-[13px] truncate font-sans text-white/70">You: Great! nice to meet you cante...</p>
</div>
</button>

<button className="w-full px-3 py-3 flex items-center gap-3 transition-colors hover:bg-white/5">
<img alt="Maria Uloa" className="h-12 w-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div className="flex-1 text-left">
<div className="flex items-center justify-between">
<p className="text-[15px] font-semibold tracking-tight font-sans text-white">Maria Uloa</p>
<span className="text-[13px] font-sans text-white/60">34m</span>
</div>
<p className="mt-0.5 text-[13px] font-sans text-white/70">You: Hi! how are you mbak?</p>
</div>
</button>

<button className="w-full px-3 py-3 flex items-center gap-3 transition-colors hover:bg-white/5">
<div className="p-[2px] rounded-full bg-gradient-to-tr from-fuchsia-500 to-pink-500">
<img alt="Natalie Jenner" className="h-12 w-12 rounded-full object-cover ring-2 ring-neutral-900" src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex-1 text-left">
<div className="flex items-center justify-between">
<p className="text-[15px] font-semibold tracking-tight font-sans text-white">Natalie Jenner</p>
<span className="text-[13px] font-sans text-white/60">1h</span>
</div>
<p className="mt-0.5 text-[13px] truncate font-sans text-white/70">You: Hey! What's up, long time no s...</p>
</div>
</button>
</div>
</div>

<div className="absolute inset-x-0 bottom-8 pb-2">
<div className="ring-1 sf-rounded mr-6 ml-6 pt-1 pr-4 pb-1 pl-4 backdrop-blur-xl ring-white/10 bg-neutral-950/85">
<div className="flex items-center justify-between">
<button className="flex flex-col items-center gap-1 px-3 py-2 transition-colors sf-rounded hover:bg-white/10">
<svg className="h-6 w-6 text-white/80" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
</svg>
<span className="text-[10px] font-medium font-sans text-white/80">Home</span>
</button>
<button className="flex flex-col items-center gap-1 px-3 py-2 transition-colors sf-rounded hover:bg-white/10">
<svg className="h-6 w-6 text-white/80" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle>
</svg>
<span className="text-[10px] font-medium font-sans text-white/80">Search</span>
</button>
<div className="flex flex-col gap-1 pt-2 pr-2 pb-2 pl-2 items-center">
<div className="rounded-full pt-3 pr-3 pb-3 pl-3 bg-pink-600">
<svg className="h-5 w-5 text-white" data-icon-replaced="true" fill="none" stroke="currentColor" strokeWidth="1.5" style={{width: '20px', height: '20px'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
</svg>
</div>
<span className="text-[10px] font-semibold text-pink-500">Messages</span>
</div>
<button className="flex flex-col items-center gap-1 px-3 py-2 transition-colors sf-rounded hover:bg-white/10">
<svg className="h-6 w-6 text-white/80" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
</svg>
<span className="text-[10px] font-medium font-sans text-white/80">Likes</span>
</button>
<button className="flex flex-col items-center gap-1 px-3 py-2 transition-colors sf-rounded hover:bg-white/10">
<svg className="h-6 w-6 text-white/80" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>
</svg>
<span className="text-[10px] font-medium font-sans text-white/80">Profile</span>
</button>
</div>
</div>
</div>

<div className="absolute bottom-2 left-1/2 h-1 w-32 -translate-x-1/2 sf-pill bg-white/40"></div>
</div>

<div className="pointer-events-none absolute inset-0 ring-1 ring-white/20" style={{borderRadius: '47px'}}></div>
</div>
</div>

<div className="relative mr-auto ml-auto">
<div className="relative h-[854px] w-[393px] overflow-hidden shadow-[0_25px_80px_-15px_rgba(0,0,0,0.8)] bg-neutral-900 drop-shadow-2xl" style={{borderRadius: '47px'}}>

<div className="absolute left-0 right-0 top-0 z-50 flex h-12 items-center justify-between px-8 pt-2">
<div className="status-bar-time text-[17px] font-semibold font-sans text-white">9:41</div>
<div className="flex items-center gap-1">
<div className="flex items-center gap-0.5">
<div className="h-1 w-1 rounded-full bg-white"></div>
<div className="h-1 w-1 rounded-full bg-white"></div>
<div className="h-1 w-1 rounded-full bg-white"></div>
<div className="h-1 w-1 rounded-full bg-white/40"></div>
</div>
<div className="ml-2 h-3 w-6 rounded-sm border border-white bg-white">
<div className="h-full w-4/5 rounded-sm bg-green-500"></div>
</div>
</div>
</div>

<div className="mt-14 flex items-center justify-between px-5 pt-4">
<button className="p-3 sf-pill transition-colors bg-white/10 hover:bg-white/15">
<svg className="lucide lucide-chevron-left h-5 w-5 text-white/85" data-icon-replaced="true" data-lucide="chevron-left" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '20px', height: '20px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<div className="flex items-center gap-1 p-1 sf-pill bg-white/10">
<button className="text-[15px] sf-pill transition-colors font-medium pt-2 pr-4 pb-2 pl-4 font-sans hover:bg-white/10 text-white/80">For You</button>
<button className="px-4 py-2 text-[15px] font-semibold sf-pill font-sans bg-white text-neutral-900">Nearby</button>
</div>
<button className="p-3 sf-pill transition-colors bg-white/10 hover:bg-white/15">
<svg className="h-5 w-5 text-white/85" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<line x1="21" x2="14" y1="4" y2="4"></line><line x1="10" x2="3" y1="4" y2="4"></line><line x1="21" x2="12" y1="12" y2="12"></line><line x1="8" x2="3" y1="12" y2="12"></line><line x1="21" x2="16" y1="20" y2="20"></line><line x1="12" x2="3" y1="20" y2="20"></line><line x1="14" x2="14" y1="2" y2="6"></line><line x1="8" x2="8" y1="10" y2="14"></line><line x1="16" x2="16" y1="18" y2="22"></line>
</svg>
</button>
</div>

<div className="mt-5 mr-5 ml-5 pt-2 pr-2 pb-2 pl-2">
<div className="relative h-[520px] overflow-hidden sf-rounded">
<img alt="profile" className="absolute inset-0 h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/6d92c054-99f4-4fea-bcd0-42676b5f64c3_800w.jpg" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/5 to-black/60"></div>

<div className="absolute right-4 top-4 flex items-center gap-2">
<button className="bookmark-btn p-3 backdrop-blur-xl sf-pill transition-colors bg-black/40 hover:bg-black/60">
<svg className="h-5 w-5 text-white/90" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path>
</svg>
</button>
</div>

<div className="absolute inset-x-0 bottom-0 pt-8 pr-6 pb-8 pl-6">
<div className="flex items-end justify-between">
<div className="">
<div className="flex items-center gap-2">
<h3 className="text-[26px] tracking-tight font-sans font-semibold">Maya, 24</h3>
<svg className="h-5 w-5 text-blue-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path className="" d="m9 12 2 2 4-4"></path>
</svg>
</div>
<div className="mt-1 flex items-center gap-2 text-[15px] text-white/85">
<span className="h-2 w-2 rounded-full bg-green-400"></span>
<span className="font-sans">online now</span>
</div>
</div>
<div className="px-3 py-1.5 text-[13px] font-medium backdrop-blur sf-pill font-sans bg-black/40 text-white/80">2.1 mi</div>
</div>
</div>
</div>

<div className="-mt-6 flex w-full mr-auto ml-auto items-center justify-center">
<div className="flex gap-4 ring-1 sf-pill border pt-2 pr-2 pb-2 pl-2 backdrop-blur-xl items-center ring-white/10 bg-neutral-950/90 border-neutral-800">
<button className="dislike-btn p-4 sf-pill transition-colors bg-white/10 hover:bg-white/15">
<svg className="h-6 w-6 text-white/90" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6 6 18"></path><path d="m6 6 12 12"></path>
</svg>
</button>
<button className="superlike-btn p-4 sf-pill transition-colors bg-white hover:bg-white/90">
<svg className="h-6 w-6 text-neutral-900" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
</button>
<button className="like-btn sf-pill transition-colors pt-4 pr-4 pb-4 pl-4 hover:bg-red-400 bg-pink-600">
<svg className="h-6 w-6 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
</svg>
</button>
</div>
</div>
</div>

<div className="absolute inset-x-0 bottom-8 pb-2">
<div className="ring-1 sf-rounded mr-6 ml-6 pt-1 pr-4 pb-1 pl-4 backdrop-blur-xl ring-white/10 bg-neutral-950/85">
<div className="flex items-center justify-between">
<button className="flex flex-col items-center gap-1 px-3 py-2 transition-colors sf-rounded hover:bg-white/10">
<svg className="h-6 w-6 text-white/80" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
</svg>
<span className="text-[10px] font-medium font-sans text-white/80">Home</span>
</button>
<button className="flex flex-col items-center gap-1 px-3 py-2 transition-colors sf-rounded hover:bg-white/10">
<svg className="h-6 w-6 text-white/80" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path><circle className="" cx="12" cy="12" r="10"></circle>
</svg>
<span className="text-[10px] font-medium font-sans text-white/80">Explore</span>
</button>
<div className="flex flex-col items-center gap-1 p-2">
<div className="rounded-full pt-3 pr-3 pb-3 pl-3 bg-pink-600">
<svg className="w-[20px] h-[20px] text-neutral-50" data-icon-replaced="true" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '20px', height: '20px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect className="" height="18" rx="2" width="18" x="3" y="3"></rect><path className="" d="M3 9h18"></path><path d="M3 15h18"></path><path className="" d="M9 3v18"></path><path className="" d="M15 3v18"></path>
</svg>
</div>
<span className="text-[10px] font-semibold text-pink-600">Cards</span>
</div>
<button className="flex flex-col items-center gap-1 px-3 py-2 transition-colors sf-rounded hover:bg-white/10">
<svg className="h-6 w-6 text-white/80" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
</svg>
<span className="text-[10px] font-medium font-sans text-white/80">Messages</span>
</button>
<button className="flex flex-col items-center gap-1 px-3 py-2 transition-colors sf-rounded hover:bg-white/10">
<svg className="h-6 w-6 text-white/80" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>
</svg>
<span className="text-[10px] font-medium font-sans text-white/80">Profile</span>
</button>
</div>
</div>
</div>

<div className="absolute bottom-2 left-1/2 h-1 w-32 -translate-x-1/2 sf-pill bg-white/40"></div>

<div className="pointer-events-none absolute inset-0 ring-1 ring-white/20" style={{borderRadius: '47px'}}></div>
</div>
</div>

<div className="relative mx-auto">
<div className="relative h-[854px] w-[393px] overflow-hidden shadow-[0_25px_80px_-15px_rgba(0,0,0,0.8)] bg-neutral-900" style={{borderRadius: '47px'}}>

<div className="absolute left-0 right-0 top-0 z-50 flex h-12 pt-2 pr-8 pl-8 items-center justify-between">
<div className="status-bar-time text-[17px] font-semibold font-sans text-white">9:41</div>
<div className="flex items-center gap-1">
<div className="flex items-center gap-0.5">
<div className="h-1 w-1 rounded-full bg-white"></div>
<div className="h-1 w-1 rounded-full bg-white"></div>
<div className="h-1 w-1 rounded-full bg-white"></div>
<div className="h-1 w-1 rounded-full bg-white"></div>
</div>
<div className="ml-2 h-3 w-6 rounded-sm border border-white bg-white">
<div className="h-full w-full rounded-sm bg-green-500"></div>
</div>
</div>
</div>
<div className="flex h-full flex-col pt-14 drop-shadow-2xl">

<div className="pt-4 pr-6 pl-6">
<div className="mb-6 flex items-center justify-between">
<div className="">
<h2 className="text-[28px] tracking-tight font-sans font-semibold mb-1">Discover</h2>
<p className="text-[13px] font-sans text-white/70">24 profiles nearby</p>
</div>
<button className="p-3 sf-pill transition-colors bg-white/10 hover:bg-white/15">
<svg className="h-5 w-5 text-white/85" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<line x1="21" x2="14" y1="4" y2="4"></line><line x1="10" x2="3" y1="4" y2="4"></line><line x1="21" x2="12" y1="12" y2="12"></line><line x1="8" x2="3" y1="12" y2="12"></line><line x1="21" x2="16" y1="20" y2="20"></line><line x1="12" x2="3" y1="20" y2="20"></line><line x1="14" x2="14" y1="2" y2="6"></line><line x1="8" x2="8" y1="10" y2="14"></line><line x1="16" x2="16" y1="18" y2="22"></line>
</svg>
</button>
</div>

<div className="flex flex-wrap gap-2 mb-1">
<span className="filter-pill inline-flex items-center gap-2 px-3 py-2 text-[13px] font-medium ring-1 sf-pill font-sans bg-white/15 text-white ring-white/20">
        18–26
        <button className="remove-pill opacity-70 hover:opacity-100 transition-opacity">
<svg className="h-3.5 w-3.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6 6 18"></path><path d="m6 6 12 12"></path>
</svg>
</button>
</span>
<span className="filter-pill inline-flex items-center gap-2 px-3 py-2 text-[13px] font-medium ring-1 sf-pill font-sans bg-white/15 text-white ring-white/20">
        Nearby
        <button className="remove-pill opacity-70 hover:opacity-100 transition-opacity">
<svg className="h-3.5 w-3.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6 6 18"></path><path d="m6 6 12 12"></path>
</svg>
</button>
</span>
<span className="filter-pill inline-flex items-center gap-2 px-3 py-2 text-[13px] font-medium ring-1 sf-pill font-sans bg-white/15 text-white ring-white/20">
        No smokers
        <button className="remove-pill opacity-70 hover:opacity-100 transition-opacity">
<svg className="h-3.5 w-3.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6 6 18"></path><path d="m6 6 12 12"></path>
</svg>
</button>
</span>
</div>
</div>

<div className="grid flex-1 grid-cols-2 gap-4 overflow-y-auto mt-3 pr-6 pb-32 pl-6">

<div className="group relative overflow-hidden ring-1 sf-rounded transition-all duration-300 cursor-pointer ring-white/15 hover:ring-white/30">
<img alt="profile" className="h-100 w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/9b22c33a-b017-42bd-bab5-89be63576edd_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/5 to-black/80"></div>

<div className="absolute top-3 left-3 flex items-center gap-1.5 px-2 py-1 backdrop-blur-sm sf-pill bg-black/40">
<div className="w-2 h-2 rounded-full bg-green-400"></div>
<span className="text-[11px] font-medium font-sans text-white/90">online</span>
</div>

<div className="absolute top-3 right-3 px-2 py-1 text-[11px] font-medium backdrop-blur-sm sf-pill font-sans bg-black/40 text-white/90">1.2 mi</div>

<div className="absolute inset-x-0 bottom-0 p-4">
<div className="flex items-end justify-between">
<div className="flex-1">
<div className="flex items-center gap-2 mb-1">
<p className="text-[17px] font-semibold tracking-tight font-sans">Viktoria</p>
<span className="text-[15px] font-sans text-white/80">24</span>
</div>
</div>
<button className="like-toggle sf-pill hover:scale-110 transition-all duration-300 pt-2.5 pr-2.5 pb-2.5 pl-2.5 hover:bg-white bg-neutral-50/10 border-neutral-50/10">
<svg className="h-4 w-4 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
</svg>
</button>
</div>
</div>
</div>

<div className="group relative overflow-hidden ring-1 sf-rounded transition-all duration-300 cursor-pointer ring-white/15 hover:ring-white/30">
<img alt="profile" className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/fbfb93aa-ae97-4da5-ac6a-57ecd1c2c0ee_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/5 to-black/80"></div>

<div className="absolute top-3 right-3 px-2 py-1 text-[11px] font-medium backdrop-blur-sm sf-pill font-sans bg-black/40 text-white/90">0.8 mi</div>
<div className="absolute inset-x-0 bottom-0 p-4">
<div className="flex items-end justify-between">
<div className="flex-1">
<div className="flex items-center gap-2 mb-1">
<p className="text-[17px] font-semibold tracking-tight font-sans">Angel</p>
<span className="text-[15px] font-sans text-white/80">22</span>
</div>
</div>
<button className="like-toggle sf-pill hover:scale-110 transition-all duration-300 pt-2.5 pr-2.5 pb-2.5 pl-2.5 hover:bg-white bg-neutral-50/10 border-neutral-50/10">
<svg className="h-4 w-4 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
</svg>
</button>
</div>
</div>
</div>

<div className="group relative overflow-hidden ring-1 sf-rounded transition-all duration-300 cursor-pointer ring-white/15 hover:ring-white/30">
<img alt="profile" className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/f7f6feef-fd3e-4901-bce6-7271aa74dc87_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/5 to-black/80"></div>

<div className="absolute top-3 left-3 bg-pink-500 px-2 py-1 text-[11px] font-semibold sf-pill font-sans text-white">NEW</div>

<div className="absolute top-3 right-3 px-2 py-1 text-[11px] font-medium backdrop-blur-sm sf-pill font-sans bg-black/40 text-white/90">2.3 mi</div>
<div className="absolute inset-x-0 bottom-0 p-4">
<div className="flex items-end justify-between">
<div className="flex-1">
<div className="flex items-center gap-2 mb-1">
<p className="text-[17px] font-semibold tracking-tight font-sans">Eliza</p>
<span className="text-[15px] font-sans text-white/80">26</span>
</div>
</div>
<button className="like-toggle sf-pill hover:scale-110 transition-all duration-300 pt-2.5 pr-2.5 pb-2.5 pl-2.5 hover:bg-white bg-neutral-50/10 border-neutral-50/10">
<svg className="w-[16px] h-[16px]" data-icon-replaced="true" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
</svg>
</button>
</div>
</div>
</div>

<div className="group relative overflow-hidden ring-1 sf-rounded transition-all duration-300 cursor-pointer ring-white/15 hover:ring-white/30">
<img alt="profile" className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/878428de-34e9-452a-aec5-48aa12782394_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/5 to-black/80"></div>

<div className="absolute top-3 left-3 flex items-center gap-1.5 px-2 py-1 backdrop-blur-sm sf-pill bg-black/40">
<div className="w-2 h-2 rounded-full bg-green-400"></div>
<span className="text-[11px] font-medium font-sans text-white/90">online</span>
</div>

<div className="absolute top-3 right-3 px-2 py-1 text-[11px] font-medium backdrop-blur-sm sf-pill font-sans bg-black/40 text-white/90">1.7 mi</div>
<div className="absolute inset-x-0 bottom-0 p-4">
<div className="flex items-end justify-between">
<div className="flex-1">
<div className="flex items-center gap-2 mb-1">
<p className="text-[17px] font-semibold tracking-tight font-sans">Carmen</p>
<span className="text-[15px] font-sans text-white/80">23</span>
</div>
</div>
<button className="like-toggle sf-pill hover:scale-110 transition-all duration-300 pt-2.5 pr-2.5 pb-2.5 pl-2.5 hover:bg-white bg-neutral-50/10 border-neutral-50/10">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
</svg>
</button>
</div>
</div>
</div>

<div className="group relative overflow-hidden ring-1 sf-rounded transition-all duration-300 cursor-pointer ring-white/15 hover:ring-white/30">
<img alt="profile" className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c62627bc-d916-4071-90de-5b3aa885cbf0_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/5 to-black/80"></div>

<div className="absolute top-3 right-3 px-2 py-1 text-[11px] font-medium backdrop-blur-sm sf-pill font-sans bg-black/40 text-white/90">3.1 mi</div>
<div className="absolute inset-x-0 bottom-0 p-4">
<div className="flex items-end justify-between">
<div className="flex-1">
<div className="flex items-center gap-2 mb-1">
<p className="text-[17px] font-semibold tracking-tight">Tina</p>
<span className="text-[15px] font-sans text-white/80">25</span>
</div>
</div>
<button className="like-toggle sf-pill hover:scale-110 transition-all duration-300 pt-2.5 pr-2.5 pb-2.5 pl-2.5 hover:bg-white bg-neutral-50/10 border-neutral-50/10">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.5 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
</svg>
</button>
</div>
</div>
</div>

<div className="group relative overflow-hidden ring-1 sf-rounded transition-all duration-300 cursor-pointer ring-white/15 hover:ring-white/30">
<img alt="profile" className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/f45d0d38-734a-45d6-9529-9a3ee7531761_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/5 to-black/80"></div>

<div className="absolute top-3 left-3 flex items-center gap-1.5 px-2 py-1 backdrop-blur-sm sf-pill bg-black/40">
<div className="w-2 h-2 rounded-full bg-green-400"></div>
<span className="text-[11px] font-medium font-sans text-white/90">online</span>
</div>

<div className="absolute top-3 right-3 px-2 py-1 text-[11px] font-medium backdrop-blur-sm sf-pill font-sans bg-black/40 text-white/90">0.5 mi</div>
<div className="absolute inset-x-0 bottom-0 p-4">
<div className="flex items-end justify-between">
<div className="flex-1">
<div className="flex items-center gap-2 mb-1">
<p className="text-[17px] font-semibold tracking-tight font-sans">Evelyn</p>
<span className="text-[15px] font-sans text-white/80">21</span>
</div>
</div>
<button className="like-toggle sf-pill hover:scale-110 transition-all duration-300 pt-2.5 pr-2.5 pb-2.5 pl-2.5 hover:bg-white bg-neutral-50/10 border-neutral-50/10">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
</svg>
</button>
</div>
</div>
</div>
</div>

<div className="absolute inset-x-0 bottom-8 pb-2">
<div className="ring-1 sf-rounded mr-6 ml-6 pt-1 pr-4 pb-1 pl-4 backdrop-blur-xl ring-white/10 bg-neutral-950/85">
<div className="flex items-center justify-between">
<button className="flex flex-col items-center gap-1 px-3 py-2 transition-colors sf-rounded hover:bg-white/10">
<svg className="h-6 w-6 text-white/80" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
</svg>
<span className="text-[10px] font-medium font-sans text-white/80">Home</span>
</button>
<button className="flex flex-col items-center gap-1 px-3 py-2 transition-colors sf-rounded hover:bg-white/10">
<svg className="h-6 w-6 text-white/80" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle>
</svg>
<span className="text-[10px] font-medium font-sans text-white/80">Search</span>
</button>
<div className="flex flex-col items-center gap-1 p-2">
<div className="rounded-full pt-3 pr-3 pb-3 pl-3 bg-pink-600">
<svg className="w-[20px] h-[20px] text-neutral-50" data-icon-replaced="true" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '20px', height: '20px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle className="" cx="4" cy="20" r="2"></circle>
</svg>
</div>
<span className="text-[10px] font-semibold text-pink-600">Discover</span>
</div>
<button className="flex flex-col items-center gap-1 px-3 py-2 transition-colors sf-rounded hover:bg-white/10">
<svg className="h-6 w-6 text-white/80" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
</svg>
<span className="text-[10px] font-medium font-sans text-white/80">Likes</span>
</button>
<button className="flex flex-col items-center gap-1 px-3 py-2 transition-colors sf-rounded hover:bg-white/10">
<svg className="h-6 w-6 text-white/80" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>
</svg>
<span className="text-[10px] font-medium font-sans text-white/80">Profile</span>
</button>
</div>
</div>
</div>
</div>

<div className="absolute bottom-2 left-1/2 h-1 w-32 -translate-x-1/2 sf-pill bg-white/40"></div>

<div className="pointer-events-none absolute inset-0 ring-1 ring-white/20" style={{borderRadius: '47px'}}></div>
</div>
</div>
</div>
</div>


    </>
  );
}
