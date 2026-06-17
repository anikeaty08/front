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
colors: {
accent: '#00FF94', // Neon Terminal Green
accentDim: '#00cc76',
surface: '#050505',
surfaceHighlight: '#0F0F0F',
cherry: '#FF0055' // Subtle nod to the name
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
display: ['Space Grotesk', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
animation: {
'spin-slow': 'spin 15s linear infinite',
'reverse-spin': 'spin 20s linear infinite reverse',
'marquee': 'marquee 30s linear infinite',
'scan': 'scan 4s linear infinite',
'blink': 'blink 1s steps(2) infinite',
'pulse-fast': 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'glitch': 'glitch 1s linear infinite',
},
keyframes: {
marquee: {
'0%': { transform: 'translateX(0)' },
'100%': { transform: 'translateX(-33.333%)' },
},
scan: {
'0%': { top: '-20%' },
'100%': { top: '120%' },
},
blink: {
'0%': { opacity: 0 },
},
glitch: {
'2%, 64%': { transform: 'translate(2px,0) skew(0deg)' },
'4%, 60%': { transform: 'translate(-2px,0) skew(0deg)' },
'62%': { transform: 'translate(0,0) skew(5deg)' },
}
}
}
}
}



        // --- 1. SETUP LENIS & SCROLL SKEW ---
        const lenis = new Lenis({
            lerp: 0.1,
            smooth: true,
            direction: 'vertical',
        });
        
        let currentSkew = 0;
        function raf(time) {
            lenis.raf(time);
            
            // Interaction: Liquid Scroll Skew
            const skewTarget = lenis.velocity * 0.1; 
            currentSkew += (skewTarget - currentSkew) * 0.1;
            const clampedSkew = Math.max(Math.min(currentSkew, 3), -3);
            
            document.querySelectorAll('.skew-target').forEach(el => {
                el.style.transform = `skewY(${clampedSkew}deg)`;
            });

            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        // --- 2. SPOTLIGHT INTERACTION ---
        document.addEventListener('mousemove', (e) => {
            document.querySelectorAll('.spotlight-card').forEach(card => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            });
        });

        // --- 3. TEXT SCRAMBLE INTERACTION ---
        class ScrambleText {
            constructor(el) {
                this.el = el;
                this.chars = '!<>-_\\/[]{}—=+*^?#________';
                this.update = this.update.bind(this);
            }
            setText(newText) {
                const oldText = this.el.innerText;
                const length = Math.max(oldText.length, newText.length);
                const promise = new Promise((resolve) => this.resolve = resolve);
                this.queue = [];
                for (let i = 0; i < length; i++) {
                    const from = oldText[i] || '';
                    const to = newText[i] || '';
                    const start = Math.floor(Math.random() * 40);
                    const end = start + Math.floor(Math.random() * 40);
                    this.queue.push({ from, to, start, end });
                }
                cancelAnimationFrame(this.frameRequest);
                this.frame = 0;
                this.update();
                return promise;
            }
            update() {
                let output = '';
                let complete = 0;
                for (let i = 0, n = this.queue.length; i < n; i++) {
                    let { from, to, start, end, char } = this.queue[i];
                    if (this.frame >= end) {
                        complete++;
                        output += to;
                    } else if (this.frame >= start) {
                        if (!char || Math.random() < 0.28) {
                            char = this.randomChar();
                            this.queue[i].char = char;
                        }
                        output += `<span class="opacity-50 text-accent">${char}</span>`;
                    } else {
                        output += from;
                    }
                }
                this.el.innerHTML = output;
                if (complete === this.queue.length) {
                    this.resolve();
                } else {
                    this.frameRequest = requestAnimationFrame(this.update);
                    this.frame++;
                }
            }
            randomChar() {
                return this.chars[Math.floor(Math.random() * this.chars.length)];
            }
        }

        const scrambleElements = document.querySelectorAll('.scramble-text');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    const fx = new ScrambleText(el);
                    fx.setText(el.innerText);
                    observer.unobserve(el);
                }
            });
        }, { threshold: 0.5 });
        
        scrambleElements.forEach(el => observer.observe(el));

        // --- 4. MAGNETIC BUTTONS ---
        const buttons = document.querySelectorAll('.btn-magnetic');
        buttons.forEach(btn => {
            btn.addEventListener('mousemove', (e) => {
                const rect = btn.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                gsap.to(btn, { x: x * 0.3, y: y * 0.3, duration: 0.2 });
            });
            btn.addEventListener('mouseleave', () => {
                gsap.to(btn, { x: 0, y: 0, duration: 0.2 });
            });
        });

        // --- 5. ANIMATIONS ---
        gsap.registerPlugin(ScrollTrigger);

        const stepItems = document.querySelectorAll('.step-item');
        stepItems.forEach((item) => {
            gsap.to(item, {
                scrollTrigger: {
                    trigger: item,
                    start: "top 80%", 
                    end: "bottom center",
                    onEnter: () => gsap.to(item, { opacity: 1, duration: 0.5 }),
                    onLeave: () => gsap.to(item, { opacity: 0.3, duration: 0.5 }),
                    onEnterBack: () => gsap.to(item, { opacity: 1, duration: 0.5 }),
                    onLeaveBack: () => gsap.to(item, { opacity: 0.3, duration: 0.5 }),
                }
            });
        });

        gsap.utils.toArray('.glass-panel').forEach((panel, i) => {
            gsap.from(panel, {
                scrollTrigger: {
                    trigger: panel,
                    start: "top 90%"
                },
                y: 30,
                opacity: 0,
                duration: 0.8,
                delay: i * 0.1,
                ease: "power3.out"
            });
        });

        // --- 6. MOBILE MENU ---
        const menuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileLinks = document.querySelectorAll('.mobile-link');
        let isMenuOpen = false;

        menuBtn.addEventListener('click', () => {
            isMenuOpen = !isMenuOpen;
            if (isMenuOpen) {
                mobileMenu.classList.remove('menu-closed');
                mobileMenu.classList.add('menu-open');
                menuBtn.innerHTML = '<iconify-icon icon="solar:close-square-linear" width="24"></iconify-icon>';
                document.body.style.overflow = 'hidden';
            } else {
                mobileMenu.classList.remove('menu-open');
                mobileMenu.classList.add('menu-closed');
                menuBtn.innerHTML = '<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>';
                document.body.style.overflow = '';
            }
        });

        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                isMenuOpen = false;
                mobileMenu.classList.remove('menu-open');
                mobileMenu.classList.add('menu-closed');
                menuBtn.innerHTML = '<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>';
                document.body.style.overflow = '';
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
      

