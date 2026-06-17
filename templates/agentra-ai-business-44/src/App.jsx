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



// Configure Tailwind
tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Manrope', 'sans-serif'],
display: ['Space Grotesk', 'sans-serif'],
}
}
}
};



        // 1. LIGHTER SMOOTH SCROLL CONFIG
        const lenis = new Lenis({
            duration: 0.8,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            mouseMultiplier: 0.8,
            smoothTouch: false,
            touchMultiplier: 2,
        })

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)

        // Connect GSAP to Lenis
        gsap.registerPlugin(ScrollTrigger);
        
        // 2. Custom Cursor Logic (Only on Desktop)
        if (window.matchMedia("(pointer: fine)").matches) {
            const cursor = document.getElementById('cursor');
            const hoverTriggers = document.querySelectorAll('.hover-trigger');
            const viewTriggers = document.querySelectorAll('.view-trigger');

            document.addEventListener('mousemove', (e) => {
                cursor.style.left = e.clientX + 'px';
                cursor.style.top = e.clientY + 'px';
            });

            hoverTriggers.forEach(el => {
                el.addEventListener('mouseenter', () => cursor.classList.add('hovered'));
                el.addEventListener('mouseleave', () => cursor.classList.remove('hovered'));
            });

            viewTriggers.forEach(el => {
                el.addEventListener('mouseenter', () => cursor.classList.add('view-cursor'));
                el.addEventListener('mouseleave', () => cursor.classList.remove('view-cursor'));
            });
        }

        // 3. CANVAS ANIMATION
        const canvas = document.getElementById('hero-canvas');
        const ctx = canvas.getContext('2d');
        let width, height;
        let streams = [];
        const gap = 40; 

        class Stream {
            constructor(x) {
                this.x = x;
                this.y = Math.random() * height;
                this.speed = Math.random() * 2 + 0.5;
                this.length = Math.random() * 100 + 50;
                this.opacity = Math.random() * 0.3 + 0.05;
            }
            update(mouseY) {
                this.y -= this.speed;
                if (this.y + this.length < 0) {
                    this.y = height + Math.random() * 100;
                    this.speed = Math.random() * 2 + 0.5;
                }
            }
            draw(ctx) {
                ctx.strokeStyle = `rgba(255, 255, 255, 0.03)`;
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(this.x, 0);
                ctx.lineTo(this.x, height);
                ctx.stroke();

                const gradient = ctx.createLinearGradient(this.x, this.y, this.x, this.y + this.length);
                gradient.addColorStop(0, `rgba(255, 255, 255, 0)`);
                gradient.addColorStop(0.5, `rgba(255, 255, 255, ${this.opacity})`);
                gradient.addColorStop(1, `rgba(255, 255, 255, 0)`);

                ctx.fillStyle = gradient;
                ctx.fillRect(this.x - 1, this.y, 3, this.length);
            }
        }

        function initCanvas() {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
            streams = [];
            for (let x = gap / 2; x < width; x += gap) {
                streams.push(new Stream(x));
            }
        }

        function animateCanvas() {
            ctx.clearRect(0, 0, width, height);
            streams.forEach(s => {
                s.update();
                s.draw(ctx);
            });
            requestAnimationFrame(animateCanvas);
        }

        window.addEventListener('resize', initCanvas);
        initCanvas();
        animateCanvas();

        // 4. Hero Text Mask Animation
        const headings = document.querySelectorAll('.mask-text span');
        headings.forEach((h, i) => {
            gsap.to(h, {
                y: 0,
                duration: 1.2,
                ease: "power3.out",
                delay: i * 0.1
            });
        });

        gsap.to(".animate-fade-in", { opacity: 1, duration: 1, delay: 0.5 });
        gsap.to(".animate-fade-up", { opacity: 1, y: 0, duration: 1, delay: 0.8, ease: "power2.out", stagger: 0.2 });

        // 5. 3D Card Tilt
        if (window.matchMedia("(hover: hover)").matches) {
            const cards3d = document.querySelectorAll('.card-3d-wrap');
            cards3d.forEach(card => {
                card.addEventListener('mousemove', (e) => {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    const rotateX = ((y - centerY) / centerY) * -5; // Subtle tilt
                    const rotateY = ((x - centerX) / centerX) * 5;

                    const inner = card.querySelector('.card-3d-inner');
                    inner.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                });

                card.addEventListener('mouseleave', () => {
                    const inner = card.querySelector('.card-3d-inner');
                    inner.style.transform = `rotateX(0deg) rotateY(0deg)`;
                });
            });
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
      

<div className="video-background-container fixed top-0 w-full h-full -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}>
<video autoplay="" className="w-full h-full object-cover opacity-50" loop="" muted="" playsinline="" src="https://drive.google.com/file/d/121QJWC0zeFW1IjL1vLchKsb1Ax1EHpCA/view?usp=sharing"></video>
</div>
<div className="fixed top-0 w-full h-full -z-10 bg-black/40"></div>

<div id="cursor"></div>

<nav className="fixed transition-transform duration-300 z-50 pt-4 px-4 md:pt-6 md:px-6 top-0 right-0 left-0" id="navbar">
<div className="flex flex-col glass max-w-[1600px] rounded-[24px] md:rounded-full mr-auto ml-auto px-4 py-3 md:px-8 items-center justify-between transition-all duration-300">
<div className="flex w-full items-center justify-between">
<a className="flex items-center gap-3 group hover-trigger" href="#">
<div className="flex overflow-hidden bg-center text-black bg-white w-8 h-8 md:w-9 md:h-9 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8bb0d554-8131-4079-a0d6-89e7a16208c0_320w.png)] max-w-full bg-cover rounded-sm scale-100 items-center justify-center border border-white/20">
</div>
<span className="text-base md:text-xl font-semibold text-white tracking-tight font-display text-left">Agentra<span className="font-light text-yellow-500"> AI</span></span>
</a>

<div className="hidden md:flex items-center gap-12">
<a className="text-xs font-semibold uppercase tracking-widest transition-colors hover-trigger hover:text-white text-white/70" href="#services">Services</a>
<a className="uppercase transition-colors hover-trigger hover:text-white text-xs font-semibold text-white/70 tracking-widest" href="#how-it-works">Process</a>
<a className="uppercase transition-colors hover-trigger hover:text-white text-xs font-semibold text-white/70 tracking-widest" href="#testimonials">Stories</a>
<a className="uppercase transition-colors hover-trigger hover:text-white text-xs font-semibold text-white/70 tracking-widest" href="#contact">Contact</a>
</div>

<div className="flex items-center gap-4">
<button className="hidden md:block uppercase transition-colors hover-trigger hover:bg-yellow-300 cursor-pointer text-xs font-bold text-black tracking-wider bg-yellow-500 rounded-full px-6 py-3 shadow-[0_0_20px_rgba(234,179,8,0.3)]" onclick="window.location.href='https://calendly.com/alialarabid/30min'" role="button">Start your AI revolution</button>

<button className="md:hidden text-white hover:text-yellow-500" onclick="document.querySelector('.mobile-menu').classList.toggle('hidden'); document.querySelector('.mobile-menu').classList.toggle('flex');">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="3" x2="21" y1="6" y2="6"></line><line x1="3" x2="21" y1="12" y2="12"></line><line x1="3" x2="21" y1="18" y2="18"></line></svg>
</button>
</div>
</div>

<div className="mobile-menu hidden w-full flex-col gap-6 pt-6 pb-4 border-t border-white/10 mt-4 md:hidden animate-fade-in bg-black/50 rounded-b-xl backdrop-blur-xl">
<div className="flex flex-col gap-4 items-center">
<a className="text-sm font-medium uppercase tracking-widest text-white/80 hover:text-white w-full text-center py-3 border-b border-white/5" href="#services" onclick="this.closest('.mobile-menu').classList.add('hidden'); this.closest('.mobile-menu').classList.remove('flex');">Services</a>
<a className="text-sm font-medium uppercase tracking-widest text-white/80 hover:text-white w-full text-center py-3 border-b border-white/5" href="#how-it-works" onclick="this.closest('.mobile-menu').classList.add('hidden'); this.closest('.mobile-menu').classList.remove('flex');">Process</a>
<a className="text-sm font-medium uppercase tracking-widest text-white/80 hover:text-white w-full text-center py-3 border-b border-white/5" href="#testimonials" onclick="this.closest('.mobile-menu').classList.add('hidden'); this.closest('.mobile-menu').classList.remove('flex');">Stories</a>
<a className="text-sm font-medium uppercase tracking-widest text-white/80 hover:text-white w-full text-center py-3" href="#contact" onclick="this.closest('.mobile-menu').classList.add('hidden'); this.closest('.mobile-menu').classList.remove('flex');">Contact</a>
</div>
<button className="w-full uppercase transition-colors hover:bg-yellow-300 cursor-pointer text-xs font-bold text-black tracking-wider bg-yellow-500 rounded-full py-4 mt-2" onclick="window.location.href='https://calendly.com/alialarabid/30min'">Start your AI revolution</button>
</div>
</div>
</nav>

<section className="min-h-[100dvh] flex flex-col overflow-hidden z-10 md:px-6 pr-4 pl-4 relative items-center justify-center">

<canvas className="pointer-events-none z-0 opacity-40 w-full h-full absolute top-0 right-0 bottom-0 left-0" height="794" id="hero-canvas" width="1030"></canvas>
<div className="z-0 pointer-events-none bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="z-10 text-center max-w-[1400px] mr-auto ml-auto relative gap-x-12 gap-y-16 mt-20 md:mt-0">
<div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border backdrop-blur-md mb-8 md:mb-10 hover-trigger opacity-0 animate-fade-in border-white/10 bg-white/5">
<span className="w-1.5 h-1.5 rounded-full animate-pulse bg-green-500"></span>
<span className="text-[10px] uppercase font-semibold tracking-[0.2em] text-white/80">AI Agents that Answer, Qualify &amp; Book 24/7</span>
</div>
<h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[6.5rem] font-medium tracking-tighter leading-[0.95] mb-8 md:mb-10 mix-blend-difference text-white">
<span className="mask-text"><span>AI AGENTS BUILT</span></span>
<span className="mask-text"><span className="text-yellow-500">FOR REAL BUSINESS</span></span>
<span className="mask-text"><span>OUTCOMES</span></span>
</h1>
<p className="text-base md:text-xl text-white/70 text-center max-w-2xl mx-auto mb-10 opacity-0 animate-fade-up font-light">
                Website chatbots, AI receptionists, and voice agents that respond instantly, qualify leads, and book meetings automatically.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-6 opacity-0 animate-fade-up">
<button className="w-full md:w-auto uppercase transition-all hover:bg-yellow-300 hover:scale-105 cursor-pointer text-sm font-bold text-black tracking-wider bg-yellow-500 rounded-full px-8 py-4 shadow-[0_0_30px_rgba(234,179,8,0.4)]" onclick="window.location.href='https://calendly.com/alialarabid/30min'">
                    Start your AI revolution
                </button>
</div>

<div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 mt-10 opacity-0 animate-fade-up" style={{animationDelay: '0.2s'}}>
<div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm">
<svg className="text-green-500" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span className="text-xs font-semibold uppercase tracking-wider text-white">Live in 14 days</span>
</div>
<div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm">
<svg className="text-green-500" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span className="text-xs font-semibold uppercase tracking-wider text-white">English + Arabic</span>
</div>
<div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm">
<svg className="text-green-500" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span className="text-xs font-semibold uppercase tracking-wider text-white">CRM &amp; WhatsApp Ready</span>
</div>
</div>
</div>
</section>

<section className="py-12 bg-[#050505] border-y border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
<div className="text-center px-4 py-4">
<div className="text-3xl md:text-5xl font-display font-bold text-white mb-2">60%</div>
<div className="text-sm font-mono text-yellow-500 uppercase tracking-widest">Faster Response Time</div>
</div>
<div className="text-center px-4 py-4">
<div className="text-3xl md:text-5xl font-display font-bold text-white mb-2">24/7</div>
<div className="text-sm font-mono text-yellow-500 uppercase tracking-widest">Lead Capture</div>
</div>
<div className="text-center px-4 py-4">
<div className="text-3xl md:text-5xl font-display font-bold text-white mb-2">0</div>
<div className="text-sm font-mono text-yellow-500 uppercase tracking-widest">Missed Calls</div>
</div>
</div>
</div>
</section>

<section className="z-10 bg-[#030303] pt-24 px-4 md:px-6 pb-20 relative" id="services">
<div className="max-w-7xl mr-auto ml-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
<div>
<h2 className="md:text-5xl lg:text-6xl text-4xl font-medium text-white tracking-tight font-display mb-4">Our Services</h2>
<p className="text-base md:text-lg text-white/60 max-w-md">We engineer AI-driven systems that automate execution and scale operations.</p>
</div>
<button className="uppercase transition-colors hover:bg-white hover:text-black border border-white/20 text-xs font-bold text-white tracking-wider rounded-full px-6 py-3" onclick="window.location.href='https://calendly.com/alialarabid/30min'">
                    Book Consultation
                </button>
</div>
<div className="flex flex-col gap-16 md:gap-24">

<div className="card-3d-wrap group h-auto w-full cursor-pointer hover-trigger">
<div className="card-3d-inner relative w-full h-full border rounded-3xl p-6 md:p-12 flex flex-col md:flex-row gap-8 md:gap-16 bg-noise default border-white/10 items-center bg-[#080808]">

<div className="card-element relative w-full md:w-1/2 h-64 md:h-80 border bg-[#030303] rounded-2xl overflow-hidden flex items-center justify-center border-white/10 shadow-2xl">

<div className="absolute inset-4 bg-[#0a0a0a] rounded-xl border border-white/5 flex flex-col overflow-hidden">
<div className="h-10 border-b border-white/5 bg-white/5 flex items-center px-4 gap-2">
<div className="w-2 h-2 rounded-full bg-red-500/50"></div>
<div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
<div className="w-2 h-2 rounded-full bg-green-500/50"></div>
<div className="ml-auto text-[10px] text-white/30 font-mono">AI_Support_Agent_v2</div>
</div>
<div className="flex-1 p-4 flex flex-col gap-3">
<div className="self-start max-w-[80%] p-3 rounded-2xl rounded-tl-none bg-white/10 text-xs text-white/80">
                                        Hi! I see you're looking at our pricing. How can I help you choose the right plan?
                                    </div>
<div className="self-end max-w-[80%] p-3 rounded-2xl rounded-tr-none bg-yellow-500/20 text-yellow-500 text-xs border border-yellow-500/20">
                                        Do you have enterprise options?
                                    </div>
<div className="self-start max-w-[80%] p-3 rounded-2xl rounded-tl-none bg-white/10 text-xs text-white/80 flex gap-2 items-center">
<div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                                        Yes! Our enterprise tier includes custom integrations...
                                    </div>
</div>
</div>
</div>

<div className="card-element md:w-1/2">
<h3 className="text-2xl md:text-4xl font-medium text-white font-display mb-4 tracking-tight">Website AI Chatbot</h3>
<p className="text-white/70 text-base md:text-lg mb-6 leading-relaxed">Answers FAQs, recommends products, captures leads, and supports customers 24/7. Never miss a visitor again.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-yellow-500">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    Product guidance &amp; Support
                                </li>
<li className="flex items-center gap-3 text-sm text-yellow-500">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    Direct CRM Integration
                                </li>
<li className="flex items-center gap-3 text-sm text-yellow-500">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    Lead Capture Forms
                                </li>
</ul>
<button className="bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-colors" onclick="window.location.href='https://calendly.com/alialarabid/30min'">
                                Start Revolution
                            </button>
</div>
</div>
</div>

<div className="card-3d-wrap group h-auto w-full cursor-pointer hover-trigger">
<div className="card-3d-inner relative w-full h-full border rounded-3xl p-6 md:p-12 flex flex-col md:flex-row-reverse gap-8 md:gap-16 bg-noise default border-white/10 items-center bg-[#080808]">

<div className="card-element relative w-full md:w-1/2 h-64 md:h-80 border bg-[#030303] rounded-2xl overflow-hidden flex items-center justify-center border-white/10 shadow-2xl">

<div className="absolute inset-0 flex items-center justify-center gap-1">
<div className="w-1.5 h-12 bg-yellow-500 rounded-full animate-[pulse_1s_ease-in-out_infinite]"></div>
<div className="w-1.5 h-20 bg-yellow-500 rounded-full animate-[pulse_1.2s_ease-in-out_infinite]"></div>
<div className="w-1.5 h-10 bg-yellow-500 rounded-full animate-[pulse_0.8s_ease-in-out_infinite]"></div>
<div className="w-1.5 h-24 bg-yellow-500 rounded-full animate-[pulse_1.5s_ease-in-out_infinite]"></div>
<div className="w-1.5 h-14 bg-yellow-500 rounded-full animate-[pulse_1.1s_ease-in-out_infinite]"></div>
</div>
<div className="absolute bottom-6 left-6 right-6 p-3 bg-white/5 border border-white/10 rounded-xl backdrop-blur-md flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
</div>
<div className="flex-1">
<div className="text-[10px] text-white/50 uppercase tracking-widest">Incoming Call</div>
<div className="text-xs text-white font-mono">Agentra Voice Assistant</div>
</div>
<div className="text-xs text-white font-mono">00:42</div>
</div>
</div>

<div className="card-element md:w-1/2">
<h3 className="text-2xl md:text-4xl font-medium text-white font-display mb-4 tracking-tight">AI Receptionist / Voice</h3>
<p className="text-white/70 text-base md:text-lg mb-6 leading-relaxed">Answers calls 24/7, qualifies callers, books appointments directly to your calendar, and sends summaries.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-yellow-500">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    Appointment Booking
                                </li>
<li className="flex items-center gap-3 text-sm text-yellow-500">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    Multilingual Support
                                </li>
<li className="flex items-center gap-3 text-sm text-yellow-500">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    Instant Call Transcripts
                                </li>
</ul>
<button className="bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-colors" onclick="window.location.href='https://calendly.com/alialarabid/30min'">
                                Start Revolution
                            </button>
</div>
</div>
</div>

<div className="card-3d-wrap group h-auto w-full cursor-pointer hover-trigger">
<div className="card-3d-inner relative w-full h-full border rounded-3xl p-6 md:p-12 flex flex-col md:flex-row gap-8 md:gap-16 bg-noise default border-white/10 items-center bg-[#080808]">

<div className="card-element relative w-full md:w-1/2 h-64 md:h-80 border bg-[#030303] rounded-2xl overflow-hidden flex items-center justify-center border-white/10 shadow-2xl">
<div className="absolute inset-0 flex items-center justify-center">

<div className="relative z-10 w-16 h-16 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center border border-white/10 backdrop-blur-md">
<svg className="text-white" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
</div>

<div className="absolute -translate-y-20 translate-x-20 p-2 rounded-lg bg-[#25D366]/10 border border-[#25D366]/30">
<svg className="text-[#25D366]" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"></path></svg>
</div>
<div className="absolute translate-y-20 -translate-x-20 p-2 rounded-lg bg-[#E1306C]/10 border border-[#E1306C]/30">
<svg className="text-[#E1306C]" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</div>

<svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" viewbox="0 0 320 320">
<path d="M160 160 L 220 100" stroke="white" stroke-dasharray="4 4" strokeWidth="2"></path>
<path d="M160 160 L 100 220" stroke="white" stroke-dasharray="4 4" strokeWidth="2"></path>
</svg>
</div>
</div>

<div className="card-element md:w-1/2">
<h3 className="text-2xl md:text-4xl font-medium text-white font-display mb-4 tracking-tight">Instagram &amp; WhatsApp Agent</h3>
<p className="text-white/70 text-base md:text-lg mb-6 leading-relaxed">Turns DMs and comments into qualified leads and booked calls instantly. 24/7 engagement on your busiest channels.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-yellow-500">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    Auto-Replies &amp; Follow-ups
                                </li>
<li className="flex items-center gap-3 text-sm text-yellow-500">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    Lead Qualification
                                </li>
<li className="flex items-center gap-3 text-sm text-yellow-500">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    Booking Link Handoff
                                </li>
</ul>
<button className="bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-colors" onclick="window.location.href='https://calendly.com/alialarabid/30min'">
                                Start Revolution
                            </button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-black border-t border-white/5" id="how-it-works">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-display font-medium text-white mb-4">How it works</h2>
<div className="w-16 h-1 bg-yellow-500 mx-auto rounded-full"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="relative p-8 rounded-2xl bg-[#080808] border border-white/10 group hover:-translate-y-2 transition-transform duration-300">
<div className="absolute -top-4 -left-4 w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center text-black font-bold font-display text-xl shadow-lg transform rotate-3">1</div>
<h3 className="text-xl font-bold text-white mb-3 mt-2">Audit &amp; Map</h3>
<p className="text-white/60 text-sm leading-relaxed">We analyze your business, map your customer questions, and define the lead flow logic.</p>
</div>

<div className="relative p-8 rounded-2xl bg-[#080808] border border-white/10 group hover:-translate-y-2 transition-transform duration-300">
<div className="absolute -top-4 -left-4 w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center text-black font-bold font-display text-xl shadow-lg transform -rotate-2">2</div>
<h3 className="text-xl font-bold text-white mb-3 mt-2">Build &amp; Integrate</h3>
<p className="text-white/60 text-sm leading-relaxed">We build the AI agent, train its knowledge base, and connect it to your CRM and calendar.</p>
</div>

<div className="relative p-8 rounded-2xl bg-[#080808] border border-white/10 group hover:-translate-y-2 transition-transform duration-300">
<div className="absolute -top-4 -left-4 w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center text-black font-bold font-display text-xl shadow-lg transform rotate-1">3</div>
<h3 className="text-xl font-bold text-white mb-3 mt-2">Launch &amp; Optimize</h3>
<p className="text-white/60 text-sm leading-relaxed">We launch the agent, monitor conversations, improve answers, and maximize your conversions.</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-[#050505] border-t border-white/5" id="testimonials">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-display font-medium text-white mb-6">Success Stories</h2>
<p className="text-white/60">Business owners scaling with Agentra.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-8 rounded-2xl bg-[#080808] border border-white/10 flex flex-col justify-between h-full">
<p className="text-white/80 text-sm mb-6 leading-relaxed">"The AI chatbot handles 80% of our support tickets now. We wake up to qualified leads in our CRM instead of angry emails."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold">JD</div>
<div>
<div className="text-white font-medium text-sm">James D.</div>
<div className="text-yellow-500 text-xs uppercase tracking-wider">E-commerce Owner</div>
</div>
</div>
</div>

<div className="p-8 rounded-2xl bg-[#080808] border border-white/10 flex flex-col justify-between h-full">
<p className="text-white/80 text-sm mb-6 leading-relaxed">"Our missed calls used to cost us $5k a month. The Voice Agent picks up instantly, day or night, and books the appointment."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold">SK</div>
<div>
<div className="text-white font-medium text-sm">Sarah K.</div>
<div className="text-yellow-500 text-xs uppercase tracking-wider">Clinic Director</div>
</div>
</div>
</div>

<div className="p-8 rounded-2xl bg-[#080808] border border-white/10 flex flex-col justify-between h-full">
<p className="text-white/80 text-sm mb-6 leading-relaxed">"Our Instagram DMs were a mess. Now, every DM gets an instant reply and qualification. We've doubled our booking rate."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold">MR</div>
<div>
<div className="text-white font-medium text-sm">Mike R.</div>
<div className="text-yellow-500 text-xs uppercase tracking-wider">Real Estate Broker</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-black border-t border-white/5">
<div className="max-w-4xl mx-auto px-6">
<h2 className="text-3xl md:text-5xl font-display font-medium text-white mb-12 text-center">Frequently Asked Questions</h2>
<div className="space-y-4">
<details className="group bg-[#0A0A0A] border border-white/10 rounded-xl overflow-hidden cursor-pointer">
<summary className="flex justify-between items-center p-6 text-white font-medium">
                        How long does setup take?
                        <span className="text-yellow-500 transition-transform group-open:rotate-180">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><polyline points="6 9 12 15 18 9"></polyline></svg>
</span>
</summary>
<div className="px-6 pb-6 text-white/60 text-sm leading-relaxed">
                        We typically go live within 14 days after our initial audit and strategy call. This allows time for building, testing, and refining the agent.
                    </div>
</details>
<details className="group bg-[#0A0A0A] border border-white/10 rounded-xl overflow-hidden cursor-pointer">
<summary className="flex justify-between items-center p-6 text-white font-medium">
                        Can it connect to my CRM / Shopify?
                        <span className="text-yellow-500 transition-transform group-open:rotate-180">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><polyline points="6 9 12 15 18 9"></polyline></svg>
</span>
</summary>
<div className="px-6 pb-6 text-white/60 text-sm leading-relaxed">
                        Yes. We integrate with major platforms including Shopify, Salesforce, HubSpot, GoHighLevel, and Zapier to ensure seamless data flow.
                    </div>
</details>
<details className="group bg-[#0A0A0A] border border-white/10 rounded-xl overflow-hidden cursor-pointer">
<summary className="flex justify-between items-center p-6 text-white font-medium">
                        Do you support WhatsApp and Instagram?
                        <span className="text-yellow-500 transition-transform group-open:rotate-180">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><polyline points="6 9 12 15 18 9"></polyline></svg>
</span>
</summary>
<div className="px-6 pb-6 text-white/60 text-sm leading-relaxed">
                        Absolutely. Our agents can be deployed across your website, WhatsApp, Instagram DMs, and Facebook Messenger to capture leads everywhere.
                    </div>
</details>
<details className="group bg-[#0A0A0A] border border-white/10 rounded-xl overflow-hidden cursor-pointer">
<summary className="flex justify-between items-center p-6 text-white font-medium">
                        Is it multilingual (English/Arabic)?
                        <span className="text-yellow-500 transition-transform group-open:rotate-180">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><polyline points="6 9 12 15 18 9"></polyline></svg>
</span>
</summary>
<div className="px-6 pb-6 text-white/60 text-sm leading-relaxed">
                        Yes, our agents are fully capable of communicating in both English and Arabic (including various dialects) fluently.
                    </div>
</details>
<details className="group bg-[#0A0A0A] border border-white/10 rounded-xl overflow-hidden cursor-pointer">
<summary className="flex justify-between items-center p-6 text-white font-medium">
                        How do pricing and support work?
                        <span className="text-yellow-500 transition-transform group-open:rotate-180">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><polyline points="6 9 12 15 18 9"></polyline></svg>
</span>
</summary>
<div className="px-6 pb-6 text-white/60 text-sm leading-relaxed">
                        We offer a setup fee for the build and a monthly retainer for maintenance, hosting, and optimization. Book a call to get a custom quote for your needs.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-24 bg-[#050505] border-t border-white/10 relative overflow-hidden" id="contact">
<div className="absolute inset-0 bg-yellow-500/5 blur-[100px] pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
<h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">Ready to Automate?</h2>
<p className="text-white/60 text-lg mb-12 max-w-xl mx-auto">Book a 30-minute discovery call to see how AI agents can scale your business.</p>
<button className="uppercase transition-all hover:bg-yellow-300 hover:scale-105 cursor-pointer text-base font-bold text-black tracking-wider bg-yellow-500 rounded-full px-10 py-5 shadow-[0_0_40px_rgba(234,179,8,0.5)]" onclick="window.location.href='https://calendly.com/alialarabid/30min'">
                Start your AI revolution
            </button>
<div className="mt-8 text-sm text-white/40">
                Prefer email? <a className="text-white underline hover:text-yellow-500" href="mailto:hello@tryagentra.com">hello@tryagentra.com</a>
</div>
</div>
</section>

<footer className="relative overflow-hidden bg-[#050509] border-t pt-16 md:pt-24 pb-8 md:pb-12 border-white/5">
<div className="max-w-[1400px] mx-auto px-4 md:px-6 relative z-10">

<div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16 md:mb-20">

<div className="lg:col-span-1 space-y-6">
<a className="flex items-center gap-3" href="#">
<div className="flex overflow-hidden text-black bg-white w-8 h-8 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/700319bb-4971-4d91-b1bc-1343b4dd3841_320w.png)] bg-contain rounded-sm items-center justify-center">
</div>
<span className="text-lg font-bold text-white tracking-tight font-display">Agentra<span className="font-light text-yellow-500"> AI</span></span>
</a>
<p className="text-sm leading-relaxed max-w-xs text-white/50">
                        AI agents that answer, qualify, and book customers 24/7.
                    </p>
<div className="flex gap-4">

<a className="w-8 h-8 rounded bg-white/5 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-colors" href="#">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a className="w-8 h-8 rounded bg-white/5 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-colors" href="#">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a className="w-8 h-8 rounded bg-white/5 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-colors" href="#">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
</div>
</div>

<div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-8">
<div>
<h4 className="text-xs font-bold uppercase tracking-widest mb-6 text-white">Company</h4>
<ul className="space-y-4 text-sm text-white/50">
<li><a className="transition-colors hover:text-white" href="#services">Services</a></li>
<li><a className="transition-colors hover:text-white" href="#how-it-works">Process</a></li>
<li><a className="transition-colors hover:text-white" href="#testimonials">Stories</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-bold uppercase tracking-widest mb-6 text-white">Services</h4>
<ul className="space-y-4 text-sm text-white/50">
<li><a className="transition-colors hover:text-white" href="#">Web Chatbots</a></li>
<li><a className="transition-colors hover:text-white" href="#">Voice Agents</a></li>
<li><a className="transition-colors hover:text-white" href="#">Social Lead Gen</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-bold uppercase tracking-widest mb-6 text-white">Legal</h4>
<ul className="space-y-4 text-sm text-white/50">
<li><a className="transition-colors hover:text-white" href="#">Privacy</a></li>
<li><a className="transition-colors hover:text-white" href="#">Terms</a></li>
</ul>
</div>
</div>

<div className="lg:col-span-1">
<h4 className="text-xs font-bold uppercase tracking-widest mb-6 text-white">Contact</h4>
<p className="text-sm text-white/50 mb-4">hello@tryagentra.com</p>
<p className="text-[10px] text-white/30 leading-relaxed">
                        Disclaimer: We build and deploy AI agents. Results vary by industry, traffic, and implementation.
                    </p>
</div>
</div>

<div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 border-white/10">
<div className="text-[10px] uppercase text-white/30 tracking-widest text-center md:text-left">© 2025 Agentra AI. All Rights Reserved.</div>
</div>
</div>
</footer>



    </>
  );
}
