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



        // Game Logic Interaction
        let isPlaying = false;
        
        function playDemo(btn, isCorrect) {
            if (isPlaying) return;
            isPlaying = true;

            const overlay = document.getElementById('success-overlay');
            const content = document.getElementById('success-content');
            const balance = document.getElementById('user-balance');
            const originalBalance = balance.innerText;

            if (isCorrect) {
                // Success State
                btn.classList.remove('bg-white/5', 'hover:bg-white/10');
                btn.classList.add('bg-emerald-500', 'text-black', 'border-emerald-400');
                
                // Show Overlay
                overlay.classList.remove('opacity-0', 'pointer-events-none');
                content.classList.remove('scale-0');
                content.classList.add('scale-in-center');
                
                // Update Balance
                setTimeout(() => {
                    balance.innerText = "$2,500.00";
                    balance.classList.add('text-emerald-400');
                }, 200);

            } else {
                // Error State
                btn.classList.remove('bg-white/5');
                btn.classList.add('bg-red-500/20', 'border-red-500/50', 'text-red-200');
                btn.classList.add('shake');
            }

            // Reset Logic
            setTimeout(() => {
                // Reset Button
                btn.classList.remove('bg-emerald-500', 'text-black', 'border-emerald-400', 'bg-red-500/20', 'border-red-500/50', 'text-red-200', 'shake');
                btn.classList.add('bg-white/5', 'hover:bg-white/10');
                
                // Reset Overlay
                overlay.classList.add('opacity-0', 'pointer-events-none');
                content.classList.add('scale-0');
                content.classList.remove('scale-in-center');

                // Reset Balance
                balance.innerText = originalBalance;
                balance.classList.remove('text-emerald-400');
                
                isPlaying = false;
            }, 2500);
        }

        // Scroll Reveal Logic
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => {
            observer.observe(el);
        });

        // Navbar Scroll Effect
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('navbar');
            if (window.scrollY > 20) {
                nav.classList.add('border-b', 'border-white/5', 'bg-[#050505]/80');
                nav.classList.remove('bg-transparent', 'border-transparent');
            } else {
                // Keep consistent
            }
        });

        // Dynamic Counters
        setInterval(() => {
            const playerEl = document.getElementById('player-count');
            let current = parseInt(playerEl.innerText);
            let change = Math.floor(Math.random() * 5) - 2;
            playerEl.innerText = current + change;
        }, 3000);

        // Timer
        const timerEl = document.getElementById('timer');
        let ms = 82;
        let sec = 4;
        setInterval(() => {
            if(!isPlaying) { // Pause timer during win state for effect
                ms--;
                if(ms < 0) { ms = 99; sec--; }
                if(sec < 0) { sec = 4; ms = 99; }
                timerEl.innerText = `0${sec}:${ms < 10 ? '0'+ms : ms}`;
            }
        }, 10);

        // Money Counter
        const payoutEl = document.getElementById('payout-counter');
        let baseAmount = 1842920;
        setInterval(() => {
            baseAmount += Math.floor(Math.random() * 50);
            payoutEl.innerText = '$' + baseAmount.toLocaleString();
        }, 2000);
    
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
      

<div className="fixed inset-0 bg-grid z-0 pointer-events-none"></div>
<div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] radial-glow opacity-60 z-0 pointer-events-none"></div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-7 h-7 bg-white/5 border border-white/10 rounded flex items-center justify-center group-hover:bg-indigo-500/20 group-hover:border-indigo-500/50 transition-all duration-300">
<span className="iconify text-white group-hover:text-indigo-400 transition-colors" data-icon="lucide:swords" data-width="14"></span>
</div>
<span className="text-sm font-semibold tracking-tight text-white group-hover:text-indigo-100 transition-colors">FAIRMATCH</span>
</div>
<div className="hidden md:flex items-center gap-8 text-xs font-medium text-neutral-400">
<a className="hover:text-white transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-white after:transition-all hover:after:w-full" href="#features">Protocol</a>
<a className="hover:text-white transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-white after:transition-all hover:after:w-full" href="#mechanics">Scoring</a>
<a className="hover:text-white transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-white after:transition-all hover:after:w-full" href="#ecosystem">Live Feed</a>
<a className="hover:text-white transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-white after:transition-all hover:after:w-full" href="#roadmap">Roadmap</a>
</div>
<div className="flex items-center gap-4">
<div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/5">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-[10px] font-medium text-neutral-400"><span id="player-count">842</span> Online</span>
</div>
<button className="bg-white text-black hover:bg-neutral-200 transition-all duration-300 hover:scale-[1.02] text-xs font-semibold px-4 py-2 rounded-full shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]">
                    Launch App
                </button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden z-10">
