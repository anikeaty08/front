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
      
    // Year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Mobile nav toggle
    const navToggle = document.getElementById('nav-toggle');
    const navMenu   = document.getElementById('nav-menu');
    navToggle.addEventListener('click', () => {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', !expanded);
      navMenu.classList.toggle('hidden');
    });

    // Chart.js
    const ctx = document.getElementById('demoChart').getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Week 1','Week 2','Week 3','Week 4','Week 5','Week 6','Week 7','Week 8'],
        datasets: [
          {
            label: 'Connection Score',
            data: [45,52,58,64,70,75,79,83],
            borderColor: '#f43f5e',
            borderWidth: 2,
            pointRadius: 3,
            pointBackgroundColor: '#f43f5e',
            tension: .4,
            fill: { target: 'origin', above: 'rgba(244,63,94,.15)' }
          },
          {
            label: 'Avg. Minutes Spent',
            data: [12,18,23,26,30,32,34,35],
            borderColor: '#a855f7',
            borderWidth: 2,
            pointRadius: 3,
            pointBackgroundColor: '#a855f7',
            borderDash: [4,4],
            tension: .4,
            fill: false
          }
        ]
      },
      options: {
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            callbacks: {
              label: item => `${item.dataset.label}: ${item.parsed.y}`
            }
          }
        },
        scales: {
          x: {
            grid: { display: false },
            ticks: { color: '#a1a1aa' }
          },
          y: {
            grid: { color: 'rgba(63,63,70,.15)' },
            ticks: { color: '#a1a1aa' },
            suggestedMin: 0,
            suggestedMax: 100
          }
        }
      }
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
      <div className="spline-container fixed top-0 w-full h-screen -z-10 blur-lg hue-rotate-15"><iframe frameborder="0" height="100%" src="https://my.spline.design/iphone14wallpaper4copy-79eead3c8221db4e6fd870a3d5061aa0" width="100%"></iframe></div>

<header className="sticky top-0 z-50 backdrop-blur bg-zinc-900/60 border-b border-zinc-800">
<div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:px-6">
<h1 className="text-lg tracking-tight font-manrope font-bold" style={{}}>Love Lab</h1>

<button aria-expanded="false" aria-label="Toggle navigation" className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500" id="nav-toggle">
<i className="w-5 h-5" data-lucide="menu"></i>
</button>

<nav className="fixed inset-x-0 top-14 md:static md:top-auto md:flex md:items-center md:gap-6 bg-zinc-950 md:bg-transparent border-t border-zinc-800 md:border-none hidden md:block" id="nav-menu">
<ul className="flex flex-col md:flex-row md:items-center md:gap-6 p-6 md:p-0">
<li><a className="block py-2 text-sm hover:text-rose-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 font-manrope font-bold" href="#" style={{}}>Home</a></li>
<li><a className="block py-2 text-sm hover:text-rose-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 font-manrope font-bold" href="#" style={{}}>Features</a></li>
<li><a className="block py-2 text-sm hover:text-rose-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 font-manrope font-bold" href="#" style={{}}>Pricing</a></li>
<li className="mt-2 md:mt-0">
<button className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-rose-600 hover:bg-rose-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-rose-500 transition">
<span className="text-sm font-manrope font-bold" style={{}}>Sign In</span>
<svg className="w-[16px] h-[16px]" data-lucide="log-in" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: `16px`, height: `16px`, color: `rgb(244, 244, 245)`}} viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</button>
</li>
</ul>
</nav>
</div>
</header>

<section className="relative overflow-hidden isolate">
<div className="absolute inset-0 -z-10 bg-gradient-to-br from-rose-700/30 via-pink-700/30 to-fuchsia-700/10"></div>
<div className="max-w-4xl mx-auto px-4 py-20 sm:py-24 flex flex-col items-center text-center space-y-6">
<h2 className="sm:text-4xl leading-tight opacity-0 animate-[fadeIn_0.8s_0.1s_forwards_ease-out] text-3xl tracking-tight translate-y-6 font-montserrat font-semibold" style={{}}>Crafting meaningful connections with Love Lab.</h2>
<p className="max-w-2xl sm:text-base opacity-0 animate-[fadeIn_0.8s_0.2s_forwards_ease-out] text-sm font-bold text-zinc-300 font-manrope translate-y-6" style={{}}>None of us are born knowing how to love, we have to practice. 
Engaging with each other and scientifically proven experiments and practices
We can re kindle and deepen our love with our partners.</p>
<div className="flex flex-col sm:flex-row gap-4 opacity-0 translate-y-6 animate-[fadeIn_0.8s_0.3s_forwards_ease-out]">
<button className="hover:bg-rose-500 transition bg-rose-600 rounded-md pt-3 pr-6 pb-3 pl-6 font-manrope font-bold" style={{}}>Get Started</button>
<button className="hover:bg-zinc-800 transition font-bold font-manrope border-zinc-700 border rounded-md pt-3 pr-6 pb-3 pl-6" style={{}}>Learn More</button>
</div>
</div>
</section>

