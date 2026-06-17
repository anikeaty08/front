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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Newsreader', 'serif'],
mono: ['Space Grotesk', 'monospace'],
brand: ['Manrope', 'sans-serif'],
},
colors: {
brand: {
sky: '#818cf8', // Shifted to Indigo/Violet for Hiring OS
dark: '#050505',
panel: '#0F110E',
}
},
backgroundImage: {
'radial-glow': 'radial-gradient(circle at 70% 50%, rgba(129, 140, 248, 0.25) 0%, rgba(5, 5, 5, 0) 60%)',
},
animation: {
'beam': 'beam 4s linear infinite',
'spin-slow': 'spin 12s linear infinite',
'spin-slow-reverse': 'spin 15s linear infinite reverse',
'pulse-fast': 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'float': 'float 6s ease-in-out infinite',
},
keyframes: {
beam: {
'0%': { strokeDashoffset: '1000' },
'100%': { strokeDashoffset: '0' },
},
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
}
}
}
}
}



        // --- 3D Carousel Logic ---
        document.addEventListener('DOMContentLoaded', () => {
            const cards = document.querySelectorAll('.hero-card');
            const prevBtn = document.getElementById('prevBtn');
            const nextBtn = document.getElementById('nextBtn');
            let currentIndex = 0;
            const totalCards = cards.length;

            function updateCards() {
                cards.forEach((card, index) => {
                    // Calculate position relative to current index
                    let offset = (index - currentIndex + totalCards) % totalCards;
                    
                    if (offset === 0) {
                        // Active Card (Front)
                        card.style.transform = 'translateX(0) scale(1) translateZ(0)';
                        card.style.opacity = '1';
                        card.style.zIndex = '30';
                        card.style.pointerEvents = 'auto';
                    } else if (offset === 1) {
                        // Next Card (Right/Back)
                        card.style.transform = 'translateX(40px) scale(0.9) translateZ(-50px)';
                        card.style.opacity = '0.6';
                        card.style.zIndex = '20';
                        card.style.pointerEvents = 'none';
                    } else if (offset === 2) {
                         // Previous/Last Card (Left/Back) - simulating stack
                        card.style.transform = 'translateX(-40px) scale(0.9) translateZ(-100px)';
                        card.style.opacity = '0.4';
                        card.style.zIndex = '10';
                         card.style.pointerEvents = 'none';
                    }
                });
            }

            function nextCard() {
                currentIndex = (currentIndex + 1) % totalCards;
                updateCards();
            }

            function prevCard() {
                currentIndex = (currentIndex - 1 + totalCards) % totalCards;
                updateCards();
            }

            nextBtn.addEventListener('click', nextCard);
            prevBtn.addEventListener('click', prevCard);

            // Auto-rotate every 5 seconds
            setInterval(nextCard, 5000);

            // Initial State
            updateCards();

            // --- Reveal on Scroll ---
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal-on-scroll').forEach(el => {
                observer.observe(el);
            });

            // --- Parallax Background ---
            const grid = document.getElementById('parallax-grid');
            window.addEventListener('scroll', () => {
                const scrolled = window.scrollY;
                grid.style.transform = `translateY(${scrolled * 0.5}px)`;
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
      

<div className="fixed inset-0 grid-bg pointer-events-none z-0 opacity-40 transition-transform duration-75 will-change-transform" id="parallax-grid"></div>

<div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none z-0"></div>

<nav className="fixed top-6 left-1/2 -translate-x-1/2 flex items-center justify-between w-[90vw] md:w-auto max-w-2xl bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-2 py-2 shadow-2xl z-50">

<div className="flex items-center gap-3 pl-4 pr-6 cursor-pointer group">
<div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-white/5 border border-white/5 group-hover:border-brand-sky/30 transition-colors">
<iconify-icon className="text-brand-sky text-lg" icon="solar:command-linear"></iconify-icon>
</div>
<span className="font-brand font-semibold text-sm tracking-tight text-white">Hiring<span className="text-brand-sky">OS</span></span>
</div>

<div className="hidden md:flex items-center gap-6 pr-6">
<a className="text-xs font-medium text-white/50 hover:text-white transition-colors" href="#">Platform</a>
<a className="text-xs font-medium text-white/50 hover:text-white transition-colors" href="#">Solutions</a>
<a className="text-xs font-medium text-white/50 hover:text-white transition-colors" href="#">Pricing</a>
</div>

<button className="flex items-center gap-2 bg-white text-black text-xs font-semibold px-4 py-2 rounded-full hover:bg-brand-sky transition-colors hover:scale-105 active:scale-95 duration-200">
            Login
            <iconify-icon className="text-sm" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</nav>

<main className="relative z-10 w-full min-h-screen flex flex-col pt-32 lg:pt-0 lg:justify-center">
<div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-16 lg:gap-8">

<div className="lg:w-1/2 flex flex-col items-start pt-12 lg:pt-0 z-20 reveal-on-scroll">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-8 backdrop-blur-md animate-float">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
<span className="text-[10px] font-mono font-medium tracking-widest text-indigo-300 uppercase">System V2.0 Online</span>
</div>
<h1 className="text-5xl lg:text-7xl font-serif italic text-white leading-[1.1] mb-6 tracking-tight">
                    The AI-Led <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-white not-italic font-brand font-bold text-glow">Hiring OS</span>
</h1>
<p className="text-lg text-white/60 font-light leading-relaxed max-w-xl mb-10 tracking-tight">
                    Autonomous agents that source, screen, and interview. Replace your ATS with a neural network that understands talent at scale.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">

<button className="shiny-cta w-full sm:w-auto">
<span className="flex items-center justify-center gap-2 relative z-10">
                            Deploy Agents
                            <iconify-icon className="text-lg" icon="solar:stars-minimalistic-linear"></iconify-icon>
</span>
</button>

<button className="group relative w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-sm font-medium text-white/90 overflow-hidden" style={{'--border-gradient': 'linear-gradient(to bottom, rgba(255,255,255,0.2), rgba(255,255,255,0.05))', '--border-radius-before': '9999px'}}>
<span>View Demo</span>
<iconify-icon className="text-lg opacity-60 group-hover:text-indigo-400 group-hover:opacity-100 transition-all" icon="solar:play-circle-linear"></iconify-icon>
</button>
</div>

<div className="mt-12 flex items-center gap-8 border-t border-white/5 pt-8 w-full max-w-md">
<div>
<div className="text-2xl font-mono font-bold text-white">85%</div>
<div className="text-xs text-white/40 uppercase tracking-wider mt-1">Time Saved</div>
</div>
<div className="w-px h-8 bg-white/10"></div>
<div>
<div className="text-2xl font-mono font-bold text-white">10k+</div>
<div className="text-xs text-white/40 uppercase tracking-wider mt-1">Interviews/Day</div>
</div>
</div>
</div>

<div className="lg:w-1/2 w-full h-[600px] flex items-center justify-center relative perspective-1000 reveal-on-scroll delay-200">

<svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible">
<defs>
<lineargradient id="beam-grad" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" stop-color="rgba(99, 102, 241, 0)"></stop>
<stop offset="50%" stop-color="rgba(129, 140, 248, 1)"></stop>
<stop offset="100%" stop-color="rgba(99, 102, 241, 0)"></stop>
</lineargradient>
</defs>

<path d="M 50 300 C 150 300, 150 300, 250 300" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1"></path>
<path d="M 550 300 C 450 300, 450 300, 350 300" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1"></path>
<path d="M 300 50 L 300 150" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1"></path>

<path className="beam-line animate-beam opacity-70" d="M 50 300 C 150 300, 150 300, 250 300" fill="none" stroke="url(#beam-grad)" strokeWidth="2"></path>
<path className="beam-line animate-beam opacity-70" d="M 550 300 C 450 300, 450 300, 350 300" fill="none" stroke="url(#beam-grad)" strokeWidth="2" style={{animationDelay: '-1s', direction: 'rtl'}}></path>
</svg>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
<svg className="overflow-visible" height="400" viewbox="0 0 400 400" width="400">
<circle className="animate-sonar" cx="200" cy="200" fill="none" r="100" stroke="#818cf8" stroke-opacity="0.2"></circle>
<circle className="animate-sonar delay-1000" cx="200" cy="200" fill="none" r="100" stroke="#818cf8" stroke-opacity="0.2"></circle>
</svg>
</div>

<div className="card-stack relative z-10" id="cardCarousel">

<div className="hero-card p-6 flex flex-col gap-4" data-index="0">
<div className="flex items-center justify-between border-b border-white/10 pb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-300 border border-indigo-500/30">
<span className="font-mono text-xs font-bold">JD</span>
</div>
<div>
<div className="text-sm font-semibold text-white">John Doe</div>
<div className="text-xs text-white/40">Frontend Engineer</div>
</div>
</div>
<div className="px-2 py-1 rounded bg-green-500/10 border border-green-500/20 text-green-400 text-[10px] font-mono uppercase">Top 1%</div>
</div>
<div className="space-y-3">
<div className="flex justify-between items-center text-xs">
<span className="text-white/40">Technical Score</span>
<span className="text-white font-mono">98/100</span>
</div>
<div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
<div className="w-[98%] h-full bg-indigo-500"></div>
</div>
<div className="flex justify-between items-center text-xs pt-2">
<span className="text-white/40">Culture Fit</span>
<span className="text-white font-mono">92/100</span>
</div>
<div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
<div className="w-[92%] h-full bg-indigo-400"></div>
</div>
</div>
<div className="mt-auto pt-4 flex gap-2">
<button className="flex-1 py-2 bg-white text-black rounded text-xs font-bold">Offer</button>
<button className="px-3 py-2 border border-white/10 rounded text-white/60 hover:text-white hover:bg-white/5 transition-colors">
<iconify-icon icon="solar:menu-dots-bold"></iconify-icon>
</button>
</div>
</div>

<div className="hero-card p-6 flex flex-col gap-4" data-index="1">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-indigo-400" icon="solar:stars-bold"></iconify-icon>
<span className="text-xs font-mono text-indigo-300 uppercase tracking-widest">AI Insight</span>
</div>
<p className="text-sm text-white/80 font-light leading-relaxed">
                            "Candidate demonstrates exceptional proficiency in React patterns. Responses indicate strong system design capabilities consistent with L5 expectations."
                        </p>
<div className="mt-4 p-3 bg-white/5 rounded-lg border border-white/5">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-emerald-400 text-xs" icon="solar:check-circle-bold"></iconify-icon>
<span className="text-xs text-white/60">Optimized Rendering</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-emerald-400 text-xs" icon="solar:check-circle-bold"></iconify-icon>
<span className="text-xs text-white/60">State Management</span>
</div>
</div>
</div>

<div className="hero-card p-0 flex flex-col" data-index="2">
<div className="bg-white/5 p-4 border-b border-white/10 flex justify-between items-center">
<span className="text-xs font-mono text-white/50">AUTO_PILOT_LOG</span>
<div className="flex gap-1">
<div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
<div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
<div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
</div>
</div>
<div className="p-4 space-y-3 font-mono text-[10px]">
<div className="flex gap-2 text-white/40">
<span>10:42:01</span>
<span className="text-emerald-400">SOURCE</span>
<span>Found 142 matches</span>
</div>
<div className="flex gap-2 text-white/40">
<span>10:42:05</span>
<span className="text-blue-400">SCREEN</span>
<span>Filtering exp &gt; 5y</span>
</div>
<div className="flex gap-2 text-white/40">
<span>10:42:12</span>
<span className="text-indigo-400">EMAIL</span>
<span>Invites sent to 12</span>
</div>
<div className="flex gap-2 text-white/40 animate-pulse">
<span>10:43:00</span>
<span className="text-white">WAITING</span>
<span>Processing replies...</span>
</div>
</div>
</div>
</div>

<div className="absolute -bottom-16 flex gap-4 z-20">
<button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all" id="prevBtn">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all" id="nextBtn">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</main>

<section className="w-full py-12 border-t border-white/5 bg-black/50 backdrop-blur-sm relative overflow-hidden mask-linear-fade">
<div className="flex w-full animate-marquee hover:[animation-play-state:paused] gap-16 items-center">

<div className="flex items-center gap-2 opacity-40 grayscale hover:grayscale-0 transition-all duration-300">
<iconify-icon className="text-2xl text-white" icon="simple-icons:stripe"></iconify-icon>
<span className="text-lg font-bold font-brand tracking-tight">Stripe</span>
</div>
<div className="flex items-center gap-2 opacity-40 grayscale hover:grayscale-0 transition-all duration-300">
<iconify-icon className="text-2xl text-white" icon="simple-icons:vercel"></iconify-icon>
<span className="text-lg font-bold font-brand tracking-tight">Vercel</span>
</div>
<div className="flex items-center gap-2 opacity-40 grayscale hover:grayscale-0 transition-all duration-300">
<iconify-icon className="text-2xl text-white" icon="simple-icons:linear"></iconify-icon>
<span className="text-lg font-bold font-brand tracking-tight">Linear</span>
</div>
<div className="flex items-center gap-2 opacity-40 grayscale hover:grayscale-0 transition-all duration-300">
<iconify-icon className="text-2xl text-white" icon="simple-icons:notion"></iconify-icon>
<span className="text-lg font-bold font-brand tracking-tight">Notion</span>
</div>
<div className="flex items-center gap-2 opacity-40 grayscale hover:grayscale-0 transition-all duration-300">
<iconify-icon className="text-2xl text-white" icon="simple-icons:openai"></iconify-icon>
<span className="text-lg font-bold font-brand tracking-tight">OpenAI</span>
</div>
<div className="flex items-center gap-2 opacity-40 grayscale hover:grayscale-0 transition-all duration-300">
<iconify-icon className="text-2xl text-white" icon="simple-icons:stripe"></iconify-icon>
<span className="text-lg font-bold font-brand tracking-tight">Stripe</span>
</div>
<div className="flex items-center gap-2 opacity-40 grayscale hover:grayscale-0 transition-all duration-300">
<iconify-icon className="text-2xl text-white" icon="simple-icons:vercel"></iconify-icon>
<span className="text-lg font-bold font-brand tracking-tight">Vercel</span>
</div>
<div className="flex items-center gap-2 opacity-40 grayscale hover:grayscale-0 transition-all duration-300">
<iconify-icon className="text-2xl text-white" icon="simple-icons:linear"></iconify-icon>
<span className="text-lg font-bold font-brand tracking-tight">Linear</span>
</div>
<div className="flex items-center gap-2 opacity-40 grayscale hover:grayscale-0 transition-all duration-300">
<iconify-icon className="text-2xl text-white" icon="simple-icons:notion"></iconify-icon>
<span className="text-lg font-bold font-brand tracking-tight">Notion</span>
</div>
<div className="flex items-center gap-2 opacity-40 grayscale hover:grayscale-0 transition-all duration-300">
<iconify-icon className="text-2xl text-white" icon="simple-icons:openai"></iconify-icon>
<span className="text-lg font-bold font-brand tracking-tight">OpenAI</span>
</div>
</div>
</section>



    </>
  );
}
