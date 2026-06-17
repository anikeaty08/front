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
colors: {
obsidian: '#0a0a0a',
volcanic: '#171717',
gold: '#FFB84D',
amber: '#FFA500',
sandstone: '#D4AF37',
slate: '#64748b',
danger: '#DC2626',
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
backgroundImage: {
'gradient-mesh': 'radial-gradient(circle at 50% 0%, rgba(255,184,77,0.15), transparent 60%)',
'card-shine': 'linear-gradient(45deg, transparent 25%, rgba(255,255,255,0.03) 50%, transparent 75%)',
'noise': 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' opacity=\'0.05\'/%3E%3C/svg%3E")',
},
animation: {
'fade-in': 'fadeIn 0.8s ease-out forwards',
'blur-in': 'blurIn 1s ease-out forwards',
'float': 'float 6s ease-in-out infinite',
'pulse-glow': 'pulseGlow 3s infinite',
'scan': 'scan 2s linear infinite',
'marquee': 'marquee 40s linear infinite',
'cursor-blink': 'cursorBlink 1s step-end infinite',
},
keyframes: {
fadeIn: { '0%': { opacity: '0', transform: 'translateY(10px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
blurIn: { '0%': { filter: 'blur(20px)', opacity: '0', transform: 'translateY(30px)' }, '100%': { filter: 'blur(0)', opacity: '1', transform: 'translateY(0)' } },
float: { '0%, 100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } },
pulseGlow: { '0%, 100%': { boxShadow: '0 0 0px rgba(255,184,77,0)' }, '50%': { boxShadow: '0 0 20px rgba(255,184,77,0.3)' } },
scan: { '0%': { top: '0%' }, '100%': { top: '100%' } },
marquee: { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
cursorBlink: { '0%, 100%': { opacity: '1' }, '50%': { opacity: '0' } }
}
}
}
}



        // --- 1. PRELOADER & INIT ---
        window.addEventListener('load', () => {
            setTimeout(() => {
                document.getElementById('preloader').style.opacity = '0';
                document.getElementById('preloader').style.visibility = 'hidden';
            }, 1500);
            
            typeWriter(); // Start typing effect
            initParticles(); // Start particles
        });

        // --- 2. ROUTING LOGIC ---
        function router(viewName) {
            const appLayout = document.getElementById('app-layout');
            const marketingNav = document.getElementById('marketing-nav');
            const appContainer = document.getElementById('app-container');
            const landingView = document.getElementById('view-landing');

            // Reset views
            document.querySelectorAll('.view-section').forEach(el => el.style.display = 'none');
            
            if (['dashboard', 'onboarding'].includes(viewName)) {
                if(viewName === 'dashboard') {
                    appLayout.classList.remove('hidden');
                    marketingNav.style.display = 'none';
                    appContainer.style.paddingTop = '0';
                    document.getElementById('view-dashboard').style.display = 'block';
                } else {
                    appLayout.classList.add('hidden');
                    marketingNav.style.display = 'flex';
                    const target = document.getElementById(`view-${viewName}`);
                    if(target) target.style.display = 'block';
                }
            } else {
                // Landing Page
                appLayout.classList.add('hidden');
                marketingNav.style.display = 'flex';
                appContainer.style.paddingTop = '6rem';
                landingView.style.display = 'block';
                landingView.classList.add('active');
            }
            window.scrollTo(0,0);
        }

        function startScanning() {
            document.getElementById('onboarding-step-1').style.display = 'none';
            document.getElementById('onboarding-step-2').classList.remove('hidden');
            setTimeout(() => router('dashboard'), 3500);
        }

        // --- 3. TYPING EFFECT ---
        const textToType = "30-40% of dev time wasted on docs, meetings, status updates";
        const typingElement = document.getElementById('typing-text');
        let typeIndex = 0;

        function typeWriter() {
            if (typeIndex < textToType.length) {
                typingElement.innerHTML += textToType.charAt(typeIndex);
                typeIndex++;
                setTimeout(typeWriter, 40);
            }
        }

        // --- 4. SCROLL & PARALLAX ENGINE ---
        const heroBg = document.getElementById('hero-bg-parallax');
        const scrollProgress = document.getElementById('scroll-progress');
        const featureTrack = document.getElementById('feature-track');
        const featureContainer = document.getElementById('feature-container');
        const problem1 = document.getElementById('problem-1');
        const problem2 = document.getElementById('problem-2');
        const problem3 = document.getElementById('problem-3');

        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            const winHeight = window.innerHeight;
            const docHeight = document.body.scrollHeight - winHeight;

            // 1. Scroll Progress Bar
            const percent = (scrollY / docHeight) * 100;
            if(scrollProgress) scrollProgress.style.width = percent + '%';

            // 2. Hero Parallax
            if (scrollY < winHeight && heroBg) {
                heroBg.style.transform = `translateY(${scrollY * 0.3}px)`;
            }

            // 3. Problem Wall "Slam" Effect
            if(problem1) {
                const triggerPoint = winHeight * 0.8;
                const problemTop = problem1.getBoundingClientRect().top;
                if(problemTop < triggerPoint) {
                    problem1.style.transform = 'translateX(0)';
                    problem1.style.opacity = '1';
                    problem2.style.transform = 'translateX(0)';
                    problem2.style.opacity = '1';
                    problem3.style.transform = 'scale(1)';
                    problem3.style.opacity = '1';
                }
            }

            // 4. Horizontal Scroll (Sticky Logic)
            if (featureContainer && featureTrack && window.innerWidth > 768) {
                const offsetTop = featureContainer.offsetTop;
                const containerHeight = featureContainer.offsetHeight;
                
                if (scrollY >= offsetTop && scrollY <= (offsetTop + containerHeight - winHeight)) {
                    const percentage = (scrollY - offsetTop) / (containerHeight - winHeight);
                    // Move track left based on percentage
                    // Track width is approx 3 screens + gaps. We want to move roughly -200vw or more
                    const moveAmount = percentage * (featureTrack.scrollWidth - window.innerWidth);
                    featureTrack.style.transform = `translateX(-${moveAmount}px)`;
                }
            }
        });

        // --- 5. 3D TILT EFFECT ---
        document.querySelectorAll('.tilt-card').forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = ((y - centerY) / centerY) * -10; // Max -10deg to 10deg
                const rotateY = ((x - centerX) / centerX) * 10;

                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
            });
        });

        // --- 6. ANIMATED COUNTERS ---
        const observerOptions = { threshold: 0.5 };
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counters = entry.target.querySelectorAll('.stat-counter');
                    counters.forEach(counter => {
                        const target = +counter.getAttribute('data-target');
                        const duration = 2000; 
                        const stepTime = Math.abs(Math.floor(duration / target));
                        let current = 0;
                        const timer = setInterval(() => {
                            current += Math.ceil(target / 50);
                            if (current > target) current = target;
                            counter.innerText = current;
                            if (current == target) clearInterval(timer);
                        }, 30);
                    });
                    statsObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);

        const statsSection = document.getElementById('stats-section');
        if(statsSection) statsObserver.observe(statsSection);

        // --- 7. AMBIENT PARTICLES ---
        function initParticles() {
            const container = document.getElementById('particles');
            const particleCount = 30;
            
            for(let i=0; i<particleCount; i++) {
                const div = document.createElement('div');
                const size = Math.random() * 2 + 1;
                div.style.width = size + 'px';
                div.style.height = size + 'px';
                div.style.background = '#FFB84D';
                div.style.position = 'absolute';
                div.style.borderRadius = '50%';
                div.style.left = Math.random() * 100 + 'vw';
                div.style.top = Math.random() * 100 + 'vh';
                div.style.opacity = Math.random() * 0.5;
                div.style.animation = `float ${Math.random() * 10 + 10}s infinite linear`;
                container.appendChild(div);
            }
        }

        // Spotlight
        const spotlight = document.getElementById('spotlight');
        document.addEventListener('mousemove', (e) => {
            spotlight.style.setProperty('--x', e.clientX + 'px');
            spotlight.style.setProperty('--y', e.clientY + 'px');
        });

        router('landing'); // Init
    
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
      