<main className="max-w-7xl sm:px-6 mr-auto ml-auto pt-20 pr-4 pb-20 pl-4 space-y-24">

<section className="grid gap-12 lg:grid-cols-2">

<div className="space-y-8">
<div className="space-y-4">
<h3 className="text-2xl tracking-tight font-montserrat font-semibold" style={{}}>Love Lab Overview</h3>
<p className="leading-relaxed text-sm text-zinc-400 font-manrope font-bold" style={{}}><span className="text-rose-400 font-manrope font-bold" style={{}}>2.4 ×</span>Research shows that couples who intentionally engage in regular relationship “check-ins” are  more likely to report high satisfaction one year later. Love Lab brings science-backed structure to those moments.</p>
</div>

<div className="grid gap-4 sm:grid-cols-2">

<div className="bg-zinc-900 rounded-xl border border-zinc-800 p-5 flex items-center gap-4 opacity-0 translate-y-4 animate-[fadeIn_0.7s_0.1s_forwards_ease-out]">
<span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-rose-600/20 text-rose-400">
<svg className="w-[20px] h-[20px]" data-lucide="heart-handshake" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: `20px`, height: `20px`, color: `rgb(251, 113, 133)`}} viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
</span>
<div>
<p className="text-lg tracking-tight font-manrope font-bold" style={{}}>73%</p>
<p className="text-xs text-zinc-400 font-manrope font-bold" style={{}}>Reduced breakup risk</p>
</div>
</div>

<div className="bg-zinc-900 rounded-xl border border-zinc-800 p-5 flex items-center gap-4 opacity-0 translate-y-4 animate-[fadeIn_0.7s_0.2s_forwards_ease-out]">
<span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-rose-600/20 text-rose-400">
<svg className="w-[20px] h-[20px]" data-lucide="message-circle" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: `20px`, height: `20px`, color: `rgb(251, 113, 133)`}} viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 1 1-7 0"></path><path d="M15 8.5a2.5 2.5 0 0 0-5 0v1a2 2 0 1 1 0 4"></path></svg>
</span>
<div className="">
<p className="text-lg tracking-tight font-manrope font-bold" style={{}}>45%</p>
<p className="text-xs text-zinc-400 font-manrope font-bold" style={{}}>More weekly dialogues</p>
</div>
</div>

<div className="bg-zinc-900 rounded-xl border border-zinc-800 p-5 flex items-center gap-4 opacity-0 translate-y-4 animate-[fadeIn_0.7s_0.3s_forwards_ease-out]">
<span className="inline-flex items-center justify-center w-10 h-10 text-rose-400 bg-rose-600/20 rounded-full">
<svg className="w-[20px] h-[20px]" data-lucide="trending-up" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: `20px`, height: `20px`, color: `rgb(251, 113, 133)`}} viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</span>
<div className="">
<p className="text-lg tracking-tight font-manrope font-bold" style={{}}>+4.6</p>
<p className="text-xs text-zinc-400 font-manrope font-bold" style={{}}>Avg. satisfaction score</p>
</div>
</div>

<div className="bg-zinc-900 rounded-xl border border-zinc-800 p-5 flex items-center gap-4 opacity-0 translate-y-4 animate-[fadeIn_0.7s_0.4s_forwards_ease-out]">
<span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-rose-600/20 text-rose-400">
<svg className="w-[20px] h-[20px]" data-lucide="calendar-heart" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: `20px`, height: `20px`, color: `rgb(251, 113, 133)`}} viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</span>
<div>
<p className="text-lg tracking-tight font-manrope font-bold" style={{}}>38%</p>
<p className="text-xs text-zinc-400 font-manrope font-bold" style={{}}>Increase in date nights</p>
</div>
</div>
</div>
</div>

</section>

<section aria-labelledby="features-heading" className="">
<h3 className="text-2xl tracking-tight mb-8 font-montserrat font-semibold" id="features-heading" style={{}}>Feature Library</h3>
<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">


