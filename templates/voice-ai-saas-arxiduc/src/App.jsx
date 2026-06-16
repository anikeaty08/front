import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
accent: '#3B82F6', /* Changed to a Tech Blue for Voice/Comms vibe, keeps contrast high */
surface: '#0F0F0F',
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
'blink': 'blink 2s ease-in-out infinite',
'wave': 'wave 1.2s ease-in-out infinite',
'pulse-fast': 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
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
'0%, 100%': { opacity: 1 },
'50%': { opacity: 0.3 },
},
wave: {
'0%, 100%': { height: '10%' },
'50%': { height: '100%' }
}
}
}
}
}



                !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
            


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
            const clampedSkew = Math.max(Math.min(currentSkew, 5), -5);
            
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
                        output += `<span class="opacity-50">${char}</span>`;
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

        // Latency Counter
        const counter = document.querySelector('.counter');
        if(counter) {
            gsap.from(counter, {
                textContent: 0,
                duration: 2,
                ease: "power1.out",
                snap: { textContent: 1 },
                scrollTrigger: {
                    trigger: counter,
                    start: "top 85%",
                    once: true
                },
                onUpdate: function() {
                    this.targets()[0].innerHTML = Math.ceil(this.targets()[0].textContent);
                }
            });
        }

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
                delay: i * 0.05,
                ease: "power3.out"
            });
        });

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 bg-[#050505] -z-50"></div>

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}>
<div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="NMlvqnkICwYYJ6lYb064"></div>

</div>
</div>

<div className="noise-overlay"></div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
<div className="flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<a className="group hover-trigger" href="#">
<span className="font-display font-bold text-xl tracking-tighter text-white group-hover:text-accent transition-colors">VOX<span className="text-accent group-hover:text-white transition-colors">//</span>AGENTS</span>
</a>
<div className="hidden md:flex gap-8 text-xs font-mono tracking-widest text-gray-400">
<a className="hover:text-white transition-colors hover-trigger" href="#features">[01] CAPABILITIES</a>
<a className="hover:text-white transition-colors hover-trigger" href="#developers">[02] SDK</a>
<a className="hover:text-white transition-colors hover-trigger" href="#pipeline">[03] LATENCY</a>
</div>
<div className="flex items-center gap-4">
<span className="hidden lg:block text-[10px] font-mono text-green-500 flex items-center gap-2">
<span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                    VOICE ENGINE ACTIVE
                </span>
<button className="border border-white/20 px-6 py-2 text-xs font-bold uppercase tracking-wider text-white hover:bg-white hover:text-black transition-all hover-trigger btn-magnetic">
                    Try Demo
                </button>
</div>
</div>
</nav>
<main className="">