<div className="fixed top-0 left-0 h-[2px] bg-gold z-[100] transition-all duration-100 w-0" id="scroll-progress"></div>

<div className="spotlight-overlay fixed inset-0 w-full h-full mix-blend-screen" id="spotlight" style={{'--x': '50%', '--y': '50%'}}></div>

<div className="fixed inset-0 bg-obsidian z-[9999] flex items-center justify-center" id="preloader">
<div className="loader-dot w-2 h-2 bg-gold rounded-full box-content border-2 border-gold/50 shadow-[0_0_20px_rgba(255,184,77,0.8)]"></div>
<div className="absolute opacity-0 animate-[fadeIn_0.5s_ease-out_0.3s_forwards]">
<svg className="w-16 h-16 text-gold" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M12 2L2 22h20L12 2zm0 4l6.5 13h-13L12 6z" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</div>
</div>

<div className="fixed inset-0 pointer-events-none z-0 opacity-40" id="particles"></div>

<nav className="fixed top-0 w-full z-50 glass border-b border-white/5 h-20 transition-all duration-300" id="marketing-nav" style={{display: 'flex'}}>
<div className="max-w-7xl mx-auto px-8 w-full h-full flex items-center justify-between">

<div className="flex items-center gap-2 cursor-pointer group relative" onclick="router('landing')">
<span className="text-gold font-mono font-bold tracking-tighter text-lg hover:text-white transition-colors">ORYXA</span>

