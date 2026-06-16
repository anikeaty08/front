import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: {
cyber: ['Orbitron', 'sans-serif'],
sans: ['Inter', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
animation: {
'spin-slow': 'spin 12s linear infinite',
'twinkle': 'twinkle 2s infinite ease-in-out',
},
keyframes: {
twinkle: {
'0%, 100%': { opacity: 1, transform: 'scale(1)' },
'50%': { opacity: 0.4, transform: 'scale(0.8)' },
}
}
}
}
}


!function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();


        // Initialize Icons
        lucide.createIcons();

        // --- Theme Toggle Logic ---
        function toggleTheme() {
            const html = document.documentElement;
            if (html.classList.contains('dark')) {
                html.classList.remove('dark');
            } else {
                html.classList.add('dark');
            }
        }

        // --- Snowfall Effect Logic ---
        const canvas = document.getElementById('snow-canvas');
        const ctx = canvas.getContext('2d');
        
        let width = window.innerWidth;
        let height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;

        const snowflakes = [];
        const snowflakeCount = 120; // Increased count for holiday vibe

        class Snowflake {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = Math.random() * 1 - 0.5; // Horizontal drift
                this.vy = Math.random() * 1 + 0.5; // Falling speed
                this.radius = Math.random() * 2;
                this.alpha = Math.random() * 0.5 + 0.3;
            }

            update() {
                this.y += this.vy;
                this.x += this.vx;

                if (this.y > height) this.y = 0;
                if (this.x > width) this.x = 0;
                if (this.x < 0) this.x = width;
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                
                // Check if dark mode is active for snow color
                const isDark = document.documentElement.classList.contains('dark');
                // Use white in dark mode, light grey/blue in light mode
                ctx.fillStyle = isDark 
                    ? `rgba(255, 255, 255, ${this.alpha})` 
                    : `rgba(16, 185, 129, ${this.alpha * 0.8})`; 
                
                ctx.fill();
            }
        }

        for (let i = 0; i < snowflakeCount; i++) {
            snowflakes.push(new Snowflake());
        }

        function animateSnow() {
            ctx.clearRect(0, 0, width, height);
            snowflakes.forEach(flake => {
                flake.update();
                flake.draw();
            });
            requestAnimationFrame(animateSnow);
        }

        window.addEventListener('resize', () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        });

        animateSnow();


        // --- Typewriter Logic (Updated for Services) ---
        const lines = [
            { text: "SYSTEM DATE: DEC 2025", color: "text-zinc-400 dark:text-zinc-500" },
            { text: "INITIALIZING HOLIDAY_PROTOCOL...", color: "text-zinc-800 dark:text-zinc-300 font-bold" },
            { text: "Loading service packages...", color: "text-zinc-500" },
            { text: "Applying Holiday Promo Code...", color: "text-red-600 dark:text-red-400" },
            { text: "Discount: $200 SITE BUILD", color: "text-emerald-600 dark:text-emerald-400 font-bold" },
            { text: "Features: SEO, Hosting, Design", color: "text-zinc-600 dark:text-zinc-400" },
            { text: "Checking availability...", color: "text-yellow-600 dark:text-yellow-400" },
            { text: "Slots available for December", color: "text-zinc-600 dark:text-zinc-300" },
            { text: "READY TO SCALE YOUR BRAND.", color: "text-white bg-red-600 dark:bg-emerald-500/20 px-2 inline-block rounded" }
        ];

        const terminalContent = document.getElementById('terminal-content');
        let lineIndex = 0;
        let charIndex = 0;

        function getTimestamp() {
            const now = new Date();
            const ms = String(now.getMilliseconds()).padStart(3, '0');
            return `${now.toLocaleTimeString('en-GB')}.${ms}`;
        }

        function typeWriter() {
            if (lineIndex < lines.length) {
                const currentLine = lines[lineIndex];
                
                // If starting a new line
                if (charIndex === 0) {
                    const lineContainer = document.createElement('div');
                    lineContainer.className = "flex items-start gap-3";
                    
                    const meta = document.createElement('div');
                    meta.className = "flex gap-2 min-w-[120px]";
                    meta.innerHTML = `<span class="text-zinc-400 dark:text-zinc-600 select-none text-[10px] pt-1">${getTimestamp()}</span> <span class="text-emerald-500 font-bold">>></span>`;
                    
                    const textContainer = document.createElement('div');
                    textContainer.className = "flex-1";

                    const textSpan = document.createElement('span');
                    textSpan.className = `${currentLine.color} font-mono tracking-tight`;
                    textSpan.id = `line-${lineIndex}`;
                    
                    textContainer.appendChild(textSpan);
                    
                    // Add cursor
                    const cursor = document.createElement('span');
                    cursor.className = "inline-block w-2 h-4 bg-emerald-500 ml-1 align-middle animate-pulse";
                    cursor.id = "active-cursor";
                    
                    // Remove old cursor
                    const oldCursor = document.getElementById('active-cursor');
                    if(oldCursor) oldCursor.remove();

                    textContainer.appendChild(cursor);
                    lineContainer.appendChild(meta);
                    lineContainer.appendChild(textContainer);
                    terminalContent.appendChild(lineContainer);
                    
                    // Auto scroll
                    const terminalContainer = terminalContent.parentElement;
                    terminalContainer.scrollTop = terminalContainer.scrollHeight;
                }

                // Type character
                const currentTextSpan = document.getElementById(`line-${lineIndex}`);
                if (charIndex < currentLine.text.length) {
                    currentTextSpan.textContent += currentLine.text.charAt(charIndex);
                    charIndex++;
                    setTimeout(typeWriter, Math.random() * 20 + 20); 
                } else {
                    // Line finished
                    lineIndex++;
                    charIndex = 0;
                    setTimeout(typeWriter, 400); 
                }
            } else {
                 setTimeout(() => {
                    terminalContent.innerHTML = '';
                    lineIndex = 0;
                    typeWriter();
                 }, 6000);
            }
        }

        window.addEventListener('DOMContentLoaded', () => {
            setTimeout(typeWriter, 500);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<canvas height="973" id="snow-canvas" width="1128"></canvas>

<div className="fixed inset-0 z-50 pointer-events-none scanlines"></div>

<div className="hidden dark:block aura-background-component top-0 w-full h-screen -z-10 absolute brightness-150 saturate-150 mix-blend-normal opacity-60 hue-rotate-180" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}>
<div className="absolute top-0 left-0 -z-10 w-full h-full" data-us-project="K7xzrAoejHe2lHXqTJzm"></div>

</div>

<div className="dark:hidden fixed inset-0 z-0 bg-gradient-to-br from-zinc-50 via-red-50/20 to-emerald-50/20 pointer-events-none"></div>

<div className="fixed inset-0 z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay" style={{}}></div>
<div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-red-500/5 dark:bg-emerald-900/20 blur-[120px] rounded-full pointer-events-none z-0"></div>

<nav className="fixed top-0 w-full z-40 border-b border-zinc-200 dark:border-white/5 bg-white/70 dark:bg-black/40 backdrop-blur-xl transition-all duration-300">
<div className="flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">

<div className="flex items-center gap-3 group cursor-pointer">
<div className="w-8 h-8 bg-zinc-900 dark:bg-white border border-zinc-200 dark:border-white/20 rounded flex items-center justify-center group-hover:scale-105 transition-transform">
<svg className="lucide lucide-cpu w-4 h-4 text-white dark:text-black" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
</div>
<span className="text-2xl font-cyber font-bold tracking-tight text-zinc-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">CHAD<span className="text-red-600 dark:text-red-500">.</span></span>
</div>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600 dark:text-zinc-400">
<div className="group relative">
<a className="hover:text-black dark:hover:text-white transition-colors tracking-wide font-cyber" href="#">SERVICES</a>
<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all group-hover:w-full"></span>
</div>
<div className="group relative">
<a className="hover:text-black dark:hover:text-white transition-colors tracking-wide font-cyber" href="#">PORTFOLIO</a>
<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all group-hover:w-full"></span>
</div>

<div className="relative group cursor-not-allowed opacity-60">
<a className="flex items-center gap-2 pointer-events-none" href="#">
<svg className="lucide lucide-candy-cane w-4 h-4 text-red-400" data-lucide="candy-cane" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2Z"></path><path d="M17.75 7 15 2.1"></path><path d="M10.9 4.8 13 9"></path><path d="m7.9 9.7 2 4.4"></path><path d="M4.9 14.7 7 18.9"></path></svg>
<span className="font-cyber text-xs tracking-wider">BOOST CARTEL</span>
</a>
<div className="absolute -top-3 -right-6 px-1.5 py-0.5 bg-zinc-200 dark:bg-zinc-800 rounded text-[9px] font-bold text-zinc-500 font-mono">SOON</div>
</div>
</div>

<div className="flex items-center gap-4">

<button className="p-2 rounded-full border border-zinc-200 dark:border-white/10 bg-white/50 dark:bg-black/50 hover:bg-zinc-100 dark:hover:bg-white/10 text-zinc-600 dark:text-zinc-400 transition-all" onclick="toggleTheme()">
<svg className="lucide lucide-sun w-5 h-5 hidden dark:block" data-lucide="sun" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
<svg className="lucide lucide-moon w-5 h-5 dark:hidden" data-lucide="moon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"></path></svg>
</button>

<button className="hidden md:flex relative group overflow-hidden rounded px-6 py-2.5 bg-zinc-900 dark:bg-white/5 border border-zinc-800 dark:border-white/10 text-white transition-all hover:border-red-500/50">
<div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
<span className="relative font-cyber text-xs font-bold tracking-widest flex items-center gap-2">
                        BOOK NOW
                        <svg className="lucide lucide-calendar-check w-3.5 h-3.5" data-lucide="calendar-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path><path d="m9 16 2 2 4-4"></path></svg>
</span>
</button>
</div>
</div>
</nav>

<main className="relative z-10 pt-32 pb-20 max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 gap-x-16 gap-y-16 items-center">

<div className="lg:col-span-7 flex flex-col items-start text-left">

<div className="animate-reveal inline-flex items-center gap-3 px-4 py-2 rounded border border-red-500/30 bg-red-500/5 backdrop-blur-sm text-red-600 dark:text-red-400 text-xs font-bold font-cyber tracking-widest mb-8 cursor-default shadow-[0_0_20px_rgba(239,68,68,0.15)] relative overflow-hidden group">
<div className="absolute top-0 -left-10 w-8 h-full bg-white/30 skew-x-[20deg] blur-md animate-[shimmer_2s_infinite]"></div>
<svg className="lucide lucide-gift w-3.5 h-3.5" data-lucide="gift" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="4" rx="1" width="18" x="3" y="8"></rect><path d="M12 8v13"></path><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"></path><path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"></path></svg>
<span>HOLIDAY SPECIAL // EXP DEC 31</span>
</div>

<div className="relative mb-12">

<h1 className="font-sans text-6xl md:text-7xl lg:text-[80px] leading-[0.95] font-black tracking-tighter text-zinc-900 dark:text-white uppercase flex flex-wrap gap-x-[0.2em] gap-y-2">
<div className="flex">
<span className="char-animate" style={{animationDelay: '0ms'}}>W</span>
<span className="char-animate" style={{animationDelay: '60ms'}}>e</span>
</div>
<div className="flex">
<span className="char-animate" style={{animationDelay: '120ms'}}>B</span>
<span className="char-animate" style={{animationDelay: '180ms'}}>u</span>
<span className="char-animate" style={{animationDelay: '240ms'}}>i</span>
<span className="char-animate" style={{animationDelay: '300ms'}}>l</span>
<span className="char-animate" style={{animationDelay: '360ms'}}>d</span>
</div>
<div className="flex">
<span className="char-animate" style={{animationDelay: '420ms'}}>Y</span>
<span className="char-animate" style={{animationDelay: '480ms'}}>o</span>
<span className="char-animate" style={{animationDelay: '540ms'}}>u</span>
<span className="char-animate" style={{animationDelay: '600ms'}}>r</span>
</div>

<span className="relative inline-block mt-4 lg:mt-2 animate-reveal delay-800">

<div className="absolute -top-7 -left-2 w-[105%] h-12 pointer-events-none select-none z-20">

<svg className="absolute top-0 left-0 w-full h-full text-zinc-800 dark:text-zinc-600 opacity-60" preserveaspectratio="none" viewbox="0 0 100 25">
<path d="M0,0 Q50,25 100,0" fill="none" stroke="currentColor" strokeWidth="0.5"></path>
</svg>


<div className="absolute top-[35%] left-[10%] w-2 h-2 rounded-full bulb-red z-30">
<div className="absolute -top-1 left-1/2 -translate-x-1/2 w-[2px] h-1.5 bg-zinc-800 dark:bg-zinc-500"></div>
</div>

<div className="absolute top-[65%] left-[30%] w-2 h-2 rounded-full bulb-green z-30">
<div className="absolute -top-1 left-1/2 -translate-x-1/2 w-[2px] h-1.5 bg-zinc-800 dark:bg-zinc-500"></div>
</div>

<div className="absolute top-[75%] left-[50%] w-2 h-2 rounded-full bulb-gold z-30">
<div className="absolute -top-1 left-1/2 -translate-x-1/2 w-[2px] h-1.5 bg-zinc-800 dark:bg-zinc-500"></div>
</div>

<div className="absolute top-[65%] left-[70%] w-2 h-2 rounded-full bulb-blue z-30">
<div className="absolute -top-1 left-1/2 -translate-x-1/2 w-[2px] h-1.5 bg-zinc-800 dark:bg-zinc-500"></div>
</div>

<div className="absolute top-[35%] left-[90%] w-2 h-2 rounded-full bulb-red z-30">
<div className="absolute -top-1 left-1/2 -translate-x-1/2 w-[2px] h-1.5 bg-zinc-800 dark:bg-zinc-500"></div>
</div>
</div>

<span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-emerald-400 to-emerald-600 dark:from-emerald-400 dark:via-emerald-200 dark:to-white drop-shadow-sm dark:drop-shadow-[0_0_30px_rgba(16,185,129,0.2)] font-cyber">
                                VISION.
                            </span>
</span>
</h1>
</div>

<p className="animate-reveal delay-200 text-lg md:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-xl mb-12 border-l-2 border-red-500/30 pl-6">
                    Professional, high-performance websites available to everyone this season. <span className="text-zinc-900 dark:text-white font-semibold">Unwrap your digital presence before 2026.</span>
</p>

<div className="animate-reveal delay-300 w-full grid grid-cols-3 gap-4 mb-12">
<div className="glass-box p-5 rounded-lg text-center lg:text-left group transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/30 bg-white/50 dark:bg-transparent shadow-sm dark:shadow-none">
<div className="font-cyber text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white mb-1 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">50+</div>
<div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Sites Deployed</div>
</div>
<div className="glass-box p-5 rounded-lg text-center lg:text-left group transition-all duration-300 hover:-translate-y-1 border-red-500/20 bg-red-500/5 dark:bg-red-900/10 shadow-sm dark:shadow-none relative overflow-hidden">
<div className="font-cyber text-2xl md:text-3xl font-bold text-red-600 dark:text-red-400 mb-1 flex items-center justify-center lg:justify-start gap-2">
                            $200
                        </div>
<div className="text-[10px] font-mono text-red-600/70 dark:text-red-500/70 uppercase tracking-widest">Holiday Rate</div>
<svg className="lucide lucide-snowflake absolute -bottom-2 -right-2 w-8 h-8 text-red-500/10 rotate-12" data-lucide="snowflake" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m10 20-1.25-2.5L6 18"></path><path d="M10 4 8.75 6.5 6 6"></path><path d="m14 20 1.25-2.5L18 18"></path><path d="m14 4 1.25 2.5L18 6"></path><path d="m17 21-3-6h-4"></path><path d="m17 3-3 6 1.5 3"></path><path d="M2 12h6.5L10 9"></path><path d="m20 10-1.5 2 1.5 2"></path><path d="M22 12h-6.5L14 15"></path><path d="m4 10 1.5 2L4 14"></path><path d="m7 21 3-6-1.5-3"></path><path d="m7 3 3 6h4"></path></svg>
</div>
<div className="glass-box p-5 rounded-lg text-center lg:text-left group transition-all duration-300 hover:-translate-y-1 bg-white/50 dark:bg-transparent shadow-sm dark:shadow-none">
<div className="font-cyber text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white mb-1 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">24/7</div>
<div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Support</div>
</div>
</div>

<div className="animate-reveal delay-400 flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto">

<button className="w-full sm:w-auto group relative inline-flex h-16 items-center justify-center overflow-hidden rounded-md bg-zinc-900 dark:bg-emerald-600 shadow-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-emerald-500/20 active:scale-[0.98]">
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" style={{}}></div>
<div className="absolute top-0 -left-[100%] h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_1.5s_infinite]"></div>
<div className="relative flex items-center gap-3 px-8 font-cyber font-bold text-lg text-white tracking-wide">
                            CLAIM $200 DEAL
                            <svg className="lucide lucide-credit-card w-5 h-5" data-lucide="credit-card" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
</div>
</button>

<button className="w-full sm:w-auto group relative inline-flex h-16 items-center justify-center overflow-hidden rounded-md border-2 border-zinc-200 dark:border-zinc-700 bg-transparent px-8 transition-all hover:border-red-500 dark:hover:border-red-500">
<span className="absolute inset-0 bg-zinc-100 dark:bg-zinc-800 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
<div className="relative font-cyber font-bold text-lg text-zinc-900 dark:text-white tracking-wide group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors flex items-center gap-2">
                            VIEW WORK
                            <svg className="lucide lucide-arrow-up-right w-5 h-5" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</button>
</div>
</div>

<div className="lg:col-span-5 relative mt-16 lg:mt-0 animate-reveal delay-500">

<div className="absolute -top-20 -right-20 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

<div className="relative w-full rounded-xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-[#050505] shadow-2xl dark:shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden ring-1 ring-black/5 dark:ring-white/5 group">

<div className="flex items-center justify-between px-5 py-4 border-b border-zinc-200 dark:border-white/5 bg-zinc-50 dark:bg-white/[0.03]">
<div className="flex items-center gap-4">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-red-400 dark:bg-red-500/80"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-400 dark:bg-yellow-500/80"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-400 dark:bg-green-500/80"></div>
</div>
<div className="h-4 w-[1px] bg-zinc-300 dark:bg-zinc-800"></div>
<span className="text-[10px] font-cyber text-zinc-500 tracking-widest flex items-center gap-2">
<svg className="lucide lucide-lock w-3 h-3" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                                SANTA_MODE_V2.5
                             </span>
</div>
<div className="flex items-center gap-2">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-500"></span>
</span>
</div>
</div>

<div className="p-6 md:p-8 font-mono text-sm leading-7 h-[420px] relative bg-zinc-50 dark:bg-[#050505] transition-colors">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
<div className="relative z-10 flex flex-col gap-1 overflow-y-auto h-full pr-2" id="terminal-content">

<div className="flex items-start gap-3"><div className="flex gap-2 min-w-[120px]"><span className="text-zinc-400 dark:text-zinc-600 select-none text-[10px] pt-1">11:58:49.925</span> <span className="text-emerald-500 font-bold">&gt;&gt;</span></div><div className="flex-1"><span className="text-zinc-400 dark:text-zinc-500 font-mono tracking-tight" id="line-0">S</span><span className="inline-block w-2 h-4 bg-emerald-500 ml-1 align-middle animate-pulse" id="active-cursor"></span></div></div></div>
</div>

<div className="bg-zinc-100 dark:bg-zinc-900/50 border-t border-zinc-200 dark:border-white/5 px-4 py-2 flex justify-between items-center text-[10px] text-zinc-500 font-mono uppercase">
<span>Slots: 3/5 Remaining</span>
<span className="text-emerald-600 dark:text-emerald-500 flex items-center gap-1">
<svg className="lucide lucide-wifi w-3 h-3" data-lucide="wifi" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg>
                            Live
                        </span>
</div>
</div>

<div className="absolute -bottom-6 -left-6 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md border border-zinc-200 dark:border-white/10 p-4 rounded-lg shadow-xl hidden md:block border-l-4 border-l-red-500 animate-[float_6s_ease-in-out_infinite]">
<div className="flex items-center gap-3 mb-2">
<svg className="lucide lucide-gift w-4 h-4 text-red-500" data-lucide="gift" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="4" rx="1" width="18" x="3" y="8"></rect><path d="M12 8v13"></path><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"></path><path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"></path></svg>
<span className="text-xs font-bold text-zinc-900 dark:text-white font-cyber">SEASONAL BONUS</span>
</div>
<div className="text-xs text-zinc-500 dark:text-zinc-400 font-mono">
<div>Discount: Applied</div>
<div>Save: $500+</div>
</div>
</div>
</div>
</div>
</main>

<div className="fixed bottom-8 right-8 z-50">
<button className="group bg-zinc-900 dark:bg-zinc-900 hover:bg-red-600 dark:hover:bg-red-500 border border-white/10 hover:border-red-400 text-white p-4 rounded-full shadow-[0_0_30px_rgba(0,0,0,0.2)] dark:shadow-[0_0_30px_rgba(0,0,0,0.5)] transition-all duration-300 hover:scale-110">
<svg className="lucide lucide-message-square-plus w-6 h-6 stroke-[2px]" data-lucide="message-square-plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path><path d="M12 8v6"></path><path d="M9 11h6"></path></svg>
</button>
</div>



    </>
  );
}