<div className="fixed inset-0 bg-[#020202] -z-50"></div>

<div className="fixed top-0 w-full h-screen -z-10 opacity-40">

<div className="absolute top-[-20%] left-[20%] w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] mix-blend-screen animate-pulse"></div>
<div className="absolute bottom-[-20%] right-[10%] w-[500px] h-[500px] bg-emerald-900/20 rounded-full blur-[100px] mix-blend-screen"></div>
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
</div>

<div className="noise-overlay"></div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
<div className="flex h-16 max-w-7xl mr-auto ml-auto px-6 items-center justify-between">

<a className="group hover-trigger z-50 flex items-center gap-2" href="#">
<span className="text-xl font-bold text-white tracking-tight font-display">CHERRY<span className="text-accent group-hover:text-white transition-colors blink">_</span>IDE</span>
</a>

<div className="hidden md:flex gap-8 text-xs font-mono tracking-widest text-gray-500">
<a className="hover:text-accent transition-colors hover-trigger" href="#features">FEATURES</a>
<a className="hover:text-accent transition-colors hover-trigger" href="#how-it-works">HOW_IT_WORKS</a>
<a className="hover:text-accent transition-colors hover-trigger" href="#comparison">VS_CLOSED</a>
<a className="hover:text-accent transition-colors hover-trigger" href="#community">VIBEBROS</a>
</div>