<article className="group relative bg-zinc-900 border border-zinc-800 rounded-xl p-6 flex flex-col space-y-4 hover:border-rose-500 hover:shadow-rose-600/30 hover:shadow-lg transition ease-out duration-300 opacity-0 translate-y-4 animate-[fadeIn_0.7s_0.1s_forwards_ease-out]">
<div className="flex items-center justify-between">
<span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-rose-600/20 text-rose-400">
<svg className="w-[20px] h-[20px]" data-lucide="user-check" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: `20px`, height: `20px`, color: `rgb(251, 113, 133)`}} viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</span>
<span className="text-xs px-2 py-0.5 rounded bg-rose-600/20 text-rose-400 font-manrope font-bold" style={{}}>Must-Have</span>
</div>
<h4 className="text-base tracking-tight font-manrope font-bold" style={{}}>Onboarding & Personality Quiz</h4>
<p className="text-sm text-zinc-400 leading-relaxed font-manrope font-bold" style={{}}>A short, engaging quiz upon first login to identify relationship dynamics, communication styles, and goals.</p>
</article>

<article className="group relative bg-zinc-900 border border-zinc-800 rounded-xl p-6 flex flex-col space-y-4 hover:border-rose-500 hover:shadow-rose-600/30 hover:shadow-lg transition ease-out duration-300 opacity-0 translate-y-4 animate-[fadeIn_0.7s_0.2s_forwards_ease-out]">
<div className="flex items-center justify-between">
<span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-rose-600/20 text-rose-400">
<svg className="w-[20px] h-[20px]" data-lucide="link-2" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: `20px`, height: `20px`, color: `rgb(251, 113, 133)`}} viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4"></path><path d="m21 2-9.6 9.6"></path><circle cx="7.5" cy="15.5" r="5.5"></circle></svg>
</span>
<span className="text-xs px-2 py-0.5 rounded bg-rose-600/20 text-rose-400 font-manrope font-bold" style={{}}>Must-Have</span>
</div>
<h4 className="text-base tracking-tight font-manrope font-bold" style={{}}>Partner Syncing</h4>
<p className="text-sm text-zinc-400 leading-relaxed font-manrope font-bold" style={{}}>A QR-code or link-based flow for two users to link accounts and share one relationship space.</p>
</article>

<article className="group relative bg-zinc-900 border border-zinc-800 rounded-xl p-6 flex flex-col space-y-4 hover:border-rose-500 hover:shadow-rose-600/30 hover:shadow-lg transition ease-out duration-300 opacity-0 translate-y-4 animate-[fadeIn_0.7s_0.3s_forwards_ease-out]">
<div className="flex items-center justify-between">
<span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-rose-600/20 text-rose-400">
<svg className="w-[20px] h-[20px]" data-lucide="flask-conical" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: `20px`, height: `20px`, color: `rgb(251, 113, 133)`}} viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9"></path><path d="M20 3v4"></path><path d="M22 5h-4"></path></svg>
</span>
<span className="text-xs px-2 py-0.5 rounded bg-rose-600/20 text-rose-400 font-manrope font-bold" style={{}}>Must-Have</span>
</div>
<h4 className="text-base tracking-tight font-manrope font-bold" style={{}}>Guided “Experiments”</h4>
<p className="text-sm text-zinc-400 leading-relaxed font-manrope font-bold" style={{}}>Interactive, science-based exercises for couples. MVP ships with 20 experiments across 3 categories.</p>
</article>

<article className="group relative bg-zinc-900 border border-zinc-800 rounded-xl p-6 flex flex-col space-y-4 hover:border-rose-500 hover:shadow-rose-600/30 hover:shadow-lg transition ease-out duration-300 opacity-0 translate-y-4 animate-[fadeIn_0.7s_0.4s_forwards_ease-out]">
<div className="flex items-center justify-between">
<span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-amber-400/20 text-amber-300">
<svg className="w-[20px] h-[20px]" data-lucide="layout" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: `20px`, height: `20px`, color: `rgb(252, 211, 77)`}} viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M8.8 20v-4.1l1.9.2a2.3 2.3 0 0 0 2.164-2.1V8.3A5.37 5.37 0 0 0 2 8.25c0 2.8.656 3.054 1 4.55a5.77 5.77 0 0 1 .029 2.758L2 20"></path><path d="M19.8 17.8a7.5 7.5 0 0 0 .003-10.603"></path><path d="M17 15a3.5 3.5 0 0 0-.025-4.975"></path></svg>
</span>
<span className="text-xs px-2 py-0.5 rounded bg-amber-400/20 text-amber-300 font-manrope font-bold" style={{}}>High</span>
</div>
<h4 className="text-base tracking-tight font-manrope font-bold" style={{}}>The “Connection Canvas”</h4>
<p className="text-sm text-zinc-400 leading-relaxed font-manrope font-bold" style={{}}>A shared digital space for daily prompts, photo uploads, and key memories—simplified for MVP.</p>
</article>