<section className="skew-target flex flex-col overflow-hidden w-full h-screen relative items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505] z-10 pointer-events-none"></div>
<div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-[#050505] z-10 pointer-events-none"></div>
<div className="relative z-20 text-center max-w-5xl px-6">
<div className="inline-flex items-center gap-3 border border-white/10 bg-white/5 px-4 py-1.5 rounded-full mb-8 backdrop-blur-sm">
<span className="flex items-center gap-2 text-[10px] text-accent uppercase tracking-widest font-mono">
<svg fill="none" height="12" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="12"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" x2="12" y1="19" y2="23"></line><line x1="8" x2="16" y1="23" y2="23"></line></svg>
                        New: Multi-Speaker Support
                    </span>
</div>
<h1 className="md:text-9xl leading-[0.9] scramble-text text-6xl font-bold text-white tracking-tighter font-display mix-blend-screen mb-6">
                    NATIVE <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-blue-500">VOICE AI</span>
</h1>
<p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10 font-light">
                    Deploy human-parity voice agents on your website. <br/>
                    Sub-200ms latency. Emotional intelligence. Infinite scale.
                </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
<button className="bg-accent text-white px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all hover-trigger w-full sm:w-auto btn-magnetic flex items-center gap-2 justify-center">
<svg fill="none" height="16" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="16"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" x2="12" y1="19" y2="23"></line><line x1="8" x2="16" y1="23" y2="23"></line></svg>
                        Speak to Agent
                    </button>
<button className="px-8 py-4 border border-white/20 text-white font-bold text-sm uppercase tracking-widest hover:bg-white/10 transition-all hover-trigger w-full sm:w-auto btn-magnetic">
                        View Documentation
                    </button>
</div>
</div>
</section>

<div className="border-y border-white/5 bg-[#080808] py-8 relative z-20 overflow-hidden marquee-mask w-full">
<div className="flex whitespace-nowrap animate-marquee w-[max-content]">
<div className="flex gap-20 px-10 items-center">
<span className="font-display font-bold text-2xl text-white/30 hover:text-white transition-colors">OPENAI WHISPER</span>
<span className="font-display font-bold text-2xl text-white/30 hover:text-white transition-colors">ELEVENLABS</span>
<span className="font-display font-bold text-2xl text-white/30 hover:text-white transition-colors">TURBO 3.5</span>
<span className="font-display font-bold text-2xl text-white/30 hover:text-white transition-colors">DEEPGRAM</span>
<span className="font-display font-bold text-2xl text-white/30 hover:text-white transition-colors">WEBRTC</span>
<span className="font-display font-bold text-2xl text-white/30 hover:text-white transition-colors">PLAY.HT</span>
</div>
<div className="flex gap-20 px-10 items-center">
<span className="font-display font-bold text-2xl text-white/30 hover:text-white transition-colors">OPENAI WHISPER</span>
<span className="font-display font-bold text-2xl text-white/30 hover:text-white transition-colors">ELEVENLABS</span>
<span className="font-display font-bold text-2xl text-white/30 hover:text-white transition-colors">TURBO 3.5</span>
<span className="font-display font-bold text-2xl text-white/30 hover:text-white transition-colors">DEEPGRAM</span>
<span className="font-display font-bold text-2xl text-white/30 hover:text-white transition-colors">WEBRTC</span>
<span className="font-display font-bold text-2xl text-white/30 hover:text-white transition-colors">PLAY.HT</span>
</div>
</div>
</div>

<section className="skew-target py-32 px-6 relative z-20" id="features">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-8">
<div>
<span className="text-accent font-mono text-xs tracking-widest block mb-2">/// CORE CAPABILITIES</span>
<h2 className="font-display font-bold text-white text-4xl md:text-5xl scramble-text">Neural Speech Engine</h2>
</div>
<div className="text-right">
<div className="flex items-center justify-end gap-2 mb-1">
<span className="w-2 h-2 bg-green-500 rounded-full animate-blink"></span>
<span className="font-mono text-xs text-white">SOCKETS: OPEN</span>
</div>
<p className="text-gray-500 font-mono text-xs uppercase tracking-widest">
                            Simultaneous Calls: 2,492
                        </p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 grid-rows-3 gap-6 h-auto md:h-[900px]">

<div className="md:col-span-2 md:row-span-2 glass-panel spotlight-card rounded-xl overflow-hidden relative group">
<div className="scan-line"></div>
<img alt="Sound wave" className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-screen group-hover:scale-105 transition-transform duration-700 filter grayscale" src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 flex items-center justify-center gap-1 opacity-60">
<div className="audio-bar h-10" style={{animationDelay: '0.1s'}}></div>
<div className="audio-bar h-16" style={{animationDelay: '0.2s'}}></div>
<div className="audio-bar h-8" style={{animationDelay: '0.3s'}}></div>
<div className="audio-bar h-20" style={{animationDelay: '0.4s'}}></div>
<div className="audio-bar h-12" style={{animationDelay: '0.5s'}}></div>
<div className="audio-bar h-24" style={{animationDelay: '0.1s'}}></div>
<div className="audio-bar h-10" style={{animationDelay: '0.3s'}}></div>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
<div className="absolute top-6 right-6 border border-white/20 bg-black/50 px-3 py-1 rounded text-[10px] font-mono text-accent">STATUS: SPEAKING</div>
<div className="absolute bottom-0 left-0 p-8 z-10 w-full">
<div className="w-10 h-10 bg-accent flex items-center justify-center mb-4 text-white font-bold rounded-lg">
<svg fill="none" height="24" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="24"><path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path></svg>
</div>
<h3 className="font-display font-bold text-2xl text-white mb-2">Real-time Synthesis</h3>
<p className="text-gray-300 text-sm max-w-sm">Generating human-like speech with variable emotion and pacing at 48kHz.</p>
</div>
</div>

<div className="md:col-span-1 md:row-span-1 glass-panel spotlight-card rounded-xl p-6 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-mono text-[10px] text-gray-500 uppercase">Latency (E2E)</span>
<div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></div>
</div>
<div className="text-center py-2">
<div className="text-4xl font-display font-bold text-white counter" data-target="300">240<span className="text-lg text-gray-500 ml-1">ms</span></div>
<div className="text-[10px] text-gray-500 mt-1">Glass-to-Glass</div>
</div>
</div>

<div className="md:col-span-1 md:row-span-1 glass-panel spotlight-card rounded-xl p-6 flex flex-col justify-between overflow-hidden">
<div className="flex items-center gap-2 text-white mb-2">
<svg fill="none" height="14" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="14"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
<span className="font-display font-bold text-sm">Transcript</span>
</div>
<div className="relative h-20 overflow-hidden font-mono text-[9px] text-gray-400 leading-relaxed">
<div className="flex flex-col gap-1.5 opacity-80">
<span className="text-accent">User:</span> "Book a demo for Tuesday."
                                <span className="text-white">Agent:</span> "I have a slot at 2 PM EST."
                                <span className="text-accent">User:</span> "That works perfectly."
                                <span className="text-white">Agent:</span> "Confirmed. Sending invite."
                            </div>
<div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-black to-transparent"></div>
</div>
</div>

<div className="md:col-span-1 md:row-span-1 glass-panel spotlight-card rounded-xl p-6 flex flex-col justify-between">
<div className="flex justify-between items-center mb-2">
<span className="font-mono text-[10px] text-gray-500 uppercase">Concurrency</span>
<svg className="text-white" fill="none" height="14" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="14"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
</div>
<div className="flex-grow flex items-center justify-center">

<div className="flex items-end gap-1 h-12 w-full justify-between">
<div className="w-1.5 bg-accent/20 h-[30%] rounded-t-sm"></div>
<div className="w-1.5 bg-accent/40 h-[50%] rounded-t-sm"></div>
<div className="w-1.5 bg-accent/60 h-[40%] rounded-t-sm"></div>
<div className="w-1.5 bg-accent/30 h-[70%] rounded-t-sm"></div>
<div className="w-1.5 bg-accent/80 h-[60%] rounded-t-sm"></div>
<div className="w-1.5 bg-accent h-[90%] rounded-t-sm"></div>
<div className="w-1.5 bg-accent h-[50%] rounded-t-sm"></div>
</div>
</div>
<div className="text-right text-[10px] text-white font-mono mt-2">SCALING: AUTO</div>
</div>

<div className="md:col-span-1 md:row-span-1 glass-panel spotlight-card rounded-xl p-6 relative overflow-hidden group">
<div className="absolute inset-0 bg-blue-900/10 z-0"></div>
<div className="relative z-10 flex flex-col h-full justify-between">
<div className="flex justify-between items-start">
<span className="font-display font-bold text-sm text-white">Sentiment</span>
<div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse-fast"></div>
</div>
<div className="font-mono text-[10px] text-blue-300/70">
<div>&gt; TONE: POSITIVE</div>
<div>&gt; INTENT: PURCHASE</div>
<div>&gt; CONFIDENCE: 98.4%</div>
</div>
</div>
</div>

<div className="md:col-span-2 md:row-span-1 glass-panel spotlight-card rounded-xl p-8 flex items-center justify-between hover-trigger">
<div>
<h3 className="font-display font-bold text-xl text-white mb-2">Long-term Memory</h3>
<p className="text-gray-300 text-xs font-mono">Vector Database Integration (RAG)</p>
</div>
<div className="flex flex-col gap-1.5 w-40">
<div className="flex justify-between text-[8px] text-gray-500 font-mono mb-1">
<span>RETENTION</span>
<span>99.9%</span>
</div>
<div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-accent to-purple-500 w-[99%] rounded-full"></div>
</div>
</div>
</div>

<div className="md:col-span-2 md:row-span-1 glass-panel spotlight-card rounded-xl p-6 relative overflow-hidden flex flex-col justify-center">
<div className="absolute inset-0 dot-grid opacity-30"></div>
<div className="flex justify-between items-center mb-2 z-10 absolute top-6 left-6 right-6">
<span className="font-display font-bold text-white text-lg">Input Sources</span>
<span className="text-accent text-xs font-mono border border-accent/30 px-2 py-0.5 rounded">WEBRTC</span>
</div>
<div className="relative w-full h-full z-0 mt-8 opacity-60 flex justify-center items-center gap-8">
<div className="flex flex-col items-center gap-2">
<div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center border border-white/20"><svg fill="none" height="14" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="14"><rect height="14" rx="2" ry="2" width="20" x="2" y="3"></rect><line x1="8" x2="16" y1="21" y2="21"></line><line x1="12" x2="12" y1="17" y2="21"></line></svg></div>
<span className="text-[8px] font-mono">WEB</span>
</div>
<div className="h-[1px] w-12 bg-gradient-to-r from-transparent via-accent to-transparent"></div>
<div className="flex flex-col items-center gap-2">
<div className="w-8 h-8 rounded bg-accent/20 flex items-center justify-center border border-accent text-accent"><svg fill="none" height="14" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="14"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" x2="12" y1="19" y2="22"></line></svg></div>
<span className="text-[8px] font-mono text-accent">AGENT</span>
</div>
<div className="h-[1px] w-12 bg-gradient-to-r from-transparent via-accent to-transparent"></div>
<div className="flex flex-col items-center gap-2">
<div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center border border-white/20"><svg fill="none" height="14" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="14"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><line x1="12" x2="12.01" y1="18" y2="18"></line></svg></div>
<span className="text-[8px] font-mono">MOBILE</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="skew-target py-24 bg-[#050505] border-t border-white/5 relative z-20" id="developers">
<div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<span className="text-accent font-mono text-xs tracking-widest block mb-4">/// DEVELOPER EXPERIENCE</span>
<h2 className="font-display font-bold text-4xl md:text-5xl mb-6 text-white scramble-text">Coding Conversations</h2>
<p className="text-gray-400 text-lg mb-8 leading-relaxed">
                        Don't wrestle with WebSockets or audio buffers. Our SDK abstracts the complexity of STT, LLM, and TTS into a simple event-driven interface.
                    </p>
<div className="space-y-6">
<div className="group flex gap-4 p-4 border border-transparent hover:border-white/10 rounded-lg transition-all cursor-pointer hover-trigger">
<div className="font-mono text-gray-600 text-sm group-hover:text-accent">01</div>
<div>
<h4 className="font-bold text-white">Define Persona</h4>
<p className="text-sm text-gray-500">Set tone, voice ID, and base instructions.</p>
</div>
</div>
<div className="group flex gap-4 p-4 border border-transparent hover:border-white/10 rounded-lg transition-all cursor-pointer hover-trigger">
<div className="font-mono text-gray-600 text-sm group-hover:text-accent">02</div>
<div>
<h4 className="font-bold text-white">Connect Stream</h4>
<p className="text-sm text-gray-500">Handle interrupts and turn-taking automatically.</p>
</div>
</div>
</div>
</div>
<div className="relative group hover-trigger">
<div className="absolute -inset-1 bg-gradient-to-r from-accent to-blue-600 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
<div className="relative bg-[#0a0a0a] border border-white/10 rounded-lg p-6 font-mono text-sm shadow-2xl overflow-hidden min-h-[300px]">
<div className="flex gap-2 mb-6 border-b border-white/5 pb-4">
<div className="w-3 h-3 rounded-full bg-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/50"></div>
</div>
<div className="text-gray-400">
<span className="text-purple-400">import</span> vox_core <span className="text-purple-400">as</span> vc
                            
                            <span className="text-gray-600"># Initialize Agent</span>
                            agent = vc.Agent(
                                  voice_id=<span className="text-green-400">"sarah_professional"</span>,
                                  llm=<span className="text-green-400">"gpt-4o-realtime"</span>
                            )

                            <span className="text-gray-600"># Handle incoming audio stream</span>
<span className="text-blue-400">@agent.on_listen</span>
<span className="text-purple-400">def</span> <span className="text-yellow-400">handle_speech</span>(audio_chunk):
                                  <span className="text-gray-600"># Interrupts managed automatically</span>
                                  response = agent.think(audio_chunk)
                                  return response.speak_stream()
                        </div>
<div className="mt-2 text-accent animate-pulse">_</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#050505] relative z-20 border-t border-white/5" id="pipeline">
<div className="max-w-[1400px] mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20 relative">

<div className="order-2 lg:order-1 relative">
<div className="sticky top-24 w-full aspect-square max-h-[60vh] bg-[#080808] border border-white/10 rounded-2xl overflow-hidden flex items-center justify-center p-10 group shadow-2xl">

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px]"></div>

