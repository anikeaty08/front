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
accent: '#94B5A0', /* Muted Sage Green */
surface: '#E6E4DD', /* Pale Beige Text */
darkbg: '#141615', /* Soft Charcoal Background */
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
display: ['Space Grotesk', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
animation: {
'spin-slow': 'spin 15s linear infinite',
'reverse-spin': 'spin 20s linear infinite reverse',
'marquee': 'marquee 40s linear infinite',
'scan': 'scan 6s linear infinite',
'blink': 'blink 3s ease-in-out infinite',
'dash': 'dash 20s linear infinite',
'pulse-fast': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
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
'50%': { opacity: 0.4 },
},
dash: {
to: { 'stroke-dashoffset': '1000' }
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
            // Only apply to specific sections with class 'skew-target'
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
                this.chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
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

        const counter = document.querySelector('.counter');
        if(counter) {
            gsap.from(counter, {
                textContent: 90.0,
                duration: 2,
                ease: "power1.out",
                snap: { textContent: 0.1 },
                scrollTrigger: {
                    trigger: counter,
                    start: "top 85%",
                    once: true
                },
                onUpdate: function() {
                    this.targets()[0].innerHTML = parseFloat(this.targets()[0].textContent).toFixed(1);
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
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<div className="fixed inset-0 bg-[#141615] -z-50"></div>

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="50" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}>
<div className="aura-background-component top-0 w-full -z-10 absolute h-full opacity-40 grayscale">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="NMlvqnkICwYYJ6lYb064"></div>

</div>
</div>

<div className="noise-overlay"></div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#141615]/90 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
<a className="group hover-trigger flex items-center gap-2" href="#">
<svg className="text-accent group-hover:rotate-12 transition-transform" fill="none" height="20" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="20"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" x2="12" y1="19" y2="22"></line></svg>
<span className="font-display font-bold text-xl tracking-tighter text-surface group-hover:text-accent transition-colors">BridgeChat</span>
</a>
<div className="hidden md:flex gap-8 text-xs font-mono tracking-widest text-gray-500">
<a className="hover:text-surface transition-colors hover-trigger" href="#features">FEATURES</a>
<a className="hover:text-surface transition-colors hover-trigger" href="#developers">INTEGRATION</a>
<a className="hover:text-surface transition-colors hover-trigger" href="#pricing">DOWNLOAD</a>
</div>
<div className="flex items-center gap-4">
<span className="hidden lg:block text-[10px] font-mono text-accent flex items-center gap-2">
<span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse"></span>
                    V1.2 STABLE
                </span>
<button className="border border-white/10 px-6 py-2 text-xs font-bold uppercase tracking-wider text-surface hover:bg-surface hover:text-black transition-all hover-trigger btn-magnetic rounded-sm">
                    Get Started
                </button>
</div>
</div>
</nav>
<main>

<section className="skew-target relative h-screen w-full flex flex-col justify-center items-center overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-[#141615] via-transparent to-[#141615] z-10 pointer-events-none"></div>
<div className="absolute inset-0 bg-gradient-to-r from-[#141615] via-transparent to-[#141615] z-10 pointer-events-none"></div>
<div className="relative z-20 text-center max-w-5xl px-6">
<div className="inline-flex items-center gap-3 border border-white/5 bg-white/5 px-4 py-1.5 rounded-full mb-8 backdrop-blur-sm">
<span className="font-mono text-[10px] text-accent tracking-widest uppercase">Privacy-First Transcription</span>
</div>
<h1 className="font-display font-bold text-6xl md:text-8xl tracking-tighter mb-6 leading-[0.95] text-surface mix-blend-screen scramble-text">
                    YOUR VOICE, <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500">TRANSCRIBED.</span>
</h1>
<p className="text-gray-400 text-lg md:text-xl max-w-xl mx-auto leading-relaxed mb-10 font-light">
                    Turn speech into text locally on your machine. <br/>
                    No cloud. No subscriptions. 100% Private.
                </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
<button className="bg-accent text-[#141615] px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-surface transition-all hover-trigger w-full sm:w-auto btn-magnetic rounded-sm">
                        Download BridgeChat
                    </button>
<button className="px-8 py-4 border border-white/10 text-surface font-bold text-sm uppercase tracking-widest hover:bg-white/5 transition-all hover-trigger w-full sm:w-auto btn-magnetic rounded-sm">
                        How it Works
                    </button>
</div>
</div>
</section>

<div className="border-y border-white/5 bg-[#181a19] py-8 relative z-20 overflow-hidden marquee-mask w-full">
<div className="flex whitespace-nowrap animate-marquee w-[max-content]">
<div className="flex gap-20 px-10 items-center">
<span className="font-display font-bold text-xl text-white/20 hover:text-accent transition-colors">OFFLINE_READY</span>
<span className="font-display font-bold text-xl text-white/20 hover:text-accent transition-colors">WHISPER_CORE</span>
<span className="font-display font-bold text-xl text-white/20 hover:text-accent transition-colors">LOCAL_VAULT</span>
<span className="font-display font-bold text-xl text-white/20 hover:text-accent transition-colors">ZERO_LATENCY</span>
<span className="font-display font-bold text-xl text-white/20 hover:text-accent transition-colors">PRIVACY_FIRST</span>
<span className="font-display font-bold text-xl text-white/20 hover:text-accent transition-colors">CROSS_PLATFORM</span>
</div>
<div className="flex gap-20 px-10 items-center">
<span className="font-display font-bold text-xl text-white/20 hover:text-accent transition-colors">OFFLINE_READY</span>
<span className="font-display font-bold text-xl text-white/20 hover:text-accent transition-colors">WHISPER_CORE</span>
<span className="font-display font-bold text-xl text-white/20 hover:text-accent transition-colors">LOCAL_VAULT</span>
<span className="font-display font-bold text-xl text-white/20 hover:text-accent transition-colors">ZERO_LATENCY</span>
<span className="font-display font-bold text-xl text-white/20 hover:text-accent transition-colors">PRIVACY_FIRST</span>
<span className="font-display font-bold text-xl text-white/20 hover:text-accent transition-colors">CROSS_PLATFORM</span>
</div>
<div className="flex gap-20 px-10 items-center">
<span className="font-display font-bold text-xl text-white/20 hover:text-accent transition-colors">OFFLINE_READY</span>
<span className="font-display font-bold text-xl text-white/20 hover:text-accent transition-colors">WHISPER_CORE</span>
<span className="font-display font-bold text-xl text-white/20 hover:text-accent transition-colors">LOCAL_VAULT</span>
<span className="font-display font-bold text-xl text-white/20 hover:text-accent transition-colors">ZERO_LATENCY</span>
<span className="font-display font-bold text-xl text-white/20 hover:text-accent transition-colors">PRIVACY_FIRST</span>
<span className="font-display font-bold text-xl text-white/20 hover:text-accent transition-colors">CROSS_PLATFORM</span>
</div>
</div>
</div>

<section className="skew-target py-32 px-6 relative z-20" id="features">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/5 pb-8">
<div>
<span className="text-accent font-mono text-xs tracking-widest block mb-2">/// CAPABILITIES</span>
<h2 className="font-display font-bold text-surface text-4xl md:text-5xl scramble-text">Deep Focus</h2>
</div>
<div className="text-right">
<div className="flex items-center justify-end gap-2 mb-1">
<span className="w-2 h-2 bg-accent rounded-full animate-blink"></span>
<span className="font-mono text-xs text-surface">STATUS: SECURE</span>
</div>
<p className="text-gray-500 font-mono text-xs uppercase tracking-widest">
                            Local Engine Active
                        </p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 grid-rows-3 gap-6 h-auto md:h-[900px]">

<div className="md:col-span-2 md:row-span-2 glass-panel spotlight-card rounded-xl overflow-hidden relative group">
<div className="scan-line"></div>
<div className="absolute inset-0 bg-gradient-to-br from-[#2a302d] to-[#141615] opacity-80"></div>

<div className="absolute inset-0 flex items-center justify-center opacity-30">
<div className="flex gap-1 items-center h-40">
<div className="w-2 bg-accent h-12 animate-[pulse_1s_ease-in-out_infinite]"></div>
<div className="w-2 bg-accent h-24 animate-[pulse_1.2s_ease-in-out_infinite]"></div>
<div className="w-2 bg-accent h-16 animate-[pulse_0.8s_ease-in-out_infinite]"></div>
<div className="w-2 bg-accent h-32 animate-[pulse_1.5s_ease-in-out_infinite]"></div>
<div className="w-2 bg-accent h-20 animate-[pulse_1.1s_ease-in-out_infinite]"></div>
<div className="w-2 bg-accent h-8 animate-[pulse_0.9s_ease-in-out_infinite]"></div>
</div>
</div>
<div className="absolute top-6 right-6 border border-white/10 bg-black/20 px-3 py-1 rounded text-[10px] font-mono text-accent">MODEL: WHISPER_TURBO</div>
<div className="absolute bottom-0 left-0 p-8 z-10 w-full">
<div className="w-10 h-10 bg-accent flex items-center justify-center mb-4 text-[#141615] font-bold rounded-sm">
<svg fill="none" height="24" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="24"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" x2="12" y1="19" y2="23"></line><line x1="8" x2="16" y1="23" y2="23"></line></svg>
</div>
<h3 className="font-display font-bold text-2xl text-surface mb-2">Local Whisper Core</h3>
<p className="text-gray-400 text-sm max-w-sm">State-of-the-art transcription running 100% on your hardware using optimized Whisper models.</p>
</div>
</div>

<div className="md:col-span-1 md:row-span-1 glass-panel spotlight-card rounded-xl p-6 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-mono text-[10px] text-gray-500 uppercase">Accuracy</span>
<div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></div>
</div>
<div className="text-center py-2">
<div className="text-4xl font-display font-bold text-surface counter" data-target="99.2">99.2</div>
<div className="text-[10px] text-gray-500 mt-1">Word Error Rate (%)</div>
</div>
</div>

<div className="md:col-span-1 md:row-span-1 glass-panel spotlight-card rounded-xl p-6 flex flex-col justify-between overflow-hidden">
<div className="flex items-center gap-2 text-surface mb-2">
<svg fill="none" height="14" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="14"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
<span className="font-display font-bold text-sm">Offline Vault</span>
</div>
<div className="relative h-12 overflow-hidden font-mono text-[9px] text-gray-600 leading-relaxed">
<div className="flex flex-col">
<span>&gt; DISCONNECTING CLOUD...</span>
<span>&gt; BLOCKING OUTBOUND REQ</span>
<span>&gt; LOCAL_STORAGE: ONLY</span>
<span className="text-accent">&gt; SECURE</span>
</div>
</div>
<div className="text-[10px] text-accent mt-2 flex items-center gap-1">
<span className="w-1 h-1 bg-accent rounded-full"></span> AIR-GAPPED READY
                        </div>
</div>

<div className="md:col-span-1 md:row-span-1 glass-panel spotlight-card rounded-xl p-6 flex flex-col justify-between">
<div className="flex justify-between items-center mb-2">
<span className="font-mono text-[10px] text-gray-500 uppercase">Speed</span>
<svg className="text-surface" fill="none" height="14" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="14"><polyline points="13 2 13 9 20 9"></polyline><path d="M13 2v7h7"></path><path d="M13 2 4 22 22 22 13 2z" opacity="0"></path><polygon points="13 2 2 22 22 22"></polygon></svg>
</div>
<div className="flex-grow flex items-center">
<div className="w-full bg-white/5 h-16 rounded flex items-end px-1 gap-1">
<div className="w-1/5 bg-accent/20 h-[40%] rounded-sm"></div>
<div className="w-1/5 bg-accent/40 h-[60%] rounded-sm"></div>
<div className="w-1/5 bg-accent/60 h-[30%] rounded-sm"></div>
<div className="w-1/5 bg-accent/80 h-[80%] rounded-sm"></div>
<div className="w-1/5 bg-accent h-[90%] rounded-sm"></div>
</div>
</div>
<div className="text-right text-[10px] text-surface font-mono mt-2">120x REALTIME</div>
</div>

<div className="md:col-span-1 md:row-span-1 glass-panel spotlight-card rounded-xl p-6 relative overflow-hidden group">
<div className="absolute inset-0 bg-accent/5 z-0"></div>
<div className="relative z-10 flex flex-col h-full justify-between">
<div className="flex justify-between items-start">
<span className="font-display font-bold text-sm text-surface">Privacy Shield</span>
<div className="w-2 h-2 rounded-full bg-accent animate-pulse-fast"></div>
</div>
<div className="font-mono text-[10px] text-accent/70">
<div>&gt; TELEMETRY: 0KB</div>
<div>&gt; TRACKING: BLOCKED</div>
<div>&gt; STATUS: SILENT</div>
</div>
</div>
</div>

<div className="md:col-span-2 md:row-span-1 glass-panel spotlight-card rounded-xl p-8 flex items-center justify-between hover-trigger">
<div>
<h3 className="font-display font-bold text-xl text-surface mb-2">Unlimited Duration</h3>
<p className="text-gray-400 text-xs font-mono">Transcribe hours of meetings without limits.</p>
</div>
<div className="flex flex-col gap-1.5 w-40">
<div className="flex justify-between text-[8px] text-gray-500 font-mono mb-1">
<span>BUFFER</span>
<span>OPTIMIZED</span>
</div>
<div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-accent w-[95%] rounded-full"></div>
</div>
</div>
</div>

<div className="md:col-span-2 md:row-span-1 glass-panel spotlight-card rounded-xl p-6 relative overflow-hidden flex flex-col justify-center">
<div className="absolute inset-0 dot-grid opacity-20"></div>
<div className="flex justify-between items-center mb-2 z-10 absolute top-6 left-6 right-6">
<span className="font-display font-bold text-surface text-lg">50+ Languages</span>
<span className="text-accent text-xs font-mono border border-accent/30 px-2 py-0.5 rounded">AUTO-DETECT</span>
</div>
<div className="relative w-full h-full z-0 mt-8 opacity-40">
<div className="flex flex-wrap gap-2 justify-center items-center h-full text-[10px] font-mono text-gray-500">
<span>EN</span> <span>ES</span> <span>FR</span> <span>DE</span> <span>JP</span> <span>CN</span>
<span>IT</span> <span>PT</span> <span>RU</span> <span>NL</span> <span>PL</span> <span>KR</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="skew-target py-24 bg-[#141615] border-t border-white/5 relative z-20" id="developers">
<div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<span className="text-accent font-mono text-xs tracking-widest block mb-4">/// INTEGRATION</span>
<h2 className="font-display font-bold text-4xl md:text-5xl mb-6 text-surface scramble-text">Works Everywhere</h2>
<p className="text-gray-400 text-lg mb-8 leading-relaxed">
                        Export to any format. Integrate with your favorite note-taking apps. Automate your workflow with our local API.
                    </p>
<div className="space-y-6">
<div className="group flex gap-4 p-4 border border-transparent hover:border-white/5 rounded-lg transition-all cursor-pointer hover-trigger">
<div className="font-mono text-gray-600 text-sm group-hover:text-accent">01</div>
<div>
<h4 className="font-bold text-surface">Drag &amp; Drop</h4>
<p className="text-sm text-gray-500">Support for mp3, wav, m4a, and mp4.</p>
</div>
</div>
<div className="group flex gap-4 p-4 border border-transparent hover:border-white/5 rounded-lg transition-all cursor-pointer hover-trigger">
<div className="font-mono text-gray-600 text-sm group-hover:text-accent">02</div>
<div>
<h4 className="font-bold text-surface">Export JSON/TXT</h4>
<p className="text-sm text-gray-500">Clean, timestamped output formatted for readability.</p>
</div>
</div>
</div>
</div>
<div className="relative group hover-trigger">
<div className="absolute -inset-1 bg-gradient-to-r from-accent to-gray-600 rounded-lg blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>
<div className="relative bg-[#181a19] border border-white/5 rounded-lg p-6 font-mono text-sm shadow-2xl overflow-hidden min-h-[300px]">
<div className="flex gap-2 mb-6 border-b border-white/5 pb-4">
<div className="w-3 h-3 rounded-full bg-[#141615] border border-white/10"></div>
<div className="w-3 h-3 rounded-full bg-[#141615] border border-white/10"></div>
<div className="w-3 h-3 rounded-full bg-[#141615] border border-white/10"></div>
</div>
<div className="text-gray-400">
<span className="text-accent">import</span> bridgechat
                            <br/><br/>
<span className="text-gray-600"># Initialize Local Engine</span>
                            engine = bridgechat.Engine(model=<span className="text-accent">"whisper-large"</span>)
                            <br/><br/>
<span className="text-gray-600"># Transcribe privately</span>
                            result = engine.transcribe(<span className="text-accent">"meeting_recording.mp3"</span>)
                            <br/><br/>
                            print(result.text)
                            <span className="text-gray-600 block mt-2">&gt;&gt; "The project deadline is set for next Friday..."</span>
</div>
<div className="mt-2 text-accent animate-pulse">_</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#141615] relative z-20 border-t border-white/5" id="pipeline">
<div className="max-w-[1400px] mx-auto px-6">

<div className="grid grid-cols-1 lg:grid-cols-2 gap-20 relative">

<div className="order-2 lg:order-1 relative">

<div className="sticky top-24 w-full aspect-square max-h-[60vh] bg-[#181a19] border border-white/5 rounded-2xl overflow-hidden flex items-center justify-center p-10 group shadow-2xl">

<div className="absolute inset-0 bg-[linear-gradient(rgba(230,228,221,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(230,228,221,0.02)_1px,transparent_1px)] bg-[size:24px_24px]"></div>

<div className="relative w-40 h-40 border border-accent/30 rounded-full flex items-center justify-center z-10 shadow-[0_0_50px_rgba(148,181,160,0.1)] bg-[#141615]/80 backdrop-blur-sm">
<div className="w-32 h-32 bg-accent/10 rounded-full animate-pulse"></div>
<svg className="absolute text-accent" fill="none" height="40" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="40"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" x2="12" y1="19" y2="22"></line></svg>
</div>

<div className="absolute w-[70%] h-[70%] border border-white/5 rounded-full animate-spin-slow">
<div className="w-3 h-3 bg-surface rounded-full absolute -top-1.5 left-1/2 -translate-x-1/2 shadow-[0_0_15px_rgba(230,228,221,0.3)]"></div>
</div>
<div className="absolute w-[90%] h-[90%] border border-white/5 rounded-full animate-reverse-spin">
<div className="w-2 h-2 bg-accent rounded-full absolute -top-1 left-1/2 -translate-x-1/2"></div>
</div>
</div>
</div>

<div className="order-1 lg:order-2 py-20 pb-0">
<span className="text-accent font-mono text-xs tracking-widest block mb-10">/// WORKFLOW</span>

<div className="step-item mb-48 opacity-30 transition-opacity duration-500">
<h3 className="text-4xl font-display font-bold mb-4 text-surface">01. Import</h3>
<p className="text-xl text-gray-400 leading-relaxed font-light">
                                Select any audio or video file from your device. Or simply hit record to capture thoughts instantly.
                            </p>
</div>
<div className="step-item mb-48 opacity-30 transition-opacity duration-500">
<h3 className="text-4xl font-display font-bold mb-4 text-surface">02. Transcribe</h3>
<p className="text-xl text-gray-400 leading-relaxed font-light">
                                BridgeChat processes the audio locally. Your data never leaves your computer.
                            </p>
</div>
<div className="step-item opacity-30 transition-opacity duration-500">
<h3 className="text-4xl font-display font-bold mb-4 text-surface">03. Export</h3>
<p className="text-xl text-gray-400 leading-relaxed font-light">
                                Get a perfectly formatted text file, Markdown, or JSON ready for your next step.
                            </p>
</div>

<div className="h-40"></div>
</div>
</div>
</div>
</section>

<section className="skew-target py-32 px-6 bg-[#141615] relative z-20 border-t border-white/5" id="pricing">
<div className="max-w-7xl mx-auto">
<h2 className="font-display font-bold text-4xl text-surface text-center mb-16 scramble-text">Simple Licensing</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="border border-white/5 p-8 rounded-2xl hover:bg-white/5 transition-colors hover-trigger spotlight-card glass-panel">
<div className="font-mono text-xs text-gray-500 mb-4 z-10 relative">/ PERSONAL</div>
<div className="text-3xl font-bold text-surface mb-6 z-10 relative">Free<span className="text-sm font-normal text-gray-500">/forever</span></div>
<ul className="space-y-4 text-sm text-gray-400 mb-8 font-mono z-10 relative">
<li className="flex gap-3"><span>✓</span> Standard Model</li>
<li className="flex gap-3"><span>✓</span> Unlimited Minutes</li>
</ul>
<button className="w-full py-3 border border-white/10 rounded-sm font-bold uppercase text-xs tracking-wider text-surface hover:bg-surface hover:text-black transition-all z-10 relative">Download</button>
</div>
<div className="border border-accent/50 bg-[#181a19] p-8 rounded-2xl relative hover-trigger transform md:-translate-y-4 shadow-[0_0_30px_rgba(148,181,160,0.05)] spotlight-card">
<div className="absolute top-0 right-0 bg-accent text-[#141615] text-[10px] font-bold px-3 py-1 uppercase rounded-bl-lg z-10">Recommended</div>
<div className="font-mono text-xs text-accent mb-4 z-10 relative">/ PRO</div>
<div className="text-3xl font-bold text-surface mb-6 z-10 relative">$29<span className="text-sm font-normal text-gray-500">/one-time</span></div>
<ul className="space-y-4 text-sm text-gray-400 mb-8 font-mono z-10 relative">
<li className="flex gap-3"><span className="text-accent">✓</span> Large Models (Higher Accuracy)</li>
<li className="flex gap-3"><span className="text-accent">✓</span> Speaker Diarization</li>
<li className="flex gap-3"><span className="text-accent">✓</span> Priority Support</li>
</ul>
<button className="w-full py-3 bg-accent text-[#141615] rounded-sm font-bold uppercase text-xs tracking-wider hover:bg-surface transition-all z-10 relative">Buy License</button>
</div>
<div className="border border-white/5 p-8 rounded-2xl hover:bg-white/5 transition-colors hover-trigger spotlight-card glass-panel">
<div className="font-mono text-xs text-gray-500 mb-4 z-10 relative">/ ENTERPRISE</div>
<div className="text-3xl font-bold text-surface mb-6 z-10 relative">Custom</div>
<ul className="space-y-4 text-sm text-gray-400 mb-8 font-mono z-10 relative">
<li className="flex gap-3"><span>✓</span> Bulk Deployment</li>
<li className="flex gap-3"><span>✓</span> SSO Integration</li>
</ul>
<button className="w-full py-3 border border-white/10 rounded-sm font-bold uppercase text-xs tracking-wider text-surface hover:bg-surface hover:text-black transition-all z-10 relative">Contact Us</button>
</div>
</div>
</div>
</section>

<footer className="bg-[#121312] pt-32 pb-10 px-6 border-t border-white/5 relative overflow-hidden">
<div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none select-none pointer-events-none opacity-5">
<span className="text-[20vw] font-display font-black text-white whitespace-nowrap -ml-10">BRIDGE</span>
</div>
<div className="max-w-[1400px] mx-auto relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
<div>
<h3 className="text-2xl font-display font-bold text-surface mb-6">Stay in the loop.</h3>
<div className="flex gap-4">
<input className="bg-white/5 border border-white/5 px-4 py-3 rounded-sm text-sm w-64 focus:outline-none focus:border-accent text-surface placeholder-gray-600" placeholder="email@domain.com" type="email"/>
<button className="bg-accent text-[#141615] px-6 py-3 rounded-sm font-bold text-sm hover:bg-surface transition-colors">SUBSCRIBE</button>
</div>
</div>
<div className="flex gap-12 text-sm text-gray-500 font-mono tracking-wider uppercase">
<div className="flex flex-col gap-3">
<span className="text-surface">Product</span>
<a className="hover:text-accent transition-colors" href="#">Download</a>
<a className="hover:text-accent transition-colors" href="#">Changelog</a>
<a className="hover:text-accent transition-colors" href="#">FAQ</a>
</div>
<div className="flex flex-col gap-3">
<span className="text-surface">Legal</span>
<a className="hover:text-accent transition-colors" href="#">Privacy</a>
<a className="hover:text-accent transition-colors" href="#">Terms</a>
</div>
</div>
</div>
<div className="max-w-[1400px] mx-auto mt-20 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-600 font-mono uppercase">
<span>© 2025 BRIDGECHAT. ALL RIGHTS RESERVED.</span>
<span className="mt-2 md:mt-0">MADE WITH FOCUS</span>
</div>
</footer>
</main>


    </>
  );
}
