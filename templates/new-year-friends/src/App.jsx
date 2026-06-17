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



        // 1. Canvas Starfield Effect
        const canvas = document.getElementById('starfield');
        const ctx = canvas.getContext('2d');
        let width, height;
        let stars = [];

        function initCanvas() {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
            stars = [];
            const numStars = Math.floor((width * height) / 8000); // Density
            for (let i = 0; i < numStars; i++) {
                stars.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    radius: Math.random() * 1.5,
                    alpha: Math.random(),
                    speed: Math.random() * 0.05 + 0.01
                });
            }
        }

        function animateStars() {
            ctx.clearRect(0, 0, width, height);
            ctx.fillStyle = '#ffffff';
            stars.forEach(star => {
                ctx.globalAlpha = star.alpha;
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                ctx.fill();
                
                // Twinkle effect
                star.alpha += star.speed * (Math.random() > 0.5 ? 1 : -1);
                if (star.alpha < 0.1) star.alpha = 0.1;
                if (star.alpha > 0.8) star.alpha = 0.8;

                // Subtle movement
                star.y -= star.speed;
                if(star.y < 0) star.y = height;
            });
            requestAnimationFrame(animateStars);
        }

        window.addEventListener('resize', initCanvas);
        initCanvas();
        animateStars();

        // 2. Countdown Logic
        function updateCountdown() {
            const now = new Date();
            // Target: January 1, 2026
            const target = new Date('January 1, 2026 00:00:00');
            const diff = target - now;

            if (diff <= 0) {
                // New Year Arrived
                document.getElementById('days').innerText = '00';
                document.getElementById('hours').innerText = '00';
                document.getElementById('minutes').innerText = '00';
                document.getElementById('seconds').innerText = '00';
                return;
            }

            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);

            document.getElementById('days').innerText = days < 10 ? '0' + days : days;
            document.getElementById('hours').innerText = hours < 10 ? '0' + hours : hours;
            document.getElementById('minutes').innerText = minutes < 10 ? '0' + minutes : minutes;
            document.getElementById('seconds').innerText = seconds < 10 ? '0' + seconds : seconds;
        }

        setInterval(updateCountdown, 1000);
        updateCountdown();

        // 3. Simple Progress Bar logic for the checklist
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        const progressBar = document.querySelector('.bg-white.h-1\\.5');
        const progressText = document.querySelector('.text-\\[10px\\]:last-child'); // The "0%" text

        function updateProgress() {
            const total = checkboxes.length;
            const checked = Array.from(checkboxes).filter(cb => cb.checked).length;
            const percent = (checked / total) * 100;
            progressBar.style.width = percent + '%';
            progressText.innerText = Math.round(percent) + '%';
        }

        checkboxes.forEach(cb => {
            cb.addEventListener('change', updateProgress);
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
      

<div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
<div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-900/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob"></div>
<div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-900/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
<div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-blue-900/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

<div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%221%22/%3E%3C/svg%3E\')'}}></div>
</div>

<canvas className="fixed inset-0 z-0 pointer-events-none opacity-60" height="1005" id="starfield" width="460"></canvas>

<nav className="fixed w-full z-50 top-0 start-0 border-b border-white/5 bg-neutral-950/50 backdrop-blur-xl">
<div className="max-w-5xl mx-auto px-6 py-4 flex flex-wrap items-center justify-between">
<a className="flex items-center space-x-2 group" href="#">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-neutral-800 to-neutral-900 border border-white/10 flex items-center justify-center shadow-lg group-hover:border-indigo-500/50 transition-colors duration-500">
<svg aria-hidden="true" className="iconify text-neutral-400 group-hover:text-indigo-400 transition-colors iconify--lucide" data-height="16" data-icon="lucide:sparkles" data-strokeWidth="1.5" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path><circle cx="4" cy="20" r="2"></circle></g></svg>
</div>
<span className="self-center text-sm font-medium tracking-tight text-neutral-200">NY/26</span>
</a>
<div className="flex items-center gap-4">
<a className="text-xs font-medium text-neutral-400 hover:text-white transition-colors duration-300" href="#wish">Make a Wish</a>
<button className="text-xs font-medium bg-white text-black hover:bg-neutral-200 px-3 py-1.5 rounded-md transition-all duration-300">
                    Connect
                </button>
</div>
</div>
</nav>

<main className="flex flex-col min-h-screen z-10 pt-24 pr-6 pb-12 pl-6 relative items-center justify-center">

