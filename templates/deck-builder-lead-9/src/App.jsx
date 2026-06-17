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
accent: '#FF4D00',
surface: '#ffffff',
textMain: '#111827',
textMuted: '#4B5563',
borderLight: '#e5e7eb',
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
'dash': 'dash 20s linear infinite',
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
dash: {
to: { 'stroke-dashoffset': '1000' }
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

        const counter = document.querySelector('.counter');
        if(counter) {
            gsap.from(counter, {
                textContent: 0,
                duration: 2,
                ease: "power1.out",
                snap: { textContent: 0.1 },
                scrollTrigger: {
                    trigger: counter,
                    start: "top 85%",
                    once: true
                },
                onUpdate: function() {
                    this.targets()[0].innerHTML = parseFloat(this.targets()[0].textContent).toFixed(1) + "x";
                }
            });
        }

        const stepItems = document.querySelectorAll('.step-item');
        stepItems.forEach((item) => {
            gsap.to(item, {
                scrollTrigger: {
                    trigger: item,
                    start: "top 70%", 
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
      

<div className="noise-overlay"></div>

<nav className="fixed top-0 w-full z-50 border-b border-black/5 bg-white/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
<a className="group hover-trigger" href="#">

<span className="font-display font-bold text-xl tracking-tighter text-black group-hover:text-accent transition-colors">DECKING<span className="text-accent group-hover:text-black transition-colors">//</span>LEADS</span>
</a>
<div className="hidden md:flex gap-8 text-xs font-mono tracking-widest text-gray-500">
<a className="hover:text-black transition-colors hover-trigger" href="#systems">[01] INTEGRITY</a>
<a className="hover:text-black transition-colors hover-trigger" href="#results">[02] EXECUTION</a>
<a className="hover:text-black transition-colors hover-trigger" href="#process">[03] THE EXPERT</a>
</div>
<div className="flex items-center gap-4">
<span className="hidden lg:block text-[10px] font-mono text-gray-500 flex items-center gap-2">
<span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                    STATUS: ONLINE
                </span>
<button className="border border-black/10 px-6 py-2 text-xs font-bold uppercase tracking-wider text-black bg-white hover:bg-black hover:text-white transition-all hover-trigger btn-magnetic shadow-sm">
                    Apply For Access
                </button>
</div>
</div>
</nav>
<main>

<section className="skew-target relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden pt-20">

<div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] z-0"></div>
<div className="relative z-20 text-center max-w-5xl px-6">
<div className="inline-flex items-center gap-3 border border-accent/20 bg-accent/5 px-4 py-1.5 rounded-full mb-8 backdrop-blur-sm">
<span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
<span className="font-mono text-[10px] text-accent tracking-widest uppercase font-semibold">Deck Builder Capacity: 2 Spots Left</span>
</div>
<h1 className="font-display font-bold text-6xl md:text-9xl tracking-tighter mb-6 leading-[0.9] text-black scramble-text">
                    MARKET <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-600 to-gray-400">OF ONE</span>
</h1>
<p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-10 font-light">
                    I don't outsource. I don't guess. I don't use virtual assistants. <br className="hidden md:block"/>
                    You work directly with the expert to build the revenue infrastructure that <span className="text-black font-semibold">destroys bad results</span> and scales your deck operation.
                </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
<button className="bg-accent text-white px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-black transition-all hover-trigger w-full sm:w-auto btn-magnetic shadow-lg shadow-accent/20">
                        Work With Me
                    </button>
<button className="px-8 py-4 border border-black/10 text-black bg-white font-bold text-sm uppercase tracking-widest hover:bg-gray-50 transition-all hover-trigger w-full sm:w-auto btn-magnetic shadow-sm">
                        Verify My Reputation
                    </button>
</div>
<div className="mt-12 flex items-center justify-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center gap-2">
<span className="iconify w-4 h-4 text-black" data-icon="lucide:youtube"></span>
<span className="text-xs font-mono text-gray-500">REAL INTERVIEWS</span>
</div>
<div className="flex items-center gap-2">
<span className="iconify w-4 h-4 text-black" data-icon="lucide:search"></span>
<span className="text-xs font-mono text-gray-500">FULLY SEARCHABLE</span>
</div>
<div className="flex items-center gap-2">
<span className="iconify w-4 h-4 text-black" data-icon="lucide:shield-check"></span>
<span className="text-xs font-mono text-gray-500">100+ CONTRACTORS</span>
</div>
</div>
</div>
</section>

<div className="border-y border-black/5 bg-white py-8 relative z-20 overflow-hidden marquee-mask w-full">
<div className="flex whitespace-nowrap animate-marquee w-[max-content]">
<div className="flex gap-16 px-10 items-center">
<span className="font-display font-bold text-2xl text-gray-300 hover:text-black transition-colors">NO DIGITAL GHOSTS</span>
<span className="font-display font-bold text-2xl text-gray-300 hover:text-black transition-colors">100% INTEGRITY</span>
<span className="font-display font-bold text-2xl text-gray-300 hover:text-black transition-colors">UNCOMMON RESULTS</span>
<span className="font-display font-bold text-2xl text-gray-300 hover:text-black transition-colors">NO JUNIOR BUYERS</span>
<span className="font-display font-bold text-2xl text-gray-300 hover:text-black transition-colors">DIRECT ACCESS</span>
</div>
<div className="flex gap-16 px-10 items-center">
<span className="font-display font-bold text-2xl text-gray-300 hover:text-black transition-colors">NO DIGITAL GHOSTS</span>
<span className="font-display font-bold text-2xl text-gray-300 hover:text-black transition-colors">100% INTEGRITY</span>
<span className="font-display font-bold text-2xl text-gray-300 hover:text-black transition-colors">UNCOMMON RESULTS</span>
<span className="font-display font-bold text-2xl text-gray-300 hover:text-black transition-colors">NO JUNIOR BUYERS</span>
<span className="font-display font-bold text-2xl text-gray-300 hover:text-black transition-colors">DIRECT ACCESS</span>
</div>
</div>
</div>

<section className="skew-target py-32 px-6 relative z-20 bg-[#fafafa]" id="systems">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-black/10 pb-8">
<div>
<span className="text-accent font-mono text-xs tracking-widest block mb-2">/// THE ANTI-AGENCY</span>
<h2 className="font-display font-bold text-black text-4xl md:text-5xl scramble-text">Uncommon Growth</h2>
</div>
<div className="text-right">
<div className="flex items-center justify-end gap-2 mb-1">
<span className="w-2 h-2 bg-green-500 rounded-full animate-blink"></span>
<span className="font-mono text-xs text-black">NO OUTSOURCING</span>
</div>
<p className="text-gray-500 font-mono text-xs uppercase tracking-widest">
                            Strategy by the Expert
                        </p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 grid-rows-3 gap-6 h-auto md:h-[900px]">

<div className="md:col-span-2 md:row-span-2 glass-panel spotlight-card rounded-xl overflow-hidden relative group bg-white">
<div className="scan-line"></div>

<div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&amp;w=2072&amp;auto=format&amp;fit=crop')] bg-cover bg-center group-hover:scale-105 transition-transform duration-700 grayscale"></div>
<div className="absolute top-6 right-6 border border-black/10 bg-white/80 backdrop-blur px-3 py-1 rounded text-[10px] font-mono text-accent font-bold">VERIFIED_REAL_LEADS</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-xs space-y-2">
<div className="bg-white border border-gray-100 shadow-lg p-3 rounded flex items-center justify-between border-l-2 border-l-green-500 transform translate-x-4">
<div className="flex gap-3 items-center">
<span className="iconify text-green-500" data-icon="lucide:check-circle"></span>
<div className="text-[10px] font-mono">
<div className="text-black font-bold">New Deck Project</div>
<div className="text-gray-500">Composite - $45k Budget</div>
</div>
</div>
<span className="text-[10px] text-gray-400">Just now</span>
</div>
<div className="bg-white border border-gray-100 shadow-lg p-3 rounded flex items-center justify-between border-l-2 border-l-green-500 transform -translate-x-2">
<div className="flex gap-3 items-center">
<span className="iconify text-green-500" data-icon="lucide:check-circle"></span>
<div className="text-[10px] font-mono">
<div className="text-black font-bold">Porch Extension</div>
<div className="text-gray-500">Ready to hire</div>
</div>
</div>
<span className="text-[10px] text-gray-400">5m ago</span>
</div>
</div>
<div className="absolute bottom-0 left-0 p-8 z-10 w-full bg-gradient-to-t from-white via-white/80 to-transparent">
<div className="w-10 h-10 bg-accent flex items-center justify-center mb-4 text-white font-bold rounded-sm">
<span className="iconify w-6 h-6" data-icon="lucide:crosshair"></span>
</div>
<h3 className="font-display font-bold text-2xl text-black mb-2">Precision Targeting</h3>
<p className="text-gray-600 text-sm max-w-sm">I don't sell you "potential." I deliver homeowners in your zip code who are actively looking for custom decks.</p>
</div>
</div>

<div className="md:col-span-1 md:row-span-1 glass-panel spotlight-card rounded-xl p-6 flex flex-col justify-between bg-white">
<div className="flex justify-between items-start">
<span className="font-mono text-[10px] text-gray-500 uppercase">Client Average</span>
<span className="iconify text-green-500 w-4 h-4" data-icon="lucide:trending-up"></span>
</div>
<div className="text-center py-2">
<div className="text-4xl font-display font-bold text-black counter" data-target="14.2">14.2x</div>
<div className="text-[10px] text-gray-500 mt-1">Verified ROAS</div>
</div>
</div>

<div className="md:col-span-1 md:row-span-1 glass-panel spotlight-card rounded-xl p-6 flex flex-col justify-between overflow-hidden bg-white">
<div className="flex items-center gap-2 text-black mb-2">
<span className="iconify w-4 h-4" data-icon="lucide:lock"></span>
<span className="font-display font-bold text-sm">True Exclusivity</span>
</div>
<div className="relative h-12 flex items-center justify-center">
<div className="border border-green-500/30 bg-green-50 text-green-700 px-3 py-1 rounded text-xs font-mono tracking-wider font-bold">
                                1 OWNER / LEAD
                            </div>
</div>
<div className="text-[10px] text-gray-400 mt-2 text-center">
                            Zero competition. I don't double sell.
                        </div>
</div>

<div className="md:col-span-1 md:row-span-1 glass-panel spotlight-card rounded-xl p-6 flex flex-col justify-between bg-white">
<div className="flex justify-between items-center mb-2">
<span className="font-mono text-[10px] text-gray-500 uppercase">Growth</span>
<span className="iconify text-black w-4 h-4" data-icon="lucide:calendar-check"></span>
</div>
<div className="flex-grow flex items-center">
<div className="w-full bg-gray-100 h-16 rounded flex items-end px-1 gap-1">
<div className="w-1/5 bg-accent/20 h-[30%] rounded-sm"></div>
<div className="w-1/5 bg-accent/40 h-[50%] rounded-sm"></div>
<div className="w-1/5 bg-accent/60 h-[45%] rounded-sm"></div>
<div className="w-1/5 bg-accent/80 h-[70%] rounded-sm"></div>
<div className="w-1/5 bg-accent h-[90%] rounded-sm"></div>
</div>
</div>
<div className="text-right text-[10px] text-black font-mono mt-2 font-bold">+124% MoM</div>
</div>

<div className="md:col-span-1 md:row-span-1 glass-panel spotlight-card rounded-xl p-6 relative overflow-hidden group bg-white">
<div className="absolute inset-0 bg-red-50 z-0"></div>
<div className="relative z-10 flex flex-col h-full justify-between">
<div className="flex justify-between items-start">
<span className="font-display font-bold text-sm text-black">Spam Destruction</span>
<div className="w-2 h-2 rounded-full bg-red-500 animate-pulse-fast"></div>
</div>
<div className="font-mono text-[10px] text-red-800/70">
<div>&gt; BLOCKING SOLICITORS...</div>
<div>&gt; FILTERING TIRE KICKERS</div>
<div>&gt; QUALITY: 99%</div>
</div>
</div>
</div>

<div className="md:col-span-2 md:row-span-1 glass-panel spotlight-card rounded-xl p-8 flex items-center justify-between hover-trigger bg-black group">
<div>
<h3 className="font-display font-bold text-xl text-white mb-2">Direct Hand-Holding</h3>
<p className="text-gray-400 text-xs font-mono">I monitor your campaigns personally.</p>
</div>
<div className="flex flex-col gap-1.5 w-40">
<div className="flex justify-between text-[8px] text-gray-500 font-mono mb-1">
<span>RESPONSE TIME</span>
<span>INSTANT</span>
</div>
<div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-accent to-yellow-500 w-[100%] rounded-full"></div>
</div>
</div>
</div>

<div className="md:col-span-2 md:row-span-1 glass-panel spotlight-card rounded-xl p-6 relative overflow-hidden flex flex-col justify-center bg-white">
<div className="absolute inset-0 dot-grid opacity-30"></div>
<div className="flex justify-between items-center mb-2 z-10 absolute top-6 left-6 right-6">
<span className="font-display font-bold text-black text-lg">Territory Domination</span>
<span className="text-accent text-xs font-mono border border-accent/30 px-2 py-0.5 rounded bg-accent/5 font-bold">EXPANDING</span>
</div>
<div className="relative w-full h-full z-0 mt-8 opacity-60">

<div className="absolute top-[30%] left-[20%] w-1.5 h-1.5 bg-black rounded-full animate-pulse shadow-[0_0_10px_black]"></div>
<div className="absolute top-[40%] right-[30%] w-1.5 h-1.5 bg-black rounded-full animate-pulse delay-100 shadow-[0_0_10px_black]"></div>
<div className="absolute top-[60%] left-[40%] w-1.5 h-1.5 bg-black rounded-full animate-pulse delay-200 shadow-[0_0_10px_black]"></div>
<svg className="absolute inset-0 w-full h-full" style={{pointerEvents: 'none'}}>
<circle cx="50%" cy="50%" fill="none" r="80" stroke="rgba(0, 0, 0, 0.1)" strokeWidth="1"></circle>
<circle cx="50%" cy="50%" fill="none" r="120" stroke="rgba(0, 0, 0, 0.05)" strokeWidth="1"></circle>
</svg>
</div>
</div>
</div>
</div>
</section>

<section className="skew-target py-24 bg-white border-t border-black/5 relative z-20" id="results">
<div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<span className="text-accent font-mono text-xs tracking-widest block mb-4">/// NO BLACK BOXES</span>
<h2 className="font-display font-bold text-4xl md:text-5xl mb-6 text-black scramble-text">Total Transparency</h2>
<p className="text-gray-600 text-lg mb-8 leading-relaxed">
                        Those "other guys" hide behind digital smoke screens. They promise the world and deliver a bill. I build systems you can see, touch, and verify. <br/><br/>
                        This isn't copy-paste marketing. This is custom engineering for the 1% of deck builders who are serious about scaling.
                    </p>
<div className="space-y-6">
<div className="group flex gap-4 p-4 border border-transparent hover:border-black/5 rounded-lg transition-all cursor-pointer hover-trigger bg-gray-50">
<div className="font-mono text-gray-400 text-sm group-hover:text-accent font-bold">01</div>
<div>
<h4 className="font-bold text-black">Built By The Expert</h4>
<p className="text-sm text-gray-500">I don't hand you off to a $3/hr VA.</p>
</div>
</div>
<div className="group flex gap-4 p-4 border border-transparent hover:border-black/5 rounded-lg transition-all cursor-pointer hover-trigger bg-gray-50">
<div className="font-mono text-gray-400 text-sm group-hover:text-accent font-bold">02</div>
<div>
<h4 className="font-bold text-black">Guaranteed Integrity</h4>
<p className="text-sm text-gray-500">I take responsibility. I fix problems. I deliver.</p>
</div>
</div>
</div>
</div>
<div className="relative group hover-trigger">
<div className="absolute -inset-1 bg-gradient-to-r from-accent to-orange-300 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>

<div className="relative bg-white border border-gray-200 rounded-lg p-6 font-mono text-sm shadow-xl overflow-hidden min-h-[300px]">
<div className="flex gap-2 mb-6 border-b border-gray-100 pb-4">
<div className="w-3 h-3 rounded-full bg-red-400"></div>
<div className="w-3 h-3 rounded-full bg-yellow-400"></div>
<div className="w-3 h-3 rounded-full bg-green-400"></div>
</div>
<div className="text-gray-800">
<span className="text-purple-600 font-bold">function</span> <span className="text-blue-600">Scale_Operation</span>(partner):<br/>
                              <span className="text-gray-400 italic"># Only working with established businesses</span><br/>
                              <span className="text-purple-600 font-bold">if</span> partner.is_expert <span className="text-purple-600 font-bold">and</span> partner.integrity:<br/>
<br/>
                                <span className="text-gray-400 italic"># 1. Direct implementation by Me</span><br/>
                                Launch_Campaigns(<br/>
                                  strategy=<span className="text-green-600">"UNCOMMON_RESULTS"</span>,<br/>
                                  manager=<span className="text-green-600">"ME_DIRECTLY"</span><br/>
                                )<br/>
<br/>
                                <span className="text-gray-400 italic"># 2. Bridge the Trust Gap</span><br/>
                                Build_Authority(status=<span className="text-green-600">"MARKET_LEADER"</span>)<br/>
<br/>
                                <span className="text-purple-600 font-bold">return</span> <span className="text-green-600">"DOMINATION_MODE"</span>
</div>
<div className="mt-2 text-accent animate-pulse font-bold">_</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#fafafa] relative z-20 border-t border-black/5" id="process">
<div className="max-w-[1400px] mx-auto px-6">

<div className="grid grid-cols-1 lg:grid-cols-2 gap-20 relative">

<div className="order-2 lg:order-1 relative">

<div className="sticky top-24 w-full aspect-square max-h-[60vh] bg-white border border-gray-200 rounded-2xl overflow-hidden flex items-center justify-center p-10 group shadow-2xl">

<div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:20px_20px]"></div>

<div className="relative w-40 h-40 border border-accent rounded-full flex items-center justify-center z-10 shadow-[0_0_50px_rgba(255,77,0,0.2)] bg-white/50 backdrop-blur-sm">
<div className="w-32 h-32 bg-accent/10 rounded-full animate-pulse"></div>
<div className="absolute text-black font-mono text-xs tracking-widest text-center font-bold">
                                    THE<br/>SYSTEM
                                </div>
</div>

<div className="absolute w-[70%] h-[70%] border border-black/5 rounded-full animate-spin-slow">
<div className="w-12 h-12 bg-white border border-gray-200 shadow-md rounded-full absolute -top-6 left-1/2 -translate-x-1/2 flex items-center justify-center">
<span className="iconify text-black" data-icon="lucide:crown"></span>
</div>
</div>
<div className="absolute w-[90%] h-[90%] border border-black/5 rounded-full animate-reverse-spin">
<div className="w-10 h-10 bg-accent rounded-full absolute -top-5 left-1/2 -translate-x-1/2 flex items-center justify-center text-white">
<span className="iconify" data-icon="lucide:dollar-sign"></span>
</div>
</div>
</div>
</div>

<div className="order-1 lg:order-2 py-20 pb-0">
<span className="text-accent font-mono text-xs tracking-widest block mb-10">/// THE PIPELINE</span>
<div className="step-item mb-48 opacity-30 transition-opacity duration-500">
<h3 className="text-4xl font-display font-bold mb-4 text-black">01. Brainwashing Content</h3>
<p className="text-xl text-gray-600 leading-relaxed font-light">
                                We don't just run ads. We create a content ecosystem that positions you as the ONLY option in your market. We systematically manufacture trust before they even call.
                            </p>
</div>
<div className="step-item mb-48 opacity-30 transition-opacity duration-500">
<h3 className="text-4xl font-display font-bold mb-4 text-black">02. The Trust Gap</h3>
<p className="text-xl text-gray-600 leading-relaxed font-light">
                                While your competitors are chasing cheap leads, we target the "1%ers" – homeowners looking for experts. We bridge the gap between their need and your expertise.
                            </p>
</div>
<div className="step-item opacity-30 transition-opacity duration-500">
<h3 className="text-4xl font-display font-bold mb-4 text-black">03. Handled By Me</h3>
<p className="text-xl text-gray-600 leading-relaxed font-light">
                                No junior media buyers. No VAs. I oversee the machine that feeds your business. You get uncommon dedication for uncommon results.
                            </p>
</div>

<div className="h-40"></div>
</div>
</div>
</div>
</section>

<section className="skew-target py-32 px-6 bg-white relative z-20 border-t border-black/5" id="pricing">
<div className="max-w-7xl mx-auto">
<h2 className="font-display font-bold text-4xl text-black text-center mb-16 scramble-text">Partner Access</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="border border-gray-200 p-8 rounded-2xl hover:bg-gray-50 transition-colors hover-trigger spotlight-card glass-panel bg-white">
<div className="font-mono text-xs text-gray-500 mb-4 z-10 relative">/ ESTABLISHED</div>
<div className="text-3xl font-bold text-black mb-6 z-10 relative">Access<span className="text-sm font-normal text-gray-400">/mo</span></div>
<p className="text-xs text-gray-500 mb-6 font-mono z-10 relative">For decks builders ready to scale.</p>
<ul className="space-y-4 text-sm text-gray-600 mb-8 font-mono z-10 relative">
<li className="flex gap-3"><span className="iconify text-black" data-icon="lucide:check"></span> Strategy by Me</li>
<li className="flex gap-3"><span className="iconify text-black" data-icon="lucide:check"></span> 20 Exclusive Projects</li>
<li className="flex gap-3"><span className="iconify text-black" data-icon="lucide:check"></span> Reputation Verification</li>
</ul>
<button className="w-full py-3 border border-black/20 rounded font-bold uppercase text-xs tracking-wider text-black hover:bg-black hover:text-white transition-all z-10 relative">Apply Now</button>
</div>

<div className="border border-accent bg-black p-8 rounded-2xl relative hover-trigger transform md:-translate-y-4 shadow-[0_10px_40px_rgba(0,0,0,0.2)] spotlight-card">
<div className="absolute top-0 right-0 bg-accent text-white text-[10px] font-bold px-3 py-1 uppercase rounded-bl-lg z-10">Most Common</div>
<div className="font-mono text-xs text-accent mb-4 z-10 relative">/ MARKET LEADER</div>
<div className="text-3xl font-bold text-white mb-6 z-10 relative">Partner<span className="text-sm font-normal text-gray-500">/mo</span></div>
<p className="text-xs text-gray-400 mb-6 font-mono z-10 relative">Total domination of your territory.</p>
<ul className="space-y-4 text-sm text-gray-300 mb-8 font-mono z-10 relative">
<li className="flex gap-3"><span className="iconify text-accent" data-icon="lucide:check"></span> Direct Access to Me</li>
<li className="flex gap-3"><span className="iconify text-accent" data-icon="lucide:check"></span> Unlimited Volume</li>
<li className="flex gap-3"><span className="iconify text-accent" data-icon="lucide:check"></span> "Trust Gap" Content</li>
<li className="flex gap-3"><span className="iconify text-accent" data-icon="lucide:check"></span> Personal Cell Access</li>
</ul>
<button className="w-full py-3 bg-accent text-white rounded font-bold uppercase text-xs tracking-wider hover:bg-white hover:text-black transition-all z-10 relative">Book Interview</button>
</div>

<div className="border border-gray-200 p-8 rounded-2xl hover:bg-gray-50 transition-colors hover-trigger spotlight-card glass-panel bg-white">
<div className="font-mono text-xs text-gray-500 mb-4 z-10 relative">/ CATEGORY KING</div>
<div className="text-3xl font-bold text-black mb-6 z-10 relative">Monopoly</div>
<p className="text-xs text-gray-500 mb-6 font-mono z-10 relative">Multi-territory expansion.</p>
<ul className="space-y-4 text-sm text-gray-600 mb-8 font-mono z-10 relative">
<li className="flex gap-3"><span className="iconify text-black" data-icon="lucide:check"></span> Full System Install</li>
<li className="flex gap-3"><span className="iconify text-black" data-icon="lucide:check"></span> Sales Team Training</li>
<li className="flex gap-3"><span className="iconify text-black" data-icon="lucide:check"></span> White Glove Service</li>
</ul>
<button className="w-full py-3 border border-black/20 rounded font-bold uppercase text-xs tracking-wider text-black hover:bg-black hover:text-white transition-all z-10 relative">Contact Me</button>
</div>
</div>
</div>
</section>

<footer className="bg-black pt-32 pb-10 px-6 border-t border-white/10 relative overflow-hidden">
<div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none select-none pointer-events-none opacity-20">
<span className="text-[20vw] font-display font-black text-white whitespace-nowrap -ml-10">TRUST</span>
</div>
<div className="max-w-[1400px] mx-auto relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
<div>
<h3 className="text-2xl font-display font-bold text-white mb-6">Are you a 1%er? Let's talk.</h3>
<div className="flex gap-4">
<input className="bg-white/10 border border-white/10 px-4 py-3 rounded text-sm w-64 focus:outline-none focus:border-accent text-white placeholder-gray-500" placeholder="partner@deckingleads.com" type="email"/>
<button className="bg-accent text-white px-6 py-3 rounded font-bold text-sm hover:bg-white hover:text-black transition-colors">AUDIT ME</button>
</div>
</div>
<div className="flex gap-12 text-sm text-gray-500 font-mono tracking-wider uppercase">
<div className="flex flex-col gap-3">
<span className="text-white">Proof</span>
<a className="hover:text-accent transition-colors" href="#">Client Interviews</a>
<a className="hover:text-accent transition-colors" href="#">My Story</a>
<a className="hover:text-accent transition-colors" href="#">No Ghosts</a>
</div>
<div className="flex flex-col gap-3">
<span className="text-white">Legal</span>
<a className="hover:text-accent transition-colors" href="#">Terms</a>
<a className="hover:text-accent transition-colors" href="#">Privacy</a>
</div>
</div>
</div>
<div className="max-w-[1400px] mx-auto mt-20 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-600 font-mono uppercase">
<span>© 2025 DECKINGLEADS.COM. SEARCHABLE. ACCOUNTABLE. REAL.</span>
<span className="mt-2 md:mt-0">NEW YORK / AUSTIN / LONDON</span>
</div>
</footer>
</main>


    </>
  );
}
