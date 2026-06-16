import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
fontSize: {
'2xs': '0.625rem', // 10px
},
colors: {
navy: {
950: '#02040a',
900: '#0b101b',
800: '#161e2e',
700: '#1f2b42',
600: '#334155',
500: '#475569',
400: '#94a3b8',
300: '#cbd5e1',
200: '#e2e8f0',
100: '#f1f5f9',
},
accent: {
400: '#60a5fa',
500: '#3b82f6',
600: '#2563eb',
900: '#1e3a8a',
}
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
},
animation: {
'fade-in': 'fadeIn 1s ease-out forwards',
'float': 'float 6s ease-in-out infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'slide-up': 'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
'shimmer': 'shimmer 8s linear infinite',
'blur-in': 'blurIn 1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0' },
'100%': { opacity: '1' },
},
slideUp: {
'0%': { transform: 'translateY(20px)', opacity: '0' },
'100%': { transform: 'translateY(0)', opacity: '1' },
},
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
},
shimmer: {
'0%': { backgroundPosition: '0% 50%' },
'100%': { backgroundPosition: '200% 50%' },
},
blurIn: {
'0%': { opacity: '0', transform: 'translateY(20px) scale(0.95)', filter: 'blur(10px)' },
'100%': { opacity: '1', transform: 'translateY(0) scale(1)', filter: 'blur(0)' },
}
}
}
}
}



    document.addEventListener('DOMContentLoaded', () => {
      
      // Header scroll effect
      const navbar = document.getElementById('navbar');
      window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
          navbar.classList.add('py-2');
        } else {
          navbar.classList.remove('py-2');
        }
      });
      
      // Custom card glow follow cursor effect (subtle)
      const cards = document.querySelectorAll('.group');
      cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
        });
      });
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute inset-0 bg-grid opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]"></div>
<div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-accent-900/20 rounded-full blur-[100px] animate-pulse-slow"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[35rem] h-[35rem] bg-navy-800/60 rounded-full blur-[80px]"></div>
</div>

<header className="fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent" id="navbar">
<div className="glass-panel w-full border-b border-navy-700/50">
<div className="flex h-14 max-w-6xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<span className="text-navy-100 group-hover:text-white transition-colors text-base font-semibold tracking-tight font-poppins relative">FITONOMICS</span>
</a>

<nav className="hidden md:flex items-center gap-8">
<a className="text-xs font-medium text-navy-400 hover:text-navy-100 transition-colors" href="#how-it-works">How it Works</a>
<a className="text-xs font-medium text-navy-400 hover:text-navy-100 transition-colors" href="#articles">Articles</a>
<a className="text-xs font-medium text-navy-400 hover:text-navy-100 transition-colors" href="#community">Community</a>
</nav>

<div className="flex items-center gap-4">
<a className="hidden sm:inline-flex items-center justify-center px-4 py-1.5 text-xs font-medium text-white bg-accent-600 hover:bg-accent-500 rounded-full transition-all shadow-[0_0_10px_-3px_rgba(59,130,246,0.5)]" href="#">
<iconify-icon className="mr-2" icon="lucide:send" width="12"></iconify-icon>
            Get the Bot
          </a>
</div>
</div>
</div>
</header>
<main className="flex-grow flex flex-col z-10 w-full max-w-7xl mr-auto ml-auto pt-32 pr-4 pb-20 pl-4 relative items-center justify-center">

<section className="text-center max-w-3xl mx-auto mb-24 relative">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-800/50 border border-navy-700 mb-8 animate-slide-up hover:border-accent-500/50 transition-colors cursor-default" style={{animationDelay: '0.1s'}}>
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-accent-500"></span>
</span>
<span className="text-xs font-mono text-accent-400">Available on Telegram</span>
</div>

<h1 className="text-4xl sm:text-5xl md:text-6xl font-medium text-navy-100 tracking-tight leading-[1.15] mb-6">
<span className="inline-block opacity-0 animate-blur-in" style={{animationDelay: '0.1s'}}>Mindfulness</span>
<span className="inline-block opacity-0 animate-blur-in" style={{animationDelay: '0.2s'}}>lives</span>
<span className="inline-block opacity-0 animate-blur-in" style={{animationDelay: '0.3s'}}>in</span>
<br className="hidden sm:block"/>
<span className="inline-block opacity-0 animate-blur-in relative" style={{animationDelay: '0.45s'}}>
<span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-accent-400 via-indigo-300 to-accent-400 bg-[length:200%_auto] animate-shimmer pb-2">your chat app.</span>
</span>
</h1>

<p className="text-sm sm:text-base text-navy-400 leading-relaxed max-w-xl mx-auto mb-10 opacity-0 animate-slide-up" style={{animationDelay: '0.6s'}}>
        Your daily companion for mental wellness. Get guided meditations, mood tracking, and curated articles directly in Telegram.
      </p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-slide-up" style={{animationDelay: '0.7s'}}>