<div className="relative w-40 h-40 border border-accent rounded-full flex items-center justify-center z-10 shadow-[0_0_50px_rgba(59,130,246,0.3)] bg-black/50 backdrop-blur-sm">
<div className="absolute inset-0 flex items-center justify-center gap-1">
<div className="w-1 bg-accent/80 h-10 animate-wave" style={{animationDelay: '0s'}}></div>
<div className="w-1 bg-accent/80 h-16 animate-wave" style={{animationDelay: '0.1s'}}></div>
<div className="w-1 bg-accent/80 h-8 animate-wave" style={{animationDelay: '0.2s'}}></div>
<div className="w-1 bg-accent/80 h-12 animate-wave" style={{animationDelay: '0.3s'}}></div>
</div>
<div className="absolute -bottom-8 text-accent font-mono text-[10px] tracking-widest">LIVE AUDIO</div>
</div>

<div className="absolute w-[70%] h-[70%] border border-white/5 rounded-full animate-spin-slow">
<div className="w-4 h-4 bg-white rounded-full absolute -top-2 left-1/2 -translate-x-1/2 shadow-[0_0_15px_white]"></div>
</div>
<div className="absolute w-[90%] h-[90%] border border-white/5 rounded-full animate-reverse-spin">
<div className="w-3 h-3 bg-accent rounded-full absolute -top-1.5 left-1/2 -translate-x-1/2"></div>
</div>
</div>
</div>

