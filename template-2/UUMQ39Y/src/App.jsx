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



document.addEventListener('DOMContentLoaded', () => {
  lucide.createIcons();
  const ctx=document.getElementById('sentimentChart').getContext('2d');
  new Chart(ctx,{
    type:'doughnut',
    data:{
      labels:['Positive','Neutral','Negative'],
      datasets:[{
        data:[74,18,8],
        backgroundColor:[
          'rgba(37,99,235,.9)',   // blue-600
          'rgba(96,165,250,.9)',  // blue-400
          'rgba(147,197,253,.9)'  // blue-300
        ],
        borderWidth:0,        // removed stroke
        cutout:'75%',
        hoverOffset:8
      }]
    },
    options:{
      responsive:true,
      maintainAspectRatio:false,
      plugins:{legend:{display:false}}
    }
  });
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
      
<div className="video-background-container fixed top-0 w-full h-screen -z-10">
<video autoPlay className="w-full h-full object-cover" loop muted playsInline src="https://cdn.midjourney.com/video/116b0a39-7876-4a6d-8bbc-bfea48ab134a/0.mp4"></video>
</div>

<nav className="sticky top-0 z-30 h-[64px] md:px-12 flex fade-in fade-in-delay-1 bg-white/5 border-slate-50/10 border-b pr-6 pl-6 backdrop-blur items-center">
<a aria-label="FluxForge home" className="flex items-center space-x-3 mr-8 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6] rounded-lg" href="#">
<span className="md:text-lg text-base font-semibold tracking-tight">Flux</span>
</a>
<ul className="hidden md:flex gap-8 text-sm md:text-base font-medium text-[#656D7B]">
<li className=""><a className="hover:text-[#20232A] transition-colors focus-visible:ring-2 focus-visible:ring-[#3B82F6] rounded-lg" href="#">Courses</a></li>
<li className=""><a className="hover:text-[#20232A] transition-colors focus-visible:ring-2 focus-visible:ring-[#3B82F6] rounded-lg" href="#">Community</a></li>
<li className=""><a className="hover:text-[#20232A] transition-colors focus-visible:ring-2 focus-visible:ring-[#3B82F6] rounded-lg" href="#">Resources</a></li>
</ul>
<div className="flex-1"></div>
<div className="flex items-center gap-2">
<a className="text-[#656D7B] text-sm font-medium px-4 py-2 rounded-lg hover:bg-[#EEF2F8] transition focus-visible:ring-2 focus-visible:ring-[#3B82F6]" href="#">Log In</a>
<a className="hover:bg-[#3B82F6] transition focus-visible:ring-2 focus-visible:ring-[#3B82F6] text-sm font-semibold text-white bg-gradient-to-tl from-slate-900 to-slate-700 rounded-lg pt-2 pr-5 pb-2 pl-5 shadow" href="#">Sign Up</a>
</div>
</nav>

<header className="max-w-2xl fade-in fade-in-delay-2 text-center mr-auto ml-auto pt-16 pr-4 pl-4">
<h1 className="text-4xl md:text-5xl tracking-tight leading-tight font-medium">
    Unlock Limitless Potential.<br className="hidden md:inline" />Validate Your Mastery.
  </h1>
<p className="mt-6 text-lg text-[#656D7B]">
    Interactive courses in product, engineering, and strategy.<br className="hidden sm:inline" />
    Earn shareable badges verified on-chain.
  </p>
<div className="mt-10 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
<a className="hover:bg-[#3B82F6] transition font-semibold text-white bg-gradient-to-tl from-slate-900 to-slate-700 rounded-xl pt-3 pr-7 pb-3 pl-7 drop-shadow-xl" href="#">Browse 200+ Paths</a>
<a className="hover:bg-[#EEF2F8] hover:text-[#20232A] transition font-semibold text-slate-950 bg-slate-50 border-slate-50 border rounded-xl pt-3 pr-7 pb-3 pl-7 drop-shadow-xl" href="#">Attend Free Class</a>
</div>
</header>

<main className="w-full max-w-6xl mx-auto grid gap-8 px-4 mt-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

<section className="card flex flex-col gap-6 fade-in fade-in-delay-3 bg-blue-50/50 border-blue-50 border drop-shadow-2xl backdrop-blur-sm">
<header className="flex justify-between">
<div className="">
<h2 className="text-sm md:text-base font-semibold tracking-tight flex items-center gap-2">
<svg className="lucide lucide-calendar-clock text-blue-500 w-4 h-4" data-lucide="calendar-clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 14v2.2l1.6 1"></path><path d="M16 2v4"></path><path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path><path d="M3 10h5"></path><path d="M8 2v4"></path><circle cx="16" cy="16" r="6"></circle></svg>
          Stand-up: Nebula Sprint
        </h2>
<p className="flex items-center gap-1 text-xs text-zinc-600 mt-2">
<svg className="lucide lucide-calendar-days w-3 h-3" data-lucide="calendar-days" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path><path d="M8 14h.01"></path><path d="M12 14h.01"></path><path d="M16 14h.01"></path><path d="M8 18h.01"></path><path d="M12 18h.01"></path><path d="M16 18h.01"></path></svg> 15 Dec • 09:30-10:15
        </p>
</div>
<button aria-label="More" className="p-2 rounded-lg transition focus-visible:ring-2 focus-visible:ring-blue-400 hover:bg-blue-50">
<svg className="lucide lucide-more-vertical w-4 h-4 text-[#9CA3AF]" data-lucide="more-vertical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
</button>
</header>

<div aria-label="Participants" className="flex items-center gap-2 flex-wrap">
<span className="w-7 h-7 rounded-full text-[10px] font-semibold flex items-center justify-center bg-blue-100 text-blue-700">DR</span>
<span className="w-7 h-7 rounded-full text-[10px] font-semibold flex items-center justify-center bg-blue-100/80 text-blue-700/80">MM</span>
<span className="w-7 h-7 rounded-full text-[10px] font-semibold flex items-center justify-center bg-blue-100/70 text-blue-700/70">RS</span>
<span className="w-7 h-7 rounded-full text-[10px] font-semibold flex items-center justify-center bg-blue-100/60 text-blue-700/60">EN</span>
<span className="text-xs text-[#9CA3AF] font-medium">+5</span>
</div>

<div className="flex flex-wrap gap-2 text-[11px] font-medium">
<span className="px-3 py-1 rounded-full flex items-center gap-1 bg-blue-100 text-blue-700"><svg className="lucide lucide-activity w-3 h-3" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>Ongoing</span>
<span className="px-3 py-1 rounded-full flex items-center gap-1 bg-blue-100/80 text-blue-800/80"><svg className="lucide lucide-users w-3 h-3" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>UX Guild</span>
<span className="px-3 py-1 rounded-full flex items-center gap-1 bg-blue-100/60 text-blue-800/60"><svg className="lucide lucide-sparkles w-3 h-3" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path><path d="M20 3v4"></path><path d="M22 5h-4"></path><path d="M4 17v2"></path><path d="M5 18H3"></path></svg>Sprint 7</span>
<span className="px-3 py-1 rounded-full flex items-center gap-1 bg-blue-200 text-blue-900"><svg className="lucide lucide-check w-3 h-3" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>4⁄6 Done</span>
</div>

<div className="text-xs text-[#656D7B] border-t border-[#E5E7EB] pt-4 space-y-3">
<div>Agenda: <span className="font-medium text-[#20232A]">Finalize onboarding flow, assign QA, confirm release</span></div>
<div className="flex items-center gap-1"><svg className="lucide lucide-alert-circle w-3 h-3 text-blue-400" data-lucide="alert-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="8" y2="12"></line><line x1="12" x2="12.01" y1="16" y2="16"></line></svg>Blocker: API throttling (Elias)</div>
<div>Next: <span className="font-medium text-[#20232A]">Demo Day • 18 Dec • 14:00</span></div>
</div>
</section>

<section className="card flex flex-col gap-5 fade-in fade-in-delay-4 bg-blue-50/50 border-blue-50 border drop-shadow-2xl backdrop-blur-sm">
<header className="flex items-center gap-2">
<svg className="lucide lucide-video w-4 h-4 text-blue-500" data-lucide="video" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path><rect height="12" rx="2" width="14" x="2" y="6"></rect></svg>
<h3 className="text-sm md:text-base font-semibold tracking-tight">Design Handoff: Nebula v2</h3>
</header>
<p className="text-xs text-[#656D7B]">By <span className="font-medium text-[#20232A]">Diego Ramirez</span> • Principal Designer</p>
<div className="flex gap-4 text-[11px] text-[#656D7B]">
<div className="flex items-center gap-1"><svg className="lucide lucide-calendar w-3 h-3" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>12 Dec</div>
<div className="flex items-center gap-1"><svg className="lucide lucide-eye w-3 h-3" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>64</div>
<div className="flex items-center gap-1"><svg className="lucide lucide-message-circle w-3 h-3" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path></svg>7</div>
</div>
<div className="border-t border-[#E5E7EB] pt-4 space-y-2 text-xs">
<div className="flex items-center gap-2"><svg className="lucide lucide-quote w-3 h-3 text-blue-400" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>"Smooth Figma → code flow!" — RS</div>
<div className="flex items-center gap-2"><svg className="lucide lucide-quote w-3 h-3 text-blue-400" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>"Animations feel crisp." — MM</div>
</div>
<div className="mt-6 border-t border-[#E5E7EB] pt-4">
<h4 className="text-sm font-semibold tracking-tight mb-2 text-[#20232A]">Tags</h4>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-blue-100 text-blue-700">Design</span>
<span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-blue-100/80 text-blue-700/80">Figma</span>
<span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-blue-100/60 text-blue-700/60">Handoff</span>
<span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-blue-200 text-blue-900">UI/UX</span>
<span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-blue-100/50 text-blue-700/50">Animation</span>
</div>
</div>
</section>

<section className="card flex flex-col gap-6 fade-in fade-in-delay-5 bg-blue-50/50 border-blue-50 border drop-shadow-2xl backdrop-blur-sm">
<header className="flex justify-between items-center">
<h2 className="text-sm md:text-base font-semibold tracking-tight flex items-center gap-2">
<svg className="lucide lucide-smile w-4 h-4 text-blue-500" data-lucide="smile" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" x2="9.01" y1="9" y2="9"></line><line x1="15" x2="15.01" y1="9" y2="9"></line></svg>Crew Vibes
      </h2>
<span className="text-blue-500 text-xs font-medium flex items-center gap-1">
<svg className="lucide lucide-arrow-up-circle w-4 h-4" data-lucide="arrow-up-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m16 12-4-4-4 4"></path><path d="M12 16V8"></path></svg>Rising
      </span>
</header>
<div className="flex flex-col sm:flex-row items-center gap-6">
<div className="w-36 h-36 relative">
<canvas height="288" id="sentimentChart" style={{display: `block`, boxSizing: `border-box`, height: `144px`, width: `134px`}} width="268"></canvas>
<div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
<span className="text-2xl text-blue-600 font-medium" id="donutMain">74%</span>
<span className="text-[11px] text-[#656D7B]">Positive</span>
</div>
</div>
<div className="flex flex-col gap-3 w-full max-w-xs">
<div className="flex justify-between items-center text-[13px]">
<div className="flex items-center gap-2"><span className="w-3 h-3 rounded-sm bg-blue-600"></span>Positive</div>
<span className="font-semibold text-blue-600">74%</span>
</div>
<div className="flex justify-between items-center text-[13px]">
<div className="flex items-center gap-2"><span className="w-3 h-3 rounded-sm bg-blue-400"></span>Neutral</div>
<span className="font-semibold text-blue-400">18%</span>
</div>
<div className="flex justify-between items-center text-[13px]">
<div className="flex items-center gap-2"><span className="w-3 h-3 rounded-sm bg-blue-300"></span>Negative</div>
<span className="font-semibold text-blue-300">8%</span>
</div>
</div>
</div>
<div className="border-t border-[#E5E7EB] pt-4 text-xs text-[#656D7B]">
<span className="font-medium text-[#20232A]">"Team synergy is at an all-time high!"</span> — Internal survey
    </div>
</section>
</main>





    </>
  );
}
