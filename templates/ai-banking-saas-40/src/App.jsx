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
accent: '#a855f7', // Purple-500
surface: '#0F0F0F',
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
display: ['Space Grotesk', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
mono: ['JetBrains Mono', 'monospace'],
},
animation: {
'spin-slow': 'spin 15s linear infinite',
'reverse-spin': 'spin 20s linear infinite reverse',
'marquee': 'marquee 30s linear infinite',
'scan': 'scan 4s linear infinite',
'blink': 'blink 2s ease-in-out infinite',
'float': 'float 6s ease-in-out infinite',
'float-delayed': 'float 6s ease-in-out 3s infinite',
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
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-20px)' },
}
}
}
}
}



  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.33/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();



        // Initialize Icons
        lucide.createIcons();

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

        const counter = document.querySelector('.counter');
        if(counter) {
            gsap.from(counter, {
                textContent: 0,
                duration: 2,
                ease: "power1.out",
                snap: { textContent: 1 },
                scrollTrigger: { trigger: counter, start: "top 85%", once: true },
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
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<div className="fixed inset-0 bg-[#050505] -z-50"></div>


<div className="aura-background-component fixed top-0 w-full h-screen -z-10 opacity-60" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="1bY8o6HVTI1oxJxuCJEG"></div>
</div>

<div className="noise-overlay"></div>

<div className="relative z-50 bg-[#020202] text-white/70 text-[11px] font-medium py-2.5 text-center border-b border-white/5 hover:bg-[#080808] transition-colors cursor-pointer group">
<span className="inline-flex items-center gap-2">
            Announcing our $41M Series B led by Goodwater Capital <span className="text-white/20">|</span> <span className="text-white group-hover:underline">Learn more</span> <svg className="lucide lucide-arrow-right w-3 h-3" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</div>

<nav className="fixed top-[37px] w-full z-40 bg-gradient-to-b from-[#050505]/90 to-[#050505]/0 backdrop-blur-sm">
<div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
<a className="group flex items-center gap-2" href="#">
<span className="font-serif font-bold text-2xl tracking-tight text-white">Success.</span>
</a>
<div className="hidden md:flex gap-8 text-sm font-medium text-emerald-400">
<a className="hover:text-white transition-colors" href="#platform">Platform</a>
<a className="hover:text-white transition-colors" href="#developers">Products</a>
<a className="hover:text-white transition-colors" href="#solutions">Industries</a>
<a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
<a className="hover:text-white transition-colors" href="#">FAQ</a>
</div>
<div className="flex items-center gap-4">
<a className="text-sm font-medium text-white hover:text-emerald-300 transition-colors hidden sm:block" href="#">Log in</a>
<button className="border border-white/20 px-5 py-2 text-sm font-medium text-white hover:bg-white hover:text-black transition-all rounded-full bg-white/5 backdrop-blur-md">
                    Open Account
                </button>
</div>
</div>
</nav>
<main className="">

<section className="skew-target min-h-screen flex flex-col overflow-hidden w-full pt-20 relative items-center justify-center">

<div className="absolute inset-0 pointer-events-none hidden lg:block overflow-hidden max-w-[1600px] mx-auto">

<div className="absolute top-[20%] left-[5%] xl:left-[8%] w-64 widget-card rounded-2xl p-5 animate-float">
<div className="flex justify-between items-center mb-4">
<div className="flex items-center gap-2 bg-black/40 rounded-full px-2 py-1 border border-white/10">
<div className="w-4 h-4 rounded-full bg-cyan-500 flex items-center justify-center text-[8px] text-white">$</div>
<span className="text-xs text-white font-medium">USDC</span>
<svg className="lucide lucide-chevron-down w-3 h-3 text-gray-500" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
<svg className="lucide lucide-arrow-right-left w-3 h-3 text-gray-500" data-lucide="arrow-right-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 3 4 4-4 4"></path><path d="M20 7H4"></path><path d="m8 21-4-4 4-4"></path><path d="M4 17h16"></path></svg>
<div className="flex items-center gap-2">
<div className="w-4 h-4 rounded-full bg-sky-500 flex items-center justify-center text-[8px] text-white">S</div>
<span className="text-xs text-white font-medium">USD</span>
</div>
</div>
<div className="text-3xl font-display font-medium text-white mb-2">$3,500.00</div>
<div className="flex justify-between text-[10px] text-emerald-500 border-t border-white/5 pt-3 mt-2">
<span>Off-ramp fee (0.5%)</span>
<span>$17.50</span>
</div>
</div>

<div className="absolute bottom-[15%] left-[8%] w-72 widget-card rounded-2xl p-5 animate-float-delayed z-20">
<div className="flex justify-between items-center mb-4 border-b border-white/5 pb-2">
<span className="text-xs text-emerald-400 font-medium">Transactions</span>
<span className="text-[10px] text-emerald-600">Today</span>
</div>
<div className="space-y-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-red-500/20 text-red-500 flex items-center justify-center border border-red-500/20"><svg className="lucide lucide-message-circle w-4 h-4" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg></div>
<div>
<div className="text-xs text-white font-medium">Twilio, Inc.</div>
<div className="text-[10px] text-emerald-600">API Usage</div>
</div>
</div>
<div className="text-right">
<div className="text-xs text-white font-mono">$7,890.00</div>
</div>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-cyan-500/20 text-cyan-500 flex items-center justify-center border border-cyan-500/20"><svg className="lucide lucide-cloud w-4 h-4" data-lucide="cloud" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path></svg></div>
<div>
<div className="text-xs text-white font-medium">Google Cloud</div>
<div className="text-[10px] text-emerald-600">Compute</div>
</div>
</div>
<div className="text-right">
<div className="text-xs text-white font-mono">$3,299.99</div>
</div>
</div>
</div>
</div>

<div className="absolute top-[22%] right-[8%] w-72 h-48 animate-float-delayed">
<div className="relative w-full h-full">

<div className="absolute top-0 right-0 w-64 h-40 bg-emerald-800 rounded-xl border border-white/5 card-stack-3"></div>
<div className="absolute top-2 right-2 w-64 h-40 bg-emerald-700 rounded-xl border border-white/5 card-stack-2"></div>

<div className="absolute top-4 right-4 w-64 h-40 bg-gradient-to-br from-[#2a2a2a] to-black rounded-xl border border-white/10 p-5 card-stack-1 flex flex-col justify-between shadow-2xl">
<div className="flex justify-between items-start">
<span className="font-serif italic font-bold text-white text-lg">Slash</span>
<svg className="lucide lucide-wifi w-4 h-4 text-gray-500 rotate-90" data-lucide="wifi" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg>
</div>
<div>
<div className="text-xl font-mono text-white tracking-widest mb-1">$1,321.00</div>
<div className="flex justify-between items-end">
<div className="text-[9px] text-emerald-500 font-mono">
                                        EXP 03/28VISA BUSINESS
                                    </div>
<svg className="lucide lucide-credit-card w-6 h-6 text-white" data-lucide="credit-card" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
</div>
</div>
</div>
</div>

<div className="absolute -left-12 top-10 w-48 widget-card p-3 rounded-lg flex items-center gap-3">
<div className="w-8 h-8 rounded bg-cyan-500/20 text-cyan-400 flex items-center justify-center"><svg className="lucide lucide-layers w-4 h-4" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg></div>
<div>
<div className="text-xs text-white font-medium">Wrath Software</div>
<div className="text-[10px] text-emerald-500">Multi-entity</div>
</div>
</div>
</div>

<div className="absolute bottom-[20%] right-[10%] w-64 widget-card rounded-2xl p-5 animate-float z-20">
<div className="flex justify-between items-start mb-6">
<div className="w-10 h-6 bg-gradient-to-r from-emerald-200 to-emerald-400 rounded"></div>
<div className="text-right">
<div className="text-2xl font-display text-white">2% <svg className="lucide lucide-refresh-cw w-3 h-3 inline text-blue-500" data-lucide="refresh-cw" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path><path d="M8 16H3v5"></path></svg></div>
</div>
</div>
<div className="text-[10px] text-emerald-400 mb-4">You've received cashback for September</div>
<div className="text-3xl font-bold text-white mb-1">$125,324</div>
<div className="text-[10px] text-emerald-600">Total balance</div>
<div className="mt-4 pt-3 border-t border-white/5 flex justify-between text-[10px]">
<span className="text-emerald-500">Cashback <span className="bg-white/10 px-1 rounded text-white ml-1">Pending</span></span>
<span className="text-white">+$320.00</span>
</div>
</div>
</div>

<div className="relative z-30 text-center max-w-4xl px-6 mt-10">
<h1 className="md:text-7xl lg:text-[5.5rem] leading-[1.1] text-6xl text-white tracking-tight font-instrument-serif mb-8">
                    We're reimagining banking 
                    <span className="block" style={{}}>to accelerate <span className="inline-flex items-center justify-center align-middle transform hover:rotate-0 transition-transform duration-500 bg-gradient-to-b from-[#2a2a2a] to-black w-14 h-14 border-white/10 border rounded-xl mr-1 ml-1 shadow-2xl rotate-12">
<span className="text-2xl">⚡</span>
</span> your success</span>
</h1>
<p className="text-emerald-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12 font-light">
                    Traditional banks force everyone into the same box – Success builds features specifically for your industry's needs.
                </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
<button className="bg-white text-black px-8 py-3.5 font-bold text-sm rounded-full tracking-wide hover:bg-emerald-200 transition-all hover-trigger w-full sm:w-auto shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                        Contact Sales
                    </button>
<button className="px-8 py-3.5 bg-[#1a1a1a]/50 backdrop-blur-md border border-white/10 text-white rounded-full font-bold text-sm tracking-wide hover:bg-[#2a2a2a] transition-all hover-trigger w-full sm:w-auto">
                        Open Account
                    </button>
</div>
</div>
</section>

<div className="border-y border-white/5 bg-[#020202] py-8 relative z-20 overflow-hidden marquee-mask w-full">
<div className="flex whitespace-nowrap animate-marquee w-[max-content]">
<div className="flex gap-24 px-12 items-center text-white/20">
<div className="flex items-center gap-3 hover:text-white transition-colors duration-300"><svg className="lucide lucide-boxes w-6 h-6" data-lucide="boxes" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z"></path><path d="m7 16.5-4.74-2.85"></path><path d="m7 16.5 5-3"></path><path d="M7 16.5v5.17"></path><path d="M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z"></path><path d="m17 16.5-5-3"></path><path d="m17 16.5 4.74-2.85"></path><path d="M17 16.5v5.17"></path><path d="M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z"></path><path d="M12 8 7.26 5.15"></path><path d="m12 8 4.74-2.85"></path><path d="M12 13.5V8"></path></svg> <span className="font-display font-bold text-xl">AMAZON</span></div>
<div className="flex items-center gap-3 hover:text-white transition-colors duration-300"><svg className="lucide lucide-gem w-6 h-6" data-lucide="gem" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 3 8 9l4 13 4-13-2.5-6"></path><path d="M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3z"></path><path d="M2 9h20"></path></svg> <span className="font-display font-bold text-xl">RUBY</span></div>
<div className="flex items-center gap-3 hover:text-white transition-colors duration-300"><svg className="lucide lucide-mountain-snow w-6 h-6" data-lucide="mountain-snow" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m8 3 4 8 5-5 5 15H2L8 3z"></path><path d="M4.14 15.08c2.62-1.57 5.24-1.43 7.86.42 2.74 1.94 5.49 2 8.23.19"></path></svg> <span className="font-display font-bold text-xl">SUMMIT</span></div>
<div className="flex items-center gap-3 hover:text-white transition-colors duration-300"><svg className="lucide lucide-zap w-6 h-6" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg> <span className="font-display font-bold text-xl">ELECTRIC</span></div>
<div className="flex items-center gap-3 hover:text-white transition-colors duration-300"><svg className="lucide lucide-infinity w-6 h-6" data-lucide="infinity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 16c5 0 7-8 12-8a4 4 0 0 1 0 8c-5 0-7-8-12-8a4 4 0 1 0 0 8"></path></svg> <span className="font-display font-bold text-xl">LOOP</span></div>
<div className="flex items-center gap-3 hover:text-white transition-colors duration-300"><svg className="lucide lucide-globe w-6 h-6" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg> <span className="font-display font-bold text-xl">QUEST</span></div>
</div>
<div className="flex gap-24 px-12 items-center text-white/20">
<div className="flex items-center gap-3 hover:text-white transition-colors duration-300"><svg className="lucide lucide-boxes w-6 h-6" data-lucide="boxes" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z"></path><path d="m7 16.5-4.74-2.85"></path><path d="m7 16.5 5-3"></path><path d="M7 16.5v5.17"></path><path d="M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z"></path><path d="m17 16.5-5-3"></path><path d="m17 16.5 4.74-2.85"></path><path d="M17 16.5v5.17"></path><path d="M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z"></path><path d="M12 8 7.26 5.15"></path><path d="m12 8 4.74-2.85"></path><path d="M12 13.5V8"></path></svg> <span className="font-display font-bold text-xl">AMAZON</span></div>
<div className="flex items-center gap-3 hover:text-white transition-colors duration-300"><svg className="lucide lucide-gem w-6 h-6" data-lucide="gem" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 3 8 9l4 13 4-13-2.5-6"></path><path d="M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3z"></path><path d="M2 9h20"></path></svg> <span className="font-display font-bold text-xl">RUBY</span></div>
<div className="flex items-center gap-3 hover:text-white transition-colors duration-300"><svg className="lucide lucide-mountain-snow w-6 h-6" data-lucide="mountain-snow" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m8 3 4 8 5-5 5 15H2L8 3z"></path><path d="M4.14 15.08c2.62-1.57 5.24-1.43 7.86.42 2.74 1.94 5.49 2 8.23.19"></path></svg> <span className="font-display font-bold text-xl">SUMMIT</span></div>
<div className="flex items-center gap-3 hover:text-white transition-colors duration-300"><svg className="lucide lucide-zap w-6 h-6" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg> <span className="font-display font-bold text-xl">ELECTRIC</span></div>
<div className="flex items-center gap-3 hover:text-white transition-colors duration-300"><svg className="lucide lucide-infinity w-6 h-6" data-lucide="infinity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 16c5 0 7-8 12-8a4 4 0 0 1 0 8c-5 0-7-8-12-8a4 4 0 1 0 0 8"></path></svg> <span className="font-display font-bold text-xl">LOOP</span></div>
<div className="flex items-center gap-3 hover:text-white transition-colors duration-300"><svg className="lucide lucide-globe w-6 h-6" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg> <span className="font-display font-bold text-xl">QUEST</span></div>
</div>
</div>
</div>

<section className="skew-target py-32 px-6 relative z-20" id="platform">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-8">
<div>
<span className="text-accent font-mono text-xs tracking-widest block mb-2">/// CORE INFRASTRUCTURE</span>
<h2 className="font-display font-bold text-white text-4xl md:text-5xl scramble-text">Agent Cloud</h2>
</div>
<div className="text-right">
<div className="flex items-center justify-end gap-2 mb-1">
<span className="w-2 h-2 bg-sky-500 rounded-full animate-blink"></span>
<span className="font-mono text-xs text-white">SYSTEM: OPTIMAL</span>
</div>
<p className="text-emerald-500 font-mono text-xs uppercase tracking-widest">
                            Workflows Active: 12,842
                        </p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 grid-rows-3 gap-6 h-auto md:h-[900px]">

<div className="md:col-span-2 md:row-span-2 glass-panel spotlight-card rounded-xl overflow-hidden relative group p-8 flex flex-col">
<div className="scan-line"></div>
<div className="absolute top-6 right-6 border border-white/20 bg-black/50 px-3 py-1 rounded text-[10px] font-mono text-accent">GRAPH_VIEW_01</div>
<div className="mb-auto z-10">
<h3 className="font-display font-bold text-2xl text-white mb-2">Activity Graph</h3>
<p className="text-emerald-300 text-sm max-w-sm">Visualize complex agent interactions and vector database queries in real-time.</p>
</div>

<div className="relative w-full h-64 mt-6 border border-white/10 bg-black/40 rounded-lg p-6 flex flex-col justify-center items-center z-10">
<div className="absolute inset-0 dot-grid opacity-20"></div>
<div className="flex justify-between items-center w-full max-w-xs mb-8 relative">

<div className="absolute top-1/2 left-0 w-full h-[1px] bg-emerald-700 -z-10"></div>
<div className="flex flex-col items-center gap-2 bg-[#0a0a0a] p-2 z-10 border border-white/10 rounded-lg">
<div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center text-accent border border-accent/20">
<svg className="lucide lucide-bot w-5 h-5" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
</div>
<span className="text-[10px] text-emerald-400 font-mono">Assistant</span>
</div>
<div className="w-6 h-6 rounded-full bg-[#1a1a1a] border border-white/20 flex items-center justify-center z-10">
<svg className="lucide lucide-arrow-right w-3 h-3 text-gray-500" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
<div className="flex flex-col items-center gap-2 bg-[#0a0a0a] p-2 z-10 border border-white/10 rounded-lg">
<div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400 border border-cyan-400/20">
<svg className="lucide lucide-database w-5 h-5" data-lucide="database" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>
</div>
<span className="text-[10px] text-emerald-400 font-mono">Vector DB</span>
</div>
</div>
<div className="w-full max-w-sm bg-[#111] rounded border border-white/10 p-3 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 border border-cyan-500/20">
<svg className="lucide lucide-headphones w-4 h-4" data-lucide="headphones" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"></path></svg>
</div>
<div>
<div className="text-xs font-medium text-white">Executive Assistant</div>
<div className="text-[10px] text-emerald-500 font-mono">Run #829 • <span className="text-sky-500">Active</span></div>
</div>
</div>
</div>
</div>

<div className="md:col-span-2 md:row-span-1 glass-panel spotlight-card rounded-xl p-6 flex items-center gap-6 relative overflow-hidden">
<div className="w-1/2 z-10">
<div className="flex items-center gap-2 mb-2">
<svg className="lucide lucide-message-square w-4 h-4 text-gray-400" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
<span className="font-mono text-[10px] text-emerald-500 uppercase">Chat Interface</span>
</div>
<h3 className="font-display font-bold text-xl text-white">Interactive Preview</h3>
</div>
<div className="w-1/2 h-full relative z-10 flex flex-col gap-2 justify-center">
<div className="bg-white/10 p-3 rounded-lg rounded-tl-none border border-white/5 text-[10px] text-emerald-300">
                                Check availability for Dr. Smith...
                            </div>
<div className="bg-accent/20 p-3 rounded-lg rounded-tr-none border border-accent/20 text-[10px] text-white self-end">
                                I found 3 slots on Aug 1st.
                            </div>
</div>
</div>

<div className="md:col-span-1 md:row-span-1 glass-panel spotlight-card rounded-xl p-6 flex flex-col justify-between overflow-hidden">
<div className="flex items-center gap-2 text-white mb-2">
<svg className="lucide lucide-shield-check w-4 h-4 text-emerald-400" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="font-display font-bold text-sm">Enterprise Ready</span>
</div>
<div className="relative h-12 overflow-hidden font-mono text-[9px] text-emerald-600 leading-relaxed">
<div className="animate-[marquee_5s_linear_infinite_reverse] flex flex-col">
<span>SOC2_COMPLIANT</span>
<span>HIPAA_READY</span>
<span>GDPR_CHECKED</span>
<span>ISO_27001_OK</span>
</div>
</div>
<div className="text-[10px] text-sky-500 mt-2 flex items-center gap-1">
<span className="w-1 h-1 bg-sky-500 rounded-full"></span> 100% SECURE
                        </div>
</div>

<div className="md:col-span-1 md:row-span-1 glass-panel spotlight-card rounded-xl p-6 flex flex-col justify-between">
<div className="flex justify-between items-center mb-2">
<span className="font-mono text-[10px] text-emerald-500 uppercase">Latency</span>
<svg className="lucide lucide-zap w-3 h-3 text-yellow-500" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<div className="text-right">
<div className="text-4xl font-display font-bold text-white counter" data-target="24">24</div>
<div className="text-[10px] text-emerald-500 mt-1 font-mono">MILLISECONDS</div>
</div>
</div>

<div className="md:col-span-2 md:row-span-1 glass-panel spotlight-card rounded-xl p-8 flex items-center justify-between hover-trigger">
<div>
<h3 className="font-display font-bold text-xl text-white mb-2">Universal Connectivity</h3>
<p className="text-emerald-300 text-xs font-mono">Connect any LLM, Database, or API.</p>
</div>
<div className="flex -space-x-3">
<div className="w-10 h-10 rounded-full bg-emerald-800 border border-emerald-700 flex items-center justify-center text-xs text-white z-0">PG</div>
<div className="w-10 h-10 rounded-full bg-emerald-800 border border-emerald-700 flex items-center justify-center text-xs text-white z-10"><svg className="lucide lucide-code w-4 h-4" data-lucide="code" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 18 6-6-6-6"></path><path d="m8 6-6 6 6 6"></path></svg></div>
<div className="w-10 h-10 rounded-full bg-emerald-800 border border-emerald-700 flex items-center justify-center text-xs text-white z-20"><svg className="lucide lucide-webhook w-4 h-4" data-lucide="webhook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2"></path><path d="m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06"></path><path d="m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8"></path></svg></div>
<div className="w-10 h-10 rounded-full bg-accent border border-white/20 flex items-center justify-center text-white z-30 font-bold">+</div>
</div>
</div>
</div>
</div>
</section>

<section className="skew-target py-24 bg-[#050505] border-t border-white/5 relative z-20" id="developers">
<div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<span className="text-accent font-mono text-xs tracking-widest block mb-4">/// DEVELOPER EXPERIENCE</span>
<h2 className="font-display font-bold text-4xl md:text-5xl mb-6 text-white scramble-text">Built for Builders</h2>
<p className="text-emerald-400 text-lg mb-8 leading-relaxed">
                        Don't wrestle with complex infrastructure. Define agents, tools, and workflows in code and deploy instantly.
                    </p>
<div className="space-y-6">
<div className="group flex gap-4 p-4 border border-transparent hover:border-white/10 rounded-lg transition-all cursor-pointer hover-trigger">
<div className="w-8 h-8 rounded bg-emerald-800 flex items-center justify-center font-mono text-xs text-white group-hover:bg-accent transition-colors">01</div>
<div>
<h4 className="font-bold text-white">Define Agent</h4>
<p className="text-sm text-emerald-500">Set role, goals and access to tools.</p>
</div>
</div>
<div className="group flex gap-4 p-4 border border-transparent hover:border-white/10 rounded-lg transition-all cursor-pointer hover-trigger">
<div className="w-8 h-8 rounded bg-emerald-800 flex items-center justify-center font-mono text-xs text-white group-hover:bg-accent transition-colors">02</div>
<div>
<h4 className="font-bold text-white">Connect Data</h4>
<p className="text-sm text-emerald-500">Vector stores and API integrations.</p>
</div>
</div>
</div>
</div>
<div className="relative group hover-trigger">
<div className="absolute -inset-1 bg-gradient-to-r from-accent to-cyan-600 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
<div className="relative bg-[#0a0a0a] border border-white/10 rounded-lg p-6 font-mono text-sm shadow-2xl overflow-hidden min-h-[350px]">
<div className="flex gap-2 mb-6 border-b border-white/5 pb-4">
<div className="w-3 h-3 rounded-full bg-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-sky-500/50"></div>
<div className="w-3 h-3 rounded-full bg-sky-500/50"></div>
<div className="ml-auto text-xs text-emerald-500">agent.ts</div>
</div>
<div className="text-emerald-400 leading-relaxed">
<span className="text-cyan-400">import</span> { Agent } <span className="text-cyan-400">from</span> <span className="text-sky-400">'@success/core'</span>;
                            
                            <span className="text-emerald-600">// Define your scheduler agent</span>
<span className="text-cyan-400">const</span> scheduler = <span className="text-cyan-400">new</span> Agent({
                              role: <span className="text-sky-400">'Scheduler'</span>,
                              model: <span className="text-sky-400">'gpt-4-turbo'</span>,
                              tools: [<span className="text-sky-400">'calendar_api'</span>, <span className="text-sky-400">'email'</span>],
                              instructions: <span className="text-sky-400">`Find overlapping slots...`</span>
                            });
                            
                            <span className="text-emerald-600">// Deploy instantly</span>
<span className="text-cyan-400">await</span> scheduler.deploy();
                        </div>
<div className="mt-2 text-accent animate-pulse">_</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#050505] relative z-20 border-t border-white/5" id="solutions">
<div className="max-w-[1400px] mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20 relative">

<div className="order-2 lg:order-1 relative">
<div className="sticky top-24 w-full aspect-square max-h-[60vh] bg-[#080808] border border-white/10 rounded-2xl overflow-hidden flex items-center justify-center p-10 group shadow-2xl">

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px]"></div>

<div className="relative w-40 h-40 border border-accent rounded-full flex items-center justify-center z-10 shadow-[0_0_50px_rgba(168,85,247,0.3)] bg-black/50 backdrop-blur-sm">
<svg className="lucide lucide-cpu w-16 h-16 text-accent" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
<div className="absolute -bottom-8 text-white font-mono text-xs tracking-widest text-center">INTELLIGENCE<br/>ENGINE</div>
</div>

<div className="absolute w-[70%] h-[70%] border border-white/5 rounded-full animate-spin-slow">
<div className="w-8 h-8 bg-[#111] border border-white/20 rounded-full absolute -top-4 left-1/2 -translate-x-1/2 flex items-center justify-center">
<svg className="lucide lucide-database w-4 h-4 text-gray-400" data-lucide="database" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>
</div>
</div>
<div className="absolute w-[90%] h-[90%] border border-white/5 rounded-full animate-reverse-spin">
<div className="w-8 h-8 bg-[#111] border border-white/20 rounded-full absolute -top-4 left-1/2 -translate-x-1/2 flex items-center justify-center">
<svg className="lucide lucide-globe w-4 h-4 text-gray-400" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
</div>
</div>
</div>
</div>

<div className="order-1 lg:order-2 py-20 pb-0">
<span className="text-accent font-mono text-xs tracking-widest block mb-10">/// THE PIPELINE</span>
<div className="step-item mb-48 opacity-30 transition-opacity duration-500">
<h3 className="text-4xl font-display font-bold mb-4 text-white">01. Connect</h3>
<p className="text-xl text-white leading-relaxed font-light">
                                Link your data sources. We index documents into vector embeddings automatically and connect to your internal APIs securely.
                            </p>
</div>
<div className="step-item mb-48 opacity-30 transition-opacity duration-500">
<h3 className="text-4xl font-display font-bold mb-4 text-white">02. Reason</h3>
<p className="text-xl text-white leading-relaxed font-light">
                                Agents process requests using advanced "Chain of Thought" logic, selecting the right tools for the job.
                            </p>
</div>
<div className="step-item opacity-30 transition-opacity duration-500">
<h3 className="text-4xl font-display font-bold mb-4 text-white">03. Execute</h3>
<p className="text-xl text-white leading-relaxed font-light">
                                The system takes action—scheduling meetings, updating records, or generating reports—and responds in real-time.
                            </p>
</div>
<div className="h-40"></div>
</div>
</div>
</div>
</section>

<section className="skew-target py-32 px-6 bg-[#050505] relative z-20 border-t border-white/5" id="pricing">
<div className="max-w-7xl mx-auto">
<h2 className="font-display font-bold text-4xl text-white text-center mb-16 scramble-text">Start Building</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="border border-white/10 p-8 rounded-2xl hover:bg-white/5 transition-colors hover-trigger spotlight-card glass-panel flex flex-col">
<div className="font-mono text-xs text-emerald-500 mb-4 z-10 relative">/ STARTER</div>
<div className="text-3xl font-bold text-white mb-6 z-10 relative">Free</div>
<ul className="space-y-4 text-sm text-emerald-300 mb-8 font-mono z-10 relative flex-1">
<li className="flex gap-3"><svg className="lucide lucide-check w-4 h-4 text-gray-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> 1 Agent</li>
<li className="flex gap-3"><svg className="lucide lucide-check w-4 h-4 text-gray-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> 500 Runs/mo</li>
<li className="flex gap-3"><svg className="lucide lucide-check w-4 h-4 text-gray-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Community Support</li>
</ul>
<button className="w-full py-3 border border-white/20 rounded-full font-bold uppercase text-xs tracking-wider text-white hover:bg-white hover:text-black transition-all z-10 relative">Start Free</button>
</div>

<div className="border border-accent bg-[#0a0a0a] p-8 rounded-2xl relative hover-trigger transform md:-translate-y-4 shadow-[0_0_30px_rgba(168,85,247,0.1)] spotlight-card flex flex-col">
<div className="absolute top-0 right-0 bg-accent text-white text-[10px] font-bold px-3 py-1 uppercase rounded-bl-lg z-10">Popular</div>
<div className="font-mono text-xs text-accent mb-4 z-10 relative">/ PRO</div>
<div className="text-3xl font-bold text-white mb-6 z-10 relative">$49<span className="text-sm font-normal text-emerald-500">/mo</span></div>
<ul className="space-y-4 text-sm text-emerald-300 mb-8 font-mono z-10 relative flex-1">
<li className="flex gap-3"><svg className="lucide lucide-check w-4 h-4 text-accent" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Unlimited Agents</li>
<li className="flex gap-3"><svg className="lucide lucide-check w-4 h-4 text-accent" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> 10k Runs/mo</li>
<li className="flex gap-3"><svg className="lucide lucide-check w-4 h-4 text-accent" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Vector DB Included</li>
</ul>
<button className="w-full py-3 bg-accent text-white rounded-full font-bold uppercase text-xs tracking-wider hover:bg-white hover:text-black transition-all z-10 relative">Get Started</button>
</div>

<div className="border border-white/10 p-8 rounded-2xl hover:bg-white/5 transition-colors hover-trigger spotlight-card glass-panel flex flex-col">
<div className="font-mono text-xs text-emerald-500 mb-4 z-10 relative">/ ENTERPRISE</div>
<div className="text-3xl font-bold text-white mb-6 z-10 relative">Custom</div>
<ul className="space-y-4 text-sm text-emerald-300 mb-8 font-mono z-10 relative flex-1">
<li className="flex gap-3"><svg className="lucide lucide-check w-4 h-4 text-gray-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> VPC Deployment</li>
<li className="flex gap-3"><svg className="lucide lucide-check w-4 h-4 text-gray-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> SSO / SAML</li>
<li className="flex gap-3"><svg className="lucide lucide-check w-4 h-4 text-gray-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Dedicated Support</li>
</ul>
<button className="w-full py-3 border border-white/20 rounded-full font-bold uppercase text-xs tracking-wider text-white hover:bg-white hover:text-black transition-all z-10 relative">Contact Sales</button>
</div>
</div>
</div>
</section>

<footer className="bg-[#020202] pt-32 pb-10 px-6 border-t border-white/10 relative overflow-hidden">
<div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none select-none pointer-events-none opacity-5">
<span className="text-[20vw] font-display font-black text-white whitespace-nowrap -ml-10">SUCCESS</span>
</div>
<div className="max-w-[1400px] mx-auto relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
<div>
<h3 className="text-2xl font-display font-bold text-white mb-6">Ready to automate?</h3>
<div className="flex gap-4">
<input className="bg-white/5 border border-white/10 px-4 py-3 rounded-full text-sm w-64 focus:outline-none focus:border-accent text-white transition-colors" placeholder="email@company.com" type="email"/>
<button className="bg-accent text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-white hover:text-black transition-colors">JOIN</button>
</div>
</div>
<div className="flex gap-12 text-sm text-emerald-500 font-mono tracking-wider uppercase">
<div className="flex flex-col gap-3">
<span className="text-white">Platform</span>
<a className="hover:text-accent transition-colors" href="#">Agents</a>
<a className="hover:text-accent transition-colors" href="#">Docs</a>
<a className="hover:text-accent transition-colors" href="#">Status</a>
</div>
<div className="flex flex-col gap-3">
<span className="text-white">Legal</span>
<a className="hover:text-accent transition-colors" href="#">Privacy</a>
<a className="hover:text-accent transition-colors" href="#">Terms</a>
</div>
</div>
</div>
<div className="max-w-[1400px] mx-auto mt-20 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] text-emerald-600 font-mono uppercase">
<span>© 2025 Success Software Inc.</span>
<span className="mt-2 md:mt-0 flex items-center gap-2">
<svg className="lucide lucide-globe w-3 h-3" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg> San Francisco / Remote
                </span>
</div>
</footer>
</main>


    </>
  );
}