<a className="group relative inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-white bg-accent-600 hover:bg-accent-500 rounded-full shadow-[0_0_20px_-5px_rgba(59,130,246,0.5)] transition-all overflow-hidden w-full sm:w-auto" href="#">
<span className="absolute w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></span>
<iconify-icon className="mr-2 -ml-1" icon="lucide:send" width="16"></iconify-icon>
<span>Start Bot</span>
</a>
<a className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-navy-300 hover:text-white rounded-full transition-colors border border-navy-700/50 hover:border-navy-600 hover:bg-navy-800 w-full sm:w-auto" href="#">
<iconify-icon className="mr-2 text-navy-500 group-hover:text-navy-300" icon="lucide:newspaper" width="16"></iconify-icon>
          Join Channel
        </a>
</div>
</section>

<section className="w-full max-w-6xl mx-auto opacity-0 animate-slide-up" id="how-it-works" style={{animationDelay: '0.9s'}}>

<div className="flex items-center justify-center mb-10">
<span className="text-[10px] font-mono text-navy-500 uppercase tracking-widest bg-navy-800/50 px-3 py-1 rounded-full border border-navy-700">Bot &amp; Channel Features</span>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

<div className="group relative bg-navy-800/40 rounded-xl border border-navy-700/60 p-1 overflow-hidden hover:border-accent-500/30 transition-all duration-300">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-navy-900/90 z-10 pointer-events-none"></div>
<div className="h-40 w-full rounded-lg overflow-hidden relative">
<img alt="Chat UI" className="transition-transform duration-700 group-hover:scale-105 group-hover:opacity-100 opacity-80 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="relative z-20 p-4">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-2">
<div className="p-1.5 bg-navy-700/50 rounded-md text-accent-400">
<iconify-icon icon="lucide:message-square" width="16"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-navy-100">Daily Check-in</h3>
</div>
<span className="text-[10px] font-mono text-navy-500 uppercase tracking-widest">Bot</span>
</div>
<p className="text-xs text-navy-400 leading-relaxed mb-4">
              The bot sends you a gentle prompt every morning. Reply with an emoji or text to log your mood instantly.
            </p>
<div className="flex items-center gap-2 text-[10px] text-accent-400 font-mono">
<span className="w-1.5 h-1.5 rounded-full bg-accent-500"></span>
              Automated Tracking
            </div>
</div>
</div>

<div className="group relative bg-navy-800/40 rounded-xl border border-navy-700/60 p-1 overflow-hidden hover:border-accent-500/30 transition-all duration-300">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-navy-900/90 z-10 pointer-events-none"></div>
<div className="h-40 w-full rounded-lg overflow-hidden relative">
<img alt="Articles" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100 grayscale-[30%] group-hover:grayscale-0" src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
<div className="relative z-20 p-4">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-2">
<div className="p-1.5 bg-navy-700/50 rounded-md text-emerald-400">
<iconify-icon icon="lucide:book-open" width="16"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-navy-100">Weekly Insights</h3>
</div>
<span className="text-[10px] font-mono text-emerald-400/80 uppercase tracking-widest">Channel</span>
</div>
<p className="text-xs text-navy-400 leading-relaxed mb-4">
              Our channel publishes bite-sized, science-backed articles on sleep, anxiety, and productivity.
            </p>
<div className="flex items-center gap-3 pt-2 border-t border-navy-700/50">
<a className="text-xs text-navy-300 hover:text-white transition-colors flex items-center gap-1 group/link" href="#">
                Preview Channel <iconify-icon className="group-hover/link:translate-x-0.5 transition-transform" icon="lucide:arrow-right" width="12"></iconify-icon>
</a>
</div>
</div>
</div>

<div className="group relative bg-navy-800/40 rounded-xl border border-navy-700/60 p-1 overflow-hidden hover:border-accent-500/30 transition-all duration-300">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-navy-900/90 z-10 pointer-events-none"></div>
<div className="h-40 w-full rounded-lg overflow-hidden relative">
<img alt="Nature" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100 grayscale-[30%] group-hover:grayscale-0" src="https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
<div className="relative z-20 p-4">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-2">
<div className="p-1.5 bg-navy-700/50 rounded-md text-accent-400">
<iconify-icon icon="lucide:zap" width="16"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-navy-100">Instant Commands</h3>
</div>
<span className="text-[10px] font-mono text-navy-500 uppercase tracking-widest">Bot</span>
</div>
<p className="text-xs text-navy-400 leading-relaxed mb-4">
              Feeling overwhelmed? Type <span className="text-accent-300 bg-accent-500/10 px-1 rounded">/breathe</span> or <span className="text-accent-300 bg-accent-500/10 px-1 rounded">/calm</span> to get immediate guided exercises.
            </p>