<div className="relative group/tooltip">
<svg className="text-gray-600 hover:text-gold transition-colors w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
<div className="absolute left-full top-1/2 -translate-y-1/2 ml-3 w-64 bg-volcanic/95 backdrop-blur-xl border border-gold/30 p-4 rounded-xl opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all duration-300 transform translate-x-2 group-hover/tooltip:translate-x-0 shadow-2xl z-50 pointer-events-none">
<div className="text-xs text-gold font-mono mb-2 uppercase tracking-widest">Origin</div>
<p className="text-xs text-gray-300 leading-relaxed">
                            Named after the Oryx—a desert antelope with extraordinary awareness. Just as the Oryx survives harsh environments through keen perception, Oryxa helps your team navigate complex codebases.
                        </p>
</div>
</div>
</div>

<div className="hidden md:flex items-center gap-10 text-sm font-medium text-gray-400">
<a className="hover:text-white transition-colors" href="#" onclick="router('landing')">Product</a>
<a className="hover:text-white transition-colors" href="#" onclick="router('pricing')">Pricing</a>
<a className="hover:text-white transition-colors" href="#">Docs</a>
</div>

<div className="flex items-center gap-6">
<button className="text-xs font-medium text-gray-400 hover:text-white transition-colors" onclick="router('dashboard')">Log in</button>
<button className="bg-white/5 hover:bg-white/10 text-white text-xs font-medium px-5 py-2.5 rounded-full border border-white/10 transition-all hover:border-gold/30 hover:shadow-[0_0_15px_rgba(255,184,77,0.15)]" onclick="router('onboarding')">
                    Start Trial
                </button>
</div>
</div>
</nav>

<main className="relative pt-24 min-h-screen" id="app-container" style={{paddingTop: '6rem'}}>

<section className="view-section" id="view-landing" style={{display: 'none'}}>

<div className="relative min-h-[calc(100vh-6rem)] flex flex-col justify-center overflow-hidden">

<div className="absolute inset-0 w-full h-[120%] -top-[10%] bg-gradient-mesh opacity-30 blur-[100px] pointer-events-none transition-transform duration-100 ease-linear" id="hero-bg-parallax"></div>
<div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 w-full text-center pb-20">

<p className="text-gold/80 font-mono text-sm mb-6 animate-fade-in opacity-0" style={{animationDelay: '1.4s'}}>For development teams drowning in context chaos</p>