<div className="w-full max-w-3xl text-center space-y-8 mt-12 opacity-0 animate-fade-in-up" style={{animation: 'fadeInUp 1s ease-out forwards'}}>
<div className="inline-flex items-center space-x-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 backdrop-blur-md shadow-inner shadow-white/5">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-xs font-medium text-neutral-300 tracking-wide">Future Loading</span>
</div>
<h1 className="text-6xl md:text-8xl font-medium tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-neutral-500">
                2026
            </h1>
<p className="text-lg md:text-xl font-light text-neutral-400 max-w-lg mx-auto leading-relaxed">
                A new chapter awaits. The future isn't just a destination, it's what we create together.
            </p>

<div className="grid grid-cols-4 gap-4 max-w-xl mx-auto pt-8">

<div className="flex flex-col items-center p-4 rounded-xl border border-white/5 bg-white/[0.02] backdrop-blur-sm">
<span className="text-2xl md:text-3xl font-medium text-white tabular-nums tracking-tight" id="days">01</span>
<span className="text-xs text-neutral-500 mt-1 uppercase tracking-wider font-medium">Days</span>
</div>

<div className="flex flex-col items-center p-4 rounded-xl border border-white/5 bg-white/[0.02] backdrop-blur-sm">
<span className="text-2xl md:text-3xl font-medium text-white tabular-nums tracking-tight" id="hours">13</span>
<span className="text-xs text-neutral-500 mt-1 uppercase tracking-wider font-medium">Hrs</span>
</div>

<div className="flex flex-col items-center p-4 rounded-xl border border-white/5 bg-white/[0.02] backdrop-blur-sm">
<span className="text-2xl md:text-3xl font-medium text-white tabular-nums tracking-tight" id="minutes">27</span>
<span className="text-xs text-neutral-500 mt-1 uppercase tracking-wider font-medium">Min</span>
</div>

<div className="flex flex-col items-center p-4 rounded-xl border border-white/5 bg-white/[0.02] backdrop-blur-sm relative overflow-hidden group">
<div className="group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-tr from-indigo-500/10 to-purple-500/10 opacity-0 absolute top-0 right-0 bottom-0 left-0"></div>
<span className="text-2xl md:text-3xl font-medium text-white tabular-nums tracking-tight relative z-10" id="seconds">51</span>
<span className="text-xs text-neutral-500 mt-1 uppercase tracking-wider font-medium relative z-10">Sec</span>
</div>
</div>
</div>

<div className="w-full max-w-5xl mt-32 grid grid-cols-1 md:grid-cols-2 gap-6 opacity-0 animate-fade-in-up" id="wish" style={{animation: 'fadeInUp 1s ease-out 0.5s forwards'}}>

<div className="relative p-8 rounded-2xl border border-white/10 bg-neutral-900/40 backdrop-blur-md overflow-hidden group hover:border-white/20 transition-all duration-500">
<div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity duration-500 transform group-hover:rotate-12">
<svg aria-hidden="true" className="iconify text-white iconify--lucide" data-height="120" data-icon="lucide:party-popper" data-strokeWidth="1" data-width="120" height="120" role="img" viewbox="0 0 24 24" width="120" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M5.8 11.3L2 22l10.7-3.79M4 3h.01M22 8h.01M15 2h.01M22 20h.01M22 2l-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10m8 3l-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17M11 2l.33.82c.34.86-.2 1.82-1.11 1.98c-.7.1-1.22.72-1.22 1.43V7"></path><path d="M11 13c1.93 1.93 2.83 4.17 2 5s-3.07-.07-5-2s-2.83-4.17-2-5s3.07.07 5 2"></path></g></svg>
</div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="20" data-icon="lucide:message-square" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-2">To my friend,</h3>
<p className="text-sm font-light text-neutral-400 leading-relaxed mb-6">
                            As the clock ticks towards 2026, I wanted to take a moment to appreciate our journey. May this coming year bring clarity, growth, and moments that take your breath away. Here is to breaking boundaries and setting new standards.
                        </p>
</div>
<div className="flex items-center gap-3 pt-4 border-t border-white/5">
<div className="h-8 w-8 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-[10px] font-bold text-white tracking-tighter">
                            YO
                        </div>
<div>
<p className="text-xs font-medium text-white">Sent with ❤️</p>
<p className="text-[10px] text-neutral-500">Encrypted • End-to-end</p>
</div>
</div>
</div>
</div>

