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
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
display: ['Space Grotesk', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
background: '#0a0a0a',
surface: '#121212',
accent: '#8b5cf6', // Default purple accent
},
animation: {
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'float': 'float 6s ease-in-out infinite',
'flash': 'flash 0.2s ease-out forwards',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
},
flash: {
'0%': { opacity: '1' },
'100%': { opacity: '0' },
}
}
}
}
}



        // Init Icons
        lucide.createIcons();

        // DOM Elements
        const heroScreen = document.getElementById('hero-screen');
        const animLayer = document.getElementById('animation-layer');
        const revealScreen = document.getElementById('reveal-screen');
        const reportScreen = document.getElementById('report-screen');
        const flashOverlay = document.getElementById('flash-overlay');
        const revealTitle = document.getElementById('reveal-title');
        const revealBadge = document.getElementById('reveal-badge');
        const revealStats = document.getElementById('reveal-stats');
        const revealActions = document.getElementById('reveal-actions');
        const chatWidget = document.getElementById('chat-widget-btn');
        const typewriterText = document.getElementById('typewriter-text');

        // Animation Config
        const LOGOS = ['Notion', 'Stripe', 'Figma', 'Linear', 'Vercel', 'Arc', 'Raycast'];
        const TARGET_TEXT = "Dynamic audio landscapes for the hyper-focused.";

        function startGeneration() {
            // 1. Hide Hero
            heroScreen.style.opacity = '0';
            setTimeout(() => {
                heroScreen.style.display = 'none';
                animLayer.classList.remove('hidden');
                runParticleSequence();
            }, 700);
        }

        function runParticleSequence() {
            const w = window.innerWidth;
            const h = window.innerHeight;
            const particleCount = 60; // Clean count
            const particles = [];

            // Create center flash text element
            const flashText = document.createElement('div');
            flashText.className = 'fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl font-display font-bold text-white z-50 opacity-0 transition-opacity duration-100';
            animLayer.appendChild(flashText);

            // Create particles
            for(let i = 0; i < particleCount; i++) {
                const p = document.createElement('div');
                p.classList.add('particle');
                
                // Random size small
                const size = Math.random() * 3 + 2;
                p.style.width = `${size}px`;
                p.style.height = `${size}px`;
                p.style.opacity = Math.random() * 0.5 + 0.3;
                
                // Start center
                p.style.left = '50%';
                p.style.top = '50%';
                
                animLayer.appendChild(p);
                particles.push(p);
            }

            // Sequence Timeline
            
            // A. EXPLODE OUT (0ms)
            requestAnimationFrame(() => {
                particles.forEach(p => {
                    const x = (Math.random() - 0.5) * w * 0.8;
                    const y = (Math.random() - 0.5) * h * 0.8;
                    p.style.transform = `translate(${x}px, ${y}px)`;
                });
            });

            // B. GRID ORGANIZE (1000ms)
            setTimeout(() => {
                const cols = 10;
                const gap = 40;
                const startX = -(cols * gap) / 2;
                const startY = -((particleCount / cols) * gap) / 2;

                particles.forEach((p, i) => {
                    const col = i % cols;
                    const row = Math.floor(i / cols);
                    const tx = startX + (col * gap);
                    const ty = startY + (row * gap);
                    p.style.transform = `translate(${tx}px, ${ty}px)`;
                    p.style.backgroundColor = i % 5 === 0 ? '#a855f7' : 'white'; // Purple accents
                });

                // Flash Logos rapidly
                let flashCount = 0;
                const flashInterval = setInterval(() => {
                    flashText.innerText = LOGOS[Math.floor(Math.random() * LOGOS.length)];
                    flashText.style.opacity = '0.8';
                    setTimeout(() => flashText.style.opacity = '0', 100);
                    
                    flashCount++;
                    if(flashCount > 8) clearInterval(flashInterval);
                }, 200);

            }, 1200);

            // C. COLLAPSE (3000ms)
            setTimeout(() => {
                particles.forEach(p => {
                    p.style.transition = 'all 0.6s cubic-bezier(0.6, -0.28, 0.735, 0.045)';
                    p.style.transform = `translate(0px, 0px) scale(0.5)`;
                    p.style.opacity = '1';
                });
            }, 3000);

            // D. BURST & REVEAL (3800ms)
            setTimeout(() => {
                // White Flash
                flashOverlay.classList.add('animate-flash');
                
                // Cleanup animation layer
                animLayer.innerHTML = '';
                animLayer.classList.add('hidden');

                // Show Reveal Screen
                revealScreen.classList.remove('hidden');
                
                // Slight delay for smooth fade in after white flash
                setTimeout(() => {
                    revealScreen.style.opacity = '1';
                    revealTitle.style.opacity = '1';
                    revealTitle.style.transform = 'scale(1)';
                    revealBadge.style.opacity = '1';
                    revealBadge.style.transform = 'translateY(0)';
                    
                    // Start Typewriter
                    typeWrite();
                    
                    // Show stats/actions
                    revealStats.style.opacity = '1';
                    revealActions.style.opacity = '1';
                    revealActions.style.transform = 'translateY(0)';
                }, 200);

            }, 3800);
        }

        function typeWrite() {
            let i = 0;
            const speed = 40; 
            typewriterText.innerHTML = "";
            
            function type() {
                if (i < TARGET_TEXT.length) {
                    typewriterText.innerHTML += TARGET_TEXT.charAt(i);
                    i++;
                    setTimeout(type, speed);
                }
            }
            type();
        }

        function showReport() {
            // Fade out Reveal
            revealScreen.style.opacity = '0';
            setTimeout(() => {
                revealScreen.classList.add('hidden');
                reportScreen.classList.remove('hidden');
                chatWidget.style.opacity = '1';
                chatWidget.style.transform = 'translateY(0)';
            }, 500);
        }

        function resetExperience() {
            window.location.reload(); // Simplest way to reset state completely
        }

    
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
      