<h1 className="text-5xl md:text-7xl lg:text-9xl font-semibold tracking-tighter leading-[0.9] text-white mb-8">
<div className="overflow-hidden">
<span className="block animate-blur-in opacity-0" style={{animationDelay: '1.5s'}}>Your Codebase.</span>
</div>
<div className="overflow-hidden">
<span className="block animate-blur-in text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500 opacity-0" style={{animationDelay: '1.7s'}}>Supercharged by AI.</span>
</div>
</h1>

<div className="h-20 md:h-12 mb-12 flex justify-center items-center">
<p className="text-lg md:text-xl text-gray-400 font-mono max-w-3xl mx-auto leading-relaxed">
<span className="text-gold mr-2">&gt;</span><span id="typing-text"></span><span className="animate-cursor-blink text-gold">_</span>
</p>
</div>

<div className="flex flex-col md:flex-row items-center justify-center gap-6 animate-fade-in opacity-0" style={{animationDelay: '2.2s'}}>
<button className="group relative px-8 py-4 bg-gold text-obsidian font-bold rounded-full transition-all hover:w-[280px] w-[240px] hover:shadow-[0_0_60px_rgba(255,184,77,0.4)] overflow-hidden flex items-center justify-center gap-2" id="magnetic-btn" onclick="router('onboarding')">
<span className="relative z-10 flex items-center gap-2 group-hover:-translate-y-[2px] transition-transform">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5c.08-1.25-.27-2.48-1-3.5c.28-1.15.28-2.35 0-3.5c0 0-1 0-3 1.5c-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5c-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                                Connect GitHub
                            </span>
<span className="absolute right-6 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-4 transition-all duration-300">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</button>
<button className="px-8 py-4 rounded-full border border-white/20 text-white font-medium hover:bg-white/5 transition-all group flex items-center gap-3">
<div className="w-6 h-6 rounded-full border border-white/30 flex items-center justify-center group-hover:border-gold group-hover:text-gold transition-colors relative">
<svg className="group-hover:animate-pulse" fill="currentColor" height="10" stroke="none" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
<svg className="absolute inset-0 w-full h-full -rotate-90 opacity-0 group-hover:opacity-100 transition-opacity" viewbox="0 0 36 36"><path className="stroke-gold fill-none stroke-[2]" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" style={{strokeDasharray: '100, 100', strokeDashoffset: '0', transition: 'stroke-dashoffset 1s ease-in-out'}}></path></svg>
</div>
                            Watch 60s Demo
                        </button>
</div>

<div className="mt-16 text-center animate-fade-in opacity-0" style={{animationDelay: '2.5s'}}>
<p className="text-xs text-gray-500 font-mono tracking-widest uppercase mb-4">SOC 2 Compliant • Used by 2,000+ Teams</p>
<div className="flex justify-center gap-1 opacity-50">
<div className="w-px h-8 bg-gradient-to-b from-transparent via-gray-700 to-transparent"></div>
</div>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in opacity-0" style={{animationDelay: '3s'}}>
<div className="w-5 h-8 border border-gray-500 rounded-full flex justify-center pt-1">
<div className="w-1 h-2 bg-gold rounded-full animate-bounce"></div>
</div>
</div>
</div>

<div className="py-32 bg-obsidian relative overflow-hidden border-t border-white/5">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">

<div className="flex flex-col md:flex-row items-center gap-8 mb-32 opacity-20 transition-all duration-700 transform translate-x-[-100px]" id="problem-1">
<div className="text-[80px]">😰</div>
<div>
<h3 className="text-3xl text-white font-medium mb-2">"Developers lose 20% of their day to context switching"</h3>
<p className="text-sm text-gray-500 font-mono">Source: Carnegie Mellon Study</p>
</div>
</div>

