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



    lucide.createIcons();
    // Particles.js
    particlesJS("particles-js", {
      "particles": {
        "number": { "value": 80, "density": { "enable": true, "value_area": 1200 } },
        "color": { "value": ["#a684fa","#818cf8","#c7d2fe","#7c3aed","#f5f3ff"] },
        "shape": { "type": "circle" },
        "opacity": { "value": 0.13, "random": true },
        "size": { "value": 4, "random": true },
        "line_linked": { "enable": false },
        "move": { "enable": true, "speed": 0.5, "direction": "none", "straight": false, "out_mode": "out" }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": { "onhover": { "enable": true, "mode": "repulse" }, "onclick": { "enable": false } },
        "modes": { "repulse": { "distance": 80, "duration": 0.4 } }
      },
      "retina_detect": true
    });

    // Chart.js
    setTimeout(()=>{ // Wait for DOM
      const ctx = document.getElementById('activityChart').getContext('2d');
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
          datasets: [{
            label: 'Minutes',
            data: [50, 75, 40, 90, 120, 80, 110],
            fill: true,
            backgroundColor: 'rgba(129,140,248,0.09)',
            borderColor: '#a684fa',
            borderWidth: 2.5,
            pointRadius: 3.5,
            pointBackgroundColor: '#7c3aed',
            tension: 0.38
          }]
        },
        options: {
          responsive: true,
          plugins: { legend: { display: false }},
          scales: {
            y: {
              beginAtZero: true,
              display: false
            },
            x: {
              ticks: { color: '#d1d5db', font: { family: 'Inter', weight: 500, size: 11 }},
              grid: { display: false }
            }
          }
        }
      });
    }, 220);

    // Typewriter Effect for Headline
    const typewriterText = document.getElementById('typewriter-text');
    const typewriterSwipe = document.getElementById('typewriter-swipe');
    const words = [
      {text: "Design", color: "#a684fa"},
      {text: "Code", color: "#7c3aed"}
    ];
    let wordIndex = 0;
    let charIndex = 0;
    let typing = true;
    let eraseTimeout;

    function typeWord(word, cb) {
      if(charIndex <= word.length) {
        typewriterText.textContent = word.slice(0, charIndex);
        charIndex++;
        setTimeout(() => typeWord(word, cb), 80);
      } else {
        setTimeout(cb, 500);
      }
    }
    function eraseWord(word, cb) {
      typewriterSwipe.classList.add('active');
      setTimeout(() => {
        typewriterText.textContent = "";
        typewriterSwipe.classList.remove('active');
        setTimeout(cb, 130);
      }, 320); // swipe duration
    }

    function runTypewriter() {
      const current = words[wordIndex % words.length];
      typewriterText.style.color = current.color;
      charIndex = 0;
      typeWord(current.text, () => {
        setTimeout(() => {
          eraseWord(current.text, () => {
            wordIndex++;
            setTimeout(runTypewriter, 180);
          });
        }, wordIndex % 2 === 0 ? 1200 : 900); // Design lingers longer
      });
    }
    // Kick off after DOMContentLoaded
    window.addEventListener('DOMContentLoaded', () => {
      runTypewriter();
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
      

<div className="absolute inset-0 z-0 pointer-events-none" id="particles-js"><canvas className="particles-js-canvas-el" height="2576" style={{width: '100%', height: '100%'}} width="2640"></canvas></div>

<nav className="w-full max-w-7xl mx-auto px-4 md:px-8 py-5 flex items-center justify-between z-30 relative animate-fadeInUp delay-100">
<div className="flex items-center space-x-2">
<span className="text-lg font-semibold tracking-tight text-white ml-0">DevUI</span>
</div>
<ul className="hidden md:flex items-center justify-center space-x-10 text-sm text-slate-200 font-medium mx-auto">
<li className=""><a className="hover:text-indigo-400 transition-colors focus:outline-none" href="#">Courses</a></li>
<li><a className="hover:text-indigo-400 transition-colors focus:outline-none" href="#">Community</a></li>
<li className=""><a className="hover:text-indigo-400 transition-colors focus:outline-none" href="#">Resources</a></li>
</ul>
<div className="flex items-center space-x-4">
<a className="relative px-5 py-2 rounded-lg border border-slate-600 text-slate-100 bg-white/5 font-medium text-sm hover:bg-indigo-500/10 transition shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500" href="#">
        
        Sign In
      </a>
<a className="px-5 py-2 rounded-lg font-medium text-sm text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 hover:brightness-110" href="#">Get Started</a>
</div>
</nav>

<header className="w-full max-w-4xl mx-auto pt-8 pb-5 px-4 md:px-0 z-30 relative animate-fadeInUp delay-200 text-center">
<h1 className="headline-walsheim md:text-5xl [text-shadow:_0_2px_16px_rgba(120,80,255,0.08)] text-5xl tracking-tight mb-3">
      Master <span aria-live="polite" className="typewriter-main relative align-baseline">
<span className="relative z-10" id="typewriter-text" style={{color: 'rgb(166, 132, 250)'}}>Design</span>
<span aria-hidden="true" className="typewriter-cursor">|</span>
<span className="typewriter-swipe" id="typewriter-swipe"></span>
</span>
      to Build Stunning Interfaces
    </h1>
<p className="text-lg md:text-xl text-indigo-200 max-w-2xl font-medium mx-auto">
      Learn to create beautiful, functional apps from scratch. From Figma to React, unlock your creative and technical potential with hands-on, project-based learning.
    </p>
</header>

<main className="flex flex-1 items-center justify-center py-6 md:py-10 relative z-10">
<div aria-label="Desktop Application Window" className="card-glass window-float rounded-2xl shadow-2xl border-indigo-400/20 border-[1.5px] w-full max-w-5xl min-h-[580px] flex flex-col md:flex-row overflow-hidden animate-fadeInUp delay-400 focus-within:ring-2 focus-within:ring-purple-400/25" tabindex="0">
<aside aria-label="Sidebar Navigation" className="glass-sidebar w-16 md:w-20 flex flex-col items-center py-4 gap-4 divider-v relative z-10 animate-fadeInUp delay-600">
<div className="mb-4 mt-2"></div>
<nav aria-label="Sidebar main" className="flex flex-col gap-2">
<a className="sidebar-active rounded-lg flex items-center justify-center w-10 h-10 transition-all focus-visible:ring-2 focus-visible:ring-indigo-400" href="#" title="Dashboard">
<svg className="lucide lucide-layout-dashboard w-5 h-5 text-indigo-300" data-lucide="layout-dashboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></svg>
<span className="sr-only">Dashboard</span>
</a>
<a className="rounded-lg flex items-center justify-center w-10 h-10 hover:bg-indigo-500/10 transition focus-visible:ring-2 focus-visible:ring-indigo-400" href="#" title="Projects">
<svg className="lucide lucide-folder w-5 h-5 text-indigo-200" data-lucide="folder" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path></svg>
<span className="sr-only">Projects</span>
</a>
<a className="rounded-lg flex items-center justify-center w-10 h-10 hover:bg-indigo-500/10 transition focus-visible:ring-2 focus-visible:ring-indigo-400" href="#" title="Activity">
<svg className="lucide lucide-activity w-5 h-5 text-indigo-200" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
<span className="sr-only">Activity</span>
</a>
<a className="rounded-lg flex items-center justify-center w-10 h-10 hover:bg-indigo-500/10 transition focus-visible:ring-2 focus-visible:ring-indigo-400" href="#" title="Settings">
<svg className="lucide lucide-settings w-5 h-5 text-indigo-200" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span className="sr-only">Settings</span>
</a>
</nav>
<div className="flex-grow"></div>
<a className="rounded-lg flex items-center justify-center w-10 h-10 hover:bg-indigo-500/10 transition focus-visible:ring-2 focus-visible:ring-indigo-400" href="#" title="Profile">
<img alt="Profile" className="w-7 h-7 rounded-lg object-cover border-2 border-indigo-400/50" src="https://randomuser.me/api/portraits/men/44.jpg"/>
</a>
</aside>
<section className="flex-1 flex flex-col min-h-[480px]">
<header className="window-titlebar flex items-center h-12 px-5 relative z-30 divider-h select-none">
<div className="flex items-center gap-2">
<button aria-label="Close" className="w-3 h-3 rounded-full bg-red-500/80 hover:brightness-110 focus-visible:ring-2 focus-visible:ring-red-400 mr-1"></button>
<button aria-label="Minimize" className="w-3 h-3 rounded-full bg-yellow-400/80 hover:brightness-110 focus-visible:ring-2 focus-visible:ring-yellow-300 mr-1"></button>
<button aria-label="Maximize" className="w-3 h-3 rounded-full bg-green-500/80 hover:brightness-110 focus-visible:ring-2 focus-visible:ring-green-400"></button>
</div>
<span className="mx-auto text-base font-semibold tracking-tight text-white/95 pointer-events-none">DevUI Desktop</span>
<div className="ml-auto flex items-center gap-2">
<button aria-label="Notifications" className="relative w-8 h-8 rounded-lg flex items-center justify-center hover:bg-indigo-500/10 focus-visible:ring-2 focus-visible:ring-indigo-400 transition">
<svg className="lucide lucide-bell w-5 h-5 text-indigo-200" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
<span className="absolute top-2 right-2 w-2 h-2 bg-purple-400 rounded-full notification-dot"></span>
</button>
</div>
</header>
<div className="flex-1 flex flex-col md:flex-row overflow-hidden">
<div className="flex-1 p-6 flex flex-col gap-6 min-w-0 animate-fadeInUp delay-700">
<div className="flex flex-col md:flex-row gap-6">
<div className="flex-1">
<h2 className="text-2xl font-semibold tracking-tight text-white mb-1">Welcome back, Jane!</h2>
<p className="text-slate-300 text-base mb-4">Here's your Design &amp; Code learning progress.</p>
<div className="flex items-center gap-5 mb-2">
<div className="flex flex-col items-start">
<span className="text-sm text-slate-400">Current Streak</span>
<span className="text-lg font-semibold text-indigo-200">6 days</span>
</div>
<div className="flex flex-col items-start">
<span className="text-sm text-slate-400">Certifications</span>
<span className="text-lg font-semibold text-indigo-200">4</span>
</div>
<div className="flex flex-col items-start">
<span className="text-sm text-slate-400">Hours Spent</span>
<span className="text-lg font-semibold text-indigo-200">27h</span>
</div>
</div>
</div>
<div className="flex-1 max-w-[350px] min-w-[200px]">
<div className="rounded-xl bg-slate-900/50 border border-white/10 p-4 shadow-md">
<h3 className="text-base font-semibold tracking-tight text-white mb-2">Learning Activity</h3>
<div className="w-full h-40 relative">
<canvas className="w-full h-full" height="256" id="activityChart" style={{display: 'block', boxSizing: 'border-box', height: '128px', width: '256px'}} width="513"></canvas>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-2">
<div className="card-feature rounded-xl p-4 flex flex-col items-start hover:shadow-lg focus-within:shadow-lg transition animate-fadeInUp delay-800">
<div className="rounded-lg bg-indigo-700/20 p-2 mb-2">
<svg className="lucide lucide-users w-5 h-5 text-indigo-200" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<span className="text-base font-semibold text-white mb-1 tracking-tight">Collaborative Projects</span>
<span className="text-sm text-indigo-200">Work with peers, share feedback, and build real-world solutions together.</span>
</div>
<div className="card-feature rounded-xl p-4 flex flex-col items-start hover:shadow-lg focus-within:shadow-lg transition animate-fadeInUp delay-900">
<div className="rounded-lg bg-indigo-700/20 p-2 mb-2">
<svg className="lucide lucide-zap w-5 h-5 text-purple-300" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<span className="text-base font-semibold text-white mb-1 tracking-tight">Gamified Learning</span>
<span className="text-sm text-indigo-200">Earn badges, maintain streaks, and climb leaderboards as you learn.</span>
</div>
<div className="card-feature rounded-xl p-4 flex flex-col items-start hover:shadow-lg focus-within:shadow-lg transition animate-fadeInUp delay-1000">
<div className="rounded-lg bg-indigo-700/20 p-2 mb-2">
<svg className="lucide lucide-bar-chart-3 w-5 h-5 text-indigo-200" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
</div>
<span className="text-base font-semibold text-white mb-1 tracking-tight">Analytics</span>
<span className="text-sm text-indigo-200">Track your activity, progress, and time spent on each skill.</span>
</div>
</div>
<div className="w-full h-px bg-white/7"></div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div className="card-glass rounded-xl p-4 shadow-md border border-white/10">
<div className="flex items-center justify-between mb-2">
<h4 className="text-lg font-semibold tracking-tight text-white">Notifications</h4>
<a className="text-xs text-indigo-400 font-medium hover:underline focus-visible:underline" href="#">View all</a>
</div>
<ul className="divide-y divide-white/10">
<li className="flex items-center px-2 py-3 gap-3 hover:bg-indigo-600/10 transition group rounded">
<span className="w-2 h-2 rounded-full bg-purple-400 mr-1"></span>
<span className="flex-1 text-sm text-slate-200">You completed !</span>
<span className="text-xs text-indigo-200">2m ago</span>
</li>
<li className="flex items-center px-2 py-3 gap-3 hover:bg-indigo-600/10 transition group rounded">
<span className="w-2 h-2 rounded-full bg-indigo-400 mr-1"></span>
<span className="flex-1 text-sm text-slate-200">New collaboration request on </span>
<span className="text-xs text-indigo-200">10m ago</span>
</li>
<li className="flex items-center px-2 py-3 gap-3 hover:bg-indigo-600/10 transition group rounded">
<span className="w-2 h-2 rounded-full bg-purple-300 mr-1"></span>
<span className="flex-1 text-sm text-slate-200">Keep your streak! Today's lesson is waiting.</span>
<span className="text-xs text-indigo-200">1h ago</span>
</li>
</ul>
</div>
<div className="card-glass rounded-xl p-4 shadow-md border border-white/10">
<div className="flex items-center justify-between mb-2">
<h4 className="text-lg font-semibold tracking-tight text-white">Today’s To-Do</h4>
<a className="text-xs text-indigo-400 font-medium hover:underline focus-visible:underline" href="#">Manage</a>
</div>
<ul className="divide-y divide-white/10">
<li className="flex items-center px-2 py-3 gap-3 group hover:bg-indigo-600/10 transition rounded">
<button aria-label="Mark as done" className="mr-2 rounded-full border-2 border-indigo-400 w-5 h-5 flex items-center justify-center bg-indigo-900/30 group-hover:border-purple-400 focus-visible:ring-2 focus-visible:ring-indigo-400 transition">
<svg className="lucide lucide-check w-4 h-4 text-indigo-200 opacity-0 group-hover:opacity-100 transition" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</button>
<span className="flex-1 text-sm text-slate-200">Finish “JavaScript Advanced” module</span>
</li>
<li className="flex items-center px-2 py-3 gap-3 group hover:bg-indigo-600/10 transition rounded">
<button aria-label="Mark as done" className="mr-2 rounded-full border-2 border-indigo-400 w-5 h-5 flex items-center justify-center bg-indigo-900/30 group-hover:border-purple-400 focus-visible:ring-2 focus-visible:ring-indigo-400 transition">
<svg className="lucide lucide-check w-4 h-4 text-indigo-200 opacity-0 group-hover:opacity-100 transition" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</button>
<span className="flex-1 text-sm text-slate-200">Review pull requests on “API Explorer”</span>
</li>
<li className="flex items-center px-2 py-3 gap-3 group hover:bg-indigo-600/10 transition rounded">
<button aria-label="Mark as done" className="mr-2 rounded-full border-2 border-indigo-400 w-5 h-5 flex items-center justify-center bg-indigo-900/30 group-hover:border-purple-400 focus-visible:ring-2 focus-visible:ring-indigo-400 transition">
<svg className="lucide lucide-check w-4 h-4 text-indigo-200 opacity-0 group-hover:opacity-100 transition" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</button>
<span className="flex-1 text-sm text-slate-200">Share feedback on “Portfolio Redesign”</span>
</li>
</ul>
</div>
</div>
</div>
<div className="w-full md:w-72 flex flex-col bg-white/3 border-l border-white/10 p-6 gap-6 min-h-0 animate-fadeInUp delay-800">
<div className="flex flex-col items-center">
<img alt="Jane Doe" className="w-20 h-20 rounded-full object-cover border-4 border-indigo-400/30 mb-2 shadow" src="https://randomuser.me/api/portraits/women/43.jpg"/>
<span className="text-xl font-semibold tracking-tight text-white">Jane Doe</span>
<span className="text-sm text-indigo-200">Frontend Developer</span>
<a className="mt-3 px-4 py-1.5 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-sm font-medium shadow hover:brightness-110 focus-visible:ring-2 focus-visible:ring-indigo-400" href="#">Edit Profile</a>
</div>
<div className="w-full h-px bg-white/10 my-2"></div>
<div>
<h5 className="text-sm font-semibold tracking-tight text-white mb-1">Achievements</h5>
<ul className="flex flex-col gap-2">
<li className="flex items-center gap-2">
<svg className="lucide lucide-award w-4 h-4 text-yellow-300" data-lucide="award" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
<span className="text-xs text-slate-200">4 Certifications</span>
</li>
<li className="flex items-center gap-2">
<svg className="lucide lucide-zap w-4 h-4 text-purple-300" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<span className="text-xs text-slate-200">Expert Level</span>
</li>
<li className="flex items-center gap-2">
<svg className="lucide lucide-calendar w-4 h-4 text-indigo-200" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
<span className="text-xs text-slate-200">6 Day Streak</span>
</li>
</ul>
</div>
<div className="w-full h-px bg-white/10 my-2"></div>
<div>
<h5 className="text-sm font-semibold tracking-tight text-white mb-1">Upcoming Deadlines</h5>
<ul className="flex flex-col gap-2">
<li className="flex items-center gap-2">
<svg className="lucide lucide-clock w-4 h-4 text-indigo-200" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
<span className="text-xs text-slate-200">React Basics Quiz – <span className="text-purple-200">Tomorrow</span></span>
</li>
<li className="flex items-center gap-2">
<svg className="lucide lucide-check-circle w-4 h-4 text-green-300" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
<span className="text-xs text-slate-200">Portfolio Redesign Review – <span className="text-indigo-200">2d</span></span>
</li>
</ul>
</div>
</div>
</div>
</section>
</div>
</main>



    </>
  );
}
