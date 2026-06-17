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
obsidian: '#0a0a0a',
ash: '#171717',
gold: '#FFB84D',
amber: '#FFA500',
sandstone: '#D4AF37',
slate: '#64748b',
danger: '#DC2626',
},
fontFamily: {
sans: ['Manrope', 'sans-serif'], // Proxy for Geist
body: ['Inter', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
backgroundImage: {
'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
'mesh': 'radial-gradient(at 0% 0%, hsla(253,16%,7%,1) 0, transparent 50%), radial-gradient(at 50% 0%, hsla(225,39%,30%,1) 0, transparent 50%), radial-gradient(at 100% 0%, hsla(339,49%,30%,1) 0, transparent 50%)',
}
}
}
}



        // Icons
        lucide.createIcons();

        // 1. Preloader Logic
        window.addEventListener('load', () => {
            setTimeout(() => {
                const loader = document.getElementById('preloader');
                loader.style.opacity = '0';
                loader.style.visibility = 'hidden';
            }, 1500);
        });

        // 2. Custom Cursor Spotlight
        const body = document.querySelector('body');
        document.addEventListener('mousemove', (e) => {
            const x = e.clientX;
            const y = e.clientY;
            body.style.setProperty('--cursor-x', x + 'px');
            body.style.setProperty('--cursor-y', y + 'px');
        });

        // 3. Scroll Reveal Observer
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    
                    // Trigger counter if it's a counter element
                    if (entry.target.querySelector('.counter')) {
                        startCounters(entry.target);
                    }
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal-on-scroll').forEach(el => {
            observer.observe(el);
        });

        // 4. Scroll Progress Bar
        window.addEventListener('scroll', () => {
            const scrollPx = document.documentElement.scrollTop;
            const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = `${scrollPx / winHeightPx * 100}%`;
            document.getElementById('scroll-progress').style.width = scrolled;
        });

        // 5. 3D Tilt Effect for Cards
        document.querySelectorAll('.tilt-card').forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = ((y - centerY) / centerY) * -5; // Max 5 deg
                const rotateY = ((x - centerX) / centerX) * 5;

                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
            });
        });

        // 6. Number Counter Animation
        function startCounters(container) {
            const counters = container.querySelectorAll('.counter');
            counters.forEach(counter => {
                if(counter.innerText !== '0') return; // already ran
                
                const target = +counter.getAttribute('data-target');
                const duration = 2000; // 2 seconds
                const increment = target / (duration / 16); // 60fps
                
                let current = 0;
                const updateCounter = () => {
                    current += increment;
                    if (current < target) {
                        counter.innerText = Math.ceil(current);
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.innerText = target;
                    }
                };
                updateCounter();
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
      

<div className="fixed inset-0 z-[100] bg-obsidian flex items-center justify-center" id="preloader">
<div className="relative w-24 h-24 flex items-center justify-center">
<div className="absolute inset-0 border-t-2 border-gold rounded-full animate-spin"></div>
<i className="w-10 h-10 text-gold absolute animate-pulse" data-lucide="ghost"></i>
</div>
</div>

<div className="spotlight-overlay"></div>

<div className="fixed inset-0 z-0 pointer-events-none opacity-20" style={{backgroundImage: 'radial-gradient(#333 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>

<nav className="fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent hover:border-white/5 bg-obsidian/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<i className="w-6 h-6 text-gold group-hover:rotate-12 transition-transform duration-300" data-lucide="ghost"></i>
<span className="font-bold text-lg tracking-tight">ORYXA</span>
<div className="group-hover:opacity-100 opacity-0 transition-opacity absolute top-12 left-6 bg-ash border border-white/10 p-3 rounded-lg w-64 text-xs text-slate shadow-xl pointer-events-none">
<p>Named after the Oryx—hyper-aware, adaptable, surviving in harsh deserts through intelligence.</p>
</div>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
<a className="hover:text-white transition-colors" href="#features">Intelligence</a>
<a className="hover:text-white transition-colors" href="#customers">Customers</a>
<a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="text-sm font-medium text-white hover:text-gold transition-colors hidden sm:block" href="#">Sign In</a>
<a className="text-sm font-semibold bg-white/5 hover:bg-white/10 border border-white/10 text-white px-4 py-2 rounded-full transition-all hover:scale-105 active:scale-95 flex items-center gap-2" href="#">
                    Start Free
                    <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>

<div className="h-[2px] bg-gradient-to-r from-obsidian via-gold to-obsidian w-0 transition-all duration-100 ease-out" id="scroll-progress"></div>
</nav>

<header className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">

<div className="absolute inset-0 bg-mesh opacity-40 blur-[100px] animate-pulse"></div>
<div className="relative z-10 max-w-7xl mx-auto px-6 text-center flex flex-col items-center">
<div className="animate-blur-in flex items-center gap-2 px-3 py-1 rounded-full border border-gold/20 bg-gold/5 text-gold text-xs font-mono mb-8 opacity-0" style={{animationDelay: '0.2s'}}>
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
</span>
                v2.0 Now Available
            </div>
<h1 className="text-6xl md:text-9xl font-bold tracking-tighter mb-8 leading-[0.9]">
<span className="block animate-blur-in opacity-0" style={{animationDelay: '0.4s'}}>Your Codebase.</span>
<span className="block bg-gradient-to-r from-white via-slate-200 to-slate-500 bg-clip-text text-transparent animate-blur-in opacity-0" style={{animationDelay: '0.6s'}}>Supercharged by AI.</span>
</h1>
<p className="max-w-2xl text-lg md:text-xl text-slate-400 mb-12 animate-blur-in opacity-0 leading-relaxed font-light" style={{animationDelay: '0.8s'}}>
                The Oryx sees what others miss. Let AI hunt down bugs, auto-generate docs, and turn meeting chaos into clean action items.
            </p>
<div className="flex flex-col sm:flex-row gap-6 animate-blur-in opacity-0" style={{animationDelay: '1.0s'}}>
<button className="group relative px-8 py-4 bg-gold text-obsidian font-bold rounded-full transition-all hover:w-[240px] w-[220px] overflow-hidden hover:shadow-[0_0_40px_rgba(255,184,77,0.4)]">
<span className="relative z-10 flex items-center justify-center gap-2 group-hover:-translate-y-[2px] transition-transform">
                        Connect GitHub
                        <i className="w-4 h-4" data-lucide="github"></i>
</span>
</button>
<button className="px-8 py-4 rounded-full border border-white/10 hover:border-gold/50 hover:bg-white/5 transition-all text-white font-medium flex items-center gap-2 group">
<i className="w-5 h-5 text-gold group-hover:scale-110 transition-transform" data-lucide="play-circle"></i>
                    Watch 60s Demo
                </button>
</div>
<p className="mt-8 text-xs text-slate-500 font-mono animate-blur-in opacity-0" style={{animationDelay: '1.2s'}}>
                Used by teams at Vercel, Linear, and Replit
            </p>

<div className="absolute top-1/2 left-10 md:left-20 -translate-y-1/2 hidden lg:block opacity-20 font-mono text-xs text-gold animate-float" style={{animationDelay: '0s'}}>
                &gt; analyzing_ast...<br/>
                &gt; optimizing_query...
            </div>
<div className="absolute top-1/3 right-10 md:right-20 hidden lg:block opacity-20 font-mono text-xs text-emerald-400 animate-float" style={{animationDelay: '2s'}}>
                ✓ tests_passed<br/>
                ✓ deployed_prod
            </div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-50">
<div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-slate-500 to-transparent"></div>
</div>
</header>

<section className="border-y border-white/5 bg-ash/30 overflow-hidden py-10 relative">
<div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-obsidian to-transparent z-10"></div>
<div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-obsidian to-transparent z-10"></div>
<div className="flex w-[200%] animate-marquee hover:pause">

<div className="flex w-1/2 justify-around items-center gap-12 px-12">
<span className="text-2xl font-bold text-white/30 tracking-tight font-sans hover:text-white transition-colors cursor-default">Vercel</span>
<span className="text-2xl font-bold text-white/30 tracking-tight font-sans hover:text-white transition-colors cursor-default">Linear</span>
<span className="text-2xl font-bold text-white/30 tracking-tight font-sans hover:text-white transition-colors cursor-default">Supabase</span>
<span className="text-2xl font-bold text-white/30 tracking-tight font-sans hover:text-white transition-colors cursor-default">Scale</span>
<span className="text-2xl font-bold text-white/30 tracking-tight font-sans hover:text-white transition-colors cursor-default">Ramp</span>
<span className="text-2xl font-bold text-white/30 tracking-tight font-sans hover:text-white transition-colors cursor-default">Replit</span>
</div>
<div className="flex w-1/2 justify-around items-center gap-12 px-12">
<span className="text-2xl font-bold text-white/30 tracking-tight font-sans hover:text-white transition-colors cursor-default">Vercel</span>
<span className="text-2xl font-bold text-white/30 tracking-tight font-sans hover:text-white transition-colors cursor-default">Linear</span>
<span className="text-2xl font-bold text-white/30 tracking-tight font-sans hover:text-white transition-colors cursor-default">Supabase</span>
<span className="text-2xl font-bold text-white/30 tracking-tight font-sans hover:text-white transition-colors cursor-default">Scale</span>
<span className="text-2xl font-bold text-white/30 tracking-tight font-sans hover:text-white transition-colors cursor-default">Ramp</span>
<span className="text-2xl font-bold text-white/30 tracking-tight font-sans hover:text-white transition-colors cursor-default">Replit</span>
</div>
</div>
</section>

<section className="py-32 px-6 relative overflow-hidden">
<div className="max-w-7xl mx-auto">
<div className="grid md:grid-cols-2 gap-20 items-center">
<div className="space-y-12">
<div className="reveal-on-scroll">
<div className="flex items-center gap-4 mb-4">
<div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center border border-red-500/20 text-red-500">
<i className="w-6 h-6" data-lucide="trending-down"></i>
</div>
<span className="text-red-500 font-mono text-sm uppercase tracking-wider">The Reality</span>
</div>
<h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                            Developers lose <span className="text-red-500">20% of their day</span> to context switching.
                        </h2>
<p className="text-slate-400 text-lg leading-relaxed">
                            Meeting notes in Notion. Tickets in Jira. Code in GitHub. The knowledge gap is where bugs are born.
                        </p>
</div>
<div className="reveal-on-scroll space-y-6">
<div className="p-6 rounded-xl border border-white/5 bg-ash/50 flex items-center gap-4">
<span className="text-3xl">📉</span>
<div>
<h4 className="font-semibold text-white">Project Delays</h4>
<p className="text-sm text-slate-500">60% caused by miscommunication</p>
</div>
</div>
<div className="p-6 rounded-xl border border-white/5 bg-ash/50 flex items-center gap-4">
<span className="text-3xl">😰</span>
<div>
<h4 className="font-semibold text-white">Documentation Debt</h4>
<p className="text-sm text-slate-500">Always outdated, never read</p>
</div>
</div>
</div>
</div>

<div className="reveal-on-scroll relative h-[500px] w-full bg-ash/20 rounded-2xl border border-white/5 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-transparent"></div>

<div className="absolute top-1/4 left-10 p-4 bg-[#1e1e1e] border border-white/10 rounded shadow-2xl w-64 rotate-[-6deg]">
<div className="flex gap-2 mb-2">
<div className="w-2 h-2 rounded-full bg-red-500"></div>
<div className="w-2 h-2 rounded-full bg-yellow-500"></div>
</div>
<div className="h-2 w-3/4 bg-white/10 rounded mb-2"></div>
<div className="h-2 w-1/2 bg-white/10 rounded"></div>
</div>
<div className="absolute bottom-1/3 right-10 p-4 bg-[#1e1e1e] border border-white/10 rounded shadow-2xl w-64 rotate-[6deg] z-10">
<div className="text-xs text-red-400 font-mono mb-2">Error: undefined is not a function</div>
<div className="h-2 w-full bg-white/5 rounded mb-1"></div>
<div className="h-2 w-full bg-white/5 rounded mb-1"></div>
</div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 bg-obsidian border border-red-500/30 rounded-lg shadow-[0_0_50px_rgba(220,38,38,0.2)] w-80 z-20">
<div className="flex items-center gap-3 mb-3">
<div className="w-8 h-8 rounded bg-red-500/20 flex items-center justify-center text-red-500">!</div>
<div className="text-sm font-semibold">Production Incident</div>
</div>
<p className="text-xs text-slate-400">Where is the documentation for the Auth module update from last Tuesday?</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-ash/20" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20 reveal-on-scroll">
<span className="text-gold font-mono text-sm tracking-wider uppercase">The Oryxa Difference</span>
<h2 className="text-4xl md:text-5xl font-bold mt-4">Intelligence, not just search.</h2>
</div>
<div className="flex flex-col lg:flex-row gap-8">

<div className="lg:w-1/2 lg:h-[600px] lg:sticky lg:top-32 relative rounded-2xl border border-white/10 bg-black/40 overflow-hidden shadow-2xl reveal-on-scroll group">

<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-50"></div>

<div className="p-6 font-mono text-sm h-full flex flex-col relative z-10">
<div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500"></div>
</div>
<div className="text-slate-500 text-xs">src/core/payment.ts</div>
</div>

<div className="space-y-1 text-slate-300">
<div className="flex"><span className="w-8 text-slate-700 select-none">1</span> <span className="token-keyword">async function</span> <span className="token-function">processCharge</span>(amount) {</div>
<div className="flex"><span className="w-8 text-slate-700 select-none">2</span>   <span className="token-comment">// Oryx AI: Optimized for concurrency</span></div>
<div className="flex relative"><span className="w-8 text-slate-700 select-none">3</span>   <span className="token-keyword">const</span> result = <span className="token-keyword">await</span> stripe.charges.create({</div>

<div className="absolute top-0 left-0 w-full h-[2px] bg-gold shadow-[0_0_10px_#FFB84D] animate-scan pointer-events-none"></div>
<div className="flex"><span className="w-8 text-slate-700 select-none">4</span>     amount: amount,</div>
<div className="flex"><span className="w-8 text-slate-700 select-none">5</span>     currency: <span className="token-string">'usd'</span></div>
<div className="flex"><span className="w-8 text-slate-700 select-none">6</span>   });</div>
<div className="flex"><span className="w-8 text-slate-700 select-none">7</span>   <span className="token-keyword">return</span> result;</div>
<div className="flex"><span className="w-8 text-slate-700 select-none">8</span> }</div>
</div>

<div className="absolute bottom-6 right-6 bg-ash border border-gold/30 p-4 rounded-lg shadow-2xl max-w-xs animate-float">
<div className="flex items-start gap-3">
<div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center text-gold">
<i className="w-3 h-3" data-lucide="sparkles"></i>
</div>
<div>
<p className="text-xs text-white font-medium">Test Coverage Generated</p>
<p className="text-[10px] text-slate-400 mt-1">Created unit tests for edge cases covering negative amounts and API timeouts.</p>
</div>
</div>
</div>
</div>
</div>

<div className="lg:w-1/2 space-y-32 py-12">
<div className="reveal-on-scroll">
<div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center text-gold mb-6 border border-gold/20">
<i className="w-6 h-6" data-lucide="mic"></i>
</div>
<h3 className="text-3xl font-bold mb-4">Meeting Intelligence</h3>
<p className="text-slate-400 text-lg leading-relaxed mb-6">
                            Oryxa listens to your engineering syncs, extracts technical decisions, and links them directly to the relevant lines of code. No more "Why did we build it this way?"
                        </p>
<ul className="space-y-3 text-sm text-slate-300">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-gold" data-lucide="check"></i> Auto-generated transcripts</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-gold" data-lucide="check"></i> Context-aware code linking</li>
</ul>
</div>
<div className="reveal-on-scroll">
<div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-400 mb-6 border border-blue-500/20">
<i className="w-6 h-6" data-lucide="search"></i>
</div>
<h3 className="text-3xl font-bold mb-4">RAG-Powered Search</h3>
<p className="text-slate-400 text-lg leading-relaxed mb-6">
                            Stop grepping. Ask questions like "Where do we handle OAuth token refresh?" and get the exact function, plus an explanation of how it works.
                        </p>
<ul className="space-y-3 text-sm text-slate-300">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-blue-400" data-lucide="check"></i> Semantic understanding</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-blue-400" data-lucide="check"></i> Multi-repo support</li>
</ul>
</div>
<div className="reveal-on-scroll">
<div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center text-purple-400 mb-6 border border-purple-500/20">
<i className="w-6 h-6" data-lucide="file-code"></i>
</div>
<h3 className="text-3xl font-bold mb-4">Auto-Documentation</h3>
<p className="text-slate-400 text-lg leading-relaxed mb-6">
                            Docs that write themselves. Oryxa watches every PR and updates your internal wiki, READMEs, and API references instantly.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-obsidian border-y border-white/5 relative">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
<div className="reveal-on-scroll">
<div className="text-5xl md:text-7xl font-bold text-white mb-2 counter" data-target="60">0</div>
<div className="text-gold text-sm font-mono tracking-wider uppercase">% Less Documentation Time</div>
</div>
<div className="reveal-on-scroll" style={{transitionDelay: '100ms'}}>
<div className="text-5xl md:text-7xl font-bold text-white mb-2 flex items-center justify-center gap-2">
<span className="counter" data-target="2">0</span>s
                </div>
<div className="text-gold text-sm font-mono tracking-wider uppercase">Avg Query Response</div>
</div>
<div className="reveal-on-scroll" style={{transitionDelay: '200ms'}}>
<div className="text-5xl md:text-7xl font-bold text-white mb-2 flex items-center justify-center gap-2">
<span className="counter" data-target="10">0</span>k+
                </div>
<div className="text-gold text-sm font-mono tracking-wider uppercase">Files Indexed Per Project</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden" id="customers">

<div className="absolute inset-0 bg-gradient-radial from-ash to-obsidian opacity-80 z-0"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-16 reveal-on-scroll">
<h2 className="text-4xl font-bold mb-4">Loved by engineering teams</h2>
<p className="text-slate-400">Join the companies shipping faster with Oryxa.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="tilt-card group perspective h-full" data-tilt="">
<div className="glass-panel p-8 rounded-2xl h-full transition-all duration-300 ease-out transform group-hover:-translate-y-2 tilt-inner flex flex-col justify-between">
<div>
<div className="flex gap-1 mb-6">
<i className="w-4 h-4 text-gold fill-gold" data-lucide="star"></i>
<i className="w-4 h-4 text-gold fill-gold" data-lucide="star"></i>
<i className="w-4 h-4 text-gold fill-gold" data-lucide="star"></i>
<i className="w-4 h-4 text-gold fill-gold" data-lucide="star"></i>
<i className="w-4 h-4 text-gold fill-gold" data-lucide="star"></i>
</div>
<p className="text-lg text-slate-200 leading-relaxed mb-6">
                                "Oryxa cut our documentation time by 40%. Our junior devs can onboard in days, not weeks. It feels like magic."
                            </p>
</div>
<div className="flex items-center gap-4 pt-6 border-t border-white/5">
<div className="w-10 h-10 rounded-full bg-slate-700 overflow-hidden">
<img alt="Avatar" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" src="https://ui-avatars.com/api/?name=Sarah+Chen&amp;background=random"/>
</div>
<div>
<div className="font-semibold text-white">Sarah Chen</div>
<div className="text-xs text-slate-500">Eng Manager @ Vercel</div>
</div>
</div>
</div>
</div>

<div className="tilt-card group perspective h-full" data-tilt="">
<div className="glass-panel p-8 rounded-2xl h-full transition-all duration-300 ease-out transform group-hover:-translate-y-2 tilt-inner flex flex-col justify-between">
<div>
<div className="flex gap-1 mb-6">
<i className="w-4 h-4 text-gold fill-gold" data-lucide="star"></i>
<i className="w-4 h-4 text-gold fill-gold" data-lucide="star"></i>
<i className="w-4 h-4 text-gold fill-gold" data-lucide="star"></i>
<i className="w-4 h-4 text-gold fill-gold" data-lucide="star"></i>
<i className="w-4 h-4 text-gold fill-gold" data-lucide="star"></i>
</div>
<p className="text-lg text-slate-200 leading-relaxed mb-6">
                                "The meeting to code linking is black magic. We finally have a single source of truth for every architectural decision."
                            </p>
</div>
<div className="flex items-center gap-4 pt-6 border-t border-white/5">
<div className="w-10 h-10 rounded-full bg-slate-700 overflow-hidden">
<img alt="Avatar" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" src="https://ui-avatars.com/api/?name=Marcus+J&amp;background=random"/>
</div>
<div>
<div className="font-semibold text-white">Marcus Johnson</div>
<div className="text-xs text-slate-500">CTO @ Stealth SaaS</div>
</div>
</div>
</div>
</div>

<div className="tilt-card group perspective h-full" data-tilt="">
<div className="glass-panel p-8 rounded-2xl h-full transition-all duration-300 ease-out transform group-hover:-translate-y-2 tilt-inner flex flex-col justify-between">
<div>
<div className="flex gap-1 mb-6">
<i className="w-4 h-4 text-gold fill-gold" data-lucide="star"></i>
<i className="w-4 h-4 text-gold fill-gold" data-lucide="star"></i>
<i className="w-4 h-4 text-gold fill-gold" data-lucide="star"></i>
<i className="w-4 h-4 text-gold fill-gold" data-lucide="star"></i>
<i className="w-4 h-4 text-gold fill-gold" data-lucide="star"></i>
</div>
<p className="text-lg text-slate-200 leading-relaxed mb-6">
                                "ROI was obvious in week one. Oryxa paid for itself before the trial ended. The test generation alone saves us hours."
                            </p>
</div>
<div className="flex items-center gap-4 pt-6 border-t border-white/5">
<div className="w-10 h-10 rounded-full bg-slate-700 overflow-hidden">
<img alt="Avatar" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" src="https://ui-avatars.com/api/?name=Priya+S&amp;background=random"/>
</div>
<div>
<div className="font-semibold text-white">Priya Sharma</div>
<div className="text-xs text-slate-500">DevOps Lead @ Fintech</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative">
<div className="max-w-5xl mx-auto px-6 text-center">
<div className="relative p-12 rounded-3xl overflow-hidden border border-white/10 bg-ash/50 reveal-on-scroll">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold opacity-10 blur-[120px] rounded-full pointer-events-none"></div>
<h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tighter relative z-10">
                    Stop wrestling with tools.<br/>
<span className="text-gold">Start shipping.</span>
</h2>
<p className="text-slate-400 text-lg mb-10 relative z-10">
                    Connect your repository in 30 seconds. No credit card required.
                </p>
<div className="flex flex-col sm:flex-row justify-center items-center gap-6 relative z-10">
<button className="px-10 py-5 bg-white text-obsidian font-bold rounded-full hover:scale-105 transition-transform shadow-[0_0_40px_rgba(255,255,255,0.2)]">
                        Start Free Trial
                    </button>
<div className="flex items-center gap-4 text-sm text-slate-400">
<span className="flex items-center gap-1"><i className="w-4 h-4" data-lucide="shield-check"></i> SOC2 Ready</span>
<span className="flex items-center gap-1"><i className="w-4 h-4" data-lucide="lock"></i> Encrypted</span>
</div>
</div>

<div className="mt-12 pt-8 border-t border-white/5 flex flex-wrap justify-center gap-8 opacity-50 relative z-10">
<div className="flex items-center gap-2"><i className="w-4 h-4" data-lucide="server"></i> AWS Host</div>
<div className="flex items-center gap-2"><i className="w-4 h-4" data-lucide="github"></i> GitHub Enterprise</div>
<div className="flex items-center gap-2"><i className="w-4 h-4" data-lucide="globe"></i> SSO Support</div>
</div>
</div>
</div>
</section>
<footer className="border-t border-white/5 bg-obsidian py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-gold" data-lucide="ghost"></i>
<span className="font-bold text-sm tracking-tight">ORYXA</span>
</div>
<div className="text-slate-500 text-sm">
                © 2024 Oryxa Inc. All rights reserved. Desert Precision.
            </div>
<div className="flex gap-6">
<a className="text-slate-500 hover:text-white" href="#"><i className="w-4 h-4" data-lucide="twitter"></i></a>
<a className="text-slate-500 hover:text-white" href="#"><i className="w-4 h-4" data-lucide="github"></i></a>
<a className="text-slate-500 hover:text-white" href="#"><i className="w-4 h-4" data-lucide="linkedin"></i></a>
</div>
</div>
</footer>



    </>
  );
}