<div className="hidden md:flex gap-4 items-center">
<a className="text-gray-400 hover:text-white transition-colors" href="https://github.com/vibebros/cherry-ide" target="_blank">
<iconify-icon icon="solar:brands-github-bold" width="20"></iconify-icon>
</a>
<button className="uppercase hover:bg-accent hover:text-black transition-all hover-trigger btn-magnetic text-[10px] font-bold text-accent tracking-widest border border-accent/30 pt-2 pr-4 pb-2 pl-4 rounded-sm bg-accent/5">
                    Download Beta
                </button>
</div>

<button className="md:hidden z-50 text-white p-2 focus:outline-none" id="mobile-menu-btn">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<div className="fixed inset-0 z-40 bg-[#050505]/95 backdrop-blur-xl menu-closed flex flex-col items-center justify-center" id="mobile-menu">
<div className="flex flex-col gap-8 text-center">
<a className="text-2xl font-display font-bold text-white hover:text-accent transition-colors mobile-link" href="#features">FEATURES</a>
<a className="text-2xl font-display font-bold text-white hover:text-accent transition-colors mobile-link" href="#how-it-works">PIPELINE</a>
<a className="text-2xl font-display font-bold text-white hover:text-accent transition-colors mobile-link" href="#community">COMMUNITY</a>
<div className="w-12 h-[1px] bg-white/10 mx-auto my-4"></div>
<button className="text-xl font-mono text-accent hover:text-white transition-colors">
                &gt; GIT CLONE
            </button>
</div>
</div>
<main>

<section className="skew-target relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden pt-20">

<div className="absolute inset-0 dot-grid opacity-20 pointer-events-none -z-10 mask-image-gradient"></div>
<div className="relative z-20 text-center max-w-5xl px-6 py-12">
<div className="inline-flex items-center gap-3 border border-accent/20 bg-accent/5 px-4 py-1.5 rounded-full mb-8 backdrop-blur-sm animate-fade-in-up">
<span className="font-mono text-[10px] text-accent tracking-widest uppercase flex items-center gap-2">
<span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse"></span>
                        Built by the Vibebros community 🍒
                    </span>
</div>
<h1 className="font-display font-bold text-5xl sm:text-7xl md:text-8xl tracking-tighter mb-6 leading-[0.9] text-white">
                    Code with AI.<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-emerald-400 to-teal-500 scramble-text">On your terms.</span>
</h1>
<p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10 font-mono font-light">
                    An AI-powered code editor built for developers who want full control.
                    <span className="text-gray-300">Open-source models</span>, <span className="text-gray-300">custom APIs</span>, and <span className="text-gray-300">zero lock-in</span>.
                </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto">
<button className="bg-accent text-black px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-white transition-all hover-trigger w-full sm:w-auto btn-magnetic rounded-sm shadow-[0_0_20px_rgba(0,255,148,0.3)]">
                        Get Early Access
                    </button>
<button className="px-8 py-4 border border-white/20 text-white font-bold text-sm uppercase tracking-widest hover:bg-white/10 transition-all hover-trigger w-full sm:w-auto btn-magnetic rounded-sm flex items-center justify-center gap-2">
<iconify-icon icon="solar:brands-github-linear" width="18"></iconify-icon>
                        View on GitHub
                    </button>
</div>
<div className="mt-16 text-[10px] font-mono text-gray-600 uppercase tracking-widest">
                    Compatible with MacOS, Linux &amp; Windows
                </div>
</div>
</section>