<div className="max-w-4xl mx-auto text-center relative z-10">
<div className="reveal active inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/10 mb-8 hover:bg-indigo-500/15 transition-colors cursor-default">
<span className="iconify text-indigo-400" data-icon="lucide:sparkles" data-width="12"></span>
<span className="text-xs font-medium text-indigo-200 tracking-wide uppercase">Beta V2.0 is Live</span>
</div>
<h1 className="reveal active delay-100 text-5xl md:text-7xl lg:text-8xl font-medium text-white tracking-tight leading-[1] mb-6">
                Pure Skill.<br/>
<span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-200 via-neutral-400 to-neutral-600 animate-gradient">Zero Luck.</span>
</h1>
<p className="reveal active delay-200 text-base md:text-lg text-neutral-400 max-w-xl mx-auto mb-10 leading-relaxed font-light">
                The decentralized arena for 1v1 cognitive challenges. Secure matchmaking, human arbitration, and instant settlements.
            </p>
<div className="reveal active delay-300 flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto bg-white text-black hover:bg-neutral-200 transition-all duration-300 hover:-translate-y-1 text-sm font-medium px-8 py-3.5 rounded-full flex items-center justify-center gap-2 shadow-[0_0_40px_-10px_rgba(255,255,255,0.2)]">
                    Start Matchmaking
                    <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
<button className="w-full sm:w-auto glass-panel hover:bg-white/5 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 text-white text-sm font-medium px-8 py-3.5 rounded-full flex items-center justify-center gap-2 group">
<span className="iconify text-neutral-400 group-hover:text-white transition-colors" data-icon="lucide:play-circle" data-width="16"></span>
                    Watch Live
                </button>
</div>
</div>

<div className="reveal delay-500 mt-20 max-w-4xl mx-auto relative group z-10 animate-float" id="mockup-container">

<div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-emerald-500/20 rounded-xl blur-xl opacity-40 group-hover:opacity-60 transition duration-1000"></div>
<div className="glass-panel rounded-xl p-1 relative overflow-hidden ring-1 ring-white/10">
<div className="bg-[#0A0A0A] rounded-lg p-6 md:p-8 relative">

<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 animate-gradient"></div>