<div className="order-1 lg:order-2 py-20 pb-0">
<span className="text-accent font-mono text-xs tracking-widest block mb-10">/// THE PIPELINE</span>
<div className="step-item mb-48 opacity-30 transition-opacity duration-500">
<h3 className="text-4xl font-display font-bold mb-4 text-white">01. Listen (STT)</h3>
<p className="text-xl text-white leading-relaxed font-light">
                                High-fidelity audio ingestion. Our VAD (Voice Activity Detection) isolates human speech from background noise instantly.
                            </p>
</div>
<div className="step-item mb-48 opacity-30 transition-opacity duration-500">
<h3 className="text-4xl font-display font-bold mb-4 text-white">02. Think (LLM)</h3>
<p className="text-xl text-white leading-relaxed font-light">
                                The transcript is fed to optimized language models. RAG injects your company's knowledge base for accurate answers.
                            </p>
</div>
<div className="step-item opacity-30 transition-opacity duration-500">
<h3 className="text-4xl font-display font-bold mb-4 text-white">03. Speak (TTS)</h3>
<p className="text-xl text-white leading-relaxed font-light">
                                Tokens are streamed to the Text-to-Speech engine. Audio begins playing before the sentence is even finished generating.
                            </p>
</div>
<div className="h-40"></div>
</div>
</div>
</div>
</section>