<div className="border-y border-white/5 bg-[#080808] py-6 relative z-20 overflow-hidden marquee-mask w-full">
<div className="flex whitespace-nowrap animate-marquee w-[max-content]">
<div className="flex gap-12 md:gap-24 px-6 md:px-12 items-center font-mono text-sm opacity-50">
<span className="flex items-center gap-2 text-accent"><iconify-icon icon="solar:bolt-linear"></iconify-icon> LLAMA 3</span>
<span className="flex items-center gap-2 hover:text-white transition-colors">MISTRAL</span>
<span className="flex items-center gap-2 hover:text-white transition-colors">OLLAMA</span>
<span className="flex items-center gap-2 hover:text-white transition-colors">GPT-4o</span>
<span className="flex items-center gap-2 hover:text-white transition-colors">CLAUDE 3.5</span>
<span className="flex items-center gap-2 hover:text-white transition-colors">DEEPSEEK</span>
<span className="flex items-center gap-2 hover:text-white transition-colors">HUGGINGFACE</span>
</div>

<div className="flex gap-12 md:gap-24 px-6 md:px-12 items-center font-mono text-sm opacity-50">
<span className="flex items-center gap-2 text-accent"><iconify-icon icon="solar:bolt-linear"></iconify-icon> LLAMA 3</span>
<span className="flex items-center gap-2 hover:text-white transition-colors">MISTRAL</span>
<span className="flex items-center gap-2 hover:text-white transition-colors">OLLAMA</span>
<span className="flex items-center gap-2 hover:text-white transition-colors">GPT-4o</span>
<span className="flex items-center gap-2 hover:text-white transition-colors">CLAUDE 3.5</span>
<span className="flex items-center gap-2 hover:text-white transition-colors">DEEPSEEK</span>
<span className="flex items-center gap-2 hover:text-white transition-colors">HUGGINGFACE</span>
</div>
</div>
</div>

<section className="skew-target py-24 md:py-32 px-6 relative z-20" id="features">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 border-b border-white/10 pb-8 gap-6 md:gap-0">
<div>
<span className="text-accent font-mono text-xs tracking-widest block mb-2">/// SYSTEM ARCHITECTURE</span>
<h2 className="font-display font-bold text-white text-4xl md:text-5xl">Engineered for Freedom</h2>
</div>
<div className="text-left md:text-right w-full md:w-auto">
<div className="flex items-center md:justify-end gap-2 mb-1">
<span className="w-2 h-2 bg-accent rounded-full animate-blink"></span>
<span className="font-mono text-xs text-white">STATUS: ONLINE</span>
</div>
<p className="text-gray-500 font-mono text-xs uppercase tracking-widest">
                            v0.9.2-beta // Experimental
                        </p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 grid-rows-auto md:grid-rows-3 gap-6 h-auto md:h-[900px]">

<div className="md:col-span-2 md:row-span-2 min-h-[300px] glass-panel spotlight-card rounded-xl overflow-hidden relative group border-t-2 border-t-accent/50">
<div className="absolute inset-0 bg-[#0a0a0a] z-0"></div>
<div className="absolute top-0 right-0 p-6 z-20">
<iconify-icon className="text-accent w-8 h-8 text-3xl" icon="solar:plug-circle-linear"></iconify-icon>
</div>
<div className="relative z-10 p-8 h-full flex flex-col justify-between">
<div className="mt-8 relative font-mono text-xs md:text-sm bg-black/50 p-4 rounded border border-white/10 text-gray-300 shadow-2xl">
<div className="flex gap-2 mb-3 border-b border-white/10 pb-2">
<div className="w-2 h-2 rounded-full bg-red-500"></div>
<div className="w-2 h-2 rounded-full bg-yellow-500"></div>
<div className="w-2 h-2 rounded-full bg-green-500"></div>
<span className="ml-auto text-[10px] text-gray-600">config.json</span>
</div>
<div className="space-y-1">
<span className="text-purple-400">"models"</span>: {<br/>
                                      <span className="text-blue-400">"default"</span>: <span className="text-accent">"ollama:llama3"</span>,<br/>
                                      <span className="text-blue-400">"fallback"</span>: <span className="text-orange-400">"openai:gpt-4"</span>,<br/>
                                      <span className="text-blue-400">"embedding"</span>: <span className="text-green-400">"local:nomic-embed"</span><br/>
                                    }
                                </div>