<div className="flex flex-col md:flex-row-reverse items-center gap-8 mb-32 opacity-20 transition-all duration-700 transform translate-x-[100px] text-right" id="problem-2">
<div className="text-[80px]">📉</div>
<div>
<h3 className="text-3xl text-white font-medium mb-2">"60% of project delays caused by miscommunication"</h3>
<p className="text-sm text-gray-500 font-mono">Source: Tech-Clarity Report</p>
</div>
</div>

<div className="text-center opacity-0 scale-90 transition-all duration-700 delay-200" id="problem-3">
<h2 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600 tracking-tighter">Your tools shouldn't<br/>fight each other.</h2>
</div>
</div>
</div>


<div className="relative hidden md:block h-[400vh] bg-obsidian" id="feature-container">
<div className="sticky top-0 h-screen overflow-hidden flex items-center">
<div className="flex gap-20 px-20 will-change-transform" id="feature-track">

<div className="w-[80vw] h-[80vh] flex-shrink-0 glass-card rounded-3xl p-12 flex items-center gap-12 relative overflow-hidden border-l-4 border-gold">
<div className="absolute inset-0 bg-gradient-mesh opacity-10"></div>
<div className="flex-1 z-10">
<div className="text-gold font-mono text-xs mb-4">01 — INTELLIGENCE</div>
<h3 className="text-5xl text-white font-medium mb-6 tracking-tight">Meetings that write code.</h3>
<p className="text-xl text-gray-400 leading-relaxed">Turn messy audio into clean linear tickets and code comments instantly. No more lost context.</p>
</div>
<div className="flex-1 h-full bg-black/40 rounded-xl border border-white/10 p-6 font-mono text-xs text-gray-400 relative">
<div className="absolute top-4 right-4 text-gold animate-pulse">● REC</div>
<div className="mb-4 text-white">Manager: "Let's deprecate the v1 auth endpoint."</div>
<div className="pl-4 border-l border-gold/50 text-gold">
<span className="opacity-50">// Oryxa Suggestion:</span><br/>
                                    @deprecated Use /v2/auth instead<br/>
                                    app.get('/v1/auth', ...)
                                </div>
</div>
</div>

<div className="w-[80vw] h-[80vh] flex-shrink-0 glass-card rounded-3xl p-12 flex items-center gap-12 relative overflow-hidden">
<div className="flex-1 z-10">
<div className="text-gold font-mono text-xs mb-4">02 — DISCOVERY</div>
<h3 className="text-5xl text-white font-medium mb-6 tracking-tight">Stop grepping.<br/>Start asking.</h3>
<p className="text-xl text-gray-400 leading-relaxed">Ask questions like "Where do we handle OAuth?" and get answers mapped across 10,000 files.</p>
</div>
<div className="flex-1 h-full flex flex-col justify-center">
<div className="bg-volcanic border border-white/10 rounded-lg p-4 mb-4 shadow-2xl">
<div className="flex gap-2 text-white mb-2">
<svg fill="none" height="20" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
                                        Where is the user session validation logic?
                                    </div>
</div>
<div className="space-y-2 pl-8">
<div className="bg-white/5 p-3 rounded border-l-2 border-gold text-xs font-mono text-gray-300">
                                        src/lib/auth.ts <span className="text-gray-500 float-right">Line 42</span>
</div>
<div className="bg-white/5 p-3 rounded border-l-2 border-white/10 text-xs font-mono text-gray-300">
                                        src/middleware/session.js <span className="text-gray-500 float-right">Line 15</span>
</div>
</div>
</div>
</div>