<div className="fixed inset-0 bg-white z-[100] pointer-events-none opacity-0" id="flash-overlay"></div>

<section className="fixed inset-0 flex flex-col items-center justify-center z-40 transition-opacity duration-700" id="hero-screen">

<div className="absolute inset-0 flex items-center justify-center -z-10" id="orb-container">
<div className="w-[600px] h-[600px] orb-glow animate-pulse-slow rounded-full"></div>

<div className="absolute w-32 h-32 rounded-full border border-white/5 bg-white/[0.02] backdrop-blur-sm animate-float flex items-center justify-center shadow-[0_0_50px_-10px_rgba(255,255,255,0.1)]">
<div className="w-24 h-24 rounded-full border border-white/10 flex items-center justify-center">
<i className="text-white/80 w-10 h-10 stroke-[1px]" data-lucide="brain-circuit"></i>
</div>
</div>
</div>
<div className="text-center relative z-10 flex flex-col items-center">
<h1 className="text-[12vw] md:text-[8rem] leading-[0.85] font-display font-medium tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 select-none">
                IDEA GUY
            </h1>
<p className="mt-8 text-sm font-mono text-zinc-500 uppercase tracking-widest">
                22,730 startups analyzed. One idea for you.
            </p>
<button className="mt-16 group relative px-8 py-3 rounded-full bg-white text-black font-medium text-sm tracking-wide overflow-hidden transition-all hover:scale-105 active:scale-95" id="btn-generate" onclick="startGeneration()">
<div className="absolute inset-0 bg-gradient-to-r from-purple-200 via-white to-blue-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<span className="relative z-10 flex items-center gap-2">
                    Generate
                    <i className="w-3 h-3" data-lucide="sparkles"></i>
</span>
</button>
</div>
</section>

<div className="fixed inset-0 z-50 pointer-events-none hidden" id="animation-layer">

</div>