</div>
<div>
<h3 className="font-display font-bold text-2xl text-white mb-2">Plug &amp; Play Models</h3>
<p className="text-gray-400 text-sm max-w-sm">Connect directly to LocalAI, Ollama, or proprietary APIs. Switch models per-file or per-function.</p>
</div>
</div>
</div>

<div className="md:col-span-1 md:row-span-1 glass-panel spotlight-card rounded-xl p-6 flex flex-col justify-between h-40 md:h-auto">
<div className="flex justify-between items-start">
<span className="font-mono text-[10px] text-gray-500 uppercase">Telemetry</span>
<iconify-icon className="text-white text-xl" icon="solar:shield-check-linear"></iconify-icon>
</div>
<div className="text-center py-2 relative">
<div className="text-4xl font-display font-bold text-white">0<span className="text-base text-accent">%</span></div>
<div className="text-[10px] text-gray-500 mt-1">Data Retention</div>
<div className="absolute inset-0 border border-red-500/0 hover:border-red-500/20 transition-colors rounded"></div>
</div>
</div>

<div className="md:col-span-1 md:row-span-1 glass-panel spotlight-card rounded-xl p-6 flex flex-col justify-between overflow-hidden h-40 md:h-auto">
<div className="flex items-center gap-2 text-white mb-2">
<iconify-icon className="text-accent" icon="solar:rocket-2-linear"></iconify-icon>
<span className="font-display font-bold text-sm">Latency</span>
</div>
<div className="relative h-12 flex items-end gap-1">
<div className="w-1/4 h-[80%] bg-gray-800 rounded-sm"></div>
<div className="w-1/4 h-[60%] bg-gray-700 rounded-sm"></div>
<div className="w-1/4 h-[90%] bg-gray-600 rounded-sm"></div>
<div className="w-1/4 h-[20%] bg-accent rounded-sm relative group">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[9px] text-accent opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">12ms</div>
</div>
</div>
<div className="text-[10px] text-gray-400 mt-2">
                           Rust-based backend
                        </div>
</div>

<div className="md:col-span-2 md:row-span-1 glass-panel spotlight-card rounded-xl p-8 flex flex-col sm:flex-row items-center justify-between hover-trigger h-auto bg-gradient-to-br from-white/5 to-transparent">
<div className="mb-4 sm:mb-0 text-left w-full">
<h3 className="font-display font-bold text-xl text-white mb-2 flex items-center gap-2">
<iconify-icon className="text-accent" icon="solar:code-square-linear"></iconify-icon>
                                Fully Open Source
                            </h3>
<p className="text-gray-400 text-xs font-mono max-w-md">
                                No black boxes. Fork it, mod it, break it. We built this because we were tired of waiting for features behind paywalls.
                            </p>
</div>
<div className="flex items-center gap-4">
<div className="px-3 py-1 border border-white/10 rounded text-[10px] font-mono text-gray-400">MIT License</div>
<div className="px-3 py-1 border border-white/10 rounded text-[10px] font-mono text-gray-400">Rust / Tauri</div>
</div>
</div>

<div className="md:col-span-2 md:row-span-1 glass-panel spotlight-card rounded-xl p-6 relative overflow-hidden flex flex-col justify-center items-center text-center">
<div className="absolute inset-0 dot-grid opacity-30"></div>
<div className="relative z-10">
<div className="w-16 h-16 mx-auto bg-accent/10 rounded-full flex items-center justify-center mb-4 border border-accent/20">
<span className="text-2xl">🍒</span>
</div>
<h3 className="font-display font-bold text-white text-lg">Vibebros Certified</h3>
<p className="text-gray-500 text-xs font-mono mt-2">Experimental. Community Driven. No VC.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#050505] relative z-20 border-t border-white/5" id="how-it-works">
<div className="max-w-[1400px] mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 relative">

<div className="order-2 lg:order-1 relative">
<div className="sticky top-24 w-full aspect-square max-h-[50vh] lg:max-h-[60vh] bg-[#020202] border border-white/10 rounded-2xl overflow-hidden flex items-center justify-center p-10 group shadow-[0_0_50px_rgba(0,0,0,0.5)]">