<div className="w-[80vw] h-[80vh] flex-shrink-0 glass-card rounded-3xl p-12 flex items-center gap-12 relative overflow-hidden">
<div className="flex-1 z-10">
<div className="text-gold font-mono text-xs mb-4">03 — RELIABILITY</div>
<h3 className="text-5xl text-white font-medium mb-6 tracking-tight">100% Coverage.<br/>Zero Effort.</h3>
<p className="text-xl text-gray-400 leading-relaxed">Oryxa watches your source code and automatically generates unit and integration tests before CI runs.</p>
</div>
<div className="flex-1 h-full bg-black/40 rounded-xl border border-white/10 relative overflow-hidden flex items-center justify-center">
<div className="absolute inset-0 bg-gold/5 animate-pulse"></div>
<div className="text-center">
<div className="text-6xl font-bold text-white mb-2">100%</div>
<div className="text-gold font-mono text-sm">TEST COVERAGE</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="md:hidden py-20 px-6 space-y-20 bg-obsidian">
<div>
<div className="text-gold font-mono text-xs mb-2">01 — INTELLIGENCE</div>
<h3 className="text-3xl text-white font-medium mb-4">Meetings that write code.</h3>
<div className="glass-card p-6 rounded-xl h-64 border-l-2 border-gold relative">
<p className="text-gray-400 text-sm">Auto-generating linear tickets from Zoom transcripts...</p>
</div>
</div>
<div>
<div className="text-gold font-mono text-xs mb-2">02 — DISCOVERY</div>
<h3 className="text-3xl text-white font-medium mb-4">Stop grepping. Start asking.</h3>
<div className="glass-card p-6 rounded-xl h-64 relative">
<p className="text-gray-400 text-sm">Natural language search across your entire repo.</p>
</div>
</div>
</div>

<div className="py-32 bg-volcanic border-y border-white/5 relative overflow-hidden" id="stats-section">
<div className="absolute inset-0 bg-gradient-mesh opacity-20"></div>
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center relative z-10">
<div>
<div className="text-6xl md:text-7xl font-bold text-white mb-2 flex justify-center items-baseline gap-1">
<span className="stat-counter" data-target="60">0</span>%
                        </div>
<div className="text-gray-400 font-medium">Less time on documentation</div>
</div>
<div>
<div className="text-6xl md:text-7xl font-bold text-white mb-2 flex justify-center items-baseline gap-1">
<span className="stat-counter" data-target="2">0</span>s
                        </div>
<div className="text-gray-400 font-medium">Average query response</div>
</div>
<div>
<div className="text-6xl md:text-7xl font-bold text-white mb-2 flex justify-center items-baseline gap-1">
<span className="stat-counter" data-target="10000">0</span>+
                        </div>
<div className="text-gray-400 font-medium">Files indexed per project</div>
</div>
</div>
<div className="text-center mt-12 text-xs text-gray-500 font-mono">Based on aggregate data from 2,000+ repositories</div>
</div>

<div className="py-32 bg-obsidian overflow-hidden">
<div className="max-w-7xl mx-auto px-6 mb-20 text-center">
<h2 className="text-4xl md:text-5xl font-medium text-white mb-6">Trusted by teams who ship fast</h2>
</div>

<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 perspective-1000">

<div className="tilt-card glass-card p-8 rounded-2xl group cursor-default">
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 rounded-full bg-gray-700 overflow-hidden">
<img alt="Avatar" className="w-full h-full" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"/>
</div>
<div>
<div className="text-white font-medium">Sarah Chen</div>
<div className="text-xs text-gray-500">Eng Manager @ Vercel-like</div>
</div>
</div>
<p className="text-gray-300 leading-relaxed">"Oryxa cut our documentation time by 40%. Our junior devs can onboard in days, not weeks. It feels like magic."</p>
<div className="mt-6 flex text-gold gap-1">
<svg fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
</div>
</div>

<div className="tilt-card glass-card p-8 rounded-2xl group cursor-default border border-gold/20 shadow-[0_0_30px_rgba(255,184,77,0.05)] transform translate-z-10">
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 rounded-full bg-gray-700 overflow-hidden">
<img alt="Avatar" className="w-full h-full" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus"/>
</div>
<div>
<div className="text-white font-medium">Marcus Johnson</div>
<div className="text-xs text-gray-500">CTO @ B2B SaaS</div>
</div>
</div>
<p className="text-gray-300 leading-relaxed">"The meeting → code linking is black magic. We finally have a single source of truth for every decision."</p>
<div className="mt-6 flex text-gold gap-1">
<svg fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
</div>
</div>

