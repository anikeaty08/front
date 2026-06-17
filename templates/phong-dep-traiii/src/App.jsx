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



        // Initialize Lucide Icons
        lucide.createIcons();

        // --- 1. Text Reveal Animation ---
        const title = document.getElementById('hero-title');
        const text = title.innerText;
        title.innerHTML = '';
        // Split into lines manually based on <br> in original HTML? No, just split text.
        // Simple word split for better wrapping safety, then char split
        // We will just do char split on the whole block for the effect requested
        const chars = text.split('');
        chars.forEach((char, index) => {
            const span = document.createElement('span');
            span.textContent = char;
            span.className = 'char';
            span.style.transitionDelay = `${index * 30}ms`;
            if (char === ' ') span.style.marginRight = '0.3em';
            // Handle line break if needed, but simpler to let flex/block handle it or specific chars
            title.appendChild(span);
        });

        setTimeout(() => {
            document.querySelectorAll('.char').forEach(c => c.classList.add('revealed'));
        }, 100);


        // --- 2. Background Clip Animation ---
        const bgGrid = document.getElementById('bg-grid');
        const colCount = window.innerWidth < 768 ? 6 : 12;
        
        for (let i = 0; i < colCount; i++) {
            const col = document.createElement('div');
            col.className = 'bg-column h-full w-full border-r border-neutral-800/30 bg-gradient-to-b from-neutral-900/0 to-neutral-900/50';
            bgGrid.appendChild(col);
            
            // Staggered animation
            setTimeout(() => {
                col.classList.add('active');
            }, 100 + (i * 100));
        }

        // --- 3. Scroll Animation Observer ---
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    observer.unobserve(entry.target); // Only animate once
                }
            });
        }, observerOptions);

        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            observer.observe(el);
        });

        // --- 4. Card Rotator ---
        let currentCard = 0;
        const cards = document.querySelectorAll('.rotator-card');
        const btns = document.querySelectorAll('.feature-btn');
        
        function updateCards() {
            cards.forEach((card, index) => {
                if (index === currentCard) {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1) translateZ(0)';
                    card.style.zIndex = '10';
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.9) translateZ(0)';
                    card.style.zIndex = '0';
                }
            });

            btns.forEach((btn, index) => {
                if (index === currentCard) {
                    btn.classList.add('bg-neutral-900', 'border-neutral-800');
                    btn.classList.remove('border-transparent');
                    btn.querySelector('i').classList.remove('text-neutral-400');
                    btn.querySelector('i').classList.add('text-white');
                    btn.querySelector('h3').classList.remove('text-neutral-300');
                    btn.querySelector('h3').classList.add('text-white');
                } else {
                    btn.classList.remove('bg-neutral-900', 'border-neutral-800');
                    btn.classList.add('border-transparent');
                    btn.querySelector('i').classList.add('text-neutral-400');
                    btn.querySelector('i').classList.remove('text-white');
                    btn.querySelector('h3').classList.add('text-neutral-300');
                    btn.querySelector('h3').classList.remove('text-white');
                }
            });
        }

        function rotateTo(index) {
            currentCard = index;
            updateCards();
            // Reset interval on manual click
            clearInterval(rotatorInterval);
            rotatorInterval = setInterval(nextCard, 5000);
        }

        function nextCard() {
            currentCard = (currentCard + 1) % cards.length;
            updateCards();
        }

        function prevCard() {
            currentCard = (currentCard - 1 + cards.length) % cards.length;
            updateCards();
        }

        let rotatorInterval = setInterval(nextCard, 5000);

        // --- 5. Flashlight Effect ---
        const gridContainer = document.getElementById('flashlight-grid');
        
        gridContainer.addEventListener('mousemove', (e) => {
            const cards = document.querySelectorAll('.flashlight-card');
            
            cards.forEach(card => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
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
      

<nav className="fixed top-0 left-0 right-0 z-50 border-b border-neutral-800 bg-neutral-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 text-white tracking-tighter font-semibold text-lg">
<div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
<div className="w-2 h-2 bg-black rounded-full"></div>
</div>
                ACME
            </div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#">Product</a>
<a className="hover:text-white transition-colors" href="#">Solutions</a>
<a className="hover:text-white transition-colors" href="#">Enterprise</a>
<a className="hover:text-white transition-colors" href="#">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="text-sm font-medium hover:text-white transition-colors" href="#">Log in</a>

<button className="relative btn-beam-container group">
<div className="beam-border"></div>
<span className="relative z-10 flex items-center gap-2 bg-neutral-900 text-white px-4 py-1.5 rounded-full text-xs font-medium border border-neutral-800 transition-all hover:bg-neutral-800">
                        Get Started
                        <i className="w-3 h-3" data-lucide="arrow-right"></i>
</span>
</button>
</div>
</div>
</nav>

<header className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center items-center overflow-hidden">

<div className="absolute inset-0 grid grid-cols-6 md:grid-cols-12 gap-0 z-0 pointer-events-none opacity-20" id="bg-grid">

</div>
<div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-medium text-neutral-300 mb-8 animate-on-scroll">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                v2.0 is now available
            </div>
<h1 className="text-5xl md:text-7xl font-medium text-white tracking-tight leading-[1.1] mb-8 h-auto min-h-[120px]" id="hero-title">

                Building the future <br/> of digital interactions.
            </h1>
<p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed animate-on-scroll" style={{transitionDelay: '200ms'}}>
                Seamlessly integrate advanced animations and interactions into your workflow. Designed for speed, built for scale.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-on-scroll" style={{transitionDelay: '400ms'}}>
<button className="relative btn-beam-container group w-full sm:w-auto">
<div className="beam-border"></div>
<span className="relative z-10 flex items-center justify-center bg-white text-black px-8 py-3 rounded-full text-sm font-medium transition-transform active:scale-95">
                        Start building
                    </span>
</button>
<button className="flex items-center justify-center gap-2 px-8 py-3 rounded-full text-sm font-medium text-neutral-300 hover:text-white transition-colors w-full sm:w-auto">
<i className="w-4 h-4" data-lucide="play-circle"></i>
                    Watch demo
                </button>
</div>
</div>
</header>

<section className="py-20 border-y border-neutral-900 bg-black/50 relative z-10">
<div className="max-w-7xl mx-auto px-6 mb-8 text-center">
<p className="text-xs font-medium uppercase tracking-widest text-neutral-500 animate-on-scroll">Trusted by innovative teams</p>
</div>
<div className="relative w-full overflow-hidden marquee-mask">
<div className="flex marquee-content w-max">

<div className="flex items-center gap-16 px-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<span className="text-xl font-semibold tracking-tighter text-white">ACME</span>
<span className="text-xl font-semibold tracking-tighter text-white">POLARIS</span>
<span className="text-xl font-semibold tracking-tighter text-white">VERTEXT</span>
<span className="text-xl font-semibold tracking-tighter text-white">ORBITAL</span>
<span className="text-xl font-semibold tracking-tighter text-white">NEXUS</span>
<span className="text-xl font-semibold tracking-tighter text-white">STRATOS</span>
<span className="text-xl font-semibold tracking-tighter text-white">QUASAR</span>
</div>

<div className="flex items-center gap-16 px-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<span className="text-xl font-semibold tracking-tighter text-white">ACME</span>
<span className="text-xl font-semibold tracking-tighter text-white">POLARIS</span>
<span className="text-xl font-semibold tracking-tighter text-white">VERTEXT</span>
<span className="text-xl font-semibold tracking-tighter text-white">ORBITAL</span>
<span className="text-xl font-semibold tracking-tighter text-white">NEXUS</span>
<span className="text-xl font-semibold tracking-tighter text-white">STRATOS</span>
<span className="text-xl font-semibold tracking-tighter text-white">QUASAR</span>
</div>

<div className="flex items-center gap-16 px-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<span className="text-xl font-semibold tracking-tighter text-white">ACME</span>
<span className="text-xl font-semibold tracking-tighter text-white">POLARIS</span>
<span className="text-xl font-semibold tracking-tighter text-white">VERTEXT</span>
<span className="text-xl font-semibold tracking-tighter text-white">ORBITAL</span>
<span className="text-xl font-semibold tracking-tighter text-white">NEXUS</span>
<span className="text-xl font-semibold tracking-tighter text-white">STRATOS</span>
<span className="text-xl font-semibold tracking-tighter text-white">QUASAR</span>
</div>
</div>
</div>
</section>

<section className="py-32 max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="space-y-8">
<div className="animate-on-scroll">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Intelligent workflow automation</h2>
<p className="text-lg text-neutral-400">Connect your tools and automate mundane tasks with our powerful engine. No code required.</p>
</div>
<div className="space-y-4">
<div className="feature-btn p-4 rounded-xl border border-neutral-800 bg-neutral-900/30 cursor-pointer hover:bg-neutral-900 transition-colors active-feature" onclick="rotateTo(0)">
<div className="flex items-center gap-3 mb-2">
<i className="text-white w-5 h-5" data-lucide="zap"></i>
<h3 className="text-white font-medium">Real-time Sync</h3>
</div>
<p className="text-sm text-neutral-500 pl-8">Changes propagate instantly across all connected devices.</p>
</div>
<div className="feature-btn p-4 rounded-xl border border-transparent hover:bg-neutral-900 transition-colors cursor-pointer" onclick="rotateTo(1)">
<div className="flex items-center gap-3 mb-2">
<i className="text-neutral-400 w-5 h-5" data-lucide="shield"></i>
<h3 className="text-neutral-300 font-medium">Secure Encryption</h3>
</div>
<p className="text-sm text-neutral-500 pl-8">End-to-end encryption ensures your data remains private.</p>
</div>
<div className="feature-btn p-4 rounded-xl border border-transparent hover:bg-neutral-900 transition-colors cursor-pointer" onclick="rotateTo(2)">
<div className="flex items-center gap-3 mb-2">
<i className="text-neutral-400 w-5 h-5" data-lucide="bar-chart"></i>
<h3 className="text-neutral-300 font-medium">Deep Analytics</h3>
</div>
<p className="text-sm text-neutral-500 pl-8">Gain insights with detailed usage reports and trends.</p>
</div>
</div>
</div>

<div className="relative h-[400px] w-full bg-neutral-900/20 rounded-2xl border border-neutral-800 overflow-hidden animate-on-scroll">
<div className="absolute inset-0 w-full h-full p-8" id="card-stack">

<div className="rotator-card bg-gradient-to-br from-neutral-800 to-black rounded-xl border border-neutral-700 p-6 shadow-2xl flex flex-col justify-between" style={{opacity: '1', transform: 'scale(1) translateZ(0)'}}>
<div className="w-12 h-12 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400 mb-4">
<i className="w-6 h-6" data-lucide="zap"></i>
</div>
<div className="space-y-2">
<div className="h-2 w-2/3 bg-neutral-700 rounded"></div>
<div className="h-2 w-1/2 bg-neutral-700 rounded"></div>
<div className="h-2 w-3/4 bg-neutral-700 rounded"></div>
</div>
<div className="mt-8 p-4 bg-neutral-800/50 rounded-lg border border-neutral-700/50">
<div className="flex items-center justify-between text-xs text-neutral-400">
<span>Sync Status</span>
<span className="text-green-400">Active</span>
</div>
</div>
</div>

<div className="rotator-card bg-gradient-to-br from-neutral-800 to-black rounded-xl border border-neutral-700 p-6 shadow-2xl flex flex-col justify-between" style={{opacity: '0', transform: 'scale(0.9) translateZ(0)'}}>
<div className="w-12 h-12 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
<i className="w-6 h-6" data-lucide="shield"></i>
</div>
<div className="flex items-center justify-center h-32">
<i className="w-16 h-16 text-neutral-700" data-lucide="lock"></i>
</div>
<div className="mt-4 text-center text-xs text-emerald-500 bg-emerald-900/20 py-2 rounded border border-emerald-900/50">
                            256-bit Encryption Enabled
                        </div>
</div>

<div className="rotator-card bg-gradient-to-br from-neutral-800 to-black rounded-xl border border-neutral-700 p-6 shadow-2xl flex flex-col justify-between" style={{opacity: '0', transform: 'scale(0.9) translateZ(0)'}}>
<div className="w-12 h-12 rounded-lg bg-orange-500/20 flex items-center justify-center text-orange-400 mb-4">
<i className="w-6 h-6" data-lucide="bar-chart"></i>
</div>
<div className="flex items-end justify-between h-32 gap-2 px-4 pb-4">
<div className="w-full bg-neutral-700 rounded-t" style={{height: '40%'}}></div>
<div className="w-full bg-neutral-600 rounded-t" style={{height: '70%'}}></div>
<div className="w-full bg-orange-500 rounded-t" style={{height: '55%'}}></div>
<div className="w-full bg-neutral-700 rounded-t" style={{height: '80%'}}></div>
</div>
</div>
</div>

<div className="absolute bottom-4 right-4 flex gap-2 z-20">
<button className="p-2 rounded-full bg-neutral-800 text-white hover:bg-neutral-700 border border-neutral-700 transition-colors" onclick="prevCard()">
<i className="w-4 h-4" data-lucide="chevron-left"></i>
</button>
<button className="p-2 rounded-full bg-neutral-800 text-white hover:bg-neutral-700 border border-neutral-700 transition-colors" onclick="nextCard()">
<i className="w-4 h-4" data-lucide="chevron-right"></i>
</button>
</div>
</div>
</div>
</section>

<section className="py-32 bg-neutral-950">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 max-w-2xl animate-on-scroll">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Everything you need</h2>
<p className="text-neutral-400">A complete suite of tools designed to help you ship faster.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" id="flashlight-grid">


<div className="flashlight-card rounded-xl p-8 h-64 flex flex-col justify-end group cursor-default animate-on-scroll">
<div className="flashlight-border"></div>
<div className="relative z-10">
<div className="w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform duration-300">
<i className="w-5 h-5" data-lucide="cpu"></i>
</div>
<h3 className="text-lg font-medium text-white mb-2">High Performance</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Optimized for speed with edge computing capabilities.</p>
</div>
</div>

<div className="flashlight-card rounded-xl p-8 h-64 flex flex-col justify-end group cursor-default animate-on-scroll" style={{transitionDelay: '100ms'}}>
<div className="flashlight-border"></div>
<div className="relative z-10">
<div className="w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform duration-300">
<i className="w-5 h-5" data-lucide="globe"></i>
</div>
<h3 className="text-lg font-medium text-white mb-2">Global Scale</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Deploy instantly to 35+ regions worldwide.</p>
</div>
</div>

<div className="flashlight-card rounded-xl p-8 h-64 flex flex-col justify-end group cursor-default animate-on-scroll" style={{transitionDelay: '200ms'}}>
<div className="flashlight-border"></div>
<div className="relative z-10">
<div className="w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform duration-300">
<i className="w-5 h-5" data-lucide="code"></i>
</div>
<h3 className="text-lg font-medium text-white mb-2">Developer First</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Built with an API-first approach for maximum flexibility.</p>
</div>
</div>

<div className="flashlight-card rounded-xl p-8 h-64 flex flex-col justify-end group cursor-default animate-on-scroll" style={{transitionDelay: '300ms'}}>
<div className="flashlight-border"></div>
<div className="relative z-10">
<div className="w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform duration-300">
<i className="w-5 h-5" data-lucide="layers"></i>
</div>
<h3 className="text-lg font-medium text-white mb-2">Integration Ready</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Connects with your existing stack in minutes.</p>
</div>
</div>

<div className="flashlight-card rounded-xl p-8 h-64 flex flex-col justify-end group cursor-default animate-on-scroll" style={{transitionDelay: '400ms'}}>
<div className="flashlight-border"></div>
<div className="relative z-10">
<div className="w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform duration-300">
<i className="w-5 h-5" data-lucide="command"></i>
</div>
<h3 className="text-lg font-medium text-white mb-2">Command Palette</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Quick access to all functionality via keyboard.</p>
</div>
</div>

<div className="flashlight-card rounded-xl p-8 h-64 flex flex-col justify-end group cursor-default animate-on-scroll" style={{transitionDelay: '500ms'}}>
<div className="flashlight-border"></div>
<div className="relative z-10">
<div className="w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform duration-300">
<i className="w-5 h-5" data-lucide="users"></i>
</div>
<h3 className="text-lg font-medium text-white mb-2">Collaboration</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Built-in comments, reviews, and approvals.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 overflow-hidden relative">
<div className="max-w-7xl mx-auto px-6 mb-12">
<h2 className="text-3xl font-medium text-white tracking-tight text-center animate-on-scroll">Loved by developers</h2>
</div>
<div className="relative w-full marquee-mask">
<div className="flex marquee-content w-max gap-6 pb-4">

<div className="w-80 p-6 bg-neutral-900/50 border border-neutral-800 rounded-xl flex-shrink-0">
<p className="text-neutral-300 text-sm mb-4 leading-relaxed">"This platform completely changed how we deploy our frontend. The speed is unmatched."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-neutral-700 rounded-full flex items-center justify-center text-xs text-white font-medium">A</div>
<div>
<div className="text-white text-xs font-medium">Alex Rivera</div>
<div className="text-neutral-500 text-[10px]">CTO at Startup</div>
</div>
</div>
</div>
<div className="w-80 p-6 bg-neutral-900/50 border border-neutral-800 rounded-xl flex-shrink-0">
<p className="text-neutral-300 text-sm mb-4 leading-relaxed">"The attention to detail in the UI components is fantastic. It feels native."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-neutral-700 rounded-full flex items-center justify-center text-xs text-white font-medium">S</div>
<div>
<div className="text-white text-xs font-medium">Sarah Chen</div>
<div className="text-neutral-500 text-[10px]">Frontend Lead</div>
</div>
</div>
</div>
<div className="w-80 p-6 bg-neutral-900/50 border border-neutral-800 rounded-xl flex-shrink-0">
<p className="text-neutral-300 text-sm mb-4 leading-relaxed">"Integration was a breeze. We had the analytics dashboard running in 10 minutes."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-neutral-700 rounded-full flex items-center justify-center text-xs text-white font-medium">M</div>
<div>
<div className="text-white text-xs font-medium">Mike Johnson</div>
<div className="text-neutral-500 text-[10px]">DevOps Engineer</div>
</div>
</div>
</div>
<div className="w-80 p-6 bg-neutral-900/50 border border-neutral-800 rounded-xl flex-shrink-0">
<p className="text-neutral-300 text-sm mb-4 leading-relaxed">"Simply the best developer experience I've had in years. Highly recommended."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-neutral-700 rounded-full flex items-center justify-center text-xs text-white font-medium">J</div>
<div>
<div className="text-white text-xs font-medium">Jessica Wu</div>
<div className="text-neutral-500 text-[10px]">Full Stack Dev</div>
</div>
</div>
</div>
<div className="w-80 p-6 bg-neutral-900/50 border border-neutral-800 rounded-xl flex-shrink-0">
<p className="text-neutral-300 text-sm mb-4 leading-relaxed">"Documentation is clear, API is robust. It just works."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-neutral-700 rounded-full flex items-center justify-center text-xs text-white font-medium">D</div>
<div>
<div className="text-white text-xs font-medium">David Kim</div>
<div className="text-neutral-500 text-[10px]">Product Owner</div>
</div>
</div>
</div>

<div className="w-80 p-6 bg-neutral-900/50 border border-neutral-800 rounded-xl flex-shrink-0">
<p className="text-neutral-300 text-sm mb-4 leading-relaxed">"This platform completely changed how we deploy our frontend. The speed is unmatched."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-neutral-700 rounded-full flex items-center justify-center text-xs text-white font-medium">A</div>
<div>
<div className="text-white text-xs font-medium">Alex Rivera</div>
<div className="text-neutral-500 text-[10px]">CTO at Startup</div>
</div>
</div>
</div>
<div className="w-80 p-6 bg-neutral-900/50 border border-neutral-800 rounded-xl flex-shrink-0">
<p className="text-neutral-300 text-sm mb-4 leading-relaxed">"The attention to detail in the UI components is fantastic. It feels native."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-neutral-700 rounded-full flex items-center justify-center text-xs text-white font-medium">S</div>
<div>
<div className="text-white text-xs font-medium">Sarah Chen</div>
<div className="text-neutral-500 text-[10px]">Frontend Lead</div>
</div>
</div>
</div>
<div className="w-80 p-6 bg-neutral-900/50 border border-neutral-800 rounded-xl flex-shrink-0">
<p className="text-neutral-300 text-sm mb-4 leading-relaxed">"Integration was a breeze. We had the analytics dashboard running in 10 minutes."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-neutral-700 rounded-full flex items-center justify-center text-xs text-white font-medium">M</div>
<div>
<div className="text-white text-xs font-medium">Mike Johnson</div>
<div className="text-neutral-500 text-[10px]">DevOps Engineer</div>
</div>
</div>
</div>
<div className="w-80 p-6 bg-neutral-900/50 border border-neutral-800 rounded-xl flex-shrink-0">
<p className="text-neutral-300 text-sm mb-4 leading-relaxed">"Simply the best developer experience I've had in years. Highly recommended."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-neutral-700 rounded-full flex items-center justify-center text-xs text-white font-medium">J</div>
<div>
<div className="text-white text-xs font-medium">Jessica Wu</div>
<div className="text-neutral-500 text-[10px]">Full Stack Dev</div>
</div>
</div>
</div>
<div className="w-80 p-6 bg-neutral-900/50 border border-neutral-800 rounded-xl flex-shrink-0">
<p className="text-neutral-300 text-sm mb-4 leading-relaxed">"Documentation is clear, API is robust. It just works."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-neutral-700 rounded-full flex items-center justify-center text-xs text-white font-medium">D</div>
<div>
<div className="text-white text-xs font-medium">David Kim</div>
<div className="text-neutral-500 text-[10px]">Product Owner</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-neutral-900 bg-black py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-sm text-neutral-500">
                © 2024 ACME Inc. All rights reserved.
            </div>
<div className="flex gap-6 text-sm text-neutral-500">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="#">GitHub</a>
</div>
</div>
</footer>


    </>
  );
}