<div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-[#0A0A0A]/60 backdrop-blur-sm opacity-0 pointer-events-none transition-opacity duration-300" id="success-overlay">
<div className="text-center transform scale-0 transition-transform duration-300" id="success-content">
<div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center mx-auto mb-4 shadow-[0_0_30px_-5px_rgba(16,185,129,0.5)]">
<span className="iconify text-emerald-400" data-icon="lucide:check" data-width="32"></span>
</div>
<div className="text-4xl font-bold text-white tracking-tight mb-1 drop-shadow-lg font-mono">+$50.00</div>
<div className="text-xs font-semibold text-emerald-400 uppercase tracking-widest">Victory</div>
</div>
</div>

<div className="flex justify-between items-center mb-8 border-b border-white/5 pb-4">
<div className="flex items-center gap-3">
<div className="relative">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
<span className="text-xs font-bold text-white">YOU</span>
</div>
<div className="absolute -bottom-1 -right-1 w-4 h-4 bg-black rounded-full flex items-center justify-center">
<div className="w-2.5 h-2.5 bg-emerald-500 rounded-full border border-black animate-pulse"></div>
</div>
</div>
<div className="text-left">
<div className="text-[10px] text-neutral-400 uppercase tracking-wider">Current Balance</div>
<div className="text-sm font-bold text-white font-mono tracking-tight" id="user-balance">$2,450.00</div>
</div>
</div>
<div className="flex flex-col items-center">
<div className="flex items-center gap-2 mb-1">
<span className="iconify text-emerald-400 animate-spin" data-icon="lucide:loader-2" data-width="12" style={{animationDuration: '3s'}}></span>
<div className="text-[10px] uppercase tracking-widest text-emerald-400 font-bold">Match in Progress</div>
</div>
<div className="text-2xl font-mono text-white tabular-nums tracking-widest" id="timer">04:82</div>
</div>
<div className="flex items-center gap-3">
<div className="text-right">
<div className="text-[10px] text-neutral-400 uppercase tracking-wider">Opponent</div>
<div className="text-sm font-medium text-white font-mono">User_992</div>
</div>
<div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center border border-white/10">
<span className="iconify text-neutral-500" data-icon="lucide:user" data-width="18"></span>
</div>
</div>
</div>

<div className="flex flex-col items-center justify-center min-h-[220px] mb-8 relative group/canvas">
<div className="absolute inset-0 bg-indigo-500/5 rounded blur-2xl opacity-0 group-hover/canvas:opacity-100 transition-opacity duration-700"></div>
<div className="relative w-full max-w-md aspect-video bg-[#050505] rounded border border-white/10 flex items-center justify-center overflow-hidden shadow-inner">

<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(#4f46e5 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>
<div className="text-center z-10 px-6">
<span className="text-xs font-mono text-indigo-400 mb-4 block opacity-70">Decipher Sequence</span>
<span className="text-xl md:text-2xl font-medium text-white tracking-tight blur-[0.3px] select-none">
                                    0x3A • 0x7B • 0xBC • <span className="text-indigo-400 animate-pulse">?</span>
</span>
</div>
<div className="absolute bottom-2 right-3 flex items-center gap-1.5 opacity-50">
<div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
<span className="text-[9px] text-neutral-500 font-mono">REC</span>
</div>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-3">
<button className="game-btn group h-12 rounded border border-white/10 bg-white/5 hover:bg-white/10 hover:border-indigo-500/50 hover:shadow-[0_0_15px_-5px_rgba(99,102,241,0.3)] transition-all duration-200 relative overflow-hidden focus:outline-none" onclick="playDemo(this, true)">
<div className="absolute inset-0 w-full h-full bg-indigo-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
<span className="relative z-10 text-sm text-neutral-300 font-medium font-mono group-hover:text-white">0xFD</span>
</button>
<button className="game-btn group h-12 rounded border border-white/10 bg-white/5 hover:bg-white/10 hover:border-indigo-500/50 hover:shadow-[0_0_15px_-5px_rgba(99,102,241,0.3)] transition-all duration-200 relative overflow-hidden focus:outline-none" onclick="playDemo(this, false)">
<div className="absolute inset-0 w-full h-full bg-indigo-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
<span className="relative z-10 text-sm text-neutral-300 font-medium font-mono group-hover:text-white">0xE1</span>
</button>
<button className="game-btn group h-12 rounded border border-white/10 bg-white/5 hover:bg-white/10 hover:border-indigo-500/50 hover:shadow-[0_0_15px_-5px_rgba(99,102,241,0.3)] transition-all duration-200 relative overflow-hidden focus:outline-none" onclick="playDemo(this, false)">
<div className="absolute inset-0 w-full h-full bg-indigo-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
<span className="relative z-10 text-sm text-neutral-300 font-medium font-mono group-hover:text-white">0x1F</span>
</button>
<button className="game-btn group h-12 rounded border border-white/10 bg-white/5 hover:bg-white/10 hover:border-indigo-500/50 hover:shadow-[0_0_15px_-5px_rgba(99,102,241,0.3)] transition-all duration-200 relative overflow-hidden focus:outline-none" onclick="playDemo(this, false)">
<div className="absolute inset-0 w-full h-full bg-indigo-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
<span className="relative z-10 text-sm text-neutral-300 font-medium font-mono group-hover:text-white">0x4C</span>
</button>
</div>
</div>
</div>
<p className="text-center text-[10px] text-neutral-600 mt-4">Interactive Demo: Select the correct sequence to win.</p>
</div>
</section>

<div className="border-y border-white/5 bg-white/[0.02] overflow-hidden py-4 relative z-20" id="ecosystem">
<div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#050505] to-transparent z-10"></div>
<div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#050505] to-transparent z-10"></div>
<div className="flex w-[200%] animate-marquee">

<div className="flex items-center gap-12 px-6 whitespace-nowrap">
<div className="flex items-center gap-2 text-xs text-neutral-400">
<span className="w-2 h-2 rounded-full bg-emerald-500"></span>
<span className="font-medium text-white">Alex_D</span> just won <span className="text-emerald-400 font-mono">$450.00</span> in Blitz Mode
                </div>
<div className="flex items-center gap-2 text-xs text-neutral-400">
<span className="w-2 h-2 rounded-full bg-indigo-500"></span>
<span className="font-medium text-white">Sarah.eth</span> climbed to <span className="text-indigo-400">Rank #42</span>
</div>
<div className="flex items-center gap-2 text-xs text-neutral-400">
<span className="w-2 h-2 rounded-full bg-emerald-500"></span>
<span className="font-medium text-white">Koji_Pro</span> just won <span className="text-emerald-400 font-mono">$1,200.00</span> in High Stakes
                </div>
<div className="flex items-center gap-2 text-xs text-neutral-400">
<span className="w-2 h-2 rounded-full bg-amber-500"></span>
<span>New Tournament:</span> <span className="text-white">Weekend War</span> starting in 2h
                </div>
<div className="flex items-center gap-2 text-xs text-neutral-400">
<span className="w-2 h-2 rounded-full bg-emerald-500"></span>
<span className="font-medium text-white">User882</span> just won <span className="text-emerald-400 font-mono">$50.00</span>
</div>
</div>

<div className="flex items-center gap-12 px-6 whitespace-nowrap">
<div className="flex items-center gap-2 text-xs text-neutral-400">
<span className="w-2 h-2 rounded-full bg-emerald-500"></span>
<span className="font-medium text-white">Alex_D</span> just won <span className="text-emerald-400 font-mono">$450.00</span> in Blitz Mode
                </div>
<div className="flex items-center gap-2 text-xs text-neutral-400">
<span className="w-2 h-2 rounded-full bg-indigo-500"></span>
<span className="font-medium text-white">Sarah.eth</span> climbed to <span className="text-indigo-400">Rank #42</span>
</div>
<div className="flex items-center gap-2 text-xs text-neutral-400">
<span className="w-2 h-2 rounded-full bg-emerald-500"></span>
<span className="font-medium text-white">Koji_Pro</span> just won <span className="text-emerald-400 font-mono">$1,200.00</span> in High Stakes
                </div>
<div className="flex items-center gap-2 text-xs text-neutral-400">
<span className="w-2 h-2 rounded-full bg-amber-500"></span>
<span>New Tournament:</span> <span className="text-white">Weekend War</span> starting in 2h
                </div>
<div className="flex items-center gap-2 text-xs text-neutral-400">
<span className="w-2 h-2 rounded-full bg-emerald-500"></span>
<span className="font-medium text-white">User882</span> just won <span className="text-emerald-400 font-mono">$50.00</span>
</div>
</div>
</div>
</div>

<section className="py-24 px-6 relative z-10" id="features">
<div className="max-w-7xl mx-auto">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="reveal text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Engineered for Fairness</h2>
<p className="reveal delay-100 text-sm text-neutral-400">We've solved the ranking problem. No queues, no cheats, just pure skill execution.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="reveal delay-100 glass-panel p-8 rounded-xl group hover:bg-white/[0.03] hover:border-indigo-500/30 transition-all duration-500 relative overflow-hidden">
<div className="absolute right-0 top-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl -mr-16 -mt-16 group-hover:bg-indigo-500/20 transition-colors"></div>
<div className="w-12 h-12 rounded-lg bg-[#0A0A0A] border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-lg">
<span className="iconify text-indigo-400" data-icon="lucide:zap" data-width="24"></span>
</div>
<h3 className="text-lg font-medium text-white mb-3 tracking-tight">Flash Matchmaking</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                        Like ride-sharing for gaming. Propose a stake, get counter-offers instanty. Our liquidity pool ensures zero wait times for any skill level.
                    </p>
</div>

<div className="reveal delay-200 glass-panel p-8 rounded-xl group hover:bg-white/[0.03] hover:border-emerald-500/30 transition-all duration-500 relative overflow-hidden">
<div className="absolute right-0 top-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl -mr-16 -mt-16 group-hover:bg-emerald-500/20 transition-colors"></div>
<div className="w-12 h-12 rounded-lg bg-[#0A0A0A] border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300 shadow-lg">
<span className="iconify text-emerald-400" data-icon="lucide:shield-check" data-width="24"></span>
</div>
<h3 className="text-lg font-medium text-white mb-3 tracking-tight">Anti-AI Protocol</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                        Canvas-rendered obfuscation prevents OCR. 5-second "Blitz" timers make GPT processing impossible. 
                    </p>
</div>

<div className="reveal delay-300 glass-panel p-8 rounded-xl group hover:bg-white/[0.03] hover:border-amber-500/30 transition-all duration-500 relative overflow-hidden">
<div className="absolute right-0 top-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl -mr-16 -mt-16 group-hover:bg-amber-500/20 transition-colors"></div>
<div className="w-12 h-12 rounded-lg bg-[#0A0A0A] border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-lg">
<span className="iconify text-amber-400" data-icon="lucide:clock" data-width="24"></span>
</div>
<h3 className="text-lg font-medium text-white mb-3 tracking-tight">Async Mode</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                        Play your turn now, opponent responds within 48h. Perfect for low liquidity hours or challenging friends across timezones.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-neutral-900/20 border-t border-white/5 relative z-10" id="mechanics">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="reveal">
<div className="inline-flex items-center gap-2 text-indigo-400 text-xs font-medium uppercase tracking-widest mb-4">
<span className="w-1 h-1 rounded-full bg-indigo-400"></span> Logic Core
                    </div>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-6">Precision Scoring System</h2>
<p className="text-sm text-neutral-400 mb-8 leading-relaxed max-w-md">
                        Speed is a skill. Our scoring algorithm rewards instant processing and penalizes hesitation. Every millisecond determines your payout.
                    </p>
<div className="space-y-4">
<div className="group flex items-center justify-between p-4 rounded-lg bg-[#0A0A0A] border border-white/5 hover:border-emerald-500/30 transition-colors cursor-default">
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded bg-emerald-500/10 flex items-center justify-center">
<span className="iconify text-emerald-400" data-icon="lucide:timer" data-width="16"></span>
</div>
<div className="flex flex-col">
<span className="text-sm text-white font-medium">0.0s – 2.0s</span>
<span className="text-[10px] text-neutral-500">Instant Reaction</span>
</div>
</div>
<span className="text-sm font-bold text-emerald-400 font-mono">100 pts</span>
</div>
<div className="group flex items-center justify-between p-4 rounded-lg bg-[#0A0A0A] border border-white/5 hover:border-amber-500/30 transition-colors cursor-default">
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded bg-amber-500/10 flex items-center justify-center">
<span className="iconify text-amber-500" data-icon="lucide:timer" data-width="16"></span>
</div>
<div className="flex flex-col">
<span className="text-sm text-white font-medium">2.1s – 4.0s</span>
<span className="text-[10px] text-neutral-500">Standard Reaction</span>
</div>
</div>
<span className="text-sm font-bold text-amber-500 font-mono">70 pts</span>
</div>
<div className="group flex items-center justify-between p-4 rounded-lg bg-[#0A0A0A] border border-white/5 hover:border-red-500/30 transition-colors cursor-default">
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded bg-red-500/10 flex items-center justify-center">
<span className="iconify text-red-400" data-icon="lucide:alert-octagon" data-width="16"></span>
</div>
<div className="flex flex-col">
<span className="text-sm text-white font-medium">Focus Loss</span>
<span className="text-[10px] text-neutral-500">Alt-tab / Mouse Exit</span>
</div>
</div>
<span className="text-sm font-bold text-red-400 font-mono">-20 pts</span>
</div>
</div>
</div>

<div className="reveal delay-200 glass-panel rounded-2xl p-8 border border-white/10 relative">
<h3 className="text-sm font-medium text-white mb-8 flex items-center justify-between">
<span className="flex items-center gap-2">
<span className="iconify text-neutral-400" data-icon="lucide:activity" data-width="18"></span>
                            Algorithm Weighting
                        </span>
<span className="text-[10px] text-neutral-500 bg-white/5 px-2 py-1 rounded">V2.1.0</span>
</h3>
<div className="space-y-8">

<div className="relative group">
<div className="flex justify-between text-xs text-neutral-400 mb-2">
<span className="group-hover:text-indigo-400 transition-colors">Performance Score</span>
<span className="font-mono text-white">60%</span>
</div>
<div className="h-2 bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full bg-indigo-500 w-[60%] group-hover:brightness-125 transition-all duration-500 relative overflow-hidden">
<div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
</div>
</div>
</div>

<div className="relative group">
<div className="flex justify-between text-xs text-neutral-400 mb-2">
<span className="group-hover:text-emerald-400 transition-colors">Win Rate</span>
<span className="font-mono text-white">20%</span>
</div>
<div className="h-2 bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 w-[20%] group-hover:brightness-125 transition-all duration-500 relative overflow-hidden">
<div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
</div>
</div>
</div>

<div className="relative group">
<div className="flex justify-between text-xs text-neutral-400 mb-2">
<span className="group-hover:text-purple-400 transition-colors">Stake Volume</span>
<span className="font-mono text-white">20%</span>
</div>
<div className="h-2 bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full bg-purple-500 w-[20%] group-hover:brightness-125 transition-all duration-500 relative overflow-hidden">
<div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
</div>
</div>
</div>
</div>

<div className="mt-10 p-5 bg-neutral-900/50 rounded-xl border border-white/5 hover:border-indigo-500/20 transition-colors">
<div className="flex items-center justify-between mb-4">
<div className="text-xs text-neutral-500">Total Protocol Payouts</div>
<div className="text-[10px] text-green-500 bg-green-500/10 px-1.5 py-0.5 rounded">+12% this week</div>
</div>
<div className="text-3xl font-mono text-white tracking-tight" id="payout-counter">$1,842,920</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-[#050505] relative z-10">
<div className="max-w-3xl mx-auto">
<h2 className="reveal text-2xl font-medium text-white mb-10 text-center">Frequently Asked Questions</h2>
<div className="space-y-4">
<details className="reveal delay-100 group glass-panel rounded-lg open:bg-white/[0.04] transition-all duration-300">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none text-sm font-medium text-neutral-200">
<span>How is cheating prevented?</span>
<span className="iconify transform group-open:rotate-180 transition-transform text-neutral-500" data-icon="lucide:chevron-down" data-width="18"></span>
</summary>
<div className="px-6 pb-6 text-sm text-neutral-400 leading-relaxed border-t border-white/5 pt-4">
                        We use a multi-layer approach. 1. Canvas rendering prevents OCR reading. 2. Focus-loss detection penalizes alt-tabbing. 3. Statistical anomaly detection flags impossible reaction times. 4. Decentralized human arbitration for disputed outcomes.
                    </div>
</details>
<details className="reveal delay-200 group glass-panel rounded-lg open:bg-white/[0.04] transition-all duration-300">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none text-sm font-medium text-neutral-200">
<span>Can I play for free?</span>
<span className="iconify transform group-open:rotate-180 transition-transform text-neutral-500" data-icon="lucide:chevron-down" data-width="18"></span>
</summary>
<div className="px-6 pb-6 text-sm text-neutral-400 leading-relaxed border-t border-white/5 pt-4">
                        Yes. The "Practice Arena" is completely free and allows you to build your Elo rating. Stakes are only required for the Competitive and Tournament tiers.
                    </div>
</details>
<details className="reveal delay-300 group glass-panel rounded-lg open:bg-white/[0.04] transition-all duration-300">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none text-sm font-medium text-neutral-200">
<span>How does the arbitration work?</span>
<span className="iconify transform group-open:rotate-180 transition-transform text-neutral-500" data-icon="lucide:chevron-down" data-width="18"></span>
</summary>
<div className="px-6 pb-6 text-sm text-neutral-400 leading-relaxed border-t border-white/5 pt-4">
                        When a result is disputed, the game logs are anonymized and sent to 3 random Arbiters (high-ranking, verified users). They vote on the outcome based on the replay data. Arbiters earn a fee for correct judgments.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden z-10" id="roadmap">
<div className="absolute inset-0 bg-gradient-to-t from-indigo-950/20 to-[#050505] pointer-events-none"></div>
<div className="max-w-5xl mx-auto relative z-10">
<div className="reveal glass-panel rounded-2xl p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 border border-white/10 shadow-2xl relative overflow-hidden group">

<div className="absolute -right-20 -top-20 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl group-hover:bg-indigo-500/20 transition-colors duration-700"></div>
<div className="max-w-md relative">
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">Claim Your Username</h2>
<p className="text-sm text-neutral-400 mb-8 leading-relaxed">
                        We are limiting Beta access to ensure server stability. The first 500 users get the "Early Adopter" badge and zero fees for 3 months.
                    </p>
<div className="flex flex-col gap-3">
<div className="flex items-center gap-3 text-xs text-neutral-400">
<span className="iconify text-emerald-500" data-icon="lucide:check-circle" data-width="16"></span>
<span>Phase 1: Room System &amp; Ranking (Live)</span>
</div>
<div className="flex items-center gap-3 text-xs text-neutral-400">
<span className="iconify text-emerald-500" data-icon="lucide:check-circle" data-width="16"></span>
<span>Phase 2: Anti-IA &amp; Async Mode (In Progress)</span>
</div>
<div className="flex items-center gap-3 text-xs text-indigo-400">
<div className="w-4 h-4 rounded-full border border-indigo-500/30 flex items-center justify-center">
<div className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-pulse"></div>
</div>
<span>Phase 3: Arbitration Layer (Coming Soon)</span>
</div>
</div>
</div>
<div className="w-full md:w-auto relative">
<form className="flex flex-col gap-4">
<div className="relative group/input">
<input className="w-full md:w-80 bg-[#0A0A0A] border border-white/10 rounded-lg px-4 py-4 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all" placeholder="enter@email.com" type="email"/>
<div className="absolute right-3 top-1/2 -translate-y-1/2 opacity-0 group-focus-within/input:opacity-100 transition-opacity">
<span className="iconify text-neutral-500" data-icon="lucide:corner-down-left" data-width="14"></span>
</div>
</div>
<button className="w-full md:w-80 bg-white text-black font-semibold text-sm px-4 py-4 rounded-lg hover:bg-indigo-50 transition-all duration-300 hover:shadow-[0_0_20px_-5px_rgba(255,255,255,0.4)] flex items-center justify-center gap-2" type="submit">
                            Request Access
                            <span className="iconify" data-icon="lucide:arrow-up-right" data-width="16"></span>
</button>
<p className="text-[10px] text-neutral-600 text-center">No spam. Pure skill.</p>
</form>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 py-12 bg-[#050505] relative z-10">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
<div className="flex flex-col gap-4">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-white/10 rounded flex items-center justify-center">
<span className="iconify text-white" data-icon="lucide:swords" data-width="12"></span>
</div>
<span className="text-sm font-semibold tracking-tight text-white">FAIRMATCH</span>
</div>
<div className="text-[10px] text-neutral-600">
                    System Status: <span className="text-emerald-500">Operational</span><br/>
                    Latency: <span className="text-neutral-400">24ms</span>
</div>
</div>
<div className="flex flex-wrap justify-center gap-8">
<a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#">Terms of Service</a>
<a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#">Bug Bounty</a>
<a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#">Developer API</a>
</div>
<div className="flex gap-4">
<a className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-neutral-400 hover:bg-white/10 hover:text-white transition-all" href="#">
<span className="iconify" data-icon="lucide:twitter" data-width="14"></span>
</a>
<a className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-neutral-400 hover:bg-white/10 hover:text-white transition-all" href="#">
<span className="iconify" data-icon="lucide:github" data-width="14"></span>
</a>
<a className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-neutral-400 hover:bg-white/10 hover:text-white transition-all" href="#">
<span className="iconify" data-icon="lucide:discord" data-width="14"></span>
</a>
</div>
</div>
</footer>



    </>
  );
}
