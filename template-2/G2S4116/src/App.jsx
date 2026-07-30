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



  document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.querySelector('#aura-emc5cfewi canvas').getContext('2d');
    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Positive', 'Neutral', 'Negative'],
        datasets: [{
          data: [74, 18, 8],
          backgroundColor: ['#10b981', '#f59e42', '#ef4444'],
          borderColor: '#1e293b',
          borderWidth: 2,
          hoverOffset: 20,
          spacing: 6,
          borderJoinStyle: 'round',
          cutout: '70%'
        }]
      },
      options: {
        responsive: true,
        animation: {
          animateRotate: true,
          animateScale: true
        },
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            backgroundColor: '#334155',
            titleColor: '#a7f3d0',
            bodyColor: '#d1d5db',
            borderColor: '#10b981',
            borderWidth: 1,
            cornerRadius: 6,
            padding: 8,
            displayColors: false
          }
        },
        cutout: '70%'
      }
    });
  });



lucide.createIcons();

// Sentiment Chart
const sentimentCtx = document.getElementById('sentimentChart').getContext('2d');
new Chart(sentimentCtx, {
  type: 'doughnut',
  data: {
    labels: ['Positive', 'Neutral', 'Negative'],
    datasets: [{
      data: [74, 18, 8],
      backgroundColor: ['#10b981','#f59e42','#ef4444'],
      borderWidth: 0
    }]
  },
  options: {
    cutout: '70%',
    plugins: {
      legend: { display: false }
    }
  }
});

// Member selection radio-like
document.querySelectorAll('.member-row').forEach(row => {
  row.addEventListener('click', () => {
    document.querySelectorAll('.member-row .status-icon').forEach(icon => {
      icon.setAttribute('data-lucide', 'circle');
      icon.classList.replace('text-violet-300', 'text-slate-500');
    });
    const icon = row.querySelector('.status-icon');
    icon.setAttribute('data-lucide', 'check-circle');
    icon.classList.replace('text-slate-500', 'text-violet-300');
    lucide.createIcons();
  });
  row.addEventListener('keydown', (e)=>{
    if(e.key === "Enter" || e.key === " "){
      row.click();
    }
  });
});