<article className="group relative bg-zinc-900 border border-zinc-800 rounded-xl p-6 flex flex-col space-y-4 hover:border-rose-500 hover:shadow-rose-600/30 hover:shadow-lg transition ease-out duration-300 opacity-0 translate-y-4 animate-[fadeIn_0.7s_0.5s_forwards_ease-out]">
<div className="flex items-center justify-between">
<span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-amber-400/20 text-amber-300">
<svg className="w-[20px] h-[20px]" data-lucide="bar-chart-2" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: `20px`, height: `20px`, color: `rgb(252, 211, 77)`}} viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path><path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66"></path><path d="m18 15-2-2"></path><path d="m15 18-2-2"></path></svg>
</span>
<span className="text-xs px-2 py-0.5 rounded bg-amber-400/20 text-amber-300 font-manrope font-bold" style={{}}>High</span>
</div>
<h4 className="text-base tracking-tight font-manrope font-bold" style={{}}>Gamified Progress</h4>
<p className="text-sm text-zinc-400 leading-relaxed font-manrope font-bold" style={{}}>Earn “Connection Points” for completing experiments. A progress bar tracks consistency.</p>
</article>

<article className="group relative bg-zinc-900 border border-zinc-800 rounded-xl p-6 flex flex-col space-y-4 hover:border-rose-500 hover:shadow-rose-600/30 hover:shadow-lg transition ease-out duration-300 opacity-0 translate-y-4 animate-[fadeIn_0.7s_0.6s_forwards_ease-out]">
<div className="flex items-center justify-between">
<span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-rose-600/20 text-rose-400">
<svg className="w-[20px] h-[20px]" data-lucide="dollar-sign" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: `20px`, height: `20px`, color: `rgb(251, 113, 133)`}} viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17"></path><path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"></path><path d="m2 16 6 6"></path><circle cx="16" cy="9" r="2.9"></circle><circle cx="6" cy="5" r="3"></circle></svg>
</span>
<span className="text-xs px-2 py-0.5 rounded bg-rose-600/20 text-rose-400 font-manrope font-bold" style={{}}>Must-Have</span>
</div>
<h4 className="text-base tracking-tight font-manrope font-bold" style={{}}>Freemium & Subscription</h4>
<p className="text-sm text-zinc-400 leading-relaxed font-manrope font-bold" style={{}}>Free onboarding & limited experiments (5). One premium tier unlocks all content.</p>
</article>

<article className="group relative bg-zinc-900 border border-zinc-800 rounded-xl p-6 flex flex-col space-y-4 hover:border-rose-500 hover:shadow-rose-600/30 hover:shadow-lg transition ease-out duration-300 opacity-0 translate-y-4 animate-[fadeIn_0.7s_0.7s_forwards_ease-out]">
<div className="flex items-center justify-between">
<span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-rose-600/20 text-rose-400">
<svg className="w-[20px] h-[20px]" data-lucide="bell" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: `20px`, height: `20px`, color: `rgb(251, 113, 133)`}} viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" x2="4" y1="22" y2="15"></line></svg>
</span>
<span className="text-xs px-2 py-0.5 rounded bg-rose-600/20 text-rose-400 font-manrope font-bold" style={{}}>Must-Have</span>
</div>
<h4 className="text-base tracking-tight font-manrope font-bold" style={{}}>Push Notifications</h4>
<p className="text-sm text-zinc-400 leading-relaxed font-manrope font-bold" style={{}}>Gentle reminders for new content, partner activity, and experiment suggestions.</p>
</article>
</div>
</section>
</main>

<footer className="py-12 border-t border-zinc-800">
<div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-sm text-zinc-500 font-manrope font-bold" style={{}}>© <span className="font-manrope font-bold" id="year" style={{}}>2025</span> Love Lab. All rights reserved.</p>
<nav className="flex gap-4">
<a className="text-sm hover:text-rose-400 font-manrope font-bold" href="#" style={{}}>Privacy</a>
<a className="text-sm hover:text-rose-400 font-manrope font-bold" href="#" style={{}}>Terms</a>
<a className="text-sm hover:text-rose-400 font-manrope font-bold" href="#" style={{}}>Contact</a>
</nav>
</div>
</footer>



    </>
  );
}