<section className="skew-target py-32 px-6 bg-[#050505] relative z-20 border-t border-white/5" id="pricing">
<div className="max-w-7xl mx-auto">
<h2 className="font-display font-bold text-4xl text-white text-center mb-16 scramble-text">Voice Tiers</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="border border-white/10 p-8 rounded-2xl hover:bg-white/5 transition-colors hover-trigger spotlight-card glass-panel">
<div className="font-mono text-xs text-gray-500 mb-4 z-10 relative">/ PILOT</div>
<div className="text-3xl font-bold text-white mb-6 z-10 relative">$0<span className="text-sm font-normal text-gray-500">/mo</span></div>
<ul className="space-y-4 text-sm text-gray-300 mb-8 font-mono z-10 relative">
<li className="flex gap-3"><span>✓</span> 100 Minutes</li>
<li className="flex gap-3"><span>✓</span> 2 Standard Voices</li>
</ul>
<button className="w-full py-3 border border-white/20 rounded font-bold uppercase text-xs tracking-wider text-white hover:bg-white hover:text-black transition-all z-10 relative">Start Free</button>
</div>
<div className="border border-accent bg-[#0a0a0a] p-8 rounded-2xl relative hover-trigger transform md:-translate-y-4 shadow-[0_0_30px_rgba(59,130,246,0.1)] spotlight-card">
<div className="absolute top-0 right-0 bg-accent text-white text-[10px] font-bold px-3 py-1 uppercase rounded-bl-lg z-10">Scale</div>
<div className="font-mono text-xs text-accent mb-4 z-10 relative">/ BUSINESS</div>
<div className="text-3xl font-bold text-white mb-6 z-10 relative">$0.12<span className="text-sm font-normal text-gray-500">/min</span></div>
<ul className="space-y-4 text-sm text-gray-300 mb-8 font-mono z-10 relative">
<li className="flex gap-3"><span className="text-accent">✓</span> Unlimited Minutes</li>
<li className="flex gap-3"><span className="text-accent">✓</span> Voice Cloning</li>
</ul>
<button className="w-full py-3 bg-accent text-white rounded font-bold uppercase text-xs tracking-wider hover:bg-white hover:text-black transition-all z-10 relative">Deploy Agent</button>
</div>
<div className="border border-white/10 p-8 rounded-2xl hover:bg-white/5 transition-colors hover-trigger spotlight-card glass-panel">
<div className="font-mono text-xs text-gray-500 mb-4 z-10 relative">/ ENTERPRISE</div>
<div className="text-3xl font-bold text-white mb-6 z-10 relative">Custom</div>
<ul className="space-y-4 text-sm text-gray-300 mb-8 font-mono z-10 relative">
<li className="flex gap-3"><span>✓</span> On-premise Deployment</li>
<li className="flex gap-3"><span>✓</span> Custom LLM Fine-tuning</li>
</ul>
<button className="w-full py-3 border border-white/20 rounded font-bold uppercase text-xs tracking-wider text-white hover:bg-white hover:text-black transition-all z-10 relative">Contact Sales</button>
</div>
</div>
</div>
</section>