<section className="fixed inset-0 flex flex-col items-center justify-center z-30 hidden opacity-0 transition-opacity duration-1000" id="reveal-screen">

<div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-black to-black -z-10"></div>
<div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
<div className="w-full max-w-4xl px-6 text-center relative">

<div className="mb-8 opacity-0 translate-y-4 transition-all duration-700 delay-300 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-[10px] font-mono uppercase tracking-widest" id="reveal-badge">
<i className="w-3 h-3" data-lucide="activity"></i>
                Health &amp; Fitness
            </div>

<h2 className="text-6xl md:text-9xl font-display font-medium tracking-tighter text-white mb-6 opacity-0 scale-95 transition-all duration-700 ease-out" id="reveal-title">
                SHIMMER
            </h2>

<p className="text-xl md:text-2xl text-zinc-400 font-light h-8 flex items-center justify-center gap-1">
<span id="typewriter-text"></span><span className="cursor-blink w-0.5 h-6 bg-purple-500 inline-block"></span>
</p>

<div className="mt-12 opacity-0 transition-opacity duration-700 delay-1000" id="reveal-stats">
<p className="text-xs text-zinc-600 font-mono">63 similar products analyzed • 92% uniqueness score</p>
</div>

<div className="mt-12 flex items-center justify-center gap-4 opacity-0 translate-y-4 transition-all duration-700 delay-[1200ms]" id="reveal-actions">
<button className="px-8 py-3 rounded-full bg-white text-black font-medium text-sm hover:bg-zinc-200 transition-colors" onclick="showReport()">
                    Tell me more
                </button>
<button className="px-8 py-3 rounded-full border border-white/10 text-zinc-400 font-medium text-sm hover:text-white hover:border-white/30 transition-colors" onclick="resetExperience()">
                    Try again
                </button>
</div>
</div>
</section>

<section className="fixed inset-0 z-20 hidden overflow-y-auto bg-black pb-24" id="report-screen">

<nav className="fixed top-0 w-full z-50 flex justify-between items-center px-6 py-6 bg-black/80 backdrop-blur-md border-b border-white/5">
<div className="text-lg font-display font-medium tracking-tight">SHIMMER</div>
<div className="flex gap-4">
<button className="p-2 hover:bg-white/10 rounded-full transition-colors text-zinc-400 hover:text-white">
<i className="w-4 h-4" data-lucide="share"></i>
</button>
<button className="p-2 hover:bg-white/10 rounded-full transition-colors text-zinc-400 hover:text-white" onclick="resetExperience()">
<i className="w-4 h-4" data-lucide="x"></i>
</button>
</div>
</nav>
<div className="pt-32 px-6 max-w-7xl mx-auto">

<div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-12">
<div className="md:col-span-8">
<h1 className="text-5xl md:text-7xl font-display font-medium tracking-tighter mb-6">
                        Personalized meditation for the 
                        <span className="text-purple-400">hyper-focused</span>.
                    </h1>
<p className="text-xl text-zinc-400 font-light max-w-2xl leading-relaxed">
                        Most meditation apps ask you to slow down. Shimmer asks you to tune in. Using biofeedback to sync meditation rhythms with high-beta brainwaves.
                    </p>
</div>
<div className="md:col-span-4 flex flex-col justify-end items-start md:items-end">
<div className="text-right">
<div className="text-4xl font-mono font-light text-white mb-1">$4.2B</div>
<div className="text-xs text-zinc-500 uppercase tracking-widest">TAM Opportunity</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">

<div className="glass-panel p-8 rounded-3xl col-span-1 md:col-span-2 group cursor-pointer transition-all hover:border-white/20">
<div className="flex justify-between items-start mb-12">
<div className="p-3 bg-white/5 rounded-full text-white">
<i className="w-5 h-5" data-lucide="alert-circle"></i>
</div>
<span className="text-xs font-mono text-zinc-500">01. THE PROBLEM</span>
</div>
<h3 className="text-3xl font-display font-medium mb-4 group-hover:text-purple-300 transition-colors">The "Quiet" Paradox</h3>
<p className="text-zinc-400 leading-relaxed">
                        High-performers struggle with traditional meditation because silence feels like stagnation. They don't need less stimulus; they need coherent stimulus.
                    </p>