<div className="tilt-card glass-card p-8 rounded-2xl group cursor-default">
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 rounded-full bg-gray-700 overflow-hidden">
<img alt="Avatar" className="w-full h-full" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Priya"/>
</div>
<div>
<div className="text-white font-medium">Priya Sharma</div>
<div className="text-xs text-gray-500">DevOps Lead @ Unicorn</div>
</div>
</div>
<p className="text-gray-300 leading-relaxed">"ROI was obvious in week one. Oryxa paid for itself before the trial ended."</p>
<div className="mt-6 flex text-gold gap-1">
<svg fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
</div>
</div>
</div>

<div className="relative w-full overflow-hidden border-t border-b border-white/5 py-10 bg-volcanic/30">
<div className="flex gap-20 animate-marquee whitespace-nowrap opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">

<span className="text-2xl font-bold tracking-tighter">VERCEL</span>
<span className="text-2xl font-bold tracking-tighter">LINEAR</span>
<span className="text-2xl font-bold tracking-tighter">STRIPE</span>
<span className="text-2xl font-bold tracking-tighter">REPLIT</span>
<span className="text-2xl font-bold tracking-tighter">SUPABASE</span>
<span className="text-2xl font-bold tracking-tighter">CURSOR</span>
<span className="text-2xl font-bold tracking-tighter">WINDSURF</span>
<span className="text-2xl font-bold tracking-tighter">VERCEL</span>
<span className="text-2xl font-bold tracking-tighter">LINEAR</span>
<span className="text-2xl font-bold tracking-tighter">STRIPE</span>
<span className="text-2xl font-bold tracking-tighter">REPLIT</span>
<span className="text-2xl font-bold tracking-tighter">SUPABASE</span>
<span className="text-2xl font-bold tracking-tighter">CURSOR</span>
<span className="text-2xl font-bold tracking-tighter">WINDSURF</span>
</div>
</div>
</div>

<div className="py-32 bg-obsidian max-w-4xl mx-auto px-6">
<h2 className="text-center text-4xl text-white font-medium mb-16">The Workflow</h2>
<div className="relative">

<div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2"></div>

<div className="space-y-24">
<div className="relative flex items-center justify-between">
<div className="w-5/12 text-right">
<h3 className="text-xl text-white font-medium">Connect Repo</h3>
<p className="text-sm text-gray-500">GitHub, GitLab or Bitbucket</p>
</div>
<div className="absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-obsidian border border-gold/50 flex items-center justify-center text-gold z-10 shadow-[0_0_15px_rgba(255,184,77,0.3)]">1</div>
<div className="w-5/12"></div>
</div>
<div className="relative flex items-center justify-between">
<div className="w-5/12"></div>
<div className="absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-obsidian border border-white/20 flex items-center justify-center text-gray-400 z-10">2</div>
<div className="w-5/12 text-left">
<h3 className="text-xl text-white font-medium">AI Analysis</h3>
<p className="text-sm text-gray-500">AST parsing &amp; meeting transcription</p>
</div>
</div>
<div className="relative flex items-center justify-between">
<div className="w-5/12 text-right">
<h3 className="text-xl text-white font-medium">Ask &amp; Automate</h3>
<p className="text-sm text-gray-500">Natural language queries</p>
</div>
<div className="absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-obsidian border border-white/20 flex items-center justify-center text-gray-400 z-10">3</div>
<div className="w-5/12"></div>
</div>
</div>
</div>
</div>

<div className="min-h-[60vh] flex flex-col md:flex-row border-t border-white/5 relative">

<div className="flex-1 bg-obsidian flex flex-col justify-center p-12 md:p-20 relative z-10">
<h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">Stop wrestling with<br/>scattered tools.</h2>
<p className="text-xl text-gray-400 mb-10">Start shipping faster.</p>

<div className="flex gap-6 text-xs text-gray-500 font-mono">
<span className="flex items-center gap-2"><svg fill="none" height="14" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg> SOC 2 Type II</span>
<span className="flex items-center gap-2"><svg fill="none" height="14" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg> End-to-End Encrypted</span>
</div>
</div>

