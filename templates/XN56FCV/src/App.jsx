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
            const ctx = document.getElementById('sentimentChart').getContext('2d');
            const data = {
              labels: ['Positive', 'Neutral', 'Negative'],
              datasets: [{
                data: [69, 23, 8],
                backgroundColor: [
                  'rgba(16, 185, 129, 0.9)',
                  'rgba(251, 191, 36, 0.85)',
                  'rgba(244, 63, 94, 0.9)'
                ],
                borderColor: [
                  'rgba(16, 185, 129, 1)',
                  'rgba(251, 191, 36, 1)',
                  'rgba(244, 63, 94, 1)'
                ],
                borderWidth: 2,
                hoverOffset: 30,
                cutout: '75%',
                spacing: 2,
              }]
            };
            const options = {
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  display: false
                },
                tooltip: {
                  enabled: true,
                  backgroundColor: 'rgba(35, 39, 47, 0.85)',
                  titleColor: '#a1a1aa',
                  bodyColor: '#FFFFFF',
                  cornerRadius: 4,
                  padding: 8,
                  displayColors: false,
                }
              },
              animation: {
                animateRotate: true,
                duration: 1000,
                easing: 'easeOutQuart'
              }
            };
            if(window.sentimentDonut) {
              window.sentimentDonut.destroy();
            }
            window.sentimentDonut = new Chart(ctx, {
              type: 'doughnut',
              data: data,
              options: options,
            });
          });
        


    // Chart Data
    const values = [69, 23, 8];
    const colors = [
      "rgba(16, 185, 129, 0.92)", // emerald-400
      "rgba(251, 191, 36, 0.86)", // amber-400
      "rgba(244, 63, 94, 0.88)"  // rose-400
    ];
    const borderColors = [
      "rgba(16, 185, 129, 1)",
      "rgba(251, 191, 36, 1)",
      "rgba(244, 63, 94, 1)"
    ];
    // Chart
    const ctx = document.getElementById('sentimentChart').getContext('2d');
    const donutChart = new Chart(ctx, {
      type: 'd
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
      

<div className="absolute inset-0 -z-10 pointer-events-none" id="bg-wrap">
<svg className="w-full h-full" preserveaspectratio="xMidYMid slice" viewbox="0 0 100 100">
<defs>
<radialgradient cx="50%" cy="50%" fx="0.441602%" fy="50%" id="Gradient1" r=".5">
<animate attributename="fx" dur="34s" repeatcount="indefinite" values="0%;3%;0%"></animate>
<stop offset="0%" stop-color="#a5b4fc"></stop>
<stop offset="100%" stop-color="rgba(165,180,252,0)"></stop>
</radialgradient>
<radialgradient cx="50%" cy="50%" fx="2.68147%" fy="50%" id="Gradient2" r=".5">
<animate attributename="fx" dur="23.5s" repeatcount="indefinite" values="0%;3%;0%"></animate>
<stop offset="0%" stop-color="#fde68a"></stop>
<stop offset="100%" stop-color="rgba(253,230,138,0)"></stop>
</radialgradient>
<radialgradient cx="50%" cy="50%" fx="0.836536%" fy="50%" id="Gradient3" r=".5">
<animate attributename="fx" dur="21.5s" repeatcount="indefinite" values="0%;3%;0%"></animate>
<stop offset="0%" stop-color="#6ee7b7"></stop>
<stop offset="100%" stop-color="rgba(110,231,183,0)"></stop>
</radialgradient>
</defs>
<rect fill="url(#Gradient1)" height="100%" transform="rotate(334.41 50 50)" width="100%" x="13.744%" y="1.18473%">
<animate attributename="x" dur="20s" repeatcount="indefinite" values="25%;0%;25%"></animate>
<animate attributename="y" dur="21s" repeatcount="indefinite" values="0%;25%;0%"></animate>
</rect>
<rect fill="url(#Gradient2)" height="100%" transform="rotate(255.072 50 50)" width="100%" x="-2.17916%" y="35.4267%">
<animate attributename="x" dur="23s" repeatcount="indefinite" values="-25%;0%;-25%"></animate>
<animate attributename="y" dur="24s" repeatcount="indefinite" values="0%;50%;0%"></animate>
</rect>
<rect fill="url(#Gradient3)" height="100%" transform="rotate(139.903 50 50)" width="100%" x="9.00483%" y="14.5733%">
<animate attributename="x" dur="25s" repeatcount="indefinite" values="0%;25%;0%"></animate>
<animate attributename="y" dur="12s" repeatcount="indefinite" values="0%;25%;0%"></animate>
</rect>
</svg>
</div>

<nav className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-[#e0e7ef] px-6 md:px-12 flex items-center h-[72px] w-full fade-in fade-in-delay-1">
<a className="flex items-center space-x-2 mr-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6366f1] rounded-lg" href="#">
<span className="text-lg font-semibold tracking-tight text-[#23272F]">NexaFlow</span>
</a>
<ul className="hidden md:flex items-center gap-8 text-base font-medium text-[#83889a]">
<li className=""><a className="hover:text-[#23272F] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6366f1] rounded-lg" href="#">Workshops</a></li>
<li><a className="hover:text-[#23272F] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6366f1] rounded-lg" href="#">Forum</a></li>
<li><a className="hover:text-[#23272F] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6366f1] rounded-lg" href="#">Guides</a></li>
</ul>
<div className="flex-1"></div>
<div className="flex items-center space-x-3">
<a className="text-[#83889a] font-medium px-4 py-2 rounded-lg hover:bg-[#f1f5f9] transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6366f1]" href="#">Log In</a>
<a className="bg-[#6366f1] text-white font-semibold px-5 py-2 rounded-lg hover:bg-[#4f46e5] transition shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6366f1]" href="#">Join Now</a>
</div>
</nav>

<main className="flex flex-col items-center justify-center flex-1 w-full px-4 pt-10 pb-20">
<section className="text-center max-w-2xl mx-auto px-2 fade-in fade-in-delay-2">
<h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight text-[#23272F]">
        Accelerate Your Growth.<br className="hidden md:inline"/> Certify Your Expertise.
      </h1>
<p className="mt-6 text-lg text-[#83889a] font-normal max-w-xl mx-auto">
        Level up with live workshops in design, development, and strategy.<br className="hidden sm:inline"/>
        Showcase your skills with dynamic, verifiable certificates.
      </p>
<div className="mt-10 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 w-full">
<a className="px-7 py-3 bg-[#6366f1] text-white rounded-xl font-semibold text-base shadow-lg transition hover:bg-[#4f46e5] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6366f1]" href="#">
          Explore 150+ Tracks
        </a>
<a className="px-7 py-3 bg-transparent border border-[#6366f1] text-[#6366f1] rounded-xl font-semibold text-base transition hover:bg-[#f1f5f9] hover:text-[#23272F] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6366f1]" href="#">
          Try Free Session
        </a>
</div>
</section>

<main className="grid w-full max-w-7xl gap-7 px-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16">

<section className="glass flex flex-col gap-5 fade-in fade-in-delay-3 relative overflow-hidden rounded-2xl pt-6 pr-6 pb-6 pl-6 space-y-4">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute -top-8 -right-8 w-52 h-52 bg-gradient-to-br from-indigo-100/60 via-transparent to-transparent rounded-full blur-2xl opacity-80"></div>
</div>
<header className="flex justify-between items-start">
<div>
<h2 className="text-lg font-semibold tracking-tight flex items-center gap-2 text-[#23272F]">
<svg className="lucide lucide-calendar-clock w-5 h-5 text-[#6366f1]" data-lucide="calendar-clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path><path d="M16 2v4"></path><path d="M8 2v4"></path><path d="M3 10h5"></path><path d="M17.5 17.5 16 16.3V14"></path><circle cx="16" cy="16" r="6"></circle></svg>
              Daily Sync: Aurora Plan
            </h2>
<p className="text-xs text-[#a1a1aa] mt-2 flex items-center gap-1">
<svg className="lucide lucide-calendar-days w-4 h-4" data-lucide="calendar-days" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path><path d="M8 14h.01"></path><path d="M12 14h.01"></path><path d="M16 14h.01"></path><path d="M8 18h.01"></path><path d="M12 18h.01"></path><path d="M16 18h.01"></path></svg>
              21 Nov 2024 | 10:00–10:45
            </p>
</div>
<button aria-label="More options" className="p-2 rounded-lg hover:bg-indigo-50 transition">
<svg className="lucide lucide-more-vertical w-5 h-5 text-[#a1a1aa]" data-lucide="more-vertical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
</button>
</header>
<div className="flex flex-wrap items-center gap-2">
<img alt="Jordan Lee" className="w-8 h-8 rounded-full border-2 border-white/60 shadow -ml-0" src="https://randomuser.me/api/portraits/men/85.jpg"/>
<img alt="Priya Agarwal" className="w-8 h-8 rounded-full border-2 border-white/60 shadow -ml-2" src="https://randomuser.me/api/portraits/women/52.jpg"/>
<img alt="Carlos Rivera" className="w-8 h-8 rounded-full border-2 border-white/60 shadow -ml-2" src="https://randomuser.me/api/portraits/men/31.jpg"/>
<img alt="Lina Zhou" className="w-8 h-8 rounded-full border-2 border-white/60 shadow -ml-2" src="https://randomuser.me/api/portraits/women/88.jpg"/>
<img alt="Benji Scott" className="w-8 h-8 rounded-full border-2 border-white/60 shadow -ml-2" src="https://randomuser.me/api/portraits/men/45.jpg"/>
<span className="text-xs text-[#a1a1aa] -ml-1">+3</span>
</div>
<div className="grid grid-cols-2 gap-2 pt-1 text-xs">
<div className="flex items-center gap-2">
<span className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 flex items-center gap-1 font-medium">
<svg className="lucide lucide-activity w-3 h-3" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg> Running
            </span>
<span className="px-3 py-1 rounded-full bg-sky-100 text-sky-800 flex items-center gap-1 font-medium">
<svg className="lucide lucide-users w-3 h-3" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg> UX Core
            </span>
</div>
<div className="flex items-center gap-2">
<span className="px-3 py-1 rounded-full bg-teal-100 text-teal-800 flex items-center gap-1 font-medium">
<svg className="lucide lucide-sparkles w-3 h-3" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path><path d="M20 3v4"></path><path d="M22 5h-4"></path><path d="M4 17v2"></path><path d="M5 18H3"></path></svg> Sprint 4
            </span>
<span className="px-3 py-1 rounded-full bg-amber-100 text-amber-800 flex items-center gap-1 font-medium">
<svg className="lucide lucide-check w-3 h-3" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> 3/5 Done
            </span>
</div>
</div>
<div className="border-t border-[#e0e7ef] pt-3 mt-3 text-xs text-[#83889a] flex flex-col gap-1">
<div>Agenda: <span className="font-medium text-[#23272F]">Review flows, Discuss feedback, Assign follow-ups</span></div>
<div className="flex items-center gap-1">
<svg className="lucide lucide-alert-circle w-3 h-3 text-rose-400" data-lucide="alert-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="8" y2="12"></line><line x1="12" x2="12.01" y1="16" y2="16"></line></svg>
<span>Blocker: Figma plugin issue (Lina)</span>
</div>
<div>
            Next: <span className="font-medium text-[#23272F]">Retro, 22 Nov • 11:00</span>
</div>
</div>
</section>

<section className="glass rounded-2xl overflow-hidden flex flex-col fade-in fade-in-delay-4 relative" style={{opacity: '1'}}>
<div className="absolute -top-8 -left-8 w-40 h-40 bg-gradient-to-br from-indigo-100/60 via-transparent to-transparent rounded-full blur-2xl opacity-70 z-0"></div>
<div className="relative group z-10">
<img alt="Replay session" className="object-cover w-full h-44 transition group-hover:scale-105 duration-300" src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&amp;w=800&amp;q=80"/>
<button aria-label="Play video" className="absolute inset-0 flex items-center justify-center group">
<span className="sr-only">Play Replay</span>
<div className="w-12 h-12 rounded-full bg-white/70 backdrop-blur-lg flex items-center justify-center group-hover:scale-110 transition border border-indigo-300/20 shadow-lg ring-2 ring-indigo-300/20 group-hover:ring-indigo-400/50">
<svg className="lucide lucide-play-circle w-6 h-6 text-indigo-400" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
</div>
</button>
<span className="absolute top-3 left-3 bg-indigo-500/90 text-white text-[10px] font-medium px-2 py-1 rounded-full shadow flex items-center gap-1">
<svg className="lucide lucide-bookmark w-3 h-3" data-lucide="bookmark" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg> Saved
          </span>
<span className="absolute top-3 right-3 bg-white/80 text-indigo-700 text-[10px] px-2 py-1 rounded-full flex items-center gap-1 shadow">
<svg className="lucide lucide-clock w-3 h-3" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg> 36:10
          </span>
</div>
<div className="z-10 pt-6 pr-6 pb-6 pl-6 space-y-4">
<h3 className="text-base font-semibold tracking-tight flex items-center gap-2 text-[#23272F]">
<svg className="lucide lucide-video w-4 h-4 text-indigo-400" data-lucide="video" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path><rect height="12" rx="2" width="14" x="2" y="6"></rect></svg>
            Feedback Recap: Aurora
          </h3>
<p className="text-xs text-[#83889a] mt-1">By: <span className="font-medium text-[#23272F]">Priya Agarwal</span>, UI Lead</p>
<div className="flex items-center text-xs gap-2 mt-2">
<svg className="lucide lucide-calendar w-3 h-3 text-[#a1a1aa]" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg> 20 Nov
            <svg className="lucide lucide-users w-3 h-3 text-[#a1a1aa] ml-2" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg> 19 views
            <svg className="lucide lucide-message-circle w-3 h-3 text-[#a1a1aa] ml-2" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path></svg> 2 comments
          </div>
<div className="mt-3 border-t border-[#e0e7ef] pt-3 grid grid-cols-2 gap-2 text-xs">
<div className="flex items-center gap-2">
<img alt="Carlos" className="w-6 h-6 rounded-full" src="https://randomuser.me/api/portraits/men/31.jpg"/>
<span className="text-[#23272F]">"Navigation is more intuitive!"</span>
</div>
<div className="flex items-center gap-2">
<img alt="Lina" className="w-6 h-6 rounded-full" src="https://randomuser.me/api/portraits/women/88.jpg"/>
<span className="text-[#23272F]">"Loving the color palette."</span>
</div>
</div>
<div className="mt-2 text-xs text-[#a1a1aa] flex items-center gap-2">
<svg className="lucide lucide-link w-3 h-3" data-lucide="link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
<a className="hover:underline text-indigo-500" href="#">Copy link</a>
<span className="pl-2 border-l border-[#e0e7ef]">#AuroraFeedback</span>
</div>
</div>
</section>

<section className="glass flex flex-col gap-4 fade-in fade-in-delay-5 relative rounded-2xl pt-6 pr-6 pb-6 pl-6 space-y-4" id="aura-emc52r67l" style={{opacity: '1', minWidth: '288px', minHeight: '288px'}}>
<div className="absolute bottom-0 left-0 w-40 h-24 bg-gradient-to-tr from-emerald-200/50 via-transparent to-transparent rounded-full blur-2xl opacity-70"></div>
<header className="flex justify-between items-center">
<h2 className="text-base font-semibold tracking-tight flex items-center gap-2 text-[#23272F]">
<svg className="lucide lucide-smile w-5 h-5 text-emerald-400" data-lucide="smile" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" x2="9.01" y1="9" y2="9"></line><line x1="15" x2="15.01" y1="9" y2="9"></line></svg>
            Team Pulse
          </h2>
<div className="flex items-center gap-1 text-emerald-500 text-xs font-medium">
<svg className="lucide lucide-arrow-up-circle w-4 h-4" data-lucide="arrow-up-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m16 12-4-4-4 4"></path><path d="M12 16V8"></path></svg>
            Positive
          </div>
</header>
<div className="w-full flex flex-col sm:flex-row items-center gap-6">
<div className="w-40 h-40 relative">
<canvas aria-label="Sentiment Chart" height="320" id="sentimentChart" role="img" style={{display: 'block', boxSizing: 'border-box', height: '160px', width: '146px'}} width="292"></canvas>

<div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none" id="donutCenterLabel">
<span className="text-3xl font-semibold text-emerald-500" id="donutMain">69%</span>
<span className="text-xs text-[#83889a]">Positive</span>
</div>
</div>
<div className="flex flex-col gap-3 w-full max-w-xs">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="inline-block w-4 h-4 bg-emerald-400 rounded-sm"></span>
<span className="text-sm text-[#23272F] font-medium">Positive</span>
</div>
<span className="font-semibold text-emerald-500" id="posval">69%</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="inline-block w-4 h-4 bg-amber-400 rounded-sm"></span>
<span className="text-sm text-[#23272F] font-medium">Neutral</span>
</div>
<span className="font-semibold text-amber-500" id="neutval">23%</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="inline-block w-4 h-4 bg-rose-400 rounded-sm"></span>
<span className="text-sm text-[#23272F] font-medium">Negative</span>
</div>
<span className="font-semibold text-rose-500" id="negval">8%</span>
</div>
</div>
</div>
<div className="mt-4 text-xs text-[#83889a] border-t border-[#e0e7ef] pt-3">
<span className="font-semibold text-[#23272F]">"Collaboration improved, and progress feels steady!"</span> — Group reflection
        </div>

</section>
</main>
</main>

<footer className="w-full text-center py-8 border-t border-[#e0e7ef] text-[#83889a] text-sm mt-auto fade-in fade-in-delay-5">
<span className="font-semibold text-[#6366f1]">NexaFlow</span> © 2024. Empowering growth and teamwork.
    <span className="hidden sm:inline">| <a className="hover:text-[#23272F] underline transition" href="#">Privacy</a> • <a className="hover:text-[#23272F] underline transition" href="#">Terms</a></span>
</footer>



    </>
  );
}