<footer className="bg-[#020202] pt-32 pb-10 px-6 border-t border-white/10 relative overflow-hidden">
<div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none select-none pointer-events-none opacity-5">
<span className="text-[20vw] font-display font-black text-white whitespace-nowrap -ml-10">VOX</span>
</div>
<div className="max-w-[1400px] mx-auto relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
<div>
<h3 className="text-2xl font-display font-bold text-white mb-6">Build the future of voice.</h3>
<div className="flex gap-4">
<input className="bg-white/5 border border-white/10 px-4 py-3 rounded text-sm w-64 focus:outline-none focus:border-accent text-white" placeholder="email@company.com" type="email"/>
<button className="bg-accent text-white px-6 py-3 rounded font-bold text-sm hover:bg-white hover:text-black transition-colors">JOIN BETA</button>
</div>
</div>
<div className="flex gap-12 text-sm text-gray-500 font-mono tracking-wider uppercase">
<div className="flex flex-col gap-3">
<span className="text-white">Platform</span>
<a className="hover:text-accent transition-colors" href="#">Voices</a>
<a className="hover:text-accent transition-colors" href="#">Cloning</a>
<a className="hover:text-accent transition-colors" href="#">API</a>
</div>
<div className="flex flex-col gap-3">
<span className="text-white">Company</span>
<a className="hover:text-accent transition-colors" href="#">About</a>
<a className="hover:text-accent transition-colors" href="#">Showcase</a>
</div>
</div>
</div>
<div className="max-w-[1400px] mx-auto mt-20 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-600 font-mono uppercase">
<span>© 2025 VOX LABS INC.</span>
<span className="mt-2 md:mt-0">SAN FRANCISCO / LONDON / TOKYO</span>
</div>
</footer>
</main>


    </>
  );
}