// Download HTML
document.getElementById('downloadBtn').addEventListener('click', () => {
  const blob = new Blob([document.documentElement.outerHTML], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'cosmo-dashboard-dark-glass.html';
  a.click();
  URL.revokeObjectURL(url);
});

// Animate fade-in sequence
document.querySelectorAll('.fade-in, .fade-in-blur').forEach((el, i) => {
  setTimeout(() => el.style.opacity = '1', 200 + i * 90);
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
      

<button className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-violet-800/50 text-white px-5 py-2 text-sm font-medium shadow-lg hover:bg-violet-700/80 outline-none focus:ring-2 focus:ring-violet-400 transition fade-in-blur fade-in-delay-3 border border-violet-400/20" id="downloadBtn" style={{opacity: `1`}}>
<svg className="lucide lucide-download w-4 h-4" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
<span>Export HTML</span>
</button>
<main className="grid w-full max-w-7xl gap-7 px-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

<section className="glass flex flex-col gap-5 fade-in fade-in-delay-1 relative overflow-hidden rounded-2xl pt-6 pr-6 pb-6 pl-6 space-y-4" style={{opacity: `1`}}>
<div className="absolute inset-0 pointer-events-none">
<div className="absolute -top-8 -right-8 w-52 h-52 bg-gradient-to-br from-violet-800/30 via-transparent to-transparent rounded-full blur-2xl opacity-70"></div>
</div>
<header className="flex justify-between items-start">
<div className="">
<h2 className="text-lg font-semibold tracking-tight flex items-center gap-2 text-white">
<svg className="lucide lucide-calendar-clock w-5 h-5 text-violet-400" data-lucide="calendar-clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path><path d="M16 2v4"></path><path d="M8 2v4"></path><path d="M3 10h5"></path><path d="M17.5 17.5 16 16.3V14"></path><circle cx="16" cy="16" r="6"></circle></svg>
          Project Standup: Nebula Sprint
        </h2>
<p className="text-xs text-slate-400 mt-2 flex items-center gap-1">
<svg className="lucide lucide-calendar-days w-4 h-4" data-lucide="calendar-days" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path><path d="M8 14h.01"></path><path d="M12 14h.01"></path><path d="M16 14h.01"></path><path d="M8 18h.01"></path><path d="M12 18h.01"></path><path d="M16 18h.01"></path></svg>
          17 Oct 2024 | 09:30–10:15
        </p>
</div>
<button aria-label="More options" className="p-2 rounded-lg hover:bg-slate-700/40 transition">
<svg className="lucide lucide-more-vertical w-5 h-5 text-slate-400" data-lucide="more-vertical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
</button>
</header>
<div className="flex flex-wrap items-center gap-2">
<img alt="Alex D." className="w-8 h-8 rounded-full border-2 border-white/20 shadow -ml-0" src="https://randomuser.me/api/portraits/men/32.jpg" />
<img alt="Maya L." className="w-8 h-8 rounded-full border-2 border-white/20 shadow -ml-2" src="https://randomuser.me/api/portraits/women/65.jpg" />
<img alt="Jasper Q." className="w-8 h-8 rounded-full border-2 border-white/20 shadow -ml-2" src="https://randomuser.me/api/portraits/men/12.jpg" />
<img alt="Elina Y." className="w-8 h-8 rounded-full border-2 border-white/20 shadow -ml-2" src="https://randomuser.me/api/portraits/women/45.jpg" />
<img alt="Arjun P." className="w-8 h-8 rounded-full border-2 border-white/20 shadow -ml-2" src="https://randomuser.me/api/portraits/men/76.jpg" />
<span className="text-xs text-slate-400 -ml-1">+4</span>
</div>
<div className="grid grid-cols-2 gap-2 pt-1 text-xs">
<div className="flex items-center gap-2">
<span className="px-3 py-1 rounded-full bg-violet-800/40 text-violet-200 flex items-center gap-1 font-medium">
<svg className="lucide lucide-activity w-3 h-3" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg> Scheduled
        </span>
<span className="px-3 py-1 rounded-full bg-sky-800/30 text-sky-200 flex items-center gap-1 font-medium">
<svg className="lucide lucide-users w-3 h-3" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg> Dev Team
        </span>
</div>
<div className="flex items-center gap-2">
<span className="px-3 py-1 rounded-full bg-teal-800/30 text-teal-200 flex items-center gap-1 font-medium">
<svg className="lucide lucide-sparkles w-3 h-3" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path><path d="M20 3v4"></path><path d="M22 5h-4"></path><path d="M4 17v2"></path><path d="M5 18H3"></path></svg> Sprint 21
        </span>
<span className="px-3 py-1 rounded-full bg-amber-800/30 text-amber-200 flex items-center gap-1 font-medium">
<svg className="lucide lucide-check w-3 h-3" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> 5/6 Completed
        </span>
</div>
</div>
<div className="border-t border-slate-700/40 pt-3 mt-3 text-xs text-slate-400 flex flex-col gap-1">
<div className="">Agenda: <span className="font-medium text-slate-100">Review blockers, Demo new UI, Assign final QA</span></div>
<div className="flex items-center gap-1">
<svg className="lucide lucide-alert-circle w-3 h-3 text-rose-400" data-lucide="alert-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="8" y2="12"></line><line x1="12" x2="12.01" y1="16" y2="16"></line></svg>
<span className="">Blocker: API rate limits (Arjun)</span>
</div>
<div className="">
        Next: <span className="font-medium text-slate-100">Retrospective, 18 Oct • 16:00</span>
</div>
</div>
</section>

<section className="glass rounded-2xl overflow-hidden flex flex-col fade-in fade-in-delay-2 relative" style={{opacity: `1`}}>
<div className="absolute -top-8 -left-8 w-40 h-40 bg-gradient-to-br from-violet-700/30 via-transparent to-transparent rounded-full blur-2xl opacity-60 z-0"></div>
<div className="relative group z-10">
<img alt="Team video" className="object-cover w-full h-44 transition group-hover:scale-105 duration-300" src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&w=800&q=80" />
<button aria-label="Play video" className="absolute inset-0 flex items-center justify-center group">
<span className="sr-only">Play Replay</span>
<div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-lg flex items-center justify-center group-hover:scale-110 transition border border-violet-400/20 shadow-lg ring-2 ring-violet-400/20 group-hover:ring-violet-300/50">
<svg className="lucide lucide-play-circle w-6 h-6 text-violet-300" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
</div>
</button>
<span className="absolute top-3 left-3 bg-violet-700/80 text-white text-[10px] font-medium px-2 py-1 rounded-full shadow flex items-center gap-1">
<svg className="lucide lucide-bookmark w-3 h-3" data-lucide="bookmark" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg> Saved
      </span>
<span className="absolute top-3 right-3 bg-slate-900/70 text-violet-200 text-[10px] px-2 py-1 rounded-full flex items-center gap-1 shadow">
<svg className="lucide lucide-clock w-3 h-3" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg> 42:17
      </span>
</div>
<div className="z-10 pt-6 pr-6 pb-6 pl-6 space-y-4">
<h3 className="text-base font-semibold tracking-tight flex items-center gap-2 text-white">
<svg className="lucide lucide-video w-4 h-4 text-violet-400" data-lucide="video" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path><rect height="12" rx="2" width="14" x="2" y="6"></rect></svg>
        Sprint Demo: Nebula UI
      </h3>
<p className="text-xs text-slate-400 mt-1">By: <span className="font-medium text-slate-100">Maya Leclerc</span>, Frontend Lead</p>
<div className="flex items-center text-xs gap-2 mt-2">
<svg className="lucide lucide-calendar w-3 h-3 text-slate-500" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg> 15 Oct
        <svg className="lucide lucide-users w-3 h-3 text-slate-500 ml-2" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg> 16 views
        <svg className="lucide lucide-message-circle w-3 h-3 text-slate-500 ml-2" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path></svg> 4 comments
      </div>
<div className="mt-3 border-t border-slate-700/40 pt-3 grid grid-cols-2 gap-2 text-xs">
<div className="flex items-center gap-2">
<img alt="Jasper" className="w-6 h-6 rounded-full" src="https://randomuser.me/api/portraits/men/12.jpg" />
<span className="text-slate-200">"Transitions are much smoother!"</span>
</div>
<div className="flex items-center gap-2">
<img alt="Elina" className="w-6 h-6 rounded-full" src="https://randomuser.me/api/portraits/women/45.jpg" />
<span className="text-slate-200">"Love the new dark mode."</span>
</div>
</div>
<div className="mt-2 text-xs text-slate-500 flex items-center gap-2">
<svg className="lucide lucide-link w-3 h-3" data-lucide="link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
<a className="hover:underline text-violet-300" href="#">Copy link</a>
<span className="pl-2 border-l border-slate-700/40">#SprintDemo</span>
</div>
</div>
</section>

<section className="glass flex flex-col gap-4 fade-in fade-in-delay-3 relative rounded-2xl pt-6 pr-6 pb-6 pl-6 space-y-4" style={{opacity: `1`, minWidth: `288px`, minHeight: `288px`}}><div className="absolute bottom-0 left-0 w-40 h-24 bg-gradient-to-tr from-emerald-800/40 via-transparent to-transparent rounded-full blur-2xl opacity-50"></div><header className="flex justify-between items-center">
<h2 className="text-base font-semibold tracking-tight flex items-center gap-2 text-white">
<svg className="lucide lucide-smile w-5 h-5 text-emerald-400" data-lucide="smile" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" x2="9.01" y1="9" y2="9"></line><line x1="15" x2="15.01" y1="9" y2="9"></line></svg>
        Team Mood
      </h2>
<div className="flex items-center gap-1 text-emerald-300 text-xs font-medium">
<svg className="lucide lucide-arrow-up-circle w-4 h-4" data-lucide="arrow-up-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m16 12-4-4-4 4"></path><path d="M12 16V8"></path></svg>
        Upbeat
      </div>
</header><div className="w-full flex flex-col md:flex-row items-center gap-5">
<div className="w-36 h-36 md:w-44 md:h-44">
<canvas aria-label="Sentiment Chart" className="" height="352" id="sentimentChart" role="img" style={{display: `block`, boxSizing: `border-box`, height: `176px`, width: `176px`}} width="352"></canvas>
</div>
<div className="flex flex-col space-y-2">
<div className="flex items-center gap-2">
<span className="inline-block w-3 h-3 bg-emerald-400 rounded-sm shadow-md"></span>
<span className="text-sm text-slate-200 font-medium">Positive</span>
<span className="font-semibold text-emerald-200 ml-auto">74%</span>
</div>
<div className="flex items-center gap-2">
<span className="inline-block w-3 h-3 bg-amber-400 rounded-sm shadow-md"></span>
<span className="text-sm text-slate-200 font-medium">Neutral</span>
<span className="font-semibold text-amber-200 ml-auto">18%</span>
</div>
<div className="flex items-center gap-2">
<span className="inline-block w-3 h-3 bg-rose-400 rounded-sm shadow-md"></span>
<span className="text-sm text-slate-200 font-medium">Negative</span>
<span className="font-semibold text-rose-200 ml-auto">8%</span>
</div>
</div>
</div><div className="text-xs text-slate-400 flex flex-col gap-1 mt-2">
<div className="flex items-center gap-1">
<svg className="lucide lucide-quote w-3 h-3 text-emerald-400" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
        "Team feels more confident post-release."
      </div>
<div className="flex items-center gap-1">
<svg className="lucide lucide-quote w-3 h-3 text-amber-400" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
        "A few concerns on workload, but overall positive."
      </div>
</div><div className="mt-2 text-xs text-slate-500 flex items-center gap-1">
<svg className="lucide lucide-info w-3 h-3" data-lucide="info" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
      Based on 14 feedback forms.
    </div>
</section>

<section className="glass flex flex-col gap-6 fade-in fade-in-delay-4 relative overflow-hidden rounded-2xl pt-6 pr-6 pb-6 pl-6 space-y-2" style={{opacity: `1`}}>
<div className="absolute -bottom-8 right-0 w-48 h-28 opacity-70 bg-gradient-to-tr from-fuchsia-700/40 via-transparent to-transparent rounded-full blur-2xl space-y-4"></div>
<header className="flex justify-between items-start">
<div className="">
<h2 className="text-base font-semibold tracking-tight flex items-center gap-2 text-white">
<svg className="lucide lucide-compass w-5 h-5 text-fuchsia-400" data-lucide="compass" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path><circle cx="12" cy="12" r="10"></circle></svg>
          Strategy Alignment
        </h2>
<p className="text-xs text-slate-400 mt-1">22 Nov 2024</p>
</div>
<button aria-label="View details" className="p-2 rounded-lg hover:bg-slate-700/40 transition">
<svg className="lucide lucide-chevron-right w-5 h-5 text-slate-400" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</header>
<div className="flex items-center gap-4 text-xs text-slate-400">
<div className="flex items-center gap-1">
<svg className="lucide lucide-clock w-4 h-4 text-fuchsia-400" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
<span>1h 10m</span>
</div>
<div className="flex items-center gap-1">
<svg className="lucide lucide-user-check w-4 h-4 text-slate-400" data-lucide="user-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 11 2 2 4-4"></path><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></svg>
<span>18 Attending</span>
</div>
<div className="flex items-center gap-1">
<svg className="lucide lucide-mic w-4 h-4 text-cyan-400" data-lucide="mic" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 19v3"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><rect height="13" rx="3" width="6" x="9" y="2"></rect></svg>
<span className="">Keynote: Samira Abbas</span>
</div>
</div>
<nav className="flex gap-4 text-sm font-medium mb-1">
<button className="relative pb-1 text-fuchsia-300">Insights
        <span className="absolute -bottom-[2px] left-0 right-0 h-[2px] bg-fuchsia-400 rounded"></span>
</button>
<button className="pb-1 text-slate-500 hover:text-slate-200 transition">Decisions</button>
<button className="pb-1 text-slate-500 hover:text-slate-200 transition">Docs</button>
</nav>
<div className="grid grid-cols-2 gap-4 text-xs">
<div className="flex flex-col gap-1">
<div className="flex justify-between items-center">
<span className="text-slate-400">Vision</span>
<span className="font-semibold text-fuchsia-300">60%</span>
</div>
<div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-fuchsia-400 transition-all" style={{width: `60%`}}></div>
</div>
<span className="text-xs text-fuchsia-300 mt-1">Main focus: 2025 roadmap</span>
</div>
<div className="flex flex-col gap-1">
<div className="flex justify-between items-center">
<span className="text-slate-400">Budget</span>
<span className="font-semibold text-cyan-300">25%</span>
</div>
<div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-cyan-400 transition-all" style={{width: `25%`}}></div>
</div>
<span className="text-xs text-cyan-300 mt-1">Q4 allocations, cost-savings</span>
</div>
<div className="flex flex-col gap-1">
<div className="flex justify-between items-center">
<span className="text-slate-400">Markets</span>
<span className="font-semibold text-emerald-300">10%</span>
</div>
<div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-emerald-400 transition-all" style={{width: `10%`}}></div>
</div>
<span className="text-xs text-emerald-300 mt-1">Expansion: EMEA</span>
</div>
<div className="flex flex-col gap-1">
<div className="flex justify-between items-center">
<span className="text-slate-400">Risks</span>
<span className="font-semibold text-rose-300">5%</span>
</div>
<div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-rose-400 transition-all" style={{width: `5%`}}></div>
</div>
<span className="text-xs text-rose-300 mt-1">Supply chain, compliance</span>
</div>
</div>
<div className="mt-4 text-xs text-slate-200 border-t border-slate-700/40 pt-3">
<span className="font-semibold text-fuchsia-300">Outcome:</span> Alignment on new product vision, budget review completed, <span className="text-emerald-300">action points assigned</span> to all leads.
    </div>
</section>

<section className="glass flex flex-col gap-4 fade-in fade-in-delay-8 relative rounded-2xl pt-6 pr-6 pb-6 pl-6 space-y-4" style={{opacity: `1`}}>
<div className="absolute right-0 -bottom-8 w-32 h-16 bg-gradient-to-tr from-violet-700/30 via-transparent to-transparent rounded-full blur-2xl opacity-60"></div>
<div className="relative">
<input aria-label="Search members" autocomplete="off" className="w-full pl-10 pr-10 py-2 text-sm rounded-lg border border-violet-400/40 bg-slate-800/60 text-slate-100 placeholder:text-slate-400 focus:ring-2 focus:ring-violet-400 outline-none" placeholder="Find team members…" type="text" />
<svg className="lucide lucide-search w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<svg className="lucide lucide-x w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</div>
<div className="flex flex-col divide-y divide-slate-700/40">
<div aria-label="Select Jasper Quill" className="member-row flex items-center justify-between py-3 cursor-pointer hover:bg-slate-800/40 transition rounded" tabindex="0">
<div className="flex items-center gap-3">
<img alt="Jasper Quill" className="w-9 h-9 rounded-full" src="https://randomuser.me/api/portraits/men/41.jpg" />
<div>
<p className="text-sm font-medium text-white">Jasper Quill <span className="ml-1 text-xs bg-emerald-800/40 text-emerald-300 px-2 py-0.5 rounded">Online</span></p>
<p className="text-xs text-slate-400">jasper.quill@cosmo.io</p>
<span className="text-xs text-violet-300">Backend Engineer</span>
</div>
</div>
<svg className="lucide lucide-circle w-5 h-5 text-slate-500 status-icon" data-lucide="circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<div aria-label="Select Elina Yorke" className="member-row flex items-center justify-between py-3 cursor-pointer hover:bg-slate-800/40 transition rounded" tabindex="0">
<div className="flex items-center gap-3">
<img alt="Elina Yorke" className="w-9 h-9 rounded-full" src="https://randomuser.me/api/portraits/women/27.jpg" />
<div>
<p className="text-sm font-medium text-white">Elina Yorke <span className="ml-1 text-xs bg-amber-800/40 text-amber-300 px-2 py-0.5 rounded">In Meeting</span></p>
<p className="text-xs text-slate-400">elina.yorke@cosmo.io</p>
<span className="text-xs text-fuchsia-300">Product Designer</span>
</div>
</div>
<svg className="lucide lucide-circle w-5 h-5 text-violet-300 status-icon" data-lucide="circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<div aria-label="Select Arjun Patel" className="member-row flex items-center justify-between py-3 cursor-pointer hover:bg-slate-800/40 transition rounded" tabindex="0">
<div className="flex items-center gap-3">
<img alt="Arjun Patel" className="w-9 h-9 rounded-full" src="https://randomuser.me/api/portraits/men/55.jpg" />
<div>
<p className="text-sm font-medium text-white">Arjun Patel <span className="ml-1 text-xs bg-slate-800/40 text-slate-300 px-2 py-0.5 rounded">Offline</span></p>
<p className="text-xs text-slate-400">arjun.patel@cosmo.io</p>
<span className="text-xs text-cyan-300">QA Specialist</span>
</div>
</div>
<svg className="lucide lucide-circle w-5 h-5 text-slate-500 status-icon" data-lucide="circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle></svg>
</div>
</div>
<div className="mt-3 text-xs text-slate-500 flex items-center gap-2">
<svg className="lucide lucide-users w-3 h-3" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg> 12 results
    </div>
</section>

<section className="glass rounded-2xl p-6 flex flex-col gap-4 fade-in fade-in-delay-9 relative" style={{opacity: `1`}}>
<div className="absolute left-0 bottom-0 w-40 h-24 bg-gradient-to-tr from-emerald-800/40 via-transparent to-transparent rounded-full blur-2xl opacity-40"></div>
<header className="flex justify-between items-start">
<h2 className="text-base font-semibold tracking-tight flex items-center gap-2 text-white">
<svg className="lucide lucide-check-square w-5 h-5 text-emerald-400" data-lucide="check-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344"></path><path d="m9 11 3 3L22 4"></path></svg>
        Next Actions
      </h2>
<button aria-label="More options" className="p-2 rounded-lg hover:bg-slate-700/40 transition">
<svg className="lucide lucide-more-horizontal w-5 h-5 text-slate-400" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
</header>
<div className="flex flex-col gap-2 p-4 rounded-lg border border-slate-700/40 hover:bg-slate-800/40 transition group glass-light">
<div className="flex justify-between items-center">
<p className="text-sm font-medium flex items-center gap-2 text-white">
<svg className="lucide lucide-file-text w-4 h-4 text-slate-400" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg> Refine API Documentation
        </p>
<button aria-label="Mark complete" className="rounded-lg p-1 hover:bg-emerald-800/30 group-hover:ring-1 group-hover:ring-emerald-400 transition focus:ring-2 focus:ring-emerald-400">
<svg className="lucide lucide-check w-4 h-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</button>
</div>
<p className="text-xs text-slate-400">Due: 20 Oct 2024 · <span className="text-emerald-300">High Priority</span></p>
<div className="flex items-center gap-2">
<img alt="Jasper" className="w-6 h-6 rounded-full" src="https://randomuser.me/api/portraits/men/41.jpg" />
<p className="text-xs"><span className="text-slate-400">Assigned to </span><span className="font-medium text-white">Jasper</span></p>
<span className="ml-2 px-2 py-0.5 rounded bg-violet-800/40 text-violet-200 text-xs">Docs</span>
</div>
</div>
<div className="flex flex-col gap-2 p-4 rounded-lg border border-slate-700/40 hover:bg-slate-800/40 transition group glass-light">
<div className="flex justify-between items-center">
<p className="text-sm font-medium flex items-center gap-2 text-white">
<svg className="lucide lucide-globe w-4 h-4 text-slate-400" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg> Deploy Cosmos Website
        </p>
<button aria-label="Mark complete" className="rounded-lg p-1 hover:bg-emerald-800/30 group-hover:ring-1 group-hover:ring-emerald-400 transition focus:ring-2 focus:ring-emerald-400">
<svg className="lucide lucide-check w-4 h-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</button>
</div>
<p className="text-xs text-slate-400">Due: 25 Oct 2024 · <span className="text-amber-300">Medium Priority</span></p>
<div className="flex items-center gap-2">
<img alt="Elina" className="w-6 h-6 rounded-full" src="https://randomuser.me/api/portraits/women/27.jpg" />
<p className="text-xs"><span className="text-slate-400">Assigned to </span><span className="font-medium text-white">Elina</span></p>
<span className="ml-2 px-2 py-0.5 rounded bg-fuchsia-800/40 text-fuchsia-200 text-xs">Web</span>
</div>
</div>
<div className="flex flex-col gap-2 p-4 rounded-lg border border-slate-700/40 hover:bg-slate-800/40 transition group glass-light">
<div className="flex justify-between items-center">
<p className="text-sm font-medium flex items-center gap-2 text-white">
<svg className="lucide lucide-shield-check w-4 h-4 text-slate-400" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg> Review Security Checklist
        </p>
<button aria-label="Mark complete" className="rounded-lg p-1 hover:bg-emerald-800/30 group-hover:ring-1 group-hover:ring-emerald-400 transition focus:ring-2 focus:ring-emerald-400">
<svg className="lucide lucide-check w-4 h-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</button>
</div>
<p className="text-xs text-slate-400">Due: 22 Oct 2024 · <span className="text-rose-300">Urgent</span></p>
<div className="flex items-center gap-2">
<img alt="Arjun" className="w-6 h-6 rounded-full" src="https://randomuser.me/api/portraits/men/55.jpg" />
<p className="text-xs"><span className="text-slate-400">Assigned to </span><span className="font-medium text-white">Arjun</span></p>
<span className="ml-2 px-2 py-0.5 rounded bg-cyan-800/40 text-cyan-200 text-xs">QA</span>
</div>
</div>
<div className="mt-2 text-xs text-slate-500 flex items-center gap-2">
<svg className="lucide lucide-list-checks w-3 h-3" data-lucide="list-checks" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m3 17 2 2 4-4"></path><path d="m3 7 2 2 4-4"></path><path d="M13 6h8"></path><path d="M13 12h8"></path><path d="M13 18h8"></path></svg> 3 actions, 1 overdue
    </div>
</section>
</main>


    </>
  );
}
