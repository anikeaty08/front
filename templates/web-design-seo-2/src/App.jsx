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
accent: '#00E5FF', // Electric Cyan
surface: '#0B0E11', // Deep Charcoal
secondary: '#7C3AED', // Deep Purple for gradients
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
display: ['Manrope', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
backgroundImage: {
'grid-pattern': "linear-gradient(to right, #1f2937 1px, transparent 1px), linear-gradient(to bottom, #1f2937 1px, transparent 1px)",
},
animation: {
'spin-slow': 'spin 15s linear infinite',
'reverse-spin': 'spin 20s linear infinite reverse',
'marquee': 'marquee 30s linear infinite',
'scan': 'scan 4s linear infinite',
'blink': 'blink 2s ease-in-out infinite',
'pulse-fast': 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'float': 'float 6s ease-in-out infinite',
},
keyframes: {
marquee: {
'0%': { transform: 'translateX(0)' },
'100%': { transform: 'translateX(-50%)' },
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



    // --- 1. SETUP LENIS & SCROLL SKEW ---
    const lenis = new Lenis({
        lerp: 0.08,
        smooth: true,
        direction: 'vertical',
    });

    let currentSkew = 0;
    
    function raf(time) {
        lenis.raf(time);
        
        // Liquid Scroll Skew
        const skewTarget = lenis.velocity * 0.05;
        currentSkew += (skewTarget - currentSkew) * 0.1;
        const clampedSkew = Math.max(Math.min(currentSkew, 3), -3); // Cap skew
        
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
            gsap.to(btn, { x: x * 0.2, y: y * 0.2, duration: 0.3, ease: "power2.out" });
        });
        btn.addEventListener('mouseleave', () => {
            gsap.to(btn, { x: 0, y: 0, duration: 0.3, ease: "power2.out" });
        });
    });

    // --- 5. ANIMATIONS (GSAP) ---
    gsap.registerPlugin(ScrollTrigger);

    // Counter
    const counter = document.querySelector('.counter');
    if(counter) {
        gsap.from(counter, {
            textContent: 0,
            duration: 2.5,
            ease: "power2.out",
            snap: { textContent: 1 },
            scrollTrigger: { trigger: counter, start: "top 85%", once: true }
        });
    }

    // Process Steps
    const stepItems = document.querySelectorAll('.step-item');
    stepItems.forEach((item) => {
        gsap.to(item, {
            scrollTrigger: {
                trigger: item,
                start: "top 70%",
                end: "bottom 40%",
                onEnter: () => gsap.to(item, { opacity: 1, duration: 0.5 }),
                onLeave: () => gsap.to(item, { opacity: 0.3, duration: 0.5 }),
                onEnterBack: () => gsap.to(item, { opacity: 1, duration: 0.5 }),
                onLeaveBack: () => gsap.to(item, { opacity: 0.3, duration: 0.5 }),
            }
        });
    });

    // Fade Up Cards
    gsap.utils.toArray('.glass-panel').forEach((panel, i) => {
        gsap.from(panel, {
            scrollTrigger: { trigger: panel, start: "top 95%" },
            y: 40,
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
      

<div className="noise-overlay"></div>

<div className="fixed inset-0 bg-[#0B0E11] -z-50"></div>
<div className="fixed top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-accent/5 blur-[120px] -z-40"></div>
<div className="fixed bottom-[-20%] right-[-10%] w-[800px] h-[800px] rounded-full bg-secondary/10 blur-[120px] -z-40"></div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#0B0E11]/80 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
<a className="group hover-trigger flex items-center gap-2" href="#">
<div className="w-8 h-8 bg-gradient-to-br from-accent to-secondary rounded flex items-center justify-center text-black font-bold font-display text-sm">W</div>
<span className="font-display font-bold text-lg tracking-tighter text-white group-hover:text-accent transition-colors">WEBDESIGN<span className="font-light text-gray-400">CULT</span></span>
</a>
<div className="hidden md:flex gap-8 text-xs font-mono tracking-widest text-gray-400">
<a className="hover:text-white transition-colors hover-trigger" href="#services">SERVICES</a>
<a className="hover:text-white transition-colors hover-trigger" href="#work">WORK</a>
<a className="hover:text-white transition-colors hover-trigger" href="#process">PROCESS</a>
<a className="hover:text-white transition-colors hover-trigger" href="#pricing">PRICING</a>
</div>
<div className="flex items-center gap-4">
<a className="btn-magnetic relative px-6 py-2.5 rounded bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-accent transition-colors overflow-hidden group" href="#contact">
<span className="relative z-10">Start Project</span>
<div className="absolute inset-0 bg-accent transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out z-0"></div>
</a>
</div>
</div>
</nav>
<main>

<section className="skew-target relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden pt-20">
<div className="absolute inset-0 dot-grid opacity-20 pointer-events-none -z-10"></div>
<div className="relative z-20 text-center max-w-5xl px-6">
<div className="inline-flex items-center gap-3 border border-white/10 bg-white/5 px-4 py-1.5 rounded-full mb-8 backdrop-blur-sm animate-fade-in-up">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
</span>
<span className="font-mono text-[10px] text-accent tracking-widest uppercase">Accepting New Clients: Q1 2025</span>
</div>
<h1 className="font-display font-semibold text-5xl md:text-8xl tracking-tight mb-8 leading-[0.95] text-white">
                WEBSITES THAT <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500 scramble-text">CONVERT</span>
</h1>
<p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12 font-light">
                We design and build SEO-optimized, lightning-fast digital experiences for ambitious brands. No templates. Just performance.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
<a className="btn-magnetic bg-accent text-black px-8 py-4 font-bold text-xs uppercase tracking-widest hover:bg-white transition-all w-full sm:w-auto rounded" href="#contact">
                    Get Strategy Call
                </a>
<a className="btn-magnetic px-8 py-4 border border-white/20 text-white font-bold text-xs uppercase tracking-widest hover:bg-white/10 transition-all w-full sm:w-auto rounded" href="#work">
                    View Portfolio
                </a>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#0B0E11] to-transparent z-20"></div>
</section>

<div className="border-y border-white/5 bg-[#080A0C] py-6 relative z-20 overflow-hidden marquee-mask w-full">
<div className="flex whitespace-nowrap animate-marquee w-[max-content]">
<div className="flex gap-20 px-10 items-center font-display font-bold text-xl text-white/20">
<span>WORDPRESS</span>
<span>SHOPIFY</span>
<span>REACT</span>
<span>TAILWIND</span>
<span>GSAP</span>
<span>DIVI</span>
<span>NEXT.JS</span>
<span>STRIPE</span>
<span>WEBFLOW</span>
</div>
<div className="flex gap-20 px-10 items-center font-display font-bold text-xl text-white/20">
<span>WORDPRESS</span>
<span>SHOPIFY</span>
<span>REACT</span>
<span>TAILWIND</span>
<span>GSAP</span>
<span>DIVI</span>
<span>NEXT.JS</span>
<span>STRIPE</span>
<span>WEBFLOW</span>
</div>
</div>
</div>

<section className="skew-target py-32 px-6 relative z-20" id="services">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-8">
<div>
<span className="text-accent font-mono text-xs tracking-widest block mb-2">/// CAPABILITIES</span>
<h2 className="font-display font-semibold text-white text-4xl md:text-5xl">Digital Ecosystems</h2>
</div>
<div className="text-right mt-6 md:mt-0">
<p className="text-gray-500 font-mono text-xs uppercase tracking-widest">
                        Engineered for Growth
                    </p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 grid-rows-3 gap-6 h-auto md:h-[900px]">

<div className="md:col-span-2 md:row-span-2 glass-panel spotlight-card rounded-2xl overflow-hidden relative group">
<div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20 mix-blend-overlay"></div>
<div className="absolute inset-0 dot-grid opacity-30"></div>

<div className="absolute top-12 right-[-20%] w-[80%] h-[80%] border border-white/10 rounded-xl bg-[#0B0E11] shadow-2xl transform rotate-[-5deg] group-hover:rotate-[-2deg] transition-transform duration-700 p-4">
<div className="w-full h-full border border-dashed border-white/10 rounded flex flex-col gap-4 p-4">
<div className="w-1/3 h-4 bg-white/10 rounded"></div>
<div className="w-full h-32 bg-accent/5 rounded"></div>
<div className="flex gap-2">
<div className="w-1/2 h-4 bg-white/10 rounded"></div>
<div className="w-1/2 h-4 bg-white/10 rounded"></div>
</div>
</div>
</div>
<div className="absolute bottom-0 left-0 p-8 z-10 w-full bg-gradient-to-t from-[#0B0E11] to-transparent">
<div className="w-12 h-12 bg-accent flex items-center justify-center mb-4 text-black rounded-lg">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h9"></path><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path></svg>
</div>
<h3 className="font-display font-semibold text-2xl text-white mb-2">Custom UX/UI Design</h3>
<p className="text-gray-400 text-sm max-w-sm">Bespoke interfaces designed to captivate your audience and guide them to purchase.</p>
</div>
</div>

<div className="md:col-span-1 md:row-span-1 glass-panel spotlight-card rounded-2xl p-6 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-mono text-[10px] text-gray-500 uppercase">Core Web Vitals</span>
<svg className="text-green-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
</div>
<div className="text-center py-4">
<div className="text-5xl font-display font-bold text-white counter" data-target="99">99</div>
<div className="text-[10px] text-gray-500 mt-2 font-mono">LIGHTHOUSE SCORE</div>
</div>
</div>

<div className="md:col-span-1 md:row-span-2 glass-panel spotlight-card rounded-2xl p-6 flex flex-col justify-between overflow-hidden relative">
<div className="scan-line"></div>
<div>
<div className="flex items-center gap-2 text-white mb-4">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
<span className="font-display font-semibold text-sm">Development</span>
</div>
<p className="text-gray-400 text-xs mb-6">Pixel-perfect implementation using modern stacks.</p>
</div>
<div className="font-mono text-[10px] text-gray-500 space-y-2 relative z-10">
<div className="flex items-center gap-2">
<span className="text-accent">✓</span> WordPress / Divi
                        </div>
<div className="flex items-center gap-2">
<span className="text-accent">✓</span> Shopify Liquid
                        </div>
<div className="flex items-center gap-2">
<span className="text-accent">✓</span> Headless CMS
                        </div>
<div className="flex items-center gap-2">
<span className="text-accent">✓</span> React / Vue
                        </div>
</div>

<div className="absolute -bottom-4 -right-4 opacity-10 text-[80px] font-mono text-white leading-none font-bold select-none">
                        &lt;/&gt;
                    </div>
</div>

<div className="md:col-span-1 md:row-span-1 glass-panel spotlight-card rounded-2xl p-6 flex flex-col justify-between group">
<div className="flex justify-between items-center mb-2">
<span className="font-mono text-[10px] text-gray-500 uppercase">Search Visibility</span>
<div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></div>
</div>
<div className="relative h-20 flex items-end justify-between gap-1 px-2">
<div className="w-1/5 bg-white/5 h-[40%] rounded-t-sm group-hover:h-[50%] transition-all duration-500"></div>
<div className="w-1/5 bg-white/10 h-[60%] rounded-t-sm group-hover:h-[75%] transition-all duration-500 delay-75"></div>
<div className="w-1/5 bg-white/20 h-[30%] rounded-t-sm group-hover:h-[45%] transition-all duration-500 delay-100"></div>
<div className="w-1/5 bg-accent/50 h-[80%] rounded-t-sm group-hover:h-[90%] transition-all duration-500 delay-150"></div>
<div className="w-1/5 bg-accent h-[60%] rounded-t-sm group-hover:h-[100%] transition-all duration-500 delay-200"></div>
</div>
<div className="text-[10px] text-white font-mono mt-2 flex justify-between">
<span>RANKING</span>
<span className="text-accent">#1</span>
</div>
</div>

<div className="md:col-span-2 md:row-span-1 glass-panel spotlight-card rounded-2xl p-8 flex items-center justify-between hover-trigger">
<div className="relative z-10">
<h3 className="font-display font-semibold text-xl text-white mb-2">E-Commerce Scaling</h3>
<p className="text-gray-300 text-xs font-mono max-w-xs">Optimized checkout flows and product architecture for high AOV.</p>
</div>
<div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-white/5">
<svg className="text-white" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path></svg>
</div>
</div>

<div className="md:col-span-2 md:row-span-1 glass-panel spotlight-card rounded-2xl p-6 relative overflow-hidden flex flex-col justify-center">
<div className="absolute inset-0 bg-[#000000] z-0"></div>
<div className="absolute inset-0 dot-grid opacity-20"></div>
<div className="flex justify-between items-center mb-2 z-10 absolute top-6 left-6 right-6">
<span className="font-display font-semibold text-white text-lg">Target Markets</span>
<span className="text-accent text-xs font-mono border border-accent/30 px-2 py-0.5 rounded">US &amp; UK</span>
</div>

<div className="relative w-full h-full z-0 mt-8 opacity-60">

<div className="absolute top-[40%] left-[25%] w-1.5 h-1.5 bg-accent rounded-full animate-pulse shadow-[0_0_10px_#00E5FF]"></div>

<div className="absolute top-[35%] left-[48%] w-1.5 h-1.5 bg-white rounded-full animate-pulse delay-75 shadow-[0_0_10px_white]"></div>

<svg className="absolute inset-0 w-full h-full" style={{pointerEvents: 'none'}}>
<path className="animate-dash" d="M 180 60 Q 250 10 350 50" fill="none" stroke="rgba(255,255,255,0.1)" stroke-dasharray="5,5" strokeWidth="1"></path>
</svg>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0B0E11] relative z-20 border-t border-white/5" id="process">
<div className="max-w-[1400px] mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20 relative">

<div className="order-2 lg:order-1 relative">
<div className="sticky top-32 w-full aspect-square max-h-[60vh] bg-[#0F1216] border border-white/5 rounded-2xl overflow-hidden flex items-center justify-center p-10 group shadow-2xl">

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

<div className="relative w-48 h-48 border border-accent/30 rounded-full flex items-center justify-center z-10 shadow-[0_0_80px_rgba(0,229,255,0.1)] backdrop-blur-md">
<div className="absolute inset-0 rounded-full border-t border-accent animate-spin-slow"></div>
<div className="w-32 h-32 bg-gradient-to-tr from-accent to-purple-600 rounded-full opacity-20 animate-pulse"></div>
<div className="absolute text-white font-mono text-xs tracking-widest bg-[#0B0E11] px-2 py-1 border border-white/10 rounded">BUILDING...</div>
</div>
</div>
</div>

<div className="order-1 lg:order-2 py-20 pb-0">
<span className="text-accent font-mono text-xs tracking-widest block mb-10">/// THE PIPELINE</span>
<div className="step-item mb-40 opacity-30 transition-opacity duration-500">
<div className="font-mono text-accent/50 text-sm mb-2">01</div>
<h3 className="text-3xl font-display font-semibold mb-4 text-white">Discovery &amp; Strategy</h3>
<p className="text-lg text-gray-400 leading-relaxed font-light">
                            We dig deep into your business model. Who are you targeting? What are your revenue goals? We map out the user journey before writing a single line of code.
                        </p>
</div>
<div className="step-item mb-40 opacity-30 transition-opacity duration-500">
<div className="font-mono text-accent/50 text-sm mb-2">02</div>
<h3 className="text-3xl font-display font-semibold mb-4 text-white">High-Fidelity Design</h3>
<p className="text-lg text-gray-400 leading-relaxed font-light">
                            Visuals that validate your premium positioning. We create interactive prototypes in Figma, ensuring the aesthetics align with your conversion goals.
                        </p>
</div>
<div className="step-item mb-40 opacity-30 transition-opacity duration-500">
<div className="font-mono text-accent/50 text-sm mb-2">03</div>
<h3 className="text-3xl font-display font-semibold mb-4 text-white">Development &amp; SEO</h3>
<p className="text-lg text-gray-400 leading-relaxed font-light">
                            Clean, semantic code. Whether it's WordPress/Divi or a custom stack, we build for speed (Core Web Vitals) and Google discoverability from day one.
                        </p>
</div>
<div className="step-item opacity-30 transition-opacity duration-500">
<div className="font-mono text-accent/50 text-sm mb-2">04</div>
<h3 className="text-3xl font-display font-semibold mb-4 text-white">Launch &amp; Optimization</h3>
<p className="text-lg text-gray-400 leading-relaxed font-light">
                            We don't just hand over the keys. We configure analytics, test forms, and ensure your site is ready to scale traffic immediately.
                        </p>
</div>
<div className="h-40"></div>
</div>
</div>
</div>
</section>

<section className="skew-target py-32 px-6 bg-[#0B0E11] relative z-20" id="work">
<div className="max-w-7xl mx-auto">
<h2 className="font-display font-semibold text-4xl text-white mb-16">Selected Works</h2>
<div className="space-y-32">

<div className="group relative grid grid-cols-1 md:grid-cols-12 gap-8 items-center cursor-pointer">
<div className="md:col-span-7 relative rounded-xl overflow-hidden aspect-[16/10] border border-white/10">
<div className="absolute inset-0 bg-gray-800 transition-transform duration-700 group-hover:scale-105">

<div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
<span className="font-display font-bold text-4xl text-white/5 group-hover:text-white/10 transition-colors">FINTECH_UI</span>
</div>
</div>
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
</div>
<div className="md:col-span-5 md:pl-10">
<div className="flex gap-2 mb-4">
<span className="px-2 py-1 border border-white/10 rounded text-[10px] font-mono text-gray-400 uppercase">Fintech</span>
<span className="px-2 py-1 border border-white/10 rounded text-[10px] font-mono text-gray-400 uppercase">React</span>
</div>
<h3 className="text-3xl font-display font-bold text-white mb-4 group-hover:text-accent transition-colors">Nova Financial</h3>
<p className="text-gray-400 mb-6 text-sm leading-relaxed">Redesigned the core dashboard and landing page for a Series B startup. Resulted in a 40% increase in signup conversion.</p>
<span className="inline-flex items-center text-accent text-xs font-bold uppercase tracking-widest">
                            Read Case Study 
                            <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
</div>
</div>

<div className="group relative grid grid-cols-1 md:grid-cols-12 gap-8 items-center cursor-pointer">
<div className="md:col-span-7 md:order-2 relative rounded-xl overflow-hidden aspect-[16/10] border border-white/10">
<div className="absolute inset-0 bg-gray-800 transition-transform duration-700 group-hover:scale-105">
<div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
<span className="font-display font-bold text-4xl text-white/5 group-hover:text-white/10 transition-colors">ECOM_STORE</span>
</div>
</div>
</div>
<div className="md:col-span-5 md:pr-10 md:order-1 text-right md:text-left">
<div className="flex gap-2 mb-4 justify-end md:justify-start">
<span className="px-2 py-1 border border-white/10 rounded text-[10px] font-mono text-gray-400 uppercase">E-Commerce</span>
<span className="px-2 py-1 border border-white/10 rounded text-[10px] font-mono text-gray-400 uppercase">Shopify</span>
</div>
<h3 className="text-3xl font-display font-bold text-white mb-4 group-hover:text-accent transition-colors">Aura Wear</h3>
<p className="text-gray-400 mb-6 text-sm leading-relaxed">Complete Shopify overhaul with custom liquid development. Page load speed reduced by 2.4s.</p>
<span className="inline-flex items-center text-accent text-xs font-bold uppercase tracking-widest">
                            Read Case Study 
                            <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
</div>
</div>
</div>
</div>
</section>

<section className="skew-target py-32 px-6 bg-[#0B0E11] relative z-20 border-t border-white/5" id="pricing">
<div className="max-w-7xl mx-auto">
<h2 className="font-display font-semibold text-4xl text-white text-center mb-6 scramble-text">Investment</h2>
<p className="text-center text-gray-400 max-w-xl mx-auto mb-16 text-sm">Transparent pricing. No hidden fees. Just ROI.</p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="border border-white/10 p-8 rounded-2xl hover:bg-white/5 transition-colors hover-trigger spotlight-card glass-panel flex flex-col">
<div className="font-mono text-xs text-gray-500 mb-4 z-10 relative">/ STARTER</div>
<div className="text-3xl font-bold text-white mb-2 z-10 relative">Growth</div>
<p className="text-xs text-gray-400 mb-6 font-mono h-10">Perfect for service businesses &amp; consultants.</p>
<ul className="space-y-4 text-sm text-gray-300 mb-8 font-mono z-10 relative flex-grow">
<li className="flex gap-3"><span className="text-accent">✓</span> Custom 5-Page Design</li>
<li className="flex gap-3"><span className="text-accent">✓</span> CMS Integration</li>
<li className="flex gap-3"><span className="text-accent">✓</span> Basic SEO Setup</li>
<li className="flex gap-3"><span className="text-accent">✓</span> Mobile Responsive</li>
</ul>
<a className="w-full py-3 border border-white/20 rounded font-bold uppercase text-xs tracking-wider text-white hover:bg-white hover:text-black transition-all z-10 relative text-center" href="#contact">Get Quote</a>
</div>

<div className="border border-accent bg-[#0F1216] p-8 rounded-2xl relative hover-trigger transform md:-translate-y-4 shadow-[0_0_30px_rgba(0,229,255,0.1)] spotlight-card flex flex-col">
<div className="absolute top-0 right-0 bg-accent text-black text-[10px] font-bold px-3 py-1 uppercase rounded-bl-lg z-10">Most Popular</div>
<div className="font-mono text-xs text-accent mb-4 z-10 relative">/ SCALE</div>
<div className="text-3xl font-bold text-white mb-2 z-10 relative">Business</div>
<p className="text-xs text-gray-400 mb-6 font-mono h-10">For brands ready to dominate their niche.</p>
<ul className="space-y-4 text-sm text-gray-300 mb-8 font-mono z-10 relative flex-grow">
<li className="flex gap-3"><span className="text-accent">✓</span> Up to 10 Unique Pages</li>
<li className="flex gap-3"><span className="text-accent">✓</span> Advanced SEO &amp; Schema</li>
<li className="flex gap-3"><span className="text-accent">✓</span> Speed Optimization (90+)</li>
<li className="flex gap-3"><span className="text-accent">✓</span> Conversion Strategy</li>
<li className="flex gap-3"><span className="text-accent">✓</span> 30 Days Support</li>
</ul>
<a className="w-full py-3 bg-accent text-black rounded font-bold uppercase text-xs tracking-wider hover:bg-white transition-all z-10 relative text-center" href="#contact">Start Project</a>
</div>

<div className="border border-white/10 p-8 rounded-2xl hover:bg-white/5 transition-colors hover-trigger spotlight-card glass-panel flex flex-col">
<div className="font-mono text-xs text-gray-500 mb-4 z-10 relative">/ ENTERPRISE</div>
<div className="text-3xl font-bold text-white mb-2 z-10 relative">Custom</div>
<p className="text-xs text-gray-400 mb-6 font-mono h-10">Complex applications &amp; e-commerce.</p>
<ul className="space-y-4 text-sm text-gray-300 mb-8 font-mono z-10 relative flex-grow">
<li className="flex gap-3"><span className="text-white">✓</span> Full E-Commerce Build</li>
<li className="flex gap-3"><span className="text-white">✓</span> Custom Web Apps</li>
<li className="flex gap-3"><span className="text-white">✓</span> API Integrations</li>
<li className="flex gap-3"><span className="text-white">✓</span> Priority Support</li>
</ul>
<a className="w-full py-3 border border-white/20 rounded font-bold uppercase text-xs tracking-wider text-white hover:bg-white hover:text-black transition-all z-10 relative text-center" href="#contact">Contact Sales</a>
</div>
</div>
</div>
</section>

<footer className="bg-[#050608] pt-32 pb-10 px-6 border-t border-white/10 relative overflow-hidden" id="contact">

<div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none select-none pointer-events-none opacity-[0.03]">
<span className="text-[18vw] font-display font-black text-white whitespace-nowrap -ml-10 tracking-tighter">DESIGN</span>
</div>
<div className="max-w-[1400px] mx-auto relative z-10 flex flex-col md:flex-row justify-between items-start gap-12">
<div className="md:w-1/2">
<span className="text-accent font-mono text-xs tracking-widest block mb-6">/// START A PROJECT</span>
<h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
                    Let's build a website that <br/> <span className="text-gray-500">actually makes money.</span>
</h3>
<p className="text-gray-400 mb-10 max-w-md font-light">
                    Stop losing customers to outdated design. Book a free 15-minute strategy call to discuss your goals.
                </p>
<div className="flex flex-col gap-4">
<div className="flex items-center gap-3 text-sm text-gray-300">
<svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                        hello@webdesigncult.com
                    </div>
<div className="flex items-center gap-3 text-sm text-gray-300">
<svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                        Los Angeles / London
                    </div>
</div>
</div>
<div className="md:w-1/2 w-full glass-panel p-8 rounded-2xl border border-white/10">
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<input className="bg-black/40 border border-white/10 px-4 py-3 rounded text-sm text-white focus:outline-none focus:border-accent transition-colors" placeholder="Name" type="text"/>
<input className="bg-black/40 border border-white/10 px-4 py-3 rounded text-sm text-white focus:outline-none focus:border-accent transition-colors" placeholder="Email" type="email"/>
</div>
<select className="w-full bg-black/40 border border-white/10 px-4 py-3 rounded text-sm text-gray-400 focus:outline-none focus:border-accent transition-colors appearance-none">
<option>Project Type...</option>
<option>New Website</option>
<option>Redesign</option>
<option>E-Commerce</option>
</select>
<textarea className="w-full bg-black/40 border border-white/10 px-4 py-3 rounded text-sm text-white focus:outline-none focus:border-accent transition-colors" placeholder="Tell us about your project..." rows="4"></textarea>
<button className="w-full bg-white text-black font-bold uppercase text-xs tracking-widest py-4 rounded hover:bg-accent transition-colors">
                        Send Request
                    </button>
<p className="text-[10px] text-center text-gray-600 font-mono">Usually responds within 2 hours.</p>
</form>
</div>
</div>
<div className="max-w-[1400px] mx-auto mt-20 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-600 font-mono uppercase">
<span>© 2025 WEBDESIGNCULT. ALL RIGHTS RESERVED.</span>
<div className="flex gap-6 mt-2 md:mt-0">
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
<a className="hover:text-white transition-colors" href="#">Instagram</a>
</div>
</div>
</footer>
</main>


    </>
  );
}