<div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,148,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,148,0.03)_1px,transparent_1px)] bg-[size:30px_30px]"></div>

<div className="relative w-32 h-32 md:w-40 md:h-40 border border-white/20 rounded-xl flex items-center justify-center z-10 bg-[#0a0a0a] shadow-2xl">
<iconify-icon className="text-white text-4xl" icon="solar:laptop-minimalistic-linear"></iconify-icon>
<div className="absolute -bottom-6 text-xs font-mono text-gray-500">CHERRY_IDE</div>
</div>

<svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
<line stroke="#333" stroke-dasharray="5,5" strokeWidth="1" x1="50%" x2="20%" y1="50%" y2="20%"></line>
<line stroke="#333" stroke-dasharray="5,5" strokeWidth="1" x1="50%" x2="80%" y1="50%" y2="20%"></line>
<line className="animate-pulse" stroke="#00FF94" strokeWidth="2" x1="50%" x2="50%" y1="50%" y2="80%"></line>
</svg>

<div className="absolute top-[15%] left-[15%] w-16 h-16 bg-blue-900/20 border border-blue-500/30 rounded-lg flex items-center justify-center backdrop-blur-sm">
<span className="text-[10px] text-blue-400 font-mono">OpenAI</span>
</div>
<div className="absolute top-[15%] right-[15%] w-16 h-16 bg-orange-900/20 border border-orange-500/30 rounded-lg flex items-center justify-center backdrop-blur-sm">
<span className="text-[10px] text-orange-400 font-mono">Anthropic</span>
</div>
<div className="absolute bottom-[15%] left-[50%] -translate-x-1/2 w-24 h-12 bg-accent/10 border border-accent/50 rounded-lg flex items-center justify-center backdrop-blur-sm shadow-[0_0_20px_rgba(0,255,148,0.1)]">
<span className="text-[10px] text-accent font-mono flex items-center gap-1">
<div className="w-1.5 h-1.5 bg-accent rounded-full animate-blink"></div>
                                    LOCALHOST
                                </span>
</div>
</div>
</div>

<div className="order-1 lg:order-2 lg:py-20 pb-0">
<span className="text-accent font-mono text-xs tracking-widest block mb-10">/// WORKFLOW</span>
<div className="step-item mb-24 md:mb-40 opacity-30 transition-opacity duration-500">
<div className="text-accent font-mono text-sm mb-2">01. INIT</div>
<h3 className="text-3xl md:text-4xl font-display font-bold mb-4 text-white">Connect Your Intelligence</h3>
<p className="text-lg text-gray-400 leading-relaxed font-light">
                                Spin up Ollama locally or paste your OpenAI API key. Cherry treats all models as equal citizens. No middleware.
                            </p>
</div>
<div className="step-item mb-24 md:mb-40 opacity-30 transition-opacity duration-500">
<div className="text-accent font-mono text-sm mb-2">02. CONTEXT</div>
<h3 className="text-3xl md:text-4xl font-display font-bold mb-4 text-white">Local RAG Indexing</h3>
<p className="text-lg text-gray-400 leading-relaxed font-light">
                                We index your codebase using local embeddings. Your code never leaves your machine unless you explicitly send it to a cloud model.
                            </p>
</div>
<div className="step-item opacity-30 transition-opacity duration-500">
<div className="text-accent font-mono text-sm mb-2">03. EXECUTE</div>
<h3 className="text-3xl md:text-4xl font-display font-bold mb-4 text-white">Generate &amp; Refactor</h3>
<p className="text-lg text-gray-400 leading-relaxed font-light">
                                Hit <kbd className="bg-white/10 px-2 py-1 rounded text-xs font-mono text-white">Cmd+K</kbd>. Watch the diffs appear in real-time. Accept, reject, or iterate with follow-up prompts.
                            </p>
</div>
<div className="h-20 lg:h-40"></div>
</div>
</div>
</div>
</section>