</div>

<div className="glass-panel p-8 rounded-3xl col-span-1 relative overflow-hidden group">
<div className="flex justify-between items-start mb-8 relative z-10">
<div className="p-3 bg-white/5 rounded-full text-white">
<i className="w-5 h-5" data-lucide="bar-chart-2"></i>
</div>
<span className="text-xs font-mono text-zinc-500">MARKET</span>
</div>

<div className="flex flex-col gap-4 mt-8 relative z-10">
<div className="flex items-center gap-4 opacity-50">
<div className="w-8 h-8 bg-zinc-800 rounded flex items-center justify-center text-[10px]">Calm</div>
<div className="h-2 w-24 bg-zinc-800 rounded-full"></div>
</div>
<div className="flex items-center gap-4 opacity-50">
<div className="w-8 h-8 bg-zinc-800 rounded flex items-center justify-center text-[10px]">Head</div>
<div className="h-2 w-32 bg-zinc-800 rounded-full"></div>
</div>
<div className="flex items-center gap-4 scale-110 origin-left">
<div className="w-8 h-8 bg-purple-600 rounded flex items-center justify-center text-[10px] font-bold shadow-[0_0_15px_rgba(168,85,247,0.5)]">YOU</div>
<div className="h-2 w-48 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full"></div>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>
</div>

<div className="glass-panel p-8 rounded-3xl col-span-1 md:col-span-1 group hover:bg-purple-900/10 transition-colors">
<div className="flex justify-between items-start mb-12">
<div className="p-3 bg-white/5 rounded-full text-white">
<i className="w-5 h-5" data-lucide="zap"></i>
</div>
<span className="text-xs font-mono text-zinc-500">SOLUTION</span>
</div>
<h3 className="text-2xl font-display font-medium mb-2">Active State</h3>
<p className="text-sm text-zinc-400">Audio landscapes generated in real-time based on HRV data.</p>
</div>

<div className="glass-panel p-8 rounded-3xl col-span-1 md:col-span-2 flex flex-col md:flex-row gap-8 items-center">
<div className="flex-1">
<span className="text-xs font-mono text-zinc-500 mb-2 block">REVENUE MODEL</span>
<h3 className="text-3xl font-display font-medium mb-4">B2B Corporate Wellness</h3>
<p className="text-zinc-400 text-sm">Targeting high-stress tech environments rather than individual consumers. Lower churn, higher ACV.</p>
</div>
<div className="w-full md:w-1/3 h-24 flex gap-1 items-end justify-between px-4 pb-4 border-b border-white/10">
<div className="w-full bg-zinc-800 h-[30%] hover:h-[40%] transition-all duration-500 rounded-t-sm"></div>
<div className="w-full bg-zinc-700 h-[45%] hover:h-[55%] transition-all duration-500 rounded-t-sm"></div>
<div className="w-full bg-zinc-600 h-[60%] hover:h-[75%] transition-all duration-500 rounded-t-sm"></div>
<div className="w-full bg-purple-500 h-[85%] hover:h-[100%] transition-all duration-500 rounded-t-sm shadow-[0_0_20px_rgba(168,85,247,0.4)]"></div>
</div>
</div>
</div>
</div>
</section>

<div className="fixed bottom-8 right-8 z-50 opacity-0 translate-y-10 transition-all duration-500" id="chat-widget-btn">
<button className="w-14 h-14 rounded-full bg-white text-black shadow-[0_0_30px_rgba(255,255,255,0.2)] flex items-center justify-center hover:scale-110 transition-transform">
<i className="w-6 h-6 fill-current" data-lucide="message-square"></i>
</button>
</div>



    </>
  );
}