<div className="flex items-center gap-2 text-[10px] text-accent-400 font-mono">
<span className="w-1.5 h-1.5 rounded-full bg-accent-500"></span>
              24/7 Availability
            </div>
</div>
</div>

<div className="group relative bg-navy-800/40 rounded-xl border border-navy-700/60 p-1 overflow-hidden hover:border-accent-500/30 transition-all duration-300">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-navy-900/90 z-10 pointer-events-none"></div>
<div className="h-40 w-full rounded-lg overflow-hidden relative">
<img alt="Audio" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100 grayscale-[30%] group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="relative z-20 p-4">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-2">
<div className="p-1.5 bg-navy-700/50 rounded-md text-emerald-400">
<iconify-icon icon="lucide:headphones" width="16"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-navy-100">Audio Meditations</h3>
</div>
<span className="text-[10px] font-mono text-emerald-400/80 uppercase tracking-widest">Channel</span>
</div>
<p className="text-xs text-navy-400 leading-relaxed mb-4">
              We post short, 3-minute audio meditations directly to the channel for a quick reset during your day.
            </p>
<div className="flex items-center gap-3 pt-2 border-t border-navy-700/50">
<div className="flex items-center gap-2 w-full">
<div className="h-6 w-6 rounded-full bg-navy-700 flex items-center justify-center">
<iconify-icon className="ml-0.5 text-white" icon="lucide:play" width="10"></iconify-icon>
</div>
<div className="h-0.5 w-full bg-navy-700 rounded-full">
<div className="h-full w-1/3 bg-emerald-500 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>

<div className="group relative bg-navy-800/40 rounded-xl border border-navy-700/60 p-1 overflow-hidden hover:border-accent-500/30 transition-all duration-300">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-navy-900/90 z-10 pointer-events-none"></div>
<div className="h-40 w-full rounded-lg overflow-hidden relative">
<img alt="Support" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100 grayscale-[30%] group-hover:grayscale-0" src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
<div className="relative z-20 p-4">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-2">
<div className="p-1.5 bg-navy-700/50 rounded-md text-red-400/80">
<iconify-icon icon="lucide:life-buoy" width="16"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-navy-100">Crisis Resources</h3>
</div>
<span className="text-[10px] font-mono text-red-400/80 uppercase tracking-widest">Bot</span>
</div>
<p className="text-xs text-navy-400 leading-relaxed mb-4">
              Type <span className="text-red-400 bg-red-900/20 px-1 rounded">/help</span> to instantly get a list of international crisis hotlines and resources.
            </p>
<div className="flex items-center gap-2 text-[10px] text-red-400/80 font-mono">
<span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
              Always Active
            </div>
</div>
</div>

<div className="group relative bg-navy-800/40 rounded-xl border border-navy-700/60 p-1 overflow-hidden hover:border-accent-500/30 transition-all duration-300">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-navy-900/90 z-10 pointer-events-none"></div>
<div className="h-40 w-full rounded-lg overflow-hidden relative">
<img alt="Privacy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100 grayscale-[30%] group-hover:grayscale-0" src="https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
<div className="relative z-20 p-4">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-2">
<div className="p-1.5 bg-navy-700/50 rounded-md text-accent-400">
<iconify-icon icon="lucide:shield-check" width="16"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-navy-100">Secure &amp; Private</h3>
</div>
<span className="text-[10px] font-mono text-navy-500 uppercase tracking-widest">Core</span>
</div>
<p className="text-xs text-navy-400 leading-relaxed mb-4">
              Your chat history with the bot is private. We do not store personal conversations, only anonymized mood data.
            </p>
<div className="flex items-center gap-2 text-[10px] text-accent-400 font-mono">
<span className="w-1.5 h-1.5 rounded-full bg-accent-500"></span>
              Encrypted
            </div>
</div>
</div>
</div>
</section>
</main>

<footer className="w-full border-t border-navy-800 bg-navy-900 z-10 relative">
<div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2 opacity-50 hover:opacity-100 transition-opacity">
<svg className="" data-icon-replaced="true" data-icon-set="lucide" data-lucide="bot" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(203, 213, 225)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
<span className="text-navy-300 text-xs font-semibold">Fitonomics</span>
</div>
<div className="flex gap-6">
<a className="text-[10px] text-navy-500 hover:text-navy-300 font-mono uppercase tracking-wider transition-colors flex items-center gap-1" href="#">
<iconify-icon className="" icon="lucide:send" width="10"></iconify-icon> Telegram
        </a>
<a className="text-[10px] text-navy-500 hover:text-navy-300 font-mono uppercase tracking-wider transition-colors" href="#">Privacy</a>
<a className="text-[10px] text-navy-500 hover:text-navy-300 font-mono uppercase tracking-wider transition-colors" href="#">Support</a>
</div>
<div className="text-[10px] text-navy-600 font-mono">made by sekron © 2025 Fitonomics Inc.</div>
</div>
</footer>


    </>
  );
}