<div className="flex-1 bg-gradient-to-br from-volcanic to-obsidian flex flex-col justify-center items-center p-12 relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-mesh opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>

<button className="relative z-10 bg-gold hover:bg-white text-obsidian text-xl font-bold py-5 px-12 rounded-full transition-all hover:scale-105 shadow-[0_0_40px_rgba(255,184,77,0.3)]" onclick="router('onboarding')">
                        Start Free Trial →
                    </button>
<div className="mt-6 text-sm text-gray-500 flex flex-col items-center gap-2">
<span>✓ No credit card required</span>
<span>✓ 2-minute GitHub OAuth setup</span>
</div>
</div>
</div>
</section>

<section className="view-section" id="view-onboarding" style={{display: 'none'}}>
<div className="min-h-[80vh] flex flex-col items-center justify-center max-w-2xl mx-auto px-6 relative">

<div className="w-full text-center transition-all duration-500" id="onboarding-step-1">
<div className="mb-8 inline-block p-4 rounded-2xl bg-white/5 border border-white/10">
<svg fill="none" height="24" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5c.08-1.25-.27-2.48-1-3.5c.28-1.15.28-2.35 0-3.5c0 0-1 0-3 1.5c-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5c-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
</div>
<h2 className="text-3xl font-medium text-white mb-2">Let's connect your code</h2>
<p className="text-gray-400 mb-10">Paste a repository URL to begin the indexing process.</p>
<div className="relative group">
<input className="w-full bg-volcanic border border-white/10 rounded-xl px-6 py-5 text-white placeholder-gray-600 focus:outline-none focus:border-gold/50 transition-all text-lg shadow-2xl" placeholder="https://github.com/username/repo" type="text"/>
<div className="absolute right-3 top-3">
<button className="bg-white text-black px-6 py-2 rounded-lg font-medium text-sm hover:bg-gray-200 transition-colors" onclick="startScanning()">Import</button>
</div>
</div>
</div>

<div className="w-full hidden" id="onboarding-step-2">
<div className="font-mono text-xs text-gold mb-2">INITIALIZING ORYX SCANNER...</div>
<div className="w-full bg-white/5 rounded-lg h-64 p-4 overflow-hidden relative border border-white/10 font-mono text-sm leading-relaxed">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-obsidian z-10"></div>
<div className="text-gray-500 opacity-50 blur-[0.5px]">
                            src/components/Button.tsx analyzed<br/>src/utils/helpers.js parsing AST...<br/>lib/auth/provider.ts [SECURE]<br/>api/routes/user.ts indexing...
                        </div>
<div className="absolute bottom-0 left-0 w-full h-1 bg-white/10">
<div className="h-full bg-gold animate-[width_2s_ease-in-out_forwards] w-0" style={{width: '100%'}}></div>
</div>
</div>
</div>
</div>
</section>

<div className="hidden min-h-screen flex" id="app-layout">

<aside className="w-64 border-r border-white/5 bg-volcanic/30 hidden md:flex flex-col fixed h-full z-40 backdrop-blur-xl">
<div className="h-20 flex items-center px-6 border-b border-white/5">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
<span className="text-xs font-medium text-gray-300 tracking-wide">ORYX ACTIVE</span>
</div>
</div>
<div className="p-4 space-y-1">
<button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all group" data-nav="dashboard" onclick="router('dashboard')">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="7" width="7" x="3" y="3"></rect><rect height="7" width="7" x="14" y="3"></rect><rect height="7" width="7" x="14" y="14"></rect><rect height="7" width="7" x="3" y="14"></rect></svg> Dashboard
                    </button>

</div>
</aside>

<div className="flex-1 md:ml-64 bg-obsidian min-h-screen p-8" id="view-dashboard">
<h1 className="text-white text-2xl">Dashboard</h1>
<p className="text-gray-400">Welcome to Mission Control.</p>
</div>
</div>
</main>



    </>
  );
}