<section className="skew-target py-32 px-6 bg-[#020202] relative z-20 border-t border-white/5" id="comparison">
<div className="max-w-5xl mx-auto">
<h2 className="font-display font-bold text-4xl text-white text-center mb-4">Break the Lock-in</h2>
<p className="text-center text-gray-500 font-mono text-sm mb-16">Why rent your tools when you can own them?</p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8 items-center">

<div className="p-8 rounded-2xl border border-white/5 bg-white/5 opacity-60 hover:opacity-100 transition-opacity">
<h3 className="text-xl font-bold text-gray-400 mb-6 flex items-center gap-2">
<iconify-icon icon="solar:lock-keyhole-linear"></iconify-icon> Proprietary Editors
                        </h3>
<ul className="space-y-4 font-mono text-sm text-gray-500">
<li className="flex items-center gap-3">
<iconify-icon className="text-red-500 text-lg" icon="solar:close-circle-linear"></iconify-icon>
<span>Monthly Subscription ($20/mo+)</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-red-500 text-lg" icon="solar:close-circle-linear"></iconify-icon>
<span>Telemetry by default</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-red-500 text-lg" icon="solar:close-circle-linear"></iconify-icon>
<span>Fixed model choices</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-red-500 text-lg" icon="solar:close-circle-linear"></iconify-icon>
<span>Code sent to their cloud</span>
</li>
</ul>
</div>

<div className="p-8 rounded-2xl border border-accent/30 bg-[#0a0a0a] shadow-[0_0_40px_rgba(0,255,148,0.05)] relative overflow-hidden transform md:scale-105">
<div className="absolute top-0 right-0 bg-accent text-black text-[10px] font-bold px-3 py-1 uppercase rounded-bl-lg">FOSS</div>
<h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                             🍒 Cherry IDE
                        </h3>
<ul className="space-y-4 font-mono text-sm text-gray-300">
<li className="flex items-center gap-3">
<iconify-icon className="text-accent text-lg" icon="solar:check-circle-bold"></iconify-icon>
<span>Free &amp; Open Source</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-accent text-lg" icon="solar:check-circle-bold"></iconify-icon>
<span>Offline / Local First</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-accent text-lg" icon="solar:check-circle-bold"></iconify-icon>
<span>Any Model (Local or API)</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-accent text-lg" icon="solar:check-circle-bold"></iconify-icon>
<span>You own your data</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<footer className="bg-[#050505] pt-32 pb-10 px-6 border-t border-white/10 relative overflow-hidden" id="community">
<div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none select-none pointer-events-none opacity-5">
<span className="text-[20vw] font-display font-black text-white whitespace-nowrap -ml-10">VIBEBROS</span>
</div>
<div className="max-w-[1400px] mx-auto relative z-10 text-center mb-20">
<h3 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">Build the future of coding.</h3>
<p className="text-gray-400 max-w-xl mx-auto mb-10">
                    We are open, experimental, and developer-driven. Join the discord, open a PR, or just fork it and make it purple.
                </p>
<div className="flex justify-center gap-4">
<a className="bg-white text-black px-6 py-3 rounded font-bold text-sm hover:bg-gray-200 transition-colors flex items-center gap-2" href="#">
<iconify-icon className="text-lg" icon="solar:chat-round-dots-linear"></iconify-icon>
                        Join Discord
                    </a>
<a className="border border-white/20 text-white px-6 py-3 rounded font-bold text-sm hover:bg-white/10 transition-colors flex items-center gap-2" href="#">
<iconify-icon className="text-lg" icon="solar:code-circle-linear"></iconify-icon>
                        Contribute
                    </a>
</div>
</div>
<div className="max-w-[1400px] mx-auto border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-600 font-mono uppercase gap-4 md:gap-0">
<span className="flex items-center gap-2"><span className="text-accent">●</span> SYSTEM NORMAL</span>
<span>© 2025 VIBEBROS. OPEN SOURCE MIT.</span>
</div>
</footer>
</main>


    </>
  );
}