<div className="relative p-8 rounded-2xl border border-white/10 bg-neutral-900/40 backdrop-blur-md group hover:border-white/20 transition-all duration-500 flex flex-col">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="20" data-icon="lucide:list-todo" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M13 5h8m-8 7h8m-8 7h8M3 17l2 2l4-4"></path><rect height="6" rx="1" width="6" x="3" y="4"></rect></g></svg>
</div>
<h3 className="text-xl font-medium text-white tracking-tight">2026 Manifest</h3>
</div>
<svg aria-hidden="true" className="iconify text-neutral-600 group-hover:text-white transition-colors duration-300 iconify--lucide" data-height="20" data-icon="lucide:arrow-up-right" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10M7 17L17 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="space-y-3 flex-grow">

<label className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer group/item">
<div className="relative flex items-center">
<input __gchrome_uniqueid="1" className="peer h-4 w-4 appearance-none rounded border border-neutral-600 bg-neutral-800 checked:bg-indigo-600 checked:border-indigo-600 transition-all focus:ring-0 focus:ring-offset-0" type="checkbox"/>
<svg aria-hidden="true" className="iconify absolute text-white opacity-0 peer-checked:opacity-100 left-[1px] top-[1px] pointer-events-none iconify--lucide" data-height="14" data-icon="lucide:check" data-strokeWidth="3" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span className="text-sm text-neutral-400 group-hover/item:text-neutral-200 transition-colors font-light">Prioritize mental clarity</span>
</label>

<label className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer group/item">
<div className="relative flex items-center">
<input __gchrome_uniqueid="2" className="peer h-4 w-4 appearance-none rounded border border-neutral-600 bg-neutral-800 checked:bg-indigo-600 checked:border-indigo-600 transition-all focus:ring-0 focus:ring-offset-0" type="checkbox"/>
<svg aria-hidden="true" className="iconify absolute text-white opacity-0 peer-checked:opacity-100 left-[1px] top-[1px] pointer-events-none iconify--lucide" data-height="14" data-icon="lucide:check" data-strokeWidth="3" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span className="text-sm text-neutral-400 group-hover/item:text-neutral-200 transition-colors font-light">Build something meaningful</span>
</label>

<label className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer group/item">
<div className="relative flex items-center">
<input __gchrome_uniqueid="3" className="peer h-4 w-4 appearance-none rounded border border-neutral-600 bg-neutral-800 checked:bg-indigo-600 checked:border-indigo-600 transition-all focus:ring-0 focus:ring-offset-0" type="checkbox"/>
<svg aria-hidden="true" className="iconify absolute text-white opacity-0 peer-checked:opacity-100 left-[1px] top-[1px] pointer-events-none iconify--lucide" data-height="14" data-icon="lucide:check" data-strokeWidth="3" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span className="text-sm text-neutral-400 group-hover/item:text-neutral-200 transition-colors font-light">Explore new horizons</span>
</label>
</div>
<div className="mt-6 pt-6 border-t border-white/5">
<div className="w-full bg-neutral-800 rounded-full h-1.5 overflow-hidden">
<div className="bg-white h-1.5 rounded-full" style={{width: '0%'}}></div>
</div>
<div className="flex justify-between mt-2">
<span className="text-[10px] text-neutral-500 uppercase tracking-wider">Progress</span>
<span className="text-[10px] text-neutral-500">0%</span>
</div>
</div>
</div>
</div>
</main>
<footer className="relative z-10 py-8 border-t border-white/5 mt-12 bg-black/40 backdrop-blur-md">
<div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-neutral-600">
                © 2025-2026. Designed for the Future.
            </p>
<div className="flex space-x-6">
<a className="text-neutral-600 hover:text-white transition-colors" href="#"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:github" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5c.08-1.25-.27-2.48-1-3.5c.28-1.15.28-2.35 0-3.5c0 0-1 0-3 1.5c-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5c-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></g></svg></a>
<a className="text-neutral-600 hover:text-white transition-colors" href="#"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:twitter" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></a>
<a className="text-neutral-600 hover:text-white transition-colors" href="#"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:instagram" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path></g></svg></a>
</div>
</div>
</footer>

<style>
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translate3d(0, 20px, 0);
            }
            to {
                opacity: 1;
                transform: translate3d(0, 0, 0);
            }
        }
    </style>



    </>
  );
}
